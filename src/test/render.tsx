import { QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { createMemoryRouter, RouterProvider, type RouteObject } from 'react-router';
import { ToastProvider } from '@/components/Toast';
import { TooltipProvider } from '@/components/Tooltip';
import { ThemeProvider } from '@/features/theme/ThemeProvider';
import { createQueryClient } from '@/lib/queryClient';
import { routes } from '@/router';

export function TestProviders({ children }: { children: ReactNode }) {
  const client = createQueryClient();
  client.setDefaultOptions({ queries: { retry: false, staleTime: 0 } });
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <TooltipProvider>
          <ToastProvider>{children}</ToastProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

/** Renders a component inside the app providers and a memory router. */
export function renderWithProviders(
  ui: ReactElement,
  { route = '/', path = '*', ...options }: { route?: string; path?: string } & RenderOptions = {},
) {
  const router = createMemoryRouter([{ path, element: ui }], { initialEntries: [route] });
  return {
    router,
    ...render(<RouterProvider router={router} />, { wrapper: TestProviders, ...options }),
  };
}

/** Renders the real route tree at a URL. */
export function renderRoute(
  url: string,
  extraRoutes: RouteObject[] = [],
  { wrapper: Outer }: { wrapper?: (props: { children: ReactNode }) => ReactNode } = {},
) {
  const router = createMemoryRouter([...extraRoutes, ...routes], { initialEntries: [url] });
  const Wrapper = ({ children }: { children: ReactNode }) =>
    Outer ? (
      <Outer>
        <TestProviders>{children}</TestProviders>
      </Outer>
    ) : (
      <TestProviders>{children}</TestProviders>
    );
  return { router, ...render(<RouterProvider router={router} />, { wrapper: Wrapper }) };
}
