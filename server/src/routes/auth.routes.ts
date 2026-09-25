import { Router } from 'express';
import { ChangePasswordSchema, LoginSchema, RegisterSchema } from '@shared/schemas/auth.js';
import type { Env } from '../config/env.js';
import * as auth from '../controllers/auth.controller.js';
import { authLimits } from '../middleware/rateLimit.js';
import { requireAuth } from '../middleware/requireAuth.js';
import { validate } from '../middleware/validate.js';

export function authRouter(env: Env): Router {
  const router = Router();
  const limits = authLimits(env.RATE_LIMIT_ENABLED);
  router.get('/auth/csrf', auth.getCsrf);
  router.post(
    '/auth/register',
    ...limits.register,
    validate({ body: RegisterSchema }),
    auth.register,
  );
  router.post('/auth/login', ...limits.login, validate({ body: LoginSchema }), auth.login);
  router.post('/auth/logout', requireAuth, auth.logout);
  router.get('/auth/me', auth.me);
  router.post(
    '/auth/change-password',
    requireAuth,
    validate({ body: ChangePasswordSchema }),
    auth.changePassword(env),
  );
  return router;
}
