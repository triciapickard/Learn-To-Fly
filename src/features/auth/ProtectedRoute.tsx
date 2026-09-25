import { Navigate, Outlet, useLocation } from 'react-router';
import { PageContainer } from '@/components/PageHeader';
import { LoadingRegion, Skeleton } from '@/components/Skeleton';
import { loginPathFor } from '@/lib/safeRedirect';
import { useAuth } from './api';

/** Renders child routes only for signed-in users; otherwise redirects to log in (Section 30.9). */
export default function ProtectedRoute() {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <PageContainer>
        <LoadingRegion label="Checking your session" className="flex flex-col gap-3">
          <Skeleton className="h-10 w-1/3" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-32 w-full" />
        </LoadingRegion>
      </PageContainer>
    );
  }
  if (!user) {
    return <Navigate to={loginPathFor(location.pathname + location.search)} replace />;
  }
  return <Outlet />;
}
