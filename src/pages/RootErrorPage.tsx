import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router';
import { Button } from '@/components/Button';
import { ReportProblemDialog } from '@/features/feedback/ReportProblemDialog';
import { usePageTitle } from '@/hooks/usePageTitle';
import NotFoundPage from './NotFoundPage';

/** Root error boundary: a friendly page with a reload button (Section 34.2). */
export default function RootErrorPage() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;
  usePageTitle('Something went wrong');
  // React Router catches route errors here, so they never reach Sentry on their own.
  useEffect(() => {
    if (!isNotFound) Sentry.captureException(error);
  }, [error, isNotFound]);
  if (isNotFound) return <NotFoundPage />;
  return (
    <main
      id="main"
      className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center gap-4 px-4 text-center"
    >
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="text-lg text-ink-2">
        An unexpected error stopped this page from loading. Reloading usually fixes it. If it keeps
        happening, please try again later.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <Button onClick={() => window.location.reload()}>Reload the page</Button>
        <ReportProblemDialog
          error={error}
          trigger={
            <Button variant="secondary" type="button">
              Report this error
            </Button>
          }
        />
      </div>
      {import.meta.env.DEV && error instanceof Error && (
        <pre className="mt-4 overflow-auto rounded-md bg-surface-sunken p-4 text-left text-sm">
          {error.stack}
        </pre>
      )}
    </main>
  );
}
