import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { delay, http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { seriousViolations } from '@/test/axe';
import { dashboardFixture, emptyProgress } from '@/test/fixtures';
import { signedIn } from '@/test/handlers';
import { renderRoute } from '@/test/render';
import { server } from '@/test/server';
import type { LessonProgressDto, ProgressResponse } from '@shared/schemas/api';

const LESSON_SLUG = 'l1-4-speeds-limits-and-checklists';
const LESSON = `/learn/m1-meet-the-skyhawk/${LESSON_SLUG}`;

const lessonProgress = (overrides: Partial<LessonProgressDto> = {}): LessonProgressDto => ({
  lessonSlug: LESSON_SLUG,
  status: 'in_progress',
  lastSectionId: null,
  startedAt: '2026-09-20T10:00:00.000Z',
  completedAt: null,
  ...overrides,
});

describe('dashboard (step 8.8)', () => {
  it('welcomes a new learner and points to the first lesson', async () => {
    server.use(signedIn());
    const { container } = renderRoute('/dashboard');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Welcome aboard, Sam Simmer!' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Start L1\.4/ })).toHaveAttribute(
      'href',
      '/learn/m1-meet-the-skyhawk/l1-4-speeds-limits-and-checklists',
    );
    expect(screen.getByRole('progressbar', { name: 'Core lessons completed' })).toHaveAttribute(
      'aria-valuetext',
      '0 of 1 lessons',
    );
    expect(screen.getByText('Your challenge results will appear here.')).toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: 'Module 2 progress' })).toHaveAttribute(
      'aria-valuetext',
      '0%',
    );
    expect(await seriousViolations(container)).toEqual([]);
  });

  it('shows continue, recent attempts and stats for a learner in progress', async () => {
    const base = dashboardFixture();
    server.use(
      signedIn(),
      http.get('/api/v1/me/dashboard', () =>
        HttpResponse.json(
          dashboardFixture({
            continue: { ...base.continue!, started: true },
            course: { ...base.course, lessonsCompleted: 1, percent: 50 },
            recentAttempts: [
              {
                id: 'a1',
                challengeSlug: 'c2-1-straight-and-level',
                code: 'C2.1',
                title: 'Straight and level',
                tier: 'silver',
                percentage: 78,
                submittedAt: '2026-09-20T17:00:00.000Z',
              },
            ],
            stats: { totalAttempts: 3, goldCount: 1, estimatedSimMinutes: 90 },
          }),
        ),
      ),
    );
    renderRoute('/dashboard');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Welcome back, Sam Simmer' }),
    ).toBeInTheDocument();
    const cont = screen.getByRole('region', { name: 'Continue' });
    expect(within(cont).getByRole('link', { name: /Continue/ })).toBeInTheDocument();
    const recent = screen.getByRole('region', { name: 'Recent attempts' });
    expect(within(recent).getByRole('link', { name: 'C2.1 Straight and level' })).toHaveAttribute(
      'href',
      '/challenges/c2-1-straight-and-level?tab=history',
    );
    expect(within(recent).getByText('Silver')).toBeInTheDocument();
    const stats = screen.getByRole('region', { name: 'Stats' });
    expect(within(stats).getByText('1.5 h')).toBeInTheDocument();
    expect(within(stats).getByText('3')).toBeInTheDocument();
  });

  it('celebrates course completion with a clearly unofficial badge', async () => {
    server.use(
      signedIn(),
      http.get('/api/v1/me/dashboard', () =>
        HttpResponse.json(
          dashboardFixture({
            continue: null,
            nextUp: [],
            course: {
              lessonsCompleted: 1,
              lessonsTotal: 1,
              challengesPassed: 1,
              challengesTotal: 1,
              percent: 100,
              complete: true,
            },
          }),
        ),
      ),
    );
    const { container } = renderRoute('/dashboard');
    expect(
      await screen.findByRole('heading', { name: 'Course complete: Skyhawk Pilot (Sim)' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Skyhawk Pilot \(Sim\) badge/ })).toBeInTheDocument();
    expect(screen.getByText(/It is not a pilot certificate/)).toBeInTheDocument();
    expect(screen.queryByRole('region', { name: 'Next up' })).not.toBeInTheDocument();
    expect(await seriousViolations(container)).toEqual([]);
  });
});

