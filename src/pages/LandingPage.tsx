import { ChevronRight } from 'lucide-react';
import { DifficultyDots, TierBadge } from '@/components/ChallengeMeta';
import { Link } from '@/components/Link';
import { CURRICULUM_PREVIEW } from '@/features/landing/curriculumPreview';
import { HeroIllustration } from '@/features/landing/HeroIllustration';
import { WidgetBlock } from '@/features/lessons/blocks/WidgetBlock';
import { usePageTitle } from '@/hooks/usePageTitle';
import { cn } from '@/lib/cn';
import { plural } from '@/lib/format';
import { FIRST_LESSON_PATH } from '@shared/constants';

// Landing page, redesign direction C ("Skyhawk livery"): big condensed display type,
// livery stripes and navy bands. In dark mode the page switches to its own "night livery"
// palette (the .livery overrides in tokens.css). Section order follows v1.md Section 20.1.

const STEPS = [
  {
    title: 'Learn',
    text: 'Short explanations, never more than a few paragraphs before something visual.',
  },
  { title: 'See', text: 'Diagrams and cockpit views that show the idea next to the words.' },
  { title: 'Try', text: 'Interactive widgets and quick questions to check you have it.' },
  { title: 'Fly', text: 'A challenge in MSFS 2024 with an exact setup and clear standards.' },
  { title: 'Reflect', text: 'Debrief honestly with a scored rubric and see yourself improve.' },
];

const FAQ = [
  {
    q: 'Do I need a yoke or rudder pedals?',
    a: 'No. An Xbox controller or a basic joystick is enough to complete every lesson and challenge. Lesson 0.2 shows you how to set up your controls. A yoke and pedals make it feel more real, but they are optional.',
  },
  {
    q: 'Which edition of Microsoft Flight Simulator 2024 do I need?',
    a: 'Any edition. The course uses the Cessna 172 Skyhawk and airports in the San Francisco Bay Area, which are available to every MSFS 2024 player.',
  },
  {
    q: 'Is this real flight training?',
    a: 'No. Learn-To-Fly is for simulation only. It borrows real-world standards so you build good habits, but it does not count toward any pilot certificate. For real flying, learn with a certified flight instructor.',
  },
  {
    q: 'Is it free?',
    a: 'Yes. Every lesson is free to read without an account. A free account saves your progress, challenge scores and attempt history.',
  },
  {
    q: 'Does it work with Xbox as well as PC?',
    a: 'Yes. The site runs in any modern browser, so keep it open on a phone, tablet or laptop next to your Xbox or PC. Challenge "fly mode" is designed for a second screen.',
  },
];

const TOTAL_LESSONS = CURRICULUM_PREVIEW.reduce((sum, module) => sum + module.lessons, 0);
const TOTAL_CHALLENGES = CURRICULUM_PREVIEW.reduce((sum, module) => sum + module.challenges, 0);

const STATS = [
  { value: String(CURRICULUM_PREVIEW.length), label: 'modules, one airplane' },
  { value: String(TOTAL_LESSONS), label: 'short interactive lessons' },
  { value: String(TOTAL_CHALLENGES), label: 'scored in-sim challenges' },
  { value: '~25 h', label: 'of lessons and sim time' },
];

const TIERS = [
  { tier: 'gold', range: '65 KIAS −5/+10' },
  { tier: 'silver', range: '65 KIAS ±10' },
  { tier: 'bronze', range: '65 KIAS ±15' },
] as const;

/** Section heading in the livery display face. */
const displayHeading =
  'font-display font-black uppercase leading-[0.9] text-[clamp(3rem,6vw,5.5rem)]';

const pillButton =
  'inline-flex min-h-13 items-center justify-center rounded-full px-6 text-lg font-bold transition-colors duration-150';

