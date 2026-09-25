/**
 * Validates content/ and seeds it into MongoDB (plan.md Section 28.1).
 * Usage: npm run content:seed [-- --dry-run] [-- --include-drafts]
 * CONTENT_INCLUDE_DRAFTS=true also publishes unverified drafts (never use in production).
 */
import { execSync } from 'node:child_process';
import dotenv from 'dotenv';
import { connectDb, disconnectDb } from '@server/config/db.js';
import { formatIssue } from './lib/issues.js';
import { loadContent } from './lib/loadContent.js';
import { seedContent } from './lib/seedContent.js';
import { validateContent } from './lib/validateContent.js';

if (process.env.NODE_ENV !== 'production') dotenv.config({ quiet: true });

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const includeDrafts =
  args.includes('--include-drafts') || process.env.CONTENT_INCLUDE_DRAFTS === 'true';

function gitSha(): string | null {
  const fromEnv = process.env.GIT_SHA || process.env.RENDER_GIT_COMMIT;
  if (fromEnv) return fromEnv;
  try {
    return execSync('git rev-parse HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    return null;
  }
}

async function main() {
  const bundle = loadContent();
  validateContent(bundle);
  for (const issue of bundle.issues.items) console.log(formatIssue(issue));
  if (bundle.issues.errors.length > 0) {
    console.error(`\nAborting: ${bundle.issues.errors.length} validation error(s).`);
    process.exit(1);
  }
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not set (see .env.example).');
    process.exit(1);
  }
  await connectDb(uri);
  try {
    const summary = await seedContent(bundle, { dryRun, includeDrafts, gitSha: gitSha() });
    const label = dryRun ? 'Dry run — nothing written.' : `Content release ${summary.releaseId}.`;
    console.log(`\n${label}${includeDrafts ? ' Drafts included.' : ''}`);
    console.log(
      `Published counts: ${Object.entries(summary.counts)
        .map(([k, n]) => `${k} ${n}`)
        .join(', ')}`,
    );
    const list = (title: string, items: string[]) => {
      if (items.length === 0) return;
      const shown = items.slice(0, 25).join(', ');
      console.log(
        `${title} (${items.length}): ${shown}${items.length > 25 ? `, … and ${items.length - 25} more` : ''}`,
      );
    };
    list('Created', summary.created);
    list('Updated (version bumped)', summary.updated);
    list('Unpublished', summary.unpublished);
    console.log(`Unchanged: ${summary.unchanged}`);
  } finally {
    await disconnectDb();
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
