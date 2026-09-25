import { describe, expect, it } from 'vitest';
import { EnvError, parseEnv } from '@server/config/env.js';

const valid = {
  MONGODB_URI: 'mongodb://localhost:27017/learntofly',
  SESSION_SECRET: 'x'.repeat(32),
};

describe('parseEnv', () => {
  it('applies defaults for optional values', () => {
    const env = parseEnv(valid);
    expect(env).toMatchObject({
      NODE_ENV: 'development',
      PORT: 3000,
      SESSION_NAME: 'ltf.sid',
      LOG_LEVEL: 'info',
      TRUST_PROXY: 0,
      RATE_LIMIT_ENABLED: true,
    });
  });

  it('gives a clear error when MONGODB_URI is missing', () => {
    expect(() => parseEnv({ SESSION_SECRET: valid.SESSION_SECRET })).toThrowError(EnvError);
    expect(() => parseEnv({ SESSION_SECRET: valid.SESSION_SECRET })).toThrowError(
      /MONGODB_URI is required/,
    );
  });

  it('treats an empty MONGODB_URI as missing', () => {
    expect(() => parseEnv({ ...valid, MONGODB_URI: '' })).toThrowError(/MONGODB_URI is required/);
  });

  it('rejects a non-MongoDB URI', () => {
    expect(() => parseEnv({ ...valid, MONGODB_URI: 'http://example.com' })).toThrowError(
      /must start with mongodb/,
    );
  });

  it('requires a session secret of at least 32 characters', () => {
    expect(() => parseEnv({ ...valid, SESSION_SECRET: 'short' })).toThrowError(
      /SESSION_SECRET must be at least 32 characters/,
    );
  });

  it('requires PUBLIC_SITE_URL in production', () => {
    expect(() => parseEnv({ ...valid, NODE_ENV: 'production' })).toThrowError(
      /PUBLIC_SITE_URL is required in production/,
    );
    expect(
      parseEnv({ ...valid, NODE_ENV: 'production', PUBLIC_SITE_URL: 'https://example.com' })
        .PUBLIC_SITE_URL,
    ).toBe('https://example.com');
  });

  it('lists every problem at once', () => {
    try {
      parseEnv({});
      expect.unreachable();
    } catch (error) {
      expect((error as EnvError).issues).toHaveLength(2);
    }
  });

  it('parses booleans and numbers from strings', () => {
    const env = parseEnv({ ...valid, RATE_LIMIT_ENABLED: 'false', PORT: '8080', TRUST_PROXY: '1' });
    expect(env.RATE_LIMIT_ENABLED).toBe(false);
    expect(env.PORT).toBe(8080);
    expect(env.TRUST_PROXY).toBe(1);
  });

  it("falls back to Render's RENDER_GIT_COMMIT for GIT_SHA", () => {
    expect(parseEnv({ ...valid, RENDER_GIT_COMMIT: 'abc123' }).GIT_SHA).toBe('abc123');
    expect(parseEnv({ ...valid, GIT_SHA: 'def456', RENDER_GIT_COMMIT: 'abc' }).GIT_SHA).toBe(
      'def456',
    );
  });
});
