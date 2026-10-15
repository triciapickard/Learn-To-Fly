import { PageContainer, PageHeader } from '@/components/PageHeader';
import { useModules } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { CurriculumMap } from '@/features/curriculum/CurriculumMap';
import { comingModules } from '@/features/landing/curriculumPreview';
import { useMyProgress } from '@/features/progress/api';
import { usePageTitle } from '@/hooks/usePageTitle';
import { plural } from '@/lib/format';
import { PLANNED_MODULE_COUNT } from '@/lib/release';

export default function CurriculumPage() {
  usePageTitle('Learn');
  const { data, isPending, error, refetch } = useModules();
  const { data: progress } = useMyProgress();
  return (
    <QueryStates
      isPending={isPending}
      error={error}
      refetch={refetch}
      label="Loading the curriculum"
    >
      {() => {
        const modules = data!.modules;
        const coming = comingModules(modules.map((m) => m.slug));
        return (
          <PageContainer narrow>
            <PageHeader
              title="Learn"
              description={`The full course is ${PLANNED_MODULE_COUNT} modules, from your first flight to a planned cross-country, in the same order real flight schools teach. ${plural(modules.length, 'module')} ${modules.length === 1 ? 'is' : 'are'} live in this early beta; the rest arrive as each one is verified in the sim. Open a module to see its lessons and challenges.`}
            />
            <CurriculumMap modules={modules} progress={progress} />
            {coming.length > 0 && (
              <section aria-labelledby="coming-heading" className="mt-10">
                <h2 id="coming-heading" className="eyebrow text-ink-2">
                  Coming next
                </h2>
                <ol className="mt-3 rounded-lg border border-line bg-surface">
                  {coming.map((module, index) => (
                    <li
                      key={module.slug}
                      className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 py-4 text-ink-3 ${index > 0 ? 'border-t border-line' : ''}`}
                    >
                      <span className="readout-sm w-10 shrink-0">{module.code}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold">
                          <span className="sr-only">Module {module.code.slice(1)}: </span>
                          {module.title}
                        </span>
                        <span className="block text-sm leading-5">{module.summary}</span>
                      </span>
                      <span className="readout-sm">
                        {plural(module.lessons, 'lesson')} ·{' '}
                        {plural(module.challenges, 'challenge')}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 text-sm leading-5 text-ink-2">
                  Each module is written, then flown and checked in MSFS 2024 before it is
                  published.
                </p>
              </section>
            )}
          </PageContainer>
        );
      }}
    </QueryStates>
  );
}
