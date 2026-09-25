import { expect, test, type Page } from '@playwright/test';
import { expectAccessible, signUp } from './helpers.js';

const SLUG = 'c2-1-straight-and-level';

async function answerAllBest(page: Page) {
  const groups = page.getByRole('radiogroup');
  for (let i = 0; i < (await groups.count()); i++) {
    const group = groups.nth(i);
    const gold = group.getByRole('radio', { name: /^Gold/ });
    await ((await gold.count()) ? gold : group.getByRole('radio', { name: /^Met/ })).click();
  }
}

// Section 35.2 E2E flow 4 (and #12: the same flow on a phone).
test('challenge: brief → fly → debrief all Gold → result → history @mobile', async ({ page }) => {
  await page.goto(`/signup?returnTo=${encodeURIComponent(`/challenges/${SLUG}`)}`);
  await signUp(page);
  await expect(page.getByRole('heading', { name: 'Straight and level', level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sim setup' })).toBeVisible();
  await expectAccessible(page);

  await page.getByRole('button', { name: /set up — start/ }).click();
  await expect(page.getByRole('tab', { name: 'Fly' })).toHaveAttribute('aria-selected', 'true');
  await page.getByRole('checkbox').first().check();
  await expectAccessible(page);
  await page.getByRole('button', { name: /Finished — debrief/ }).click();

  const submit = page.getByRole('button', { name: 'Submit debrief' });
  await expect(submit).toBeDisabled();
  await answerAllBest(page);
  await expect(page.getByRole('status').filter({ hasText: '%' })).toContainText('100%');
  await expectAccessible(page);
  await submit.click();

  await expect(page.getByRole('heading', { name: 'Your result' })).toBeFocused();
  await expect(page.getByText('100%', { exact: true })).toBeVisible();
  await expect(page.getByText('Excellent flying. That is a Gold.')).toBeVisible();
  await expectAccessible(page);

  await page.getByRole('button', { name: /See all attempts/ }).click();
  const attempts = page.locator('details');
  await expect(attempts).toHaveCount(1);
  await expect(attempts.first()).toContainText('Gold');
  await expect(attempts.first()).toContainText('100%');
});

// Section 35.2 E2E flow 5.
test('the debrief draft survives a refresh and a detour through sign-up', async ({ page }) => {
  await page.goto(`/challenges/${SLUG}?tab=debrief`);
  await page
    .getByRole('radiogroup')
    .first()
    .getByRole('radio', { name: /^Silver/ })
    .click();
  await page.getByLabel('Notes').fill('Altitude wandered after the turn.');
  await page.reload();
  await expect(page.getByLabel('Notes')).toHaveValue('Altitude wandered after the turn.');
  await expect(
    page
      .getByRole('radiogroup')
      .first()
      .getByRole('radio', { name: /^Silver/ }),
  ).toBeChecked();

  // A visitor is asked to sign in; the answers come back afterwards.
  await page.getByRole('link', { name: 'Sign up free' }).click();
  await signUp(page);
  await expect(page).toHaveURL(new RegExp(`/challenges/${SLUG}\\?tab=debrief`));
  await expect(page.getByLabel('Notes')).toHaveValue('Altitude wandered after the turn.');
  await expect(page.getByRole('button', { name: 'Submit debrief' })).toBeDisabled();
});

test('challenges list filters live in the URL', async ({ page }) => {
  // Setup challenges are all difficulty 1, so this combination is always empty.
  await page.goto('/challenges?type=setup&difficulty=5');
  await expect(page.getByText('No challenges match these filters')).toBeVisible();
  await page.getByRole('button', { name: 'Clear filters' }).click();
  await expect(page).toHaveURL(/\/challenges$/);
  await expect(page.getByRole('link', { name: /Straight and level/ })).toBeVisible();
  await expectAccessible(page);
});
