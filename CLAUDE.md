# CLAUDE MD

## Project Details

This is a currently indevelopment personal project that will teach beginners how to professionally fly in MSFS 2024 starting with a **Cessna 172 skyhawk** all the way to an **Airbus A380** with in-depth teaching and hundreds of in-sim challenges.

## Stack

This is a web app using the React, MongoDB, NodeJS, Express (MERN) Stack.

## Folder Structure

The client keeps the original `src/` structure. Server, shared code and content live beside
it at the repo root (plan.md Section 25):

```
Learn-To-Fly/
  .github/                 # CI workflow, PR template, Dependabot
  content/                 # Authoring source of truth: YAML + Markdown lessons
    lessons/<module>/      # one Markdown file per lesson
    challenges/            # one YAML file per challenge
  public/                  # static files copied as-is (favicons, robots.txt)
  scripts/                 # content-validate, content-seed, check-links
  server/
    src/
      app.ts               # builds the Express app (no listen) — testable
      index.ts             # connects DB, starts server, graceful shutdown
      config/              # env.ts (Zod-validated), db.ts
      middleware/
      models/              # Mongoose schemas
      routes/              # <resource>.routes.ts
      controllers/         # <resource>.controller.ts
      services/            # <resource>.service.ts — business logic, no req/res
      utils/
      types/
    tests/                 # Vitest + Supertest + mongodb-memory-server
  shared/                  # imported by client, server and scripts (@shared/)
    schemas/               # Zod schemas: content and API I/O
    aviation/              # pure maths: wind triangle, crosswind, load factor, VOR
    scoring.ts
    progress.ts
    constants.ts
  src/                     # React client (@/)
    assets/
    components/            # reusable UI
    features/              # feature modules (auth, lessons, challenges, widgets, …)
    layouts/
    pages/                 # route-level components (thin)
    lib/                   # apiClient, queryClient, utils
    hooks/
    styles/                # Tailwind entry, tokens.css
    test/                  # test setup, MSW handlers
  e2e/                     # Playwright tests
  plan.md                  # v1 master plan — single source of truth
```

## Preferences

At the end of a task or phase completion, always include the following:

- **What I changed**: A brief list of the changes you made.
- **What I couldn't do** A list of things you where unable to do.
- **What I need from you** Optional, any things that are absolutely necessary that you can't do but I can. Give me step by step instructions on how to do it.

---

When a step doesn't need my input, keep going. Put status notes in the
same message as your next action.
Stop and ask only when you can't continue without me, or before anything
destructive: deleting data, force-pushing, or changing anything outside
this repository.

---

Don't update me on every step you take, It is better to start with your intentions and what you're going to do first like normal, then do the task or phase, once done, only _then_ should you report back with the previously stated 3 W's (What I changed, What I couldn't do, What I need from you).

## Required Actions

Always briefly read the plan.md before making any changes to code to get a better understanding of the project and the current status.
