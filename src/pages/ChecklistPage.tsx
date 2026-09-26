import { ArrowLeft, ArrowRight, Maximize, Minimize } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/Button';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { useChecklist, useChecklists } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { MODE_LABELS } from '@/features/reference/checklists';
import { ChecklistRunner } from '@/features/widgets/checklist-runner/ChecklistRunner';
import { usePageTitle } from '@/hooks/usePageTitle';
import { formatDate } from '@/lib/format';

/** Browsers without the Fullscreen API (iPhone Safari) just get the large-type runner. */
function useFullscreen(target: React.RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(false);
  const supported = typeof document !== 'undefined' && Boolean(document.fullscreenEnabled);
  useEffect(() => {
    const onChange = () => setActive(document.fullscreenElement === target.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, [target]);
  const toggle = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void target.current?.requestFullscreen();
  };
  return { supported, active, toggle };
}

/** One checklist (step 10.3): W16 in large type, with a full-screen mode for a second screen. */
export default function ChecklistPage() {
  const { slug = '' } = useParams();
  const { data, isPending, error, refetch } = useChecklist(slug);
  const { data: all } = useChecklists();
  const panel = useRef<HTMLDivElement>(null);
  const fullscreen = useFullscreen(panel);
  usePageTitle(
    data?.checklist.title ?? 'Checklist',
    data
      ? `The Cessna 172 ${data.checklist.title.toLowerCase()} checklist, item by item.`
      : undefined,
  );

  return (
    <QueryStates
      isPending={isPending}
      error={error}
      refetch={refetch}
      label="Loading the checklist"
    >
      {() => {
        const checklist = data!.checklist;
        const list = all?.checklists ?? [];
        const index = list.findIndex((c) => c.slug === checklist.slug);
        const prev = index > 0 ? list[index - 1] : undefined;
        const next = index >= 0 ? list[index + 1] : undefined;
        return (
          <PageContainer narrow>
            <Breadcrumbs
              items={[
                { label: 'Reference', to: '/reference' },
                { label: 'Checklists', to: '/reference/checklists' },
                { label: checklist.title },
              ]}
            />
            <PageHeader
              className="mt-4"
              title={checklist.title}
              eyebrow={checklist.phase}
              description={
                checklist.verifiedAt
                  ? `${MODE_LABELS[checklist.mode]} checklist. Last verified ${formatDate(checklist.verifiedAt)}.`
                  : `${MODE_LABELS[checklist.mode]} checklist. Not yet verified against the in-sim checklist.`
              }
            >
              {fullscreen.supported && (
                <Button variant="secondary" className="self-start" onClick={fullscreen.toggle}>
                  {fullscreen.active ? (
                    <Minimize aria-hidden className="size-4" />
                  ) : (
                    <Maximize aria-hidden className="size-4" />
                  )}
                  {fullscreen.active ? 'Exit full screen' : 'Full screen'}
                </Button>
              )}
            </PageHeader>
            <div ref={panel} className="bg-bg [&:fullscreen]:overflow-auto [&:fullscreen]:p-6">
              {fullscreen.active && (
                <p className="mb-4 text-2xl font-bold" aria-hidden>
                  {checklist.title}
                </p>
              )}
              <ChecklistRunner key={checklist.slug} checklist={checklist} bigText />
            </div>
            <nav
              aria-label="Other checklists"
              className="mt-10 flex flex-wrap justify-between gap-4"
            >
              {prev ? (
                <Link
                  to={`/reference/checklists/${prev.slug}`}
                  className="inline-flex items-center gap-2"
                >
                  <ArrowLeft aria-hidden className="size-4" /> {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to={`/reference/checklists/${next.slug}`}
                  className="inline-flex items-center gap-2"
                >
                  {next.title} <ArrowRight aria-hidden className="size-4" />
                </Link>
              )}
            </nav>
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
