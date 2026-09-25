import path from 'node:path';
import compression from 'compression';
import express, { type Express } from 'express';
import type { Logger } from 'pino';
import { API_BASE_PATH } from '@shared/constants.js';
import type { Env } from './config/env.js';
import { errorHandler } from './middleware/errorHandler.js';
import { createLogger, httpLogger } from './middleware/logger.js';
import { notFound } from './middleware/notFound.js';
import { generalApiLimits } from './middleware/rateLimit.js';
import { requestId } from './middleware/requestId.js';
import { requireJson } from './middleware/requireJson.js';
import { securityHeaders } from './middleware/security.js';
import { staticClient } from './middleware/staticClient.js';
import { healthRouter } from './routes/health.routes.js';

export interface AppOptions {
  env: Env;
  logger?: Logger;
  /** Directory of the built client. Served when `serveClient` is true. */
  clientDistDir?: string;
  /** Defaults to true in production. */
  serveClient?: boolean;
}

/** Builds the Express app without listening, so tests can drive it with Supertest. */
export function createApp({
  env,
  logger = createLogger(env),
  clientDistDir = path.resolve(process.cwd(), 'dist'),
  serveClient = env.NODE_ENV === 'production',
}: AppOptions): Express {
  const app = express();
  const isProduction = env.NODE_ENV === 'production';

  app.disable('x-powered-by');
  if (env.TRUST_PROXY > 0) app.set('trust proxy', env.TRUST_PROXY);

  app.use(requestId);
  app.use(httpLogger(logger));
  app.use(securityHeaders());
  app.use(compression());

  const api = express.Router();
  api.use(...generalApiLimits(env.RATE_LIMIT_ENABLED));
  api.use(requireJson);
  api.use(express.json({ limit: '100kb' }));
  api.use(healthRouter(env.GIT_SHA));
  api.use(notFound);
  app.use(API_BASE_PATH, api);
  app.use('/api', notFound);

  if (serveClient) app.use(staticClient(clientDistDir));

  app.use(errorHandler(logger, isProduction));
  return app;
}
