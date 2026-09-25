import { Button } from '@/components/Button';
import { Link } from '@/components/Link';
import { PageContainer } from '@/components/PageHeader';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function NotFoundPage() {
  usePageTitle('Page not found');
  return (
    <PageContainer narrow className="text-center">
      <p className="font-mono text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold">You&apos;ve wandered off the taxiway</h1>
      <p className="mt-3 text-lg text-muted">
        We couldn&apos;t find that page. It may have moved, or the link may be wrong.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link unstyled to="/">
            Back to the home page
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link unstyled to="/learn">
            Browse the lessons
          </Link>
        </Button>
      </div>
    </PageContainer>
  );
}
