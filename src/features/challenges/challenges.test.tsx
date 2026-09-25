import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { filterChallenges } from '@/pages/ChallengesPage';
import { seriousViolations } from '@/test/axe';
import { challengeDetail, challengeSummary } from '@/test/fixtures';
import { signedIn } from '@/test/handlers';
import { renderRoute } from '@/test/render';
import { server } from '@/test/server';
import type { AttemptDto } from '@shared/schemas/api';
import { toAttemptInput } from './DebriefForm';
import { emptyDebrief, emptyFlight, loadDebrief } from './storage';

const SLUG = 'c2-1-straight-and-level';

function attempt(overrides: Partial<AttemptDto> = {}): AttemptDto {
  return {
    id: 'a1',
    challengeSlug: SLUG,
    challengeVersion: 1,
    startedAt: null,
    submittedAt: '2026-09-20T17:00:00.000Z',
    criteriaResults: [
      { criterionId: 'altitude', result: 'bronze' },
      { criterionId: 'heading', result: 'gold' },
    ],
    notes: 'Altitude wandered a lot after the turn back to the west.',
    reflections: [{ questionId: 'eyes', answer: 'Mostly inside.' }],
    paused: false,
    planning: {},
    checklistTicks: [],
    randomEventsFired: [],
    points: 9,
    maxPoints: 18,
    percentage: 50,
    passed: true,
    tier: 'bronze',
    ...overrides,
  };
}

const progress = {
  challengeSlug: SLUG,
  bestAttemptId: 'a1',
  bestTier: 'bronze',
  bestPercentage: 50,
  passed: true,
  attemptsCount: 1,
  lastAttemptAt: '2026-09-20T17:00:00.000Z',
};

beforeEach(() => sessionStorage.clear());
afterEach(() => sessionStorage.clear());

