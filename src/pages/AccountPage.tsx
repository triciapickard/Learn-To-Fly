import { PageContainer, PageHeader } from '@/components/PageHeader';
import { DataSection } from '@/features/account/DataSection';
import { PreferencesSection } from '@/features/account/PreferencesSection';
import { ProfileSection } from '@/features/account/ProfileSection';
import { SecuritySection } from '@/features/account/SecuritySection';
import { useAuth } from '@/features/auth/api';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function AccountPage() {
  usePageTitle('Account');
  const { user } = useAuth();
  if (!user) return null;
  return (
    <PageContainer narrow>
      <PageHeader title="Account" description="Your profile, preferences, password and data." />
      <div className="flex flex-col gap-6">
        <ProfileSection user={user} />
        <PreferencesSection user={user} />
        <SecuritySection />
        <DataSection />
      </div>
    </PageContainer>
  );
}
