import { Check, Copy, Play } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Button } from '@/components/Button';
import { Callout } from '@/components/Callout';
import { Link } from '@/components/Link';
import { Table } from '@/components/Table';
import { LessonRow } from '@/features/curriculum/LessonListItem';
import type { ChallengeDetail, ResolvedSetup } from '@shared/schemas/api';
import type { Criterion } from '@shared/schemas/content';

/** Copies text to the clipboard and confirms (for ICAO codes and frequencies). */
export function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard?.writeText(text).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          },
          () => undefined,
        );
      }}
      className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-control text-muted hover:bg-surface-2 hover:text-text"
      aria-label={copied ? `Copied ${label}` : `Copy ${label}`}
    >
      {copied ? (
        <Check aria-hidden className="size-4 text-success" />
      ) : (
        <Copy aria-hidden className="size-4" />
      )}
    </button>
  );
}

const yesNo = (on: boolean) => (on ? 'On' : 'Off');

function detailsText(details: Record<string, string | number>): string | null {
  const parts: string[] = [];
  if (details.position) parts.push(String(details.position));
  if (details.altitudeFt)
    parts.push(`${Number(details.altitudeFt).toLocaleString('en-US')} ft MSL`);
  if (details.headingDeg !== undefined) {
    parts.push(`heading ${String(details.headingDeg).padStart(3, '0')}°`);
  }
  if (details.speedKias) parts.push(`${details.speedKias} KIAS`);
  if (details.parking) parts.push(`parking: ${details.parking}`);
  return parts.length ? parts.join(', ') : null;
}

function weatherText(w: ResolvedSetup['weather']): ReactNode {
  const items = [
    w.clouds && `Clouds: ${w.clouds}`,
    w.surfaceWind && `Surface wind: ${w.surfaceWind}`,
    w.windsAloft && `Winds aloft: ${w.windsAloft}`,
    w.visibility && `Visibility: ${w.visibility}`,
    w.temperatureC !== undefined && `Temperature: ${w.temperatureC} °C`,
    w.altimeterInHg !== undefined && `Altimeter: ${w.altimeterInHg.toFixed(2)} inHg`,
  ].filter(Boolean) as string[];
  return (
    <>
      <span className="font-medium">{w.label}</span>
      {w.preset && <span className="font-mono text-sm text-muted"> ({w.preset})</span>}
      {items.length ? (
        <ul className="mt-1 text-sm text-muted">
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-1 text-sm text-muted">{w.summary}</p>
      )}
    </>
  );
}

/** The sim setup as label/value rows (US-09). */
export function setupRows(setup: ResolvedSetup): { label: string; value: ReactNode }[] {
  const details = detailsText(setup.startDetails);
  const rows: { label: string; value: ReactNode }[] = [
    { label: 'Aircraft', value: setup.aircraft.simName },
    {
      label: 'Airport',
      value: (
        <span className="inline-flex flex-wrap items-center gap-1">
          <Link to={`/reference/airports/${setup.airport.icao}`}>
            {setup.airport.name} ({setup.airport.icao})
          </Link>
          <CopyButton text={setup.airport.icao} label={setup.airport.icao} />
        </span>
      ),
    },
    {
      label: 'Start state',
      value: (
        <>
          <span className="font-medium">{setup.startState.label}</span>
          <span className="block text-sm text-muted">{setup.startState.description}</span>
        </>
      ),
    },
  ];
  if (setup.startDetails.runway) {
    rows.push({ label: 'Runway', value: String(setup.startDetails.runway) });
  }
  if (details) rows.push({ label: 'Start position', value: details });
  if (setup.startDetails.fallback) {
    rows.push({
      label: 'If you cannot start in the air',
      value: String(setup.startDetails.fallback),
    });
  }
  if (setup.flightPlan) {
    const fp = setup.flightPlan;
    const route = [fp.departure, ...fp.waypoints, fp.destination].join(' → ');
    rows.push({
      label: 'Flight plan',
      value: (
        <span className="inline-flex flex-wrap items-center gap-1">
          <span className="font-mono">{route}</span>
          <CopyButton text={route.replaceAll(' → ', ' ')} label="the route" />
        </span>
      ),
    });
  }
  rows.push(
    { label: 'Weather', value: weatherText(setup.weather) },
    { label: 'Time', value: `${setup.time.local} local, ${setup.time.date}` },
    {
      label: 'Fuel and payload',
      value: (
        <>
          <span className="font-medium">{setup.load.label}</span>
          <span className="block text-sm text-muted">{setup.load.description}</span>
        </>
      ),
    },
    {
      label: 'Assistance',
      value: (
        <>
          <span className="font-medium">{setup.assistance.label}</span>
          <span className="block text-sm text-muted">{setup.assistance.description}</span>
        </>
      ),
    },
    { label: 'AI traffic', value: yesNo(setup.aiTraffic) },
    { label: 'ATC', value: yesNo(setup.atc) },
    { label: 'Crash damage', value: yesNo(setup.crashDamage) },
  );
  return rows;
}

