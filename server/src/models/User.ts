import mongoose, { Schema, type InferSchemaType, type Types } from 'mongoose';
import { COCKPIT_VARIANTS, CONTROLLERS, THEMES, type UserDto } from '@shared/schemas/auth.js';
import { toJSONPlugin } from './plugins/toJSON.js';

const LastActivitySchema = new Schema(
  {
    type: { type: String, enum: ['lesson', 'challenge'], required: true },
    slug: { type: String, required: true },
    at: { type: Date, required: true },
  },
  { _id: false },
);

/** `users` collection (plan.md Section 27.1). */
const UserSchema = new Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true, maxlength: 254 },
    emailVerifiedAt: { type: Date, default: null },
    passwordHash: { type: String, required: true, select: false },
    displayName: { type: String, required: true, trim: true, minlength: 2, maxlength: 40 },
    role: { type: String, enum: ['learner', 'admin'], default: 'learner' },
    preferences: {
      theme: { type: String, enum: THEMES, default: 'system' },
      cockpitVariant: { type: String, enum: COCKPIT_VARIANTS, default: 'g1000' },
      controller: { type: String, enum: CONTROLLERS, default: 'unknown' },
      showBonus: { type: Boolean, default: true },
    },
    lastLoginAt: { type: Date },
    lastActivity: { type: LastActivitySchema, default: undefined },
    passwordChangedAt: { type: Date },
  },
  { timestamps: true },
);

UserSchema.index({ email: 1 }, { unique: true });
UserSchema.plugin(toJSONPlugin, { hide: ['passwordHash'] });

export type UserDoc = InferSchemaType<typeof UserSchema> & { _id: Types.ObjectId };

export const User = mongoose.model('User', UserSchema);

/** Whitelists the fields sent to clients (Section 32: data exposure). */
export function toUserDto(user: UserDoc): UserDto {
  return {
    id: user._id.toString(),
    email: user.email,
    displayName: user.displayName,
    role: user.role as UserDto['role'],
    preferences: {
      theme: user.preferences?.theme ?? 'system',
      cockpitVariant: user.preferences?.cockpitVariant ?? 'g1000',
      controller: user.preferences?.controller ?? 'unknown',
      showBonus: user.preferences?.showBonus ?? true,
    } as UserDto['preferences'],
    createdAt: new Date(user.createdAt).toISOString(),
  };
}
