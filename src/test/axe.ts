import axe from 'axe-core';

/**
 * Runs axe-core on a container and returns serious/critical violations. Colour contrast
 * is checked in real browsers (Playwright), because jsdom cannot compute styles.
 */
export async function seriousViolations(container: Element) {
  const results = await axe.run(container, {
    rules: { 'color-contrast': { enabled: false }, region: { enabled: false } },
  });
  return results.violations
    .filter((v) => v.impact === 'serious' || v.impact === 'critical')
    .map((v) => `${v.id}: ${v.help} (${v.nodes.map((n) => n.target.join(' ')).join(', ')})`);
}
