import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { AppProviders } from './App';
import { routes } from './router';

/** React's marker for a Suspense boundary the server gave up on and the client must render. */
const CLIENT_RENDERED = '<!--$!-->';

/**
 * Build-time prerender (step 11.9): renders a public route to HTML so its first paint
 * doesn't wait for JavaScript. Signed-out, default-theme state; the client hydrates it once
 * its route code has loaded (see main.tsx).
 *
 * The first pass starts any lazy widgets loading; once they have resolved, a later pass
 * renders them inline. That keeps the markup script-free (the CSP allows no inline scripts)
 * and complete, so hydration adopts it without re-rendering any boundary.
 */
export async function render(url: string): Promise<string> {
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(new Request(new URL(url, 'http://localhost')));
  if (context instanceof Response) throw new Error(`Prerendering ${url} returned a redirect`);
  const router = createStaticRouter(dataRoutes, context);
  const renderOnce = () =>
    renderToString(
      <AppProviders>
        <StaticRouterProvider router={router} context={context} hydrate={false} />
      </AppProviders>,
    );
  let html = renderOnce();
  for (let attempt = 0; attempt < 10 && html.includes(CLIENT_RENDERED); attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    html = renderOnce();
  }
  if (html.includes(CLIENT_RENDERED)) throw new Error(`Lazy content on ${url} never resolved`);
  return html;
}
