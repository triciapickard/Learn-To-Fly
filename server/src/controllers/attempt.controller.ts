import type { RequestHandler } from 'express';
import type { z } from 'zod';
import type { AttemptCreate, AttemptsQuerySchema } from '@shared/schemas/api.js';
import type { UserDoc } from '../models/User.js';
import * as attempts from '../services/attempt.service.js';

type Query = z.output<typeof AttemptsQuerySchema>;
const userId = (req: Parameters<RequestHandler>[0]) => (req.user as UserDoc)._id.toString();
const slug = (req: Parameters<RequestHandler>[0]) =>
  (req.validated.params as { slug: string }).slug;

export const createAttempt: RequestHandler = async (req, res) => {
  const result = await attempts.createAttempt(
    userId(req),
    slug(req),
    req.validated.body as AttemptCreate,
  );
  req.log.info(
    { event: 'attempt_created', challenge: slug(req), tier: result.attempt.tier },
    'Challenge attempt submitted',
  );
  res.status(201).json(result);
};

export const listChallengeAttempts: RequestHandler = async (req, res) => {
  const { limit, before } = req.validated.query as Query;
  res
    .set('Cache-Control', 'no-store')
    .json(await attempts.listChallengeAttempts(userId(req), slug(req), limit, before));
};

export const listAttempts: RequestHandler = async (req, res) => {
  const { limit, before } = req.validated.query as Query;
  res
    .set('Cache-Control', 'no-store')
    .json(await attempts.listAttempts(userId(req), limit, before));
};
