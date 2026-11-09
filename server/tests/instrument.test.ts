import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * Sentry only instruments the server when instrument.ts is preloaded with `--import`
 * (Section 34.4). A package.json merge once dropped the flag and server monitoring went
 * silent with every other check green, so pin it here.
 */
const pkg = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url), 'utf8')) as {
  scripts: Record<string, string>;
};

describe('Sentry preload', () => {
  it('npm start loads the built instrument.js before the server', () => {
    expect(pkg.scripts.start).toMatch(
      /--import \.\/dist-server\/server\/src\/instrument\.js .*dist-server\/server\/src\/index\.js/,
    );
  });

  it('npm run dev:server loads instrument.ts before the server', () => {
    expect(pkg.scripts['dev:server']).toMatch(
      /--import \.\/server\/src\/instrument\.ts .*server\/src\/index\.ts/,
    );
  });
});
