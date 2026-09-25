import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import request from 'supertest';
import { afterAll, describe, expect, it } from 'vitest';
import { createApp } from '@server/app.js';
import { createLogger } from '@server/middleware/logger.js';
import { testEnv } from './setup.js';

const dist = mkdtempSync(path.join(tmpdir(), 'ltf-dist-'));
mkdirSync(path.join(dist, 'assets'));
writeFileSync(path.join(dist, 'index.html'), '<!doctype html><title>Learn-To-Fly</title>');
writeFileSync(path.join(dist, 'assets', 'index-abc123.js'), 'console.log(1)');
writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *');

const app = createApp({
  env: testEnv(),
  logger: createLogger({ NODE_ENV: 'test', LOG_LEVEL: 'silent' }),
  clientDistDir: dist,
  serveClient: true,
});

afterAll(() => rmSync(dist, { recursive: true, force: true }));

describe('production static serving', () => {
  it('serves hashed assets as immutable for a year', async () => {
    const res = await request(app).get('/assets/index-abc123.js');
    expect(res.status).toBe(200);
    expect(res.headers['cache-control']).toContain('max-age=31536000');
    expect(res.headers['cache-control']).toContain('immutable');
  });

  it('404s for a missing asset instead of returning index.html', async () => {
    const res = await request(app).get('/assets/missing.js');
    expect(res.status).toBe(404);
  });

  it('serves other public files', async () => {
    const res = await request(app).get('/robots.txt');
    expect(res.text).toBe('User-agent: *');
  });

  it('falls back to index.html with no-cache for client routes', async () => {
    for (const route of ['/', '/learn/m0-getting-started', '/does-not-exist']) {
      const res = await request(app).get(route);
      expect(res.status).toBe(200);
      expect(res.text).toContain('<title>Learn-To-Fly</title>');
      expect(res.headers['cache-control']).toBe('no-cache');
    }
  });

  it('keeps JSON 404s for unknown API routes', async () => {
    const res = await request(app).get('/api/v1/unknown');
    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe('NOT_FOUND');
  });
});
