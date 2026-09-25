import mongoose from 'mongoose';
import { beforeEach, describe, expect, it } from 'vitest';
import { User } from '@server/models/User.js';
import { seedFixtureContent } from './contentFixture.js';
import { buildApp, newAgent, registerUser, VALID_PASSWORD, type Agent } from './helpers.js';
import { useTestDb } from './setup.js';

useTestDb();
const app = buildApp();
const L1 = 'l1-1-first-lesson';
const L2 = 'l1-2-second-lesson';
const C1 = 'c1-1-first-challenge';

beforeEach(async () => {
  await seedFixtureContent();
});

const put = (agent: Agent, slug: string, body: object) =>
  agent.put(`/api/v1/me/lessons/${slug}/progress`).set('X-CSRF-Token', agent.csrf).send(body);
const answer = (agent: Agent, body: object) =>
  agent.post(`/api/v1/me/lessons/${L1}/quiz-answers`).set('X-CSRF-Token', agent.csrf).send(body);
const passC1 = (agent: Agent) =>
  agent
    .post(`/api/v1/challenges/${C1}/attempts`)
    .set('X-CSRF-Token', agent.csrf)
    .send({
      challengeVersion: 1,
      criteriaResults: [
        { criterionId: 'stabilized', result: 'met' },
        { criterionId: 'final-speed', result: 'gold' },
      ],
    })
    .expect(201);

describe('progress routes need a session', () => {
  it.each([
    ['put', `/api/v1/me/lessons/${L1}/progress`],
    ['post', `/api/v1/me/lessons/${L1}/quiz-answers`],
    ['get', '/api/v1/me/progress'],
    ['get', '/api/v1/me/dashboard'],
  ] as const)('%s %s → 401', async (method, path) => {
    const agent = await newAgent(app);
    await agent[method](path)
      .set('X-CSRF-Token', agent.csrf)
      .send({ status: 'completed' })
      .expect(401);
  });
});

describe('PUT /me/lessons/:slug/progress', () => {
  it('starts a lesson, saves the resume point and records last activity', async () => {
    const agent = await registerUser(app);
    const res = await put(agent, L1, { lastSectionId: 'getting-started' }).expect(200);
    expect(res.body.progress).toMatchObject({
      lessonSlug: L1,
      status: 'in_progress',
      lastSectionId: 'getting-started',
      completedAt: null,
    });
    const user = await User.findOne({ email: 'sam@example.com' }).lean();
    expect(user?.lastActivity).toMatchObject({ type: 'lesson', slug: L1 });
  });

  it('completes idempotently and never goes back to in progress', async () => {
    const agent = await registerUser(app);
    const first = await put(agent, L1, { status: 'completed' }).expect(200);
    expect(first.body.progress.status).toBe('completed');
    const completedAt = first.body.progress.completedAt as string;
    expect(completedAt).toBeTruthy();
    const again = await put(agent, L1, { status: 'completed' }).expect(200);
    expect(again.body.progress.completedAt).toBe(completedAt);
    const revisit = await put(agent, L1, { status: 'in_progress', lastSectionId: 'intro' }).expect(
      200,
    );
    expect(revisit.body.progress).toMatchObject({ status: 'completed', lastSectionId: 'intro' });
  });

  it('rejects bad input and unknown or draft lessons', async () => {
    const agent = await registerUser(app);
    await put(agent, L1, {}).expect(400);
    await put(agent, L1, { lastSectionId: 'Not A Section!' }).expect(400);
    await put(agent, L1, { status: 'done' }).expect(400);
    await put(agent, 'l9-9-nope', { status: 'completed' }).expect(404);
    await put(agent, 'l2-1-draft-lesson', { status: 'completed' }).expect(404);
  });
});

