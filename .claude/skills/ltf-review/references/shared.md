# Shared code checklist (`shared/**`)

Sources: v1.md Sections 15.2, 25, 35.2; v2.md Section 34.

`shared/` is imported by the client, the server and the scripts, so it must run in all
three.

- **H1 Pure and portable.** No imports from `src/`, `server/` or `scripts/`, no Node-only
  modules (`fs`, `path`, `process`), no DOM, no React. Functions take inputs and return
  values; no I/O, no `Date.now()` without it being passed in.
- **H2 Units are explicit.** Names or JSDoc say the unit: degrees or radians, knots, KIAS
  or KTAS, true or magnetic, feet MSL or AGL. Conversions happen once, at the edge.
- **H3 Angles wrap.** Headings and bearings normalise to 0–359 (or 1–360 where the plan
  says so). Check 0, 360, negative values and the 359 → 001 crossing.
- **H4 Edge cases are defined.** Zero wind, a calm or variable wind, a direct crosswind,
  a tailwind, division by zero (bank 90°, TAS 0) and impossible inputs either return a
  documented value or throw a documented error.
- **H5 Rounding is documented.** Scoring rounds percentages once and the rule is written
  next to the code (v1.md Section 35.2: 89.5 rounds to 90).
- **H6 Reference cases exist.** Aviation maths has at least five tests checked against an
  E6B or a trusted calculator, with the source in a comment. The Section 35.2 cases must
  stay green (wind triangle TC 090/TAS 100/wind 360/20, crosswind runway 25 wind 200/10,
  load factor at 60°, the VOR cases, magnetic heading with 13°E variation).
- **H7 Schemas are the contract.** A change to `shared/schemas/` is an API or content
  change: check every server route, client form and content file that uses it, and the
  version bump or migration it needs.
- **H8 Coverage holds.** `shared/` must stay at or above 90% coverage (Section 35.4).
