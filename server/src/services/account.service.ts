import mongoose, { Types } from 'mongoose';
import type { z } from 'zod';
import type { UpdateMeSchema } from '@shared/schemas/auth.js';
import { SESSIONS_COLLECTION } from '../config/session.js';
import { User, toUserDto, type UserDoc } from '../models/User.js';
import { HttpError } from '../utils/HttpError.js';
import { verifyPassword } from './password.service.js';

/**
 * Collections holding a user's learning data, keyed by `userId` (Section 27). Account
 * deletion and export cover every one of them.
 */
export const USER_DATA_COLLECTIONS = [
  'lessonProgress',
  'challengeAttempts',
  'challengeProgress',
] as const;

function collection(name: string) {
  const db = mongoose.connection.db;
  if (!db) throw new Error('Database is not connected');
  return db.collection(name);
}

export async function getUser(userId: string): Promise<UserDoc | null> {
  if (!Types.ObjectId.isValid(userId)) return null;
  return User.findById(userId).lean<UserDoc>();
}

export async function updateMe(
  userId: string,
  data: z.output<typeof UpdateMeSchema>,
): Promise<UserDoc> {
  const $set: Record<string, unknown> = {};
  if (data.displayName !== undefined) $set.displayName = data.displayName;
  for (const [key, value] of Object.entries(data.preferences ?? {})) {
    if (value !== undefined) $set[`preferences.${key}`] = value;
  }
  const user = await User.findByIdAndUpdate(
    userId,
    { $set },
    { returnDocument: 'after', runValidators: true },
  ).lean<UserDoc>();
  if (!user) throw HttpError.unauthenticated();
  return user;
}

/** All data we hold about a user, for the "export my data" button (US-21). */
export async function exportUserData(user: UserDoc) {
  const userId = new Types.ObjectId(user._id);
  const data: Record<string, unknown[]> = {};
  for (const name of USER_DATA_COLLECTIONS) {
    const docs = await collection(name).find({ userId }).project({ userId: 0 }).toArray();
    data[name] = docs.map(({ _id, ...rest }) => ({ id: String(_id), ...rest }));
  }
  return {
    exportedAt: new Date().toISOString(),
    user: {
      ...toUserDto(user),
      lastLoginAt: user.lastLoginAt?.toISOString() ?? null,
      lastActivity: user.lastActivity ?? null,
    },
    ...data,
  };
}

/** Deletes every session belonging to a user, optionally keeping one (Section 30.4). */
export async function deleteSessionsForUser(userId: string, exceptSessionId?: string) {
  const filter: Record<string, unknown> = { 'session.userId': userId };
  if (exceptSessionId) filter._id = { $ne: exceptSessionId };
  const result = await collection(SESSIONS_COLLECTION).deleteMany(filter);
  return result.deletedCount;
}

/** Hard-deletes the user, their learning data and all their sessions (Section 30.4). */
export async function deleteAccount(userId: string, password: string): Promise<void> {
  const user = await User.findById(userId).select('+passwordHash').lean<UserDoc>();
  if (!user) throw HttpError.unauthenticated();
  if (!(await verifyPassword(user.passwordHash, password))) {
    throw HttpError.badRequest('Some fields are invalid.', [
      { path: 'password', message: 'Your password is incorrect.' },
    ]);
  }
  const oid = new Types.ObjectId(userId);
  await Promise.all(
    USER_DATA_COLLECTIONS.map((name) => collection(name).deleteMany({ userId: oid })),
  );
  await deleteSessionsForUser(userId);
  await User.deleteOne({ _id: oid });
}
