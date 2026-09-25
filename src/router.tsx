import type { ComponentType } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router';
import AppLoading from './pages/AppLoading';
import RootErrorPage from './pages/RootErrorPage';

type PageModule = { default: ComponentType };

/** Route-level code splitting: each page is its own chunk (Section 31.2). */
function page(load: () => Promise<PageModule>): Pick<RouteObject, 'lazy'> {
  return { lazy: async () => ({ Component: (await load()).default }) };
}

const devRoutes: RouteObject[] = import.meta.env.DEV
  ? [{ path: 'dev/components', ...page(() => import('./pages/DevComponentsPage')) }]
  : [];

export const routes: RouteObject[] = [
  {
    ...page(() => import('./layouts/RootLayout')),
    errorElement: <RootErrorPage />,
    HydrateFallback: AppLoading,
    children: [
      { index: true, ...page(() => import('./pages/LandingPage')) },
      { path: 'learn', ...page(() => import('./pages/CurriculumPage')) },
      { path: 'learn/:moduleSlug', ...page(() => import('./pages/ModulePage')) },
      {
        path: 'learn/:moduleSlug/:lessonSlug',
        ...page(() => import('./layouts/LessonLayout')),
        children: [{ index: true, ...page(() => import('./pages/LessonPage')) }],
      },
      { path: 'challenges', ...page(() => import('./pages/ChallengesPage')) },
      { path: 'challenges/:slug', ...page(() => import('./pages/ChallengePage')) },
      { path: 'reference', ...page(() => import('./pages/ReferenceHubPage')) },
      { path: 'reference/speeds', ...page(() => import('./pages/SpeedsPage')) },
      { path: 'reference/checklists', ...page(() => import('./pages/ChecklistsPage')) },
      { path: 'reference/checklists/:slug', ...page(() => import('./pages/ChecklistPage')) },
      { path: 'reference/airports', ...page(() => import('./pages/AirportsPage')) },
      { path: 'reference/airports/:icao', ...page(() => import('./pages/AirportPage')) },
      { path: 'reference/glossary', ...page(() => import('./pages/GlossaryPage')) },
      { path: 'reference/resources', ...page(() => import('./pages/ResourcesPage')) },
      { path: 'about', ...page(() => import('./pages/AboutPage')) },
      { path: 'disclaimer', ...page(() => import('./pages/DisclaimerPage')) },
      { path: 'privacy', ...page(() => import('./pages/PrivacyPage')) },
      { path: 'terms', ...page(() => import('./pages/TermsPage')) },
      { path: 'roadmap', ...page(() => import('./pages/RoadmapPage')) },
      // Protected routes (ProtectedRoute wrapper added in Phase 4)
      { path: 'dashboard', ...page(() => import('./pages/DashboardPage')) },
      { path: 'account', ...page(() => import('./pages/AccountPage')) },
      { path: 'account/attempts', ...page(() => import('./pages/AccountAttemptsPage')) },
      {
        ...page(() => import('./layouts/AuthLayout')),
        children: [
          { path: 'login', ...page(() => import('./pages/LoginPage')) },
          { path: 'signup', ...page(() => import('./pages/SignupPage')) },
        ],
      },
      ...devRoutes,
      { path: '*', ...page(() => import('./pages/NotFoundPage')) },
    ],
  },
  {
    ...page(() => import('./layouts/FlyModeLayout')),
    errorElement: <RootErrorPage />,
    HydrateFallback: AppLoading,
    children: [{ path: 'challenges/:slug/fly', ...page(() => import('./pages/FlyModePage')) }],
  },
];

export function createRouter() {
  return createBrowserRouter(routes);
}
