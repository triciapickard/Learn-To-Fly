import { PageHeader } from '@/components/PageHeader';
import { LoginForm } from '@/features/auth/LoginForm';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function LoginPage() {
  usePageTitle('Log in');
  return (
    <>
      <PageHeader title="Log in" description="Welcome back. Pick up where you left off." />
      <LoginForm />
    </>
  );
}
