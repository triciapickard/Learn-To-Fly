import { PageHeader } from '@/components/PageHeader';
import { SignupForm } from '@/features/auth/SignupForm';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function SignupPage() {
  usePageTitle('Sign up');
  return (
    <>
      <PageHeader
        title="Sign up"
        description="A free account saves your lesson progress, challenge scores and attempt history. Learn to Fly is in public beta, so expect a few rough edges."
      />
      <SignupForm />
    </>
  );
}
