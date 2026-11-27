# Grids, Layout and Space

This Part covers how Learn to Fly divides a screen: the grid and its unit, the margins and measure that frame reading, the space that tells a learner what belongs together, the density a page can carry, how layouts respond to the width they are given, where attention falls on a page, and the special case of a screen read beside a running simulator. It draws on the modernist grid treatises (Müller-Brockmann, Gerstner, Ruder, Vignelli), the classical page canons, the web's own craft literature (Marcotte, Brown), the CSS Grid specification, and a small body of experiments on whitespace, line spacing, clutter, grouping and scanning.

The evidence is uneven, and the grades say so. Almost everything about grids themselves is craft authority: coherent, tested by decades of practice, and untested by experiment. The experiments that exist are few, small and in several cases known here only through their abstracts; where that limits what a rule can claim, the rule says so. Two findings are strong enough to build on with confidence: perceptual grouping by proximity and by common region, and the steady fall of attention down a page. One popular claim, that the golden section is the most pleasing proportion, fails on the evidence and is treated as a myth. Tokens are named here without their leading double hyphen (`space-4`, `container-measure`, `color-accent`); Tailwind utilities and component names are given as they appear in the code. Use the rules as defaults for new work and as questions for review; the final chapter collects them into decisions and a checklist.

## What a grid is for

A grid is a set of lines that decides, before any content arrives, where content may go. The modernist designers who codified it argued that this prior decision does two jobs at once: it makes a page easier to read, and it makes a series of pages look like one body of work. The first claim is plausible and only partly tested; the second is the reason a product with dozens of lessons needs a grid at all.

### The Swiss statement and its ethic

Josef Müller-Brockmann's *Grid Systems in Graphic Design* is the canonical statement of the typographic grid as a working method, covering grids from 8 to 32 fields and a three-dimensional grid for exhibition design [@mullerbrockmann1981grid]. Its argument is as much ethical as practical. Using a grid, he writes, shows that the designer "conceives his work in terms that are constructive and oriented to the future," and design should have "the clearly intelligible, objective, functional, and aesthetic quality of mathematical thinking." He goes further: "working with the grid system means submitting to laws of universal validity." In a magazine profile he is paraphrased as treating the grid as "an organisational system that makes it easier to read the message," and as holding that subjective interpretation falsifies the message [@mullerbrockmann1981grid].

The one worked example available from the book shows that this rigor was not stiffness. The "musica viva" concert poster "is built up on a grid 4.5 fields wide and 4 fields deep," with the two words crossed and the letters of "musica" "set at irregular intervals so that a rhythm is produced," and the small program lines aligned to the letters [@mullerbrockmann1981grid]. The grid generates rhythm. It does not dictate a single arrangement; it limits the arrangements to ones that relate to each other.

Emil Ruder, teaching at Basel at the same time, put communication first: the primary purpose of typography is communication, which does not exclude aesthetic effect, and contrast is one of its methods [@ruder1967typography]. His essays on fundamentals were organized as "The Plane," "The Line," "The Word" and "Rhythm," which is a compact theory of layout: a page is a plane divided by lines, and words are organized on it rhythmically [@ruder1967typography]. Jan Tschichold, from the opposite camp of classical book design, set "comfortable legibility" as the "absolute benchmark for all typography" [@tschichold1991form]. The two traditions disagree about symmetry and ornament but agree on the order of priorities: the reader first, the system second.

### The grid as a programme

Karl Gerstner gave the most useful modern definition. A typographic grid is "a proportional regulator for composition, tables, pictures," and "a formal programme to accommodate x unknown items" [@gerstner2007designing]. The second phrase is the important one for a content product. A grid is drawn before the content exists, and its value lies in how well it receives content nobody has written yet. Gerstner's design problem is "to find the balance, the maximum of conformity to a rule with the maximum of freedom," or "the maximum of constants with the greatest possible variability" [@gerstner2007designing]. His larger slogan, "instead of solutions for problems, programmes for solutions," describes what a design system is: a set of rules that produces acceptable layouts for cases the designer did not foresee.

Gerstner also admits the cost. His grid for the periodical *Capital* "looks complicated to anyone not knowing the key" [@gerstner2007designing]. A programme only works if the people who apply it know its rules, and in a product those people are engineers and content authors, not trained typographers. His morphological box, which builds designs by combining components across parameters, has an honest escape hatch: a "something else" component for whatever does not fit. He calls the box rough and notes that it can generate thousands of options by "blind concatenation" with no guarantee of quality [@gerstner2007designing].

### How fine a grid should be

Massimo Vignelli adds a practical warning about scale. "The smaller the module of the grid the least helpful it could be," he writes, and "an empty page is a page with an infinitesimal small grid," while a coarse grid is "very restricting" [@vignelli2010canon]. His procedure is coarse-first: set the outside margins, "small enough to provide a certain tension between the edges of the page and the content," divide the page into columns (he lists two to six), then divide it top to bottom into modules ("four, six, eight, or more") [@vignelli2010canon]. A four-pixel spacing scale, which LTF has, is a unit, not a grid. It says what sizes are allowed; it does not say where things go.

### Authority and its limits

None of this is experimental. Müller-Brockmann's book "helped spread grid use first in Europe and later in North America," and by the mid-1970s the grid was standard in design education; in the early 1980s some designers rejected its dogmatic use, and later teaching treats it as a tool rather than a required starting point [@mullerbrockmann1981grid; @samara2023making]. The book offers no user testing showing that gridded pages are read faster or understood better. The defensible core is narrower than the rhetoric: consistent placement and alignment reduce the work of finding things on a page seen many times, and they make a series cohere. Those claims are plausible, consistent with the perception research on grouping in the chapter on space as grouping, and should be held to that standard rather than to "laws of universal validity."

::: myth
**"Working with a grid is submitting to laws of universal validity."** Müller-Brockmann's phrase [@mullerbrockmann1981grid] is an argument from design ethics, not a finding. The book contains no test of readers, and the grid's history includes a well-documented backlash against exactly this universalism, followed by a reconciliation in which grids are built and then deliberately broken [@samara2023making]. A grid earns its place by making placement predictable and pages related; whether a particular grid helps a particular reader is an empirical question.
:::

