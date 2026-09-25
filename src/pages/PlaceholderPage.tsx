import { PageContainer, PageHeader } from '@/components/PageHeader';
import { usePageTitle } from '@/hooks/usePageTitle';

/** Temporary page for routes whose feature is built in a later phase. */
export function PlaceholderPage({ title, description }: { title: string; description?: string }) {
  usePageTitle(title);
  return (
    <PageContainer>
      <PageHeader title={title} description={description} />
    </PageContainer>
  );
}
