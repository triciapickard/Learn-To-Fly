import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { createApp } from '@server/app.js';
import { inlineScriptHashes } from '@server/utils/csp.js';
import { silentLogger } from './helpers.js';
import { testEnv } from './setup.js';

const sha = (s: string) => `'sha256-${createHash('sha256').update(s).digest('base64')}'`;

describe('inline script hashes (step 11.11)', () => {
  it('hashes inline scripts exactly and skips external or empty ones', () => {
    const html = `<head><script>var a = 1;</script><script type="module" src="/src/main.tsx"></script>
      <script type="text/javascript">
        run();
      </script><script></script></head>`;
    expect(inlineScriptHashes(html)).toEqual([sha('var a = 1;'), sha('\n        run();\n      ')]);
  });

  it("allows index.html's theme script in the served CSP", async () => {
    const html = readFileSync(path.resolve('index.html'), 'utf8');
    const [hash] = inlineScriptHashes(html);
    expect(hash).toBeDefined();
    const app = createApp({ env: testEnv(), logger: silentLogger });
    const res = await request(app).get('/api/v1/health');
    expect(res.headers['content-security-policy']).toContain(hash);
  });

  it('adds HSTS and upgrade-insecure-requests in production', async () => {
    const app = createApp({
      env: testEnv({ NODE_ENV: 'production', PUBLIC_SITE_URL: 'https://learntofly.example' }),
      logger: silentLogger,
      serveClient: false,
    });
    const res = await request(app).get('/api/v1/health');
    expect(res.headers['strict-transport-security']).toBe('max-age=63072000; includeSubDomains');
    expect(res.headers['content-security-policy']).toContain('upgrade-insecure-requests');
  });
});
