# Accessibility

Accessibility is the part of design that decides whether a learner can use Learn to Fly at all: a
blind learner reading a lesson with a screen reader, a learner with a tremor setting a slider, a
learner with a vestibular disorder watching a diagram move, a learner with dyslexia working
through a quiz, or a sighted learner with one hand on a yoke and the other reaching for a tablet.
This Part covers the standards (WCAG 2.2, WAI-ARIA, the Authoring Practices Guide, and the
European and US rules built on them), the research on what actually stops disabled people on the
web, the supplementary guidance for cognitive and learning disabilities, and the inclusive design
methods that treat disability as a mismatch between a person and an interaction. It then applies
all of it to the real product: `RootLayout`, `LessonPage`, `FlyModePage`, the widgets, the quiz,
the forms and the test suite.

The evidence here is of two unequal kinds, and the grades show it. The standards are consensus
documents: precise, testable and legally referenced, but not experiments, so most rules built on
them are grade C. The user research (diary studies, task-based evaluations, interview studies and
surveys of screen reader users) is smaller and older than one would like, but it is consistent on
one point that matters more than any single threshold: passing the guidelines and being usable by
disabled people are different things, and a team needs to check both. Use this Part in three ways:
as the floor a pull request must meet (the rules marked C that restate WCAG), as the method for
designing new widgets and lessons (the chapters on instruments, cognition and inclusive design),
and as the checklist in the last chapter, which a reviewer can run against a page.

## Disability as mismatch, and what the evidence says about guidelines

### From personal attribute to interaction

The Microsoft inclusive design training traces a shift in how disability is defined: from the 1980
World Health Organization view of disability as a personal attribute to the 2001 view that
disability is the interaction between features of a person's body and features of the society in
which they live [@microsoft2017inclusive]. Kat Holmes, who led the development of Microsoft's
toolkit, calls the points of failure mismatches and treats them as the building blocks of
exclusion, which makes exclusion a design outcome that can be designed out [@holmes2018mismatch].
Her examples are ordinary: a mouse that does not work for left-handed people, and a payment
touchscreen that assumes a particular language, eyesight and payment method.

The practical consequence is a change in what a design review asks. Under the attribute view, the
question is "can disabled users cope with this?" Under the mismatch view, the question is "what
does this interaction demand that some learners cannot supply?" The second question has answers a
designer can act on. Holmes's critics have a point worth keeping: one reviewer argues that calling
digital inaccessibility a "mismatch" understates its harm, and that exclusion from web content is
discrimination [@holmes2018mismatch]. The vocabulary is a tool for finding problems, not a way of
softening them.

