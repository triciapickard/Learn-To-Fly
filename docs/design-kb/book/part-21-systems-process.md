# Design Systems, Process and Craft

This Part covers how a product's look and behavior are kept coherent as it grows, and how good design work gets made in the first place. The first half is about systems: what a design system is, how patterns and pattern languages work, how design decisions become tokens, what consistency buys and what it costs, and how a system is layered, governed and changed. The second half is about process and craft: the nature of design problems, exploring alternatives before refining one, critique and judgment, workmanship and finish, and the difference between polishing a product and changing its frame. The two halves meet in one claim that runs through both literatures: a product looks careful when many small decisions are made once, deliberately, and then applied without drift, and it looks generic when those decisions are left to defaults.

The evidence is mostly craft authority, practitioner books and standards, with a thin experimental core. Two small experiments on comparing alternatives (Tohidi and colleagues; Dow and colleagues) and one small experiment on consistency (Ozok and Salvendy) are the only controlled studies in the two lanes; the replicated finding that different reviewers find different problems comes from usability research and is treated more fully in Part IX, Usability Principles and Evaluation. Everything else is expert codification (Alexander, Gamma and colleagues, Frost, Kholmatova, Tidwell, Suarez and colleagues), specification (the Design Tokens Community Group), organizational practice (GOV.UK, IBM Carbon), design theory built on observation (Rittel and Webber, Cross, Schön, Lawson, Dorst and Cross) and the testimony of makers (Pye, Sennett, Rams, Vignelli, Brooks, Kocienda). Most rules are therefore graded C. Use them as the working method for Learn to Fly (LTF), and replace a C rule with evidence from LTF's own learners whenever that evidence arrives. The final chapter lists the decisions this Part settles and gives a review checklist.

## What a design system is, and what Learn to Fly already has

### Standards, components and the people who keep them

The most quoted definition comes from the *Design Systems Handbook*: a design system is "a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications" [@suarez2017design]. The two halves of that sentence do different work. Components are reusable code, and the handbook argues that reducing each to a single function (a button, a drop-down) makes it more reusable than a complex composite such as a data table. Standards are the rules around the components: naming conventions, accessibility requirements, file structure, and a visual language for color, shape, type, icons, space and motion. The handbook's warning is short: "without standards, decisions become arbitrary and difficult to critique" [@suarez2017design]. A library of components with no stated standards cannot be reviewed, because there is nothing to review it against.

The handbook frames the need historically. Its opening chapter compares design's position to the software crisis of the 1960s and to McIlroy's 1968 proposal of component-based development, and argues that a team facing growth can hire more people, design faster, or create solutions that work for many problems, and that only the last scales [@suarez2017design]. That framing is a device, not a researched history, and the handbook's claims that systems speed work come from the authors' own large companies (Salesforce, Etsy, GitHub, InVision, Airbnb) with dedicated teams. Whether the same economics hold for a one-product team is untested [@suarez2017design]. What does transfer is the structure: standards, components, and a team model. The handbook names three models (solitary, centralized, federated) and notes that a solitary system can suit a fast-moving effort but may need later work before others adopt it [@suarez2017design].

Kholmatova's *Design Systems* moves the center of gravity from the library to the language behind it. Drawing on 18 months of interviews and case studies (Airbnb, Atlassian, Eurostar, TED, Sipgate), she argues that "not all design systems are equally effective" and that what makes one effective is a shared design language, not tooling; the book deliberately contains no code [@kholmatova2017design]. She separates two kinds of pattern. Functional patterns are reusable interface parts with a concrete job, such as buttons and text fields. Perceptual patterns are descriptive visual qualities such as iconography, color and typography, the layer that gives a product its recognizable feel. Shared language is what results when patterns interconnect and are named consistently, so that the whole team uses the same words, and principles guide how patterns are created, captured, shared and used [@kholmatova2017design]. Her evidence is interview research chosen by the author, open to survivorship bias, and "design language" is a looser idea than a tested construct; no study in the notes measures whether a stronger shared language improves a product [@kholmatova2017design].

Frost's *Atomic Design* supplies the working vocabulary most front-end teams use. His starting point is that the page is the wrong unit: a site of tens of thousands of pages may rest on a handful of content types and layouts, so effort is driven by components rather than page counts [@frost2016atomic]. His five stages run from atoms (labels, inputs, buttons, which stop being functional if broken down further) to molecules (a search form of label, input and button), organisms (a header, a product grid), templates (page-level layouts that show content structure) and pages (templates filled with real, representative content). The last stage is the one teams skip and the one that tests whether the system holds up under real text and images [@frost2016atomic]. Frost lists the payoffs of a pattern library (consistency and cohesion, shared vocabulary, education, an empathetic workflow, isolated testing, speed and longevity) and the challenges (persuading short-term organizations to invest, treating the guide as a side project, libraries that lack context). He also cites a health-insurance payment flow with four distinct interface designs within five clicks as the kind of drift a system prevents [@frost2016atomic].

