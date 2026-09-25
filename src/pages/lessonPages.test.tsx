import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { seriousViolations } from '@/test/axe';
import { renderRoute } from '@/test/render';
import { server } from '@/test/server';

const LESSON = '/learn/m1-meet-the-skyhawk/l1-4-speeds-limits-and-checklists';

describe('curriculum pages', () => {
  it('lists modules with their lessons', async () => {
    renderRoute('/learn');
    expect(
      await screen.findByRole('heading', { level: 2, name: 'Meet the Skyhawk' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /L1.4\s*Speeds, limits and checklists/ }),
    ).toHaveAttribute('href', LESSON);
    expect(screen.getByText('The lessons for this module are being written.')).toBeInTheDocument();
  });

  it('shows an error with a retry', async () => {
    let calls = 0;
    server.use(
      http.get('/api/v1/modules', () => {
        calls++;
        return calls === 1
          ? HttpResponse.json({ error: { code: 'INTERNAL', message: 'Boom' } }, { status: 500 })
          : HttpResponse.json({ modules: [] });
      }),
    );
    renderRoute('/learn');
    await userEvent.click(await screen.findByRole('button', { name: 'Try again' }));
    expect(await screen.findByRole('heading', { level: 1, name: 'Learn' })).toBeInTheDocument();
  });

  it('shows a module with its objectives and a start button', async () => {
    renderRoute('/learn/m1-meet-the-skyhawk');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Meet the Skyhawk' }),
    ).toBeInTheDocument();
    expect(screen.getByText('State the key V-speeds.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Start module 1' })).toHaveAttribute('href', LESSON);
  });

  it('shows the 404 page for an unknown module', async () => {
    renderRoute('/learn/m9-nope');
    expect(
      await screen.findByRole('heading', { level: 1, name: "You've wandered off the taxiway" }),
    ).toBeInTheDocument();
  });
});

describe('lesson page', () => {
  it('renders the lesson with navigation, rail and extras', async () => {
    renderRoute(LESSON);
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Speeds, limits and checklists' }),
    ).toBeInTheDocument();
    expect(document.title).toBe('L1.4 Speeds, limits and checklists · Learn-To-Fly');
    const nav = screen.getByRole('navigation', { name: 'Lesson sections' });
    expect(within(nav).getByRole('link', { name: /What a V-speed is/ })).toHaveAttribute(
      'href',
      '#what-a-v-speed-is',
    );
    expect(screen.getByRole('combobox', { name: 'Jump to section' })).toHaveDisplayValue(
      'Section 1 of 2: What a V-speed is',
    );
    expect(screen.getByText('State the key V-speeds.')).toBeInTheDocument();
    expect(await screen.findByRole('region', { name: 'Key numbers (KIAS)' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Go deeper' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /PHAK Chapter 9/ })).toHaveAttribute(
      'target',
      '_blank',
    );
    expect(screen.getByRole('link', { name: /C2.1\s*Straight and level/ })).toHaveAttribute(
      'href',
      '/challenges/c2-1-straight-and-level',
    );
    expect(screen.getByRole('link', { name: /Next lesson/ })).toHaveAttribute(
      'href',
      '/learn/m2-fundamentals/l2-1-four-forces',
    );
    expect(
      screen.getByText(
        'For simulation use only. Not for real-world flight training or navigation.',
      ),
    ).toBeInTheDocument();
  });

  it('asks visitors to sign up when they mark the lesson complete', async () => {
    renderRoute(LESSON);
    expect(
      await screen.findByRole('complementary', { name: 'Save your progress' }),
    ).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Mark lesson complete' }));
    const dialog = await screen.findByRole('dialog', { name: 'Save your progress' });
    expect(within(dialog).getByRole('link', { name: 'Sign up free' })).toHaveAttribute(
      'href',
      `/signup?returnTo=${encodeURIComponent(LESSON)}`,
    );
  });

  it('labels draft lessons', async () => {
    const { lessonDetail } = await import('@/test/fixtures');
    server.use(
      http.get('/api/v1/lessons/:slug', () =>
        HttpResponse.json({ lesson: lessonDetail({ draft: true }) }),
      ),
    );
    renderRoute(LESSON);
    expect(await screen.findByText('Draft lesson')).toBeInTheDocument();
    expect(screen.getAllByText('Draft · unverified').length).toBeGreaterThan(0);
  });

  it('redirects to the canonical module URL', async () => {
    const { router } = renderRoute('/learn/m8-capstone/l1-4-speeds-limits-and-checklists');
    await waitFor(() => expect(router.state.location.pathname).toBe(LESSON));
  });

  it('shows the 404 page for an unknown lesson', async () => {
    renderRoute('/learn/m1-meet-the-skyhawk/l1-9-nope');
    expect(
      await screen.findByRole('heading', { level: 1, name: "You've wandered off the taxiway" }),
    ).toBeInTheDocument();
  });

  it('has no serious accessibility violations', async () => {
    const { container } = renderRoute(LESSON);
    await screen.findByRole('checkbox', { name: /Seat and belts/ });
    expect(await seriousViolations(container)).toEqual([]);
  });
});