it('says when a learner has finished everything published so far', async () => {
  server.use(
    signedIn(),
    http.get('/api/v1/me/dashboard', () =>
      HttpResponse.json(dashboardFixture({ continue: null, nextUp: [] })),
    ),
  );
  renderRoute('/dashboard');
  expect(await screen.findByRole('heading', { name: 'All caught up' })).toBeInTheDocument();
});

describe('lesson progress (step 8.7)', () => {
  it('marks a lesson complete straight away and saves it', async () => {
    let body: unknown;
    server.use(
      signedIn(),
      http.put(`/api/v1/me/lessons/${LESSON_SLUG}/progress`, async ({ request }) => {
        body = await request.json();
        await delay(200);
        return HttpResponse.json({
          progress: lessonProgress({ status: 'completed', completedAt: new Date().toISOString() }),
        });
      }),
    );
    renderRoute(LESSON);
    await userEvent.click(await screen.findByRole('button', { name: 'Mark lesson complete' }));
    // Optimistic: shown before the server answers.
    expect(await screen.findByText('Lesson complete')).toBeInTheDocument();
    expect(body).toEqual({ status: 'completed' });
    expect(await screen.findByText('Lesson complete. Nice work!')).toBeInTheDocument();
  });

  it('rolls back and says so when saving fails', async () => {
    server.use(
      signedIn(),
      http.put(`/api/v1/me/lessons/${LESSON_SLUG}/progress`, () =>
        HttpResponse.json({ error: { code: 'INTERNAL', message: 'Boom' } }, { status: 500 }),
      ),
    );
    renderRoute(LESSON);
    await userEvent.click(await screen.findByRole('button', { name: 'Mark lesson complete' }));
    expect(
      await screen.findByText('Could not save your progress. Please try again.'),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Mark lesson complete' })).toBeInTheDocument();
  });

  it('shows saved completion and offers to resume an unfinished lesson', async () => {
    server.use(
      signedIn(),
      http.get('/api/v1/me/progress', () =>
        HttpResponse.json({
          ...emptyProgress,
          lessons: { [LESSON_SLUG]: lessonProgress({ lastSectionId: 'try-a-checklist' }) },
        } satisfies ProgressResponse),
      ),
    );
    renderRoute(LESSON);
    const resume = await screen.findByText(/Pick up where you left off/);
    expect(within(resume).getByRole('link', { name: '2. Try a checklist' })).toHaveAttribute(
      'href',
      '#try-a-checklist',
    );
  });

  it('records quiz answers on the server for signed-in learners', async () => {
    const answers: unknown[] = [];
    server.use(
      signedIn(),
      http.post(`/api/v1/me/lessons/${LESSON_SLUG}/quiz-answers`, async ({ request }) => {
        answers.push(await request.json());
        return HttpResponse.json({ correct: true, explanation: 'Vy is 74 KIAS.' });
      }),
    );
    renderRoute(LESSON);
    await userEvent.click(await screen.findByRole('radio', { name: '74 KIAS' }));
    await userEvent.click(screen.getByRole('button', { name: 'Check answer' }));
    await waitFor(() => expect(answers).toEqual([{ questionId: 'l1-4-q1', answer: 'b' }]));
  });
});

describe('progress overlays (step 8.6)', () => {
  it('shows module rings and lesson status on /learn', async () => {
    server.use(
      signedIn(),
      http.get('/api/v1/me/progress', () =>
        HttpResponse.json({
          lessons: {
            [LESSON_SLUG]: lessonProgress({ status: 'completed', completedAt: '2026-09-21' }),
          },
          challenges: {},
          modules: {
            'm1-meet-the-skyhawk': {
              slug: 'm1-meet-the-skyhawk',
              lessonsCompleted: 1,
              lessonsTotal: 1,
              challengesPassed: 0,
              challengesTotal: 0,
              percent: 100,
              complete: true,
            },
          },
        } satisfies ProgressResponse),
      ),
    );
    renderRoute('/learn');
    expect(await screen.findByRole('progressbar', { name: 'Module 1 progress' })).toHaveAttribute(
      'aria-valuetext',
      'Complete',
    );
    expect(screen.getAllByText('Completed:').length).toBeGreaterThan(0);
  });
});
