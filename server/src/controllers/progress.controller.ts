import type { RequestHandler } from 'express';
import type { LessonProgressUpdate, QuizAnswerInput } from '@shared/schemas/api.js';
import type { UserDoc } from '../models/User.js';
import * as progress from '../services/progress.service.js';

const user = (req: Parameters<RequestHandler>[0]) => req.user as UserDoc;
const slug = (req: Parameters<RequestHandler>[0]) =>
  (req.validated.params as { slug: string }).slug;

export const updateLessonProgress: RequestHandler = async (req, res) => {
  res.json({
    progress: await progress.updateLessonProgress(
      user(req)._id.toString(),
      slug(req),
      req.validated.body as LessonProgressUpdate,
    ),
  });
};

export const recordQuizAnswer: RequestHandler = async (req, res) => {
  res.json(
    await progress.recordQuizAnswer(
      user(req)._id.toString(),
      slug(req),
      req.validated.body as QuizAnswerInput,
    ),
  );
};

export const getProgress: RequestHandler = async (req, res) => {
  res.set('Cache-Control', 'no-store').json(await progress.getProgress(user(req)._id.toString()));
};

export const getDashboard: RequestHandler = async (req, res) => {
  res.set('Cache-Control', 'no-store').json(await progress.getDashboard(user(req)));
};
