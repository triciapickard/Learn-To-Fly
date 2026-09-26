import { Printer } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { Callout } from '@/components/Callout';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Table } from '@/components/Table';
import { AircraftKeyNumbers } from '@/features/content/AircraftKeyNumbers';
import { useAircraft } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { WidgetBlock } from '@/features/lessons/blocks/WidgetBlock';
import { VSpeedLabel } from '@/features/reference/VSpeedLabel';
import { usePageTitle } from '@/hooks/usePageTitle';
import { formatDate } from '@/lib/format';
import type { AircraftDto } from '@shared/schemas/api';

type VSpeedRow = { key: string } & AircraftDto['vspeeds'][string];
type PowerRow = AircraftDto['powerSettings'][number];

const kias = (v: VSpeedRow) => (v.kias !== undefined ? String(v.kias) : `${v.min}–${v.max}`);

/** V-speeds and limits (step 10.2, Section 20.8): large type, readable on a phone. */
export default function SpeedsPage() {
  usePageTitle('V-speeds and limits');
  const { data, isPending, error, refetch } = useAircraft();
  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading V-speeds">
      {() => {
        const aircraft = data!.aircraft;
        const vspeeds: VSpeedRow[] = Object.entries(aircraft.vspeeds).map(([key, v]) => ({
          key,
          ...v,
        }));
        return (
          <PageContainer>
            <div className="print:hidden">
              <Breadcrumbs
                items={[{ label: 'Reference', to: '/reference' }, { label: 'V-speeds' }]}
              />
            </div>
            <PageHeader
              className="mt-4"
              title="V-speeds and limits"
              description={`${aircraft.name}. Indicated airspeeds in knots (KIAS) at maximum weight unless noted.`}
            >
              <div className="flex flex-wrap items-center gap-3 print:hidden">
                <Button variant="secondary" onClick={() => window.print()}>
                  <Printer aria-hidden className="size-4" /> Print
                </Button>
              </div>
            </PageHeader>

            <p className="mb-6 text-muted">
              {aircraft.verifiedAt
                ? `Last verified: ${formatDate(aircraft.verifiedAt)}${aircraft.simVersion ? `, sim version ${aircraft.simVersion}` : ''}.`
                : 'Last verified: not yet checked against the MSFS 2024 in-sim checklist.'}
            </p>
            {!aircraft.verifiedAt && (
              <Callout type="verify" title="Not yet verified" className="mb-8">
                These are the widely published Cessna 172S values. Cross-check them with the in-sim
                checklist, and always follow your aircraft's own documents.
              </Callout>
            )}

            <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
              <div className="flex min-w-0 flex-col gap-10">
                <Table
                  caption="V-speeds"
                  className="text-lg"
                  rows={vspeeds}
                  rowKey={(v) => v.key}
                  columns={[
                    {
                      key: 'label',
                      header: 'Speed',
                      label: 'Speed',
                      cell: (v) => (
                        <span className="font-semibold">
                          <VSpeedLabel label={v.label} />
                        </span>
                      ),
                    },
                    { key: 'meaning', header: 'Meaning', label: 'Meaning', cell: (v) => v.meaning },
                    {
                      key: 'kias',
                      header: 'KIAS',
                      label: 'KIAS',
                      numeric: true,
                      cell: (v) => (
                        <span className="font-mono text-2xl font-bold whitespace-nowrap">
                          {kias(v)}
                        </span>
                      ),
                    },
                    {
                      key: 'notes',
                      header: 'Notes',
                      label: 'Notes',
                      cell: (v) => <span className="text-muted">{v.notes ?? ''}</span>,
                    },
                  ]}
                />

                <section aria-labelledby="limits-heading">
                  <h2 id="limits-heading" className="text-2xl font-bold">
                    Limits
                  </h2>
                  <dl className="mt-3 grid gap-2 text-lg sm:grid-cols-2">
                    <div className="rounded-card border border-border bg-surface p-3">
                      <dt className="text-muted">Maneuvering speed by weight</dt>
                      <dd className="mt-1 font-mono font-semibold">
                        {aircraft.limits.maneuveringSpeed
                          .map((m) => `${m.kias} KIAS at ${m.weightLb.toLocaleString('en-US')} lb`)
                          .join(' · ')}
                      </dd>
                    </div>
                    <div className="rounded-card border border-border bg-surface p-3">
                      <dt className="text-muted">Maximum demonstrated crosswind</dt>
                      <dd className="mt-1 font-mono font-semibold">
                        {aircraft.limits.maxDemonstratedCrosswindKt} kt
                      </dd>
                    </div>
                    <div className="rounded-card border border-border bg-surface p-3">
                      <dt className="text-muted">White arc (flap operating range)</dt>
                      <dd className="mt-1 font-mono font-semibold">
                        {aircraft.arcs.white[0]}–{aircraft.arcs.white[1]} KIAS
                      </dd>
                    </div>
                    <div className="rounded-card border border-border bg-surface p-3">
                      <dt className="text-muted">Green arc (normal operating range)</dt>
                      <dd className="mt-1 font-mono font-semibold">
                        {aircraft.arcs.green[0]}–{aircraft.arcs.green[1]} KIAS
                      </dd>
                    </div>
                    <div className="rounded-card border border-border bg-surface p-3">
                      <dt className="text-muted">Yellow arc (smooth air only)</dt>
                      <dd className="mt-1 font-mono font-semibold">
                        {aircraft.arcs.yellow[0]}–{aircraft.arcs.yellow[1]} KIAS
                      </dd>
                    </div>
                    <div className="rounded-card border border-border bg-surface p-3">
                      <dt className="text-muted">Red line (never exceed)</dt>
                      <dd className="mt-1 font-mono font-semibold">{aircraft.arcs.redline} KIAS</dd>
                    </div>
                  </dl>
                </section>

                <section aria-labelledby="power-heading">
                  <h2 id="power-heading" className="text-2xl font-bold">
                    Typical power settings
                  </h2>
                  <p className="mt-1 mb-3 text-muted">
                    Rule-of-thumb starting points, not POH values. Set these, then adjust to hold
                    the target speed.
                  </p>
                  <Table<PowerRow>
                    caption="Typical training power settings"
                    hideCaption
                    rows={aircraft.powerSettings}
                    rowKey={(p) => p.phase}
                    columns={[
                      {
                        key: 'phase',
                        header: 'Phase',
                        label: 'Phase',
                        cell: (p) => <span className="font-semibold">{p.phase}</span>,
                      },
                      { key: 'rpm', header: 'RPM', label: 'RPM', cell: (p) => p.rpm },
                      { key: 'flaps', header: 'Flaps', label: 'Flaps', cell: (p) => p.flaps },
                      {
                        key: 'speed',
                        header: 'Target speed (KIAS)',
                        label: 'Target speed (KIAS)',
                        cell: (p) => p.targetSpeed,
                      },
                      { key: 'pitch', header: 'Pitch', label: 'Pitch', cell: (p) => p.pitch ?? '' },
                    ]}
                  />
                </section>

                <section aria-labelledby="asi-heading" className="print:hidden">
                  <h2 id="asi-heading" className="text-2xl font-bold">
                    The airspeed indicator
                  </h2>
                  <p className="mt-1 text-muted">
                    Drag the needle to see which arc and V-speed you're at.
                  </p>
                  <WidgetBlock name="airspeed-indicator" props={{ mode: 'explore' }} />
                </section>
              </div>
              <AircraftKeyNumbers large className="self-start lg:sticky lg:top-24" />
            </div>
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
