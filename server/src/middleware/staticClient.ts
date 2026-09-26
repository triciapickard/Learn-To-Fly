import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import express, { type Router } from 'express';
import { renderHead } from '@shared/seo.js';

/**
 * Serves the built React app (Section 38.3): hashed assets are immutable for a year,
 * every other non-API GET falls back to `index.html` with `no-cache`, its <head> filled in
 * for the requested page (step 11.18). `siteUrl` makes canonical and Open Graph URLs
 * absolute; without it the request's own origin is used.
 */
export function staticClient(distDir: string, siteUrl?: string): Router {
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

  // Templates are read once: index.html (the empty shell) and, for `/`, the prerendered
  // landing page from scripts/prerender.ts (step 11.9).
  const templates = new Map<string, string | null>();
  const load = (file: string) => {
    if (!templates.has(file))
      templates.set(file, existsSync(file) ? readFileSync(file, 'utf8') : null);
    return templates.get(file) ?? null;
  };
  const landingHtml = path.join(distDir, '.prerender', 'landing.html');

  router.get('/{*splat}', (req, res, next) => {
    if (req.path === '/api' || req.path.startsWith('/api/')) return next();
    const template = (req.path === '/' && load(landingHtml)) || load(indexHtml);
    if (template === null) return next();
    const html = renderHead(template, {
      siteUrl: siteUrl ?? `${req.protocol}://${req.get('host')}`,
      pathname: req.path,
    });
    res.set('Cache-Control', 'no-cache').type('html').send(html);
  });

  return router;
}
