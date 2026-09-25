# Learn-To-Fly

## Description

Learn To Fly is a personal project that uses interactive visual explanations to teach
beginners how to fly virtually in MSFS 2024.

v1 teaches a complete beginner to fly the **Cessna 172 Skyhawk** in Microsoft Flight
Simulator 2024 the way real pilots do: short interactive lessons, visual widgets and
in-sim challenges with a self-assessed, scored debrief. The full plan lives in
[`plan.md`](./plan.md).

> For simulation use only. Learn-To-Fly is not real-world flight training.

## Stack

MERN with TypeScript on both sides (plan.md Section 26):

- **Client:** React 19, Vite, React Router 7, TanStack Query, Tailwind CSS v4
- **Server:** Node.js 24 LTS, Express 5, Mongoose, express-session + connect-mongo
- **Database:** MongoDB (local Docker or Atlas)
- **Shared:** Zod schemas, scoring and aviation maths in `shared/`
- **Quality:** Vitest, Testing Library, Supertest, Playwright, ESLint, Prettier

## Local development setup

1. Install [Node 24 LTS](https://nodejs.org/) (via nvm or fnm), Git and, optionally,
   Docker Desktop.
2. Clone and install:

   ```sh
   git clone https://github.com/triciapickard/Learn-To-Fly.git
   cd Learn-To-Fly
   nvm use
   npm install
   ```

3. Create your environment file and fill in `MONGODB_URI` and `SESSION_SECRET`:

   ```sh
   cp .env.example .env
   ```

4. Start MongoDB (or use an Atlas dev cluster):

   ```sh
   docker run -d -p 27017:27017 --name ltf-mongo mongo:8
   ```

5. Seed content: `npm run content:seed` (available from Phase 5).
6. Start everything: `npm run dev` → client on <http://localhost:5173> with `/api`
   proxied to the API on <http://localhost:3000>.

## Scripts

| Script                                | What it does                                                         |
| ------------------------------------- | -------------------------------------------------------------------- |
| `npm run dev`                         | Runs the client (Vite) and server (tsx watch) together               |
| `npm run dev:client`                  | Vite dev server on port 5173                                         |
| `npm run dev:server`                  | Express API on port 3000 with reload                                 |
| `npm run build`                       | Builds the client (`dist/`) and compiles the server (`dist-server/`) |
| `npm start`                           | Runs the compiled server                                             |
| `npm run lint` / `lint:fix`           | ESLint                                                               |
| `npm run format` / `format:check`     | Prettier                                                             |
| `npm run typecheck`                   | TypeScript checks for client, server and tooling                     |
| `npm test` / `test:watch` / `test:ci` | Vitest (client + node projects; `test:ci` adds coverage)             |

## Deployment

Production runs as one Render web service (Express serves the API and the built React
app) with MongoDB Atlas — plan.md Section 38. The [`render.yaml`](./render.yaml)
blueprint holds the service settings; `MONGODB_URI` and `PUBLIC_SITE_URL` are entered in
the Render dashboard.

- **Production URL:** not deployed yet (plan.md step 4.19).
- Health check: `GET /api/v1/health`.
- Session cookies are `Secure` in production. To try a production build locally over
  plain HTTP, set `PUBLIC_SITE_URL=http://localhost:3000` and run
  `npm run build && npm start`.

## Project structure

See [`CLAUDE.md`](./CLAUDE.md) for the folder tree and plan.md Section 25 for details.

## Contributing

Work follows the phases in `plan.md` Part VI. Branches are named `phase-<n>-<name>`,
commits follow Conventional Commits (plan.md Appendix F) and every PR uses the template
in `.github/pull_request_template.md`.
