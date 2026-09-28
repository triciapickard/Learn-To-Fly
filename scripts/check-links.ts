/**
 * Checks every external URL in content/ (plan v1.md Section 28.6, step 12.4).
 * Usage: npm run content:links [-- --report] [-- --report path/to/links.md]
 * Exit code 1 when a link is broken. Blocked links (bot protection) need a manual check.
 * Behind an HTTP proxy, run with NODE_USE_ENV_PROXY=1 so fetch uses HTTPS_PROXY.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { buildLinkReport, checkUrl, collectLinks, pool } from './lib/links.js';

const args = process.argv.slice(2);
const reportIndex = args.indexOf('--report');
const reportFile =
  reportIndex < 0
    ? undefined
    : path.resolve(
        args[reportIndex + 1] && !args[reportIndex + 1]!.startsWith('--')
          ? args[reportIndex + 1]!
          : 'docs/verification/links.md',
      );

const links = collectLinks(path.resolve('content'));
console.log(`Checking ${links.size} unique URLs…`);
const results = await pool([...links], 8, ([url, uses]) => checkUrl(url, uses));

const order = { broken: 0, blocked: 1, redirected: 2, ok: 3 };
results.sort((a, b) => order[a.status] - order[b.status] || a.url.localeCompare(b.url));
for (const r of results) {
  if (r.status === 'ok') continue;
  const detail = r.code ? `HTTP ${r.code}` : r.error;
  const where = r.uses.map((u) => `${u.file}:${u.line}`).join(', ');
  console.log(
    `${r.status.toUpperCase().padEnd(10)} ${r.url} (${detail}${r.status === 'redirected' ? ` → ${r.finalUrl}` : ''}) — ${where}`,
  );
}
const count = (s: string) => results.filter((r) => r.status === s).length;
console.log(
  `\n${results.length} URLs: ${count('ok')} OK, ${count('redirected')} redirected, ` +
    `${count('blocked')} blocked, ${count('broken')} broken.`,
);

if (reportFile) {
  mkdirSync(path.dirname(reportFile), { recursive: true });
  const linkBase =
    path.relative(path.dirname(reportFile), process.cwd()).split(path.sep).join('/') + '/';
  writeFileSync(
    reportFile,
    buildLinkReport(results, new Date().toISOString().slice(0, 10), linkBase),
  );
  console.log(`Wrote ${path.relative(process.cwd(), reportFile)}.`);
}

if (count('broken') > 0) process.exit(1);
