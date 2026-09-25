import {
  BookOpen,
  ChevronRight,
  Eye,
  MessageSquareQuote,
  MousePointerClick,
  Plane,
} from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card, CardBody, CardHeader } from '@/components/Card';
import { DifficultyDots, TierBadge, TypeIcon } from '@/components/ChallengeMeta';
import { Link } from '@/components/Link';
import { CURRICULUM_PREVIEW, FIRST_LESSON_PATH } from '@/features/landing/curriculumPreview';
import { HeroIllustration } from '@/features/landing/HeroIllustration';
import { WidgetBlock } from '@/features/lessons/blocks/WidgetBlock';
import { usePageTitle } from '@/hooks/usePageTitle';
import { plural } from '@/lib/format';

const STEPS = [
  {
    icon: BookOpen,
    title: 'Learn',
    text: 'Short explanations — never more than a few paragraphs before something visual.',
  },
  {
    icon: Eye,
    title: 'See',
    text: 'Diagrams and cockpit views that show the idea next to the words.',
  },
  {
    icon: MousePointerClick,
    title: 'Try',
    text: 'Interactive widgets and quick questions to check you have it.',
  },
  {
    icon: Plane,
    title: 'Fly',
    text: 'A challenge in MSFS 2024 with an exact setup and clear standards.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Reflect',
    text: 'Debrief honestly with a scored rubric and see yourself improve.',
  },
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

export default function LandingPage() {
  usePageTitle();
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:py-16 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Badge variant="info" className="self-start">
              Cessna 172 · Microsoft Flight Simulator 2024
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Learn to fly the Cessna 172 in Microsoft Flight Simulator 2024 — the way real pilots
              do.
            </h1>
            <p className="text-lg text-muted">
              Short interactive lessons, visual explanations and in-sim challenges take you from
              your first takeoff to a planned cross-country flight, with checklists, precise speeds
              and proper radio calls from day one.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link unstyled to={FIRST_LESSON_PATH}>
                  Start lesson 1 (free)
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link unstyled to="/learn">
                  See the curriculum
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted">
              No account needed to start. For simulation use only.
            </p>
          </div>
          <div className="overflow-hidden rounded-card border border-border shadow-2">
            <HeroIllustration className="block h-auto w-full" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-heading" className="mx-auto max-w-7xl px-4 py-14">
        <h2 id="how-heading" className="text-3xl font-bold">
          How it works
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Every lesson follows the same rhythm, so you always know what comes next.
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <li key={title}>
              <Card className="h-full">
                <CardBody className="flex flex-col gap-2">
                  <Icon aria-hidden className="size-7 text-primary" />
                  <h3 className="text-lg font-semibold">
                    <span className="sr-only">Step {index + 1}: </span>
                    {title}
                  </h3>
                  <p className="text-muted">{text}</p>
                </CardBody>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      {/* Live widget demo (step 6.31): W7 needs no API data, so it works for every visitor. */}
      <section aria-labelledby="demo-heading" className="bg-surface-2 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="demo-heading" className="text-3xl font-bold">
            Try it right here
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Lessons are built around interactive diagrams. Press Play to fly a traffic pattern,
            change the wind and watch the airplane crab, or turn on the radio calls.
          </p>
          <div id="landing-widget-demo" className="mt-8 max-w-5xl">
            <WidgetBlock name="traffic-pattern" props={{ calls: 'true' }} />
          </div>
        </div>
      </section>

      {/* Curriculum preview */}
      <section aria-labelledby="curriculum-heading" className="mx-auto max-w-7xl px-4 py-14">
        <h2 id="curriculum-heading" className="text-3xl font-bold">
          Nine modules, one airplane, done properly
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          About 25 hours of lessons and sim time, built in the same order real flight schools teach.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CURRICULUM_PREVIEW.map((module) => (
            <li key={module.code}>
              <Card className="h-full">
                <CardBody className="flex h-full flex-col gap-2">
                  <p className="text-sm font-semibold text-primary">
                    Module {module.code.slice(1)}
                  </p>
                  <h3 className="text-lg font-semibold">{module.title}</h3>
                  <p className="flex-1 text-muted">{module.summary}</p>
                  <p className="text-sm text-muted">
                    {plural(module.lessons, 'lesson')} · {plural(module.challenges, 'challenge')}
                  </p>
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
        <Link to="/learn" className="mt-6 inline-flex items-center gap-1">
          See the full curriculum <ChevronRight aria-hidden className="size-4" />
        </Link>
      </section>

      {/* What a challenge looks like */}
      <section aria-labelledby="challenge-heading" className="bg-surface-2 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2">
          <div>
            <h2 id="challenge-heading" className="text-3xl font-bold">
              What a challenge looks like
            </h2>
            <p className="mt-3 text-muted">
              Each challenge gives you the exact sim setup — airport, runway, weather, time and fuel
              — a step-by-step procedure and measurable criteria borrowed from real pilot standards.
            </p>
            <p className="mt-3 text-muted">
              After you fly, you debrief honestly against the rubric. Bronze means you did it
              safely, Silver is a good student pilot, and Gold is checkride-ready.
            </p>
          </div>
          <Card>
            <CardHeader className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-muted">C4.3 · Challenge brief</p>
                <h3 className="text-xl font-bold">Full-stop landing</h3>
              </div>
              <div className="flex items-center gap-3">
                <TypeIcon type="landing" />
                <DifficultyDots value={3} />
              </div>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <p>
                Fly a pattern and land in the first third of the runway, on the centerline, without
                bouncing.
              </p>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <dt className="text-muted">Airport</dt>
                <dd className="font-mono">KLVK · Runway 25R</dd>
                <dt className="text-muted">Weather</dt>
                <dd>Calm, clear</dd>
                <dt className="text-muted">Time</dt>
                <dd className="font-mono">10:00 local</dd>
              </dl>
              <div>
                <p className="font-semibold">Final approach speed</p>
                <ul className="mt-2 flex flex-col gap-1 text-sm">
                  <li className="flex items-center gap-2">
                    <TierBadge tier="gold" /> 65 KIAS −5/+10
                  </li>
                  <li className="flex items-center gap-2">
                    <TierBadge tier="silver" /> 65 KIAS ±10
                  </li>
                  <li className="flex items-center gap-2">
                    <TierBadge tier="bronze" /> 65 KIAS ±15
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Honest scope */}
      <section aria-labelledby="scope-heading" className="mx-auto max-w-7xl px-4 py-14">
        <h2 id="scope-heading" className="text-3xl font-bold">
          Honest scope
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Version 1 covers one airplane, the Cessna 172, done properly. The long road to the Airbus
          A380 comes next.
        </p>
        <Link to="/roadmap" className="mt-4 inline-flex items-center gap-1">
          See the roadmap <ChevronRight aria-hidden className="size-4" />
        </Link>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-4 py-14">
        <h2 id="faq-heading" className="text-3xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-6 flex flex-col gap-3">
          {FAQ.map((item) => (
            <details key={item.q} className="group rounded-card border border-border bg-surface">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-semibold">
                {item.q}
                <ChevronRight
                  aria-hidden
                  className="size-5 shrink-0 transition-transform group-open:rotate-90"
                />
              </summary>
              <p className="px-5 pb-4 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="text-3xl font-bold">Ready for your first flight?</h2>
          <p className="max-w-xl text-muted">
            Lesson 0.1 takes about ten minutes and needs no account.
          </p>
          <Button size="lg" asChild>
            <Link unstyled to={FIRST_LESSON_PATH}>
              Start lesson 1 (free)
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
