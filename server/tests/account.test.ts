import mongoose from 'mongoose';
import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { User } from '@server/models/User.js';
import { buildApp, loginUser, newAgent, registerUser, VALID_PASSWORD } from './helpers.js';
import { useTestDb } from './setup.js';

useTestDb();
const app = buildApp();
const NEW_PASSWORD = 'a much better passphrase 2026';

describe('protected routes', () => {
  it.each([
    ['patch', '/api/v1/me'],
    ['get', '/api/v1/me/export'],
    ['delete', '/api/v1/me'],
    ['post', '/api/v1/auth/change-password'],
  ] as const)('%s %s needs a session (401)', async (method, path) => {
    const agent = await newAgent(app);
    const res = await agent[method](path).set('X-CSRF-Token', agent.csrf).send({});
    expect(res.status).toBe(401);
    expect(res.body.error.code).toBe('UNAUTHENTICATED');
  });
});

describe('PATCH /me', () => {
  it('updates the display name and preferences', async () => {
    const agent = await registerUser(app);
    const res = await agent
      .patch('/api/v1/me')
      .set('X-CSRF-Token', agent.csrf)
      .send({ displayName: '  Captain Sam ', preferences: { theme: 'dark', controller: 'yoke' } })
      .expect(200);
    expect(res.body.user.displayName).toBe('Captain Sam');
    expect(res.body.user.preferences).toMatchObject({
      theme: 'dark',
      controller: 'yoke',
      cockpitVariant: 'g1000',
    });
  });

  it.each([
    [{ preferences: { theme: 'purple' } }],
    [{ role: 'admin' }],
    [{ email: 'new@example.com' }],
    [{}],
  ])('rejects %o', async (body) => {
    const agent = await registerUser(app);
    const res = await agent.patch('/api/v1/me').set('X-CSRF-Token', agent.csrf).send(body);
    expect(res.status).toBe(400);
    const user = await User.findOne({ email: 'sam@example.com' }).lean();
    expect(user?.role).toBe('learner');
  });
});

describe('POST /auth/change-password', () => {
  it('rejects a wrong current password', async () => {
    const agent = await registerUser(app);
    const res = await agent
      .post('/api/v1/auth/change-password')
      .set('X-CSRF-Token', agent.csrf)
      .send({ currentPassword: 'not my password!', newPassword: NEW_PASSWORD });
    expect(res.status).toBe(400);
    expect(res.body.error.details[0].path).toBe('currentPassword');
  });

  it('changes the password, keeps this session and revokes the others', async () => {
    const agent = await registerUser(app);
    const otherDevice = await loginUser(app);
    await agent
      .post('/api/v1/auth/change-password')
      .set('X-CSRF-Token', agent.csrf)
      .send({ currentPassword: VALID_PASSWORD, newPassword: NEW_PASSWORD })
      .expect(204);

    expect((await agent.get('/api/v1/auth/me')).body.user.email).toBe('sam@example.com');
    expect((await otherDevice.get('/api/v1/auth/me')).body.user).toBeNull();
    await otherDevice.get('/api/v1/me/export').expect(401);

    const fresh = await newAgent(app);
    await fresh
      .post('/api/v1/auth/login')
      .set('X-CSRF-Token', fresh.csrf)
      .send({ email: 'sam@example.com', password: VALID_PASSWORD })
      .expect(401);
    await loginUser(app, 'sam@example.com', NEW_PASSWORD);
  });
});

describe('GET /me/export', () => {
  it('downloads all user data without secrets', async () => {
    const agent = await registerUser(app);
    const res = await agent.get('/api/v1/me/export').expect(200);
    expect(res.headers['content-disposition']).toMatch(
      /attachment; filename="learn-to-fly-export-/,
    );
    expect(res.body.user).toMatchObject({ email: 'sam@example.com', displayName: 'Sam Simmer' });
    expect(res.body).toMatchObject({
      lessonProgress: [],
      challengeAttempts: [],
      challengeProgress: [],
    });
    expect(JSON.stringify(res.body)).not.toMatch(/passwordHash|argon2/);
  });
});

describe('DELETE /me', () => {
  it('needs the confirmation word and the password', async () => {
    const agent = await registerUser(app);
    const noConfirm = await agent
      .delete('/api/v1/me')
      .set('X-CSRF-Token', agent.csrf)
      .send({ confirm: 'delete', password: VALID_PASSWORD });
    expect(noConfirm.status).toBe(400);
    const wrongPassword = await agent
      .delete('/api/v1/me')
      .set('X-CSRF-Token', agent.csrf)
      .send({ confirm: 'DELETE', password: 'wrong password!!' });
    expect(wrongPassword.status).toBe(400);
    expect(await User.countDocuments()).toBe(1);
  });

  it('removes the user, their data and every session', async () => {
    const agent = await registerUser(app);
    const other = await loginUser(app);
    const { user } = (await agent.get('/api/v1/auth/me')).body;
    const userId = new mongoose.Types.ObjectId(user.id as string);
    const db = mongoose.connection.db!;
    await db.collection('lessonProgress').insertOne({ userId, lessonSlug: 'l0-1-welcome' });
    await db.collection('challengeAttempts').insertOne({ userId, challengeSlug: 'c0-1' });
    await db
      .collection('lessonProgress')
      .insertOne({ userId: new mongoose.Types.ObjectId(), lessonSlug: 'x' });

    await agent
      .delete('/api/v1/me')
      .set('X-CSRF-Token', agent.csrf)
      .send({ confirm: 'DELETE', password: VALID_PASSWORD })
      .expect(204);

    expect(await User.countDocuments()).toBe(0);
    expect(await db.collection('lessonProgress').countDocuments({ userId })).toBe(0);
    expect(await db.collection('challengeAttempts').countDocuments({ userId })).toBe(0);
    expect(await db.collection('lessonProgress').countDocuments()).toBe(1);
    expect(await db.collection('sessions').countDocuments({ 'session.userId': user.id })).toBe(0);
    expect((await other.get('/api/v1/auth/me')).body.user).toBeNull();
    const fresh = await newAgent(app);
    await fresh
      .post('/api/v1/auth/login')
      .set('X-CSRF-Token', fresh.csrf)
      .send({ email: 'sam@example.com', password: VALID_PASSWORD })
      .expect(401);
    expect(request).toBeDefined();
  });
});
