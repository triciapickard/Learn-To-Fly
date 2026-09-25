import type { Express } from 'express';
import request from 'supertest';
import { createApp } from '@server/app.js';
import { createLogger } from '@server/middleware/logger.js';
import { testEnv } from './setup.js';

export const silentLogger = createLogger({ NODE_ENV: 'test', LOG_LEVEL: 'silent' });

export function buildApp(envOverrides: Record<string, string> = {}): Express {
  return createApp({ env: testEnv(envOverrides), logger: silentLogger });
}

export type Agent = ReturnType<typeof request.agent> & { csrf: string };

/** A cookie-keeping client with a CSRF token, like a browser tab. */
export async function newAgent(app: Express): Promise<Agent> {
  const agent = request.agent(app) as Agent;
  const res = await agent.get('/api/v1/auth/csrf').expect(200);
  agent.csrf = res.body.csrfToken as string;
  return agent;
}

export const VALID_PASSWORD = 'correct horse battery staple';

export async function registerUser(
  app: Express,
  overrides: Partial<{ email: string; password: string; displayName: string }> = {},
): Promise<Agent> {
  const agent = await newAgent(app);
  const res = await agent
    .post('/api/v1/auth/register')
    .set('X-CSRF-Token', agent.csrf)
    .send({
      displayName: 'Sam Simmer',
      email: 'sam@example.com',
      password: VALID_PASSWORD,
      acceptTerms: true,
      ...overrides,
    })
    .expect(201);
  agent.csrf = res.body.csrfToken as string;
  return agent;
}

export async function loginUser(
  app: Express,
  email = 'sam@example.com',
  password = VALID_PASSWORD,
  remember = false,
): Promise<Agent> {
  const agent = await newAgent(app);
  const res = await agent
    .post('/api/v1/auth/login')
    .set('X-CSRF-Token', agent.csrf)
    .send({ email, password, remember })
    .expect(200);
  agent.csrf = res.body.csrfToken as string;
  return agent;
}
