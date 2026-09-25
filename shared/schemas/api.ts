import { z } from 'zod';
import { CRITERION_RESULTS, type CriterionResultValue, type Tier } from '../scoring.js';
import { SlugSchema } from './content.js';
import type {
  Aircraft,
  AirspaceProfile,
  Airport,
  ChallengeType,
  Checklist,
  Criterion,
  LessonBlock,
  Priority,
  Resource,
  Section,
} from './content.js';

/**
 * Response shapes of the public content API (plan.md Section 29.3). Personalised data
 * (progress) is never mixed in, so these responses stay cacheable.
 */

interface Seeded {
  /** True when this item is an unverified draft shown in a preview environment. */
  draft: boolean;
  version: number;
}

export interface LessonSummary extends Seeded {
  slug: string;
  code: string;
  moduleSlug: string;
  order: number;
  priority: Priority;
  title: string;
  summary: string;
  estimatedMinutes: number | null;
  objectives: string[];
}

export interface ChallengeSummary extends Seeded {
  slug: string;
  code: string;
  moduleSlug: string;
  title: string;
  priority: Priority;
  type: ChallengeType;
  difficulty: number;
  estimatedMinutes: number;
  airportIcao: string;
  lessonSlugs: string[];
}

export interface ModuleSummary {
  slug: string;
  code: string;
  order: number;
  title: string;
  summary: string;
  description: string;
  icon: string;
  estimatedMinutes: number;
  lessons: LessonSummary[];
  challenges: ChallengeSummary[];
}

export interface GlossaryTermRef {
  slug: string;
  term: string;
  definition: string;
}

export interface LessonDetail extends LessonSummary {
  blocks: LessonBlock[];
  sections: Section[];
  widgets: string[];
  module: { slug: string; code: string; title: string };
  prerequisites: LessonSummary[];
  challenges: ChallengeSummary[];
  resources: ResourceDto[];
  glossaryTerms: GlossaryTermRef[];
  checklists: ChecklistDto[];
  navigation: { previous: LessonSummary | null; next: LessonSummary | null };
  lastVerifiedAt: string | null;
  simVersion: string | null;
}

export interface ResolvedSetup {
  aircraft: { variant: string; simName: string };
  airport: { icao: string; name: string };
  startState: { id: string; label: string; description: string };
  startDetails: Record<string, string | number>;
  weather: {
    preset: string | null;
    label: string;
    summary: string;
    clouds?: string;
    surfaceWind?: string;
    windsAloft?: string;
    visibility?: string;
    temperatureC?: number;
    altimeterInHg?: number;
  };
  time: { local: string; date: string };
  load: { id: string; label: string; description: string };
  assistance: { id: string; label: string; description: string };
  aiTraffic: boolean;
  atc: boolean;
  crashDamage: boolean;
  flightPlan: { departure: string; destination: string; waypoints: string[] } | null;
}

export interface ChallengeDetail extends ChallengeSummary {
  goal: string;
  setup: ResolvedSetup;
  procedure: string[];
  criteria: Criterion[];
  randomEvents: {
    id: string;
    label: string;
    minSeconds: number;
    maxSeconds: number;
    message: string;
    chance?: number;
  }[];
  planningFields: { id: string; label: string; type: 'text' | 'number' }[];
  commonMistakes: string[];
  tips: string[];
  debriefQuestions: { id: string; prompt: string }[];
  module: { slug: string; code: string; title: string };
  lessons: LessonSummary[];
  lastVerifiedAt: string | null;
  simVersion: string | null;
}

export type AircraftDto = Aircraft & { version: number };
export type AirspaceProfileDto = AirspaceProfile & { version: number };
export type ChecklistDto = Checklist & { version: number };
export type AirportDto = Airport & { version: number };
export type ResourceDto = Resource;

export interface GlossaryTermDto extends GlossaryTermRef {
  aliases: string[];
  related: string[];
  source?: string;
  lessons: { slug: string; code: string; title: string; href: string }[];
}

export interface ModulesResponse {
  modules: ModuleSummary[];
}
export interface ModuleResponse {
  module: ModuleSummary;
}
export interface LessonResponse {
  lesson: LessonDetail;
}
export interface ChallengesResponse {
  challenges: ChallengeSummary[];
}
export interface ChallengeResponse {
  challenge: ChallengeDetail;
}
export interface AircraftResponse {
  aircraft: AircraftDto;
}
export interface AirspaceProfileResponse {
  profile: AirspaceProfileDto;
}
export interface ChecklistsResponse {
  checklists: ChecklistDto[];
}
export interface ChecklistResponse {
  checklist: ChecklistDto;
}
export interface AirportsResponse {
  airports: AirportDto[];
}
export interface AirportResponse {
  airport: AirportDto;
  challenges: ChallengeSummary[];
}
export interface GlossaryResponse {
  terms: GlossaryTermDto[];
}
export interface ResourcesResponse {
  resources: ResourceDto[];
}

// ---------------------------------------------------------------------------------------
// Challenge attempts (Sections 27.7, 29.4, 29.7)

export const NOTES_MAX = 2000;
export const REFLECTION_MAX = 1000;
const Timestamp = z.iso.datetime({ offset: true });

/**
 * Body of `POST /challenges/:slug/attempts`. Unknown keys (e.g. a client-sent `points` or
 * `tier`) are stripped: the server always computes the score itself.
 */
