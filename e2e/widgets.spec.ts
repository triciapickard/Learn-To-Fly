/// <reference lib="dom" />
// page.evaluate() and locator.evaluate() callbacks run in the browser.
import { expect, test } from '@playwright/test';

const LESSON = '/learn/m1-meet-the-skyhawk/l1-4-speeds-limits-and-checklists';

test('W3 airspeed indicator: the slider stays put as V-speed descriptions appear @mobile', async ({
  page,
}) => {
  await page.goto(LESSON);
  const widget = page.getByRole('figure', { name: /Interactive diagram: Airspeed/ });
  const slider = widget.getByRole('slider', { name: 'Airspeed in knots' });
  const description = widget.getByText('Describe this diagram');
  // Page position, so scrolling the slider into view does not count as movement.
  const top = (el: Element) => Math.round(el.getBoundingClientRect().top + window.scrollY);

  await slider.fill('38');
  const sliderTop = await slider.evaluate(top);
  const belowTop = await description.evaluate(top);
  // Every band, plus the V-speeds whose descriptions wrap onto extra lines.
  for (const kias of [0, 40, 48, 55, 62, 68, 74, 85, 100, 110, 129, 140, 163, 180]) {
    await slider.fill(String(kias));
    expect(await slider.evaluate(top), `slider at ${kias} KIAS`).toBe(sliderTop);
    expect(await description.evaluate(top), `content below at ${kias} KIAS`).toBe(belowTop);
  }
});
