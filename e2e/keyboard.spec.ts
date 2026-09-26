/// <reference lib="dom" />
// page.evaluate() and addInitScript() callbacks run in the browser.
import { expect, test, type Locator, type Page } from '@playwright/test';
import { PASSWORD } from './helpers.js';

// Keyboard-only walkthroughs of flows A–D (step 11.2, Section 20): every control is reached
// with Tab and operated with Enter, Space or the arrow keys. No mouse clicks.

/** Presses Tab until `target` has focus; fails if it can't be reached. */
async function tabTo(page: Page, target: Locator, max = 80) {
  for (let i = 0; i < max; i++) {
    await page.keyboard.press('Tab');
    if (await target.evaluate((el) => el === document.activeElement).catch(() => false)) return;
  }
  throw new Error(`Could not reach ${target} with Tab`);
}

test('flow A: landing page to the first lesson and a quiz, by keyboard', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await tabTo(page, page.getByRole('link', { name: 'Start lesson 1 (free)' }).first());
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/l0-1-welcome-how-learn-to-fly-works$/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  const answer = page.getByRole('radio', { name: 'Brief, Fly, Debrief' });
  await tabTo(page, page.getByRole('radio').first());
  // Arrow keys move through a radio group; Space selects.
  for (let i = 0; i < 4 && !(await answer.evaluate((el) => el === document.activeElement)); i++) {
    await page.keyboard.press('ArrowDown');
  }
  await page.keyboard.press('Space');
  await expect(answer).toBeChecked();
  await tabTo(page, page.getByRole('button', { name: 'Check answer' }).first());
  await page.keyboard.press('Enter');
  await expect(page.getByText(/Every challenge starts with the/)).toBeVisible();
});

test('flows B and C: sign up, then brief → fly → debrief a challenge, by keyboard', async ({
  page,
}) => {
  await page.goto('/signup?returnTo=%2Fchallenges%2Fc2-1-straight-and-level');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await tabTo(page, page.getByLabel('Display name'));
  await page.keyboard.type('Keyboard Pilot');
  await tabTo(page, page.getByLabel('Email'));
  await page.keyboard.type(`keys-${Date.now()}@example.com`);
  await tabTo(page, page.getByLabel('Password', { exact: true }));
  await page.keyboard.type(PASSWORD);
  await tabTo(page, page.getByRole('checkbox').first());
  await page.keyboard.press('Space');
  await tabTo(page, page.getByRole('button', { name: /create account/i }));
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { level: 1, name: 'Straight and level' })).toBeVisible();

  await tabTo(page, page.getByRole('button', { name: /set up — start/ }));
  await page.keyboard.press('Enter');
  await expect(page.getByRole('tab', { name: 'Fly' })).toHaveAttribute('aria-selected', 'true');
  await tabTo(page, page.getByRole('checkbox').first());
  await page.keyboard.press('Space');
  await expect(page.getByRole('checkbox').first()).toBeChecked();
  await tabTo(page, page.getByRole('button', { name: /Finished — debrief/ }));
  await page.keyboard.press('Enter');

  // Each criterion is a radio group: Tab into it, Space picks the first (best) option.
  const groups = page.getByRole('radiogroup');
  await expect(groups.first()).toBeVisible();
  for (let i = 0; i < (await groups.count()); i++) {
    await tabTo(page, groups.nth(i).getByRole('radio').first());
    await page.keyboard.press('Space');
    await expect(groups.nth(i).getByRole('radio').first()).toBeChecked();
  }
  await tabTo(page, page.getByRole('button', { name: 'Submit debrief' }));
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { name: 'Your result' })).toBeFocused();
});

test('flow D: header to the V-speeds page, by keyboard', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await tabTo(page, page.getByRole('banner').getByRole('link', { name: 'Reference' }));
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { level: 1, name: 'Reference' })).toBeVisible();
  await tabTo(page, page.getByRole('link', { name: 'V-speeds and limits' }));
  await page.keyboard.press('Enter');
  await expect(page.getByRole('heading', { level: 1, name: 'V-speeds and limits' })).toBeVisible();
  await expect(page.getByRole('table', { name: 'V-speeds' })).toBeVisible();
});
