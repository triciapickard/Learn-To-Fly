import { Router } from 'express';
import { DeleteAccountSchema, UpdateMeSchema } from '@shared/schemas/auth.js';
import * as me from '../controllers/me.controller.js';
import { requireAuth } from '../middleware/requireAuth.js';
import { validate } from '../middleware/validate.js';

export function meRouter(): Router {
  const router = Router();
  router.patch('/me', requireAuth, validate({ body: UpdateMeSchema }), me.updateMe);
  router.get('/me/export', requireAuth, me.exportMe);
  router.delete('/me', requireAuth, validate({ body: DeleteAccountSchema }), me.deleteMe);
  return router;
}
