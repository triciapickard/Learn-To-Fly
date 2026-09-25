/**
 * The app as Playwright sees it (plan.md Section 35.3): an in-memory MongoDB (or
 * E2E_MONGODB_URI) seeded with the real `content/` folder, drafts included (D-17), and the
 * Express app serving the built client from `dist/`. Run `npm run build:client` first.
 */
import { MongoMemoryServer } from 'mongodb-memory-server';
import { createApp } from '@server/app.js';
import { connectDb } from '@server/config/db.js';
import { EnvSchema } from '@server/config/env.js';
import { createLogger } from '@server/middleware/logger.js';
import { loadContent } from '../scripts/lib/loadContent.js';
import { seedContent } from '../scripts/lib/seedContent.js';
import { validateContent } from '../scripts/lib/validateContent.js';

const PORT = Number(process.env.E2E_PORT ?? 4173);

async function main() {
  const memory = process.env.E2E_MONGODB_URI ? null : await MongoMemoryServer.create();
  const uri = process.env.E2E_MONGODB_URI ?? memory!.getUri('learntofly-e2e');
  const env = EnvSchema.parse({
    NODE_ENV: 'test',
    PORT: String(PORT),
    MONGODB_URI: uri,
    SESSION_SECRET: 'e2e-session-secret-that-is-long-enough-0123',
    RATE_LIMIT_ENABLED: 'false',
    LOG_LEVEL: 'warn',
  });
  await connectDb(env.MONGODB_URI);

  const bundle = loadContent();
  validateContent(bundle);
  if (bundle.issues.errors.length) throw new Error('content/ has validation errors');
  await seedContent(bundle, { includeDrafts: true });

  const app = createApp({ env, logger: createLogger(env), serveClient: true });
  const server = app.listen(PORT, () => console.log(`E2E app on http://localhost:${PORT}`));
  const stop = () => server.close(() => void memory?.stop().then(() => process.exit(0)));
  process.on('SIGTERM', stop);
  process.on('SIGINT', stop);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
