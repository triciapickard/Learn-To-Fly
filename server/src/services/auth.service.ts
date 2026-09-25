import type { z } from 'zod';
import type { ChangePasswordSchema, LoginSchema, RegisterSchema } from '@shared/schemas/auth.js';
import { User, type UserDoc } from '../models/User.js';
import { HttpError } from '../utils/HttpError.js';
import { hashPassword, isCommonPassword, verifyDummy, verifyPassword } from './password.service.js';

type RegisterData = z.output<typeof RegisterSchema>;
type LoginData = z.output<typeof LoginSchema>;
type ChangePasswordData = z.output<typeof ChangePasswordSchema>;

const INVALID_CREDENTIALS = 'Email or password is incorrect.';

function assertNotCommon(password: string, field: string) {
  if (isCommonPassword(password)) {
    throw HttpError.badRequest('Some fields are invalid.', [
      { path: field, message: 'This password is too common. Choose something harder to guess.' },
    ]);
  }
}

/** Creates a learner account (Section 30.2). */
export async function register(data: RegisterData): Promise<UserDoc> {
  assertNotCommon(data.password, 'password');
  const passwordHash = await hashPassword(data.password);
  try {
    const user = await User.create({
      email: data.email,
      displayName: data.displayName,
      passwordHash,
      lastLoginAt: new Date(),
    });
    return user.toObject() as UserDoc;
  } catch (error) {
    if ((error as { code?: number }).code === 11000) {
      throw HttpError.conflict('An account with this email may already exist. Try logging in.');
    }
    throw error;
  }
}

/** Checks credentials with constant-ish timing (Section 30.3). */
export async function login(data: LoginData): Promise<UserDoc> {
  const user = await User.findOne({ email: data.email }).select('+passwordHash').lean<UserDoc>();
  const ok = user
    ? await verifyPassword(user.passwordHash, data.password)
    : await verifyDummy(data.password);
  if (!user || !ok) throw HttpError.unauthenticated(INVALID_CREDENTIALS);
  const lastLoginAt = new Date();
  await User.updateOne({ _id: user._id }, { $set: { lastLoginAt } });
  return { ...user, lastLoginAt };
}

/** Verifies the current password and stores a new hash. Returns the change time. */
export async function changePassword(userId: string, data: ChangePasswordData): Promise<Date> {
  const user = await User.findById(userId).select('+passwordHash').lean<UserDoc>();
  if (!user) throw HttpError.unauthenticated();
  if (!(await verifyPassword(user.passwordHash, data.currentPassword))) {
    throw HttpError.badRequest('Some fields are invalid.', [
      { path: 'currentPassword', message: 'Your current password is incorrect.' },
    ]);
  }
  assertNotCommon(data.newPassword, 'newPassword');
  const passwordChangedAt = new Date();
  await User.updateOne(
    { _id: user._id },
    { $set: { passwordHash: await hashPassword(data.newPassword), passwordChangedAt } },
  );
  return passwordChangedAt;
}
