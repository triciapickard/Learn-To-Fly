import type { RequestHandler } from 'express';
import type { z } from 'zod';
import type { DeleteAccountSchema, UpdateMeSchema } from '@shared/schemas/auth.js';
import { toUserDto, type UserDoc } from '../models/User.js';
import * as accountService from '../services/account.service.js';
import { destroySession } from '../utils/session.js';

export const updateMe: RequestHandler = async (req, res) => {
  const user = await accountService.updateMe(
    (req.user as UserDoc)._id.toString(),
    req.validated.body as z.output<typeof UpdateMeSchema>,
  );
  res.json({ user: toUserDto(user) });
};

export const exportMe: RequestHandler = async (req, res) => {
  const data = await accountService.exportUserData(req.user as UserDoc);
  const date = new Date().toISOString().slice(0, 10);
  res.set('Cache-Control', 'no-store').attachment(`learn-to-fly-export-${date}.json`).json(data);
};

export const deleteMe: RequestHandler = async (req, res) => {
  const userId = (req.user as UserDoc)._id.toString();
  const { password } = req.validated.body as z.output<typeof DeleteAccountSchema>;
  await accountService.deleteAccount(userId, password);
  await destroySession(req).catch(() => undefined);
  req.log.info({ event: 'account_deleted', userId }, 'Account deleted');
  res.clearCookie(req.app.get('sessionCookieName') as string, { path: '/' });
  res.status(204).end();
};
