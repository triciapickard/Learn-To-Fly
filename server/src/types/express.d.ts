import 'express';

declare global {
  namespace Express {
    interface Request {
      /** Values parsed by the `validate` middleware. */
      validated: {
        body?: unknown;
        query?: unknown;
        params?: unknown;
      };
    }
  }
}
