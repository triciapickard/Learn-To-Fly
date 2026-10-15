import { Check } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { usePageTitle } from '@/hooks/usePageTitle';
import { cn } from '@/lib/cn';
import { LIVE_MODULES, RELEASE_LABEL, RELEASE_STAGE } from '@/lib/release';

const LADDER = [
  {
    step: 1,
    title: 'Single-engine piston trainer',
    example: 'Cessna 172',
    skills: 'Fundamentals, VFR flying',
    current: true,
  },
  {
    step: 2,
    title: 'High-performance single',
    example: 'Constant-speed prop, retractable gear',
    skills: 'Prop control, gear, higher speeds',
  },
  {
    step: 3,
    title: 'Twin piston',
    example: 'A light twin',
    skills: 'Multi-engine flying, engine-out handling',
  },
  {
    step: 4,
    title: 'Turboprop',
    example: 'King Air class',
    skills: 'Turbine engines, pressurisation',
  },
  { step: 5, title: 'Light jet', example: 'CJ4 class', skills: 'Jet handling, FMS, high altitude' },
  {
    step: 6,
    title: 'Narrow-body airliner',
    example: 'A320 family / 737 class',
    skills: 'Airline procedures, SOPs, crew coordination',
  },
  { step: 7, title: 'Wide-body airliner', example: '787 class', skills: 'Long-haul operations' },
  {
    step: 8,
    title: 'Airbus A380',
    example: 'The final goal',
    skills: 'Very large aircraft operations',
  },
];

/** Where the course stands today and what lands next (v1.md D-26). */
const NOW = [
  {
    label: 'Live now',
    text: `${LIVE_MODULES}: how the course works, setting up MSFS 2024 for training, your first flight, and the Skyhawk's controls, G1000 cockpit, systems, speeds and checklists. Two challenges, every reference page, accounts, progress and the dashboard.`,
    state: 'done' as const,
  },
  {
    label: 'Next',
    text: 'Modules 2 to 8, one at a time: the four fundamentals, ground operations, takeoffs, patterns and landings, slow flight, stalls and emergencies, VFR navigation, radio work and the capstone checkride. Each is written and is published once it has been flown and checked in the current sim.',
    state: 'current' as const,
  },
  {
    label: 'Then',
    text: 'Version 1.0: the whole Cessna 172 course, verified end to end.',
    state: 'upcoming' as const,
  },
];

const NEXT = [
  'Auto-grading: a companion app that reads your flight from the sim and scores challenges for you (PC).',
  'More depth in the Cessna 172: night flying, crosswind mastery, mountain flying and basic instrument flying.',
  'More home regions beyond the San Francisco Bay Area.',
];

export default function RoadmapPage() {
  usePageTitle('Roadmap');
  return (
    <PageContainer narrow>
      <PageHeader
        title="The road to the A380"
        description="One airplane at a time, each done properly before adding the next. The aircraft list is a plan, not a promise: it depends on what the sim offers and how well each aircraft is documented."
      />
      <section aria-labelledby="now-heading" className="mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <h2 id="now-heading" className="text-2xl font-bold">
            Where we are now
          </h2>
          <Badge variant="accent">
            {RELEASE_STAGE} {RELEASE_LABEL}
          </Badge>
        </div>
        <dl className="mt-4 grid gap-3 sm:grid-cols-3">
          {NOW.map((item) => (
            <div
              key={item.label}
              className={cn(
                'rounded-lg border bg-surface p-4',
                item.state === 'current' ? 'border-accent-line bg-accent-tint' : 'border-line',
              )}
            >
              <dt
                className={cn(
                  'eyebrow',
                  item.state === 'current'
                    ? 'text-accent'
                    : item.state === 'done'
                      ? 'text-go'
                      : 'text-ink-2',
                )}
              >
                {item.label}
              </dt>
              <dd className="mt-2 text-sm leading-5 text-ink-2">{item.text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-sm leading-5 text-ink-2">
          Found a problem in the beta? Say so on the <Link to="/about">About page</Link>&apos;s
          contact link.
        </p>
      </section>
      <h2 className="mb-4 text-2xl font-bold">The aircraft ladder</h2>
      <ol className="relative flex flex-col gap-4 border-l-2 border-line pl-6">
        {LADDER.map((rung) => (
          <li key={rung.step} className="relative">
            <span
              aria-hidden
              className={cn(
                'absolute top-3 -left-[33px] flex size-4 items-center justify-center rounded-full border-2',
                rung.current ? 'border-go bg-go text-surface' : 'border-line-strong bg-surface',
              )}
            >
              {rung.current && <Check className="size-3" />}
            </span>
            <div
              className={cn(
                'rounded-lg border bg-surface p-4',
                rung.current ? 'border-go' : 'border-line',
              )}
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-ink-2">Step {rung.step}</p>
                {rung.current && <Badge variant="accent">Version 1 · in progress</Badge>}
              </div>
              <h2 className="mt-1 text-lg font-semibold">{rung.title}</h2>
              <p className="text-ink-2">
                {rung.example} · {rung.skills}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <h2 className="mt-12 text-2xl font-bold">Also planned</h2>
      <ul className="mt-4 flex list-disc flex-col gap-2 pl-6">
        {NEXT.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </PageContainer>
  );
}
