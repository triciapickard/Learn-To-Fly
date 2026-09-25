import type { RequestHandler } from 'express';
import { HttpError } from '../utils/HttpError.js';

const MUTATING = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

/**
 * Rejects mutating requests that carry a non-JSON body (Section 30.5: blocks form-based
 * CSRF). Bodiless requests (e.g. logout) are allowed.
 */
export const requireJson: RequestHandler = (req, _res, next) => {
  if (!MUTATING.has(req.method)) return next();
  const hasBody =
    req.headers['transfer-encoding'] !== undefined ||
    Number(req.headers['content-length'] ?? 0) > 0;
  if (hasBody && !req.is('application/json')) {
    return next(
      new HttpError('UNSUPPORTED_MEDIA_TYPE', 'Requests must use Content-Type: application/json.'),
    );
  }
  next();
};
