---
name: review-lesson
description: Aviation accuracy review of a Learn to Fly lesson or challenge - every number, procedure, radio call, sim instruction and quiz answer checked against aircraft.yaml, the other content files and the v1.md Section 54 sources - ending in a list of what to verify in the sim. Use when a lesson or challenge is written or changed, before publishing, or when /ltf-review flags changed facts.
argument-hint: '<lesson or challenge slug | file path> (default: content files changed on this branch)'
---

# Review lesson

Check that a lesson or challenge teaches the right thing. Accuracy comes first; style is a
short second pass. This skill never flies the sim, so anything only the sim can confirm
goes on the owner's verification list.

**Never change an aviation fact.** Don't edit numbers, limits, procedures, radio calls,
checklist wording or quiz answers. Report them for the owner to decide. If the arguments
include `--fix`, fix only mechanical issues (formats, tokens, typos) after the report.

## 1. Load

- The target file. A slug resolves to `content/lessons/*/<slug>.md` or
  `content/challenges/<slug>.yaml`. With no argument, take every changed file under
  `content/` from `git diff main...HEAD` and `git status --porcelain`.
- What it depends on: `content/aircraft.yaml` (tokens and limits), `checklists.yaml`,
  `presets.yaml`, `airports.yaml`, `glossary.yaml`, `resources.yaml`, and the lessons it
  lists as prerequisites or links to.
- Its spec: the lesson's entry in v1.md Section 14 or v2.md Section 15 (challenges:
  v1.md Section 15 or v2.md Section 16). Read the objectives and ⚠ Verify notes there.
- v1.md Sections 18 and 54 (and v2.md Sections 19 and 51 for v2 content).

Run `npm run content:validate -- --strict` and note anything it reports for this file.

## 2. Accuracy pass

Go through the file top to bottom and list every **claim**: a number, limit, speed,
altitude, distance, frequency, procedure step, switch or menu name, radio call, rule or
regulation, and every quiz answer. For each one:

1. **Consistency.** Does it match `aircraft.yaml`, `checklists.yaml`, `airports.yaml` and
   every other lesson that states the same thing? Search for it
   (`grep -rn "Vy\|74 KIAS" content/`). A literal that a token covers should be the token.
2. **Source.** Check it against the Section 54.1 order: the sim, the in-sim checklist, the
   POH, FAA publications (PHAK, AFH, AIM, ACS, 14 CFR), current charts and the Chart
   Supplement, Garmin documentation. You may search the web for the FAA source (faa.gov
   only for rules and technique) and cite the handbook and chapter. A video or a forum
   never settles a fact. When the sim and the POH disagree on a number, the POH number is
   taught and a "Sim vs reality" callout explains the difference (Section 54.1).
3. **Status.** Mark it ✅ consistent and sourced, ❌ conflicts (say with what), ❓ needs a
   source, or 🛩 needs a sim check (menu paths, switch names, sim behaviour, screenshots).

Then check:

- **Quizzes.** The marked answer is right, the wrong options are clearly wrong (not
  arguably right), the explanation matches the answer, and numeric tolerances are fair.
- **Safety.** Anything dangerous in a real airplane has a `safety` callout. Nothing teaches
  a habit that would be wrong in a real Skyhawk without a "Sim vs reality" callout.
- **Phraseology.** Radio calls follow the AIM and the Pilot/Controller Glossary, with the
  callsign style the course uses.
- **Objectives.** Every objective in the frontmatter is taught and assessed (a quiz, a
  widget task or a challenge criterion).
- **Challenges** (Section 54.3, the steps that can be checked without the sim): every setup
  field uses a preset or value that exists; each step is unambiguous; each criterion is
  measurable from what the learner can see (PFD readouts, time, replay); the tolerances are
  achievable in the sim; Bronze, Silver and Gold describe clearly different flying;
  `estimatedMinutes` is plausible.
- **Publishing.** A `published: true` file has no `verify` callouts or `⚠ verify` notes and
  has `lastVerifiedAt` and `simVersion`. If a fact changed in a published file, it needs
  re-verifying: say so.

## 3. Style pass (short)

Report only the Section 18 items `content:validate` doesn't catch: voice, reading level
(grade 8–10), sections over about 250 words before a visual or question, jargon used before
it's defined, missing glossary links, em-dashes in prose, alt text that doesn't describe the
image. For AI-sounding prose, suggest `/unslop` instead of rewriting it here.

## 4. Report

```
## Lesson review: L2.3 Climbs and descents (published)

**Verdict:** accurate | fix before publishing | needs owner decision

### Conflicts (❌)
- line 42: "Vy 76 KIAS" but aircraft.yaml vspeed.vy is 74. Use {{vspeed.vy}}.

### Needs a source (❓)
- line 58: "lead the level-off by 10% of the vertical speed": rule of thumb; cite AFH ch. 3
  or soften to "about".

### Quiz issues
- l2-3-q2: option B is also defensible because …

### Style
- …

### Sim verification list (🛩)
- [ ] line 12: menu path Settings → General → Assistances still exists (1.8.16.0)
- [ ] line 30: the PFD shows the trend vector at this zoom level
- [ ] screenshot m2-l3-climb.webp still matches the panel

### Checked and consistent
14 claims ✅ (list them in one line each only if asked).
```

The sim verification list uses checkboxes so the owner can paste it into
`docs/verification/` or the PR. Empty sections say "None".
