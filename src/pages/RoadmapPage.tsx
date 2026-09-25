import { Check } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { usePageTitle } from '@/hooks/usePageTitle';
import { cn } from '@/lib/cn';

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
        description="One airplane at a time, each done properly before adding the next. The aircraft list is a plan, not a promise — it depends on what the sim offers and how well each aircraft is documented."
      />
      <ol className="relative flex flex-col gap-4 border-l-2 border-border pl-6">
        {LADDER.map((rung) => (
          <li key={rung.step} className="relative">
            <span
              aria-hidden
              className={cn(
                'absolute top-3 -left-[33px] flex size-4 items-center justify-center rounded-full border-2',
                rung.current
                  ? 'border-success bg-success text-surface'
                  : 'border-border-strong bg-surface',
              )}
            >
              {rung.current && <Check className="size-3" />}
            </span>
            <div
              className={cn(
                'rounded-card border bg-surface p-4',
                rung.current ? 'border-success' : 'border-border',
              )}
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-muted">Step {rung.step}</p>
                {rung.current && <Badge variant="complete">Version 1</Badge>}
              </div>
              <h2 className="mt-1 text-lg font-semibold">{rung.title}</h2>
              <p className="text-muted">
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
