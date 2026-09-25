import { expect, test } from '@playwright/test';
import { expectAccessible, PASSWORD, signUp } from './helpers.js';

const LESSON = '/learn/m1-meet-the-skyhawk/l1-4-speeds-limits-and-checklists';

// Section 35.2 E2E flows 2 and 3.
test('sign up from a lesson, complete it, see it on the dashboard, and keep it after logging back in', async ({
  page,
}) => {
  // Flow 2: a visitor reads a lesson and signs up from the "Mark complete" prompt.
  await page.goto(LESSON);
  await page.getByRole('button', { name: 'Mark lesson complete' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'Sign up free' }).click();
  const email = await signUp(page, 'Flow Two');
  await expect(page).toHaveURL(LESSON);

  await page.getByRole('button', { name: 'Mark lesson complete' }).click();
  await expect(page.getByText('Lesson complete', { exact: true })).toBeVisible();
  await expectAccessible(page);

  await page.goto('/dashboard');
  await expect(
    page.getByRole('heading', { level: 1, name: /Welcome back, Flow Two/ }),
  ).toBeVisible();
  await expect(page.getByRole('progressbar', { name: 'Core lessons completed' })).toHaveAttribute(
    'aria-valuetext',
    /^1 of \d+ lessons$/,
  );
  await expectAccessible(page);

  // Flow 3: log out, log back in, progress is still there.
  await page.getByRole('button', { name: /Account menu for Flow Two/ }).click();
  await page.getByRole('menuitem', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Log in' }).first()).toBeVisible();
  await page.goto('/login?returnTo=%2Fdashboard');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password', { exact: true }).fill(PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page).toHaveURL(/\/dashboard$/);
  await expect(page.getByRole('progressbar', { name: 'Core lessons completed' })).toHaveAttribute(
    'aria-valuetext',
    /^1 of \d+ lessons$/,
  );
  await page.goto(LESSON);
  await expect(page.getByText('Completed', { exact: true })).toBeVisible();
});
