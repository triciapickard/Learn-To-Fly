import type { Request, RequestHandler, Response } from 'express';
import type { z } from 'zod';
import type { ChangePasswordSchema, LoginSchema, RegisterSchema } from '@shared/schemas/auth.js';
import type { Env } from '../config/env.js';
import { REMEMBER_ME_MS } from '../config/session.js';
import { createCsrfToken, ensureCsrfSecret } from '../middleware/csrf.js';
import { toUserDto, type UserDoc } from '../models/User.js';
import { deleteSessionsForUser, getUser } from '../services/account.service.js';
import * as authService from '../services/auth.service.js';
import { hashEmail } from '../utils/audit.js';
import { destroySession, regenerateSession, saveSession } from '../utils/session.js';

/** Starts a fresh session for the user (prevents session fixation) and returns tokens. */
async function startSession(req: Request, res: Response, user: UserDoc, remember: boolean) {
  await regenerateSession(req);
  req.session.userId = user._id.toString();
  req.session.createdAt = Date.now();
  // 30-day cookie if remembered, otherwise a browser-session cookie (24 h idle on the server).
  req.session.cookie.maxAge = remember ? REMEMBER_ME_MS : undefined;
  const csrfToken = createCsrfToken(ensureCsrfSecret(req));
  await saveSession(req);
  res.set('Cache-Control', 'no-store');
  return { user: toUserDto(user), csrfToken };
}

export const getCsrf: RequestHandler = async (req, res) => {
  const csrfToken = createCsrfToken(ensureCsrfSecret(req));
  await saveSession(req);
  res.set('Cache-Control', 'no-store').json({ csrfToken });
};

export const register: RequestHandler = async (req, res) => {
  const data = req.validated.body as z.output<typeof RegisterSchema>;
  const user = await authService.register(data);
  req.log.info(
    { event: 'register', userId: user._id.toString(), emailHash: hashEmail(data.email) },
    'User registered',
  );
  res.status(201).json(await startSession(req, res, user, false));
};

export const login: RequestHandler = async (req, res) => {
  const data = req.validated.body as z.output<typeof LoginSchema>;
  try {
    const user = await authService.login(data);
    req.log.info({ event: 'login', userId: user._id.toString() }, 'Login succeeded');
    res.json(await startSession(req, res, user, data.remember));
  } catch (error) {
    req.log.info({ event: 'login_failed', emailHash: hashEmail(data.email) }, 'Login failed');
    throw error;
  }
};

export const logout: RequestHandler = async (req, res) => {
  const userId = req.session.userId;
  await destroySession(req);
  req.log.info({ event: 'logout', userId }, 'Logged out');
  res.clearCookie(req.app.get('sessionCookieName') as string, { path: '/' });
  res.status(204).end();
};

export const me: RequestHandler = async (req, res) => {
  res.set('Cache-Control', 'no-store');
  const userId = req.session?.userId;
  const user = userId ? await getUser(userId) : null;
  const expired =
    user?.passwordChangedAt && user.passwordChangedAt.getTime() > (req.session.createdAt ?? 0);
  if (!user || expired) {
    if (userId) await destroySession(req);
    return res.json({ user: null });
  }
  res.json({ user: toUserDto(user) });
};

export function changePassword(_env: Env): RequestHandler {
  return async (req, res) => {
    const userId = req.session.userId as string;
    const data = req.validated.body as z.output<typeof ChangePasswordSchema>;
    const changedAt = await authService.changePassword(userId, data);
    // Keep this session valid and revoke every other one.
    req.session.createdAt = changedAt.getTime() + 1;
    await saveSession(req);
    await deleteSessionsForUser(userId, req.sessionID);
    req.log.info({ event: 'password_changed', userId }, 'Password changed');
    res.status(204).end();
  };
}
