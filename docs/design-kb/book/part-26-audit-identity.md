# The Audit and the Identity Playbook

This Part does two jobs. It audits the Learn to Fly client as the code stands against the rules of Parts I to XXV, and it says, in order, what to change so that LTF stops looking like a component kit and starts looking like itself. The audit findings are written as rules with the prefix AUD: each states what must be fixed, names the file or component, cites the rules it breaks, gives a severity and a fix. The playbook rules carry the prefix IDN: each specifies a signature element or a thing to remove, at the level of tokens, components, type, color roles, imagery, motion and voice, precisely enough for a developer to open a pull request from it. The Part also rules on every conflict between earlier Parts that the editors collected, and it ends with a sequenced roadmap, a decision list and a review checklist for any future design change.

The evidence here is of two kinds and the grades keep them apart. Where a finding enforces a rule with experimental support (search pop-out, line length, feedback order, typicality and novelty), its grade follows that rule's grade. Where it enforces a standard (WCAG thresholds, target sizes) or craft consensus (one heading system, one name per action), it is graded C, which says nothing about urgency. Severity is a separate scale, defined in the first chapter, and it is the scale the roadmap uses. Recommendations that are my judgment rather than a consequence of a graded rule are labeled as judgment. Nothing here states an aviation number or procedure as fact; where the audit touches aviation content, it says only where the value lives and where it should live.

## How the audit was done

### What was examined

The audit read the client code under `src/` (read only): `src/styles/tokens.css` and `src/styles/index.css` in full, every component in `src/components/`, the four layouts, the pages the findings name, and the feature folders for lessons, quizzes, challenges, progress, reference and layout. It opened every file in `public/`, including `og-image.png`, `favicon.svg` and the four PNG icons, decoded with an image library to check their pixels rather than trusting a thumbnail. It read `index.html`, `manifest.webmanifest`, the Status lines and Decision Log of `v1.md` (D-25, D-27, D-32 and D-33 in full) and Section 21 headings. It re-checked, in the code, every product finding that other writers reported in the editors' memo, and corrected three of them (see the chapter on drift between plan, code and assets, and the decision list).

Four measurements were made for this Part rather than taken from other Parts:

