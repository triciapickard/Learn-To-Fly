import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { seriousViolations } from '@/test/axe';
import { signedIn } from '@/test/handlers';
import { renderRoute } from '@/test/render';
import { server } from '@/test/server';

describe('accessibility (axe)', () => {
  it.each(['/account', '/dashboard'])('%s (signed in) has no serious violations', async (url) => {
    server.use(signedIn());
    const { container } = renderRoute(url);
    await screen.findByRole('heading', { level: 1 });
    expect(await seriousViolations(container)).toEqual([]);
  });

  it.each([
    '/dev/components',
    '/',
    '/about',
    '/privacy',
    '/roadmap',
    '/no-such-page',
    '/login',
    '/signup',
  ])('%s has no serious violations', async (url) => {
    const { container } = renderRoute(url);
    await screen.findByRole('heading', { level: 1 });
    expect(await seriousViolations(container)).toEqual([]);
  });
});