export default function LandingPage() {
  usePageTitle();
  return (
    <div className="livery bg-bg text-text">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-10 sm:pt-14">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h1 className="font-display text-[clamp(3.75rem,10vw,9rem)] leading-[0.86] font-black uppercase">
            Learn to fly <br />
            <span className="text-primary">the Skyhawk.</span>
          </h1>
          <div className="flex flex-[0_1_22rem] flex-col gap-5 pb-3">
            <p className="text-lg text-muted">
              Short interactive lessons and in-sim challenges take a complete beginner from first
              takeoff to a planned cross-country flight in the Cessna 172 in Microsoft Flight
              Simulator 2024.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                unstyled
                to={FIRST_LESSON_PATH}
                className={cn(pillButton, 'bg-cta text-cta-text hover:bg-cta-hover')}
              >
                Start lesson 1 (free)
              </Link>
              <Link
                unstyled
                to="/learn"
                className={cn(pillButton, 'border-2 border-text text-text hover:bg-surface-2')}
              >
                See the curriculum
              </Link>
            </div>
            <p className="text-sm text-muted">
              No account needed to start. For simulation use only.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6 overflow-hidden">
        <HeroIllustration className="block h-auto min-h-[280px] w-full" />
      </div>

      {/* At a glance */}
      <section aria-label="The course at a glance" className="bg-band text-band-text">
        <ul className="mx-auto grid max-w-7xl gap-6 px-4 py-9 sm:grid-cols-2 sm:px-10 lg:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <li key={label}>
              <span className="block font-display text-6xl leading-none font-black">{value}</span>
              <span className="text-band-muted">{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section
        aria-labelledby="how-heading"
        className="mx-auto max-w-7xl px-4 pt-24 pb-14 sm:px-10"
      >
        <h2 id="how-heading" className={cn(displayHeading, 'mb-12 max-w-[12em]')}>
          Each lesson, the same five steps.
        </h2>
        <ol className="grid border-t-[3px] border-rule sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map(({ title, text }, index) => (
            <li key={title} className="flex flex-col gap-2.5 py-6 pr-6">
              <span
                aria-hidden
                className={cn(
                  'font-display text-6xl leading-none font-black',
                  title === 'Fly' ? 'text-primary' : 'text-border-strong',
                )}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-bold">
                <span className="sr-only">Step {index + 1}: </span>
                {title}
              </h3>
              <p className="text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Live widget demo (step 6.31): W7 needs no API data, so it works for every visitor. */}
      <section aria-labelledby="demo-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 id="demo-heading" className={displayHeading}>
            Try it <br />
            right here.
          </h2>
          <p className="max-w-[24em] text-muted">
            Lessons are built around interactive diagrams. Press Play to fly a traffic pattern,
            change the wind and watch the airplane crab, or turn on the radio calls.
          </p>
        </div>
        <div id="landing-widget-demo" className="rounded-3xl bg-surface-2 p-4 sm:p-6">
          <WidgetBlock name="traffic-pattern" props={{ calls: 'true' }} />
        </div>
      </section>

      {/* Curriculum preview */}
      <section
        aria-labelledby="curriculum-heading"
        className="mx-auto max-w-7xl px-4 pt-14 pb-24 sm:px-10"
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 id="curriculum-heading" className={displayHeading}>
            Nine modules. <br />
            Every detail verified.
          </h2>
          <p className="max-w-[24em] text-muted">
            Built in the same order real flight schools teach, from setting up the sim to a
            cross-country flight.{' '}
            <Link to="/learn" className="inline-flex items-center gap-1 font-bold">
              Full curriculum <ChevronRight aria-hidden className="size-4" />
            </Link>
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CURRICULUM_PREVIEW.map((module, index) => {
            const last = index === CURRICULUM_PREVIEW.length - 1;
            return (
              <li
                key={module.code}
                className={cn(
                  'flex items-start gap-5 rounded-2xl p-7',
                  last ? 'bg-band text-band-text' : 'bg-surface-2',
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'min-w-[1.1em] font-display text-6xl leading-[0.85] font-black',
                    index === 0 && 'text-primary',
                  )}
                >
                  {module.code.slice(1)}
                </span>
                <div>
                  <h3 className="mb-1.5 text-xl font-bold">
                    <span className="sr-only">Module {module.code.slice(1)}: </span>
                    {module.title}
                  </h3>
                  <p className={cn('mb-2.5', last ? 'text-band-muted' : 'text-muted')}>
                    {module.summary}
                  </p>
                  <p
                    className={cn('text-sm font-semibold', last ? 'text-band-muted' : 'text-muted')}
                  >
                    {plural(module.lessons, 'lesson')} · {plural(module.challenges, 'challenge')}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* What a challenge looks like */}
      <section aria-labelledby="challenge-heading" className="bg-band text-band-text">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-16 px-4 py-24 sm:px-10">
          <div className="flex flex-[1_1_24rem] flex-col gap-5">
            <h2 id="challenge-heading" className={displayHeading}>
              Bronze. Silver. <br />
              <span className="text-band-gold">Gold.</span>
            </h2>
            <p className="text-band-muted">
              Each challenge gives you the exact sim setup (airport, runway, weather, time and
              fuel), a step-by-step procedure and measurable criteria borrowed from real pilot
              standards. Bronze means you did it safely, Silver is a good student pilot, and Gold is
              checkride-ready.
            </p>
          </div>
          <div className="flex min-w-0 flex-[1_1_28rem] flex-col gap-5 rounded-3xl bg-surface p-8 text-text">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-bold tracking-widest text-primary uppercase">
                Challenge C4.3
              </p>
              {/* Visible words beside the dots; the dots carry the accessible name. */}
              <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted">
                <span aria-hidden>Difficulty</span>
                <DifficultyDots value={3} />
                <span aria-hidden>3 of 5</span>
              </span>
            </div>
            <h3 className="font-display text-5xl leading-[0.95] font-black uppercase">
              Full-stop landing
            </h3>
            <p className="text-muted">
              Fly a pattern and land in the first third of the runway, on the centerline, without
              bouncing.
            </p>
            <ul aria-label="Sim setup" className="flex flex-wrap gap-2 text-sm font-semibold">
              <li className="rounded-full bg-surface-2 px-3.5 py-2 font-mono">KLVK · Rwy 25R</li>
              <li className="rounded-full bg-surface-2 px-3.5 py-2">Calm, clear</li>
              <li className="rounded-full bg-surface-2 px-3.5 py-2 font-mono">10:00 local</li>
            </ul>
            <div>
              <p className="mb-2 font-semibold">Final approach speed</p>
              <ul className="grid gap-2 sm:grid-cols-3">
                {TIERS.map(({ tier, range }) => (
                  <li
                    key={tier}
                    className="flex flex-col items-start gap-2 rounded-2xl bg-surface-2 p-3.5"
                  >
                    <TierBadge tier={tier} />
                    <span className="font-mono text-sm">{range}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Honest scope */}
      <section aria-labelledby="scope-heading" className="mx-auto max-w-7xl px-4 pt-24 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-y-[3px] border-rule py-6">
          <div>
            <h2 id="scope-heading" className="font-display text-3xl font-black uppercase">
              Honest scope
            </h2>
            <p className="text-muted">
              Version 1 covers one airplane, the Cessna 172, done properly. The long road to the
              Airbus A380 comes next.
            </p>
          </div>
          <Link to="/roadmap" className="inline-flex items-center gap-1 font-bold">
            See the roadmap <ChevronRight aria-hidden className="size-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl px-4 py-24 sm:px-10">
        <h2
          id="faq-heading"
          className="mb-7 font-display text-6xl leading-[0.95] font-black uppercase"
        >
          Questions
        </h2>
        <div className="flex flex-col gap-2.5">
          {FAQ.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-surface-2">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold">
                {item.q}
                <ChevronRight
                  aria-hidden
                  className="size-5 shrink-0 transition-transform group-open:rotate-90"
                />
              </summary>
              <p className="px-6 pb-5 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cta-band text-cta-band-text">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 py-24 sm:px-10">
          <div>
            <h2 className="mb-3 font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.88] font-black uppercase">
              Ready for your <br />
              first flight?
            </h2>
            <p className="text-lg">Lesson 0.1 takes about five minutes and needs no account.</p>
          </div>
          <Link
            unstyled
            to={FIRST_LESSON_PATH}
            className={cn(
              pillButton,
              'min-h-14 bg-white px-8 text-cta-band-button hover:opacity-90',
            )}
          >
            Start lesson 1 (free)
          </Link>
        </div>
      </section>
    </div>
  );
}
