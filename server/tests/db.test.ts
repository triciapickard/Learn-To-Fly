import mongoose from 'mongoose';
import { describe, expect, it, vi } from 'vitest';
import { checkDb, connectDb, disconnectDb, redactMongoUri } from '@server/config/db.js';
import { useTestDb } from './setup.js';

describe('connectDb', () => {
  it('retries with backoff and then throws', async () => {
    const onRetry = vi.fn();
    await expect(
      connectDb('mongodb://127.0.0.1:1/unreachable', {
        attempts: 3,
        serverSelectionTimeoutMS: 100,
        baseDelayMs: 1,
        onRetry,
      }),
    ).rejects.toThrow();
    expect(onRetry).toHaveBeenCalledTimes(2);
    await mongoose.disconnect();
  }, 30_000);

  it('caps the backoff between attempts at maxDelayMs', async () => {
    const started = Date.now();
    await expect(
      connectDb('mongodb://127.0.0.1:1/unreachable', {
        attempts: 3,
        serverSelectionTimeoutMS: 100,
        baseDelayMs: 60_000,
        maxDelayMs: 1,
      }),
    ).rejects.toThrow();
    expect(Date.now() - started).toBeLessThan(10_000);
    await mongoose.disconnect();
  }, 30_000);

  it('enables strictQuery and sanitizeFilter', () => {
    expect(mongoose.get('strictQuery')).toBe(true);
    expect(mongoose.get('sanitizeFilter')).toBe(true);
  });
});

describe('checkDb', () => {
  const db = useTestDb();

  it('reports ok when connected', async () => {
    expect(await checkDb()).toBe('ok');
  });

  it('reports down when disconnected', async () => {
    await disconnectDb();
    expect(await checkDb()).toBe('down');
    await connectDb(db.uri(), { attempts: 1 });
  });
});

describe('redactMongoUri', () => {
  it('hides credentials', () => {
    expect(
      redactMongoUri('mongodb+srv://ltf-app:s3cret@cluster0.x.mongodb.net/db?w=majority'),
    ).toBe('mongodb+srv://***@cluster0.x.mongodb.net/db?w=majority');
  });

  it('leaves URIs without credentials unchanged', () => {
    expect(redactMongoUri('mongodb://localhost:27017/learntofly')).toBe(
      'mongodb://localhost:27017/learntofly',
    );
  });
});
