import { isRouteErrorResponse, useRouteError } from 'react-router';
import { Button } from '@/components/Button';
import { usePageTitle } from '@/hooks/usePageTitle';
import NotFoundPage from './NotFoundPage';

/** Root error boundary: a friendly page with a reload button (Section 34.2). */
export default function RootErrorPage() {
  const error = useRouteError();
  usePageTitle('Something went wrong');
  if (isRouteErrorResponse(error) && error.status === 404) return <NotFoundPage />;
  return (
    <main
      id="main"
      className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center gap-4 px-4 text-center"
    >
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="text-lg text-muted">
        An unexpected error stopped this page from loading. Reloading usually fixes it. If it keeps
        happening, please try again later.
      </p>
      <div>
        <Button onClick={() => window.location.reload()}>Reload the page</Button>
      </div>
      {import.meta.env.DEV && error instanceof Error && (
        <pre className="mt-4 overflow-auto rounded-control bg-surface-2 p-4 text-left text-sm">
          {error.stack}
        </pre>
      )}
    </main>
  );
}
