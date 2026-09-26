import { QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense, type ReactNode } from 'react';
import { RouterProvider } from 'react-router';
import { ToastProvider } from '@/components/Toast';
import { AuthBootstrap } from '@/features/auth/AuthBootstrap';
import { ThemeProvider } from '@/features/theme/ThemeProvider';
import { queryClient } from '@/lib/queryClient';
import type { createRouter } from './router';

const ReactQueryDevtools = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/react-query-devtools').then((m) => ({ default: m.ReactQueryDevtools })),
    )
  : () => null;

/** App-wide providers shared by the real app and tests. */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthBootstrap />
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
      <Suspense>
        <ReactQueryDevtools buttonPosition="bottom-left" />
      </Suspense>
    </QueryClientProvider>
  );
}

export default function App({ router }: { router: ReturnType<typeof createRouter> }) {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}
