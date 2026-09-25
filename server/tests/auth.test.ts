import mongoose from 'mongoose';
import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { User } from '@server/models/User.js';
import { buildApp, loginUser, newAgent, registerUser, VALID_PASSWORD } from './helpers.js';
import { useTestDb } from './setup.js';

useTestDb();
const app = buildApp();

const sessions = () => mongoose.connection.db!.collection('sessions');
const cookieOf = (res: request.Response) =>
  ([] as string[]).concat(res.headers['set-cookie'] ?? []).find((c) => c.startsWith('ltf.sid='));

describe('CSRF', () => {
  it('issues a token and a session cookie', async () => {
    const res = await request(app).get('/api/v1/auth/csrf').expect(200);
    expect(res.body.csrfToken).toMatch(/^[\w-]+\.[\w-]+$/);
    expect(cookieOf(res)).toMatch(/HttpOnly/);
    expect(cookieOf(res)).toMatch(/SameSite=Lax/);
    expect(res.headers['cache-control']).toBe('no-store');
  });

  it('rejects mutating requests without a valid token (403)', async () => {
    const agent = await newAgent(app);
    const body = { email: 'a@example.com', password: 'x', remember: false };
    const missing = await agent.post('/api/v1/auth/login').send(body);
    expect(missing.status).toBe(403);
    expect(missing.body.error.code).toBe('FORBIDDEN');
    const forged = await agent.post('/api/v1/auth/login').set('X-CSRF-Token', 'abc.def').send(body);
    expect(forged.status).toBe(403);
    // A token from another session does not work either.
    const other = await newAgent(app);
    const stolen = await agent
      .post('/api/v1/auth/login')
      .set('X-CSRF-Token', other.csrf)
      .send(body);
    expect(stolen.status).toBe(403);
  });
});

describe('register → me → logout → login', () => {
  it('runs the full flow', async () => {
    const agent = await registerUser(app);
    const me = await agent.get('/api/v1/auth/me').expect(200);
    expect(me.body.user).toMatchObject({
      email: 'sam@example.com',
      displayName: 'Sam Simmer',
      role: 'learner',
      preferences: {
        theme: 'system',
        cockpitVariant: 'g1000',
        controller: 'unknown',
        showBonus: true,
      },
    });
    expect(JSON.stringify(me.body)).not.toContain('passwordHash');
    expect(await sessions().countDocuments({ 'session.userId': me.body.user.id })).toBe(1);

    await agent.post('/api/v1/auth/logout').set('X-CSRF-Token', agent.csrf).expect(204);
    expect(await sessions().countDocuments({ 'session.userId': me.body.user.id })).toBe(0);
    expect((await agent.get('/api/v1/auth/me')).body).toEqual({ user: null });

    const again = await loginUser(app);
    expect((await again.get('/api/v1/auth/me')).body.user.email).toBe('sam@example.com');
  });

  it('normalises the email and stores only an argon2id hash', async () => {
    await registerUser(app, { email: '  Sam@Example.COM ' });
    const user = await User.findOne({ email: 'sam@example.com' }).select('+passwordHash').lean();
    expect(user?.passwordHash).toMatch(/^\$argon2id\$/);
  });

  it('returns user null for visitors', async () => {
    expect((await request(app).get('/api/v1/auth/me')).body).toEqual({ user: null });
  });
});

describe('register validation', () => {
  const post = async (body: object) => {
    const agent = await newAgent(app);
    return agent.post('/api/v1/auth/register').set('X-CSRF-Token', agent.csrf).send(body);
  };
  const base = {
    displayName: 'Sam',
    email: 'sam@example.com',
    password: VALID_PASSWORD,
    acceptTerms: true,
  };
  const paths = (res: request.Response) =>
    (res.body.error.details as { path: string }[]).map((d) => d.path);

  it('rejects a duplicate email with a generic 409', async () => {
    await registerUser(app);
    const res = await post({ ...base, email: 'SAM@example.com' });
    expect(res.status).toBe(409);
    expect(res.body.error.message).toBe(
      'An account with this email may already exist. Try logging in.',
    );
  });

  it.each([
    [{ password: 'short' }, 'password'],
    [{ password: 'x'.repeat(129) }, 'password'],
    [{ email: 'not-an-email' }, 'email'],
    [{ displayName: 'S' }, 'displayName'],
    [{ acceptTerms: false }, 'acceptTerms'],
    [{ email: 'longpassword@example.com', password: 'LongPassword@Example.com' }, 'password'],
  ])('rejects %o', async (override, path) => {
    const res = await post({ ...base, ...override });
    expect(res.status).toBe(400);
    expect(paths(res)).toContain(path);
  });

  it('rejects a common password', async () => {
    const res = await post({ ...base, password: 'Unbelievable' });
    expect(res.status).toBe(400);
    expect(res.body.error.details[0]).toEqual({
      path: 'password',
      message: 'This password is too common. Choose something harder to guess.',
    });
  });
});

