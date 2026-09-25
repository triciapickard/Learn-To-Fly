import { randomUUID } from 'node:crypto';
import mongoose from 'mongoose';
import { afterAll, afterEach, beforeAll, inject } from 'vitest';
import { connectDb, disconnectDb } from '@server/config/db.js';
import { parseEnv, type Env } from '@server/config/env.js';

/**
 * Connects this test file to its own database on the shared in-memory server, clears
 * collections after each test and disconnects at the end. Call at the top of a test file.
 */
export function useTestDb(): { uri: () => string } {
  let uri = '';
  beforeAll(async () => {
    const base = inject('mongoUri');
    uri = `${base.replace(/\/$/, '')}/ltf-test-${randomUUID().slice(0, 8)}`;
    await connectDb(uri, { attempts: 1 });
  });
  afterEach(async () => {
    const collections = await mongoose.connection.db?.collections();
    await Promise.all((collections ?? []).map((c) => c.deleteMany({})));
  });
  afterAll(async () => {
    await mongoose.connection.dropDatabase().catch(() => undefined);
    await disconnectDb();
  });
  return { uri: () => uri };
}

/** A valid environment for tests; override any field. */
export function testEnv(overrides: Record<string, string> = {}): Env {
  return parseEnv({
    NODE_ENV: 'test',
    MONGODB_URI: 'mongodb://127.0.0.1:27017/ltf-test',
    SESSION_SECRET: 'test-secret-that-is-at-least-32-characters-long',
    RATE_LIMIT_ENABLED: 'false',
    ...overrides,
  });
}
