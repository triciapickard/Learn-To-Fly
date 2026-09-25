import mongoose from 'mongoose';
import { beforeEach, describe, expect, it } from 'vitest';
import { User } from '@server/models/User.js';
import { RUBRIC_CHANGED } from '@server/services/attempt.service.js';
import { seedFixtureContent } from './contentFixture.js';
import { buildApp, newAgent, registerUser, VALID_PASSWORD, type Agent } from './helpers.js';
import { useTestDb } from './setup.js';

useTestDb();
const app = buildApp();
const SLUG = 'c1-1-first-challenge';
const URL = `/api/v1/challenges/${SLUG}/attempts`;

beforeEach(async () => {
  await seedFixtureContent();
});

type Result = 'gold' | 'silver' | 'bronze' | 'not_met' | 'met';
const body = (finalSpeed: Result, extra: Record<string, unknown> = {}) => ({
  challengeVersion: 1,
  criteriaResults: [
    { criterionId: 'stabilized', result: 'met' },
    { criterionId: 'final-speed', result: finalSpeed },
    { criterionId: 'rollout', result: finalSpeed === 'bronze' ? 'not_met' : 'met' },
  ],
  notes: 'Floated a bit.',
  reflections: [{ questionId: 'eyes', answer: 'End of the runway.' }],
  paused: false,
  ...extra,
});

const submit = (agent: Agent, payload: object) =>
  agent.post(URL).set('X-CSRF-Token', agent.csrf).send(payload);

describe('attempt routes need a session and CSRF', () => {
  it.each([
    ['post', URL],
    ['get', `/api/v1/me/challenges/${SLUG}/attempts`],
    ['get', '/api/v1/me/attempts'],
    ['get', '/api/v1/me/progress'],
  ] as const)('%s %s → 401 when signed out', async (method, path) => {
    const agent = await newAgent(app);
    const res = await agent[method](path).set('X-CSRF-Token', agent.csrf).send(body('gold'));
    expect(res.status).toBe(401);
  });

  it('rejects a POST without the CSRF header (403)', async () => {
    const agent = await registerUser(app);
    await agent.post(URL).send(body('gold')).expect(403);
  });
});

describe('POST /challenges/:slug/attempts', () => {
  it('scores on the server and ignores a tampered score', async () => {
    const agent = await registerUser(app);
    const res = await submit(
      agent,
      body('bronze', { points: 999, maxPoints: 1, percentage: 100, tier: 'gold', passed: true }),
    ).expect(201);
    // met 9 + bronze 3 + not met 0 = 12 / 21 = 57% → bronze.
    expect(res.body.attempt).toMatchObject({
      challengeSlug: SLUG,
      challengeVersion: 1,
      points: 12,
      maxPoints: 21,
      percentage: 57,
      passed: true,
      tier: 'bronze',
      notes: 'Floated a bit.',
      reflections: [{ questionId: 'eyes', answer: 'End of the runway.' }],
    });
    expect(res.body.progress).toMatchObject({
      challengeSlug: SLUG,
      bestTier: 'bronze',
      bestPercentage: 57,
      passed: true,
      attemptsCount: 1,
    });
    expect(res.body.attempt).not.toHaveProperty('userId');
    const user = await User.findOne({ email: 'sam@example.com' }).lean();
    expect(user?.lastActivity).toMatchObject({ type: 'challenge', slug: SLUG });
  });

  it('rejects an old rubric version with a clear message', async () => {
    const agent = await registerUser(app);
    const res = await submit(agent, body('gold', { challengeVersion: 7 })).expect(400);
    expect(res.body.error).toMatchObject({ code: 'VALIDATION_ERROR', message: RUBRIC_CHANGED });
  });

  it.each([
    [
      'an unknown criterion',
      [
        { criterionId: 'stabilized', result: 'met' },
        { criterionId: 'final-speed', result: 'gold' },
        { criterionId: 'centreline', result: 'gold' },
      ],
      RUBRIC_CHANGED,
    ],
    [
      'a missing required criterion',
      [{ criterionId: 'stabilized', result: 'met' }],
      'Some criteria are missing or invalid.',
    ],
    [
      'a tier on a binary criterion',
      [
        { criterionId: 'stabilized', result: 'gold' },
        { criterionId: 'final-speed', result: 'gold' },
      ],
      'Some criteria are missing or invalid.',
    ],
  ])('rejects %s (400)', async (_name, criteriaResults, message) => {
    const agent = await registerUser(app);
    const res = await submit(agent, { ...body('gold'), criteriaResults }).expect(400);
    expect(res.body.error.message).toBe(message);
  });

  it('rejects unknown reflection questions and bad input shapes', async () => {
    const agent = await registerUser(app);
    await submit(
      agent,
      body('gold', { reflections: [{ questionId: 'nope', answer: 'x' }] }),
    ).expect(400);
    await submit(agent, body('gold', { notes: 'x'.repeat(2001) })).expect(400);
    await submit(agent, { criteriaResults: [] }).expect(400);
  });

  it('404s for unknown and unpublished challenges', async () => {
    const agent = await registerUser(app);
    await agent
      .post('/api/v1/challenges/c9-9-nope/attempts')
      .set('X-CSRF-Token', agent.csrf)
      .send(body('gold'))
      .expect(404);
    await agent
      .post('/api/v1/challenges/c2-1-bonus-draft/attempts')
      .set('X-CSRF-Token', agent.csrf)
      .send(body('gold'))
      .expect(404);
  });

  it('keeps the best attempt: tier, then percentage, then most recent', async () => {
    const agent = await registerUser(app);
    await submit(agent, body('bronze')).expect(201);
    const gold = await submit(agent, body('gold')).expect(201);
    expect(gold.body.progress).toMatchObject({ bestTier: 'gold', bestPercentage: 100 });
    const silver = await submit(agent, body('silver')).expect(201);
    expect(silver.body.attempt).toMatchObject({ tier: 'silver', percentage: 86 });
    expect(silver.body.progress).toMatchObject({
      bestTier: 'gold',
      bestPercentage: 100,
      bestAttemptId: gold.body.attempt.id,
      attemptsCount: 3,
    });
    // An equal result later replaces the best (recency breaks ties).
    const again = await submit(agent, body('gold')).expect(201);
    expect(again.body.progress.bestAttemptId).toBe(again.body.attempt.id);
    // A failed attempt never replaces a passed one.
    const failed = await submit(agent, {
      ...body('gold'),
      criteriaResults: [
        { criterionId: 'stabilized', result: 'not_met' },
        { criterionId: 'final-speed', result: 'gold' },
      ],
    }).expect(201);
    expect(failed.body.attempt).toMatchObject({ passed: false, tier: 'none' });
    expect(failed.body.progress).toMatchObject({
      bestTier: 'gold',
      passed: true,
      attemptsCount: 5,
    });
  });
});

