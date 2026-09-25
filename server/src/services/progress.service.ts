import { Types } from 'mongoose';
import { continueTarget, courseProgress, remainingItems, type Done } from '@shared/progress.js';
import { checkQuizAnswer } from '@shared/quiz.js';
import type {
  DashboardItem,
  DashboardResponse,
  LessonProgressDto,
  LessonProgressUpdate,
  ModuleSummary,
  ProgressResponse,
  QuizAnswerInput,
  QuizAnswerResponse,
} from '@shared/schemas/api.js';
import { lessonHref } from '@shared/schemas/api.js';
import type { LessonBlock, QuizBlock } from '@shared/schemas/content.js';
import {
  ChallengeAttempt,
  ChallengeProgress,
  type ChallengeAttemptDoc,
  type ChallengeProgressDoc,
} from '../models/ChallengeAttempt.js';
import { LessonModel } from '../models/content.js';
import {
  LessonProgress,
  toLessonProgressDto,
  type LessonProgressDoc,
} from '../models/LessonProgress.js';
import { User, type UserDoc } from '../models/User.js';
import { HttpError } from '../utils/HttpError.js';
import { challengeProgressBySlug } from './attempt.service.js';
import * as content from './content.service.js';

interface PublishedLesson {
  slug: string;
  version: number;
  blocks: LessonBlock[];
}

async function publishedLesson(slug: string, withBlocks = false) {
  const lesson = await LessonModel.findOne(
    { slug, published: true },
    withBlocks ? { slug: 1, version: 1, blocks: 1 } : { slug: 1, version: 1 },
  ).lean<PublishedLesson>();
  if (!lesson) throw HttpError.notFound('Lesson not found.');
  return lesson;
}

const touch = (userId: Types.ObjectId, slug: string, at: Date) =>
  User.updateOne({ _id: userId }, { $set: { lastActivity: { type: 'lesson', slug, at } } });

/**
 * `PUT /me/lessons/:slug/progress`: starts the lesson if needed, saves the resume point and
 * marks it complete. Completion is idempotent and never goes back to "in progress".
 */
export async function updateLessonProgress(
  userId: string,
  slug: string,
  update: LessonProgressUpdate,
): Promise<LessonProgressDto> {
  const lesson = await publishedLesson(slug);
  const uid = new Types.ObjectId(userId);
  const now = new Date();
  const existing = await LessonProgress.findOne({
    userId: uid,
    lessonSlug: slug,
  }).lean<LessonProgressDoc>();
  const completing = update.status === 'completed' && existing?.status !== 'completed';
  const $set: Record<string, unknown> = {};
  if (update.lastSectionId !== undefined) $set.lastSectionId = update.lastSectionId;
  if (completing) {
    Object.assign($set, {
      status: 'completed',
      completedAt: now,
      lessonVersionCompleted: lesson.version,
    });
  }
  const doc = await LessonProgress.findOneAndUpdate(
    { userId: uid, lessonSlug: slug },
    {
      ...(Object.keys($set).length && { $set }),
      $setOnInsert: {
        startedAt: now,
        ...(!completing && { status: 'in_progress' }),
      },
    },
    { upsert: true, returnDocument: 'after' },
  ).lean<LessonProgressDoc>();
  await touch(uid, slug, now);
  return toLessonProgressDto(doc!);
}

/**
 * `POST /me/lessons/:slug/quiz-answers`: checks the answer against the lesson's own quiz
 * block and records the first and latest answers (Section 27.6).
 */
export async function recordQuizAnswer(
  userId: string,
  slug: string,
  { questionId, answer }: QuizAnswerInput,
): Promise<QuizAnswerResponse> {
  const lesson = await publishedLesson(slug, true);
  const quiz = lesson.blocks.find((b): b is QuizBlock => b.type === 'quiz' && b.id === questionId);
  if (!quiz) {
    throw HttpError.badRequest('This question is not in the lesson.', [
      { path: 'questionId', message: 'Unknown question.' },
    ]);
  }
  const correct = checkQuizAnswer(quiz, answer);
  const uid = new Types.ObjectId(userId);
  const now = new Date();
  // Update an existing answer; if there is none, the second write adds it.
  const updated = await LessonProgress.updateOne(
    { userId: uid, lessonSlug: slug, 'quizAnswers.questionId': questionId },
    { $set: { 'quizAnswers.$.lastAnswer': answer, 'quizAnswers.$.answeredAt': now } },
  );
  if (updated.matchedCount === 0) {
    await LessonProgress.updateOne(
      { userId: uid, lessonSlug: slug },
      {
        $push: {
          quizAnswers: {
            questionId,
            firstAnswer: answer,
            correctFirstTry: correct,
            lastAnswer: answer,
            answeredAt: now,
          },
        },
        $setOnInsert: { status: 'in_progress', startedAt: now },
      },
      { upsert: true },
    );
  }
  await touch(uid, slug, now);
  return { correct, explanation: quiz.explanation };
}

