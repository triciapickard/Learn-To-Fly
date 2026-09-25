import type { RequestHandler } from 'express';
import type { z } from 'zod';

export interface ValidationSchemas {
  body?: z.ZodType;
  query?: z.ZodType;
  params?: z.ZodType;
}

/**
 * Validates `req.body`, `req.query` and `req.params` with Zod. Parsed values are attached
 * to `req.validated` (and replace `req.body`). A `ZodError` is handled by `errorHandler`.
 */
export function validate(schemas: ValidationSchemas): RequestHandler {
  return (req, _res, next) => {
    req.validated ??= {};
    if (schemas.params) req.validated.params = schemas.params.parse(req.params);
    if (schemas.query) req.validated.query = schemas.query.parse(req.query);
    if (schemas.body) {
      req.validated.body = schemas.body.parse(req.body ?? {});
      req.body = req.validated.body;
    }
    next();
  };
}
