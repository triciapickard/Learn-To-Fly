import type { ReactNode } from 'react';
import { PageContainer } from '@/components/PageHeader';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { ErrorState } from '@/components/States';
import { ApiError } from '@/lib/apiClient';
import NotFoundPage from '@/pages/NotFoundPage';

export function isNotFound(error: unknown): boolean {
  return error instanceof ApiError && error.status === 404;
}

/** Page-level loading skeleton shaped like a typical content page. */
export function PageSkeleton({ label = 'Loading' }: { label?: string }) {
  return (
    <PageContainer>
      {/* Full height so the footer stays below the fold until content arrives (no layout shift). */}
      <LoadingRegion label={label} className="flex min-h-dvh flex-col gap-4">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-5 w-full max-w-2xl" />
        <Skeleton className="mt-6 h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </LoadingRegion>
    </PageContainer>
  );
}

/** Renders loading, not-found and error states for a page's main query. */
export function QueryStates({
  isPending,
  error,
  refetch,
  label,
  children,
}: {
  isPending: boolean;
  error: unknown;
  refetch: () => void;
  label?: string;
  children: () => ReactNode;
}) {
  if (isPending) return <PageSkeleton label={label} />;
  if (isNotFound(error)) return <NotFoundPage />;
  if (error) {
    return (
      <PageContainer>
        <h1 className="sr-only">Something went wrong</h1>
        <ErrorState onRetry={refetch} />
      </PageContainer>
    );
  }
  return <>{children()}</>;
}
