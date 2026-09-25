# Content authoring guide

Everything learners read lives in this folder as Markdown and YAML (plan.md D-08, D-09).
The repository is the source of truth; `npm run content:seed` validates it and copies it
into MongoDB.

```
content/
  aircraft.yaml        Cessna 172S data: V-speeds, arcs, limits, power settings
  modules.yaml         The 9 modules and the ordered lessons/challenges in each
  lessons/<module>/    One Markdown file per lesson
  challenges/          One YAML file per challenge
  checklists.yaml      Normal procedures in our own words (Appendix B)
  airports.yaml        Home-region airport cards (frequencies only once verified)
  glossary.yaml        Terms A–Z (≤ 80 words each)
  resources.yaml       External "Go deeper" links
  presets.yaml         Start states, weather, loads, dates and assistance profiles
```

Lesson images go in `src/assets/lessons/<module-slug>/` (WebP, ≤ 400 KB, alt text ≥ 10
characters) and are referenced by file name only: `![Alt text](m2-l4-lift.webp "Caption")`.

## Add a lesson

1. Copy the template in plan.md Appendix D to
   `content/lessons/<module-slug>/<lesson-slug>.md`. Slugs are the ID plus the title in
   kebab-case, e.g. `l2-3-climbs-and-descents`. Never change a slug after launch.
2. Add the slug to the module's `lessons` list in `modules.yaml`, in order.
3. Write `##` sections (they become the lesson's step navigation). Keep each section under
   ~250 words before a picture, widget, table or question.
4. Keep `published: false` until the lesson has been verified in the sim (Section 54).
   Then remove every `verify` callout, set `lastVerifiedAt` and `simVersion`, and set
   `published: true`.
5. Run `npm run content:validate` and preview it (below).

## Add a challenge

1. Copy the template in plan.md Appendix C to `content/challenges/<challenge-slug>.yaml`.
2. Add the slug to the module's `challenges` list.
3. Use presets by name (`WX_CALM`, `LOAD_SOLO`, `late-spring`, `training`) — see
   `presets.yaml`. Criteria: 3–8, weights 1–3, at least one required; tiered criteria
   need gold/silver/bronze descriptions.
4. Fly it three times in the sim before setting `published: true` (Section 49.2).

## Markdown directives

| What           | Write                                                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Callout        | `:::callout{type="tip"}` … `:::` — types: `safety`, `sim`, `classic`, `tip`, `note`, `verify` (author-only; not allowed in published lessons) |
| Widget         | `::widget{name="airspeed-indicator" mode="explore"}` — names are in `shared/widgets.ts`                                                       |
| Checklist      | `::checklist{slug="before-landing"}` — renders the Checklist Runner                                                                           |
| Video          | `::video{provider="youtube" id="VIDEO_ID" title="What it shows"}`                                                                             |
| Quiz           | see below                                                                                                                                     |
| Internal link  | `[[c4-3-full-stop-landing]]` → "C4.3 Full-stop landing" link                                                                                  |
| Aviation token | `{{vspeed.vy}}` → "74 KIAS"; `{{aircraft.cruiseTas}}` → a `specs` value                                                                       |

Quizzes (types `single`, `multi`, `numeric`, `order`; IDs unique across all lessons):

```markdown
:::quiz{id="l2-3-q1" type="single"}
Climbing at 600 fpm, when should you begin the level-off for 3,000 ft?

- [ ] 2,900 ft
- [x] About 2,940 ft
- [ ] 3,000 ft

---

Lead the level-off by about 10% of your vertical speed: 10% of 600 is 60 ft.
:::
```

- `multi`: mark every correct option with `[x]`.
- `numeric`: `:::quiz{id="…" type="numeric" answer="10" tolerance="1" unit="kt"}` with no
  options.
- `order`: a numbered list in the **correct** order; the app shuffles it.
- Every question needs an explanation after the `---` line.

## Style

US English, second person, short sentences (plan.md Section 18). Speeds in KIAS,
altitudes with MSL/AGL, headings as three digits ("heading 090"), thousands separators
("3,500 ft"), en dashes for ranges ("60–70 KIAS"). Never copy POH or Garmin text.

## Validate, seed and preview

```sh
npm run content:validate            # errors fail; add -- --strict to fail on warnings (CI does)
npm run content:stats               # word counts, questions and widgets per lesson
npm run content:seed -- --dry-run   # show what would change
npm run content:seed -- --include-drafts   # seed, publishing drafts (local only)
npm run dev                         # preview at http://localhost:5173
```

Errors name the file and line, e.g.
`ERROR content/lessons/m1-meet-the-skyhawk/l1-4-….md:42 — Unknown token {{vspeed.vq}}`.

**Drafts (Decision D-17):** unverified content stays `published: false`. Seeding with
`--include-drafts` (or `CONTENT_INCLUDE_DRAFTS=true`) shows drafts, labelled as
unverified — use it locally and on preview services, never in production.

The seeder bumps an item's `version` only when its content changes, unpublishes items you
delete (it never deletes, because attempts reference them) and records every run in the
`contentReleases` collection.
