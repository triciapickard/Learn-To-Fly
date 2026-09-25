import { createHash } from 'node:crypto';
import type { RequestHandler } from 'express';
import { latestReleaseId } from '../services/content.service.js';

/**
 * Public caching for content endpoints (Section 29.3): short max-age, long
 * stale-while-revalidate and an ETag derived from the latest content release, so a new
 * seed run invalidates every cached response. Replies 304 when the ETag still matches.
 */
export const contentCache: RequestHandler = async (req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  const release = (await latestReleaseId()) ?? 'none';
  const urlHash = createHash('sha1').update(req.originalUrl).digest('base64url').slice(0, 10);
  const etag = `W/"${release}-${urlHash}"`;
  res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=86400');
  res.set('ETag', etag);
  const ifNoneMatch = req.get('If-None-Match');
  if (
    ifNoneMatch &&
    ifNoneMatch
      .split(',')
      .map((t) => t.trim())
      .includes(etag)
  ) {
    return res.status(304).end();
  }
  next();
};
