import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';

/**
 * CSP source expressions ('sha256-…') for every inline <script> in an HTML document, so the
 * theme bootstrap in index.html runs under `script-src 'self'` without 'unsafe-inline'
 * (Section 32.1). Scripts with a `src` are covered by 'self' and skipped.
 */
export function inlineScriptHashes(html: string): string[] {
  const hashes: string[] = [];
  for (const match of html.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi)) {
    const attrs = match[1] ?? '';
    const body = match[2] ?? '';
    if (/\ssrc\s*=/i.test(attrs) || !body.trim()) continue;
    hashes.push(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
  }
  return hashes;
}

/** Hashes for the index.html the server actually sends, read once at startup. */
export function scriptHashesFor(indexHtmlPath: string): string[] {
  return existsSync(indexHtmlPath) ? inlineScriptHashes(readFileSync(indexHtmlPath, 'utf8')) : [];
}
