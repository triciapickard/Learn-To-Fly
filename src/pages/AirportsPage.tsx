import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { useAirports, useChallenges } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { AirportBadges, ROLE_LABELS, runwayList } from '@/features/reference/airports';
import { usePageTitle } from '@/hooks/usePageTitle';
import { plural } from '@/lib/format';

/** Airports (step 10.4, Section 20.8): the course's airports as a card grid. */
export default function AirportsPage() {
  usePageTitle('Airports');
  const { data, isPending, error, refetch } = useAirports();
  const { data: challengeData } = useChallenges();
  const challenges = challengeData?.challenges ?? [];
  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading airports">
      {() => (
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Reference', to: '/reference' }, { label: 'Airports' }]} />
          <PageHeader
            className="mt-4"
            title="Airports"
            description="The San Francisco Bay Area airports used in the course. Always check the current Chart Supplement before you fly."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data!.airports.map((a) => {
              const count = challenges.filter((c) => c.airportIcao === a.icao).length;
              return (
                <li
                  key={a.icao}
                  className="relative flex flex-col gap-3 rounded-card border border-border bg-surface p-5 shadow-1 hover:border-primary"
                >
                  <div>
                    <p className="font-mono text-sm font-bold text-primary">{a.icao}</p>
                    <h2 className="text-xl font-semibold">
                      <Link
                        to={`/reference/airports/${a.icao}`}
                        unstyled
                        className="after:absolute after:inset-0"
                      >
                        {a.name}
                      </Link>
                    </h2>
                    <p className="text-sm text-muted">
                      {a.city} · {ROLE_LABELS[a.role]}
                    </p>
                  </div>
                  <AirportBadges airport={a} />
                  <dl className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <dt className="text-muted">Runways</dt>
                      <dd className="font-mono font-semibold">{runwayList(a)}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Elevation</dt>
                      <dd className="font-mono font-semibold">
                        {a.elevationFt === null ? 'Not listed' : `${a.elevationFt} ft`}
                      </dd>
                    </div>
                  </dl>
                  {count > 0 && (
                    <p className="text-sm font-medium">{plural(count, 'challenge')} here</p>
                  )}
                </li>
              );
            })}
          </ul>
        </PageContainer>
      )}
    </QueryStates>
  );
}
