import { SearchX } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { Badge } from '@/components/Badge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { FormField } from '@/components/FormField';
import { ExternalLink } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { Select } from '@/components/Select';
import { EmptyState } from '@/components/States';
import { useResources } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import {
  filterResources,
  humanize,
  topicsOf,
  type ResourceFilters,
} from '@/features/reference/resources';
import { usePageTitle } from '@/hooks/usePageTitle';
import { formatDate, plural } from '@/lib/format';
import { RESOURCE_TYPES } from '@shared/schemas/content';

const FILTERS = ['topic', 'type', 'free'] as const;

/** Resources (step 10.6, Section 20.8): filter by topic, type and free; filters in the URL. */
export default function ResourcesPage() {
  usePageTitle('Resources');
  const [params, setParams] = useSearchParams();
  const { data, isPending, error, refetch } = useResources();
  const filters: ResourceFilters = Object.fromEntries(
    FILTERS.map((f) => [f, params.get(f) ?? '']).filter(([, v]) => v),
  );
  const setFilter = (name: (typeof FILTERS)[number], value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(name, value);
    else next.delete(name);
    setParams(next, { replace: true });
  };

  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading resources">
      {() => {
        const all = data!.resources;
        const shown = filterResources(all, filters);
        return (
          <PageContainer>
            <Breadcrumbs
              items={[{ label: 'Reference', to: '/reference' }, { label: 'Resources' }]}
            />
            <PageHeader
              className="mt-4"
              title="Resources"
              description="Handbooks, charts, tools and communities for going deeper. Most are free, and many come straight from the FAA."
            />
            <form
              role="search"
              aria-label="Filter resources"
              className="mb-6 grid gap-3 rounded-card border border-border bg-surface p-4 sm:grid-cols-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <FormField label="Topic">
                <Select
                  value={filters.topic ?? ''}
                  onChange={(e) => setFilter('topic', e.target.value)}
                >
                  <option value="">All topics</option>
                  {topicsOf(all).map((t) => (
                    <option key={t} value={t}>
                      {humanize(t)}
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Type">
                <Select
                  value={filters.type ?? ''}
                  onChange={(e) => setFilter('type', e.target.value)}
                >
                  <option value="">All types</option>
                  {RESOURCE_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {humanize(t)}
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Cost">
                <Select
                  value={filters.free ?? ''}
                  onChange={(e) => setFilter('free', e.target.value)}
                >
                  <option value="">Free and paid</option>
                  <option value="true">Free only</option>
                </Select>
              </FormField>
            </form>

            <p className="mb-3 text-sm text-muted" role="status">
              Showing {plural(shown.length, 'resource')}
              {shown.length !== all.length && ` of ${all.length}`}
            </p>

            {shown.length ? (
              <ul className="grid gap-4 md:grid-cols-2">
                {shown.map((r) => (
                  <li
                    key={r.slug}
                    className="flex flex-col gap-2 rounded-card border border-border bg-surface p-4 shadow-1"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{humanize(r.type)}</Badge>
                      <Badge variant={r.free ? 'complete' : 'neutral'}>
                        {r.free ? 'Free' : 'Paid'}
                      </Badge>
                    </div>
                    <h2 className="text-lg font-semibold">
                      {r.url ? <ExternalLink href={r.url}>{r.title}</ExternalLink> : r.title}
                    </h2>
                    <p className="text-sm text-muted">{r.publisher}</p>
                    <p>{r.description}</p>
                    {!r.url && r.location && (
                      <p className="text-sm">
                        <span className="font-semibold">Where: </span>
                        {r.location}
                      </p>
                    )}
                    <p className="mt-auto pt-2 text-xs text-muted">
                      {r.topics.map(humanize).join(' · ')}
                      {' · '}
                      {r.verifiedAt
                        ? `Link checked ${formatDate(r.verifiedAt)}`
                        : 'Link not yet checked'}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState
                icon={SearchX}
                title="No resources match these filters"
                message="Try fewer filters."
                action={
                  <Button variant="secondary" onClick={() => setParams({}, { replace: true })}>
                    Clear filters
                  </Button>
                }
              />
            )}
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