::: {.rule #SYS-001 grade="C"}
**Define the LTF design system as three things kept together: written standards, shared components, and a named process for changing them.** A system is reusable components "guided by clear standards", and decisions without standards become "arbitrary and difficult to critique" [@suarez2017design]; the effective part of a system is the shared language and the practice that sustains it, not the library alone [@kholmatova2017design]. Practitioner consensus from large-company cases; the speed benefit is untested for small teams.

*In LTF:* the components exist (`src/components/`), the standards exist only as comments in `tokens.css` and `index.css` that cite files no longer in the repository, and the process is implicit. All three must exist in the repository for the system to count as one.
:::

::: {.rule #SYS-002 grade="C"}
**Record functional patterns (what a part does) separately from perceptual patterns (how the product looks and feels), and change each layer on its own.** The two categories organize different decisions: a button's behavior and the product's palette, type and icon style [@kholmatova2017design]. Craft framework from interview research.

*In LTF:* functional patterns are `Button`, `Callout`, `Tabs`, `LessonPath`, `QuizBlock`, `WidgetFrame`, `Stopwatch`; perceptual patterns are the warm-neutral grounds, the single teal "horizon line", Instrument Sans plus JetBrains Mono, the radii and the line icons. Restyling the perceptual layer (for example to give LTF a display face) must not require editing component behavior, and vice versa.
:::

### Atoms are a vocabulary, not a filing system

The most common criticism of atomic design is about its taxonomy: practitioners report that the line between molecule and organism is blurry and causes arguments in teams. Frost's reply is that the labels were never the point and serve as a mental model, and that plain words like "components" and "modules" lose the sense of hierarchy [@frost2016atomic]. He also cautions that pushing the chemistry analogy too far confuses stakeholders. The strongest claims for the method, such as speed gains after the initial investment, rest on named examples (Mailchimp) rather than controlled studies [@frost2016atomic].

So the useful part of the model is the order of scale and the final stage. The order of scale says that a template constrains the components inside it, which in turn constrain the tokens they use; Alexander made the same argument for towns, buildings and construction, as the chapter on patterns below sets out [@alexander1977pattern]. The final stage says that no template is finished until it has been filled with the real content it will carry: the longest lesson title, the shortest one, a checklist item that runs to three lines, an airport name that does not fit, and the same page in both themes [@frost2016atomic].

::: {.rule #SYS-003 grade="C"}
**Use the atom, molecule, organism, template and page levels as shared vocabulary for scale, and do not reorganize folders or hold reviews around which label a part deserves.** The labels are a mental model and their boundaries are blurry in practice [@frost2016atomic]. Practitioner opinion, including the method's author.

*In LTF:* the existing split (`src/components/` for shared parts, `src/features/<feature>/` for feature parts, `src/pages/` for pages, `src/layouts/` for templates) is adequate. No renaming project is justified by this model.
:::

::: {.rule #SYS-004 grade="C"}
**Treat no page template as done until it has been rendered with real LTF content at its extremes, in both Day and Night themes, at phone width and at the desktop width used beside the sim.** The page stage of atomic design exists to test whether the system survives real text and images [@frost2016atomic]. Craft practice.

*In LTF:* the dossier records that the lesson, challenge, dashboard, reference hub and speeds pages have never been rendered with real data during this review. `/dev/components` shows components in every state but with sample text; a matching set of fixtures (longest lesson title, a three-line checklist row, a challenge with every badge) should be added there or to `/dev/widgets`.
:::

### Principles before parts

Kholmatova puts design principles in Part 1 of her book, before any component, because principles are how a team settles disputes that components cannot [@kholmatova2017design]. GOV.UK's government design principles are the best-known public example: eleven short statements, first published in 2012 and last updated on 2 April 2025, which run from "Start with user needs" and "Do less" to "Be consistent, not uniform" and, newest, "Minimise environmental impact" [@govuk2025design]. They are guidance rather than rules, and their value is that a team can point to one when two good ideas collide. "Do the hard work to make it simple" says that making something look simple is easier than making it simple to use, and that "it's always been that way" is no reason to leave complexity in place [@govuk2025design].

Principles work only if they are specific enough to decide something. "Be clear" decides nothing; "readable at arm's length next to a running simulator" decides the size of the Fly mode stopwatch digits. Vignelli's office used a similar device, which he called "guidelines, those set by ourselves for ourselves", written because young designers lacked basic principles [@vignelli2010canon].

::: {.rule #SYS-005 grade="C"}
**Write five to eight LTF design principles, each specific enough to settle a real dispute, and cite them in design decisions and pull requests.** Principles precede patterns in practitioner method [@kholmatova2017design], and public principles such as "Be consistent, not uniform" give teams a shared basis for decisions [@govuk2025design; @vignelli2010canon]. Craft and organizational practice; no study compares teams with and without principles.

*In LTF:* candidates already implicit in the code and plan are "readable beside a running sim", "one saturated color, the horizon line", "color never carries meaning alone", "honest about what is verified", and "aviation conventions are not ours to change". They belong at the top of the design-system README (SYS-006), not in CSS comments.
:::

### What LTF has today

Measured against these definitions, LTF has more of a system than its look suggests, and less than its comments claim. The standards layer exists in fragments. `src/styles/tokens.css` opens with a comment that cites "design system 2026, tokens.json", a README "Color" section and `night-mode.md` for its rules and contrast figures, and none of those files exists in the repository; the dossier also records that neither `CHANGELOG.md` nor the `v1.md` decision log has an entry for this design system, and that decision D-25 describes a different direction (a navy, white and red "Skyhawk livery", a condensed display face) that the code does not implement. The rules that survive are good ones: near-neutral greys, all text in `ink`, `ink-2` or `ink-3`, "one saturated non-status color, the horizon line", status colors always with an icon or word, and fixed instrument and chart colors used only in gauges and charts.

The component layer is real. There are 34 component files (excluding tests) in `src/components/`, among them `Button` with five variants and three sizes, `Card` with default, done, current and locked states, `Badge`, `Callout` with nine types, `Tabs`, the form controls on a shared `control-box`, `LessonPath`, `States`, `Toast` and `Stopwatch`. The widget layer has its own primitives in `features/widgets/shared/svg.tsx` (`Gauge`, `Tape`, `Arrow`, `Label`, `Compass`) from which 13 widgets are composed. `/dev/components` renders every component in every state, which is the isolated-testing environment Frost recommends [@frost2016atomic].

The process layer is the weakest. The repository has strong process for code and content (lint, typecheck, `content:validate`, `/ltf-review`, the Decision Log, the `CHANGELOG.md` rule) and almost none for design: no owner, no contribution criteria, no record of why the tokens are what they are, and evidence of drift that a process would catch. A grep of `src/**/*.tsx` for this book found arbitrary text sizes outside the scale (`text-[11px]` 27 times, `text-[12px]` 20, `text-[9px]` 11, `text-[10px]` 9, `text-[13px]` 5), and the hand-inlined card class string `rounded-lg border border-line bg-surface` in 23 files rather than `Card`. The dossier adds the larger drift: two type dialects (`text-2xl font-bold` headings on app pages against the `display-*` and `heading-*` utilities on the landing page and in `PageHeader`) and an unused `body-md`.

::: {.rule #SYS-006 grade="C"}
**Keep one design-system README in the repository that states the principles, every token's role and usage, and the contribution process, and make every code comment that cites a design source point to it.** Coordination methods that keep code, help and documentation generated from one shared specification are a core lesson of the consistency literature [@nielsen1989coordinating]; standards make decisions critiquable [@suarez2017design]. Organizational practice.

*In LTF:* write `docs/design-system/README.md` (or restore the missing `tokens.json`, README and `night-mode.md`), move the rules now in the `tokens.css` header into it with their contrast figures, and record D-25's status (cancelled or deferred) in the Decision Log so the plan and the code stop disagreeing.
:::

### What this means for Learn to Fly

Keep the existing component set, `/dev/components` and the token reset in `tokens.css` (which clears Tailwind's default palette, radii, shadows and fonts so only LTF tokens exist). These are the system's best parts and match what the practitioner literature recommends (SYS-001, SYS-002).

Change three things. First, write the standards down where people and agents will read them: a design-system README with principles, token roles and the contribution process (SYS-005, SYS-006), and a Decision Log entry that reconciles D-25 and Section 21 of `v1.md` with the design the code actually has. Second, add real-content fixtures to `/dev/components` so templates are tested at their extremes in both themes (SYS-004). Third, treat the measured drift (arbitrary text sizes, inlined cards, two type dialects) as evidence that the process layer is missing, and fix it through the governance rules later in this Part rather than through one cleanup pass that will drift again.

Do not reorganize folders around atomic labels (SYS-003). Do not build a large documentation site; LTF is one React app with one team, and a README plus `/dev/components` is the right scale.

## Patterns and pattern languages

### Alexander's form

The idea that design knowledge can be written down as reusable solutions comes from architecture. *A Pattern Language* (Alexander, Ishikawa, Silverstein and colleagues, 1977) offers 253 patterns arranged in three parts, Towns, Buildings and Construction, running from regional scale down to building details [@alexander1977pattern]. The ordering is the structural idea that matters most for software: large patterns constrain the smaller ones inside them, and smaller ones complete the larger. Each pattern has a fixed form: a short name; a rating of up to two stars for the authors' confidence that it is a real invariant; a sensitizing picture; a context; a problem statement in bold; a discussion; a solution in bold that begins "Therefore:"; a sketch; and links to the smaller patterns that help complete it, which link back in their own context [@alexander1977pattern]. Because the links form a hierarchic network, Alexander called it a language rather than a catalog.

Two parts of the form are routinely dropped by those who borrow it. The first is the confidence rating. Alexander presented his patterns as hypotheses open to revision, with the stars encoding how sure he was, and invited readers to write their own; a planning-press critique notes that the promised revision never happened and the patterns stayed fixed in print [@alexander1977pattern]. The second is the links. Pattern-language scholarship calls Gamma and colleagues' *Design Patterns* a catalog rather than a language because it makes little use of linking [@alexander1977pattern; @gamma1994design], and most user-interface pattern libraries are catalogs in the same sense: lists of components with no record of which ones contain which.

Alexander's evidence is craft authority and case study. Dearden and Finlay note that his method for deciding whether a space has the "quality without a name" is personal observation plus an unquantified claim that observers agree, and they cite Dovey's reading of the work as phenomenological, powerful because it connects to lived experience rather than because it is proven [@dearden2006pattern].

::: {.rule #SYS-007 grade="C"}
**Write each recurring LTF pattern in a fixed form: name, context, problem, solution, links to the patterns that contain it and that it contains, and a confidence label.** Alexander's form makes each pattern a problem-solution pair placed in a network of scale, and its star ratings mark confidence [@alexander1977pattern]; without links a collection is a catalog, not a language [@dearden2006pattern]. Craft codification.

*In LTF:* the recurring patterns are the lesson page, the quiz block, the challenge brief, the Fly mode panel, the checklist row, the callout, the widget frame and the lesson path. A one-screen entry for each belongs in the design-system README.
:::

::: {.rule #SYS-008 grade="C"}
**Label every LTF design rule and pattern with its evidence level (experiment, standard, craft opinion, or untested LTF hypothesis) and revisit the label when learner data arrives.** Alexander's asterisks encoded confidence and framed patterns as revisable hypotheses [@alexander1977pattern]; HCI pattern collections have been criticized for generating patterns with little evaluation [@dearden2006pattern]. Craft practice backed by a critical review.

*In LTF:* this book's A to D grades are that label. Pattern entries in the README should carry the grade of the rule that justifies them, and LTF-only hypotheses (for example a specific Fly mode type size) should say so until tested.
:::

### Interaction patterns, and what the review found

Dearden and Finlay's critical review of patterns in human-computer interaction is the main counterweight to enthusiasm. They define a pattern as a structured description of an invariant solution to a recurrent problem within a context, and a pattern language as a collection organized in a meaningful way [@dearden2006pattern]. They separate three classes: general software design patterns (problems stated as code structure, most of Gamma and colleagues), interface software patterns (interaction problems with code solutions), and interaction design patterns, which state problems in terms of human interaction and give perceivable behavior as the solution. Their example of the third class is Tidwell's "go back to a safe place": a clearly identifiable way to return a system to a known state such as a home page [@dearden2006pattern].

Their main conclusion is an absence. HCI discussion of patterns had been "dominated by form and examples", with little concrete evaluation of whether pattern languages help the design process or improve the result, and in software engineering they found no published observational or empirical studies of developers using patterns in practice [@dearden2006pattern]. They report Fincher and Windsor's four requirements for organizing a pattern language: a taxonomy for finding patterns, a way to find related patterns, a way to view the problem from different standpoints, and generativity. Their research agenda asks for consolidated duplicates, coverage at several levels of scale, a preference for timeless patterns over platform-specific ones, community ownership open to revision, and empirical testing [@dearden2006pattern]. The review dates from 2006; later work may have narrowed the gap, but the notes do not survey it.

::: {.rule #SYS-009 grade="C"}
**State LTF patterns as human behavior and perceivable result ("the learner can always return to the step they were on"), not as a component name, so that a pattern outlives any one implementation.** Interaction design patterns are defined by human interaction and perceivable behavior, and timeless patterns are preferred over platform-specific ones [@dearden2006pattern]. Critical review.

*In LTF:* "Fly mode always has one exit, in the same place" is a pattern; "`FlyModeLayout` has a back link" is its current implementation. Write the first in the README and let the second change.
:::

::: {.rule #SYS-010 grade="C"}
**Check the LTF pattern collection against four tests: a reader can find a pattern, find its neighbors, see it from another standpoint (learner, author, engineer), and extend it to a new case.** These are Fincher and Windsor's requirements for organizing a pattern language, as reported in the review [@dearden2006pattern]. Expert criteria without empirical test.

*In LTF:* the test applies to agents as well as people. A Claude agent writing a new challenge page should be able to find the challenge-brief pattern, see that it contains callout and table patterns, and see which tokens they use.
:::

::: {.rule #SYS-011 grade="C"}
**Keep antipatterns beside patterns: record each recurring LTF failure (for example quiz feedback a learner misread) with the context in which it appeared.** Dearden and Finlay discuss antipatterns as a poor fit for Alexander's good-practice definition but call for patterns grounded in observed use [@dearden2006pattern]. Critical review.

*In LTF:* the dossier already names candidates: the 420 px `EmptyState` box that sits left-aligned on the page, and the hand-inlined cards that skip `Card`'s state rules. Each becomes an antipattern entry with its fix.
:::

### The software catalog: templates, consequences, known uses

Gamma, Helm, Johnson and Vlissides's *Design Patterns* (1994) took Alexander's idea into object-oriented software: 23 patterns in three groups (five creational, seven structural, eleven behavioral), each described with a fixed template whose headings include intent, motivation, applicability, structure, participants, collaborations, consequences, implementation, sample code, known uses and related patterns [@gamma1994design]. Two slogans state its principles: program to an interface, not an implementation, and favor object composition over class inheritance [@gamma1994design].

The book's influence is large (more than 500,000 copies and an ACM SIGPLAN award in 2005, per the summary the notes used), and so is the criticism [@gamma1994design]. Paul Graham wrote that seeing patterns in his programs was a sign of trouble, meaning patterns can be workarounds for missing language features. Norvig showed that 16 of the 23 patterns are simplified or eliminated by features of Lisp or Dylan, and Hannemann and Kiczales removed code-level dependencies from 17 of the 23 with AspectJ. In a 2009 interview Gamma said the authors would recategorize some patterns and that he wanted to remove Singleton but the others disagreed [@gamma1994design]. A second line of criticism concerns misuse: a named template makes it easy to apply a pattern where a simpler construct would do.

Two parts of the template are worth taking. "Consequences" (the trade-offs a pattern brings) is the heading most often skipped and the most useful when someone later wants to change the pattern. "Known uses" (real systems where it appears) is a guard against inventing patterns: a solution is a pattern only once it has recurred.

::: {.rule #SYS-012 grade="C"}
**For every shared LTF component, record its intent, when to use it, when not to, its consequences (what it costs and constrains), and its known uses in the product.** The fixed template with consequences and known uses is the durable contribution of the software patterns catalog [@gamma1994design]; Tidwell's interaction patterns use a similar short form [@tidwell2005designing]. Craft codification.

*In LTF:* `Callout` needs a "when not to" line (for example, not for body text the learner must read in order), and `Card` needs its consequence stated (it is the only place where done, current and locked states are drawn correctly, which is why inlining the class string loses them).
:::

::: {.rule #SYS-013 grade="C"}
**Before writing a new abstraction, check whether React, Tailwind, Radix or TanStack Query already provides the mechanism.** Critiques of the patterns catalog showed that many patterns compensate for features a language or framework already supplies [@gamma1994design]. Expert critique.

*In LTF:* `Tabs`, `Dialog`, `Popover` and `DropdownMenu` correctly wrap Radix rather than reimplementing focus and keyboard handling. A new disclosure or menu should do the same.
:::

::: {.rule #SYS-014 grade="C"}
**Compose widgets from small primitives with narrow props rather than extending one large widget with flags.** "Favor object composition over class inheritance" and "program to an interface" are the catalog's stated principles [@gamma1994design]; small, modifiable parts are cheaper to change later [@brand1994buildings]. Expert codification.

*In LTF:* the widget layer already does this: `Gauge`, `Tape`, `Arrow`, `Label` and `Compass` in `features/widgets/shared/svg.tsx` compose into the airspeed indicator, the G1000 PFD and the others. The 818-line `g1000-pfd` is the place to watch for flag growth.
:::

### Tidwell's short form

Tidwell's *Designing Interfaces* (2005) applied Alexander's idea to interaction design as a reference of nearly 100 recurring solutions, organized into chapters such as What Users Do, Organizing the Content, Getting Around, Organizing the Page, Doing Things, Showing Complex Data, Getting Input from Users, Builders and Editors, and Making it Look Good [@tidwell2005designing]. Every pattern uses the same subheadings: Title, Example, What, Use when, Why, How, Examples. A reviewer calls the "How" sections recipe-like, and the chapters are self-contained, so the book works as a reference [@tidwell2005designing]. The same reviewer lists weaknesses: some chapters are far from exhaustive, the color-coded chapter edges are arbitrary, and the book does not ask whether interaction patterns are culturally bound. Because the first edition predates touch-first conventions, its examples are dated, and Dearden and Finlay's general complaint applies: much duplication, little evaluation, and organization by interface element rather than by user activity [@tidwell2005designing; @dearden2006pattern].

The reviewer's complaint about arbitrary chapter colors is a small but exact lesson for a design system: a structural cue that carries no meaning teaches readers to ignore structural cues.

::: {.rule #SYS-015 grade="C"}
**Give every visual code in LTF (a color, an icon, a border style, a badge) one documented meaning, and remove any code that means nothing.** A structural cue without meaning, such as arbitrary chapter colors, was a named weakness of a major pattern book [@tidwell2005designing]; meaningful differences depend on "same things look the same" and different things looking different, as Part IX sets out. Craft critique.

*In LTF:* the dashed border means "not available or not yet real" in three places (`EmptyState`, `ErrorState`, the `verify` callout and locked `LessonPath` pins). Errors and empty results are different states; give `ErrorState` a distinct treatment so the dashed border keeps one meaning.
:::

### What this means for Learn to Fly

LTF's recurring surfaces (lesson page, quiz block, challenge brief, Fly mode panel, checklist row, callout, widget frame, lesson path) should each get a pattern entry in the design-system README in a short fixed form: name, the problem stated as learner behavior, the solution, links up and down the scale, consequences, known uses, and an evidence label (SYS-007 to SYS-012). This turns the component list into a language that people and agents can navigate (SYS-010).

Keep composing widgets from the `svg.tsx` primitives (SYS-014) and keep wrapping Radix for interactive primitives (SYS-013). Start an antipattern list with the left-aligned `EmptyState`, inlined cards and the overloaded dashed border (SYS-011, SYS-015). State "go back to a safe place" as an LTF pattern for Fly mode and lessons: one exit, in the same place, that returns to the step the learner left (SYS-009).

## Tokens: design decisions stored as data

### What a token is

The *Design Systems Handbook* calls design tokens the "subatomic" foundation of a system: "name and value pairs stored as data" for colors, spacing, sizing and animation durations, with an example spacing token written as SPACING_MEDIUM: 1rem [@suarez2017design]. The same chapter recommends metrics divisible by or multiples of 4, a modular type scale, and checking color contrast [@suarez2017design]. The point of a token is not the value but the name. A value written into a component (a hex code, a pixel size) is a decision made once in one place; a named token is a decision made once and applied everywhere, so that changing it changes every use and a reviewer can ask whether a given use is the right one.

The Design Tokens Community Group's *Format Module 2025.10* describes tokens as "a methodology for expressing design decisions in a platform-agnostic way" and specifies a JSON format for moving them between tools [@dtcg2025design]. In it a token is an object with a `$value`; the object's key is its name; optional properties are `$type`, `$description`, `$extensions` and `$deprecated`. Objects without `$value` are groups, which can set a default type and inherit from another group with `$extends`. Names are case-sensitive, must not begin with `$`, and must not contain braces or a period. Aliases are written as curly-brace references such as `{group.token}`, and circular references are errors. The simple types are color, dimension, fontFamily, fontWeight, duration, cubicBezier and number; the composite types are strokeStyle, border, transition, shadow and typography, with a gradient type also defined. Tools must not infer a token's type from its value [@dtcg2025design].

The companion *Resolver Module* handles context. It defines sets (collections of tokens merged in order, last declaration wins) and modifiers (sets with a map of named contexts and a default). An input such as `{ "theme": "dark" }` selects a context. Its own theming example has a `theme` modifier with four contexts (light, lightHighContrast, dark, darkHighContrast), defaulting to light and applied after size, typography and animation sets [@dtcg2025design].

::: myth
**"Design tokens are a W3C standard."** The 2025.10 modules are often described as the W3C token standard. Their status section says they are Final Community Group Reports published by the Design Tokens Community Group and are not W3C Standards nor on the W3C Standards Track; "Candidate Recommendation" in earlier drafts was the group's own label [@dtcg2025design]. The format is stable and useful, but which tools read this exact version has to be checked, not assumed.
:::

### Roles, not colors

IBM's Carbon documentation makes the case for semantic tokens most concretely. Color is expressed as role-based tokens, never hex values, and a theme is a mapping from roles to values; because roles stay the same across themes and only values change, one component renders in four default themes with no change to its code [@ibm2026carbon]. Carbon's themes are named after their background: White and Gray 10 for light, Gray 90 and Gray 100 for dark. Tokens are named by element group plus role with an optional state suffix, as in `$background-hover`; the groups are Background, Layer, Field, Border, Text, Link, Icon, Support, Focus and Skeleton, plus standalone `$overlay`, `$highlight` and `$interactive`. A token such as `$text-secondary` maps to Gray 70 in one theme and Gray 30 in another. Component tokens (for Button, Tag, Notification) belong to their own component only, and inverse tokens create deliberate high-contrast moments such as a dark header on a light page [@ibm2026carbon].

Carbon is vendor documentation, an authoritative account of one system's practice, not research, and the notes caution that the hex values and token names were reported through a summarizing fetch and should be rechecked before being copied [@ibm2026carbon].

LTF's `tokens.css` already follows the role model. Its color tokens are named by job (`canvas`, `surface`, `surface-raised`, `surface-sunken`, `line`, `line-strong`, `ink`, `ink-2`, `ink-3`, `on-ink`, the accent group, the status groups, the tier group, `focus` and `scrim`), and the Night theme under `[data-theme='dark']` overrides the same properties rather than adding dark variants of components. The theme is a context, in the resolver's sense, selected before first paint by an inline script in `index.html` [@dtcg2025design]. That is the right structure and the most important thing to protect.

::: {.rule #SYS-016 grade="C"}
**Name every color, space, radius, shadow and type token by its role, and implement each theme only as a different mapping of values to the same roles.** Role-based tokens let one component serve several themes with no code change [@ibm2026carbon], and the token resolver treats theme as a context that selects values [@dtcg2025design]. Specification and vendor practice.

*In LTF:* keep the `[data-theme='dark']` override block as the only place Night is defined. Any `dark:` variant in a component that changes a color is a sign a role is missing; add the role instead.
:::

::: {.rule #SYS-017 grade="C"}
**Keep three tiers of tokens: raw palette values, semantic roles that alias them, and component tokens only where one component needs a value no role covers.** Aliases let a semantic name point at a palette value [@dtcg2025design], and component tokens are scoped to their own component [@ibm2026carbon]. Specification and vendor practice.

*In LTF:* the roles alias nothing today; each holds a raw hex. A palette tier (the warm-neutral grey steps and the teal steps) would make the relationships visible, for example that `ink-2` and `ink-3` are two steps of one ramp, and would make a contrast audit a check of a dozen ramp pairs rather than of every role.
:::

### Close every door to raw values

A token system protects consistency only if values outside it are hard to use. LTF's `tokens.css` resets Tailwind's default palette, radii, shadows and fonts (`color-*`, `radius-*`, `shadow-*` and `font-*` are set to `initial`), so a class such as `bg-blue-500` does not exist. It does not reset text sizes, weights, leading, tracking or breakpoints, so Tailwind's defaults for those remain available beside LTF's own type utilities, and arbitrary bracket values remain available for everything. The drift follows the open doors. The dossier counts raw Tailwind size classes (`text-sm` 204 times, `text-2xl` 36, `text-xs` 29, `text-lg` 25 and others) and `font-bold` in 34 files against token utilities in 29; for this book's grep adds bracket sizes below the scale, `text-[11px]`, `text-[12px]`, `text-[10px]` and `text-[9px]`, used 67 times between them, plus `text-[13px]` five times.

Suarez and colleagues' point applies directly: standards are what make a decision critiquable [@suarez2017design], and a `text-[11px]` is a decision nobody can review against anything. Nielsen's edited volume on consistency makes the matching organizational point: tools that generate or check interfaces belong in the process because people forget rules [@nielsen1989coordinating].

::: {.rule #SYS-018 grade="C"}
**Make the token scale the only scale: reset or restrict Tailwind's default type sizes, weights and tracking, and fail lint on arbitrary bracket values outside an allowlist.** Standards make decisions critiquable [@suarez2017design], and generation and checking tools enforce what people forget [@nielsen1989coordinating]. Organizational practice.

*In LTF:* add a type tier to `tokens.css` (or map Tailwind's `text-*` names onto the `display-*`, `heading-*`, `body-*`, `label`, `eyebrow` and `readout-*` sizes), then add an ESLint or Stylelint rule that rejects `text-[Npx]`, `p-[Npx]` and similar outside widget drawing code. The 9 to 12 px bracket sizes all sit in widget drawing files under `features/widgets/` (12 files, including `shared/svg.tsx`); give widget labels their own tokens rather than allowing brackets everywhere.
:::

::: {.rule #SYS-019 grade="C"}
**Keep spacing on the existing 4 px grid and add no spacing value that is not a multiple of 4.** Multiples of 4 are the handbook's recommended default for metrics [@suarez2017design], and a small set of sizes built from one unit stops layouts drifting [@vignelli1970graphics]. Practitioner default and historical case.

*In LTF:* `tokens.css` already defines `space-1` to `space-24` on 4 px and aligns them with Tailwind's spacing scale. Bracket values such as `p-[3px]` (the `ThemeToggle` track) are the exceptions to review; the 3 px horizon-line underline is a deliberate stroke weight and should become a named token (`horizon-stroke`) rather than a repeated literal.
:::

### Types, descriptions and deprecation

The format module's optional properties are the ones a small team most needs. `$type` stops a tool (or a person) guessing what a value is; `$description` carries the usage note that LTF's comments say lives in a missing `tokens.json`; `$deprecated`, set to true or to an explanatory string, marks a retired token and the group-level flag extends to its children [@dtcg2025design]. Deprecation by marking rather than deletion matches the repository's own rule that slugs and IDs never change once published.

The notes are explicit about the limit: the specification is recent (October 2025), tool support for this exact version was not verified, and the specification cites no evaluation of whether tokens improve consistency or speed [@dtcg2025design]. For one React app, the gain from the format is naming discipline, not interchange.

::: {.rule #SYS-020 grade="C"}
**Keep LTF tokens structurally compatible with the 2025.10 token format (name, type, value, description, aliases), but keep `tokens.css` as the working source until a second consumer needs a JSON file.** The format separates names, types and values and expresses roles as aliases [@dtcg2025design]; its tool support is unverified and LTF has one consumer. Specification; the adoption decision is a cost judgment.

*In LTF:* the minimum is a usage line per token in the README (what it is for, which contrast pair it was checked against). A generated `tokens.json` becomes worthwhile only if a second consumer appears, such as a Figma library or the share-image renderer.
:::

::: {.rule #SYS-021 grade="C"}
**Retire a token by marking it deprecated and naming its replacement for at least one release before removing it.** The format's `$deprecated` property exists for this, with an explanatory string [@dtcg2025design]; gradual deprecation is a governance rule of design systems [@frost2016atomic]. Specification and practitioner practice.

*In LTF:* `body-md` is defined and unused; either use it for lesson body text (which today inherits the same 16/26 from the base style) or mark it deprecated in the README and remove it in the next design-system release.
:::

### Layers and states

Carbon states its layering rules outright. On light themes successive layers alternate between White and Gray 10; on dark themes each layer steps one shade lighter (on Gray 100 the first layer is Gray 90, the second Gray 80, the third Gray 70), and dark themes should not use components darker than the background outside high-contrast mode [@ibm2026carbon]. Interaction states follow fixed offsets: hover is a half step lighter or darker, active two full steps, selected one full step; focus is usually a 2 px border in the `$focus` token; disabled styling is exempt from contrast requirements. The page states contrast minimums of 4.5:1 for small text below 24 px, 3:1 for large text, 3:1 for graphical elements including data visualizations, and 3:1 for focus states [@ibm2026carbon]. The notes add the necessary caution: these figures are the vendor page's statement, the WCAG standard itself is the authority, and a design system's own claim of compliance should be verified rather than inherited [@ibm2026carbon].

LTF's Night theme is close to Carbon's dark logic: `canvas` 141412, `surface` 1f1e1c, `surface-raised` 2b2a28, each a step lighter, with `surface-sunken` darker for inset wells and elevation expressed as a 1 px line ring (`shadow-1` is `0 0 0 1px` in the `line` color). The Day theme is not layered in the same way: `surface` and `surface-raised` are both ffffff, so a raised element (a toast, a popover) on a card is distinguished only by its shadow.

::: {.rule #SYS-022 grade="C"}
**Define the surface layers as an explicit ordered list in both themes, with a visible step between each layer and the one beneath it.** Carbon defines layer order and step size per theme family so hierarchy reads without borders [@ibm2026carbon]. Vendor practice.

*In LTF:* write the order in the README: `surface-sunken` below `canvas` below `surface` below `surface-raised`. In Day, either give `surface-raised` its own value or document that raised elements rely on `shadow-2` and must never sit on another white surface without it.
:::

::: {.rule #SYS-023 grade="C"}
**Write the interaction state rules once (hover, pressed, selected, focus, disabled) as offsets or tokens, and apply them to every control.** Carbon specifies state offsets and a single focus token for all components [@ibm2026carbon]. Vendor practice.

*In LTF:* the rules exist in practice (`hover:bg-ink-2` on primary, `active:shadow-press`, a global `focus-visible` outline in `focus`, `control-box` focus with a canvas gap, disabled `opacity-45`) but are written per component. List them in the README so a new control (for example a future segmented control in Fly mode) inherits them.
:::

::: {.rule #SYS-024 grade="C"}
**Check every text, focus and graphical token pair against WCAG directly and record the measured ratio beside the token, rather than relying on any design system's stated figures.** A design system's accessibility claims should be verified, not inherited, and its stated minimums defer to WCAG [@ibm2026carbon]. Standards practice.

*In LTF:* the `tokens.css` comment says contrast figures are "in each token's usage note in tokens.json", a file that does not exist, and the dossier lists computed contrast ratios as unchecked. Measure `ink-3` on `canvas` and `surface`, `accent` and `accent-line` as focus and link colors on every ground, and the fixed `arc-*` colors on `instrument`, and write the results into the README.
:::

::: {.rule #SYS-025 grade="C"}
**Store motion as typed duration and easing tokens, so that reduced motion and Fly mode can swap one set of values.** The format defines duration and cubicBezier types and lets a context select values [@dtcg2025design]. Specification; the application to reduced motion is an inference.

*In LTF:* `ease-out`, `ease-in` and the 200 ms `animate-*` tokens already exist, but `duration-150` and `duration-[400ms]` are written as literals in 20 places. Name them (`duration-quick`, `duration-progress`) so the global reduced-motion rule and any Fly mode setting can change them in one place.
:::

### What this means for Learn to Fly

Keep the role-named color tokens, the Night override block and the reset of Tailwind's palette, radii, shadows and fonts (SYS-016). These are the strongest parts of LTF's system and match the best documented practice.

Change the open doors. Reset or remap Tailwind's type defaults and lint against bracket values (SYS-018), name the repeated literals (the 3 px horizon stroke, the 150 ms and 400 ms durations) as tokens (SYS-019, SYS-025), add a palette tier under the roles (SYS-017), define the layer order in both themes and fix or document Day's identical `surface` and `surface-raised` (SYS-022), write the state rules once (SYS-023), and measure and record every contrast pair (SYS-024). Resolve `body-md` (SYS-021).

Do not adopt token tooling or a JSON pipeline yet (SYS-020). The fixed `instrument`, `arc-*`, `display-*` and `chart-*` tokens are a correct and distinctive exception: they are not themed because the things they depict do not change with the room's lighting. Record that rule in the README so nobody "fixes" it.

## Consistency: what it buys and what it costs

### The case for, and why it was never defined

Consistency is the value design systems most often claim to deliver, and the one whose evidence is weakest when examined. Grudin's 1989 paper opens by stating the case for it fairly: Shneiderman's first "golden rule" is to strive for consistency, Smith and Mosier's compendium has over 60 guidelines with "consistent" in the title, and Polson summarized experiments reporting large positive transfer from consistent designs [@grudin1989case]. Then he points out that nobody had defined the term. Reisner wrote in 1981 that it was unclear what consistency means or how to identify its absence, and a two-day workshop of 15 experts in 1988 could not produce a definition [@grudin1989case].

Grudin distinguishes three senses. Internal consistency is a design agreeing with itself in layout, naming and selection techniques; designers control it, and it is reported to help initial learning. External consistency is agreement with other interfaces the user knows, which can conflict with internal consistency. Analogic consistency is correspondence to the world outside the computer (compass arrows on cursor keys); it helps first learning but, as Carroll is cited saying, must break down somewhere if the technology is to offer any advantage [@grudin1989case].

His five design exercises show each sense failing as a sole guide. An ISO proposal laid out four arithmetic keys in the order they are taught, and 8 of 24 interface professionals produced that layout, yet putting the plus key above Enter, where frequent keys belong, minimizes movement. All 24 experts chose the star arrangement of cursor keys as the most appealing to novices and about half thought it best, while the studies Grudin cites favor the inverted T. Menu defaults of "last item accessed", "most frequent" or "most likely next" each fail for some task, and for irreversible global operations Cancel is the correct default, so no single rule consistently applied gives good defaults. The best way to abbreviate 20 command names depends on how the abbreviations are used. And implementers argued that printing a folder should print a list of pointers, because that was consistent with the system architecture, while most people expected the documents to print; Grudin calls this "the most available consistency", the snare of matching the implementation [@grudin1989case].

His conclusion is narrower than his title. The supporting studies are not wrong but more context-bound than recognized; most measured learning, recall and transfer, not skilled performance; and designers "would often do better to focus on users' work environments" [@grudin1989case]. It is an argued essay with dated keyboard examples, not an experiment, and the right reading is that consistency is not a sufficient design goal, not that it has no value.

::: myth
**"Consistency is always good: make everything work the same way."** Consistency is the first of Shneiderman's golden rules and the title word of dozens of guidelines. Grudin showed that experts could not define it, that internal, external and analogic consistency conflict, and that in several worked cases the best design violates the most obvious consistency [@grudin1989case]. The one experiment in these lanes found that consistency reduced errors but did not significantly improve speed or satisfaction [@ozok2000measuring]. Consistency is a tool for a task, not a quality in itself.
:::

::: {.rule #SYS-026 grade="C"}
**Justify every LTF pattern and every consistency rule by the learner task it serves, and write that task into the pattern entry.** Consistency pursued as a goal pulls attention to measurable properties of the interface and away from users' work [@grudin1989case]. Argued essay with worked examples.

*In LTF:* the challenge Brief, Fly and Debrief tabs share the `Tabs` pattern because the learner moves between them in one sitting; the Fly mode panel deliberately does not look like the Brief tab, because it serves a glance beside the sim. Both decisions are correct and each should say why.
:::

### What the experiment found

Ozok and Salvendy (2000) asked the questions Grudin left open: can the consistency of web pages be measured, and does more consistency improve performance and satisfaction? In a four-group between-subjects experiment with ten participants per group, measuring error rate, performance time and satisfaction, the hypothesis was partially supported for error rate and not supported for satisfaction or time [@ozok2000measuring]. Overall consistency was explained by three elements: physical (how equal things look), communicational (how the page talks to the user) and conceptual (whether ideas map to the same structure). Physical and communicational consistency interacted; conceptual consistency did not interact with them [@ozok2000measuring].

The study is small (ten per cell), so its non-significant results are weak evidence of no effect, and its three-element scheme has not been independently replicated. The same authors' later work, confirmed by title, studied language inconsistency in three experiments, and Ozok's dissertation is summarized as reporting that consistent linguistic design lowered task time and error rates, from a paraphrased abstract [@ozok2000measuring]. Put plainly: the evidence that consistency helps is real but modest, strongest for errors, and includes some support for consistent wording.

::: {.rule #SYS-027 grade="B"}
**Spend consistency effort first where an error costs the learner most: checklist rows, quiz answer controls, rubric scoring and Fly mode controls.** In the one controlled experiment, consistent design improved error rate but not speed or satisfaction [@ozok2000measuring]. One small experiment; graded B for that reason.

*In LTF:* the `Checkbox` rows in `FlyPanel`, the `RadioGroup` card rubric in the Debrief form and the `QuizBlock` options should share one selection treatment (ink fill, same hit area, same position of the label) on every page. Visual variety belongs on the landing page and in widgets, not here.
:::

::: {.rule #SYS-028 grade="B"}
**Fix one name for each LTF concept and control (lesson, challenge, module, step, Brief, Fly, Debrief, each callout type) and use only that name in interface copy, content and code.** Communicational consistency is one of the three elements of measured consistency [@ozok2000measuring], and the same research line reports benefits of consistent language; a shared vocabulary is a deliverable of a design system [@kholmatova2017design]. Small experiments plus practitioner consensus.

*In LTF:* the nine `Callout` titles (Safety, Sim vs reality, Pro tip, Classic panel, Note, Decision, Memory item, In a real airplane, Verify) are a closed vocabulary already; extend the same treatment to state words ("Done", "Up next", "Completed", "Being written") so one state never has two names.
:::

### Three kinds of consistency in a flight course

For a product that teaches a real machine, Grudin's three senses separate cleanly. Internal consistency is LTF agreeing with itself: every callout built the same way, every readout in JetBrains Mono. External consistency is agreement with what the learner already uses: browser conventions for links and forms, and above all the simulator's own labels and displays. Analogic consistency is correspondence with the world: the attitude indicator's sky above ground, the airspeed arcs in the colors the real instrument uses. Where they conflict, the learner's future task decides. A learner who will meet the real instrument is better served by external and analogic correspondence than by an internally tidy widget, and a verified aviation source, not design taste, settles what the real instrument shows [@grudin1989case; @nielsen1989coordinating].

LTF's fixed instrument tokens are a good example of analogic consistency deliberately winning over internal consistency: `arc-green`, `arc-yellow`, `arc-red`, `sky`, `ground` and the `display-*` colors do not follow the Day and Night themes, because a real gauge looks the same in both. The code comment says so: "real gauges look the same in both themes, like the real panel."

::: {.rule #SYS-029 grade="C"}
**Where LTF's internal style conflicts with how the simulator or the real aircraft presents something, follow the simulator or aircraft, as confirmed by a cited aviation source, and record the exception.** External and analogic consistency can matter more than internal consistency for the user's task [@grudin1989case]; external consistency for LTF means matching the simulator's and aircraft's labels, which aviation sources must decide [@nielsen1989coordinating]. Expert argument.

*In LTF:* keep the fixed instrument and chart tokens out of the theme. Control and menu names in lessons follow the simulator's spelling exactly. Any widget whose colors or markings differ from the depicted instrument must say so in its "Simplified model" badge text.
:::

### Consistent, not uniform

GOV.UK's principle "Be consistent, not uniform" is the organizational answer to Grudin. Use the same language and patterns wherever possible so that people become familiar with services, treat patterns as shared guidance, change them when better methods or user needs emerge, and deviate where circumstances differ, explaining why a pattern is used [@govuk2025design]. The tension is acknowledged in the same documents: a component must be "Versatile" enough for many services, and a component that serves every service may fit none perfectly [@govuk2025design].

Nielsen's edited volume *Coordinating User Interfaces for Consistency*, published the same year as Grudin's essay, takes the organizational view further. In its 2002 preface Nielsen calls it a "meta-design" book about coordinating designers, including one designer working over time, so that their output forms a whole [@nielsen1989coordinating]. Its listed lessons are that consistency benefits users and the organizations that build interfaces, has several dimensions and several methods, should be judged by costs and benefits when written into standards, carries risks when applied rigidly, and is an ongoing process that requires ownership, commitment and political support [@nielsen1989coordinating]. The book's evidence is corporate case study (Apple, IBM, Digital, Lotus, GE), and the preface's economic claims (a cost of inconsistency in the hundreds of billions of dollars a year, Macintosh users buying more software) could not be traced to sources and deserve caution [@nielsen1989coordinating].

::: {.rule #SYS-030 grade="C"}
**Allow any page or component to depart from an LTF pattern when its task differs, on condition that the reason is written next to the departure (in the pattern entry and in a code comment).** "Be consistent, not uniform" permits deviation with an explained reason [@govuk2025design]; a documented exception is not later mistaken for drift [@ozok2000measuring]. Organizational practice.

*In LTF:* the lesson h1 uses `text-3xl font-bold sm:text-4xl` rather than `PageHeader`'s `display-md`. If that is deliberate (the lesson title competes with the breadcrumb and code label), write the reason; if not, it is drift and should move to a token utility.
:::

::: {.rule #SYS-031 grade="C"}
**Before adding a design standard, state in one line what it saves learners and what it costs authors and engineers, and drop standards whose cost exceeds their saving.** Corporate standards should be judged by cost and benefit, and rigid application is a named risk [@nielsen1989coordinating]. Organizational case studies.

*In LTF:* a rule such as "every lesson ends with a `Callout` of type `memory`" costs every author a paragraph and saves nothing unless learners use it; test before mandating. A rule such as "every altitude says MSL or AGL" costs little and prevents a dangerous misread, so it is mandatory.
:::

### Inventory before system

Every practitioner method in these lanes begins with an audit of what exists. Anne's chapter in the handbook gives the process: assemble a cross-disciplinary team, choose a team model, interview the internal customers, and run a visual audit; its example is CSS Stats showing Facebook with 38 unique text colors [@suarez2017design]. Kholmatova's book covers auditing an interface as part of systemizing it, though the notes could not confirm where in the process she places that step [@kholmatova2017design]. The audit is what turns "it looks inconsistent" into a count that can be reduced.

LTF's dossier is already half an audit. It counts raw size classes, weights, radius uses (`rounded-md` and `rounded-lg` account for 116 of roughly 190), icon stroke widths (1.75 at 28 uses, 2 at 48, 1.5 at 36, plus 2.5 and 3 for checkmarks), breakpoint use (`sm:` 73, `md:` 47, `lg:` 41, `xl:` 3, `2xl:` 0) and the 266 uses of `text-ink-2`. What it lacks is the second half: for each variant, a decision to keep, merge or remove.

::: {.rule #SYS-032 grade="C"}
**Run an interface inventory of every distinct heading style, card, button, badge, icon size and stroke, radius and text color in use, and record a keep, merge or remove decision for each variant before adding any new component.** A visual audit is the first practical step of building a system, and variants accumulate quickly (38 text colors in the handbook's example) [@suarez2017design; @kholmatova2017design]. Practitioner method.

*In LTF:* the decisions the dossier's counts point to are: one icon stroke width for UI icons (1.75, the stated default) with 1.5 reserved for the 32 px state icons; one heading dialect (token utilities, not `text-2xl font-bold`); `Card` instead of the 23 inlined card class strings; and either use or delete `xl:` and `2xl:` breakpoints.
:::

### What this means for Learn to Fly

Keep the deliberate inconsistencies that serve a task: the fixed instrument tokens (SYS-029), Fly mode's larger type and dark layout, and the distinct look of the landing page. Write the reason for each where it lives (SYS-030).

Change where drift has no reason. Finish the inventory the dossier began and decide every variant (SYS-032). Concentrate consistency on error-prone controls (checklist rows, rubric cards, quiz options) where the experimental evidence says it pays (SYS-027). Close the vocabulary of state words and callout names (SYS-028). Before the next new standard, write its cost and saving (SYS-031). Part IX, Usability Principles and Evaluation, gives the review method for finding inconsistencies; this chapter's job is to decide which ones matter.

## Layers, change and governance

### How buildings learn

Brand's *How Buildings Learn* (1994) argues that buildings are not finished when they are completed. They are used, altered and repaired for decades, and the ones that serve people best can be changed cheaply by the people inside them. He criticizes "magazine" architecture, designed for the photograph on opening day, and praises low-cost, modifiable buildings such as MIT's Building 20; Siena's Palazzo Pubblico, built in sections over 500 years, and Pier 21 in Canada, which went from cargo warehouse to liner terminal to immigration building to museum without fundamental structural change, are his examples of buildings that learn [@brand1994buildings].

The idea that has traveled furthest is shearing layers, adapted from the architect Frank Duffy. Brand's six layers, with the typical lifetimes the notes report, are Site (effectively eternal), Structure (30 to 300 years), Skin (about 20 years), Services (7 to 15 years), Space Plan (about 3 years in turbulent commercial space to about 30 in quiet homes) and Stuff (days to months) [@brand1994buildings]. Layers change at different speeds, slower layers constrain faster ones, and a design that tangles layers makes every change expensive. Brand's line "All buildings are predictions. All predictions are wrong." is quoted from his page 178 in a software essay that applies the idea to programs, with layers from language and platform through look and feel (changing between major versions) and features (weeks to months) down to user configuration (hours to days) [@brand1994buildings]. The same essay warns that "software isn't like a building": software is expected to change, and decoupling cannot make every change easy. The shearing-layer model is a widely adopted heuristic, the lifetimes are examples with wide ranges, and the notes found no academic critique of it [@brand1994buildings].

For a design system the model gives an ordering of how hard each kind of decision should be to change. In LTF the slowest layers are the principles, the color roles, the type and spacing scales and the sim-beside-the-screen layout logic; the middle layers are component shapes, widget frames and page templates; the fastest are lesson copy, quiz items, challenge briefs and the simulator's own menu wording, which changes on Microsoft's schedule, not LTF's.

::: {.rule #SYS-033 grade="C"}
**Assign every design decision to a layer (principles and tokens, components and templates, content and copy) and change the slow layers only through a Decision Log entry, never to suit one lesson.** Layers that change at different rates should be kept apart so that fast change does not disturb slow structure [@brand1994buildings]. A widely used heuristic, not a measured law.

*In LTF:* a lesson that "needs" a new callout color is a fast-layer request against a slow layer; the answer is an existing callout type or a design-system change recorded as a decision, not a one-off class. The Decision Log in `v1.md` Section 5 is already the right instrument.
:::

::: {.rule #SYS-034 grade="C"}
**Let content reach presentation only through a small, stable set of block types, so that a redesign of the shell never requires editing lessons.** Tangling a fast layer with a slow one makes every change expensive [@brand1994buildings]; atomic design's separation of templates from real content serves the same end [@frost2016atomic]. Heuristic and practitioner method.

*In LTF:* `LessonRenderer` maps eight block types (markdown, heading, callout, image, video, quiz, widget, checklist) and lessons live as Markdown and YAML in `content/`. Keep that interface narrow: no Tailwind classes or layout hints in content files, and a new block type only through the contribution gate (SYS-037).
:::

::: {.rule #SYS-035 grade="C"}
**Keep simulator-specific wording and aircraft values in the thinnest layer available (tokens and data files), so that a simulator update changes one file rather than many lessons.** The simulator's interface changes on its own schedule, a fast layer, and should not be tangled with the course's structure [@brand1994buildings]; one specification feeding interface, help and documentation keeps them aligned [@nielsen1989coordinating]. Heuristic.

*In LTF:* the `{{vspeed.*}}` and `{{aircraft.*}}` tokens from `content/aircraft.yaml` already do this for numbers. Extend the idea to simulator menu paths and control names that recur across lessons, which today are written inline.
:::

::: myth
**"A design system is a project: build it once, then use it."** Systems are often funded as a one-time deliverable. Frost's governance chapter says to treat the system as a product, not a project, and cites Alex Schleifer's line that neglect is the biggest existential threat to any system [@frost2016atomic]; Nielsen's volume calls consistency an ongoing process requiring ownership [@nielsen1989coordinating]; the NYCTA's 1966 report was largely ignored, the Authority built signs in-house, and Vignelli called the result "the biggest mess in the world" before the 1970 manual and its later updates [@vignelli1970graphics]. These are cases and testimony, not trials, but they agree.
:::

### Adding, changing and retiring patterns

Frost's governance rules are specific [@frost2016atomic]. Add a pattern only when another team needs the same solution. Deprecate gradually. Schedule regular reviews. Separate makers from users. Name patterns by structure rather than context ("card" over "product card"). Keep documentation current, publish change logs, and serve code from versioned URLs. To sell a system: make a thing, show it is useful, make it official. He also criticizes large redesign cycles every three to eight years, which throw away accumulated fixes.

The GOV.UK Design System turns the same ideas into contribution criteria [@govuk2025design]. A proposal for a new component or pattern must be Useful (evidence that many teams or services would benefit, such as screenshots or links to versions in use) and Unique (not duplicating an existing item, with evidence of improvement if it replaces one). Before publication it must be Usable (tested in user research with a representative sample, including people with disabilities, with the tested contexts stated), Consistent (reusing existing styles and components and following the style guide and coding standards) and Versatile (flexible enough for a range of services and tested across browsers, assistive technologies and devices). The team reviews proposals against these criteria; the community runs continuous research sessions, a monthly catch-up and feedback through GitHub discussions [@govuk2025design]. The criteria are checklists applied by reviewers, so their quality depends on the reviewers, and they were written for public services people must use, which an optional learning product is not.

Carbon adds an incubation lane. Net-new experimental components start in Carbon Labs, with its own repository, Storybook and Figma space, follow a product development lifecycle and complete a component checklist before they count as done; every component and pattern needs usage, style, code and accessibility guidance written from templates [@ibm2026carbon]. The contributing page gives no governance structure or decision process, so Carbon is a better model for theming and documentation than for team process [@ibm2026carbon].

The software catalog contributes the "known uses" test [@gamma1994design]: a solution becomes a shared pattern only after it has recurred.

::: {.rule #SYS-036 grade="C"}
**Promote a part to `src/components/` only when a second, different page needs it; until then keep it in its feature folder.** Add patterns when another team needs the same solution [@frost2016atomic]; a pattern is identified by its known uses [@gamma1994design]; a contribution must be Useful across services [@govuk2025design]. Practitioner and organizational consensus.

*In LTF:* `KeyNumbers`, `Stopwatch` and `ChallengeMeta` are in `src/components/`; check that each has two users. The inlined card class string is the reverse case: 23 files need the pattern and do not use the shared one.
:::

::: {.rule #SYS-037 grade="C"}
**Admit a new shared component, block type or token group only if it passes five checks: Useful (two or more real uses, linked), Unique (no existing part does the job), Usable (tried by at least a few beginners plus a keyboard and screen-reader pass), Consistent (built from existing tokens and parts), Versatile (works in Day and Night, at phone width, beside the sim and in print where relevant).** These adapt the GOV.UK contribution criteria [@govuk2025design]. Organizational practice.

*In LTF:* put the five checks in `.claude/skills/ltf-review/references/client.md` so `/ltf-review` asks them of any pull request that adds to `src/components/` or `tokens.css`.
:::

::: {.rule #SYS-038 grade="C"}
**Build experimental components and widgets in a separate incubation area and move them into the stable system only after they pass the contribution checks.** Carbon's Labs lane keeps experiments apart until a component checklist is complete [@ibm2026carbon]. Vendor practice.

*In LTF:* `/dev/widgets` and `/dev/components` exist only in development builds; add an `src/features/labs/` folder (or a `labs` section of `/dev/widgets`) for unproven widgets, and forbid lesson content from referencing anything in it.
:::

::: {.rule #SYS-039 grade="C"}
**Give every shared component four short pieces of guidance (usage, visual style, code example, accessibility notes) and keep them next to its live states on `/dev/components`.** Carbon requires usage, style, code and accessibility guidance for every component [@ibm2026carbon]; libraries without context are a named failure [@frost2016atomic]. Vendor and practitioner practice.

*In LTF:* `DevComponentsPage.tsx` (703 lines) already shows every state. Add the four notes per component there, drawn from the pattern entries (SYS-012), so one page is both the catalog and its documentation.
:::

### Versions and change logs

The handbook's chapters on building and practice treat breaking changes directly [@suarez2017design]. Sylor-Miller tells of duplicating a Tab component by creating a second one, then deprecating the first, and recommends versioning, with semantic versioning as the common standard. Mounter compares versioning the whole system with versioning by module, describes how GitHub combined versioning with semver, and covers support channels such as a dedicated chat channel and office-hours help. For LTF the useful part is the discipline, not the machinery: a design change that alters how existing pages look is a breaking change and should be announced as one.

::: {.rule #SYS-040 grade="C"}
**Record every design-system change (a token value, a component's appearance or API, a retired pattern) as a `CHANGELOG.md` line, and mark changes that alter existing pages as breaking.** Versioning with semantic versions and published change logs are standard design-system practice [@suarez2017design; @frost2016atomic]. Practitioner consensus.

*In LTF:* the changelog already follows Keep a Changelog and semantic versioning, yet records nothing about the current design system, its fonts or its colors. Add a "Design system" line for every change from now on, and a retrospective entry describing the system as it stands.
:::

### Ownership

Every source on governance converges on ownership. Nielsen's volume says consistency is maintained by ownership, commitment and political support [@nielsen1989coordinating]. Frost says to separate makers from users and treat the system as a product [@frost2016atomic]. The handbook says even a solitary system needs someone accountable [@suarez2017design]. Kocienda describes Apple naming a "Directly Responsible Individual" for each piece of work, himself for the iPhone keyboard [@kocienda2018creative], and Brooks argues that great designs come from great designers and that process matters mainly for communication and collaboration [@brooks2010design]. The memoir and the essays are testimony, not evidence of what works generally, and the "great designers" thesis is hard to apply to a team; the convergence is the point.

The NYCTA manual adds the reason ownership must include a document others can apply. It was written so that many people, over many years, could make signs that look and behave as one, specifying three sign sizes from 1-foot panels, word spacing, letter spacing, leading and lines per sign [@vignelli1970graphics]. And it shows that ownership includes revision: the manual's black-on-white rule was reversed in practice around 1973, and Michael Hertz Associates updated the system in 1989 to unify the MTA's agencies [@vignelli1970graphics]. The sources are admiring secondary accounts that disagree on details such as page count, and they give no usability measurements.

::: {.rule #SYS-041 grade="C"}
**Name one person accountable for the LTF design system, and one for each major surface (lesson page, challenge and Fly mode, reference, landing), with authority to accept or reject changes for coherence.** Consistency is maintained by an owned process [@nielsen1989coordinating; @frost2016atomic]; a single directly responsible person per feature prevents decisions diffusing [@kocienda2018creative; @brooks2010design]. Organizational cases and practitioner testimony.

*In LTF:* the owner merges on GitHub already; record in the design-system README that the owner (or a named delegate) is the design-system owner and that agents propose, never decide, design-system changes.
:::

::: {.rule #SYS-042 grade="C"}
**Write the system's rules so that someone who is not a designer, including a Claude agent, can apply them correctly without asking, and wire the checkable ones into `/ltf-review` and lint.** The NYCTA manual's purpose was to let non-designers produce consistent output for years [@vignelli1970graphics]; tools that check interfaces belong in the consistency process [@nielsen1989coordinating]. Historical case and organizational practice.

*In LTF:* agents read `AGENTS.md`, `CLAUDE.md` and the skill references. The design rules that matter most (tokens not literals, one heading dialect, the contribution checks, the layer rule) should be stated there in one line each, pointing to the README for detail.
:::

::: {.rule #SYS-043 grade="C"}
**Improve the LTF interface by continuous, recorded steps on a live system, and do not plan a wholesale redesign that replaces it.** Large redesign cycles every three to eight years discard accumulated fixes [@frost2016atomic], and buildings designed for the opening-day photograph serve their users worse than ones that can be cheaply changed [@brand1994buildings]. Practitioner and craft argument.

*In LTF:* the owner's complaint (the product looks generic) is real, and the identity work in Part XX and Part XXVI may change a lot. Even so, deliver it through tokens and components in releases that each leave the site whole, not as a parallel "v2 design" branch.
:::

### What this means for Learn to Fly

Keep the content and presentation separation (`content/` plus `LessonRenderer` block types, SYS-034), the aircraft tokens (SYS-035), the Decision Log and the changelog conventions. They are already the governance tools a design system needs; they are just not yet used for design.

Build the missing process: a named owner (SYS-041), the five contribution checks inside `/ltf-review` (SYS-037), an incubation area for unproven widgets (SYS-038), four notes per component on `/dev/components` (SYS-039), a design-system line in `CHANGELOG.md` for every change (SYS-040), and the layer rule that slow decisions change only by recorded decision (SYS-033). Promote parts only on their second real use (SYS-036). Deliver the identity overhaul as a sequence of releases on the live system (SYS-043).

## What kind of problem design is

### Wicked problems

Rittel and Webber's "Dilemmas in a General Theory of Planning" (1973) was written about city planning and social policy, not product design, but it became the standard citation for open-ended design problems [@rittel1973dilemmas]. Its argument is that science handles "tame" problems, which can be stated completely and whose solver knows when they are solved, while planning problems are "wicked": they cannot be definitively described, have no stopping rule, and are never solved in a final, objective sense, only "re-solved over and over again". The authors list ten properties [@rittel1973dilemmas]. There is no definitive formulation of a wicked problem, because every specification of the problem is a specification of a direction of treatment. There is no stopping rule: the planner stops for lack of time, money or patience and says "that's good enough". Solutions are good or bad, not true or false. There is no immediate and no ultimate test of a solution. Every solution is a "one-shot operation", because every attempt counts. There is no enumerable set of potential solutions or permissible operations. Every wicked problem is essentially unique. Every wicked problem can be considered a symptom of another. The discrepancy can be explained in numerous ways, and the choice of explanation determines the resolution. And the planner has no right to be wrong.

The paper also attacks the "first generation" systems approach (understand the problem, gather information, analyze, synthesize, solve), on the ground that one cannot understand a wicked problem without already having a solution concept in mind, and proposes a "second generation" in which planning is an argumentative process and an image of problem and solution emerges gradually [@rittel1973dilemmas]. It warns that attacking a problem at too low a level can make higher-level problems harder.

This is theory and argument by example, not empirical research, and not every property transfers. Software and prototypes can be tried cheaply, so the claim that there is no learning by trial and error does not hold for screens; the paper's design relevance is strongest for the properties about formulation, stopping, good-or-bad judgment, unbounded solutions and competing explanations [@rittel1973dilemmas].

"How should a complete beginner be taught to fly a simulator?" is wicked in exactly those senses. Its formulation depends on the solution imagined (a course of lessons, a set of challenges, a mentor in the sim); there is no point at which the curriculum is correct; learners, instructors and the owner will judge the same lesson differently; and a learner's failure on a challenge can be explained as a missing concept, a misread instrument, a control setup problem or a bad brief, each implying a different fix.

::: {.rule #SYS-044 grade="C"}
**Give every LTF design effort an explicit, external stopping rule (a release, a lesson count, a behavioral target) and record when the result is accepted as good enough.** Wicked problems have no natural stopping rule, so stopping is a decision made for reasons outside the problem [@rittel1973dilemmas]. Theory.

*In LTF:* the `v1.md` phases and the Section 39.4 one-PR-per-step rule already supply external stopping points for code. Apply the same to design: a redesign of `LessonPage` states in its PR what would make it done (for example, a first-time learner finds the next section and the completion button without help) and stops there.
:::

::: {.rule #SYS-045 grade="C"}
**Before designing a remedy for a learner error, write down which explanation of the error you have chosen and why, since a different explanation would lead to a different fix.** The choice of explanation for a discrepancy determines its resolution [@rittel1973dilemmas]. Theory.

*In LTF:* if learners score Bronze on a landing challenge, the fix could be a lesson change, a clearer `BriefTab` setup table, a different rubric wording in the Debrief form, or a widget. The issue or PR names the explanation and the evidence for it before any of these is built.
:::

::: {.rule #SYS-046 grade="C"}
**Treat publishing aviation content as the one irreversible step in LTF's process and gate it with verification, while treating screens and layouts as cheap to try and revise.** Each wicked-problem solution is a one-shot operation where attempts cannot be undone, a property that holds for commitments people rely on but not for cheap prototypes [@rittel1973dilemmas]. Theory, applied by inference.

*In LTF:* the `published: true` flag, `lastVerifiedAt`, `simVersion` and the publication-blocking `verify` callout are this gate. Keep design experimentation fast on the presentation layer and slow on anything a learner could carry into real habits.
:::

### Designers learn the problem by proposing solutions

Cross's "Designerly Ways of Knowing" (1982) argues that design is a third area of education and inquiry beside the sciences and the humanities, with its own phenomena (the made world), methods (modelling, pattern-formation, synthesis) and values (practicality, ingenuity, empathy and concern for appropriateness) [@cross1982designerly]. The evidence he gathers is early and observational. In Lawson's block experiment, postgraduate architecture and science students arranged colored 3D blocks under rules, some withheld at first. Scientists mostly explored combinations systematically to discover the rule, a problem-focused strategy; architects proposed a series of solutions and had them eliminated until one was acceptable, a solution-focused strategy. Lawson found that first-year architecture students and sixth-form pupils could not be told apart by strategy, which suggests the designerly strategy is learned [@cross1982designerly]. Cross adds Simon's satisficing, the "primary generator" that both bounds an ill-defined problem and suggests a solution, Jones's remark that "changing the problem in order to find a solution is the most challenging and difficult part of designing", and the observation that designers' knowledge of their own process is largely tacit, so teaching leans on apprenticeship [@cross1982designerly; @jones1970design]. Cross calls his three-way contrast "a useful, if crude, way" of beginning; treat it as a framework, not a result.

Dorst and Cross (2001) tested a model of this in a protocol study of nine experienced industrial designers, whose designs were then rated for quality and creativity. They found that designers develop the problem space and the solution space together, each revised in light of the other, that the co-evolution model is generally valid, and that there is no guarantee a creative event will occur in a given process [@dorst2001creativity]. They introduce "default" and "surprise" problem and solution spaces; the notes could not confirm the definitions, so they are not described here. The study is small, relies on designers verbalizing while they work, and judges creativity by raters [@dorst2001creativity].

Lawson's *How Designers Think* synthesizes decades of such observation and interviews into a description of thinking types, strategies, tactics and traps, and explicitly rejects the idea that designing can be reduced to a measurable, sequential method; it presents itself as a taxonomy of how designers report thinking, not a prescription [@lawson2005how].

::: {.rule #SYS-047 grade="B"}
**Draft an early solution before the requirements are complete, and use it to find out what the problem is.** Observational studies find designers solution-focused [@cross1982designerly], a protocol study of nine professionals found problem and solution co-evolving [@dorst2001creativity], and observational syntheses reject sequential methods [@lawson2005how]. Several independent observational lines agree; none is a controlled comparison of outcomes, so graded B for consistency of observation, not proof of benefit.

*In LTF:* a new reference page or widget starts as a rough working draft against real content, not as a requirements document. Lesson authors may change a lesson's stated objectives after drafting the explanation, and should.
:::

::: {.rule #SYS-048 grade="C"}
**Keep a one-paragraph problem statement at the top of every design brief and lesson draft, and rewrite it whenever the draft changes what the problem is.** Changing the problem to find a solution is the hardest part of designing [@jones1970design; @cross1982designerly], and problem and solution evolve together [@dorst2001creativity]. Observation and craft authority.

*In LTF:* the PR template's summary is the natural place. A PR that redesigns `ChallengesPage` filters should say what problem it now believes learners have (finding a challenge for the lesson they just did, say), which may differ from the issue that started it.
:::

::: {.rule #SYS-049 grade="C"}
**Choose one organizing idea (a primary generator) for each major surface early, and judge later decisions by whether they serve it.** Designers bound ill-defined problems with a primary generator that both limits the problem and suggests a solution [@cross1982designerly]. Observational framework.

*In LTF:* the product already has generators worth keeping: the horizon line that connects progress, navigation and the lesson path; the Brief, Fly and Debrief sequence of a sortie; the kneeboard on the reference hub. A new surface should either use one of these or state its own.
:::

### The rational model and its alternatives

Brooks's *The Design of Design* (2010) reaches the same place from software engineering. Its first part examines the "rational model" (goals, requirements, options, evaluation, choice) and, as a reviewer reports, concludes that "the Rational Model is much too simplistic", finding Boehm's spiral model the most promising alternative [@brooks2010design]. Requirements are discovered while designing. A design brief must be ambiguous enough to allow creative freedom yet clear about constraints, and constraints "shape both the overall architecture and, to a lesser degree, the detailing". Chapters are titled "Constraints Are Friends", "Inches, Ounces, Bits, Dollars: The Budgeted Resource" and "User Models: Better Wrong than Vague" [@brooks2010design]. In an interview he advises designers to "identify your scarcest resource", which "very often is not money" [@brooks2010design]. These quotations come from a review and an interview mirror, not the book's own text. The rejection of the waterfall matches Rittel and Webber's critique of first-generation methods and Schön's reflection-in-action, independent traditions that give the claim more weight than one source would [@brooks2010design; @rittel1973dilemmas; @schon1983reflective].

Jones's *Design Methods* (1970) is the movement Brooks and Rittel were reacting against, but its central structure survives. A synopsis divides design into divergence, transformation and convergence, and groups methods by purpose: searching for ideas, exploring problem structure, and evaluation [@jones1970design]. The notes confirm the framework from synopses only, not from the book's text, and record that the first-generation methods were later criticized from inside the field; Lawson notes a housing standard from that period that was later withdrawn [@jones1970design; @lawson2005how].

::: myth
**"Good design follows a rational sequence: define requirements, generate options, evaluate, choose."** The waterfall is how design is usually planned. Brooks concludes the rational model is "much too simplistic" and that requirements are discovered while designing [@brooks2010design]; Rittel and Webber argue the first-generation sequence fails because problems cannot be understood without a solution concept [@rittel1973dilemmas]; observational studies find designers working from solutions back to problems [@cross1982designerly; @dorst2001creativity]. Phases remain useful inside a cycle (diverge, then converge), not as the shape of a whole project.
:::

::: {.rule #SYS-050 grade="C"}
**Open every design brief with its constraints and its scarcest resource, and budget the design against that resource.** Constraints shape architecture and detailing, and the budgeted resource is often not money [@brooks2010design]. Expert essay, via a review and an interview.

*In LTF:* the scarcest resource is the learner's attention while the simulator is running. A Fly mode brief states it first: one glance, large type, the next step and the stopwatch, nothing that needs reading. The team's own scarce resource (one maintainer, agents doing much of the writing) is a constraint too, which favors fewer, stronger components.
:::

::: {.rule #SYS-051 grade="C"}
**State the target learner concretely in every brief, even if the description might be wrong, rather than describing a vague "user".** Brooks's chapter title "User Models: Better Wrong than Vague" argues that an explicit model can be tested and corrected while a vague one cannot [@brooks2010design]; designers studying real users directly is a founding principle of usability work [@gould1985designing]. Expert essay and craft principle.

*In LTF:* the dossier's beginner ("never flown", a desktop with a controller, a phone or tablet beside the sim) is a good start. Add what is unknown and should be tested: whether learners actually use a second screen, and what size it is.
:::

### What this means for Learn to Fly

Treat LTF's design problems as wicked: set external stopping rules (SYS-044), name the explanation behind each learner failure before fixing it (SYS-045), and reserve slow, verified process for published aviation content while keeping presentation work fast (SYS-046). LTF's publish gate is the right model of where irreversibility lives; keep it.

Work from drafts, not specifications (SYS-047), and keep the problem statement current at the top of each brief or PR (SYS-048). Keep the product's existing organizing ideas (the horizon line, Brief, Fly and Debrief, the kneeboard) as primary generators for new surfaces (SYS-049). Open every brief with its constraints, naming learner attention beside the sim as the scarcest resource (SYS-050), and describe the target learner concretely enough to be wrong (SYS-051).

## Exploring before refining

### Two different jobs

Buxton's *Sketching User Experiences* (2007) separates two phases that are often run together: "getting the right design", an exploratory phase of sketching and ideation to choose a direction, and "getting the design right", the refinement and usability engineering of the chosen one [@buxton2007sketching]. One chapter is titled "Sketches are not Prototypes". On the standard reading, sketches are quick, cheap and plentiful, made to explore and ask questions, and belong early; prototypes are fewer, made to test and resolve. A list of sketch qualities often attributed to Buxton (quick and inexpensive, plentiful, timely, minimal detail, appropriate refinement, suggestive rather than confirming, ambiguous) comes from lecture slides that synopsize the book, and other secondary sources give their own versions, so the wording is not his [@buxton2007sketching]. The book's evidence is case stories and a long industry career, and several of its case chapters concern novel hardware, so web lessons need translating.

Jones's three stages say the same thing at the scale of a method: divergence (generating options without judging), transformation (finding the structure of the problem) and convergence (choosing with criteria) [@jones1970design]. The practical point is that mixing generation and judgment weakens both; an idea criticized while it is being generated is usually abandoned before it is understood.

### The experiments

Two experiments support exploring alternatives, and they are the strongest evidence in this Part.

Tohidi, Buxton, Baecker and Sellen (2006) tested hand-drawn paper prototypes of a touch-screen house climate controller with 48 University of Toronto students and recent graduates [@tohidi2006getting]. Twelve saw all three designs, which were deliberately different in style (Circular, Tabular, Linear) but identical in function and built to similar fidelity; twelve each saw only one. Every design was rated lower when seen among alternatives: Circular 9.08 alone against 8.13 in the group (p = 0.004), Linear 7.92 against 6.89 (p = 0.014), and Tabular 8.83 against 8.39, a difference that missed significance (p = 0.064). Positive comments fell for all three (Circular 6.42 to 2.67, Tabular 4.75 to 2.17, Linear 5.83 to 2.33), and negative comments rose significantly only for the lowest-rated Linear design (70 in the group condition against 11.5 alone). The number of substantial suggestions for improvement did not differ, and the authors conclude that usability testing "is a means to identify problems, not provide solutions" [@tohidi2006getting]. The cells are small, the sample is students, the domain is one product, and the authors themselves say that without further study the validity of the comments is unknown.

Dow, Glassco, Kass, Schwarz, Schwartz and Klemmer (2010) asked the question of designers [@dow2010parallel]. Thirty-three participants, about half with prior graphic or ad design experience, designed 160 by 600 pixel banner ads for a magazine client. Everyone made five prototypes and a final ad and received descriptive critique on every prototype with equal time. Serial participants received critique after each prototype; Parallel participants made three, received critique on all three, made two more and received critique again. The 33 final ads ran in a real campaign for 15 days, drawing 501 clicks on 1,180,320 impressions. The two best ads by click-through were Parallel (735 and 578 clicks per million impressions). In the first five days, when impressions were about equal, Parallel ads drew 44 clicks on about 79,800 impressions against 26 on about 79,658 (chi-square 4.60, p < 0.05). Professional raters scored Parallel ads higher and judged Parallel sets more diverse. Self-efficacy on a 20-point scale rose on average from 10.85 to 12.12, significantly only for the Parallel group. Nearly half the Serial participants described negative reactions to critique; no Parallel participant did [@dow2010parallel].

The limits matter as much as the results. Dow's Parallel condition also received its first feedback later and had an explicit second round, so it is an explore-then-refine hybrid rather than parallelism alone; absolute click rates were tiny; and click performance barely predicted rated quality (an R-squared of 0.032 appears in the paper), so "better" depends on the yardstick [@dow2010parallel]. The two studies come from different groups (Buxton co-authored the first), use different tasks and point the same way, which is why the rules below are graded B rather than C.

::: myth
**"Users will tell you how to fix the design if you ask."** Usability sessions often end by asking participants what they would change. In Tohidi and colleagues' experiment, showing participants three designs instead of one made their ratings more honest but did not increase substantial suggestions for improvement; the authors conclude that testing identifies problems and does not provide solutions [@tohidi2006getting]. Learners are reliable witnesses to where they struggled, not designers of the remedy.
:::

::: {.rule #SYS-052 grade="B"}
**Make at least three genuinely different directions for any new LTF surface or widget, and get critique on the set before refining any one of them.** Parallel prototyping with critique on a set produced better-performing, more diverse designs and greater self-efficacy than serial iteration [@dow2010parallel]; exploring before refining is the core of sketching practice [@buxton2007sketching]. One field-measured experiment plus craft consensus; the Parallel condition also differed in feedback timing.

*In LTF:* "different" means different structure, not three color variants: for the checklist runner, a single scrolling list, one step at a time in large type, and a grouped flow by phase of flight. Three sketches on paper or in a scratch component take an afternoon.
:::

::: {.rule #SYS-053 grade="B"}
**When testing a new LTF design with learners, show two or three stylistically different versions in the same session, and treat ratings of a single version as an upper bound.** A design seen alone drew inflated ratings and fewer criticisms than the same design seen among alternatives [@tohidi2006getting]. One small experiment, consistent with a second line of evidence [@dow2010parallel].

*In LTF:* a beginner who meets one polished "official" Fly mode screen will be polite about it. Show three rough layouts beside a running sim and ask which they would use and where they lost their place.
:::

::: {.rule #SYS-054 grade="B"}
**Ask test participants to find problems and choose between versions, and leave the fixes to the designer.** Participants shown alternatives criticized more honestly but did not produce more substantial suggestions [@tohidi2006getting]. One experiment.

*In LTF:* the session script asks "where did you hesitate?", "what did you expect to happen?" and "which would you keep open beside the sim?", not "how would you improve this?". Record hesitations and failures in the sim as the primary data.
:::

::: {.rule #SYS-055 grade="C"}
**Build the alternatives in a comparison to the same rough fidelity, so that polish does not decide between them.** The experiment's three prototypes were built by one team to similar fidelity with identical functions [@tohidi2006getting], and sketches are kept rough so that people respond to structure [@buxton2007sketching]. Method detail from an experiment and craft practice.

*In LTF:* do not compare a finished `FlyPanel` against two whiteboard sketches. Either sketch all three or build all three as unstyled React using the existing tokens.
:::

### Diverge, then converge

Because generation and judgment interfere, the sessions that produce alternatives and the sessions that choose between them should be separate, and the choosing should use criteria written in advance [@jones1970design]. The criteria should come from the brief: the scarcest resource, the target learner, the task (SYS-050, SYS-051). Lawson's warning applies at the convergence step: write the criteria, then also record the judgment, instead of letting a weighted score pretend to decide [@lawson2005how]. The next chapter returns to that.

::: {.rule #SYS-056 grade="C"}
**Run idea generation and evaluation as separate sessions: no critique while options are being generated, and no new options while choosing, with the choosing criteria written before the options are seen.** Design methods distinguish divergence, transformation and convergence [@jones1970design]; criteria and judgment should both be explicit [@lawson2005how]. Methods compendium and observational synthesis; no controlled test in the notes.

*In LTF:* for an agent-assisted design task, ask first for several directions with no recommendation, then in a separate step evaluate them against the brief's criteria. Asking for "the best design" in one step collapses both phases.
:::

### Sketch, then demo

Schön describes designing as a "reflective conversation with the situation": the designer makes a move (a sketch, a line), sees what it implies, including what was not intended, and reframes [@schon1983reflective]. In his best-known case, the studio master Quist lays tracing paper over his student Petra's plan, draws while talking, tries three L-shaped classrooms set into the slope and tests the frame in section drawings; drawings are "things to think with" [@schon1983reflective]. The consequence for practice is that many problems appear only once the thing exists in rough form, so the cheapest way to find them is to make something quickly and look.

Kocienda's account of Apple's software work gives the same loop a name, creative selection: make a demo, show it, take feedback, make the next demo, keep what survives [@kocienda2018creative]. The iPhone keyboard evolved through repeated demos and daily use by colleagues, from an early prototype with several letters per key to the keyboard that shipped. The book is a memoir of one company in one period, written with hindsight; reviewers call the loop essentially the traditional design feedback loop under a new name and the culture hard to replicate without its leadership [@kocienda2018creative]. Gould and Lewis add the distinction that keeps demos honest: a test has intended users doing real work while observers record what happens, and showing a prototype for approval is a selling job, not a test [@gould1985designing].

::: {.rule #SYS-057 grade="C"}
**Turn every promising direction into a runnable demo within days, and show it to the people who will use it, recording what happens rather than asking for approval.** Demos are the working currency of creative selection [@kocienda2018creative]; problems appear when the design exists in rough form [@schon1983reflective]; a demonstration for approval is not a test [@gould1985designing]. Memoir, case analysis and craft principle.

*In LTF:* `/dev/widgets` is the place for a clickable airspeed tape or a checklist runner with fake data. A demo shown to a pilot friend is review; a demo used by a beginner with the sim running is a test, and only the second counts as evidence.
:::

::: {.rule #SYS-058 grade="C"}
**Keep "right design" work (diverging and choosing) and "design right" work (accessibility, copy, edge cases, performance) as separate stages in the plan, and do not polish before the direction is chosen.** The two phases have different aims and tools [@buxton2007sketching]. Craft argument.

*In LTF:* a `v1.md` step that introduces a new surface should be split into a direction PR (sketches, comparison, chosen direction recorded in the Decision Log) and an implementation PR that passes the full Definition of done (axe, keyboard, both themes, size budget).
:::

::: {.rule #SYS-059 grade="C"}
**Test flows that depend on simulator state with a person playing the simulator's part before building any integration.** Wizard of Oz techniques let a flow be tried before the technology exists [@buxton2007sketching], and the climate-control experiment used a person playing the computer with paper prototypes [@tohidi2006getting]. Craft method used in experimental work.

*In LTF:* a future Fly mode that reacts to live sim data (an idea in the chapter on frames below) can be tried now: a facilitator watches the learner's sim and changes the second-screen prompt by hand. If the flow does not help with a human behind it, telemetry will not save it.
:::

### What this means for Learn to Fly

For every new surface or widget, diverge before converging: three structurally different directions (SYS-052), equal fidelity (SYS-055), separate generation and evaluation sessions with criteria from the brief (SYS-056), and a split between direction and implementation PRs (SYS-058). Test alternatives together with beginners beside a running sim, ask for problems not fixes, and weight observed hesitations over ratings (SYS-053, SYS-054). Use `/dev/widgets` for quick runnable demos and keep demos distinct from tests (SYS-057). Try sim-dependent ideas with a human wizard first (SYS-059).

The current product shows the cost of skipping divergence: the landing page follows the common marketing order section by section, and the dossier's list of generic traits reads like a set of first options that were never compared against alternatives. The identity work in Part XXVI should start from three directions, not one.

## Critique, review and judgment

### How critique is received

Dow and colleagues' result about critique is easy to overlook beside the click data. Every participant received the same amount of descriptive critique, yet nearly half of those who iterated one design at a time described negative reactions to it, while none of those who made designs in parallel did [@dow2010parallel]. The authors' explanation is that critique attached to a single cherished prototype reads as a judgment of the designer, while critique of a set reads as information about options; comparison also teaches principles and widens the explored space [@dow2010parallel]. Schön's interview names the same hazard from practice: designers fall in love with an initial idea, a tacit habit that accumulates, and someone other than the author is needed to say what a design is doing wrong [@schon1983reflective].

For a product built largely by one owner and a set of agents, both points have a direct form. The author of a design (person or agent) is the worst-placed reviewer of it, and review lands better when it is review of alternatives rather than a verdict on the only option.

::: {.rule #SYS-060 grade="B"}
**Give critique on sets of alternatives where possible, and keep it descriptive and tied to the brief's stated goals rather than to the author.** Critique on a set of parallel prototypes produced no negative reactions, while nearly half of serial designers reacted negatively to equal critique [@dow2010parallel]. One experiment with a small sample.

*In LTF:* review comments name the goal and the observed effect ("the stopwatch digits are not readable at arm's length, which the brief requires"), not a preference ("I don't like this"). When a reviewer disagrees with a direction, the useful response is a second direction to compare, not a rewrite of the first.
:::

::: {.rule #SYS-061 grade="C"}
**Have someone other than the author of a design name what it does wrong before it ships, and make that a standing step, not an occasional favor.** Designers become attached to their initial idea [@schon1983reflective], and Brooks advises seeking knowledgeable criticism as part of practice [@brooks2010design]. Case analysis and expert testimony.

*In LTF:* `/ltf-review` is a standing review for code and content. Add a design pass to it for any PR that touches `src/components/`, `tokens.css`, a page layout or a widget, run by a different agent or person from the one who wrote it.
:::

### Reviewers disagree, so use several

Part IX, Usability Principles and Evaluation, treats the evaluator effect in full; the short version belongs here because it governs how design review is organized. Hertzum and Jacobsen's review of eleven studies found that evaluators using the same method on the same interface detect markedly different problem sets, with average agreement between any two evaluators from 5% to 65% and no method consistently better; severity ratings agree poorly too, and a single evaluator's thinking-aloud study is "highly questionable" as an authoritative list of problems [@hertzum2001evaluator]. The comparative evaluations run by Molich and colleagues show the same at the level of whole teams: in CUE-2, nine teams evaluating one website reported, by figures relayed from an interview, 310 different problems, 75% of them reported only once [@molich2004comparative]. The named causes are vague task scenarios, vague procedures and vague problem criteria, which let reviewers drift toward evaluating for someone like themselves [@hertzum2001evaluator].

::: {.rule #SYS-062 grade="A"}
**Never treat one reviewer's list as the problems of a page or component: collect independent lists from several reviewers against written tasks and problem criteria, then merge.** The evaluator effect is replicated across methods, evaluator experience and problem severity [@hertzum2001evaluator], and independent teams report largely different problems for the same product [@molich2004comparative]. Replicated across many studies.

*In LTF:* when a design PR is reviewed by agents, run two reviews independently with the same task list (for example, a beginner opening Lesson 0.1 on a phone beside the sim) and the same definition of a problem, and merge the lists; do not let the second reviewer see the first's findings.
:::

### Criteria and judgment

Lawson's chapter on measurement, criteria and judgment is the most direct guidance in these lanes for how a design decision should be made once options exist [@lawson2005how]. He warns that it is tempting to use more precise measurement than a design situation deserves, invoking Stevens's scales of measurement to argue that numbers lend false respectability to ordinal judgments. His students computed heat loss "down to the last watt" and could not say how many kilowatts escape when a door stands open for a few minutes. His worked example is Boje's open-plan office study: about 7 seconds to open and close a door, about 11 room changes a day in a 100-person, 25-room office, so 32 door movements or 224 seconds saved per person per working day, extrapolated to some 2000 minutes a month per employee. Lawson calls such figures "quite useless" unless one also knows how much 7 seconds matters, and names the habit a "numerical measuring disease" [@lawson2005how]. He adds that there is little evidence that increasingly precise assessment tools help designers or raise standards, and reports that in the Parker Morris housing standard, of three kitchen-layout recommendations only the one most easily measured from a drawing became mandatory, and that the mandatory standards were later withdrawn [@lawson2005how].

The lesson is not that numbers are bad. It is that a judgment should be recorded as a judgment, with its criteria, rather than disguised as a calculation, and that whatever is easiest to measure tends to become the requirement while harder qualities disappear. Dow's finding that click-through barely predicted rated quality (R-squared 0.032) is a concrete case of two reasonable yardsticks disagreeing [@dow2010parallel].

::: {.rule #SYS-063 grade="C"}
**Decide between design options by writing the criteria and then a short reasoned judgment, not by a weighted score.** Precision beyond what a situation deserves lends false respectability, and judgment is a distinct, necessary act [@lawson2005how]. Observational synthesis and argument.

*In LTF:* a Decision Log entry for a design choice states the options, the criteria from the brief, and two or three sentences on why one option wins. A table of scores from 1 to 10 is not a reason.
:::

::: {.rule #SYS-064 grade="C"}
**For every design requirement that is easy to measure, name the harder quality it stands in for and check that quality directly.** What is easiest to measure tends to become mandatory while harder qualities vanish, as with the Parker Morris kitchen standard [@lawson2005how]. Single historical case within an observational synthesis.

*In LTF:* lesson count, quiz score and minutes are easy to measure; whether a learner can actually fly the maneuver in the sim is not. A design that improves quiz completion should still be checked against challenge results.
:::

::: {.rule #SYS-065 grade="B"}
**Judge a design change by at least one behavioral measure (task completion, error, hesitation, time to find a control) alongside expert or owner judgment, and investigate when they disagree.** In the parallel-prototyping study a field behavioral measure and expert ratings were nearly unrelated [@dow2010parallel]; usability goals should be measured with intended users doing real work [@gould1985designing]. One experiment plus a founding principle.

*In LTF:* for a change to the lesson completion panel, count how often signed-in learners reach "Mark lesson complete", not only whether reviewers think it looks better.
:::

::: {.rule #SYS-066 grade="C"}
**Show progress and readiness at the precision the evidence supports, and prefer coarse, labeled bands to percentages that imply false accuracy.** Over-precise figures are a "numerical measuring disease" that lends false respectability [@lawson2005how]. Argument from observation.

*In LTF:* the Debrief result shows a `font-mono text-5xl` percentage, and the dashboard shows per-module bars. The tier (Bronze, Silver, Gold) already carries the meaning; consider making the tier the headline and the percentage secondary, and never state "readiness" as a number.
:::

### Taste, exemplars and the gyroscope

Schön calls the designer's internal sense of quality a "gyroscope" that develops over years of practice [@schon1983reflective], and Kocienda lists taste (in a reviewer's paraphrase, refined judgment that yields an integrated whole) among his seven elements of creative selection [@kocienda2018creative]. Brooks recommends studying exemplars (he names Bach, Rembrandt, Seymour Cray, Christopher Wren, Niklaus Wirth and Donald Knuth) and advises designers not all to study the same ones [@brooks2010design]. Taste is real, but on its own it cannot be reviewed or handed to an agent. The useful move, implicit in Kocienda's account, is to convert each taste judgment that recurs into a written rule with its reason, so that the next reviewer can apply it without the original taste.

::: {.rule #SYS-067 grade="C"}
**When a reviewer judges that something "feels wrong", find and write down the reason as a checkable rule, and add it to the design-system README.** Taste is a component of good product work but is tacit [@kocienda2018creative; @schon1983reflective]; written rules make decisions critiquable [@suarez2017design]. Memoir, case analysis and practitioner method.

*In LTF:* the dossier's "every heading has an eyebrow" observation is a taste judgment that it reads as template. Converted into a rule it becomes checkable: an eyebrow appears only where it names a category the heading does not (a module number, a challenge code), never as decoration.
:::

::: {.rule #SYS-068 grade="C"}
**Choose a short list of exemplars specific to LTF's job (well-made checklists, instrument displays, printed flight manuals, charts, field guides) and study them closely, instead of collecting many web products in the same category.** Brooks advises deep study of chosen exemplars and warns against everyone studying the same ones [@brooks2010design]. Expert essay.

*In LTF:* the generic look the owner dislikes is partly what happens when the exemplars are other learning sites and SaaS templates. The aviation artifacts the product already echoes (the POH section numbering, the kneeboard, the sectional legend) are better exemplars; Part XX and Part XXIII develop them.
:::

### What this means for Learn to Fly

Add a design pass to `/ltf-review` for PRs that touch components, tokens, layouts or widgets, run by someone other than the author (SYS-061), with two independent reviews against a written task list and problem definition, merged afterwards (SYS-062). Phrase critique against the brief's goals, and answer disagreement with an alternative rather than a rewrite (SYS-060).

Record design decisions as criteria plus judgment in the Decision Log (SYS-063). Pair any easy metric with the quality it stands in for, and use behavioral measures alongside opinion (SYS-064, SYS-065). Make the Debrief tier the headline over the percentage (SYS-066). Turn recurring taste judgments into written rules (SYS-067), and choose aviation artifacts, not other web products, as the exemplars (SYS-068).

## Workmanship, craft and finish

### Risk and certainty

Pye's *The Nature and Art of Workmanship* (1968) gives the clearest vocabulary for deciding where care must go. He divides workmanship into the "workmanship of risk", "workmanship using any kind of technique or apparatus, in which the quality of the result is not predetermined" but depends on the maker's judgment, dexterity and care as the work proceeds, and the "workmanship of certainty", where the result is fixed in advance by jigs, templates, machines or automation [@pye1968nature]. The test, as one magazine puts it, is whether the result is "predetermined and unalterable once production begins". The two are ends of a spectrum: pure workmanship of risk has hardly ever existed, because templates and jigs are old, and the workmanship of certainty has been chosen for speed or accuracy, "both especially important for quantity production" [@pye1968nature]. A typewriter is the intermediate case: the typist can spoil a page, but the letters always look right. Pye's further point is that there is "much more in workmanship than not spoiling the job": unguided tools do not by themselves produce beautiful work [@pye1968nature].

Pye wrote about wood and typewriters and makes no claims that can be tested, so applying him to software needs translation, which the notes offer. Rendering is close to the workmanship of certainty: the same code produces the same pixels. But the decisions about what the code renders (the copy, the order, the spacing, the diagram) remain workmanship of risk, because their quality is not predetermined and depends on attention [@pye1968nature].

That gives a design system its purpose stated in craft terms. Tokens, components, schemas and validators are jigs: they make some errors impossible rather than unlikely. Everything they cannot fix is where the maker's attention has to go.

::: {.rule #SYS-069 grade="C"}
**Make the workmanship of certainty cover every error that would mislead or endanger a learner: typed content schemas, tokens for aircraft values, shared components for callouts and checklists, and automatic validation.** Regulated workmanship fixes the result in advance and is chosen for accuracy [@pye1968nature]. Craft treatise, applied by inference.

*In LTF:* the Zod schemas in `@shared/schemas/`, `content:validate -- --strict`, `{{vspeed.*}}` tokens and the `verify` callout that blocks publication already do this. Extend the jig to design: lint against raw values (SYS-018), and render altitude values through a component that requires an MSL or AGL argument.
:::

::: {.rule #SYS-070 grade="C"}
**For every part of a page that no rule can check (wording, pacing, the choice and drawing of a diagram, the glance target in Fly mode), write the attention step into the process: who checks it, how, and at what size.** Quality that is not predetermined depends on the maker's care as the work proceeds [@pye1968nature]; a perfect component library does not by itself produce a clear lesson. Craft treatise.

*In LTF:* two attention steps fit the existing workflow: read each lesson aloud before publishing (the `/unslop` skill covers part of this), and check every widget and the Fly mode panel at real size on a second screen beside the running sim, not only in the browser at desk distance.
:::

### Craftsmanship and its limits

Sennett's *The Craftsman* (2008) defines craftsmanship broadly as the impulse to do a job well for its own sake, covering the programmer and the doctor as well as the carpenter, and argues that skill develops through the hand and through repetition, that showing beats telling, that repair builds understanding, and that progress takes detours [@sennett2008craftsman]. Reviewers report three basic craft abilities in the book: to localize (attend to the material thing in front of you), to question (one problem prompts the next) and to open up (be willing to change habits). Sennett also warns that obsession can serve good work but turns harmful as perfectionism, citing Wittgenstein's house for his sister [@sennett2008craftsman]. It is humanistic scholarship, not experiment; one reviewer says it underplays economic pressure and risks being used as a management panacea [@sennett2008craftsman].

Two parts carry over to LTF's own design work. The first is the warning about perfectionism, which pairs with Rittel and Webber's absent stopping rule: a craft attitude needs a declared point where polish stops [@sennett2008craftsman; @rittel1973dilemmas]. The second is localizing: the details that make a product look careful are mostly found by looking hard at one real screen, not by reading a style guide.

::: {.rule #SYS-071 grade="C"}
**Set, in each design brief, the point at which polish stops, and spend remaining effort on the surfaces learners use most.** Perfectionism turns harmful when it serves the maker rather than the work [@sennett2008craftsman], and wicked problems stop only by an external decision [@rittel1973dilemmas]. Humanistic scholarship and theory.

*In LTF:* the most-used surfaces are the lesson page, the challenge brief and Fly mode; the least-used are the static legal pages. Detail effort should follow that order, which is the reverse of today's, where `Prose` with its 68ch measure and 18 px body serves only About, Disclaimer, Privacy and Terms while lessons run wider at 16 px.
:::

### Rams's principles as review questions

Dieter Rams's ten principles of good design, hosted by Vitsœ, came from his late-1970s worry about "an impenetrable confusion of forms, colours and noises" and his question whether his own design was good [@rams2026good]. Good design is innovative (but never as an end in itself), makes a product useful, is aesthetic ("only well-executed objects can be beautiful"), makes a product understandable, is unobtrusive, is honest (it does not overstate innovation, power or value and makes no promises it cannot keep), is long-lasting, is thorough down to the last detail, is environmentally friendly, and is as little design as possible: "Less, but better" [@rams2026good]. Principle 8 puts craft at the center: nothing is arbitrary or left to chance, and care and accuracy show respect for the user.

They are a practitioner's credo, hosted by a company that sells his furniture, not an empirical finding. They have no thresholds ("as little design as possible" does not say how little), some pull against each other (innovative and unobtrusive), and their long product lives sit uneasily with software [@rams2026good]. Their use is as questions, translated into the product's terms, not as a score.

::: {.rule #SYS-072 grade="C"}
**Review each major LTF surface against Rams's principles translated into concrete questions (does every element help the learner act now; can a first-time learner tell what a control does; does the interface recede while the sim is flying; does anything overstate; is every detail deliberate; what could be removed), and record answers, not scores.** The principles are a reflective rubric, not a measurable checklist [@rams2026good]. Practitioner credo.

*In LTF:* run the questions on `FlyModePage` first: the `BetaBanner` that appears above Fly mode fails "helps the learner act now", and the `warning-pulse` ring on random events is the one place where drawing the eye is the point.
:::

::: {.rule #SYS-073 grade="C"}
**Never let LTF's interface overstate what the product is or what the learner has achieved, and keep honesty markers (beta, draft, unverified, not a pilot certificate) as designed elements rather than small print.** Good design is honest and makes no promises it cannot keep [@rams2026good]. Practitioner credo.

*In LTF:* this is one of the product's real distinctions: the `BetaBanner`, `DraftBadge`, "Last verified" lines, the `verify` callout and the course badge's statement that it "is not a pilot certificate". Give them a consistent visual family in the system instead of five unrelated treatments.
:::

### The Vignelli Canon

Vignelli wrote *The Vignelli Canon* (2010) to pass on his office's "guidelines, those set by ourselves for ourselves" [@vignelli2010canon]. Its first part names three aspects of any design. Semantics is the search for meaning: research the company, product, market, competition, user and history of the subject "to better define the parameters within which we will have to operate"; without it design is "shallow and meaningless". Syntactics is the consistent structure, the grammar of grid, typefaces, text, headlines and illustrations, where consistency comes from the relationship of the elements. Pragmatics is whether the result is understood: "Whatever we do, if not understood, fails to communicate and is wasted effort" [@vignelli2010canon]. He adds discipline (attention to detail needs "self imposed rules", and "Every detail is important because the end result is the sum of all the details"), appropriateness, a cautious defense of ambiguity, and responsibility to oneself, the client and the public: "a design should stand by itself, without excuses, explanations, apologies". "We love complexities but hate complications!" [@vignelli2010canon].

The second part is economy. He describes an exhibition made with only four typefaces (Garamond, Bodoni, Century Expanded and Helvetica) to show that variety comes from structure, says he can "get along well with a half a dozen" typefaces, and prefers using space, weight and alignment over expressive type: "I don't believe that when you write dog the type should bark!" [@vignelli2010canon]. It is craft opinion from print and modernist signage; claims about type size and grids should be checked against the legibility research in Parts III and IV. Part XX, Brand Identity and Distinctiveness, uses the semantics, syntactics and pragmatics triad as an identity gate; here it matters for the economy rules.

::: {.rule #SYS-074 grade="C"}
**Limit LTF to a small, named set of type styles and let differences in size, weight, space and alignment carry meaning; every additional style needs a job no existing one does.** Variety comes from structure rather than from many typefaces or styles, and self-imposed rules make detail routine [@vignelli2010canon]. Craft authority.

*In LTF:* `index.css` defines 15 type utilities, which is already generous; the page code adds a parallel set (`text-2xl font-bold`, `text-3xl font-bold`, `text-lg font-semibold`) and bracket sizes. Map every heading in the app to `display-*` or `heading-*` and delete the parallel set (with SYS-018).
:::

::: {.rule #SYS-075 grade="C"}
**Separate the inherent complexity of flying, which lessons must teach, from complications the interface adds, and remove the complications.** "We love complexities but hate complications" [@vignelli2010canon]; good design concentrates on the essential [@rams2026good]. Craft authority.

*In LTF:* the lesson page stacks up to six boxes before the first block (`UnverifiedWarning`, `SignupBanner`, resume bar, objectives `Card`, mobile section `Select`, plus the `BetaBanner` above the header). Each is a complication the learner meets before the content; show only those relevant to this learner on this visit.
:::

### Finish at the edges

Thoroughness "down to the last detail" [@rams2026good] and Vignelli's "the end result is the sum of all the details" [@vignelli2010canon] both point at the states that a design review rarely looks at: empty, error, loading, offline, the longest title, the first visit, the hundredth. The NYCTA manual specified exactly these boring details for signs (word spacing, letter spacing, leading, lines per sign, three sizes from one panel) [@vignelli1970graphics]. A product looks careless at its edges first, because the edges are where defaults show through.

::: {.rule #SYS-076 grade="C"}
**Design and review the empty, error, loading and first-use states of every LTF page with the same care as its main state, and give each state wording and form specific to its page.** Good design is thorough to the last detail [@rams2026good], and the whole is the sum of its details [@vignelli2010canon]. Craft authority.

*In LTF:* `EmptyState` and `ErrorState` share one dashed 420 px box with a stock icon on every page, and the box sits left-aligned in its parent. Keep the shared component, but give each page its own sentence and next step ("No challenges at this airport yet. See challenges near it"), center or align the box with the content column, and give errors a different form from empty results (SYS-015).
:::

::: {.rule #SYS-077 grade="C"}
**Keep a short, living list of LTF detail checks (units on every number, MSL or AGL on every altitude, no placeholder text, tokens for every aircraft value, simulator names spelled as the simulator spells them, no em dashes in learner copy) and run it on every content and page change.** Discipline in detail needs self-imposed, written rules [@vignelli2010canon], and the NYCTA manual specified small details so many hands could apply them [@vignelli1970graphics]. Craft authority and historical case.

*In LTF:* most of these are already in `AGENTS.md` and `content/README.md`; collect them into one checklist in the `/ltf-review` content reference so a reviewer runs them in order.
:::

### What this means for Learn to Fly

LTF's jigs are strong for content and weak for design. Keep the schemas, validators, tokens and publish gate (SYS-069), and extend the same certainty to design values through lint and typed components. Write attention steps into the process for what no jig can check: lessons read aloud, widgets and Fly mode checked at real size beside the sim (SYS-070). Spend detail effort where learners spend time, starting with the lesson page and Fly mode (SYS-071).

Use Rams's principles as review questions on Fly mode first (SYS-072), and give the honesty markers a single designed family (SYS-073). Reduce type styles to the token set (SYS-074). Remove interface complications above the lesson content (SYS-075). Finish the edges: page-specific empty and error states (SYS-076) and one ordered detail checklist (SYS-077).

## Polishing the product and changing the frame

### Hill climbing

Norman and Verganti's "Incremental and Radical Innovation" (2014) gives the clearest account of what iterative, human-centered design can and cannot do [@norman2014incremental]. The cycle of observation, ideation, rapid prototyping and testing is a form of hill climbing: making tiny movements along every design dimension and keeping whichever raises quality, like a blindfolded person feeling the ground. It reliably carries a product to the top of the hill it is on, and it cannot say whether a higher hill exists elsewhere; such procedures get trapped in local maxima. In their figure, point A is the start, B the peak of the current hill after incremental work, and C a larger hill reached only by a radical change, and the first result after the jump is often worse than B, so iterative design is then needed to climb the new hill [@norman2014incremental].

They define incremental innovation as "improvements within a given frame of solutions" and radical innovation as "a change of frame", and argue that radical change comes from a change of technology or a deliberate change of meaning, not from design research [@norman2014incremental]. Their examples include Nintendo, which used new sensor technology to change the meaning of game consoles from games for experts to games for everyone while competitors followed the technology race, and Apple's multi-touch, which had existed in laboratories for more than 20 years before Apple made it mainstream. They borrow three criteria for a radical invention: novel, unique and adopted, where the first two define radicalness and the third success. Both kinds are needed: radical innovation opens a domain, and incremental innovation captures its value; once a radical product exists, human-centered design is "invaluable" for improving it [@norman2014incremental].

The paper is a conceptual argument with illustrative cases. Norman reports trying and failing to find a radical innovation produced by human-centered design, which is absence of evidence from a non-systematic search; the thesis drew a published reply, which the notes did not read; and the hill metaphor treats quality as one landscape, when real products have competing stakeholders [@norman2014incremental]. The figure the paper relays for the failure rate of radical innovation is an estimate passed through a magazine, not a measurement, and is not used here.

::: myth
**"Enough user research and testing will lead to a breakthrough."** Iterative user-centered design is often presented as the route to innovation. Norman and Verganti argue that it is hill climbing, which improves a product within its current frame and gets trapped at local maxima, and that frame changes come from new technology or new meaning [@norman2014incremental]. Their case is conceptual, but the mechanism is clear: testing tells you which of the options you showed is better, not which option you never thought of.
:::

::: {.rule #SYS-078 grade="C"}
**Run LTF's routine design work as hill climbing (observe, prototype, test, refine), and schedule a separate, deliberate review of the frame at each phase boundary of the plan.** Iterative design reliably improves a product within its frame but cannot find a better frame [@norman2014incremental]. Conceptual argument with cases.

*In LTF:* the `v1.md` and `v2.md` phase boundaries are the natural moments. The frame review asks one question in writing: what would LTF be if it were not "a lesson site with diagrams and quizzes"?
:::

### What a frame change would look like for LTF

Norman and Verganti's two sources of radical change map onto LTF concretely. A technology change would be the learner's second screen reading live simulator state, so that Fly mode shows the next checklist item because the aircraft is in that phase, or a challenge that scores itself from telemetry instead of a self-assessed rubric. A meaning change would be a different answer to what a "lesson" is for a nervous beginner: not a page to read before flying, but a companion that sits beside the sim while they fly, which is already latent in Fly mode, the kneeboard and the print styles. Neither would come out of testing the current `LessonPage` layout, however carefully.

Brooks adds that bolder design decisions usually produce better outcomes, as the publisher's summary of his book puts it [@brooks2010design], and Dorst and Cross note that expected frames are a risk: a creative result depends on leaving the default framing of a problem [@dorst2001creativity]. Rams supplies the guard rail: innovation should develop alongside new technology and never be an end in itself [@rams2026good].

::: {.rule #SYS-079 grade="C"}
**Look for LTF's frame changes in new technology (live simulator data, the second screen) and new meaning (what a lesson is for a beginner beside the sim), not in tests of the current layout.** Radical change comes from technology or meaning change, not from design research on the existing product [@norman2014incremental]; creative results come from leaving the default frame [@dorst2001creativity]. Conceptual argument and a small protocol study.

*In LTF:* record candidate frame changes in `v2.md` with their technology or meaning source, and try each first as a Wizard of Oz session (SYS-059) before any engineering.
:::

::: {.rule #SYS-080 grade="C"}
**Judge an early prototype of a new frame against its potential and against what would make it work, not against the polished version of the current frame.** The first result after a jump to a new hill is often worse than the peak of the old one, and iterative design is then needed to climb [@norman2014incremental]. Conceptual argument.

*In LTF:* a first telemetry-driven Fly mode will be rougher than today's `FlyPanel`. The comparison that matters is whether learners keep their eyes on the sim more, not whether the new screen is tidier.
:::

::: {.rule #SYS-081 grade="C"}
**Require any proposed novelty in LTF to name the learner problem it solves; reject novelty whose only purpose is to look different.** Innovation should never be an end in itself [@rams2026good]; a radical idea must be novel, unique and adopted, and adoption depends on usefulness [@norman2014incremental]. Practitioner credo and conceptual framework.

*In LTF:* the owner's goal of looking less generic is legitimate, and Part XX shows where distinctiveness should come from (the mark, the horizon line, drawn instruments, aviation-derived structure). A novel navigation pattern or a custom scroll behavior would be novelty without a learner problem and should be refused.
:::

### Small fixes and large problems

Rittel and Webber's warning about incrementalism is the counterpart at the level of everyday work: attacking a problem at too low a level, small improvements can make higher-level problems harder to solve [@rittel1973dilemmas]. Each wicked problem is a symptom of another, so a local fix can entrench the larger one. In a design system this shows up as patches: a one-off class here, an extra banner there, each sensible, together producing the stack of boxes above a lesson or the two type dialects.

::: {.rule #SYS-082 grade="C"}
**Before merging a local design fix, ask what larger problem the symptom belongs to, and if the fix entrenches it, record the larger problem as an issue instead of only patching.** Low-level improvements can make higher-level problems harder, and each problem is a symptom of another [@rittel1973dilemmas]. Theory.

*In LTF:* adding another `text-[11px]` label to fit a widget fixes one label and deepens the missing widget-label token; adding another banner above the lesson solves one message and worsens the stack. The PR should name the larger problem.
:::

::: {.rule #SYS-083 grade="C"}
**Keep a written record of design decisions and their rationale, including rejected options, so that later changes can see what was traded away.** Brooks devotes a chapter to representing designs' trajectories and rationales [@brooks2010design], and wicked problems are judged good or bad by people with different values, so the reasons must be visible [@rittel1973dilemmas]. Expert essay and theory.

*In LTF:* the Decision Log has entries for D-25 (the livery direction) but none for the design the code actually shipped. A design decision record states what was chosen, what was rejected and why; D-25 should be marked superseded by such an entry.
:::

### What this means for Learn to Fly

Most of LTF's design work for the foreseeable future should be hill climbing, and that is right: the lesson page, challenge flow and reference hub need observation, prototypes and testing, not reinvention (SYS-078). Hold a written frame review at each plan phase boundary, and look for frame changes in live simulator data and in the meaning of a lesson used beside the sim (SYS-079). Judge early versions of a new frame by their potential (SYS-080). Refuse novelty without a learner problem (SYS-081). Treat recurring local patches as symptoms of larger problems (SYS-082), and keep design decisions, including superseded ones like D-25, in the Decision Log (SYS-083).

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

The decisions below are stated as what LTF will do. Each names the rules that justify it. Where a decision depends on another Part (identity, type, color), this Part settles only the system and process side of it.

#### The system itself

1. LTF's design system consists of written standards, shared components and a named change process, and all three live in the repository. A design-system README states the principles, token roles with measured contrast, pattern entries and the contribution process; every code comment that cites a design source points to it (SYS-001, SYS-005, SYS-006, SYS-024).
2. Functional patterns (components and their behavior) and perceptual patterns (palette, type, radii, icon style) are documented and changed separately (SYS-002).
3. Atomic design is vocabulary only. No folder reorganization follows from it (SYS-003).
4. Every recurring surface (lesson page, quiz block, challenge brief, Fly mode panel, checklist row, callout, widget frame, lesson path) gets a short pattern entry with problem, solution, links up and down the scale, consequences, known uses and an evidence grade (SYS-007 to SYS-012).
5. Antipatterns are recorded beside patterns, starting with the left-aligned `EmptyState`, inlined cards and the overloaded dashed border (SYS-011, SYS-015, SYS-076).

#### Tokens

6. Color, space, radius, shadow and type tokens are named by role; Day and Night are two mappings of the same roles, defined only in `tokens.css` (SYS-016).
7. A palette tier is added beneath the roles, and component tokens are created only where no role fits (SYS-017).
8. The token scale is the only scale. Tailwind's default type sizes, weights and tracking are reset or remapped, and lint rejects arbitrary bracket values outside an allowlist for widget drawing code (SYS-018, SYS-074).
9. Spacing stays on the 4 px grid; repeated literals (the 3 px horizon stroke, the 150 ms and 400 ms durations) become named tokens (SYS-019, SYS-025).
10. Layer order is defined for both themes, and Day's identical `surface` and `surface-raised` is fixed or documented (SYS-022). State rules are written once (SYS-023).
11. `tokens.css` remains the working source; no JSON token pipeline until a second consumer exists, but names, types, descriptions and deprecations follow the 2025.10 format's structure (SYS-020, SYS-021).
12. The fixed instrument and chart tokens stay outside the theme, and the README says why (SYS-029).

#### Consistency

13. Every consistency rule names the learner task it serves; departures are allowed with a written reason beside them (SYS-026, SYS-030).
14. Consistency effort goes first to checklist rows, rubric cards and quiz options (SYS-027).
15. One name per concept, control and state, in copy, content and code (SYS-028).
16. Simulator and aircraft conventions, confirmed by an aviation source, win over LTF's internal style (SYS-029).
17. A new standard states its cost and saving before adoption (SYS-031).
18. The interface inventory begun in the product dossier is completed with a keep, merge or remove decision for every variant; the first decisions are one UI icon stroke, one heading dialect and `Card` for every card (SYS-032).

#### Governance

19. Decisions are assigned to layers; slow-layer changes require a Decision Log entry (SYS-033). Content reaches presentation only through `LessonRenderer` block types (SYS-034). Simulator wording that recurs lives in data, like the aircraft tokens (SYS-035).
20. A part moves to `src/components/` on its second real use, and enters only through the five contribution checks, which `/ltf-review` asks (SYS-036, SYS-037). Unproven widgets live in an incubation area that lessons cannot reference (SYS-038).
21. `/dev/components` carries usage, style, code and accessibility notes for every component (SYS-039).
22. Every design-system change gets a `CHANGELOG.md` line, with breaking changes marked; a retrospective entry describes the system as it stands (SYS-040).
23. The owner is the design-system owner; agents propose design-system changes and never decide them. Each major surface has a named accountable person (SYS-041).
24. The checkable design rules are stated in one line each in the agent instructions and enforced by lint or `/ltf-review` (SYS-042).
25. The identity overhaul is delivered as a sequence of releases on the live system, not a parallel redesign (SYS-043).

#### Process

26. Each design effort has an external stopping rule and a concrete target learner, and its brief opens with constraints and the scarcest resource, which beside the sim is the learner's attention (SYS-044, SYS-050, SYS-051).
27. Learner failures get a named explanation before a remedy (SYS-045). Publishing aviation content is the one irreversible step and stays behind the verification gate (SYS-046).
28. Design starts from drafts against real content; the problem statement at the top of each brief or PR is kept current (SYS-047, SYS-048). Existing organizing ideas (horizon line, Brief, Fly and Debrief, kneeboard) serve as primary generators (SYS-049).
29. New surfaces and widgets start from at least three structurally different directions at equal fidelity, with generation and evaluation in separate steps, and are tested together with beginners beside a running sim, who are asked for problems, not fixes (SYS-052 to SYS-056).
30. New surfaces are split into a direction PR and an implementation PR (SYS-058). Demos go to `/dev/widgets` and are not counted as tests (SYS-057). Simulator-dependent ideas are tried with a human wizard first (SYS-059).
31. `/ltf-review` gains a design pass for PRs touching components, tokens, layouts or widgets, run by someone other than the author, as two independent reviews merged afterwards (SYS-060 to SYS-062).
32. Design decisions are recorded as criteria plus a short judgment, including rejected options; D-25 is marked superseded by an entry for the shipped design (SYS-063, SYS-083).
33. Easy metrics are paired with the quality they stand in for, and behavioral measures sit beside opinion (SYS-064, SYS-065). The Debrief headline is the tier, not the percentage (SYS-066).
34. Recurring taste judgments become written rules; exemplars are aviation artifacts, not other learning sites (SYS-067, SYS-068).

#### Craft and frame

35. Certainty (schemas, tokens, validators, lint) covers every error that could mislead a learner; attention steps (reading aloud, checking at real size beside the sim) cover what no jig can check (SYS-069, SYS-070).
36. Detail effort follows use: lesson page, challenge brief and Fly mode first (SYS-071).
37. Rams's principles are run as questions on Fly mode, then the lesson page (SYS-072). Honesty markers get one designed visual family (SYS-073).
38. Complications above the lesson content are cut to what is relevant to this learner on this visit (SYS-075). Empty, error and loading states are written for their page (SYS-076). One ordered detail checklist is added to `/ltf-review` (SYS-077).
39. Routine work is hill climbing; a written frame review happens at each plan phase boundary, looking at live simulator data and the meaning of a lesson used beside the sim (SYS-078 to SYS-080).
40. Novelty must name a learner problem (SYS-081). Recurring patches are treated as symptoms (SYS-082).

### Review checklist

Run these questions against a pull request or a page. A "no" is a finding; cite the rule ID in the review comment.

#### For any change to `tokens.css`, `index.css` or `src/components/`

- Does the change use or add a role-named token rather than a raw value, and does Night change only values, not components? (SYS-016, SYS-017)
- Does it introduce any bracket value (`text-[Npx]`, `p-[Npx]`) or a default Tailwind size outside the token scale? (SYS-018, SYS-019, SYS-074)
- If it adds a token, does the README give its role, usage and measured contrast? If it removes one, was it deprecated first with a named replacement? (SYS-020, SYS-021, SYS-024)
- Do new controls follow the written state rules and the layer order? (SYS-022, SYS-023)
- Are motion values tokens that the reduced-motion rule can reach? (SYS-025)
- If it adds a shared component: does it have two real uses, duplicate nothing, use only existing tokens and parts, work in both themes, at phone width and beside the sim, and has it been tried by beginners with a keyboard and screen-reader pass? (SYS-036, SYS-037)
- Does `/dev/components` show its states with usage, style, code and accessibility notes, and does its pattern entry record consequences and known uses? (SYS-012, SYS-039)
- Is there a `CHANGELOG.md` line, marked breaking if existing pages change appearance? (SYS-040)
- Was it reviewed by someone other than its author, by two independent reviews? (SYS-061, SYS-062)

#### For any page or layout change

- Has the page been rendered with real content at its extremes, in Day and Night, at phone width and on a second screen beside the sim? (SYS-004, SYS-070)
- Are its empty, error, loading and first-visit states written for this page, and is the error state distinct from the empty state? (SYS-015, SYS-076)
- Does every departure from an LTF pattern carry a written reason, and does every visual code on the page have one documented meaning? (SYS-015, SYS-030)
- Are headings in the token dialect only, and does every eyebrow name a category the heading does not? (SYS-067, SYS-074)
- How many boxes, banners or notices sit above the main content, and is each relevant to this learner now? (SYS-075)
- Do checklist rows, rubric cards and quiz options share one selection treatment? (SYS-027)
- Is every concept, control and state named with its single agreed word, and are simulator names spelled as the simulator spells them? (SYS-028, SYS-029)
- Does anything overstate the product or the learner's achievement, and are honesty markers in their designed family? (SYS-073)
- Is progress shown at a precision the evidence supports? (SYS-066)
- Does the detail checklist pass (units, MSL or AGL, no placeholders, tokens for aircraft values, no em dashes in learner copy)? (SYS-077)

#### For a new surface, widget or redesign

- Does the brief state the problem, the target learner concretely, the constraints, the scarcest resource and a stopping rule? (SYS-044, SYS-048, SYS-050, SYS-051)
- If the change answers a learner failure, does it name the chosen explanation and its evidence? (SYS-045)
- Were at least three structurally different directions made at equal fidelity, critiqued as a set, and chosen in a separate step against criteria written beforehand? (SYS-052, SYS-055, SYS-056, SYS-060)
- Were alternatives tested together with beginners beside a running sim, with problems rather than fixes asked for, and is the evidence behavioral rather than ratings alone? (SYS-053, SYS-054, SYS-065)
- Is the direction recorded as a Decision Log entry with criteria, judgment and rejected options, separately from the implementation PR? (SYS-058, SYS-063, SYS-083)
- Does it use an existing organizing idea, or state its own? (SYS-049)
- If it is novel, which learner problem does the novelty solve? (SYS-081)
- Is it a local patch on a larger problem, and if so, is the larger problem filed? (SYS-082)
- Does it depend on simulator state, and was it tried with a human wizard first? (SYS-059)

#### For content changes

- Does content reach the page only through existing block types, with no layout classes in `content/` files? (SYS-034)
- Is recurring simulator wording in a data file or token rather than inline? (SYS-035)
- Is the change to published aviation content behind the verification gate? (SYS-046)
- Has the lesson been read aloud, and do its easy metrics (quiz score, minutes) have a check on the quality they stand in for? (SYS-064, SYS-070)

#### At a plan phase boundary

- Has the inventory of variants been updated with keep, merge or remove decisions? (SYS-032)
- Are the README, pattern entries and evidence grades current, and has any grade changed because of learner data? (SYS-006, SYS-008)
- Has a written frame review asked what LTF would be if it were not a lesson site, with candidate frame changes tied to technology or meaning, judged by potential? (SYS-078, SYS-079, SYS-080)
- Do the agent instructions and `/ltf-review` references still state the checkable design rules in one line each? (SYS-042)
