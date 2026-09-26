import mongoose, { Types } from 'mongoose';
import type { AttemptCreate, AttemptDto, ChallengeProgressDto } from '@shared/schemas/api.js';
import type { Criterion } from '@shared/schemas/content.js';
import { isBetterAttempt, scoreAttempt, ScoringError, type Tier } from '@shared/scoring.js';
import {
  ChallengeAttempt,
  ChallengeProgress,
  toAttemptDto,
  toProgressDto,
  type ChallengeAttemptDoc,
  type ChallengeProgressDoc,
} from '../models/ChallengeAttempt.js';
import { ChallengeModel } from '../models/content.js';
import { User } from '../models/User.js';
import { HttpError } from '../utils/HttpError.js';

interface PublishedChallenge {
  slug: string;
  version: number;
  criteria: Criterion[];
  debriefQuestions: { id: string }[];
  planningFields: { id: string }[];
}

export const RUBRIC_CHANGED =
  'This challenge was updated while you were flying. Reload the page to see the new rubric.';

/**
 * Creates an attempt (Section 24.2): checks the challenge is published and the rubric is
 * the current version, scores it with `shared/scoring.ts` (ignoring any score the client
 * sent), stores it and updates the user's best result.
 */
export async function createAttempt(
  userId: string,
  slug: string,
  input: AttemptCreate,
): Promise<{ attempt: AttemptDto; progress: ChallengeProgressDto }> {
  const challenge = await ChallengeModel.findOne(
    { slug, published: true },
    { slug: 1, version: 1, criteria: 1, debriefQuestions: 1, planningFields: 1 },
  ).lean<PublishedChallenge>();
  if (!challenge) throw HttpError.notFound('Challenge not found.');
  if (input.challengeVersion !== challenge.version) {
    throw HttpError.badRequest(RUBRIC_CHANGED, [
      { path: 'challengeVersion', message: RUBRIC_CHANGED },
    ]);
  }

  let score;
  try {
    score = scoreAttempt(challenge.criteria, input.criteriaResults);
  } catch (error) {
    if (!(error instanceof ScoringError)) throw error;
    const unknown = error.issues.some((i) => i.code === 'unknown');
    throw HttpError.badRequest(
      unknown ? RUBRIC_CHANGED : 'Some criteria are missing or invalid.',
      error.issues.map((i) => ({ path: `criteriaResults.${i.criterionId}`, message: i.message })),
    );
  }

  const questionIds = new Set(challenge.debriefQuestions.map((q) => q.id));
  const strayQuestion = input.reflections.find((r) => !questionIds.has(r.questionId));
  if (strayQuestion) {
    throw HttpError.badRequest(RUBRIC_CHANGED, [
      { path: `reflections.${strayQuestion.questionId}`, message: 'Unknown question.' },
    ]);
  }
  const fieldIds = new Set(challenge.planningFields.map((f) => f.id));
  const strayField = Object.keys(input.planning).find((id) => !fieldIds.has(id));
  if (strayField) {
    throw HttpError.badRequest(RUBRIC_CHANGED, [
      { path: `planning.${strayField}`, message: 'Unknown planning field.' },
    ]);
  }

  const uid = new Types.ObjectId(userId);
  const submittedAt = new Date();
  const created = await ChallengeAttempt.create({
    userId: uid,
    challengeSlug: slug,
    challengeVersion: challenge.version,
    startedAt: input.startedAt ? new Date(input.startedAt) : null,
    submittedAt,
    criteriaResults: input.criteriaResults,
    planning: input.planning,
    checklistTicks: input.checklistTicks.map((t) => ({ itemId: t.itemId, at: new Date(t.at) })),
    randomEventsFired: input.randomEventsFired.map((e) => ({ id: e.id, at: new Date(e.at) })),
    paused: input.paused,
    notes: input.notes,
    reflections: input.reflections.filter((r) => r.answer.length > 0),
    points: score.points,
    maxPoints: score.maxPoints,
    percentage: score.percentage,
    passed: score.passed,
    tier: score.tier,
  });
  const attempt = created.toObject() as ChallengeAttemptDoc;

  // Best attempt: tier, then percentage, then recency — the new attempt is the most recent,
  // so it wins every tie.
  const existing = await ChallengeProgress.findOne({
    userId: uid,
    challengeSlug: slug,
  }).lean<ChallengeProgressDoc>();
  const better = isBetterAttempt(
    { tier: score.tier, percentage: score.percentage, submittedAt },
    existing
      ? {
          tier: existing.bestTier as Tier,
          percentage: existing.bestPercentage,
          submittedAt: new Date(0),
        }
      : null,
  );
  const progress = await ChallengeProgress.findOneAndUpdate(
    { userId: uid, challengeSlug: slug },
    {
      $set: {
        lastAttemptAt: submittedAt,
        ...(better && {
          bestAttemptId: attempt._id,
          bestTier: score.tier,
          bestPercentage: score.percentage,
          passed: score.passed,
        }),
      },
      $inc: { attemptsCount: 1 },
    },
    { upsert: true, returnDocument: 'after' },
  ).lean<ChallengeProgressDoc>();

  await User.updateOne(
    { _id: uid },
    { $set: { lastActivity: { type: 'challenge', slug, at: submittedAt } } },
  );

  return { attempt: toAttemptDto(attempt), progress: toProgressDto(progress!) };
}

async function page(filter: Record<string, unknown>, limit: number, before?: string) {
  // `before` is a validated ISO timestamp, so the operator is safe to trust (sanitizeFilter).
  const query = before
    ? { ...filter, submittedAt: mongoose.trusted({ $lt: new Date(before) }) }
    : filter;
  const docs = await ChallengeAttempt.find(query)
    .sort({ submittedAt: -1, _id: -1 })
    .limit(limit + 1)
    .lean<ChallengeAttemptDoc[]>();
  const more = docs.length > limit;
  const attempts = docs.slice(0, limit).map(toAttemptDto);
  return { attempts, nextBefore: more ? attempts[attempts.length - 1]!.submittedAt : null };
}

/** The signed-in user's attempts at one challenge, newest first, with their best result. */
export async function listChallengeAttempts(
  userId: string,
  slug: string,
  limit: number,
  before?: string,
) {
  const uid = new Types.ObjectId(userId);
  const [result, progress] = await Promise.all([
    page({ userId: uid, challengeSlug: slug }, limit, before),
    ChallengeProgress.findOne({ userId: uid, challengeSlug: slug }).lean<ChallengeProgressDoc>(),
  ]);
  return { ...result, progress: progress ? toProgressDto(progress) : null };
}

/** All of the signed-in user's attempts, newest first. */
export function listAttempts(userId: string, limit: number, before?: string) {
  return page({ userId: new Types.ObjectId(userId) }, limit, before);
}

/** Best result per challenge, keyed by slug (the challenge part of `GET /me/progress`). */
export async function challengeProgressBySlug(
  userId: string,
): Promise<Record<string, ChallengeProgressDto>> {
  const docs = await ChallengeProgress.find({
    userId: new Types.ObjectId(userId),
  }).lean<ChallengeProgressDoc[]>();
  return Object.fromEntries(docs.map((d) => [d.challengeSlug, toProgressDto(d)]));
}
