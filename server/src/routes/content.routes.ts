import { Router } from 'express';
import { z } from 'zod';
import { CHALLENGE_TYPES, PrioritySchema, RESOURCE_TYPES } from '@shared/schemas/content.js';
import * as c from '../controllers/content.controller.js';
import { contentCache } from '../middleware/contentCache.js';
import { validate } from '../middleware/validate.js';

const slug = z.string().regex(/^[a-z0-9-]{1,100}$/, 'Invalid slug');
const SlugParams = z.object({ slug });
const IcaoParams = z.object({
  icao: z.string().regex(/^[A-Za-z0-9]{3,4}$/, 'Invalid airport code'),
});

export const ChallengeQuerySchema = z.object({
  module: slug.optional(),
  type: z.enum(CHALLENGE_TYPES).optional(),
  difficulty: z.coerce.number().int().min(1).max(5).optional(),
  priority: PrioritySchema.optional(),
});

export const ResourceQuerySchema = z.object({
  topic: z
    .string()
    .regex(/^[a-z0-9-]{1,40}$/)
    .optional(),
  type: z.enum(RESOURCE_TYPES).optional(),
});

/** Public, cacheable content endpoints (Section 29.3). */
export function contentRouter(): Router {
  const router = Router();
  router.use(
    [
      '/modules',
      '/lessons',
      '/challenges',
      '/aircraft',
      '/checklists',
      '/airports',
      '/glossary',
      '/resources',
    ],
    contentCache,
  );
  router.get('/modules', c.listModules);
  router.get('/modules/:slug', validate({ params: SlugParams }), c.getModule);
  router.get('/lessons/:slug', validate({ params: SlugParams }), c.getLesson);
  router.get('/challenges', validate({ query: ChallengeQuerySchema }), c.listChallenges);
  router.get('/challenges/:slug', validate({ params: SlugParams }), c.getChallenge);
  router.get('/aircraft/:slug', validate({ params: SlugParams }), c.getAircraft);
  router.get('/airspace-profiles/:slug', validate({ params: SlugParams }), c.getAirspaceProfile);
  router.get('/checklists', c.listChecklists);
  router.get('/checklists/:slug', validate({ params: SlugParams }), c.getChecklist);
  router.get('/airports', c.listAirports);
  router.get('/airports/:icao', validate({ params: IcaoParams }), c.getAirport);
  router.get('/glossary', c.listGlossary);
  router.get('/resources', validate({ query: ResourceQuerySchema }), c.listResources);
  return router;
}
