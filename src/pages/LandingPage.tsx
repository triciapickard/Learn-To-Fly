import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  ClipboardCheck,
  Eye,
  Gamepad2,
  Monitor,
  PlaneTakeoff,
  SlidersHorizontal,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { DifficultyDots } from '@/components/ChallengeMeta';
import { LessonPath, type LessonStop, type LessonStopState } from '@/components/LessonPath';
import { Link } from '@/components/Link';
import { CURRICULUM_PREVIEW, FIRST_STOPS } from '@/features/landing/curriculumPreview';
import { useMyProgress } from '@/features/progress/api';
import { usePageTitle } from '@/hooks/usePageTitle';
import { cn } from '@/lib/cn';
import { plural } from '@/lib/format';
import type { ProgressResponse } from '@shared/schemas/api';

// Landing page (design system 2026, homepage redesign): the hero is type and the Module 0
// lesson path, no airplane illustration. Bands alternate canvas and surface with space-24
// padding. The one accent control on the page is the lesson path's "Start lesson" button.

const MODULE_0 = CURRICULUM_PREVIEW[0];
const MODULE_0_LESSONS = FIRST_STOPS.filter((lesson) => lesson.module === MODULE_0.slug);
const FIRST_CHALLENGE = {
  slug: 'c0-1-first-flight-over-livermore',
  code: 'Challenge C0.1',
  title: 'First flight over Livermore',
};

const STATS = [
  { value: String(CURRICULUM_PREVIEW.length), label: 'modules, one airplane' },
  {
    value: String(CURRICULUM_PREVIEW.reduce((sum, m) => sum + m.lessons, 0)),
    label: 'short interactive lessons',
  },
  {
    value: String(CURRICULUM_PREVIEW.reduce((sum, m) => sum + m.challenges, 0)),
    label: 'scored in-sim challenges',
  },
  { value: '~25 h', label: 'of lessons and sim time' },
];

const STEPS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Learn',
    text: 'Why before how, in a few short paragraphs written to you.',
    icon: BookOpen,
  },
  {
    title: 'See',
    text: 'Diagrams and cockpit views next to the words, not instead of them.',
    icon: Eye,
  },
  {
    title: 'Try',
    text: 'Change the wind, bank the airplane, answer a quick question. Check you have it.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Fly',
    text: 'A challenge in MSFS 2024 with the exact setup and clear standards.',
    icon: PlaneTakeoff,
  },
  {
    title: 'Reflect',
    text: 'Debrief honestly against a rubric. Good go-arounds count too.',
    icon: ClipboardCheck,
  },
];

const TIERS = [
  { tier: 'gold', label: 'Gold', range: '65 KIAS −5/+10', note: 'Within private pilot standards.' },
  { tier: 'silver', label: 'Silver', range: '65 KIAS ±10', note: 'A good student pilot.' },
  { tier: 'bronze', label: 'Bronze', range: '65 KIAS ±15', note: 'Safe, and worth celebrating.' },
] as const;

const TIER_RING: Record<(typeof TIERS)[number]['tier'], string> = {
  gold: 'border-tier-gold text-tier-gold',
  silver: 'border-tier-silver text-tier-silver',
  bronze: 'border-tier-bronze text-tier-bronze',
};

const SAMPLE_CHALLENGE = {
  slug: 'c4-3-full-stop-landing',
  lessonSlug: 'l4-3-normal-approach-and-landing',
  moduleSlug: 'm4-takeoffs-patterns-landings',
  setup: [
    { text: 'KLVK · Rwy 25R', mono: true },
    { text: 'Calm, clear', mono: false },
    { text: '10:00 local', mono: true },
    { text: 'Flaps 30 · 65 KIAS', mono: true },
  ],
  criteria: [
    <>
      A stabilized approach by <span className="readout-sm">300 ft AGL</span>, on speed and on the
      centerline
    </>,
    'Main wheels first, in the first third of the runway',
    'Straight on the rollout, no bounce, or a go-around if it is not working',
  ],
};

const NEEDS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'MSFS 2024, any edition',
    text: 'The course uses the Cessna 172 Skyhawk with the G1000 and airports around the San Francisco Bay, all included in every edition on PC and Xbox.',
    icon: Monitor,
  },
  {
    title: 'A controller or joystick',
    text: 'An Xbox controller is enough for every lesson and challenge. Lesson 0.2 sets it up. A yoke and rudder pedals feel more real, but they are optional.',
    icon: Gamepad2,
  },
  {
    title: 'A second screen',
    text: 'Keep a phone, tablet or laptop open beside the sim. Fly mode shows the setup, the procedure and a stopwatch in big type while you fly.',
    icon: Smartphone,
  },
];

