import type { Request, RequestHandler } from 'express';
import { ipKeyGenerator, rateLimit } from 'express-rate-limit';
import { HttpError } from '../utils/HttpError.js';

export interface RateLimitOptions {
  windowMs: number;
  limit: number;
  /** Defaults to the client IP. */
  keyGenerator?: (req: Request) => string;
  /** Only count requests matching this predicate. */
  skip?: (req: Request) => boolean;
  message?: string;
  enabled?: boolean;
  /** Don't count requests that end with a status below 400. */
  skipSuccessfulRequests?: boolean;
}

export const clientIpKey = (req: Request) => ipKeyGenerator(req.ip ?? 'unknown');

/** Rate-limit factory (Section 30.7). In-memory store: fine for one instance. */
export function createRateLimiter({
  windowMs,
  limit,
  keyGenerator = clientIpKey,
  skip,
  message = 'Too many requests. Please wait a moment and try again.',
  enabled = true,
  skipSuccessfulRequests = false,
}: RateLimitOptions): RequestHandler {
  if (!enabled) return (_req, _res, next) => next();
  return rateLimit({
    windowMs,
    limit,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    keyGenerator,
    skip,
    skipSuccessfulRequests,
    handler: (_req, _res, next) => next(new HttpError('RATE_LIMITED', message)),
  });
}

const MUTATING = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

/** Public GET limit: 300/min per IP (Section 30.7). */
export function readLimit(enabled: boolean): RequestHandler {
  return createRateLimiter({
    enabled,
    windowMs: 60_000,
    limit: 300,
    skip: (req) => MUTATING.has(req.method),
  });
}

/** Mutating requests: 120/min per signed-in user (or IP). Mount after the session. */
export function writeLimit(enabled: boolean): RequestHandler[] {
  return [
    createRateLimiter({
      enabled,
      windowMs: 60_000,
      limit: 120,
      skip: (req) => !MUTATING.has(req.method),
      keyGenerator: (req) => {
        const userId = (req as Request & { session?: { userId?: string } }).session?.userId;
        return userId ? `user:${userId}` : clientIpKey(req);
      },
    }),
  ];
}

const FIFTEEN_MINUTES = 15 * 60_000;
const ONE_HOUR = 60 * 60_000;

/** Auth route limits (Section 30.7). Only failed logins count toward the login limits. */
export function authLimits(enabled: boolean) {
  const loginMessage = 'Too many login attempts. Please wait 15 minutes and try again.';
  return {
    login: [
      createRateLimiter({
        enabled,
        windowMs: FIFTEEN_MINUTES,
        limit: 10,
        message: loginMessage,
        skipSuccessfulRequests: true,
      }),
      createRateLimiter({
        enabled,
        windowMs: FIFTEEN_MINUTES,
        limit: 5,
        message: loginMessage,
        skipSuccessfulRequests: true,
        keyGenerator: (req) => {
          const email = (req.body as { email?: unknown } | undefined)?.email;
          return typeof email === 'string'
            ? `email:${email.trim().toLowerCase()}`
            : clientIpKey(req);
        },
      }),
    ],
    register: [
      createRateLimiter({
        enabled,
        windowMs: ONE_HOUR,
        limit: 5,
        message: 'Too many sign-ups from this network. Please try again later.',
      }),
    ],
  };
}