::: {.rule #ACC-001 grade="C"}
**Describe every accessibility defect as a mismatch between a demand the interface makes and a
capability some learners lack, and fix the demand.** The interaction view of disability
[@microsoft2017inclusive] and Holmes's account of mismatches [@holmes2018mismatch] both place the
problem in the design. A defect written as "screen reader users cannot use the slider" invites a
workaround for one group; written as "the slider demands precise dragging and sight of a thin
thumb", it names the two demands to reduce. Grade C: a framework from practice, with no controlled
evidence that it improves outcomes.

*In LTF:* bug reports and review comments on widgets, `FlyPanel` and the quiz should name the
demand (fine pointer control, color discrimination, hearing, reading speed, memory, two hands,
timing) before naming a group.
:::

### Exclusion as demand against capability

Clarkson, Dong and Keates give the mismatch idea a quantitative form. In their account, exclusion
occurs when "a product cannot be used effectively because of choices made during the design
process", and it can be estimated by comparing what a product demands with the capabilities of the
population [@clarkson2003inclusive]. Their example is a kettle too heavy for a weaker user to lift.
The data came from two British surveys (the Survey of Disability in Great Britain, 1985 to 1988,
and the disability follow-up to the 1996/97 Family Resources Survey), covering 13 capabilities of
which 7 bear on product use: locomotion, reaching and stretching, dexterity, seeing, hearing,
communication and intellectual functioning.

The figures they report are a reminder of scale. About 20% of adults in Great Britain had a
disability; 48% of the disabled population were 65 or older and 29% were 75 or older; motion loss
affected 14.3% of adults aged 16 and over, sensory loss 8.5% and cognitive loss 5.6%, and any of
the three 17.3%; and at least half of those with some capability loss have more than one
[@clarkson2003inclusive]. The caveats are as important as the numbers. The data are British and
decades old, and the model treats capabilities as independent scales, which a real person's
combination of impairments often is not. They support an argument (a substantial minority of
adults have some capability loss, often several at once) and must not appear in product copy as
current prevalence.

::: {.rule #ACC-002 grade="C"}
**For every new interaction, write down its demands on seeing, hearing, reading, fine pointer
control, two-handed use, memory and timing, and provide an alternative for each demand that is not
essential to the task.** This is Clarkson and colleagues' capability and demand method applied to
software [@clarkson2003inclusive], and it matches the universal design principle of flexibility in
use, which asks for a choice of methods [@connell1997principles]. Because many people have more
than one capability loss, test combinations (low vision with a tremor), not only single demands.
Grade C: a modeling approach and consensus principle.

*In LTF:* every widget folder under `src/features/widgets/` should carry its demand list in the
design notes or the pull request. The airspeed indicator already reduces two demands: dragging the
dial has a slider and plus and minus buttons as alternatives, and the reading is spoken through an
`aria-label` and `aria-valuetext`.
:::

### Guidelines and users meet only partly

The most important empirical finding in this field is that the problems disabled users meet and
the problems guidelines describe are two overlapping sets, not one. Petrie and Kheir had 6 blind
and 6 sighted participants evaluate two websites. The problems the two groups met overlapped by
approximately 15%; on one site, blind participants rated problems as significantly more severe than
sighted participants did; participants agreed highly with each other and with the researchers on
severity; and neither participants nor researchers agreed significantly with the priority ratings
the guidelines assigned to the same problems [@petrie2007relationship]. The study is small, its
procedure is not described in the record available, and the 15% figure should not be read as a
constant. Its direction is what matters.

Power, Freire, Petrie and Swallow tested the same question at larger scale. Thirty-two blind users
worked on 16 websites and produced 1,383 instances of user problems. Only 50.4% of the problems
were covered by any WCAG 2.0 success criterion, and for covered problems, 16.7% of the sites had
implemented the recommended techniques and the problem still occurred [@power2012guidelines]. The
authors concluded that WCAG 2.0 was not widely implemented and that implementing it did not clearly
reduce problems, and they proposed moving from a problem-by-problem checklist toward principles
derived from data on how disabled people use the web. A W3C review by Laura Carlson argued that
several of the uncovered problems are general usability issues that would hurt everyone, and
Detlev Fischer suggested discounting most conclusions except the finding on link purpose
[@power2012guidelines]. The 50.4% depends on coding choices; treat it as an order of magnitude.

Neither paper argues against standards. Both argue that a standard is a floor that leaves real
problems standing, and that the order in which a checklist ranks problems is not the order in which
they hurt people.

::: {.rule #ACC-003 grade="B"}
**Run two checks on every page and widget, a conformance check against WCAG 2.2 AA and a task
check with disabled people, and call it accessible only when both pass.** Guideline coverage of
observed problems was about half in the largest study [@power2012guidelines], and the problem sets
of blind and sighted users overlapped only partly [@petrie2007relationship]. Grade B: two studies
from one research group, consistent in direction, with contested coding.

*In LTF:* the axe runs in `pages/a11y.test.tsx` and `e2e/a11y.spec.ts` are the conformance half.
The task half (a screen reader user completing Lesson 0.1 and a challenge brief, a keyboard-only
user completing a widget quiz) does not yet exist and should be scheduled before the first widget
lessons are published.
:::

::: {.rule #ACC-004 grade="B"}
**Rank accessibility defects by observed task failure and its consequence, not by the WCAG level
of the criterion they map to.** Neither participants nor researchers agreed with the priority
ratings guidelines gave to problems [@petrie2007relationship]. A keyboard trap that stops a learner
finishing a quiz outranks a cosmetic contrast miss, even though both may be Level A or AA. Grade B
for the same reasons as the rule above.

*In LTF:* a defect that stops a learner completing a lesson, a challenge brief, the `FlyPanel`
checklist or the debrief form is severe whatever criterion it maps to, and blocks release of that
page.
:::

::: myth
**"If the automated scan is clean, or the page passes WCAG, it is accessible."** Automated tools
catch a fraction of conformance failures (a WebAIM page on its 2019 data put automated detectability
near a quarter), and WebAIM states that the absence of detected errors does not mean a page is
accessible or conformant [@webaim2026million]. Even full conformance left about half of blind users'
observed problems uncovered in Power and colleagues' study [@power2012guidelines]. A clean scan is
evidence that a few common failures are absent, nothing more.
:::

### The state of the web, as a floor on the problem

The WebAIM Million scans the rendered home pages of the top one million sites each year with the
WAVE engine. In the February 2026 scan, 95.9% of home pages had at least one detected WCAG 2
failure (94.8% the year before) and the average page had about 56.1 detectable errors (up from 51)
[@webaim2026million]. Six failure types accounted for most errors: low contrast text on 83.9% of
pages, missing alternative text on 53.1%, missing form input labels on 51%, empty links on 46.3%,
empty buttons on 30.6% and missing document language on 13.5%. Comparing editions, the share of
failing pages fell only about 1.9 percentage points between 2019 and 2026.

This is an observational census of home pages, not an experiment, and it undercounts. Its value for
LTF is that it names the handful of failures that are both common and machine-detectable, so a
team that tests for them in continuous integration removes most of what a scan can find at almost
no cost. The rest of this Part deals with what a scan cannot find.

::: myth
**"Accessibility is for a small minority of users."** Microsoft's persona spectrum argues that
exclusion can be permanent, temporary or situational: one arm, an arm injury, or a new parent
holding a baby [@microsoft2017inclusive]. Clarkson and colleagues' British data put some capability
loss at around a sixth of adults, rising steeply with age [@clarkson2003inclusive]. The precise
figures are dated and local, but the claim that access needs belong to a small, separate group does
not survive either source.
:::

### Universal design and its critics

The Principles of Universal Design, compiled in 1997 by a working group at NC State, hold that
products, environments and communications can be usable by the widest range of people without
adaptation, and break that claim into seven principles: equitable use, flexibility in use, simple
and intuitive use, perceptible information, tolerance for error, low physical effort, and size and
space for approach and use [@connell1997principles]. They address usability only, not cost or
culture, and they come from built-environment and product design, so some guidelines (neutral body
position, operating force) map loosely to software.

Newell and colleagues' user-sensitive inclusive design is the main critique. Their argument is that
universal and inclusive design often lead teams to build a standard prototype first and adapt it
afterward, which wastes effort and can produce designs that meet accessibility criteria yet are
unusable in practice, and that designers need real empathy with their users, built through methods
such as ethnography and professional theatre [@newell2011user]. Defenders of universal design reply
that principle 2 already asks for flexibility. The disagreement matters less than what both sides
share: the extreme case must be in the design from the start.

::: {.rule #ACC-005 grade="C"}
**Put the hardest case (a screen reader user reading a gauge, a keyboard-only user setting a value,
a learner with low vision reading a label) into the first prototype of every widget and page, not
into a later adaptation.** Newell and colleagues argue that adapting a standard prototype wastes
effort and yields designs that pass criteria but fail people [@newell2011user]; Holmes argues that
designing inclusion in early avoids costly retrofitting [@holmes2018mismatch]. Grade C: position
papers and practice, without a controlled comparison.

*In LTF:* a widget pull request is not ready for review until its screen reader text, keyboard path
and reduced-motion behavior exist alongside the drawing. A widget that works only for a mouse user
in its first version will be retrofitted, and the retrofit will be worse.
:::

### What this means for Learn to Fly

Keep the foundations that are already in the code. `RootLayout` has a `SkipLink`, a focusable
`main#main`, labelled `nav` elements and a `RouteAnnouncer`; status is never carried by color
alone; the axe tests in `pages/a11y.test.tsx` and `e2e/a11y.spec.ts` fail on serious violations;
and `e2e/keyboard.spec.ts` walks four flows by keyboard. That is a better starting point than most
sites in the WebAIM census, and it covers the conformance half of ACC-003.

Change the way problems are framed and ranked. Write review comments in demand language (ACC-001)
and rank defects by whether they stop a learner finishing a lesson, a quiz, a brief or a flight
(ACC-004), not by criterion level. Add a demand list to every widget (ACC-002).

Build the missing half. LTF has no task testing with disabled learners. Before the widget-heavy
modules are published, recruit at least one screen reader user and one keyboard-only or switch user
to complete Lesson 0.1, a widget quiz and the brief, fly and debrief flow of one challenge, with the
sim running beside them where they fly. The chapter on designing with disabled learners describes
how; the chapter on testing describes what to record.

## The floor: WCAG 2.2, the law and a record of conformance

### How the standard is built

WCAG 2.2 is a W3C Recommendation of 5 October 2023, republished with minor editorial updates on 12
December 2024, and the W3C says that version is expected to become ISO/IEC 40500:2026
[@w3c2023wcag]. It organizes requirements under four principles (content must be perceivable,
operable, understandable and robust), 13 guidelines and testable success criteria, each at Level A
(the lowest), AA or AAA. Conformance at a level means meeting every criterion at that level and
below. The design of the standard is its central claim: accessibility can be written as pass or
fail criteria that an author, a tester and a regulator can apply to the same page and agree on.

Thresholds are applied strictly. The Understanding document for non-text contrast says a ratio of
2.999:1 fails a 3:1 requirement [@w3c2023wcag], and the contrast documentation makes the same point
for text: 4.499:1 does not meet 4.5:1 [@w3c2024wcag]. A team that rounds a computed ratio for a
status report has quietly changed the standard.

WCAG 2.2 extends WCAG 2.1 (June 2018). It added nine criteria and removed one, 4.1.1 Parsing
[@w3c2023wcag]. The additions are the ones most likely to be missed by a team that learned WCAG
from older material, including the mapping appendix in Horton and Quesenbery's book, which was
written against 2.0 [@horton2013web].

| Criterion | Level | What the name covers |
| --- | --- | --- |
| 2.4.11 Focus Not Obscured (Minimum) | AA | focused item not entirely hidden by author content |
| 2.4.12 Focus Not Obscured (Enhanced) | AAA | a stricter form of 2.4.11 |
| 2.4.13 Focus Appearance | AAA | how the focus indicator looks |
| 2.5.7 Dragging Movements | AA | a single-pointer alternative to every drag |
| 2.5.8 Target Size (Minimum) | AA | targets 24 by 24 CSS px, or spaced |
| 3.2.6 Consistent Help | A | help offered in a consistent place |
| 3.3.7 Redundant Entry | A | not asking again for information given |
| 3.3.8 Accessible Authentication (Minimum) | AA | no cognitive test to log in |
| 3.3.9 Accessible Authentication (Enhanced) | AAA | stricter form of 3.3.8 |

The table paraphrases the criteria, which the chapters that follow state precisely where they
apply. Each chapter also names the older criteria that bear on its topic: contrast, reflow and use
of color for seeing; pause, stop, hide and flashing for motion; captions for media.

::: {.rule #ACC-006 grade="C"}
**Adopt WCAG 2.2 Level AA as the minimum for every page, component and content block, and record
that target in project policy.** WCAG 2.2 is the current W3C Recommendation and the expected ISO
standard [@w3c2023wcag]; the European harmonised standard and the US federal rule both build on
earlier WCAG versions that 2.2 extends [@etsi2021en301549; @accessboard2017ict]. Grade C: a
standards requirement.

*In LTF:* `v1.md` and `AGENTS.md` should name WCAG 2.2 AA explicitly as the accessibility target, so
that a reviewer can cite it in a pull request.
:::

::: {.rule #ACC-007 grade="C"}
**Apply every numeric threshold as written, without rounding, and compute it on the real rendered
values.** The standard states that its thresholds are strict (2.999:1 fails 3:1) [@w3c2023wcag];
contrast must be computed from the final composited colors [@w3c2024wcag]. Grade C.

*In LTF:* contrast checks run on the token pairs in `src/styles/tokens.css` for both `Day` and
`Night`; target size checks run on rendered boxes, not on the class name.
:::

::: {.rule #ACC-008 grade="C"}
**Test the WCAG 2.2 additions by name in every audit: focus not obscured, dragging movements, target
size, consistent help, redundant entry and accessible authentication.** These criteria are new in
2.2 [@w3c2023wcag], are absent from older guidance [@horton2013web] and from the WCAG 2.1 set that
the current European standard incorporates [@etsi2021en301549], and so are the ones a team trained
on older material will skip. Grade C.

*In LTF:* the sticky `Header` and the lesson's sticky section `Select` (focus not obscured), the
dial and tape drags in the airspeed widget (dragging), `Button` `sm` and the `ThemeToggle` segments
(target size), the footer's "Report a problem" link (consistent help), the debrief form (redundant
entry) and `/login` (authentication) are the places to test first.
:::

Some AAA criteria fit LTF's use better than their level suggests. A team can adopt
specific AAA criteria where its users match the criterion's rationale without claiming AAA
conformance for the whole product. Three do: 2.5.5 Target Size (Enhanced),
because Fly mode is used one-handed beside a simulator; 2.3.3 Animation from Interactions, because
the audience is learning in a visually induced motion environment; and 1.4.6 Contrast (Enhanced)
for text read at a glance [@w3c2024wcag].

::: {.rule #ACC-009 grade="C"}
**Adopt named AAA criteria where LTF's use matches their rationale (enhanced target size in Fly
mode, animation from interactions everywhere, enhanced contrast for Fly mode steps), and list them
in the policy beside the AA target.** The AAA criteria are defined in the same Recommendation and
carry the same rationale as their AA counterparts at a stricter level [@w3c2024wcag]. Grade C.

*In LTF:* the chapters on pointer access, motion and seeing turn these into specific rules for
`FlyModePage`, the widgets and the `prefers-reduced-motion` handling in `index.css`.
:::

### The law built on the standard

In the European Union, EN 301 549 V3.2.1 (2021-03), produced jointly by ETSI, CEN and CENELEC, is
the harmonised standard for the accessibility of information and communication technology. Under
Commission Implementing Decision (EU) 2021/1339, conformity with it gives a presumption of
conformity with the Web Accessibility Directive [@etsi2021en301549]. Its web and software
requirements incorporate all WCAG 2.1 success criteria and extend them to non-web software (such as
mobile apps) and non-web documents. Its requirements are self-scoping, each with a precondition and
a requirement, and are organized by function rather than by product type. A revision to cover the
European Accessibility Act was planned as V4.1.1 for 2026; its status was not confirmed in the
sources, so the current version must be checked before any claim is made.

In the United States, the Access Board's 2017 final rule refreshed the Section 508 standards for
technology that federal agencies develop, procure, maintain or use. It adopted WCAG 2.0 Level A and
AA for electronic content and software user interfaces, replaced the 2000 product-category
structure with functional performance criteria and chapters for hardware, software, documentation
and referenced standards, and exempts non-web documents and software from four success criteria
(2.4.1, 2.4.5, 3.2.3 and 3.2.4) [@accessboard2017ict]. The rule applies to federal procurement, not
to private websites in general.

Neither instrument applies to LTF directly today. Both will matter the moment a school, a
university, a flight club or a training program considers adopting it, because their procurement
offices ask for a conformance report. Lazar, Goldstein and Taylor's central argument is that
accessibility fails mostly for organizational reasons: standards exist, but without process
(testing, procurement and monitoring) and policy they are not applied [@lazar2015ensuring]. The
WebAIM census, with nearly every home page still failing basic checks, is consistent with that
reading [@webaim2026million].

::: {.rule #ACC-010 grade="C"}
**Never write "accessible", "WCAG compliant", "Section 508 compliant" or "conforms to EN 301 549" in
learner-facing or marketing copy unless a dated, documented evaluation supports the exact claim.**
Section 508 names WCAG 2.0 and EN 301 549 V3.2.1 names WCAG 2.1, with different exemptions and
scopes [@accessboard2017ict; @etsi2021en301549], so a claim against one is not a claim against the
other, and the legal side of accessibility is a specialist field of its own [@lazar2015ensuring]. Grade C.

*In LTF:* the `/about` page and any future institutional pitch may describe what the product does
("every lesson works with a keyboard and a screen reader, tested on these dates") but not claim
conformance until the log in ACC-011 supports it.
:::

::: {.rule #ACC-011 grade="C"}
**Keep a conformance log from now on: date, pages, tools, assistive technology and browser pairs,
results and open issues, plus a public accessibility statement with a contact route and a list of
known issues.** Procurement under both the US and European rules asks for evidence of conformance
[@accessboard2017ict; @etsi2021en301549], and Lazar and colleagues place monitoring and
documentation at the center of accessibility that lasts [@lazar2015ensuring]. Grade C.

*In LTF:* the log can live in `docs/` beside `docs/verification/`, which already records in-sim
verification in the same spirit. The statement belongs as a static page next to `/about` and
`/disclaimer`, linked from the `Footer`, with the existing "Report a problem" dialog as its contact
route.
:::

::: {.rule #ACC-012 grade="C"}
**Put accessibility acceptance criteria in the pull request template and the definition of done (a
keyboard path, names and labels, contrast in both themes, reduced motion, screen reader text for
any graphic) instead of saving accessibility for a final audit.** Lazar and colleagues argue that
process, not knowledge, is what fails [@lazar2015ensuring], and Horton and Quesenbery's closing
chapter on practice calls for organization-wide commitment and routine auditing [@horton2013web].
Grade C.

*In LTF:* add the five checks to `.github/pull_request_template.md` and to the definition of done
in `AGENTS.md`, and reference the review checklist at the end of this Part from
`.claude/skills/ltf-review/references/client.md`.
:::

### Documents are part of the product

Power and colleagues' reviewers listed "no alternative to document formats such as PDF" among the
problems WCAG 2.0 did not cover [@power2012guidelines]. Inaccessible PDFs appear in the literature
that cites Lazar and colleagues' frustration study [@lazar2007frustrates], and in the 2026 screen
reader survey 85.6% of respondents said PDFs are very or somewhat likely to pose significant
accessibility issues, against 31.1% for Word documents [@webaim2026screen]. Under both legal
regimes, non-web documents also fall under separate clauses [@etsi2021en301549;
@accessboard2017ict].

::: {.rule #ACC-013 grade="B"}
**Publish every checklist, briefing, procedure and kneeboard as an HTML page first; offer a PDF or
print version only as a copy of an accessible page, never as the only form.** Screen reader users
rate PDFs as a likely barrier far more often than other formats [@webaim2026screen], PDF-only
content was a problem guidelines missed [@power2012guidelines], and HTML pages are what the rest of
LTF's accessibility work covers. Grade B: a large self-selected survey and an observational study
agree.

*In LTF:* keep `/reference/checklists/:slug` and the kneeboard as pages, and keep "Print" as a print
style sheet of the same page. Do not attach PDF lesson handouts.
:::

### What this means for Learn to Fly

Keep what is already conformance-minded: one `h1` per page, the axe runs on every main route in
both themes, the reflow test at 320 px, the reduced-motion test that counts running animations, and
the keyboard flows. These match the testable shape of WCAG 2.2 and give the conformance log (ACC-011)
its first entries.

Change the policy layer. Name WCAG 2.2 AA, plus the three AAA criteria in ACC-009, as the target in
`v1.md` and `AGENTS.md`; put the acceptance checks in the pull request template (ACC-012); and audit
the 2.2 additions by name (ACC-008), starting with the sticky `Header`, the `sm` controls and the
widget drags.

Build an accessibility statement page linked from the `Footer` with the "Report a problem" dialog as
its contact route, and start the conformance log now, while the product is small and every test run
is easy to record. Keep all reference material in HTML (ACC-013), and keep marketing copy free of
compliance claims (ACC-010) until the log supports them.

## Structure and semantics for screen readers

### How screen reader users actually move through a page

WebAIM's Screen Reader User Survey #11 (July to August 2026, 1,780 valid responses) is the best
available picture of real habits, with the authors' own caveat that the sample is self-selected and
may not represent all screen reader users [@webaim2026screen]. On desktop, JAWS was the primary
screen reader for 55.0% of respondents, NVDA for 32.9% and VoiceOver for 6.5%; Chrome was the
primary browser for 52.3%, Edge for 23.6% and Firefox for 15.9%; the most common pairings were JAWS
with Chrome (31.2%) and NVDA with Chrome (17.3%); and Windows was the primary desktop system for
90.7%. On mobile, 91.8% used a screen reader on a phone or tablet, iOS was primary for 73.3% and
VoiceOver was the most used mobile screen reader (72.2%), followed by TalkBack (29.5%). About half
(49.0%) used desktop and mobile about equally.

How they search a long page is the finding that should shape every lesson. When looking for
information on a lengthy page, 67.8% navigate by headings first, and 88.3% find heading levels very
or somewhat useful. Landmarks matter much less in practice: 28.3% use landmarks or regions often or
whenever available, and only 3.4% use them first. Skip links are used always or often by 37.7%
[@webaim2026screen]. And 83.9% said more accessible websites would have a bigger impact than better
assistive technology, which places the responsibility where the designer can act on it.

### Headings are the table of contents

A lesson is long, and for most screen reader users its heading outline is the navigation. Horton
and Quesenbery's chapter on solid structure makes the same point from practice: semantic markup,
content separated from presentation, and important content ordered so that assistive technology
reaches it first [@horton2013web].

::: {.rule #ACC-014 grade="B"}
**Give every page exactly one `h1` and a heading outline that descends without skipping levels,
where each heading names the content beneath it rather than decorating it.** Two thirds of screen
reader users navigate a long page by headings first and nearly nine in ten find heading levels
useful [@webaim2026screen]; structure and labels were what blind users depended on in observational
work [@lazar2007frustrates; @power2012guidelines]. Grade B: a large self-selected survey consistent
with observational studies.

*In LTF:* `LessonPage` already renders block headings as `h2` and markdown `h3` below them, and the
`SectionNav` rail lists the same sections. Two things to check: eyebrows (`eyebrow` utility, used
above nearly every heading) must stay plain text, not headings, so they do not double the outline;
and a heading such as "Fly it" or "Go deeper" must be followed by content it describes.
:::

::: myth
**"Landmarks are how screen reader users find their way."** Landmarks are cheap and worth having,
but in the 2026 survey only 28.3% of respondents used them often and 3.4% used them first, against
67.8% who go to headings first [@webaim2026screen]. A page with perfect regions and a flat or
decorative heading outline is hard to use. The ARIA specification defines landmark roles
[@w3c2023aria]; the survey shows where the weight of the effort belongs.
:::

::: {.rule #ACC-015 grade="B"}
**Mark up one `main`, a labelled `nav` for each navigation block and a skip link as the first
focusable element, and stop there unless a region has a clear purpose of its own.** Landmarks and
skip links are used by a substantial minority (about three in ten and nearly four in ten
respectively) [@webaim2026screen], and they cost little. Grade B.

*In LTF:* `RootLayout` already has `SkipLink`, `main#main` with `tabIndex=-1`, and labelled `nav`s
on the header, footer, breadcrumbs and lesson sections. `FlyModeLayout` has neither header nor
footer; check that it still renders a `main` and that the "Back to challenge" link and the steps are
reachable in a predictable order.
:::

### Native elements first

ARIA gives authors roles, states and properties to describe interface elements to assistive
technology when native HTML cannot. WAI-ARIA 1.2 (a W3C Recommendation of 6 June 2023) defines
abstract roles (which authors must not use), widget roles, document structure roles, landmark
roles, live region roles and window roles, and classes each role by how it gets its accessible name
[@w3c2023aria]. ARIA changes only what assistive technology is told. It adds no behavior, so every
interactive role needs scripted keyboard handling.

The W3C Note "Using ARIA" states four rules: use a native element with the semantics and behavior
you need instead of repurposing one with ARIA; do not change native semantics unless you must; make
every interactive ARIA control usable with the keyboard; and never apply `role="presentation"` or
`aria-hidden="true"` to a focusable element. That Note was marked a discontinued draft on 24
February 2026 and now points readers to the Authoring Practices Guide, which keeps the same spirit:
"No ARIA is better than Bad ARIA", because wrong ARIA misleads, and a role is a promise the
developer must keep [@w3c2023aria; @w3c2026authoring].

::: myth
**"ARIA makes pages less accessible."** The WebAIM Million found that pages using ARIA averaged
59.1 detected errors against 42 for pages without, and ARIA use has risen to 82.7% of home pages,
but the authors call this a correlation that may reflect page complexity, not a causal effect
[@webaim2026million]. Pages with ARIA are larger and more complex. The defensible lesson is
narrower: unnecessary or wrong ARIA adds risk, and native HTML carries less of it.
:::

::: {.rule #ACC-016 grade="C"}
**Use the native HTML element whenever one exists with the semantics and behavior needed (button,
link, input, select, fieldset and legend, details and summary, lists, tables), and add ARIA only
where HTML cannot express the role or state.** This is the first rule of using ARIA
[@w3c2023aria], and the APG warns that ARIA support across browsers and assistive technologies is
uneven, with some features unsupported in any mobile browser [@w3c2026authoring]. Grade C.

*In LTF:* the codebase mostly follows this already. `QuizBlock` uses a `fieldset` with a `legend`
and native radio and checkbox inputs; `Checkbox` keeps a native input under its styled box with the
whole label as the hit target; widget sliders are `input type="range"`; module cards on `/learn` are
`details` elements. Keep it that way when new widgets arrive.
:::

::: {.rule #ACC-017 grade="C"}
**Never put `aria-hidden="true"` or `role="presentation"` on an element that can take focus, or on
a container of one; remove hidden controls from the tab order with the `hidden` attribute or
`display: none`.** A keyboard user who lands on an element that is hidden from assistive
technology hears nothing [@w3c2023aria]. Grade C.

*In LTF:* the risk is in collapsible and visually hidden UI: the `Drawer` when closed, the lesson's
mobile section `Select` above `lg`, the glossary chips duplicated in the rail and below `xl`, and any
future Fly mode toolbar that hides itself. Icons with `aria-hidden` next to text are correct and
should stay.
:::

::: {.rule #ACC-018 grade="C"}
**Treat every ARIA role as a promise: before shipping a custom widget, implement the keyboard
behavior, states and name that the APG pattern for that role specifies, and confirm them with a
screen reader.** ARIA adds no behavior [@w3c2023aria], and the APG treats a role as a commitment the
author must keep, with interoperability testing on real assistive technology as essential
[@w3c2026authoring]. Grade C.

*In LTF:* the dial and tape SVGs in the airspeed widget use `role="img"` with a spoken reading,
which promises nothing interactive, while the adjacent range input and buttons carry the
interaction. That split is the safe pattern; a future rotary knob or heading bug that is itself
focusable must follow the APG slider pattern instead.
:::

### Names for every control and link

Two of the six failures in the WebAIM census are about names: empty links on 46.3% of home pages
and empty buttons on 30.6%, and a third, missing form input labels, affected 51% [@webaim2026million].
Unlabeled or badly designed forms were among the leading frustrations in Lazar and colleagues'
diary study of 100 blind users, alongside images without text alternatives and page layouts that
produced confusing screen reader feedback [@lazar2007frustrates]. The faults are old, common and
cheap to fix.

::: {.rule #ACC-019 grade="B"}
**Give every link, button and form control an accessible name that says what it does; an icon-only
control gets an `aria-label` or visually hidden text, and its icon is hidden from assistive
technology.** Empty links, empty buttons and missing labels are three of the six most common
detectable failures [@webaim2026million], and unlabeled forms were a leading source of frustration
[@lazar2007frustrates]. Grade B: a large census and a large diary study agree on frequency and
impact.

*In LTF:* the `ThemeToggle` on phones (icons only, with `aria-label`s), the widget steppers
("Decrease airspeed by 1 knot"), the toast dismiss X, the 44 px hamburger and the copy buttons on
the challenge brief's sim setup list are the icon-only controls to check. The pattern in the
airspeed widget is the model.
:::

Power and colleagues' reviewers agreed on one finding even when they disputed the rest: link
purpose. WCAG 1.0 asked for link text that makes sense out of context; WCAG 2.0's 2.4.4 relaxed this
to allow context from the surrounding text, and blind users still met problems with links whose
purpose was unclear [@power2012guidelines]. Screen reader users often pull up a list of links, where
the surrounding sentence is gone.

::: {.rule #ACC-020 grade="B"}
**Write link text that makes sense when read alone, naming the destination ("Read the traffic
pattern lesson"), never "click here", "read more" or a bare URL.** Link purpose was the one finding
both Power and colleagues and their critics accepted [@power2012guidelines], and misleading links
appear among the frustrations reported in the literature citing Lazar and colleagues
[@lazar2007frustrates]. Grade B.

*In LTF:* the lesson's "Fly it" challenge cards, "Go deeper" resource cards, the prev and next cards
and the challenge brief's "Recommended lessons" should each expose the destination title as the
link's name. Card links that wrap a whole card should not concatenate every badge and number into
the name; put the title in the link and keep the meta row outside it or marked as description.
:::

### Single-page navigation, reading order and live regions

A client-rendered app breaks the browser's normal page-load announcement. LTF's `RouteAnnouncer`
handles this: on a client-side navigation it moves focus to the page's `h1` (or to `main` until the
`h1` renders, waiting up to eight seconds and never stealing focus the user has moved) and
announces the new `document.title` through a polite live region. That follows the APG's guidance to
manage focus deliberately and never let it fall back to the body [@w3c2026authoring].

::: {.rule #ACC-021 grade="C"}
**On every client-side route change, move focus to the new page's `h1` and announce the page title
politely; on the first load, leave the browser's own behavior alone.** Focus should never fall back
to the body, and focus should not be set on page load except where one function is used immediately
[@w3c2026authoring]. Grade C.

*In LTF:* keep `RouteAnnouncer` and its test. Make sure every page, including `FlyModePage` and the
404, has an `h1` in `main`, and that `usePageTitle` sets a distinct title ("Page title · Learn to
Fly") before the announcement fires.
:::

::: {.rule #ACC-022 grade="B"}
**Make the source order match the visual reading order, so that a screen reader reads a page in the
order a sighted learner would.** Page layouts that produced confusing screen reader feedback were
the first frustration category in Lazar and colleagues' study [@lazar2007frustrates], and the APG
asks for a focus order that matches reading order and finishes one section before the next
[@w3c2026authoring]. Grade B.

*In LTF:* two places reorder visually. The landing stats use `order-first` to put the value above
the label, so the source reads label then value; that is acceptable only if the label still makes
sense spoken first ("modules open now, one airplane" followed by the number), otherwise reorder the
source. The `LessonPage` grid places the section rail, the article and the glossary rail side by
side; the article must come before the right rail in the source.
:::

::: {.rule #ACC-023 grade="C"}
**Use live regions only for changes the learner needs to hear: polite for results, counts and
progress, assertive only for errors and events that need immediate action, and never for continuous
animation.** ARIA defines live region properties (`aria-live`, `aria-atomic`, `aria-relevant`,
`aria-busy`) [@w3c2023aria] but not when to use them. Announcing every change floods the speech
channel and buries the one change that matters, so this rule is a judgment, graded C.

*In LTF:* the current split is right: `QuizBlock` feedback, the filter count on `/challenges`, the
password strength meter and the widgets' hidden message regions are polite; `ErrorSummary`, the
`ErrorState` and error toasts are `role="alert"`; the Fly mode random event is `role="alert"`
because it demands action. Widget live regions must announce on settle, not on every slider step
(see the chapter on instruments).
:::

### Language

Missing document language affected 13.5% of home pages in the 2026 census [@webaim2026million];
without it a screen reader may read English text with another language's pronunciation rules. LTF
declares `lang="en"` on the root element in `index.html`, which meets the requirement. The same
element also carries `translate="no"`, which tells browsers not to offer automatic translation of
the whole site. The cognitive accessibility guidance names people with limited familiarity with the
language among those its patterns serve [@seemanhorwitz2021making], and a learner reading English as
a second language may rely on a browser's translation to follow a lesson.

::: {.rule #ACC-024 grade="C"}
**Declare the document language, and block automatic translation only on the specific strings that
must not change (radio phraseology, callsigns, code values), not on the whole document.** Missing
language is a common detectable failure [@webaim2026million], and learners with limited English are
an audience the cognitive guidance names [@seemanhorwitz2021making]. Grade C: a judgment that weighs
translation errors on technical terms against access for non-native readers.

*In LTF:* keep `lang="en"`. Move `translate="no"` from the `html` element in `index.html` to the
elements that hold radio calls, ICAO codes, mono readouts and token values, and test one lesson
through a browser translation to see what breaks.
:::

### What this means for Learn to Fly

Keep the structural work already done: `SkipLink`, `main#main`, labelled `nav`s, one `h1` per page,
`RouteAnnouncer`, native inputs in `QuizBlock` and `Checkbox`, `role="img"` with spoken readings on
widget drawings, and a sensible split between polite and assertive live regions. These cover most of
what the WebAIM census finds on other sites.

Change four things. Audit link names on card links so that each says where it goes without reading
the whole card aloud (ACC-020). Check the reading order of the landing stats and the lesson grid
(ACC-022). Make sure `FlyModeLayout` has a `main` and an `h1` that the announcer can reach (ACC-015,
ACC-021). Narrow `translate="no"` to the strings that need it (ACC-024).

Build a heading-outline check into content validation: every lesson must produce one `h1`, block
headings at `h2`, markdown subheadings at `h3`, and no level skipped. The content pipeline already
knows the block structure, so this is a cheap test that protects the navigation two thirds of screen
reader users rely on (ACC-014).

## Keyboard operation and focus

### Who depends on the keyboard

Keyboard access serves more people than keyboard users. Screen reader users on desktop drive the
page through the keyboard; switch users and many people with motor disabilities send keystrokes
through other hardware; voice control software acts on focusable, named controls. Horton and
Quesenbery put keyboard access, visible focus and avoiding unexpected actions at the core of their
chapter on easy interaction [@horton2013web], and in screen reader survey #10 (December 2023 to January
2024) lack of keyboard accessibility ranked fifth among the most problematic items [@webaim2026screen]. For LTF there is a
situational case too: a learner with one hand on a yoke or throttle quadrant may reach for the
keyboard rather than the mouse.

### The keyboard model

The ARIA Authoring Practices Guide sets out the convention that makes custom widgets predictable.
Tab and Shift+Tab move between components; arrow keys move among the items inside a composite
widget such as a radio group, tablist, menu, toolbar or grid; and only one item in a composite is in
the tab sequence [@w3c2026authoring]. Two techniques manage that single stop. With a roving
tabindex, one item has `tabindex="0"` and the others `-1`; on an arrow key, the old item is set to
`-1`, the new one to `0`, and focus moves to it. With `aria-activedescendant`, only the container is
focusable and the page updates which child is active, so the author must draw the visual focus
indicator and scroll the active item into view. The APG adds that focus and selection are different
things: selection is a state and must look different from focus.

::: {.rule #ACC-025 grade="C"}
**Make every function on every page operable from the keyboard alone, with Tab and Shift+Tab moving
between components and arrow keys moving within composite widgets.** This is the APG's keyboard
convention [@w3c2026authoring]; interactive ARIA controls must be keyboard usable
[@w3c2023aria]. Grade C.

*In LTF:* `e2e/keyboard.spec.ts` already walks the landing page to a quiz, sign-up to a full brief,
fly and debrief, and the header to the speeds page. Add flows for one widget in Explore and Quiz me
modes, the glossary `Popover` chips, the `/challenges` filters and the `ReferenceSections` rail.
:::

::: {.rule #ACC-026 grade="C"}
**Give each composite widget exactly one tab stop and move within it by arrow keys, using roving
tabindex unless there is a reason to prefer `aria-activedescendant`.** Only one item in a composite
belongs in the tab sequence [@w3c2026authoring]; a radio group or tablist with one tab stop per item
makes a keyboard user press Tab many times to pass it. Grade C.

*In LTF:* the Radix `Tabs` on the challenge page, the `RadioGroup` in the debrief rubric, the
`ThemeToggle` segments and the widget "Show" view switcher (a `role="group"` of `aria-pressed`
buttons) should each be checked against the APG pattern they resemble. A group of toggle buttons
may legitimately use one tab stop per button; a radiogroup should not.
:::

::: {.rule #ACC-027 grade="C"}
**Make selection and focus look different, so that a learner can tell "this is chosen" from "this is
where I am".** The APG treats them as separate concepts and asks that they be visually distinct
[@w3c2026authoring]. Grade C.

*In LTF:* the selected `ThemeToggle` segment is an ink pill, the active tab and active nav item carry
the 3 px teal inset underline, and the active `ReferenceSections` item gets `bg-accent-tint`. None of
these must be confused with the 2 px focus ring. Where a focused item is also selected, both
indicators must show.
:::

### Seeing where focus is

The APG asks for a visible focus indicator, preferring browser defaults, and warns against subtle
changes and against colors that disappear in high-contrast modes [@w3c2026authoring]. WCAG's
non-text contrast criterion includes focus indicators among the states that need 3:1 against
adjacent colors [@w3c2023wcag].

::: {.rule #ACC-028 grade="C"}
**Never remove the focus indicator; draw it as an outline or ring with at least 3:1 contrast
against every background it can appear on, in both themes, and make it survive forced-colors
modes.** Focus states fall under the 3:1 non-text contrast criterion [@w3c2023wcag], and the APG
warns against indicators built from color changes that vanish in high-contrast modes
[@w3c2026authoring]. Grade C.

*In LTF:* the global `:focus-visible` rule in `index.css` (2 px solid `--color-focus`, offset 2 px)
is the right design, and its comment says "Never removed". `--color-focus` aliases `--color-accent`
(`#00757c` in Day, `#56d3da` in Night), which the token comments say meets 3:1 on both grounds; that
claim should be computed in a test against `canvas`, `surface`, `surface-sunken`, `accent-tint` and
the tinted callout fills, because focus can land on any of them. Inputs replace the outline with a
border plus ring through `control-box`; a ring drawn as a shadow is the kind of indicator the APG
warns can vanish in high-contrast modes, so keep a transparent outline on inputs as a fallback and
check it in a forced-colors emulation.
:::

### Focus hidden behind sticky things

WCAG 2.2's 2.4.11 Focus Not Obscured (Minimum) requires that a focused component is not entirely
hidden by author-created content, and names sticky headers, footers and cookie banners as the
hazards [@w3c2023wcag]. The browser scrolls a newly focused element into view, but it does not know
that a sticky header covers the top of the viewport, so a learner tabbing backward up a page can
land on a link that sits under the header.

LTF stacks sticky layers. The `Header` is `sticky top-0` at 64 px tall. On a lesson page below
`lg`, the mobile section `Select` is also sticky at `top-16`, directly under the header. Lesson
block headings carry `scroll-mt-24` (96 px), which protects in-page jumps to a heading, but nothing
in `index.css` sets `scroll-padding-top` for the document, so ordinary focus movement is not
protected.

::: {.rule #ACC-029 grade="C"}
**Reserve the height of every sticky layer as scroll padding on the scrolling container, so that no
focused element can scroll underneath a sticky header, toolbar, banner or section picker.**
Focus not obscured is an AA requirement in WCAG 2.2, with sticky headers as the named hazard
[@w3c2023wcag]. Grade C.

*In LTF:* set `scroll-padding-top` on `html` to the header height plus a margin (and, on lesson
pages below `lg`, plus the sticky `Select`), and test by tabbing backward through a long lesson at a
phone width with the browser zoomed to 200%. Toasts (bottom right, 360 px wide) must not cover a
focused control either; at phone width they are full width, so a long-lived error toast needs to sit
where it does not hide the field that caused it.
:::

### Where focus goes next

The APG's focus rules are specific. Focus should never fall back to the body. After a dialog closes,
focus returns to a logical target, normally the button that opened it; after an item is deleted, it
goes to the next item. Focus order should match reading order, finish one section before the next,
and avoid large backward jumps. Do not set focus on page load unless one primary function is used
immediately. Avoid positive `tabindex` values, which override the source order [@w3c2026authoring].

::: {.rule #ACC-030 grade="C"}
**When a dialog, drawer, popover or menu closes, return focus to the control that opened it; when an
item is removed, move focus to the next item or its container; never let focus fall to the body.**
These are the APG's focus rules [@w3c2026authoring]. Grade C.

*In LTF:* check `Dialog` (the account deletion "Delete your account?" dialog and the "Report a
problem" dialog), `Drawer` (the mobile menu), the glossary `Popover` and `DropdownMenu`
(`UserMenu`). Whatever the Radix defaults do, the behavior must be asserted in
`Overlays.test.tsx`, not assumed. After "Clear filters" on `/challenges`, focus should go
to the first filter or the result count, not vanish with the empty state's button.
:::

::: {.rule #ACC-031 grade="C"}
**Never use a positive `tabindex`; get the focus order from the source order, and move focus
programmatically only after a user action or a route change.** Positive values override document
order and focus on load is discouraged except where one function is used immediately
[@w3c2026authoring]. Grade C.

*In LTF:* `ErrorSummary` taking focus after a failed submit is a correct use of programmatic focus,
because it follows the learner's action. The `[tabindex='-1']:focus` rule that hides the outline on
programmatic targets is correct for `main` and headings, but must never apply to an interactive
element.
:::

### Disabled controls and shortcuts

The APG distinguishes two kinds of disabled. The native `disabled` attribute removes a control from
the tab sequence, which suits controls whose presence users can infer from their neighbors;
`aria-disabled="true"` keeps the control focusable, which suits controls whose existence matters to
discovering what the page can do [@w3c2026authoring]. Keyboard shortcuts, in the same guidance, must
supplement standard navigation rather than replace it, must avoid keys the operating system,
assistive technology (for example Caps Lock or Insert combinations) and browser already use, and
must come with documented alternatives where conflicts cannot be avoided.

::: {.rule #ACC-032 grade="C"}
**Use `aria-disabled` with an explanation for a control that a learner needs to discover (a submit
button that waits for a required answer, a locked lesson), and native `disabled` only where the
control's absence from the tab order costs nothing.** The APG gives this distinction
[@w3c2026authoring]; a disabled button skipped by Tab leaves a screen reader user unaware that the
action exists. Grade C.

*In LTF:* the quiz's "Check answer" before a choice is made, the "Finish and debrief" button, and
locked `LessonPath` stops are discoverability cases. Disabled `Button`s render at `opacity-45`; inactive
components are exempt from the text contrast criterion [@w3c2024wcag], which is a reason to pair it with text that says
why the action is unavailable.
:::

::: {.rule #ACC-033 grade="C"}
**If LTF adds keyboard shortcuts (for example to tick the next Fly mode step), make each one a
supplement to a normal control, avoid single keys and combinations that screen readers and browsers
use, document them on the page, and offer a setting to turn them off.** The APG requires shortcuts
to supplement standard navigation and to avoid assistive technology and browser keys
[@w3c2026authoring]. Grade C.

*In LTF:* no shortcuts exist today. A Fly mode shortcut is tempting because the learner's hands are
on the sim, but a single-letter key will collide with screen reader browse-mode keys; prefer a
large on-screen button, and if a shortcut is added, show it next to the button it duplicates.
:::

### What this means for Learn to Fly

Keep the global focus ring, the input focus treatment, `ErrorSummary` focus, `RouteAnnouncer` and the
keyboard e2e flows. They are the right design.

Change the sticky header behavior (ACC-029): add document scroll padding equal to the sticky layers,
and test backward tabbing on a long lesson at phone width. Compute the focus ring's contrast on every
ground it can meet, including tints and callout fills, instead of relying on the token comment
(ACC-028). Give inputs a transparent outline so forced-colors modes still show focus.

Build tests for focus return on every overlay (ACC-030) and add keyboard flows for widgets, filters,
glossary chips and the reference rail (ACC-025). When the first custom composite arrives (a Fly mode
toolbar or a rotary instrument control), implement it against its APG pattern with one tab stop
(ACC-026) and record any deliberate difference from the APG example in its pull request.

## Seeing: contrast, color, size and reflow

### Low vision is the common case

Most learners who struggle to see LTF will not be blind. They will have reduced acuity or contrast
sensitivity, often with age, or they will be reading in poor conditions: glare on a tablet, a second
screen at arm's length, a dim room lit by the simulator. Fisk and colleagues' human factors primer
on older adults treats aging vision as systematic enough to plan for, with chapters on text
characteristics, lighting and the perception of information [@fisk2009designing]. The universal
design principle of perceptible information asks for adequate contrast, maximum legibility,
presentation in more than one mode, and elements that differ "in ways that can be described"
[@connell1997principles]. Microsoft's persona spectrum puts permanent low vision, temporary eye
strain and bright sunlight on one line, as the same need for strong contrast and zoomable text
[@microsoft2017inclusive].

Legge, Rubin and Luebker's psychophysics explains why designers misjudge contrast. Readers with
normal vision reading letters of comfortable size were very tolerant of reduced contrast: for
1-degree letters, a tenfold contrast reduction cut reading rate by less than a factor of two. The
same paper says high contrast is especially important for people with low vision, who usually need
large characters [@legge1987psychophysics]. A designer with good eyes looking at a large monitor is
the reader least able to see a contrast problem.

### Contrast thresholds

The color science, the formula and the polarity research are covered in Part VI, Color. The
accessibility thresholds are short. Text needs at least 4.5:1 against its background, and
large-scale text (18 point, or 14 point bold) at least 3:1 [@w3c2023wcag]. The 4.5:1 level is
derived in the Understanding document from the contrast sensitivity loss that comes with about
20/40 acuity, which the document links to typical vision at about age 80 [@w3c2024wcag]. Visual
information needed to identify a control, its states (including focus) and the parts of a graphic
needed to understand it needs at least 3:1 against adjacent colors, and 2.999:1 fails
[@w3c2023wcag]. Low contrast text was the most common detectable failure on the web in 2026, on
83.9% of home pages [@webaim2026million].

::: {.rule #ACC-034 grade="C"}
**Meet 4.5:1 for text and 3:1 for large text on every text and background pair in both themes,
computed from the tokens, and hold the line even where a sighted designer finds the text readable.**
These are WCAG 2.2's minimums [@w3c2023wcag]; normal-sighted readers tolerate large contrast
reductions, so their impression is a poor test [@legge1987psychophysics]. Grade C.

*In LTF:* the pairs to compute include `ink-3` on `canvas`, `surface` and `surface-sunken` (it is
the faintest text color and is used for notes such as the landing hero's "You can start without an
account" line), `ink-2` on every tint, status text on its own tint (`text-warn` on `bg-warn-tint`,
`text-caution` on `bg-caution-tint` in the `BetaBanner`), and `text-accent` mono labels on
`accent-tint`. Part VI, Color, sets the full method.
:::

::: {.rule #ACC-035 grade="C"}
**Give every mark a learner must see to read an instrument or operate a control (needles, tick
marks, arc boundaries, slider thumbs and tracks, input borders, checkbox outlines, focus rings,
tier rings) at least 3:1 against the colors next to it.** This is the non-text contrast criterion,
which covers graphical objects needed to understand content as well as controls and their states
[@w3c2023wcag]. Grade C.

*In LTF:* the fixed instrument tokens (`instrument` #100f0e, `bezel`, `arc-*`, `display-*`) do not
change between themes, so each widget's markings need one computation, against the dial face rather
than the page. Widget `Label`s use a surface halo, which helps; check that thin tick marks and the
needle reach 3:1 on the face. Form controls use `line-strong` (#81807e in Day) for borders against
`surface`; compute it. The decorative `line` token on card edges is exempt because it identifies no
control.
:::

### Color is never the only signal

WCAG's use of color criterion (Level A) says color must not be the only visual means of conveying
information, indicating an action, prompting a response or distinguishing an element
[@w3c2024wcag]. Okabe and Ito, both strong protanopes, add the practical rules: combine color with
shape, line style, symbol or position; label directly instead of through a color key; and refer to
objects by shape or position, not by color name alone [@okabe2008color]. Part VI, Color, applies this
to palettes; the accessibility point is that the second signal must also reach a screen reader.

::: {.rule #ACC-036 grade="C"}
**Carry every status, result, tier, range and state in text or shape as well as color, and make
that text available to assistive technology.** Use of color is a Level A requirement
[@w3c2024wcag], and redundant coding with labels, shapes and position works for every type of color
vision [@okabe2008color]. Grade C.

*In LTF:* this is one of the product's strengths. `Badge` status variants add an icon and a word;
tiers always print Gold, Silver or Bronze; progress icons carry sr-only text ("Completed:", "In
progress:", "Not started:"); quiz results say "Correct!" or "Not quite."; ticked Fly mode steps get a
checked native checkbox as well as `border-go bg-go-tint`; airspeed arcs have text legends and the
widget states the band's meaning in text. Keep this as a review gate for every new widget, and in
particular for the G1000 and VOR widgets, whose magenta and green course colors need labels.
:::

::: {.rule #ACC-037 grade="C"}
**In lesson and challenge copy, never identify something only by its color or position ("press the
teal button", "the gauge on the right"); name it by its label and, where useful, add the color as a
second cue.** Perceptible information asks that elements differ in ways that can be described
[@connell1997principles], and Okabe and Ito recommend naming objects by shape or position rather
than color alone [@okabe2008color]; position fails for a screen reader user and in a reflowed
layout. Grade C.

*In LTF:* the content validation script (`npm run content:validate`) could flag phrases like "the
green", "the red", "on the left" and "on the right" in lesson Markdown for an author to review.
:::

### Reflow and zoom

WCAG's reflow criterion (AA) requires that content can be presented without scrolling in two
dimensions at a width equivalent to 320 CSS pixels for vertically scrolling content, or a height
equivalent to 256 CSS pixels for horizontally scrolling content; maps, diagrams, video, games and
data tables are excepted [@w3c2023wcag]. By simple arithmetic, 320 CSS pixels is the width a
1,280-pixel window gives at 400% zoom, so the criterion protects a reader who zooms far. A learner who
zooms LTF beside the simulator is the case this protects.

::: {.rule #ACC-038 grade="C"}
**Make every page reflow to 320 CSS pixels wide without sideways scrolling, and use the
two-dimensional exception only for diagrams, instrument drawings and data tables, each in its own
scrollable, keyboard-focusable region.** This is the reflow criterion and its exceptions
[@w3c2023wcag]. Grade C.

*In LTF:* `e2e/a11y.spec.ts` already fails any main page whose document scrolls sideways at 320 px,
in dark mode with reduced motion. Lesson tables already sit in a focusable bordered scroll region,
which is the right treatment for the exception. The `ReferenceSections` rail scrolls sideways below
`lg`; that is a component, not the page, but its items must remain reachable by Tab and its overflow
must be visible, not clipped.
:::

### Text size belongs to the reader

Horton and Quesenbery's chapter on clean presentation includes user customization among its topics
[@horton2013web], and Fisk and colleagues' perception guidance for older adults starts from text
characteristics and size [@fisk2009designing]. A reader can also set a larger default font size
in the browser instead of zooming every page. That preference only works if the
site's base size is relative.

LTF's `index.css` sets `html { font-size: 16px; }`. A pixel value on the root overrides the
reader's browser default, so a learner who has set a larger default sees LTF at 16 px anyway.
Page zoom still works, and the reflow test shows the layout survives it, but the quieter preference
is lost.

::: {.rule #ACC-039 grade="C"}
**Set the root font size in relative units (100%, or leave it unset) so that a learner's browser
default text size carries through, and size type and spacing in `rem` from there.** Text size is a
user preference in the accessibility literature [@horton2013web; @fisk2009designing], and a fixed
pixel root discards it. Grade C: a craft rule; the effect on reading has not been measured here.

*In LTF:* change `font-size: 16px` to `font-size: 100%` in `index.css`. Tailwind's size utilities are
already in `rem`, so the scale follows. Test the landing hero, the lesson grid and `FlyModePage` with
the browser default set to 20 px and 24 px, and fix any layout that assumed 16.
:::

::: myth
**"A dark theme is easier on older or low vision eyes."** In Piepenbrock and colleagues' experiment,
dark text on a light background gave better acuity and proofreading for older adults as well as
younger ones, and the authors recommend positive polarity for all ages; a follow-up found the
advantage grew as characters got smaller [@piepenbrock2013positive]. A theme choice still serves
readers who prefer light on dark, but age alone does not justify dark as a default.
:::

### High contrast and forced colors

Operating systems offer high-contrast or forced-colors modes that replace the author's colors with
a small user-chosen palette. The APG's warning about focus indicators that disappear in these modes
[@w3c2026authoring] applies to everything drawn with background colors or shadows alone: a selected
segment shown only as a filled pill, a progress bar's fill, a status shown only by a tinted box.

::: {.rule #ACC-040 grade="C"}
**Check every page in a forced-colors emulation and make sure focus, selection, checked states,
progress and instrument readings remain visible; where a state is drawn only with fill or shadow,
add a border, outline or text that survives.** The APG warns that indicators built from color can
vanish in high-contrast modes [@w3c2026authoring], and perceptible information asks that essential
information not depend on one sensory channel [@connell1997principles]. Grade C.

*In LTF:* the stylesheets contain no `forced-colors` handling today. The `ThemeToggle`'s selected ink
pill, the `ProgressBar` fill, the `LessonPath` pins and the tinted current-module card on `/learn`
are the elements most likely to lose their state. Widget SVGs drawn with fixed fills need a check
too; text labels and `aria-label` readings keep them usable even if the drawing degrades.
:::

### What this means for Learn to Fly

Keep the redundant coding (ACC-036), the reflow test (ACC-038) and the focusable table regions. They
are already better than most products.

Change the root font size to a relative value (ACC-039) and test with a larger browser default.
Compute contrast for every text and tint pair and every instrument marking (ACC-034, ACC-035),
starting with `ink-3`, the status tints and the widget faces. Add a content check for color-only and
position-only references in lessons (ACC-037).

Build a forced-colors pass into the visual review of each page and widget (ACC-040). Playwright can
emulate it in the same `e2e/a11y.spec.ts` loop that already runs dark mode and reduced motion, so
the cost is one more emulation per route.

## Pointer, touch and motor access

### The demands a pointer makes

A pointer interaction demands that the learner can see a target, reach it, land on it without
hitting a neighbor, and sometimes hold a button down while moving. Each is a demand in Clarkson and
colleagues' sense; dexterity and reaching are two of the seven capabilities they model, and their
data show capability loss rising steeply with age [@clarkson2003inclusive]. The universal design
principles give three that apply directly: flexibility in use (a choice of methods, right- and
left-handed use, help with accuracy and precision), low physical effort (minimize repetitive
actions and sustained effort) and size and space for approach and use (comfortable reach, room for
variation in hand size) [@connell1997principles]. Fisk and colleagues' guidance on input devices for
older adults stresses minimizing steps and keeping controls consistent [@fisk2009designing].

LTF adds a situational case few products have. Microsoft's persona spectrum (permanent, temporary,
situational) [@microsoft2017inclusive] maps onto Fly mode exactly: a learner with one arm, a learner
with a wrist injury, and a learner with one hand on a yoke, eyes on the simulator, tapping a tablet
with the other hand.

### Size and space

WCAG 2.2 made target size a Level AA requirement. Success criterion 2.5.8 says the target for a
pointer input is at least 24 by 24 CSS pixels, with five exceptions: spacing (an undersized target
passes if a 24 CSS pixel circle centered on its bounding box intersects no other target and no
other undersized target's circle), an equivalent control on the page that meets the size, inline
targets in a sentence, targets sized by the user agent and not changed by the author, and
presentations that are essential or legally required [@w3c2023wcag]. The Understanding document
says spacing can work as well as size: a toolbar of 20-pixel buttons with 4-pixel margins passes,
the same buttons with no gaps fail [@w3c2024wcag].

The enhanced criterion 2.5.5 (AAA) uses 44 by 44 CSS pixels. Its Understanding page does not explain
how 44 was derived, but it names where larger targets matter most: controls used often, actions
that cannot easily be undone, hard-to-reach or edge-of-screen controls, and steps in a sequential
task [@w3c2024wcag]. Critics call 24 pixels a low compromise; at the nominal 96 CSS pixels per inch it
is about 6 mm, though a CSS pixel has no fixed physical size on a phone.

The touch study most often behind fingertip rules is Parhi, Karlson and Bederson's. Twenty
right-handed participants (aged 19 to 42, 17 men, only five with any touchscreen handheld
experience) stood and tapped one-handed with the thumb. Discrete targets from 3.8 to 11.5 mm were
surrounded by distractors with no gap between them. Task time fell with every size increase; error
rates fell too, but 9.6 and 11.5 mm did not differ significantly; and a box of 9.1 by 8.9 mm held 95
percent of hits on a 9.6 mm target. In a four-digit keypad task, errors were higher at 5.8 mm than
at 9.6 mm and above. The authors recommended 9.2 mm for discrete targets and nothing under 9.6 mm
for serial entry, and suggested that right-edge targets extend to the screen edge because hits
leaned right there [@parhi2006target]. The sample was small, young and mostly male, on a 2005-era
device, standing still.

::: {.rule #ACC-041 grade="C"}
**Make every pointer target at least 24 by 24 CSS pixels, or space undersized targets so that a
24-pixel circle centered on each touches no other target.** This is WCAG 2.2's target size minimum
and its spacing exception [@w3c2023wcag; @w3c2024wcag]. Grade C.

*In LTF:* every `Button` size passes (`sm` 32, `md` 40, `lg` 48 px). Check the inline cases that
might not: `Badge`s that act as links, the 20 px `Checkbox` box (it passes because the whole label
is the hit target, which should stay so), `Breadcrumbs` links at `text-sm`, glossary chips, the toast
dismiss X and the `rounded-[2px]` focusable inline items. A component test can measure rendered
boxes and assert the floor.
:::

::: {.rule #ACC-042 grade="B"}
**Size controls that are used often, in sequence, under divided attention or that are hard to undo
at 44 by 44 CSS pixels or more, with visible gaps between neighbors; in Fly mode, use the `lg`
button size or larger for every control.** The AAA guidance names these cases [@w3c2024wcag], and
the touch study found errors stopped improving only at about 9.6 mm with zero spacing
[@parhi2006target]. Grade B: one small experiment and a standard's guidance point the same way.

*In LTF:* `FlyPanel large` sets step text to `text-xl`, but its "Got it", Stopwatch and "Finish and
debrief" buttons should also be `lg`, and the step rows (whole-label checkboxes) should keep at least
their current padding. The plus and minus steppers in widgets are `sm` (32 px) beside a 44 px range
input; raise them to the 44 px level, because they are pressed repeatedly. The header's `sm` "Log
in" and "Sign up" pass the floor and can stay.
:::

::: {.rule #ACC-043 grade="B"}
**On phones and tablets, make primary actions in Fly mode and the debrief span the full width of
their column, so they are reachable by either thumb and extend to both screen edges.** Parhi and
colleagues recommend that edge targets reach the screen edge [@parhi2006target], and the universal
design principles ask for right- and left-handed use [@connell1997principles]; a full-width control
satisfies both without choosing a hand. Grade B.

*In LTF:* "I'm set up, start flying", "Finish and debrief", "Mark lesson complete" and the alert's
"Got it" are the candidates. On a desktop the same buttons can return to their natural width.
:::

### Dragging and precision

WCAG 2.2's 2.5.7 Dragging Movements (AA) requires that anything operated by dragging can also be
done with a single pointer without dragging, unless dragging is essential [@w3c2023wcag]. The
Understanding examples are concrete: a range slider that also accepts a tap on the track, a map with
directional buttons, a sortable list with up and down controls [@w3c2024wcag]. Dragging demands
fine control sustained over time; it excludes people with tremor or limited dexterity, and it is
hard with a trackball, a head pointer or voice control.

::: {.rule #ACC-044 grade="C"}
**Give every drag (dial, tape, needle, heading bug, map pan, sortable list) a single-tap
alternative on the same screen: stepper buttons, a tap on the track, or a typed value.** This is
WCAG 2.2's dragging criterion [@w3c2023wcag; @w3c2024wcag]. Grade C.

*In LTF:* the airspeed indicator is the model. Its dial and tape respond to `useDrag`, and the same
value can be set with the native range input or the plus and minus buttons. Every widget with a
drag (today `wind-triangle`, `control-surfaces`, `airspace-profile` and `vor-cdi` also use the
shared `useDrag` hook, as will any future knob) must meet the same standard, and the widget test file should assert that the value can
be changed without a pointer drag.
:::

::: {.rule #ACC-045 grade="C"}
**For any numeric value a learner sets in a widget, offer arrow-key steps and, where a precise value
matters, a typed entry field, so that no task depends on pointer precision.** The universal design
principles ask designs to help users achieve accuracy and precision [@connell1997principles], and
reducing a precise-dragging demand with keyboard steps and type-in fields is the capability and
demand method's own example [@clarkson2003inclusive]. Grade C.

*In LTF:* the native range input already gives arrow-key steps of one unit; for wide ranges check
that larger steps are available from the keyboard (and add stepper buttons of ten units if not) and, in quiz mode, a number field so a
learner who must "set the value shown in the lesson" can type it. Quiz checks then compare the same
state however it was set.
:::

### Effort, repetition and mainstream hardware

Low physical effort asks designers to minimize repetitive actions and sustained effort
[@connell1997principles]. In Fly mode each extra tap is a tap made with attention divided. Shinohara
and Wobbrock's interviews found that people with disabilities combine proprietary assistive devices
with mainstream ones (phones, tablets, laptops), and value devices that let them access what
everyone else can [@shinohara2011shadow]. A disabled LTF learner is likely to arrive with ordinary
hardware used in an unusual way: a trackball, voice control, a joystick adapter, a switch.

::: {.rule #ACC-046 grade="C"}
**Keep Fly mode to one action per step: one tap to tick a step, no confirmation for anything that can
be undone, and no control that must be held down.** Low physical effort asks for minimal repetition
and sustained effort [@connell1997principles], and tolerance for error asks for fail-safe features
[@connell1997principles]; where an action is reversible, reversal is the fail-safe and a
confirmation is only an extra step. Grade C.

*In LTF:* `FlyPanel` already does this: ticking a step toggles a checkbox, and unticking it reverses
it. The `Stopwatch` uses separate Start, Pause and Reset buttons rather than a press-and-hold. Keep
the screen wake lock, which saves the learner from waking the device mid-flight.
:::

::: {.rule #ACC-047 grade="C"}
**Make the visible label of every control the start of its accessible name, so that a learner using
voice control can say what they see, and never rely on hover alone to reveal a control or its
label.** People with disabilities use mainstream devices and input methods alongside assistive
ones [@shinohara2011shadow], and what assistive technology exposes about a control is its role
and accessible name [@w3c2023aria]. Grade C.

*In LTF:* the `Tooltip` must never be the only place a control's purpose is written, because a
touch or voice user never hovers. Icon-only buttons whose `aria-label` differs from any visible text
(the `ThemeToggle` on phones) are acceptable, but buttons with visible words, such as "Got it" or
"Check answer", must not be given a different `aria-label`.
:::

### What this means for Learn to Fly

Keep the whole-label `Checkbox` hit target, the three-way drag alternative in the airspeed widget
and the one-tap step ticking in `FlyPanel`. They meet the hardest parts of the motor criteria
already.

Change sizes where use is frequent or divided: widget steppers to the 44 px level, Fly mode buttons
to `lg` (ACC-042), and full-width primary actions on phones (ACC-043). Audit inline targets (badges,
chips, breadcrumbs, the toast dismiss) against the 24 px floor (ACC-041).

Build a drag-alternative assertion into `widgets.test.tsx` for every widget (ACC-044), and a number
entry in widget quiz modes where an exact value is asked for (ACC-045). Add a measured target-size
check to the component tests, which is cheaper than finding small targets in an audit.

## Motion, time, sound and media

### Who motion hurts

Val Head defines a vestibular disorder as "any disease, damage, or injury to the vestibular
system", the inner ear and brain system that controls balance and eye movements, and notes that
animation can also affect people with epilepsy and migraine sensitivities [@head2015designing]. The
population figure usually quoted comes from Agrawal and colleagues' analysis of the 2001 to 2004
National Health and Nutrition Examination Survey: about 35.4% of US adults aged 40 and older showed
vestibular dysfunction on a modified Romberg balance test, rising steeply with age
[@agrawal2009disorders]. That is a measure of a balance deficit, not of sensitivity to screen
motion, and it must not be quoted as the share of users that animation will make ill. It does
support a proportionate claim: a large minority of adults, especially older ones, have a measurable
vestibular deficit, and LTF's learners are adults.

LTF has a further reason for caution. A flight simulator is itself a visually induced motion
environment, so a learner who reaches LTF after a session in the sim may already be at the edge of
discomfort. Part XXII, Motion and Perceived Performance, covers motion design as a whole; this
chapter covers the access requirements.

### What triggers symptoms, and what the standard requires

Head's interviews with two people with vestibular conditions, and her review of sites they found
difficult, produced three factors that make an animation likely to trigger symptoms: the size of the
movement relative to the screen (a full-screen wipe more than a small button rotation; opacity,
color and blur changes are unlikely to be a problem), mismatched direction and speed (exaggerated
parallax, scrolljacking, motion unrelated to the direction or speed of scrolling), and the virtual
distance covered (large zooms through space) [@head2015designing]. Two interviewees cannot
establish thresholds; the factors are a reasoned synthesis, graded accordingly. Her interviewees did
not want all animation removed.

WCAG has three criteria. 2.2.2 Pause, Stop, Hide (A) requires a way to pause, stop or hide content
that moves automatically, lasts more than five seconds and sits beside other content; auto-updating
content has no five-second allowance [@w3c2023wcag]. 2.3.1 Three Flashes or Below Threshold (A)
forbids anything that flashes more than three times in any one second unless the flash is below the
general and red flash thresholds. 2.3.3 Animation from Interactions (AAA) requires that motion
animation triggered by interaction can be disabled unless it is essential [@w3c2024wcag]. The
Understanding page defines motion animation as adding steps between states to create the illusion
of movement, and excludes color, blur and opacity changes that do not alter perceived size, shape or
position; "essential" means removing the motion would fundamentally change the information or
function.

::: {.rule #ACC-048 grade="C"}
**Honor `prefers-reduced-motion: reduce` for every non-essential animation, and also offer an in-app
motion setting that persists, for learners who have not set the operating system preference.**
Animation from interactions can be disabled under 2.3.3, with the media query as a sufficient
technique [@w3c2024wcag]; Head recommends a user-facing control as well [@head2015designing].
Grade C: AAA in the standard, adopted here as a requirement (ACC-009).

*In LTF:* the global rule in `index.css` sets animation and transition durations to 0.01 ms under
`reduce`, components add `motion-safe:`, and `e2e/a11y.spec.ts` asserts that no animation is running
under reduced motion. Keep all of it. Add a "Motion" choice beside the theme in `/account`
Preferences and in the header menu, stored like `ltf-theme`, that sets a `data-motion` attribute the
same CSS honors.
:::

::: {.rule #ACC-049 grade="C"}
**Judge every proposed animation by its size relative to the viewport, its match to the learner's
own movement, and the distance it appears to travel; do not use parallax, scrolljacking, scroll-linked
motion or full-screen transitions anywhere.** These are Head's three trigger factors and the
patterns her interviewees found worst [@head2015designing], and the 2.3.3 Understanding page names
parallax as a vestibular trigger [@w3c2024wcag]. Grade C.

*In LTF:* the current motion vocabulary is small and local (200 ms `fade-in`, `pop-in` at 0.98 to 1
scale, 8 px `rise-in`, `slide-in-*` for the `Drawer`), which is low risk by all three factors. The
`Drawer`'s slide covers 320 px, the largest movement in the product; under reduced motion it should
appear without sliding, which the global rule already ensures.
:::

::: {.rule #ACC-050 grade="C"}
**Give any animation that starts by itself and runs longer than five seconds beside other content a
visible pause control, and give every lesson demonstration a static equivalent.** This is 2.2.2
Pause, Stop, Hide [@w3c2023wcag]; a demonstration is a teaching aid and not essential in the
standard's sense [@w3c2024wcag]. Grade C.

*In LTF:* the `shimmer` skeleton animation (1.4 s, infinite) runs only while content loads and stops
under reduced motion; if a load ever takes longer than five seconds, the skeleton should stop
shimmering rather than loop. Any future animated widget demonstration (a traffic pattern being flown,
a turn being drawn) must start paused or carry a pause button, and the widget's static state plus
"Describe this diagram" must teach the same point.
:::

::: {.rule #ACC-051 grade="C"}
**Never flash anything more than three times in a second, and signal urgency with a slow change of
size, border or color rather than a blink.** This is 2.3.1, a Level A criterion [@w3c2024wcag], and
Head notes animation can affect people with epilepsy [@head2015designing]. Grade C.

*In LTF:* the Fly mode random event uses `warning-pulse`, a 1.2 s ring that expands to 8 px and
never animates the text, inside `motion-safe:`. That is the right pattern: under one cycle a second,
no change to the text, and off under reduced motion, where the thick `border-4 border-warn` and the
`BellRing` icon still carry the alert.
:::

::: {.rule #ACC-052 grade="C"}
**In instrument widgets, treat the value as essential and the motion between values as decoration:
under reduced motion, move needles, tapes and pointers straight to the new value.** Essential means
the information would change if the motion were removed [@w3c2024wcag]; the reading changes, the
easing does not. Grade C.

*In LTF:* the shared `Gauge` primitive rotates its needle with CSS, which the global
reduced-motion rule covers if the rotation is a transition. Check `Tape` the same way, and check that no widget uses JavaScript animation
(which a CSS media query does not stop; script must read the preference itself
[@w3c2024wcag]) for needle movement without reading the preference through
`matchMedia`.
:::

### Sound must never be the only channel

Fisk and colleagues' guidance for older adults covers auditory perception thresholds and speech
perception as part of designing for aging users [@fisk2009designing]; its specific numbers were not
checked for this Part, so the conclusion drawn here is qualitative: a quiet or high-pitched tone is a
weak warning for an older learner. The universal design principles ask that essential information
be presented in more than one mode [@connell1997principles].
In Fly mode there is a second problem: the simulator's own audio, often through a headset, competes
with anything the browser plays.

::: {.rule #ACC-053 grade="C"}
**Pair every sound with visible text and an announcement to assistive technology, and never make a
sound the only sign that something happened.** Perceptible information requires more than one mode
[@connell1997principles], and aging hearing is part of the human factors case for designing
warnings carefully [@fisk2009designing]. Grade C.

*In LTF:* the random event in `FlyPanel` plays two short beeps through Web Audio and, at the same
time, shows a `role="alert"` panel with the event label and message, which is the right triple. Keep
it. Offer a way to turn the beep off in the same preferences as motion, since a learner on a headset
may not want sounds from a second device.
:::

### Captions and transcripts

WCAG 1.2.2 Captions (Prerecorded, A) requires captions for prerecorded audio in synchronized media,
and the Understanding page says captions include speaker identification and meaningful non-speech
sound [@w3c2023wcag]. Microsoft's standard example of solving for one and extending to many is
captions: made for deaf and hard of hearing people, used by anyone watching in an open office
[@microsoft2017inclusive]. Horton and Quesenbery's chapter on accessible media adds transcripts
[@horton2013web]. A learner flying beside the sim with its audio up is a captions user too.

::: {.rule #ACC-054 grade="C"}
**Caption every video with speaker identification and the non-speech sounds that matter (engine,
warning tones, radio), and publish a text transcript beside it.** This is 1.2.2 and its Understanding
page [@w3c2023wcag], with transcripts as the accessible media practice [@horton2013web]. Grade C.

*In LTF:* the landing hero's `YouTubeEmbed` ("A 75-second tour of the lessons, diagrams and
challenges") loads the privacy-enhanced player on click. Confirm the video has authored captions,
not automatic ones, and add a "Read the transcript" link under the caption line. Every future lesson
`video` block should require a transcript field in the content schema, so the validator can enforce
it.
:::

### Time limits and timed messages

The universal design principles ask designers to let users set their own pace
[@connell1997principles], and the cognitive accessibility guidance lists avoiding data loss and
timeouts among its patterns [@seemanhorwitz2021making].

::: {.rule #ACC-055 grade="C"}
**Never put a time limit on a lesson, quiz, challenge or form; where timing is part of practice, make
the timer optional, visible and learner-controlled.** Learners should set their own pace
[@connell1997principles], and timeouts are a named barrier for people with cognitive disabilities
[@seemanhorwitz2021making]. Grade C.

*In LTF:* the Fly tab's "Timer (optional)" `Stopwatch` with Start, Pause and Reset is the right
design; the challenge is never failed by the clock. Keep it that way if scoring ever adds time
criteria: the time should be recorded and scored by the rubric, not enforced by the page.
:::

::: {.rule #ACC-056 grade="C"}
**Never let an auto-dismissing message be the only record of an outcome; anything a learner may
need to read later stays on the page or in a place they can return to.** Auto-dismissal is a
timeout on reading, and avoiding data loss and timeouts is a cognitive accessibility pattern
[@seemanhorwitz2021making]. Grade C.

*In LTF:* success and info `Toast`s dismiss after 6 s, while errors persist with `role="alert"`.
That split is sound, provided every success toast confirms something also visible elsewhere (the
"Completed" badge after "Mark lesson complete", the saved state on `/account`). Pause the 6 s timer
while the toast has focus or the pointer is over it.
:::

### What this means for Learn to Fly

Keep the global reduced-motion rule, the `motion-safe:` variants, the e2e assertion that nothing
animates under reduced motion, the non-blinking `warning-pulse`, and the beep that is always paired
with an alert panel. Together they cover the motion criteria for everything that runs today.

Change two defaults. Add an in-app Motion setting (ACC-048) and a sound toggle (ACC-053), stored
like the theme, so that learners without operating system preferences are covered. Stop the loading
shimmer after five seconds (ACC-050).

Build captions and transcript requirements into the content schema for `video` blocks (ACC-054), a
pause control and static equivalent into any future animated demonstration (ACC-050), and a rule in
the widget review that needle and tape motion jumps under reduced motion (ACC-052).