describe('attempt history', () => {
  it('only ever returns your own attempts', async () => {
    const sam = await registerUser(app);
    await submit(sam, body('gold')).expect(201);
    const alex = await registerUser(app, { email: 'alex@example.com', displayName: 'Alex' });
    const own = await alex.get(`/api/v1/me/challenges/${SLUG}/attempts`).expect(200);
    expect(own.body).toEqual({ attempts: [], nextBefore: null, progress: null });
    expect((await alex.get('/api/v1/me/attempts').expect(200)).body.attempts).toEqual([]);
    expect((await alex.get('/api/v1/me/progress').expect(200)).body).toEqual({ challenges: {} });
    const mine = await sam.get(`/api/v1/me/challenges/${SLUG}/attempts`).expect(200);
    expect(mine.body.attempts).toHaveLength(1);
    expect(mine.body.progress.bestTier).toBe('gold');
    expect(mine.headers['cache-control']).toBe('no-store');
  });

  it('paginates newest first with ?limit and ?before', async () => {
    const agent = await registerUser(app);
    for (const tier of ['bronze', 'silver', 'gold'] as const) {
      await submit(agent, body(tier)).expect(201);
      await new Promise((resolve) => setTimeout(resolve, 5));
    }
    const first = await agent.get('/api/v1/me/attempts?limit=2').expect(200);
    expect(first.body.attempts.map((a: { tier: string }) => a.tier)).toEqual(['gold', 'silver']);
    expect(first.body.nextBefore).toBe(first.body.attempts[1].submittedAt);
    const second = await agent
      .get(`/api/v1/me/attempts?limit=2&before=${encodeURIComponent(first.body.nextBefore)}`)
      .expect(200);
    expect(second.body.attempts.map((a: { tier: string }) => a.tier)).toEqual(['bronze']);
    expect(second.body.nextBefore).toBeNull();
    await agent.get('/api/v1/me/attempts?limit=500').expect(400);
    await agent.get('/api/v1/me/attempts?before=yesterday').expect(400);
  });

  it('reports the best result per challenge in /me/progress', async () => {
    const agent = await registerUser(app);
    await submit(agent, body('silver')).expect(201);
    const res = await agent.get('/api/v1/me/progress').expect(200);
    expect(res.body.challenges[SLUG]).toMatchObject({ bestTier: 'silver', attemptsCount: 1 });
  });

  it('deletes attempts and progress with the account', async () => {
    const agent = await registerUser(app);
    await submit(agent, body('gold')).expect(201);
    const exported = await agent.get('/api/v1/me/export').expect(200);
    expect(exported.body.challengeAttempts).toHaveLength(1);
    expect(exported.body.challengeProgress).toHaveLength(1);
    await agent
      .delete('/api/v1/me')
      .set('X-CSRF-Token', agent.csrf)
      .send({ confirm: 'DELETE', password: VALID_PASSWORD })
      .expect(204);
    const db = mongoose.connection.db!;
    expect(await db.collection('challengeAttempts').countDocuments()).toBe(0);
    expect(await db.collection('challengeProgress').countDocuments()).toBe(0);
  });
});
