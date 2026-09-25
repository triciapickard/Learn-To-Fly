import 'express';
import type { UserDoc } from '../models/User.js';

declare global {
  namespace Express {
    interface Request {
      /** Values parsed by the `validate` middleware. */
      /** Set by `requireAuth`. */
      user?: UserDoc;
      validated: {
        body?: unknown;
        query?: unknown;
        params?: unknown;
      };
    }
  }
}
