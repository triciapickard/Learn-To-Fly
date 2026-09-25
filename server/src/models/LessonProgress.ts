import mongoose, { Schema, type InferSchemaType, type Types } from 'mongoose';
import { LESSON_STATUSES, type LessonProgressDto } from '@shared/schemas/api.js';
import { toJSONPlugin } from './plugins/toJSON.js';

const QuizAnswerSchema = new Schema(
  {
    questionId: { type: String, required: true },
    firstAnswer: { type: Schema.Types.Mixed, required: true },
    correctFirstTry: { type: Boolean, required: true },
    lastAnswer: { type: Schema.Types.Mixed, required: true },
    answeredAt: { type: Date, required: true },
  },
  { _id: false },
);

/** `lessonProgress` (plan.md Section 27.6): one per user × lesson; absence = not started. */
const LessonProgressSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lessonSlug: { type: String, required: true },
    status: { type: String, enum: LESSON_STATUSES, required: true },
    lastSectionId: { type: String, default: null },
    quizAnswers: { type: [QuizAnswerSchema], default: [] },
    startedAt: { type: Date, required: true },
    completedAt: { type: Date, default: null },
    lessonVersionCompleted: { type: Number, default: null },
  },
  { collection: 'lessonProgress', timestamps: true, minimize: false },
);
LessonProgressSchema.index({ userId: 1, lessonSlug: 1 }, { unique: true });
LessonProgressSchema.index({ userId: 1, updatedAt: -1 });
LessonProgressSchema.plugin(toJSONPlugin, { hide: ['userId'] });

export type LessonProgressDoc = InferSchemaType<typeof LessonProgressSchema> & {
  _id: Types.ObjectId;
};
export const LessonProgress = mongoose.model('LessonProgress', LessonProgressSchema);

export function toLessonProgressDto(doc: LessonProgressDoc): LessonProgressDto {
  return {
    lessonSlug: doc.lessonSlug,
    status: doc.status as LessonProgressDto['status'],
    lastSectionId: doc.lastSectionId ?? null,
    startedAt: new Date(doc.startedAt).toISOString(),
    completedAt: doc.completedAt ? new Date(doc.completedAt).toISOString() : null,
  };
}