export function criterionTiers(c: Criterion): string {
  return c.kind === 'tiered' && c.tiers
    ? `Gold: ${c.tiers.gold} · Silver: ${c.tiers.silver} · Bronze: ${c.tiers.bronze}`
    : 'Met or not met';
}

export function BriefTab({
  challenge,
  onStart,
}: {
  challenge: ChallengeDetail;
  onStart: () => void;
}) {
  return (
    <div className="flex flex-col gap-10">
      <section aria-labelledby="goal-heading">
        <h2 id="goal-heading" className="text-2xl font-bold">
          Goal
        </h2>
        <p className="mt-2 text-lg">{challenge.goal}</p>
      </section>

      <section aria-labelledby="setup-heading">
        <h2 id="setup-heading" className="text-2xl font-bold">
          Sim setup
        </h2>
        <p className="mt-1 text-muted">
          Set these up with the sim paused, then read the procedure before you start.
        </p>
        <dl className="mt-4 divide-y divide-border rounded-card border border-border bg-surface">
          {setupRows(challenge.setup).map((row) => (
            <div key={row.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[12rem_1fr]">
              <dt className="font-semibold text-muted">{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {challenge.lessons.length > 0 && (
        <section aria-labelledby="lessons-heading">
          <h2 id="lessons-heading" className="text-2xl font-bold">
            Recommended lessons
          </h2>
          <ul className="mt-2 rounded-card border border-border bg-surface p-2">
            {challenge.lessons.map((lesson) => (
              <li key={lesson.slug}>
                <LessonRow lesson={lesson} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="procedure-heading">
        <h2 id="procedure-heading" className="text-2xl font-bold">
          Procedure
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6">
          {challenge.procedure.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="criteria-heading">
        <h2 id="criteria-heading" className="text-2xl font-bold">
          How you&apos;ll be scored
        </h2>
        <Table
          className="mt-3"
          caption="Criteria for this challenge"
          hideCaption
          rows={challenge.criteria}
          rowKey={(c) => c.id}
          columns={[
            {
              key: 'label',
              header: 'Criterion',
              cell: (c) => (
                <span className="font-medium">
                  {c.label}
                  {c.required && <span className="text-muted"> (required)</span>}
                </span>
              ),
            },
            { key: 'tiers', header: 'Levels', cell: (c) => criterionTiers(c) },
            { key: 'weight', header: 'Weight', numeric: true, cell: (c) => `×${c.weight}` },
          ]}
        />
        <p className="mt-2 text-sm text-muted">
          Gold needs 90% or more with every required criterion at Silver or better; Silver needs
          70%; Bronze needs every required criterion met.
        </p>
      </section>

      {(challenge.commonMistakes.length > 0 || challenge.tips.length > 0) && (
        <div className="grid gap-4 md:grid-cols-2">
          {challenge.commonMistakes.length > 0 && (
            <Callout type="safety" title="Common mistakes">
              <ul className="list-disc space-y-1 pl-5">
                {challenge.commonMistakes.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Callout>
          )}
          {challenge.tips.length > 0 && (
            <Callout type="tip" title="Tips">
              <ul className="list-disc space-y-1 pl-5">
                {challenge.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Callout>
          )}
        </div>
      )}

      <div>
        <Button size="lg" onClick={onStart}>
          <Play aria-hidden className="size-5" /> I&apos;m set up — start
        </Button>
      </div>
    </div>
  );
}