describe('login', () => {
  it('uses one generic 401 for a wrong password and an unknown email', async () => {
    await registerUser(app);
    for (const email of ['sam@example.com', 'nobody@example.com']) {
      const agent = await newAgent(app);
      const res = await agent
        .post('/api/v1/auth/login')
        .set('X-CSRF-Token', agent.csrf)
        .send({ email, password: 'wrong password here' });
      expect(res.status).toBe(401);
      expect(res.body.error).toMatchObject({
        code: 'UNAUTHENTICATED',
        message: 'Email or password is incorrect.',
      });
    }
  });

  it('regenerates the session id on login (no session fixation)', async () => {
    await registerUser(app);
    const agent = await newAgent(app);
    const before = (await sessions().find().toArray()).map((s) => s._id);
    await agent
      .post('/api/v1/auth/login')
      .set('X-CSRF-Token', agent.csrf)
      .send({ email: 'sam@example.com', password: VALID_PASSWORD })
      .expect(200);
    const userSession = await sessions().findOne(
      { 'session.userId': { $exists: true } },
      { sort: { expires: -1 } },
    );
    expect(before).not.toContain(userSession?._id);
  });

  it('uses a 30-day cookie only with remember me', async () => {
    await registerUser(app);
    const make = async (remember: boolean) => {
      const agent = await newAgent(app);
      return agent
        .post('/api/v1/auth/login')
        .set('X-CSRF-Token', agent.csrf)
        .send({ email: 'sam@example.com', password: VALID_PASSWORD, remember });
    };
    const remembered = cookieOf(await make(true));
    const expires = new Date(/Expires=([^;]+)/.exec(remembered ?? '')?.[1] ?? 0).getTime();
    expect(expires - Date.now()).toBeGreaterThan(29 * 24 * 3600 * 1000);
    expect(cookieOf(await make(false))).not.toMatch(/Expires=/);
  });

  it('rejects NoSQL operator injection in the body', async () => {
    const agent = await newAgent(app);
    const res = await agent
      .post('/api/v1/auth/login')
      .set('X-CSRF-Token', agent.csrf)
      .send({ email: { $gt: '' }, password: { $gt: '' } });
    expect(res.status).toBe(400);
  });

  it('requires a session to log out', async () => {
    const agent = await newAgent(app);
    await agent.post('/api/v1/auth/logout').set('X-CSRF-Token', agent.csrf).expect(401);
  });
});

describe('rate limits', () => {
  const limited = buildApp({ RATE_LIMIT_ENABLED: 'true' });
  const failLogin = (agent: Awaited<ReturnType<typeof newAgent>>, email: string) =>
    agent
      .post('/api/v1/auth/login')
      .set('X-CSRF-Token', agent.csrf)
      .send({ email, password: 'wrong password here' });

  it('limits failed logins per email to 5 per 15 minutes', async () => {
    const agent = await newAgent(limited);
    for (let i = 0; i < 5; i++)
      expect((await failLogin(agent, 'victim@example.com')).status).toBe(401);
    const blocked = await failLogin(agent, 'victim@example.com');
    expect(blocked.status).toBe(429);
    expect(blocked.body.error.code).toBe('RATE_LIMITED');
  });

  it('limits sign-ups to 5 per hour per IP', async () => {
    const agent = await newAgent(limited);
    const statuses: number[] = [];
    for (let i = 0; i < 6; i++) {
      const res = await agent
        .post('/api/v1/auth/register')
        .set('X-CSRF-Token', agent.csrf)
        .send({
          displayName: 'Sam',
          email: `user${i}@example.com`,
          password: 'x',
          acceptTerms: true,
        });
      statuses.push(res.status);
    }
    expect(statuses.slice(0, 5).every((s) => s === 400)).toBe(true);
    expect(statuses[5]).toBe(429);
  });
});