describe('POST /me/lessons/:slug/quiz-answers', () => {
  it('checks the answer on the server and keeps the first answer', async () => {
    const agent = await registerUser(app);
    const wrong = await answer(agent, { questionId: `${L1}-q1`, answer: 'b' }).expect(200);
    expect(wrong.body).toEqual({
      correct: false,
      explanation: 'Vy is the best rate of climb speed.',
    });
    const right = await answer(agent, { questionId: `${L1}-q1`, answer: 'a' }).expect(200);
    expect(right.body.correct).toBe(true);
    const doc = await mongoose.connection.db!.collection('lessonProgress').findOne({});
    expect(doc).toMatchObject({ status: 'in_progress' });
    expect(doc?.quizAnswers).toEqual([
      expect.objectContaining({
        questionId: `${L1}-q1`,
        firstAnswer: 'b',
        correctFirstTry: false,
        lastAnswer: 'a',
      }),
    ]);
  });

  it('rejects questions that are not in the lesson', async () => {
    const agent = await registerUser(app);
    await answer(agent, { questionId: 'made-up', answer: 'a' }).expect(400);
    await answer(agent, { questionId: `${L1}-q1`, answer: { a: 1 } }).expect(400);
  });
});

describe('GET /me/progress', () => {
  it('reports lessons, challenges and module completion', async () => {
    const agent = await registerUser(app);
    await put(agent, L1, { status: 'completed' }).expect(200);
    let res = await agent.get('/api/v1/me/progress').expect(200);
    expect(res.body.lessons[L1].status).toBe('completed');
    expect(res.body.modules['m1-basics']).toMatchObject({ percent: 33, complete: false });
    // The draft-only module has nothing to complete yet.
    expect(res.body.modules['m2-next']).toMatchObject({ lessonsTotal: 0, complete: false });

    await put(agent, L2, { status: 'completed' }).expect(200);
    await passC1(agent);
    res = await agent.get('/api/v1/me/progress').expect(200);
    expect(res.body.modules['m1-basics']).toMatchObject({ percent: 100, complete: true });
    expect(res.body.challenges[C1]).toMatchObject({ bestTier: 'silver', passed: true });
  });
});

describe('GET /me/dashboard', () => {
  it('starts a new learner at the first lesson', async () => {
    const agent = await registerUser(app);
    const res = await agent.get('/api/v1/me/dashboard').expect(200);
    expect(res.body).toMatchObject({
      displayName: 'Sam Simmer',
      continue: {
        type: 'lesson',
        slug: L1,
        href: `/learn/m1-basics/${L1}`,
        started: false,
      },
      course: { lessonsCompleted: 0, lessonsTotal: 2, challengesTotal: 1, complete: false },
      recentAttempts: [],
      stats: { totalAttempts: 0, goldCount: 0, estimatedSimMinutes: 0 },
    });
    expect(res.body.nextUp.map((i: { slug: string }) => i.slug)).toEqual([L2, C1]);
    expect(res.headers['cache-control']).toBe('no-store');
  });

  it('continues the last unfinished item and summarizes attempts', async () => {
    const agent = await registerUser(app);
    await put(agent, L2, { lastSectionId: 'intro' }).expect(200);
    let res = await agent.get('/api/v1/me/dashboard').expect(200);
    expect(res.body.continue).toMatchObject({ slug: L2, started: true });

    await put(agent, L2, { status: 'completed' }).expect(200);
    await passC1(agent);
    await passC1(agent);
    res = await agent.get('/api/v1/me/dashboard').expect(200);
    // L2 is done and the challenge was the last activity but is passed: next is L1.
    expect(res.body.continue).toMatchObject({ slug: L1, started: false });
    expect(res.body.recentAttempts).toHaveLength(2);
    expect(res.body.recentAttempts[0]).toMatchObject({
      code: 'C1.1',
      tier: 'silver',
      percentage: 86,
    });
    expect(res.body.stats).toEqual({ totalAttempts: 2, goldCount: 0, estimatedSimMinutes: 30 });
    expect(res.body.modules[0]).toMatchObject({ slug: 'm1-basics', code: 'M1', percent: 67 });
  });
});

describe('export and deletion cover lesson progress', () => {
  it('exports and deletes it', async () => {
    const agent = await registerUser(app);
    await put(agent, L1, { status: 'completed' }).expect(200);
    const exported = await agent.get('/api/v1/me/export').expect(200);
    expect(exported.body.lessonProgress).toEqual([
      expect.objectContaining({ lessonSlug: L1, status: 'completed' }),
    ]);
    await agent
      .delete('/api/v1/me')
      .set('X-CSRF-Token', agent.csrf)
      .send({ confirm: 'DELETE', password: VALID_PASSWORD })
      .expect(204);
    expect(await mongoose.connection.db!.collection('lessonProgress').countDocuments()).toBe(0);
  });
});
