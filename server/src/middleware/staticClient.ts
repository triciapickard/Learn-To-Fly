import { existsSync } from 'node:fs';
import path from 'node:path';
import express, { type Router } from 'express';

/**
 * Serves the built React app (Section 38.3): hashed assets are immutable for a year,
 * every other non-API GET falls back to `index.html` with `no-cache`.
 */
export function staticClient(distDir: string): Router {
  const router = express.Router();
  const indexHtml = path.join(distDir, 'index.html');

  router.use(
    '/assets',
    express.static(path.join(distDir, 'assets'), {
      immutable: true,
      maxAge: '1y',
      index: false,
      fallthrough: false,
    }),
  );
  router.use(express.static(distDir, { index: false, maxAge: '1h' }));

  router.get('/{*splat}', (req, res, next) => {
    if (req.path === '/api' || req.path.startsWith('/api/')) return next();
    if (!existsSync(indexHtml)) return next();
    res.set('Cache-Control', 'no-cache').sendFile(indexHtml);
  });

  return router;
}