::: {.rule #GRD-001 grade="C"}
**Build every page from one of a small, named set of page grids, each with a fixed column structure.** The grid tradition's central practical claim is consistency of placement across a series [@mullerbrockmann1981grid; @vignelli2010canon]. A product whose learners see dozens of lessons, challenges and reference pages benefits from that consistency more than a one-off poster does. The evidence is craft authority; no experiment compares gridded and ungridded product pages.

*In LTF:* today the widths and columns are chosen page by page: `LessonPage` builds its own three-zone grid inside Tailwind's `max-w-7xl`, `PageContainer` offers `max-w-page` (1200 px) or `narrow` (`max-w-3xl`), `AuthLayout` uses `max-w-md`, `FlyModeLayout` uses `max-w-3xl`, and the code contains at least a dozen bracketed one-off widths (`max-w-[640px]`, `max-w-[560px]`, `max-w-[460px]`, `max-w-[32em]` and others). Name the templates (reading, collection, dashboard, form, fly, landing) and route every page through one.
:::

::: {.rule #GRD-002 grade="C"}
**Write the layout system down as a programme: list its constants and the variables it must accept.** Gerstner's grid is "a formal programme to accommodate x unknown items," designed for the balance of "the maximum of constants with the greatest possible variability" [@gerstner2007designing]. A content product is exactly that case: the constants are fixed once, the lessons arrive for years. The grade is C because this is a design-process argument with no user study behind it.

*In LTF:* the constants are the spacing unit in `tokens.css`, the container widths (`container-measure`, `container-page`), the column templates and the type utilities in `index.css`. The variables are lesson blocks (`LessonRenderer`'s markdown, heading, callout, image, video, quiz, widget and checklist), challenge briefs and reference entries. A one-page layout spec should list both, so a new block type is checked against the programme rather than given its own widths.
:::

::: {.rule #GRD-003 grade="C"}
**Give every content template an explicit slot for content that fits none of the planned categories.** Gerstner's morphological box keeps a "something else" component because real material always exceeds the plan, and he admits the box generates options blindly [@gerstner2007designing]. Without a sanctioned exception path, authors invent their own, and the invented ones are where layouts drift.

*In LTF:* `Callout` already serves this role for prose (nine types, including `verify`). The gap is layout: a wide table, a two-image comparison or a widget with a caption longer than its canvas has no sanctioned width. Define one "wide" block width for the reading template (wider than the measure, narrower than the page) and route every oversized block to it.
:::

::: {.rule #GRD-004 grade="C"}
**Start with a coarse column grid and add finer modules only when a real layout needs them.** Vignelli warns that a very fine module gives no guidance and a coarse one is restrictive, and his procedure moves from margins to columns to modules [@vignelli2010canon]. A spacing scale is not a substitute for a grid: it constrains sizes, not positions.

*In LTF:* the 4 px scale in `tokens.css` is a unit. The positional grid is missing outside the lesson page. Define column counts per template (for example a single reading column with optional rails; a collection grid of one to three tracks; a two-track dashboard) before adding a 12-column system that no page would use.
:::

::: {.rule #GRD-005 grade="C"}
**When the grid and legibility conflict, legibility wins.** Ruder put communication first, Tschichold made "comfortable legibility" the absolute benchmark, and Müller-Brockmann justified the grid by its service to reading [@ruder1967typography; @tschichold1991form; @mullerbrockmann1981grid]. The order of priorities is shared across the traditions; the grade is C because it is consensus, not experiment.

*In LTF:* if a column width chosen to align with the page grid would push lesson prose past its measure, the prose column narrows and the grid accommodates it. The measure (`max-w-measure`) is the constraint; the 800 px `article` cap is not.
:::

::: {.rule #GRD-006 grade="C"}
**Document the key to the grid where contributors will read it, with worked examples.** Gerstner concedes that a good programme "looks complicated to anyone not knowing the key" [@gerstner2007designing]. In a product the people applying the programme are engineers and content authors, so the key must live with the code.

*In LTF:* the comments in `tokens.css` point to a `tokens.json` and a design-system README that do not exist in the repository. Put the layout key (templates, widths, spacing roles, the wide-block rule) in a file the `/dev/components` page links to, and render each template there with placeholder content.
:::

### What this means for Learn to Fly

Learn to Fly has a spacing unit and two container tokens, but no grid in Gerstner's sense. Each page composes its own widths: the lesson page's `lg:grid-cols-[220px_minmax(0,1fr)]` and `xl:grid-cols-[220px_minmax(0,1fr)_280px]` inside `max-w-7xl`, `PageContainer` at `max-w-page` or `max-w-3xl`, the dashboard's `lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]`, the challenge list's `sm:grid-cols-2 lg:grid-cols-3`, the landing hero's `7fr/5fr` split. Several are sensible on their own. Together they are a collection of solutions rather than a programme, and that is part of why the product reads as assembled from parts (the many cards hand-inlined as `rounded-lg border border-line bg-surface p-4 shadow-1` rather than drawn from `Card` are the same pattern at a smaller scale).

Keep the spacing unit, the `container-measure` and `container-page` tokens, and the lesson page's rail structure, which is the most considered layout in the code. Change the page-by-page width choices into a short list of named templates, each implemented once as a layout component, and retire the bracketed one-off widths. Build a `/dev/layouts` or extend `/dev/components` to show every template with placeholder content, so the key is visible. The chapter on templates and exceptions sets out which templates LTF needs and where it may break them.

## Units, scales and the module

A grid needs a unit: the smallest step from which every width, gap and margin is built. The unit decides whether layouts made by different people at different times agree without anyone checking. The grid treatises disagree about how the unit should be chosen (from type, from the body, from a ratio) but agree that it should be chosen once and obeyed.

### Gerstner's unit and the divisibility check

Gerstner's grid for *Capital* is the clearest worked example of a unit chosen for a job. The basic unit is 10 points, "the size of the basic typeface including the lead," so the unit is the line of text [@gerstner2007designing]. The text and picture area is 58 units wide, with two units between columns, and it divides at once into one to six columns. The arithmetic checks: 2 × 28 + 2, 3 × 18 + 2 × 2, 4 × 13 + 3 × 2, 5 × 10 + 4 × 2 and 6 × 8 + 5 × 2 all equal 58 [@gerstner2007designing]. The choice of 58 is not aesthetic. It is the number that lets one page hold two, three, four, five or six columns with identical gutters and no remainders, so that a two-column spread and a six-column table on the next page share the same edges.

On a fluid screen the integer part of that check matters less, because tracks are sized as fractions and the browser absorbs remainders. The structural part matters as much as ever. If a two-up card row, a three-up card row and a sidebar layout are each defined independently, their edges will not line up when they appear on the same page or on consecutive pages. Gerstner's solution in modern terms is a single track grid whose spans produce every column count: a 12-track grid spanned 6, 4, 3 or 2 at a time yields two, three, four and six columns that always share lines, at any width.

LTF's numbers show why the check is worth running. `PageContainer` caps the page at 1200 px including its `px-4` padding, which leaves a 1168 px content area. A three-up grid with `gap-4` (16 px) gives tracks of 378.67 px; a two-up grid with the same gap gives 576 px tracks. Neither is wrong, but no edge of the three-up row coincides with any edge of the two-up row except the outer ones, and the dashboard's `2fr/1fr` split shares no line with either. The lines a learner sees change from section to section.

### Le Corbusier's human-scaled series

Le Corbusier's Modulor is the other ancestor: a system of measures tied to the human body, meant to standardize building dimensions, to bridge imperial and metric units, and to make "the bad difficult and the good easy" [@lecorbusier1954modulor]. It produces two interleaved series of measures, red and blue, both divided by the golden ratio, and it was used throughout the Unité d'Habitation in Marseille [@lecorbusier1954modulor]. Gerstner drew the useful contrast: squared paper is an arithmetic grid, while Le Corbusier's module is geometric and "primarily a programme" that governs the whole composition [@gerstner2007designing].

The system's own author was candid about its limits. "Modulor does not confer talent, still less genius," he wrote, and "your eyes are your judges" [@lecorbusier1954modulor]. Reviewers have been harsher. Ostwald's review of the facsimile lists inconsistent geometric descriptions, little grasp of actual human proportions, an erratic index and a section that used decades-old, inaccurate measurements to find the Modulor in famous ruins; a 1954 review quoted Le Corbusier's admission that he could reject a mathematically orthodox result because it was not beautiful [@lecorbusier1954modulor]. The useful part survives the criticism: a limited, human-scaled set of sizes that every component draws from, so that layouts agree without negotiation. The golden-ratio justification does not survive, for reasons given in the chapter on proportion.

The phrase "human scale" also translates directly to a screen product. For a phone it is thumb reach and reading distance; for a tablet propped beside a simulator it is reading at arm's length. These are different scales, and a single set of sizes cannot serve both, which is why the chapter on layout beside the simulator gives Fly mode its own base.

### Modular scales on the web

Tim Brown carried the idea to web typography. A modular scale is a series of numbers linked by a fixed ratio, and he quotes Bringhurst: "A modular scale, like a musical scale, is a prearranged set of harmonious proportions" [@brown2011more]. With the golden ratio and a base of 10, the scale runs 10, 16.180, 26.179, 42.358 upward and 6.180, 3.819, 2.360 downward. A double-stranded scale starts from two bases with the same ratio (his example is 10 and 20 at 1:1.618), and the two strands fill each other's gaps, giving more usable steps [@brown2011more].

His worked page is instructive mainly for its honesty. The base is 18 px, the size at which he judged his body face crispest; the ratio was chosen for its association with the typeface's humanist design; an "important number" of 190 px sets the heading. The scale then supplies other values, such as a main column of 497.406 px found by trial and error. And he records departures: a 15 px sidebar size he improvised, a 20 px margin set by optical alignment, and a body line height of 1.54 "tuned by eye" [@brown2011more]. His summary is the right one: "Modular scales are a tool, they're not magic," and "Math is no substitute for an experienced designer's eye, but it can provide both hints and constraints for decision making" [@brown2011more]. No study shows that steps from one ratio are read better than steps from another. The value is the discipline of choosing from a short list.

Vignelli states the same discipline for type sizes: steps should be modular, "from single to double, from one to three, or four or more, but not an odd size in between," with no more than two type sizes on a page and headings at about double the body [@vignelli2010canon]. That last rule was written for print and is stricter than an interface can follow, but it identifies the failure that matters: sizes chosen one at a time, each defensible, together making a scale nobody designed.

### The LTF scale as it stands

The spacing unit in `tokens.css` is 4 px, with named steps `space-1` to `space-24` at 4, 8, 12, 16, 20, 24, 32, 48, 64 and 96 px; Tailwind's own spacing scale uses the same 4 px base, so `p-4` is `space-4`. A grep of `src/**/*.tsx` this session shows the scale is mostly obeyed: `gap-2`, `gap-3`, `mt-4`, `mt-3` and `gap-4` are the commonest spacing classes. It also shows the leaks. Half-steps that the named scale does not contain appear repeatedly: `gap-1.5` (6 px, 24 uses), `mt-0.5` (2 px, 14 uses), `py-2.5` and `gap-2.5` (10 px), `py-3.5` (14 px). Steps between the named ones appear too: `mt-10`, `gap-10` and `py-10` (40 px) sit between `space-8` and `space-12`. Bracketed pixel values (`mt-[3px]`, `p-[3px]`, `w-[72px]`) add more. Each is a small decision; together they mean the named scale documents intent rather than constrains output.

The type scale has the same two-dialect problem described in Part IV, Typography on Screens. The `index.css` utilities run 12, 14, 16, 18, 20, 24, 32, 44 and 64 px, whose step ratios rise from about 1.1 at the small end to about 1.45 at the top; that is not a modular scale but it is a deliberate one. Alongside it, raw Tailwind sizes (`text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`) put 30, 36, 48 and 60 px headings on the lesson, dashboard, challenge, Fly mode and error pages, which are sizes the utilities do not contain.

Vertical rhythm is where unit and type meet. Müller-Brockmann and Vignelli derive vertical spacing from the line of body text, so that type and images land on the same lines; Vignelli asks that the space between columns and modules be "ideally the size of a line of type" and that type and image modules share one leading [@mullerbrockmann1981grid; @vignelli2010canon]. LTF's body line is 16 px at 1.625, or 26 px, and several utilities have leading that is not a multiple of 4 (`body-lg` 29, `heading-lg` 30, `code` 22). A strict baseline grid is therefore impossible with the current tokens, and on screens it is fragile anyway, since images, controls and wrapped headings break it. The workable version is softer: block spacing drawn from a few steps related to the body line, applied consistently.

::: {.rule #GRD-007 grade="C"}
**Build every width, gap, padding and margin from one base unit, and use only its named steps.** Gerstner's grid and Le Corbusier's series both work by limiting the sizes available, so that independent decisions agree [@gerstner2007designing; @lecorbusier1954modulor]. The benefit is consistency, not any particular number; the grade is C because no experiment tests it.

*In LTF:* the unit is 4 px and the named steps are `space-1` to `space-24`. Either add the steps the code actually needs (6, 10 and 40 px appear often enough to be decisions) to the named scale, or replace those uses with named steps. Do not leave half-steps as unnamed habits.
:::

::: {.rule #GRD-008 grade="C"}
**Define multi-column layouts as spans of one shared track grid, so two-, three- and four-up rows share edges.** Gerstner chose 58 units because it divides into one to six columns with equal gutters, so every column count shares lines [@gerstner2007designing]. In CSS the same result comes from spanning a single set of tracks rather than defining each row's columns separately [@atkins2025css].

*In LTF:* the challenge list (`sm:grid-cols-2 lg:grid-cols-3`), the landing "What you need" row (`md:grid-cols-3`), the questions list (`md:grid-cols-2`), the stats row (`lg:grid-cols-4`) and the dashboard split (`2fr/1fr`) each define their own tracks. A 12-track page grid in the collection and dashboard templates, spanned 6, 4 or 3 at a time, would give them shared lines at every width.
:::

::: {.rule #GRD-009 grade="C"}
**Enforce the spacing and size scales with a lint rule that flags off-scale and bracketed values.** A scale that is not enforced decays one exception at a time; Brown recommends expressing the scale as a short list every component draws from, and Le Corbusier's series only worked because it excluded other sizes [@brown2011more; @lecorbusier1954modulor].

*In LTF:* add a lint check (the repository already runs ESLint and a pre-commit hook) that rejects Tailwind bracket values for spacing and width (`mt-[3px]`, `max-w-[560px]`) and half-steps not in the named scale, with an allow-comment for recorded departures under GRD-010.
:::

::: {.rule #GRD-010 grade="C"}
**Record every deliberate departure from the scale in a comment that gives the reason.** Brown's worked page lists each value he improvised or tuned by eye, so a reader can tell a decision from an accident [@brown2011more]. A reviewer seeing an off-scale value with no comment should treat it as a bug.

*In LTF:* the `LessonPath` 3 px connector, the `ThemeToggle` `p-[3px]` track and the 3 px inset underline on active tabs are optical values that belong to the "horizon line" motif; mark them as such in the code, once, and let the lint rule allow them.
:::

::: {.rule #GRD-011 grade="C"}
**Choose the type scale's base for legibility first, then choose its ratio for steps that are visibly distinct at the smallest sizes, and test both.** Brown starts from the body size at which text is crispest and treats the ratio as a tool, not a law; no study shows one ratio is read better than another [@brown2011more]. Vignelli's demand for modular steps, "not an odd size in between," guards against near-duplicate sizes [@vignelli2010canon].

*In LTF:* the `index.css` utilities step by about 1.1 between 16, 18 and 20 px, which is close to the limit of a visible difference on a phone; check that `body-lg`, `heading-md` and `heading-sm` are distinguishable by more than weight. The detailed choice of sizes belongs to Part IV, Typography on Screens; this rule asks only that the scale be one designed list.
:::

::: {.rule #GRD-012 grade="C"}
**Draw every font size on every page from the one type scale; never use framework default sizes alongside it.** A scale is only a programme if it is the whole list [@gerstner2007designing; @vignelli2010canon]. Two parallel lists produce headings that differ from page to page for no reason a learner can see.

*In LTF:* replace `text-3xl font-bold sm:text-4xl` on the `LessonPage` h1, `text-2xl font-bold` section heads on `ModulePage`, `BriefTab` and `DashboardPage`, and the `text-4xl`, `text-5xl` and `text-6xl` uses in Fly mode, results and 404 with the `display-*` and `heading-*` utilities (adding a Fly mode strand under GRD-014 if needed).
:::

::: {.rule #GRD-013 grade="C"}
**Space blocks vertically in a few steps related to the body line, applied by role, rather than forcing a strict baseline grid.** Müller-Brockmann and Vignelli derive vertical rhythm from the leading of body text so type and images share lines [@mullerbrockmann1981grid; @vignelli2010canon]. On screens, wrapped headings, controls and media break a strict baseline, so the durable form is consistent block spacing.

*In LTF:* with a 26 px body line, lesson blocks currently use `mt-12` before block headings, `my-3` for paragraphs and `mt-6` and `mt-10` elsewhere. Fix three roles (within a block, between blocks, before a section heading) and give each one named step; whether the body leading should move to a 4 px multiple is a typography decision for Part IV.
:::

::: {.rule #GRD-014 grade="C"}
**If one strand of sizes is not enough, add a second strand that shares the base, rather than adding loose values.** Le Corbusier's red and blue series and Brown's double-stranded scale both add usable steps without abandoning the system [@lecorbusier1954modulor; @brown2011more].

*In LTF:* Fly mode needs larger type and controls than lessons (see the chapter on layout beside the simulator). Define it as a second strand of the same scale (for example a `fly-*` set of type and spacing utilities) instead of the current `text-xl` base with `text-2xl`, `text-3xl`, `text-4xl` and `text-5xl` additions.
:::

### What this means for Learn to Fly

Keep the 4 px unit; it is a sound base, and Tailwind's scale already matches it. Keep the named type utilities in `index.css` as the single type list. Change three things. First, reconcile the named spacing scale with practice: decide whether 6, 10 and 40 px are real steps, name them if so, and remove them if not. Second, retire the raw Tailwind size classes in favor of the utilities, and give Fly mode its own strand. Third, add a lint rule for bracketed and off-scale values, with a comment convention for the handful of optical exceptions that the horizon-line motif needs.

Build one shared track grid for the collection and dashboard templates, so that card rows, stat rows and the dashboard's two-track split share lines. Then define vertical spacing by role (inside a group, between groups, before a section) rather than by whichever `mt-*` value looked right on the day. The roles themselves, and the ratio between them, are set in the chapter on space as grouping.

## Proportion and the golden-section question

Every layout system eventually has to answer why a column is this wide or a card this tall. The oldest answer in design writing is proportion: certain ratios are said to be harmonious, and the golden section (about 1.618) above all. The evidence on that answer is poor. The better answer, which the same traditions also contain, is that proportions should follow from relationships and from function: the measure, the content's own shape, the reading distance.

### The canons of the page

Tschichold's late essays argue that page construction was solved by earlier centuries and that designers should recover the rules: in a phrase attributed to him, "methods and rules upon which it is impossible to improve have been developed for centuries" [@tschichold1991form]. The construction usually credited to him, from a medieval manuscript framework he determined in 1953, uses a 2:3 page, margins in the ratio 1:1:2:3 and a type area proportioned by the golden section. He also popularized the Van de Graaf construction, which works for any page ratio, gives the type area the page's own proportions with its height equal to the page width, and sets the margins at ninths of the page, with the inner margin half the outer [@tschichold1991form]. The secondary accounts available for this book were not fully consistent about which margin receives which fraction, so the fractions should be checked against the book before anyone quotes them as Tschichold's rules.

The historical premise is contested. John Man argued that the Gutenberg Bible's page ratio was close to 2:3 rather than golden, and accounts by Richard Hendel and Christopher Burke suggest that modern book designers treat the canons flexibly [@tschichold1991form]. Tschichold's own career is a caution against treating any one master as final: the author of *Die neue Typographie* later rejected its asymmetry for classical symmetry. Most importantly for a web product, a 2:3 page is not a screen. A browser window has no fixed proportion, and a lesson page has no fixed height. What survives the transfer is the method: margins, type area and measure are set together as one relationship, not chosen one at a time. The chapter on margins and measure applies that method.

### What the golden-section claims rest on

Kimberly Elam's *Geometry of Design* is the clearest modern case for hidden proportion. It overlays golden sections, root rectangles and Fibonacci series on twentieth-century posters, furniture, products and buildings, using translucent vellum overlays with red line diagrams laid over each subject [@elam2001geometry]. A review calls it "probably the best introduction to the subject" and places it in a long tradition of "proportional harmony," noting that tests beginning with Gustav Fechner in 1876 point to the golden section, roughly 5 by 8 [@elam2001geometry]. The method is a good way to learn to see structure in a composition. It is not evidence that the designer used the system or that viewers prefer it, because an overlay can always be fitted to an object after the fact.

The experimental side does not support the preference. Fechner's original test used 10 rectangles, and an account of it reports that about 76% of people chose ratios near 0.618; a later repetition with 48 rectangles found that people prefer a range of proportions but not the golden one specifically [@markowsky1992misconceptions]. Holger Höge took Berlyne's warning that small changes in instructions might shift preferred proportions and tested it directly. In two experiments, one using Fechner's method of production (drawing rectangles) and one using the method of choice (sorting them), he varied the verbal criteria given to subjects. Different criteria produced different proportions, and under neither method was there a preference for the golden section [@hoge1995fechner]. The abstract available here does not give the number of subjects or the criteria used. The fair reading is that a universal, robust preference for the golden rectangle is not supported, and that what people choose depends on what they are asked.

George Markowsky's paper is the standard citation for scepticism about the historical claims [@markowsky1992misconceptions]. It could not be read for this book, and the numbers below come from secondary accounts, including a critical review by a golden-ratio enthusiast, so they carry that source's bias. Markowsky reportedly found a hypotenuse-to-height ratio of about 1.6195 for the Great Pyramid, within about 0.09% of the golden ratio, yet rejected the link because the ancient text describing the pyramid is ambiguous. One of his Parthenon calculations gives 1.717 rather than 1.618, and he argued that parts of the building fall outside the golden rectangle usually drawn around it. The United Nations Secretariat Building's height over width comes to about 1.76, or 1.90 to 1.92 with other heights. His own family's navel-height ratios averaged 1.63, which he dismissed as within measurement uncertainty. His framework treats measurements within about plus or minus 2% (about 1.58 to 1.66) as the range to consider, and argues that infinitely many numbers lie near the ratio [@markowsky1992misconceptions]. His critic argues he measured from the wrong base and was too strict. Both sides make tolerance the decisive judgment, which is exactly why casual overlays cannot settle the question.

Even careful practitioners repeat the claim. Vignelli says the international A series of paper "is based on a golden rectangle, the divine proportion," yet the sizes he lists himself, A4 at 210 by 297 mm, give a ratio of about 1.414, not 1.618 [@vignelli2010canon]. Le Corbusier divided both Modulor series by the golden ratio and still admitted he would reject an orthodox result that was not beautiful [@lecorbusier1954modulor]. Brown chose a golden-ratio scale partly for its association with Renaissance typography, while saying plainly that the scale is a tool [@brown2011more].

::: myth
**"The golden rectangle is the most pleasing proportion."** The claim descends from Fechner's nineteenth-century rectangle tests. Höge varied the instructions given to subjects in both a production task and a choice task and found no preference for the golden section under either; different wording produced different preferred shapes [@hoge1995fechner]. A repetition of Fechner's test with 48 rectangles found a preference for a range of proportions, not for the golden one [@markowsky1992misconceptions]. Context-free rectangles are a narrow test, but the hypothesis predicted a robust preference and did not get one.
:::

::: myth
**"Great buildings and designs are built on the golden ratio."** Markowsky's survey found many such claims unsupported, resting on selective measurement or historical error; the fits depend on where one measures and how much tolerance one allows [@markowsky1992misconceptions]. Overlays such as Elam's show that a geometry can be fitted to a design, not that it was used or that it explains the design's appeal [@elam2001geometry]. Even the claim that A-series paper is golden is wrong by the dimensions of the paper itself [@vignelli2010canon].
:::

### Proportion from function

If ratios cannot be justified by beauty, they can be justified by what they hold. A simulator screenshot has the proportions of the screen that produced it; a round instrument is square; a table's proportions follow its rows and columns; a reading column's width follows its measure. Choosing media proportions from content also reduces cropping, which Vignelli made a grid requirement for books: the grid "should follow the proportion of most pictures to minimize cropping," because "the content determines the container" [@vignelli2010canon]. A small, fixed set of ratios, each with a reason, gives the consistency that proportion systems promise without the mysticism.

::: {.rule #GRD-015 grade="B"}
**Never justify a layout ratio, scale or size by the golden section or any claim of inherent beauty; state the functional reason or the test result.** Preference experiments do not show a robust golden-section preference, and the historical claims rest on selective measurement [@hoge1995fechner; @markowsky1992misconceptions]. The grade is B because the experimental evidence is limited to a few studies of isolated rectangles, though it consistently fails to support the claim.

*In LTF:* layout documentation, design-system comments and any future marketing copy give reasons such as "the measure", "the screenshot's ratio" or "the tested width", never "the golden ratio". If a contributor proposes a ratio scale for convenience, record it as convenience.
:::

::: {.rule #GRD-016 grade="C"}
**Use a small, fixed set of media aspect ratios, each chosen from the content it holds, and apply them consistently across lessons.** Vignelli's "the content determines the container" and his advice to follow the proportion of most pictures minimize cropping [@vignelli2010canon]; Elam's work shows that repeated proportions are what make compositions read as related [@elam2001geometry].

*In LTF:* `YouTubeEmbed` uses `aspect-video`. The three Module 0 sim screenshots and future lesson images have no declared ratio, and the widget loading `Skeleton` is a fixed `h-72`. Define three ratios (screen captures at the simulator's capture ratio, square for single round instruments, and a wide ratio for panels and diagrams) and require every image block and `WidgetFrame` canvas to declare one.
:::

::: {.rule #GRD-017 grade="C"}
**Use geometric overlays of the layout grid in design review to check alignment and repeated proportion, not as evidence that a layout is good.** Elam's overlays are a strong way to see structure, and a weak way to prove it, because a geometry can be fitted after the fact [@elam2001geometry; @markowsky1992misconceptions].

*In LTF:* add a development-only overlay (a toggle on `/dev/components` or a query parameter) that draws the template's tracks and the measure over any page. Reviewers use it to check that card edges, rails and the reading column align; it never appears in production.
:::

::: {.rule #GRD-018 grade="B"}
**In any preference test of a layout, keep the question's wording neutral and fixed, and pair it with a performance measure.** Höge found that changing the verbal criterion changed the proportions people chose [@hoge1995fechner]; Ling and van Schaik found that people preferred the justified text that made them slower and less accurate [@ling2007influence]. Two independent lines of evidence show that preference is unstable and can diverge from performance.

*In LTF:* when two lesson layouts are compared, ask "which was easier to read?" for every variant (not "which is nicer?" for one and "which is clearer?" for another), and measure the same quiz items or time-to-find-a-step across variants.
:::

::: {.rule #GRD-019 grade="C"}
**When a claim says a design follows a proportion, state the measured value and the tolerance allowed.** Markowsky's analysis shows that golden-ratio claims stand or fall on tolerance and on where measurement starts, which overlays conceal [@markowsky1992misconceptions].

*In LTF:* any design note that says two regions are "in proportion" gives the actual widths at a stated viewport ("lesson column 668 px, rail 220 px at a 1280 px viewport") so a reviewer can check it.
:::

::: {.rule #GRD-020 grade="C"}
**Take from the classical page canons their method (margins, type area and measure set as one relationship), not their ratios.** Tschichold's canons tie the type area and margins to the page, and their specific ratios are disputed historically and designed for a fixed 2:3 page [@tschichold1991form]. A screen has no fixed proportion, so only the relational method transfers.

*In LTF:* the lesson column, its side margins and its measure are one decision, made in the chapter on margins and measure; no LTF page imports a print ratio such as 2:3 or 1:1:2:3 margins.
:::

### What this means for Learn to Fly

LTF does not currently claim the golden section anywhere in its code or copy, and it should keep it that way. The risk is future documentation, a redesign brief or a landing-page story that reaches for "harmonious proportions" to justify a layout; GRD-015 rules that out and asks for the functional reason instead.

The practical gap is media proportion. Only `YouTubeEmbed` declares a ratio (`aspect-video`). Lesson images, widget canvases and the landing's `Card` panels take whatever height their content produces, which is fine for text and wrong for figures, because figures that load late shift the page and figures of arbitrary shape do not line up from lesson to lesson. Choose three ratios with stated reasons, give `LessonRenderer`'s image block and `WidgetFrame` a required ratio prop, and replace the widget loading `Skeleton h-72` with a skeleton of the declared ratio, so that the loading state occupies the same space as the loaded widget. Build the review overlay under GRD-017, which costs little and turns "does this line up?" from an argument into a look.

## Margins, measure and the reading frame

The reading frame is the relationship between three numbers: the width of the text column, the margins around it, and the measure (characters per line) that the column produces at a given type size. Print traditions set all three together for a fixed page. On a screen the page width varies continuously, so the relationship has to be stated as a rule: which of the three is held constant, and which absorbs the change.

### What margins do

The experimental evidence on margins is thin but consistent. Chaparro and colleagues built four layouts of online text by crossing two kinds of space, margins around the text block and leading between lines. Margins improved both reading speed and comprehension compared with a version without margins, and readers generally preferred text with margins; leading changed preference but not measured performance [@chaparro2004reading]. A follow-up from the same group compared text with and without an enhanced layout (headers, indentation, figure placement) and found no change in speed or comprehension, but higher satisfaction and less reported fatigue with the enhanced layout [@chaparro2004reading]. The record that could be read gives only the abstracts, so the margin widths, sample sizes and effect sizes are unknown here.

McMullin and colleagues found that undergraduates comprehended web text better when it was surrounded by whitespace than when it was surrounded by meaningless information [@mcmullin2002effects]. That comparison is closer to clutter against no clutter than to wide margins against narrow ones, and it is taken up in the chapter on density. Together the two studies support a modest claim: structural space around a block of text, and distance from competing material, help comprehension. They do not show that more space always helps.

Vignelli adds the craft view of what margins are for: they should be "small enough to provide a certain tension between the edges of the page and the content" [@vignelli2010canon]. Margins are not padding to be maximized. They frame the text, and a frame that is too wide makes the content float, just as one that is too narrow makes it crowd the edge. On a phone the edge is the device bezel, and a margin of at least 16 px is the usual floor for keeping text off it; on a desktop the margin is whatever the column leaves.

### The measure

Line length is covered in depth in Part III, Legibility and the Science of Reading; this section takes only what layout needs. Dyson's review of screen-reading studies identifies characters per line as the critical variable, rather than physical width, because type size, physical length and margin are easily confounded [@dyson2004physical]. Most studies found faster reading with longer lines, while readers preferred moderate lengths: in one study of six line lengths from 25 to 100 characters, the longest line was read fastest but the 55-character line was rated easiest, and another found 55 characters per line produced better comprehension than 100 [@dyson2004physical]. Dyson notes that no upper limit on characters per line has been identified for speed, and that the studies used small samples on old screens. McMullin's group found no effect of line length on comprehension in the range they tested [@mcmullin2002effects], a null result that is limited to that range and sample.

For layout the consequence is direct. Because the variable that matters is characters, the measure should be set in a unit that follows the type: `ch` or `em`, not pixels. Marcotte made the same move for whole pages, setting a maximum width in ems so that the layout scales with the text [@marcotte2009fluid]. A pixel-capped column produces a different measure at every type size, including when the learner enlarges text.

Dyson's review also bears on columns. A single column of about 80 characters per line, paged, was read faster than three columns of about 25 characters or the same column scrolled, with no comprehension difference, though the advantage held only for the 18 to 24 age group in an 18-person study [@dyson2004physical]. Short multi-column text gains nothing on screen and costs a reader who must find the top of each column. Prose belongs in one column; multiple columns are for collections of separate items.

### Alignment of the text block

Left-aligned, ragged-right text is the default of the Swiss tradition Ruder taught, which favored asymmetric layouts on a grid [@ruder1967typography]. One experiment supports it on screen: in a visual search task, left-aligned text outperformed justified text, even though participants preferred justified [@ling2007influence]. The task was scanning, not reading, and the full paper could not be read, but the result agrees with a separate and widely repeated craft argument: justification on narrow screen columns produces uneven word spacing [@ling2007influence; @ruder1967typography].

### Holding the measure while the screen changes

The classical method holds the relationship, and on a screen that means choosing which value is fixed. For reading pages the measure should be the constant: the text column is capped at the measure, and the margins absorb every additional pixel. That is the Tschichold lesson in screen form: proportion by relationship, with the type area set by the text, not by the window [@tschichold1991form]. When rails appear beside the column, they should take space from the margins, not from the measure.

LTF's lesson page does the reverse, and its arithmetic shows it. `LessonPage` sits in Tailwind's `max-w-7xl` (1280 px) with `px-4`, and the `article` is capped at `max-w-[800px]` in pixels. Below the `lg` breakpoint the article is a single column up to 800 px wide. From `lg` (1024 px) the left rail (220 px) and a `gap-10` (40 px) appear, leaving a track of 732 px at a 1024 px window, growing to the 800 px cap near 1100 px. At `xl` (1280 px) the right glossary rail (280 px) and a second gap appear, and the outer container stops growing, so the center track drops to 1248 − 220 − 280 − 80 = 668 px and stays there at every wider window. The reading column is widest just below 1280 px and loses about a sixth of its width at 1280. A learner who resizes a window across that point sees every paragraph rewrap. And because the article has no `mx-auto`, below `lg` the column sits at the left of the container with an empty band to its right on windows between about 830 and 1023 px.

The measure itself is also different from the one the design system defines. `container-measure` is `68ch` and is used by `Prose` at 18 px (`body-lg`) on the About, Disclaimer, Privacy and Terms pages, and by the `PageHeader` description. Lessons use `MarkdownContent` at 16 px inside the 800 px pixel cap, which by an unmeasured estimate gives roughly 90 to 100 characters per line at the widest point. The pages learners read most have the longest lines, and the pages they read least use the token.

::: {.rule #GRD-021 grade="C"}
**For each template, decide the column width, the margins and the measure as one relationship, and state which value is held constant as the window changes.** Classical page construction sets type area and margins together [@tschichold1991form]; Vignelli sets margins first and derives columns from them [@vignelli2010canon]. On screens the window varies, so the relationship must be a rule, not a drawing.

*In LTF:* for the reading template (lessons, `Prose` pages, the challenge `BriefTab`), the measure is constant and margins absorb the rest. For collection templates (`ChallengesPage`, airports, resources), the page width `container-page` is constant and tracks absorb the change. For `FlyModeLayout`, the viewport is the frame (see the chapter on layout beside the simulator).
:::

::: {.rule #GRD-022 grade="B"}
**Keep a side margin of at least 16 px on phones, and on wider screens cap the content and let the margins grow rather than the text column.** Margins improved reading speed and comprehension over no-margin text in a small usability experiment [@chaparro2004reading], and comprehension was better when text was surrounded by space than by unrelated material [@mcmullin2002effects]. The grade is B because both studies are small, known here by their abstracts, and silent on how wide the margin should be.

*In LTF:* the 16 px phone gutter (`px-4` on `PageContainer`, `LessonPage`, `Header` and `FlyModeLayout`) is correct and should be a named layout token rather than repeated `px-4`. On desktop, the lesson article should stop at the measure and leave the rest to margin and rails.
:::

::: {.rule #GRD-023 grade="B"}
**Cap every prose column with a character-based measure token, never a pixel width.** Characters per line, not physical length, is the variable that predicts reading [@dyson2004physical], and widths set in type-relative units keep their proportions when type size changes [@marcotte2009fluid]. The appropriate range of characters is set in Part III, Legibility and the Science of Reading; this rule concerns the unit.

*In LTF:* replace `max-w-[800px]` on the `LessonPage` `article` with the measure token for lesson prose (`max-w-measure`, or a lesson-specific measure in `ch` if the lesson body stays at 16 px), and apply it to `MarkdownContent` paragraphs and lists. Wide blocks follow GRD-028.
:::

::: {.rule #GRD-024 grade="C"}
**Keep the reading column's width the same when side rails appear or disappear; rails take space from the margins, not the measure.** If the measure is the constant (GRD-021), a breakpoint that changes it is a defect; a learner who resizes the window across it sees every line rewrap [@tschichold1991form; @marcotte2009fluid].

*In LTF:* the lesson center track changes from up to 800 px at `lg` to 668 px at `xl`. Set the center track to the measure and widen the outer container (or let the glossary rail appear only when there is room for it beside a full measure) so the column width holds at every breakpoint.
:::

::: {.rule #GRD-025 grade="B"}
**Set prose in a single column at every width; reserve multiple columns for collections of separate items.** In the studies Dyson reviewed, a single long column was read faster than three short ones with no comprehension cost, and short lines reduced the information taken in per fixation [@dyson2004physical]. The evidence is a few small studies, hence B.

*In LTF:* lessons, the challenge brief, the module page and the `Prose` pages are single-column now and should stay so; the two-column `md:grid-cols-2` landing Questions list is a collection of separate items and is acceptable.
:::

::: {.rule #GRD-026 grade="B"}
**Set all body text flush left and ragged right; do not justify text and do not offer justification as an option.** Left-aligned text outperformed justified text in a visual search experiment, although participants preferred justified [@ling2007influence]; the Swiss tradition Ruder taught favored the same alignment [@ruder1967typography]. The task tested was scanning, so the grade is B.

*In LTF:* no component justifies text today; keep `text-align` at its default in `MarkdownContent` and `Prose`, and do not center multi-line body text (the reference hub's centered header is a single heading and is acceptable).
:::

::: {.rule #GRD-027 grade="C"}
**Anchor the reading column the same way on every reading page: either centered in the free space or aligned to a fixed left line shared with the header.** Consistent placement across a series is the grid's central practical claim [@mullerbrockmann1981grid]. A column that sits centered on one page and left-aligned with an empty band on the next makes the series look unrelated.

*In LTF:* below `lg`, the lesson `article` has no `mx-auto` and sits at the container's left with empty space to its right, while `PageContainer narrow` pages center their 768 px column. Choose one anchoring rule for the reading template and apply it to lessons, module, challenge and `Prose` pages alike.
:::

::: {.rule #GRD-028 grade="C"}
**Allow tables, widgets and figures to exceed the prose measure only up to one defined "wide" width, and never let prose run at that width.** Vignelli's grids give type and image modules a shared structure, with images following their own proportions [@vignelli2010canon]; Gerstner's programme accepts items of different sizes within one set of rules [@gerstner2007designing]. A single wide width keeps oversized blocks aligned with each other.

*In LTF:* define `container-wide` (wider than the measure, within the center track) for `WidgetFrame`, lesson tables in `MarkdownContent`'s scroll region and two-image comparisons. A widget is then wider than the paragraph above it in a predictable way, not by whatever the 800 px cap allows.
:::

### What this means for Learn to Fly

Keep the 16 px phone gutter and the single-column structure of every reading page. Keep `container-measure` as the token for prose; it is the right kind of value. Change the lesson page so that the measure, not the pixel cap, sets the article width: lesson paragraphs get a character-based cap, wide blocks get a `container-wide` width, and the center grid track is sized so that neither changes when the `xl` glossary rail appears. The simplest implementation is to make the center track `minmax(0, <wide width>)`, put prose children under the measure, and let the outer container grow past `max-w-7xl` or drop the right rail where it would squeeze the column.

Then reconcile the two lesson-like reading experiences. `Prose` (18 px, 68ch) and `MarkdownContent` (16 px, 800 px) are two answers to one question; the type size is a Part IV decision, but the measure should be the same kind of token in both, and the anchoring of the column (centered or left line) should be the same on lessons, modules, challenges and static pages. Run every reading template through the overlay from GRD-017 at 375, 768, 1024, 1279, 1280 and 1600 px to confirm the column holds.

## Space as grouping

Space on a page is not empty. Every gap tells the reader whether the things on either side belong together. This is the one part of layout with strong experimental support, because it rests on a century of research on perceptual grouping, and it is where most of a product's visual coherence is won or lost.

### Proximity and how much difference a gap needs

Wertheimer's founding demonstrations of grouping used rows of dots with alternating small and large gaps (3 mm and 12 mm in the translation), and observers saw pairs separated by the large gaps rather than single dots [@wertheimer1923untersuchungen]. He described grouping as already present in what we see, not assembled afterward, and he treated each factor as a matter of degree, with factors that can compete. Modern work has put numbers on the effect. In dot-lattice studies reviewed by Wagemans and colleagues, when the ratio of the two competing distances exceeds about 1.5, grouping along the longer distance is almost never seen; grouping strength falls on a single function of relative distance, and proximity and similarity combine additively [@wagemans2012century]. The same review warns that effect sizes in controlled studies are more modest than textbook demonstrations suggest, and that the classic laws are strong defaults, not guarantees [@wagemans2012century].

For layout the numbers give a working heuristic. A gap separates two groups only when it is clearly larger than the gaps inside them, and "clearly" begins around half as large again. Spacing systems that use near-equal steps for inner and outer gaps (12 px inside a card, 16 px between cards) produce ambiguous pages, because the reader cannot tell from space alone where one group ends. The dot-lattice ratio was measured on dots, not on paragraphs and buttons, so it is a floor to design above, not a precise threshold.

Robin Williams made proximity the first of the four principles in her guide for non-designers, ahead of alignment, repetition and contrast: related items are grouped, unrelated ones separated [@williams2014nondesigners]. The book presents no data, but its principles overlap with the grouping research, and its vocabulary is useful because it gives engineers and content authors names for what they see.

### Common region: the card

Palmer identified common region as a grouping principle in its own right: elements inside the same bounded region are seen as a group, and the effect can overcome proximity and similarity [@palmer1992common]. Three further findings from the same work matter for interface design. The effect depends on the region being perceived as a surface behind the elements, so an outline that does not read as a surface weakens it. When regions are nested, the smallest enclosing region dominates. And regions can follow a hierarchical embedding scheme, so groups can sit inside larger groups [@palmer1992common]. Common region is now listed among the established grouping principles, with response-time measures giving objective support [@wagemans2012century].

Common region is the principle behind every card, panel and tinted box. It is cheap and strong, and both properties make it easy to misuse. Because it beats proximity, an element placed inside the wrong box is read as part of it. Because it depends on perceived depth, a faint border or a tint that barely differs from the page (a particular risk in dark themes) removes the cue. And because the smallest region dominates, a box inside a box inside a box asks the reader to resolve three levels of membership for every element.

There is a subtler cost. A boundary is information only if it is selective. When every section, banner, quiz, widget, callout and navigation link sits in its own bordered rectangle, enclosure stops distinguishing anything and becomes texture. The dossier of LTF's interface records exactly that pattern as one of its most generic traits: `rounded-lg` bordered surface cards with a soft shadow appear in lessons, challenge lists, airports, checklists, dashboard tiles, quiz blocks, widget frames and resource cards.

### Grouping by task: proximity compatibility

Grouping should follow how information is used. Wickens and Carswell's proximity compatibility principle states that displays relevant to a common task or mental operation should be rendered close together in perceptual space [@wickens1995proximity]. Display proximity includes spatial closeness, shared color and shared object boundaries. The principle has a second half that is easy to forget: close display proximity helps integration but can hurt focused attention, because the reader must pull one value out of a bundle. Information that must be combined belongs together; information that must be read in isolation belongs apart [@wickens1995proximity]. The evidence is a theoretical integration of laboratory studies in aviation, graphs and display layout, which is why it carries weight for a product that teaches instrument reading. Which instruments or values belong together in flight is aircraft knowledge that must come from approved sources, not from this principle.

### The whitespace between groups

Chaparro's group found that margins mattered for comprehension while leading did not change measured reading performance [@chaparro2004reading]. Combined with the grouping research, that suggests a priority: space should separate groups (instruction, explanation, question) more than it separates lines. A page that adds space everywhere grows longer without becoming clearer; a page that concentrates space at group boundaries gets the benefit at less cost. Vignelli's advice that gutters be "rather tight, ideally the size of a line of type" points the same way: tight inside the system, so that the larger gaps carry meaning [@vignelli2010canon].

### Spacing roles in LTF

The lesson page's block headings are already well grouped by space: `MarkdownContent` gives block `h2`s `mt-12 mb-3`, 48 px above and 12 px below, a ratio of four, so each heading clearly belongs to what follows. Paragraphs use `my-3`. `PageHeader` places the eyebrow 6 px (`gap-1.5`) above the title, which binds them tightly, and closes the header with `pb-6` and `mb-12`. Those are good decisions, but they are local ones. Across components the inner and outer gaps are close: `Card` bodies use `px-5 sm:px-6` padding, the challenge card grid uses `gap-4` between cards with `p-4` inside them, and the curriculum's module rows sit in `p-2` lists. Where inner padding and outer gap are equal (16 and 16 on `ChallengesPage`), the cards are grouped only by their borders, not by space, so the borders must do all the work.

::: {.rule #GRD-029 grade="A"}
**Make the gap between groups visibly larger than any gap inside them: at least about one and a half times, and preferably double.** Grouping by proximity is among the best-replicated findings in perception; in dot-lattice studies, once the ratio of competing distances exceeds about 1.5, grouping along the longer distance is almost never seen [@wertheimer1923untersuchungen; @wagemans2012century]. The principle is grade A; the specific ratio is transferred from dot stimuli to interface elements and should be treated as a floor, not a threshold.

*In LTF:* on `ChallengesPage` the card grid's `gap-4` equals the cards' `p-4`; raise the gap to `gap-6` or `gap-8`. Audit `PageHeader`, `Card`, `Callout` (`gap-3` inside, block margins outside) and `QuizBlock` with the same test: the outer step must be at least half again the inner step.
:::

::: {.rule #GRD-030 grade="C"}
**Give each spacing step a named role (inside a control, inside a group, between groups, between sections) and use the role, not the number, in components.** Williams teaches proximity as encoding relatedness by distance, and Vignelli keeps inner gaps tight so that larger gaps carry meaning [@williams2014nondesigners; @vignelli2010canon]. Roles make the encoding consistent across components written by different people.

*In LTF:* map roles to existing tokens, for example `space-2` inside a control group, `space-3` or `space-4` inside a card, `space-6` or `space-8` between cards and blocks, `space-12` before a section heading, `space-16` and `space-24` between landing bands. Publish the mapping with the layout key from GRD-006.
:::

::: {.rule #GRD-031 grade="B"}
**Draw a boundary (card, panel or tinted region) only around things that belong together, and never let a boundary split a group or join unrelated items.** Common region groups strongly enough to override proximity and similarity, so a misplaced boundary misleads [@palmer1992common; @wagemans2012century]. The grade is B because the perceptual principle is well replicated but its transfer to interface cards is indirect.

*In LTF:* a widget and its caption and "Describe this diagram" text belong inside one `WidgetFrame`; a quiz's prompt, options, "Check answer" and result belong inside one `QuizBlock`. The objectives box, resume bar and `SignupBanner` are three unrelated things and should not look like siblings in one stack of boxes.
:::

::: {.rule #GRD-032 grade="B"}
**Make every boundary that carries grouping meaning read as a surface in both themes.** Common region depends on the region being seen as a surface behind its contents; an outline that does not read that way weakens the grouping [@palmer1992common]. The specific contrast needed for a card edge is not set by the grouping research; check it visually in Day and Night.

*In LTF:* in Night, elevation is a lighter surface plus a 1 px `line` ring (`shadow-1`), with `surface` one step above `canvas`. Check `Card`, `QuizBlock`, `WidgetFrame` and the challenge cards at Night on a dim display; if the card edge disappears, the grouping has to be carried by space (GRD-029) instead.
:::

::: {.rule #GRD-033 grade="C"}
**Use at most one level of enclosure inside a page section; group items within a card by space and type, not by another box.** When regions nest, the smallest enclosing region dominates, and each level adds a membership judgment for the reader [@palmer1992common]. Selective enclosure keeps boundaries informative.

*In LTF:* the landing Module 0 `Card` contains a `LessonPath` whose current stop has its own halo and button; the curriculum renders each module as a bordered `details` card containing bordered link rows. Remove the inner borders where space and dividers would do, and keep one boxed level per section.
:::

::: {.rule #GRD-034 grade="C"}
**Make proximity, enclosure, color and type style agree about what belongs together; never let two cues disagree.** Wertheimer showed that grouping factors compete and that their result is a matter of degree; when cues conflict, the grouping is ambiguous [@wertheimer1923untersuchungen]. Proximity and similarity add when they agree [@wagemans2012century].

*In LTF:* a common conflict is a heading spaced equally between the previous card and the next, or an eyebrow closer to the element above it than to its own heading. Check `PageHeader` usage inside landing sections and the `eyebrow` sub-heads "Lessons" and "Challenges" in `CurriculumMap` for this.
:::

::: {.rule #GRD-035 grade="B"}
**Place information that must be used together in one place, and separate information that must be read on its own.** The proximity compatibility principle, supported by laboratory studies in aviation and graph reading, pairs close task proximity with close display proximity and warns that bundling hurts focused attention on a single value [@wickens1995proximity].

*In LTF:* in the challenge `FlyPanel`, a step and its checkbox are used together; the stopwatch is read on its own and should stand apart. On `SpeedsPage`, a value and its unit are one reading; the sticky `KeyNumbers` panel separates the few values read at a glance from the full table. Which values belong together in flight comes from verified content, not from layout.
:::

::: {.rule #GRD-036 grade="C"}
**Place each prompt, label or heading closer to the content it governs than to anything else.** This is proximity applied to labeling, and Williams makes it the first principle a non-designer should learn [@williams2014nondesigners; @wertheimer1923untersuchungen]. Part XI, Forms, Onboarding and Touch covers labels in forms.

*In LTF:* in `QuizBlock`, the prompt should sit closer to its options than to the "Quick check" label above it; in `BriefTab`, each `text-2xl` heading needs more space above than below; in `FormField`, the hint sits between label and input and must not drift closer to the next field.
:::

::: {.rule #GRD-037 grade="C"}
**Back any grouping that carries safety-relevant meaning with a second cue beyond spacing.** Grouping laws are strong defaults whose controlled effect sizes are modest and can be overridden [@wagemans2012century], so a single cue can fail on a small screen or at a glance.

*In LTF:* a checklist item and its response, or a speed and its unit and label, should share a row, a type treatment and a region, not only a gap. The `safety` `Callout` beside a procedure belongs next to the step it qualifies, inside the same section.
:::

::: {.rule #GRD-038 grade="C"}
**Review any new screen with the four named principles (proximity, alignment, repetition, contrast) before it ships.** Williams's scheme is a craft guide without data, but it overlaps the grouping research and gives non-designers a shared vocabulary [@williams2014nondesigners]. It does not cover information architecture or interaction, so it is a first pass, not a complete review.

*In LTF:* add the four questions to the PR checklist that `/ltf-review` applies to client changes, phrased for this product: does space show the groups, do edges line up with the template, is the same card pattern used for the same kind of item, and does exactly one thing on the screen have the strongest contrast.
:::

### What this means for Learn to Fly

Keep the lesson block heading spacing (`mt-12 mb-3`), the tight eyebrow-to-title binding in `PageHeader`, and `Card`'s stated rule that state is carried by badge, eyebrow and fill rather than a colored left border. Change the relationship between inner padding and outer gaps wherever they are equal, starting with the challenge card grid. Assign named spacing roles and use them in every component.

The bigger change is to make enclosure selective. A lesson page today can stack an `UnverifiedWarning`, a `SignupBanner`, a resume bar, an objectives `Card`, quiz cards, widget frames, `FlyIt` challenge cards, `GoDeeper` resource cards, a completion panel and prev/next cards, each a bordered or tinted region. Decide which of these are groups a learner needs to see as units (quiz, widget, objectives) and render the rest (resource links, prev/next, the signup prompt) with space, dividers and type instead of boxes. The landing page and curriculum have the same issue at a larger scale. Fewer boxes will make the boxes that remain mean something, and will remove one of the clearest signs that the interface was assembled from a component kit.

## Density and clutter

How much should a screen hold? Two traditions give opposite answers. Tufte argues that a well-organized page can carry far more information than designers dare to give it; the whitespace literature argues that clutter near text harms comprehension. Both are right about different tasks, and the practical answer is a density budget that differs by page type and is spent on organization rather than on emptiness or ornament.

### Clutter is measurable, roughly

Rosenholtz, Li and Nakano treated visual clutter as a stand-in for set size, the number of items competing for attention, in displays where items cannot be counted [@rosenholtz2007measuring]. They proposed and tested computable measures. Feature Congestion extracts color, luminance and orientation features and combines their local variability into one value; Subband Entropy grew from the observation that compressed file size correlated highly with Feature Congestion, so clutter relates to how much visual information a display contains; Edge Density, borrowed from earlier work, is the proportion of edges in the image. The authors report that color variability matters for clutter, and that it is captured by Feature Congestion but not by the other two measures [@rosenholtz2007measuring].

The measures generalize imperfectly. A 2014 comparison by Yu, Samaras and Zelinsky, known here through the lane notes on this paper, attributes to the earlier 2005 study correlations with search time on map stimuli of r = 0.75 for Feature Congestion against 0.83 for edge density, and for targets defined by contrast threshold 0.93 against 0.83 [@rosenholtz2007measuring]. Later studies found Feature Congestion no better than edge density, and on 90 real-world scenes it ranked below edge density and newer proto-object methods; the best of those correlated with a median human ranking at rho = 0.814, while human observers agreed with each other at only rho = 0.692 [@rosenholtz2007measuring]. Clutter is a real and partly measurable construct, no single index is settled, and none was validated on user interfaces or instrument panels. A clutter score can flag a screen that is far busier than its siblings. It cannot say whether a screen passes.

### Clutter near text

McMullin and colleagues compared text surrounded by whitespace with text surrounded by "meaningless information" and found better comprehension with whitespace; line length had no effect in the tested range [@mcmullin2002effects]. The participants were undergraduates and the full results were not available here. The most defensible reading is about proximity of irrelevant material to the text being read rather than about emptiness as such. LTF carries no advertising, but it has its own candidates for meaningless surroundings: promotional prompts, progress banners, streak or badge displays and "next" teasers, any of which can sit beside or between the paragraphs a learner is reading.

::: myth
**"More whitespace always helps."** The experiments support margins around text and separation from irrelevant material [@chaparro2004reading; @mcmullin2002effects], not unlimited emptiness. An enhanced layout raised satisfaction without changing speed or comprehension [@chaparro2004reading]. Tufte's work shows that well-organized displays can carry high densities [@tufte1983visual]. Space spent at group boundaries clarifies; space spent everywhere only lengthens the page and pushes content below the point where attention falls away (see the chapter on where attention goes).
:::

### Density done well

Tufte's measures judge a display by how much of it carries information. The data-ink ratio is data-ink divided by the total ink used, or one minus the proportion of the graphic that can be erased without loss of data; data-ink is "the non-erasable core of a graphic," and chartjunk is ink "that does not tell the viewer anything new" [@tufte1983visual]. Data density is the number of entries in the data matrix divided by the graphic's area; an old course outline summarizing the book gives about 50 to 200 numbers per square inch for most scientific journals and about 110,000 for an astronomical graph, figures that illustrate the range rather than set benchmarks. Small multiples are sets of thumbnail graphics on one page, showing aspects of one phenomenon with the same measures and scale. The lie factor is the size of an effect shown in a graphic divided by its size in the data; area and volume encodings exaggerate differences [@tufte1983visual]. These definitions come from secondary summaries and should be checked against the book before being quoted as Tufte's own words.

The minimalist conclusion is less secure for teaching. Bateman and colleagues compared fourteen embellished charts by Nigel Holmes with plain versions carrying identical data, in a study of 20 students [@bateman2010useful]. Descriptions were as accurate for embellished charts, and the value message was described better (t(19) = 3.37, p = .003); recall after 12 to 22 days was significantly better for embellished charts on subject, categories, trend and value message, with ten participants in that condition [@bateman2010useful]. The authors did not recommend embellishment in general, and a later dual-task study by Borgo and colleagues, known only by its abstract, found embellishment helped memory but slowed visual search [@bateman2010useful]. The fair summary is that data-ink minimalism is a good default for displays read under workload and a contested one for graphics meant to be remembered weeks later.

### A budget by page type

The two traditions reconcile once the task is named. Reading a lesson is continuous attention to one text, and clutter near the text competes with it. Reviewing progress on a dashboard is a survey of many items, and density helps if the items are clustered. Using Fly mode is glancing between a simulator, itself a dense and cluttered visual field, and a second screen, where the second screen should be as quiet as possible by contrast. A density budget assigns each template a level and a structure: how many groups, how many items per group, how many colors.

::: {.rule #GRD-039 grade="C"}
**Set a density budget for each page template (number of groups, items per group, accent and status colors in view) and review pages against it.** Density that helps on a survey page hurts on a reading page; Tufte's case for density and the clutter research agree once the task is named [@tufte1983visual; @rosenholtz2007measuring]. The budget is a design convention; no study gives numbers for interfaces.

*In LTF:* reading pages (lessons, briefs): one main column, chrome at the edges, at most one accent element in view besides links. Collection pages (`ChallengesPage`, airports): many items in a regular grid, one card pattern. Dashboard and `SpeedsPage`: dense, in clusters. Fly mode: the sparsest template in the product.
:::

::: {.rule #GRD-040 grade="B"}
**Keep the reading column free of material unrelated to the text being read; put persistent and promotional elements at the edges or between sections, never between paragraphs.** Comprehension was better when web text was surrounded by whitespace than by meaningless information [@mcmullin2002effects]. One student study, known by its abstract, so B.

*In LTF:* the `SignupBanner` and resume bar sit above the objectives, which is acceptable; they must not move into the block stream. The `xl` glossary rail is related material and may sit beside the column; any future streak counter, badge, "next lesson" teaser or beta notice belongs at the edges or the end.
:::

::: {.rule #GRD-041 grade="B"}
**Limit the number of distinct saturated hues in one view, and reserve them for status and the single accent.** Color variability is a component of measured clutter, captured by Feature Congestion [@rosenholtz2007measuring]. The evidence that this predicts interface search is indirect, hence B.

*In LTF:* the palette's rule of one accent and status colors only is right. Watch the challenge cards, where `DifficultyDots`, type icons, tier badges (gold, silver, bronze), status badges and the accent hover can all appear on one card in a three-up grid; show the tier color only where a best result exists, and keep the rest neutral.
:::

::: {.rule #GRD-042 grade="C"}
**On dense pages, organize items into a few labeled clusters so that the eye searches clusters, not items.** Clutter stands in for set size in search [@rosenholtz2007measuring], and common region lets a cluster be treated as one unit [@palmer1992common].

*In LTF:* the dashboard already separates "Your progress", "Next up", "Stats" and "Recent attempts"; keep them as four clusters with headings and avoid adding a fifth loose tile. The reference hub's `ReferenceSections` rail is a good cluster structure; the "Most looked up" chips above it should be one bounded group.
:::

::: {.rule #GRD-043 grade="C"}
**In instrument widgets, erase decoration that carries no information, but keep the conventions of the real instrument that a learner must learn to recognize.** Tufte's data-ink principle removes non-data ink [@tufte1983visual]; a round gauge or a tape is also a learned convention, so fidelity to the real display can outweigh ink purity in a training product. The trade-off is a judgment, hence C.

*In LTF:* in `g1000-pfd`, the bezel and soft keys earn their place because learners must find them in the simulator; drop shadows, bevels and textures on the `Gauge` and `Tape` primitives do not. Which markings an instrument carries comes from verified sources, not from this rule.
:::

::: {.rule #GRD-044 grade="C"}
**To compare states of one display, show them as small multiples with identical scales and alignment.** Small multiples use the same measures and scale so differences are read directly [@tufte1983visual].

*In LTF:* when a lesson teaches what different readings of one instrument mean, render several `airspeed-indicator` or `turn-coordinator` states in a row from the same component at the same size, rather than one interactive widget the learner must reset between states. The `KeyNumbers` container-query grid is a ready pattern for the row.
:::

::: {.rule #GRD-045 grade="C"}
**Scale every progress bar, ring and bar chart linearly with the quantity it shows; never encode a quantity by area.** The lie factor measures how far a graphic exaggerates its data, and area encodings exaggerate [@tufte1983visual].

*In LTF:* `ProgressBar` and `ProgressRing` should map completion to length or arc length linearly from zero; the landing stats row and dashboard tiles show numbers as text, which is correct. Any future chart of practice time or scores starts its axis at zero.
:::

::: {.rule #GRD-046 grade="B"}
**Use an automated clutter measure only to flag screens much busier than their siblings for human review; never set a pass mark from it.** Computational clutter measures correlate with search difficulty on some stimuli but generalize weakly, were not validated on interfaces, and human clutter judgments agree only moderately [@rosenholtz2007measuring].

*In LTF:* an edge-density comparison of Playwright screenshots of each template (the e2e suite already renders pages) could flag a lesson that is far busier than the median lesson. The flag opens a design review; it does not fail CI.
:::

::: {.rule #GRD-047 grade="D"}
**Do not ban topic-relevant illustration from teaching graphics that learners should remember, but keep displays read under workload plain.** Embellished charts were described as accurately as plain ones and recalled better weeks later in one 20-person study [@bateman2010useful], against the data-ink default [@tufte1983visual]; a dual-task study found the memory gain came with slower search. The evidence conflicts and rests on small samples, so D.

*In LTF:* a lesson summary graphic may carry an illustration tied to its message; widgets, Fly mode and the reference speeds table stay plain. Test any embellishment with a delayed quiz before adopting it widely.
:::

### What this means for Learn to Fly

LTF's palette rules (near-neutral greys, one accent, status colors) are already a clutter control, and the reading column contains no unrelated widgets. Keep both. The density risk lies in three places. Lessons accumulate boxed elements above the first teaching block (warnings, signup prompt, resume bar, objectives, section select), which is clutter near the start of the text even if every item is relevant. Challenge cards in the three-up grid can carry many small colored signals at once. And the dashboard, which should be the densest page, is at risk of becoming a set of loose tiles rather than clusters.

Write a one-line density budget into each template's documentation, keep tier and status colors off cards that have nothing to report, and build the small-multiples pattern for instrument lessons from the existing `KeyNumbers` container-query grid. The screenshot-based clutter flag is optional and cheap; if it is built, it informs review and never gates a merge.

## Fluid and responsive layout

A printed grid is drawn once for a known page. A screen grid is drawn for every width between a small phone and a wide monitor, and for every text size a reader chooses. The web's answer, developed in two essays by Ethan Marcotte and now built into CSS, is to state a layout as proportions and conditions rather than as fixed measurements.

### Proportion instead of pixels

Marcotte's 2009 essay starts from exclusion: a layout built in fixed pixels assumes a minimum screen size and so shuts out some users [@marcotte2009fluid]. His remedy is a conversion that lets a designer keep a pixel-accurate comp and express it as proportions: "target ÷ context = result," where the target is the desired size, the context is the size of the containing element, and the result is a percentage or em value. Type converts the same way: with the body at the usual 16 px, a 24 px heading is 24 ÷ 16 = 1.5em and 14 px text is 0.875em [@marcotte2009fluid].

His worked example is a 988 px comp of seven 124 px columns with 20 px gutters. The page's maximum width becomes 988 ÷ 16 = 61.75em; a 700 px title becomes 70.85% of the page. For nested elements the context changes: inside an 844 px entry, the 700 px main copy is 700 ÷ 844 = 82.938%. "We need to redefine our context," he writes [@marcotte2009fluid]. He also listed the technique's problems: browsers rounded sub-pixel widths differently, and images were not fully solved.

The arithmetic is obsolete. CSS Grid's `fr` unit, "a fraction of the leftover space in the grid container," and `minmax()` give fluid tracks without division, and gaps are separate properties rather than subtracted percentages [@atkins2025css]. The reasoning is not obsolete. The proportion between columns is the design; the pixel value is one rendering of it. And the context of a nested component is its container, not the window.

### Responsive design and its three ingredients

The 2010 essay named the approach. "Fluid grids, flexible images, and media queries are the three technical ingredients for responsive web design," and "rather than quarantining our content into disparate, device-specific experiences, we can use media queries to progressively enhance our work within different viewing contexts" [@marcotte2010responsive]. Flexible images scale within their containers so they neither overflow narrow layouts nor become oversized. Media queries apply rules only when a device meets given conditions; Marcotte called them "conditional comments for the rest of us." His sample page linearized its major blocks below 600 px, went from three image columns to two below 400 px, and moved images into a single six-item row above 1300 px [@marcotte2010responsive].

Several details have aged. The device condition he used (`max-device-width`) gave way to viewport conditions, and current practice, by the lane's reading rather than the article's statement, prefers breakpoints chosen where the content stops fitting over breakpoints chosen for devices [@marcotte2010responsive]. Breakpoint design also produces discrete layouts with jumps between them. Intrinsic techniques, such as `repeat(auto-fit, minmax())` tracks and container queries, respond to available space continuously, and the Grid specification supports them directly [@atkins2025css]. The core claims hold: one layout that adapts, built from the narrow case up, with the content and core function working before enhancements arrive.

### Text size is part of the context

Marcotte's insistence on relative units for type has a second purpose beyond fluid columns: it lets the layout follow the reader's chosen text size [@marcotte2009fluid]. Learners using LTF beside a simulator may enlarge text to read it from a distance. A layout that holds its proportions only at the default size fails them.

LTF's root rule fixes the base: `index.css` sets `html { font-size: 16px; }`, and the type utilities (`display-xl` to `eyebrow`) specify their sizes and line heights in pixels. Browser zoom still scales everything, but a learner who has set a larger default text size in browser settings gets 16 px anyway. The spacing tokens are also in pixels while Tailwind's own spacing is `0.25rem` per step; with the root fixed at 16 px the two agree, and they would diverge if the root were freed. The `container-measure` token is in `ch`, which follows the font, and is the one layout value that already behaves the way Marcotte recommended.

### Breakpoints and containers in LTF

LTF uses Tailwind's default breakpoints (640, 768, 1024, 1280 and 1536 px). A grep this session counts `sm:` 73 times, `md:` 47, `lg:` 41, `xl:` 3 and `2xl:` none, so most adaptation happens at the small end, which suits a mobile-first build. The `xl` uses are the lesson page's third column and glossary placement; nothing changes above 1536 px, which is acceptable because the containers stop growing at 1200 or 1280 px. Container queries appear once, in `KeyNumbers`, which uses `@container` with a `repeat(auto-fit, minmax(...))` grid whose minimum track width comes from a `key-col` custom property so its tiles adapt to whatever width the panel is given, whether in the narrow `SpeedsPage` side column or a lesson. That component is the clearest example in the code of Marcotte's "redefine our context": it sizes itself from its container, not the viewport.

Elsewhere components assume the viewport. `ChallengesPage` switches from one to two to three cards at `sm` and `lg` regardless of whether the list has a sidebar; a challenge card placed inside a lesson's `FlyIt` section at a narrower width would use the same viewport breakpoints. Widgets inside `WidgetFrame` render in a `p-4` canvas whose width depends on the lesson column, which itself varies as described in the chapter on margins and measure.

::: {.rule #GRD-048 grade="C"}
**Express layouts as proportions and flexible tracks (`fr`, `minmax()`, percentages of the container), never as fixed pixel widths for regions that hold content.** Fixed layouts assume a minimum screen size and exclude users [@marcotte2009fluid]; CSS Grid provides fluid tracks natively [@atkins2025css]. Craft and standard, so C.

*In LTF:* the lesson rails' fixed `220px` and `280px` are acceptable as rails (their content is short), but bracketed fixed widths on content (`w-[640px]`, `w-[560px]`, `w-[460px]` with matching `max-w` caps) should become tracks or measure tokens.
:::

::: {.rule #GRD-049 grade="C"}
**Let the reader's default text size set the base: do not fix the root font size in pixels, and size type, measure and reading containers in `rem`, `em` or `ch`.** Relative units keep layouts proportional when text size changes, which Marcotte gave as a reason for fluid design [@marcotte2009fluid]. Learners reading beside a simulator are a plausible group who enlarge text.

*In LTF:* change `html { font-size: 16px }` in `index.css` to the browser default (100%), convert the type utilities and the spacing tokens to `rem`, and keep `container-measure` in `ch`. Then test every template at a 20 px default text size. This also touches Part IV, Typography on Screens, and Part XXV, Accessibility.
:::

::: {.rule #GRD-050 grade="C"}
**Place breakpoints where the content stops fitting, keep them few, and prefer intrinsic sizing that needs no breakpoint.** Responsive design adapts one layout to its context [@marcotte2010responsive]; `auto-fit` tracks and container queries respond to space continuously [@atkins2025css]. Content-based breakpoints are current practice rather than a finding.

*In LTF:* the lesson page's `xl` third column is a content breakpoint in disguise: the glossary rail should appear when the center track can hold a full measure beside it, which is a width the template can compute, not 1280 px by convention. Collection grids should use `auto-fit` (GRD-057) instead of `sm`/`lg` column counts.
:::

::: {.rule #GRD-051 grade="C"}
**Size every reusable component from its container, not from the viewport.** Marcotte's nested-context rule makes the parent the reference for a child's size [@marcotte2009fluid]; container queries and grid tracks implement it [@atkins2025css].

*In LTF:* follow the `KeyNumbers` pattern (`@container` plus an `auto-fit` grid) for challenge cards, `WidgetFrame` canvases, the `LessonPath`, the tier legend and the `DebriefForm` rubric, so each looks right in a lesson column, a side panel, the dashboard and Fly mode without page-specific overrides.
:::

::: {.rule #GRD-052 grade="C"}
**Make every image and media element scale within its container with a declared aspect ratio, so it never overflows and never shifts the page as it loads.** Flexible images are one of the three ingredients of responsive design [@marcotte2010responsive]; a declared ratio reserves the space before the image arrives.

*In LTF:* `YouTubeEmbed` does this with `aspect-video`. Add a ratio to the lesson image block (the Module 0 WebP screenshots) and to the widget loading state, which is a fixed `h-72` today and will jump when the widget renders at a different height.
:::

::: {.rule #GRD-053 grade="C"}
**Check every template at intermediate widths and at enlarged text sizes, not only at the widths it was designed at.** A fluid grid exposes every width [@marcotte2009fluid], and breakpoint designs hide their failures between breakpoints [@marcotte2010responsive].

*In LTF:* extend `e2e` with screenshots of each template at 320, 375, 600, 768, 1023, 1024, 1279, 1280 and 1600 px and at a 20 px default text size, and review the diffs when a layout changes. The 1279 to 1280 px lesson column change in the chapter on margins and measure is the kind of fault this finds.
:::

::: {.rule #GRD-054 grade="C"}
**Design and build each template from the narrowest layout up; wider layouts add structure to a complete narrow page.** Marcotte frames media queries as progressive enhancement across viewing contexts [@marcotte2010responsive]. LTF learners read on phones and keep a second screen beside the sim, so the narrow case is a primary case.

*In LTF:* the code is already mobile-first in style (most adaptations are `sm:` and `md:`). Keep it so, and make the narrow lesson layout (with `MobileSectionSelect` sticky at `top-16`) the reference design, not the reduction of the three-column one.
:::

::: {.rule #GRD-055 grade="C"}
**Make the core lesson text, checklists and challenge steps readable and usable before, and without, any widget or enhancement code.** Responsive design progressively enhances a working base [@marcotte2010responsive].

*In LTF:* widgets are lazy chunks with a `Skeleton` and an error boundary, which is right; ensure every widget block has adjacent text that carries the lesson's point (the "Describe this diagram" `details` is a start), and that checklists render as plain lists if their interactive layer fails.
:::

### What this means for Learn to Fly

LTF is mobile-first in its class usage and has one excellent container-aware component in `KeyNumbers`. Keep both, and use `KeyNumbers` as the template for making other components container-aware. The most consequential change is small in code and large in effect: free the root font size and move type, spacing and reading widths to relative units, so that a learner's text-size preference reaches the layout. That change needs a full visual pass, which the screenshot matrix in GRD-053 provides.

Second, move collection grids to intrinsic `auto-fit` tracks and make the lesson's right rail conditional on space rather than on the `xl` breakpoint. Third, give every image and widget a declared ratio, so that loading states and loaded states occupy the same box. None of this requires a new visual language; it makes the existing one hold at the widths and sizes learners actually use.

## CSS Grid and the page shell

The typographic grid finally has a native implementation. The CSS Grid Layout specification defines "a two-dimensional grid-based layout system, optimized for user interface design," in which items are placed into fixed or flexible slots of a predefined grid [@atkins2025css]. For a product team it is the most authoritative source in this Part on what the platform does, with the caveat that the edition read is a Candidate Recommendation Draft that "may change at any time," and that the specification says nothing about which browsers support which features.

### The model

A grid container (`display: grid`) "establishes an independent grid formatting context for its contents." Grid lines divide it and can be referenced by number or by author-defined name; a track is "a generic term for a grid column or grid row"; a cell is the intersection of one row and one column; a grid area holds one or more items and can be named with `grid-template-areas` [@atkins2025css]. The `fr` unit is "a fraction of the leftover space in the grid container." `minmax(min, max)` bounds a track's size. Inside `repeat()`, `auto-fill` creates as many tracks as fit and keeps empty ones, while `auto-fit` collapses empty repeated tracks to zero, so the filled tracks stretch [@atkins2025css].

Track sizing runs in five steps (initialize sizes, resolve intrinsic sizes, maximize tracks, expand flexible tracks, expand stretched auto tracks), and each track carries a base size and a growth limit. Intrinsic keywords (`min-content`, `max-content`, `auto`, `fit-content()`) let content size the tracks. Gaps are treated as extra empty fixed tracks during sizing and appear only between tracks, never before the first or after the last [@atkins2025css]. Level 2 adds subgrid, by which nested grids "participate in the sizing of their parent grids" and adopt the parent's lines, so that content inside a card can align with content in neighboring cards [@atkins2025css].

The specification also places grid against flexbox. Flexbox is single-axis and "focuses on space distribution within an axis," working bottom-up from the items; grid "enforces 2-dimensional alignment, uses a top-down approach to layout, allows explicit overlapping of items" [@atkins2025css]. That is Gerstner's distinction in code: a grid is a programme decided before the content arrives, while a flex row arranges whatever it is given.

### Visual order and source order

The specification's strongest warning concerns order. Placement properties can rearrange content visually, but they are "not a substitute for correct source ordering"; "grid placement only affects the visual presentation," and "with great power comes great responsibility" [@atkins2025css]. Source order is what speech output, sequential keyboard navigation and non-CSS user agents follow. `grid-auto-flow: dense` lets auto-placement backfill earlier holes, "which can reorder items visually" [@atkins2025css]. In a product where order often is meaning (a checklist, a procedure, a lesson sequence), visual reordering is a correctness risk, not a styling choice.

LTF has one instance worth examining. The landing stats row is a `dl` in which each stat's label comes first in the source and its value is moved before it visually with `order-first`. The term-then-description order is the correct one for a definition list and is what a screen reader announces; the visual reversal changes nothing that a keyboard user meets, since the items are not focusable. Reordering inside one item, where neither order changes the meaning, is the defensible case. Reordering between items is not.

### How LTF uses grid today

The code already follows several of the specification's best practices. Text tracks use a zero minimum: the lesson shell's `minmax(0,1fr)`, the landing hero's `minmax(0,7fr)_minmax(0,5fr)` and the dashboard's `minmax(0,2fr)_minmax(0,1fr)` all prevent long words, code or tables from forcing a track wider than its share, and the lesson `article` adds `min-w-0`. `Callout` uses a small two-track grid (`grid-cols-[20px_1fr]`) to hang its icon outside the text, a typographic detail grid makes easy. The challenge brief's sim-setup `dl` uses `sm:grid-cols-[12rem_1fr]` so labels and values align in two columns.

What it does not use is just as clear: no `grid-template-areas`, no named lines, no `subgrid`, and only one `auto-fit` (in `KeyNumbers`). Every multi-column collection is a fixed count per breakpoint. Two consequences are visible in the code. On `ChallengesPage`, the filter card's five `Select`s sit in `sm:grid-cols-2 lg:grid-cols-5`, so between 640 and 1023 px they fall into rows of two, two and one, leaving the fifth control alone. And the challenge cards in the three-up grid have titles of different lengths, so their meta rows (`DifficultyDots`, minutes, ICAO, badges) start at different heights from card to card; the row of cards has aligned outer edges but misaligned contents.

::: {.rule #GRD-056 grade="C"}
**Use CSS Grid for two-dimensional regions and flexbox for single-axis rows.** The specification itself contrasts grid's top-down two-dimensional alignment with flexbox's within-axis distribution [@atkins2025css]. A standard's description of its own purpose, so C.

*In LTF:* page shells, card collections, the dashboard, form layouts and the challenge brief's label-value lists are grids; button groups, the `Header` nav, meta rows, badge rows and the `ThemeToggle` are flex rows. The current code mostly follows this; keep it as the rule.
:::

::: {.rule #GRD-057 grade="C"}
**Lay out collections of like items with `repeat(auto-fit, minmax(<minimum card width>, 1fr))` instead of fixed column counts per breakpoint.** `auto-fit` creates as many tracks as fit and collapses empty ones, so the column count follows the space [@atkins2025css]. Set the minimum from the card's content, wrapped in `min(100%, …)` so a single card never overflows a narrow screen.

*In LTF:* convert the `ChallengesPage` card grid, the airports grid, the resources list, the landing "What you need" row and the dashboard stats tiles to this pattern, using the `KeyNumbers` grid as the model.
:::

::: {.rule #GRD-058 grade="C"}
**Implement each named page template as one grid with named areas, in one layout component.** Named areas make the template readable in code and mirror the design grid [@atkins2025css]; one component per template is how the programme of GRD-002 becomes enforceable [@gerstner2007designing].

*In LTF:* the lesson shell (`nav`, `main`, `aside` areas), the reference section layout (rail and panel), the dashboard (progress, next, stats, recent) and Fly mode should each be a layout component with `grid-template-areas`, replacing the inline class strings in `LessonPage`, `ReferenceSections` and `DashboardPage`.
:::

::: {.rule #GRD-059 grade="C"}
**Never use grid placement, `order` or `dense` packing to make visual order differ from source order between items; allow reordering only inside a single item where neither order changes the meaning.** The specification warns that placement is "not a substitute for correct source ordering" and that dense packing reorders items visually [@atkins2025css]. Order is meaning in checklists and procedures.

*In LTF:* the landing stats `order-first` (value shown before its label within one `dl` item) is acceptable. A `FlyPanel` step list, a `checklist` block, the `LessonPath` and the curriculum order must render in source order at every width, and no collection grid uses `grid-auto-flow: dense`.
:::

::: {.rule #GRD-060 grade="C"}
**Use subgrid to align the internal rows (title, meta, body, action) of cards that sit side by side, with a fallback that still reads correctly.** Subgrid lets nested grids adopt their parent's lines so content aligns across siblings [@atkins2025css]. Check current browser support before relying on it; the specification does not cover support.

*In LTF:* give challenge cards, airport cards and the landing's three "What you need" cards a shared row template (`grid-template-rows: subgrid` across title, meta and footer) so meta rows and actions line up across a row. Without subgrid support the cards fall back to their current stacked layout.
:::

::: {.rule #GRD-061 grade="C"}
**Set gaps with spacing tokens and let text size its own tracks; never give a text container a fixed height.** Gaps are sizing tracks in their own right, and intrinsic keywords let content set track size [@atkins2025css]. Fixed heights clip text when it wraps, is translated or is enlarged.

*In LTF:* `gap-*` classes already come from the 4 px scale; apply the spacing roles from GRD-030. Audit for fixed `h-*` on elements that contain text (stat tiles, card headers, badges in the `Badge` `h-6` and tier `h-7` cases, which are single-line by design and should truncate or wrap deliberately).
:::

::: {.rule #GRD-062 grade="C"}
**Give every track that holds text a zero minimum (`minmax(0, …)` or `min-width: 0` on the item).** Grid items default to a minimum of their content size, so a long word, code span or table can push a track past its share; the intrinsic sizing steps of the algorithm make this explicit [@atkins2025css].

*In LTF:* the lesson, landing and dashboard grids already do this; make it part of every template component so new layouts inherit it. Tables inside `MarkdownContent` already sit in a focusable scroll region, which is the right companion.
:::

::: {.rule #GRD-063 grade="C"}
**Choose a collection's minimum item width so that the number of items never leaves a single orphan in the last row at common widths, or let the orphan span the row.** `auto-fit` collapses empty tracks so remaining items stretch, which avoids lonely items at the end of a row [@atkins2025css]; a fixed two-column grid with an odd number of items does not.

*In LTF:* the five challenge filters at `sm:grid-cols-2` leave the fifth `Select` alone between 640 and 1023 px. Use an `auto-fit` grid with a minimum near the widest filter label, or let the last control span both columns.
:::

### What this means for Learn to Fly

The grid code LTF has is careful: zero-minimum tracks, a hanging icon in `Callout`, aligned label-value rows in the brief. Keep those patterns and make them defaults by moving them into template components. What LTF has not yet used is the part of CSS Grid that turns a layout into a programme: named areas, shared lines across rows, `auto-fit` collections and subgrid alignment inside cards.

Build the template components first (lesson, reference, collection, dashboard, fly, form, landing), each with named areas, zero-minimum text tracks and token gaps. Convert collections to `auto-fit`. Then use subgrid on the card patterns where side-by-side alignment is visible: the challenge cards, the airports grid and the landing's three-card row. Write the source-order rule into the review checklist, because the lesson and challenge content is procedural and order is part of what it teaches.

## Where attention goes on a page

Layout decides not only what is grouped with what, but what is seen at all. Two large eyetracking datasets from one applied research group describe how attention falls on web pages: steeply down the page, and toward the left edge. Neither describes a committed learner working through a lesson, and both were reported on the web rather than in peer-reviewed form, but they are the best evidence available on where to put what matters.

### Attention falls away down the page

Fessenden's 2018 analysis used the coordinates of over 130,000 eye fixations from 120 participants on a 1920 by 1080 screen, drawn from a larger study across thousands of sites, and compared them with a 2010 study on 1024 by 768 monitors [@fessenden2018scrolling]. Tasks covered news, e-commerce, blogs, FAQs, encyclopedic pages and search results. People scroll more than they used to: 57% of viewing time was above the fold, down from 80% in 2010. But attention still concentrates at the top. 74% of viewing time fell within the first two screenfuls; the second screenful received about 17%, and the remaining 26% was spread thinly across the rest. On general pages over 42% of viewing time fell in the top 20% of the page and over 65% in the top 40%. Above the fold, over 65% of viewing time was in the top half of the viewport. A sharp drop in attention after the fold appeared in both studies, and by 2018, 81% of viewing time fell within the first three screenfuls [@fessenden2018scrolling].

The article lists its own caveats. It could not separate bigger screens from changing design trends; the 74% figure ignores page length, so it may reflect short pages or users giving up; the 2010 comparison used different screens; and the data describe casual browsing of public sites [@fessenden2018scrolling]. Learners who have chosen a lesson and intend to finish it probably scroll further. Its recommendations still apply: reserve the top for high-priority content and key actions, add signifiers such as cut-off content so that a gap does not look like the end of the page (a "false floor"), and test page length with real users [@fessenden2018scrolling].

### Attention favors the left edge

Nielsen's 2006 study tracked 232 users viewing thousands of pages and found a dominant pattern resembling the letter F: a horizontal movement across the upper content, a second, usually shorter horizontal movement lower down, and a vertical scan down the left side, sometimes slow and systematic, sometimes fast and spotty [@nielsen2006f]. The recommendations follow from the shape: assume users will not read word by word on first contact; put the most important information in the first two paragraphs; start subheads, paragraphs and bullets with information-carrying words, because the left edge is noticed most and the third word on a line is read much less often than the first two. The page notes that a later study confirmed the findings [@nielsen2006f].

The article itself qualifies the F. It is a rough general shape, not a uniform pattern: some users read a third horizontal band (an E) or only one (an inverted L), and the distance between bars varies with the page, as when a product image lowered the second bar [@nielsen2006f]. The pattern describes uncommitted scanning of text-heavy pages. It is a description of poor-case behavior to design against, not a template to design toward.

::: myth
**"Design the page in an F shape."** The F-pattern describes how people scan text they have not committed to read; the study's own recommendations are to front-load words and structure text so that a scanner still gets the point, not to arrange content along an F [@nielsen2006f]. The pattern varies with page design and task, so a layout built to it fits one observed case.
:::

### Line spacing for scanning

Ling and van Schaik studied visual search of web pages and found that greater line spacing improved accuracy and reduced reaction times [@ling2007influence]. This seems to conflict with the finding that leading did not change reading performance [@chaparro2004reading], but search and continuous reading are different tasks and the stimuli cannot be compared, so the fair conclusion is that line spacing matters more where people scan for a target. In LTF the scanned surfaces are lists: checklists, step lists in `FlyPanel`, the speeds table, the curriculum's lesson rows, the reference search results.

### The top of the lesson page

Applied to LTF, the attention data raise a concrete question: what does a learner see in the first screenful of a lesson on a phone? By the code, above the first lesson block sit the `BetaBanner` (a multi-line notice on a narrow screen), the 64 px sticky `Header`, breadcrumbs (reduced to the parent on phones), the mono lesson code, the h1, the meta row, then, depending on state, the `UnverifiedWarning` for drafts, the `SignupBanner` for signed-out visitors, the resume bar, the objectives `Card`, and the sticky `MobileSectionSelect`, followed by a `mt-6` gap. Each is relevant. Together, for a signed-out learner on a draft lesson, they are likely to fill the first screen before the first sentence of teaching appears; this has not been measured and should be. The objectives box is the one element in the stack that belongs at the top by Fessenden's recommendation; the signup prompt and the resume bar compete with it.

The challenge brief has the reverse problem. `BriefTab` places Goal, "Sim setup", "Recommended lessons", Procedure, "How you'll be scored" and the safety and tip `Callout`s before the large "I'm set up, start flying" button. That order follows the task, and a committed learner will scroll; but the safety callout sits near the end of a long tab, where attention is thinnest.

::: {.rule #GRD-064 grade="B"}
**Put each page's objective, its primary next action and any safety-relevant item within the first screenful at the smallest supported width.** Attention concentrates at the top of pages and drops sharply after the fold [@fessenden2018scrolling]. The data are a large observational sample of casual browsing, not learners, so B.

*In LTF:* on `LessonPage` the objectives box and the first section heading should be visible on a phone without scrolling for a signed-out visitor; on `ChallengePage`, the goal, a one-line safety note if the challenge has one, and the route to the Fly tab belong at the top of the Brief.
:::

::: {.rule #GRD-065 grade="C"}
**Set a first-screen budget for each reading template (what may sit between the page title and the first content block) and test it on a phone.** Space at the top of the page is the most viewed space there is [@fessenden2018scrolling], so each element placed there displaces content. The budget is a design convention.

*In LTF:* for lessons: title, meta row and objectives, plus at most one state notice. Combine `UnverifiedWarning`, `SignupBanner` and the resume bar into a single compact notice row, choosing the most relevant one, and move the others to the completion panel or the section nav.
:::

::: {.rule #GRD-066 grade="B"}
**Never let a gap, a full-width band or a closed panel at the bottom of the first screen look like the end of the page; show the start of what follows.** Fessenden recommends signifiers such as cut-off content to avoid false floors [@fessenden2018scrolling].

*In LTF:* the landing page's alternating `canvas` and `surface` bands with `py-16 sm:py-24` padding can produce a screen that ends in empty band; check the first two screens of the landing at common phone and laptop heights, and make sure the next band's heading is visible.
:::

::: {.rule #GRD-067 grade="B"}
**Break long pages into short sections, each opening with a heading and a sentence that states its point.** Attention is top-heavy within any scrolled region, and scanners take in headings and the first words of paragraphs [@fessenden2018scrolling; @nielsen2006f]. Short sections give each part its own top.

*In LTF:* lesson sections already have headings and a `SectionNav`; set a content guideline in `content/README.md` that each section's first sentence states what the learner will do or know, and keep sections short enough that most fit within two phone screens.
:::

::: {.rule #GRD-068 grade="B"}
**Start every heading, step, list item and button label with the word that carries its information.** The left edge is noticed most, and words beyond the first two on a line are read much less often [@nielsen2006f]. The observation is well documented, though unpublished in peer-reviewed form, so B.

*In LTF:* write step labels as action first ("Set the parking brake", as a copy example only, not a procedure); write card titles and curriculum rows with the distinguishing word first. Part XXIV, Writing and Microcopy covers wording; this rule is the layout reason for it.
:::

::: {.rule #GRD-069 grade="C"}
**Do not arrange page content to fit the F-pattern or any other gaze template; structure the text so a scanning reader still gets the point.** The F is a rough description of uncommitted scanning that varies with design and task [@nielsen2006f].

*In LTF:* no template places content in two horizontal bands and a left stem by design; the lesson remains a single column with front-loaded headings, and the landing page is not rearranged around a gaze diagram.
:::

::: {.rule #GRD-070 grade="C"}
**In lists and tables that learners scan, put the item name or action at the left edge and the value or response at one consistent position to its right.** The left edge carries the scan [@nielsen2006f], and alignment on shared edges lets the eye run down one line [@williams2014nondesigners].

*In LTF:* the `checklist` block, the `FlyPanel` steps and the sim-setup `dl` in `BriefTab` (already `12rem` labels against values) follow this; extend it to the checklist pages under `/reference/checklists/:slug`, with responses aligned in one column and set in `readout` for values.
:::

::: {.rule #GRD-071 grade="B"}
**Give scanned lists more line and row spacing than running prose.** Greater line spacing improved accuracy and reaction time in visual search of web pages [@ling2007influence]. The full paper was not read and the spacing values are unknown, so B.

*In LTF:* checklist rows, `FlyPanel` steps (already `text-lg` with checkbox rows) and the curriculum's `min-h-11` link rows have room; keep row heights at or above the 44 px control size there, and do not tighten them to fit more on screen.
:::

::: {.rule #GRD-072 grade="C"}
**Treat published scroll-depth and gaze figures as starting assumptions, and measure scroll depth and section reach on LTF's own pages before setting page lengths.** The available data describe casual browsing with stated limits [@fessenden2018scrolling]; committed learners are a different population.

*In LTF:* record which lesson sections are reached (the scroll-spy in `useScrollSpy` already knows the active section, and `saveSectionMutate` stores the last section for signed-in learners) and review the distribution before changing lesson length guidance.
:::

::: {.rule #GRD-073 grade="C"}
**Put a page's primary action where its task ends, and repeat it at the top only when the task can be done without reading the page.** Attention favors the top [@fessenden2018scrolling], but a "start" button above a procedure the learner has not read invites starting unprepared.

*In LTF:* "I'm set up, start flying" at the end of `BriefTab` and "Mark lesson complete" at the end of the lesson are correctly placed. A returning learner who has read the brief needs a short route to the Fly tab near the top; the tab bar already provides it, so no second button is needed.
:::

### What this means for Learn to Fly

The lesson's single column, front-loaded section headings and `SectionNav` already suit a top-heavy, left-heavy reading pattern. Keep them, and keep the completion action at the end of the lesson. The problem is the top of the lesson page: too many state elements stack between the title and the teaching. Set a first-screen budget, collapse the notices into one row, and measure on a phone what a signed-out learner sees before scrolling.

In the challenge brief, move a one-line safety summary to the top when a challenge has a `safety` callout, leaving the full callout in place below. In lists, keep the left edge for action words and a consistent column for values, and keep row spacing generous. Finally, instrument section reach using the scroll-spy data the lesson page already computes, so future decisions about lesson length rest on LTF's learners, not on casual browsers.