export const AttemptCreateSchema = z.object({
  /** The challenge version the form was built from; a mismatch means the rubric changed. */
  challengeVersion: z.number().int().positive(),
  criteriaResults: z
    .array(z.strictObject({ criterionId: SlugSchema, result: z.enum(CRITERION_RESULTS) }))
    .min(1, 'Answer the criteria before submitting.')
    .max(8),
  notes: z
    .string()
    .trim()
    .max(NOTES_MAX, `Notes can be at most ${NOTES_MAX.toLocaleString('en-US')} characters.`)
    .default(''),
  reflections: z
    .array(
      z.strictObject({
        questionId: SlugSchema,
        answer: z
          .string()
          .trim()
          .max(
            REFLECTION_MAX,
            `Answers can be at most ${REFLECTION_MAX.toLocaleString('en-US')} characters.`,
          ),
      }),
    )
    .max(10)
    .default([]),
  paused: z.boolean().default(false),
  startedAt: Timestamp.nullable().default(null),
  checklistTicks: z
    .array(z.strictObject({ itemId: z.string().min(1).max(100), at: Timestamp }))
    .max(100)
    .default([]),
  randomEventsFired: z
    .array(z.strictObject({ id: SlugSchema, at: Timestamp }))
    .max(20)
    .default([]),
  planning: z
    .record(SlugSchema, z.union([z.string().trim().max(200), z.number().finite()]))
    .refine((p) => Object.keys(p).length <= 20, 'At most 20 planning fields.')
    .default({}),
});
export type AttemptCreateInput = z.input<typeof AttemptCreateSchema>;
export type AttemptCreate = z.output<typeof AttemptCreateSchema>;

export interface AttemptDto {
  id: string;
  challengeSlug: string;
  challengeVersion: number;
  startedAt: string | null;
  submittedAt: string;
  criteriaResults: { criterionId: string; result: CriterionResultValue }[];
  notes: string;
  reflections: { questionId: string; answer: string }[];
  paused: boolean;
  planning: Record<string, string | number>;
  checklistTicks: { itemId: string; at: string }[];
  randomEventsFired: { id: string; at: string }[];
  points: number;
  maxPoints: number;
  percentage: number;
  passed: boolean;
  tier: Tier;
}

export interface ChallengeProgressDto {
  challengeSlug: string;
  bestAttemptId: string;
  bestTier: Tier;
  bestPercentage: number;
  passed: boolean;
  attemptsCount: number;
  lastAttemptAt: string;
}

export interface AttemptCreateResponse {
  attempt: AttemptDto;
  progress: ChallengeProgressDto;
}

/** Paginated attempt lists: pass `nextBefore` as `?before=` for the next page. */
export interface AttemptsResponse {
  attempts: AttemptDto[];
  nextBefore: string | null;
}

export interface ChallengeAttemptsResponse extends AttemptsResponse {
  progress: ChallengeProgressDto | null;
}

export const AttemptsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).default(20),
  before: Timestamp.optional(),
});

// ---------------------------------------------------------------------------------------
// Lesson progress and the dashboard (Sections 27.6, 29.4, 20.9)

export const LESSON_STATUSES = ['in_progress', 'completed'] as const;
export type LessonStatus = (typeof LESSON_STATUSES)[number];

export const LessonProgressUpdateSchema = z
  .strictObject({
    status: z.enum(LESSON_STATUSES).optional(),
    lastSectionId: z
      .string()
      .regex(/^[a-z0-9-]{1,100}$/, 'Section ids are lowercase kebab-case')
      .optional(),
  })
  .refine((v) => v.status !== undefined || v.lastSectionId !== undefined, {
    message: 'Send a status or a lastSectionId.',
  });
export type LessonProgressUpdate = z.infer<typeof LessonProgressUpdateSchema>;

export const QuizAnswerSchema = z.strictObject({
  questionId: SlugSchema,
  answer: z.union([z.string().max(100), z.array(z.string().max(100)).max(20), z.number().finite()]),
});
export type QuizAnswerInput = z.infer<typeof QuizAnswerSchema>;

export interface QuizAnswerResponse {
  correct: boolean;
  explanation: string;
}

export interface LessonProgressDto {
  lessonSlug: string;
  status: LessonStatus;
  lastSectionId: string | null;
  startedAt: string;
  completedAt: string | null;
}

export interface ModuleProgressDto {
  slug: string;
  lessonsCompleted: number;
  lessonsTotal: number;
  challengesPassed: number;
  challengesTotal: number;
  percent: number;
  complete: boolean;
}

/** `GET /me/progress` (Section 29.4). */
export interface ProgressResponse {
  lessons: Record<string, LessonProgressDto>;
  challenges: Record<string, ChallengeProgressDto>;
  modules: Record<string, ModuleProgressDto>;
}

export interface DashboardItem {
  type: 'lesson' | 'challenge';
  slug: string;
  code: string;
  title: string;
  href: string;
  moduleTitle: string;
  estimatedMinutes: number | null;
}

export interface DashboardResponse {
  displayName: string;
  /** Last activity if unfinished, else the next core item; null when all done. */
  continue: (DashboardItem & { started: boolean }) | null;
  course: {
    lessonsCompleted: number;
    lessonsTotal: number;
    challengesPassed: number;
    challengesTotal: number;
    percent: number;
    complete: boolean;
  };
  modules: (ModuleProgressDto & { code: string; order: number; title: string })[];
  nextUp: DashboardItem[];
  recentAttempts: {
    id: string;
    challengeSlug: string;
    code: string;
    title: string;
    tier: Tier;
    percentage: number;
    submittedAt: string;
  }[];
  stats: { totalAttempts: number; goldCount: number; estimatedSimMinutes: number };
}

export function lessonHref(lesson: { moduleSlug: string; slug: string }): string {
  return `/learn/${lesson.moduleSlug}/${lesson.slug}`;
}
