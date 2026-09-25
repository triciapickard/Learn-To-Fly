import mongoose, { Schema, type InferSchemaType, type Types } from 'mongoose';
import type { AttemptDto, ChallengeProgressDto } from '@shared/schemas/api.js';
import { CRITERION_RESULTS, TIERS } from '@shared/scoring.js';
import { toJSONPlugin } from './plugins/toJSON.js';

/** `challengeAttempts` (plan.md Section 27.7): append-only; scores computed server-side. */
const ChallengeAttemptSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    challengeSlug: { type: String, required: true },
    challengeVersion: { type: Number, required: true },
    startedAt: { type: Date, default: null },
    submittedAt: { type: Date, required: true },
    criteriaResults: {
      type: [
        new Schema(
          {
            criterionId: { type: String, required: true },
            result: { type: String, enum: CRITERION_RESULTS, required: true },
          },
          { _id: false },
        ),
      ],
      required: true,
    },
    planning: { type: Schema.Types.Mixed, default: {} },
    checklistTicks: {
      type: [new Schema({ itemId: String, at: Date }, { _id: false })],
      default: [],
    },
    randomEventsFired: {
      type: [new Schema({ id: String, at: Date }, { _id: false })],
      default: [],
    },
    paused: { type: Boolean, default: false },
    notes: { type: String, default: '', maxlength: 2000 },
    reflections: {
      type: [
        new Schema(
          { questionId: String, answer: { type: String, maxlength: 1000 } },
          { _id: false },
        ),
      ],
      default: [],
    },
    points: { type: Number, required: true },
    maxPoints: { type: Number, required: true },
    percentage: { type: Number, required: true },
    passed: { type: Boolean, required: true },
    tier: { type: String, enum: TIERS, required: true },
  },
  { collection: 'challengeAttempts', minimize: false },
);
ChallengeAttemptSchema.index({ userId: 1, challengeSlug: 1, submittedAt: -1 });
ChallengeAttemptSchema.index({ userId: 1, submittedAt: -1 });
ChallengeAttemptSchema.plugin(toJSONPlugin, { hide: ['userId'] });

export type ChallengeAttemptDoc = InferSchemaType<typeof ChallengeAttemptSchema> & {
  _id: Types.ObjectId;
};
export const ChallengeAttempt = mongoose.model('ChallengeAttempt', ChallengeAttemptSchema);

/**
 * `challengeProgress` (Section 27.7): one per user × challenge, the denormalised best
 * attempt for fast dashboards.
 */
const ChallengeProgressSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    challengeSlug: { type: String, required: true },
    bestAttemptId: { type: Schema.Types.ObjectId, required: true },
    bestTier: { type: String, enum: TIERS, required: true },
    bestPercentage: { type: Number, required: true },
    passed: { type: Boolean, required: true },
    attemptsCount: { type: Number, required: true, default: 0 },
    lastAttemptAt: { type: Date, required: true },
  },
  { collection: 'challengeProgress' },
);
ChallengeProgressSchema.index({ userId: 1, challengeSlug: 1 }, { unique: true });
ChallengeProgressSchema.plugin(toJSONPlugin, { hide: ['userId'] });

export type ChallengeProgressDoc = InferSchemaType<typeof ChallengeProgressSchema> & {
  _id: Types.ObjectId;
};
export const ChallengeProgress = mongoose.model('ChallengeProgress', ChallengeProgressSchema);

const iso = (d: Date | null | undefined) => (d ? new Date(d).toISOString() : null);

export function toAttemptDto(doc: ChallengeAttemptDoc): AttemptDto {
  return {
    id: String(doc._id),
    challengeSlug: doc.challengeSlug,
    challengeVersion: doc.challengeVersion,
    startedAt: iso(doc.startedAt),
    submittedAt: iso(doc.submittedAt)!,
    criteriaResults: doc.criteriaResults.map(({ criterionId, result }) => ({
      criterionId,
      result: result as AttemptDto['criteriaResults'][number]['result'],
    })),
    notes: doc.notes,
    reflections: doc.reflections.map(({ questionId, answer }) => ({
      questionId: questionId ?? '',
      answer: answer ?? '',
    })),
    paused: doc.paused,
    planning: (doc.planning ?? {}) as Record<string, string | number>,
    checklistTicks: doc.checklistTicks.map(({ itemId, at }) => ({
      itemId: itemId ?? '',
      at: iso(at) ?? '',
    })),
    randomEventsFired: doc.randomEventsFired.map(({ id, at }) => ({
      id: id ?? '',
      at: iso(at) ?? '',
    })),
    points: doc.points,
    maxPoints: doc.maxPoints,
    percentage: doc.percentage,
    passed: doc.passed,
    tier: doc.tier as AttemptDto['tier'],
  };
}

export function toProgressDto(doc: ChallengeProgressDoc): ChallengeProgressDto {
  return {
    challengeSlug: doc.challengeSlug,
    bestAttemptId: String(doc.bestAttemptId),
    bestTier: doc.bestTier as ChallengeProgressDto['bestTier'],
    bestPercentage: doc.bestPercentage,
    passed: doc.passed,
    attemptsCount: doc.attemptsCount,
    lastAttemptAt: iso(doc.lastAttemptAt)!,
  };
}
