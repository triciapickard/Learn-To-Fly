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

The process layer is the weakest. The repository has strong process for code and content (lint, typecheck, `content:validate`, `/ltf-review`, the Decision Log, the `CHANGELOG.md` rule) and almost none for design: no owner, no contribution criteria, no record of why the tokens are what they are, and evidence of drift that a process would catch. A grep of `src/**/*.tsx` this session found arbitrary text sizes outside the scale (`text-[11px]` 27 times, `text-[12px]` 20, `text-[9px]` 11, `text-[10px]` 9, `text-[13px]` 5), and the hand-inlined card class string `rounded-lg border border-line bg-surface` in 23 files rather than `Card`. The dossier adds the larger drift: two type dialects (`text-2xl font-bold` headings on app pages against the `display-*` and `heading-*` utilities on the landing page and in `PageHeader`) and an unused `body-md`.

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

A token system protects consistency only if values outside it are hard to use. LTF's `tokens.css` resets Tailwind's default palette, radii, shadows and fonts (`color-*`, `radius-*`, `shadow-*` and `font-*` are set to `initial`), so a class such as `bg-blue-500` does not exist. It does not reset text sizes, weights, leading, tracking or breakpoints, so Tailwind's defaults for those remain available beside LTF's own type utilities, and arbitrary bracket values remain available for everything. The drift follows the open doors. The dossier counts raw Tailwind size classes (`text-sm` 204 times, `text-2xl` 36, `text-xs` 29, `text-lg` 25 and others) and `font-bold` in 34 files against token utilities in 29; this session's grep adds bracket sizes below the scale, `text-[11px]`, `text-[12px]`, `text-[10px]` and `text-[9px]`, used 67 times between them, plus `text-[13px]` five times.

Suarez and colleagues' point applies directly: standards are what make a decision critiquable [@suarez2017design], and a `text-[11px]` is a decision nobody can review against anything. Nielsen's edited volume on consistency makes the matching organizational point: tools that generate or check interfaces belong in the process because people forget rules [@nielsen1989coordinating].

::: {.rule #SYS-018 grade="C"}
**Make the token scale the only scale: reset or restrict Tailwind's default type sizes, weights and tracking, and fail lint on arbitrary bracket values outside an allowlist.** Standards make decisions critiquable [@suarez2017design], and generation and checking tools enforce what people forget [@nielsen1989coordinating]. Organizational practice.

*In LTF:* add a type tier to `tokens.css` (or map Tailwind's `text-*` names onto the `display-*`, `heading-*`, `body-*`, `label`, `eyebrow` and `readout-*` sizes), then add an ESLint or Stylelint rule that rejects `text-[Npx]`, `p-[Npx]` and similar outside widget drawing code. The 9 to 12 px bracket sizes are mostly in widget labels; give widget labels their own tokens rather than allowing brackets everywhere.
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
