import { Router } from 'express';
import { z } from 'zod';
import { AttemptCreateSchema, AttemptsQuerySchema } from '@shared/schemas/api.js';
import { ChallengeSlugSchema } from '@shared/schemas/content.js';
import * as c from '../controllers/attempt.controller.js';
import { requireAuth } from '../middleware/requireAuth.js';
import { validate } from '../middleware/validate.js';

const SlugParams = z.object({ slug: ChallengeSlugSchema });

/** Challenge attempts and progress (Section 29.4). Every route needs a session. */
export function attemptRouter(): Router {
  const router = Router();
  router.post(
    '/challenges/:slug/attempts',
    requireAuth,
    validate({ params: SlugParams, body: AttemptCreateSchema }),
    c.createAttempt,
  );
  router.get(
    '/me/challenges/:slug/attempts',
    requireAuth,
    validate({ params: SlugParams, query: AttemptsQuerySchema }),
    c.listChallengeAttempts,
  );
  router.get('/me/attempts', requireAuth, validate({ query: AttemptsQuerySchema }), c.listAttempts);
  router.get('/me/progress', requireAuth, c.getProgress);
  return router;
}