1. **Contrast.** Every text and ground pair that the components actually combine was computed from the hex values in `tokens.css` with the WCAG relative-luminance formula [@w3c2024wcag], in both themes, without rounding (ACC-007).
2. **Perceptual separation.** Day `ink-2` and `ink-3`, and Day `caution` and `warn`, were converted to Oklab [@ottosson2020perceptual]; the status pair was also run through the Machado deutan simulation matrix at full severity [@machado2009physiologically].
3. **Measure.** Average character width was computed from the Instrument Sans font file that ships in `node_modules` (advance widths over about 740,000 characters of LTF's own lesson Markdown), to convert the lesson column's pixel and `ch` widths into characters per line, which is the unit the reading rules use [@dyson2004physical].
4. **Counts.** Grep tallies over `src/**/*.tsx` excluding tests, for heading classes, hand-inlined cards, bracket sizes and accent hover borders. Counts are approximate (a class string split across lines is missed) and are given to show scale, not as targets.

### How a finding was established

A finding needed three things before it was written as a rule. First, the behavior had to be visible in the code: a class string, a token value, a missing branch, a file. Reported behavior that could not be found in code was left out. Second, it had to break a rule that exists in the rule index, cited by ID; a finding that broke only my taste was not written as a finding. Third, the fix had to be stated in the product's own terms (a token, a component, a file), so that it can be checked.

Positive findings were recorded the same way: what the code does well, which rules it satisfies, and why it must survive the redesign. An audit that lists only defects invites the redesign to throw out what was right, and several of LTF's best properties (the instrument tokens, the honesty lines, the reduced-motion rule, the axe tests) are exactly the things a generic redesign would flatten.

### The severity scale

Severity rates the consequence for a learner, not the grade of the rule broken; a C-grade WCAG threshold can be S1 and an A-grade finding can be S3 (EVD-005, ACC-004). The scale follows the convention that severity is judged by behavioral impact on the task [@nielsen1994enhancing] and that any problem that blocks a learner with a disability is severe whatever its guideline level (USE-060).

| Level | Meaning | Examples here |
| --- | --- | --- |
| S1 | Blocks a task, loses work, or misleads about safety or verification | lost Fly mode ticks |
| S2 | Fails a standard threshold, or a systematic defect on a common path | contrast misses |
| S3 | Inconsistency, craft defect or local confusion | heading dialects |
| S4 | Identity or polish opportunity | eyebrow overuse |

The roadmap orders work by severity within each release, and puts S1 and S2 items that are correctness or access failures before any S4 identity work, because the evidence says polish does not rescue a frustrating flow (USE-076, AES-006).

### Limits, stated plainly

This audit is one reviewer reading code, plus a handful of renders made by the dossier's author (the landing page in both themes and on a phone, the login page, the 404 and the `/learn` error state). No learner used anything for it. That has three consequences, each covered by an earlier Part's rules.

One reviewer finds a minority of the problems that exist. Hertzum and Jacobsen's review of eleven studies showed that the evaluator effect is not peculiar to one method, and that a study analyzed by one evaluator is "highly questionable" as an authoritative statement of an interface's problems [@hertzum2001evaluator]. Pooling evaluators raises coverage steeply up to about five [@nielsen1990heuristic]. This list is therefore a floor, not a census (EVD-026, USE-055, SYS-062).

Severity rated by the person who found the problem is biased toward that person's problems. The rules ask for severity to be rated on the merged list by someone who sees all of it (USE-059). The ratings here are provisional.

Inspection findings are hypotheses about learners, not observations of them (EVD-032, USE-062). That matters most for Fly mode, which no inspection can judge without the simulator running and the learner's eyes moving between screens (EVD-025, USE-063, ACC-080). Every Fly mode finding below is a code-level fact (a size, an order, a storage choice) whose cost to learners is inferred.

Finally, the lesson, challenge, dashboard and reference pages were read from source only. Rendering bugs that only appear with real data are not in this list.

::: {.rule #AUD-001 grade="A"}
**Have a second reviewer, working alone from the same scenarios, inspect the surfaces this audit covers, and re-rate severity on the merged list before scheduling anything beyond the first release.** A single evaluator finds a minority of known problems and evaluators agree poorly on what they find, a result replicated across methods and evaluator experience [@hertzum2001evaluator; @nielsen1990heuristic]. Severity rated by the finder is not a priority list (USE-059). The first release below is safe to start on one reviewer's word because it fixes threshold failures that are checkable by computation, not by judgment (EVD-061).

*In LTF:* the second pass uses the scenarios in this chapter's last section and the review checklist at the end of this Part. Findings are merged in one table with the AUD IDs as keys; new findings get new AUD numbers in a revision of this Part rather than being folded silently into old ones.
:::

::: {.rule #AUD-002 grade="B"}
**Treat every finding about an operated surface (Fly mode, the Fly tab, quizzes, the debrief, checklists) as a hypothesis, and confirm its severity with beginners at their own setup before investing in anything beyond the fix itself.** Heuristics are good at explaining problems already found, but whether inspection finds the problems learners will actually meet is untested [@nielsen1994enhancing], and views used under time pressure need testing over inspection (EVD-032, USE-062, USE-063). Grade B follows EVD-032.

*In LTF:* the Fly mode findings (AUD-036 to AUD-041) are cheap enough to fix on inspection evidence. Their redesign beyond the fix (the three-region template in IDN-022) waits for one round of the in-context test described in Part IX's protocol, run with the simulator running.
:::

::: {.rule #AUD-003 grade="B"}
**On any surface a learner operates, close its S1 and S2 findings before shipping identity or polish changes to the same surface.** Visual refinement does not compensate for a frustrating flow, and preference for a design can be unrelated to how well people perform with it [@roberts2017preference]; the rules make the order explicit (USE-076, AES-006). Grade B follows those rules.

*In LTF:* the type voice and ruled-sheet changes in the playbook must not reach `FlyModePage`, `FlyPanel`, `QuizBlock` or `DebriefForm` until AUD-033 and AUD-036 to AUD-040 are closed. The landing page and reference hub, which have no S1 findings, can take identity work in parallel.
:::

### The scenarios behind the findings

Findings were checked against five written scenarios, the form the rules ask for before any evaluation (EVD-027, USE-057). They are also the scenarios the second reviewer should use.

1. **First visit.** A beginner arrives at `/` from a shared link on a phone, has never flown, and must decide whether LTF is for them and start Lesson 0.1.
2. **Reading a lesson.** A learner at a desktop, browser default text size raised to 20 px, in Night theme, reads a lesson with a widget and a quiz, gets one quiz item wrong, and marks the lesson complete without an account.
3. **Flying a challenge.** A signed-in learner reads the Brief on a laptop, opens Fly mode on a phone propped beside a controller, ticks steps while flying, meets a random-event alert, then debriefs.
4. **Mid-flight lookup.** A learner on downwind needs one number from the reference pages on the second screen.
5. **Returning.** A learner returns after a week to the dashboard, wants to know what to do next and how they are doing.

A finding counts as S1 or S2 only if it bites in one of these scenarios. Two findings that are serious in principle but rare in these scenarios (the "Being written" links that appear only on preview builds, and the unused `body-md` utility) are rated lower for that reason.

### What this means for Learn to Fly

Keep the audit honest by keeping its limits visible. The AUD list is the starting backlog, not the whole backlog, and it is one person's.

Keep: the habit this book has started, which is to cite rule IDs in every design pull request; the axe tests in `pages/a11y.test.tsx` and `e2e/a11y.spec.ts`, which make the access floor a build property; `DevComponentsPage`, which is the right place to show every component in every state while the audit's fixes land.

Change: the way design findings enter the backlog. Each AUD finding becomes an issue that names its ID, severity and release. Re-rating after the second review (AUD-001) changes the issue, not the rule text.

Build: a small script, run in CI, that recomputes the contrast and separation figures in this chapter from `tokens.css` on every change (COL-058, SYS-024), so that the first release's fixes cannot regress. Build the five scenarios into the pull request template for any change to the pages they touch.
