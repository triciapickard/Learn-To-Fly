import type { RequestHandler } from 'express';
import type { z } from 'zod';
import type { ChallengeQuerySchema, ResourceQuerySchema } from '../routes/content.routes.js';
import * as content from '../services/content.service.js';

const param = (req: Parameters<RequestHandler>[0], name: string) =>
  (req.validated.params as Record<string, string>)[name]!;

export const listModules: RequestHandler = async (_req, res) => {
  res.json({ modules: await content.listModules() });
};
export const getModule: RequestHandler = async (req, res) => {
  res.json({ module: await content.getModule(param(req, 'slug')) });
};
export const getLesson: RequestHandler = async (req, res) => {
  res.json({ lesson: await content.getLesson(param(req, 'slug')) });
};
export const listChallenges: RequestHandler = async (req, res) => {
  const filters = req.validated.query as z.output<typeof ChallengeQuerySchema>;
  res.json({ challenges: await content.listChallenges(filters) });
};
export const getChallenge: RequestHandler = async (req, res) => {
  res.json({ challenge: await content.getChallenge(param(req, 'slug')) });
};
export const getAircraft: RequestHandler = async (req, res) => {
  res.json({ aircraft: await content.getAircraft(param(req, 'slug')) });
};
export const getAirspaceProfile: RequestHandler = async (req, res) => {
  res.json({ profile: await content.getAirspaceProfile(param(req, 'slug')) });
};
export const listChecklists: RequestHandler = async (_req, res) => {
  res.json({ checklists: await content.listChecklists() });
};
export const getChecklist: RequestHandler = async (req, res) => {
  res.json({ checklist: await content.getChecklist(param(req, 'slug')) });
};
export const listAirports: RequestHandler = async (_req, res) => {
  res.json({ airports: await content.listAirports() });
};
export const getAirport: RequestHandler = async (req, res) => {
  res.json(await content.getAirport(param(req, 'icao')));
};
export const listGlossary: RequestHandler = async (_req, res) => {
  res.json({ terms: await content.listGlossary() });
};
export const listResources: RequestHandler = async (req, res) => {
  res.json({
    resources: await content.listResources(
      req.validated.query as z.output<typeof ResourceQuerySchema>,
    ),
  });
};
