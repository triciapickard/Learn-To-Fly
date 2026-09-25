import type { RequestHandler } from 'express';
import { User, type UserDoc } from '../models/User.js';
import { HttpError } from '../utils/HttpError.js';

/**
 * 401 unless signed in; loads the user onto `req.user`. Sessions created before the last
 * password change are destroyed (Section 30.6).
 */
export const requireAuth: RequestHandler = async (req, _res, next) => {
  const userId = req.session?.userId;
  if (!userId) return next(HttpError.unauthenticated());
  const user = await User.findById(userId).lean<UserDoc>();
  const sessionStarted = req.session.createdAt ?? 0;
  if (!user || (user.passwordChangedAt && user.passwordChangedAt.getTime() > sessionStarted)) {
    await new Promise<void>((resolve) => req.session.destroy(() => resolve()));
    return next(HttpError.unauthenticated('Your session has ended. Please log in again.'));
  }
  req.user = user;
  next();
};

/** 403 unless the signed-in user has the role (use after `requireAuth`). */
export function requireRole(role: 'admin'): RequestHandler {
  return (req, _res, next) => {
    if (req.user?.role !== role) return next(HttpError.forbidden());
    next();
  };
}
