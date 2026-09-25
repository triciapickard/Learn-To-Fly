import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import type { Request, RequestHandler } from 'express';
import { HttpError } from '../utils/HttpError.js';

export const CSRF_HEADER = 'X-CSRF-Token';
const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

function sign(secret: string, salt: string): string {
  return createHmac('sha256', secret).update(salt).digest('base64url');
}

/** Returns the session's CSRF secret, creating one if needed. */
export function ensureCsrfSecret(req: Request): string {
  req.session.csrfSecret ??= randomBytes(32).toString('base64url');
  return req.session.csrfSecret;
}

/** A fresh token derived from the session secret: `salt.hmac(secret, salt)`. */
export function createCsrfToken(secret: string): string {
  const salt = randomBytes(16).toString('base64url');
  return `${salt}.${sign(secret, salt)}`;
}

export function verifyCsrfToken(secret: string | undefined, token: string | undefined): boolean {
  if (!secret || !token) return false;
  const [salt, signature] = token.split('.');
  if (!salt || !signature) return false;
  const expected = Buffer.from(sign(secret, salt));
  const actual = Buffer.from(signature);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

/** Synchroniser-token CSRF check on every non-GET request (Section 30.5). */
export const csrfProtection: RequestHandler = (req, _res, next) => {
  if (SAFE_METHODS.has(req.method)) return next();
  if (!verifyCsrfToken(req.session?.csrfSecret, req.get(CSRF_HEADER))) {
    return next(
      HttpError.forbidden(
        'Your session security token is missing or expired. Please reload the page and try again.',
      ),
    );
  }
  next();
};
