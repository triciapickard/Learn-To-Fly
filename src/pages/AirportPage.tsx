import { useParams } from 'react-router';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Callout } from '@/components/Callout';
import { ExternalLink } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Table } from '@/components/Table';
import { useAirport } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { AirportBadges, ROLE_LABELS } from '@/features/reference/airports';
import { ChallengeMetaLine } from '@/features/reference/ChallengeMetaLine';
import { usePageTitle } from '@/hooks/usePageTitle';
import { formatDate } from '@/lib/format';
import type { AirportDto } from '@shared/schemas/api';

type Runway = AirportDto['runways'][number];

const PATTERN = { left: 'Left', right: 'Right', varies: 'Varies by runway end' } as const;
const orUnverified = (value: string | null) => value ?? 'Not yet verified';

/** One airport (step 10.4, Section 20.8), with the challenges flown from it. */
export default function AirportPage() {
  const { icao = '' } = useParams();
  const { data, isPending, error, refetch } = useAirport(icao.toUpperCase());
  usePageTitle(
    data ? `${data.airport.icao} ${data.airport.name}` : 'Airport',
    data
      ? `${data.airport.name} (${data.airport.icao}), ${data.airport.city}: runways, airspace and the Learn-To-Fly challenges that start there.`
      : undefined,
  );

  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading the airport">
      {() => {
        const { airport, challenges } = data!;
        return (
          <PageContainer>
            <Breadcrumbs
              items={[
                { label: 'Reference', to: '/reference' },
                { label: 'Airports', to: '/reference/airports' },
                { label: airport.icao },
              ]}
            />
            <PageHeader
              className="mt-4"
              eyebrow={`${airport.icao} · ${airport.city}`}
              title={airport.name}
              description={ROLE_LABELS[airport.role]}
            >
              <AirportBadges airport={airport} />
            </PageHeader>

            <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
              <div className="flex min-w-0 flex-col gap-10">
                {!airport.verifiedAt && (
                  <Callout type="verify" title="Not yet verified">
                    Check runways, pattern and frequencies in the current Chart Supplement before
                    you fly, in the sim or for real.
                  </Callout>
                )}

                <section aria-labelledby="field-heading">
                  <h2 id="field-heading" className="text-2xl font-bold">
                    Field
                  </h2>
                  <dl className="mt-3 grid gap-3 text-lg sm:grid-cols-3">
                    <div>
                      <dt className="text-sm text-muted">Elevation</dt>
                      <dd className="font-mono font-semibold">
                        {airport.elevationFt === null
                          ? 'Not listed'
                          : `${airport.elevationFt} ft MSL`}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted">Airspace</dt>
                      <dd className="font-semibold">Class {airport.airspaceClass}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted">Tower</dt>
                      <dd className="font-semibold">
                        {airport.towered ? 'Yes' : 'No, self-announce on the CTAF'}
                      </dd>
                    </div>
                  </dl>
                </section>

                <section aria-labelledby="runways-heading">
                  <h2 id="runways-heading" className="text-2xl font-bold">
                    Runways and pattern
                  </h2>
                  <Table<Runway>
                    className="mt-3"
                    caption={`Runways at ${airport.icao}`}
                    hideCaption
                    rows={airport.runways}
                    rowKey={(r) => r.designator}
                    columns={[
                      {
                        key: 'rwy',
                        header: 'Runway',
                        label: 'Runway',
                        cell: (r) => (
                          <span className="font-mono text-lg font-bold">{r.designator}</span>
                        ),
                      },
                      {
                        key: 'size',
                        header: 'Length × width',
                        label: 'Length × width',
                        cell: (r) =>
                          orUnverified(
                            r.lengthFt
                              ? `${r.lengthFt.toLocaleString('en-US')} × ${r.widthFt ?? '?'} ft`
                              : null,
                          ),
                      },
                      {
                        key: 'pattern',
                        header: 'Traffic pattern',
                        label: 'Traffic pattern',
                        cell: (r) =>
                          orUnverified(r.trafficPattern ? PATTERN[r.trafficPattern] : null),
                      },
                      {
                        key: 'tpa',
                        header: 'Pattern altitude',
                        label: 'Pattern altitude',
                        cell: (r) =>
                          orUnverified(
                            r.patternAltitudeFt
                              ? `${r.patternAltitudeFt.toLocaleString('en-US')} ft MSL`
                              : null,
                          ),
                      },
                    ]}
                  />
                  {airport.patternNotes && <p className="mt-3">{airport.patternNotes}</p>}
                </section>

                <section aria-labelledby="freq-heading">
                  <h2 id="freq-heading" className="text-2xl font-bold">
                    Frequencies
                  </h2>
                  {airport.frequencies.length ? (
                    <dl className="mt-3 grid gap-2 text-lg sm:grid-cols-2">
                      {airport.frequencies.map((f) => (
                        <div
                          key={`${f.type}-${f.mhz}`}
                          className="flex items-baseline justify-between gap-3 rounded-card border border-border bg-surface p-3"
                        >
                          <dt>{f.type}</dt>
                          <dd className="font-mono font-bold">
                            {f.mhz}
                            {f.notes && (
                              <span className="ml-2 text-sm font-normal text-muted">{f.notes}</span>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <p className="mt-2 text-muted">
                      Frequencies are listed here once they're verified. Until then, use the
                      sectional chart or the Chart Supplement.
                    </p>
                  )}
                </section>

                {airport.notes.length > 0 && (
                  <section aria-labelledby="notes-heading">
                    <h2 id="notes-heading" className="text-2xl font-bold">
                      Notes
                    </h2>
                    <ul className="mt-3 list-disc space-y-1 pl-6">
                      {airport.notes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  </section>
                )}

                <section aria-labelledby="challenges-heading">
                  <h2 id="challenges-heading" className="text-2xl font-bold">
                    Challenges at this airport
                  </h2>
                  {challenges.length ? (
                    <ul className="mt-3 flex flex-col gap-2">
                      {challenges.map((c) => (
                        <li key={c.slug}>
                          <ChallengeMetaLine challenge={c} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-muted">No published challenges start here yet.</p>
                  )}
                </section>
              </div>

              <aside
                aria-labelledby="links-heading"
                className="self-start rounded-card border border-border bg-surface p-4"
              >
                <h2 id="links-heading" className="font-semibold">
                  Charts and airport information
                </h2>
                <ul className="mt-3 flex flex-col gap-2">
                  <li>
                    <ExternalLink href={airport.links.skyvector}>SkyVector</ExternalLink>
                  </li>
                  <li>
                    <ExternalLink href={airport.links.airnav}>AirNav</ExternalLink>
                  </li>
                  {airport.links.diagram && (
                    <li>
                      <ExternalLink href={airport.links.diagram}>FAA airport diagram</ExternalLink>
                    </li>
                  )}
                </ul>
                <p className="mt-4 text-sm text-muted">
                  {airport.verifiedAt
                    ? `Verified ${formatDate(airport.verifiedAt)}${airport.verifiedAgainst.length ? ` against ${airport.verifiedAgainst.join(', ')}` : ''}.`
                    : 'Not yet verified.'}
                </p>
              </aside>
            </div>
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
