import { AxeBuilder } from '@axe-core/playwright';
import { expect, type Page } from '@playwright/test';
import type { NodeResult, Result } from 'axe-core';

export const PASSWORD = 'correct horse battery staple';

/** Signs up a fresh user through the UI; lands wherever `returnTo` points. */
export async function signUp(page: Page, name = 'Test Pilot') {
  const email = `pilot-${Date.now()}-${Math.random().toString(36).slice(2, 8)}@example.com`;
  await page.getByLabel('Display name').fill(name);
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password', { exact: true }).fill(PASSWORD);
  await page.getByRole('checkbox').first().check();
  await page.getByRole('button', { name: /create account/i }).click();
  return email;
}

/** No serious or critical axe violations on the current page (Section 35.2 #11). */
export async function expectAccessible(page: Page) {
  const results = await new AxeBuilder({ page }).analyze();
  const serious = (results.violations as Result[]).filter((v) =>
    ['serious', 'critical'].includes(v.impact!),
  );
  expect(
    serious.map((v) => `${v.id}: ${v.nodes.map((n: NodeResult) => n.target).join(', ')}`),
  ).toEqual([]);
}
