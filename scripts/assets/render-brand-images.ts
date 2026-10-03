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
// The favicon switches colours with prefers-color-scheme; on the navy OG card use the dark set.
const markOnNavy = mark.replace(
  '.fin{fill:#0c1a3a}.gap{fill:#fff}',
  '.fin{fill:#fff}.gap{fill:#0c1a3a}',
);
const font = (pkg: string, file: string) =>
  readFileSync(path.resolve('node_modules/@fontsource-variable', pkg, 'files', file)).toString(
    'base64',
  );
const displayFont = font('big-shoulders-display', 'big-shoulders-display-latin-wght-normal.woff2');
const bodyFont = font('inter', 'inter-latin-wght-normal.woff2');

const icons = [
  { file: 'favicon-32.png', size: 32, padding: 0, bg: 'transparent' },
  { file: 'apple-touch-icon.png', size: 180, padding: 18, bg: '#ffffff' },
  { file: 'icon-192.png', size: 192, padding: 0, bg: 'transparent' },
  { file: 'icon-512.png', size: 512, padding: 0, bg: 'transparent' },
  // Maskable icons need the mark inside the central 80% safe zone.
  { file: 'icon-512-maskable.png', size: 512, padding: 72, bg: '#ffffff' },
];

// Open Graph card in the homepage livery (direction C): navy, a red stripe, display type.
const ogHtml = `<!doctype html><html><head><style>
  @font-face{font-family:'Display';src:url(data:font/woff2;base64,${displayFont}) format('woff2');font-weight:100 900}
  @font-face{font-family:'Body';src:url(data:font/woff2;base64,${bodyFont}) format('woff2');font-weight:100 900}
  body{margin:0;width:1200px;height:630px;font-family:'Body',system-ui,sans-serif;position:relative;overflow:hidden;
    background:#0c1a3a;color:#ffffff;display:flex;flex-direction:column;justify-content:center;padding:0 90px 120px;box-sizing:border-box}
  .brand{display:flex;align-items:center;gap:18px;font-family:'Display';font-size:44px;font-weight:900;text-transform:uppercase;letter-spacing:0.02em}
  .brand svg{width:64px;height:64px}
  h1{font-family:'Display';font-size:118px;font-weight:900;line-height:0.88;text-transform:uppercase;margin:36px 0 24px}
  h1 span{color:#ff6b70}
  p{font-size:30px;margin:0;color:#c9d0de}
  .stripe{position:absolute;left:-40px;right:-40px;bottom:46px;height:34px;background:#d0262d;transform:rotate(-3deg)}
  .pin{position:absolute;left:-40px;right:-40px;bottom:92px;height:6px;background:#ffffff;transform:rotate(-3deg)}
</style></head><body>
  <div class="brand">${markOnNavy}<span>Learn to Fly</span></div>
  <h1>Learn to fly<br><span>the Skyhawk.</span></h1>
  <p>Cessna 172 · Microsoft Flight Simulator 2024 · Simulation only</p>
  <div class="pin"></div><div class="stripe"></div>
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
