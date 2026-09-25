import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
mongoose.set('sanitizeFilter', true);

export interface ConnectOptions {
  attempts?: number;
  baseDelayMs?: number;
  serverSelectionTimeoutMS?: number;
  onRetry?: (attempt: number, error: unknown) => void;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Connects Mongoose with retry and exponential backoff (default 3 attempts). */
export async function connectDb(
  uri: string,
  {
    attempts = 3,
    baseDelayMs = 1000,
    serverSelectionTimeoutMS = 5000,
    onRetry,
  }: ConnectOptions = {},
): Promise<typeof mongoose> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await mongoose.connect(uri, { serverSelectionTimeoutMS });
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        onRetry?.(attempt, error);
        await wait(baseDelayMs * 2 ** (attempt - 1));
      }
    }
  }
  throw lastError;
}

export async function disconnectDb(): Promise<void> {
  await mongoose.disconnect();
}

/** Reports database health: connected and answering a ping within `timeoutMs`. */
export async function checkDb(timeoutMs = 1000): Promise<'ok' | 'down'> {
  const db = mongoose.connection.db;
  if (mongoose.connection.readyState !== mongoose.ConnectionStates.connected || !db) {
    return 'down';
  }
  let timer: NodeJS.Timeout | undefined;
  try {
    await Promise.race([
      db.admin().ping(),
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error('ping timeout')), timeoutMs);
      }),
    ]);
    return 'ok';
  } catch {
    return 'down';
  } finally {
    clearTimeout(timer);
  }
}
