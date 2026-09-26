import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import { seedFixtureContent } from './contentFixture.js';
import { buildApp } from './helpers.js';
import { useTestDb } from './setup.js';

// Step 11.14: basic attacks tried by hand, kept as regression tests. (CSRF, login operator
// injection and oversized bodies are covered in auth.test.ts and app.test.ts.)
useTestDb();
const app = buildApp();

beforeEach(async () => {
  await seedFixtureContent();
});

describe('query-string operator injection', () => {
  it('treats bracketed operators as unknown keys, not Mongo operators', async () => {
    const plain = await request(app).get('/api/v1/challenges?type=landing').expect(200);
    expect(plain.body.challenges.map((c: { slug: string }) => c.slug)).toEqual([
      'c1-1-first-challenge',
    ]);
    // With `$ne` injected, the landing challenge would disappear; it is ignored instead.
    const injected = await request(app)
      .get('/api/v1/challenges?type%5B%24ne%5D=landing')
      .expect(200);
    expect(injected.body.challenges.map((c: { slug: string }) => c.slug)).toContain(
      'c1-1-first-challenge',
    );
    await request(app).get('/api/v1/resources?topic%5B%24gt%5D=').expect(200);
  });

  it('rejects operator-looking path parameters', async () => {
    const res = await request(app).get('/api/v1/lessons/%24where').expect(400);
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
    await request(app).get('/api/v1/airports/K%7B%7D').expect(400);
  });
});
