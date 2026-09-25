import type { RequestHandler } from 'express';
import { HttpError } from '../utils/HttpError.js';

/** JSON 404 for unknown API routes. */
export const notFound: RequestHandler = (req, _res, next) => {
  next(HttpError.notFound(`No API route for ${req.method} ${req.originalUrl.split('?')[0]}`));
};
