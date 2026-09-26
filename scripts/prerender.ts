/**
 * Prerenders the landing page after `vite build` and the SSR build of src/entry-server.tsx
 * (step 11.9). The result goes in dist/.prerender/, which express.static never serves
 * (dotfiles are ignored); the server sends it for `/` instead of the empty shell.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = '<div id="root"></div>';
const dist = path.resolve('dist');
const { render } = (await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)) as {
  render: (url: string) => Promise<string>;
};

const template = readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes(ROOT)) throw new Error(`dist/index.html has no ${ROOT}`);
const html = await render('/');
if (!html.includes('<h1')) throw new Error('The prerendered landing page has no <h1>');
if (html.includes('<script')) throw new Error('The prerendered landing page has an inline script');

mkdirSync(path.join(dist, '.prerender'), { recursive: true });
writeFileSync(
  path.join(dist, '.prerender', 'landing.html'),
  template.replace(ROOT, `<div id="root">${html}</div>`),
);
console.log(`Prerendered / (${(html.length / 1024).toFixed(1)} KB of HTML)`);
