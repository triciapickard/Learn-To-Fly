import { ListChecks, TriangleAlert } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { useChecklists } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { MODE_LABELS } from '@/features/reference/checklists';
import { usePageTitle } from '@/hooks/usePageTitle';
import { plural } from '@/lib/format';

/** Checklists (step 10.3): every phase in flight order; each opens the checklist runner. */
export default function ChecklistsPage() {
  usePageTitle('Checklists');
  const { data, isPending, error, refetch } = useChecklists();
  return (
    <QueryStates isPending={isPending} error={error} refetch={refetch} label="Loading checklists">
      {() => (
        <PageContainer>
          <Breadcrumbs
            items={[{ label: 'Reference', to: '/reference' }, { label: 'Checklists' }]}
          />
          <PageHeader
            className="mt-4"
            title="Checklists"
            description="In flight order, from preflight to securing the airplane. Open one to run it item by item, in large type."
          />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data!.checklists.map((c) => {
              const emergency = c.phase.toLowerCase() === 'emergency';
              const Icon = emergency ? TriangleAlert : ListChecks;
              return (
                <li
                  key={c.slug}
                  className="relative flex gap-3 rounded-card border border-border bg-surface p-4 shadow-1 hover:border-primary"
                >
                  <Icon
                    aria-hidden
                    className={
                      emergency ? 'size-6 shrink-0 text-danger' : 'size-6 shrink-0 text-primary'
                    }
                  />
                  <div className="flex min-w-0 flex-col gap-1">
                    <h2 className="text-lg font-semibold">
                      <Link
                        to={`/reference/checklists/${c.slug}`}
                        unstyled
                        className="after:absolute after:inset-0"
                      >
                        {c.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-muted">
                      {plural(c.items.length, 'item')} · {MODE_LABELS[c.mode]}
                    </p>
                    {emergency && (
                      <Badge variant="danger" className="self-start">
                        Emergency
                      </Badge>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </PageContainer>
      )}
    </QueryStates>
  );
}
