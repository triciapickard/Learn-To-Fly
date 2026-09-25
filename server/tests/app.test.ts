import express from 'express';
import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { createApp } from '@server/app.js';
import { disconnectDb, connectDb } from '@server/config/db.js';
import { errorHandler } from '@server/middleware/errorHandler.js';
import { createLogger } from '@server/middleware/logger.js';
import { createRateLimiter } from '@server/middleware/rateLimit.js';
import { requestId } from '@server/middleware/requestId.js';
import { requireJson } from '@server/middleware/requireJson.js';
import { validate } from '@server/middleware/validate.js';
import { testEnv, useTestDb } from './setup.js';

const silent = createLogger({ NODE_ENV: 'test', LOG_LEVEL: 'silent' });

/** A tiny app with the shared middleware, for testing behaviour not yet on real routes. */
function harness(isProduction = false) {
  const app = express();
  app.use(requestId);
  app.use(requireJson);
  app.use(express.json({ limit: '100kb' }));
  app.post(
    '/items/:id',
    validate({
      params: z.object({ id: z.string().regex(/^\d+$/) }),
      body: z.object({ name: z.string().min(2), count: z.number().int() }),
    }),
    (req, res) => res.json({ validated: req.validated }),
  );
  app.get('/boom', () => {
    throw new Error('secret internal detail');
  });
  app.get('/boom-async', async () => {
    await Promise.resolve();
    throw new Error('async failure');
  });
  app.get('/limited', createRateLimiter({ windowMs: 60_000, limit: 2 }), (_req, res) =>
    res.json({ ok: true }),
  );
  app.use(errorHandler(silent, isProduction));
  return app;
}

describe('createApp', () => {
  const db = useTestDb();
  const app = createApp({ env: testEnv(), logger: silent });

  it('reports health with db status, version and git sha', async () => {
    const res = await request(
      createApp({ env: testEnv({ GIT_SHA: 'abc123' }), logger: silent }),
    ).get('/api/v1/health');
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ status: 'ok', db: 'ok', gitSha: 'abc123' });
    expect(typeof res.body.version).toBe('string');
    expect(res.headers['cache-control']).toBe('no-store');
  });

  it('reports 503 degraded when the database is down', async () => {
    await disconnectDb();
    const res = await request(app).get('/api/v1/health');
    expect(res.status).toBe(503);
    expect(res.body).toMatchObject({ status: 'degraded', db: 'down' });
    await connectDb(db.uri(), { attempts: 1 });
  });

  it('returns a JSON 404 for unknown API routes', async () => {
    for (const path of ['/api/v1/nope', '/api/other']) {
      const res = await request(app).get(path);
      expect(res.status).toBe(404);
      expect(res.body.error).toMatchObject({ code: 'NOT_FOUND' });
      expect(res.body.error.requestId).toBeTruthy();
    }
  });

  it('echoes a valid incoming request ID and generates one otherwise', async () => {
    const echoed = await request(app).get('/api/v1/health').set('X-Request-Id', 'abc-123');
    expect(echoed.headers['x-request-id']).toBe('abc-123');
    const generated = await request(app)
      .get('/api/v1/nope')
      .set('X-Request-Id', 'bad id with spaces');
    expect(generated.headers['x-request-id']).toMatch(/^[0-9a-f-]{36}$/);
    expect(generated.body.error.requestId).toBe(generated.headers['x-request-id']);
  });

  it('sets security headers and hides x-powered-by', async () => {
    const res = await request(app).get('/api/v1/health');
    expect(res.headers['x-powered-by']).toBeUndefined();
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['content-security-policy-report-only']).toContain("default-src 'self'");
  });

  it('rejects non-JSON bodies on mutating API routes', async () => {
    const res = await request(app)
      .post('/api/v1/health')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send('a=1');
    expect(res.status).toBe(415);
    expect(res.body.error.code).toBe('UNSUPPORTED_MEDIA_TYPE');
  });

  it('rejects bodies over 100 kb', async () => {
    const res = await request(app)
      .post('/api/v1/anything')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({ data: 'x'.repeat(110 * 1024) }));
    expect(res.status).toBe(413);
    expect(res.body.error.code).toBe('PAYLOAD_TOO_LARGE');
  });

  it('applies general API rate limits when enabled', async () => {
    const limited = createApp({ env: testEnv({ RATE_LIMIT_ENABLED: 'true' }), logger: silent });
    const res = await request(limited).get('/api/v1/auth/me');
    expect(res.headers['ratelimit-policy']).toContain('300');
    // The health check is never rate limited (Render polls it).
    const health = await request(limited).get('/api/v1/health');
    expect(health.headers['ratelimit-policy']).toBeUndefined();
  });
});

describe('shared middleware', () => {
  it('returns the validation error shape with details', async () => {
    const res = await request(harness()).post('/items/abc').send({ name: 'x', count: 1.5 });
    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
    expect(res.body.error.details).toEqual(
      expect.arrayContaining([expect.objectContaining({ path: 'id' })]),
    );
  });

  it('attaches parsed values on success', async () => {
    const res = await request(harness()).post('/items/42').send({ name: 'Cessna', count: 1 });
    expect(res.status).toBe(200);
    expect(res.body.validated).toEqual({
      params: { id: '42' },
      body: { name: 'Cessna', count: 1 },
    });
  });

  it('reports malformed JSON as a validation error', async () => {
    const res = await request(harness())
      .post('/items/1')
      .set('Content-Type', 'application/json')
      .send('{"name": ');
    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('hides error details and stack in production', async () => {
    const res = await request(harness(true)).get('/boom');
    expect(res.status).toBe(500);
    expect(res.body.error.code).toBe('INTERNAL');
    expect(JSON.stringify(res.body)).not.toContain('secret internal detail');
    expect(res.body.error.stack).toBeUndefined();
  });

  it('shows the message and stack in development', async () => {
    const res = await request(harness(false)).get('/boom');
    expect(res.body.error.message).toBe('secret internal detail');
    expect(res.body.error.stack).toContain('Error');
  });

  it('forwards rejected promises to the error handler (Express 5)', async () => {
    const res = await request(harness()).get('/boom-async');
    expect(res.status).toBe(500);
    expect(res.body.error.message).toBe('async failure');
  });

  it('rate limits with a 429 in the error shape', async () => {
    const app = harness();
    await request(app).get('/limited');
    await request(app).get('/limited');
    const res = await request(app).get('/limited');
    expect(res.status).toBe(429);
    expect(res.body.error.code).toBe('RATE_LIMITED');
  });
});
