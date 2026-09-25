import { describe, expect, it } from 'vitest';
import { useSecureCookies } from '@server/config/session.js';

describe('useSecureCookies', () => {
  it('is secure in production over HTTPS', () => {
    expect(
      useSecureCookies({ NODE_ENV: 'production', PUBLIC_SITE_URL: 'https://learntofly.example' }),
    ).toBe(true);
    expect(useSecureCookies({ NODE_ENV: 'production', PUBLIC_SITE_URL: undefined })).toBe(true);
  });

  it('stays secure for a non-local http URL in production', () => {
    expect(
      useSecureCookies({ NODE_ENV: 'production', PUBLIC_SITE_URL: 'http://learntofly.example' }),
    ).toBe(true);
  });

  it('allows a local production build over http://localhost', () => {
    expect(
      useSecureCookies({ NODE_ENV: 'production', PUBLIC_SITE_URL: 'http://localhost:3000' }),
    ).toBe(false);
  });

  it('is not secure in development and test', () => {
    expect(
      useSecureCookies({ NODE_ENV: 'development', PUBLIC_SITE_URL: 'https://x.example' }),
    ).toBe(false);
  });
});
