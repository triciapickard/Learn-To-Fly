import type { IncomingMessage } from 'node:http';
import { pino, type Logger } from 'pino';
import { pinoHttp } from 'pino-http';
import type { Env } from '../config/env.js';

/** Never log credentials, cookies or CSRF tokens (Section 34.3). */
export const REDACT_PATHS = [
  'req.headers.cookie',
  'req.headers["x-csrf-token"]',
  'res.headers["set-cookie"]',
  'req.body.password',
  'req.body.newPassword',
  'req.body.currentPassword',
];

export function createLogger(env: Pick<Env, 'NODE_ENV' | 'LOG_LEVEL'>): Logger {
  const level = env.NODE_ENV === 'test' ? 'silent' : env.LOG_LEVEL;
  if (env.NODE_ENV === 'development') {
    return pino({
      level,
      redact: REDACT_PATHS,
      transport: { target: 'pino-pretty', options: { colorize: true, ignore: 'pid,hostname' } },
    });
  }
  return pino({ level, redact: REDACT_PATHS });
}

export function httpLogger(logger: Logger) {
  return pinoHttp({
    logger,
    genReqId: (req: IncomingMessage) => req.id,
    customProps: (req: IncomingMessage & { session?: { userId?: string } }) =>
      req.session?.userId ? { userId: req.session.userId } : {},
    serializers: {
      req: (req: { id: string; method: string; url: string }) => ({
        id: req.id,
        method: req.method,
        url: req.url,
      }),
    },
  });
}
