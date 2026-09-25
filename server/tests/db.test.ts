import mongoose from 'mongoose';
import { describe, expect, it, vi } from 'vitest';
import { checkDb, connectDb, disconnectDb } from '@server/config/db.js';
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
