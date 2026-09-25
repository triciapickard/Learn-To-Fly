import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { signedIn } from '@/test/handlers';
import { renderRoute } from '@/test/render';
import { server } from '@/test/server';

const ROUTES: [string, string | RegExp][] = [
  ['/', /Learn to fly the Cessna 172/],
  ['/learn', 'Learn'],
  ['/learn/m0-getting-started', 'Module'],
  ['/learn/m0-getting-started/l0-1-welcome', 'Lesson'],
  ['/challenges', 'Challenges'],
  ['/challenges/c2-1-straight-and-level', 'Challenge'],
  ['/challenges/c2-1-straight-and-level/fly', 'Fly mode'],
  ['/reference', 'Reference'],
  ['/reference/speeds', 'V-speeds and limits'],
  ['/reference/checklists', 'Checklists'],
  ['/reference/checklists/before-takeoff', 'Checklist'],
  ['/reference/airports', 'Airports'],
  ['/reference/airports/KLVK', 'Airport'],
  ['/reference/glossary', 'Glossary'],
  ['/reference/resources', 'Resources'],
  ['/account-deleted', 'Your account has been deleted'],
  ['/login', 'Log in'],
  ['/signup', 'Sign up'],
  ['/about', 'About Learn-To-Fly'],
  ['/disclaimer', 'Simulation-only disclaimer'],
  ['/privacy', 'Privacy policy'],
  ['/terms', 'Terms of use'],
  ['/roadmap', 'The road to the A380'],
  ['/no/such/page', "You've wandered off the taxiway"],
];

describe('routes', () => {
  it.each(ROUTES)('%s renders its page heading', async (url, heading) => {
    renderRoute(url);
    expect(await screen.findByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it.each([
    ['/dashboard', 'Dashboard'],
    ['/account', 'Account'],
    ['/account/attempts', 'Your challenge attempts'],
  ])('%s requires sign-in and renders for a signed-in user', async (url, heading) => {
    server.use(signedIn());
    renderRoute(url);
    expect(await screen.findByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  });

  it('sets a unique document title', async () => {
    renderRoute('/about');
    await screen.findByRole('heading', { level: 1 });
    expect(document.title).toBe('About · Learn-To-Fly');
  });

  it('renders fly mode without the site header and footer', async () => {
    renderRoute('/challenges/c2-1-straight-and-level/fly');
    await screen.findByRole('heading', { level: 1, name: 'Fly mode' });
    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
  });
});
