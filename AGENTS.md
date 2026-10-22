# AGENTS MD

## Project Details

Learn to Fly teaches a complete beginner to fly the Cessna 172 Skyhawk in Microsoft Flight Simulator 2024, through lessons, interactive visual explanations and in-sim challenges.

## Stack

This is a web app using the React, MongoDB, NodeJS, Express (MERN) Stack.

## Folder Structure

The client keeps the original `src/` structure. Server, shared code and content live beside
it at the repo root (v1.md Section 25):

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
  v1.md                    # v1 master plan — single source of truth for v1
  v2.md                    # v2 master plan — builds on v1.md
```

## Preferences

When a step doesn't need my input, keep going. Put status notes in the
same message as your next action.
Stop and ask only when you can't continue without me, or before anything
destructive: deleting data, force-pushing, or changing anything outside
this repository.

## Required Actions

Before changing code, read the Status line and 'How to use this document' in v1.md (and v2.md once v2 work starts), then the sections the task touches.