const FAQ = [
  {
    q: 'Is this real flight training?',
    a: 'No. Learn-To-Fly is for simulation only. It borrows real-world standards so you build good habits, but it does not count toward any pilot certificate. For real flying, learn with a certified flight instructor.',
  },
  {
    q: 'Is it free?',
    a: 'Yes. Every lesson is free to read without an account. A free account saves your progress, challenge scores and attempt history.',
  },
  {
    q: 'Do I need a yoke or rudder pedals?',
    a: 'No. An Xbox controller or a basic joystick is enough to complete every lesson and challenge. A yoke and pedals make it feel more real, but they are optional.',
  },
  {
    q: 'How far does it go?',
    a: (
      <>
        Version 1 covers one airplane, the Cessna 172, done properly: from the first takeoff to a
        local checkride and a planned cross-country. Bigger airplanes come later.{' '}
        <Link to="/roadmap">See the roadmap</Link>
      </>
    ),
  },
];

/** Module 0 as lesson path stops; done and current follow the learner's progress when signed in. */
function moduleZeroStops(progress?: ProgressResponse): LessonStop[] {
  let currentFound = false;
  const stops: LessonStop[] = MODULE_0_LESSONS.map((lesson) => {
    const done = progress?.lessons[lesson.slug]?.status === 'completed';
    let state: LessonStopState = 'upcoming';
    if (done) state = 'done';
    else if (!currentFound) {
      currentFound = true;
      state = 'current';
    }
    const minutes = `${lesson.minutes} min`;
    return {
      id: lesson.slug,
      title: lesson.title,
      state,
      to: `/learn/${lesson.module}/${lesson.slug}`,
      meta:
        state === 'done'
          ? `${lesson.code} · Done`
          : state === 'current'
            ? `${lesson.code} · ${minutes} · Start here`
            : `${lesson.code} · ${minutes}`,
    };
  });
  const passed = Boolean(progress?.challenges[FIRST_CHALLENGE.slug]?.passed);
  let challengeState: LessonStopState = 'upcoming';
  if (passed) challengeState = 'done';
  else if (!currentFound) challengeState = 'current';
  stops.push({
    id: FIRST_CHALLENGE.slug,
    title: FIRST_CHALLENGE.title,
    state: challengeState,
    to: `/challenges/${FIRST_CHALLENGE.slug}`,
    meta: passed
      ? `${FIRST_CHALLENGE.code} · Passed`
      : `${FIRST_CHALLENGE.code} · Fly it in the sim, then score yourself`,
  });
  return stops;
}

/** The module to act on next: the first one with lessons left. */
function currentModuleIndex(progress?: ProgressResponse): number {
  const index = CURRICULUM_PREVIEW.findIndex((m) => !progress?.modules[m.slug]?.complete);
  return index === -1 ? CURRICULUM_PREVIEW.length - 1 : index;
}

const band = 'mx-auto w-full max-w-page px-4';
const bandPad = 'py-16 sm:py-24';

function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('eyebrow text-ink-2', className)}>{children}</p>;
}

