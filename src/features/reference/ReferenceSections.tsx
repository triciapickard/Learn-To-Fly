import * as TabsPrimitive from '@radix-ui/react-tabs';
import { TriangleAlert } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { Badge } from '@/components/Badge';
import { Callout } from '@/components/Callout';
import { Link } from '@/components/Link';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { cn } from '@/lib/cn';
import { plural } from '@/lib/format';
import type {
  AircraftDto,
  AirportDto,
  ChecklistDto,
  GlossaryTermDto,
  ResourceDto,
} from '@shared/schemas/api';
import { RESOURCE_TYPES } from '@shared/schemas/content';
import { ROLE_LABELS } from './airports';
import { MODE_LABELS } from './checklists';
import { groupByLetter, LETTERS } from './glossary';
import { PowerSettingsTable } from './PowerSettingsTable';
import { humanize } from './resources';

export const SECTION_IDS = ['speeds', 'checklists', 'airports', 'glossary', 'resources'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

interface Sources {
  aircraft: AircraftDto;
  checklists?: ChecklistDto[];
  airports?: AirportDto[];
  terms?: GlossaryTermDto[];
  resources?: ResourceDto[];
}

const SECTIONS: { id: SectionId; number: string; title: string; to: string }[] = [
  { id: 'speeds', number: '01', title: 'V-speeds and limits', to: '/reference/speeds' },
  { id: 'checklists', number: '02', title: 'Checklists', to: '/reference/checklists' },
  { id: 'airports', number: '03', title: 'Airports', to: '/reference/airports' },
  { id: 'glossary', number: '04', title: 'Glossary', to: '/reference/glossary' },
  { id: 'resources', number: '05', title: 'Resources', to: '/reference/resources' },
];

function metaFor(id: SectionId, s: Sources): string {
  switch (id) {
    case 'speeds':
      return `${plural(Object.keys(s.aircraft.vspeeds).length, 'speed')}, 3 arcs`;
    case 'checklists':
      return s.checklists ? plural(s.checklists.length, 'list') : 'Loading';
    case 'airports':
      return s.airports ? `${plural(s.airports.length, 'Bay Area field')}` : 'Loading';
    case 'glossary':
      return s.terms ? plural(s.terms.length, 'term') : 'Loading';
    case 'resources':
      return s.resources ? `${s.resources.length} links, mostly free` : 'Loading';
  }
}

function Loading({ label }: { label: string }) {
  return (
    <LoadingRegion label={label} className="flex flex-col gap-3">
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-40 w-full" />
    </LoadingRegion>
  );
}

function PanelHeader({
  number,
  title,
  to,
  linkText,
}: {
  number: string;
  title: string;
  to: string;
  linkText: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-4">
      <h2 className="heading-md">
        Section {number}. {title}
      </h2>
      <Link to={to} className="text-sm">
        {linkText}
      </Link>
    </div>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-md border border-line bg-surface-sunken px-4 py-3.5">
      <p className="eyebrow text-ink-2">{label}</p>
      <p className="readout mt-0.5 text-xl">{value}</p>
      <p className="text-sm leading-5 text-ink-2">{note}</p>
    </div>
  );
}

function SpeedsPanel({ aircraft }: { aircraft: AircraftDto }) {
  const va = aircraft.limits.maneuveringSpeed;
  const vg = aircraft.vspeeds.vg;
  return (
    <div className="flex flex-col gap-4">
      <PanelHeader
        number="01"
        title="Power settings by phase"
        to="/reference/speeds"
        linkText={`All ${plural(Object.keys(aircraft.vspeeds).length, 'speed')}`}
      />
      <PowerSettingsTable
        rows={aircraft.powerSettings}
        caption="Power settings by phase"
        hideCaption
      />
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat
          label="Maneuvering (Va)"
          value={va.map((m) => m.kias).join(' · ')}
          note={`at ${va.map((m) => `${m.weightLb.toLocaleString('en-US')}`).join(', ')} lb`}
        />
        <Stat
          label="Max demonstrated crosswind"
          value={`${aircraft.limits.maxDemonstratedCrosswindKt} kt`}
          note="Demonstrated, not a limit"
        />
        {vg?.kias !== undefined ? (
          <Stat label="Best glide (Vg)" value={`${vg.kias} KIAS`} note={vg.notes ?? vg.meaning} />
        ) : (
          <Stat
            label="Green arc"
            value={`${aircraft.arcs.green[0]}–${aircraft.arcs.green[1]} KIAS`}
            note="Normal operating range"
          />
        )}
      </div>
    </div>
  );
}

function ChecklistsPanel({ checklists }: { checklists?: ChecklistDto[] }) {
  if (!checklists) return <Loading label="Loading checklists" />;
  return (
    <div className="flex flex-col gap-4">
      <PanelHeader
        number="02"
        title="Checklists in flight order"
        to="/reference/checklists"
        linkText="Open the runner"
      />
      <ol className="divide-y divide-line border-y border-line">
        {checklists.map((c, i) => {
          const emergency = c.phase.toLowerCase() === 'emergency';
          return (
            <li key={c.slug} className="flex min-h-12 items-center gap-3 py-2 text-sm leading-5">
              <span className="readout w-7 text-ink-3">{String(i + 1).padStart(2, '0')}</span>
              {emergency && (
                <TriangleAlert
                  aria-hidden
                  className="size-4 shrink-0 text-warn"
                  strokeWidth={1.75}
                />
              )}
              <Link to={`/reference/checklists/${c.slug}`} quiet className="flex-1 font-semibold">
                {c.title}
              </Link>
              <Badge variant={emergency ? 'warn' : 'neutral'} icon={false}>
                {emergency ? 'Emergency' : MODE_LABELS[c.mode]}
              </Badge>
              <span className="readout w-16 text-right text-ink-2">
                {plural(c.items.length, 'item')}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

const longestRunway = (a: AirportDto) =>
  [...a.runways].sort((x, y) => (y.lengthFt ?? 0) - (x.lengthFt ?? 0))[0]!;

function AirportsPanel({ airports }: { airports?: AirportDto[] }) {
  if (!airports) return <Loading label="Loading airports" />;
  const roles = (['training', 'destination', 'awareness'] as const).filter((r) =>
    airports.some((a) => a.role === r),
  );
  return (
    <div className="flex flex-col gap-4">
      <PanelHeader
        number="03"
        title="Airports in the course"
        to="/reference/airports"
        linkText="All airports with runways and challenges"
      />
      {roles.map((role) => (
        <div key={role}>
          <p className="eyebrow mb-1 text-ink-2">{ROLE_LABELS[role]}</p>
          <ul className="divide-y divide-line border-y border-line">
            {airports
              .filter((a) => a.role === role)
              .map((a) => {
                const rwy = longestRunway(a);
                return (
                  <li
                    key={a.icao}
                    className="flex min-h-11 flex-wrap items-center gap-x-3 gap-y-1 py-1.5 text-sm leading-5"
                  >
                    <Link
                      to={`/reference/airports/${a.icao}`}
                      quiet
                      className="readout w-14 font-medium"
                    >
                      {a.icao}
                    </Link>
                    <span className="flex-1 font-semibold">{a.name}</span>
                    <span className="text-ink-2">{a.towered ? 'Towered' : 'CTAF'}</span>
                    <span className="readout w-40 text-right text-ink-2">
                      {rwy.designator}
                      {rwy.lengthFt !== null && ` · ${rwy.lengthFt.toLocaleString('en-US')} ft`}
                    </span>
                    <span className="readout w-16 text-right text-ink-2">
                      {a.elevationFt === null ? '' : `${a.elevationFt} ft`}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function GlossaryPanel({ terms }: { terms?: GlossaryTermDto[] }) {
  if (!terms) return <Loading label="Loading the glossary" />;
  const groups = groupByLetter(terms);
  const counts = new Map(groups.map(([letter, ts]) => [letter, ts.length]));
  const withLessons = terms.filter((t) => t.lessons.length > 0).slice(0, 4);
  return (
    <div className="flex flex-col gap-4">
      <PanelHeader
        number="04"
        title={`${plural(terms.length, 'term')} in plain English`}
        to="/reference/glossary"
        linkText="Browse the glossary"
      />
      <nav aria-label="Jump to letter" className="flex flex-wrap gap-1">
        {LETTERS.map((letter) => {
          const count = counts.get(letter);
          return count ? (
            <Link
              key={letter}
              to={`/reference/glossary#letter-${letter}`}
              unstyled
              aria-label={`${letter}, ${plural(count, 'term')}`}
              className="flex size-9 items-center justify-center rounded-sm bg-surface-sunken font-mono text-sm font-medium text-ink hover:bg-line"
            >
              {letter}
            </Link>
          ) : (
            <span
              key={letter}
              aria-hidden
              className="flex size-9 items-center justify-center rounded-sm border border-dashed border-line font-mono text-sm text-ink-3"
            >
              {letter}
            </span>
          );
        })}
      </nav>
      <p className="text-sm leading-5 text-ink-2">
        Type a term in the search box above to see its definition here, or jump to a letter.
      </p>
      {withLessons.length > 0 && (
        <dl className="flex flex-col gap-2 text-sm leading-5">
          {withLessons.map((t) => (
            <div key={t.slug}>
              <dt className="inline font-semibold">
                <Link to={`/reference/glossary#${t.slug}`} quiet>
                  {t.term}
                </Link>
                .
              </dt>{' '}
              <dd className="inline text-ink-2">{t.definition}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

function ResourcesPanel({ resources }: { resources?: ResourceDto[] }) {
  if (!resources) return <Loading label="Loading resources" />;
  const counts = RESOURCE_TYPES.map(
    (type) => [type, resources.filter((r) => r.type === type).length] as const,
  ).filter(([, n]) => n > 0);
  const free = resources.filter((r) => r.free && r.url).slice(0, 3);
  return (
    <div className="flex flex-col gap-4">
      <PanelHeader
        number="05"
        title="Handbooks, charts, tools and communities"
        to="/reference/resources"
        linkText={`All ${plural(resources.length, 'resource')}`}
      />
      <ul className="flex flex-wrap gap-1.5">
        {counts.map(([type, n]) => (
          <li key={type}>
            <Link
              to={`/reference/resources?type=${type}`}
              unstyled
              className="flex h-8 items-center rounded-pill bg-surface-sunken px-3 text-xs font-medium text-ink hover:bg-line"
            >
              {humanize(type)}s <span className="ml-1 font-mono text-ink-2">{n}</span>
            </Link>
          </li>
        ))}
      </ul>
      {free.length > 0 && (
        <>
          <p className="eyebrow text-ink-2">Start here, all free</p>
          <ul className="flex flex-col gap-2 text-sm leading-5">
            {free.map((r) => (
              <li key={r.slug}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-line-strong decoration-[1.5px] underline-offset-[3px] hover:decoration-ink"
                >
                  {r.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <span className="block text-ink-2">{r.description}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

/**
 * The kneeboard's section rail (Section 20.8, step 10.1 redesign): numbered tabs like a
 * POH's index, with the chosen section's most-used slice on the right. The section lives in
 * the URL (`?section=checklists`) so a tab can be bookmarked. The rail is vertical from `lg`
 * and a scrolling row of tabs below it.
 */
export function ReferenceSections(sources: Sources) {
  const [params, setParams] = useSearchParams();
  const requested = params.get('section');
  const section: SectionId = SECTION_IDS.includes(requested as SectionId)
    ? (requested as SectionId)
    : 'speeds';
  const select = (value: string) => {
    const next = new URLSearchParams(params);
    if (value === 'speeds') next.delete('section');
    else next.set('section', value);
    setParams(next, { replace: true });
  };

  return (
    <TabsPrimitive.Root
      value={section}
      onValueChange={select}
      orientation="vertical"
      className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]"
    >
      <div className="flex flex-col gap-6 print:hidden">
        <TabsPrimitive.List
          aria-label="Reference sections"
          className="-mx-4 flex overflow-x-auto border-b border-line px-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:border-t lg:border-b-0 lg:px-0"
        >
          {SECTIONS.map((s) => (
            <TabsPrimitive.Trigger
              key={s.id}
              value={s.id}
              className={cn(
                'flex min-h-control-lg shrink-0 items-center gap-3.5 px-4 py-2 text-left whitespace-nowrap transition-colors duration-150',
                'hover:bg-surface-sunken data-[state=active]:bg-accent-tint data-[state=active]:shadow-[inset_0_-3px_0_var(--color-accent-line)]',
                'lg:min-h-16 lg:border-b lg:border-line lg:whitespace-normal lg:data-[state=active]:shadow-[inset_3px_0_0_var(--color-accent-line)]',
              )}
            >
              <span className="readout text-sm text-ink-2">{s.number}</span>
              <span className="flex flex-col">
                <span className="font-semibold">{s.title}</span>
                <span className="hidden text-sm leading-5 text-ink-2 lg:block">
                  {metaFor(s.id, sources)}
                </span>
              </span>
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
        {!sources.aircraft.verifiedAt && (
          <Callout type="verify" title="Not yet verified" className="hidden lg:grid">
            Published Cessna 172S values. Cross-check them with the in-sim checklist.
          </Callout>
        )}
      </div>

      {SECTIONS.map((s) => (
        <TabsPrimitive.Content key={s.id} value={s.id} className="min-w-0 focus:outline-none">
          {s.id === 'speeds' && <SpeedsPanel aircraft={sources.aircraft} />}
          {s.id === 'checklists' && <ChecklistsPanel checklists={sources.checklists} />}
          {s.id === 'airports' && <AirportsPanel airports={sources.airports} />}
          {s.id === 'glossary' && <GlossaryPanel terms={sources.terms} />}
          {s.id === 'resources' && <ResourcesPanel resources={sources.resources} />}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
