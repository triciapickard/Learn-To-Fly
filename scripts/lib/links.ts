import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

/** External link checking for `npm run content:links` (plan v1.md Section 28.6, step 12.4). */

export interface LinkUse {
  file: string;
  line: number;
}

export type LinkStatus = 'ok' | 'redirected' | 'blocked' | 'broken';

export interface LinkResult {
  url: string;
  status: LinkStatus;
  code?: number;
  finalUrl?: string;
  error?: string;
  uses: LinkUse[];
}

const URL_PATTERN = /https?:\/\/[^\s<>"'`)\]]+/g;

/** Every http(s) URL in the given text, with its 1-based line. Trailing punctuation is dropped. */
export function extractUrls(text: string): { url: string; line: number }[] {
  return text.split('\n').flatMap((line, i) =>
    [...line.matchAll(URL_PATTERN)].map((m) => ({
      url: m[0].replace(/[.,;:!?]+$/, ''),
      line: i + 1,
    })),
  );
}

const LOCAL = /^https?:\/\/(localhost|127\.0\.0\.1)([:/]|$)/;

/** URL → where it is used, for every .md and .yaml file under `dir`. */
export function collectLinks(dir: string): Map<string, LinkUse[]> {
  const links = new Map<string, LinkUse[]>();
  const files = readdirSync(dir, { withFileTypes: true, recursive: true })
    .filter((d) => d.isFile() && /\.(md|ya?ml)$/.test(d.name))
    .map((d) => path.join(d.parentPath, d.name))
    .sort();
  for (const file of files) {
    const rel = path.relative(process.cwd(), file);
    for (const { url, line } of extractUrls(readFileSync(file, 'utf8'))) {
      if (LOCAL.test(url)) continue; // author notes such as the dev server URL
      const uses = links.get(url) ?? [];
      uses.push({ file: rel, line });
      links.set(url, uses);
    }
  }
  return links;
}

/** Same page, ignoring http→https, a trailing slash and a leading "www.". */
function samePage(a: string, b: string): boolean {
  const norm = (u: string) =>
    u
      .replace(/^http:/, 'https:')
      .replace(/^https:\/\/www\./, 'https://')
      .replace(/\/$/, '');
  return norm(a) === norm(b);
}

const BOT_WALL = /unblock|captcha/i;

/**
 * 2xx → ok (or redirected, if it ended up on a different page); 401/403/429 → blocked
 * or a redirect to a bot wall (open it in a browser); anything else → broken.
 */
export function classify(url: string, code: number, finalUrl: string): LinkStatus {
  // e.g. eCFR sends automated requests to unblock.federalregister.gov
  if (BOT_WALL.test(new URL(finalUrl).hostname)) return 'blocked';
  if (code >= 200 && code < 300) return samePage(url, finalUrl) ? 'ok' : 'redirected';
  if ([401, 403, 429, 999].includes(code)) return 'blocked';
  return 'broken';
}

const HEADERS = {
  'user-agent':
    'Mozilla/5.0 (compatible; LearnToFly-LinkCheck/1.0; +https://github.com/triciapickard/Learn-To-Fly)',
  accept: 'text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8',
};

async function request(url: string, method: 'HEAD' | 'GET', timeoutMs: number) {
  const res = await fetch(url, {
    method,
    headers: HEADERS,
    redirect: 'follow',
    signal: AbortSignal.timeout(timeoutMs),
  });
  await res.body?.cancel();
  return { code: res.status, finalUrl: res.url || url };
}

/** HEAD first; GET when HEAD fails or is refused (many servers mishandle HEAD). One retry on errors. */
export async function checkUrl(
  url: string,
  uses: LinkUse[],
  timeoutMs = 20_000,
): Promise<LinkResult> {
  let last: { code: number; finalUrl: string } | undefined;
  let error: string | undefined;
  for (const method of ['HEAD', 'GET', 'GET'] as const) {
    try {
      last = await request(url, method, timeoutMs);
      error = undefined;
      if (last.code < 400) break;
      if (method === 'GET') break; // a real GET answer is final
    } catch (e) {
      const err = e as Error & { cause?: { code?: string } };
      error = err.cause?.code ?? err.name ?? err.message;
    }
  }
  if (!last || error) return { url, status: 'broken', error: error ?? 'no response', uses };
  return {
    url,
    status: classify(url, last.code, last.finalUrl),
    code: last.code,
    finalUrl: last.finalUrl,
    uses,
  };
}

/** Runs `worker` over `items` with at most `limit` in flight. */
export async function pool<T, R>(items: T[], limit: number, worker: (item: T) => Promise<R>) {
  const results: R[] = new Array(items.length);
  let next = 0;
  const run = async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await worker(items[i]!);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

export function buildLinkReport(
  results: LinkResult[],
  generatedOn: string,
  linkBase: string,
): string {
  const by = (s: LinkStatus) => results.filter((r) => r.status === s);
  const where = (r: LinkResult) =>
    r.uses
      .map((u) => `[${path.basename(u.file)}:${u.line}](${linkBase}${u.file}#L${u.line})`)
      .join(', ');
  const section = (
    title: string,
    intro: string,
    list: LinkResult[],
    detail: (r: LinkResult) => string,
  ) =>
    list.length === 0
      ? []
      : [
          `## ${title} (${list.length})`,
          '',
          intro,
          '',
          ...list.map((r) => `- ${r.url} — ${detail(r)} — used in ${where(r)}`),
          '',
        ];
  return [
    '# External link check',
    '',
    `> Generated by \`npm run content:links -- --report\` on ${generatedOn}. ` +
      `${results.length} unique URLs: ${by('ok').length} OK, ${by('redirected').length} redirected, ` +
      `${by('blocked').length} blocked, ${by('broken').length} broken.`,
    '',
    ...section('Broken', 'Fix or replace these before launch (step 12.4).', by('broken'), (r) =>
      r.code ? `HTTP ${r.code}` : (r.error ?? 'error'),
    ),
    ...section(
      'Blocked',
      'The site refused an automated request (bot protection). Open each one in a browser.',
      by('blocked'),
      (r) =>
        r.code && r.code < 300
          ? `sent to a bot check at ${new URL(r.finalUrl!).host}`
          : `HTTP ${r.code}`,
    ),
    ...section(
      'Redirected',
      'These work but land on another URL. If it is the same page with a longer address (SkyVector adds the airport name), nothing to do; otherwise check the new page still says what we claim and update the URL.',
      by('redirected'),
      (r) => `now ${r.finalUrl}`,
    ),
  ].join('\n');
}
