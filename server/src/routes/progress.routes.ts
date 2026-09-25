import { Router } from 'express';
import { z } from 'zod';
import { LessonProgressUpdateSchema, QuizAnswerSchema } from '@shared/schemas/api.js';
import { LessonSlugSchema } from '@shared/schemas/content.js';
import * as c from '../controllers/progress.controller.js';
import { requireAuth } from '../middleware/requireAuth.js';
import { validate } from '../middleware/validate.js';

const LessonParams = z.object({ slug: LessonSlugSchema });

/** Lesson progress, quiz answers, progress overview and the dashboard (Section 29.4). */
export function progressRouter(): Router {
  const router = Router();
  router.put(
    '/me/lessons/:slug/progress',
    requireAuth,
    validate({ params: LessonParams, body: LessonProgressUpdateSchema }),
    c.updateLessonProgress,
  );
  router.post(
    '/me/lessons/:slug/quiz-answers',
    requireAuth,
    validate({ params: LessonParams, body: QuizAnswerSchema }),
    c.recordQuizAnswer,
  );
  router.get('/me/progress', requireAuth, c.getProgress);
  router.get('/me/dashboard', requireAuth, c.getDashboard);
  return router;
}
