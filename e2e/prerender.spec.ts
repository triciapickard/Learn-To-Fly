/// <reference lib="dom" />
// page.evaluate() and addInitScript() callbacks run in the browser.
import { expect, test } from '@playwright/test';

// Step 11.9: the landing page is prerendered at build time and hydrated, not replaced.
test('the landing page arrives prerendered and hydrates without errors', async ({
  page,
  request,
}) => {
  const html = await (await request.get('/')).text();
  expect(html).toMatch(/<div id="root"><[^>]+>[\s\S]*<h1[^>]*>Learn to fly the Cessna 172/);

  for (const theme of ['light', 'dark']) {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(m.text());
    });
    await page.addInitScript((t) => {
      localStorage.setItem('ltf-theme', t);
      const w = window as unknown as { __h1s: Set<Element> };
      w.__h1s = new Set();
      new MutationObserver(() => {
        const h1 = document.querySelector('h1');
        if (h1) w.__h1s.add(h1);
      }).observe(document, { subtree: true, childList: true });
    }, theme);
    await page.goto('/');
    // Hydration finished: the theme toggle shows the saved preference.
    await expect(
      page.getByRole('button', { name: `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}` }),
    ).toBeVisible();
    await page.waitForLoadState('networkidle');
    // One <h1> node for the whole load: React adopted the prerendered markup.
    expect(
      await page.evaluate(() => (window as unknown as { __h1s: Set<Element> }).__h1s.size),
    ).toBe(1);
    expect(errors).toEqual([]);
  }
});
