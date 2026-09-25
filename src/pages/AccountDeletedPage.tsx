import { Button } from '@/components/Button';
import { Link } from '@/components/Link';
import { PageContainer, PageHeader } from '@/components/PageHeader';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function AccountDeletedPage() {
  usePageTitle('Account deleted');
  return (
    <PageContainer narrow>
      <PageHeader
        title="Your account has been deleted"
        description="Your account, progress, challenge attempts and notes have been permanently removed, and you have been signed out everywhere."
      />
      <p className="text-muted">
        Thanks for flying with us. The lessons are still free to read any time.
      </p>
      <Button asChild className="mt-6">
        <Link unstyled to="/">
          Back to the home page
        </Link>
      </Button>
    </PageContainer>
  );
}