export default function LandingPage() {
  usePageTitle();
  const { data: progress } = useMyProgress();
  const stops = moduleZeroStops(progress);
  const currentModule = currentModuleIndex(progress);
  const started = Boolean(
    progress && Object.values(progress.lessons).some((l) => l.status === 'completed'),
  );
  const nextStop = stops.find((s) => s.state === 'current');
  const nextTo = nextStop?.to ?? `/learn/${(CURRICULUM_PREVIEW[currentModule] ?? MODULE_0).slug}`;
  const nextLabel = started
    ? 'Continue where you left off'
    : nextStop
      ? `Start ${nextStop.id === FIRST_CHALLENGE.slug ? 'challenge 0.1' : 'lesson 0.1'}`
      : 'Open the course';

  return (
    <div>
      {/* Hero: type and the Module 0 lesson path, on canvas. */}
      <section
        aria-labelledby="hero-heading"
        className={cn(
          band,
          'grid gap-12 pt-16 pb-12 sm:pt-24 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16',
        )}
      >
        <div>
          <Eyebrow>Free · Cessna 172 Skyhawk · MSFS 2024</Eyebrow>
          <h1 id="hero-heading" className="display-lg sm:display-xl mt-6 max-w-[12ch]">
            Yes, you can fly a plane.
          </h1>
          <p className="body-lg mt-6 max-w-[34em] text-ink-2">
            Learn-To-Fly takes a complete beginner from the first takeoff to a planned cross-country
            flight in the Cessna 172, inside Microsoft Flight Simulator 2024. Short lessons,
            diagrams you can play with, and challenges you fly in the sim and score against real
            pilot standards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link unstyled to={nextTo}>
                {nextLabel} <ArrowRight aria-hidden strokeWidth={1.75} />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link unstyled to="/learn">
                See the curriculum
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm leading-5 text-ink-3">
            No account needed to start. Any edition of MSFS 2024, on PC or Xbox. For simulation use
            only.
          </p>
        </div>

        <Card className="w-full max-w-[460px] p-5 sm:p-6 lg:justify-self-end">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <Eyebrow>Module 0 · {MODULE_0.title}</Eyebrow>
            <p className="readout-sm text-ink-3">
              {plural(MODULE_0.lessons, 'lesson')} · {plural(MODULE_0.challenges, 'challenge')}
            </p>
          </div>
          <LessonPath
            stops={stops}
            startLabel="Start"
            aria-label="Module 0 lesson path"
            underlineTitles={false}
            className="mt-4"
          />
        </Card>
      </section>

      {/* The course at a glance. */}
      <section aria-label="The course at a glance" className={cn(band, 'pb-16 sm:pb-24')}>
        <dl className="grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <dd className="readout-lg order-first">{value}</dd>
              <dt className="text-sm leading-5 text-ink-2">{label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* How a lesson works. */}
      <section aria-labelledby="how-heading" className="bg-surface">
        <div className={cn(band, bandPad)}>
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <div className="max-w-[640px]">
              <Eyebrow>How a lesson works</Eyebrow>
              <h2 id="how-heading" className="display-md sm:display-lg mt-3">
                Read a little. Try it on the page. Fly it in the sim.
              </h2>
            </div>
            <p className="max-w-[30em] text-ink-2">
              Every lesson follows the same five steps, so you always know what comes next. Nothing
              is more than a few paragraphs before something you can see or do.
            </p>
          </div>
          <ol className="mt-12 grid gap-x-6 gap-y-8 border-t-2 border-line-strong sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map(({ title, text, icon: Icon }, index) => (
              <li key={title} className="flex flex-col gap-2.5 pt-6">
                <span aria-hidden className="readout-sm text-ink-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Icon aria-hidden className="size-5 text-ink" strokeWidth={1.75} />
                <h3 className="heading-md">
                  <span className="sr-only">Step {index + 1}: </span>
                  {title}
                </h3>
                <p className="text-sm leading-5 text-ink-2">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The curriculum: nine modules as one flight-plan style list. */}
      <section aria-labelledby="curriculum-heading" className={cn(band, bandPad)}>
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <div className="max-w-[640px]">
            <Eyebrow>The curriculum</Eyebrow>
            <h2 id="curriculum-heading" className="display-md sm:display-lg mt-3">
              Nine modules, in the order a flight school teaches them.
            </h2>
          </div>
          <p className="max-w-[30em] text-ink-2">
            From setting up the sim to a planned cross-country flight. Every lesson is free to read.{' '}
            <Link to="/learn" className="font-medium whitespace-nowrap">
              Full curriculum
            </Link>
          </p>
        </div>
        <Card className="mt-10 p-2" aria-label="Modules">
          <ol>
            {CURRICULUM_PREVIEW.map((module, index) => {
              const done = Boolean(progress?.modules[module.slug]?.complete);
              const isCurrent = progress !== undefined && index === currentModule;
              return (
                <li key={module.code} className={cn(index > 0 && 'border-t border-line')}>
                  <Link
                    unstyled
                    to={`/learn/${module.slug}`}
                    className={cn(
                      'flex flex-wrap items-baseline gap-x-6 gap-y-2 rounded-md px-4 py-5 text-ink transition-colors duration-150 hover:bg-surface-sunken',
                      isCurrent && 'bg-accent-tint hover:bg-accent-tint',
                    )}
                  >
                    <span className="readout w-12 shrink-0 text-ink-3">{module.code}</span>
                    <span className="min-w-0 flex-[1_1_320px]">
                      <span className="heading-md block">
                        <span className="sr-only">Module {module.code.slice(1)}: </span>
                        {module.title}
                      </span>
                      <span className="block text-sm leading-5 text-ink-2">{module.summary}</span>
                    </span>
                    <span className="readout-sm flex-[0_1_220px] text-ink-2">
                      {done ? (
                        <span className="inline-flex items-center gap-1.5 text-go">
                          <Check aria-hidden className="size-4" strokeWidth={2} /> Done
                        </span>
                      ) : isCurrent ? (
                        <span className="text-accent">Up next</span>
                      ) : (
                        `${plural(module.lessons, 'lesson')} · ${plural(module.challenges, 'challenge')}`
                      )}
                    </span>
                    <ChevronRight
                      aria-hidden
                      className="size-[18px] shrink-0 self-center text-ink-3"
                      strokeWidth={1.75}
                    />
                  </Link>
                </li>
              );
            })}
          </ol>
        </Card>
      </section>

      {/* Challenges: the tiers beside a real challenge card. */}
      <section aria-labelledby="challenge-heading" className="bg-surface">
        <div className={cn(band, bandPad, 'grid gap-12 lg:grid-cols-2 lg:gap-16')}>
          <div>
            <Eyebrow>Challenges</Eyebrow>
            <h2 id="challenge-heading" className="display-md sm:display-lg mt-3 max-w-[12em]">
              Bronze means you did it safely. Gold is checkride-ready.
            </h2>
            <p className="mt-6 max-w-[32em] text-ink-2">
              Each challenge gives you the exact sim setup, a step-by-step procedure and measurable
              criteria borrowed from real pilot standards. You fly it, you score it, and the site
              keeps your attempts so you can watch yourself improve.
            </p>
            <ul aria-label="Tiers for final approach speed" className="mt-6 border-t border-line">
              {TIERS.map(({ tier, label, range, note }) => (
                <li
                  key={tier}
                  className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-line py-3.5"
                >
                  <span
                    aria-hidden
                    className={cn('size-5 shrink-0 rounded-pill border-2', TIER_RING[tier])}
                  />
                  <span className={cn('w-[72px] text-sm leading-5 font-semibold', TIER_RING[tier])}>
                    {label}
                  </span>
                  <span className="readout w-40">{range}</span>
                  <span className="flex-[1_1_160px] text-sm leading-5 text-ink-2">{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="w-full max-w-[560px] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <Eyebrow>Challenge C4.3 · Landing</Eyebrow>
              <p className="inline-flex items-center gap-2 text-sm leading-5 text-ink-2">
                <span aria-hidden>Difficulty</span>
                <DifficultyDots value={3} />
                <span aria-hidden className="readout-sm">
                  3 of 5
                </span>
              </p>
            </div>
            <h3 className="display-md mt-5">Full-stop landing</h3>
            <p className="mt-4 text-ink-2">
              Fly a pattern and land in the first third of the runway, on the centerline, without
              bouncing.
            </p>
            <ul aria-label="Sim setup" className="mt-5 flex flex-wrap gap-2">
              {SAMPLE_CHALLENGE.setup.map(({ text, mono }) => (
                <li
                  key={text}
                  className={cn(
                    'rounded-sm bg-surface-sunken px-3 py-1.5 text-sm leading-5',
                    mono && 'readout-sm',
                  )}
                >
                  {text}
                </li>
              ))}
            </ul>
            <h4 className="heading-sm mt-5">You are scored on</h4>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-5 text-ink-2">
              {SAMPLE_CHALLENGE.criteria.map((criterion, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-ink"
                    strokeWidth={1.75}
                  />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
              <span className="text-sm leading-5 text-ink-3">
                Est. <span className="readout-sm">20 min</span> · Builds on{' '}
                <Link
                  to={`/learn/${SAMPLE_CHALLENGE.moduleSlug}/${SAMPLE_CHALLENGE.lessonSlug}`}
                  quiet
                >
                  lesson 4.3
                </Link>
              </span>
              <Button variant="secondary" size="md" asChild>
                <Link unstyled to={`/challenges/${SAMPLE_CHALLENGE.slug}`}>
                  Read the procedure
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* What you need. */}
      <section aria-labelledby="need-heading" className={cn(band, bandPad)}>
        <div className="max-w-[640px]">
          <Eyebrow>What you need</Eyebrow>
          <h2 id="need-heading" className="display-md sm:display-lg mt-3">
            The sim you already have, and a browser next to it.
          </h2>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {NEEDS.map(({ title, text, icon: Icon }) => (
            <li key={title}>
              <Card className="h-full p-6">
                <Icon aria-hidden className="size-6 text-ink" strokeWidth={1.75} />
                <h3 className="heading-md mt-3">{title}</h3>
                <p className="mt-2 text-sm leading-5 text-ink-2">{text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      {/* Questions. */}
      <section aria-labelledby="faq-heading" className="bg-surface">
        <div className={cn(band, bandPad)}>
          <h2 id="faq-heading" className="display-md">
            Questions
          </h2>
          <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQ.map((item) => (
              <div key={item.q} className="border-t border-line pt-5">
                <dt className="heading-md">{item.q}</dt>
                <dd className="mt-2 text-ink-2">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final call to action. */}
      <section
        aria-labelledby="cta-heading"
        className={cn(
          band,
          bandPad,
          'flex flex-wrap items-center justify-between gap-x-16 gap-y-8',
        )}
      >
        <div className="max-w-[640px]">
          <h2 id="cta-heading" className="display-md sm:display-lg">
            Lesson 0.1 takes five minutes. Start there.
          </h2>
          <p className="mt-3 max-w-[32em] text-ink-2">
            You will know how the course works, what a challenge looks like and whether this is for
            you. No account, no download.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <Link unstyled to={nextTo}>
              {nextLabel} <ArrowRight aria-hidden strokeWidth={1.75} />
            </Link>
          </Button>
          {!progress && (
            <Button variant="secondary" size="lg" asChild>
              <Link unstyled to="/signup">
                Create a free account
              </Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
