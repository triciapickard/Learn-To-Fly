import path from 'node:path';
import compression from 'compression';
import express, { type Express } from 'express';
import type { Store } from 'express-session';
import type { Logger } from 'pino';
import { API_BASE_PATH } from '@shared/constants.js';
import type { Env } from './config/env.js';
import { sessionMiddleware } from './config/session.js';
import { csrfProtection } from './middleware/csrf.js';
import { errorHandler } from './middleware/errorHandler.js';
import { createLogger, httpLogger } from './middleware/logger.js';
import { notFound } from './middleware/notFound.js';
import { readLimit, writeLimit } from './middleware/rateLimit.js';
import { requestId } from './middleware/requestId.js';
import { requireJson } from './middleware/requireJson.js';
import { securityHeaders } from './middleware/security.js';
import { staticClient } from './middleware/staticClient.js';
import { attemptRouter } from './routes/attempt.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { contentRouter } from './routes/content.routes.js';
import { healthRouter } from './routes/health.routes.js';
import { meRouter } from './routes/me.routes.js';

export interface AppOptions {
  env: Env;
  logger?: Logger;
  /** Directory of the built client. Served when `serveClient` is true. */
  clientDistDir?: string;
  /** Defaults to true in production. */
  serveClient?: boolean;
  /** Session store; defaults to MongoDB via connect-mongo. */
  sessionStore?: Store;
}

/** Builds the Express app without listening, so tests can drive it with Supertest. */
export function createApp({
  env,
  logger = createLogger(env),
  clientDistDir = path.resolve(process.cwd(), 'dist'),
  serveClient = env.NODE_ENV === 'production',
  sessionStore,
}: AppOptions): Express {
  const app = express();
  const isProduction = env.NODE_ENV === 'production';

  app.disable('x-powered-by');
  app.set('sessionCookieName', env.SESSION_NAME);
  if (env.TRUST_PROXY > 0) app.set('trust proxy', env.TRUST_PROXY);

  app.use(requestId);
  app.use(httpLogger(logger));
  app.use(securityHeaders());
  app.use(compression());

  const api = express.Router();
  api.use(healthRouter(env.GIT_SHA));
  api.use(readLimit(env.RATE_LIMIT_ENABLED));
  // Public content is mounted before the session so cacheable responses never carry a
  // Set-Cookie header.
  api.use(contentRouter());
  api.use(requireJson);
  api.use(express.json({ limit: '100kb' }));
  api.use(sessionMiddleware(env, sessionStore));
  api.use(...writeLimit(env.RATE_LIMIT_ENABLED));
  api.use(csrfProtection);
  api.use(authRouter(env));
  api.use(meRouter());
  api.use(attemptRouter());
  api.use(notFound);
  app.use(API_BASE_PATH, api);
  app.use('/api', notFound);

  if (serveClient) app.use(staticClient(clientDistDir));

  app.use(errorHandler(logger, isProduction));
  return app;
}
