/// <reference lib="dom" />
// page.evaluate() and addInitScript() callbacks run in the browser.
import { expect, test, type Page } from '@playwright/test';
import { expectAccessible, signUp } from './helpers.js';

// Every main page (step 11.1, Section 35.2 #11), plus the step 11.4 reflow check and the
// step 11.11 CSP check. Drafts are seeded in E2E (D-17), so lesson and challenge pages exist.
const PUBLIC_PAGES = [
  '/',
  '/learn',
  '/learn/m4-takeoffs-patterns-landings',
  '/learn/m0-getting-started/l0-1-welcome-how-learn-to-fly-works',
  '/learn/m1-meet-the-skyhawk/l1-4-speeds-limits-and-checklists',
  '/learn/m4-takeoffs-patterns-landings/l4-2-the-traffic-pattern',
  '/learn/m6-vfr-navigation/l6-4-vor-navigation',
  '/challenges',
  '/challenges/c4-3-full-stop-landing',
  '/challenges/c4-3-full-stop-landing/fly',
  '/reference',
  '/reference/speeds',
  '/reference/checklists',
  '/reference/checklists/before-takeoff',
  '/reference/airports',
  '/reference/airports/KLVK',
  '/reference/glossary',
  '/reference/resources',
  '/about',
  '/disclaimer',
  '/privacy',
  '/terms',
  '/roadmap',
  '/login',
  '/signup',
  '/no/such/page',
];

const SIGNED_IN_PAGES = ['/dashboard', '/account', '/account/attempts'];

/** Records CSP violations the browser reports, from the first script onward. */
async function watchCsp(page: Page) {
  await page.addInitScript(() => {
    const w = window as unknown as { __csp: string[] };
    w.__csp = [];
    document.addEventListener('securitypolicyviolation', (e) =>
      w.__csp.push(`${e.violatedDirective} ${e.blockedURI}`),
    );
  });
}

async function check(page: Page, url: string) {
  await page.goto(url);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  // Let lazy widgets and queries settle.
  await page.waitForLoadState('networkidle');
  await expectAccessible(page);
  expect(await page.evaluate(() => (window as unknown as { __csp: string[] }).__csp)).toEqual([]);
}

async function checkReflow(page: Page, url: string) {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto(url);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.waitForLoadState('networkidle');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow, `${url} scrolls sideways at 320 px`).toBeLessThanOrEqual(0);
}

test.describe('accessibility, CSP and reflow on every main page', () => {
  for (const url of PUBLIC_PAGES) {
    test(`${url}: light`, async ({ page }) => {
      await watchCsp(page);
      await check(page, url);
    });

    test(`${url}: dark, reduced motion, 320 px`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
      await watchCsp(page);
      await check(page, url);
      // Nothing keeps animating when the reader asked for reduced motion (step 11.5).
      const running = await page.evaluate(
        () => document.getAnimations().filter((a) => a.playState === 'running').length,
      );
      expect(running).toBe(0);
      await checkReflow(page, url);
    });
  }

  test('signed-in pages', async ({ page }) => {
    await watchCsp(page);
    await page.goto('/signup?returnTo=%2Fdashboard');
    await signUp(page, 'Axe Pilot');
    await expect(page).toHaveURL(/\/dashboard$/);
    for (const url of SIGNED_IN_PAGES) {
      await check(page, url);
      await page.emulateMedia({ colorScheme: 'dark' });
      await expectAccessible(page);
      await page.emulateMedia({ colorScheme: 'light' });
      await checkReflow(page, url);
      await page.setViewportSize({ width: 1280, height: 720 });
    }
  });
});
