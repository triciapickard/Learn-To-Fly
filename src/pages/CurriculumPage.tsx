import { PageContainer, PageHeader } from '@/components/PageHeader';
import { useModules } from '@/features/content/api';
import { QueryStates } from '@/features/content/queryState';
import { CurriculumMap } from '@/features/curriculum/CurriculumMap';
import { useMyProgress } from '@/features/progress/api';
import { usePageTitle } from '@/hooks/usePageTitle';

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
      {() => (
        <PageContainer narrow>
          <PageHeader
            title="Learn"
            description="Nine modules take you from your first flight to a planned cross-country, in the same order real flight schools teach. Open a module to see its lessons and challenges."
          />
          <CurriculumMap modules={data!.modules} progress={progress} />
        </PageContainer>
      )}
    </QueryStates>
  );
}
