import type { Server } from 'node:http';
import { createApp } from './app.js';
import { connectDb, disconnectDb, redactMongoUri } from './config/db.js';
import { loadEnv } from './config/env.js';
import { createLogger } from './middleware/logger.js';

const SHUTDOWN_TIMEOUT_MS = 10_000;
/** In development, keep retrying MongoDB at most this far apart until it comes up. */
const DEV_DB_RETRY_MAX_DELAY_MS = 5_000;

const errorMessage = (error: unknown) => (error instanceof Error ? error.message : String(error));

async function main() {
  const env = loadEnv();
  const logger = createLogger(env);

  const mongoTarget = redactMongoUri(env.MONGODB_URI);
  const isDevelopment = env.NODE_ENV === 'development';
  // Without MongoDB the API can't start, and the Vite proxy reports ECONNREFUSED for every
  // /api request. In development, wait for MongoDB (e.g. Docker still starting) instead of
  // exiting, so the server comes up on its own once the database is reachable.
  try {
    await connectDb(env.MONGODB_URI, {
      ...(isDevelopment && { attempts: Infinity, maxDelayMs: DEV_DB_RETRY_MAX_DELAY_MS }),
      onRetry: (attempt, error) =>
        logger.warn(
          { attempt, reason: errorMessage(error) },
          `Cannot reach MongoDB at ${mongoTarget}. Is it running? Retrying…`,
        ),
    });
  } catch (error) {
    logger.fatal(
      { reason: errorMessage(error) },
      `Could not connect to MongoDB at ${mongoTarget}. Check that MongoDB is running and ` +
        'MONGODB_URI in .env is correct.',
    );
    process.exit(1);
  }
  logger.info('Connected to MongoDB');

  const app = createApp({ env, logger });
  const server: Server = app.listen(env.PORT, () => {
    logger.info(`Learn-To-Fly listening on http://localhost:${env.PORT}`);
  });

  let shuttingDown = false;
  const shutdown = (signal: NodeJS.Signals) => {
    if (shuttingDown) return;
    shuttingDown = true;
    logger.info({ signal }, 'Shutting down gracefully');
    const force = setTimeout(() => {
      logger.error('In-flight requests did not finish in time; forcing exit');
      process.exit(1);
    }, SHUTDOWN_TIMEOUT_MS);
    force.unref();
    server.close(async (error) => {
      if (error) logger.error({ err: error }, 'Error while closing HTTP server');
      await disconnectDb().catch((err: unknown) =>
        logger.error({ err }, 'Error while closing MongoDB connection'),
      );
      logger.info('Shutdown complete');
      process.exit(error ? 1 : 0);
    });
    server.closeIdleConnections();
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

main().catch((error: unknown) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
