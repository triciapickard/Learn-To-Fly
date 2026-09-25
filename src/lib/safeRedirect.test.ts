import { describe, expect, it } from 'vitest';
import { loginPathFor, safeReturnTo } from './safeRedirect';

describe('safeReturnTo', () => {
  it.each([
    ['/learn/m1-meet-the-skyhawk', '/learn/m1-meet-the-skyhawk'],
    ['/challenges?module=m2#top', '/challenges?module=m2#top'],
    ['%2Faccount', '/account'],
  ])('allows same-site path %s', (input, expected) => {
    expect(safeReturnTo(input)).toBe(expected);
  });

  it.each([
    null,
    '',
    'https://evil.example',
    '//evil.example',
    '/\\evil.example',
    '%2F%2Fevil.example',
    'javascript:alert(1)',
    '/%0d%0aevil',
    '/login',
    '/signup?returnTo=/x',
  ])('rejects %s', (input) => {
    expect(safeReturnTo(input)).toBe('/dashboard');
  });

  it('builds a login path', () => {
    expect(loginPathFor('/account?tab=1')).toBe('/login?returnTo=%2Faccount%3Ftab%3D1');
  });
});
