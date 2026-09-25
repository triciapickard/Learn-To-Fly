import 'express-session';

declare module 'express-session' {
  interface SessionData {
    userId?: string;
    /** Per-session secret used to derive CSRF tokens (Section 30.5). */
    csrfSecret?: string;
    /** When this login session started (ms). Compared with `passwordChangedAt`. */
    createdAt?: number;
  }
}
