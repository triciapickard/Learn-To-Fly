import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { inlineScriptHashes } from '@server/utils/csp.js';
import { formatPageTitle, isNoindex, renderHead } from '@shared/seo.js';

const html = readFileSync('index.html', 'utf8');

describe('page head (step 11.18)', () => {
  it('formats titles', () => {
    expect(formatPageTitle('Glossary')).toBe('Glossary · Learn-To-Fly');
    expect(formatPageTitle()).toBe('Learn-To-Fly — Learn to fly the Cessna 172 in MSFS 2024');
  });

  it('writes absolute canonical and Open Graph URLs for index.html', () => {
    const out = renderHead(html, { siteUrl: 'https://learntofly.example/', pathname: '/learn' });
    expect(out).toContain('<title>Learn · Learn-To-Fly</title>');
    expect(out).toContain('<link rel="canonical" href="https://learntofly.example/learn" />');
    expect(out).toContain('<meta property="og:url" content="https://learntofly.example/learn" />');
    expect(out).toContain(
      '<meta property="og:image" content="https://learntofly.example/og-image.png" />',
    );
    expect(out.match(/property="og:image"/g)).toHaveLength(1);
    expect(out.match(/name="description"/g)).toHaveLength(1);
    expect(out).toContain('<meta name="twitter:card" content="summary_large_image" />');
  });

  it("uses the default description for dynamic pages and doesn't touch the CSP-hashed script", () => {
    const out = renderHead(html, {
      siteUrl: 'https://learntofly.example',
      pathname: '/learn/m1-meet-the-skyhawk/l1-4-speeds-limits-and-checklists',
    });
    expect(out).toMatch(/<meta name="description" content="Learn to fly the Cessna 172/);
    expect(inlineScriptHashes(out)).toEqual(inlineScriptHashes(html));
  });

  it('escapes the URL and marks private pages noindex', () => {
    const out = renderHead(html, { siteUrl: 'https://x.example', pathname: '/a"b<c' });
    expect(out).toContain('href="https://x.example/a&quot;b&lt;c"');
    expect(isNoindex('/account/attempts')).toBe(true);
    expect(isNoindex('/dashboard')).toBe(true);
    expect(isNoindex('/accounting')).toBe(false);
    expect(isNoindex('/learn')).toBe(false);
  });
});
