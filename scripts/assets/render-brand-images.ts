/**
 * Renders the favicon PNGs and the Open Graph image from SVG/HTML with Playwright.
 * Usage: npx tsx scripts/assets/render-brand-images.ts
 * (Set PLAYWRIGHT_CHROMIUM_EXECUTABLE to use a pre-installed Chromium.)
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';

const publicDir = path.resolve('public');
const mark = readFileSync(path.join(publicDir, 'favicon.svg'), 'utf8');

const icons = [
  { file: 'favicon-32.png', size: 32, padding: 0, bg: 'transparent' },
  { file: 'apple-touch-icon.png', size: 180, padding: 18, bg: '#ffffff' },
  { file: 'icon-192.png', size: 192, padding: 0, bg: 'transparent' },
  { file: 'icon-512.png', size: 512, padding: 0, bg: 'transparent' },
  // Maskable icons need the mark inside the central 80% safe zone.
  { file: 'icon-512-maskable.png', size: 512, padding: 72, bg: '#1d4ed8' },
];

const ogHtml = `<!doctype html><html><head><style>
  body{margin:0;width:1200px;height:630px;font-family:'Inter',system-ui,sans-serif;
    background:linear-gradient(180deg,#0b1220 0%,#111a2e 80%,#1d4ed8 80%,#1d4ed8 81%,#18233a 81%);
    color:#e6ecf5;display:flex;flex-direction:column;justify-content:center;padding:0 90px 110px;box-sizing:border-box}
  .brand{display:flex;align-items:center;gap:20px;font-size:40px;font-weight:700}
  .brand svg{width:72px;height:72px}
  h1{font-size:60px;line-height:1.12;margin:32px 0 20px;max-width:980px;color:#fff}
  p{font-size:30px;margin:0;color:#93c5fd}
</style></head><body>
  <div class="brand">${mark}<span>Learn to Fly</span></div>
  <h1>Learn to fly the Cessna 172 in MSFS 2024 — the way real pilots do.</h1>
  <p>Interactive lessons · In-sim challenges · Simulation only</p>
</body></html>`;

const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || undefined,
});
const page = await browser.newPage();

for (const icon of icons) {
  const inner = icon.size - icon.padding * 2;
  await page.setViewportSize({ width: icon.size, height: icon.size });
  await page.setContent(
    `<html><body style="margin:0;background:${icon.bg}"><div style="width:${icon.size}px;height:${icon.size}px;display:flex;align-items:center;justify-content:center">${mark.replace('<svg ', `<svg width="${inner}" height="${inner}" `)}</div></body></html>`,
  );
  await page.screenshot({
    path: path.join(publicDir, icon.file),
    omitBackground: icon.bg === 'transparent',
  });
}

await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(ogHtml);
await page.screenshot({ path: path.join(publicDir, 'og-image.png') });

await browser.close();
console.log('Rendered brand images to public/');
