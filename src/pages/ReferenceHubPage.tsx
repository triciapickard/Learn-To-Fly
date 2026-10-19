import { Printer } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '@/components/Button';
import { PageContainer } from '@/components/PageHeader';
import {
  useAircraft,
  useAirports,
  useChecklists,
  useGlossary,
  useResources,
} from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { AirspeedArcs } from '@/features/reference/AirspeedArcs';
import { ReferenceSearch } from '@/features/reference/ReferenceSearch';
import { ReferenceSections } from '@/features/reference/ReferenceSections';
import { buildReferenceIndex } from '@/features/reference/search';
import { usePageTitle } from '@/hooks/usePageTitle';

/**
 * Reference hub (step 10.1, Section 20.8): a search box over every reference type for the
 * one-fact case, and the kneeboard (the airspeed arcs and a POH-style section rail) for a
 * glance mid-flight without typing.
 */
export default function ReferenceHubPage() {
  usePageTitle('Reference');
  const aircraft = useAircraft();
  const checklists = useChecklists();
  const airports = useAirports();
  const glossary = useGlossary();
  const resources = useResources();

  const sources = useMemo(
    () => ({
      aircraft: aircraft.data?.aircraft,
      checklists: checklists.data?.checklists,
      airports: airports.data?.airports,
      terms: glossary.data?.terms,
      resources: resources.data?.resources,
    }),
    [aircraft.data, checklists.data, airports.data, glossary.data, resources.data],
  );
  const index = useMemo(() => buildReferenceIndex(sources), [sources]);
  const loading = [aircraft, checklists, airports, glossary, resources].some((q) => q.isPending);

  return (
    <QueryStates
      isPending={aircraft.isPending}
      error={aircraft.error}
      refetch={aircraft.refetch}
      label="Loading the reference"
    >
      {() => (
        <PageContainer>
          <section
            aria-labelledby="reference-heading"
            className="flex flex-col gap-5 pt-4 print:hidden"
          >
            <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
              <p className="eyebrow text-ink-2">Reference</p>
              <h1 id="reference-heading" className="display-lg">
                What do you need to know?
              </h1>
              <p className="text-ink-2">
                One box for every speed, checklist, airport, term and handbook. The kneeboard is
                right below if you would rather glance.
              </p>
            </div>
            <ReferenceSearch index={index} loading={loading} />
          </section>

          <section aria-labelledby="kneeboard-heading" className="mt-14 flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 id="kneeboard-heading" className="heading-md">
                The kneeboard
              </h2>
              <div className="flex items-center gap-4">
                <p className="hidden text-sm leading-5 text-ink-2 sm:block">
                  KIAS at maximum weight. Flags mark the speeds you fly to.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="print:hidden"
                  onClick={() => window.print()}
                >
                  <Printer aria-hidden /> Print
                </Button>
              </div>
            </div>
            <AirspeedArcs aircraft={sources.aircraft!} />
          </section>

          <div className="mt-8">
            <ReferenceSections
              aircraft={sources.aircraft!}
              checklists={sources.checklists}
              airports={sources.airports}
              terms={sources.terms}
              resources={sources.resources}
            />
          </div>
        </PageContainer>
      )}
    </QueryStates>
  );
}
