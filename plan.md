# Learn-To-Fly — v1 Master Plan

> **Status:** Draft 1 · Planning document · Nothing in this plan has been built yet.
>
> **Scope of this document:** Every step from an empty repository to a deployed, demo-ready
> **v1** of Learn-To-Fly: a MERN web app that teaches a complete beginner to fly the
> **Cessna 172 Skyhawk** in **Microsoft Flight Simulator 2024 (MSFS 2024)**, with
> interactive visual explanations and in-sim challenges.
>
> **Out of scope for v1:** Every aircraft other than the Cessna 172. The long-term path to
> the Airbus A380 is described only in the post-v1 roadmap (Section 59).

---

## How to use this document

1. **Read Part I first.** It defines what v1 _is_ and, just as importantly, what it is _not_.
   Every later decision traces back to it.
2. **Use Part II to learn the aircraft yourself.** You cannot teach the Skyhawk well until you
   can fly it well in the sim. Part II has every resource and a self-study schedule.
3. **Parts III–V are the specification.** Curriculum, product design and technical design.
   When you are unsure what to build, the answer should be here.
4. **Part VI is the execution plan.** Phases 0–13, each broken into numbered steps with
   checkboxes, acceptance criteria and time estimates. Work top to bottom.
5. **Part VII covers quality, risk, legal and the demo.** Read it before you deploy.
6. **The appendices are reference material.** Glossary, templates, formulas, the condensed
   master checklist and more.

### Conventions used in this plan

- `- [ ]` marks an actionable step. Tick it (`- [x]`) in a PR when it is done.
- **P0** = required for v1 launch.
- **P1** = nice-to-have for v1; consider it but okay if it ends up in v1.1.
- **P2** = explicitly post-v1.
- **AC** = Acceptance Criteria. A step is not done until every AC is met.
- **Est.** = rough time estimate for one person working part-time. Estimates assume you
  are comfortable with JavaScript and are still learning some of the stack.
- **⚠ Verify** marks an aviation fact or number that you must check against the in-sim
  aircraft, the official handbook or a current chart before publishing it to learners.
  Aviation data changes (frequencies, airspace, procedures) and MSFS models are not
  always identical to the real aircraft.
- File paths are relative to the repository root, e.g. `src/components/Button.tsx`.
- "The sim" always means Microsoft Flight Simulator 2024 on PC or Xbox.

### Document maintenance rules

- This file is the single source of truth for v1 planning.
- If a decision changes, update the **Decision Log** (Section 5) _and_ the affected section.
- Do not delete completed steps. Tick them, so the plan also becomes a build log.
- Every task = one PR (except if the task is e.g a phase), this makes it easy to find exactly which line caused the issue instead of having to search through a 10,000 line PR just to find it's in another one.

---

## Table of contents

**Part I — Product definition**

1. Vision, mission and the v1 promise
2. v1 scope: in, out, and later
3. Target users and personas
4. Success criteria and the definition of "v1 done"
5. Decision log

**Part II — Learning the Cessna 172 (for you, the author)**

6. Resource library: where to find documentation and learning material
7. Author self-study path (before you write lesson content)
8. Cessna 172S reference data
9. The Cessna 172 in MSFS 2024: variants, settings, controls and quirks
10. Navigation fundamentals reference
11. The v1 home region: San Francisco Bay Area

**Part III — Curriculum**

12. Curriculum design principles
13. Curriculum map (modules → lessons → challenges)
14. Lesson specifications (every v1 lesson)
15. Challenge specifications (every v1 challenge)
16. Interactive visual explanations (widget specifications)
17. Quizzes and knowledge checks
18. Content style guide

**Part IV — Product design**

19. Information architecture and sitemap
20. Page-by-page specifications
21. Design system
22. Accessibility
23. Responsive behaviour

**Part V — Technical design**

24. Architecture overview
25. Repository structure
26. Tech stack and versions
27. Data model
28. Content pipeline
29. API specification
30. Authentication and authorization
31. Frontend architecture
32. Security
33. Performance
34. Error handling, logging and monitoring
35. Testing strategy
36. Continuous integration
37. Environments and configuration
38. Deployment

**Part VI — Execution plan**

39. Phase overview and timeline
40. Phase 0 — Accounts, tools and learning the aircraft
41. Phase 1 — Repository and tooling
42. Phase 2 — Backend foundation
43. Phase 3 — Frontend foundation and design system
44. Phase 4 — Authentication
45. Phase 5 — Content model and pipeline
46. Phase 6 — Lesson player and interactive widgets
47. Phase 7 — Challenges
48. Phase 8 — Progress tracking and dashboard
49. Phase 9 — Content authoring
50. Phase 10 — Reference section and tools
51. Phase 11 — Polish, accessibility and performance
52. Phase 12 — QA and in-sim verification
53. Phase 13 — Deployment and launch

**Part VII — Quality, risk, legal and launch**

54. In-sim content verification protocol
55. Release QA checklist
56. Risks and mitigations
57. Legal, trademarks and disclaimers
58. The v1 demo script
59. Post-v1 roadmap (to the A380)

**Appendices**

- A. Glossary
- B. Cessna 172S normal procedures summary (in our own words)
- C. Challenge file template
- D. Lesson file template
- E. Environment variable reference
- F. Git workflow and commit conventions
- G. Aviation formulas and rules of thumb
- H. Condensed master checklist

> Section numbers are global and run from 1 to 59, so a reference such as "Section 16"
> always means the same place no matter which Part you are reading.

---

# Part I — Product definition

## 1. Vision, mission and the v1 promise

### 1.1 Vision

Learn-To-Fly teaches complete beginners to fly _professionally_ in Microsoft Flight
Simulator 2024. "Professionally" means the way a real pilot flies: using checklists,
flying precise speeds and altitudes, following traffic patterns, navigating with charts
and instruments, talking on the radio correctly, and making safe decisions. The long-term
journey starts in a **Cessna 172 Skyhawk** and ends in an **Airbus A380**, with in-depth
teaching and hundreds of in-sim challenges along the way.

### 1.2 Mission for v1

Prove the concept with a single aircraft. v1 must take someone who has never flown the
Cessna 172 and, through short interactive lessons and hands-on challenges, get them to
the point where they can:

1. Set up MSFS 2024 sensibly for training (controls, assistance settings, views).
2. Explain what every primary control and instrument in the Skyhawk does.
3. Start the engine, taxi and do a run-up using a checklist.
4. Fly the four fundamentals: straight-and-level, climbs, descents and turns.
5. Take off, fly a standard traffic pattern and land, including a go-around.
6. Fly slow flight, recognise and recover from stalls, and handle an engine failure.
7. Read a VFR sectional chart and understand the basic airspace classes.
8. Plan and fly a short VFR cross-country flight using pilotage, dead reckoning, a VOR and
   the G1000 GPS.
9. Make basic radio calls at non-towered and towered airports.
10. Complete a capstone "checkride" flight that combines everything above.

### 1.3 The v1 promise (one sentence)

> "In about 20–30 hours of lessons and sim time, Learn-To-Fly takes you from never having
> flown the Cessna 172 to flying a planned cross-country flight like a real pilot."

### 1.4 What makes Learn-To-Fly different

- **Interactive visual explanations** instead of walls of text: you can drag a yoke and
  watch the airplane respond, hover over a G1000 screen to see what each box means, or
  move a wind arrow and watch the crosswind component change.
- **Challenges that are flown in the real sim**, with a clear setup (airport, runway,
  weather, time of day), a precise goal, measurable success criteria and a debrief.
- **Professional standards from day one.** Tolerances are borrowed (loosely, and
  labelled as such) from the FAA Private Pilot Airman Certification Standards so that
  learners build real habits.
- **Honest scope.** One airplane, done properly, before adding the next.

### 1.5 What v1 is not

- It is not real-world flight training and must never claim to be. (See Section 57.)
- It is not a replacement for the Pilot's Operating Handbook (POH), the FAA handbooks or a
  certified flight instructor.
- It is not a sim add-on. v1 does not read data from the sim (no SimConnect). Challenges
  are self-assessed. Automatic grading is post-v1 (Section 59).

---

## 2. v1 scope: in, out, and later

### 2.1 In scope for v1 (P0 unless marked)

**Content**

- One aircraft: Cessna 172 Skyhawk as shipped in MSFS 2024, primary focus on the
  **G1000 NXi** glass-cockpit variant, with "classic panel" callouts where the
  steam-gauge variant differs.
- 9 modules (Module 0 to Module 8), 40 lessons (33 P0, 7 P1) and 35 challenges
  (29 P0, 6 P1). Lessons are short (10–20 minutes each). Full list in Section 13.
- One "home region" for all challenges: the San Francisco Bay Area (Section 11).
- A reference section: V-speeds, checklist summaries, glossary, airport cards.
- Curated external resources on every lesson ("Go deeper" links).

**Product features**

- Public landing page that explains the product and lets anyone preview lessons.
- Account registration, login, logout and a profile/settings page.
- Curriculum map showing modules, lessons, challenges and completion state.
- Lesson player with Markdown text, callouts, images, embedded interactive widgets and
  inline knowledge checks.
- 13 P0 interactive widgets (plus 7 P1) — full list in Section 16.
- Challenge pages with a three-step flow: **Brief → Fly → Debrief**.
- Self-assessed challenge debrief with a scored rubric, notes and attempt history.
- Progress tracking for lessons and challenges, persisted in MongoDB.
- Dashboard with "continue where you left off", overall progress, and recent attempts.
- Responsive layout that works on a second monitor, a laptop, a tablet next to the sim,
  and a phone.
- Dark mode (P0 — many sim users fly in dark rooms) and light mode.
- Accessibility to WCAG 2.2 AA for all core flows.
- Deployed to the public internet on a stable URL.

**Engineering**

- MERN stack: MongoDB, Express, React, Node.js.
- TypeScript on client and server.
- Content authored as files in the repo, validated and seeded into MongoDB.
- Automated tests (unit, API, end-to-end smoke) running in GitHub Actions.
- Basic security hardening (Section 32) and error logging (Section 34).

### 2.2 P1 — nice-to-have for v1 (ship if time allows, else v1.1)

- Password reset via email.
- Tools page: crosswind calculator, wind correction angle/E6B-lite, time–speed–distance,
  fuel planning.
- Printable kneeboard versions of challenge briefs.
- Glossary hover-cards inside lesson text.
- Classic (steam gauge) variant setting that swaps images/callouts automatically.
- The 7 P1 lessons and 6 P1 challenges listed in Section 13.

### 2.3 Explicitly out of scope for v1 (P2 / post-v1)

- Any aircraft other than the Cessna 172 (DA40, Baron, King Air, CJ4, A320, 737, 787, A380…).
- Reading live data from the sim (SimConnect, companion desktop app, auto-grading).
- An admin/content management UI (content is edited in the repo).
- Social features (leaderboards, comments, sharing).
- Payments, subscriptions or ads.
- Native mobile apps.
- Instrument flying (IFR) beyond a basic "emergency instrument turn" awareness.
- Localisation into languages other than English.
- Multiple home regions.
- VATSIM/PilotEdge online ATC training (mentioned as a resource only).

### 2.4 Scope guardrails

When a new idea comes up during the build, ask these questions in order:

1. Does it help a beginner fly the Cessna 172 better? If no → post-v1.
2. Is it required for the demo in Section 58? If no → P1 at best.
3. Can it be done in under a day? If no → P1 at best, unless it blocks a P0 item.
4. Write it in the "Parking lot" list at the bottom of Section 59 and keep going.

---

## 3. Target users and personas

### 3.1 Primary persona — "Sam, the new simmer"

- **Age / background:** 16–40, bought MSFS 2024 recently, plays other games.
- **Experience:** Has taken off and crashed a few times. Does not know what a V-speed is.
- **Hardware:** Xbox controller or a cheap joystick; no rudder pedals; one monitor
  (sometimes a phone or tablet beside it).
- **Goals:** "I want to actually know what I'm doing and land without bouncing."
- **Frustrations:** YouTube tutorials are long and disorganised; the in-sim tutorials end
  too early; real-world handbooks feel overwhelming.
- **What Sam needs from v1:** Short lessons, visual explanations, clear challenges, a sense
  of progress.

### 3.2 Secondary persona — "Alex, the aspiring real pilot"

- **Age / background:** 18–55, considering real flight lessons, uses the sim to prepare.
- **Hardware:** Yoke, throttle quadrant, rudder pedals.
- **Goals:** Build correct habits (checklists, radio calls, patterns) before paying for real
  lessons.
- **What Alex needs from v1:** Accuracy, references to FAA material, realistic tolerances,
  honesty about where the sim differs from reality.

### 3.3 Tertiary persona — "Jordan, the returning simmer"

- **Background:** Flew older versions of MSFS/FSX years ago, rusty, new to the G1000.
- **What Jordan needs:** Ability to skip ahead, a G1000 focus, navigation challenges.

### 3.4 Anti-persona (who v1 is not for)

- Real student pilots looking for official ground school credit.
- Airline simmers who only want to fly the A320/737 today (that is the long-term roadmap).

### 3.5 Core user stories (v1)

Each story has an ID so tests and PRs can reference it.

| ID    | As a…   | I want to…                                    | So that…                                | Priority |
| ----- | ------- | --------------------------------------------- | --------------------------------------- | -------- |
| US-01 | visitor | see what Learn-To-Fly is on the landing page  | I can decide if it is for me            | P0       |
| US-02 | visitor | open a sample lesson without an account       | I can try before signing up             | P0       |
| US-03 | visitor | create an account with email and password     | my progress is saved                    | P0       |
| US-04 | learner | log in and out                                | I can use it on multiple devices        | P0       |
| US-05 | learner | see the whole curriculum and my progress      | I know what to do next                  | P0       |
| US-06 | learner | read a lesson with visuals and widgets        | I understand concepts quickly           | P0       |
| US-07 | learner | answer quick questions inside a lesson        | I can check my understanding            | P0       |
| US-08 | learner | mark a lesson complete                        | my progress updates                     | P0       |
| US-09 | learner | open a challenge brief with exact sim setup   | I can set up the sim correctly          | P0       |
| US-10 | learner | keep the challenge brief open while flying    | I can refer to it mid-flight            | P0       |
| US-11 | learner | debrief a challenge with a scored rubric      | I know how well I did                   | P0       |
| US-12 | learner | see my past attempts at a challenge           | I can see improvement                   | P0       |
| US-13 | learner | continue where I left off from the dashboard  | I don't lose my place                   | P0       |
| US-14 | learner | look up V-speeds and checklists quickly       | I don't have to search mid-flight       | P0       |
| US-15 | learner | look up an unfamiliar term                    | I can keep learning without leaving     | P0       |
| US-16 | learner | choose dark or light mode                     | the site is comfortable next to the sim | P0       |
| US-17 | learner | set my cockpit variant and controller type    | tips match my setup                     | P1       |
| US-18 | learner | reset my password by email                    | I can recover my account                | P1       |
| US-19 | learner | use calculators for wind and fuel             | I can plan flights                      | P1       |
| US-20 | learner | print a kneeboard version of a brief          | I can use it offline                    | P1       |
| US-21 | learner | delete my account and data                    | I control my data                       | P0       |
| US-22 | learner | use the site with a keyboard or screen reader | the site is accessible                  | P0       |

---

## 4. Success criteria and the definition of "v1 done"

### 4.1 Functional definition of done

v1 is done when **all** of the following are true:

- [ ] All P0 user stories in Section 3.5 pass their end-to-end test.
- [ ] All 33 P0 lessons are published, proofread and verified in-sim (Section 54).
- [ ] All 29 P0 challenges are published and have been flown and passed by you, at least
      once, following only the brief (no outside knowledge).
- [ ] All P0 widgets (Section 16) work with mouse, touch and keyboard.
- [ ] The app is deployed to a public URL over HTTPS with a real MongoDB Atlas database.
- [ ] The demo script (Section 58) can be completed start to finish without errors.
- [ ] The release QA checklist (Section 55) is fully ticked.

### 4.2 Quality bars

| Area                                                              | Target                               |
| ----------------------------------------------------------------- | ------------------------------------ |
| Lighthouse Performance (landing, mobile)                          | ≥ 85                                 |
| Lighthouse Accessibility (all main pages)                         | ≥ 95                                 |
| Lighthouse Best Practices                                         | ≥ 95                                 |
| Lighthouse SEO (public pages)                                     | ≥ 90                                 |
| Largest Contentful Paint (landing, 4G)                            | < 2.5 s                              |
| API p95 latency (warm)                                            | < 300 ms                             |
| JavaScript bundle (initial, gzipped)                              | < 250 KB                             |
| Server test coverage (lines)                                      | ≥ 80%                                |
| Client test coverage (lines, `src/features` and `src/components`) | ≥ 70%                                |
| Content validation                                                | 0 errors, 0 warnings                 |
| Broken external links                                             | 0 (checked by script before release) |

### 4.3 Learning success signals (to watch after launch)

These are not launch blockers but should be measurable soon after v1:

- Percentage of registered users who complete Module 1.
- Percentage who attempt at least one challenge.
- Median number of attempts before passing each challenge (a challenge with a median of
  five or more is probably too hard or badly briefed).
- Self-reported confidence before and after (optional one-question survey, P1).

### 4.4 "Show someone" readiness

The user asked for a v1 that is "usable and enough to show to someone". Concretely:

- A stranger can reach the site, understand it within 30 seconds, sign up within
  2 minutes and finish the first lesson within 15 minutes.
- You can give a 10-minute demo (Section 58) that shows the landing page, a lesson with
  widgets, a challenge brief, flying it in the sim, and debriefing it.
- Nothing on the site says "Lorem ipsum", "TODO", "Coming soon" (except the roadmap
  teaser) or shows a broken image.

---

## 5. Decision log

Record every significant decision here. Format: ID, decision, alternatives considered,
reason, date. Initial decisions below were made while writing this plan and can be
revisited, but should not be changed silently.

### D-01 — Single aircraft: Cessna 172 Skyhawk (MSFS 2024 default)

- **Alternatives:** Start with a Piper Cub (simpler), or several trainers.
- **Reason:** The C172 is the most common training aircraft in the world, is included with
  every edition of MSFS 2024, and has the most real-world documentation available.

### D-02 — Primary cockpit variant: G1000 NXi, with classic-panel callouts

- **Alternatives:** Steam gauges only; both treated equally.
- **Reason:** The G1000 NXi version is the default Skyhawk most MSFS users will see, it
  matches modern training fleets, and its GPS makes the navigation module achievable.
  The classic variant is covered with "Classic panel" callouts wherever the flying differs
  (mostly instruments and navigation radios). A full classic track is post-v1.

### D-03 — Home region: San Francisco Bay Area

- **Alternatives:** Seattle, Southern California, the UK, the learner's own area.
- **Reason:** Detailed scenery in MSFS, every airspace class within 40 nm, towered and
  non-towered airports close together, strong visual landmarks (bay, bridges, reservoirs,
  hills), and the FAA San Francisco sectional is free. Details in Section 11.

### D-04 — Challenges are self-assessed in v1

- **Alternatives:** A SimConnect companion app that grades automatically.
- **Reason:** A browser cannot talk to the sim directly; a companion app is a separate
  Windows project with its own install and support burden. Self-assessment with an honest,
  specific rubric delivers most of the learning value. Auto-grading is the top post-v1
  item.

### D-05 — TypeScript on both client and server

- **Alternatives:** Plain JavaScript (lower learning curve).
- **Reason:** Content schemas, API contracts and progress calculations benefit a lot from
  types. Shared Zod schemas give runtime validation and static types from one source.
- **Fallback:** If TypeScript slows you down too much in Phase 1–2, switch to JavaScript
  with JSDoc types and keep Zod. Record the change here.

### D-06 — One deployable: Express serves the API _and_ the built React app

- **Alternatives:** Frontend on Vercel/Netlify, API on Render/Railway.
- **Reason:** Same origin means no CORS configuration and first-party cookies (third-party
  cookies are increasingly blocked by browsers). One service is simpler to deploy, monitor
  and demo.

### D-07 — Sessions stored in MongoDB (express-session + connect-mongo), not JWT

- **Alternatives:** JWT access + refresh tokens.
- **Reason:** Server-side sessions are simple, easy to revoke (logout everywhere, delete
  account), and work naturally with same-origin httpOnly cookies. JWTs add refresh-token
  complexity with no benefit for a single-origin app.

### D-08 — Content is authored as files in the repo and seeded into MongoDB

- **Alternatives:** Author directly in MongoDB via an admin UI; serve content from files at
  build time with no database.
- **Reason:** Files give version control, code review, diffs and easy backups. Seeding into
  MongoDB keeps the app a true MERN app, allows querying (e.g. "all challenges at KLVK"),
  and prepares for a future admin UI. The repo is the source of truth; the database is a
  published copy.

### D-09 — Lessons in Markdown with frontmatter; modules and challenges in YAML

- **Alternatives:** Everything in JSON; MDX.
- **Reason:** Markdown is pleasant to write long-form text in. YAML is readable for
  structured data with long strings. MDX would let content import React components, which
  couples content to code; a small set of Markdown "directives" (e.g. `::widget{...}`)
  gives the same power safely.

### D-10 — Styling with Tailwind CSS

- **Alternatives:** CSS Modules, styled-components, a component library such as MUI.
- **Reason:** Fast to build a consistent design system with tokens, easy dark mode, no
  runtime cost. Custom SVG widgets need custom styling anyway, so a heavy component library
  adds little.

### D-11 — Hosting: Render (web service) + MongoDB Atlas

- **Alternatives:** Railway, Fly.io, a VPS, Heroku.
- **Reason:** Render deploys straight from GitHub, handles HTTPS, and has clear docs.
  Atlas has a free M0 tier which is plenty for v1. Use a paid Render instance for the demo
  period so the service does not sleep (free instances spin down when idle and take a while
  to wake).

### D-12 — Public lessons, account for progress

- **Alternatives:** Everything behind login.
- **Reason:** Lets people try the product and makes the demo frictionless. Challenges'
  debrief/save features and the dashboard require an account.

### D-13 — Knots, feet, nautical miles, inches of mercury

- **Alternatives:** Metric options.
- **Reason:** The US-registered C172, the FAA charts and the home region all use these
  units. Unit switching is post-v1 (it matters more for European learners using hPa).

### D-14 — No analytics trackers in v1 beyond privacy-friendly, cookieless page counts

- **Alternatives:** Google Analytics.
- **Reason:** Avoids cookie banners and privacy complexity. Learning-signal metrics
  (Section 4.3) come from our own database.

---

# Part II — Learning the Cessna 172 (for you, the author)

This Part serves two purposes:

1. It is **your** study guide. Before you write a lesson, you should be able to fly the
   manoeuvre in the sim to the tolerances in the challenge.
2. It is the **master list of references** the lessons will link to in their "Go deeper"
   sections. Every resource here is also seeded into the `resources` collection
   (Section 27.9) so lessons can reference it by slug.

## 6. Resource library: where to find documentation and learning material

### 6.1 How to use these resources safely and legally

- **FAA publications are US Government works** and are generally in the public domain.
  You may quote them and adapt diagrams (with attribution as good practice). This makes the
  FAA handbooks the backbone of our content.
- **The Cessna Pilot's Operating Handbook (POH) is copyrighted by Textron Aviation.** Do
  not copy text, tables or diagrams from it. Use it (or the in-sim checklist) to _check_
  numbers, then write procedures in our own words and label numbers "⚠ Verify against your
  POH / in-sim checklist".
- **Garmin manuals are copyrighted by Garmin.** Link to them; do not reproduce them.
- **Charts:** FAA digital charts are free to download. Screenshots of small chart
  excerpts for educational purposes are common, but prefer linking to SkyVector or the
  FAA download page, and always add "Not for navigation".
- **Videos:** Link to videos; never re-upload or embed them without permission unless the
  platform's embed feature is provided by the creator (YouTube embeds are fine).
- **Microsoft/Asobo screenshots:** Screenshots you take of MSFS 2024 for educational
  content are generally acceptable under Microsoft's Game Content Usage Rules, which allow
  non-commercial use of game footage/screenshots. Read the current rules
  (search "Microsoft Game Content Usage Rules") before launch and re-check them if the
  project ever becomes commercial.
- **Record every resource** in `content/resources.yaml` with a `verifiedAt` date. Run the
  link checker (Phase 12) before each release.

### 6.2 Core FAA handbooks (free PDFs)

All are listed on the FAA Aviation Handbooks & Manuals page:
<https://www.faa.gov/regulations_policies/handbooks_manuals/aviation>

| Resource                                          | ID             | What it is good for                                                                                                                                            | Link                                                                                                         |
| ------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Pilot's Handbook of Aeronautical Knowledge (PHAK) | FAA-H-8083-25C | Aerodynamics, flight controls, instruments, systems, weather, airspace, navigation, charts. **The #1 theory reference for v1.**                                | <https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak>                                   |
| Airplane Flying Handbook (AFH)                    | FAA-H-8083-3C  | How to _fly_ each manoeuvre: ground ops, basic manoeuvres, takeoffs, patterns, landings, slow flight, stalls, emergencies. **The #1 flying reference for v1.** | <https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook>                      |
| Aviation Weather Handbook                         | FAA-H-8083-28  | METARs, TAFs, weather theory; used in Module 6 weather basics.                                                                                                 | <https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/faa-h-8083-28-aviation-weather-handbook>  |
| Risk Management Handbook                          | FAA-H-8083-2A  | PAVE, IMSAFE, decision making; used in capstone lessons.                                                                                                       | <https://www.faa.gov/regulationspolicies/handbooksmanuals/risk-management-handbook-faa-h-8083-2a>            |
| Weight & Balance Handbook                         | FAA-H-8083-1B  | Weight and balance theory for the P1 W&B widget.                                                                                                               | <https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-1.pdf>   |
| Instrument Flying Handbook                        | FAA-H-8083-15B | Attitude instrument flying, the G1000 (glass cockpit) chapter, VOR theory. Only selected chapters for v1.                                                      | <https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf> |
| Instrument Procedures Handbook                    | FAA-H-8083-16  | Not needed for v1 (post-v1 IFR).                                                                                                                               | <https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook>         |
| Aviation Instructor's Handbook                    | FAA-H-8083-9   | How people learn; useful for _designing_ lessons (Section 12).                                                                                                 | <https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/aviation_instructors_handbook>          |
| Plane Sense                                       | FAA-H-8083-19A | General aviation overview; light background reading.                                                                                                           | <https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/faa-h-8083-19A.pdf> |

**Also check the "MOSAIC" addenda** listed on the same page for the PHAK, AFH and W&B
handbook. They update sport-pilot-related content and may change some wording.

#### 6.2.1 PHAK chapter map for v1 lessons

| PHAK chapter | Topic                              | Used in                                            |
| ------------ | ---------------------------------- | -------------------------------------------------- |
| Ch. 1        | Introduction to flying             | Module 0 background                                |
| Ch. 2        | Aeronautical decision-making       | Module 8                                           |
| Ch. 3        | Aircraft construction              | Module 1 (airframe tour)                           |
| Ch. 5        | Aerodynamics of flight             | Module 2 (forces, stalls, left-turning tendencies) |
| Ch. 6        | Flight controls                    | Module 1 (controls), Module 2 (trim)               |
| Ch. 7        | Aircraft systems                   | Module 1 (engine, fuel, electrical)                |
| Ch. 8        | Flight instruments                 | Module 1 (instruments, G1000 PFD)                  |
| Ch. 9        | Flight manuals and other documents | Module 1 (POH, checklists)                         |
| Ch. 10       | Weight and balance                 | P1 W&B lesson                                      |
| Ch. 11       | Aircraft performance               | Module 4 (density altitude, takeoff distance)      |
| Ch. 12       | Weather theory                     | Module 6 weather basics                            |
| Ch. 13       | Aviation weather services          | Module 6 (METAR/TAF)                               |
| Ch. 14       | Airport operations                 | Module 3, Module 4, Module 7                       |
| Ch. 15       | Airspace                           | Module 6                                           |
| Ch. 16       | Navigation                         | Module 6                                           |
| Ch. 17       | Aeromedical factors                | Module 8 (IMSAFE)                                  |

> ⚠ Verify chapter numbers against the current PHAK edition (25C) when you download it;
> chapter order occasionally changes between editions.

#### 6.2.2 Airplane Flying Handbook chapter map for v1 lessons

| AFH chapter | Topic                                                                                              | Used in            |
| ----------- | -------------------------------------------------------------------------------------------------- | ------------------ |
| Ch. 1       | Introduction to flight training                                                                    | Module 0           |
| Ch. 2       | Ground operations (preflight, taxi, run-up)                                                        | Module 3           |
| Ch. 3       | Basic flight manoeuvres (four fundamentals)                                                        | Module 2           |
| Ch. 4       | Energy management                                                                                  | Module 4, Module 5 |
| Ch. 5       | Maintaining aircraft control: upset prevention and recovery (slow flight, stalls, spins awareness) | Module 5           |
| Ch. 6       | Takeoffs and departure climbs                                                                      | Module 4           |
| Ch. 7       | Ground reference manoeuvres                                                                        | Module 5 (P1)      |
| Ch. 8       | Airport traffic patterns                                                                           | Module 4           |
| Ch. 9       | Approaches and landings                                                                            | Module 4           |
| Ch. 10      | Performance manoeuvres (steep turns)                                                               | Module 5           |
| Ch. 11      | Night operations                                                                                   | Post-v1            |
| Ch. 18      | Emergency procedures                                                                               | Module 5           |

> ⚠ Verify chapter numbers against the current AFH (3C).

### 6.3 FAA regulations, procedures and standards

| Resource                                   | Why                                                                                                                                                               | Link                                                                                                                                         |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Aeronautical Information Manual (AIM)      | Official procedures: traffic patterns (Ch. 4-3), radio phraseology (Ch. 4-2), airspace (Ch. 3), airport signs and markings (Ch. 2-3). Readable HTML.              | <https://www.faa.gov/air_traffic/publications/atpubs/aim_html/>                                                                              |
| Pilot/Controller Glossary                  | Official definitions; feeds our glossary (Appendix A).                                                                                                            | <https://www.faa.gov/air_traffic/publications/atpubs/pcg_html/>                                                                              |
| FAA Air Traffic Publications index         | AIM, P/CG, Chart Supplement and more.                                                                                                                             | <https://www.faa.gov/air_traffic/publications>                                                                                               |
| Private Pilot – Airplane ACS (FAA-S-ACS-6) | Official tolerances (e.g. ±100 ft altitude, ±10 kt airspeed in some tasks). **Basis of our challenge rubrics.**                                                   | <https://www.faa.gov/training_testing/testing/acs> and the PDF <https://www.faa.gov/training_testing/testing/acs/private_airplane_acs_6.pdf> |
| 14 CFR (Federal Aviation Regulations)      | Part 91 (general operating rules), Part 61 (pilot certification). Used lightly: VFR weather minimums (91.155), right-of-way (91.113), fuel requirements (91.151). | <https://www.ecfr.gov/current/title-14>                                                                                                      |
| FAA pilot training page                    | Links to training resources and airman education topics.                                                                                                          | <https://www.faa.gov/pilots/training>                                                                                                        |
| FAA airman education topics of interest    | Safety topics, runway safety, etc.                                                                                                                                | <https://www.faa.gov/pilots/training/airman_education/topics_of_interest>                                                                    |

#### 6.3.1 ACS tasks that map to v1 challenges

Use the ACS as the "standard" each challenge rubric is loosely modelled on. Always say
"inspired by the Private Pilot ACS" rather than implying official standards.

| ACS Area / Task (Private Pilot Airplane)                                                  | v1 challenge(s)  |
| ----------------------------------------------------------------------------------------- | ---------------- |
| Preflight Procedures — Cockpit management, engine starting, taxiing, before-takeoff check | C3.1, C3.2, C3.3 |
| Airport Operations — Communications, traffic patterns                                     | C4.2, C7.1, C7.2 |
| Takeoffs, Landings and Go-Arounds — Normal takeoff and climb                              | C4.1             |
| Takeoffs, Landings and Go-Arounds — Normal approach and landing                           | C4.3             |
| Takeoffs, Landings and Go-Arounds — Crosswind (within normal tasks)                       | C4.5 (P1)        |
| Takeoffs, Landings and Go-Arounds — Short-field takeoff/landing                           | C4.6 (P1)        |
| Takeoffs, Landings and Go-Arounds — Go-around/rejected landing                            | C4.4             |
| Performance and Ground Reference Manoeuvres — Steep turns                                 | C5.4             |
| Performance and Ground Reference Manoeuvres — Ground reference manoeuvres                 | C5.6 (P1)        |
| Navigation — Pilotage and dead reckoning                                                  | C6.2, C6.3       |
| Navigation — Navigation systems and radar services                                        | C6.4, C6.5       |
| Navigation — Diversion; lost procedures                                                   | C6.6             |
| Slow Flight and Stalls — Manoeuvring during slow flight                                   | C5.1             |
| Slow Flight and Stalls — Power-off stalls                                                 | C5.2             |
| Slow Flight and Stalls — Power-on stalls                                                  | C5.3             |
| Emergency Operations — Emergency descent (P1), emergency approach and landing             | C5.5             |
| Basic Instrument Manoeuvres — Recovery from unusual attitudes (awareness only)            | P1               |
| Postflight Procedures                                                                     | C3.4             |

> ⚠ Verify task names against the current ACS PDF. Area and task lettering (e.g. "IV.A")
> changes between revisions, so the plan intentionally uses names instead of letters.

### 6.4 The Cessna 172 itself

| Resource                                                    | Notes                                                                                                                                                                                                                                                                                                                 | Link                                                                |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Textron Aviation — Cessna Skyhawk product page              | Official specs and performance summary for the current 172S. Good for "fun facts" and specs.                                                                                                                                                                                                                          | <https://cessna.txtav.com/en/piston/cessna-skyhawk>                 |
| Cessna 172S Pilot's Operating Handbook / Information Manual | The authoritative source for V-speeds, procedures, limitations and performance tables. **Copyrighted.** Legitimate sources: a copy bought from a pilot shop (e.g. Sporty's, Aircraft Spruce) or Textron's publications store, or a flight school's copy. Many sim users rely on the in-sim checklist (below) instead. | Search "Cessna 172S Information Manual" at a pilot shop             |
| MSFS 2024 in-sim checklist for the C172                     | Available inside the sim for each aircraft. Use it to confirm which procedures and speeds _the sim's_ Skyhawk expects. **Primary cross-check source for all numbers in v1.**                                                                                                                                          | In the sim: toolbar → Checklist (location may change by sim update) |
| Garmin G1000 NXi Pilot's Guide for the Cessna 172/182/206   | The real Garmin manual for the avionics. Search Garmin support for "G1000 NXi Pilot's Guide Cessna" (part number family 190-02177). The Working Title G1000 NXi in MSFS follows it closely but not perfectly.                                                                                                         | <https://support.garmin.com> (search)                               |
| Garmin G1000 NXi Cockpit Reference Guide                    | A shorter quick-reference version of the pilot's guide.                                                                                                                                                                                                                                                               | Garmin support (search "G1000 NXi Cockpit Reference Guide")         |
| Garmin G1000 PC Trainer                                     | Garmin's official desktop trainer (paid); optional.                                                                                                                                                                                                                                                                   | Search "Garmin G1000 NXi PC Trainer"                                |
| FAA Advanced Avionics Handbook / IFH glass cockpit chapter  | Explains PFD/MFD concepts in a vendor-neutral way.                                                                                                                                                                                                                                                                    | IFH link in 6.2                                                     |
| Type Certificate Data Sheet 3A12                            | The FAA's certification data for all 172 models. Only for the curious.                                                                                                                                                                                                                                                | Search "TCDS 3A12" on <https://drs.faa.gov>                         |

### 6.5 Charts and airport information

| Resource                                               | Notes                                                                                                                                      | Link                                                                               |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| FAA VFR Raster Charts (free sectionals, TACs, flyways) | Download the **San Francisco Sectional** and the **San Francisco Terminal Area Chart (TAC)** for Module 6. Updated every 56 days.          | <https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/vfr/>        |
| FAA Aeronautical Chart User's Guide                    | **Essential.** Explains every symbol on a sectional; our Sectional Legend widget is based on it.                                           | <https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/aero_guide/> |
| FAA Digital Products index                             | All FAA chart products.                                                                                                                    | <https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/>            |
| FAA VFR charts product catalogue                       | Chart coverage maps and edition dates.                                                                                                     | <https://www.faa.gov/air_traffic/flight_info/aeronav/productcatalog/vfrcharts/>    |
| Chart Supplement (formerly A/FD)                       | Airport details: runways, frequencies, pattern direction, pattern altitude remarks. Use the **Southwest US** volume for Bay Area airports. | <https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/>       |
| Digital Terminal Procedures (d-TPP)                    | Airport diagrams (taxiway layouts) for towered airports like KLVK, KPAO, KOAK.                                                             | <https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dtpp/>       |
| SkyVector                                              | Free online sectional viewer with flight-plan drawing. **Best tool for learners to plan Module 6 flights.**                                | <https://skyvector.com>                                                            |
| AirNav                                                 | Quick airport info pages (runways, frequencies, pattern info, fuel).                                                                       | <https://www.airnav.com>                                                           |
| FlightAware                                            | Real-world traffic, useful to show real C172 flights in the Bay Area.                                                                      | <https://www.flightaware.com>                                                      |

### 6.6 Weather

| Resource                            | Notes                                                                                                                                                                    | Link                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| Aviation Weather Center             | Official METARs, TAFs, graphical forecasts.                                                                                                                              | <https://aviationweather.gov> |
| 1800wxBrief (Leidos Flight Service) | Official US pilot weather briefings; free account. Good to show "how real pilots brief".                                                                                 | <https://www.1800wxbrief.com> |
| Aviation Weather Handbook           | Theory and product decoding.                                                                                                                                             | See 6.2                       |
| MSFS 2024 weather panel             | Presets (Clear Skies, Few Clouds, etc.), custom wind layers, and live weather. Challenges specify either a preset or custom winds so everyone flies the same conditions. | In the sim                    |

### 6.7 Radio communications

| Resource                                                                   | Notes                                                                                                                                          | Link                                                                                           |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| AIM Chapter 4, Section 2 (Radio communications phraseology and techniques) | Official phraseology.                                                                                                                          | <https://www.faa.gov/air_traffic/publications/atpubs/aim_html/>                                |
| AIM Chapter 4, Section 1 (Services available: CTAF, UNICOM, ATIS)          | Non-towered procedures.                                                                                                                        | Same                                                                                           |
| AOPA Air Safety Institute — radio and communications courses               | Free interactive courses (free account).                                                                                                       | <https://www.aopa.org/training-and-safety/air-safety-institute>                                |
| LiveATC                                                                    | Real ATC audio feeds (e.g. KPAO tower, NorCal Approach). May block automated checks; open in a browser. Great homework: listen for 20 minutes. | <https://www.liveatc.net>                                                                      |
| VATSIM                                                                     | Free online network with human controllers. Post-v1 track, but link as "next step".                                                            | <https://vatsim.net> and getting-started docs <https://vatsim.net/docs/basics/getting-started> |
| PilotEdge                                                                  | Paid, professional-grade simulated ATC (US West Coast origins — covers the Bay Area).                                                          | <https://www.pilotedge.net>                                                                    |

### 6.8 Safety and training organisations

| Resource                     | Notes                                                                                                           | Link                                                            |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| AOPA Air Safety Institute    | Free courses, videos, quizzes on nearly every v1 topic.                                                         | <https://www.aopa.org/training-and-safety/air-safety-institute> |
| AOPA student pilot resources | Plain-language articles for beginners.                                                                          | <https://www.aopa.org/training-and-safety/students>             |
| FAASTeam / WINGS             | FAA Safety Team courses (free account).                                                                         | <https://www.faasafety.gov>                                     |
| Boldmethod                   | Excellent short visual articles on aerodynamics, stalls, patterns and charts; inspiration for our visual style. | <https://www.boldmethod.com>                                    |
| Sporty's Learn to Fly        | Beginner-friendly articles and videos.                                                                          | <https://www.sportys.com/learn-to-fly>                          |
| UK CAA General Aviation      | Useful non-US perspective (post-v1 for European learners).                                                      | <https://www.caa.co.uk/general-aviation/>                       |

### 6.9 Video channels (link to specific videos per lesson)

Verify each channel and each specific video before linking; prefer short, focused videos.

| Channel                          | Good for                                                                                                                 | Link                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| FAA (official)                   | Safety videos, runway safety, weather.                                                                                   | <https://www.youtube.com/@FAAnews>       |
| Boldmethod                       | Short animated explainers.                                                                                               | <https://www.youtube.com/@boldmethod>    |
| Flight Insight                   | Real-world pilot explaining procedures and navigation in plain language.                                                 | <https://www.youtube.com/@FlightInsight> |
| AOPA / AOPA Air Safety Institute | Search YouTube for "AOPA Air Safety Institute"; many free safety videos.                                                 | Search on YouTube                        |
| MSFS community tutorial creators | Search "MSFS 2024 C172 tutorial G1000" and "MSFS 2024 traffic pattern"; vet for accuracy against the AFH before linking. | Search on YouTube                        |

Rule: **every linked video must be watched in full by you** and marked with a
`verifiedAt` date. Never link a video that teaches something contradicting the AFH.

### 6.10 Microsoft Flight Simulator 2024

| Resource                           | Notes                                                                                                                           | Link                                                                                                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Official site                      | News, sim updates, patch notes (important: sim updates can change aircraft behaviour or menus).                                 | <https://www.flightsimulator.com>                                                                                                                     |
| Official forums                    | Bug reports, aircraft-specific threads (search "C172"), control setup help.                                                     | <https://forums.flightsimulator.com>                                                                                                                  |
| MSFS SDK documentation             | For post-v1 SimConnect work; also documents simulation variables (SimVars) useful for understanding what the sim can measure.   | <https://docs.flightsimulator.com/> and SimConnect: <https://docs.flightsimulator.com/msfs2024/html/6_Programming_APIs/SimConnect/SimConnect_SDK.htm> |
| In-sim flight training / tutorials | MSFS includes basic training lessons; mention them in Module 0 as a warm-up, and explain what Learn-To-Fly adds.                | In the sim                                                                                                                                            |
| Little Navmap (free)               | Flight planning and moving-map tool that connects to the sim. Great post-v1, optional in v1 for learners who want a moving map. | <https://albar965.github.io/littlenavmap.html>                                                                                                        |
| Navigraph (paid)                   | Current charts and navigation data for the sim. Not required for v1.                                                            | <https://www.navigraph.com>                                                                                                                           |

### 6.11 Books (optional, paid)

These are well-known in real-world training. Recommend them as optional further reading
only; do not copy from them.

- _Stick and Rudder_ by Wolfgang Langewiesche — classic on how airplanes really fly.
- _Rod Machado's Private Pilot Handbook_ — friendly, humorous theory.
- _The Pilot's Manual: Flight School_ (ASA) — structured manoeuvre descriptions.
- _Say It Right_ / radio phraseology guides (various authors) — for Module 7.

### 6.12 Engineering documentation (for building the app)

| Topic                    | Link                                            |
| ------------------------ | ----------------------------------------------- |
| React                    | <https://react.dev>                             |
| Vite                     | <https://vite.dev>                              |
| React Router             | <https://reactrouter.com>                       |
| TanStack Query           | <https://tanstack.com/query/latest>             |
| Tailwind CSS             | <https://tailwindcss.com/docs>                  |
| Zod                      | <https://zod.dev>                               |
| Express                  | <https://expressjs.com>                         |
| Mongoose                 | <https://mongoosejs.com/docs/>                  |
| MongoDB manual           | <https://www.mongodb.com/docs/manual/>          |
| MongoDB Atlas            | <https://www.mongodb.com/docs/atlas/>           |
| Node.js release schedule | <https://nodejs.org/en/about/previous-releases> |
| Vitest                   | <https://vitest.dev>                            |
| Playwright               | <https://playwright.dev>                        |
| GitHub Actions           | <https://docs.github.com/en/actions>            |
| Render                   | <https://render.com/docs>                       |
| WCAG 2.2 quick reference | <https://www.w3.org/WAI/WCAG22/quickref/>       |
| OWASP Top Ten            | <https://owasp.org/www-project-top-ten/>        |

---

## 7. Author self-study path (before you write lesson content)

Goal: in about **6 weeks at ~6–8 hours/week**, go from "I can take off" to "I can fly every
v1 challenge to standard". This runs **in parallel** with Phases 1–4 (engineering). You
should finish week N of study before writing the lessons for the matching module in
Phase 9.

### 7.1 Week 1 — Aircraft and sim setup (Modules 0–1)

- [ ] Read PHAK chapters on flight controls, aircraft systems and flight instruments.
- [ ] Skim the G1000 NXi Pilot's Guide sections on the PFD layout, softkeys, and COM/NAV
      tuning.
- [ ] In the sim: fly the C172 G1000 at KLVK with Clear Skies. Spend 30 minutes just
      exploring the cockpit on the ground, hovering over every control.
- [ ] Bind controls (Section 9.4). Test that trim, flaps, mixture, brakes, parking brake,
      views and pause are all reachable without the mouse.
- [ ] Set assistance options to the "Learn-To-Fly Training" profile (Section 9.3).
- [ ] Write down every V-speed from the in-sim checklist and compare with Section 8.2.
      Note any differences in the Decision Log.
- [ ] Take screenshots (Section 18.6) of: the panel, PFD, MFD, the throttle/mixture,
      fuel selector, flap lever, trim wheel, magnetos/start switch, master switches.

### 7.2 Week 2 — Fundamentals (Module 2)

- [ ] Read AFH chapter on basic flight manoeuvres.
- [ ] In the sim, from 3,500 ft over the Livermore valley, practise each until you can hold
      the tolerance for 2 minutes:
  - [ ] Straight-and-level at 2,300 RPM: ±100 ft, ±10° heading.
  - [ ] Climb at Vy (74 KIAS): ±5 kt.
  - [ ] Descent at 90 KIAS, 1,700 RPM: ±5 kt.
  - [ ] Standard-rate and 30°-bank turns to headings: ±10°.
  - [ ] Level-off from climb and descent at a target altitude: ±50 ft.
- [ ] Practise trimming until you can fly hands-off for 30 seconds.
- [ ] Record a short screen capture of each for lesson reference.

### 7.3 Week 3 — Ground ops, takeoffs, patterns, landings (Modules 3–4)

- [ ] Read AFH chapters on ground operations, takeoffs, traffic patterns and landings.
- [ ] Read AIM traffic pattern section and the AIM airport markings section.
- [ ] In the sim at KLVK (towered) and KTCY (non-towered):
  - [ ] Full cold-and-dark start using the in-sim checklist, three times.
  - [ ] Taxi using the airport diagram without the sim's taxi ribbon.
  - [ ] Ten full-stop landings in calm wind. Target: touchdown in the first third of the
        runway, on the centreline, no bounce.
  - [ ] Five go-arounds from short final.
  - [ ] Five landings with a 10-kt crosswind (P1 challenge preparation).

### 7.4 Week 4 — Slow flight, stalls, steep turns, emergencies (Module 5)

- [ ] Read the AFH chapters on slow flight/stalls, performance manoeuvres and emergencies.
- [ ] Watch at least two stall-recovery explainers (Boldmethod, AOPA ASI).
- [ ] In the sim:
  - [ ] Slow flight at ~50 KIAS with full flaps, holding altitude ±100 ft.
  - [ ] Five power-off and five power-on stalls, recovering with minimal altitude loss.
  - [ ] Steep turns 45° both directions: ±100 ft, ±10 kt, roll out ±10° on entry heading.
  - [ ] Three simulated engine failures at 3,000 ft AGL: establish best glide, pick a
        field, fly to a landable position.
- [ ] Note how the sim's stall behaviour compares with real-world descriptions (buffet,
      stall horn, wing drop). Record differences for "Sim vs reality" callouts.

### 7.5 Week 5 — Navigation (Module 6)

- [ ] Read the PHAK airspace and navigation chapters.
- [ ] Read the Aeronautical Chart User's Guide front to back once; then keep it open.
- [ ] Download the San Francisco sectional and TAC. Identify every airspace class.
- [ ] On SkyVector, plan KLVK → KTCY → KLVK and KPAO → KHAF. Fill in a nav log by hand
      (Appendix G formulas).
- [ ] Fly both by pilotage only (PFD map hidden or classic variant).
- [ ] Fly a VOR radial intercept and tracking exercise using the OAK or SJC VOR.
- [ ] Build a flight plan in the G1000 (FPL page) and fly it, then practise Direct-To.
- [ ] Practise a diversion: mid-flight, choose a new airport and estimate heading,
      distance and time within 2 minutes.

### 7.6 Week 6 — Radio, capstone and review (Modules 7–8)

- [ ] Read AIM phraseology sections. Listen to 30 minutes of LiveATC (e.g. KPAO tower).
- [ ] Fly a pattern at a non-towered field making all CTAF calls out loud.
- [ ] Fly a flight using MSFS ATC to a towered airport; compare the sim's phraseology with
      the AIM and note differences for "Sim vs reality" callouts.
- [ ] Fly the capstone cross-country (C8.2) end-to-end, including planning.
- [ ] Write your own reflection: which parts were hardest? Those lessons need the most
      visual explanation.

### 7.7 Your personal logbook

Keep a simple logbook (a spreadsheet is fine) while studying. Columns: date, airport(s),
duration, what you practised, what went wrong, lesson ideas. This becomes raw material for
"Common mistakes" sections in challenges.

---

## 8. Cessna 172S reference data

> ⚠ **Every number in this section must be verified against the MSFS 2024 in-sim
> checklist and, if available, the Cessna 172S POH before it is shown to learners.** The
> figures below are the widely published values for the Cessna 172S (180 hp) and are the
> planning baseline for content. The sim's aircraft may differ slightly.

### 8.1 General specifications (172S)

| Item                                          | Value                                                               |
| --------------------------------------------- | ------------------------------------------------------------------- |
| Engine                                        | Lycoming IO-360-L2A, 4-cylinder, fuel-injected, 180 hp at 2,700 RPM |
| Propeller                                     | Fixed-pitch, 2-blade (McCauley)                                     |
| Maximum takeoff weight (normal category)      | 2,550 lb                                                            |
| Maximum weight (utility category)             | 2,200 lb                                                            |
| Wingspan                                      | 36 ft 1 in                                                          |
| Length                                        | 27 ft 2 in                                                          |
| Height                                        | 8 ft 11 in                                                          |
| Seats                                         | 4                                                                   |
| Fuel capacity                                 | 56 US gal total, 53 US gal usable                                   |
| Fuel type                                     | 100LL avgas (blue)                                                  |
| Oil capacity                                  | 8 US qt (sump) — ⚠ verify                                           |
| Cruise speed (75% power, standard conditions) | ~120–124 KTAS                                                       |
| Fuel burn at ~75% power                       | roughly 8.5–10 GPH (use 10 GPH for simple planning)                 |
| Range (with reserve)                          | ~500–640 nm depending on power and altitude                         |
| Service ceiling                               | 14,000 ft                                                           |
| Maximum demonstrated crosswind                | 15 kt (a demonstrated value, not a limitation)                      |
| Flaps                                         | Electric, 0°, 10°, 20°, 30°                                         |
| Landing gear                                  | Fixed tricycle, steerable nose wheel via rudder pedals              |
| Avionics (MSFS default)                       | Garmin G1000 NXi PFD + MFD, GFC 700 autopilot                       |
| Avionics (classic variant)                    | Analogue "six-pack", NAV/COM radios, (GPS depends on variant)       |

### 8.2 V-speeds (KIAS)

| Speed                                          | Meaning                                        | Value                                           | Notes                                 |
| ---------------------------------------------- | ---------------------------------------------- | ----------------------------------------------- | ------------------------------------- |
| V_SO                                           | Stall speed, landing configuration (flaps 30°) | 40                                              | Bottom of white arc                   |
| V_S1                                           | Stall speed, clean                             | 48                                              | Bottom of green arc                   |
| V_R                                            | Rotation                                       | 55                                              | Normal takeoff                        |
| V_X                                            | Best angle of climb                            | 62                                              | Obstacle clearance, sea level         |
| V_Y                                            | Best rate of climb                             | 74                                              | Normal climb, sea level               |
| Cruise climb                                   | Better visibility and engine cooling           | 75–85                                           | Used after pattern departure          |
| V_G                                            | Best glide                                     | 68                                              | At max weight, flaps up               |
| V_A                                            | Manoeuvring speed                              | 105 at 2,550 lb; 98 at 2,200 lb; 90 at 1,900 lb | Decreases with weight                 |
| V_FE (10°)                                     | Max flap extended speed, 10°                   | 110                                             | Top of white arc is 85                |
| V_FE (10°–30°)                                 | Max flap extended speed, >10°                  | 85                                              | Top of white arc                      |
| V_NO                                           | Max structural cruising speed                  | 129                                             | Top of green arc                      |
| V_NE                                           | Never exceed                                   | 163                                             | Red line                              |
| Normal approach (flaps up)                     |                                                | 65–75                                           |                                       |
| Normal approach (flaps 30°)                    |                                                | 60–70                                           |                                       |
| Short-field approach (flaps 30°)               |                                                | 61                                              | ⚠ verify                              |
| Short-field takeoff: lift-off / obstacle climb | Flaps 10°                                      | ~51 / 56                                        | ⚠ verify                              |
| Go-around (balked landing)                     | Full power, flaps 20°                          | 60                                              | Then retract flaps as speed increases |

### 8.3 Airspeed indicator colour markings

| Marking    | Range (KIAS) | Meaning                         |
| ---------- | ------------ | ------------------------------- |
| White arc  | 40–85        | Flap operating range            |
| Green arc  | 48–129       | Normal operating range          |
| Yellow arc | 129–163      | Caution range (smooth air only) |
| Red line   | 163          | Never exceed                    |

On the G1000 PFD these appear as coloured bands on the airspeed tape. The
**Airspeed Indicator widget** (Section 16.3) uses these values.

### 8.4 Engine instrument ranges (approximate)

| Instrument      | Normal                                       | Notes                |
| --------------- | -------------------------------------------- | -------------------- |
| Tachometer      | Green arc 2,100–2,700 RPM; red line 2,700    | ⚠ verify arcs in sim |
| Oil pressure    | Green 50–90 psi                              | ⚠ verify             |
| Oil temperature | Green 100–245 °F                             | ⚠ verify             |
| Fuel flow       | Displayed in GPH on the G1000 EIS strip      |                      |
| EGT             | Used for leaning (lean to peak, then enrich) | Simplified in v1     |

### 8.5 Typical training power settings (sim-friendly, flight-school style)

These are "rule-of-thumb" settings used by many flight schools. They are **not** POH
values. Present them as starting points, then teach "adjust to hold the target".

| Phase                 | RPM                                         | Flaps           | Target speed                  | Pitch (approx.)              |
| --------------------- | ------------------------------------------- | --------------- | ----------------------------- | ---------------------------- |
| Takeoff               | Full (≈2,300–2,400 static, rising in climb) | 0°              | Rotate 55                     | ~10° nose up                 |
| Climb                 | Full                                        | 0°              | 74 (Vy) or 75–85 cruise climb | ~7–10° up                    |
| Cruise                | 2,300–2,400                                 | 0°              | ~100–110 KIAS                 | ~0–2°                        |
| Cruise descent        | 2,100–2,300                                 | 0°              | 100–110                       | ~−3°                         |
| Pattern downwind      | ~2,000–2,100                                | 0°              | 85–90                         | level                        |
| Abeam touchdown point | ~1,500                                      | 10° (below 110) | 80                            | slight nose down             |
| Base                  | ~1,500                                      | 20°             | 70                            |                              |
| Final                 | as needed                                   | 30°             | 65 (60 short final)           |                              |
| Slow flight           | ~1,500–1,700                                | 30°             | ~50–55                        | high                         |
| Best glide            | idle                                        | 0°              | 68                            | ~level to slightly nose down |

> ⚠ Fly each setting in the sim at the challenge's weight/fuel and adjust the table so it
> matches the sim's aircraft. Record changes in the Decision Log.

### 8.6 Fuel system (simplified for v1)

- Two wing tanks, gravity-fed to a **fuel selector** with positions LEFT, RIGHT, BOTH, OFF.
- Takeoff, landing and most manoeuvring: selector on **BOTH**.
- Fuel is injected (no carburettor on the 172S → no carburettor heat, no carb icing).
  ⚠ Confirm in the sim whether either Skyhawk variant models a carburettor. If a variant
  has a carb heat knob, add a callout to the relevant lessons.
- **Mixture:** full rich for start (per checklist), takeoff and landing at low-elevation
  airports; lean in cruise and for high-density-altitude takeoffs. The Bay Area airports
  are all near sea level, so v1 keeps leaning simple: "lean in cruise for best power/economy"
  plus a P1 density-altitude lesson.
- **Fuel pump:** electric auxiliary fuel pump used during start and as a backup. ⚠ Follow
  the in-sim checklist for its use.

### 8.7 Electrical system (simplified)

- **Master switch** (split: ALT and BAT) — battery powers the electrical bus; the
  alternator charges it once the engine runs.
- **Avionics master** — turns on the G1000 and radios; OFF during engine start.
- **Magnetos** (ignition switch: OFF–R–L–BOTH–START) — the engine's ignition is
  independent of the electrical system. Checked during run-up.
- Circuit breakers exist but are out of scope for v1 (post-v1 systems failures).

### 8.8 Flight controls and surfaces

| Control in cockpit | Surface           | Axis                | Effect                                           |
| ------------------ | ----------------- | ------------------- | ------------------------------------------------ |
| Yoke left/right    | Ailerons          | Longitudinal (roll) | Bank                                             |
| Yoke fore/aft      | Elevator          | Lateral (pitch)     | Pitch / angle of attack                          |
| Rudder pedals      | Rudder            | Vertical (yaw)      | Yaw, coordination; nose-wheel steering on ground |
| Toe brakes         | Wheel brakes      | —                   | Braking; differential braking for tight turns    |
| Trim wheel         | Elevator trim tab | Pitch               | Relieves control pressure                        |
| Flap switch        | Flaps             | —                   | More lift and drag at low speed                  |
| Throttle (black)   | Engine power      | —                   | Power → RPM                                      |
| Mixture (red)      | Fuel/air ratio    | —                   | Lean in cruise, cut-off to stop engine           |

### 8.9 Normal procedure flow (overview)

The detailed, in-our-own-words summary is Appendix B. The phases are:

1. Preflight inspection (walkaround)
2. Before starting engine
3. Starting engine
4. Before taxi (avionics on, ATIS, clearance)
5. Taxi
6. Before takeoff (run-up)
7. Takeoff (normal / short-field)
8. Climb
9. Cruise
10. Descent
11. Before landing
12. Landing (normal / short-field / balked landing)
13. After landing
14. Shutdown and securing

---

## 9. The Cessna 172 in MSFS 2024: variants, settings, controls and quirks

### 9.1 Which Skyhawk variants exist in the sim

MSFS 2024 ships Cessna 172 Skyhawk variants including a **G1000 NXi glass cockpit** version
and a **classic analogue ("steam gauge")** version. Additional variants (e.g. float or
bush-style versions) may appear in career mode or add-ons.

- [ ] ⚠ **Verify** in the sim's aircraft selection screen: the exact names, the liveries
      available, and which variants exist in your edition (Standard/Deluxe/Premium Deluxe/
      Aviator). Write the exact names into `content/aircraft.yaml` (Section 28).
- [ ] Record for each variant: avionics, whether it has a GPS, autopilot model, whether
      it models a carburettor, and the default fuel/payload.

v1 content targets the **G1000 NXi** variant. When a lesson depends on the panel, add a
"Classic panel" callout explaining where the equivalent gauge or radio is.

### 9.2 Free flight setup used by every challenge

Every challenge brief specifies these fields (the data model is in Section 27.5):

1. **Aircraft & variant** — e.g. "Cessna 172 Skyhawk (G1000)".
2. **Departure** — airport ICAO code, and either a parking spot/ramp or a runway.
3. **Start state** — cold and dark / engine running at parking / on runway / in the air
   (MSFS allows starting in the air by choosing an in-flight start or by pausing after a
   flight setup; ⚠ verify the current method in MSFS 2024's free flight menus).
4. **Weather** — preset name _or_ custom: wind direction/speed per layer, visibility,
   clouds, temperature, pressure (QNH/altimeter setting).
5. **Time** — date and local time (daytime for all v1 challenges).
6. **Fuel & payload** — fuel percentage and pilot/passenger weights.
7. **Assistance profile** — normally the Training profile (9.3).
8. **Flight plan** — none (VFR) unless the challenge is navigation; if so, departure and
   destination and optional waypoints.
9. **Traffic** — AI traffic off for early challenges (fewer distractions), on for Module 7.
10. **ATC** — sim ATC on or off (Module 7 uses it).

### 9.3 The "Learn-To-Fly Training" assistance profile

MSFS 2024 exposes many assistance options (piloting, aircraft systems, user experience,
failure and damage). Menu names change between sim updates, so the lesson explains the
**intent** of each setting and gives the current menu path with a "last verified" date.

| Setting (intent)                                 | Recommended                                                                                                | Why                                                                                                                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Assisted yoke / AI-controlled flight             | Off                                                                                                        | You must fly the airplane.                                                                                              |
| Auto-rudder                                      | **Off** if you have rudder pedals or a twist-stick; **On** if using a gamepad or plain stick without twist | Coordination is taught, but without a rudder axis auto-rudder is the kinder option. Challenges note where this matters. |
| Assisted landing / takeoff                       | Off                                                                                                        |                                                                                                                         |
| Auto-mixture                                     | Off (after Module 1)                                                                                       | You manage mixture per checklist. On for Module 0 warm-up only.                                                         |
| Auto-trim / assisted trim                        | Off                                                                                                        | Trimming is a core skill.                                                                                               |
| Checklist assistance (auto-complete)             | Off                                                                                                        | Use the checklist, don't let it do the work.                                                                            |
| Unlimited fuel                                   | Off                                                                                                        | Fuel management matters.                                                                                                |
| Crash damage / stress damage                     | On (from Module 4 onward)                                                                                  | Honest consequences.                                                                                                    |
| Flight model                                     | Most realistic available                                                                                   |                                                                                                                         |
| Ground-handling assists / taxi ribbon            | Off after Module 3                                                                                         | Learn to read airport diagrams.                                                                                         |
| Landing guidance / approach path aids            | Off                                                                                                        | Use the runway picture and PAPI/VASI.                                                                                   |
| Navigation aids on the map (VFR map, route line) | On in Modules 0–5, Off for pilotage challenges                                                             |                                                                                                                         |
| Pause on crash                                   | On                                                                                                         | Encourages retrying.                                                                                                    |
| Tooltips (cockpit interaction)                   | On in Modules 0–2, optional later                                                                          | Helps learn controls.                                                                                                   |

### 9.4 Control binding recommendations

Explain _what_ to bind, not specific button numbers (hardware varies).

**Must have on the stick/yoke/controller (no mouse):**

- Pitch, roll (axes); rudder (axis if available)
- Elevator trim up/down (buttons or an axis/wheel)
- Flaps up/down (incremental)
- Brakes (and ideally differential/toe brakes)
- Parking brake toggle
- Throttle axis (or increase/decrease buttons on a gamepad)
- Mixture axis or increase/decrease
- Pause
- Cockpit view reset and a "look around" hat/stick

**Helpful:**

- PTT (push-to-talk) or ATC window toggle (Module 7)
- Camera views: instrument panel close-up, look left/right for traffic pattern
- Active pause (freezes the aircraft in place so you can read the brief or look at the
  chart without the flight moving on) ⚠ verify its current name and default binding
- "Toggle VFR map"

**Controller profiles to document in Module 0:**

1. Xbox/gamepad only
2. Joystick with twist (and throttle lever)
3. Yoke + throttle quadrant + rudder pedals

Each profile gets a short table in Lesson 0.2 with suggested bindings and the
auto-rudder recommendation.

### 9.5 Known sim-vs-reality differences to call out

Maintain this list during your study (Section 7). Each item becomes a "Sim vs reality"
callout in the relevant lesson. Starting list (⚠ verify each during study):

- **Control feel:** a desktop stick has much less travel and no aerodynamic feedback;
  learners over-control. Teach small inputs and use sensitivity curves.
- **Trim:** trimming with buttons feels different from a trim wheel; teach "several short
  presses".
- **Stall behaviour:** buffet cues are visual/audio only; wing drop may be more or less
  pronounced than in reality.
- **Ground handling:** crosswind taxi and nose-wheel steering behaviour can feel different.
- **Sim ATC:** phraseology and procedures may not match the AIM exactly (e.g. pattern
  entry instructions). Teach the AIM version and explain the sim's version.
- **Weather:** live weather may not match reality; challenges always specify custom
  weather for repeatability.
- **Airport data:** sim airport data (frequencies, runway names) may lag real-world
  changes; challenges use sim-verified values and tell learners to check the sim's
  airport information panel.
- **VORs:** some real VORs are being decommissioned under the FAA's VOR Minimum Operational
  Network (MON) programme. The sim's nav data may still show them, or vice versa.

### 9.6 Sim-specific procedures for learners

- How to open the in-sim checklist and move through it.
- How to open the VFR map and toggle the aircraft label.
- How to restart a flight quickly (use the pause menu's restart/return to menu; ⚠ verify).
- How to find airport information inside the sim (world map airport details panel).
- How to use slew mode to reposition (allowed only for setup, never during a challenge).

---

## 10. Navigation fundamentals reference

This section is the knowledge base for Module 6. Each subsection maps to a lesson.

### 10.1 Sectional chart essentials

- **Scale:** 1:500,000 (about 6.86 nm per inch). TACs are 1:250,000.
- **Latitude/longitude:** grid ticks every minute; 1 minute of latitude = 1 nm.
- **Airport symbols:**
  - Blue = towered airport; magenta = non-towered.
  - Hard-surfaced runways 1,500–8,069 ft: a circle with the runway layout drawn inside.
  - Hard-surfaced runways longer than 8,069 ft (and some complex multi-runway airports):
    the runway layout drawn on its own, without the circle.
  - Other than hard-surfaced runways (grass, dirt): an open circle.
  - ⚠ Verify each symbol against the current Aeronautical Chart User's Guide.
  - Tick marks around the symbol = services (fuel) available.
  - Star = rotating beacon.
- **Airport data block:** name, identifier, CT (tower) frequency with ★ if part-time,
  ATIS, elevation, lighting, longest runway length (in hundreds of feet), UNICOM/CTAF
  with a Ⓒ symbol, and "RP" for right-traffic runways.
- **Terrain and obstacles:**
  - Colour tints for elevation.
  - **Maximum Elevation Figures (MEF)** in each quadrangle (e.g. ³⁵ = 3,500 ft).
  - Obstacle symbols with MSL height and (AGL height).
- **Navaids:** VOR, VOR-DME, VORTAC compass roses with frequency boxes.
- **Isogonic lines:** magenta dashed lines showing magnetic variation.
- **Airspace boundaries:** see 10.2.
- **Legend:** always on the chart; the Chart User's Guide explains everything.

### 10.2 Airspace classes (US) — v1 depth

| Class | Chart depiction                                                                                          | Typical vertical limits                                 | Entry requirement (VFR)                                 | Bay Area example                                                  |
| ----- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------- |
| A     | Not charted on sectionals                                                                                | 18,000 ft MSL – FL600                                   | IFR only                                                | Overhead everything                                               |
| B     | Solid blue lines, "upside-down wedding cake" shelves with altitudes like 100/SFC                         | Surface to ~10,000 ft                                   | **Explicit clearance** ("cleared into the Class Bravo") | San Francisco (SFO)                                               |
| C     | Solid magenta lines, inner core and outer shelf                                                          | Surface to ~4,000 ft AGL                                | Two-way radio communication established                 | Oakland (OAK), San Jose (SJC)                                     |
| D     | Dashed blue lines                                                                                        | Surface to ~2,500 ft AGL (value in brackets, e.g. [25]) | Two-way radio communication                             | Palo Alto (PAO), San Carlos (SQL), Livermore (LVK), Hayward (HWD) |
| E     | Faded magenta vignette (starts 700 ft AGL) or blue vignette (1,200 ft AGL); dashed magenta for surface E | Varies                                                  | No clearance required                                   | Around Tracy, Half Moon Bay                                       |
| G     | Beneath Class E, uncontrolled                                                                            | Surface to 700/1,200 ft AGL                             | None                                                    | Near the surface at non-towered fields                            |

Special use airspace (restricted, MOAs, TFRs): awareness only in v1.

**VFR weather minimums (91.155)** are taught at a simplified level:
"3 miles visibility and 500 below / 1,000 above / 2,000 horizontal from clouds" for most
controlled airspace below 10,000 ft, "3 miles and clear of clouds" in Class B, and the
Class G day exceptions mentioned only briefly. ⚠ Verify wording against 14 CFR 91.155 and
present as a simplified table with a link to the regulation.

### 10.3 Pilotage

Navigating by visual reference to landmarks. Teach:

1. Choose checkpoints that are **big, unique and visible**: shorelines, reservoirs,
   highways, bridges, towns, prominent peaks, stadiums, racetracks, wind farms.
2. Place checkpoints roughly every 5–10 nm.
3. Look at the chart → look outside → confirm → look at the chart again ("chart to ground,
   then ground to chart").
4. Hold heading precisely between checkpoints.
5. Note the time at each checkpoint.

### 10.4 Dead reckoning

Navigating by computing heading, speed and time.

- True course (TC) measured on the chart with a plotter.
- Wind correction angle (WCA) from the wind triangle (formulas in Appendix G).
- True heading (TH) = TC ± WCA.
- Magnetic heading (MH) = TH ± variation ("**East is least, West is best**": subtract
  easterly variation, add westerly). Bay Area variation ≈ 13° E (⚠ read the isogonic line
  on your current sectional).
- Compass heading (CH) = MH ± deviation (from the compass card; the sim models little or no
  deviation — mention only).
- Groundspeed (GS) from the wind triangle.
- Time = distance ÷ groundspeed; fuel = time × fuel burn.

### 10.5 The navigation log

Columns in our nav log (the P1 printable nav log uses the same):

| Checkpoint | Altitude | TC  | Wind (dir/kt) | WCA | TH  | Var | MH  | Dist (nm) | GS (kt) | ETE | ETA | ATE | ATA | Fuel |
| ---------- | -------- | --- | ------------- | --- | --- | --- | --- | --------- | ------- | --- | --- | --- | --- | ---- |

(ETE/ETA = estimated time enroute/arrival; ATE/ATA = actual.)

### 10.6 VOR navigation

- A VOR transmits 360 **radials** (magnetic courses _from_ the station).
- Tune and **identify** (Morse code) the station — always.
- Set the **OBS/course** to the desired course; the **CDI** needle shows whether the course
  is left or right; the **TO/FROM** flag shows whether the course takes you to or from the
  station.
- Intercepting a radial: turn to an intercept heading (course ± 30°–45°), wait for the
  needle to centre, turn onto the course, then correct for wind ("bracket").
- Reverse sensing: if the heading is roughly opposite the selected course, the needle
  "lies". Teach: _keep heading roughly aligned with the selected course_.
- On the G1000: press the **CDI softkey** to cycle GPS → VOR1 → VOR2. The HSI needle colour
  changes (magenta for GPS, green for VOR). Tune NAV frequencies with the NAV knob.
- Classic panel: VOR indicator (OBS knob, CDI needle, TO/FROM flag) — the widget in
  Section 16.10 (W9) simulates it.

### 10.7 GPS navigation with the G1000 NXi (v1 depth)

1. **Direct-To (D→ key):** enter an airport identifier, activate, fly the magenta line.
2. **Flight plan (FPL key):** add departure, waypoints (airports, VORs, user waypoints if
   supported), destination; activate; follow the magenta line; watch the "next leg" on
   the PFD.
3. **MFD map:** range knob, north-up vs track-up, declutter.
4. **Nearest (NRST):** find nearest airports — key for diversions and emergencies.
5. **Frequencies:** COM/NAV tuning with the knobs and the flip-flop key.
6. **Transponder:** squawk 1200 VFR; ident when asked; ALT mode.
7. **Autopilot (GFC 700) — P1 lesson:** AP, HDG, ALT, VS, NAV modes. v1 teaches
   hand-flying first; autopilot is a workload tool introduced late.

### 10.8 Diversions and lost procedures

- **Diversion:** pick a new destination, turn toward it immediately using a rough
  heading, then refine: estimate distance using the chart (or NRST), time using a rule
  of thumb (at 100 kt, 1.7 nm per minute).
- **Lost:** the "5 Cs" — Climb, Communicate, Confess, Comply, Conserve (plus
  "Circle" in some versions). Use the GPS/VOR to fix position, then pilotage.

### 10.9 Flight planning workflow taught in v1

1. Choose route and checkpoints on SkyVector (or the FAA sectional PDF).
2. Check airspace along the route; pick an altitude (VFR cruising altitudes above
   3,000 ft AGL: odd thousands + 500 for magnetic courses 0–179°, even thousands + 500
   for 180–359°).
3. Get weather (in v1: the challenge's specified weather; P1 lesson on real METARs).
4. Compute the nav log (headings, times, fuel).
5. Check fuel: flight time + 30 minutes day VFR reserve (91.151) — and a personal
   buffer.
6. Brief the departure and arrival (runway, pattern, frequencies).
7. Enter the route in the G1000 as a backup (except pilotage-only challenges).

---

## 11. The v1 home region: San Francisco Bay Area

All v1 challenges use a small set of airports so learners get to know them. Charts: FAA
**San Francisco Sectional** and **San Francisco TAC**.

> ⚠ **For every airport and navaid below:** verify runway designators, lengths, pattern
> direction, pattern altitude, frequencies and airspace in (1) the current Chart
> Supplement, (2) SkyVector, and (3) the sim's airport information. Record the verification
> date in `content/airports.yaml`. **Do not publish frequencies from this plan without
> checking** — frequencies are deliberately not listed here for that reason.

### 11.1 Airports used in v1

| ICAO | Name                        | Type               | Runways (verify)         | Why it is in v1                                                                                                       |
| ---- | --------------------------- | ------------------ | ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| KLVK | Livermore Municipal         | Class D, towered   | 7L/25R, 7R/25L           | **Primary training base.** Wide valley, flat terrain, parallel runways, good for patterns and manoeuvres to the east. |
| KTCY | Tracy Municipal             | Non-towered (CTAF) | 8/26, 12/30              | Non-towered pattern practice; close to KLVK over the Altamont Pass (wind farms = great landmark).                     |
| C83  | Byron                       | Non-towered (CTAF) | 5/23, 12/30              | Second non-towered field; short cross-country from KLVK.                                                              |
| KPAO | Palo Alto                   | Class D, towered   | 13/31 (short: ~2,400 ft) | Short runway, under SFO Class B shelves; Module 7 towered comms and precision landing.                                |
| KSQL | San Carlos                  | Class D, towered   | 12/30                    | Neighbour of KPAO; under Class B; landmark-rich bay shoreline.                                                        |
| KHAF | Half Moon Bay               | Non-towered (CTAF) | 12/30                    | Coastal airport over the hills from KPAO/KSQL; great pilotage route (Crystal Springs reservoir, coastline).           |
| KHWD | Hayward Executive           | Class D, towered   | 10L/28R, 10R/28L         | East Bay alternative; diversion option.                                                                               |
| KCCR | Buchanan Field (Concord)    | Class D, towered   | Multiple                 | Capstone destination option; Mt Diablo landmark.                                                                      |
| KWVI | Watsonville Municipal       | Non-towered (CTAF) | 2/20, 9/27               | Capstone option to the south along the coast.                                                                         |
| KSNS | Salinas Municipal           | Class D, towered   | Multiple                 | P1 capstone option; Salinas valley.                                                                                   |
| KOAK | Oakland International       | Class C            | Multiple                 | Airspace awareness only (do not land in v1 challenges).                                                               |
| KSJC | San Jose International      | Class C            | Multiple                 | Airspace awareness only.                                                                                              |
| KSFO | San Francisco International | Class B            | Multiple                 | Airspace awareness only; the upside-down wedding cake.                                                                |

### 11.2 VORs to use in navigation lessons (verify all)

| ID  | Name             | Use in v1                                |
| --- | ---------------- | ---------------------------------------- |
| OAK | Oakland VORTAC   | Radial intercept/tracking from KLVK area |
| SJC | San Jose VOR/DME | Radial tracking south bay                |
| OSI | Woodside VORTAC  | Near KPAO/KHAF; route to the coast       |
| ECA | Manteca VORTAC   | East valley; near KTCY                   |
| SAU | Sausalito VORTAC | Awareness                                |
| CCR | Concord VOR/DME  | Near KCCR; capstone                      |
| SNS | Salinas VORTAC   | P1 capstone south                        |

> ⚠ Check each against the **VOR MON programme** and the sim's navigation database. If a
> VOR is decommissioned in reality but present in the sim (or vice versa), prefer VORs that
> exist in both and note it in the lesson.

### 11.3 Landmarks for pilotage (verify in sim scenery)

- **San Francisco Bay** shoreline and salt ponds (south bay's coloured ponds are highly
  visible).
- **Bridges:** San Mateo–Hayward Bridge, Dumbarton Bridge, Bay Bridge, Golden Gate.
- **Crystal Springs Reservoir** (long, narrow, along I-280) — between KSQL/KPAO and KHAF.
- **Mount Diablo** (3,849 ft) — dominant East Bay peak, visible from everywhere.
- **Altamont Pass wind farms** — between KLVK and KTCY.
- **Lake Del Valle** and **Calaveras Reservoir** — south/south-east of Livermore.
- **Interstate highways:** I-580 (Livermore–Tracy), I-680, I-280, US-101.
- **San Luis Reservoir** (for longer P1 routes).
- **Pacific coastline** and **Pillar Point harbour** (next to KHAF).
- **Levi's Stadium, Moffett Field hangars** (near KSJC/KNUQ, visual only).

### 11.4 Terrain and hazards to highlight

- Coastal **marine layer / fog** at KHAF and on the coast (challenges use clear weather,
  but the lesson mentions it).
- **Hills between the bay and the coast** (Santa Cruz Mountains): minimum safe altitude
  awareness on the KPAO→KHAF route.
- **Class B shelves over KPAO/KSQL:** stay below the shelf floors; the TAC shows them.
- **Wind** through the Altamont Pass: often strong westerly afternoon winds — useful for
  crosswind P1 challenges.
- **Mount Diablo** MEF and obstacles (towers).

### 11.5 `content/airports.yaml` fields (see Section 27.8)

For each airport: `icao`, `name`, `city`, `elevationFt`, `class`, `towered`,
`runways[]` (designator, lengthFt, widthFt, trafficPattern: left|right, patternAltitudeFt),
`frequencies[]` (type, MHz, notes), `notes[]`, `chartLinks` (SkyVector, AirNav, diagram),
`verifiedAt`, `verifiedAgainst[]` (e.g. "Chart Supplement SW 2026-xx-xx", "MSFS 2024 SU x").

---

# Part III — Curriculum

## 12. Curriculum design principles

These principles come from the FAA Aviation Instructor's Handbook (how people learn) and
from what works in interactive learning products. Every lesson and challenge must follow
them; the content review checklist (Section 18.9) enforces them.

### 12.1 The building-block principle

Flight training is taught in a fixed order because each skill depends on the previous one.
Learn-To-Fly follows the same order:

1. Know the airplane (Module 1)
2. Control the airplane in the air (Module 2)
3. Move it safely on the ground (Module 3)
4. Get it into and out of the air (Module 4)
5. Handle the edges of the envelope and emergencies (Module 5)
6. Take it somewhere (Module 6)
7. Work with other aircraft and ATC (Module 7)
8. Put it all together (Module 8)

Module 0 exists because sim setup problems (controls, assistance) are the #1 reason sim
beginners fail at everything that follows.

### 12.2 Learn → See → Try → Fly → Reflect

Every lesson follows this rhythm:

1. **Learn** — a short explanation (no more than ~250 words before something interactive).
2. **See** — an image, diagram or widget that shows the idea.
3. **Try** — interact with a widget or answer a knowledge check.
4. **Fly** — a linked challenge in the sim.
5. **Reflect** — the challenge debrief asks what went well and what to change.

### 12.3 Learning objectives

- Each lesson has 2–4 objectives written as observable behaviour:
  "Explain…", "Identify…", "Fly… within…", "Calculate…".
- Avoid "understand" and "know" in objectives — they are not observable.
- Each objective must be assessed by at least one knowledge check or challenge criterion.

### 12.4 Cognitive load

- One new concept per lesson section.
- Show the thing (picture/widget) next to the words that describe it.
- Use the same names for the same things everywhere (glossary is the authority).
- Put numbers in tables, not paragraphs.
- Use callouts sparingly: at most one of each type per lesson section.

### 12.5 Mastery and repetition

- A challenge can be retried any number of times; the best attempt counts for progress.
- Later challenges deliberately re-use earlier skills (e.g. every pattern challenge also
  scores airspeed control from Module 2).
- The dashboard suggests "refresher" challenges when a learner has not flown in 14 days
  (P1).

### 12.6 Professional habits from day one

Every challenge that involves flight includes at least one criterion for a professional
habit: using the checklist, clearing turns, calling out speeds, stabilised approach, or
correct radio phraseology.

### 12.7 Honesty about the sim

- Always distinguish **real-world procedure** from **sim behaviour** using the
  "Sim vs reality" callout.
- Never imply that sim practice counts toward real-world certification.

### 12.8 Accessibility of content

- Every image has alt text that conveys the information, not just "image of cockpit".
- Every widget has a text alternative or a keyboard-operable equivalent.
- Colour is never the only way information is conveyed (e.g. airspeed arcs also labelled).

### 12.9 Tolerances (the "Learn-To-Fly standard")

Challenges use three tiers so beginners are not discouraged but still aim high:

| Tier        | Meaning                          | Typical altitude | Typical airspeed            | Typical heading |
| ----------- | -------------------------------- | ---------------- | --------------------------- | --------------- |
| ⭐ Bronze   | "You did it safely"              | ±200 ft          | ±15 kt                      | ±20°            |
| ⭐⭐ Silver | "Good student pilot"             | ±150 ft          | ±10 kt                      | ±15°            |
| ⭐⭐⭐ Gold | "Checkride-ready (ACS-inspired)" | ±100 ft          | ±10 kt (−5/+10 on approach) | ±10°            |

A challenge is **passed** at Bronze or better, provided all _required_ criteria are met.
The rubric and scoring algorithm are in Section 15.2.

---

## 13. Curriculum map (modules → lessons → challenges)

### 13.1 Summary

| Module    | Title                               | P0 lessons | P1 lessons | P0 challenges | P1 challenges | Est. time (lessons + sim) |
| --------- | ----------------------------------- | ---------- | ---------- | ------------- | ------------- | ------------------------- |
| 0         | Getting started                     | 3          | 0          | 1             | 0             | 1.0 h                     |
| 1         | Meet the Skyhawk                    | 4          | 0          | 1             | 0             | 1.5 h                     |
| 2         | Fundamentals of flight              | 4          | 1          | 4             | 0             | 3.0 h                     |
| 3         | Ground operations                   | 3          | 0          | 4             | 0             | 2.0 h                     |
| 4         | Takeoffs, patterns and landings     | 4          | 2          | 5             | 2             | 4.5 h                     |
| 5         | Slow flight, stalls and emergencies | 4          | 1          | 5             | 1             | 3.5 h                     |
| 6         | VFR navigation                      | 6          | 2          | 5             | 2             | 5.0 h                     |
| 7         | Radio and airport operations        | 3          | 1          | 2             | 1             | 2.0 h                     |
| 8         | Capstone                            | 2          | 0          | 2             | 0             | 2.5 h                     |
| **Total** |                                     | **33**     | **7**      | **29**        | **6**         | **~25 h**                 |

### 13.2 Full map

Legend: **L** = lesson, **C** = challenge, **W** = widget (Section 16).

**Module 0 — Getting started**

| ID   | Title                             | Pri | Widgets | Challenges                            |
| ---- | --------------------------------- | --- | ------- | ------------------------------------- |
| L0.1 | Welcome: how Learn-To-Fly works   | P0  | —       | —                                     |
| L0.2 | Setting up MSFS 2024 for training | P0  | —       | —                                     |
| L0.3 | Your first flight                 | P0  | —       | C0.1 First flight over Livermore (P0) |

**Module 1 — Meet the Skyhawk**

| ID   | Title                               | Pri | Widgets | Challenges                       |
| ---- | ----------------------------------- | --- | ------- | -------------------------------- |
| L1.1 | The airframe and flight controls    | P0  | W1      | —                                |
| L1.2 | The cockpit: G1000 PFD and MFD      | P0  | W2      | —                                |
| L1.3 | Engine, fuel and electrical systems | P0  | —       | —                                |
| L1.4 | Speeds, limits and checklists       | P0  | W3, W16 | C1.1 Cockpit scavenger hunt (P0) |

**Module 2 — Fundamentals of flight**

| ID   | Title                            | Pri | Widgets | Challenges                                     |
| ---- | -------------------------------- | --- | ------- | ---------------------------------------------- |
| L2.1 | Four forces and how a wing works | P0  | W4      | —                                              |
| L2.2 | Attitude flying and trim         | P0  | W5      | C2.1 Straight and level (P0)                   |
| L2.3 | Climbs and descents              | P0  | W5      | C2.2 Climbs and descents (P0)                  |
| L2.4 | Turns and coordination           | P0  | W6      | C2.3 Turns to headings (P0), C2.4 The box (P0) |
| L2.5 | Left-turning tendencies          | P1  | —       | —                                              |

**Module 3 — Ground operations**

| ID   | Title                                     | Pri | Widgets | Challenges                                             |
| ---- | ----------------------------------------- | --- | ------- | ------------------------------------------------------ |
| L3.1 | Preflight and engine start                | P0  | W16     | C3.1 Cold and dark to running (P0)                     |
| L3.2 | Taxiing, signs and markings               | P0  | W8 (P1) | C3.2 Taxi to the runway at KLVK (P0)                   |
| L3.3 | Run-up, before takeoff, and after landing | P0  | W16     | C3.3 Run-up (P0), C3.4 After landing and shutdown (P0) |

**Module 4 — Takeoffs, patterns and landings**

| ID   | Title                             | Pri | Widgets  | Challenges                                                   |
| ---- | --------------------------------- | --- | -------- | ------------------------------------------------------------ |
| L4.1 | Normal takeoff and climb          | P0  | —        | C4.1 Normal takeoff and departure (P0)                       |
| L4.2 | The traffic pattern               | P0  | W7       | C4.2 Fly the pattern (P0)                                    |
| L4.3 | Normal approach and landing       | P0  | W18 (P1) | C4.3 Full-stop landing (P0), C4.7 Three-circuit session (P0) |
| L4.4 | Go-arounds                        | P0  | W7       | C4.4 Go-around (P0)                                          |
| L4.5 | Crosswind takeoffs and landings   | P1  | W13      | C4.5 Crosswind landing (P1)                                  |
| L4.6 | Short-field takeoffs and landings | P1  | —        | C4.6 Short field at Palo Alto (P1)                           |

**Module 5 — Slow flight, stalls and emergencies**

| ID   | Title                              | Pri | Widgets  | Challenges                                          |
| ---- | ---------------------------------- | --- | -------- | --------------------------------------------------- |
| L5.1 | Slow flight                        | P0  | W4       | C5.1 Slow flight (P0)                               |
| L5.2 | Stalls: power-off and power-on     | P0  | W4       | C5.2 Power-off stall (P0), C5.3 Power-on stall (P0) |
| L5.3 | Steep turns and load factor        | P0  | W14      | C5.4 Steep turns (P0)                               |
| L5.4 | Engine failure and forced landings | P0  | W15 (P1) | C5.5 Engine failure (P0)                            |
| L5.5 | Ground reference manoeuvres        | P1  | —        | C5.6 Turns around a point (P1)                      |

**Module 6 — VFR navigation**

| ID   | Title                            | Pri | Widgets       | Challenges                                                             |
| ---- | -------------------------------- | --- | ------------- | ---------------------------------------------------------------------- |
| L6.1 | Reading a sectional chart        | P0  | W10           | C6.1 Landmark hunt (P0)                                                |
| L6.2 | Airspace                         | P0  | W11           | —                                                                      |
| L6.3 | Pilotage and dead reckoning      | P0  | W12           | C6.2 Pilotage to Tracy (P0), C6.3 Dead reckoning to Half Moon Bay (P0) |
| L6.4 | VOR navigation                   | P0  | W9            | C6.4 VOR tracking (P0)                                                 |
| L6.5 | GPS navigation with the G1000    | P0  | W2            | C6.5 G1000 flight plan (P0)                                            |
| L6.6 | Planning a cross-country flight  | P0  | W12, W20 (P1) | C6.6 Diversion (P1)                                                    |
| L6.7 | Weather basics: METARs and TAFs  | P1  | W17           | —                                                                      |
| L6.8 | The autopilot as a workload tool | P1  | —             | C6.7 Autopilot basics (P1)                                             |

**Module 7 — Radio and airport operations**

| ID   | Title                                  | Pri | Widgets  | Challenges                                          |
| ---- | -------------------------------------- | --- | -------- | --------------------------------------------------- |
| L7.1 | Radio basics and the phonetic alphabet | P0  | W19 (P1) | —                                                   |
| L7.2 | Non-towered airports (CTAF)            | P0  | W7       | C7.1 CTAF pattern at Tracy (P0)                     |
| L7.3 | Towered airports and sim ATC           | P0  | —        | C7.2 Towered departure and return at Livermore (P0) |
| L7.4 | Transponder and VFR flight following   | P1  | —        | C7.3 Palo Alto arrival (P1)                         |

**Module 8 — Capstone**

| ID   | Title                                 | Pri | Widgets | Challenges                                                  |
| ---- | ------------------------------------- | --- | ------- | ----------------------------------------------------------- |
| L8.1 | Decision making and personal minimums | P0  | —       | —                                                           |
| L8.2 | Preparing for your checkride          | P0  | —       | C8.1 Local checkride (P0), C8.2 Cross-country capstone (P0) |

### 13.3 Unlocking rules

- All lessons are **readable** by everyone (including visitors).
- Challenges show a soft "recommended prerequisites" warning (not a hard lock) if the
  linked lessons are not complete. Hard locks frustrate experienced users (persona Jordan).
- Module 8 challenges show a stronger warning listing incomplete P0 challenges, but are
  still startable.
- A module is **complete** when all its P0 lessons are complete and all its P0 challenges
  are passed.
- The course is **complete** when all modules are complete; the dashboard then shows a
  certificate-style "Skyhawk Pilot (Sim)" badge (clearly not a real certificate).

### 13.4 Slugs and IDs

- Module slugs: `m0-getting-started`, `m1-meet-the-skyhawk`, `m2-fundamentals`,
  `m3-ground-operations`, `m4-takeoffs-patterns-landings`, `m5-slow-flight-stalls-emergencies`,
  `m6-vfr-navigation`, `m7-radio-airport-operations`, `m8-capstone`.
- Lesson slugs: kebab-case of the title, prefixed with the ID, e.g. `l2-3-climbs-and-descents`.
- Challenge slugs: e.g. `c4-3-full-stop-landing`.
- IDs (`L2.3`, `C4.3`) are **display codes**; slugs are the stable keys in the database
  and URLs. Never change a slug after launch (add a redirect if unavoidable).

---

## 14. Lesson specifications (every v1 lesson)

Each lesson spec below is the brief you write the actual lesson file from (template in
Appendix D). Fields:

- **Est.** reading/interaction time · **Prereqs** · **Widgets** · **Challenges**
- **Objectives** — what the learner can do afterwards.
- **Outline** — the lesson sections, in order. Each becomes an `##` heading in the file.
- **Key facts** — numbers or rules that must appear (⚠ verify before publishing).
- **Callouts** — Sim vs reality, Classic panel, Safety, Pro tip.
- **Knowledge check** — questions with the correct answer in bold (format in Section 17).
- **Go deeper** — resource slugs from `content/resources.yaml`.

### Module 0 — Getting started

#### L0.1 — Welcome: how Learn-To-Fly works (P0)

- **Est.** 5 min · **Prereqs** none · **Widgets** none · **Challenges** none
- **Objectives**
  1. Describe the Learn → See → Try → Fly → Reflect loop.
  2. Explain how challenges are set up, flown and self-debriefed.
  3. State that Learn-To-Fly is not real-world flight training.
- **Outline**
  1. What you will be able to do at the end of the course (the v1 promise, Section 1.3).
  2. How the course is organised (modules, lessons, challenges) with a mini map graphic.
  3. How a challenge works: Brief → Fly → Debrief; stars (Bronze/Silver/Gold).
  4. What you need: MSFS 2024 (any edition), a controller, ideally a second screen or a
     tablet/phone for the brief.
  5. Honest disclaimer: sim training vs real training.
  6. Tips for success: short sessions, fly each challenge more than once, use pause.
- **Callouts**: Safety — "This is not flight instruction" disclaimer.
- **Knowledge check**
  1. What are the three steps of a challenge? → **Brief, Fly, Debrief.**
  2. Does completing Learn-To-Fly count toward a pilot certificate? → **No.**
- **Go deeper**: `faa-plane-sense`, `aopa-students`.

#### L0.2 — Setting up MSFS 2024 for training (P0)

- **Est.** 20 min · **Prereqs** L0.1 · **Widgets** none (tabs for controller types)
- **Objectives**
  1. Configure controls so every essential function works without the mouse.
  2. Apply the Learn-To-Fly Training assistance profile.
  3. Set up views and a free-flight session with specified weather and time.
- **Outline**
  1. Choose your controller profile (tabs: gamepad / joystick / yoke + pedals).
  2. Essential bindings table (Section 9.4) with "test it" steps for each binding.
  3. Sensitivity curves: why a little dead-zone and a softer curve help beginners.
  4. Assistance settings table (Section 9.3) with screenshots of each menu (dated).
  5. Views: cockpit default view, instrument close-up, looking left/right; saving a
     custom camera.
  6. Setting up a free flight: aircraft selection, departure airport and spot, weather
     (preset and custom), time of day, fuel and payload. Worked example: KLVK, parking,
     Clear Skies, 10:00 local.
  7. Using the in-sim checklist panel and the VFR map.
  8. Keeping this site open next to the sim: second monitor, tablet, phone; MSFS in-game
     panels (⚠ verify whether an in-sim browser/toolbar panel option exists in your
     version).
- **Key facts**: none aviation-critical.
- **Callouts**: Pro tip — "Bind pause to an easy button. Pausing is how you learn."
  Sim vs reality — auto-rudder.
- **Knowledge check**
  1. Which assistance should be off so you learn to trim? → **Auto-trim / assisted trim.**
  2. If you have no rudder axis, should auto-rudder be on or off? → **On.**
  3. Why do challenges specify custom weather? → **So everyone flies the same conditions.**
- **Go deeper**: `msfs-forums`, `msfs-official-site`.

#### L0.3 — Your first flight (P0)

- **Est.** 10 min + 15 min flying · **Prereqs** L0.2 · **Challenges** C0.1
- **Objectives**
  1. Take off from KLVK with guidance, fly gentle turns, and return (landing optional).
  2. Use pause and the brief during a flight.
- **Outline**
  1. What to expect: this is a "feel" flight; no score pressure (C0.1 is pass-on-completion).
  2. The five things to watch: the horizon, airspeed, altitude, heading, the runway.
  3. Step-by-step: start on the runway with engine running, full power, rotate at 55,
     climb at ~75, level at 3,000, a few gentle turns, look at landmarks (Mt Diablo,
     I-580, Lake Del Valle).
  4. Returning: either use the sim's "return to menu" or try to land (preview of Module 4).
  5. Reflection prompts for the debrief.
- **Callouts**: Pro tip — "Small inputs. Then wait. Then small inputs again."
- **Knowledge check**
  1. What speed do we rotate (lift the nose) at in the C172? → **55 KIAS.**
  2. What should you do if you feel overwhelmed during a flight? → **Pause.**
- **Go deeper**: `afh-ch1`, `boldmethod-home`.

### Module 1 — Meet the Skyhawk

#### L1.1 — The airframe and flight controls (P0)

- **Est.** 15 min · **Prereqs** L0.1 · **Widgets** W1 Control Surfaces Explorer
- **Objectives**
  1. Name the main parts of the airframe (fuselage, wings, empennage, landing gear,
     powerplant).
  2. Identify each control surface and which cockpit control moves it.
  3. Describe the three axes of rotation and which surface controls each.
- **Outline**
  1. The Skyhawk at a glance: high-wing, four seats, fixed tricycle gear, 180 hp (Section 8.1).
  2. Airframe parts with a labelled diagram (in our own illustration, not from the POH).
  3. The three axes: roll, pitch, yaw — W1 lets the learner move yoke/pedals and see the
     surfaces and the aircraft rotate.
  4. Flaps and trim tab: what they are and where they are.
  5. Ground steering: rudder pedals steer the nose wheel; toe brakes.
  6. In the sim: how to see the surfaces move (external view while moving controls on the
     ground).
- **Key facts**: axes table (Section 8.8); flaps 0/10/20/30°.
- **Callouts**: Sim vs reality — control forces are absent on most sim hardware.
- **Knowledge check**
  1. Moving the yoke to the left moves which surfaces? → **The ailerons (left up, right down).**
  2. Which axis does the rudder control? → **Yaw (vertical axis).**
  3. What does the trim tab do? → **Relieves control pressure so the airplane holds a pitch attitude.**
- **Go deeper**: `phak-ch3`, `phak-ch6`.

#### L1.2 — The cockpit: G1000 PFD and MFD (P0)

- **Est.** 20 min · **Prereqs** L1.1 · **Widgets** W2 G1000 PFD Explorer
- **Objectives**
  1. Locate airspeed, attitude, altitude, vertical speed, heading and turn information on
     the PFD.
  2. Identify the MFD's map, engine indication system (EIS) strip, and softkeys.
  3. Relate each PFD element to its classic "six-pack" equivalent.
- **Outline**
  1. The "big picture": two screens — PFD (left) and MFD (right).
  2. PFD tour with W2: attitude indicator, airspeed tape (with coloured bands), altitude
     tape with altimeter setting (baro), vertical speed, HSI/heading, turn rate indicator,
     slip/skid indicator, NAV/COM frequency boxes, transponder, wind box.
  3. MFD tour: moving map, EIS (RPM, fuel flow, oil pressure/temp, fuel quantity,
     voltage/amps), the FPL/NRST/D→ keys (brief; details in L6.5).
  4. Knobs and keys: COM/NAV tuning, baro knob, HDG bug, CRS knob, range knob.
  5. Classic panel mapping: the six-pack (airspeed, attitude, altimeter, turn coordinator,
     heading indicator, VSI) and where each shows on the PFD.
  6. The standby instruments and the magnetic compass.
  7. In the sim: zoomed-in views to read the PFD comfortably.
- **Key facts**: airspeed bands (Section 8.3).
- **Callouts**: Classic panel — six-pack diagram. Pro tip — "Scan, don't stare."
- **Knowledge check**
  1. Where is the altimeter setting shown on the G1000 PFD? → **Below the altitude tape (BARO box).**
  2. Which six-pack instrument does the PFD's slip/skid indicator replace? → **The turn coordinator's ball (inclinometer).**
  3. What does the MFD's EIS strip show? → **Engine and fuel information.**
- **Go deeper**: `garmin-g1000-nxi-pilots-guide`, `ifh`, `phak-ch8`.

#### L1.3 — Engine, fuel and electrical systems (P0)

- **Est.** 15 min · **Prereqs** L1.2
- **Objectives**
  1. Explain what the throttle and mixture do.
  2. Describe the fuel system and correct fuel selector position for takeoff and landing.
  3. Describe the roles of the master switch (ALT/BAT), avionics master and magnetos.
- **Outline**
  1. The engine: four cylinders, fixed-pitch propeller, so RPM ≈ power.
  2. Throttle (black) and mixture (red): what "lean" and "rich" mean; mixture cut-off stops
     the engine.
  3. Fuel system diagram: two wing tanks → selector (LEFT/RIGHT/BOTH/OFF) → fuel pump →
     injection. BOTH for takeoff/landing. Usable fuel 53 gal.
  4. Fuel quantity and fuel flow on the EIS; basic fuel planning preview (10 GPH).
  5. Electrical: battery, alternator, master (split), avionics master; why avionics off
     during start.
  6. Ignition: two magnetos for redundancy; the key positions OFF–R–L–BOTH–START.
  7. Carburettor note: the 172S is fuel injected (⚠ verify each sim variant).
- **Key facts**: Section 8.1, 8.6, 8.7.
- **Callouts**: Safety — "Mixture to cut-off is how you shut down; never the magnetos first."
  Sim vs reality — engine failures are off unless enabled.
- **Knowledge check**
  1. Where should the fuel selector be for takeoff? → **BOTH.**
  2. Why is the avionics master off during engine start? → **To protect avionics from voltage spikes during start.**
  3. Why does the engine have two magnetos? → **Redundancy (and more efficient combustion).**
- **Go deeper**: `phak-ch7`.

#### L1.4 — Speeds, limits and checklists (P0)

- **Est.** 20 min · **Prereqs** L1.3 · **Widgets** W3 Airspeed Indicator, W16 Checklist Runner · **Challenges** C1.1
- **Objectives**
  1. State the key V-speeds (Vr, Vx, Vy, Vg, Vfe, Vno, Vne, Vso, Vs1) and what they mean.
  2. Read airspeed colour bands.
  3. Explain why professional pilots use checklists and the difference between a
     "flow" and a "read-do" checklist.
- **Outline**
  1. What a V-speed is.
  2. The C172 V-speed table (Section 8.2) with a mnemonic card.
  3. W3: drag the airspeed needle; bands and labels appear; quiz mode ("set 74 kt").
  4. Manoeuvring speed changes with weight (simple explanation).
  5. Checklists: why they exist (history: B-17 "Model 299" crash story, summarised),
     read-do vs do-verify (flow then check).
  6. The in-sim checklist vs our Appendix B summary.
  7. W16: try running the "Before Starting Engine" checklist summary.
- **Key facts**: Section 8.2 and 8.3.
- **Callouts**: Pro tip — "Say the speed out loud: 'Airspeed alive… 55, rotate.'"
- **Knowledge check**
  1. What is Vy in the C172S? → **74 KIAS.**
  2. What does the top of the white arc represent? → **Maximum speed with flaps extended beyond 10° (85 KIAS).**
  3. What is best glide speed? → **68 KIAS.**
  4. In a do-verify checklist, when do you read the checklist? → **After doing the flow, to verify.**
- **Go deeper**: `phak-ch9`, `afh-ch1`, `msfs-checklist`.

### Module 2 — Fundamentals of flight

#### L2.1 — Four forces and how a wing works (P0)

- **Est.** 15 min · **Prereqs** L1.4 · **Widgets** W4 Angle of Attack & Lift
- **Objectives**
  1. Name the four forces and how they balance in steady flight.
  2. Define angle of attack and explain the critical angle of attack (stall).
  3. Explain why the airplane stalls at an angle of attack, not at a speed.
- **Outline**
  1. Lift, weight, thrust, drag — the balance in straight-and-level unaccelerated flight.
  2. Relative wind, chord line, angle of attack (AoA) — diagram.
  3. W4: slide AoA; lift increases until the critical AoA (~16–18°), then the flow
     separates and lift drops (stall). Show the airflow lines.
  4. Lift equation in plain words: more speed or more AoA → more lift.
  5. Drag: parasite vs induced; why flying slow needs more power (preview of slow flight).
  6. Stall speed vs AoA: the stall speed listed is at 1 G, and increases in turns
     (preview of L5.3).
- **Callouts**: Pro tip — "The wing doesn't know your airspeed; it only knows its angle of
  attack."
- **Knowledge check**
  1. In straight-and-level unaccelerated flight, lift equals? → **Weight.**
  2. A wing stalls when it exceeds what? → **The critical angle of attack.**
  3. If you slow down but want to keep altitude, what must happen to AoA? → **It must increase.**
- **Go deeper**: `phak-ch5`, `boldmethod-aerodynamics`.

#### L2.2 — Attitude flying and trim (P0)

- **Est.** 15 min · **Prereqs** L2.1 · **Widgets** W5 · **Challenges** C2.1
- **Objectives**
  1. Use the "attitude + power = performance" relationship.
  2. Use the scan: outside/attitude first, then instruments.
  3. Trim the airplane for hands-off level flight.
- **Outline**
  1. Attitude + power = performance: set attitude and power, then check the result.
  2. Where the horizon should sit on the glare shield in cruise (screenshot).
  3. The scan: 80–90% outside in VFR, 10–20% inside. The "hub and spoke" instrument
     scan with the attitude indicator as the hub.
  4. W5: set pitch and power sliders; see airspeed, VSI and altitude trends.
  5. Trim technique: "Set attitude, let it stabilise, trim away the pressure." In the sim
     with a spring stick, "pressure" means "how far you are holding the stick from centre".
  6. Straight-and-level: 2,300 RPM, ~105 KIAS, trim, hold heading using a distant landmark.
  7. Common errors: chasing the VSI, forgetting to trim, fixating on one instrument.
- **Key facts**: cruise ~2,300 RPM, level attitude (Section 8.5).
- **Callouts**: Sim vs reality — trim feel with buttons. Classic panel — attitude
  indicator.
- **Knowledge check**
  1. What do you set first when changing flight condition: attitude or trim? → **Attitude (and power); trim last.**
  2. When flying VFR, where should most of your attention be? → **Outside.**
  3. Your altitude is slowly increasing with the stick centred. What do you do? → **Trim nose down slightly.**
- **Go deeper**: `afh-ch3`, `ifh-attitude-flying`.

#### L2.3 — Climbs and descents (P0)

- **Est.** 15 min · **Prereqs** L2.2 · **Widgets** W5 · **Challenges** C2.2
- **Objectives**
  1. Enter a climb at Vy and a cruise climb, and level off at a target altitude.
  2. Enter a descent at a target airspeed and rate, and level off.
  3. Use "lead" (10% of vertical speed) to level off smoothly.
- **Outline**
  1. Climb entry: pitch up to the climb attitude → full power → trim. ("PAT": Pitch,
     Attitude/power, Trim — or "Attitude, Power, Trim".)
  2. Vy (74) vs Vx (62) vs cruise climb (75–85): why cruise climb gives visibility and
     cooling.
  3. Level-off from climb: start ~50 ft before target (10% of 500 fpm) → lower nose to
     level → let speed build → reduce to cruise power → trim. ("APT": Attitude, Power, Trim.)
  4. Descent entry: reduce power (e.g. 1,700–2,000 RPM) → hold attitude/speed → trim.
  5. Level-off from descent: add power ~50–100 ft before target as you raise the nose.
  6. Clearing turns before long climbs/descents (look for traffic).
  7. W5 exercises: "climb at 74", "descend at 500 fpm and 90 kt".
- **Key facts**: Vy 74, Vx 62, cruise climb 75–85 (⚠ verify).
- **Callouts**: Pro tip — "Lead your level-off by 10% of your vertical speed."
- **Knowledge check**
  1. Climbing at 600 fpm, when should you begin the level-off for 3,000 ft? → **Around 2,940 ft (60 ft early).**
  2. Which speed gives the most altitude per unit time? → **Vy.**
  3. Order for level-off from a climb? → **Attitude, (let speed build), power, trim.**
- **Go deeper**: `afh-ch3`.

#### L2.4 — Turns and coordination (P0)

- **Est.** 20 min · **Prereqs** L2.3 · **Widgets** W6 Turn Coordinator & Slip Ball · **Challenges** C2.3, C2.4
- **Objectives**
  1. Roll into and out of shallow (≤20°), medium (20–45°) and standard-rate turns.
  2. Keep turns coordinated using rudder ("step on the ball").
  3. Roll out on a target heading using a lead of about half the bank angle.
- **Outline**
  1. How an airplane turns: horizontal component of lift.
  2. Why you need back pressure in a turn (vertical component of lift).
  3. Adverse yaw and why rudder is used with aileron.
  4. W6: bank and rudder sliders; see slip/skid ball/trapezoid and a top-down "yaw" view.
  5. Standard-rate turn (3°/s): bank ≈ (TAS ÷ 10) + 7; at ~100 kt ≈ 17°. The G1000 turn
     rate indicator marks it.
  6. Rollout lead: start rolling out ~half the bank angle before the target heading.
  7. Clearing turns and "look before you turn".
  8. With auto-rudder on: what the ball does for you (and what it can't).
- **Key facts**: standard rate formula; lead rule.
- **Callouts**: Sim vs reality — auto-rudder. Classic panel — turn coordinator and ball.
- **Knowledge check**
  1. The ball is to the right in a right turn. Which rudder? → **Right rudder ("step on the ball").**
  2. Approximate bank for a standard-rate turn at 100 KTAS? → **About 17°.**
  3. Turning left in a 20° bank to heading 270, when do you start the rollout? → **About heading 280 (10° early).**
- **Go deeper**: `afh-ch3`, `phak-ch5`.

#### L2.5 — Left-turning tendencies (P1)

- **Est.** 10 min · **Prereqs** L2.4
- **Objectives**
  1. Name the four left-turning tendencies (torque, P-factor, spiralling slipstream,
     gyroscopic precession).
  2. Explain why right rudder is needed on takeoff and in climbs.
- **Outline**
  1. The four causes with simple diagrams.
  2. When each matters most (high power, low speed, high AoA).
  3. What it means for you: right rudder on takeoff, in climbs, in power-on stalls.
  4. In the sim: how strongly the sim models it and what auto-rudder hides.
- **Knowledge check**
  1. In a full-power climb, which rudder is usually needed? → **Right.**
  2. Which tendency comes from the descending propeller blade taking a bigger bite? → **P-factor.**
- **Go deeper**: `phak-ch5`, `boldmethod-left-turning`.

### Module 3 — Ground operations

#### L3.1 — Preflight and engine start (P0)

- **Est.** 20 min · **Prereqs** L1.4 · **Widgets** W16 Checklist Runner · **Challenges** C3.1
- **Objectives**
  1. Describe the purpose of a preflight inspection and what the sim can and cannot
     simulate.
  2. Complete "Before starting engine" and "Starting engine" checklists from cold and dark.
  3. Recognise normal indications after start (oil pressure rising, RPM ~1,000, alternator
     charging).
- **Outline**
  1. Real-world walkaround overview (fuel sampling, oil, control surfaces, tyres, pitot
     cover, tie-downs) — short, with an illustration; in the sim, what the walkaround mode
     does (⚠ verify MSFS 2024 walkaround features).
  2. Cockpit setup: seat, belts, documents, "cockpit flow" left to right.
  3. W16 with the "Before starting engine" summary (Appendix B).
  4. Starting: fuel pump (per checklist), mixture, throttle cracked, "CLEAR!", key to
     START, release when started, set ~1,000 RPM, check oil pressure within 30 seconds.
  5. After start: avionics on, flaps check, lights, ATIS/weather.
  6. Common problems in the sim: forgetting the fuel selector, mixture at cut-off,
     parking brake off.
- **Key facts**: oil pressure within 30 s (⚠ verify); ~1,000 RPM after start.
- **Callouts**: Safety — "Always shout 'CLEAR!' — even in the sim. Habits transfer."
- **Knowledge check**
  1. What must rise within about 30 seconds after start? → **Oil pressure.**
  2. Why say "clear prop"? → **To warn anyone near the propeller.**
  3. What's the first thing to check if the engine won't start in the sim? → **Mixture and fuel selector.**
- **Go deeper**: `afh-ch2`, `msfs-checklist`.

#### L3.2 — Taxiing, signs and markings (P0)

- **Est.** 20 min · **Prereqs** L3.1 · **Widgets** W8 (P1) Airport Signs · **Challenges** C3.2
- **Objectives**
  1. Taxi at a safe speed (brisk walking pace) with correct control positioning for wind.
  2. Read airport signs (location, direction, mandatory) and markings (centreline, hold
     short lines).
  3. Use an airport diagram to plan a taxi route.
- **Outline**
  1. Steering with rudder pedals; braking gently; never ride the brakes.
  2. Taxi speed and how to judge it in the sim (ground speed on the PFD/MFD ≤ ~10 kt,
     slower in turns).
  3. Wind and control position diagram ("climb into a headwind, dive away from a
     tailwind").
  4. Signs: black-on-yellow (direction), yellow-on-black (location), white-on-red
     (mandatory: runway holding position). Examples from KLVK.
  5. Markings: yellow centrelines, runway hold short (two solid, two dashed lines —
     solid side is where you stop), ILS critical area.
  6. The KLVK airport diagram: find the ramp, taxiways and run-up area (⚠ verify current
     diagram and sim layout).
  7. Runway incursions: why they are the #1 ground risk; "never cross a hold short line
     without clearance at a towered airport".
- **Callouts**: Sim vs reality — the sim's taxi ribbon (turn it off after this lesson).
- **Knowledge check**
  1. Which side of the hold short line do you stop on? → **The side with the solid lines.**
  2. What colour is a runway holding position sign? → **White text on red.**
  3. With a quartering headwind from the left, where should the yoke be? → **Turned left (aileron into the wind), elevator neutral.**
- **Go deeper**: `aim-2-3`, `faa-dtpp`, `afh-ch2`.

#### L3.3 — Run-up, before takeoff, and after landing (P0)

- **Est.** 15 min · **Prereqs** L3.2 · **Widgets** W16 · **Challenges** C3.3, C3.4
- **Objectives**
  1. Complete a run-up: magneto check, engine instruments, flight controls, trim for
     takeoff, flaps, doors, fuel.
  2. Give a takeoff briefing (normal and abnormal).
  3. Complete after-landing and shutdown checklists.
- **Outline**
  1. Run-up position: into the wind if possible, clear of others, parking brake set.
  2. Run-up at 1,800 RPM (⚠ verify): magneto check (drop limits), vacuum/electrical
     indications, engine instruments in green, throttle back to idle check.
  3. "Controls free and correct" check with the external view.
  4. Before-takeoff items: flaps (0–10°), trim set for takeoff, fuel on BOTH, mixture,
     transponder ALT, lights, doors.
  5. Takeoff briefing script: runway, speeds (rotate 55, climb 74), what we do if the
     engine fails before rotation, below 1,000 ft, above 1,000 ft.
  6. After landing: clear the runway, stop, flaps up, transponder standby, lights.
  7. Shutdown: avionics off, mixture cut-off, magnetos off, master off, parking brake.
- **Key facts**: mag drop limits (⚠ verify: typically max 150 RPM drop, max 50 RPM
  difference).
- **Callouts**: Pro tip — "Brief the emergency before you need it."
- **Knowledge check**
  1. Why check each magneto separately? → **To confirm both ignition systems work.**
  2. Engine fails on the takeoff roll. Action? → **Throttle idle, brake, stop straight ahead.**
  3. Which control stops the engine at shutdown? → **Mixture to cut-off.**
- **Go deeper**: `afh-ch2`, `msfs-checklist`.

### Module 4 — Takeoffs, patterns and landings

#### L4.1 — Normal takeoff and climb (P0)

- **Est.** 15 min · **Prereqs** L3.3, L2.3 · **Challenges** C4.1
- **Objectives**
  1. Line up on the centreline and apply full power smoothly.
  2. Maintain the centreline with rudder, rotate at 55 KIAS and climb at Vy.
  3. Fly a departure (straight out or crosswind departure) and transition to cruise climb.
- **Outline**
  1. Lining up: use all the runway, centreline between your knees (sim: centreline under
     the nose, slightly left of centre from the left seat).
  2. Full power smoothly; check "airspeed alive", engine gauges green.
  3. Right rudder as speed builds (left-turning tendencies preview).
  4. Rotate at 55: gentle back pressure to the takeoff attitude; let it fly off.
  5. Climb at Vy 74 to a safe altitude; after ~500 ft AGL consider cruise climb.
  6. Departing the pattern (AIM): straight out or 45° turn after reaching pattern altitude
     (or as directed).
  7. The "abort" decision: when to reject a takeoff (engine roughness, no airspeed,
     drifting off centreline).
  8. Common errors: over-rotation, pulling off early, drifting left.
- **Key facts**: Vr 55, Vy 74 (⚠ verify).
- **Callouts**: Safety — "If in doubt on the ground, abort. You have runway." Sim vs
  reality — lack of seat-of-the-pants feel; watch the airspeed.
- **Knowledge check**
  1. At what speed do you rotate? → **55 KIAS.**
  2. Which rudder is usually needed during the takeoff roll? → **Right rudder.**
  3. When should you reject a takeoff? → **Any abnormal indication before liftoff (e.g., airspeed not increasing, rough engine).**
- **Go deeper**: `afh-ch6`.

#### L4.2 — The traffic pattern (P0)

- **Est.** 20 min · **Prereqs** L4.1 · **Widgets** W7 Traffic Pattern Animator · **Challenges** C4.2
- **Objectives**
  1. Name the pattern legs: upwind/departure, crosswind, downwind, base, final.
  2. Fly a rectangular pattern at pattern altitude (typically 1,000 ft AGL) with correct
     speeds and configuration.
  3. Enter the pattern correctly at a non-towered airport (45° to downwind).
- **Outline**
  1. Why patterns exist: predictability and separation.
  2. W7 animated pattern: legs, altitudes, turn points, entry and departure. The learner can
     toggle left/right traffic and change the wind; the ground track shows wind correction.
  3. Standard pattern: left turns unless charted "RP"; pattern altitude from the Chart
     Supplement (1,000 ft AGL typical).
  4. Configuration and speed per leg (Section 8.5 table).
  5. Key points: "abeam the numbers" power reduction; turn base when the touchdown point is
     ~45° behind the wing; turn final to line up without overshooting.
  6. Wind correction on each leg (crab).
  7. Entering: 45° to downwind at pattern altitude; midfield. Departing: straight out or 45°.
  8. Where to look: always scan for traffic; lights on.
- **Key facts**: AIM 4-3-3 traffic pattern; KLVK pattern altitude (⚠ verify: Chart
  Supplement).
- **Callouts**: Pro tip — "Pick a visual point on the ground for each turn at your home
  airport." Classic panel — none.
- **Knowledge check**
  1. What is the standard pattern direction? → **Left.**
  2. Standard pattern entry at a non-towered airport? → **45° to the downwind leg, at pattern altitude.**
  3. On downwind, when do you reduce power for descent? → **Abeam the touchdown point (the numbers).**
- **Go deeper**: `aim-4-3`, `afh-ch8`, `boldmethod-patterns`.

#### L4.3 — Normal approach and landing (P0)

- **Est.** 25 min · **Prereqs** L4.2 · **Widgets** W18 (P1) Landing Sight Picture · **Challenges** C4.3, C4.7
- **Objectives**
  1. Fly a stabilised approach (on speed, on glide path, on centreline, configured by
     ~300–500 ft AGL).
  2. Use the aiming point and the PAPI/VASI to judge glide path.
  3. Round out, flare and touch down on the main wheels at minimum speed near the
     touchdown zone.
- **Outline**
  1. Stabilised approach criteria (our version): full flaps, 65 KIAS ±5, on centreline,
     on glide path, power set, before-landing checklist done by 300 ft AGL. If not →
     go around.
  2. The aiming point: the spot that doesn't move up or down in the windscreen.
  3. PAPI/VASI colour logic (two whites two reds = on path). ⚠ Verify which KLVK runways
     have PAPIs in reality and in the sim.
  4. Airspeed with pitch, glide path with power (useful simplification for final).
  5. Round out at ~10–20 ft, then flare: look down the runway, gradually raise the nose,
     hold it off, main wheels first, nose wheel gently.
  6. After touchdown: keep straight with rudder, brakes gently, clear the runway.
  7. Common errors: fast approach → float; flare too high → drop; flare too low → bounce;
     looking over the nose instead of down the runway. Bounce recovery → go around.
  8. Sim view tips: the sim's default cockpit camera height; lowering/raising the seat
     view changes the sight picture.
- **Key facts**: 60–70 KIAS flaps 30 final (⚠ verify). Flaps 10 below 110; >10° below 85.
- **Callouts**: Sim vs reality — depth perception on a flat screen; use the runway
  edges converging as the flare cue.
- **Knowledge check**
  1. Two white and two red PAPI lights mean? → **On glide path.**
  2. Not stabilised at 300 ft AGL. What do you do? → **Go around.**
  3. Where should you look during the flare? → **Down the far end of the runway.**
- **Go deeper**: `afh-ch9`, `boldmethod-landing`.

#### L4.4 — Go-arounds (P0)

- **Est.** 10 min · **Prereqs** L4.3 · **Widgets** W7 · **Challenges** C4.4
- **Objectives**
  1. Decide early and fly a go-around without hesitation.
  2. Apply the go-around sequence: full power, pitch for climb, flaps 20, positive climb,
     flaps up in stages.
- **Outline**
  1. Why go-arounds are a normal manoeuvre, not a failure.
  2. Triggers: unstable approach, runway occupied, bounce, instruction from ATC.
  3. Sequence ("Power, Attitude, Clean-up"): full power → pitch to climb attitude (Vx/Vy
     region) → flaps 20 immediately → once climbing, flaps 10 → flaps 0 at a safe altitude
     and speed. ⚠ Verify against the balked landing procedure.
  4. Fly offset to the side of the runway to see departing traffic (non-towered).
  5. Radio call: "Livermore traffic, Skyhawk 123, going around, runway 25R."
  6. Common errors: forgetting right rudder, pitching too high with full flaps, retracting
     all flaps at once.
- **Knowledge check**
  1. First action in a go-around? → **Full power.**
  2. Why not raise the flaps from 30 to 0 all at once? → **Sudden loss of lift, sink.**
- **Go deeper**: `afh-ch9`.

#### L4.5 — Crosswind takeoffs and landings (P1)

- **Est.** 20 min · **Prereqs** L4.4 · **Widgets** W13 Crosswind Component Calculator · **Challenges** C4.5
- **Objectives**
  1. Calculate crosswind and headwind components.
  2. Use crab and wing-low (sideslip) techniques.
  3. Know the demonstrated crosswind value and personal limits.
- **Outline**
  1. Crosswind component = wind speed × sin(angle); rules of thumb (30° ≈ ½, 45° ≈ ¾,
     60°+ ≈ full).
  2. W13: drag the wind arrow around a runway; see components update.
  3. Takeoff: full aileron into the wind at start, reduce as speed builds; rotate crisply.
  4. Landing: crab on final, transition to wing-low in the flare (or wing-low from ~200 ft);
     touch down upwind wheel first; keep aileron into the wind on rollout.
  5. Max demonstrated crosswind (15 kt) — what "demonstrated" means.
  6. Sim tips: gusts in custom weather; rudder axis strongly recommended; with auto-rudder
     on, crosswind landings are compromised — note it.
- **Knowledge check**
  1. Wind 20 kt at 30° to the runway: crosswind component? → **About 10 kt.**
  2. In a left crosswind, which wing is low in a sideslip? → **Left.**
- **Go deeper**: `afh-ch9`, `boldmethod-crosswind`.

#### L4.6 — Short-field takeoffs and landings (P1)

- **Est.** 15 min · **Prereqs** L4.4 · **Challenges** C4.6
- **Objectives**
  1. Perform a short-field takeoff with flaps 10, brakes held, Vx climb to clear a 50-ft
     obstacle.
  2. Fly a short-field approach at 61 KIAS and touch down within 200 ft beyond a chosen
     point.
- **Outline**
  1. When you need it: short runways (KPAO ~2,400 ft), obstacles.
  2. Performance charts intro (taking the POH chart concept; our own simplified example
     — no copying).
  3. Takeoff technique and speeds (⚠ verify).
  4. Approach technique: precise speed, aiming point, power to touchdown, firm touchdown,
     max braking, flaps up for braking effectiveness (⚠ verify POH).
- **Knowledge check**
  1. Short-field approach speed? → **61 KIAS (verify).**
  2. What climb speed clears an obstacle after a short-field takeoff? → **Vx (~56 obstacle speed per POH procedure; verify).**
- **Go deeper**: `afh-ch6`, `afh-ch9`.

### Module 5 — Slow flight, stalls and emergencies

#### L5.1 — Slow flight (P0)

- **Est.** 15 min · **Prereqs** L2.4, L4.3 · **Widgets** W4 · **Challenges** C5.1
- **Objectives**
  1. Establish slow flight at an airspeed where any increase in AoA or load factor would
     cause a stall warning, while holding altitude.
  2. Make gentle turns, climbs and descents in slow flight.
  3. Recover to cruise flight smoothly.
- **Outline**
  1. What slow flight is and why it matters (landing, go-arounds happen here).
  2. Clearing turns; min altitude for practice (we use 3,000 ft AGL in challenges).
  3. Entry: power ~1,500 RPM, carb heat N/A (172S), raise nose to hold altitude as speed
     decays, flaps in stages below Vfe, add power to hold ~50–55 KIAS and altitude.
  4. The "back side of the power curve": pitch for airspeed, power for altitude.
  5. Right rudder and coordination at high power, low speed.
  6. Recovery: full power, lower nose, flaps up in stages, accelerate, return to cruise.
  7. Stall horn: current ACS standards say slow flight should be flown without activating
     the stall warning (⚠ verify current ACS wording) — our Gold tier follows that.
- **Knowledge check**
  1. In slow flight, what controls altitude primarily? → **Power.**
  2. Recovery first action? → **Full power (and lower the nose to maintain altitude).**
- **Go deeper**: `afh-ch5`.

#### L5.2 — Stalls: power-off and power-on (P0)

- **Est.** 20 min · **Prereqs** L5.1 · **Widgets** W4 · **Challenges** C5.2, C5.3
- **Objectives**
  1. Recognise stall indications: stall horn, buffet, mushy controls, nose drop.
  2. Recover using the recovery sequence: reduce AoA first, level wings, add power,
     return to straight-and-level.
  3. Explain when power-off (approach/landing) and power-on (takeoff/departure) stalls
     happen in real life.
- **Outline**
  1. Stall = exceeded critical AoA (recap with W4).
  2. Stall indications and how the sim shows them (horn, buffet shake, visual).
  3. **Recovery sequence (FAA stall recovery template, summarised):** autopilot off →
     **pitch nose down to reduce AoA** → roll wings level → add power as needed →
     return to desired flight path. ⚠ Verify wording in the AFH.
  4. Power-off stall: set up as if on final (flaps 20–30, ~65 kt), slowly raise the nose
     to the stall, recover.
  5. Power-on stall: set up as if on departure (flaps 0–10, lift-off speed), full/high
     power, raise nose, recover.
  6. Spins: awareness only — what they are, why coordination matters; no spin
     training in v1.
  7. Common errors: pulling back during recovery, uncoordinated rudder (wing drop),
     secondary stall from recovering too aggressively.
- **Callouts**: Safety — "Reduce angle of attack — always the first step." Sim vs
  reality — stall characteristics.
- **Knowledge check**
  1. First action in any stall recovery? → **Reduce angle of attack (pitch nose down).**
  2. A power-off stall simulates which phase? → **Approach and landing.**
  3. Wing drops during stall: use aileron or rudder first? → **Reduce AoA first; then coordinated controls; avoid large aileron at the stall.**
- **Go deeper**: `afh-ch5`, `boldmethod-stalls`, `aopa-asi-stalls`.

#### L5.3 — Steep turns and load factor (P0)

- **Est.** 15 min · **Prereqs** L5.2 · **Widgets** W14 Bank vs Load Factor · **Challenges** C5.4
- **Objectives**
  1. Explain load factor and how stall speed increases with bank.
  2. Fly 360° steep turns at 45° bank in both directions, holding altitude ±100 ft and
     airspeed ±10 kt, rolling out on the entry heading ±10°.
- **Outline**
  1. Load factor: 45° → 1.41 G; 60° → 2 G.
  2. Stall speed increases with the square root of load factor: at 45°, ×1.19; at 60°, ×1.41.
  3. W14: bank slider; see G, stall speed and required back pressure.
  4. Technique: entry at or below Va (~95–100 KIAS), clearing turn, pick a landmark, roll
     to 45°, add back pressure and a little power (~100–200 RPM), use the horizon picture,
     roll out 20° before the entry heading.
  5. Overbanking tendency.
  6. Common errors: losing altitude in the first 90°, ballooning on rollout.
- **Knowledge check**
  1. Load factor at 60° bank in a level turn? → **2 G.**
  2. Stall speed clean is 48 KIAS; approximate stall speed in a 60° bank? → **About 68 KIAS.**
  3. When do you start the rollout from a 45° bank? → **About 20° before the target heading.**
- **Go deeper**: `afh-ch10`, `phak-ch5`.

#### L5.4 — Engine failure and forced landings (P0)

- **Est.** 20 min · **Prereqs** L5.2 · **Widgets** W15 (P1) Glide Range · **Challenges** C5.5
- **Objectives**
  1. Apply the ABC(DE) flow: Airspeed (best glide 68), Best field, Checklist (restart),
     Declare, Execute.
  2. Estimate glide distance (~1.5 nm per 1,000 ft AGL as a planning figure; ⚠ verify
     with POH glide ratio).
  3. Fly to a landable field and set up a key-point approach.
- **Outline**
  1. Engine failures are rare but you must be ready; the first seconds matter.
  2. Airspeed: pitch for 68 KIAS immediately and trim.
  3. Best field: into the wind, long, flat, no obstacles; within glide range; turn toward it.
  4. Checklist: restart flow — fuel selector BOTH, mixture rich, fuel pump on, magnetos
     BOTH/START (⚠ verify POH sequence).
  5. Declare: 121.5 MHz or current frequency; squawk 7700.
  6. Execute: key points (high downwind, base), flaps when the field is made, secure the
     engine before touchdown (mixture, fuel, mags, master when flaps set).
  7. Engine failure after takeoff: **land ahead**; no turnback below a safe altitude.
  8. How to trigger an engine failure in the sim (failures menu or mixture cut-off at a
     random time chosen by a friend) — ⚠ verify MSFS 2024 failure menu options.
- **Callouts**: Safety — "Fly the airplane first." Sim vs reality — stress level.
- **Knowledge check**
  1. Best glide speed? → **68 KIAS.**
  2. Squawk code for emergency? → **7700.**
  3. Engine fails at 400 ft after takeoff. Turn back? → **No — land roughly straight ahead.**
- **Go deeper**: `afh-ch18`, `aopa-asi-engine-failure`.

#### L5.5 — Ground reference manoeuvres (P1)

- **Est.** 15 min · **Prereqs** L2.4 · **Challenges** C5.6
- **Objectives**
  1. Fly turns around a point at a constant radius, correcting for wind with bank.
  2. Relate the manoeuvre to the traffic pattern.
- **Outline**
  1. Why: divided attention, wind correction.
  2. Altitude 600–1,000 ft AGL (in the sim, use 1,000 ft AGL over empty terrain).
  3. Steepest bank when groundspeed is highest (downwind), shallowest upwind.
  4. Rectangular course (optional section) and S-turns (mention).
- **Knowledge check**
  1. Where in a turn around a point is bank steepest? → **Directly downwind (highest groundspeed).**
- **Go deeper**: `afh-ch7`.

### Module 6 — VFR navigation

#### L6.1 — Reading a sectional chart (P0)

- **Est.** 25 min · **Prereqs** L1.4 · **Widgets** W10 Sectional Legend Explorer · **Challenges** C6.1
- **Objectives**
  1. Identify airports (towered/non-towered), navaids, terrain, obstacles and MEFs.
  2. Read an airport data block.
  3. Find landmarks suitable for pilotage.
- **Outline**
  1. What a sectional is; where to get it (FAA free download; SkyVector).
  2. Scale and lat/long.
  3. W10: interactive chart excerpt (our own simplified drawing or an FAA chart crop with
     attribution) with hotspots on each symbol type.
  4. Airport symbols and data blocks (Section 10.1).
  5. Terrain colours, MEF, obstacles.
  6. Navaids and compass roses; isogonic lines.
  7. Landmarks: roads, railways, water, towns; which make good checkpoints.
  8. Practice: find KLVK, KTCY, Altamont Pass, Lake Del Valle on SkyVector.
- **Knowledge check**
  1. A magenta airport symbol means? → **Non-towered.**
  2. MEF "3⁵" means? → **3,500 ft maximum elevation figure in that quadrangle.**
  3. Where is the longest runway length shown? → **In the airport data block, in hundreds of feet.**
- **Go deeper**: `faa-chart-users-guide`, `faa-vfr-charts`, `skyvector`, `phak-ch16`.

#### L6.2 — Airspace (P0)

- **Est.** 25 min · **Prereqs** L6.1 · **Widgets** W11 Airspace Cross-section
- **Objectives**
  1. Identify Class B, C, D, E and G airspace on a sectional and a TAC.
  2. State the entry requirement for each class.
  3. Plan an altitude that avoids Class B shelves.
- **Outline**
  1. Why airspace exists.
  2. W11: 3D-ish cross-section of the Bay Area (SFO B, OAK/SJC C, PAO/LVK D, E, G). Click a
     layer to see floor/ceiling and requirements. Slider to "fly" along a route and see
     which airspace you are in.
  3. Table from Section 10.2.
  4. Reading shelves: "100/SFC", "80/30".
  5. VFR weather minimums (simplified) with link to 91.155.
  6. Special use airspace and TFRs (awareness).
  7. Practice: route KPAO → KHAF — which airspace do you pass through?
- **Knowledge check**
  1. Requirement to enter Class B? → **An explicit ATC clearance.**
  2. Requirement to enter Class D? → **Two-way radio communication established.**
  3. "50/30" in a Class B shelf means? → **Floor 3,000 ft MSL, ceiling 5,000 ft MSL.**
- **Go deeper**: `phak-ch15`, `aim-3`, `faa-sf-tac`.

#### L6.3 — Pilotage and dead reckoning (P0)

- **Est.** 30 min · **Prereqs** L6.2 · **Widgets** W12 Wind Triangle · **Challenges** C6.2, C6.3
- **Objectives**
  1. Choose checkpoints and fly a route by pilotage.
  2. Calculate true course, wind correction angle, magnetic heading, groundspeed and ETE.
  3. Correct for drift using the 1-in-60 rule.
- **Outline**
  1. Pilotage (Section 10.3).
  2. Measuring true course with a plotter or SkyVector.
  3. Wind triangle with W12: drag wind, see WCA and groundspeed.
  4. True → magnetic → compass (Section 10.4); "East is least, West is best".
  5. Time and fuel.
  6. 1-in-60 rule: 1° off course per 1 nm off course at 60 nm; correction technique.
  7. Worked example: KLVK → KTCY with a 270°/15 kt wind.
- **Knowledge check**
  1. TC 090, WCA −5°, variation 13°E. Magnetic heading? → **072.**
  2. 20 nm at 100 kt groundspeed. Time? → **12 minutes.**
  3. 2 nm off course after 30 nm. Degrees off? → **4°.**
- **Go deeper**: `phak-ch16`, `afh-nav`, `skyvector`.

#### L6.4 — VOR navigation (P0)

- **Est.** 25 min · **Prereqs** L6.3 · **Widgets** W9 VOR/CDI Simulator · **Challenges** C6.4
- **Objectives**
  1. Tune and identify a VOR on the G1000 (and classic NAV radio).
  2. Determine position (which radial you are on) using the OBS/CDI.
  3. Intercept and track a radial to or from a station.
- **Outline**
  1. How a VOR works (simple explanation, radials as spokes).
  2. Tuning and identifying (Morse ID shown on G1000 when ID is decoded ⚠ verify).
  3. W9: move the aircraft around a VOR on a map; turn the OBS; watch the needle and
     TO/FROM flag. Challenge mode: "Which radial are you on?"
  4. Intercept technique (Section 10.6).
  5. Wind correction: bracketing.
  6. G1000 specifics: CDI softkey, CRS knob, HSI.
  7. Classic panel: VOR head with OBS.
  8. MON programme note (Section 11.2).
- **Knowledge check**
  1. What does a centred needle with FROM flag and 090 set mean? → **You are on the 090 radial (east of the station).**
  2. Why identify a VOR? → **To confirm the right station and that it is working.**
  3. Needle is left of centre with the heading roughly matching the course. Turn which way? → **Left (toward the needle).**
- **Go deeper**: `phak-ch16`, `ifh-nav`, `garmin-g1000-nxi-pilots-guide`.

#### L6.5 — GPS navigation with the G1000 (P0)

- **Est.** 25 min · **Prereqs** L6.4 · **Widgets** W2 (in "navigation" mode) · **Challenges** C6.5
- **Objectives**
  1. Use Direct-To to an airport.
  2. Build, activate and fly a flight plan with 2–4 waypoints.
  3. Use NRST to find the nearest airport.
- **Outline**
  1. GPS vs pilotage: GPS is a tool, not a replacement for situational awareness.
  2. Direct-To step by step with screenshots.
  3. FPL page: add waypoints with the FMS knobs; delete/insert; activate leg.
  4. The magenta line on PFD/MFD; distance/ETE fields; next waypoint.
  5. NRST page for emergencies and diversions.
  6. The sim's world-map flight plan vs the G1000 FPL: how they sync (⚠ verify MSFS 2024
     behaviour).
  7. Common errors: forgetting CDI is on VOR, wrong waypoint selected from a list, map
     range too small.
- **Knowledge check**
  1. Which key starts a direct route to one waypoint? → **D→ (Direct-To).**
  2. Magenta vs green needle on the HSI? → **Magenta = GPS, green = VOR/LOC.**
- **Go deeper**: `garmin-g1000-nxi-pilots-guide`, `ifh-glass`.

#### L6.6 — Planning a cross-country flight (P0)

- **Est.** 30 min · **Prereqs** L6.3, L6.5 · **Widgets** W12, W20 (P1) · **Challenges** C6.6 (P1)
- **Objectives**
  1. Produce a nav log for a 30–60 nm flight.
  2. Select a VFR cruising altitude (hemispheric rule).
  3. Brief departure, route, arrival and alternates, and plan a diversion.
- **Outline**
  1. The workflow (Section 10.9).
  2. Nav log walkthrough (Section 10.5) with a worked example KLVK → C83 → KTCY → KLVK.
  3. Hemispheric rule, terrain clearance, airspace along the route.
  4. Fuel planning: time × 10 GPH + 30 min reserve + taxi.
  5. Alternates and diversions (Section 10.8).
  6. Using SkyVector to draw the route and read distances.
  7. Downloadable/printable nav log (P1 PDF or printable page).
- **Knowledge check**
  1. VFR cruising altitude for magnetic course 120° above 3,000 AGL? → **Odd thousands + 500 (e.g. 3,500 or 5,500).**
  2. Day VFR fuel reserve? → **30 minutes at normal cruise.**
- **Go deeper**: `phak-ch16`, `ecfr-91-151`, `ecfr-91-159`.

#### L6.7 — Weather basics: METARs and TAFs (P1)

- **Est.** 20 min · **Prereqs** L6.2 · **Widgets** W17 METAR Decoder
- **Objectives**
  1. Decode a METAR (wind, visibility, weather, clouds, temperature/dew point, altimeter).
  2. Decide whether conditions meet basic VFR.
- **Outline**
  1. Where to get METARs (aviationweather.gov).
  2. W17: paste or pick a METAR; each group is highlighted and explained.
  3. Ceiling definition (BKN/OVC); VFR/MVFR/IFR categories.
  4. Setting the sim to live weather vs custom; matching a real METAR in custom weather.
- **Knowledge check**
  1. "27015G25KT" means? → **Wind from 270° at 15 kt gusting 25 kt.**
  2. Is "BKN008" a ceiling? → **Yes, 800 ft AGL.**
- **Go deeper**: `aviationweather`, `faa-weather-handbook`.

#### L6.8 — The autopilot as a workload tool (P1)

- **Est.** 20 min · **Prereqs** L6.5 · **Challenges** C6.7
- **Objectives**
  1. Engage and disengage the GFC 700 autopilot.
  2. Use HDG, ALT, VS and NAV (GPS) modes.
  3. Read the autopilot mode annunciations on the PFD.
- **Outline**
  1. Why hand-flying comes first.
  2. AP key, mode annunciator bar, the disconnect switch.
  3. HDG + ALT; VS climbs/descents; NAV to follow the flight plan.
  4. "Know what it's doing": verify modes after every change.
  5. Disconnecting and hand-flying.
- **Knowledge check**
  1. Where do you verify the active autopilot mode? → **The PFD's mode annunciator bar.**
- **Go deeper**: `garmin-g1000-nxi-pilots-guide`.

### Module 7 — Radio and airport operations

#### L7.1 — Radio basics and the phonetic alphabet (P0)

- **Est.** 15 min · **Prereqs** L1.2 · **Widgets** W19 (P1) Phonetic Trainer
- **Objectives**
  1. Use the phonetic alphabet and aviation number pronunciation.
  2. Structure a radio call: who you're calling, who you are, where you are, what you want.
- **Outline**
  1. Phonetic alphabet table; numbers ("tree", "fife", "niner").
  2. Call sign conventions (N-number, "Skyhawk" type prefix, abbreviated after contact).
  3. Structure of calls; listen before you talk; keep it short.
  4. Frequencies: COM1/COM2, standby/active, tuning on the G1000.
  5. ATIS: what it contains; "information Alpha".
  6. Homework: listen to LiveATC for 15 minutes.
- **Knowledge check**
  1. Say "N172SP" on the radio. → **"November One Seven Two Sierra Papa."**
  2. The four parts of an initial call? → **Who you're calling, who you are, where you are, what you want.**
- **Go deeper**: `aim-4-2`, `liveatc`, `pilot-controller-glossary`.

#### L7.2 — Non-towered airports (CTAF) (P0)

- **Est.** 20 min · **Prereqs** L7.1, L4.2 · **Widgets** W7 · **Challenges** C7.1
- **Objectives**
  1. Make standard CTAF position reports in the pattern.
  2. Enter and depart a non-towered pattern safely.
- **Outline**
  1. CTAF and UNICOM: where to find the frequency (sectional Ⓒ, Chart Supplement).
  2. Standard calls: 10 nm out, entering downwind, base, final, clear of runway; departure
     call. Script templates using "Tracy traffic, Skyhawk 123…, Tracy".
  3. Self-announce even if nobody answers.
  4. W7 with radio call markers on the pattern animation.
  5. MSFS: AI traffic and the ATC window's CTAF options (⚠ verify).
- **Knowledge check**
  1. How do you start and end a CTAF call? → **With the airport name ("Tracy traffic … Tracy").**
  2. Where do you find the CTAF frequency? → **Sectional data block (Ⓒ) or Chart Supplement.**
- **Go deeper**: `aim-4-1`, `aopa-asi-radio`.

#### L7.3 — Towered airports and sim ATC (P0)

- **Est.** 25 min · **Prereqs** L7.2 · **Challenges** C7.2
- **Objectives**
  1. Listen to ATIS, call ground for taxi, call tower for takeoff, read back correctly.
  2. Request and fly a tower-assigned pattern entry and landing.
  3. Use the MSFS ATC window efficiently and know how it differs from real ATC.
- **Outline**
  1. Sequence: ATIS → Ground (taxi) → Tower (takeoff) → (departure/return) → Tower
     (landing) → Ground (taxi to parking).
  2. Read-backs: what must be read back (runway assignments, hold short instructions,
     altimeter, frequencies, headings/altitudes).
  3. Example scripts at KLVK (⚠ verify runway numbers and frequencies).
  4. Class D entry: "two-way radio communication established".
  5. MSFS ATC: selecting options, differences from the AIM.
  6. VATSIM/PilotEdge as next steps.
- **Knowledge check**
  1. Which instruction must always be read back? → **Hold short instructions (and runway assignments).**
  2. Before calling ground, what should you have? → **The current ATIS.**
- **Go deeper**: `aim-4-2`, `aim-4-3`, `vatsim-getting-started`, `pilotedge`.

#### L7.4 — Transponder and VFR flight following (P1)

- **Est.** 15 min · **Prereqs** L7.3 · **Challenges** C7.3
- **Objectives**
  1. Operate the transponder (1200, ALT, IDENT).
  2. Request VFR flight following and understand what it provides.
- **Outline**
  1. Transponder modes and codes (1200, 7500/7600/7700).
  2. Flight following request script (NorCal Approach).
  3. MSFS ATC flight following behaviour (⚠ verify).
- **Knowledge check**
  1. VFR squawk code? → **1200.**
  2. Lost communications squawk? → **7600.**
- **Go deeper**: `aim-4-1`.

### Module 8 — Capstone

#### L8.1 — Decision making and personal minimums (P0)

- **Est.** 15 min · **Prereqs** Module 7
- **Objectives**
  1. Use PAVE and IMSAFE checklists.
  2. Set personal minimums for wind and visibility for your sim flying.
- **Outline**
  1. Aeronautical decision making (ADM) and hazardous attitudes (brief).
  2. PAVE: Pilot, Aircraft, enVironment, External pressures.
  3. IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, Emotion (Eating).
  4. Personal minimums worksheet (interactive form, saved to profile — P1).
  5. Why this matters even in a sim: habits.
- **Knowledge check**
  1. What does the "E" in PAVE stand for? → **enVironment.**
- **Go deeper**: `faa-risk-management-handbook`, `phak-ch2`.

#### L8.2 — Preparing for your checkride (P0)

- **Est.** 10 min · **Prereqs** L8.1 · **Challenges** C8.1, C8.2
- **Objectives**
  1. Know what the capstone challenges assess and how they are scored.
  2. Prepare a nav log and briefing for C8.2.
- **Outline**
  1. What a real checkride is (oral + flight) — short, honest description.
  2. How our capstones mirror it (Section 15, C8.1/C8.2).
  3. Preparation checklist: re-fly weak challenges, prepare nav log, set sim.
  4. After the course: next steps (VATSIM, real discovery flight, post-v1 aircraft).
- **Knowledge check**
  1. What must you prepare before C8.2? → **A nav log and briefing.**
- **Go deeper**: `faa-acs-private`.

---

## 15. Challenge specifications (every v1 challenge)

### 15.1 Shared conventions for all challenges

**Challenge types** (used for filtering and icons):
`setup` · `procedure` · `manoeuvre` · `pattern` · `landing` · `emergency` · `navigation` ·
`communication` · `capstone`.

**Difficulty:** 1–5 dots (●○○○○ to ●●●●●).

**Standard start states** (referenced by name in each challenge):

| Name           | Meaning in MSFS 2024                                                                                                                                                                                                                                                                                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `COLD_DARK`    | At a parking spot, all systems off (choose cold-and-dark start in the flight setup; ⚠ verify the menu option name).                                                                                                                                                                                                                                               |
| `RAMP_RUNNING` | At a parking spot, engine running, avionics on.                                                                                                                                                                                                                                                                                                                   |
| `RUNWAY`       | Lined up on the named runway, engine running, ready for takeoff.                                                                                                                                                                                                                                                                                                  |
| `AIR_START`    | In flight at a specified position, altitude, heading and speed. **⚠ Verify the MSFS 2024 method** (e.g. choosing an in-flight starting point on the world map, or a flight plan with a cruise start). **Fallback:** start on `RUNWAY` at KLVK and fly to the start point; the brief then includes a "getting there" step and the timer starts at the start point. |

**Standard weather presets** (so briefs stay short):

| Name           | Settings                                                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `WX_CALM`      | Clear skies, wind calm, visibility unlimited (≥ 10 sm), 15 °C at sea level, altimeter 29.92 inHg.                                        |
| `WX_LIGHT_W`   | Clear skies, surface wind 250° at 8 kt, winds aloft 270° at 15 kt (3,000 ft) and 280° at 20 kt (6,000 ft), 18 °C, altimeter 30.00.       |
| `WX_XWIND_10`  | Clear skies, surface wind 200° at 10 kt (≈ 50° to runway 25 → ~8 kt crosswind at KLVK; ⚠ verify runway heading), 18 °C, altimeter 30.00. |
| `WX_XWIND_15G` | Clear skies, surface wind 200° at 12 kt gusting 18, 18 °C, altimeter 30.00.                                                              |
| `WX_SCATTERED` | Scattered clouds at 5,500 ft, wind 270° at 10 kt, visibility 10 sm, altimeter 30.02.                                                     |

**Standard loadout:** `LOAD_SOLO` = pilot 170 lb, no passengers, 75% fuel (~40 gal).
`LOAD_FULL` = pilot 170 lb + passenger 170 lb + 20 lb baggage, 100% fuel (P1 only).

**Standard time:** 10:00 local, a date in late spring (e.g. 15 May) for good daylight.

**Default flags unless stated:** AI traffic **off**, sim ATC **off**, Training assistance
profile (Section 9.3), crash damage **on** from Module 4 onward.

**"Pause and brief" rule:** every challenge starts with the learner reading the brief with
the sim paused. The timer (optional) starts when they unpause.

**Honesty rule:** the debrief form reminds learners that scores are self-assessed and the
only person they can cheat is themselves. Encourage using a flight recorder/replay or the
sim's instant replay (⚠ verify availability) to check criteria.

### 15.2 Rubric and scoring algorithm

Each challenge has 3–8 **criteria**. Each criterion is either:

- **Tiered** — learner picks the best tier they achieved: Gold (3 pts), Silver (2 pts),
  Bronze (1 pt), Not met (0 pts). Each tier has an explicit, measurable description
  (e.g. "Altitude within ±100 ft").
- **Binary** — Met (3 pts) or Not met (0 pts). Used for procedural items ("Completed the
  before-takeoff checklist").

Each criterion has a **weight** (1–3) and a **required** flag.

Scoring:

```
points      = Σ (criterionPoints × weight)
maxPoints   = Σ (3 × weight)
percentage  = round(100 × points / maxPoints)

passed      = every required criterion ≥ Bronze (or Met)
tier        =
  "gold"    if passed and percentage ≥ 90 and every required criterion ≥ Silver
  "silver"  if passed and percentage ≥ 70
  "bronze"  if passed
  "none"    otherwise
```

- The **best** attempt (highest tier, then highest percentage, then most recent) is shown
  as the challenge's status.
- The scoring function lives in `shared/scoring.ts` so the client can preview the result
  live and the server recomputes it authoritatively (never trust the client's score).
- Unit tests cover every branch (Section 35).

### 15.3 How to read the specs below

Each spec lists: meta line, **Goal**, **Setup**, **Procedure** (what the learner does),
**Criteria** (the rubric), **Common mistakes**, **Tips**, and **Debrief questions**.
Tolerances follow Section 12.9 unless the criterion says otherwise.

### Module 0 challenges

#### C0.1 — First flight over Livermore (P0)

- **Type** setup · **Difficulty** ●○○○○ · **Est.** 20 min · **Lessons** L0.3
- **Goal:** Take off, fly a relaxed loop around the Livermore valley, and experience how
  the Skyhawk responds. This challenge passes on completion.
- **Setup:** C172 G1000 · KLVK · `RUNWAY` 25R (⚠ verify) · `WX_CALM` · `LOAD_SOLO` ·
  10:00 · auto-rudder on (everyone) · crash damage off.
- **Procedure**
  1. Unpause. Full throttle smoothly. Keep the nose on the centreline with small rudder
     inputs.
  2. At 55 KIAS, gently raise the nose; climb at about 75 KIAS.
  3. Climb to 3,000 ft MSL. Lower the nose to level, reduce power to about 2,300 RPM.
  4. Make a gentle left turn (about 15–20° bank) toward Lake Del Valle, then a right turn
     toward Mt Diablo.
  5. Fly anywhere you like for 5–10 minutes. Try a small climb and descent.
  6. End the flight (return to menu) or try a landing back at KLVK.
- **Criteria**

| #   | Criterion                                                 | Kind   | Required | Weight |
| --- | --------------------------------------------------------- | ------ | -------- | ------ |
| 1   | Took off and reached 3,000 ft                             | Binary | Yes      | 1      |
| 2   | Made at least one left and one right turn                 | Binary | Yes      | 1      |
| 3   | Found Mt Diablo and Lake Del Valle                        | Binary | No       | 1      |
| 4   | Used pause at least once to look around or read the brief | Binary | No       | 1      |

- **Common mistakes:** big stick movements; forgetting to reduce power when level (speed
  keeps increasing).
- **Tips:** hold the controls lightly; look outside more than inside.
- **Debrief questions:** What surprised you? What felt hardest? On a scale of 1–5, how
  confident do you feel?

### Module 1 challenges

#### C1.1 — Cockpit scavenger hunt (P0)

- **Type** procedure · **Difficulty** ●○○○○ · **Est.** 15 min · **Lessons** L1.1–L1.4
- **Goal:** Find and operate every essential control and instrument without searching.
- **Setup:** C172 G1000 · KLVK · `COLD_DARK` at the main ramp · `WX_CALM` · `LOAD_SOLO` ·
  tooltips on.
- **Procedure:** The brief shows a checklist of 16 items. For each, find it, operate it
  (where safe) and tick it on the page (the page records ticks as part of the attempt):
  1. Master switch (BAT and ALT)
  2. Avionics master
  3. Fuel selector — set to BOTH
  4. Mixture — find it (don't move to rich yet)
  5. Throttle
  6. Ignition/magneto switch positions
  7. Flap switch — cycle with master on and watch the indicator
  8. Elevator trim — move and find the trim indicator
  9. Parking brake
  10. PFD airspeed tape and the V-speed colour bands (with power on)
  11. Altimeter setting (BARO) — set 29.92
  12. Heading bug and HDG knob
  13. COM1 frequency — tune 123.45 in standby (any valid frequency) and flip it active
  14. Transponder — find 1200 and the ALT mode
  15. EIS fuel quantity and fuel flow indications
  16. Standby instruments and the magnetic compass
- **Criteria**

| #   | Criterion                                         | Kind   | Gold    | Silver   | Bronze   | Req | W   |
| --- | ------------------------------------------------- | ------ | ------- | -------- | -------- | --- | --- |
| 1   | Items found and operated                          | Tiered | 16/16   | 14–15    | 12–13    | Yes | 3   |
| 2   | Time taken                                        | Tiered | ≤ 8 min | ≤ 12 min | ≤ 20 min | No  | 1   |
| 3   | Returned all switches to cold-and-dark at the end | Binary | —       | —        | —        | Yes | 1   |

- **Common mistakes:** confusing avionics master with master; moving the mixture out of
  cut-off (this may start fuel flow on some sim setups — harmless on the ground).
- **Tips:** zoom the camera toward each area; use tooltips.
- **Debrief questions:** Which three items were hardest to find? Write one sentence on what
  each does.

### Module 2 challenges

#### C2.1 — Straight and level (P0)

- **Type** manoeuvre · **Difficulty** ●○○○○ · **Est.** 15 min · **Lessons** L2.2
- **Goal:** Hold altitude and heading for three minutes, hands-light, trimmed.
- **Setup:** `AIR_START` 3,500 ft MSL, heading 090, 100 KIAS, 5 nm east of KLVK (over the
  valley toward Altamont Pass) · `WX_CALM` · `LOAD_SOLO`.
  Fallback: `RUNWAY` KLVK, climb east to 3,500 ft.
- **Procedure**
  1. Set ~2,300 RPM. Put the horizon in the cruise position on the glare shield.
  2. Trim until the airplane holds altitude with little or no stick pressure.
  3. Pick a landmark on the horizon at heading 090 (e.g. the Altamont Pass wind farms).
  4. Hold 3,500 ft and heading 090 for three minutes (use the sim clock or a phone timer).
  5. Then turn to heading 270 (gentle turn), re-trim and hold for another two minutes.
- **Criteria**

| #   | Criterion                                                        | Kind   | Gold    | Silver  | Bronze  | Req | W   |
| --- | ---------------------------------------------------------------- | ------ | ------- | ------- | ------- | --- | --- |
| 1   | Altitude held                                                    | Tiered | ±100 ft | ±150 ft | ±200 ft | Yes | 3   |
| 2   | Heading held                                                     | Tiered | ±10°    | ±15°    | ±20°    | Yes | 2   |
| 3   | Airspeed stable                                                  | Tiered | ±10 kt  | ±15 kt  | ±20 kt  | No  | 1   |
| 4   | Flew hands-off for 30 s after trimming (altitude within ±100 ft) | Binary |         |         |         | No  | 2   |
| 5   | Looked outside for traffic at least every 30 s                   | Binary |         |         |         | No  | 1   |

- **Common mistakes:** chasing the VSI; forgetting power after levelling; staring at the PFD.
- **Tips:** if you're constantly pushing, trim nose down; small corrections, then wait
  three seconds.
- **Debrief questions:** Where did you look most? What made altitude wander?

#### C2.2 — Climbs and descents (P0)

- **Type** manoeuvre · **Difficulty** ●●○○○ · **Est.** 20 min · **Lessons** L2.3
- **Goal:** Climb at Vy and descend at a target speed, levelling off precisely.
- **Setup:** `AIR_START` 3,000 ft MSL, heading 090, 100 KIAS near KLVK · `WX_CALM` ·
  `LOAD_SOLO`.
- **Procedure**
  1. Clearing turn. Climb at 74 KIAS (full power) to 4,500 ft. Level off (lead 10%).
  2. Stabilise, trim. Hold 4,500 ft for 30 s.
  3. Descend at 90 KIAS with ~1,700–2,000 RPM to 3,000 ft. Level off.
  4. Climb at cruise climb (80 KIAS) to 4,000 ft. Level off.
- **Criteria**

| #   | Criterion                            | Kind   | Gold   | Silver  | Bronze  | Req | W   |
| --- | ------------------------------------ | ------ | ------ | ------- | ------- | --- | --- |
| 1   | Climb airspeed held (74 / 80)        | Tiered | ±5 kt  | ±10 kt  | ±15 kt  | Yes | 3   |
| 2   | Descent airspeed held (90)           | Tiered | ±5 kt  | ±10 kt  | ±15 kt  | Yes | 2   |
| 3   | Level-off overshoot/undershoot       | Tiered | ≤50 ft | ≤100 ft | ≤150 ft | Yes | 3   |
| 4   | Heading held during climbs/descents  | Tiered | ±10°   | ±15°    | ±20°    | No  | 1   |
| 5   | Clearing turn before the first climb | Binary |        |         |         | No  | 1   |

- **Common mistakes:** leaving climb power on after level-off (overspeeding); levelling off
  late.
- **Tips:** say "Attitude, Power, Trim" out loud.
- **Debrief questions:** Which level-off was hardest and why?

#### C2.3 — Turns to headings (P0)

- **Type** manoeuvre · **Difficulty** ●●○○○ · **Est.** 15 min · **Lessons** L2.4
- **Goal:** Fly coordinated turns to exact headings at constant altitude.
- **Setup:** `AIR_START` 3,500 ft MSL, heading 360, 100 KIAS near KLVK · `WX_CALM` · `LOAD_SOLO`.
- **Procedure**
  1. Standard-rate left turn to 270. 2. Standard-rate right turn to 360.
  2. 30° bank right turn to 180. 4. 30° bank left turn to 090.
     Clear before each turn; hold 3,500 ft throughout.
- **Criteria**

| #   | Criterion                                      | Kind   | Gold           | Silver           | Bronze              | Req | W   |
| --- | ---------------------------------------------- | ------ | -------------- | ---------------- | ------------------- | --- | --- |
| 1   | Rollout heading accuracy                       | Tiered | ±10°           | ±15°             | ±20°                | Yes | 3   |
| 2   | Altitude during turns                          | Tiered | ±100 ft        | ±150 ft          | ±200 ft             | Yes | 3   |
| 3   | Bank angle accuracy                            | Tiered | ±5°            | ±10°             | ±15°                | No  | 2   |
| 4   | Coordination (ball/trapezoid centred)          | Tiered | mostly centred | occasional slips | often uncoordinated | No  | 1   |
| 5   | Looked in the direction of turn before turning | Binary |                |                  |                     | No  | 1   |

- **Common mistakes:** losing altitude in turns (not enough back pressure); overshooting
  headings.
- **Tips:** rollout lead = half the bank angle.
- **Debrief questions:** Did you lose or gain altitude in turns? Why?

#### C2.4 — The box (P0)

- **Type** manoeuvre · **Difficulty** ●●●○○ · **Est.** 20 min · **Lessons** L2.2–L2.4
- **Goal:** Combine climbs, descents and turns in a timed "box" pattern.
- **Setup:** `AIR_START` 3,000 ft MSL, heading 090, 100 KIAS · `WX_LIGHT_W` · `LOAD_SOLO`.
- **Procedure:** Fly four legs of 2 minutes each:
  1. Heading 090, climb to 3,500 ft at 80 KIAS then level.
  2. Standard-rate left turn to 360, level 3,500 ft.
  3. Standard-rate left turn to 270, descend to 3,000 ft at 90 KIAS then level.
  4. Standard-rate left turn to 180, level 3,000 ft; then turn to 090 to close the box.
- **Criteria**

| #   | Criterion                 | Kind   | Gold    | Silver  | Bronze  | Req | W   |
| --- | ------------------------- | ------ | ------- | ------- | ------- | --- | --- |
| 1   | Target altitudes held     | Tiered | ±100 ft | ±150 ft | ±200 ft | Yes | 3   |
| 2   | Headings held/rolled out  | Tiered | ±10°    | ±15°    | ±20°    | Yes | 2   |
| 3   | Climb/descent airspeeds   | Tiered | ±5 kt   | ±10 kt  | ±15 kt  | Yes | 2   |
| 4   | Leg timing                | Tiered | ±10 s   | ±20 s   | ±30 s   | No  | 1   |
| 5   | Trimmed after each change | Binary |         |         |         | No  | 1   |

- **Common mistakes:** doing too many things at once; forgetting to trim.
- **Tips:** plan the next leg while stable; use pause at the end of each leg if needed
  (allowed for Bronze/Silver, not Gold — the debrief asks).
- **Debrief questions:** Did you pause? Which leg felt busiest?

### Module 3 challenges

#### C3.1 — Cold and dark to running (P0)

- **Type** procedure · **Difficulty** ●●○○○ · **Est.** 15 min · **Lessons** L3.1
- **Goal:** Start the engine from cold and dark using checklists, with no assistance.
- **Setup:** KLVK · `COLD_DARK` main ramp · `WX_CALM` · `LOAD_SOLO` · checklist assistance off.
- **Procedure:** Use the Learn-To-Fly checklist runner (W16) on a second screen or the
  in-sim checklist. Complete "Before starting engine" and "Starting engine", then
  "After start".
- **Criteria**

| #   | Criterion                                     | Kind   | Gold      | Silver      | Bronze      | Req | W   |
| --- | --------------------------------------------- | ------ | --------- | ----------- | ----------- | --- | --- |
| 1   | Engine started and running at ~1,000 RPM      | Binary |           |             |             | Yes | 3   |
| 2   | Checklist followed in order, no items skipped | Tiered | 0 skipped | 1–2 skipped | 3–4 skipped | Yes | 3   |
| 3   | Avionics master OFF during start              | Binary |           |             |             | Yes | 2   |
| 4   | Said "CLEAR!" before start                    | Binary |           |             |             | No  | 1   |
| 5   | Oil pressure checked within 30 s              | Binary |           |             |             | Yes | 2   |
| 6   | Time from cold-dark to running                | Tiered | ≤ 5 min   | ≤ 8 min     | ≤ 12 min    | No  | 1   |

- **Common mistakes:** fuel selector not on BOTH; mixture in cut-off; holding the key too long.
- **Tips:** do a "flow" left-to-right, then verify with the checklist.
- **Debrief questions:** Which item did you almost miss?

#### C3.2 — Taxi to the runway at KLVK (P0)

- **Type** procedure · **Difficulty** ●●○○○ · **Est.** 15 min · **Lessons** L3.2
- **Goal:** Taxi from the ramp to the run-up area for runway 25R using the airport diagram,
  without the taxi ribbon.
- **Setup:** KLVK · `RAMP_RUNNING` main ramp · `WX_LIGHT_W` · taxi ribbon off · ATC off.
- **Procedure**
  1. Open the KLVK airport diagram (FAA d-TPP link in the brief). Plan the route (the
     brief gives the expected taxiway sequence, ⚠ verify against current diagram and sim).
  2. Release the parking brake. Taxi at walking pace; hold the correct control position for
     the wind.
  3. Stop at the run-up area short of the hold short line for 25R.
- **Criteria**

| #   | Criterion                         | Kind   | Gold                     | Silver           | Bronze                  | Req | W   |
| --- | --------------------------------- | ------ | ------------------------ | ---------------- | ----------------------- | --- | --- |
| 1   | Correct route, no wrong turns     | Tiered | 0 wrong turns            | 1                | 2                       | Yes | 3   |
| 2   | Taxi speed                        | Tiered | ≤ 10 kt GS, ≤ 5 in turns | ≤ 15 kt          | ≤ 20 kt                 | Yes | 2   |
| 3   | Stayed on centreline              | Tiered | always                   | minor deviations | left pavement edge line | No  | 1   |
| 4   | Did not cross any hold short line | Binary |                          |                  |                         | Yes | 3   |
| 5   | Correct wind control position     | Binary |                          |                  |                         | No  | 1   |

- **Common mistakes:** riding brakes; turning too fast; crossing the hold short line.
- **Tips:** stop and look at the diagram whenever unsure — stopping is always OK.
- **Debrief questions:** How did you know where you were on the airport?

#### C3.3 — Run-up (P0)

- **Type** procedure · **Difficulty** ●●○○○ · **Est.** 10 min · **Lessons** L3.3
- **Goal:** Complete a full run-up and before-takeoff checklist and give a takeoff brief
  out loud.
- **Setup:** KLVK · `RAMP_RUNNING` positioned at the run-up area (or continue from C3.2) ·
  `WX_LIGHT_W`.
- **Procedure:** Parking brake set, run-up to the checklist RPM, mag check, instruments,
  controls, trim, flaps, fuel, transponder, lights; speak the takeoff briefing.
- **Criteria**

| #   | Criterion                                              | Kind   | Gold | Silver   | Bronze   | Req | W   |
| --- | ------------------------------------------------------ | ------ | ---- | -------- | -------- | --- | --- |
| 1   | Parking brake set before run-up                        | Binary |      |          |          | Yes | 2   |
| 2   | Magneto check done correctly (each mag, back to BOTH)  | Binary |      |          |          | Yes | 3   |
| 3   | All before-takeoff items completed                     | Tiered | all  | 1 missed | 2 missed | Yes | 3   |
| 4   | Trim set for takeoff                                   | Binary |      |          |          | Yes | 2   |
| 5   | Takeoff briefing spoken, including engine failure plan | Binary |      |          |          | No  | 2   |

- **Common mistakes:** leaving mags on L or R; trim left in a random position.
- **Debrief questions:** What would you do if the engine failed at 300 ft?

#### C3.4 — After landing and shutdown (P0)

- **Type** procedure · **Difficulty** ●○○○○ · **Est.** 10 min · **Lessons** L3.3
- **Goal:** Clear the runway, run the after-landing checklist, taxi to parking and shut down.
- **Setup:** KLVK · `WX_CALM` · `LOAD_SOLO`. The sim cannot start you "just after
  landing", so the brief offers two options: (a) start `RUNWAY` 25R, take off, fly a quick
  unscored pattern and land; or (b) fly this immediately after finishing C4.3.
- **Procedure:** Exit at a taxiway, cross the hold line, stop, flaps up, transponder
  standby (⚠ verify G1000 modes), lights as required, taxi to parking, shutdown checklist.
- **Criteria**

| #   | Criterion                                               | Kind   | Gold | Silver   | Bronze   | Req | W   |
| --- | ------------------------------------------------------- | ------ | ---- | -------- | -------- | --- | --- |
| 1   | Cleared the runway completely before stopping           | Binary |      |          |          | Yes | 3   |
| 2   | After-landing items completed                           | Tiered | all  | 1 missed | 2 missed | Yes | 2   |
| 3   | Shutdown via mixture cut-off (not magnetos)             | Binary |      |          |          | Yes | 2   |
| 4   | Final switches: mags off, master off, parking brake set | Binary |      |          |          | Yes | 2   |

- **Debrief questions:** Why stop only after the whole airplane crosses the hold short line?

### Module 4 challenges

#### C4.1 — Normal takeoff and departure (P0)

- **Type** manoeuvre · **Difficulty** ●●○○○ · **Est.** 15 min · **Lessons** L4.1
- **Goal:** Take off on the centreline, rotate at 55, climb at Vy and depart the pattern.
- **Setup:** KLVK · `RUNWAY` 25R · `WX_LIGHT_W` · `LOAD_SOLO` · crash damage on.
- **Procedure**
  1. Before-takeoff checklist complete (quick re-check).
  2. Full power smoothly; "airspeed alive"; engine gauges green.
  3. Rotate at 55 KIAS; climb at 74 KIAS; right rudder as needed.
  4. Climb straight out to pattern altitude (⚠ verify KLVK pattern altitude), then a 45°
     left turn for departure, continuing the climb to 3,000 ft at 80 KIAS.
- **Criteria**

| #   | Criterion                                             | Kind   | Gold              | Silver            | Bronze           | Req | W   |
| --- | ----------------------------------------------------- | ------ | ----------------- | ----------------- | ---------------- | --- | --- |
| 1   | Centreline tracking on the takeoff roll               | Tiered | within ½ wingspan | within 1 wingspan | stayed on runway | Yes | 3   |
| 2   | Rotation speed                                        | Tiered | 55 ±3             | ±5                | ±10              | Yes | 2   |
| 3   | Climb airspeed (Vy)                                   | Tiered | 74 ±5             | ±10               | ±15              | Yes | 3   |
| 4   | Runway heading held on initial climb (wind corrected) | Tiered | ±5°               | ±10°              | ±15°             | No  | 1   |
| 5   | Departure turn at the correct altitude/point          | Binary |                   |                   |                  | No  | 1   |
| 6   | Callouts spoken ("airspeed alive", "55 rotate")       | Binary |                   |                   |                  | No  | 1   |

- **Common mistakes:** yanking the nose up; left drift; forgetting to trim in the climb.
- **Debrief questions:** Where was the nose pointing at rotation? Did you need right rudder?

#### C4.2 — Fly the pattern (P0)

- **Type** pattern · **Difficulty** ●●●○○ · **Est.** 20 min · **Lessons** L4.2
- **Goal:** Fly a complete rectangular pattern at KTCY with correct altitudes, speeds and
  configuration, ending in a **low approach** (no landing required).
- **Setup:** KTCY (non-towered) · `RUNWAY` 26 (⚠ verify active runway for wind) ·
  `WX_LIGHT_W` · `LOAD_SOLO`.
- **Procedure**
  1. Take off, climb on upwind to ~300 ft below pattern altitude, turn crosswind.
  2. Level at pattern altitude on downwind, ~2,000–2,100 RPM, 85–90 KIAS, before-landing
     checklist.
  3. Abeam the numbers: power ~1,500 RPM, flaps 10, 80 KIAS, begin descent.
  4. Base: flaps 20, 70 KIAS. Final: flaps 30, 65 KIAS, stabilised by 300 ft AGL.
  5. At ~100 ft AGL over the runway: go around (low approach) — full power, flaps 20, climb.
- **Criteria**

| #   | Criterion                                         | Kind   | Gold           | Silver              | Bronze                    | Req | W   |
| --- | ------------------------------------------------- | ------ | -------------- | ------------------- | ------------------------- | --- | --- |
| 1   | Pattern altitude on downwind                      | Tiered | ±100 ft        | ±150 ft             | ±200 ft                   | Yes | 3   |
| 2   | Downwind spacing (runway ~½–1 nm off the wingtip) | Tiered | good           | slightly wide/tight | very wide/tight           | No  | 2   |
| 3   | Configuration and speed per leg (Section 8.5)     | Tiered | all legs ±5 kt | ±10 kt              | ±15 kt                    | Yes | 3   |
| 4   | Final approach stabilised by 300 ft AGL           | Binary |                |                     |                           | Yes | 3   |
| 5   | Lined up with centreline on final (no S-turns)    | Tiered | no overshoot   | small overshoot     | large overshoot corrected | No  | 2   |
| 6   | Before-landing checklist on downwind              | Binary |                |                     |                           | No  | 1   |

- **Common mistakes:** downwind too close; turning base too late; overshooting final.
- **Tips:** use ground references (roads, fields) for turns.
- **Debrief questions:** Where did you turn base? Would you change it next time?

#### C4.3 — Full-stop landing (P0)

- **Type** landing · **Difficulty** ●●●○○ · **Est.** 20 min · **Lessons** L4.3
- **Goal:** Fly a pattern and land in the first third of the runway, on the centreline,
  without bouncing.
- **Setup:** KLVK · `RUNWAY` 25R · `WX_CALM` · `LOAD_SOLO` · tower ATC off (practice mode).
  P1 alternative: `AIR_START` on a 45° entry to left downwind 25R at pattern altitude.
- **Procedure:** Take off, fly the left pattern for 25R, land, stop on the runway
  (or exit), then complete C3.4 if desired.
- **Criteria**

| #   | Criterion                                                      | Kind   | Gold                              | Silver                      | Bronze                    | Req | W   |
| --- | -------------------------------------------------------------- | ------ | --------------------------------- | --------------------------- | ------------------------- | --- | --- |
| 1   | Stabilised by 300 ft AGL (speed, path, centreline, configured) | Binary |                                   |                             |                           | Yes | 3   |
| 2   | Final approach speed                                           | Tiered | 65 −5/+10                         | ±10                         | ±15                       | Yes | 3   |
| 3   | Touchdown point                                                | Tiered | within 400 ft beyond aiming point | within first third          | on runway, stopped safely | Yes | 3   |
| 4   | Touchdown on centreline                                        | Tiered | within ½ wingspan                 | within 1 wingspan           | on runway                 | Yes | 2   |
| 5   | No bounce; mains first                                         | Tiered | smooth                            | one small bounce, corrected | bounced but safe          | Yes | 2   |
| 6   | Directional control on rollout                                 | Binary |                                   |                             |                           | No  | 1   |

- **Common mistakes:** fast final → float; flaring too high; pushing forward after a bounce.
- **Tips:** if not stabilised, go around — it counts as a successful decision, not a fail
  (you can re-fly and still pass).
- **Debrief questions:** Where were your eyes in the flare? What was your speed crossing
  the threshold?

#### C4.4 — Go-around (P0)

- **Type** landing · **Difficulty** ●●●○○ · **Est.** 15 min · **Lessons** L4.4
- **Goal:** Execute a go-around from short final and re-enter the pattern.
- **Setup:** KLVK · `RUNWAY` 25R · `WX_CALM` · `LOAD_SOLO`. P1 option: have AI traffic on
  so a plane may be on the runway.
- **Procedure:** Fly the pattern. On short final at ~200 ft AGL, go around (as if the runway
  is blocked): full power, pitch for climb, flaps 20, positive rate, flaps 10, then 0 at
  a safe altitude/speed, side-step right of the runway, re-join crosswind, fly a second
  pattern and land.
- **Criteria**

| #   | Criterion                                                                   | Kind   | Gold    | Silver                | Bronze                 | Req | W   |
| --- | --------------------------------------------------------------------------- | ------ | ------- | --------------------- | ---------------------- | --- | --- |
| 1   | Go-around initiated immediately at the decision point                       | Binary |         |                       |                        | Yes | 2   |
| 2   | Sequence correct (power → attitude → flaps 20 → climb → flaps up in stages) | Tiered | perfect | one item out of order | two items out of order | Yes | 3   |
| 3   | Airspeed never below 55 KIAS during the go-around                           | Binary |         |                       |                        | Yes | 3   |
| 4   | Positive climb within 5 s                                                   | Binary |         |                       |                        | No  | 1   |
| 5   | Second approach and landing to C4.3 Bronze or better                        | Binary |         |                       |                        | No  | 2   |

- **Common mistakes:** retracting all flaps at once; pitching too high (stall horn).
- **Debrief questions:** How much altitude did you lose before climbing?

#### C4.5 — Crosswind landing (P1)

- **Type** landing · **Difficulty** ●●●●○ · **Est.** 25 min · **Lessons** L4.5
- **Goal:** Land with a ~8–10 kt crosswind, touching down upwind wheel first on the
  centreline without side-load.
- **Setup:** KLVK · `RUNWAY` 25R · `WX_XWIND_10` · auto-rudder **off** recommended (note in
  brief for gamepad users).
- **Criteria**

| #   | Criterion                                          | Kind   | Gold        | Silver      | Bronze              | Req | W   |
| --- | -------------------------------------------------- | ------ | ----------- | ----------- | ------------------- | --- | --- |
| 1   | Crosswind component calculated before flight (W13) | Binary |             |             |                     | No  | 1   |
| 2   | Tracked extended centreline on final               | Tiered | ±½ wingspan | ±1 wingspan | ±2 wingspans        | Yes | 3   |
| 3   | No drift at touchdown; longitudinal axis aligned   | Tiered | none        | slight      | noticeable but safe | Yes | 3   |
| 4   | Upwind wheel first                                 | Binary |             |             |                     | No  | 2   |
| 5   | Aileron into wind on rollout                       | Binary |             |             |                     | No  | 1   |

- **Debrief questions:** Which technique did you use: crab-then-kick, wing-low, or a mix?

#### C4.6 — Short field at Palo Alto (P1)

- **Type** landing · **Difficulty** ●●●●○ · **Est.** 25 min · **Lessons** L4.6
- **Goal:** Land on KPAO's ~2,400-ft runway using short-field technique, touching down
  within 200 ft of the aiming point, then take off using short-field technique.
- **Setup:** `AIR_START` at 1,000 ft MSL over the bay, 5 nm south-east of KPAO, heading
  toward the airport to join the downwind (KPAO sits under the SFO Class B, so stay low;
  ⚠ verify the pattern side for the active runway) · `WX_CALM` · `LOAD_SOLO`.
- **Criteria**

| #   | Criterion                                                                           | Kind   | Gold     | Silver   | Bronze            | Req | W   |
| --- | ----------------------------------------------------------------------------------- | ------ | -------- | -------- | ----------------- | --- | --- |
| 1   | Short-field approach speed                                                          | Tiered | 61 −0/+5 | ±5       | ±10               | Yes | 3   |
| 2   | Touchdown within X ft of aiming point                                               | Tiered | 0–200 ft | 0–400 ft | stopped on runway | Yes | 3   |
| 3   | Short-field takeoff: flaps 10, brakes held, full power, lift-off and obstacle speed | Tiered | all      | 1 error  | 2 errors          | Yes | 2   |
| 4   | Remained below Class B floor                                                        | Binary |          |          |                   | Yes | 3   |

- **Debrief questions:** How much runway remained when you stopped?

#### C4.7 — Three-circuit session (P0)

- **Type** pattern · **Difficulty** ●●●○○ · **Est.** 30 min · **Lessons** L4.2–L4.4
- **Goal:** Fly three consecutive patterns (touch-and-go, touch-and-go, full stop) with
  consistent quality.
- **Setup:** KTCY · `RUNWAY` 26 · `WX_LIGHT_W` · `LOAD_SOLO` · AI traffic off.
- **Procedure:** For each touch-and-go: after touchdown, flaps up, carb heat N/A, full power,
  take off again. (⚠ Some instructors prefer full-stop taxi-backs; explain both.)
- **Criteria**

| #   | Criterion                                   | Kind   | Gold    | Silver       | Bronze                   | Req | W   |
| --- | ------------------------------------------- | ------ | ------- | ------------ | ------------------------ | --- | --- |
| 1   | Pattern altitude on each downwind           | Tiered | ±100 ft | ±150 ft      | ±200 ft                  | Yes | 2   |
| 2   | Stabilised on each final                    | Tiered | 3/3     | 2/3          | 1/3 (others went around) | Yes | 3   |
| 3   | Landing quality (C4.3 criteria 3–5) on each | Tiered | 3 Gold  | all ≥ Silver | all ≥ Bronze             | Yes | 3   |
| 4   | Touch-and-go sequence correct               | Binary |         |              |                          | No  | 2   |

- **Debrief questions:** Which circuit was best, and what was different?

### Module 5 challenges

All Module 5 manoeuvres are flown at **3,000 ft AGL or higher** with a clearing turn first.

#### C5.1 — Slow flight (P0)

- **Type** manoeuvre · **Difficulty** ●●●○○ · **Est.** 15 min · **Lessons** L5.1
- **Goal:** Maintain slow flight (~50–55 KIAS, full flaps) at a constant altitude and make
  gentle turns, then recover.
- **Setup:** `AIR_START` 4,000 ft MSL, heading 090, 100 KIAS east of KLVK over open valley ·
  `WX_CALM` · `LOAD_SOLO`.
- **Procedure:** Clearing turns → reduce to ~1,500 RPM → hold altitude, flaps 10/20/30 below
  Vfe → establish ~55 KIAS with power ~1,900–2,100 (⚠ verify) → straight 30 s → 90° turns
  left and right at ≤ 15° bank → recover.
- **Criteria**

| #   | Criterion                                                         | Kind   | Gold             | Silver      | Bronze                | Req | W   |
| --- | ----------------------------------------------------------------- | ------ | ---------------- | ----------- | --------------------- | --- | --- |
| 1   | Altitude                                                          | Tiered | ±100 ft          | ±150 ft     | ±200 ft               | Yes | 3   |
| 2   | Airspeed                                                          | Tiered | +10/−0 of target | ±10         | ±15                   | Yes | 3   |
| 3   | No stall warning (horn) during slow flight                        | Tiered | none             | brief chirp | repeated but no stall | No  | 2   |
| 4   | Heading/turn accuracy                                             | Tiered | ±10°             | ±15°        | ±20°                  | No  | 1   |
| 5   | Recovery: power first, flaps in stages, no altitude loss > 100 ft | Binary |                  |             |                       | Yes | 2   |

- **Debrief questions:** What did the controls feel like at 55 kt?

#### C5.2 — Power-off stall (P0)

- **Type** manoeuvre · **Difficulty** ●●●○○ · **Est.** 15 min · **Lessons** L5.2
- **Goal:** Recognise and recover from an approach-configuration stall with minimum
  altitude loss.
- **Setup:** `AIR_START` 4,000 ft MSL, heading 090, 100 KIAS · `WX_CALM` · `LOAD_SOLO`.
- **Procedure:** Clearing turn → configure as for final (flaps 30, ~65 KIAS, descending) →
  reduce to idle → smoothly raise the nose to hold altitude until the stall → recover when
  the stall occurs (the ACS lets the examiner ask for recovery either at the first
  indication or at the full stall; ⚠ verify the current wording and state in the brief
  which one this challenge uses) → nose down to reduce AoA, wings level, full power,
  flaps 20, climb, flaps up in stages.
- **Criteria**

| #   | Criterion                                   | Kind   | Gold     | Silver   | Bronze   | Req | W   |
| --- | ------------------------------------------- | ------ | -------- | -------- | -------- | --- | --- |
| 1   | Recognised the stall promptly               | Binary |          |          |          | Yes | 2   |
| 2   | First action was reducing AoA               | Binary |          |          |          | Yes | 3   |
| 3   | Wings level, heading ±10° during recovery   | Tiered | ±10°     | ±20°     | ±30°     | No  | 2   |
| 4   | Altitude lost                               | Tiered | ≤ 200 ft | ≤ 300 ft | ≤ 500 ft | No  | 2   |
| 5   | No secondary stall                          | Binary |          |          |          | Yes | 3   |
| 6   | Flaps retracted in stages (not all at once) | Binary |          |          |          | No  | 1   |

- **Debrief questions:** What was the first cue you noticed?

#### C5.3 — Power-on stall (P0)

- **Type** manoeuvre · **Difficulty** ●●●●○ · **Est.** 15 min · **Lessons** L5.2
- **Goal:** Recover from a departure-configuration stall with coordination.
- **Setup:** as C5.2.
- **Procedure:** Clearing turn → slow to lift-off speed (~55–60) → set power (≥ 65% or full
  per brief) → raise nose to a climb attitude beyond Vy → hold until the stall → recover.
  Keep the ball centred (a lot of right rudder).
- **Criteria**

| #   | Criterion                                            | Kind   | Gold | Silver | Bronze | Req | W   |
| --- | ---------------------------------------------------- | ------ | ---- | ------ | ------ | --- | --- |
| 1   | First action was reducing AoA                        | Binary |      |        |        | Yes | 3   |
| 2   | Coordination at the stall (no significant wing drop) | Tiered | none | < 15°  | < 30°  | Yes | 3   |
| 3   | Heading within ±20°                                  | Tiered | ±10° | ±20°   | ±30°   | No  | 1   |
| 4   | No secondary stall; returned to Vy climb             | Binary |      |        |        | Yes | 2   |

- **Debrief questions:** How much right rudder did you need?

#### C5.4 — Steep turns (P0)

- **Type** manoeuvre · **Difficulty** ●●●●○ · **Est.** 15 min · **Lessons** L5.3
- **Goal:** Two 360° steep turns (left then right) at 45° bank.
- **Setup:** `AIR_START` 4,000 ft MSL, heading toward Mt Diablo (reference), 95 KIAS ·
  `WX_CALM` · `LOAD_SOLO`.
- **Procedure:** Clearing turn → note entry heading/landmark → roll into 45° left, add back
  pressure and ~100–200 RPM → roll out 20° early → immediately roll into a 45° right turn →
  roll out on entry heading.
- **Criteria**

| #   | Criterion                           | Kind   | Gold    | Silver  | Bronze  | Req | W   |
| --- | ----------------------------------- | ------ | ------- | ------- | ------- | --- | --- |
| 1   | Altitude                            | Tiered | ±100 ft | ±150 ft | ±200 ft | Yes | 3   |
| 2   | Airspeed                            | Tiered | ±10 kt  | ±15 kt  | ±20 kt  | Yes | 2   |
| 3   | Bank                                | Tiered | 45° ±5° | ±10°    | ±15°    | Yes | 2   |
| 4   | Rollout heading                     | Tiered | ±10°    | ±15°    | ±20°    | Yes | 2   |
| 5   | Entry at or below manoeuvring speed | Binary |         |         |         | Yes | 1   |

- **Debrief questions:** Where did you lose/gain altitude?

#### C5.5 — Engine failure (P0)

- **Type** emergency · **Difficulty** ●●●●○ · **Est.** 20 min · **Lessons** L5.4
- **Goal:** After a simulated engine failure at altitude, establish best glide, choose a
  field or airport within reach, run the restart flow, declare, and fly to a position from
  which a safe landing is assured.
- **Setup:** `AIR_START` 3,500 ft MSL, heading 090, cruise, 8 nm east of KLVK (⚠ adjust so
  KLVK is within ~5 nm glide at 3,500 ft over a ~500 ft terrain; verify with W15).
  Engine failure: learner sets mixture to cut-off at a moment chosen by a random timer
  on the challenge page ("Fail engine in 30–180 s" button with a beep) — this avoids relying
  on sim failure menus. P1: use MSFS failure settings if available.
- **Procedure:** At the beep: mixture to cut-off → A (68 KIAS, trim) → B (choose KLVK or a
  field) → C (restart flow — but the challenge rules say the restart "fails", so leave
  mixture cut-off) → D (call on the frequency / squawk 7700) → E (key-point pattern) →
  land on the runway or the chosen field if the sim allows, or go around at 200 ft AGL above
  the field (mixture back to rich — clearly marked as "practice recovery").
- **Criteria**

| #   | Criterion                                                  | Kind   | Gold  | Silver                       | Bronze          | Req | W   |
| --- | ---------------------------------------------------------- | ------ | ----- | ---------------------------- | --------------- | --- | --- |
| 1   | Best glide established within 5 s                          | Tiered | ≤ 5 s | ≤ 10 s                       | ≤ 20 s          | Yes | 3   |
| 2   | Best glide speed held                                      | Tiered | 68 ±5 | ±10                          | ±15             | Yes | 3   |
| 3   | Suitable landing site chosen within glide range            | Binary |       |                              |                 | Yes | 3   |
| 4   | Restart flow performed                                     | Binary |       |                              |                 | No  | 2   |
| 5   | Declared emergency / squawk 7700                           | Binary |       |                              |                 | No  | 1   |
| 6   | Arrived at key point with enough altitude; landing assured | Tiered | ideal | slightly high/low, corrected | made it, barely | Yes | 3   |

- **Debrief questions:** When did you commit to your landing site?

#### C5.6 — Turns around a point (P1)

- **Type** manoeuvre · **Difficulty** ●●●○○ · **Est.** 15 min · **Lessons** L5.5
- **Goal:** Two 360° turns around a point at constant radius and altitude with wind.
- **Setup:** `AIR_START` 1,500 ft MSL (≈ 1,000 ft AGL near KLVK ⚠ verify terrain), near an
  isolated landmark (e.g. a distinctive building/reservoir) · `WX_LIGHT_W`.
- **Criteria**

| #   | Criterion                                | Kind   | Gold       | Silver   | Bronze                | Req | W   |
| --- | ---------------------------------------- | ------ | ---------- | -------- | --------------------- | --- | --- |
| 1   | Altitude                                 | Tiered | ±100 ft    | ±150 ft  | ±200 ft               | Yes | 3   |
| 2   | Constant radius (bank adjusted for wind) | Tiered | consistent | somewhat | drifted but corrected | Yes | 3   |
| 3   | Airspeed                                 | Tiered | ±10        | ±15      | ±20                   | No  | 1   |
| 4   | Max bank ≤ 45°                           | Binary |            |          |                       | Yes | 2   |

- **Debrief questions:** Where was your bank steepest?

### Module 6 challenges

For all Module 6 challenges the brief links to: the San Francisco sectional/TAC on the FAA
site, a pre-drawn SkyVector route, and the airport cards in the Reference section.

#### C6.1 — Landmark hunt (P0)

- **Type** navigation · **Difficulty** ●●○○○ · **Est.** 25 min · **Lessons** L6.1
- **Goal:** Identify six charted landmarks from the air and match them to the sectional.
- **Setup:** KLVK · `RUNWAY` 25R · `WX_CALM` · VFR map **off** · G1000 MFD map range set to
  its widest (so the map is less helpful) or MFD turned to the EIS/system page.
- **Procedure:** Before flight, find these on the sectional: Lake Del Valle, Altamont Pass
  wind farms, I-580/I-680 interchange, Mount Diablo, Calaveras Reservoir, San Antonio
  Reservoir (⚠ verify all are charted and visible in the sim). Fly a loop at 3,500 ft
  and, for each landmark, note on the page the time you flew over/abeam it and its bearing.
  Return and land at KLVK.
- **Criteria**

| #   | Criterion                          | Kind   | Gold    | Silver  | Bronze  | Req | W   |
| --- | ---------------------------------- | ------ | ------- | ------- | ------- | --- | --- |
| 1   | Landmarks correctly identified     | Tiered | 6/6     | 5/6     | 4/6     | Yes | 3   |
| 2   | Stayed clear of Class C/B airspace | Binary |         |         |         | Yes | 3   |
| 3   | Altitude held on straight legs     | Tiered | ±100 ft | ±150 ft | ±200 ft | No  | 1   |
| 4   | Returned to KLVK without GPS map   | Binary |         |         |         | No  | 2   |

- **Debrief questions:** Which landmark was easiest to spot? Hardest? Why?

#### C6.2 — Pilotage to Tracy (P0)

- **Type** navigation · **Difficulty** ●●●○○ · **Est.** 30 min · **Lessons** L6.3
- **Goal:** Fly KLVK → KTCY using only pilotage (chart and landmarks), arriving within
  ±2 minutes of your planned ETA and entering the pattern correctly.
- **Setup:** KLVK · `RUNWAY` 25R · `WX_LIGHT_W` · GPS map pages off (MFD to EIS/systems);
  PFD inset map off; VFR map off.
- **Procedure:** Plan: checkpoints (Altamont Pass, I-580, the California Aqueduct/Delta
  Mendota canal ⚠ verify, Tracy town). Compute heading, time and fuel on the nav log.
  Depart, fly the route at 3,500 ft, record ATA at each checkpoint, descend to pattern
  altitude, enter 45° to downwind at KTCY, land.
- **Criteria**

| #   | Criterion                            | Kind   | Gold    | Silver   | Bronze   | Req | W   |
| --- | ------------------------------------ | ------ | ------- | -------- | -------- | --- | --- |
| 1   | Nav log completed before flight      | Binary |         |          |          | Yes | 2   |
| 2   | Checkpoints identified in sequence   | Tiered | all     | missed 1 | missed 2 | Yes | 3   |
| 3   | Arrival ETA accuracy                 | Tiered | ±2 min  | ±4 min   | ±6 min   | No  | 2   |
| 4   | Altitude en route                    | Tiered | ±100 ft | ±150 ft  | ±200 ft  | No  | 1   |
| 5   | Correct pattern entry at KTCY        | Binary |         |          |          | Yes | 2   |
| 6   | Safe landing (C4.3 Bronze or better) | Binary |         |          |          | Yes | 2   |

- **Debrief questions:** How far off course did you drift and why?

#### C6.3 — Dead reckoning to Half Moon Bay (P0)

- **Type** navigation · **Difficulty** ●●●●○ · **Est.** 35 min · **Lessons** L6.3
- **Goal:** Fly KPAO → KHAF using a computed magnetic heading and time, then confirm with
  landmarks. Stay below the Class B.
- **Setup:** KPAO · `RUNWAY` 31 (⚠ verify) · `WX_LIGHT_W` (winds aloft make the WCA
  matter) · GPS map off · VFR map off.
- **Procedure:** Plan TC, WCA, MH, GS and ETE using W12 and the winds in the brief. Depart
  per KPAO departure procedure (the brief gives it, ⚠ verify), climb to 2,500–3,500 ft
  (⚠ check Class B floors and terrain on the TAC), fly the heading, use Crystal Springs
  Reservoir as a check, cross the ridge, descend to KHAF pattern altitude, land.
- **Criteria**

| #   | Criterion                                              | Kind   | Gold   | Silver | Bronze | Req | W   |
| --- | ------------------------------------------------------ | ------ | ------ | ------ | ------ | --- | --- |
| 1   | Computed MH within ±5° of the reference answer         | Tiered | ±3°    | ±5°    | ±8°    | Yes | 2   |
| 2   | Flew the computed heading ±5°                          | Tiered | ±5°    | ±10°   | ±15°   | Yes | 2   |
| 3   | Remained clear of Class B                              | Binary |        |        |        | Yes | 3   |
| 4   | ETA accuracy                                           | Tiered | ±2 min | ±4 min | ±6 min | No  | 2   |
| 5   | Safe terrain clearance crossing the ridge (≥ 1,000 ft) | Binary |        |        |        | Yes | 3   |
| 6   | Correct CTAF pattern entry and landing at KHAF         | Binary |        |        |        | No  | 2   |

- **Debrief questions:** Compare your planned and actual groundspeed. Why the difference?

#### C6.4 — VOR tracking (P0)

- **Type** navigation · **Difficulty** ●●●○○ · **Est.** 25 min · **Lessons** L6.4
- **Goal:** Determine your radial from a VOR, intercept a specified radial and track it
  outbound, with wind.
- **Setup:** `AIR_START` 3,500 ft MSL, 10 nm north of the chosen VOR (OAK or ECA — ⚠ verify
  in-sim availability; the brief uses the verified one) · `WX_LIGHT_W` · CDI on VOR1
  (green needle).
- **Procedure:** Tune and identify the VOR. Find which radial you're on (FROM flag). Turn to
  intercept the 090 radial outbound using a 30–45° intercept. Track it for 10 nm with wind
  correction. Report (on the page) the heading that kept the needle centred.
- **Criteria**

| #   | Criterion                           | Kind   | Gold      | Silver    | Bronze           | Req | W   |
| --- | ----------------------------------- | ------ | --------- | --------- | ---------------- | --- | --- |
| 1   | Identified the station (Morse/ID)   | Binary |           |           |                  | Yes | 2   |
| 2   | Correctly determined initial radial | Tiered | ±5°       | ±10°      | ±15°             | Yes | 2   |
| 3   | Intercept without overshooting      | Tiered | none      | small     | large, corrected | No  | 2   |
| 4   | Tracking accuracy (CDI)             | Tiered | ≤ ½ scale | ≤ ¾ scale | < full scale     | Yes | 3   |
| 5   | Altitude                            | Tiered | ±100 ft   | ±150 ft   | ±200 ft          | No  | 1   |

- **Debrief questions:** What wind correction did you end up with?

#### C6.5 — G1000 flight plan (P0)

- **Type** navigation · **Difficulty** ●●●○○ · **Est.** 35 min · **Lessons** L6.5
- **Goal:** Build a flight plan in the G1000 KLVK → C83 → KCCR (⚠ Class D, sim ATC optional)
  or KLVK → C83 → KLVK, fly it by hand following the magenta line, and use Direct-To
  mid-flight.
- **Setup:** KLVK · `RAMP_RUNNING` · `WX_LIGHT_W` · the sim's world map flight plan **empty**
  (the learner enters it in the G1000).
- **Procedure:** On the ground: open FPL, enter waypoints, activate. Depart, fly the legs
  by hand. At the midpoint the brief instructs: "Proceed Direct-To C83 now", then resume the
  flight plan. Land.
- **Criteria**

| #   | Criterion                                                | Kind   | Gold     | Silver | Bronze | Req | W   |
| --- | -------------------------------------------------------- | ------ | -------- | ------ | ------ | --- | --- |
| 1   | Flight plan entered correctly before takeoff             | Binary |          |        |        | Yes | 3   |
| 2   | Tracked the magenta line (cross-track error)             | Tiered | ≤ 0.5 nm | ≤ 1 nm | ≤ 2 nm | Yes | 2   |
| 3   | Direct-To performed correctly when asked                 | Binary |          |        |        | Yes | 2   |
| 4   | Used NRST to name the nearest airport at a random moment | Binary |          |        |        | No  | 1   |
| 5   | Landing at destination (C4.3 Bronze or better)           | Binary |          |        |        | No  | 2   |

- **Debrief questions:** Did the GPS make you look outside less? What will you do about that?

#### C6.6 — Diversion (P1)

- **Type** navigation · **Difficulty** ●●●●○ · **Est.** 30 min · **Lessons** L6.6
- **Goal:** Mid-flight, divert to an alternate airport, estimating heading, distance and
  time within two minutes, then fly there.
- **Setup:** Begin as C6.2. At a random time (page timer), the page reveals "Weather at KTCY
  has closed — divert to C83" (or another verified airport).
- **Criteria**

| #   | Criterion                               | Kind   | Gold    | Silver  | Bronze  | Req | W   |
| --- | --------------------------------------- | ------ | ------- | ------- | ------- | --- | --- |
| 1   | Turned toward alternate within 1 minute | Tiered | ≤ 1 min | ≤ 2 min | ≤ 3 min | Yes | 2   |
| 2   | Estimated heading accuracy              | Tiered | ±10°    | ±15°    | ±20°    | Yes | 2   |
| 3   | Estimated ETE accuracy                  | Tiered | ±2 min  | ±4 min  | ±6 min  | No  | 2   |
| 4   | Arrived and entered pattern correctly   | Binary |         |         |         | Yes | 2   |

- **Debrief questions:** What did you use to estimate the heading?

#### C6.7 — Autopilot basics (P1)

- **Type** procedure · **Difficulty** ●●○○○ · **Est.** 25 min · **Lessons** L6.8
- **Goal:** Use HDG, ALT, VS and NAV modes to fly a short flight plan, verifying each mode
  change on the PFD.
- **Setup:** `AIR_START` 3,500 ft, flight plan loaded KLVK → C83 · `WX_LIGHT_W`.
- **Criteria**

| #   | Criterion                                                   | Kind   | Gold | Silver | Bronze | Req | W   |
| --- | ----------------------------------------------------------- | ------ | ---- | ------ | ------ | --- | --- |
| 1   | Engaged AP with correct initial modes (HDG + ALT)           | Binary |      |        |        | Yes | 2   |
| 2   | VS climb/descent to target altitudes with ALT capture armed | Binary |      |        |        | Yes | 2   |
| 3   | NAV mode following GPS                                      | Binary |      |        |        | Yes | 2   |
| 4   | Verbalised/verified each mode change ("HDG, ALT, armed…")   | Binary |      |        |        | No  | 1   |
| 5   | Disconnected and hand-flew the pattern                      | Binary |      |        |        | No  | 2   |

### Module 7 challenges

#### C7.1 — CTAF pattern at Tracy (P0)

- **Type** communication · **Difficulty** ●●●○○ · **Est.** 25 min · **Lessons** L7.2
- **Goal:** Arrive at KTCY from 10 nm, make every CTAF call, fly the pattern and land.
- **Setup:** `AIR_START` 3,500 ft MSL, 10 nm west of KTCY (over Altamont) · `WX_LIGHT_W` ·
  AI traffic **on** · sim ATC on (for CTAF) — or say calls out loud if the sim's options are
  limited.
- **Procedure:** The brief lists each call with a fill-in-the-blank template:
  10 nm inbound; entering 45 for left downwind; left downwind; left base; final;
  clear of the runway. The learner speaks them (or selects the closest sim option).
- **Criteria**

| #   | Criterion                                                                    | Kind   | Gold | Silver | Bronze | Req | W   |
| --- | ---------------------------------------------------------------------------- | ------ | ---- | ------ | ------ | --- | --- |
| 1   | All six calls made at the correct positions                                  | Tiered | 6/6  | 5/6    | 4/6    | Yes | 3   |
| 2   | Calls used correct format (airport, callsign, position, intentions, airport) | Tiered | all  | most   | some   | Yes | 2   |
| 3   | Correct pattern entry                                                        | Binary |      |        |        | Yes | 2   |
| 4   | Traffic awareness (saw and sequenced with AI traffic)                        | Binary |      |        |        | No  | 2   |
| 5   | Safe landing                                                                 | Binary |      |        |        | Yes | 2   |

- **Debrief questions:** Which call did you forget or mix up?

#### C7.2 — Towered departure and return at Livermore (P0)

- **Type** communication · **Difficulty** ●●●●○ · **Est.** 35 min · **Lessons** L7.3
- **Goal:** Complete a full towered-airport sequence at KLVK using sim ATC: ATIS, ground,
  tower, departure to the practice area, return, landing, taxi.
- **Setup:** KLVK · `RAMP_RUNNING` · `WX_LIGHT_W` · AI traffic on · sim ATC **on**.
- **Procedure:** ATIS → request taxi → read back → taxi → run-up → ready for departure →
  depart east → fly 5 minutes → call tower inbound with ATIS → follow instructions → land →
  contact ground → taxi to parking.
- **Criteria**

| #   | Criterion                                                    | Kind   | Gold | Silver   | Bronze   | Req | W   |
| --- | ------------------------------------------------------------ | ------ | ---- | -------- | -------- | --- | --- |
| 1   | Had current ATIS before first call                           | Binary |      |          |          | Yes | 2   |
| 2   | Correct read-backs of taxi/hold short and runway assignments | Tiered | all  | 1 missed | 2 missed | Yes | 3   |
| 3   | Followed all ATC instructions                                | Binary |      |          |          | Yes | 3   |
| 4   | Frequency changes done promptly                              | Binary |      |          |          | No  | 1   |
| 5   | Pattern and landing (C4.3 Bronze or better)                  | Binary |      |          |          | Yes | 2   |

- **Debrief questions:** Where did the sim's ATC differ from what you learned in L7.3?

#### C7.3 — Palo Alto arrival (P1)

- **Type** communication · **Difficulty** ●●●●● · **Est.** 30 min · **Lessons** L7.4
- **Goal:** Arrive at KPAO under the Class B shelf with tower communication and a precise
  landing on the short runway.
- **Setup:** `AIR_START` 1,500 ft MSL over the bay near the Dumbarton Bridge (⚠ verify
  local VFR reporting points on the TAC) · `WX_CALM` · ATC on · AI traffic on.
- **Criteria**

| #   | Criterion                                   | Kind   | Gold         | Silver    | Bronze    | Req | W   |
| --- | ------------------------------------------- | ------ | ------------ | --------- | --------- | --- | --- |
| 1   | Remained below Class B                      | Binary |              |           |           | Yes | 3   |
| 2   | Correct initial call with ATIS and position | Binary |              |           |           | Yes | 2   |
| 3   | Followed tower instructions                 | Binary |              |           |           | Yes | 2   |
| 4   | Landed within first 1/3 of runway           | Tiered | first 500 ft | first 1/3 | on runway | Yes | 3   |

### Module 8 challenges

#### C8.1 — Local checkride (P0)

- **Type** capstone · **Difficulty** ●●●●○ · **Est.** 60 min · **Lessons** L8.2
- **Goal:** A structured "checkride" in the KLVK area covering the core manoeuvres, in order,
  in one continuous flight.
- **Setup:** KLVK · `COLD_DARK` · `WX_LIGHT_W` · AI traffic on · ATC on · crash damage on.
- **Procedure (examiner script shown step by step on the page — the learner clicks "next"
  when each step is done, and the page records timestamps):**
  1. Cold-and-dark start with checklist.
  2. Taxi, run-up, takeoff briefing.
  3. Normal takeoff, departure to the east practice area.
  4. Steep turns left and right.
  5. Slow flight with a turn.
  6. Power-off stall.
  7. Simulated engine failure (page beep) → glide to a field; recover at 500 ft AGL.
  8. Return to KLVK with ATC, pattern entry.
  9. Normal landing; one go-around if the page says so (50% random).
  10. Taxi and shutdown.
- **Criteria:** 10 criteria (one per step), each re-using the Gold/Silver/Bronze tolerances
  of the matching earlier challenge. Required: steps 3, 4, 6, 7, 9. Weights 2 except
  steps 7 and 9 (3).
- **Debrief questions:** Which step would an examiner have failed you on? What will you
  practise next?

#### C8.2 — Cross-country capstone (P0)

- **Type** capstone · **Difficulty** ●●●●● · **Est.** 90 min (incl. 30 min planning)
- **Goal:** Plan and fly KLVK → KWVI (Watsonville, via the Calaveras/Morgan Hill area,
  ⚠ verify airspace — this route passes near SJC Class C; the plan must stay clear or
  request) → land → return to KLVK via a different route using VOR + GPS. Alternative
  shorter route (if the long one is too much): KLVK → KCCR → C83 → KLVK.
- **Setup:** KLVK · `RAMP_RUNNING` · `WX_SCATTERED` · AI traffic on · ATC on.
- **Planning deliverables (entered on the page before flying):** route with checkpoints;
  altitudes (hemispheric rule); nav log (headings, times, fuel); airspace notes;
  frequencies; alternates; PAVE check.
- **Criteria**

| #   | Criterion                                        | Kind   | Gold     | Silver     | Bronze              | Req | W   |
| --- | ------------------------------------------------ | ------ | -------- | ---------- | ------------------- | --- | --- |
| 1   | Complete plan and nav log before flight          | Tiered | complete | minor gaps | major gaps          | Yes | 3   |
| 2   | Route flown as planned (checkpoints within 1 nm) | Tiered | all      | most       | some, but found way | Yes | 3   |
| 3   | Airspace compliance                              | Binary |          |            |                     | Yes | 3   |
| 4   | Altitude en route                                | Tiered | ±100 ft  | ±150 ft    | ±200 ft             | No  | 2   |
| 5   | ETA at destination                               | Tiered | ±3 min   | ±5 min     | ±8 min              | No  | 1   |
| 6   | Radio calls correct (CTAF/tower)                 | Tiered | all      | most       | some                | Yes | 2   |
| 7   | Two safe landings                                | Binary |          |            |                     | Yes | 3   |
| 8   | Fuel remaining ≥ planned reserve                 | Binary |          |            |                     | Yes | 2   |

- **Debrief questions:** What would you change in your plan? Rate your confidence 1–5 to
  fly this route without a GPS.

### 15.4 Challenge authoring checklist

Before a challenge is published:

- [ ] Setup reproduced from scratch in the sim using only the brief.
- [ ] Flown at least three times by the author; passed Gold at least once.
- [ ] Every criterion is measurable by the learner (they can tell what they achieved,
      e.g. via PFD readouts, time, replay).
- [ ] Every ⚠ item in the brief verified and recorded (Section 54).
- [ ] Common mistakes list includes at least one mistake the author actually made.
- [ ] Estimated time checked with a stopwatch.
- [ ] Brief readable on a phone screen (no wide tables in the "Fly" step).
- [ ] Schema validation passes (`npm run content:validate`).

---

## 16. Interactive visual explanations (widget specifications)

Widgets are the heart of the "interactive visual explanations" promise in the README.
They are React components in `src/features/widgets/`, embedded in lessons via a Markdown
directive (Section 28.4), e.g. `::widget{name="airspeed-indicator" mode="explore"}`.

### 16.1 Shared widget requirements

Every widget must:

1. Render as **inline SVG** (crisp at any size, themeable with CSS variables).
2. Work with **mouse, touch and keyboard**: every draggable control also has a slider or
   +/− buttons that are focusable and operable with arrow keys.
3. Expose values to screen readers via `aria-valuenow`/`aria-valuetext` and a live region
   that announces key changes ("Airspeed 74 knots, green arc, V Y").
4. Have a **text alternative** below the widget (collapsed "Describe this diagram") for
   users who cannot use it.
5. Respect `prefers-reduced-motion` (no auto-playing animation; animations become instant).
6. Be responsive from 320 px to 1,440 px width; min touch target 44×44 px.
7. Support **modes** where relevant: `explore` (free play) and `quiz` (targets to hit,
   with feedback). Quiz results are sent to the lesson progress API as knowledge-check
   answers.
8. Be pure and deterministic: physics/geometry lives in pure functions in
   `src/features/widgets/<name>/model.ts` with unit tests.
9. Load lazily (`React.lazy`) so lesson pages without widgets don't pay for them.
10. Never claim precision it doesn't have: label simplified models "Simplified model".

### 16.2 W1 — Control Surfaces Explorer (P0) · L1.1

- **Shows:** A three-quarter view of a stylised high-wing trainer (our own drawing, not a
  Cessna logo/trade dress) with ailerons, elevator, rudder, flaps and trim tab highlighted.
  A small yoke and pedals control panel.
- **Interactions:** Drag the yoke left/right (ailerons deflect, the aircraft rolls),
  fore/aft (elevator deflects, pitches), press pedals (rudder deflects, yaws). Flap lever
  0/10/20/30. Toggle "show axes" draws the three axes through the CG.
- **Quiz mode:** "Make the airplane roll right", "Which surface moves when you push the
  right pedal?" (click the surface).
- **Model:** Deflection angle = control input × max deflection (simple linear). Aircraft
  attitude animates to a clamped angle — not a flight model.
- **Accessibility:** buttons "Roll left/right", "Pitch up/down", "Yaw left/right", each
  announcing which surface moved and which way.
- **Est. build:** 2–3 days.

### 16.3 W3 — Airspeed Indicator (P0) · L1.4, reference page

- **Shows:** Classic round airspeed indicator _and_ a G1000-style vertical tape side by
  side (toggle), with the C172S colour arcs and V-speed markers (Section 8.3).
- **Interactions:** Drag the needle or use a slider (0–180 KIAS). A readout names the band
  and nearest V-speed ("74 KIAS — green arc — Vy, best rate of climb").
- **Quiz mode:** "Set the airspeed to best glide", "Set the maximum speed with 30° flaps".
- **Data:** reads V-speeds from `content/aircraft.yaml` so there is one source of truth.
- **Est. build:** 1–2 days.

### 16.4 W2 — G1000 PFD Explorer (P0) · L1.2, L6.5

- **Shows:** A simplified, **original** illustration of a glass PFD layout (not a
  screenshot, to avoid copyright/trademark issues), with regions: attitude, airspeed tape,
  altitude tape, VSI, HSI, turn rate, slip/skid, NAV/COM boxes, transponder, softkeys.
  Also a screenshot-based "Real view" tab using your own MSFS screenshots with hotspots.
- **Interactions:** Hover/tap a region to highlight it and show a card (name, what it
  shows, classic equivalent, tip). "Tour" button steps through all regions in order.
  "Navigation mode" (L6.5) highlights D→, FPL, NRST, CDI softkey, FMS knobs and shows
  step-by-step animations for Direct-To.
- **Quiz mode:** "Click the vertical speed indicator", "Where is the altimeter setting?"
- **Est. build:** 3–4 days (most time is the illustration).

### 16.5 W4 — Angle of Attack and Lift (P0) · L2.1, L5.1, L5.2

- **Shows:** A wing cross-section (airfoil) with relative wind arrows and streamlines; a
  lift coefficient vs AoA graph beside it with a moving dot.
- **Interactions:** AoA slider −4° to 22°. Streamlines stay attached until ~16°, then show
  separation growing from the trailing edge; lift curve peaks and drops. Toggle "flaps
  down" shifts the curve up (higher max lift, slightly lower critical AoA). A "stall horn"
  indicator lights a few degrees before critical AoA.
- **Model:** Piecewise lift curve: CL = 0.1×(AoA+2) up to CLmax at 16°, then a smooth
  decline. Clearly labelled "Simplified model — shapes are realistic, numbers are
  illustrative."
- **Quiz mode:** "Set the angle of attack where the wing stalls", "Where does the stall
  warning sound?"
- **Est. build:** 2–3 days.

### 16.6 W5 — Pitch & Power Trainer (attitude indicator) (P0) · L2.2, L2.3

- **Shows:** Attitude indicator, airspeed readout, VSI and altitude trend.
- **Interactions:** Pitch slider (−10° to +15°) and power slider (1,500–2,700 RPM).
  A simple steady-state lookup table gives the resulting airspeed and vertical speed for the
  C172 (derived from your own in-sim test flights — Section 7.2 — so it matches the sim).
  "Trim" button: when pressed, the "stick force" meter goes to zero.
- **Scenarios:** "Cruise" (2,300 RPM, 0° → ~105 kt, 0 fpm), "Vy climb" (full, +8° → 74 kt,
  ~+700 fpm), "Cruise descent", "Slow flight". Values ⚠ from your own flight tests.
- **Quiz mode:** "Set up a 500 fpm descent at 90 kt."
- **Model:** 2D interpolation over a table of (pitch, RPM) → (IAS, VS). Table lives in
  `content/aircraft.yaml` under `performanceModel`.
- **Est. build:** 3 days (+1 day data collection in sim).

### 16.7 W6 — Turn Coordinator & Slip Ball (P0) · L2.4

- **Shows:** Turn coordinator (miniature airplane + ball) _and_ G1000 slip/skid trapezoid,
  plus a top-down view of the aircraft's nose relative to its flight path.
- **Interactions:** Bank slider (−45° to 45°) and rudder slider. The ball displaces when
  rudder doesn't match bank; the top-down view shows the nose yawing. Readout: "Slipping —
  add right rudder" / "Coordinated".
- **Extras:** Standard-rate marker; shows the bank needed for standard rate at a chosen
  TAS (formula in L2.4).
- **Est. build:** 2 days.

### 16.8 W7 — Traffic Pattern Animator (P0) · L4.2, L4.4, L7.2

- **Shows:** Top-down airport with a runway, and the pattern legs drawn in: departure,
  crosswind, downwind, base, final; 45° entry. An aircraft icon animates around it.
- **Interactions:** Play/pause/step through legs; toggle left/right traffic; set wind
  direction/speed (ground track bends, aircraft heading crabs); toggle "show configuration"
  (speed, flaps, power labels per leg from Section 8.5); toggle "show radio calls" (L7.2)
  showing call bubbles at each position; "go-around" button (L4.4) shows the side-step
  and climb-out.
- **Side view (P1):** altitude profile along the pattern.
- **Accessibility:** step list (ordered list of legs with details) mirrors the animation.
- **Est. build:** 4–5 days.

### 16.9 W8 — Airport Signs & Markings Explorer (P1) · L3.2

- **Shows:** Stylised taxiway intersection with signs (location, direction, mandatory),
  hold short markings, centrelines.
- **Interactions:** Click each sign/marking for meaning; "Where are you?" quiz asks the
  learner to identify their position from a sign set.
- **Est. build:** 2 days.

### 16.10 W9 — VOR / CDI Simulator (P0) · L6.4

- **Shows:** Map with a VOR compass rose and an aircraft icon; a VOR indicator (OBS, CDI,
  TO/FROM) and optionally an HSI.
- **Interactions:** Drag the aircraft anywhere; rotate its heading; turn the OBS. The CDI
  deflection and TO/FROM flag update with correct geometry (including reverse sensing when
  heading opposes course). "Fly" mode: aircraft moves along its heading; wind option shows
  drift.
- **Quiz mode:** "Which radial are you on?", "Turn the OBS to centre the needle with a TO
  flag", "Which way should you turn to intercept the 090 radial?"
- **Model:** bearing from station → radial; CDI deflection = clamp((radial − OBS), ±10°)
  mapped to full scale; TO/FROM by angle difference > 90°. Unit tests for all quadrants.
- **Est. build:** 3–4 days.

### 16.11 W10 — Sectional Legend Explorer (P0) · L6.1

- **Shows:** A crop of the San Francisco sectional around Livermore (FAA chart — public
  domain — with "Not for navigation" watermark), or a simplified redraw.
- **Interactions:** Hotspots on airport symbols, data blocks, MEF, obstacles, VOR rose,
  isogonic line, Class C/D boundaries, landmarks. Clicking shows the legend entry and an
  explanation. "Find it" quiz: "Click on a non-towered airport", "What is the MEF here?"
- **Data:** hotspot coordinates in a JSON file alongside the image; image optimised
  (WebP/AVIF, ≤ 400 KB).
- **Est. build:** 3 days (mostly mapping hotspots).

### 16.12 W11 — Airspace Cross-section (P0) · L6.2

- **Shows:** Side view (profile) of a line across the Bay Area, e.g. Half Moon Bay → SFO →
  OAK → Livermore → Tracy, with Class B shelves, Class C, Class D cylinders, E and G layers;
  terrain silhouette.
- **Interactions:** Hover/tap a layer for class, floor/ceiling and entry requirements;
  drag an aircraft icon along the line at a chosen altitude — a panel shows "You are in
  Class E. Requirement: none" etc. Toggle to "plan view" (top-down simplified map).
- **Data:** airspace floors/ceilings from the TAC, in `content/airspace-profile.yaml`,
  marked ⚠ verify, simplified (not to scale horizontally).
- **Est. build:** 4 days.

### 16.13 W12 — Wind Triangle (P0) · L6.3, L6.6

- **Shows:** Vector diagram with true course/TAS vector, wind vector and resulting ground
  track/groundspeed; a small compass rose; results table (WCA, TH, MH, GS, ETE).
- **Interactions:** Inputs for TC, TAS, wind direction/speed, variation, distance. Drag
  the wind arrow tip. Results update live.
- **Model:** standard wind triangle formulas (Appendix G), tested against E6B examples.
- **Est. build:** 2–3 days.

### 16.14 W13 — Crosswind Component Calculator (P1) · L4.5, Tools page

- **Shows:** Runway (pick designator 01–36) with wind arrow; headwind/tailwind and
  crosswind components; warning above 15 kt crosswind (demonstrated value).
- **Est. build:** 1 day.

### 16.15 W14 — Bank Angle, Load Factor and Stall Speed (P0) · L5.3

- **Shows:** Rear view of the airplane banked; lift vector split into vertical/horizontal;
  G meter; stall speed readout; graph of load factor vs bank (0–80°).
- **Interactions:** Bank slider. Readouts: load factor = 1 / cos(bank); stall speed =
  Vs × √(load factor) using Vs1 = 48.
- **Est. build:** 1–2 days.

### 16.16 W15 — Glide Range Ring (P1) · L5.4

- **Shows:** Top-down map with a circle of glide range from a chosen altitude AGL and
  glide ratio; wind option shifts the ring downwind (simplified).
- **Est. build:** 2 days.

### 16.17 W16 — Checklist Runner (P0) · L1.4, L3.1, L3.3, Reference

- **Shows:** A checklist (from `content/checklists.yaml`, our own summarised wording)
  with large tap targets; current item highlighted; progress bar.
- **Interactions:** Tap/Space to tick, Backspace to untick; "read-do" vs "do-verify" mode;
  keyboard-only operation; stays awake (Screen Wake Lock API where available, P1) so a
  tablet doesn't sleep; big-text mode for a second monitor.
- **Challenge integration:** when used inside a challenge, ticks and timestamps are saved
  with the attempt (used by C1.1, C3.1).
- **Est. build:** 2 days.

### 16.18 W17 — METAR Decoder (P1) · L6.7

- **Shows:** A METAR string with each group colour-underlined; clicking a group explains it.
- **Data:** a small curated set of example METARs (static) — v1 does not call live weather
  APIs.
- **Model:** a tolerant parser for the common groups (station, time, wind, visibility,
  weather, clouds, temp/dew, altimeter, RMK) with tests.
- **Est. build:** 2–3 days.

### 16.19 W18 — Landing Sight Picture (P1) · L4.3

- **Shows:** Pilot's-eye view of a runway (simple perspective drawing) with PAPI lights.
- **Interactions:** Slider for glide path angle and distance; the runway shape and PAPI
  colours change (too high → more white; too low → more red). Aiming point marker.
- **Est. build:** 2–3 days.

### 16.20 W19 — Phonetic Alphabet Trainer (P1) · L7.1

- **Shows:** Flash cards and "say this callsign" drills; optional speech synthesis for
  listening practice (Web Speech API).
- **Est. build:** 1 day.

### 16.21 W20 — Nav Log Calculator (P1) · L6.6, Tools page

- **Shows:** Editable nav log table (Section 10.5) that computes WCA/TH/MH/GS/ETE/fuel per
  leg using the W12 model. Save to the user's profile (P1) and print.
- **Est. build:** 3 days.

### 16.22 Widget priority summary

| Widget                           | Priority | Est. days       |
| -------------------------------- | -------- | --------------- |
| W1 Control Surfaces              | P0       | 2–3             |
| W2 G1000 PFD Explorer            | P0       | 3–4             |
| W3 Airspeed Indicator            | P0       | 1–2             |
| W4 Angle of Attack               | P0       | 2–3             |
| W5 Pitch & Power                 | P0       | 3–4             |
| W6 Turn Coordinator              | P0       | 2               |
| W7 Traffic Pattern               | P0       | 4–5             |
| W9 VOR/CDI                       | P0       | 3–4             |
| W10 Sectional Legend             | P0       | 3               |
| W11 Airspace Cross-section       | P0       | 4               |
| W12 Wind Triangle                | P0       | 2–3             |
| W14 Load Factor                  | P0       | 1–2             |
| W16 Checklist Runner             | P0       | 2               |
| **P0 total**                     |          | **~32–41 days** |
| W8, W13, W15, W17, W18, W19, W20 | P1       | ~14–17          |

Build order: W3 (simplest; establishes the widget framework) → W16 → W1 → W6 → W14 →
W4 → W5 → W2 → W7 → W12 → W9 → W10 → W11.

---

## 17. Quizzes and knowledge checks

### 17.1 Question types (v1)

| Type      | Description                                  | Example                               |
| --------- | -------------------------------------------- | ------------------------------------- |
| `single`  | Multiple choice, one correct answer          | "What is Vy?"                         |
| `multi`   | Multiple choice, several correct             | "Which are left-turning tendencies?"  |
| `numeric` | Number with tolerance                        | "Crosswind component?" (answer 10 ±1) |
| `order`   | Put steps in order (drag or up/down buttons) | "Order the go-around steps"           |
| `hotspot` | Click a region of an image/widget            | "Click the VSI" (provided by widgets) |

### 17.2 Authoring rules

- Every question has: prompt, answers, correct answer(s), **explanation** (shown after
  answering, right or wrong), and optional `lessonSectionRef` (link back to the section).
- Wrong-answer options ("distractors") must be plausible and reflect real misconceptions.
- No trick questions; no "all of the above".
- 2–4 questions per lesson, placed after the section they test (not all at the end).
- Numbers in questions must match `content/aircraft.yaml` (the validator checks
  V-speeds referenced as `{{vspeed.vy}}` tokens).

### 17.3 Behaviour

- Answers are **low-stakes**: unlimited retries; the first answer is recorded for analytics.
- A lesson can be marked complete without all correct answers, but the completion screen
  shows the score and suggests reviewing missed sections.
- Anonymous visitors can answer; answers are not saved.

### 17.4 Question file format

Questions live inside the lesson Markdown via a directive:

```markdown
:::quiz{id="l2-3-q1" type="single"}
Climbing at 600 fpm, when should you begin the level-off for 3,000 ft?

- [ ] 2,900 ft
- [x] About 2,940 ft
- [ ] 3,000 ft
- [ ] 3,060 ft

---

Lead the level-off by about 10% of your vertical speed: 10% of 600 is 60 ft.
:::
```

The parser (Section 28.4) converts it to a structured `quiz` block validated by Zod.

---

## 18. Content style guide

### 18.1 Voice and tone

- Friendly, direct, encouraging, never condescending. Second person ("you").
- Short sentences. One idea per sentence where possible.
- Explain _why_ before _how_ when the why is short.
- Celebrate go-arounds and good decisions, not just good landings.
- Avoid jargon until it is defined; then use it consistently (link to glossary).
- UK vs US spelling: **choose US English** for content (the aviation sources are US).
  (This plan uses some UK spellings; the content must not.) Use a spell-check dictionary
  in the editor.

### 18.2 Terminology

- Use FAA terms: "traffic pattern" (not "circuit"), "altimeter setting" (not "QNH") —
  mention the international term once in a callout for non-US learners.
- Speeds in **KIAS** unless stated (KTAS/GS labelled).
- Altitudes: "3,500 ft MSL", "1,000 ft AGL" — always say which.
- Headings as three digits: "heading 090". Runways as spoken: "Runway 25 Right" / "25R".
- Frequencies with a decimal: "118.6".
- Times: local time unless "Zulu".

### 18.3 Numbers and units

- Use digits for all numbers in procedures ("3 miles", "5 seconds").
- Thousands separator: "3,500 ft".
- Ranges with an en dash: "60–70 KIAS".

### 18.4 Callout types (and their Markdown directive)

| Callout        | Directive                    | Use for                                                            |
| -------------- | ---------------------------- | ------------------------------------------------------------------ |
| Safety         | `:::callout{type="safety"}`  | Anything that would be dangerous in a real airplane                |
| Sim vs reality | `:::callout{type="sim"}`     | Differences between MSFS and the real world                        |
| Classic panel  | `:::callout{type="classic"}` | Steam-gauge variant differences                                    |
| Pro tip        | `:::callout{type="tip"}`     | Technique that helps                                               |
| Verify         | `:::callout{type="verify"}`  | Author-only, **fails validation if present in a published lesson** |
| Note           | `:::callout{type="note"}`    | Everything else (use sparingly)                                    |

### 18.5 Headings and structure

- One `#` title (from frontmatter; do not repeat in the body).
- `##` for lesson sections (these become the lesson's step navigation).
- `###` sparingly. No deeper headings.
- Each `##` section ≤ ~250 words before a visual, widget or question.

### 18.6 Images and screenshots

- Take screenshots at 2560×1440 or 1920×1080, in the same livery (e.g. the default white/
  blue), at the same time of day (10:00), with the sim's UI hidden.
- Crop tightly; annotate with arrows/labels in a consistent style (use the design system
  colours; 2 px strokes; labels in Inter 16 px).
- Export as WebP (and AVIF if tooling allows), max 1,600 px wide, ≤ 200 KB each.
- File names: `m1-l2-pfd-overview.webp`. Store in `src/assets/lessons/<module>/`.
- Every image has meaningful alt text; complex diagrams also have a long description.
- Record the sim version (e.g. "SU 3") in the image metadata file so outdated screenshots
  can be found after sim updates.

### 18.7 Linking

- Internal links use lesson/challenge slugs via the directive `[[l2-3-climbs-and-descents]]`
  (validated at build time; broken internal links fail validation).
- External links open in the same tab by default (better accessibility), except "Go
  deeper" resource cards, which show an "external" icon and open in a new tab with
  `rel="noopener noreferrer"`.

### 18.8 Legal wording

- Every lesson footer (automatic): "For simulation use only. Not for real-world flight
  training or navigation."
- When quoting the FAA: cite the handbook and chapter.
- Never reproduce POH text or Garmin manual text.

### 18.9 Content review checklist (per lesson)

- [ ] Objectives are observable and each is assessed.
- [ ] ≤ 250 words before each visual/interactive element.
- [ ] Numbers use tokens from `aircraft.yaml` where possible.
- [ ] All ⚠ items verified (no `verify` callouts remain).
- [ ] Spell-check and grammar pass (US English).
- [ ] Reading level: aim for grade 8–10 (Hemingway or similar tool).
- [ ] Every image has alt text; diagrams have long descriptions.
- [ ] Knowledge checks have explanations.
- [ ] "Go deeper" links resolve and are relevant.
- [ ] Read aloud once — does it sound like a friendly instructor?
- [ ] Tested on a phone screen.

---

# Part IV — Product design

## 19. Information architecture and sitemap

### 19.1 Sitemap

```
/                                   Landing (public)
/learn                              Curriculum map (public)
/learn/:moduleSlug                  Module overview (public)
/learn/:moduleSlug/:lessonSlug      Lesson player (public; progress saved when signed in)
/challenges                         Challenge list with filters (public)
/challenges/:challengeSlug          Challenge: Brief → Fly → Debrief (brief public; debrief requires sign-in)
/challenges/:challengeSlug/fly      "Fly mode" compact brief for a second screen (public)
/reference                          Reference hub (public)
/reference/speeds                   V-speeds and limits
/reference/checklists               Checklist summaries (+ W16 runner)
/reference/checklists/:slug         Single checklist in runner mode
/reference/airports                 Airport cards (home region)
/reference/airports/:icao           Single airport card
/reference/glossary                 Glossary A–Z with search
/reference/resources                All external resources, filterable
/tools                              (P1) Calculators hub
/tools/crosswind                    (P1) W13
/tools/wind-triangle                (P1) W12 standalone
/tools/nav-log                      (P1) W20
/dashboard                          Dashboard (auth)
/account                            Profile & settings (auth)
/account/attempts                   All challenge attempts (auth)
/signup                             Register
/login                              Log in
/forgot-password                    (P1)
/reset-password/:token              (P1)
/about                              About the project and author
/disclaimer                         Simulation-only disclaimer
/privacy                            Privacy policy
/terms                              Terms of use
/roadmap                            Public roadmap teaser (post-v1 aircraft)
*                                   404
```

### 19.2 Global navigation

- **Header (desktop):** Logo → `/`; nav: Learn, Challenges, Reference, (Tools P1);
  right side: theme toggle, "Log in"/"Sign up" or avatar menu (Dashboard, Account,
  Log out).
- **Header (mobile):** Logo, theme toggle, menu button → slide-over drawer with the same
  links.
- **Footer:** About, Disclaimer, Privacy, Terms, Roadmap, GitHub link (optional),
  "For simulation use only" line, © year.
- **Skip link:** "Skip to main content" as first focusable element.

### 19.3 Key user flows

**Flow A — Visitor to first lesson (US-01, US-02)**

1. Land on `/` → hero CTA "Start the first lesson" → `/learn/m0-getting-started/l0-1-welcome`.
2. Lesson player shows a non-blocking banner "Sign up to save your progress".
3. At the end: "Next lesson" and a sign-up prompt.

**Flow B — Sign up and continue (US-03, US-13)**

1. `/signup` → email, display name, password, accept terms → account created → signed in.
2. Redirect to where the user came from (`returnTo`), or `/dashboard`.
3. Anonymous progress from the current browser session (lessons viewed, quiz answers in
   `sessionStorage`) is offered for import: "Save the 2 lessons you just finished?" (P1;
   P0 is simply starting fresh).

**Flow C — Challenge (US-09 to US-12)**

1. `/challenges/c4-3-full-stop-landing` → **Brief** tab: goal, setup table (with copy
   buttons for ICAO codes), procedure, criteria preview, tips.
2. "I'm set up — start" → **Fly** tab: compact procedure checklist, key numbers, timer
   (optional), "Open fly mode on another screen" link (QR code for phones, P1).
3. "Finished flying" → **Debrief** tab: rubric form (tier per criterion), notes, reflection
   questions → live score preview → Submit.
4. Result screen: tier badge, percentage, per-criterion feedback, "Fly again", next
   challenge suggestion, attempt history.
5. Not signed in at step 3 → prompt to sign in; the form state is preserved in
   `sessionStorage` and restored after login.

**Flow D — Mid-flight lookup (US-14)**

1. On a phone/tablet: `/reference/speeds` bookmarked → large-type V-speed table.
2. Or in a challenge's Fly tab, "Key numbers" panel.

---

## 20. Page-by-page specifications

For each page: purpose, content, states (loading, empty, error), and acceptance criteria.

### 20.1 Landing page `/`

- **Purpose:** explain the product in 30 seconds and get people into lesson 1.
- **Sections:**
  1. Hero: headline "Learn to fly the Cessna 172 in Microsoft Flight Simulator 2024 —
     the way real pilots do." Sub-headline; primary CTA "Start lesson 1 (free)";
     secondary CTA "See the curriculum". Hero image: your own MSFS screenshot of a C172
     over the Bay Area (or an illustration).
  2. "How it works": Learn → See → Try → Fly → Reflect, with icons.
  3. Live widget demo: embedded W3 (airspeed) or W7 (pattern) — interactive right on the
     landing page.
  4. Curriculum preview: 9 module cards with lesson counts.
  5. "What a challenge looks like": screenshot of a brief and debrief.
  6. Honest scope: "v1 covers the Cessna 172. The road to the A380 is next." → `/roadmap`.
  7. FAQ: Do I need a yoke? Which MSFS edition? Is this real flight training? Is it free?
     Xbox or PC?
  8. Final CTA.
- **AC:** Lighthouse targets (Section 4.2); CTA visible above the fold at 375×667; no
  layout shift from the hero image (explicit width/height).

### 20.2 Curriculum map `/learn`

- **Purpose:** show the whole course and progress.
- **Content:** vertical "flight path" of modules; each module card: number, title,
  summary, lessons count, challenges count, progress ring (signed in), status
  (not started / in progress / complete). Expand to show lessons and challenges with
  status icons.
- **States:** loading skeleton; error with retry.
- **AC:** keyboard navigable; progress matches dashboard; P1 items labelled "Bonus".

### 20.3 Module overview `/learn/:moduleSlug`

- **Content:** title, summary, "What you'll be able to do" (aggregated objectives),
  estimated time, list of lessons (ordered) and challenges; "Start/Continue module" CTA.
- **AC:** 404 page for an unknown slug; "Continue" goes to the first incomplete lesson.

### 20.4 Lesson player `/learn/:moduleSlug/:lessonSlug`

- **Layout (desktop):** left sidebar with lesson sections (from `##` headings) and
  progress; main column max ~720 px text with widgets allowed to go wider (~960 px);
  right rail (≥1280 px) with "Key numbers" and glossary terms used in this lesson.
- **Layout (mobile):** sections as a top "Step 2 of 6" dropdown; full-width content.
- **Top:** breadcrumb (Learn / Module / Lesson), title, est. time, objectives box.
- **Body:** rendered Markdown blocks: text, images, callouts, widgets, quizzes, embedded
  video (YouTube nocookie, click-to-load).
- **Bottom:** "Go deeper" resource cards; linked challenges ("Fly it: C4.3"); "Mark
  complete" button; previous/next lesson.
- **Behaviour:** scroll-spy updates the current section; last section viewed is saved
  (signed in) so "Continue" resumes there; "Mark complete" also auto-triggers (P1) when
  the learner reaches the end and answered all questions.
- **States:** loading skeleton; not found; not published (404); error.
- **AC:** US-06, US-07, US-08; widget keyboard access; print stylesheet renders text
  and images cleanly (P1).

### 20.5 Challenges list `/challenges`

- **Content:** filter bar (module, type, difficulty, status, priority); cards with ID,
  title, type icon, difficulty dots, time, best tier badge (signed in).
- **Default sort:** curriculum order. Filters reflected in URL query string.
- **AC:** filters combinable; empty state "No challenges match these filters — Clear
  filters".

### 20.6 Challenge page `/challenges/:slug`

- **Tabs:** Brief · Fly · Debrief · History (signed in).
- **Brief:** goal; setup table (Aircraft, Airport + link to airport card, Start state,
  Runway, Weather with the exact values, Time, Fuel/payload, Assistance, Traffic, ATC);
  recommended lessons with completion status; procedure; criteria table (read-only);
  common mistakes; tips; "Printable brief" (P1).
- **Fly:** big-type procedure steps with checkboxes (local state), key numbers card, optional
  stopwatch, random-event trigger when the challenge uses one (C5.5 engine failure beep,
  C6.6 diversion, C8.1 go-around), "Finished — debrief" button. Screen Wake Lock (P1).
- **Debrief:** rubric form: each criterion shows its tier descriptions as radio buttons
  (Gold/Silver/Bronze/Not met) or Met/Not met; notes textarea; reflection questions;
  "I paused during the challenge" checkbox where relevant; live score preview; Submit.
- **Result:** tier badge animation (respecting reduced motion), percentage, feedback per
  criterion ("Not met: Stabilised by 300 ft — review L4.3 section 'Stabilised approach'"),
  buttons.
- **History:** table of attempts: date, tier, %, notes excerpt; expand for full details.
- **AC:** US-09–US-12; submit disabled until all required criteria answered; server
  recomputes score; form resilient to page refresh (sessionStorage draft).

### 20.7 Fly mode `/challenges/:slug/fly`

- **Purpose:** a minimal, high-contrast, large-type view for a second monitor, tablet or
  phone. No header/footer. Dark theme by default.
- **Content:** same as the Fly tab; a "Back to challenge" link.
- **AC:** readable at arm's length (min 20 px body text); works offline after first load
  (P1, service worker).

### 20.8 Reference pages

- **Speeds `/reference/speeds`:** V-speed table, airspeed arcs (W3 in explore mode), power
  settings table (Section 8.5), "Last verified: date, sim version".
- **Checklists `/reference/checklists`:** list of phases (Appendix B); each opens W16.
- **Airports `/reference/airports`:** card grid; each card: ICAO, name, class, towered,
  runways, pattern info, frequencies (verified), notes, links (SkyVector, AirNav, FAA
  diagram), "Challenges here".
- **Glossary `/reference/glossary`:** search box (client-side), A–Z index, each term with
  definition and "Used in" lessons; deep-linkable `#term-slug`.
- **Resources `/reference/resources`:** filter by topic/type/free; each card: title,
  publisher, description, link, verified date.
- **AC:** US-14, US-15; all pages usable on a phone.

### 20.9 Dashboard `/dashboard`

- **Content:**
  1. Greeting and "Continue" card (last lesson or next recommended item).
  2. Overall progress: lessons completed / total P0, challenges passed / total P0, a
     progress bar per module.
  3. Next up: the next 3 items in curriculum order not completed.
  4. Recent attempts (last 5) with tiers.
  5. Stats: total attempts, gold count, "sim hours" estimate (sum of challenge est. times of
     attempts, labelled "estimated").
  6. Course complete state: badge and "What's next" (roadmap, VATSIM, discovery flight).
- **Empty state (new user):** "Welcome aboard! Start with Lesson 0.1" CTA.
- **AC:** US-05, US-13; loads in one API call (`GET /api/v1/me/dashboard`).

### 20.10 Account `/account`

- **Sections:** Profile (display name, email — read-only in v1), Preferences (theme:
  system/light/dark; cockpit variant: G1000/classic (P1); controller type:
  gamepad/stick/yoke — used to tailor tips (P1); show P1 bonus content: on/off),
  Security (change password), Data (export my data as JSON; delete account).
- **Delete account:** confirmation modal requiring typing "DELETE"; deletes user, progress,
  attempts and sessions; signs out; shows confirmation page.
- **AC:** US-16, US-17 (P1), US-21.

### 20.11 Auth pages

- **Sign up:** display name, email, password (min 12 chars, strength meter, show/hide),
  checkbox "I understand this is for simulation only and agree to the Terms". Errors
  inline. Rate limited.
- **Log in:** email, password, "Remember me" (30-day vs session cookie), link to sign up,
  forgot password (P1).
- **AC:** US-03, US-04; generic error "Email or password is incorrect" (no user
  enumeration); focus moves to the error summary on failure.

### 20.12 Static pages

- **About:** who built it and why, the long-term vision (C172 → A380), contact.
- **Disclaimer, Privacy, Terms:** see Section 57.
- **Roadmap:** aircraft ladder graphic (C172 → DA62 → King Air → CJ4 → A320 → 787 → A380 —
  final list TBD) and "Get notified" (P1).
- **404:** friendly "You've wandered off the taxiway" with links home and to /learn.

---

## 21. Design system

### 21.1 Brand

- **Name:** Learn-To-Fly (wordmark: "Learn to Fly" with a small wing/horizon mark).
- **Personality:** calm, precise, encouraging — like a good instructor. Inspired by
  cockpit displays (clear, high-contrast, purposeful colour) without being a skeuomorphic
  cockpit.
- **Logo:** simple SVG mark (a horizon line with a small airplane silhouette in a circle).
  Create in Figma or directly as SVG. Also export favicon (32, 180 apple-touch, 192, 512
  maskable) and an Open Graph image (1200×630).

### 21.2 Colour tokens

Defined as CSS custom properties and mapped into Tailwind's theme. Values are starting
points; check contrast with a tool (e.g. WebAIM contrast checker) before finalising.

| Token                      | Light                  | Dark               | Use                                                          |
| -------------------------- | ---------------------- | ------------------ | ------------------------------------------------------------ |
| `--color-bg`               | #F7F9FC                | #0B1220            | Page background                                              |
| `--color-surface`          | #FFFFFF                | #111A2E            | Cards, panels                                                |
| `--color-surface-2`        | #EEF2F8                | #18233A            | Nested surfaces                                              |
| `--color-border`           | #D5DDEA                | #26324D            | Borders, dividers                                            |
| `--color-text`             | #0F172A                | #E6ECF5            | Primary text                                                 |
| `--color-text-muted`       | #475569                | #9AA8BF            | Secondary text                                               |
| `--color-primary`          | #1D4ED8                | #60A5FA            | Links, primary buttons ("sky blue")                          |
| `--color-primary-contrast` | #FFFFFF                | #0B1220            | Text on primary                                              |
| `--color-accent`           | #D97706                | #FBBF24            | Highlights ("amber annunciator")                             |
| `--color-success`          | #15803D                | #4ADE80            | Complete, pass                                               |
| `--color-warning`          | #B45309                | #FCD34D            | Caution callouts                                             |
| `--color-danger`           | #B91C1C                | #F87171            | Errors, safety callouts                                      |
| `--color-magenta`          | #A21CAF                | #E879F9            | GPS course lines, non-towered airports (aviation convention) |
| `--color-cyan`             | #0E7490                | #22D3EE            | Selected/bug values (G1000 convention)                       |
| `--color-gold`             | #B7791F                | #F6C453            | Gold tier                                                    |
| `--color-silver`           | #6B7280                | #CBD5E1            | Silver tier                                                  |
| `--color-bronze`           | #9A5B2E                | #D69E6B            | Bronze tier                                                  |
| Arc tokens                 | white/green/yellow/red | same hues adjusted | Airspeed arcs in W3                                          |

### 21.3 Typography

- **UI & body:** Inter (Google Fonts, variable), fallback system-ui.
- **Numbers & instrument readouts:** JetBrains Mono or Roboto Mono (tabular figures) for
  speeds, altitudes, frequencies.
- **Scale (rem):** 0.75, 0.875, 1 (body 16 px), 1.125, 1.25, 1.5, 1.875, 2.25, 3.
- **Line height:** 1.6 body, 1.25 headings. **Measure:** 60–75 characters.
- Load fonts with `font-display: swap` and preconnect; subset to Latin.

### 21.4 Spacing, radius, elevation

- Spacing: Tailwind default 4-px scale.
- Radius: 6 px (inputs, buttons), 12 px (cards), 9999 (pills).
- Shadows: two levels only; in dark mode use borders instead of heavy shadows.

### 21.5 Core components (in `src/components/`)

| Component                                                                             | Notes                                                                                           |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `Button`                                                                              | variants: primary, secondary, ghost, danger; sizes sm/md/lg; loading state; `asChild` for links |
| `Link`                                                                                | wraps router link; external variant with icon                                                   |
| `Card`                                                                                | header/body/footer slots                                                                        |
| `Badge`                                                                               | status (complete, in progress), tier (gold/silver/bronze), priority (Bonus)                     |
| `ProgressBar`, `ProgressRing`                                                         | accessible (`role="progressbar"`)                                                               |
| `Tabs`                                                                                | roving tabindex, ARIA tabs pattern                                                              |
| `Modal` / `Dialog`                                                                    | focus trap, Esc to close, returns focus                                                         |
| `Drawer`                                                                              | mobile nav                                                                                      |
| `Tooltip` / `Popover`                                                                 | glossary hover-cards (P1)                                                                       |
| `Callout`                                                                             | types from Section 18.4 with icons                                                              |
| `Table`                                                                               | responsive (stacks on mobile)                                                                   |
| `FormField`, `Input`, `PasswordInput`, `Textarea`, `Select`, `Checkbox`, `RadioGroup` | labels, hints, errors wired with `aria-describedby`                                             |
| `Skeleton`                                                                            | loading placeholders                                                                            |
| `EmptyState`, `ErrorState`                                                            | icon, message, action                                                                           |
| `Toast`                                                                               | polite live region notifications                                                                |
| `DifficultyDots`, `TierBadge`, `TypeIcon`                                             | challenge metadata                                                                              |
| `Stopwatch`                                                                           | challenge fly mode                                                                              |
| `KeyNumbers`                                                                          | V-speed quick panel                                                                             |
| `ThemeToggle`                                                                         | system/light/dark                                                                               |
| `Breadcrumbs`                                                                         | nav landmark                                                                                    |

Consider using **Radix UI primitives** (or React Aria) for Tabs, Dialog, Popover,
RadioGroup to get accessibility right with less effort — they are unstyled, so they
fit Tailwind. Record the choice in the Decision Log.

### 21.6 Iconography

- Lucide icons (open-source, tree-shakeable) for UI.
- Custom SVG icons for challenge types (takeoff, landing, pattern, stall, nav, radio,
  capstone, procedure).

### 21.7 Motion

- Durations 150–250 ms; ease-out for entering, ease-in for exiting.
- No motion for essential information; everything respects `prefers-reduced-motion`.

### 21.8 Design workflow

- [ ] Low-fidelity wireframes for Landing, Learn, Lesson, Challenge (4 tabs), Dashboard —
      paper or Excalidraw. (P0, before Phase 3.)
- [ ] High-fidelity mock-ups for Landing, Lesson and Challenge in Figma (free tier) —
      optional; the component library can be designed in code instead.
- [ ] A `/dev/components` route (development only) showing every component in every state
      (a lightweight alternative to Storybook).

---

## 22. Accessibility

Target: **WCAG 2.2 Level AA** for all P0 pages and widgets.

### 22.1 Requirements

- Semantic HTML landmarks: `header`, `nav`, `main`, `footer`; one `h1` per page.
- Keyboard: everything operable; visible focus indicator (2 px outline with offset,
  ≥ 3:1 contrast); no keyboard traps; logical tab order.
- Colour contrast: text ≥ 4.5:1 (≥ 3:1 for large text); UI components/graphics ≥ 3:1.
- Never colour alone: airspeed arcs have labels; tiers have text; status icons have text.
- Forms: visible labels, errors described in text and linked with `aria-describedby`,
  error summary on submit.
- Target size ≥ 24×24 CSS px (WCAG 2.2 minimum) — we use 44×44 for touch.
- Motion: respect `prefers-reduced-motion`; no flashing content.
- Media: YouTube embeds have captions (choose videos with captions); transcripts or
  summaries for key videos.
- Language: `<html lang="en">`.
- Page titles: unique, "Lesson title · Learn-To-Fly".
- Route changes: move focus to the page `h1` and announce the new page title.
- Zoom: usable at 200% and reflow at 320 px width (no horizontal scrolling for text).

### 22.2 Testing

- Automated: `axe-core` in Playwright tests for every main page (fail on serious/critical).
- ESLint `jsx-a11y` plugin.
- Manual: keyboard-only walk-through of flows A–D each release; screen reader smoke test
  with NVDA (Windows) and VoiceOver (macOS/iOS).
- Lighthouse accessibility ≥ 95.

---

## 23. Responsive behaviour

### 23.1 Breakpoints (Tailwind defaults)

| Name  | Min width | Typical device                        |
| ----- | --------- | ------------------------------------- |
| base  | 0         | Phones (375 px design reference)      |
| `sm`  | 640 px    | Large phones landscape                |
| `md`  | 768 px    | Tablets portrait                      |
| `lg`  | 1024 px   | Tablets landscape, small laptops      |
| `xl`  | 1280 px   | Laptops/desktops (right rail appears) |
| `2xl` | 1536 px   | Large monitors                        |

### 23.2 Specific behaviours

- Lesson sidebar collapses into a step dropdown below `lg`.
- Tables become stacked "cards" below `md`.
- Widgets scale to container width, with controls moving below the diagram on narrow
  screens.
- Fly mode uses the full viewport with large type on every size.
- Test devices: iPhone SE size (375×667), a modern Android (412×915), iPad (820×1180),
  laptop (1366×768), desktop (1920×1080), plus an ultrawide second monitor half-width
  (~1280 px) since many simmers put the site next to the sim.

---

# Part V — Technical design

## 24. Architecture overview

### 24.1 High-level diagram

```
                    ┌────────────────────────────────────────────┐
  Browser           │  React SPA (Vite build, served as static)  │
  (desktop/tablet/  │  - React Router (routes, lazy pages)       │
   phone)           │  - TanStack Query (server state)           │
                    │  - Widgets (SVG, pure models)              │
                    └───────────────┬────────────────────────────┘
                                    │ same origin, HTTPS
                                    │ /api/v1/*  (JSON, session cookie)
                    ┌───────────────▼────────────────────────────┐
  Render web        │  Node.js 24 LTS + Express 5                │
  service           │  - helmet, compression, rate limiting      │
                    │  - express-session (connect-mongo store)   │
                    │  - Zod validation (shared schemas)         │
                    │  - Routes → controllers → services → models│
                    │  - Serves /dist static files + SPA fallback│
                    └───────────────┬────────────────────────────┘
                                    │ MongoDB driver (TLS)
                    ┌───────────────▼────────────────────────────┐
  MongoDB Atlas     │  Database: learntofly                      │
                    │  users, sessions, modules, lessons,        │
                    │  challenges, lessonProgress,               │
                    │  challengeAttempts, glossary, resources,   │
                    │  airports, aircraft, contentReleases       │
                    └────────────────────────────────────────────┘

  Repo content/ (Markdown + YAML) ──validate──► seed script ──upsert──► MongoDB
```

### 24.2 Request lifecycle (example: submit a challenge attempt)

1. User submits the debrief form → `POST /api/v1/challenges/c4-3-full-stop-landing/attempts`
   with `{ criteriaResults, notes, reflections, paused }`.
2. Express: request ID middleware → logger → helmet → rate limit → JSON body parser
   (limit 100 kb) → session → `requireAuth` → Zod `validateBody(AttemptCreateSchema)`.
3. Controller → `attemptService.create(userId, slug, input)`:
   - loads the published challenge (with version),
   - validates criteria IDs match the challenge's current rubric,
   - computes the score with `shared/scoring.ts`,
   - inserts `challengeAttempts` document,
   - updates the user's cached best result (denormalised in `challengeProgress`).
4. Returns `201` with the attempt and the new best result.
5. Client invalidates `['challenge', slug]`, `['dashboard']` queries.

### 24.3 Why this architecture

- Single deployable (D-06) and server sessions (D-07) keep auth simple and secure.
- Shared Zod schemas prevent client/server drift.
- Content is static-ish and cacheable; user data is small. MongoDB Atlas free tier
  (512 MB) is ample for v1 (estimate: content < 5 MB; 1,000 users × 100 attempts × 2 KB
  ≈ 200 MB worst case).

---

## 25. Repository structure

The CLAUDE.md folder structure (`src/components`, `src/assets`, `src/features`,
`src/layouts`, `src/pages`) is kept for the **client**. The server, shared code and
content live beside it at the repo root. (Update CLAUDE.md's "Folder Structure" section
in Phase 1 to show this full tree.)

```
Learn-To-Fly/
├─ .github/
│  ├─ workflows/
│  │  ├─ ci.yml                    # lint, typecheck, test, build, content validate
│  │  └─ links.yml                 # weekly external link check (P1)
│  └─ pull_request_template.md
├─ content/                        # Authoring source of truth (D-08, D-09)
│  ├─ aircraft.yaml                # C172 data: V-speeds, arcs, perf model, variants
│  ├─ modules.yaml                 # 9 modules, order, metadata
│  ├─ lessons/
│  │  ├─ m0-getting-started/
│  │  │  ├─ l0-1-welcome.md
│  │  │  └─ ...
│  │  └─ ...
│  ├─ challenges/
│  │  ├─ c0-1-first-flight.yaml
│  │  └─ ...
│  ├─ checklists.yaml              # our own wording (Appendix B)
│  ├─ glossary.yaml
│  ├─ resources.yaml
│  ├─ airports.yaml
│  ├─ airspace-profile.yaml        # W11 data
│  └─ presets.yaml                 # weather/start/load presets (Section 15.1)
├─ public/                         # static files copied as-is (favicons, robots.txt, og image)
├─ scripts/
│  ├─ content-validate.ts
│  ├─ content-seed.ts
│  ├─ check-links.ts
│  └─ create-admin.ts              # (P1) promote a user to admin
├─ server/
│  ├─ src/
│  │  ├─ app.ts                    # builds the Express app (no listen) — testable
│  │  ├─ index.ts                  # connects DB, starts server, graceful shutdown
│  │  ├─ config/
│  │  │  ├─ env.ts                 # Zod-validated environment variables
│  │  │  └─ db.ts                  # Mongoose connection
│  │  ├─ middleware/
│  │  │  ├─ requestId.ts
│  │  │  ├─ logger.ts
│  │  │  ├─ requireAuth.ts
│  │  │  ├─ validate.ts
│  │  │  ├─ rateLimit.ts
│  │  │  ├─ csrf.ts
│  │  │  ├─ notFound.ts
│  │  │  └─ errorHandler.ts
│  │  ├─ models/                   # Mongoose schemas (Section 27)
│  │  ├─ routes/                   # one router per resource
│  │  ├─ controllers/
│  │  ├─ services/                 # business logic, no req/res
│  │  ├─ utils/                    # HttpError, asyncHandler, etc.
│  │  └─ types/
│  └─ tests/                       # Vitest + Supertest + mongodb-memory-server
├─ shared/                         # imported by client, server and scripts
│  ├─ schemas/                     # Zod schemas: content, API I/O
│  ├─ scoring.ts                   # challenge scoring (Section 15.2)
│  ├─ progress.ts                  # module/course completion rules
│  ├─ aviation/                    # pure maths: wind triangle, crosswind, load factor, VOR
│  └─ constants.ts
├─ src/                            # React client (CLAUDE.md structure)
│  ├─ assets/                      # images, lesson screenshots, fonts (if self-hosted)
│  │  └─ lessons/<module>/...
│  ├─ components/                  # reusable UI (Section 21.5)
│  ├─ features/                    # feature modules (own components, hooks, api)
│  │  ├─ auth/
│  │  ├─ curriculum/
│  │  ├─ lessons/                  # lesson renderer, block components
│  │  ├─ quizzes/
│  │  ├─ challenges/
│  │  ├─ progress/
│  │  ├─ dashboard/
│  │  ├─ reference/
│  │  ├─ account/
│  │  ├─ tools/                    # (P1)
│  │  └─ widgets/                  # W1–W20, each in its own folder with model.ts
│  ├─ layouts/                     # AppLayout, LessonLayout, FlyModeLayout, AuthLayout
│  ├─ pages/                       # route-level components (thin; compose features)
│  ├─ lib/                         # apiClient, queryClient, router, utils
│  ├─ hooks/                       # generic hooks (useMediaQuery, useLocalStorage…)
│  ├─ styles/                      # Tailwind entry, tokens.css
│  ├─ test/                        # test setup, MSW handlers
│  ├─ App.tsx
│  ├─ router.tsx
│  └─ main.tsx
├─ e2e/                            # Playwright tests
├─ index.html
├─ package.json
├─ tsconfig.json                   # base
├─ tsconfig.client.json
├─ tsconfig.server.json
├─ vite.config.ts
├─ vitest.workspace.ts             # client (jsdom) + server (node) projects
├─ playwright.config.ts
├─ eslint.config.js
├─ .prettierrc
├─ .editorconfig
├─ .nvmrc                          # "24"
├─ .env.example
├─ .gitignore
├─ render.yaml                     # Render blueprint (infrastructure as code)
├─ CLAUDE.md
├─ README.md
└─ plan.md
```

### 25.1 Why a single `package.json` (not a monorepo with workspaces)

- One install, one lockfile, one set of scripts — fewer moving parts for a solo project.
- The client and server share TypeScript config and `shared/`.
- If the project grows (e.g. a SimConnect companion app post-v1), migrate to npm
  workspaces then.

### 25.2 Import aliases

- `@/` → `src/`
- `@shared/` → `shared/`
- `@server/` → `server/src/` (server only)

Configured in `tsconfig.*.json` and `vite.config.ts` (and `vitest` config).

---

## 26. Tech stack and versions

Pin exact versions in `package.json` when you install (use the latest **stable** release
at that time; avoid release candidates). Versions below are the expected majors.

### 26.1 Runtime and tooling

| Tool       | Version           | Notes                                                                                              |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------- |
| Node.js    | 24.x LTS          | Check the release schedule; use the Active LTS line at setup time. Pin via `.nvmrc` and `engines`. |
| npm        | bundled with Node | Use `npm ci` in CI.                                                                                |
| TypeScript | 5.x (latest)      | `strict: true`.                                                                                    |
| Git        | latest            |                                                                                                    |
| MongoDB    | Atlas (8.x)       | Local: MongoDB Community via Docker **or** Atlas dev cluster.                                      |

### 26.2 Client

| Package                                                           | Purpose                                              |
| ----------------------------------------------------------------- | ---------------------------------------------------- |
| `react`, `react-dom` (19.x)                                       | UI                                                   |
| `vite` + `@vitejs/plugin-react`                                   | Build/dev server                                     |
| `react-router` (7.x)                                              | Routing (data/library mode, not framework mode)      |
| `@tanstack/react-query` (5.x)                                     | Server state, caching                                |
| `tailwindcss` (4.x) + `@tailwindcss/vite`                         | Styling                                              |
| `zod` (latest major)                                              | Validation (shared)                                  |
| `react-hook-form` + `@hookform/resolvers`                         | Forms                                                |
| `react-markdown`, `remark-gfm`, `remark-directive`, `rehype-slug` | Lesson rendering (or pre-parse on server — see 28.4) |
| `@radix-ui/*` (selected) or `react-aria-components`               | Accessible primitives                                |
| `lucide-react`                                                    | Icons                                                |
| `clsx`, `tailwind-merge`                                          | Class helpers                                        |
| `motion` (optional)                                               | Widget animations (respect reduced motion)           |

### 26.3 Server

| Package                                              | Purpose                                                                       |
| ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| `express` (5.x)                                      | HTTP server (async error handling built in)                                   |
| `mongoose` (latest major)                            | ODM                                                                           |
| `express-session` + `connect-mongo`                  | Sessions in MongoDB                                                           |
| `argon2` (or `bcrypt`)                               | Password hashing — prefer argon2id                                            |
| `helmet`                                             | Security headers                                                              |
| `express-rate-limit` (+ `rate-limit-mongo` store P1) | Rate limiting                                                                 |
| `compression`                                        | Gzip/Brotli for API responses (static assets are pre-compressed at build, P1) |
| `pino` + `pino-http`                                 | Structured logging                                                            |
| `cors`                                               | Only for local dev if not proxying (prefer Vite proxy → not needed)           |
| `dotenv`                                             | Local env loading                                                             |
| `gray-matter`, `yaml`, `unified`/`remark-*`          | Content scripts                                                               |

### 26.4 Testing and quality

| Package                                                                                                                                    | Purpose                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| `vitest` + `@vitest/coverage-v8`                                                                                                           | Unit and integration tests         |
| `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`                                                       | Component tests                    |
| `jsdom`                                                                                                                                    | Client test environment            |
| `msw`                                                                                                                                      | Mock API in client tests           |
| `supertest`                                                                                                                                | API tests                          |
| `mongodb-memory-server`                                                                                                                    | In-memory MongoDB for server tests |
| `@playwright/test` + `@axe-core/playwright`                                                                                                | E2E and accessibility              |
| `eslint` (flat config), `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import` (or `import-x`) | Linting                            |
| `prettier`                                                                                                                                 | Formatting                         |
| `husky` + `lint-staged`                                                                                                                    | Pre-commit checks                  |
| `tsx`                                                                                                                                      | Run TS scripts/server in dev       |
| `concurrently`                                                                                                                             | Run client and server together     |

### 26.5 Services and accounts

| Service                               | Plan                                                     | Purpose                     |
| ------------------------------------- | -------------------------------------------------------- | --------------------------- |
| GitHub                                | Free                                                     | Repo, Actions CI            |
| MongoDB Atlas                         | M0 free (dev), M0/M10 (prod)                             | Database                    |
| Render                                | Starter web service (~$7/mo) for prod; free for previews | Hosting                     |
| Domain registrar (optional)           | ~$10–15/yr                                               | Custom domain               |
| Resend or Postmark (P1)               | Free tier                                                | Password reset emails       |
| Sentry (optional)                     | Free tier                                                | Error monitoring            |
| Plausible/Umami (optional)            | Self-host or paid                                        | Cookieless analytics (D-14) |
| UptimeRobot / Better Stack (optional) | Free tier                                                | Uptime monitoring           |

---

## 27. Data model

All collections use Mongoose with `timestamps: true` (createdAt, updatedAt) unless
noted. Content collections are written **only** by the seed script.

### 27.1 `users`

| Field                        | Type                                               | Notes                                            |
| ---------------------------- | -------------------------------------------------- | ------------------------------------------------ |
| `_id`                        | ObjectId                                           |                                                  |
| `email`                      | string                                             | unique, lowercase, trimmed; index unique         |
| `emailVerifiedAt`            | Date \| null                                       | P1 (verification email)                          |
| `passwordHash`               | string                                             | argon2id; `select: false`                        |
| `displayName`                | string                                             | 2–40 chars                                       |
| `role`                       | enum `learner` \| `admin`                          | default `learner`                                |
| `preferences.theme`          | enum `system` \| `light` \| `dark`                 | default `system`                                 |
| `preferences.cockpitVariant` | enum `g1000` \| `classic`                          | default `g1000` (P1 effect)                      |
| `preferences.controller`     | enum `gamepad` \| `stick` \| `yoke` \| `unknown`   | default `unknown`                                |
| `preferences.showBonus`      | boolean                                            | default true                                     |
| `lastLoginAt`                | Date                                               |                                                  |
| `lastActivity`               | object `{ type: 'lesson'\|'challenge', slug, at }` | powers "Continue"                                |
| `passwordChangedAt`          | Date                                               | invalidate older sessions                        |
| `deletedAt`                  | Date \| null                                       | not used — deletes are hard deletes (Section 32) |

Indexes: `{ email: 1 }` unique.

### 27.2 `modules`

| Field                             | Type     | Notes                                       |
| --------------------------------- | -------- | ------------------------------------------- |
| `slug`                            | string   | unique                                      |
| `code`                            | string   | "M4"                                        |
| `order`                           | number   | 0–8                                         |
| `title`, `summary`, `description` | string   |                                             |
| `icon`                            | string   | icon key                                    |
| `lessonSlugs`                     | string[] | ordered                                     |
| `challengeSlugs`                  | string[] | ordered                                     |
| `estimatedMinutes`                | number   |                                             |
| `published`                       | boolean  |                                             |
| `contentHash`                     | string   | SHA-256 of source file for change detection |
| `version`                         | number   | increments when `contentHash` changes       |

### 27.3 `lessons`

| Field                          | Type              | Notes                                   |
| ------------------------------ | ----------------- | --------------------------------------- |
| `slug`                         | string            | unique                                  |
| `code`                         | string            | "L4.3"                                  |
| `moduleSlug`                   | string            | index                                   |
| `order`                        | number            | within module                           |
| `priority`                     | enum `P0` \| `P1` |                                         |
| `title`, `summary`             | string            |                                         |
| `objectives`                   | string[]          |                                         |
| `estimatedMinutes`             | number            |                                         |
| `prerequisites`                | string[]          | lesson slugs                            |
| `widgets`                      | string[]          | widget names used (for lazy preloading) |
| `challengeSlugs`               | string[]          |                                         |
| `resources`                    | string[]          | resource slugs ("Go deeper")            |
| `glossaryTerms`                | string[]          | term slugs used (auto-extracted)        |
| `blocks`                       | LessonBlock[]     | pre-parsed content (28.4)               |
| `sections`                     | `{ id, title }[]` | from `##` headings                      |
| `published`                    | boolean           |                                         |
| `contentHash`, `version`       |                   |                                         |
| `lastVerifiedAt`, `simVersion` | Date, string      | from frontmatter                        |

`LessonBlock` is a discriminated union: `markdown` (sanitised Markdown/HTML AST or
Markdown string), `heading`, `image` (src, alt, caption, width, height), `callout`
(type, markdown), `widget` (name, props), `quiz` (id, type, prompt, options, answer,
explanation), `video` (provider, id, title, captions: bool), `checklist` (slug).

Indexes: `{ slug: 1 }` unique, `{ moduleSlug: 1, order: 1 }`.

### 27.4 `aircraft`

Single document for v1 (`slug: "c172"`): `name`, `variants[]` (`id`, `simName`,
`avionics`, `notes`), `vspeeds` (map), `arcs`, `limits`, `specs`, `powerSettings[]`,
`performanceModel` (W5 table), `verifiedAt`, `simVersion`.

### 27.5 `challenges`

| Field                                 | Type                                                        | Notes                                                                                                                                                                                                                                                                                                                |
| ------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`, `code`, `title`               | string                                                      |                                                                                                                                                                                                                                                                                                                      |
| `moduleSlug`, `lessonSlugs`           | string, string[]                                            |                                                                                                                                                                                                                                                                                                                      |
| `priority`                            | `P0` \| `P1`                                                |                                                                                                                                                                                                                                                                                                                      |
| `type`                                | enum (Section 15.1)                                         |                                                                                                                                                                                                                                                                                                                      |
| `difficulty`                          | 1–5                                                         |                                                                                                                                                                                                                                                                                                                      |
| `estimatedMinutes`                    | number                                                      |                                                                                                                                                                                                                                                                                                                      |
| `goal`                                | string (Markdown)                                           |                                                                                                                                                                                                                                                                                                                      |
| `setup`                               | object                                                      | `aircraftVariant`, `airportIcao`, `startState`, `startDetails` (runway, parking, air-start position/alt/hdg/speed), `weatherPreset` or `weather` {layers, visibility, temperatureC, altimeterInHg}, `timeLocal`, `datePreset`, `loadPreset`, `assistance` overrides, `aiTraffic`, `atc`, `crashDamage`, `flightPlan` |
| `procedure`                           | string[] (Markdown)                                         | steps                                                                                                                                                                                                                                                                                                                |
| `criteria`                            | Criterion[]                                                 | `id`, `label`, `kind` (`tiered`\|`binary`), `tiers` {gold, silver, bronze} descriptions, `required`, `weight`, `reviewLink` (lesson slug + section id)                                                                                                                                                               |
| `randomEvents`                        | `{ id, label, minSeconds, maxSeconds, message, chance? }[]` | C5.5, C6.6, C8.1                                                                                                                                                                                                                                                                                                     |
| `planningFields`                      | `{ id, label, type }[]`                                     | C8.2 planning inputs                                                                                                                                                                                                                                                                                                 |
| `commonMistakes`, `tips`              | string[]                                                    |                                                                                                                                                                                                                                                                                                                      |
| `debriefQuestions`                    | `{ id, prompt }[]`                                          |                                                                                                                                                                                                                                                                                                                      |
| `published`, `contentHash`, `version` |                                                             |                                                                                                                                                                                                                                                                                                                      |

Indexes: `{ slug: 1 }` unique, `{ moduleSlug: 1 }`, `{ 'setup.airportIcao': 1 }`.

### 27.6 `lessonProgress`

| Field                      | Type                                                                     | Notes                                                |
| -------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------- |
| `userId`                   | ObjectId                                                                 | ref users                                            |
| `lessonSlug`               | string                                                                   |                                                      |
| `status`                   | `in_progress` \| `completed`                                             | (absence = not started)                              |
| `lastSectionId`            | string                                                                   | resume point                                         |
| `quizAnswers`              | `{ questionId, firstAnswer, correctFirstTry, lastAnswer, answeredAt }[]` |                                                      |
| `startedAt`, `completedAt` | Date                                                                     |                                                      |
| `lessonVersionCompleted`   | number                                                                   | to flag "lesson updated since you completed it" (P1) |

Indexes: `{ userId: 1, lessonSlug: 1 }` unique; `{ userId: 1, updatedAt: -1 }`.

### 27.7 `challengeAttempts` and `challengeProgress`

**`challengeAttempts`** (append-only):

| Field                               | Type                                                                      | Notes                                                     |
| ----------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------- |
| `userId`                            | ObjectId                                                                  |                                                           |
| `challengeSlug`                     | string                                                                    |                                                           |
| `challengeVersion`                  | number                                                                    | rubric version used                                       |
| `startedAt`                         | Date \| null                                                              | when "Start" was pressed (client-provided, informational) |
| `submittedAt`                       | Date                                                                      | server time                                               |
| `criteriaResults`                   | `{ criterionId, result: 'gold'\|'silver'\|'bronze'\|'not_met'\|'met' }[]` |                                                           |
| `planning`                          | object                                                                    | C8.2 planning inputs                                      |
| `checklistTicks`                    | `{ itemId, at }[]`                                                        | C1.1/C3.1                                                 |
| `randomEventsFired`                 | `{ id, at }[]`                                                            |                                                           |
| `paused`                            | boolean                                                                   |                                                           |
| `notes`                             | string ≤ 2,000                                                            |                                                           |
| `reflections`                       | `{ questionId, answer ≤ 1,000 }[]`                                        |                                                           |
| `points`, `maxPoints`, `percentage` | number                                                                    | computed server-side                                      |
| `passed`                            | boolean                                                                   |                                                           |
| `tier`                              | `gold`\|`silver`\|`bronze`\|`none`                                        |                                                           |

Indexes: `{ userId: 1, challengeSlug: 1, submittedAt: -1 }`, `{ userId: 1, submittedAt: -1 }`.

**`challengeProgress`** (one per user × challenge; denormalised best result for fast
dashboards): `userId`, `challengeSlug`, `bestAttemptId`, `bestTier`, `bestPercentage`,
`passed`, `attemptsCount`, `lastAttemptAt`. Unique index `{ userId: 1, challengeSlug: 1 }`.

### 27.8 `airports`

`icao` (unique), `name`, `city`, `elevationFt`, `airspaceClass`, `towered`, `runways[]`,
`frequencies[]`, `patternNotes`, `notes[]`, `links` {skyvector, airnav, diagram},
`verifiedAt`, `verifiedAgainst[]`, `published`.

### 27.9 `glossary` and `resources`

- **glossary:** `slug`, `term`, `aliases[]`, `definition` (Markdown, ≤ 80 words),
  `related[]`, `source` (e.g. "P/CG"), `lessonSlugs[]` (computed).
- **resources:** `slug`, `title`, `publisher`, `url`, `type` (`handbook`, `regulation`,
  `chart`, `tool`, `video`, `article`, `course`, `community`, `sim`), `topics[]`, `free`,
  `description`, `verifiedAt`.

### 27.10 `checklists`

`slug`, `title`, `phase`, `mode` (`read-do` \| `do-verify`), `items[]` (`id`, `item`,
`action`, `note`), `aircraftSlug`, `verifiedAt`.

### 27.11 `sessions`

Managed by `connect-mongo`: `_id` (session id), `expires`, `session` (serialized:
`userId`, `csrfSecret`, `createdAt`). TTL index on `expires`.

### 27.12 `contentReleases`

One document per seed run: `releasedAt`, `gitSha`, `counts` {modules, lessons, …},
`changed[]` (slugs whose version increased), `validatorWarnings`. Shown on an admin-only
debug endpoint and useful for "What's new" (P1).

---

## 28. Content pipeline

### 28.1 Overview

```
content/*.yaml, content/lessons/**/*.md
        │
        ▼
scripts/content-validate.ts     ← runs in CI on every PR
  - parse YAML / frontmatter / Markdown directives
  - validate with shared Zod schemas
  - cross-reference checks (slugs exist, no orphans, order unique)
  - aviation token checks ({{vspeed.vy}} exist)
  - forbid `verify` callouts in published content
  - image files exist + alt text present + size limits
        │
        ▼
scripts/content-seed.ts         ← run manually or on deploy
  - compute contentHash per item; bump version if changed
  - upsert by slug (bulkWrite)
  - unpublish items removed from the repo (never delete — attempts reference them)
  - write contentReleases document
```

### 28.2 Lesson file format (full template in Appendix D)

```markdown
---
slug: l4-3-normal-approach-and-landing
code: L4.3
module: m4-takeoffs-patterns-landings
order: 3
priority: P0
title: Normal approach and landing
summary: Fly a stabilised approach and land in the touchdown zone.
estimatedMinutes: 25
prerequisites: [l4-2-the-traffic-pattern]
objectives:
  - Fly a stabilised approach by 300 ft AGL.
  - Use the aiming point and PAPI to judge the glide path.
  - Flare and touch down on the main wheels near the touchdown zone.
challenges: [c4-3-full-stop-landing, c4-7-three-circuit-session]
resources: [afh-ch9, boldmethod-landing]
published: true
lastVerifiedAt: 2026-11-02
simVersion: "SU x"
---

## Stabilised approach

...
```

### 28.3 Challenge file format

YAML mirroring Section 27.5. Full template in Appendix C.

### 28.4 Markdown directives

Parsed with `remark-directive` in the **seed script**, converting each lesson into
`blocks[]` (pre-parsed on the server so the client doesn't need the remark toolchain,
which keeps the bundle small).

| Directive                 | Example                                                          | Block                                              |
| ------------------------- | ---------------------------------------------------------------- | -------------------------------------------------- |
| Widget (leaf)             | `::widget{name="traffic-pattern" mode="explore" pattern="left"}` | `widget`                                           |
| Callout (container)       | `:::callout{type="sim"} … :::`                                   | `callout`                                          |
| Quiz (container)          | see Section 17.4                                                 | `quiz`                                             |
| Image (standard Markdown) | `![Alt text](m4-l3-flare.webp "Caption")`                        | `image` (width/height read from file at seed time) |
| Video (leaf)              | `::video{provider="youtube" id="abc123" title="…"}`              | `video`                                            |
| Checklist (leaf)          | `::checklist{slug="before-landing"}`                             | `checklist`                                        |
| Internal link             | `[[c4-3-full-stop-landing]]`                                     | converted to a link with the title                 |
| Aviation token            | `{{vspeed.vy}}` → "74 KIAS"                                      | replaced at seed time                              |

Plain Markdown between directives becomes `markdown` blocks. The client renders
`markdown` blocks with a light renderer (`react-markdown` + `remark-gfm`, no raw HTML
allowed → no XSS risk from content).

### 28.5 Validation rules (non-exhaustive)

- Every module's `lessonSlugs` exist and every lesson's `module` matches.
- Orders are unique and contiguous within a module.
- Every challenge references existing lessons and a known airport ICAO.
- Every resource slug referenced exists in `resources.yaml`.
- Every criterion `id` is unique within its challenge; weights 1–3; ≥ 1 required.
- Quiz: `single` has exactly one correct; `numeric` has a tolerance; all have
  explanations.
- Published lessons: no `verify` callouts; `lastVerifiedAt` present.
- Images: exist, ≤ 400 KB, have alt text ≥ 10 characters.
- Glossary: no duplicate terms/aliases.
- Warnings (non-blocking in dev, blocking in `--strict` for release): lesson section > 300
  words without a non-text block; estimated minutes missing; external URLs using `http:`.

### 28.6 Scripts

| Script     | Command                    | Notes                                                           |
| ---------- | -------------------------- | --------------------------------------------------------------- |
| Validate   | `npm run content:validate` | Exit code 1 on errors; `--strict` treats warnings as errors     |
| Seed       | `npm run content:seed`     | Uses `MONGODB_URI`; `--dry-run` prints the diff                 |
| Link check | `npm run content:links`    | HEAD/GET every external URL; report non-2xx (P0 before release) |
| Stats      | `npm run content:stats`    | Word counts, lessons per module, reading time                   |

### 28.7 Publishing workflow

1. Write/edit content on a branch.
2. `npm run content:validate` locally.
3. Preview locally (`npm run dev` with a local DB seeded via `npm run content:seed`).
4. PR → CI validates → merge.
5. Deploy: Render runs `npm run build`; the **pre-deploy command** runs
   `npm run content:seed` against production (Section 38.2).

---

## 29. API specification

Base path: `/api/v1`. JSON only. Auth via session cookie. Mutating requests require the
`X-CSRF-Token` header (Section 30.5). Errors use one shape:

```json
{ "error": { "code": "VALIDATION_ERROR", "message": "Human readable", "details": [ ... ], "requestId": "…" } }
```

Error codes: `VALIDATION_ERROR` (400), `UNAUTHENTICATED` (401), `FORBIDDEN` (403),
`NOT_FOUND` (404), `CONFLICT` (409), `RATE_LIMITED` (429), `INTERNAL` (500).

### 29.1 Health

| Method | Path             | Auth | Description                                                                 |
| ------ | ---------------- | ---- | --------------------------------------------------------------------------- |
| GET    | `/api/v1/health` | none | `{ status: "ok", db: "ok", version, gitSha }` — used by Render health check |

### 29.2 Auth

| Method | Path                         | Auth     | Body                                                  | Response                                         |
| ------ | ---------------------------- | -------- | ----------------------------------------------------- | ------------------------------------------------ |
| GET    | `/auth/csrf`                 | none     | —                                                     | `{ csrfToken }` (also sets up session if needed) |
| POST   | `/auth/register`             | none     | `{ email, password, displayName, acceptTerms: true }` | 201 `{ user }`; session created                  |
| POST   | `/auth/login`                | none     | `{ email, password, remember }`                       | 200 `{ user }`; session regenerated              |
| POST   | `/auth/logout`               | user     | —                                                     | 204; session destroyed                           |
| GET    | `/auth/me`                   | optional | —                                                     | 200 `{ user }` or 200 `{ user: null }`           |
| POST   | `/auth/change-password`      | user     | `{ currentPassword, newPassword }`                    | 204; other sessions revoked                      |
| POST   | `/auth/forgot-password` (P1) | none     | `{ email }`                                           | 202 always                                       |
| POST   | `/auth/reset-password` (P1)  | none     | `{ token, newPassword }`                              | 204                                              |

### 29.3 Content (public, cacheable)

| Method | Path                                | Description                                                          |
| ------ | ----------------------------------- | -------------------------------------------------------------------- |
| GET    | `/modules`                          | All published modules with lesson/challenge summaries (no blocks)    |
| GET    | `/modules/:slug`                    | One module with ordered lesson and challenge summaries               |
| GET    | `/lessons/:slug`                    | Full lesson with blocks, resources expanded, glossary terms expanded |
| GET    | `/challenges`                       | Summaries; query: `module`, `type`, `difficulty`, `priority`         |
| GET    | `/challenges/:slug`                 | Full challenge with setup resolved (presets expanded)                |
| GET    | `/aircraft/c172`                    | Aircraft reference data                                              |
| GET    | `/checklists` / `/checklists/:slug` | Checklists                                                           |
| GET    | `/airports` / `/airports/:icao`     | Airport cards                                                        |
| GET    | `/glossary`                         | All terms (small; client-side search)                                |
| GET    | `/resources`                        | All resources; query: `topic`, `type`                                |

Caching: `Cache-Control: public, max-age=300, stale-while-revalidate=86400` and an `ETag`
based on the latest `contentReleases` id. Personalised data is **never** mixed into these
responses (progress is fetched separately), so they stay cacheable.

### 29.4 Progress (auth)

| Method | Path                             | Body                                                                                                          | Description                                                                                                             |
| ------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| GET    | `/me/progress`                   | —                                                                                                             | `{ lessons: {slug: status…}, challenges: {slug: {bestTier, passed, attempts}} , modules: {slug: {percent, complete}} }` |
| GET    | `/me/dashboard`                  | —                                                                                                             | Everything the dashboard needs in one call (Section 20.9)                                                               |
| PUT    | `/me/lessons/:slug/progress`     | `{ status?, lastSectionId? }`                                                                                 | Upsert; `completed` sets `completedAt` (idempotent)                                                                     |
| POST   | `/me/lessons/:slug/quiz-answers` | `{ questionId, answer }`                                                                                      | Records answer; returns `{ correct, explanation }`                                                                      |
| GET    | `/me/challenges/:slug/attempts`  | —                                                                                                             | Attempt history (paginated: `?limit=20&before=`)                                                                        |
| POST   | `/challenges/:slug/attempts`     | `{ criteriaResults, notes, reflections, paused, startedAt?, checklistTicks?, randomEventsFired?, planning? }` | Creates attempt; returns `{ attempt, progress }`                                                                        |
| GET    | `/me/attempts`                   | —                                                                                                             | All attempts, paginated                                                                                                 |

### 29.5 Account (auth)

| Method | Path         | Body                              | Description                                       |
| ------ | ------------ | --------------------------------- | ------------------------------------------------- |
| PATCH  | `/me`        | `{ displayName?, preferences? }`  | Update profile/preferences                        |
| GET    | `/me/export` | —                                 | JSON download of all user data                    |
| DELETE | `/me`        | `{ confirm: "DELETE", password }` | Hard delete user + progress + attempts + sessions |

### 29.6 Admin (P1, role `admin`)

| Method | Path                      | Description                                                                         |
| ------ | ------------------------- | ----------------------------------------------------------------------------------- |
| GET    | `/admin/content-releases` | Recent seed runs                                                                    |
| GET    | `/admin/stats`            | Learning signals (Section 4.3): completions per lesson, pass rates, median attempts |

### 29.7 Example: submit attempt

Request:

```json
POST /api/v1/challenges/c4-3-full-stop-landing/attempts
{
  "criteriaResults": [
    { "criterionId": "stabilised", "result": "met" },
    { "criterionId": "final-speed", "result": "silver" },
    { "criterionId": "touchdown-point", "result": "gold" },
    { "criterionId": "centreline", "result": "gold" },
    { "criterionId": "no-bounce", "result": "silver" },
    { "criterionId": "rollout", "result": "met" }
  ],
  "notes": "Floated a bit, was 5 kt fast on short final.",
  "reflections": [{ "questionId": "eyes", "answer": "End of runway this time." }],
  "paused": false
}
```

Response `201`:

```json
{
  "attempt": {
    "id": "…",
    "challengeSlug": "c4-3-full-stop-landing",
    "challengeVersion": 3,
    "points": 37,
    "maxPoints": 42,
    "percentage": 88,
    "passed": true,
    "tier": "silver",
    "submittedAt": "2026-11-20T18:04:11.000Z"
  },
  "progress": {
    "bestTier": "silver",
    "bestPercentage": 88,
    "passed": true,
    "attemptsCount": 4
  }
}
```

How the score is computed (C4.3 weights from Section 15, criteria 1–6 = 3, 3, 3, 2, 2, 1):

| Criterion                  | Result | Points | Weight | Weighted          |
| -------------------------- | ------ | ------ | ------ | ----------------- |
| stabilised (required)      | met    | 3      | 3      | 9                 |
| final-speed (required)     | silver | 2      | 3      | 6                 |
| touchdown-point (required) | gold   | 3      | 3      | 9                 |
| centreline (required)      | gold   | 3      | 2      | 6                 |
| no-bounce (required)       | silver | 2      | 2      | 4                 |
| rollout                    | met    | 3      | 1      | 3                 |
| **Total**                  |        |        |        | **37 / 42 = 88%** |

All required criteria are at least Bronze, so the attempt is passed. 88% is below 90%, so
the tier is **silver**, even though every required criterion is Silver or better. Turn
this exact case into a unit test, plus the boundary cases at 89.5%, 90% and 70%, because
boundary conditions like these are where scoring bugs hide.

---

## 30. Authentication and authorization

### 30.1 Approach (D-07)

- Email + password accounts. Server-side sessions stored in MongoDB.
- Session cookie: name `ltf.sid`, `HttpOnly`, `Secure` (production), `SameSite=Lax`,
  `Path=/`. Max age: 30 days if "Remember me", otherwise a browser-session cookie with a
  server-side idle timeout of 24 h (rolling).
- `app.set('trust proxy', 1)` in production (Render terminates TLS at its proxy) so
  `Secure` cookies work.

### 30.2 Registration

1. Validate body with Zod: email (RFC-ish, ≤ 254 chars), password (12–128 chars, not in
   a small common-password list, not equal to email), displayName (2–40 chars, trimmed),
   `acceptTerms === true`.
2. Normalise email to lowercase.
3. Hash password with argon2id (library defaults are sensible; tune to ~100–250 ms per
   hash on the production instance).
4. Insert user; on duplicate key → respond `409 CONFLICT` with a generic message ("An
   account with this email may already exist. Try logging in.").
   (Trade-off: this reveals registration status; acceptable for v1, P1 improvement:
   always return success and send an email.)
5. `req.session.regenerate()` → set `userId` → save → respond `201`.

### 30.3 Login

1. Validate body. Look up user by email (`+passwordHash`).
2. If missing, still run `argon2.verify` against a dummy hash (constant-ish timing).
3. On failure: `401` "Email or password is incorrect."; increment rate-limit counters.
4. On success: regenerate session (prevents session fixation), set `userId`, cookie max-age
   per "remember", update `lastLoginAt`.

### 30.4 Logout, password change, account deletion

- Logout: `req.session.destroy()`, clear cookie, `204`.
- Change password: verify current; hash new; set `passwordChangedAt`; delete all other
  sessions for the user (query sessions collection by `session.userId`); keep current.
- Delete account: verify password + confirmation string; delete from `users`,
  `lessonProgress`, `challengeAttempts`, `challengeProgress`, and all sessions; destroy the
  current session.

### 30.5 CSRF protection

- `SameSite=Lax` blocks most cross-site POSTs, but add a **synchroniser token** for defence
  in depth: `GET /auth/csrf` returns a token derived from a per-session secret; the client
  sends it in `X-CSRF-Token` on every non-GET request; middleware verifies it.
- The API rejects non-JSON `Content-Type` on mutating routes (blocks form-based CSRF).

### 30.6 Authorization

- `requireAuth` middleware: 401 if no `req.session.userId`, loads the user (lean) onto
  `req.user`; if `user.passwordChangedAt > session.createdAt` → destroy session, 401.
- `requireRole('admin')` for admin routes (P1).
- Resource ownership: every `/me/*` query filters by `req.user._id`; never accept a
  `userId` from the client.

### 30.7 Rate limits

| Route                             | Limit                                         |
| --------------------------------- | --------------------------------------------- |
| `POST /auth/login`                | 10 per 15 min per IP + 5 per 15 min per email |
| `POST /auth/register`             | 5 per hour per IP                             |
| `POST /auth/forgot-password` (P1) | 3 per hour per IP and per email               |
| Other mutating `/api` routes      | 120 per minute per user                       |
| Public GET `/api`                 | 300 per minute per IP                         |

In-memory store is fine for a single instance; switch to a MongoDB-backed store if
scaling to multiple instances.

### 30.8 Password reset (P1)

- Token: 32 random bytes, stored **hashed** (SHA-256) with 30-minute expiry, single use.
- Email via Resend/Postmark with a link to `/reset-password/:token`.
- After reset: revoke all sessions, log in fresh.

### 30.9 Client-side auth handling

- `useAuth()` hook backed by a TanStack Query `['me']` query (`GET /auth/me`).
- On app load, fetch `me` and a CSRF token.
- `ProtectedRoute` component: while loading → skeleton; if no user → redirect to
  `/login?returnTo=…`.
- On 401 from any API call: clear `['me']` cache and redirect to login (except on public
  pages).

---

## 31. Frontend architecture

### 31.1 Principles

- **Pages are thin.** `src/pages/*` compose feature components; logic lives in
  `src/features/*`.
- **Server state in TanStack Query**, UI state in components, cross-cutting client state
  (theme) in a small React context. No Redux.
- **Types from shared Zod schemas** (`z.infer`).
- **Lazy-load** every route and every widget.

### 31.2 Routing (React Router 7, data/library mode)

```
<RootLayout>                      (header, footer, skip link, toasts)
  /                               LandingPage
  /learn                          CurriculumPage
  /learn/:moduleSlug              ModulePage
  /learn/:moduleSlug/:lessonSlug  LessonPage          → <LessonLayout>
  /challenges                     ChallengesPage
  /challenges/:slug               ChallengePage
  /reference/*                    Reference pages
  /tools/*                        Tools (P1)
  /about, /disclaimer, /privacy, /terms, /roadmap
  <ProtectedRoute>
    /dashboard                    DashboardPage
    /account, /account/attempts   Account pages
  </ProtectedRoute>
  <AuthLayout>
    /login, /signup, /forgot-password, /reset-password/:token
  </AuthLayout>
<FlyModeLayout>
  /challenges/:slug/fly           FlyModePage
*                                 NotFoundPage
```

- Route-level code splitting with `lazy`.
- Scroll restoration; focus management on navigation (Section 22.1).
- Document titles via a small `useDocumentTitle` hook (or React 19's `<title>` support).

### 31.3 Data fetching conventions

- `src/lib/apiClient.ts`: `fetch` wrapper that sets `credentials: 'same-origin'`, JSON
  headers, CSRF header, parses the error shape into an `ApiError` class.
- One file per feature: `src/features/<feature>/api.ts` exporting query key factories and
  hooks, e.g. `useLesson(slug)`, `useSubmitAttempt(slug)`.
- Query keys: `['modules']`, `['module', slug]`, `['lesson', slug]`, `['challenges', filters]`,
  `['challenge', slug]`, `['me']`, `['progress']`, `['dashboard']`, `['attempts', slug]`.
- Content queries: `staleTime: 5 min`. User queries: `staleTime: 0` with refetch on focus.
- Mutations invalidate related keys; lesson "mark complete" uses optimistic updates.

### 31.4 Lesson rendering

- `LessonRenderer` maps `blocks[]` to components via a registry:
  `{ markdown: MarkdownBlock, callout: CalloutBlock, widget: WidgetBlock, quiz: QuizBlock, image: ImageBlock, video: VideoBlock, checklist: ChecklistBlock }`.
- `WidgetBlock` looks up the widget in `src/features/widgets/registry.ts`
  (`name → lazy(() => import(...))`), renders inside an error boundary with a fallback
  ("This interactive diagram failed to load — here's the description instead").
- Unknown block types render nothing in production and a warning box in development.

### 31.5 Theming

- `ThemeProvider` reads preference (user preference if signed in, else `localStorage`,
  else `prefers-color-scheme`) and sets `data-theme` on `<html>`.
- Inline script in `index.html` sets the theme before first paint (avoids flash).

### 31.6 Forms

- react-hook-form + Zod resolver with the same schema the server uses.
- Server validation errors (`details[]` with `path`) mapped back onto fields.

### 31.7 Client-side persistence

- `sessionStorage`: anonymous quiz answers, challenge debrief drafts, fly-mode checkbox
  state.
- `localStorage`: theme (anonymous), dismissed banners.
- Never store auth tokens client-side (cookies are httpOnly).

### 31.8 Environment config

- Client only needs `VITE_APP_NAME`, `VITE_PUBLIC_SITE_URL`, optional `VITE_SENTRY_DSN`,
  `VITE_ANALYTICS_DOMAIN`. No secrets in the client bundle — ever.

---

## 32. Security

Checklist based on the OWASP Top Ten. Each item has a Phase in which it is implemented.

| Risk                         | Mitigation                                                                                                                   | Phase    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------- |
| Broken access control        | `requireAuth`; ownership by session user only; admin role check; tests for cross-user access                                 | 4, 8     |
| Cryptographic failures       | HTTPS only (Render); `Secure` cookies; argon2id; HSTS via helmet                                                             | 4, 13    |
| Injection (NoSQL)            | Zod validation of all input; `mongoose.set('sanitizeFilter', true)`; never pass raw objects into queries; strict schemas     | 2        |
| XSS                          | React escaping; Markdown rendered without raw HTML; strict CSP via helmet (`default-src 'self'`, allow YouTube frame, fonts) | 3, 6, 11 |
| Insecure design              | Rate limiting; generic auth errors; server-side scoring                                                                      | 4, 7     |
| Security misconfiguration    | helmet defaults; disable `x-powered-by`; error handler hides stack traces in prod; env validation                            | 2        |
| Vulnerable components        | `npm audit` in CI (fail on high/critical in prod deps); Dependabot/Renovate weekly                                           | 1, 36    |
| Identification/auth failures | session regeneration on login; idle timeout; revoke on password change; password rules                                       | 4        |
| Integrity failures           | lockfile committed; `npm ci`; GitHub branch protection; no CDN scripts except YouTube embed                                  | 1, 13    |
| Logging/monitoring failures  | structured logs with request IDs; auth events logged (no passwords); Sentry optional                                         | 2, 13    |
| SSRF                         | Server never fetches user-supplied URLs (link checker runs in CI/scripts only)                                               | —        |
| CSRF                         | SameSite=Lax + synchroniser token + JSON-only                                                                                | 4        |
| Clickjacking                 | `frame-ancestors 'none'` in CSP                                                                                              | 11       |
| Data exposure                | `passwordHash` `select: false`; response DTOs whitelist fields                                                               | 2, 4     |
| DoS                          | body size limit 100 kb; rate limits; pagination caps (max 50)                                                                | 2        |
| Secrets                      | `.env` git-ignored; Render/Atlas secrets in dashboards; secret scanning on GitHub                                            | 1, 13    |

### 32.1 Content Security Policy (starting point)

```
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https://i.ytimg.com;
frame-src https://www.youtube-nocookie.com;
connect-src 'self' https://*.sentry.io;
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
object-src 'none';
upgrade-insecure-requests;
```

(The inline theme script needs a hash or nonce; compute the SHA-256 hash at build and add
it to `script-src`, or move the logic to a tiny external file.) Self-hosting fonts removes
the Google Fonts entries — recommended for privacy (P1).

### 32.2 Privacy

- Collect only: email, display name, password hash, preferences, learning progress,
  attempts and notes.
- No third-party trackers (D-14). YouTube embeds use `youtube-nocookie.com` and
  click-to-load (no request to YouTube until the user clicks).
- Data export and deletion available in-app (US-21).
- Privacy policy (Section 57) states retention: account data kept until deletion; server
  logs kept ≤ 30 days.

---

## 33. Performance

### 33.1 Budgets

See Section 4.2. Enforce the JS budget with a CI check (e.g. `size-limit` or a simple
script that fails if `dist/assets/index-*.js` gzipped > 250 KB).

### 33.2 Techniques

- Route-level and widget-level code splitting.
- Pre-parsed lesson blocks (no Markdown toolchain in the client for directives).
- Images: WebP/AVIF, explicit `width`/`height`, `loading="lazy"` below the fold,
  `fetchpriority="high"` for the landing hero, responsive `srcset` (P1).
- Fonts: variable fonts, subset, `preconnect`/self-host, `font-display: swap`.
- HTTP caching: hashed static assets `Cache-Control: public, max-age=31536000, immutable`;
  `index.html` `no-cache`.
- Compression: Brotli/gzip.
- MongoDB: indexes from Section 27; `.lean()` for reads; projections to exclude `blocks`
  from list endpoints.
- Dashboard in one request (aggregation in the service layer).
- Avoid layout shift: skeletons match final layout.

### 33.3 Measuring

- Lighthouse CI (P1) or manual Lighthouse runs on the deployed preview before each release.
- `pino-http` logs response times; review p95 weekly after launch.

---

## 34. Error handling, logging and monitoring

### 34.1 Server errors

- `HttpError(status, code, message, details?)` class for expected errors.
- Express 5 forwards rejected promises to the error handler automatically.
- `errorHandler` middleware:
  - `ZodError` → 400 `VALIDATION_ERROR` with `details`.
  - Mongoose `CastError` → 404 (invalid ids) or 400.
  - Duplicate key (11000) → 409.
  - `HttpError` → its status.
  - Everything else → 500 `INTERNAL`, log with stack and request ID; response message
    generic in production.
- `notFound` for unknown `/api` routes (JSON 404). Non-API unknown routes serve
  `index.html` (SPA fallback) and the client shows its 404 page.

### 34.2 Client errors

- Root error boundary with a friendly error page and "Reload" button.
- Per-widget error boundaries (Section 31.4).
- Query errors shown with `ErrorState` components including a retry button.
- Toasts for mutation errors.

### 34.3 Logging

- `pino` JSON logs in production, pretty logs in development.
- Each request gets `requestId` (from `X-Request-Id` header if present, else generated),
  echoed in the response header and error body.
- Log: method, path, status, duration, userId (if any). **Never** log passwords, session
  IDs, CSRF tokens, or full request bodies of auth routes (use pino `redact`).
- Audit-style info logs: register, login success/failure (email hashed), logout, password
  change, account deletion, content seed runs.

### 34.4 Monitoring

- Render health check on `/api/v1/health`.
- Uptime monitor (UptimeRobot/Better Stack) pinging the landing page and health endpoint
  every 5 minutes, email alert.
- Optional Sentry for client and server errors (free tier), with PII scrubbing.
- Atlas alerts: connections, storage > 80%.

### 34.5 Graceful shutdown

- On `SIGTERM`: stop accepting connections, finish in-flight requests (10 s timeout),
  close Mongoose connection, exit. Render sends SIGTERM on deploys.

---

## 35. Testing strategy

### 35.1 Test pyramid

| Level                | Tool                                       | What                                                                                                                     | Target count (v1) |
| -------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| Unit (shared)        | Vitest                                     | scoring, progress rules, aviation maths (wind triangle, crosswind, load factor, VOR geometry), content schema validators | 100+              |
| Unit (client)        | Vitest + RTL                               | components (Button, Tabs, RadioGroup…), widget models and widget components, hooks                                       | 80+               |
| Integration (server) | Vitest + Supertest + mongodb-memory-server | every API route: happy path, validation, auth, ownership                                                                 | 80+               |
| Content              | Vitest + validator                         | the real `content/` folder validates; snapshot counts                                                                    | 10                |
| E2E                  | Playwright                                 | Flows A–D, account deletion, a11y scans                                                                                  | 15–20             |
| Manual               | Checklists                                 | In-sim verification (Section 54), release QA (Section 55)                                                                | —                 |

### 35.2 Key test cases (must exist)

**Scoring (`shared/scoring.ts`)**

- All gold → gold, 100%.
- Required criterion "not_met" → not passed, tier none, regardless of percentage.
- Percentage exactly 90 with a required Bronze → silver (not gold).
- Percentage 89.5 rounds to 90 → gold if required ≥ Silver (document rounding).
- Percentage exactly 70 → silver; 69 → bronze.
- Binary criteria "met" count as 3 points.
- Unknown criterion id → validation error.
- Missing required criterion → validation error.

**Progress (`shared/progress.ts`)**

- Module complete only when all P0 lessons completed and all P0 challenges passed.
- P1 items don't block completion.
- Unpublished items ignored.

**Aviation maths (`shared/aviation/`)**

- Wind triangle: TC 090, TAS 100, wind 360/20 → WCA ≈ −11.5°, GS ≈ 98 kt (compare against
  an E6B or trusted online calculator; store 5+ reference cases).
- Crosswind: runway 25 (250°), wind 200/10 → crosswind ≈ 7.7 kt, headwind ≈ 6.4 kt.
- Load factor: 60° → 2.0; stall speed 48 → 67.9 at 60°.
- VOR (with variation set to 0): station at origin, aircraft due east, OBS 090 → FROM,
  centred; OBS 270 → TO, centred; OBS 100 → needle deflects (direction documented).
- Magnetic heading: TH 085, var 13°E → MH 072.

**API**

- Register → login → me → logout flow.
- Duplicate email → 409.
- Login wrong password → 401 generic; rate limit returns 429 after limit.
- CSRF missing on POST → 403.
- User A cannot read User B's attempts (no endpoint takes a userId; test that
  `/me/challenges/:slug/attempts` only returns own).
- Submit attempt with a tampered score field → server ignores it and recomputes.
- Submit attempt with criteria from an older rubric version → 400 with a clear message
  ("This challenge was updated; please refresh").
- Delete account removes all user documents and sessions.
- Content endpoints return only published items.

**E2E (Playwright)**

1. Visitor opens landing → starts lesson 0.1 → answers a quiz → sees sign-up prompt.
2. Sign up → redirected back to lesson → marks complete → dashboard shows 1 lesson done.
3. Log out → log in → progress persists.
4. Challenge C2.1: brief → start → fly tab → debrief with all Gold → result gold → history
   shows attempt.
5. Debrief draft survives refresh.
6. Reference: search glossary for "Vy" → result → deep link works.
7. Widget keyboard: W3 airspeed slider operable via arrow keys; announces band.
8. Theme toggle persists across reload.
9. Account deletion → cannot log in again.
10. 404 page for unknown lesson slug.
11. axe scan on: landing, learn, lesson (with widgets), challenge (all tabs), dashboard,
    account, login, signup, reference pages — no serious/critical violations.
12. Mobile viewport run of flows 1 and 4.

### 35.3 Test data

- `server/tests/fixtures/`: minimal content (2 modules, 3 lessons, 2 challenges) seeded
  into the in-memory DB via the real seed functions (tests the seeder too).
- E2E uses a dedicated local/CI MongoDB (service container or mongodb-memory-server
  started by Playwright's `webServer`) seeded with the **real** `content/` folder.

### 35.4 Coverage targets

See Section 4.2. Coverage is reported in CI; the threshold fails the build only for
`shared/` (≥ 90%) and `server/` (≥ 80%) to start.

---

## 36. Continuous integration

### 36.1 GitHub Actions workflow `ci.yml` (on push and pull_request)

Jobs (run in parallel where possible):

1. **install** — checkout, setup-node (from `.nvmrc`, npm cache), `npm ci`.
2. **lint** — `npm run lint` (ESLint) and `npm run format:check` (Prettier).
3. **typecheck** — `npm run typecheck` (client + server + scripts projects).
4. **test** — `npm run test:ci` (Vitest with coverage; server tests use
   mongodb-memory-server).
5. **content** — `npm run content:validate -- --strict`.
6. **build** — `npm run build` (client build + server compile); bundle-size check.
7. **e2e** — install Playwright Chromium, start the built app with a MongoDB service
   container, seed content, run Playwright; upload report artifact on failure.
8. **audit** — `npm audit --omit=dev --audit-level=high`.

### 36.2 Repository settings

- Protect `main`: require PR, require CI green, require linear history (squash merges),
  no force-push.
- Enable Dependabot security updates and a weekly version-update PR (grouped).
- Enable GitHub secret scanning and push protection.
- PR template (`.github/pull_request_template.md`) with: Summary, Phase/step reference,
  Screenshots, Checklist (tests, content validated, a11y checked).

### 36.3 Weekly scheduled workflow `links.yml` (P1)

- Runs `npm run content:links`; opens/updates a GitHub issue listing broken links.

---

## 37. Environments and configuration

### 37.1 Environments

| Env          | URL                                            | Database                                                  | Deploy trigger  |
| ------------ | ---------------------------------------------- | --------------------------------------------------------- | --------------- |
| Local        | http://localhost:5173 (Vite) + :3000 (API)     | Local Docker MongoDB or Atlas `learntofly-dev`            | `npm run dev`   |
| Preview (P1) | Render PR preview URL                          | Atlas `learntofly-preview`                                | PR opened       |
| Production   | https://<your-domain> or `<name>.onrender.com` | Atlas `learntofly` (separate project/cluster recommended) | Merge to `main` |

### 37.2 Environment variables

Full reference in Appendix E. Server validates env at startup with Zod and exits with a
clear message if something is missing.

### 37.3 Local development setup (what the README will say)

1. Install Node 24 LTS (via nvm/fnm), Git, Docker Desktop (optional).
2. `git clone …` → `cd Learn-To-Fly` → `nvm use` → `npm install`.
3. `cp .env.example .env` → fill `MONGODB_URI`, `SESSION_SECRET`.
4. Start MongoDB: `docker run -d -p 27017:27017 --name ltf-mongo mongo:8` (or use Atlas).
5. `npm run content:seed`.
6. `npm run dev` → opens client on :5173 with `/api` proxied to :3000.

### 37.4 npm scripts (planned)

| Script                                                                  | Does                                                                              |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `dev`                                                                   | `concurrently` runs `dev:client` and `dev:server`                                 |
| `dev:client`                                                            | `vite`                                                                            |
| `dev:server`                                                            | `tsx watch server/src/index.ts`                                                   |
| `build`                                                                 | `build:client` (`vite build`) then `build:server` (`tsc -p tsconfig.server.json`) |
| `start`                                                                 | `node dist-server/server/src/index.js` (serves API + `dist/`)                     |
| `lint` / `lint:fix`                                                     | ESLint                                                                            |
| `format` / `format:check`                                               | Prettier                                                                          |
| `typecheck`                                                             | `tsc --noEmit` for each tsconfig                                                  |
| `test` / `test:watch` / `test:ci`                                       | Vitest                                                                            |
| `e2e` / `e2e:ui`                                                        | Playwright                                                                        |
| `content:validate` / `content:seed` / `content:links` / `content:stats` | Section 28.6                                                                      |

---

## 38. Deployment

### 38.1 MongoDB Atlas setup

1. Create an Atlas account and an **organisation** and **project** "Learn-To-Fly".
2. Create a free **M0** cluster (region close to the Render region, e.g. AWS us-west-2
   (Oregon) — check which regions Render and Atlas both offer).
3. Create a database user `ltf-app` with a strong generated password and role limited to
   `readWrite` on the `learntofly` database.
4. Network access: Render's outbound IPs are not static on all plans. Options:
   (a) allow `0.0.0.0/0` with a strong password and TLS (common for M0; acceptable for v1),
   or (b) use a Render plan with static outbound IPs and allow-list them. Record the choice.
5. Copy the connection string (`mongodb+srv://…`), add `/learntofly` and
   `?retryWrites=true&w=majority`.
6. Enable Atlas backups if on a paid tier (M0 has no automated backups — plan a weekly
   `mongodump` export via a GitHub Action or manual, P1).

### 38.2 Render setup

1. Create a Render account; connect GitHub; grant access to the repo.
2. New **Web Service** from the repo (or apply `render.yaml` blueprint):
   - Runtime: Node. Region: same as Atlas.
   - Build command: `npm ci && npm run build`
   - Pre-deploy command: `npm run content:seed` (runs after build, before the new version
     goes live; ⚠ verify Render's pre-deploy feature availability on your plan — else run
     the seed as part of the start command guarded by an env flag).
   - Start command: `npm start`
   - Health check path: `/api/v1/health`
   - Instance type: Starter (no sleeping) for launch/demo; free is fine for early testing.
   - Auto-deploy: on commits to `main`.
3. Environment variables (Appendix E): `NODE_ENV=production`, `MONGODB_URI`,
   `SESSION_SECRET` (64+ random chars), `PUBLIC_SITE_URL`, `LOG_LEVEL=info`, etc.
4. Custom domain (optional): add in Render → DNS CNAME at your registrar → Render issues a
   TLS certificate automatically.

### 38.3 Express production serving

- `express.static('dist', { immutable, maxAge: '1y', index: false })` for hashed assets.
- `GET *` (non-`/api`) → send `dist/index.html` with `Cache-Control: no-cache`.
- `robots.txt` allows public pages, disallows `/dashboard`, `/account`, `/api`.
- `sitemap.xml` generated at build from content (P1).

### 38.4 Release process

1. All phase PRs merged; CI green on `main`.
2. Run the Release QA checklist (Section 55) against production (or preview).
3. Tag the release: `git tag v1.0.0 && git push origin v1.0.0`; create a GitHub Release with
   notes (what's included, known issues).
4. Monitor logs and uptime for 48 hours.

### 38.5 Rollback

- Render → Deploys → "Rollback" to the previous deploy.
- Content: the seeder only upserts and unpublishes, so re-deploying an older commit
  re-seeds older content safely (versions increment; attempts keep their `challengeVersion`).
- Database: before any risky migration, take a `mongodump`.

### 38.6 Cost estimate (monthly, v1)

| Item                       | Cost              |
| -------------------------- | ----------------- |
| Render Starter web service | ~$7               |
| MongoDB Atlas M0           | $0                |
| Domain                     | ~$1 (annual ÷ 12) |
| Email (P1)                 | $0 (free tier)    |
| Monitoring                 | $0 (free tiers)   |
| **Total**                  | **~$8/month**     |

(Prices change — check the providers' pricing pages at setup.)

---

# Part VI — Execution plan

## 39. Phase overview and timeline

### 39.1 Assumptions

- One developer/author, ~10–12 hours per week (evenings/weekends).
- Content authoring (Phase 9) runs in parallel with engineering from Phase 5 onward.
- Estimates include learning time for unfamiliar tools. Add 20–30% buffer for life.

### 39.2 Phases

| Phase | Name                                      | Depends on  | Est. (weeks)                    | Parallel track                            |
| ----- | ----------------------------------------- | ----------- | ------------------------------- | ----------------------------------------- |
| 0     | Accounts, tools and learning the aircraft | —           | 1 (setup) + 6 (study, parallel) | Study continues through Phase 4           |
| 1     | Repository and tooling                    | 0           | 1                               |                                           |
| 2     | Backend foundation                        | 1           | 1.5                             |                                           |
| 3     | Frontend foundation and design system     | 1           | 2                               | Can overlap with Phase 2                  |
| 4     | Authentication                            | 2, 3        | 1.5                             |                                           |
| 5     | Content model and pipeline                | 2           | 1.5                             | Start writing pilot content (M0–M1)       |
| 6     | Lesson player and interactive widgets     | 3, 5        | 5                               | Widgets are the longest item              |
| 7     | Challenges                                | 4, 5        | 2                               |                                           |
| 8     | Progress tracking and dashboard           | 4, 6, 7     | 1.5                             |                                           |
| 9     | Content authoring                         | 5 (+ study) | 8–10 (parallel from week ~6)    | Runs alongside 6–8                        |
| 10    | Reference section and tools               | 5, 6        | 1                               |                                           |
| 11    | Polish, accessibility and performance     | 6–10        | 1.5                             |                                           |
| 12    | QA and in-sim verification                | 9, 11       | 1.5                             |                                           |
| 13    | Deployment and launch                     | 12          | 1                               | Deploy a preview earlier (end of Phase 4) |

**Critical path:** 0 → 1 → 2 → 4 → 5 → 6 → 7 → 8 → 11 → 12 → 13 ≈ **19–21 weeks**,
with content authoring finishing by week ~18.

### 39.3 Milestones

| Milestone                 | When                      | What is demonstrable                                           |
| ------------------------- | ------------------------- | -------------------------------------------------------------- |
| M-A "Walking skeleton"    | End of Phase 4 (~week 6)  | Deployed app: sign up, log in, placeholder pages, health check |
| M-B "First lesson"        | Mid Phase 6 (~week 9)     | Lesson 1.4 with W3 and W16, quiz, mark complete                |
| M-C "First challenge"     | End of Phase 7 (~week 13) | C2.1 brief → debrief → score saved                             |
| M-D "Module 0–4 complete" | ~week 16                  | Half the course usable end to end                              |
| M-E "Content complete"    | ~week 18                  | All P0 content published                                       |
| M-F "v1.0 launch"         | ~week 21                  | Release checklist passed, demo ready                           |

### 39.4 Working rhythm

- Weekly: plan the week's steps from this document on Monday; tick them off in PRs.
- Each PR: one phase step or a small group of related steps; title includes the step ID.
- End of each phase: write a short "Phase summary" in the PR description with the
  CLAUDE.md format — **What you changed**, **What you couldn't do**, **What you need from
  me** — so progress is always documented.
- Keep a `CHANGELOG.md` (created in Phase 1) updated per phase.

---

## 40. Phase 0 — Accounts, tools and learning the aircraft

**Goal:** everything needed to start building and studying is in place.
**Est.** 1 week (setup) + study continues for 6 weeks in parallel.

### 40.1 Accounts

- [ ] 0.1 GitHub: confirm access to `Learn-To-Fly` repo; enable 2FA.
- [ ] 0.2 MongoDB Atlas account (use a password manager); enable 2FA.
- [ ] 0.3 Render account (sign in with GitHub).
- [ ] 0.4 (Optional) Domain registrar account; search for a name (e.g. `learntofly.<tld>`
      — check trademark conflicts, Section 57).
- [ ] 0.5 (Optional) Sentry, UptimeRobot accounts.
- [ ] 0.6 Free accounts for learning: SkyVector (optional), AOPA (free for ASI courses),
      FAASafety.gov, 1800wxBrief (optional).
- **AC:** all accounts created, 2FA on GitHub/Atlas/Render, credentials in a password
  manager.

### 40.2 Developer tools

- [ ] 0.7 Install Node 24 LTS via nvm (macOS/Linux) or nvm-windows/fnm (Windows).
      Verify: `node -v`, `npm -v`.
- [ ] 0.8 Install Git; configure `user.name`, `user.email`; set up SSH key or GitHub CLI.
- [ ] 0.9 Install VS Code (or preferred editor) with extensions: ESLint, Prettier,
      Tailwind CSS IntelliSense, MongoDB for VS Code, Playwright Test, Markdown All in One,
      YAML (Red Hat), Code Spell Checker (US English), EditorConfig.
- [ ] 0.10 Install Docker Desktop (for local MongoDB) **or** decide to use an Atlas dev
      cluster only.
- [ ] 0.11 Install MongoDB Compass (GUI for inspecting data).
- [ ] 0.12 Install an image tool: Squoosh (web) or `sharp-cli` for WebP/AVIF conversion.
- [ ] 0.13 Install a diagram tool: Excalidraw (web) and/or Figma (free).
- **AC:** `node -v` prints v24.x; `docker run hello-world` works (if using Docker).

### 40.3 Sim setup for authoring

- [ ] 0.14 MSFS 2024 updated to the latest sim update; note the version in the Decision Log.
- [ ] 0.15 Confirm which Cessna 172 variants you have (Section 9.1); record names.
- [ ] 0.16 Bind controls and set the Training assistance profile (Sections 9.3–9.4);
      screenshot every settings screen used in L0.2.
- [ ] 0.17 Set up screenshot workflow: sim UI hidden, consistent camera, the capture key,
      output folder.
- [ ] 0.18 (Optional) Install Little Navmap for your own flight review/tracking — handy to
      check challenge criteria (e.g. touchdown point, track) when authoring.

### 40.4 Study plan kick-off

- [ ] 0.19 Download the PHAK, AFH, Chart User's Guide, the San Francisco sectional and TAC,
      the Chart Supplement (Southwest), and the Private Pilot ACS (Section 6).
- [ ] 0.20 Get the G1000 NXi Pilot's Guide (Garmin support) and a Cessna 172S POH/Information
      Manual if you can obtain one legitimately.
- [ ] 0.21 Create your study logbook (Section 7.7).
- [ ] 0.22 Start Week 1 of the self-study path (Section 7.1).
- **AC:** all documents downloaded into a local `reference/` folder **outside the repo**
  (do not commit PDFs).

### 40.5 Phase 0 wrap-up

- [ ] 0.23 Update the Decision Log with: sim version, variant names, whether you use Docker
      or Atlas for dev.

---

## 41. Phase 1 — Repository and tooling

**Goal:** a clean, well-configured TypeScript project where client and server both run
"hello world", with lint, format, tests and CI.
**Est.** 1 week.

### 41.1 Branching and basics

- [ ] 1.1 Create branch `phase-1-tooling` from `main`.
- [ ] 1.2 Add `.gitignore` (node*modules, dist, dist-server, coverage, .env, .env.*,
      playwright-report, test-results, .DS*Store, *.log). Add `!.env.example` so the
      example file is still committed.
- [ ] 1.3 Add `.editorconfig` (2 spaces, LF, UTF-8, final newline).
- [ ] 1.4 Add `.nvmrc` with `24` and `"engines": { "node": ">=24 <25" }` in package.json.
- [ ] 1.5 `npm init -y`; set `"type": "module"`, `"private": true`, name, description.

### 41.2 Client scaffold (Vite + React + TS)

- [ ] 1.6 Scaffold with Vite's React + TypeScript template **into the repo root**, keeping
      the CLAUDE.md `src/` structure (create `src/components`, `src/assets`, `src/features`,
      `src/layouts`, `src/pages`, plus `src/lib`, `src/hooks`, `src/styles`, `src/test`).
- [ ] 1.7 Replace the template's demo content with a minimal `App` that renders
      "Learn-To-Fly".
- [ ] 1.8 Install and configure Tailwind CSS v4 with the Vite plugin; create
      `src/styles/index.css` importing Tailwind and `tokens.css` (empty for now).
- [ ] 1.9 Configure path aliases `@/` and `@shared/` in `vite.config.ts` and tsconfig.
- [ ] 1.10 Configure the Vite dev server proxy: `/api` → `http://localhost:3000`.
- **AC:** `npm run dev:client` shows the page with a Tailwind class applied.

### 41.3 Server scaffold (Express + TS)

- [ ] 1.11 Install `express`, `tsx`, `typescript`, `@types/express`, `@types/node`.
- [ ] 1.12 Create `server/src/app.ts` exporting `createApp()` with one route
      `GET /api/v1/health` returning `{ status: "ok" }`.
- [ ] 1.13 Create `server/src/index.ts` that reads `PORT` and listens.
- [ ] 1.14 Create `tsconfig.server.json` (Node module resolution `NodeNext`, outDir
      `dist-server`, includes `server/src` and `shared`).
- [ ] 1.15 Add `dev:server`, `build:server`, `start` scripts.
- **AC:** `npm run dev:server` → `curl localhost:3000/api/v1/health` returns ok; visiting
  `localhost:5173/api/v1/health` through the proxy also works.

### 41.4 Shared folder

- [ ] 1.16 Create `shared/` with `constants.ts` and a placeholder `scoring.ts` exporting a
      stub (tests come in Phase 7).
- [ ] 1.17 Verify both client and server can import from `@shared/`.

### 41.5 Quality tooling

- [ ] 1.18 ESLint flat config with typescript-eslint, react-hooks, jsx-a11y, import rules;
      separate globs for client (browser), server (node), scripts.
- [ ] 1.19 Prettier config (`.prettierrc`: singleQuote, trailingComma all, printWidth 100);
      `eslint-config-prettier` to avoid conflicts.
- [ ] 1.20 `npm run lint`, `format`, `format:check`, `typecheck` scripts.
- [ ] 1.21 Husky + lint-staged: on commit, run ESLint --fix and Prettier on staged files.
- [ ] 1.22 Vitest workspace with two projects: `client` (jsdom, `src/**/*.test.tsx`) and
      `node` (`server/**/*.test.ts`, `shared/**/*.test.ts`, `scripts/**/*.test.ts`).
- [ ] 1.23 One sample test in each project (e.g. `App` renders the title; health route
      returns ok with Supertest).
- [ ] 1.24 Install `concurrently`; `npm run dev` runs client and server.
- **AC:** `npm run lint && npm run typecheck && npm test` pass; committing a badly
  formatted file auto-fixes it.

### 41.6 CI and repository hygiene

- [ ] 1.25 `.github/workflows/ci.yml` with install, lint, typecheck, test, build jobs
      (content and e2e jobs added in later phases).
- [ ] 1.26 `.github/pull_request_template.md` (Section 36.2).
- [ ] 1.27 Enable branch protection on `main` (GitHub settings — see "What you need from
      me" at the end of the phase).
- [ ] 1.28 Enable Dependabot (`.github/dependabot.yml`: npm weekly, GitHub Actions monthly).
- [ ] 1.29 Create `CHANGELOG.md` with an "Unreleased" section.
- [ ] 1.30 Create `.env.example` (Appendix E variables with placeholder values).
- [ ] 1.31 Update `README.md`: project description, stack, local setup steps (Section
      37.3), scripts table, link to `plan.md`.
- [ ] 1.32 Update `CLAUDE.md` "Folder Structure" with the full tree from Section 25.
- [ ] 1.33 Open PR "Phase 1: Repository and tooling"; CI green; merge.
- **AC:** CI runs on the PR and passes; README instructions work from a fresh clone.

---

## 42. Phase 2 — Backend foundation

**Goal:** a production-shaped Express app connected to MongoDB with validation, errors,
logging and security middleware — no features yet.
**Est.** 1.5 weeks.

### 42.1 Configuration

- [ ] 2.1 `server/src/config/env.ts`: Zod schema for env (NODE_ENV, PORT, MONGODB_URI,
      SESSION_SECRET (min 32 chars), PUBLIC_SITE_URL, LOG_LEVEL, TRUST_PROXY, etc.);
      load `.env` in development via `dotenv`; exit with a readable error if invalid.
- [ ] 2.2 Unit test: missing `MONGODB_URI` produces a clear error.

### 42.2 Database

- [ ] 2.3 Install Mongoose. `server/src/config/db.ts`: `connectDb()` with retry/backoff
      (3 attempts), `mongoose.set('strictQuery', true)`, `sanitizeFilter: true`.
- [ ] 2.4 Health endpoint reports `db: "ok" | "down"` using `mongoose.connection.readyState`
      and a `ping` command (with a 1 s timeout).
- [ ] 2.5 Local MongoDB running (Docker command in README) and `.env` pointing to it.
- [ ] 2.6 Test setup: `server/tests/setup.ts` starts `mongodb-memory-server`, connects,
      clears collections between tests, disconnects after.
- **AC:** health shows db ok locally; tests run against the in-memory DB.

### 42.3 Middleware

- [ ] 2.7 `requestId` middleware (accept incoming header or `crypto.randomUUID()`).
- [ ] 2.8 `pino` logger + `pino-http` with redaction of `req.headers.cookie`,
      `req.body.password`, `req.body.newPassword`, `req.body.currentPassword`.
- [ ] 2.9 `helmet` with a CSP placeholder (finalised in Phase 11); `app.disable('x-powered-by')`.
- [ ] 2.10 `express.json({ limit: '100kb' })`; reject non-JSON on mutating API routes.
- [ ] 2.11 `compression`.
- [ ] 2.12 `rateLimit` factory (Section 30.7) — apply the general API limits now.
- [ ] 2.13 `validate({ body, query, params })` middleware using Zod; attaches parsed values.
- [ ] 2.14 `HttpError` class, `notFound` (API only) and `errorHandler` (Section 34.1).
- [ ] 2.15 Graceful shutdown in `index.ts` (Section 34.5).
- **AC:** unit/integration tests for: validation error shape, 404 JSON for unknown API
  routes, 500 hides stack in production mode, request ID echoed.

### 42.4 Project conventions

- [ ] 2.16 Folder conventions: `routes/<resource>.routes.ts`, `controllers/<resource>.controller.ts`,
      `services/<resource>.service.ts`, `models/<Model>.ts`; write a short
      `server/README.md` describing them.
- [ ] 2.17 `asyncHandler` not needed with Express 5 (document this in the README to avoid
      confusion from older tutorials).
- [ ] 2.18 A base "toJSON" transform for models: `_id` → `id`, remove `__v`.

### 42.5 Static serving (production mode)

- [ ] 2.19 In production, serve `dist/` statically and fall back to `index.html` for non-API
      GET requests (Section 38.3). Test with `npm run build && npm start`.
- **AC:** built app serves the client at `localhost:3000` and the API at `/api/v1/health`.

### 42.6 Phase wrap-up

- [ ] 2.20 PR "Phase 2: Backend foundation"; update CHANGELOG; phase summary.

---

## 43. Phase 3 — Frontend foundation and design system

**Goal:** routing, layouts, theming and the core component library, with placeholder
pages for every route.
**Est.** 2 weeks.

### 43.1 Design groundwork

- [ ] 3.1 Low-fidelity wireframes (Section 21.8) for Landing, Learn, Lesson, Challenge
      (4 tabs), Dashboard, Fly mode. Keep them in Figma/Excalidraw rather than the repo,
      and link them in the Phase 3 PR description.
- [ ] 3.2 Logo mark and wordmark (SVG); favicon set; OG image (1200×630).
- [ ] 3.3 Choose Radix UI vs React Aria (Section 21.5); record in the Decision Log.

### 43.2 Tokens and theming

- [ ] 3.4 `src/styles/tokens.css` with the colour tokens (Section 21.2) for light and dark
      (`[data-theme="dark"]`), typography, radius.
- [ ] 3.5 Map tokens into Tailwind's theme (`@theme` in Tailwind v4).
- [ ] 3.6 Fonts: Inter + a monospace font; `preconnect` or self-host.
- [ ] 3.7 `ThemeProvider` + `ThemeToggle`; inline pre-paint theme script in `index.html`.
- [ ] 3.8 Contrast check every text/background pair in both themes (WebAIM checker);
      adjust tokens until all pass AA.
- **AC:** toggling theme switches all tokens with no flash on reload.

### 43.3 Routing and layouts

- [ ] 3.9 Install React Router 7; create `src/router.tsx` with every route from Section
      31.2 pointing to lazy placeholder pages (each shows its title).
- [ ] 3.10 `RootLayout` (header, footer, skip link, `<main id="main">`), `LessonLayout`,
      `FlyModeLayout`, `AuthLayout`.
- [ ] 3.11 Header with desktop nav and mobile drawer; footer with legal links.
- [ ] 3.12 Route change focus management and document titles.
- [ ] 3.13 `NotFoundPage` and root error boundary page.
- **AC:** every route renders; keyboard can reach all nav items; mobile drawer traps focus
  and closes on Esc.

### 43.4 Data layer

- [ ] 3.14 Install TanStack Query; `src/lib/queryClient.ts` with defaults; devtools in dev.
- [ ] 3.15 `src/lib/apiClient.ts` (Section 31.3) with `ApiError`.
- [ ] 3.16 MSW set up for client tests (`src/test/handlers.ts`).

### 43.5 Component library

- [ ] 3.17 Build components from Section 21.5 in this order: Button, Link, Card, Badge,
      Callout, FormField/Input/PasswordInput/Textarea/Checkbox/RadioGroup/Select, Tabs,
      Dialog, Drawer, Tooltip/Popover, ProgressBar/Ring, Skeleton, EmptyState/ErrorState,
      Toast, Table, Breadcrumbs, DifficultyDots, TierBadge, TypeIcon, Stopwatch, KeyNumbers.
- [ ] 3.18 Each component: typed props, both themes, focus styles, tests for behaviour and
      accessibility (role/name), no console warnings.
- [ ] 3.19 `/dev/components` route (only in development builds) showcasing every component
      and state.
- **AC:** all components render correctly in both themes; tests pass; axe shows no
  violations on `/dev/components`.

### 43.6 Static pages

- [ ] 3.20 Landing page with real copy (Section 20.1) — widget demo slot left as a
      placeholder until Phase 6.
- [ ] 3.21 About, Disclaimer, Privacy, Terms (drafts from Section 57), Roadmap.
- **AC:** landing page passes Lighthouse accessibility ≥ 95 locally.

### 43.7 Phase wrap-up

- [ ] 3.22 PR "Phase 3: Frontend foundation"; screenshots of landing (light/dark,
      mobile/desktop) in the PR.

---

## 44. Phase 4 — Authentication

**Goal:** users can register, log in, log out, change password and delete their account;
the app is deployed as a walking skeleton (Milestone M-A).
**Est.** 1.5 weeks.

### 44.1 Server

- [ ] 4.1 `User` model (Section 27.1) with unique email index and `toJSON` hiding the hash.
- [ ] 4.2 `express-session` + `connect-mongo` configured (Section 30.1); `trust proxy` in
      production.
- [ ] 4.3 Shared Zod schemas: `RegisterSchema`, `LoginSchema`, `ChangePasswordSchema`,
      `DeleteAccountSchema`, `UserDto`.
- [ ] 4.4 `authService`: `register`, `login`, `logout`, `changePassword`, `deleteAccount`
      using argon2id (Section 30.2–30.4).
- [ ] 4.5 CSRF middleware and `GET /auth/csrf` (Section 30.5).
- [ ] 4.6 Routes in Section 29.2 (P0 ones) + `PATCH /me`, `DELETE /me`, `GET /me/export`
      (export returns user + empty progress for now).
- [ ] 4.7 `requireAuth` middleware (Section 30.6).
- [ ] 4.8 Auth rate limits (Section 30.7).
- [ ] 4.9 Common-password list (top ~10k, small text file in `server/src/data/`) check.
- [ ] 4.10 Integration tests: all API auth cases in Section 35.2.
- **AC:** all tests pass; sessions appear in the `sessions` collection; logout removes
  them.

### 44.2 Client

- [ ] 4.11 `useAuth`, `useCsrf` hooks; fetch on app start.
- [ ] 4.12 Sign up page with react-hook-form + Zod; password strength meter (simple
      length/variety heuristic — don't ship a large library); terms checkbox.
- [ ] 4.13 Log in page with "Remember me"; `returnTo` handling (only allow same-site
      relative paths — prevent open redirects).
- [ ] 4.14 Header avatar menu (Dashboard, Account, Log out).
- [ ] 4.15 `ProtectedRoute`.
- [ ] 4.16 Account page: display name edit, theme preference (saved to server), change
      password form, export data button, delete account modal (Section 20.10).
- [ ] 4.17 Tests: form validation messages, submit success/failure with MSW, protected
      route redirect.
- **AC:** US-03, US-04, US-16, US-21 pass manually and in component tests.

### 44.3 First deployment (walking skeleton)

- [ ] 4.18 Create Atlas production cluster, DB user and network access (Section 38.1).
- [ ] 4.19 Create the Render web service (Section 38.2) with env vars; deploy `main`.
- [ ] 4.20 Verify: HTTPS, health ok, sign up/login works in production, cookies `Secure`
      and `HttpOnly` (inspect in DevTools).
- [ ] 4.21 Add uptime monitor.
- **AC:** Milestone M-A reached; production URL recorded in README.

### 44.4 Phase wrap-up

- [ ] 4.22 PR "Phase 4: Authentication + first deploy"; phase summary including anything
      that needed your action in dashboards.

---

## 45. Phase 5 — Content model and pipeline

**Goal:** content files validate against schemas and seed into MongoDB; public content
API endpoints work.
**Est.** 1.5 weeks.

### 45.1 Schemas

- [ ] 5.1 `shared/schemas/content.ts`: Zod schemas for Aircraft, Module, LessonFrontmatter,
      LessonBlock (discriminated union), Quiz, Challenge (with Criterion, Setup, presets),
      Checklist, Airport, GlossaryTerm, Resource, Presets.
- [ ] 5.2 `shared/schemas/api.ts`: DTOs for list/detail responses (lesson summary vs full).
- [ ] 5.3 Unit tests with valid and invalid examples for each schema.

### 45.2 Seed data files (skeletons)

- [ ] 5.4 `content/aircraft.yaml` with Section 8 data (all numbers flagged in a
      `verification` map until verified).
- [ ] 5.5 `content/modules.yaml` — all 9 modules with titles/summaries/orders.
- [ ] 5.6 `content/presets.yaml` — start states, weather, loads (Section 15.1).
- [ ] 5.7 `content/resources.yaml` — every resource from Section 6 with slugs used by the
      lesson specs (e.g. `phak-ch5`, `afh-ch9`, `aim-4-3`, `skyvector`, …).
- [ ] 5.8 `content/airports.yaml` — the 13 airports (Section 11.1) with `verifiedAt: null`.
- [ ] 5.9 `content/glossary.yaml` — seed with Appendix A terms.
- [ ] 5.10 `content/checklists.yaml` — Appendix B phases in our own words.
- [ ] 5.11 One complete lesson (`l1-4-speeds-limits-and-checklists.md`) and one complete
      challenge (`c2-1-straight-and-level.yaml`) as reference examples.

### 45.3 Parsing and validation

- [ ] 5.12 `scripts/lib/parseLesson.ts`: gray-matter frontmatter → unified/remark pipeline
      with `remark-gfm` + `remark-directive` → walk the tree, emit `blocks[]` and
      `sections[]`; replace `{{vspeed.*}}` tokens; resolve `[[slug]]` links.
- [ ] 5.13 Unit tests for the parser: each directive type, tokens, internal links, headings
      → sections, malformed directive errors with file/line numbers.
- [ ] 5.14 `scripts/content-validate.ts`: load everything, validate schemas, run
      cross-reference rules (Section 28.5), print a readable report, exit code.
- [ ] 5.15 Add `content` job to CI.
- **AC:** validator passes on the skeleton content and fails with clear messages on a
  deliberately broken fixture.

### 45.4 Seeding

- [ ] 5.16 Mongoose models for Module, Lesson, Challenge, Aircraft, Checklist, Airport,
      GlossaryTerm, Resource, ContentRelease.
- [ ] 5.17 `scripts/content-seed.ts`: validate first (abort on errors), compute hashes,
      bulk upsert by slug, bump versions on change, unpublish removed items, write
      `contentReleases`. Support `--dry-run`.
- [ ] 5.18 Tests: seeding twice is idempotent (no version bumps); changing a lesson bumps
      only that lesson; removing a lesson unpublishes it.
- **AC:** `npm run content:seed` populates the local DB; Compass shows documents.

### 45.5 Content API

- [ ] 5.19 Routes in Section 29.3 with services using `.lean()` and projections.
- [ ] 5.20 Caching headers + ETag based on latest content release.
- [ ] 5.21 Integration tests: only published returned; 404 for unknown slug; list endpoints
      exclude `blocks`; filters on `/challenges`.
- **AC:** `curl /api/v1/lessons/l1-4-speeds-limits-and-checklists` returns blocks.

### 45.6 Phase wrap-up

- [ ] 5.22 PR "Phase 5: Content pipeline"; document the authoring workflow in
      `content/README.md` (how to add a lesson/challenge, directives, validation).

---

## 46. Phase 6 — Lesson player and interactive widgets

**Goal:** lessons render beautifully with callouts, images, quizzes and widgets; all P0
widgets built.
**Est.** 5 weeks (1 week player + ~4 weeks widgets, overlapping with content writing).

### 46.1 Curriculum pages

- [ ] 6.1 `/learn` curriculum map using `GET /modules` (progress overlay added in Phase 8).
- [ ] 6.2 `/learn/:moduleSlug` module page.
- [ ] 6.3 Loading skeletons, error and not-found states.

### 46.2 Lesson player

- [ ] 6.4 `LessonPage` + `LessonLayout` (sidebar sections, breadcrumb, objectives box,
      right rail on xl).
- [ ] 6.5 `LessonRenderer` with block registry (Section 31.4).
- [ ] 6.6 Block components: `MarkdownBlock` (react-markdown + remark-gfm, no raw HTML,
      custom renderers for links/tables/code), `CalloutBlock`, `ImageBlock` (responsive,
      caption, click to zoom (P1)), `VideoBlock` (click-to-load youtube-nocookie with
      title and thumbnail), `ChecklistBlock` (renders W16).
- [ ] 6.7 `QuizBlock` for `single`, `multi`, `numeric`, `order` types with feedback and
      explanation; keyboard accessible; answers stored in sessionStorage for visitors.
- [ ] 6.8 Scroll-spy section tracking; "Section X of Y" on mobile.
- [ ] 6.9 "Go deeper" resource cards; "Fly it" challenge cards; prev/next lesson.
- [ ] 6.10 "Mark complete" button (visitor → sign-up prompt; wired to API in Phase 8).
- [ ] 6.11 Lesson footer disclaimer.
- [ ] 6.12 Tests: renderer renders each block type; unknown block safe; quiz behaviour.
- **AC:** Milestone M-B: L1.4 renders with W3 and W16 (built next) and quizzes.

### 46.3 Widget framework

- [ ] 6.13 `src/features/widgets/registry.ts` mapping names to lazy components.
- [ ] 6.14 `WidgetFrame` component: title, "Simplified model" badge, reset button,
      mode switch (explore/quiz), "Describe this diagram" disclosure, error boundary.
- [ ] 6.15 Shared hooks: `useReducedMotion`, `useElementSize` (responsive SVG),
      `useDrag` (pointer events with keyboard fallback), `useAnnouncer` (live region).
- [ ] 6.16 Shared SVG primitives: `Gauge` (round dial with arcs/needle), `Tape` (vertical
      tape), `Arrow`, `Label`, `Compass`.
- [ ] 6.17 Quiz-mode contract: widget emits `{ questionId, correct }` events that
      `QuizBlock`/lesson progress can record.

### 46.4 P0 widgets (build order from Section 16.22)

For each widget: model in `model.ts` with unit tests → SVG component → interactions →
keyboard/ARIA → quiz mode → text alternative → embed in its lesson → review on phone.

- [ ] 6.18 W3 Airspeed Indicator (uses `aircraft.yaml` arcs).
- [ ] 6.19 W16 Checklist Runner (uses `checklists.yaml`).
- [ ] 6.20 W1 Control Surfaces Explorer.
- [ ] 6.21 W6 Turn Coordinator & Slip Ball.
- [ ] 6.22 W14 Bank vs Load Factor.
- [ ] 6.23 W4 Angle of Attack & Lift.
- [ ] 6.24 W5 Pitch & Power Trainer (after collecting pitch/power data in the sim during
      the Week 2 study flights in Section 7.2).
- [ ] 6.25 W2 G1000 PFD Explorer (explore + navigation modes).
- [ ] 6.26 W7 Traffic Pattern Animator (+ radio calls and go-around toggles).
- [ ] 6.27 W12 Wind Triangle (model shared with tools and W20).
- [ ] 6.28 W9 VOR/CDI Simulator.
- [ ] 6.29 W10 Sectional Legend Explorer (image + hotspot JSON).
- [ ] 6.30 W11 Airspace Cross-section (data file + component).
- [ ] 6.31 Landing page live widget demo (W3 or W7).
- **AC (each widget):** unit tests for the model; mouse/touch/keyboard operable;
  screen-reader announcements; no axe violations; works at 320 px; ≤ 60 KB gzipped
  per widget chunk (guideline).

### 46.5 P1 widgets (only if on schedule)

- [ ] 6.32 W13, W15, W18, W8, W17, W19, W20 (Section 16).

### 46.6 Phase wrap-up

- [ ] 6.33 PR(s): one PR per 2–3 widgets to keep reviews small; final PR "Phase 6
      complete" with a GIF of each widget.

---

## 47. Phase 7 — Challenges

**Goal:** the full Brief → Fly → Debrief → Result → History flow with server-side scoring.
**Est.** 2 weeks.

### 47.1 Scoring and schemas

- [ ] 7.1 Implement `shared/scoring.ts` (Section 15.2) with exhaustive unit tests
      (Section 35.2).
- [ ] 7.2 `AttemptCreateSchema` and `AttemptDto` in `shared/schemas/api.ts`.

### 47.2 Server

- [ ] 7.3 Models `ChallengeAttempt` and `ChallengeProgress` with indexes.
- [ ] 7.4 `attemptService.create` (Section 24.2): verify challenge published; verify
      criteria set matches current version; compute score; insert attempt; upsert progress
      with best-attempt logic (tier > percentage > recency).
- [ ] 7.5 Routes: `POST /challenges/:slug/attempts`, `GET /me/challenges/:slug/attempts`,
      `GET /me/attempts` (paginated).
- [ ] 7.6 Integration tests: tampered score ignored, version mismatch 400, ownership,
      best-attempt update logic, pagination.

### 47.3 Client

- [ ] 7.7 `/challenges` list with filters in the URL (Section 20.5).
- [ ] 7.8 `ChallengePage` with Tabs (Brief, Fly, Debrief, History).
- [ ] 7.9 Brief: setup table with resolved presets, copy-to-clipboard for ICAO/frequencies,
      links to airport cards and lessons, criteria preview.
- [ ] 7.10 Fly tab and `/challenges/:slug/fly` page: step checklist (sessionStorage),
      key numbers, stopwatch, random events (C5.5, C6.6, C8.1) with sound (Web Audio beep) + visual flash (reduced-motion alternative), Screen Wake Lock (P1).
- [ ] 7.11 Debrief form: tiered radio groups with tier descriptions; binary toggles;
      notes; reflections; planning fields (C8.2); paused checkbox; live score preview using
      `shared/scoring.ts`; draft autosave to sessionStorage; restore after login.
- [ ] 7.12 Result view: tier badge, percentage, per-criterion feedback with "Review"
      links to lesson sections, fly again, next challenge.
- [ ] 7.13 History tab: attempts table with expandable details.
- [ ] 7.14 Visitor flow: debrief prompts sign-in; draft preserved.
- [ ] 7.15 Component tests for debrief validation and score preview; E2E flow 4 and 5
      (Section 35.2).
- **AC:** Milestone M-C: C2.1 can be completed end-to-end in production; US-09 to US-12
  pass.

### 47.4 Phase wrap-up

- [ ] 7.16 PR "Phase 7: Challenges"; screen recording of the flow.

---

## 48. Phase 8 — Progress tracking and dashboard

**Goal:** lesson progress, module/course completion, dashboard and "continue".
**Est.** 1.5 weeks.

### 48.1 Server

- [ ] 8.1 `LessonProgress` model; `PUT /me/lessons/:slug/progress`,
      `POST /me/lessons/:slug/quiz-answers` (validates the answer against the lesson's quiz
      block server-side and returns correctness + explanation).
- [ ] 8.2 `shared/progress.ts`: completion rules (Section 13.3) with unit tests.
- [ ] 8.3 `GET /me/progress` and `GET /me/dashboard` (single aggregation; Section 20.9).
- [ ] 8.4 Update `user.lastActivity` on lesson progress and attempt submission.
- [ ] 8.5 Extend `GET /me/export` to include progress and attempts; extend `DELETE /me` to
      remove them (tests).

### 48.2 Client

- [ ] 8.6 Progress overlays on `/learn`, module pages, lesson sidebar, challenge cards.
- [ ] 8.7 "Mark complete" with optimistic update; auto-save `lastSectionId` (debounced).
- [ ] 8.8 Dashboard page (Section 20.9) including empty and course-complete states.
- [ ] 8.9 "Continue" logic: last activity if incomplete, else next item in curriculum order.
- [ ] 8.10 Course-complete badge ("Skyhawk Pilot (Sim)") — an SVG badge on the dashboard,
      with clear "not a real certificate" wording.
- [ ] 8.11 `/account/attempts` page.
- [ ] 8.12 Tests: dashboard states with MSW; E2E flows 2 and 3.
- **AC:** US-05, US-08, US-13 pass; progress consistent across pages and devices.

### 48.3 Phase wrap-up

- [ ] 8.13 PR "Phase 8: Progress and dashboard".

---

## 49. Phase 9 — Content authoring

**Goal:** all P0 lessons and challenges written, illustrated, validated and published;
P1 as time allows.
**Est.** 8–10 weeks in parallel with Phases 5–8 (≈ 6–8 hours/week of writing).

### 49.1 Workflow per lesson (≈ 3–5 hours each)

1. Re-read the lesson spec (Section 14) and the source chapters (Section 6).
2. Fly the relevant manoeuvre in the sim; take screenshots; note sim quirks.
3. Draft the Markdown file from the template (Appendix D).
4. Add images (optimised), widget directives, callouts, quizzes.
5. `npm run content:validate`; preview locally.
6. Run the content review checklist (Section 18.9).
7. Verify every ⚠ item; set `lastVerifiedAt` and `simVersion`.
8. PR per module (or per 2–3 lessons).

### 49.2 Workflow per challenge (≈ 2–4 hours each)

1. Re-read the challenge spec (Section 15).
2. Set it up in the sim exactly as specified; adjust the spec if the sim can't do it
   (e.g. air start) and record the change in the Decision Log.
3. Fly it three times; tune tolerances if Gold is impossible or trivial.
4. Write the YAML from the template (Appendix C).
5. Run the challenge authoring checklist (Section 15.4).

### 49.3 Authoring schedule (suggested)

| Week (of Phase 9) | Content                                                                  |
| ----------------- | ------------------------------------------------------------------------ |
| 1                 | M0: L0.1–L0.3, C0.1 · reference data: `aircraft.yaml` verified           |
| 2                 | M1: L1.1–L1.4, C1.1 · `checklists.yaml` verified                         |
| 3                 | M2: L2.1–L2.4, C2.1–C2.4 · W5 performance data collected                 |
| 4                 | M3: L3.1–L3.3, C3.1–C3.4 · KLVK/KTCY airport cards verified              |
| 5                 | M4: L4.1–L4.4, C4.1–C4.4, C4.7                                           |
| 6                 | M5: L5.1–L5.4, C5.1–C5.5                                                 |
| 7                 | M6 part 1: L6.1–L6.3, C6.1–C6.3 · all airports and VORs verified         |
| 8                 | M6 part 2: L6.4–L6.6, C6.4–C6.5                                          |
| 9                 | M7: L7.1–L7.3, C7.1–C7.2 · M8: L8.1–L8.2, C8.1–C8.2                      |
| 10                | Glossary complete (≥ 150 terms), resources verified, buffer / P1 content |

### 49.4 Checklist of content items (tick as published)

**Lessons (P0)**

- [ ] L0.1 · [ ] L0.2 · [ ] L0.3
- [ ] L1.1 · [ ] L1.2 · [ ] L1.3 · [ ] L1.4
- [ ] L2.1 · [ ] L2.2 · [ ] L2.3 · [ ] L2.4
- [ ] L3.1 · [ ] L3.2 · [ ] L3.3
- [ ] L4.1 · [ ] L4.2 · [ ] L4.3 · [ ] L4.4
- [ ] L5.1 · [ ] L5.2 · [ ] L5.3 · [ ] L5.4
- [ ] L6.1 · [ ] L6.2 · [ ] L6.3 · [ ] L6.4 · [ ] L6.5 · [ ] L6.6
- [ ] L7.1 · [ ] L7.2 · [ ] L7.3
- [ ] L8.1 · [ ] L8.2

**Lessons (P1)**

- [ ] L2.5 · [ ] L4.5 · [ ] L4.6 · [ ] L5.5 · [ ] L6.7 · [ ] L6.8 · [ ] L7.4

**Challenges (P0)**

- [ ] C0.1 · [ ] C1.1
- [ ] C2.1 · [ ] C2.2 · [ ] C2.3 · [ ] C2.4
- [ ] C3.1 · [ ] C3.2 · [ ] C3.3 · [ ] C3.4
- [ ] C4.1 · [ ] C4.2 · [ ] C4.3 · [ ] C4.4 · [ ] C4.7
- [ ] C5.1 · [ ] C5.2 · [ ] C5.3 · [ ] C5.4 · [ ] C5.5
- [ ] C6.1 · [ ] C6.2 · [ ] C6.3 · [ ] C6.4 · [ ] C6.5
- [ ] C7.1 · [ ] C7.2
- [ ] C8.1 · [ ] C8.2

**Challenges (P1)**

- [ ] C4.5 · [ ] C4.6 · [ ] C5.6 · [ ] C6.6 · [ ] C6.7 · [ ] C7.3

**Reference data**

- [ ] `aircraft.yaml` verified · [ ] `checklists.yaml` verified · [ ] `airports.yaml` all
      13 verified · [ ] `glossary.yaml` ≥ 150 terms · [ ] `resources.yaml` all links
      checked · [ ] `presets.yaml` tested in sim · [ ] `airspace-profile.yaml` verified

### 49.5 Screenshot shot list (minimum)

- [ ] Full panel (G1000) and classic panel overview
- [ ] PFD close-up (clean, level flight)
- [ ] MFD close-up (map and EIS)
- [ ] Throttle/mixture, fuel selector, flap switch, trim wheel, ignition, master switches
- [ ] Sight picture: cruise attitude, climb attitude, descent attitude
- [ ] Sight picture: downwind (runway position off the wing), base, final at 300 ft, flare
- [ ] PAPI on final (on path / high / low)
- [ ] KLVK ramp and hold short line; runway holding position sign
- [ ] Stall horn/buffet moment (PFD at critical AoA)
- [ ] Steep turn horizon picture (45° bank)
- [ ] Crystal Springs Reservoir, Altamont Pass, Mt Diablo, Lake Del Valle from the air
- [ ] G1000 FPL page with a flight plan; Direct-To dialog; NRST page; CDI in VOR mode
- [ ] MSFS settings screens used in L0.2 (dated)
- [ ] In-sim checklist panel
- [ ] Landing page hero image

### 49.6 Phase wrap-up

- [ ] 9.1 One PR per module: "Phase 9 · Module N content", each with its lesson and
      challenge checklists (Sections 18.9 and 15.4) pasted and ticked in the description.

---

## 50. Phase 10 — Reference section and tools

**Goal:** quick-lookup pages that learners use mid-flight.
**Est.** 1 week (P1 tools extra).

- [ ] 10.1 `/reference` hub with cards.
- [ ] 10.2 `/reference/speeds`: V-speed table from `GET /aircraft/c172`, W3, power settings,
      "last verified" line. Large-type print/phone friendly.
- [ ] 10.3 `/reference/checklists` and `/reference/checklists/:slug` with W16 in full-screen
      mode.
- [ ] 10.4 `/reference/airports` and `/reference/airports/:icao` (Section 20.8), with
      "Challenges at this airport".
- [ ] 10.5 `/reference/glossary`: client-side search (simple normalised substring + alias
      match; no library needed for ~200 terms), A–Z jump links, deep links.
- [ ] 10.6 `/reference/resources` with filters.
- [ ] 10.7 Glossary hover-cards in lessons (P1): seed script marks first occurrence of each
      glossary term per lesson; client renders a Popover.
- [ ] 10.8 (P1) `/tools` hub, crosswind (W13), wind triangle (W12), nav log (W20).
- [ ] 10.9 Tests: glossary search, airport page 404, speeds page renders data.
- **AC:** US-14, US-15 pass; all reference pages readable on a phone at arm's length.
- [ ] 10.10 PR "Phase 10: Reference".

---

## 51. Phase 11 — Polish, accessibility and performance

**Goal:** meet the quality bars in Section 4.2.
**Est.** 1.5 weeks.

### 51.1 Accessibility pass

- [ ] 11.1 Add `@axe-core/playwright` scans to E2E for every main page (Section 35.2 #11).
- [ ] 11.2 Keyboard-only walkthrough of flows A–D; fix issues.
- [ ] 11.3 Screen reader smoke test (NVDA + VoiceOver) on landing, lesson with W3/W7,
      challenge debrief, dashboard.
- [ ] 11.4 Zoom 200% and 320 px reflow check on every page.
- [ ] 11.5 Reduced-motion check on every widget and transition.

### 51.2 Performance pass

- [ ] 11.6 Bundle analysis (`rollup-plugin-visualizer`); ensure widgets and heavy
      dependencies are split; initial JS ≤ 250 KB gzipped.
- [ ] 11.7 Image audit: all WebP/AVIF, dimensions set, lazy-loaded.
- [ ] 11.8 Font loading check (no FOIT; minimal layout shift).
- [ ] 11.9 Lighthouse on production-like build for landing, lesson, challenge, dashboard
      (mobile + desktop); fix until targets met.
- [ ] 11.10 API p95 latency check with a simple load script (e.g. `autocannon` against
      preview: 20 concurrent users for 60 s on content endpoints).

### 51.3 Security hardening

- [ ] 11.11 Final CSP (Section 32.1) with hashes; test the whole app for CSP violations in
      the console.
- [ ] 11.12 Verify cookies, HSTS, headers with securityheaders.com (or similar) on preview.
- [ ] 11.13 `npm audit` clean for production dependencies.
- [ ] 11.14 Review rate limits and error messages; try basic attacks manually (NoSQL
      operator injection in login body, oversized body, missing CSRF).

### 51.4 UX polish

- [ ] 11.15 Empty/loading/error states on every data-driven page.
- [ ] 11.16 Microcopy review: buttons, errors, confirmations — consistent voice.
- [ ] 11.17 404 and error pages polished.
- [ ] 11.18 SEO basics: titles, meta descriptions, Open Graph/Twitter tags for public pages,
      `robots.txt`, `sitemap.xml` (P1), canonical URLs.
- [ ] 11.19 Favicon/manifest; theme-color meta for both themes.
- [ ] 11.20 Print styles for lessons and challenge briefs (P1).
- [ ] 11.21 PR "Phase 11: Polish".

---

## 52. Phase 12 — QA and in-sim verification

**Goal:** prove every piece of content is correct in the current sim and every flow works.
**Est.** 1.5 weeks.

- [ ] 12.1 Freeze content except fixes; record the sim version used for verification.
- [ ] 12.2 Run the in-sim verification protocol (Section 54) for every P0 challenge and
      every lesson with sim-specific instructions. Track in a spreadsheet: item, verified
      (Y/N), issues, fix PR.
- [ ] 12.3 Fly every P0 challenge from its brief only (fresh sim start each time). Target:
      pass all at Bronze or better; Gold on at least 80%.
- [ ] 12.4 External link check (`npm run content:links`) — fix or replace every broken link.
- [ ] 12.5 Fact check pass: every number in `aircraft.yaml`, `airports.yaml`, lessons
      against sources; zero `verify` callouts remain (validator `--strict`).
- [ ] 12.6 Proofread all lessons (read aloud or text-to-speech) — US English spell-check.
- [ ] 12.7 **Beta test** with 2–5 people from the target personas (a friend new to MSFS,
      someone with a yoke, someone who flies real airplanes if possible):
  - [ ] Give them only the URL. Watch (screen share) as they do L0.1 → L0.3 → C0.1 and
        L2.2 → C2.1.
  - [ ] Collect feedback with a short form: confusing parts, bugs, time taken, confidence.
  - [ ] Triage feedback into P0 fixes (before launch) and v1.1 backlog.
- [ ] 12.8 Cross-browser check: Chrome, Edge, Firefox, Safari (macOS/iOS), Chrome Android.
- [ ] 12.9 Device check list from Section 23.2.
- [ ] 12.10 Run the full Release QA checklist (Section 55) on the preview/production URL.
- **AC:** zero open P0 bugs; all P0 content verified; beta testers could complete the
  first module without help.

---

## 53. Phase 13 — Deployment and launch

**Goal:** v1.0 is live, monitored, and demo-ready.
**Est.** 1 week.

- [ ] 13.1 Confirm production env vars, Atlas user permissions, network access.
- [ ] 13.2 Upgrade Render instance to a non-sleeping plan (if not already).
- [ ] 13.3 Custom domain + TLS (optional); update `PUBLIC_SITE_URL`.
- [ ] 13.4 Seed production content (pre-deploy command or manual run); verify counts
      against Section 13.1 in the `contentReleases` document.
- [ ] 13.5 Create your own account in production; walk the demo script (Section 58).
- [ ] 13.6 Set up uptime monitoring and (optional) Sentry alerts.
- [ ] 13.7 First database backup (`mongodump`) stored securely off-site.
- [ ] 13.8 Tag `v1.0.0`; GitHub Release notes; update CHANGELOG.
- [ ] 13.9 Update README with the live URL, screenshots and a short feature list.
- [ ] 13.10 Prepare launch posts (optional): MSFS forums (check forum rules on
      self-promotion), relevant subreddits (read rules first), friends/family. Include the
      "simulation only" disclaimer.
- [ ] 13.11 Monitor logs, uptime and feedback for 1–2 weeks; fix critical issues in
      v1.0.x patch releases.
- [ ] 13.12 Retrospective: what went well, what to change for the next aircraft; update
      this plan's Decision Log and the post-v1 roadmap.
- **AC:** Definition of done (Section 4.1) fully ticked.

---

# Part VII — Quality, risk, legal and launch

## 54. In-sim content verification protocol

Aviation content must be correct. This protocol is run for every lesson and challenge
before it is published (Phase 9) and again for all content before launch (Phase 12) and
after every major sim update (post-launch).

### 54.1 Sources of truth (in priority order)

1. **The MSFS 2024 aircraft itself** (what the learner will actually experience) — for
   cockpit layout, switch names, sim behaviour.
2. **The in-sim checklist** — for procedures and speeds the sim aircraft expects.
3. **The Cessna 172S POH / Information Manual** — for real-world numbers and procedures.
4. **FAA publications** (PHAK, AFH, AIM, ACS, 14 CFR) — for technique, rules, phraseology.
5. **Current FAA charts and the Chart Supplement** — for airports, airspace, frequencies.
6. **Garmin G1000 NXi documentation** — for avionics operation.

When sources conflict:

- Sim vs POH on a **number**: teach the POH number, add a "Sim vs reality" callout if the
  sim behaves differently, and set challenge tolerances around what the sim can achieve.
- Sim vs reality on **airport data** (e.g. a frequency changed in reality but not in the
  sim): tell learners to use the sim's value for the challenge and mention the real one.
- FAA vs a video or website: the FAA wins.

### 54.2 Verification record

For every verified item, record in the content file's frontmatter/YAML:

```yaml
lastVerifiedAt: 2026-12-01
simVersion: "MSFS 2024 SU x (1.x.x.x)"
verifiedAgainst:
  - "In-sim C172 G1000 checklist"
  - "Cessna 172S Information Manual (Rev …)"
  - "Chart Supplement SW, effective 2026-11-27"
```

### 54.3 Challenge verification steps

1. Start the sim fresh (no previous flight loaded).
2. Set up **only** from the brief. Every setup field must be possible as written.
3. Note any menu name differences → fix the brief.
4. Fly the procedure exactly as written. Mark any ambiguous step → rewrite.
5. Check each criterion is measurable from within the sim (PFD readouts, time, replay, or
   Little Navmap trail if the learner uses it). If not → rewrite the criterion.
6. Time the challenge → update `estimatedMinutes`.
7. Fly it deliberately badly once (e.g. fast approach) to confirm the rubric distinguishes
   Bronze from Gold.
8. Record verification data.

### 54.4 Lesson verification steps

1. Every number: check against sources (54.1); replace literals with `{{tokens}}` where
   possible.
2. Every sim instruction (menu paths, key names): follow it in the current sim.
3. Every screenshot: still matches the current sim (panel, UI).
4. Every external link: opens and still says what we claim.
5. Every "Sim vs reality" callout: still true.

### 54.5 After sim updates (post-launch routine)

- Read the sim update's release notes for changes to the C172, flight model, ATC, weather,
  menus or airports in the home region.
- Re-fly a sample of challenges (C2.1, C4.3, C5.2, C6.5, C7.2) — if anything differs,
  run the full protocol for the affected module.
- Update `simVersion` fields; publish a short "Updated for SU x" note (P1 "What's new").

---

## 55. Release QA checklist

Run against the production (or production-like preview) URL before tagging v1.0.0.

### 55.1 Functional

- [ ] Landing page loads; CTA opens lesson 0.1.
- [ ] Visitor can read any lesson, use widgets and answer quizzes.
- [ ] Sign up with a new email; validation messages correct; redirected back.
- [ ] Log out and log in (with and without "Remember me").
- [ ] Wrong password shows generic error; rate limit triggers after repeated failures.
- [ ] Lesson: sections nav, scroll-spy, mark complete, next/previous, resume position.
- [ ] Every P0 lesson opens without errors (click through all 33).
- [ ] Every P0 challenge opens; brief shows resolved presets; fly mode works on a phone.
- [ ] Debrief: required criteria enforced; live score equals server score; result view
      correct; history shows attempt.
- [ ] Random events fire in C5.5/C6.6/C8.1 with sound and visual.
- [ ] Draft debrief survives refresh and login.
- [ ] Dashboard: continue card, progress, recent attempts, empty state for a new user.
- [ ] Module completion and course completion badge (use a test account: complete all
      P0 items quickly via the UI or a script against a staging DB).
- [ ] Reference pages: speeds, checklists (runner), airports, glossary search, resources.
- [ ] Account: change display name, theme preference persists, change password revokes
      other sessions, export JSON contains all data, delete account works and data is
      gone (check in Compass).
- [ ] 404 page for random URLs; unknown lesson slug; API 404 JSON.

### 55.2 Non-functional

- [ ] Lighthouse targets met (Section 4.2) on landing, lesson, challenge, dashboard.
- [ ] axe: no serious/critical issues.
- [ ] Keyboard-only run of flows A–D.
- [ ] Dark and light theme on every page; no unreadable text.
- [ ] Mobile (375 px) and tablet layouts correct.
- [ ] Security headers present (CSP, HSTS, X-Content-Type-Options, Referrer-Policy,
      frame-ancestors).
- [ ] Cookies: `HttpOnly`, `Secure`, `SameSite=Lax`.
- [ ] No secrets in the client bundle (search built JS for "mongodb", "SECRET").
- [ ] `npm audit --omit=dev` clean.
- [ ] Health endpoint ok; uptime monitor green; logs show no errors during the run.
- [ ] Backups: a recent `mongodump` exists.

### 55.3 Content

- [ ] `npm run content:validate -- --strict` passes.
- [ ] Link checker: 0 broken links.
- [ ] Zero "TODO", "TBD", "lorem" in content and UI (grep).
- [ ] Every lesson has `lastVerifiedAt` within the last 90 days.
- [ ] Disclaimer visible in footer, lesson footers, sign-up.

### 55.4 Legal

- [ ] Privacy policy, terms and disclaimer published and linked.
- [ ] Trademark attributions on the About page (Section 57.3).
- [ ] Image credits/attributions for FAA chart crops.

---

## 56. Risks and mitigations

| #   | Risk                                                           | Likelihood  | Impact | Mitigation                                                                                                              |
| --- | -------------------------------------------------------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| R1  | **Scope creep** (more aircraft, auto-grading, social features) | High        | High   | Scope guardrails (Section 2.4); parking lot list; P0/P1 discipline                                                      |
| R2  | **Content takes longer than code**                             | High        | High   | Start content in Phase 5; templates; weekly schedule (49.3); cut P1 content first                                       |
| R3  | **Aviation inaccuracies** damage credibility                   | Medium      | High   | Verification protocol (54); ⚠ markers; validator blocks `verify` callouts; beta test with a real pilot if possible      |
| R4  | **Sim updates change menus/behaviour**                         | High        | Medium | Describe intent not just menu paths; `simVersion` tracking; post-update routine (54.5)                                  |
| R5  | **Air-start not easily available** in MSFS 2024                | Medium      | Medium | Fallback start from KLVK runway (15.1); adjust briefs                                                                   |
| R6  | **Self-assessment feels unmotivating or "cheatable"**          | Medium      | Medium | Specific, measurable criteria; honesty messaging; reflections; roadmap to auto-grading                                  |
| R7  | **Widget complexity** (W7, W9, W11) blows the schedule         | Medium      | Medium | Build simple widgets first; timebox each (Section 16.22); fall back to annotated static images for P0 if needed         |
| R8  | **Learning curve** for TypeScript/Tailwind/Mongoose            | Medium      | Medium | D-05 fallback; follow official docs; small PRs; tests as learning aids                                                  |
| R9  | **Hosting cold starts** on free tiers ruin the demo            | High (free) | Medium | Paid Render instance for launch; uptime monitor keeps warm                                                              |
| R10 | **Security incident** (account takeover, data leak)            | Low         | High   | Section 32 checklist; minimal data; argon2; rate limits; CSRF; dependency updates                                       |
| R11 | **Copyright/trademark** complaints                             | Low         | High   | Section 57: own illustrations; no POH/Garmin copying; nominative trademark use; clear disclaimers                       |
| R12 | **Learners treat content as real flight training**             | Medium      | High   | Prominent disclaimers; "Sim vs reality" callouts; encourage real instruction for real flying                            |
| R13 | **Nav data/VOR decommissioning** mismatch sim vs reality       | Medium      | Low    | Choose VORs present in both; note differences                                                                           |
| R14 | **Burnout** on a long solo project                             | Medium      | High   | Milestones with visible progress (39.3); celebrate each; realistic weekly hours; it's OK to ship v1 with fewer P1 items |
| R15 | **Atlas M0 limits** (connections, storage, no backups)         | Low         | Medium | Monitor; manual backups; upgrade to M10 if needed (~cost)                                                               |
| R16 | **Xbox users** can't easily use a second screen                | Medium      | Low    | Phone/tablet fly mode; printable briefs (P1)                                                                            |

---

## 57. Legal, trademarks and disclaimers

> This section is planning guidance, not legal advice. If the project becomes commercial,
> get proper legal advice.

### 57.1 Simulation-only disclaimer (use everywhere)

Short version (footer, lesson footers):

> "For simulation use only. Learn-To-Fly is not flight instruction and must not be used
> for real-world flight training or navigation."

Long version (`/disclaimer`):

- Content is for entertainment and educational use with flight simulation software.
- It is not approved by any aviation authority and does not count toward any pilot
  certificate or rating.
- Procedures and numbers are simplified and may differ from the real aircraft; always use
  the official Pilot's Operating Handbook and a certified flight instructor for real
  flying.
- Charts and airport information are shown for simulation only and may be out of date —
  "Not for navigation".
- The author accepts no liability for use of the content outside a simulator.

### 57.2 Copyright

- **Our content** (text, illustrations, widgets, code): © the author. Choose a license:
  keep "All rights reserved" for content; optionally MIT for code if the repo becomes
  public. Record in the Decision Log and a `LICENSE` file (created in Phase 1 once decided).
- **FAA material:** US Government works — generally public domain in the US. Attribute
  anyway ("Source: FAA Pilot's Handbook of Aeronautical Knowledge, FAA-H-8083-25C").
- **FAA charts:** free to use; mark crops "Not for navigation" and credit the FAA.
- **Cessna POH, Garmin manuals, books, videos:** copyrighted — link only, never copy.
- **MSFS screenshots:** follow Microsoft's Game Content Usage Rules (non-commercial use
  of game content is permitted under their conditions; re-read the current rules and
  include any required notice, e.g. that the project is not endorsed by Microsoft).

### 57.3 Trademarks

- "Microsoft Flight Simulator" is a trademark of Microsoft; "Cessna" and "Skyhawk" are
  trademarks of Textron Aviation; "Garmin" and "G1000" are trademarks of Garmin; "Airbus"
  and "A380" of Airbus.
- Use names **descriptively** (to say what the content is about) — this is generally
  acceptable ("nominative use"). Do **not** use their logos, imply endorsement, or put
  their marks in our product name or logo.
- About page statement: "Learn-To-Fly is an independent project and is not affiliated
  with, endorsed by, or sponsored by Microsoft, Asobo Studio, Textron Aviation (Cessna),
  Garmin, Airbus or the FAA. All trademarks are the property of their respective owners."
- Domain name: avoid including any of the above marks.

### 57.4 Privacy policy (outline)

1. Who we are and how to contact us.
2. What we collect: email, display name, password (hashed), preferences, learning
   progress, challenge attempts and notes, server logs (IP, user agent) for security.
3. Why: to provide accounts and progress tracking; security; aggregated, anonymous
   statistics to improve lessons.
4. Cookies: one essential session cookie; no advertising or tracking cookies; YouTube
   loads only if you click play (then YouTube's policy applies).
5. Sharing: no selling; processors: hosting (Render), database (MongoDB Atlas), email
   (P1), error monitoring (optional) — list them.
6. Retention: until you delete your account; logs ≤ 30 days.
7. Your rights: export and delete in-app; contact for anything else.
8. Children: not directed at children under 13 (COPPA); users under 13 must not register.
   (Consider 16 if targeting EU users — GDPR age of consent varies by country.)
9. Changes to this policy.

### 57.5 Terms of use (outline)

1. Acceptance; eligibility (13+).
2. Simulation-only disclaimer (57.1) incorporated.
3. Accounts: keep your password safe; one person per account.
4. Acceptable use: no abuse, scraping, attempts to break security.
5. Intellectual property: content remains ours; you may use it for personal learning.
6. No warranty; limitation of liability.
7. Termination; changes; governing law (your jurisdiction).
8. Contact.

---

## 58. The v1 demo script

A 10–12 minute demo for showing Learn-To-Fly to someone. Rehearse it at least twice
before any real demo.

### 58.1 Setup before the demo

- [ ] Production site open in a browser on a laptop (or second monitor).
- [ ] Demo account created with Modules 0–3 completed and a few attempts (so the dashboard
      looks alive). Use a clearly named demo account, not fabricated "users".
- [ ] MSFS 2024 running with the C172 G1000 loaded at KLVK, `RUNWAY` 25R, `WX_CALM`, paused.
- [ ] A phone with the challenge fly-mode page open (optional).
- [ ] Browser zoom at 110–125% for readability; notifications off.

### 58.2 Script

1. **(1 min) The problem.** "MSFS is amazing but beginners crash, and tutorials are
   scattered. Real pilots learn in a structured way with standards. Learn-To-Fly brings
   that to the sim, starting with the Cessna 172."
2. **(1 min) Landing page.** Scroll: how it works, play with the live widget, curriculum
   overview, honest scope ("v1 = Cessna 172; the A380 is the destination").
3. **(2 min) A lesson.** Open L4.2 The traffic pattern. Show the W7 animation: toggle
   wind, show crab angles, toggle radio calls. Answer a quiz question wrong to show the
   explanation.
4. **(1 min) Another widget.** Open L5.3 and drag the bank slider on W14: "at 60° you
   weigh twice as much and stall at 68 knots."
5. **(1 min) A challenge brief.** Open C4.3 Full-stop landing: the exact sim setup, the
   procedure, the criteria and tiers.
6. **(3 min) Fly it.** Switch to MSFS, unpause, fly the pattern and land (or show a
   pre-recorded 60-second clip of a landing if time is short). Point out the phone showing
   fly mode.
7. **(1 min) Debrief.** Fill in the rubric honestly; show the live score preview; submit;
   show the tier result and "Review" link for any missed criterion; show the attempt
   history.
8. **(1 min) Dashboard.** Continue card, module progress, recent attempts.
9. **(1 min) What's next.** Roadmap: auto-grading with a SimConnect companion, more
   aircraft (up to the A380), more regions.

### 58.3 Backup plan

- If the sim crashes: use the pre-recorded landing clip.
- If the site is slow: have a local production build running (`npm run build && npm start`)
  with a local DB seeded.

---

## 59. Post-v1 roadmap (to the A380)

### 59.1 v1.1 (1–2 months after launch)

- Ship remaining P1 content and widgets (Sections 13, 16).
- Password reset by email; email verification.
- Classic-panel mode with automatic image/callout swapping.
- "What's new" page from `contentReleases`.
- Printable kneeboard briefs and nav logs.
- Learning signals admin page (Section 4.3).
- Fixes and improvements from launch feedback.

### 59.2 v1.5 — Auto-grading with a SimConnect companion (the big one)

- A small Windows desktop companion (e.g. C#/.NET using the SimConnect SDK, or Node with
  a SimConnect wrapper library — evaluate options) that reads SimVars (altitude, IAS,
  heading, bank, VS, on-ground, position, flaps, engine RPM, etc.) at a few Hz.
- Pairs with the web account via a short code; streams a compact flight log to the API
  (or uploads after the flight).
- Server-side graders per challenge type compute criteria automatically (e.g. "altitude
  within ±100 ft for 90% of the steady segment").
- Web UI: flight replay chart (altitude/speed over time), ground track map.
- Xbox limitation: SimConnect is PC-only — Xbox users keep self-assessment.
- MSFS SDK docs: <https://docs.flightsimulator.com/> (SimConnect section).

### 59.3 v2 — More training depth in the C172

- Night VFR, cross-wind mastery pack, mountain flying, more regions (e.g. Seattle,
  Southern California, UK, Alps).
- Basic IFR in the C172 (attitude instrument flying, VOR/GPS approaches).
- Systems failures (electrical, vacuum/AHRS, partial panel).
- VATSIM-ready communications module.

### 59.4 v3+ — The aircraft ladder

A proposed progression (final list depends on which aircraft MSFS 2024 includes and
which have good documentation):

| Step | Aircraft class                    | Example in MSFS 2024 (verify availability)            | New skills                                |
| ---- | --------------------------------- | ----------------------------------------------------- | ----------------------------------------- |
| 1    | Single-engine piston trainer      | Cessna 172 (v1)                                       | Fundamentals, VFR                         |
| 2    | High-performance / complex single | e.g. a constant-speed prop, retractable-gear single   | Prop control, gear, higher speeds         |
| 3    | Twin piston                       | e.g. a light twin                                     | Multi-engine, engine-out                  |
| 4    | Turboprop                         | e.g. King Air-class                                   | Turbine engine management, pressurisation |
| 5    | Light jet                         | e.g. CJ4-class                                        | Jet handling, FMS, high altitude          |
| 6    | Narrow-body airliner              | e.g. A320-family / 737-class                          | Airline procedures, SOPs, CRM             |
| 7    | Wide-body airliner                | e.g. 787-class                                        | Long-haul ops                             |
| 8    | **Airbus A380**                   | A380 (if available in the sim or as a quality add-on) | Very large aircraft ops — the final goal  |

Architecture already supports this: `aircraft` collection, `aircraftSlug` on checklists,
modules/lessons/challenges can be grouped into **courses** (add a `courses` collection and
`courseSlug` fields in v2 — a small migration).

### 59.5 Parking lot

Ideas captured during the build that are not in scope. Add freely; review at each
milestone.

- Leaderboards / community challenge times.
- Spaced-repetition flashcards for V-speeds, radio calls and chart symbols.
- Voice recognition to grade radio calls.
- AI-generated debrief suggestions from notes (would need careful accuracy checks).
- Localisation (Spanish, German, French) and metric/hPa units.
- Native mobile app for fly mode.
- Instructor/classroom mode (a teacher tracks several students).
- Integration with Little Navmap or Navigraph for chart overlays.

---

# Appendices

## Appendix A — Glossary

The seed list for `content/glossary.yaml`. Definitions are short, beginner-friendly and in
our own words; the FAA Pilot/Controller Glossary is the authority where they differ.
(≈ 170 terms; the target at launch is ≥ 150.)

### A

- **Adverse yaw** — The tendency of the nose to yaw away from the direction of a turn when
  ailerons are used, caused by extra drag on the raised wing. Corrected with rudder.
- **AGL (Above Ground Level)** — Height above the terrain directly below.
- **Aileron** — Hinged surface on the outer trailing edge of each wing; controls roll.
- **Airspace** — Portions of the sky with defined rules (Classes A, B, C, D, E, G).
- **Airspeed indicator (ASI)** — Instrument showing indicated airspeed, with coloured arcs
  for operating ranges.
- **Airport diagram** — FAA chart showing an airport's runways, taxiways and buildings.
- **Alternator** — Engine-driven generator that powers the electrical system and charges
  the battery.
- **Altimeter** — Instrument showing altitude above mean sea level based on air pressure.
- **Altimeter setting** — Local pressure (inches of mercury in the US) set in the
  altimeter so it reads correct altitude.
- **Angle of attack (AoA)** — Angle between the wing's chord line and the relative wind.
- **ATC (Air Traffic Control)** — Controllers who provide separation and instructions.
- **ATIS (Automatic Terminal Information Service)** — Recorded broadcast of airport
  weather, runway in use and notices, identified by a phonetic letter.
- **Attitude** — The airplane's orientation relative to the horizon (pitch and bank).
- **Attitude indicator** — Instrument showing pitch and bank relative to an artificial
  horizon.
- **Autopilot** — System that can hold heading, altitude, vertical speed or follow a
  course.
- **Avionics** — Aircraft electronics: radios, navigation, displays, autopilot.
- **Avionics master** — Switch that powers the avionics bus.
- **AWOS/ASOS** — Automated weather observing stations broadcasting current weather.
- **Axis (axes)** — Imaginary lines through the centre of gravity around which the airplane
  rotates: longitudinal (roll), lateral (pitch), vertical (yaw).

### B

- **Balked landing** — A go-around from very close to or on the runway.
- **Bank angle** — How far the wings are tilted from level.
- **Base leg** — Pattern leg flown perpendicular to the runway before turning final.
- **Best glide speed (Vg)** — Speed giving the greatest distance per altitude lost with
  the engine off (68 KIAS in the C172S).
- **BKN (broken)** — Cloud layer covering 5/8–7/8 of the sky; counts as a ceiling.
- **Bracketing** — Correcting in progressively smaller heading changes to find the
  heading that holds a course in wind.

### C

- **Calibrated airspeed (CAS)** — Indicated airspeed corrected for instrument and position
  error.
- **CDI (Course Deviation Indicator)** — Needle showing how far left or right you are of a
  selected course.
- **Ceiling** — Height of the lowest broken or overcast cloud layer (or vertical visibility).
- **Centre of gravity (CG)** — Point where the airplane's weight acts; must stay within
  limits.
- **Chart Supplement** — FAA publication with detailed airport information (formerly A/FD).
- **Checklist** — Written list of steps for a phase of flight.
- **Chord line** — Straight line from the leading edge to the trailing edge of a wing.
- **Class B airspace** — Airspace around the busiest airports; requires an explicit
  clearance.
- **Class C airspace** — Airspace around busy airports; requires two-way radio contact.
- **Class D airspace** — Airspace around towered airports; requires two-way radio contact.
- **Class E airspace** — Controlled airspace not designated A–D.
- **Class G airspace** — Uncontrolled airspace.
- **Clearance** — ATC authorisation to proceed under specified conditions.
- **Clearing turn** — A turn made to look for traffic before a manoeuvre.
- **Compass heading** — Magnetic heading corrected for compass deviation.
- **Controlled airspace** — Airspace where ATC services are provided (A, B, C, D, E).
- **Coordinated flight** — Flight without slip or skid; ball centred.
- **Critical angle of attack** — The AoA beyond which the wing stalls.
- **Crab** — Pointing the nose into the wind to track straight over the ground.
- **Crosswind component** — The part of the wind blowing across the runway.
- **Crosswind leg** — Pattern leg perpendicular to the runway after takeoff.
- **CTAF (Common Traffic Advisory Frequency)** — Frequency for self-announcing position at
  non-towered airports.

### D

- **Dead reckoning** — Navigation by calculating heading, speed and time.
- **Density altitude** — Pressure altitude corrected for temperature; high density
  altitude reduces performance.
- **Departure leg** — Pattern leg flown straight out after takeoff (also called upwind in
  some contexts).
- **Deviation** — Compass error caused by the airplane's own magnetic fields.
- **Direct-To (D→)** — GPS function to navigate directly to a waypoint.
- **Downwind leg** — Pattern leg flown parallel to the runway in the opposite direction
  to landing.
- **Drag** — Aerodynamic force opposing motion.

### E

- **EGT (Exhaust Gas Temperature)** — Engine instrument used for leaning the mixture.
- **EIS (Engine Indication System)** — G1000 display of engine and fuel data.
- **Elevator** — Hinged surface on the horizontal tail; controls pitch.
- **Empennage** — The tail section: horizontal and vertical stabilisers, elevator, rudder.
- **ETA / ETE** — Estimated time of arrival / en route.

### F

- **Final approach** — Pattern leg aligned with the runway before landing.
- **Flaps** — Trailing-edge surfaces that increase lift and drag for slow flight and
  landing.
- **Flare** — Raising the nose just before touchdown to slow the descent.
- **Flight following** — ATC radar advisories for VFR aircraft on request.
- **Flight plan (FPL)** — Planned route; on the G1000, the list of waypoints.
- **Flow** — Doing checklist items from memory in a set physical order, then verifying.
- **Forced landing** — Landing made necessary by an emergency such as engine failure.
- **Fuel selector** — Valve selecting LEFT, RIGHT, BOTH or OFF fuel tanks.
- **Fuselage** — Main body of the airplane.

### G

- **G1000 (NXi)** — Garmin integrated glass cockpit with a PFD and MFD.
- **Glide ratio** — Horizontal distance travelled per unit of height lost in a glide.
- **Go-around** — Discontinuing an approach and climbing away.
- **GPS** — Satellite-based navigation system.
- **Ground effect** — Reduced induced drag when flying within about one wingspan of the
  ground; causes floating.
- **Groundspeed (GS)** — Speed over the ground (true airspeed adjusted for wind).

### H

- **Heading** — Direction the nose is pointing.
- **Heading bug** — Movable marker on the heading indicator/HSI used as a reference or for
  the autopilot.
- **Hemispheric rule** — VFR cruising altitude rule based on magnetic course (odd/even
  thousands + 500 ft).
- **Hold short line** — Runway holding position marking; do not cross without clearance.
- **HSI (Horizontal Situation Indicator)** — Heading indicator combined with a CDI.

### I

- **IFR (Instrument Flight Rules)** — Rules for flying by instruments in controlled
  airspace, including in clouds.
- **IMSAFE** — Pilot self-check: Illness, Medication, Stress, Alcohol, Fatigue, Emotion.
- **Indicated airspeed (IAS / KIAS)** — Airspeed read directly from the ASI, in knots.
- **Induced drag** — Drag created as a by-product of lift; increases at low speed.
- **Isogonic line** — Chart line connecting points of equal magnetic variation.

### K

- **Key point** — A planned position (e.g. high/low key) used when gliding to a landing.
- **Knot** — One nautical mile per hour (≈ 1.15 mph).

### L

- **Lateral axis** — Wingtip-to-wingtip axis; rotation about it is pitch.
- **Leaning** — Reducing the mixture to the correct fuel/air ratio.
- **Left-turning tendencies** — Torque, P-factor, spiralling slipstream and gyroscopic
  precession, which yaw a single-engine airplane left.
- **Lift** — Aerodynamic force perpendicular to the relative wind.
- **Load factor** — Ratio of lift to weight, measured in G.
- **Longitudinal axis** — Nose-to-tail axis; rotation about it is roll.

### M

- **Magnetic course / heading** — Course or heading relative to magnetic north.
- **Magnetic variation** — Angle between true north and magnetic north.
- **Magneto** — Self-contained engine-driven ignition generator; the C172 has two.
- **Manoeuvring speed (Va)** — Maximum speed for full, abrupt control deflection;
  decreases with weight.
- **Master switch** — Switch connecting the battery (and alternator) to the electrical
  system.
- **MEF (Maximum Elevation Figure)** — Chart figure showing the highest terrain/obstacle
  in a quadrangle, in hundreds of feet.
- **METAR** — Routine aviation weather observation report.
- **MFD (Multi-Function Display)** — The G1000's right-hand screen: map, engine data,
  flight plan.
- **Mixture** — Control setting the fuel/air ratio; red knob.
- **MSL (Mean Sea Level)** — Altitude reference used by the altimeter.

### N

- **Nautical mile (nm)** — 6,076 ft; one minute of latitude.
- **Nav log** — Table of headings, distances, times and fuel for a planned flight.
- **Non-towered airport** — Airport without an operating control tower; uses CTAF.
- **NOTAM** — Notice to Air Missions: time-critical information about hazards or changes.
- **NRST** — G1000 function listing nearest airports and facilities.

### O

- **OBS (Omni Bearing Selector)** — Knob selecting the course on a VOR indicator.
- **OVC (overcast)** — Cloud layer covering the whole sky; counts as a ceiling.

### P

- **P-factor** — Asymmetric propeller loading at high AoA causing left yaw.
- **PAPI (Precision Approach Path Indicator)** — Row of lights showing glide path: two
  white/two red = on path.
- **Parasite drag** — Drag from the airframe's shape and friction; increases with speed.
- **Pattern altitude** — Altitude flown in the traffic pattern, commonly 1,000 ft AGL.
- **PAVE** — Risk checklist: Pilot, Aircraft, enVironment, External pressures.
- **PFD (Primary Flight Display)** — The G1000's left-hand screen with flight instruments.
- **Phonetic alphabet** — Standard words for letters (Alpha, Bravo, Charlie…).
- **Pilotage** — Navigation by visual reference to landmarks.
- **Pitch** — Nose up/down rotation about the lateral axis.
- **POH (Pilot's Operating Handbook)** — The manufacturer's official handbook for the
  aircraft.
- **Power-off stall** — Stall practised in the approach/landing configuration.
- **Power-on stall** — Stall practised in the takeoff/departure configuration.
- **Preflight inspection** — Walkaround check of the airplane before flight.
- **Pressure altitude** — Altitude read with 29.92 inHg set.
- **Propeller** — Engine-driven airfoil producing thrust; fixed-pitch on the C172.

### R

- **Radial** — Magnetic course outbound from a VOR.
- **Read-back** — Repeating ATC instructions to confirm them.
- **Relative wind** — Airflow relative to the wing, opposite the flight path.
- **Rich** — Mixture with more fuel; full rich for start/takeoff at low elevations.
- **Roll** — Rotation about the longitudinal axis (banking).
- **Rotation** — Raising the nose on the takeoff roll to lift off (Vr).
- **Round out** — The transition from descent to the flare.
- **RPM** — Engine/propeller revolutions per minute; the C172's power indication.
- **Rudder** — Hinged surface on the vertical tail; controls yaw.
- **Run-up** — Engine and systems check before takeoff.
- **Runway incursion** — An aircraft, vehicle or person wrongly on a runway.

### S

- **SCT (scattered)** — Cloud layer covering 3/8–4/8 of the sky.
- **Sectional chart** — 1:500,000 VFR aeronautical chart.
- **Short-field technique** — Procedures to take off or land in the minimum distance.
- **Sideslip** — Wing-low technique to counter crosswind drift.
- **Skid** — Uncoordinated turn with too much rudder; ball outside the turn.
- **Slip** — Uncoordinated flight with too little rudder (or deliberate); ball inside.
- **Slow flight** — Flight at an airspeed just above the stall warning.
- **Squawk** — The transponder code; to set it.
- **Stabilised approach** — Approach on speed, on glide path, on centreline and
  configured, with small corrections only.
- **Stall** — Loss of lift when the critical AoA is exceeded.
- **Stall warning (horn)** — Alarm sounding as the wing approaches the critical AoA.
- **Standard rate turn** — Turn at 3° per second (360° in 2 minutes).
- **Steep turn** — Turn at 45° bank or more.

### T

- **TAC (Terminal Area Chart)** — 1:250,000 VFR chart for busy areas like San Francisco.
- **TAF** — Terminal Aerodrome Forecast.
- **Taxi** — Moving the airplane on the ground under its own power.
- **Threshold** — Beginning of the runway available for landing.
- **Throttle** — Power control; black knob.
- **Torque** — Reaction to propeller rotation that rolls the airplane left.
- **Touch-and-go** — Landing and taking off again without stopping.
- **Touchdown zone** — First 3,000 ft (or first third) of the runway.
- **Tower** — Air traffic control facility at a towered airport.
- **Traffic pattern** — Standard rectangular path flown around an airport for landing.
- **Transponder** — Radio that replies to radar with a code and altitude.
- **Trim** — Adjusting the trim tab to remove control pressure.
- **True airspeed (TAS)** — Actual speed through the air; higher than IAS at altitude.
- **True course** — Course relative to true north, measured on a chart.
- **Turn coordinator** — Instrument showing rate of turn and coordination (ball).

### U–Z

- **UNICOM** — Non-government radio station providing airport information.
- **Unstabilised approach** — Any approach not meeting stabilised criteria; go around.
- **Upwind leg** — Pattern leg parallel to the runway on the takeoff side.
- **V-speeds** — Standard airspeeds (Vr, Vx, Vy, Vg, Va, Vfe, Vno, Vne, Vso, Vs1).
- **VFR (Visual Flight Rules)** — Rules for flying with visual reference in good weather.
- **Vertical speed indicator (VSI)** — Shows rate of climb/descent in feet per minute.
- **VOR** — VHF Omnidirectional Range: ground navaid transmitting radials.
- **VORTAC / VOR-DME** — VOR combined with distance-measuring capability.
- **Vx** — Best angle-of-climb speed (most altitude per distance).
- **Vy** — Best rate-of-climb speed (most altitude per time).
- **WCA (Wind correction angle)** — Heading adjustment to counter wind drift.
- **Weight and balance** — Calculation ensuring weight and CG are within limits.
- **Wind shear** — Sudden change in wind speed or direction.
- **Yaw** — Nose left/right rotation about the vertical axis.
- **Yoke** — The control wheel/column moving ailerons and elevator.
- **Zulu time (UTC)** — Coordinated Universal Time, used in aviation.

---

## Appendix B — Cessna 172S normal procedures summary (in our own words)

> ⚠ **This is a simplified training summary written for the simulator, not a copy of the
> POH.** Before it goes into `content/checklists.yaml`, verify every item against the
> MSFS 2024 in-sim checklist for the variant you target, and (if available) the Cessna
> 172S POH. Where the sim and the POH differ, follow the sim for the sim-specific item and
> add a note. Items marked (G1000) or (Classic) apply to that variant only.

### B.1 Preflight (simplified for the sim)

1. Parking brake — SET.
2. Walkaround (sim walkaround mode if available): control surfaces free, no damage,
   tie-downs/chocks/pitot cover removed (if the sim models them), tyres OK.
3. Fuel quantity — check both tanks (visually in the sim or on the EIS after master on).
4. Oil — check (if modelled).

### B.2 Before starting engine

1. Preflight — COMPLETE.
2. Seat, belts — ADJUSTED, FASTENED.
3. Parking brake — SET.
4. Circuit breakers — CHECK IN (if modelled).
5. Electrical equipment / avionics master — OFF.
6. Fuel selector — BOTH.
7. Fuel shutoff valve — ON (pushed in) (if modelled).
8. Master switch (ALT and BAT) — ON (check fuel quantity, annunciators).

### B.3 Starting engine

1. Throttle — OPEN about ¼ inch (or as the in-sim checklist says).
2. Mixture — as per checklist (often IDLE CUT-OFF until the engine fires on the fuel-
   injected 172S, then RICH ⚠ verify the sim's expected sequence).
3. Auxiliary fuel pump — ON briefly to prime, then OFF (⚠ verify).
4. Beacon light — ON.
5. Propeller area — CLEAR (say "CLEAR!").
6. Ignition switch — START; release to BOTH when the engine starts.
7. Mixture — RICH (smoothly, as the engine starts, if started from cut-off).
8. Oil pressure — CHECK rising within ~30 seconds.
9. Throttle — ~1,000 RPM.

### B.4 Before taxi

1. Avionics master — ON.
2. Flaps — RETRACT (and check operation).
3. Navigation / taxi lights — ON as required.
4. Altimeter — SET.
5. ATIS / weather — OBTAIN.
6. Transponder — STANDBY/ON as appropriate (⚠ verify G1000 mode names), code 1200 (VFR).
7. COM/NAV frequencies — SET.
8. Taxi clearance (towered) — OBTAIN.
9. Brakes — CHECK as soon as the airplane moves.

### B.5 Before takeoff (run-up)

1. Parking brake — SET; position into wind, clear of others.
2. Cabin doors — CLOSED and LATCHED.
3. Flight controls — FREE and CORRECT.
4. Flight instruments — CHECK (PFD, standby instruments, no flags).
5. Fuel selector — BOTH.
6. Mixture — RICH (lean for smoothness at high-elevation airports only).
7. Elevator trim — SET for takeoff.
8. Throttle — 1,800 RPM (⚠ verify):
   - Magnetos — CHECK: L, then BOTH, then R, then BOTH; RPM drop within limits
     (typically ≤ 150 RPM each, ≤ 50 RPM difference ⚠ verify).
   - Engine instruments and ammeter/voltage — CHECK in the green.
9. Throttle — IDLE (check the engine idles), then ~1,000 RPM.
10. Flaps — SET (0°–10°).
11. Lights (strobes, landing) — ON.
12. Transponder — ALT (or as required for the sim's ATC).
13. Takeoff briefing — COMPLETE.

### B.6 Normal takeoff

1. Flaps — 0°–10°.
2. Throttle — FULL smoothly; mixture RICH.
3. Engine gauges — CHECK; "airspeed alive".
4. Elevator — lift the nose wheel at **55 KIAS**.
5. Climb speed — **70–80 KIAS** initially, then Vy **74** (⚠ verify POH phrasing).
6. Flaps — RETRACT (if extended) at a safe altitude and speed.

### B.7 Climb

1. Airspeed — 75–85 KIAS (cruise climb) or Vy 74.
2. Throttle — FULL.
3. Mixture — RICH (lean above ~3,000 ft for smooth operation if appropriate ⚠ verify).

### B.8 Cruise

1. Power — 2,100–2,700 RPM (no more than 75% power recommended ⚠ verify).
2. Elevator trim — ADJUST.
3. Mixture — LEAN (lean to peak EGT, then enrich per technique taught — simplified in v1).

### B.9 Descent

1. Power — AS DESIRED.
2. Mixture — ENRICH progressively as you descend.
3. Altimeter — SET to local setting.
4. Fuel selector — BOTH.

### B.10 Before landing

1. Seat, belts — SECURE.
2. Fuel selector — BOTH.
3. Mixture — RICH.
4. Landing/taxi lights — ON.
5. Autopilot — OFF.

### B.11 Normal landing

1. Airspeed — 65–75 KIAS flaps UP; **60–70 KIAS** flaps 30°.
2. Flaps — as required (10° below 110 KIAS; beyond 10° below 85 KIAS).
3. Stabilised by 300 ft AGL (Learn-To-Fly standard).
4. Touchdown — main wheels first.
5. Landing roll — lower the nose wheel gently.
6. Braking — as required.

### B.12 Short-field landing (P1)

1. Airspeed — 65–75 KIAS flaps up.
2. Flaps — FULL (30°).
3. Airspeed — **61 KIAS** until flare (⚠ verify).
4. Power — reduce to idle as the obstacle is cleared.
5. Touchdown — main wheels first.
6. Brakes — APPLY heavily.
7. Flaps — RETRACT (for braking effectiveness ⚠ verify).

### B.13 Balked landing (go-around)

1. Throttle — FULL.
2. Flaps — RETRACT to 20° immediately.
3. Climb speed — **60 KIAS** (⚠ verify).
4. Flaps — RETRACT to 10° then 0° at a safe altitude and positive climb (slowly).

### B.14 After landing

1. Clear the runway completely (past the hold short line).
2. Flaps — UP.
3. Transponder — STANDBY/ground mode (⚠ verify).
4. Landing and strobe lights — OFF (taxi light ON as required).

### B.15 Securing airplane (shutdown)

1. Parking brake — SET.
2. Throttle — IDLE (~1,000 RPM).
3. Electrical equipment / avionics master — OFF.
4. Mixture — IDLE CUT-OFF (pulled full out).
5. Ignition switch — OFF (after the engine stops).
6. Master switch — OFF.
7. Fuel selector — LEFT or RIGHT (to prevent cross-feeding, per POH ⚠ verify).
8. Control lock / tie-downs — INSTALL (if modelled).

### B.16 Emergency flows (memory items, simplified)

**Engine failure in flight (ABC):**

1. Airspeed — **68 KIAS** (best glide), trim.
2. Best field — CHOOSE (within glide range, into wind).
3. Checklist (restart): fuel selector BOTH, mixture RICH, fuel pump ON, ignition BOTH
   (START if the propeller has stopped) (⚠ verify).
4. Declare — 121.5 MHz or current frequency, squawk 7700.
5. If no restart — secure the engine before landing (mixture cut-off, fuel off, ignition
   off, master off after flaps are set) (⚠ verify).

**Engine failure during takeoff roll:** throttle IDLE, brakes APPLY, stop straight ahead;
mixture cut-off, ignition off, master off.

**Engine failure immediately after takeoff:** airspeed 60–70 KIAS (⚠ verify), land
roughly **straight ahead** (small turns only), flaps as required, secure the engine.

---

## Appendix C — Challenge file template

`content/challenges/c4-3-full-stop-landing.yaml` (fully worked example).

```yaml
slug: c4-3-full-stop-landing
code: C4.3
title: Full-stop landing
module: m4-takeoffs-patterns-landings
lessons: [l4-3-normal-approach-and-landing]
priority: P0
type: landing
difficulty: 3
estimatedMinutes: 20
published: true
lastVerifiedAt: null # set when verified (Section 54)
simVersion: null

goal: >
  Fly a pattern and land in the first third of the runway, on the centreline,
  without bouncing.

setup:
  aircraftVariant: c172-g1000
  airportIcao: KLVK
  startState: RUNWAY
  startDetails:
    runway: 25R
  weatherPreset: WX_CALM
  timeLocal: "10:00"
  datePreset: late-spring
  loadPreset: LOAD_SOLO
  assistance: training # Section 9.3 profile
  aiTraffic: false
  atc: false
  crashDamage: true
  flightPlan: null

procedure:
  - Complete the before-takeoff checklist.
  - Take off and fly the left traffic pattern for runway 25R at pattern altitude.
  - "Downwind: before-landing checklist, 85–90 KIAS."
  - "Abeam the touchdown point: ~1,500 RPM, flaps 10°, 80 KIAS."
  - "Base: flaps 20°, 70 KIAS."
  - "Final: flaps 30°, 65 KIAS, stabilised by 300 ft AGL — if not, go around."
  - Round out, flare, touch down on the main wheels, keep the centreline.
  - Stop on the runway or exit at the first suitable taxiway.

criteria:
  - id: stabilised
    label: Stabilised by 300 ft AGL (speed, path, centreline, configured)
    kind: binary
    required: true
    weight: 3
    reviewLink:
      { lesson: l4-3-normal-approach-and-landing, section: stabilised-approach }
  - id: final-speed
    label: Final approach speed
    kind: tiered
    tiers:
      gold: "65 KIAS −5/+10"
      silver: "65 KIAS ±10"
      bronze: "65 KIAS ±15"
    required: true
    weight: 3
  - id: touchdown-point
    label: Touchdown point
    kind: tiered
    tiers:
      gold: "Within 400 ft beyond your aiming point"
      silver: "Within the first third of the runway"
      bronze: "On the runway and stopped safely"
    required: true
    weight: 3
  - id: centreline
    label: Touchdown on the centreline
    kind: tiered
    tiers:
      gold: "Within half a wingspan"
      silver: "Within one wingspan"
      bronze: "On the runway"
    required: true
    weight: 2
  - id: no-bounce
    label: No bounce; main wheels first
    kind: tiered
    tiers:
      gold: "Smooth, mains first"
      silver: "One small bounce, corrected"
      bronze: "Bounced but safe"
    required: true
    weight: 2
  - id: rollout
    label: Directional control on the rollout
    kind: binary
    required: false
    weight: 1

randomEvents: []

commonMistakes:
  - A fast final approach, which makes the airplane float down the runway.
  - Flaring too high and dropping onto the runway.
  - Pushing the nose forward after a bounce (go around instead).

tips:
  - If you are not stabilised at 300 ft, go around. It is a good decision, not a failure.
  - During the flare, look at the far end of the runway, not over the nose.

debriefQuestions:
  - id: eyes
    prompt: Where were your eyes during the flare?
  - id: threshold-speed
    prompt: What was your speed crossing the threshold?
```

---

## Appendix D — Lesson file template

`content/lessons/<module-slug>/<lesson-slug>.md`

```markdown
---
slug: l2-4-turns-and-coordination
code: L2.4
module: m2-fundamentals
order: 4
priority: P0
title: Turns and coordination
summary: Roll into and out of turns precisely, keeping the ball centred.
estimatedMinutes: 20
prerequisites: [l2-3-climbs-and-descents]
objectives:
  - Roll into and out of shallow, medium and standard-rate turns.
  - Keep turns coordinated using rudder.
  - Roll out on a target heading using a lead of half the bank angle.
widgets: [turn-coordinator]
challenges: [c2-3-turns-to-headings, c2-4-the-box]
resources: [afh-ch3, phak-ch5]
published: false
lastVerifiedAt: null
simVersion: null
---

## How an airplane turns

Short explanation (≤ 250 words) …

![Lift vector split into vertical and horizontal parts in a bank](m2-l4-lift-vector.webp "In a bank, part of the lift pulls the airplane around the turn.")

## Adverse yaw and the rudder

Explanation …

::widget{name="turn-coordinator" mode="explore"}

:::callout{type="sim"}
If auto-rudder is on, the sim keeps the ball centred for you. …
:::

:::quiz{id="l2-4-q1" type="single"}
The ball is to the right in a right turn. Which rudder do you press?

- [ ] Left rudder
- [x] Right rudder
- [ ] No rudder — use aileron

---

"Step on the ball": press the rudder on the side the ball has moved to.
:::

## Standard-rate turns

A standard-rate turn is 3° per second … at about {{aircraft.cruiseTas}} …

## Rolling out on a heading

…

:::callout{type="tip"}
Start the rollout about half your bank angle before the target heading.
:::

## Fly it

Ready? Try [[c2-3-turns-to-headings]], then [[c2-4-the-box]].
```

---

## Appendix E — Environment variable reference

| Variable                 | Where           | Required   | Example                                                                                              | Notes                                                                                                                                    |
| ------------------------ | --------------- | ---------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `NODE_ENV`               | server          | yes        | `production`                                                                                         | `development` \| `test` \| `production`                                                                                                  |
| `PORT`                   | server          | no         | `3000`                                                                                               | Render sets `PORT` automatically                                                                                                         |
| `MONGODB_URI`            | server, scripts | yes        | `mongodb+srv://ltf-app:<password>@cluster0.xxxxx.mongodb.net/learntofly?retryWrites=true&w=majority` | Never commit                                                                                                                             |
| `SESSION_SECRET`         | server          | yes        | 64+ random chars                                                                                     | Generate with `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`; rotate by supporting an array of secrets |
| `SESSION_NAME`           | server          | no         | `ltf.sid`                                                                                            |                                                                                                                                          |
| `PUBLIC_SITE_URL`        | server          | yes (prod) | `https://learntofly.example`                                                                         | Used for links in emails, canonical URLs, CSRF origin checks                                                                             |
| `TRUST_PROXY`            | server          | no         | `1`                                                                                                  | Set in production behind Render's proxy                                                                                                  |
| `LOG_LEVEL`              | server          | no         | `info`                                                                                               | `debug` in dev                                                                                                                           |
| `RATE_LIMIT_ENABLED`     | server          | no         | `true`                                                                                               | Disable in tests                                                                                                                         |
| `EMAIL_PROVIDER_API_KEY` | server          | P1         | `re_…`                                                                                               | Resend/Postmark                                                                                                                          |
| `EMAIL_FROM`             | server          | P1         | `Learn-To-Fly <noreply@…>`                                                                           |                                                                                                                                          |
| `SENTRY_DSN`             | server          | optional   |                                                                                                      |                                                                                                                                          |
| `GIT_SHA`                | server          | no         | set by Render (`RENDER_GIT_COMMIT`)                                                                  | Shown in `/health`                                                                                                                       |
| `VITE_APP_NAME`          | client (build)  | no         | `Learn-To-Fly`                                                                                       |                                                                                                                                          |
| `VITE_PUBLIC_SITE_URL`   | client (build)  | no         | same as above                                                                                        |                                                                                                                                          |
| `VITE_SENTRY_DSN`        | client (build)  | optional   |                                                                                                      | Public by nature                                                                                                                         |
| `VITE_ANALYTICS_DOMAIN`  | client (build)  | optional   |                                                                                                      | Cookieless analytics                                                                                                                     |

Rules: anything prefixed `VITE_` is **public** (bundled into client JS). Never put secrets
in `VITE_` variables.

---

## Appendix F — Git workflow and commit conventions

### F.1 Branches

- `main` — always deployable; protected.
- Feature branches: `phase-<n>-<short-name>` (e.g. `phase-6-w7-traffic-pattern`) or
  `content/m4-lessons`, `fix/<issue>`.
- Keep branches short-lived (≤ 1 week); rebase or merge `main` frequently.

### F.2 Commits

Use Conventional Commits:

```
<type>(<scope>): <summary in imperative mood, ≤ 72 chars>

<body: what and why, wrapped at 72>

Refs: plan.md Phase 6.26
```

Types: `feat`, `fix`, `content`, `docs`, `test`, `refactor`, `style`, `chore`, `ci`, `perf`,
`build`.
Scopes: `client`, `server`, `shared`, `content`, `widgets`, `auth`, `challenges`,
`progress`, `ci`, `deps`.

Examples:

- `feat(widgets): add traffic pattern animator with wind correction`
- `content(m4): write L4.3 normal approach and landing`
- `fix(server): recompute attempt score server-side`
- `test(shared): cover scoring boundary at 90 percent`

### F.3 Pull requests

- One phase step or a coherent group of steps per PR; ≤ ~400 lines of code changed where
  possible (content PRs can be larger).
- PR description: Summary, Plan reference (phase/step IDs), Screenshots/GIFs for UI,
  Testing done, and the CLAUDE.md end-of-task sections (**What you changed / What you
  couldn't do / What you need from me**).
- CI must be green; squash-merge; delete the branch.

### F.4 Versioning

- Semantic Versioning for releases: `v1.0.0` launch; `v1.0.x` fixes; `v1.1.0` P1 features.
- Content-only updates after launch: patch version, noted in CHANGELOG under "Content".

---

## Appendix G — Aviation formulas and rules of thumb

These power the widgets (W9, W12, W13, W14, W15, W20) and the knowledge checks. Implement
them in `shared/aviation/` with unit tests. Angles in degrees unless noted; convert to
radians for `Math.sin`/`Math.cos`.

### G.1 Wind triangle

Given true course `TC`, true airspeed `TAS`, wind direction `WD` (from, true) and wind
speed `WS`:

```
windAngle = WD − TC                       (normalise to −180..180)
WCA       = asin( WS × sin(windAngle) / TAS )
TH        = TC + WCA
GS        = TAS × cos(WCA) − WS × cos(windAngle)
```

- If `WS × |sin(windAngle)| > TAS`, there is no solution (wind stronger than the
  aircraft) — show an error.
- Example: TC 090, TAS 100, wind 360/20 → windAngle = −90 → WCA = asin(−0.2) = −11.5° →
  TH 078.5; GS = 100 × 0.980 − 20 × 0 = 98 kt.

### G.2 True → magnetic → compass

```
MH = TH − variation(E)   or   TH + variation(W)      ("East is least, West is best")
CH = MH ± deviation                                    (from the compass card)
```

### G.3 Crosswind and headwind components

```
angle      = WD − runwayHeading
crosswind  = WS × sin(angle)       (positive = from the right)
headwind   = WS × cos(angle)       (negative = tailwind)
```

Rules of thumb: 30° → ½ of the wind speed; 45° → ~¾ (0.7); 60° and more → nearly all.

### G.4 Time, speed, distance, fuel

```
time (min)   = distance (nm) ÷ GS (kt) × 60
distance     = GS × time (h)
fuel (gal)   = fuel flow (gph) × time (h)
nm per min   = GS ÷ 60                  (100 kt ≈ 1.7 nm/min; 120 kt = 2 nm/min)
```

### G.5 Turns

```
rate of turn (°/s)       = 1,091 × tan(bank) ÷ TAS(kt)
standard-rate bank (°)   ≈ TAS ÷ 10 + 7
turn radius (ft)         = TAS(kt)² ÷ (11.26 × tan(bank))
rollout lead (°)         ≈ bank ÷ 2
```

### G.6 Load factor and stall speed

```
load factor n     = 1 ÷ cos(bank)                   (level, coordinated turn)
stall speed in turn = Vs × √n
```

| Bank | n    | Vs1 48 KIAS becomes |
| ---- | ---- | ------------------- |
| 0°   | 1.00 | 48                  |
| 30°  | 1.15 | 52                  |
| 45°  | 1.41 | 57                  |
| 60°  | 2.00 | 68                  |
| 75°  | 3.86 | 94                  |

### G.7 Glide distance

```
glide distance (nm) = height AGL (ft) × glide ratio ÷ 6,076
```

C172 glide ratio ≈ 9:1 (⚠ verify from the POH's maximum glide chart) → ~1.5 nm per 1,000 ft.

### G.8 Descent planning

```
descent rate (fpm) ≈ GS (kt) × 5           (for a 3° path)
top of descent (nm) ≈ altitude to lose (ft) ÷ 1,000 × 3    (3° path "3-to-1 rule")
VFR comfortable descent: ~500 fpm → time (min) = altitude to lose ÷ 500
```

### G.9 1-in-60 rule

```
track error (°) ≈ distance off course (nm) × 60 ÷ distance flown (nm)
correction to regain course by destination = track error + closing angle
closing angle (°) ≈ distance off course × 60 ÷ distance remaining
```

### G.10 Altitude and atmosphere rules of thumb

- Standard atmosphere at sea level: 15 °C, 29.92 inHg.
- Temperature lapse: ~2 °C per 1,000 ft.
- Pressure: ~1 inHg per 1,000 ft (low altitudes).
- Density altitude ≈ pressure altitude + 120 × (OAT − ISA temp at that altitude).
- True airspeed ≈ IAS + 2% per 1,000 ft of altitude.
- "High to low, look out below" — flying from high to low pressure without resetting the
  altimeter, you are lower than indicated.

### G.11 VOR geometry (for W9)

```
bearingFromStation = atan2(east, north) in degrees true, normalised 0..360
radial             = bearingFromStation − variation(E)       (VORs are magnetic)
diff               = normalise(radial − OBS) to −180..180
if |diff| ≤ 90:  flag = FROM; deflection = clamp(diff, −10, 10)
else:            flag = TO;   deflection = clamp(normalise(diff − 180), −10, 10)
needleOffset       = −deflection / 10 × fullScale             (sign per display convention)
```

Write unit tests for all four quadrants and both flags before building the UI.

---

## Appendix H — Condensed master checklist

A single-page view of every phase gate. Tick here only when the full phase checklist in
Part VI is complete.

### Phase gates

- [ ] **Phase 0** — Accounts, tools, sim setup, documents downloaded, study started (40)
- [ ] **Phase 1** — Repo scaffolded; lint/format/typecheck/test; CI green; README (41)
- [ ] **Phase 2** — Express + Mongo + validation + errors + logging + security middleware (42)
- [ ] **Phase 3** — Tokens, theming, routing, layouts, component library, static pages (43)
- [ ] **Phase 4** — Auth complete; walking skeleton deployed (M-A) (44)
- [ ] **Phase 5** — Content schemas, parser, validator, seeder, content API (45)
- [ ] **Phase 6** — Lesson player; 13 P0 widgets (M-B) (46)
- [ ] **Phase 7** — Challenges end to end with server scoring (M-C) (47)
- [ ] **Phase 8** — Progress, dashboard, continue, account data export/delete (48)
- [ ] **Phase 9** — All P0 content published and verified (M-D, M-E) (49)
- [ ] **Phase 10** — Reference section (50)
- [ ] **Phase 11** — Accessibility, performance, security hardening, polish (51)
- [ ] **Phase 12** — In-sim verification, beta test, release QA (52)
- [ ] **Phase 13** — Production launch v1.0.0 (M-F) (53)

### Definition of done (from Section 4.1)

- [ ] All P0 user stories pass E2E
- [ ] 33 P0 lessons published and verified
- [ ] 29 P0 challenges published and flown to pass
- [ ] 13 P0 widgets work with mouse, touch and keyboard
- [ ] Deployed on HTTPS with Atlas
- [ ] Demo script runs clean
- [ ] Release QA checklist complete

### What you (the project owner) must do personally

Some steps can't be done by an assistant or automation and need you:

1. **Create and own the accounts** (GitHub settings, MongoDB Atlas, Render, domain,
   optional Sentry/uptime) — Phase 0 and Phase 4. Steps:
   1. Go to <https://www.mongodb.com/products/platform/atlas-database> → "Try Free" →
      sign up → create a project "Learn-To-Fly" → "Build a Database" → M0 Free → choose a
      region → create a database user (save the password in a password manager) → Network
      Access → add IP (see Section 38.1) → "Connect" → "Drivers" → copy the connection
      string.
   2. Go to <https://render.com> → "Get Started" → sign in with GitHub → "New +" →
      "Web Service" → pick the `Learn-To-Fly` repo → fill in the settings from Section 38.2
      → add environment variables from Appendix E → "Create Web Service".
   3. In GitHub → repository **Settings** → **Branches** → "Add branch ruleset"/"Add rule"
      for `main` → require a pull request and status checks (select the CI jobs) → save.
      Then **Settings** → **Code security** → enable Dependabot alerts, security updates
      and secret scanning.
2. **Fly the sim.** Every challenge must be flown and verified by a human in MSFS 2024
   (Sections 7, 54). Only you can do this.
3. **Take the screenshots** listed in Section 49.5 in your sim.
4. **Obtain reference documents** that require purchase or accounts (POH, optional
   Garmin trainer).
5. **Recruit beta testers** (Section 52, step 12.7) and run the sessions.
6. **Make judgement calls** recorded in the Decision Log (e.g. licence choice, Radix vs
   React Aria, paid hosting).
7. **Review legal pages** (Section 57) and decide whether to seek advice if the project
   ever becomes commercial.

---

_End of plan. Last updated: 2026-09-25. Next review: end of Phase 1._
