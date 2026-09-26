---
name: verify
description: Build, run and drive the Learn-To-Fly web app (production build + in-memory MongoDB + Playwright) to verify a change in the real UI.
---

# Verify Learn-To-Fly

Recipe that worked in a cloud container (no Docker, no system `mongod`).

## Setup

1. **Node 24** (engines `>=24 <25`; containers may default to 22):
   `export NVM_DIR=/opt/nvm; source /opt/nvm/nvm.sh; nvm install 24; nvm use 24`
2. `npm ci` (install scripts are skipped; argon2 prebuilds still work).
3. **MongoDB** without Docker: a throwaway script **in the repo root** (so imports resolve),
   e.g. `.verify-mongo.mjs`, run in the background:
   ```js
   import { MongoMemoryServer } from 'mongodb-memory-server';
   const m = await MongoMemoryServer.create({ instance: { port: 27018, dbName: 'learntofly' } });
   console.log('MONGO READY', m.getUri());
   setInterval(() => {}, 1 << 30);
   ```
   The first run downloads `mongod` into `node_modules/.cache` (~1 min).
4. `.env` from `.env.example` with `MONGODB_URI=mongodb://127.0.0.1:27018/learntofly`, a
   32+ char `SESSION_SECRET`, and **`NODE_ENV` removed or commented out** (see gotchas).
5. `npm run content:seed`, then `npm run build`.
6. Start the production server (it does not read `.env` in production, so pass env inline):
   ```sh
   NODE_ENV=production PORT=3000 MONGODB_URI=mongodb://127.0.0.1:27018/learntofly \
   SESSION_SECRET=<32+ chars> PUBLIC_SITE_URL=http://localhost:3000 LOG_LEVEL=warn \
   node dist-server/server/src/index.js
   ```
   Wait until `GET /api/v1/health` returns `{"status":"ok","db":"ok"}`.

## Drive

- Playwright scripts also go in the repo root (`.verify-*.mjs`) and use
  `chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })`, because the pinned
  Playwright expects a newer headless shell than the one preinstalled.
- Flows worth driving: signup (`Create account`, two checkboxes) → lesson quiz
  (`Check answer`) → `Mark lesson complete` → challenge `I'm set up — start` → Fly tab
  timer (`Start`) → `Finished — debrief` → answer every radiogroup → `Submit debrief` →
  History tab → `/dashboard`, `/account/attempts` → logout via `Account menu for <name>` →
  login.
- Selectors: use `getByLabel('Password', { exact: true })` (the show/hide toggle also
  matches "Password"). Radix renders every tab panel, so scope with
  `[role=tabpanel][data-state=active]`. `Submit debrief` stays disabled until every
  criterion is answered, which is intended.
- API probes need a CSRF token: `GET /api/v1/auth/csrf` (keep the cookie jar) and send it
  as `X-CSRF-Token` with `Origin: http://localhost:3000`. Without it, every mutating
  request returns 403.

## Gotchas

- `NODE_ENV=development` in `.env` (as `.env.example` ships it) makes `vite build`
  produce a **development** bundle (`jsxDEV`, absolute source paths, React Query
  devtools, ~500 kB entry instead of ~310 kB) without any warning.
- Login is rate-limited to 10 per 15 min per IP, so repeated runs hit 429s.
  Restart the server to reset the limit (the store is in memory).
- Clean up afterwards: delete `.verify-*.mjs` and `.env`, and stop the server and mongod.