describe('score preview and debrief validation (step 7.15)', () => {
  beforeEach(() => {
    server.use(
      signedIn(),
      http.get('/api/v1/me/progress', () => HttpResponse.json({ challenges: {} })),
    );
  });

  it('keeps Submit disabled until every required criterion is answered, previewing the score', async () => {
    renderRoute(`/challenges/${SLUG}?tab=debrief`);
    const submit = await screen.findByRole('button', { name: 'Submit debrief' });
    expect(submit).toBeDisabled();
    expect(
      screen.getByText(/Answer the required criteria to submit: Altitude held; Heading held/),
    ).toBeInTheDocument();

    const altitude = screen.getByRole('radiogroup', { name: /Altitude held/ });
    await userEvent.click(within(altitude).getByRole('radio', { name: /^Gold/ }));
    // 3 × 3 = 9 of 18 = 50%, but Heading (required) is still unanswered → not passed.
    expect(
      screen.getByText('9 of 18 points (unanswered criteria count as Not met)'),
    ).toBeInTheDocument();
    expect(submit).toBeDisabled();

    const heading = screen.getByRole('radiogroup', { name: /Heading held/ });
    await userEvent.click(within(heading).getByRole('radio', { name: /^Silver/ }));
    // 9 + 4 = 13 of 18 = 72% → silver; the optional lookout is unanswered.
    expect(screen.getByText('72%')).toBeInTheDocument();
    expect(submit).toBeEnabled();
    expect(screen.queryByText(/Answer the required criteria/)).not.toBeInTheDocument();
  });

  it('submits without any score fields and shows the result with review links', async () => {
    let body: Record<string, unknown> | null = null;
    server.use(
      http.post(`/api/v1/challenges/${SLUG}/attempts`, async ({ request }) => {
        body = (await request.json()) as Record<string, unknown>;
        return HttpResponse.json({ attempt: attempt(), progress }, { status: 201 });
      }),
    );
    renderRoute(`/challenges/${SLUG}?tab=debrief`);
    const altitude = await screen.findByRole('radiogroup', { name: /Altitude held/ });
    await userEvent.click(within(altitude).getByRole('radio', { name: /^Bronze/ }));
    await userEvent.click(
      within(screen.getByRole('radiogroup', { name: /Heading held/ })).getByRole('radio', {
        name: /^Gold/,
      }),
    );
    await userEvent.type(
      screen.getByLabelText('Where did you look most of the time?'),
      'Mostly inside.',
    );
    await userEvent.click(screen.getByRole('button', { name: 'Submit debrief' }));

    expect(await screen.findByRole('heading', { name: 'Your result' })).toHaveFocus();
    expect(body).toMatchObject({
      challengeVersion: 1,
      criteriaResults: [
        { criterionId: 'altitude', result: 'bronze' },
        { criterionId: 'heading', result: 'gold' },
      ],
      reflections: [{ questionId: 'eyes', answer: 'Mostly inside.' }],
    });
    expect(body).not.toHaveProperty('points');
    expect(body).not.toHaveProperty('tier');
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Review L2.2 Attitude flying and trim' }),
    ).toHaveAttribute('href', '/learn/m2-fundamentals/l2-2-attitude-flying-and-trim#trim');
    // The draft is cleared after a successful submit.
    expect(loadDebrief(SLUG, 1)).toEqual(emptyDebrief(1));
  });

  it('explains when the rubric changed since the page loaded', async () => {
    server.use(
      http.post(`/api/v1/challenges/${SLUG}/attempts`, () =>
        HttpResponse.json(
          {
            error: {
              code: 'VALIDATION_ERROR',
              message: 'This challenge was updated; please refresh.',
            },
          },
          { status: 400 },
        ),
      ),
    );
    renderRoute(`/challenges/${SLUG}?tab=debrief`);
    for (const name of [/Altitude held/, /Heading held/]) {
      const group = await screen.findByRole('radiogroup', { name });
      await userEvent.click(within(group).getByRole('radio', { name: /^Gold/ }));
    }
    await userEvent.click(screen.getByRole('button', { name: 'Submit debrief' }));
    expect(await screen.findByText('This challenge was updated')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Refresh' })).toBeInTheDocument();
  });

  it('saves the draft to sessionStorage and restores it', async () => {
    const first = renderRoute(`/challenges/${SLUG}?tab=debrief`);
    const altitude = await screen.findByRole('radiogroup', { name: /Altitude held/ });
    await userEvent.click(within(altitude).getByRole('radio', { name: /^Silver/ }));
    await userEvent.type(screen.getByLabelText('Notes'), 'Chased the VSI.');
    first.unmount();

    renderRoute(`/challenges/${SLUG}?tab=debrief`);
    expect(await screen.findByLabelText('Notes')).toHaveValue('Chased the VSI.');
    expect(
      within(screen.getByRole('radiogroup', { name: /Altitude held/ })).getByRole('radio', {
        name: /^Silver/,
      }),
    ).toBeChecked();
  });

  it('builds the request from the draft and the flight state', () => {
    const input = toAttemptInput(
      challengeDetail({
        planningFields: [
          { id: 'fuel', label: 'Fuel (gal)', type: 'number' },
          { id: 'route', label: 'Route', type: 'text' },
        ],
      }),
      {
        ...emptyDebrief(1),
        results: { altitude: 'gold', heading: 'silver' },
        reflections: { eyes: '  ' },
        planning: { fuel: '12.5', route: 'KLVK KTCY' },
      },
      {
        ...emptyFlight(),
        startedAt: '2026-09-20T17:00:00.000Z',
        ticks: { 'step-1': '2026-09-20T17:01:00.000Z' },
      },
    );
    expect(input).toMatchObject({
      reflections: [],
      planning: { fuel: 12.5, route: 'KLVK KTCY' },
      startedAt: '2026-09-20T17:00:00.000Z',
      checklistTicks: [{ itemId: 'step-1', at: '2026-09-20T17:01:00.000Z' }],
    });
  });
});