async function done(uid: Types.ObjectId) {
  const [lessons, challenges] = await Promise.all([
    LessonProgress.find({ userId: uid }).lean<LessonProgressDoc[]>(),
    ChallengeProgress.find({ userId: uid }).lean<ChallengeProgressDoc[]>(),
  ]);
  const set: Done = {
    lessons: new Set(lessons.filter((l) => l.status === 'completed').map((l) => l.lessonSlug)),
    challenges: new Set(challenges.filter((c) => c.passed).map((c) => c.challengeSlug)),
  };
  return { lessons, challenges, set };
}

/** `GET /me/progress`: every lesson, challenge and module the user has touched. */
export async function getProgress(userId: string): Promise<ProgressResponse> {
  const uid = new Types.ObjectId(userId);
  const [modules, state, challenges] = await Promise.all([
    content.listModules(),
    done(uid),
    challengeProgressBySlug(userId),
  ]);
  const course = courseProgress(modules, state.set);
  return {
    lessons: Object.fromEntries(state.lessons.map((l) => [l.lessonSlug, toLessonProgressDto(l)])),
    challenges,
    modules: Object.fromEntries(course.modules.map((m) => [m.slug, m])),
  };
}

function itemFor(
  modules: ModuleSummary[],
  ref: { type: 'lesson' | 'challenge'; slug: string },
): DashboardItem | null {
  for (const m of modules) {
    if (ref.type === 'lesson') {
      const l = m.lessons.find((x) => x.slug === ref.slug);
      if (l) {
        return {
          type: 'lesson' as const,
          slug: l.slug,
          code: l.code,
          title: l.title,
          href: lessonHref(l),
          moduleTitle: m.title,
          estimatedMinutes: l.estimatedMinutes ?? null,
        };
      }
    } else {
      const c = m.challenges.find((x) => x.slug === ref.slug);
      if (c) {
        return {
          type: 'challenge' as const,
          slug: c.slug,
          code: c.code,
          title: c.title,
          href: `/challenges/${c.slug}`,
          moduleTitle: m.title,
          estimatedMinutes: c.estimatedMinutes,
        };
      }
    }
  }
  return null;
}

/** `GET /me/dashboard`: everything the dashboard shows, in one call (Section 20.9). */
export async function getDashboard(user: UserDoc): Promise<DashboardResponse> {
  const uid = new Types.ObjectId(user._id);
  const [modules, state, recent, counts] = await Promise.all([
    content.listModules(),
    done(uid),
    ChallengeAttempt.find({ userId: uid })
      .sort({ submittedAt: -1 })
      .limit(5)
      .lean<ChallengeAttemptDoc[]>(),
    ChallengeAttempt.aggregate<{ _id: string; attempts: number; gold: number }>([
      { $match: { userId: uid } },
      {
        $group: {
          _id: '$challengeSlug',
          attempts: { $sum: 1 },
          gold: { $sum: { $cond: [{ $eq: ['$tier', 'gold'] }, 1, 0] } },
        },
      },
    ]),
  ]);
  const course = courseProgress(modules, state.set);
  const challenges = modules.flatMap((m) => m.challenges);
  const minutes = new Map(challenges.map((c) => [c.slug, c.estimatedMinutes]));
  const target = continueTarget(modules, state.set, user.lastActivity ?? null);
  const current = target && itemFor(modules, target);
  const started =
    !!target &&
    (target.type === 'lesson'
      ? state.lessons.some((l) => l.lessonSlug === target.slug)
      : state.challenges.some((c) => c.challengeSlug === target.slug));

  return {
    displayName: user.displayName,
    continue: current ? { ...current, started } : null,
    course: {
      lessonsCompleted: course.lessonsCompleted,
      lessonsTotal: course.lessonsTotal,
      challengesPassed: course.challengesPassed,
      challengesTotal: course.challengesTotal,
      percent: course.percent,
      complete: course.complete,
    },
    modules: course.modules.map((p) => {
      const m = modules.find((x) => x.slug === p.slug)!;
      return { ...p, code: m.code, order: m.order, title: m.title };
    }),
    nextUp: remainingItems(modules, state.set)
      .filter((r) => !(target && r.slug === target.slug))
      .slice(0, 3)
      .map((r) => itemFor(modules, r))
      .filter((i): i is DashboardItem => i !== null),
    recentAttempts: recent.map((a) => {
      const c = challenges.find((x) => x.slug === a.challengeSlug);
      return {
        id: String(a._id),
        challengeSlug: a.challengeSlug,
        code: c?.code ?? '',
        title: c?.title ?? a.challengeSlug,
        tier: a.tier as DashboardResponse['recentAttempts'][number]['tier'],
        percentage: a.percentage,
        submittedAt: new Date(a.submittedAt).toISOString(),
      };
    }),
    stats: {
      totalAttempts: counts.reduce((n, c) => n + c.attempts, 0),
      goldCount: counts.reduce((n, c) => n + c.gold, 0),
      estimatedSimMinutes: counts.reduce((n, c) => n + c.attempts * (minutes.get(c._id) ?? 0), 0),
    },
  };
}
