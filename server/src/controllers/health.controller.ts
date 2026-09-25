import type { RequestHandler } from 'express';
import { checkDb } from '../config/db.js';
import { APP_VERSION } from '../config/version.js';

export function getHealth(gitSha: string | undefined): RequestHandler {
  return async (_req, res) => {
    const db = await checkDb();
    res
      .status(db === 'ok' ? 200 : 503)
      .set('Cache-Control', 'no-store')
      .json({
        status: db === 'ok' ? 'ok' : 'degraded',
        db,
        version: APP_VERSION,
        gitSha: gitSha ?? null,
      });
  };
}
