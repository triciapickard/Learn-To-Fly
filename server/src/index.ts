import type { Server } from 'node:http';
import { createApp } from './app.js';
import { connectDb, disconnectDb } from './config/db.js';
import { loadEnv } from './config/env.js';
import { createLogger } from './middleware/logger.js';

const SHUTDOWN_TIMEOUT_MS = 10_000;

async function main() {
  const env = loadEnv();
  const logger = createLogger(env);

  await connectDb(env.MONGODB_URI, {
    onRetry: (attempt, error) =>
      logger.warn({ err: error, attempt }, 'MongoDB connection failed, retrying'),
  });
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