describe('challenge page', () => {
  it('asks visitors to log in, keeping their answers', async () => {
    renderRoute(`/challenges/${SLUG}?tab=debrief`);
    expect(await screen.findByText('Log in to save your result')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Submit debrief' })).not.toBeInTheDocument();
    expect(
      within(
        screen.getByText('Log in to save your result').closest('aside, div')!.parentElement!,
      ).getByRole('link', { name: /Log in/ }),
    ).toHaveAttribute(
      'href',
      `/login?returnTo=${encodeURIComponent(`/challenges/${SLUG}?tab=debrief`)}`,
    );
    expect(screen.queryByRole('tab', { name: 'History' })).not.toBeInTheDocument();
  });

  it('shows the brief with the sim setup and moves to the Fly tab', async () => {
    const { container } = renderRoute(`/challenges/${SLUG}`);
    expect(await screen.findByRole('heading', { name: 'Sim setup' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Livermore Municipal (KLVK)' })).toHaveAttribute(
      'href',
      '/reference/airports/KLVK',
    );
    expect(screen.getByRole('button', { name: 'Copy KLVK' })).toBeInTheDocument();
    expect(screen.getByText('3,500 ft MSL, heading 090°, 100 KIAS')).toBeInTheDocument();
    expect(await seriousViolations(container)).toEqual([]);

    await userEvent.click(screen.getByRole('button', { name: /set up — start/ }));
    expect(screen.getByRole('tab', { name: 'Fly' })).toHaveAttribute('aria-selected', 'true');
    const step = screen.getByRole('checkbox', { name: '1. Set 2,300 RPM.' });
    await userEvent.click(step);
    expect(JSON.parse(sessionStorage.getItem(`ltf-flight:${SLUG}`)!).ticks).toHaveProperty(
      'step-1',
    );
  });

  it('lists past attempts in the History tab', async () => {
    server.use(
      signedIn(),
      http.get('/api/v1/me/progress', () =>
        HttpResponse.json({ challenges: { [SLUG]: progress } }),
      ),
      http.get(`/api/v1/me/challenges/${SLUG}/attempts`, () =>
        HttpResponse.json({ attempts: [attempt()], nextBefore: null, progress }),
      ),
    );
    const { container } = renderRoute(`/challenges/${SLUG}?tab=history`);
    const summary = await screen.findByText('50%');
    expect(summary.closest('details')).toHaveTextContent('Altitude wandered a lot after the turn');
    await userEvent.click(summary);
    expect(screen.getByText('Mostly inside.')).toBeVisible();
    expect(screen.getByText(/Best:/)).toBeInTheDocument();
    await waitFor(async () => expect(await seriousViolations(container)).toEqual([]));
  });

  it('shows the not-found page for an unknown challenge', async () => {
    renderRoute('/challenges/c9-9-nope');
    expect(
      await screen.findByRole('heading', { name: /wandered off the taxiway/ }),
    ).toBeInTheDocument();
  });
});

describe('challenges list', () => {
  const all = [
    challengeSummary(),
    challengeSummary({
      slug: 'c4-3-landing',
      type: 'landing',
      moduleSlug: 'm4-pattern',
      difficulty: 3,
    }),
    challengeSummary({ slug: 'c5-5-engine-out', type: 'emergency', priority: 'P1', difficulty: 4 }),
  ];

  it('combines filters, including status from progress', () => {
    expect(filterChallenges(all, { type: 'landing' }).map((c) => c.slug)).toEqual(['c4-3-landing']);
    expect(filterChallenges(all, { difficulty: '1', priority: 'P0' })).toHaveLength(1);
    const p = { [SLUG]: { ...progress, bestTier: 'gold' as const } };
    expect(filterChallenges(all, { status: 'passed' }, p).map((c) => c.slug)).toEqual([SLUG]);
    expect(filterChallenges(all, { status: 'not-started' }, p)).toHaveLength(2);
  });

  it('reads filters from the URL and offers to clear them', async () => {
    const { router } = renderRoute('/challenges?difficulty=5');
    expect(await screen.findByText('No challenges match these filters')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(router.state.location.search).toBe('');
    expect(screen.getByRole('link', { name: /Climbs and descents/ })).toBeInTheDocument();
    expect(screen.getByText('Showing 2 challenges')).toBeInTheDocument();
  });
});
