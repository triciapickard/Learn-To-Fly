# Icons, Maps, Ornament and Editorial Design

This Part covers the marks on a page that are not running text: icons and pictograms, explanatory illustrations, diagrams and maps, decoration, and the editorial arrangement that ties words and pictures into a lesson. These are the places where Learn to Fly is at once most generic and most distinctive. Its icons are a stock line set used in 64 places, its empty states are a dashed box with a stock glyph, and its landing page carries no picture at all. Yet its 13 hand-drawn SVG widgets, the fixed instrument and sectional-chart colors, the drawn mini sectional and the "horizon line" that runs through navigation and progress are already the work of a product with a visual language of its own. The task is to know which of these marks carry meaning, which carry identity, and which are noise.

The evidence is of three kinds and the grades follow it. Icon comprehension has a small but solid experimental literature, much of it from one research group (McDougall and colleagues), plus a usability study of labels and a testing standard; these support B grades and a few C grades for the standards. Instructional illustration rests on meta-analyses of seductive details and signaling and on well-cited experiments by Mayer and others, so some rules reach A or a firm B. Cartography offers one strong aviation experiment on chart clutter and one careful study of preference against performance, surrounded by a large craft tradition (Imhof, Robinson, Bertin, MacEachren, Tufte) that is authoritative but mostly untested, graded C. Ornament and editorial design are almost entirely craft authority, from Owen Jones and Christopher Dresser to Ernst Gombrich and Jan White, and the one experimental thread (embellished charts) is contested, graded D. Use the B rules as defaults that need a reason to break, the C rules as the house style until a test says otherwise, and the D rules as open questions worth a small experiment.

## How people understand an icon

### Most symbols are not understood without context

The most useful single number in the icon literature is a base rate. McDougall, Curry and de Bruijn collected 239 real symbols from electrical equipment, public information sets (including AIGA and ISO symbols), military symbology, websites, vehicle and aircraft controls, and computer interfaces, and had 200 students rate them on five properties, 40 students per property [@mcdougall1999measuring]. For one property, meaningfulness, raters also wrote down what they thought each symbol meant. Mean concept agreement, the percentage of people giving the intended function (with synonyms accepted), was 15.49 percent. The median was 2.5 percent [@mcdougall1999measuring]. Most of these symbols, designed by professionals and in public use, were not correctly guessed when seen without context.

The ratings themselves were reliable: split-half correlations ran from .94 to .96 on all five dimensions, and a published component-counting metric of complexity agreed with rated complexity (rs = .73) [@mcdougall1999measuring]. So the failure of comprehension is not a measurement artifact. The authors also observed how people interpret symbols: they often used a picture-labeling strategy, naming what the symbol depicts, which made a symbol feel meaningful even when the guessed function was wrong. A portable-file symbol was read as luggage storage [@mcdougall1999measuring]. That mechanism is the trap for anyone who designs icons for a specialist subject. A pilot looking at a drawing of a trim wheel sees trim. A beginner sees a wheel, names it, feels satisfied and still does not know what it does.

The sample was students at one Welsh university in the late 1990s, and the set leans on desktop icons of that period [@mcdougall1999measuring]. Modern conventions (a magnifying glass for search, a gear for settings) are better known now than any symbol then. But nothing in later work suggests that a symbol for an unfamiliar domain concept, met for the first time, does better than the symbols in this set.

::: {.rule #ICO-001 grade="B"}
**Assume a new icon is not understood until a test with beginners shows it is.** Across 239 professionally designed symbols seen without context, mean concept agreement was 15.49 percent and the median 2.5 percent, and people's sense that a symbol was meaningful did not track whether they had guessed its function [@mcdougall1999measuring]. The sample is dated and narrow, so the exact figure does not transfer; the direction does, and it is strongest for domain concepts the viewer has not yet learned.

*In LTF:* no icon for a flight concept (a control, an instrument, a procedure type) ships without either a visible text label or a recorded comprehension check of the kind set out in the chapter on testing symbols. A designer's or pilot's judgment that an icon is "obvious" is not evidence.
:::

### Five properties, and why they are not one thing

Before 1999, icon studies manipulated properties such as "concrete" or "simple" using one experimenter's judgment, so the properties were confounded. The norms separated five: concreteness (depicts real objects, materials or people), visual complexity (amount of detail), meaningfulness, familiarity (how often the rater had met the symbol) and semantic distance (how closely what the symbol shows relates to what it means, rated with the function label supplied) [@mcdougall1999measuring]. The authors propose treating Peirce's icon, index and symbol as one continuum of semantic distance rather than three classes.

The correlations show which properties travel together. Concreteness and complexity were unrelated, so a concrete symbol can be simple. Concreteness correlated .78 with familiarity, .82 with meaningfulness and .65 with semantic distance. Familiarity and meaningfulness correlated .93 and were described as virtually interchangeable. Concept agreement, the closest measure to actual understanding, correlated most strongly with semantic distance (.69) [@mcdougall1999measuring]. The practical reading: when an icon is understood, it is mainly because its picture is close to its meaning, not because it is detailed and not merely because it is a picture of a thing.

### Semantic distance first, familiarity later

Ratings describe icons. Learning experiments show what happens as people use them. Isherwood, McDougall and Curry gave 30 participants a long series of icon identification trials designed to simulate learning through experience, and measured speed and accuracy against four icon characteristics: semantic distance, concreteness, familiarity and visual complexity [@isherwood2007icon]. Together the characteristics accounted for up to 69 percent of the variance in performance, an upper bound across the learning series rather than a constant. Their ranking changed with practice. Semantic distance was crucial at first, while people were learning which icon went with which function. Familiarity mattered later, because it has lasting effects on access to long-term memory. The authors concluded that concreteness may not be of primary importance and that the right balance depends on whether an icon is rarely encountered or frequently used [@isherwood2007icon].

McDougall and Isherwood extended this by adding a third element, the function name the icon stands for [@mcdougall2009whats]. They treated identification like picture naming, with three parts: the graphic, the function, and the relationship between them. With 238 icons, 83 new raters of the function names, and 13 blocks of learning trials, mean response time fell from about 2.9 seconds in the first block to roughly 1.2 seconds by the later blocks. In early trials semantic distance was the best predictor, accounting for up to 55 percent of variance. Function familiarity predicted unique variance in accuracy throughout and became the top accuracy predictor after the first blocks. Icon familiarity predicted response time early. Complexity correlated with slower responses in later blocks but not with accuracy, explaining a modest 9 to 13 percent of variance in blocks 7 to 13, and the authors advise caution because the learning curve had flattened by then [@mcdougall2009whats].

Concreteness was not a major predictor, the authors suggest "probably because only a limited number of functions can easily be represented pictorially" [@mcdougall2009whats]. For an abstract function (search, filter, or for LTF, stability, energy, trim) the closeness of the mapping matters far more than how picture-like the icon is. They also found shorter function names were the familiar ones, in line with Zipf's law. Their own limits are stated plainly: covariance among subjective ratings makes it hard to say what each rating measures, the participants were students, and the icons came from a fixed set rather than natural use [@mcdougall2009whats; @isherwood2007icon].

::: {.rule #ICO-002 grade="B"}
**Choose an icon's picture for how closely it points at the function, not for how realistic it is.** Semantic distance was the strongest early predictor of icon identification (up to 55 percent of variance in early trials) and the best correlate of concept agreement, while concreteness was not a major predictor once semantic distance was accounted for [@mcdougall2009whats; @isherwood2007icon; @mcdougall1999measuring]. The evidence is from one research group using student samples and a fixed icon set.

*In LTF:* the planned custom challenge-type icons should be judged by the question "could a beginner infer the challenge type from this picture?", not "is this an accurate drawing of something in the cockpit?". A drawn runway with an arrow onto it is closer to "landing" than a detailed drawing of the airplane.
:::

::: {.rule #ICO-003 grade="B"}
**Introduce an icon for a flight concept with, or after, the lesson that teaches the word it stands for.** Familiarity with the function name predicted identification accuracy throughout learning and became the strongest accuracy predictor after the first blocks, so an icon for an unfamiliar word starts at a disadvantage that no drawing can remove [@mcdougall2009whats]. Short, frequent words were also the familiar ones.

*In LTF:* an icon for a term such as a control surface or an instrument appears in a lesson only once the term has been defined, ideally next to the glossary chip that defines it. Labels use the plainest short word the lesson itself uses ("Radio", not a technical synonym), as `challengeTypeMeta` already does.
:::

::: {.rule #ICO-004 grade="B"}
**Once an icon has been introduced, never redraw it, resize its key features or reuse it for another meaning.** After the first exposures, familiarity takes over from semantic distance as the main driver of fast identification, and familiarity has lasting effects on memory access; redrawing an icon resets that learning [@isherwood2007icon; @mcdougall2009whats].

*In LTF:* each icon is defined once in code (one module, as `challengeTypeMeta` does for challenge types) and imported wherever it appears: `ChallengesPage` cards, `ChallengePage` meta rows, `LessonListItem` rows and `DevComponentsPage`. Stroke width and size come from that definition, not from the call site.
:::

### Complexity is good or bad only for a task

Design folklore says icons should be concrete, simple and distinct. McDougall, de Bruijn and Curry tested all three [@mcdougall2000exploring]. According to the abstract summary available, concreteness effects were mainly about the initial grasp of meaning; complexity effects lasted longer and were tied to how efficiently users could search a display for an icon; and distinctiveness was the most intricate case, with icons becoming more distinctive when designers used both semantic contrast (different meanings) and visual contrast (different appearance). A later paper from the group describes the design: Experiment 1 was a visual search task and Experiment 2 an identification task, and in that account complexity matters when people must search a display for an icon and has much less of a role when they must identify an icon they are looking at [@mcdougall2009whats]. The full text of the 2000 paper was not available, so no sample sizes or effect sizes are given here.

The split is the practical point. Search is a perceptual job (find the one that looks like X among many) and extra detail slows it. Identification is a meaning job (what does this mean?) and extra detail is less harmful there. The 2009 paper adds that complexity effects are "far from robust" in the picture-naming literature, partly because rated complexity is confounded with familiarity: familiar items are rated as less complex [@mcdougall2009whats]. Treat "simpler is better" as true for search and uncertain elsewhere.

::: {.rule #ICO-005 grade="B"}
**Set icon detail by the task: minimal detail for icons that are searched for among many, more detail allowed for icons looked at one at a time to learn a meaning.** Complexity slows visual search for an icon but has much less effect on identifying an icon already in view, and the concreteness advantage is an early-learning effect that fades with practice [@mcdougall2000exploring; @mcdougall2009whats]. The 2000 paper's details were confirmed only from its abstract summary.

*In LTF:* glyphs in scanned rows (challenge card meta rows, curriculum link rows, the Fly mode step list, `Badge` status icons) stay at the Lucide level of detail or simpler. A larger illustration that a learner studies once (a lesson figure, a quiz picture) can carry more detail when the detail is the content.
:::

::: {.rule #ICO-006 grade="B"}
**Review icons as a set, side by side, and make neighbors differ in both meaning and shape.** Distinctiveness came from combining semantic contrast with visual contrast, not from either alone, so it is a property of the set, invisible when icons are reviewed one at a time [@mcdougall2000exploring].

*In LTF:* the nine challenge-type icons are reviewed on one sheet in `DevComponentsPage`, at 16 px, in Day and Night. Pairs that look alike at that size (Compass for navigation against any round instrument glyph; Route for pattern against Repeat2 for maneuver) are redrawn until a glance separates them.
:::

### Four relations between a picture and its meaning

Yvonne Rogers asked, at the moment graphical interfaces were spreading, when icons are actually useful [@rogers1989icons]. The paper itself could not be read; what is confirmed comes from the McDougall group's full-text account of her work. In her experiments with symbols varying in concreteness (abstract symbols, concrete analogies associated with an action, concrete objects operated on, and combinations), matching written functions to symbols was poor for abstract symbols and even worse when concrete analogies were used to depict functions [@mcdougall1999measuring; @rogers1989icons]. She concluded that the critical determinant of usability is the meaningfulness of the relationship between what is depicted and the function it refers to, not concreteness as such, and she endorsed the minimalist view that extra detail does not help unambiguous, rapid interpretation [@mcdougall1999measuring]. A secondary source says the paper also proposes a classification of icon function and form and a grammar of icon forms mapped onto the system's structure; a popular design handbook derives four kinds of iconic representation (similar, example, symbolic and arbitrary) from it. Those are pointers, not confirmed readings, but the four-way split is a useful working vocabulary.

The four kinds have increasing learning costs. A similar icon looks like the thing it stands for (a headset for audio settings). An example icon shows a typical instance of a category (a runway for the whole topic of airports). A symbolic icon stands for a higher-level concept (a gauge for performance). An arbitrary icon is a learned convention with no picture relation at all (a letter code). The later evidence fits Rogers's central claim: semantic distance beat concreteness as an early predictor [@isherwood2007icon; @mcdougall2009whats]. It also qualifies it: concreteness gains are real early in learning for functions that are easy to picture, so "concreteness is irrelevant" overstates the case.

::: {.rule #ICO-007 grade="C"}
**Classify every icon as similar, example, symbolic or arbitrary, and give every arbitrary or symbolic icon a permanent text label.** The closeness of the picture-function relation determines how well icons are matched to meanings, and abstract or analogical depictions performed worst [@rogers1989icons; @mcdougall1999measuring]. The four-way classification comes through a secondary source and is a review tool, not a tested scale.

*In LTF:* the icon register (see the chapter on building an icon language) records the class for each glyph. In the current set, PlaneLanding for landing is similar, Route for pattern is symbolic, Award for capstone and Settings2 for setup are symbolic at best, and the tier rings are arbitrary. All of these keep their words.
:::

::: myth
**"Concrete, realistic icons are always easier to understand."** The idea that pictures of real objects are self-explanatory was common in early interface guidance. Concreteness and meaningfulness do correlate, but in learning experiments the advantage of concrete icons was an early effect that faded with practice, and semantic distance and function familiarity predicted identification better; for functions that cannot easily be pictured, concreteness was not a major predictor at all [@isherwood2007icon; @mcdougall2009whats]. Rogers found concrete analogies for functions did worse than abstract symbols [@mcdougall1999measuring].
:::

### What this means for Learn to Fly

The product's icon use is mostly safe because it leans on text. `TypeIcon` defaults to `showLabel = true`; `Badge` status variants pair a 12 px Check, TriangleAlert or OctagonAlert with a word; tier badges always print Gold, Silver or Bronze; the Callout icons sit beside a bold title; icons are `aria-hidden` with adjacent text. Keep all of this. It is the behavior the base-rate evidence (ICO-001) demands.

The weak point is the stand-in set. The comment above `challengeTypeMeta` in `ChallengeMeta.tsx` says that until the custom challenge-type set exists, "the closest Lucide glyph stands in": Settings2, ClipboardList, Repeat2, Route, PlaneLanding, TriangleAlert, Compass, Radio and Award. Only PlaneLanding and Radio are close metaphors; the rest are symbolic or arbitrary relations borrowed from general software, where Settings2 means preferences and Award means a prize. When the custom set is drawn, apply ICO-002 (closeness over realism), ICO-005 (simple, because these are scanned in card rows at 16 px), ICO-006 (review all nine side by side) and ICO-007 (class each one). Do not ship the custom set with `showLabel={false}` anywhere a newcomer will meet it.

The landing "How a lesson works" row uses BookOpen, Eye, SlidersHorizontal, PlaneTakeoff and ClipboardCheck for Learn, See, Try, Fly and Reflect. Each has a `heading-md` word, so comprehension is not at risk; the icons are there for rhythm and recognition. That is acceptable, but note that they are the same glyphs thousands of other sites use for the same idea, which is one of the generic signals the dossier lists. They are a candidate for the custom set too, once the challenge types exist and a drawing style is settled.

Finally, ICO-003 has a content consequence. Icons for flight concepts (a trim wheel, a flap lever, a mixture knob) belong in lesson content and widgets only after the lesson has taught the word. The glossary chips in the right rail ("Terms in this lesson") are the place where word and picture can first meet.

## Labels, icon-only controls and marks read at a glance

### Labels carry the first session

Icons are often defended as faster to recognize and easier to remember than words. For beginners learning a real application the evidence points the other way in the first session. Wiedenbeck built three versions of one application interface, with buttons carrying text labels only, icons only, or both together, and followed novice users through an initial learning session and a delayed second session, collecting ratings of ease of use and usefulness at the end of each [@wiedenbeck1999use]. In the first session, performance was best with the label-only and the icon-label versions. The icon-only version was much poorer, particularly in time and in the number of references to help. By the second session the icon-only users had improved to approach the other groups. Retention of skill between sessions was worse for icon-only, but the effect was described as short-lived. Perceived ease of use was consistently better for the icon-label version than for either of the others [@wiedenbeck1999use].

Two details cannot be settled from what was available. A later paper describes the sample as 60 undergraduates with little computer experience using a desktop email program, which is a secondary report. One secondary account says that in the delayed session, ratings of usefulness and task performance became more positive for the icon-only version, which sits uneasily with the abstract's short-lived retention gap. The safe conclusion is the abstract-level one: icon-only was never better for novices, and its penalty shrank with practice. It is one application, one icon set and a modest sample, tested on 1990s buttons, so its effect sizes should not be carried over to a modern interface [@wiedenbeck1999use].

The McDougall group's results explain the pattern. Early in learning, identification depends on semantic distance and on familiarity with the function name; McDougall and Isherwood cite earlier studies showing that people rely on text labels attached to icons to get at meaning, especially when the graphic is unfamiliar [@mcdougall2009whats]. A label removes the need to infer. Once the pairing is learned, the icon becomes a faster recognition cue for the same meaning, which is why the redundant icon-plus-label version was rated easiest: it serves both phases. For rarely met icons the early phase never ends [@isherwood2007icon].

::: {.rule #ICO-008 grade="B"}
**Give every icon a beginner meets a visible text label; treat icon plus label as the default, not the upgrade.** Novices performed best with label-only and icon-label buttons in a first session, were markedly slower and needed help more often with icon-only buttons, and rated icon-label buttons easiest to use throughout [@wiedenbeck1999use]. The study is a single application with a modest sample; the direction is consistent with the icon-learning experiments [@isherwood2007icon; @mcdougall2009whats].

*In LTF:* the header nav stays text ("Learn", "Challenges", "Reference"). `ThemeToggle` keeps its words ("Day", "System", "Night") beside the Sun, Laptop and Moon glyphs. `TypeIcon` keeps `showLabel` true on `ChallengesPage` cards and `ChallengePage` meta rows; where space forces a hidden label, the sr-only label stays and a `Tooltip` shows it on hover and focus.
:::

::: {.rule #ICO-009 grade="B"}
**Never make a learner decode an unlabeled icon in a challenge briefing or in Fly mode.** The cost of icon-only controls for novices showed up mainly as time and help look-ups, which is the attention budget a learner needs for the simulator [@wiedenbeck1999use].

*In LTF:* the Brief tab (`BriefTab.tsx`), the Fly tab (`FlyPanel.tsx`) and `FlyModePage` carry no control whose meaning depends on an icon alone. The Stopwatch start, pause and reset controls carry words; the "Steps" checkboxes are labeled by their step text, which is already the case.
:::

### Where icons earn their place

William Horton's handbook is the fullest craft statement of when to use icons [@horton1994icon]. His CHI 1996 tutorial summarizes the reasons: to replace word labels for menus, actions, tools and modes; to work faster; to show visual and spatial ideas; to save space; and to speed search and aid recall. Each symbol needs a strong, direct association with its meaning for both the designer and the viewer. Among his guidelines: choose words, icons or both by context and audience, and include "just those details necessary" for the icon's purpose [@horton1994icon]. The book predates most of the controlled icon research and some of its specific conventions are tied to the displays of 1994, but where it advises direct association, restraint and testing, the later experiments agree [@mcdougall2009whats].

David Gittins's 1986 survey of icon-based dialogue, written when graphical icons were new in commercial interfaces, set out the advantages and disadvantages of icons and a classification to help the dialogue designer [@gittins1986icon]. Its contents could only be confirmed at the level of the abstract, and the McDougall group cite it among the guideline sets that "delineate good symbol design practice" while noting that such sets were constrained by how little was known about why some symbols work better than others [@mcdougall1999measuring]. The lesson of that history is that icon guidance moved from lists of virtues to evidence about tasks and learning, and an icon policy should be written in the same spirit: where icons are used, why, and what evidence supports each.

Horton's list sorts LTF's current icon uses into those that do a job and those that only decorate. A 12 px check inside a `Badge` speeds search down a list of lesson rows and survives a glance: it does a job. A 20 px icon at the left of a Callout distinguishes nine callout types in a long lesson, which helps recognition on the second and later lessons: a job, provided the title stays. A 24 px icon at the top of each "What you need" card on the landing page repeats the card's heading: decoration, harmless but generic.

::: {.rule #ICO-010 grade="C"}
**Use an icon only where it does a job a word alone does less well: speeding search in repeated rows, distinguishing a small set of recurring types, showing a spatial or visual idea, or saving space for an already-learned meaning.** These are the uses that the icon-design handbook tradition names, and the experiments locate the icon's advantage in search and in recognition after learning, not in first comprehension [@horton1994icon; @mcdougall2000exploring; @isherwood2007icon].

*In LTF:* status icons in `Badge`, type icons in `Callout`, the Check and X rows in the landing requirement note and the `TypeIcon` glyphs pass. Icons that sit above a heading saying the same thing (the "What you need" cards, the five-step row) are optional ornament; they may stay if the custom icon style gives them identity value, and should be dropped before any icon in a working row is.
:::

::: {.rule #ICO-011 grade="C"}
**Write and keep a short icon policy that states where LTF uses icons with labels, where it uses text only, and where an icon may stand alone.** Guideline lists that could not say why one icon beat another were superseded by evidence about tasks and learning; a policy that names the use and the evidence avoids repeating that failure [@gittins1986icon; @mcdougall1999measuring; @horton1994icon].

*In LTF:* the policy lives with the icon register in the design system documentation and has three lists. Text only: anything a learner must understand to stay safe in the simulator or to answer a quiz correctly. Icon with label: navigation, challenge types, callout types, statuses, tiers. Icon alone: close, open menu, expand and collapse chevrons, external-link marks, and the play disc on `YouTubeEmbed`, each with an accessible name.
:::

### Icon-only controls

Some icons have become words of their own in everyday software. A cross closes, three stacked lines open a menu, a chevron expands or moves, a magnifying glass searches. These are learned conventions (arbitrary or symbolic in Rogers's terms), but the learning has been done elsewhere, and a beginner pilot is not a beginner computer user. Horton lists saving space for already-learned meanings among the reasons for icons [@horton1994icon]. The condition is that the meaning is already learned by this audience, which is a claim about the audience and not about the glyph. Even here the evidence on novices argues for a fallback: an accessible name for assistive technology and a visible tooltip on hover and keyboard focus, so that anyone who does not know the convention can find out without trial and error [@wiedenbeck1999use].

LTF already does this for the conventions it uses. The menu button in `Header.tsx` has `aria-label="Open menu"`, the `Drawer` close button `aria-label="Close"`, the Toast dismiss button "Dismiss notification" and the beta banner dismiss "Dismiss beta notice". These are the right kind of icon-only control.

::: {.rule #ICO-012 grade="C"}
**Allow an icon to stand alone only for an everyday software convention, and give it an accessible name and a tooltip.** Space-saving icons work for meanings already learned by the audience, and the novice penalty for icon-only controls argues for a fallback that reveals the meaning [@horton1994icon; @wiedenbeck1999use]. Grade C because the list of safe conventions is a judgment about the audience, not a tested set.

*In LTF:* the safe list is close, menu, expand or collapse, back, external link, play, copy (on the `BriefTab` sim setup rows) and search. A new icon-only control outside that list needs a test (see the chapter on testing symbols) or a label.
:::

### Marks read in a glance

Fly mode is read in glances: the learner looks away from the simulator, finds one thing, and looks back. The perceptual evidence on simplified images bears directly on this. Kendall, Raffaelli, Kingstone and Todd showed 50 undergraduates faces at very short presentation times (16.7, 33.3, 50 and 66.7 ms, one to four frames at 60 Hz, between random line masks) in five sets running from unmanipulated photographs to cartoons with only the communicative features, 160 images and 640 trials per participant [@kendall2016iconic]. A separate group of 60 people rank-ordered the sets by realism, and 70 percent ordered them as intended. At short presentation times, emotion was identified more accurately on more cartoonized images, and both increasing contrast and decreasing featural complexity helped. A second experiment found that lower contrast and lower complexity were associated with smaller amplitudes of an early brain response sensitive to low-level features, which the authors read as simpler, higher-contrast stimuli being processed more efficiently at an early stage [@kendall2016iconic].

The study is about reading emotion on faces, not about understanding an icon's function, and it has no direct replication. It is perceptual support for a visual style, not a teaching result. But the two levers it separated, contrast and complexity, are exactly the levers an icon designer controls, and both mattered independently.

::: {.rule #ICO-013 grade="B"}
**Make marks that must be read in a glance simple and high in contrast, and treat contrast and simplicity as separate levers.** At very brief exposures, simplified high-contrast images were read more accurately than realistic ones, and contrast and featural complexity each helped on their own [@kendall2016iconic]. The evidence is one study of emotion reading, so it supports a style choice for glance contexts, not a claim about meaning.

*In LTF:* `FlyModePage` icons and indicators use the heavier stroke (2 or more) at 24 px or larger, in `ink` or a status color at full strength, never `ink-3`. The random-event alert in `FlyPanel` keeps its `border-4 border-warn` frame and adds a single bold glyph beside the text, not a detailed picture of the event.
:::

### Contrast and size floors for icons

WCAG 2.2 sets two floors that apply to icons. Success Criterion 1.4.11, Non-text Contrast, requires that visual information needed to identify user-interface components and states, and parts of graphics needed to understand content, have at least 3:1 contrast against adjacent colors [@w3c2024wcag]. Success Criterion 2.5.8, Target Size (Minimum), requires pointer targets of at least 24 by 24 CSS pixels, with exceptions for spacing, an equivalent control, inline targets, browser-drawn controls and essential presentations [@w3c2024wcag]. These are consensus floors, not best practice; the touch-target research reviewed in the Part on forms and touch argues for larger primary controls.

Contrast ratios for LTF's icon colors, computed for this Part with the WCAG relative-luminance formula from the hex values in `tokens.css`, show where the floor bites. In Day, `ink-2` (#595856) reaches about 6.5:1 on `canvas`, `ink-3` (#6a6967) about 5.0:1, and `line-strong` (#81807e) about 3.6:1, so all three are safe for icon strokes. `accent-line` (#009ca5) reaches about 3.1:1 on `canvas` and 3.3:1 on `surface` but only about 2.9:1 on `surface-sunken` (#efeeec), so a teal stroke that carries meaning, such as the `LessonPath` connector between completed stops or a progress fill, falls just under the floor if it is ever placed on a sunken panel. `line` (#dfdedc) is about 1.2:1 on `canvas` and must never be the only thing that shows a state. In Night every icon color tested clears 3:1 on every ground.

::: {.rule #ICO-014 grade="C"}
**Give every icon stroke or fill that carries meaning at least 3:1 contrast against its ground, in both themes.** WCAG 2.2 Success Criterion 1.4.11 requires 3:1 for graphical parts needed to identify components, states or content [@w3c2024wcag].

*In LTF:* meaningful icon strokes use `ink`, `ink-2`, `ink-3`, `line-strong` or a status color. `accent-line` is used for meaningful strokes only on `canvas` or `surface` in Day, never on `surface-sunken`; `accent` (#00757c, about 4.7:1 on sunken) replaces it there. `line` is for decorative borders only. A CI contrast check should include icon and SVG stroke colors, not just text.
:::

::: {.rule #ICO-015 grade="C"}
**Make every icon-only control a pointer target of at least 24 by 24 CSS pixels, and 44 by 44 for controls used beside the simulator.** WCAG 2.2 sets 24 by 24 as the minimum, with a spacing exception, and describes it as a floor rather than a recommendation [@w3c2024wcag].

*In LTF:* the 44 px hamburger in `Header` passes. `Button` size `sm` (32 px) and the 32 px `ThemeToggle` segments pass the floor; they stay off `FlyModePage`, where every control uses `lg` (48 px). A 14 px chevron or external-link icon inside a text link is an inline target and passes by the inline exception.
:::

### What this means for Learn to Fly

LTF's labeling is already better than most products of its kind, and the main task is to protect it as custom icons arrive. When `challengeTypeMeta` is replaced by drawn icons there will be a temptation to let the new glyphs stand alone on challenge cards to show them off; ICO-008 says no, at least until a comprehension test (ICO-001) shows that beginners can read them. The icon policy (ICO-011) should be written before the custom set is drawn, so the set is designed for its uses.

Two specific changes follow from this chapter. First, the contrast audit: check every place `accent-line` draws a meaningful stroke and make sure none sits on `surface-sunken` in Day (ICO-014). Second, Fly mode: write down that `FlyModePage` uses no `sm` buttons, no `ink-3` icons and no icon without a word (ICO-009, ICO-013, ICO-015), and add an end-to-end check that asserts it.

The stroke-width spread in the code (1.5, 1.75, 2, 2.5 and 3 across 64 import sites) matters here too. Thin 1.5 strokes are used on the 32 px state icons, where they are large enough to read; at 16 px, 1.75 is the house default. For Fly mode, a heavier stroke is the right choice for the glance reason (ICO-013). What must not happen is a stroke width chosen per call site for no stated reason, which is the subject of the next chapter.

## Building an icon language

### Design a language, not a pile of glyphs

Horton's central argument is that icons should be designed as coordinated sets with a defined vocabulary and grammar, not one at a time [@horton1994icon]. His tutorial gives the reasons for an iconic language: it reduces design effort, enforces consistency, makes icons predictable and speeds learning. The book's 16 chapters move from how icons work and how to represent ideas graphically, through designing an iconic language, drawing, color and the "standard parts of the icon", to managing development, testing, editing, and an icon starter set [@horton1994icon]. On drawing, his advice is to choose a level of detail and realism and to use one primary style for most icons in a set, from five degrees of detail and realism he describes [@horton1994icon]. Rogers made a related proposal, as a secondary summary describes it: a grammar of icon forms that maps onto the structure of the underlying system [@rogers1989icons]. Both are craft proposals rather than tested results, but they predict something the experiments confirm: if one icon's meaning has been learned, a learner should be able to read the next one built from the same parts.

A vocabulary is the list of base shapes (an airplane in plan view, a runway, a headset, a checklist sheet, a dial). A grammar is the set of rules for combining them with modifiers: a badge in a fixed corner for state, a strike-through for "off", an arrow for direction or change, a frame for "instrument". Once both are written down, a new icon for a new lesson type is generated from the rules rather than improvised, and the set stays a family.

::: {.rule #ICO-016 grade="C"}
**Write the icon vocabulary and grammar down before drawing the set: the base shapes, and the rules for how badges, arrows, frames and strikes modify them.** A coordinated iconic language reduces design effort, enforces consistency and speeds learning, and a grammar that maps onto the system's structure lets learners read new icons from known parts [@horton1994icon; @rogers1989icons]. Craft authority; no controlled test of an icon grammar was found.

*In LTF:* the custom set covers the nine challenge types and the five landing steps first. Its grammar uses the same modifier in the same place everywhere: a status badge always bottom-right, motion always shown with one arrow style, an instrument always inside the same round or square frame the widgets use (`Gauge` in `shared/svg.tsx` is round; keep that).
:::

::: {.rule #ICO-017 grade="C"}
**Use one primary level of detail and one stroke and corner style across every icon in the product, with stroke width set by icon size in a single table.** One primary style per set is the craft norm for making icons read as a family, and arbitrary variation in weight makes an icon look like a different icon [@horton1994icon; @mcdougall2000exploring].

*In LTF:* the code uses Lucide strokes of 1.5, 1.75, 2, 2.5 and 3 chosen at call sites. Replace this with a size-to-stroke table in one module (for example: 12 and 14 px badges and inline marks, 16 and 18 px rows and buttons, 20 and 24 px callouts and cards, 32 px states) and import from it. Custom icons are drawn to match the stroke, end caps and corner radius of the library icons they sit beside, or the library set is replaced as a whole.
:::

### One picture, one meaning

Otto Neurath's Isotype, developed at the Social and Economic Museum in Vienna from 1925, with the artist Gerd Arntz joining in 1928, was a method for communicating facts, mainly social and economic statistics, in pictures [@neurath1936international]. The 1936 book, *International Picture Language*, is a 118-page postcard-format volume written in the 850 words of Ogden's Basic English, which is why its prose reads oddly. Neurath's slogan, as Robin Kinross quotes it, was "Words divide, pictures unite", but Kinross stresses that words were never banished: the picture-language is a "helping language" meant to sit alongside verbal text [@neurath1936international]. Isotype's symbols were drawn from a vocabulary and combined by a grammar of method rules, with standardization working as a syntax: once a symbol meant something, it meant only that.

The principle that survives is the discipline rather than the claim to universality. Kinross draws out further rules from Isotype practice: "don't say more than you know"; do not draw a continuous line on a graph when only isolated data points exist, since a line implies a trend; and choose the ordering (by size, time or place) deliberately because the order tells a story [@neurath1936international]. Critics have called Isotype naive in claiming an international, neutral picture-language, and a later account of Isotype chart-making says its principles were guidelines that changed with new tasks rather than fixed rules [@neurath1936international]. The symbol-comprehension evidence adds a reason for modesty: many real symbols seen without context are not understood [@mcdougall1999measuring].

::: {.rule #ICO-018 grade="C"}
**Give each pictogram one meaning across the whole product, and never reuse a picture for a second meaning.** Isotype's vocabulary worked because standardization fixed each symbol's meaning, so new meanings could be built from known ones [@neurath1936international]. Familiarity, the property that drives fast identification after learning, is a property of a picture-meaning pair, and a reused picture splits it [@isherwood2007icon].

*In LTF:* Compass currently marks the navigation challenge type; it must not also appear as a generic "explore" or "reference" icon. TriangleAlert marks the emergency type and is also the caution status icon in `Badge`; that is one picture with two meanings and should be resolved when the custom set is drawn (keep TriangleAlert for caution status, draw a distinct emergency-type icon).
:::

::: myth
**"Pictures are a universal language that needs no words."** Isotype's slogan "Words divide, pictures unite" is often quoted as if pictures could replace text. Kinross's account of Neurath stresses that pictures were a helping language meant to sit beside verbal text [@neurath1936international], and the comprehension evidence shows mean concept agreement of about 15 percent for real symbols seen without context [@mcdougall1999measuring]. Pictures carry some meanings across languages; they do not carry unfamiliar concepts on their own.
:::

### Repeat a unit to show an amount

Isotype's founding technique for quantity is to repeat a unit and not to enlarge a single picture; one secondary source ties this to pages 75 and 77 of the 1936 book [@neurath1936international]. The reason is perceptual honesty: a picture drawn twice as tall is four times the area, and viewers misjudge which dimension carries the number. A row of identical units can be counted.

LTF already does this in `DifficultyDots`: difficulty 1 to 5 is five 8 px discs, filled `ink` up to the level and `line-strong` after it, with `role="img"` and the text alternative "Difficulty n of 5". That is Isotype done right. The `ProgressRing` (a 56 px ring with a 6 px stroke and a percentage readout at its center) is a length along a circle, which is acceptable because the number is printed. A future progress display that grew an airplane icon with the learner's progress, or scaled a badge by score, would break the rule.

::: {.rule #ICO-019 grade="C"}
**Show a count by repeating a unit, not by enlarging or filling a picture.** Repetition of a standard unit is the founding Isotype rule for quantity, and an enlarged picture invites area misjudgment [@neurath1936international]. Craft rule, not tested here.

*In LTF:* keep `DifficultyDots` as the model. Lessons done in a module, attempts in a history or stars in a debrief are shown as repeated units or as a printed number, never as one icon that grows.
:::

### Look up before you draw

Henry Dreyfuss's *Symbol Sourcebook* (1972) was the product of an attempt to build a data bank of the graphic symbols in use around the world, with a selection published in one reference book [@dreyfuss1972symbol]. The project, managed by Paul Clifton with most symbols drawn by Pamela Holaday over roughly 18 months from mid-1970 to late 1971, sent thousands of "Symbol Questionnaires" asking whether respondents used instructional symbols; many answered with trademarks. The Dreyfuss archive holds about 3,000 hand-drawn symbols, and the book's frontispiece carries "A Plea for more Symbols" [@dreyfuss1972symbol]. Other accounts give different counts for the database and for the symbols printed, so treat the figures as approximate.

The book was organized by discipline, as a dictionary with cross-references and an index. Its method recorded which symbols were in use, not which were understood: no comprehension testing appears to have been part of it, and the later norming work shows that many symbols of the kind collected have low concept agreement without context [@mcdougall1999measuring]. What lasts is the data-bank habit: log each symbol's meaning, provenance, variants and use, and consult that log before inventing a new symbol. The questionnaire replies also show how readily people confuse instruction symbols with brand marks.

::: {.rule #ICO-020 grade="C"}
**Before drawing a new symbol, look for an established one, and take aviation symbols from an authoritative reference, never from memory.** A body of symbols already exists, and reusing a known convention spends the familiarity the audience already has [@dreyfuss1972symbol; @isherwood2007icon].

*In LTF:* the sectional-chart symbols drawn in `sectional-legend/Chart.tsx` (the airport symbol, airspace boundaries, water and city tints) are, in the widget's own words, "an original, simplified drawing in the style of a VFR sectional chart"; they borrow the published chart conventions the lesson teaches rather than inventing new ones. Any new chart or instrument symbol is checked against the current official chart legend or the sim's own display, recorded with its source, and marked for verification under the content rules until checked.
:::

::: {.rule #ICO-021 grade="C"}
**Keep an icon register: for every icon, its intended meaning in one sentence, its label, its class (similar, example, symbolic, arbitrary), its source, where it appears, and any comprehension evidence.** The sourcebook tradition shows the value of recording provenance and variants, and the testing literature needs a written intended meaning to score against [@dreyfuss1972symbol; @nea1991symbol; @iso2014graphical].

*In LTF:* the register can start as the typed `challengeTypeMeta` record extended with `meaning`, `class`, `source` and `tested` fields, plus a similar record for status, callout and landing icons. `DevComponentsPage` renders the whole register as one sheet in both themes, which also serves the side-by-side review in ICO-006.
:::

::: {.rule #ICO-022 grade="C"}
**Never let the brand mark stand for an action, a state or a content type.** Instruction symbols and trademarks are routinely confused, as the replies to the Dreyfuss questionnaires show, and a logo that doubles as a control blurs both [@dreyfuss1972symbol].

*In LTF:* the tail-fin mark in `Logo.tsx` appears as the home link in the header (a universal web convention, with `aria-label="Learn to Fly home"`), as the pulsing `AppLoading` mark and as the favicon. It is not used as a lesson-type icon, a completion mark or a bullet. The `CourseBadge` wings roundel is a separate award graphic and should stay visibly different from the fin.
:::

### Count the arbitrary symbols

Every arbitrary symbol is a vocabulary item a beginner must memorize. A checklist from a later Horton tutorial page, seen only through a search result, asks whether the number of arbitrary symbols in a product is under 20, and whether users with common visual conditions such as myopia, astigmatism, presbyopia or color blindness can still recognize each icon [@horton1994icon]. The number is secondhand and should not be treated as a threshold. The principle, that arbitrary symbols carry a memory cost that grows with their count, follows from the learning experiments, where unfamiliar pairings were slow until learned [@mcdougall2009whats].

::: {.rule #ICO-023 grade="C"}
**Keep the number of arbitrary symbols small, list them, and pair each with a word.** Arbitrary pictures have no semantic link to lean on, so each one must be learned, and the craft checklists cap their number [@horton1994icon; @mcdougall2009whats]. The specific cap is secondhand; the direction is sound.

*In LTF:* the arbitrary marks today are the tier rings and dots, the `DifficultyDots`, the `LessonPath` pin states (filled accent with a check, the ink current pin with a halo, the `line-strong` ring, the dashed locked ring), and the dashed `verify` callout border. All carry words or text alternatives. Any new arbitrary mark is added to the register with its label.
:::

### What this means for Learn to Fly

The dossier names the stock Lucide set as one of the product's generic signals, and the custom challenge-type icons are planned but not drawn. This chapter gives the order of work. First, the icon policy and register (ICO-011, ICO-021), extending `challengeTypeMeta`. Second, the vocabulary and grammar (ICO-016), written as a one-page sheet. Third, one style table for stroke and size (ICO-017), replacing the 1.5 to 3 spread at call sites. Fourth, the drawings, starting with the nine challenge types and resolving the TriangleAlert double meaning (ICO-018). Fifth, a comprehension test of the new set (the next chapter) before the stand-ins are removed.

The custom set is also where the icon language can carry identity. The widgets already have a drawing style: hand-built SVG instruments with a `bezel` body, round `Gauge` dials, fixed instrument colors. Challenge-type icons drawn as small, simplified relatives of those instruments and charts (a runway outline from the sectional's airport symbol, a dial for an instrument procedure, a traffic-pattern rectangle) would tie navigation to content in a way no stock set can. Keep them in `ink` and `ink-2` for page UI: the fixed instrument and chart colors are reserved for drawings, by the rule the token file already states.

## Testing whether a symbol is understood

### What a comprehension test measures

ISO 9186-1 specifies a method for testing the comprehensibility of graphical symbols, defined as the extent to which a variant of a symbol communicates its intended message [@iso2014graphical]. Its stated purpose is to help ensure that symbols and signs are readily and correctly understood when no supplementary explanatory text is shown. It is a procedure for gathering evidence, not a design guide. Part 1 of the series covers comprehensibility; the 2014 edition lists Part 2 for perceptual quality and Part 3 for referent association. The 2014 edition was last reviewed and confirmed in 2019, and a draft replacement was in its enquiry phase at the time of the research for this Part [@iso2014graphical]. The normative text is behind a paywall and could not be read, so its sample size, scoring categories and pass mark are not given here.

A standard is a consensus document, not an experiment. Three things change what a comprehension score means, and they are worth fixing before any test. Who is sampled: the 1991 protocol described below notes that older people and unfamiliar hazards pose particular comprehension problems [@nea1991symbol]. The response format: open-ended answers are harder than multiple choice, which allows recognition and guessing. Context: a symbol in isolation is harder than the same symbol in its place on a screen. None of these is right or wrong, but a score is only comparable with another score gathered the same way [@iso2014graphical].

::: {.rule #ICO-024 grade="C"}
**Before testing an icon, write its intended message as one sentence that a correct answer must match.** Comprehensibility is defined as how far a symbol communicates its intended message, so the message must be fixed before responses can be scored [@iso2014graphical; @nea1991symbol].

*In LTF:* the `meaning` field in the icon register (ICO-021) holds this sentence, for example "This challenge is about flying the traffic pattern around an airport." Scoring compares each participant's answer with the sentence, accepting synonyms.
:::

### An open-ended protocol LTF can run in an afternoon

The *Symbol Comprehension Testing Protocol* (1991), written for a National Endowment for the Arts project that redrew the 40 image messages of the ANSI Z535.3 safety-symbol standard into a visually consistent family, is a short, practical method [@nea1991symbol]. Each person is shown a symbol and asked for a short definition: what it means and what one should do. Booklets with one symbol per page, in a different order for each person, are completed in small groups with no equipment. Of 80 symbols (40 old designs and 40 new), each person sees only one set, so old and new are compared between groups; showing all 80 to one person would take too long, especially for older participants and industrial workers, and invites boredom. The authors cite an earlier test of 25 safety symbols that took about an hour [@nea1991symbol].

The administrator's script is a model of how to keep answers honest. Participants are told that the symbols are being tested, not them; to work alone; not to go back to earlier pages; and to guess if unsure. They are shown a worked example of a poor answer ("gears and hand", "be careful") against a good one that states the exact meaning and the action [@nea1991symbol]. The poor example is the picture-labeling strategy the norming study observed, naming what is drawn instead of what it means [@mcdougall1999measuring]. Showing it in advance teaches people to answer at the level the test needs.

The protocol's limits are plain. It is paper-based, uses small groups, gives no scoring rules for partially correct answers in the pages read, and tests isolated symbols rather than symbols in context [@nea1991symbol]. None of those prevents its use as a template.

::: {.rule #ICO-025 grade="C"}
**Test each candidate icon open-ended and without its label: one icon per screen, a fresh random order per person, the question "what does this mean, and what would you do?", and a poor and a good example answer shown first.** This is the free-response method of the safety-symbol protocol and the family of methods the ISO comprehension standard formalizes [@nea1991symbol; @iso2014graphical].

*In LTF:* the test runs as a short web page or slide sequence with five to ten complete beginners plus a few older users. The instructions say "we are testing the icons, not you". Answers are scored against the register's `meaning` sentence, and confusions are logged by what was guessed instead.
:::

::: {.rule #ICO-026 grade="C"}
**Compare an old and a new version of an icon between groups of people, never by showing both versions to the same person.** Seeing one version teaches the meaning of the other; the safety-symbol protocol splits its old and new sets between groups for this reason and to keep sessions short [@nea1991symbol].

*In LTF:* when the custom challenge-type icons replace the Lucide stand-ins, half the participants see the old set and half the new set, each with the same instructions and the same scoring.
:::

### Set the bar, and the consequence, in advance

The draft ANSI standard of the time recommended acceptance at 85 percent correct responses with no more than 5 percent critical confusions [@nea1991symbol]. The protocol calls this "adequate as a guideline for most messages" but unlikely to be reached by the general population for some, naming unfamiliar hazards such as radiation, biohazard, radio frequency and laser, which may lack concrete pictorial counterparts. It also notes that the standard gave some guidance on comprehension testing but none on legibility [@nea1991symbol]. Other bodies set lower criteria, so "understood" has no single definition [@iso2014graphical].

The protocol's own observation is the important one for LTF. Many flight concepts are like the unfamiliar hazards: they have no picture a beginner already knows. An icon for such a concept will often fail any reasonable threshold, and that is a fact about the concept, not a failure of the designer. The decision to make in advance is what happens when an icon misses: redraw, relabel, or replace the icon with text.

::: {.rule #ICO-027 grade="C"}
**Fix the pass threshold and the consequence of failing before running the test, using 85 percent correct with no more than 5 percent critical (opposite or dangerous) confusions as the bar for anything that affects what a learner does in the sim.** That was the acceptance level of the safety-symbol standard of the time, described as adequate for most messages but out of reach for some unfamiliar concepts [@nea1991symbol].

*In LTF:* an icon that misses the bar is redrawn and retested once; if it misses again, its label becomes permanent. Any icon whose misreading could confuse a safety-relevant step in a lesson or challenge keeps its label whatever its score.
:::

::: {.rule #ICO-028 grade="C"}
**Expect icons for unfamiliar flight concepts to score low, and design their labels from the start rather than treating the score as a surprise.** The protocol names unfamiliar hazards without concrete pictorial counterparts as messages unlikely to reach the criterion for the general population, and the icon experiments find concreteness gives little help for functions that are hard to picture [@nea1991symbol; @mcdougall2009whats].

*In LTF:* icons for concepts such as a stall, trim, a radio call or an airspace class are planned with a permanent word from the first sketch.
:::

### Preference is not performance

People's opinions of a display are a poor guide to how well they use it. Roberts, Gray and Lesnik ran three experiments on schematic metro maps [@roberts2017preference]. In the first, 80 people (28 male, 52 female, mean age 22.0) planned four journeys each on the official octolinear Paris Metro map and on a curvilinear alternative. The curvilinear map was faster: 63 of the 80 had a faster mean time with it, and mean planning time was 42.4 seconds for the curvilinear map when it came first and 37.9 seconds when second, against 51.7 and 48.4 seconds for the official map. Yet preference was unrelated to performance: 38 preferred the official map, 34 the curvilinear one and 8 were undecided, and aggregate ratings of the two did not differ significantly. In the second experiment, 649 respondents recruited through map-interest websites rated nine matched London Underground designs and showed a clear bias toward the octolinear style, with people who held an octolinearity theory of good design distinguishable from those who held a simplicity theory. In the third, three Berlin maps gave the same journey times but received different usability ratings [@roberts2017preference].

The samples are students and enthusiasts and the task is journey planning, so generalization is uncertain, but the dissociation is the point and the paper reports that it replicates earlier work by the same group [@roberts2017preference]. Smallman and St. John report the same split for icons: users rated realistic three-dimensional ship and aircraft icons as preferable, while abstract military symbols produced consistently better identification [@smallman2005naive]. Users judge displays by their theory of what good design looks like, not by what they experienced.

::: {.rule #ICO-029 grade="B"}
**Never accept preference ratings or expert taste as evidence that an icon, chart or diagram works; measure task time and errors first, then ask for opinions.** In matched comparisons of metro maps, people's ratings did not track their own journey-planning speed and reflected prior theories of good design, and realistic icons were preferred while abstract symbols were identified better [@roberts2017preference; @smallman2005naive]. Two research programs with moderate samples; the dissociation has replicated within each.

*In LTF:* the comprehension test for the custom icons scores answers, not liking. A widget or diagram change is judged by a timed reading task ("find the downwind leg", "read the airspeed against the arc") before any "which do you prefer?" question. Positive beta feedback ("this looks great") is recorded but never closes a design question.
:::

::: {.rule #ICO-030 grade="C"}
**Record every test in the icon register with the date, the sample (size and who), the format (open-ended or choice, isolated or in context), the score and the main confusions.** Comprehension scores depend on sample, format and context, so a score without those facts cannot be compared or trusted later [@iso2014graphical; @nea1991symbol].

*In LTF:* the register's `tested` field holds this record. A designer replacing an icon later reads what was learned before drawing.
:::

### What this means for Learn to Fly

LTF has never tested an icon, and it does not need ISO certification to start. The custom challenge-type set is the first candidate: nine icons, nine meaning sentences (ICO-024), a between-groups comparison against the Lucide stand-ins (ICO-026), open-ended answers from beginners (ICO-025), and an 85 percent bar fixed in advance (ICO-027). The callout-type icons (Safety, Sim vs reality, Pro tip, Classic panel, Note, Decision, Memory item, In a real airplane, Verify) are a second set worth testing, because a learner meets them dozens of times and the icons could eventually let a learner skim a lesson for safety notes. Those icons always keep their titles, so the test asks whether the icon adds recognition, not whether it replaces the word.

The same discipline applies beyond icons. Every widget in `src/features/widgets/` is a display a learner must read correctly. ICO-029 says the evidence that a widget works is a learner reading it correctly under time pressure, not a learner saying it is clear. The `WidgetFrame` "Quiz me" mode is already a built-in reading task; logging which questions learners get wrong is the cheapest comprehension test LTF could run.

## Pictures that explain and pictures that decorate

### Explanative illustrations, under conditions

Illustrations do not help learning automatically. Mayer and Gallini argued that explanative illustrations, pictures that show how a system works and not only what it looks like, improve learning from science text under four conditions named in the paper's abstract: the text must suit the illustration, the test must be able to reveal what the illustration taught (transfer of understanding rather than memory for facts), the illustration must be explanative, and the learners must have relatively little prior knowledge [@mayer1990when]. The abstract reports three experiments with 300 college students in total, using illustrations of mechanical devices; a secondary account lists the devices as brakes, a pump and a generator, and describes the comparison as text alone against text with labeled pictures of the parts, of the steps, or of the device in its off and on states with both parts and steps labeled. As later authors summarize the findings, students given the illustrations did better on transfer tests than those reading text alone, and the benefit was larger for learners with low prior knowledge, with little or no benefit for those with high prior knowledge [@mayer1990when]. The method and tables were not available, so no effect sizes are given.

The conditions are a checklist. A Learn to Fly lesson is the case the paper describes: short expository text about a mechanism (how a control surface moves the airplane, how an instrument responds), read by people who have never flown. That is exactly where explanative pictures pay off. The same paper gives no support at all to ornamental or mood-setting pictures, which its conditions exclude.

::: {.rule #ICO-031 grade="B"}
**Make every lesson illustration explanative: it must show how something works, what changes when the learner acts, or where something is, not only what a thing looks like.** Illustrations that showed how a device works improved transfer for low-prior-knowledge learners under conditions that matched text, picture and test [@mayer1990when]. Three experiments with college students; later work replicated the approach with other texts, but no pooled effect size was confirmed.

*In LTF:* a lesson figure of the cockpit labels the control and shows the movement and the result (yoke back, elevator up, nose up), not a photograph of the panel. The three existing lesson images (Module 0 sim settings screenshots) are representational in a useful sense: they show where a setting is. Keep that kind; do not add pictures whose only job is to look like flying.
:::

::: {.rule #ICO-032 grade="B"}
**Design explanative diagrams for the learner with no prior knowledge, and let the learner collapse or simplify them in review.** The benefit of explanative illustration was concentrated in low-prior-knowledge learners and shrank or vanished for those with high prior knowledge [@mayer1990when].

*In LTF:* widgets open in Explore mode at their simplest state with every part labeled. Reference pages (`SpeedsPage`, the kneeboard on the reference hub) serve returning learners with compact versions; a widget on a review page can start collapsed under its `WidgetFrame` header.
:::

::: {.rule #ICO-033 grade="C"}
**Make the quiz test the understanding the picture teaches, not recall of the picture's labels.** The benefit of explanative illustration shows on tests matched to what the picture teaches, transfer of how a system works, and not on surface recall [@mayer1990when]. The exact test items were not confirmed.

*In LTF:* a `QuizBlock` after a control-surfaces widget asks "what happens to the nose when you pull back?", not "what is this part called?". The widget "Quiz me" mode follows the same rule.
:::

### What job is this picture doing?

Carney and Levin's review argues that well-designed illustrations generally improve performance on text-based tasks, a finding from the 1970s and 1980s that research of the 1990s continued to support, and asks why, when and for whom pictures help [@carney2002pictorial]. The review builds on a functional typology of text illustrations from Levin's earlier work, described in secondary sources as four conventional functions and a fifth, less conventional one. Decorational pictures bear little relation to the text and are expected to have little effect on learning. Representational pictures depict content from the text. Organizational pictures give a structural framework for the text's content. Interpretational pictures help clarify a difficult or abstract passage. Transformational pictures include mnemonic components designed to improve recall [@carney2002pictorial]. The key claim is function-first: the same photograph can be useless as decoration and useful as a diagram, depending on what it does for the text.

The review is narrative, by authors who have long worked on pictorial mnemonics, so it is probably friendly to its subject, and no effect sizes from it are given here [@carney2002pictorial]. The distinction between pictures that carry content and pictures that decorate has nonetheless become standard in instructional design and has held up better than any single effect size.

::: {.rule #ICO-034 grade="B"}
**Before adding any picture to a lesson, name its function (representational, organizational, interpretational or transformational) and cut it if the only honest answer is decorational.** Illustrations help learning according to the job they do for the text, and decorational pictures are expected to have little effect [@carney2002pictorial; @mayer1990when].

*In LTF:* the lesson image syntax (`![Alt text](file.webp "Caption")`, per `content/README.md`) gains a review question in `/review-lesson` and the content checklist: "what job does this picture do?". A cutaway of airflow over a wing is interpretational; a flow diagram of a checklist is organizational; a stock sunset behind a wing is decorational and does not belong in a lesson body.
:::

### Interesting is not the same as relevant

The strongest evidence against decorative pictures in lessons comes from the seductive-details literature. Harp and Mayer ran four experiments with 357 undergraduates: students who read science passages containing interesting but irrelevant adjuncts, vivid facts or illustrations, recalled fewer main ideas and generated fewer problem-solving solutions than students who read the same passages without them [@harp1998seductive]. Highlighting the main ideas, stating learning objectives, or adding signaling to the text did not remove the effect. Placing the seductive details at the start of the passage made it worse, and placing them at the end reduced it. The authors argue the details do their damage by priming an inappropriate schema around which readers organize the material, rather than by distracting them or breaking coherence [@harp1998seductive].

Rey's meta-analysis pooled 39 experimental effects from text passages, illustrations and other seductive details and found a significant effect, small to medium for retention and medium for transfer [@rey2012review]. It weighed four rival explanations (working memory overload, attention distraction, schema interference and coherence disruption) and found evidence for and against each, so the mechanism is not settled. Later studies outside this bibliography qualify the size: a 2020 meta-analysis reported mixed findings moderated by factors such as delivery format, subject and learner pacing while still concluding that seductive details can hinder learning, and a 2021 experiment with 132 undergraduates found no consistent harm except when learning objectives were supplied. The honest reading is a real but variable effect.

::: {.rule #ICO-035 grade="B"}
**Keep interesting but irrelevant pictures, anecdotes and decorative media out of lesson explanations, and above all out of a lesson's opening.** A meta-analysis of 39 effects found seductive details harm retention and, more, transfer, and placing such material first made the harm worse [@rey2012review; @harp1998seductive]. Graded B, not A, because later studies find the effect variable and sometimes hard to elicit.

*In LTF:* the first screen of `LessonPage` is the mono lesson label, the h1, the meta row and the "In this lesson you will" objectives `Card`. Nothing decorative is inserted above the objectives: no hero image, no airplane photograph, no ambient video. An engaging story or striking image, if any, goes after the core explanation, in a clearly separate block.
:::

::: {.rule #ICO-036 grade="B"}
**Do not rely on highlighting, headings or other cues to rescue a lesson that contains distracting material; remove the material instead.** Highlighting main ideas, stating objectives and signaling each failed to remove the seductive-details effect [@harp1998seductive].

*In LTF:* a review that finds a decorative block in a lesson resolves it by cutting or moving the block, not by adding a `Callout` or bolding the main point next to it.
:::

### Signal what matters

Cues that tell the learner where to look and how the material is organized, without adding content, have a solid meta-analytic base. Schneider, Beege, Nebel and Rey pooled 103 studies with 12,201 participants and found an average effect of g+ = 0.53 for retention and g+ = 0.33 for transfer [@schneider2018meta]. Signaling mode, textual or graphical, was a significant moderator; whether prior knowledge moderates the effect is reported inconsistently across sources and is treated as open [@schneider2018meta]. The pooled effects are well below the single-experiment figure often quoted from earlier work, the usual pattern as evidence accumulates. Seductive details remain a boundary: signals cannot compensate for clutter [@harp1998seductive].

::: {.rule #ICO-037 grade="A"}
**Signal the part of a picture the text is talking about: highlight it, point to it with an arrow, or give it the same color as the key term in the text.** Across 103 studies, signaling improved retention moderately and transfer less, and graphical as well as textual cues were effective, with mode a significant moderator [@schneider2018meta]. The base is short laboratory studies, and signals do not offset irrelevant material [@harp1998seductive].

*In LTF:* widgets highlight the active part (the control being moved, the instrument being read) with the accent or a fixed display color and fade the rest. A lesson sentence that names a part uses the same word as the widget label. The `Label` primitive in `shared/svg.tsx`, with its surface halo, is the right tool for pointing.
:::

### Linking pictures to words, and who decides what they show

Houts, Doak, Doak and Loscalzo reviewed peer-reviewed studies across health education, psychology, education and marketing with no limit on period [@houts2006role]. Pictures closely linked to written or spoken text markedly increased attention to and recall of health information compared with text alone. Pictures improved comprehension when they showed relationships among ideas or spatial relationships. Pictures could change adherence to instructions, but emotional response to pictures affected whether they increased or decreased the target behavior. People with low literacy were especially likely to benefit [@houts2006role].

The abstract lists seven recommendations: ask how pictures can support key points; minimize distracting details; use simple language with pictures; closely link pictures to text or captions; include people from the intended audience in designing the pictures; have health professionals, not artists, plan the pictures; and evaluate pictures by comparing responses to materials with and without them [@houts2006role]. A secondary summary notes that the specific suggestions within each recommendation are not strongly supported empirically or theoretically, and an erratum exists that was not read; the headline findings on attention and recall are the best supported [@houts2006role].

::: {.rule #ICO-038 grade="B"}
**Put each picture directly beside the sentence it explains, with a short caption in the same plain words the text uses.** Pictures closely linked to text or captions markedly increased attention and recall across a broad health-communication literature, and comprehension gains came from pictures showing relationships or spatial layout [@houts2006role; @mayer1990when].

*In LTF:* every lesson image has a caption (the title part of the image syntax), and every widget sits immediately after the paragraph that introduces it, never in a gallery at the end of a section. Labels inside a widget use the lesson's terms exactly.
:::

::: {.rule #ICO-039 grade="C"}
**Let the content expert decide what a picture must show, let the designer decide how it shows it, and let beginners check what it appears to show.** The health-communication review recommends that domain experts plan pictures and that members of the intended audience take part in designing them; the recommendations themselves are only weakly evidenced [@houts2006role].

*In LTF:* a diagram request states the fact or mechanism it must show and its source (the aviation-facts rule), the designer draws it with the widget primitives, and a five-person "what do you think this shows?" check with beginners runs before it ships.
:::

::: {.rule #ICO-040 grade="B"}
**Do not use dramatic or frightening imagery to teach safety content.** Emotional response to pictures affected whether they increased or decreased the target behavior in health communication, so a vivid image of a mistake can raise worry without improving the action [@houts2006role].

*In LTF:* safety `Callout`s, stall and emergency lessons, and the random-event alert in `FlyPanel` use calm, schematic diagrams of what to do, not pictures of crashes or damage. The same applies to the share card and landing page.
:::

### What this means for Learn to Fly

LTF is already on the right side of this chapter by omission: the landing page has no illustration, and lessons have only three images. That restraint is better than a stock-photo layer. The risk is the opposite move. Decision D-25 in the plan described a detailed Skyhawk illustration for the landing page; the code does not have one. If an illustration is ever added there, it is brand work, judged by the brand and aesthetics Parts, and it stays out of lessons, where ICO-034 and ICO-035 apply.

The widgets are LTF's explanative illustrations, and their frame already encodes several rules. The "Simplified model" badge, the Explore and "Quiz me" toggle and the "Describe this diagram" disclosure in `WidgetFrame` are a good pattern: the badge states what kind of picture this is, Quiz me tests the understanding the picture teaches (ICO-033), and the description gives a text equivalent. What the frame does not yet enforce is placement and signaling. Add to the content checklist: the widget follows the paragraph that introduces it (ICO-038), the active part is highlighted (ICO-037), and the lesson's opening screen carries nothing decorative (ICO-035).

Finally, give the image block in `LessonRenderer` a function field. A lesson author who must type `function: interpretational` or `function: organizational` in front matter has to think about the job of the picture, and a reviewer can reject `decorational` in a lesson body on sight.

## Realism, schematics and motion

### The pull of realism

Users and designers prefer realistic displays they believe are intuitive, even when those displays produce worse performance. Smallman and St. John call this naive realism, the misplaced faith in people's ability to extract information from realistic displays, and trace it to a folk theory that vision works like an inner screen showing an accurate, complete and easy picture of the world [@smallman2005naive]. Their paper, from a program of US Navy work on tactical displays, brings together several studies around three misconceptions.

Perception feels easy but is hard. Realistic three-dimensional perspective views were surprisingly poor for precise judgments of relative position and distance, because viewers assume depths compress at the same rate as widths and so underestimate distance; the authors report the pattern in 71 percent of line drawings by a large sample of psychology students [@smallman2005naive]. Perception feels complete but is sparse. In their own studies, users rarely detected changes that occurred during interruptions, and change detection was near chance even while monitoring. A tool that listed changes in a table improved response times by as much as 80 percent and reduced misses to zero, whereas an instant-replay tool, which preserved the realism of time, was less useful than no tool at all. Perception feels accurate but is distorted. Users rated realistic 3-D ship and aircraft icons as preferable, while abstract military symbols produced consistently better identification, for three reasons the authors give: similar objects have similar realistic icons, realistic icons overload the spatial dimension (a 3-D icon confounds pitch with heading), and perspective views mix symbolic and spatial information [@smallman2005naive].

The remedy has three prongs matched to the three misconceptions: simplify and caricature reality, quietly supplement what perception misses, and gently inform users of likely error. The authors are explicit that they are not calling for sparse displays, and that caricatured icons maximized both performance and preference in their own symbology work. Realism is not always wrong: where the detailed experience is part of the task (their example is smoke and noise for firefighters), fidelity can matter [@smallman2005naive]. The evidence is mostly military display tasks with trained participants, so transfer to beginners reading a cockpit diagram is an inference, but the direction is strong.

::: {.rule #ICO-041 grade="B"}
**Teach with simplified, caricatured drawings of the cockpit and instruments, and use realistic sim screenshots only to show where to look in the sim.** Realistic displays and icons are preferred but often perform worse than caricatured ones, which exaggerate the features that matter and drop the rest; caricature maximized both performance and preference in the authors' own symbology work [@smallman2005naive; @kendall2016iconic].

*In LTF:* the widgets (`g1000-pfd`, `airspeed-indicator`, `turn-coordinator`, `vor-cdi`) stay schematic: flat fills from the fixed `instrument`, `bezel`, `sky` and `ground` tokens, no gloss, no rendered depth. Lesson screenshots, such as the planned "shot-list" images named in Module 20 lessons, are labeled as orientation ("this is where the button is in MSFS 2024") and placed next to the step that uses them, not used to explain how an instrument works.
:::

::: {.rule #ICO-042 grade="B"}
**When a learner must notice what changed, list the changes explicitly rather than relying on them to see the change or replay it.** Change detection during monitoring was near chance, a change table cut response times by as much as 80 percent and eliminated misses, and an instant replay did worse than no tool [@smallman2005naive].

*In LTF:* the checklist runner and the Fly tab show ticked steps with `border-go bg-go-tint` and the debrief shows "Criterion by criterion" rows: that is a change list, keep it. A widget whose state changes when the learner moves a slider prints the changed readouts as text next to the drawing (in the pitch-power widget, the new pitch and airspeed values in `readout` type) instead of trusting the learner to see the needle move.
:::

::: myth
**"The more realistic a display, the more intuitive it is."** Designers and users widely believe this, and they rate realistic displays higher. In tactical display studies, realistic perspective views produced distance errors, realistic icons were identified worse than abstract symbols, and a replay that preserved temporal realism did worse than no aid [@smallman2005naive].
:::

### When a diagram beats a map

Henry Beck's London Underground diagram is the classic case that a schematic can beat a map when the task is topological: what connects to what, and in what order. Ken Garland, a designer and friend of Beck from the 1950s until Beck's death in 1974, wrote the first full history of it from Beck's sketches, mock-ups and correspondence, which Garland inherited [@garland1994beck]. Garland argues that the diagram's lasting strength came from its construction method: geometric drawing that ignores surface geography (except the Thames), giving a simple but comprehensive system and a unifying identity that could expand with the network while staying true to its original design. Dates reported in search results, not checked against primary records, put a presentation drawing in 1931, acceptance in 1932 and a first pocket edition in January 1933 in a run of 750,000 [@garland1994beck].

A later paper summarizes the technique Garland documents as three moves: not depicting surface detail irrelevant to journey planning; simplifying line trajectories to horizontals, verticals and 45-degree diagonals joined by tight corners (now called octolinearity); and expanding the congested center and compressing the suburbs so station names fit without interrupting lines [@roberts2017preference; @garland1994beck]. Garland's book is documentary history and appreciation, not research.

Its design claims were later tested, and the result is a qualification. In Roberts's experiments, a curvilinear Paris map was faster to plan journeys on than the official octolinear map, and three Berlin maps optimized for simple line trajectories gave equal journey times; the authors conclude that octolinearity is not a proven gold standard [@roberts2017preference]. Roberts proposes five criteria instead: simplicity (simple line trajectories), coherence (parallel lines, regular shapes), balance (even density, enlarging the center), harmony (aesthetic features that may not affect usability) and topographicity (not distorting so far that confidence or journey choices suffer). The paper cites a study finding inefficient journeys 30 percent of the time in one poorly topographic region [@roberts2017preference].

::: {.rule #ICO-043 grade="C"}
**Draw sequences, procedure flows and the structure of a flight as schematics: simple line trajectories, one line weight, regular spacing and consistent junction symbols, with geography left out unless the task needs it.** The schematic method works for topological tasks by removing irrelevant surface detail and simplifying trajectories, and simplicity and coherence are the criteria later research supports, not any one angle system [@garland1994beck; @roberts2017preference].

*In LTF:* `LessonPath` (numbered pins on one vertical 3 px line), the curriculum `LessonPath` of modules and the `/roadmap` ladder are already schematics of this kind; keep them to one line weight and one pin vocabulary. A lesson diagram of a flight's phases or a checklist's flow uses the same visual vocabulary: pins, one connector, labels to one side.
:::

::: {.rule #ICO-044 grade="B"}
**When a schematic distorts real geometry, show its link to the real layout once, and never distort so far that a learner would choose wrongly from it.** Poor topographicity was associated with inefficient journeys 30 percent of the time in one region, and topographicity is one of the five criteria for schematic design [@roberts2017preference].

*In LTF:* the `traffic-pattern` widget draws the pattern as a neat rectangle around a runway; the lesson that introduces it shows it once over the drawn sectional or an airport diagram so the learner sees that the real pattern follows the runway and the terrain. Nothing in a schematic implies a distance, angle or altitude that the text does not state.
:::

::: {.rule #ICO-045 grade="C"}
**Give the visual language a named custodian and written rules, so it can grow without drifting.** Beck's diagram expanded with the network for decades because it was built on a method, and the abrupt end of his stewardship in 1960 is a reminder that a visual system needs both rules and an owner [@garland1994beck].

*In LTF:* the owner of the design system (the person who merges `tokens.css` and `src/components/` changes) is also the custodian of the icon register, the widget primitives in `shared/svg.tsx` and the diagram vocabulary. New widgets are reviewed against those rules before merge.
:::

### Animation: congruent in principle, hard to apprehend

Tversky, Morrison and Betrancourt give two principles for any graphic [@tversky2002animation]. The Congruence Principle: the structure and content of the external representation should correspond to the structure and content of the concept it conveys. The Apprehension Principle: the representation should be readily and accurately perceived and comprehended. By congruence, animation should be ideal for change over time. Their review of studies comparing animated and static graphics for teaching complex systems found otherwise. Where animation won, the animated version usually carried more information than the static one (a heart showing blood pathways the static picture lacked; a physics picture that omitted the fact needed to understand inertia) or the animated condition also allowed interactivity or required prediction, both helpful on their own. Elsewhere animation failed to help: for learning a graphics editor any graphic beat none but animated did not beat static; in a study of help systems, animation users finished training faster but did a later test more slowly, and after a week text learners improved while animation learners declined; for algorithms, animation was no better than static diagrams plus prediction [@tversky2002animation].

Animation fails apprehension because movement can be too fast to perceive accurately (the paper's example is paintings of galloping horses whose legs are drawn wrongly), because people's mental models of motion are often wrong, and because many continuous events are conceived as sequences of steps, which a series of static frames matches better than a film. Frames allow comparison and reinspection; animations are fleeting. The advice is explicit: lean toward the schematic, make animation slow and clear enough to perceive changes and timing, annotate with arrows or highlights to direct attention, and consider interactivity (stop, start, replay, zoom, speed control) [@tversky2002animation]. The conclusions are limited to teaching complex systems, the review dates from 2002, and the authors concede that whether animation conveys the subtle microsteps and manner of change better than static graphics "is unknown". Real-time animation that conveys change in space and time, such as a fill bar, is described as the most promising use.

::: {.rule #ICO-046 grade="B"}
**Explain a change over time with a short sequence of static frames and arrows by default, and animate only where the timing or manner of the change is itself the lesson.** In comparisons of animated and static graphics for teaching systems, animation's apparent advantages traced to extra information or interactivity, and static frames match how people conceive events as steps and allow comparison [@tversky2002animation]. An expert review, not a meta-analysis, and dated.

*In LTF:* a lesson on what happens to airspeed when the nose pitches up shows three frames (before, during, after) with arrows, or a widget the learner moves; it does not autoplay a film of the needle. Small multiples of the same instrument at three states (see the chapter on editorial design) are the default form.
:::

::: {.rule #ICO-047 grade="B"}
**Wherever a diagram animates, give the learner control: pause, replay, step, slow speed, and a side-by-side before and after.** Interactivity is the factor the review identifies as able to overcome the apprehension problems of animation, and comparison and reinspection are what static frames do better [@tversky2002animation].

*In LTF:* the widgets are already learner-driven (sliders are native range inputs, there is a "Reset"); keep every widget's motion a response to the learner's input, with no autoplay. The needle transition in `Gauge` (`transition-transform duration-150`) is a short follow, which is fine; anything longer than a follow needs a step control.
:::

::: {.rule #ICO-048 grade="B"}
**When testing whether an animated or static version teaches better, make the two carry exactly the same information and the same interactivity.** Most apparent advantages of animation came from comparisons where the animated version showed more or allowed more [@tversky2002animation].

*In LTF:* if LTF compares a widget with a static figure in a usability check, both show the same labels and states, and the static version gets the same step control as frames.
:::

### What this means for Learn to Fly

LTF's widget style is right by this evidence, and it is also the product's most distinctive visual asset. The G1000 PFD with its `fill-bezel` body and soft keys, the airspeed dial and tape with white, green and yellow arcs, the drawn sectional: these are caricatures in the Smallman sense, real enough to recognize and simple enough to read. Keep them flat. Resist any proposal to make them glossier, three-dimensional or photographic in the name of realism (ICO-041); the evidence says users will like it and learn less.

The motion tokens are also compatible with this chapter. `fade-in`, `pop-in`, `slide-in-*` and `rise-in` are 200 ms entrances, not explanations; `tier-pop` is a 400 ms celebration; `warning-pulse` is a ring that expands, "never the text". All honor reduced motion. None is used to explain a mechanism, which is correct. The one place to add motion with care is a widget whose subject is a rate (how fast a needle moves when power changes); there, a learner-controlled, slowable animation with annotated frames (ICO-047) is the form.

The schematic vocabulary (ICO-043) is already present in `LessonPath`. Extend it to lesson diagrams of sequences instead of inventing a new flowchart style per lesson, and give it a custodian (ICO-045).

## The grammar of diagrams: visual variables

### Count what varies, then assign variables

Jacques Bertin's *Semiology of Graphics* proposes a formal grammar for graphics [@bertin2010semiology]. Any set of information consists of an invariant, the common ground every data point shares, and a number of components, the things that vary. A graphic works only if each component gets its own visual variable, so the designer must first count the components and decide how many dimensions the drawing has to carry. In the sample chapter published by Esri, a price-over-time series has two components and uses the two dimensions of the plane; comparing two stocks adds a third component and so a third variable (size, in that example), and comparing two stocks in two cities adds a fourth (texture) [@bertin2010semiology]. Bertin also distinguishes three functions of a graphic: recording information, communicating it as a simplified message, and processing it, using the drawing to find structure by manipulating it.

Bertin identified seven variables. Two are the planar dimensions (location); the rest are the retinal variables: size, shape, orientation, color hue, color value (lightness) and texture [@bertin2010semiology]. He sorted them by what they let the eye do. Associative variables let all marks sharing a value be seen as a group; he took location, shape, orientation, hue and texture to be associative, and size and value to be dissociative, because one variation dominates. Selective variables let the eye isolate one category and ignore the rest; Roth's later summary reports that Bertin held shape to be the only variable that is not selective. Ordered variables are read as more or less: location, size, value and texture. Quantitative perception, estimating how much more, he restricted to location and size [@bertin2010semiology].

These rules are a theory derived from craft analysis, not experiments, and the taxonomy varies by scholar; later authors added variables such as arrangement, saturation, crispness, resolution and transparency [@bertin2010semiology; @maceachren1995how]. The vocabulary is nonetheless the standard one in cartography and visualization, and it gives a design review something precise to ask.

::: {.rule #ICO-049 grade="C"}
**Before drawing a diagram, list the components the learner must read and give each its own visual variable; never encode two components in one variable.** A graphic works only when each varying component has a distinct variable the eye can separate [@bertin2010semiology]. Craft theory, widely adopted, not experimentally derived.

*In LTF:* the airspeed indicator widget has components such as the current speed, the operating ranges and the limit. Current speed is position of the needle (location); the ranges are colored arcs (hue on a positional scale); the limit is a line (shape and location). Adding, say, a target speed means a fourth component with its own variable (a distinct marker shape), not a second needle in a similar color.
:::

::: {.rule #ICO-050 grade="C"}
**Do not ask a learner to find a target by its shape alone among many similar marks; make the target differ in value or hue.** Shape is the one visual variable Bertin held not to be selective: the eye cannot isolate one shape category quickly among others [@bertin2010semiology]. Consistent with the evidence that complexity and search interact for icons [@mcdougall2000exploring].

*In LTF:* on the drawn sectional (`sectional-legend/Chart.tsx`) the hotspot the lesson is discussing is lifted by value or the accent, not marked by a different glyph among the airport symbols. In the challenge card grid, the learner's best tier is a word plus a colored ring, not a shape difference.
:::

::: {.rule #ICO-051 grade="C"}
**Reserve size and value (lightness) for importance and order, because they dominate the image.** Bertin classed size and value as dissociative: a variation in either overrides the grouping carried by other variables [@bertin2010semiology].

*In LTF:* the heaviest, darkest or largest mark on a widget is the thing the learner reads first (the needle, the current state); arcs, ticks and labels are lighter. On pages, `ink` text and the `ink` current pin in `LessonPath` are the dominant marks, and decorative elements never use full `ink` value at large size.
:::

### Syntactics: match the variable to the kind of data

Alan MacEachren's *How Maps Work* moved cartographic design from craft rules toward a cognitive and semiotic framework, arguing that symbolization choices should be justified by how people see and understand maps [@maceachren1995how]. Its most reused contribution, per Roth's encyclopedia entry on visual variables, is the extension of Bertin's set and a "syntactics" that rates each variable as good, marginal or poor for nominal, ordinal and numerical data. Unordered variables (hue, orientation, shape) suit nominal data. Ordered but not quantitative variables (value, saturation) suit ordinal data. Only location and size suit numbers. MacEachren added crispness, resolution and transparency, argued that saturation, crispness, resolution and transparency are strongly ordered while texture is only marginally ordered, and a later study reported that crispness was the most effective variable for one uncertainty task [@maceachren1995how]. The book is a synthesis of research more than a source of new experiments, and visual-variable taxonomies still differ between scholars.

::: {.rule #ICO-052 grade="C"}
**Use hue and shape only for categories, value or saturation for ordered levels, and position or length for quantities the learner must compare.** Variables differ in whether they are read as unordered, ordered or quantitative, and only location and size support judgments of how much [@maceachren1995how; @bertin2010semiology].

*In LTF:* status uses hue for category plus an icon and a word (`go`, `caution`, `warn`), and escalation from normal to caution to warning is also shown by rising intensity and a larger frame (the `border-4 border-warn` event alert). Airspeed against a limit is shown by needle position and tape position, never by a hue alone. The tier colors (gold, silver, bronze) are categories and always print the word.
:::

::: {.rule #ICO-053 grade="C"}
**Show uncertain or estimated values with reduced crispness or transparency, and say in text that they are estimates.** Crispness and transparency are ordered variables suited to showing uncertainty, and crispness performed best in one uncertainty task [@maceachren1995how].

*In LTF:* "Sim time (estimated)" on the dashboard and any model-based curve in a widget (a simplified glide or wind estimate, if one is added) can be drawn with a softer or partly transparent stroke, with the word "estimated" or "simplified" beside it, as `WidgetFrame` already does with its "Simplified model" badge.
:::

### Color schemes by data type

Cynthia Brewer's work is the practical bridge from these principles to color ramps. Harrower and Brewer's ColorBrewer tool recommends ready-made schemes matched to the number of data classes, the type of data (sequential, diverging or qualitative) and the end-use medium (screen, print, projection or photocopy), with schemes said in a summary to run from 3 to 12 classes [@harrower2003colorbrewer]. The sequential and diverging schemes were built by hand-adjusting value and saturation within or between hues, the qualitative ones by varying hue and value, with the Munsell system a strong influence, and the tool filters for schemes safe for color-vision deficiency, photocopying and projection. The motivating problem was that thematic mapping is often done by analysts without training in color design [@harrower2003colorbrewer]. It is a tool paper, not an experiment; its schemes were hand-tuned and visually evaluated.

On rainbow schemes the evidence is contested. Cartographers long advised against spectral schemes for quantitative data. Brewer's 1997 paper reports research finding that people prefer spectral schemes and read them accurately when they are designed as multi-hue diverging schemes, with light colors at a meaningful midpoint and dark colors at both extremes, and notes that skipping the yellow-greens helps readers with red-green color vision deficiency [@brewer1997spectral]. Borland and Taylor argue the classic rainbow is rarely the best choice, because its hues have no perceptual order, its luminance varies uncontrollably and it creates apparent boundaries that are not in the data [@borland2007rainbow]. A 2023 reply outside this bibliography, by three authors who had themselves criticized rainbows, argues that the experimental evidence is mixed, with rainbow maps sometimes most accurate when a value is read with a key, while not defending the classic HSV rainbow. The common ground is narrow: avoid the classic rainbow, organize lightness deliberately, and test the task.

::: {.rule #ICO-054 grade="C"}
**Choose a color scheme by data type first (sequential for how much, diverging for above and below a true midpoint, qualitative for unordered groups), then by number of classes, then by medium, and check it separately in each theme.** Scheme type should match data type, and the same ramp behaves differently on different media [@harrower2003colorbrewer; @brewer1997spectral].

*In LTF:* any future heat map of skill or progress uses one hue from light to dark. A deviation-from-target display (above or below a target value) uses a diverging scheme with the neutral middle at the target. Each scheme gets a Day and a Night version tested on `canvas` and `surface`, not one inverted copy.
:::

::: {.rule #ICO-055 grade="D"}
**Do not use a rainbow ramp for ordered data; a multi-hue spectral scheme is acceptable only as a diverging scheme with a meaningful midpoint, controlled lightness and no yellow-green confusion pair.** The classic rainbow lacks perceptual order and controlled lightness and invents boundaries [@borland2007rainbow], while spectral schemes designed as lightness-controlled diverging schemes were preferred and read accurately [@brewer1997spectral]; later work is mixed, so the question is open.

*In LTF:* no widget or dashboard uses a rainbow gradient. The airspeed arcs are not a ramp: they are four categorical bands on a positional scale, which is a different case and correct.
:::

::: {.rule #ICO-056 grade="C"}
**Make every color encoding also differ in lightness, and put a legend or direct label beside the colored marks.** Uncontrolled lightness is a core failure of the rainbow, the recommended sequential and diverging schemes are built on controlled lightness, and schemes are screened for color-vision deficiency because hue cues can vanish [@borland2007rainbow; @brewer1997spectral; @harrower2003colorbrewer].

*In LTF:* the widget arcs already carry text legends, per the dossier. Every new colored series in a widget or chart is checked in grayscale and labeled directly ("green arc: normal operating range", with the range stated by the lesson's token, not a typed number), not by a separate key.
:::

### Graphics that record, communicate or process

Bertin's three functions sort LTF's graphics by job [@bertin2010semiology]. Progress screens record: the dashboard's per-module `ProgressBar`s and the challenge `HistoryTab` table keep a faithful account and should prioritize accuracy and comparability. Lesson diagrams communicate: they carry a simplified message and should strip everything that does not serve it. A widget processes: the learner manipulates it to discover structure (what happens to the needle when this slider moves), so it needs direct control and immediate, legible feedback. Mixing the jobs produces familiar failures: a dashboard that tries to communicate a story by emphasizing some numbers distorts the record; a lesson diagram that tries to record every detail fails to communicate.

### What this means for Learn to Fly

The fixed instrument and chart tokens make LTF unusually well placed to apply this chapter, because its colors already have meanings. `arc-white`, `arc-green`, `arc-yellow` and `arc-red` are the airspeed indicator's categories; `display-magenta`, `display-cyan` and `display-green` are the glass-cockpit display's categories; `chart-blue` and `chart-magenta` are the sectional's line categories; `sky` and `ground` are the attitude indicator's two regions. Each is a qualitative scheme with a meaning borrowed from the real instrument or chart. Two rules protect them. First, never reuse an instrument or chart color for a different meaning anywhere else (the token comment already says page UI never uses them; extend that to "widgets never repurpose them"). Second, when a widget needs an LTF-specific highlight (the part under discussion), use the page accent or a value change, not a borrowed instrument hue, so the learner does not mistake a teaching highlight for a real display state.

Contrast was computed for this Part for a few of these fixed pairs: `arc-yellow` on `instrument` is about 12.5:1, `arc-green` about 8.4:1, `arc-red` about 5.1:1 and `display-magenta` about 7.8:1; on the sectional, `chart-ink` on `chart-land` is about 13.2:1, `chart-blue` about 6.1:1, `chart-magenta` about 6.3:1 and `chart-blue` on `chart-water` about 4.8:1. All clear the 3:1 non-text floor (ICO-014). Translucent strokes such as `stroke-chart-magenta/25` and `stroke-chart-ink/25` in `Chart.tsx` do not, by design: they are background structure, and must never be the only cue for something the quiz asks about.

The dashboard is the other application. When LTF adds richer progress graphics, decide first whether each one records, communicates or processes, then pick variables by data type (ICO-052) and schemes by ColorBrewer logic (ICO-054).

## Map craft: layers, clutter and honest simplification

### Quiet grounds and small bright areas

Eduard Imhof, professor of cartography at the Swiss Federal Institute of Technology in Zurich from 1925 to 1965, argued that a map must be designed, not merely drafted: the cartographer chooses what to show, how strongly and in what visual register, so that a very large amount of terrain data reads as something simple [@imhof2007cartographic]. A reviewer of the 2007 edition quotes the book's page 359 to the effect that only simplicity gives a lasting impression. The book's sixteen chapters run from a history of relief depiction and a theory of color to contour lines, shading, hachures, area tinting and, in chapter 14, the "interplay of elements", the techniques the reviewer calls classic for keeping layered elements such as contour lines and text clear [@imhof2007cartographic]. Chapter 6 includes exacting tables such as minimum type sizes for spot-height values by map scale.

Tufte reproduces Imhof's rules of color composition from page 72 of the 1982 English edition [@tufte1990envisioning; @imhof2007cartographic]. The first: pure, bright or very strong colors are unbearable when they stand unrelieved over large adjacent areas, but can be used sparingly on or between dull background tones. The third: large background colors should be muted, grayish or neutral so that smaller bright areas stand out. The fourth: a picture with two or more large enclosed areas of different color falls apart, and unity comes from interweaving the colors of one area through the other; Tufte footnotes that this fourth rule is pushed too far toward a general aesthetic theory, noting that Mondrian violates it [@tufte1990envisioning]. Ordnance Survey's cartography guide, outside this bibliography, independently summarizes the same approach: strong saturated colors in small areas, quiet base colors that give way to smaller brighter ones.

Imhof's book is craft authority from the Swiss national-map tradition, with plates of the Alps and advice tied to print reproduction; its rules on relief lighting are conventions for perceiving terrain, not UI rules [@imhof2007cartographic]. Later empirical cartographers tested parts of the color and symbol advice and kept the broad principles: restraint with saturation, tonal separation of layers, simplicity.

::: {.rule #ICO-057 grade="C"}
**Keep large areas of any diagram or page in muted, low-saturation tones, and spend strong color only on small areas the learner must act on.** Strong colors are unbearable over large adjacent areas but work sparingly against dull grounds, and large backgrounds should be muted so small bright areas stand out [@imhof2007cartographic; @tufte1990envisioning]. Craft rule from print cartography; the principle has been kept by later empirical work.

*In LTF:* the warm-neutral `canvas` and `surface` grounds and the single teal accent already follow this. In widgets, `fill-chart-land` and the hill and water tints are the quiet ground, and `chart-magenta` and `chart-blue` are lines and small symbols. Do not fill a large area with `accent-tint`, `warn-tint` or an arc color; tints mark a single card or row, not a band.
:::

::: {.rule #ICO-058 grade="C"}
**Give every label in a diagram a clear plane of its own: a halo or knockout behind the text, and no line running through it.** Imhof's interplay-of-elements chapter is the craft source for keeping layered lines and lettering separately legible [@imhof2007cartographic].

*In LTF:* the `Label` primitive in `shared/svg.tsx` already paints a 4-unit `--color-surface` stroke behind 13-unit semibold text (`paintOrder="stroke"`): keep it as the only way widgets set text over drawings. `ChartText` in the sectional should get the same halo against `chart-land`, and leader lines stop short of the label.
:::

::: {.rule #ICO-059 grade="C"}
**Set the minimum rendered size of diagram labels by the smallest frame they will be shown in, not by the drawing's own coordinates.** Imhof's minimum-size tables tie label size to scale and viewing distance, and a scaled SVG shrinks its type with the frame [@imhof2007cartographic].

*In LTF:* the sectional chart is drawn on a 720 by 480 coordinate grid with `ChartText` sizes from 8 to 13 units. On a 375 px phone, with the page gutter and the `WidgetFrame` padding, the drawing renders at a little under half scale, so the 8-unit and 10-unit labels come out at roughly 3.5 to 4.5 px (an estimate computed for this Part from the viewBox and layout classes, not measured on a device). Either the widget switches to a simplified phone layout with fewer, larger labels, or labels are sized in screen pixels.
:::

### Every added element adds noise

Tufte's chapter on layering and separation borrows from Josef Albers the observation that two elements placed together create a third visual effect, written as 1 + 1 = 3 or more: incidental white paths, vibration and patterns that carry no information [@tufte1990envisioning]. The noise of 1 + 1 = 3 is directly proportional to the light-dark contrast between figure and ground, so on white grounds a range of lighter colors minimizes incidental clutter. Grids should be gray and delicate, because dark grid lines are chartjunk, and in a look-up table the grid should still be muted relative to the data. Thinning two sides of each block on a map line pair stops vibration. Tufte ties this to practice: signal enhancement through noise reduction can reduce viewer fatigue and improve the accuracy of readings from a computer interface, a flight-control display or a medical instrument. One of his cautionary examples is an index in a manual for flying small aircraft whose entries have no page numbers and vibrate visually [@tufte1990envisioning].

On color, Tufte's first principle is "do no harm". He lists four uses of color (to label, to measure, to imitate reality, to enliven), says that more than 20 or 30 colors frequently produce negative returns for encoding abstract information, and recommends a palette drawn from nature, especially lighter blues, yellows and grays, with spot highlights of strong color [@tufte1990envisioning]. This is an essay by a recognized authority, not an experiment, and some of its claims are contested; the "no decoration" stance in particular is a strong default rather than a tested law (see the chapter on ornament).

::: {.rule #ICO-060 grade="C"}
**Subtract before adding: mute grids, ticks, rules and borders relative to the data, and add a border, shadow or tint only when it separates something the learner needs separated.** Every added element creates incidental visual activity in proportion to its contrast, and muting structure relative to data reduces it [@tufte1990envisioning].

*In LTF:* inside widgets, tick marks and grid lines use the translucent ink strokes already in `Chart.tsx` (`stroke-chart-ink/30`), never full ink. On pages, the dossier counts roughly 116 `rounded-md` and `rounded-lg` uses and many hand-inlined `rounded-lg border border-line bg-surface p-4 shadow-1` cards; a card inside a card, or a bordered card on a bordered panel, is the 1 + 1 = 3 problem. One container edge per level of grouping.
:::

### Clutter has a measurable cost, even for experts

The strongest aviation-specific evidence in this Part is an experiment on chart clutter. Chandra and Grayhem, of a US Department of Transportation human factors group, had 47 professional pilots find specific pieces of information on high-fidelity current charts and on modified charts that split a cluttered procedure onto several simpler images, for approach and departure procedures, shown one at a time on a monitor [@chandra2013evaluation]. Pilots were just over 6 seconds faster with modified approach charts and almost 3 seconds faster with modified departure charts, consistently across the airports used. The authors' clutter metric simply counted the visual elements in a depiction, each with equal weight: one current approach image had 142 elements, a modified single-path image 22. After removing slow outliers (responses over 60 seconds, 1.8 percent of trials), element count correlated with response time at 0.87 for approaches and 0.88 for departures, with a regression slope of 66 milliseconds per element and an intercept of 8.5 seconds [@chandra2013evaluation]. The authors read this as serial visual search.

Accuracy was at least 90 percent on most questions, but two questions about "at or below" altitude constraints scored 64 and 55 percent, and the authors suggest pilots may have misread them because they violated routine expectations, because the graphic depiction was misread, or because altitude constraints are inherently complex [@chandra2013evaluation]. The study's own limits: the task was finding one specific item, whereas charts are also used for planning and orientation; pilots did not have to find the right chart among several; and the costs of splitting (more pages to carry and find) were not studied. It is one experiment, with prototype charts. It describes display behavior only, and nothing in it is flight procedure guidance for this book.

Rosenholtz, Li and Nakano proposed computable measures of clutter (Feature Congestion, Subband Entropy and Edge Density), framing clutter as a stand-in for the number of items competing for attention, and reported that color variability matters to clutter [@rosenholtz2007measuring]. Later comparisons found no single index clearly best and moderate agreement among human judges, and the measures were validated on photographs, maps and visualizations rather than on interface screens, so they support a review aid, not a threshold [@rosenholtz2007measuring].

::: {.rule #ICO-061 grade="B"}
**Give every diagram an element budget, and remove or move to a separate view any element the current question does not need.** Time to find information rose by about 66 milliseconds per visual element, nearly linearly (r about 0.87), for professional pilots using approach and departure charts, and splitting cluttered charts saved several seconds per look-up [@chandra2013evaluation]. One experiment with experts; beginners are likely to pay at least as much, but that is untested.

*In LTF:* count the marks on each widget at its default state and record the count in the widget's test file. The drawn sectional shows only the features its current hotspot needs, with the others toggled off or faded. Fly mode panels carry the lowest budget of all: if a hundred extra elements would cost several seconds of search for a professional, the learner glancing away from the sim cannot afford them.
:::

::: {.rule #ICO-062 grade="B"}
**Give extra design attention and deliberate testing to information that is subtle or that violates expectations, not only to information that is dense.** The worst accuracy in the chart study came on constraint questions whose wording or depiction ran against routine expectations, not on the most cluttered charts [@chandra2013evaluation].

*In LTF:* where a lesson or quiz depends on a qualifier ("at or below", "not above", "until") the qualifier is set in words, in the text and in the diagram label, never carried by a symbol that looks like its opposite. `/review-lesson` adds these items to its sim verification list.
:::

::: {.rule #ICO-063 grade="C"}
**Use a simple clutter measure, such as an edge-density score on screenshots, to flag screens far busier than their siblings, and send flagged screens to human review rather than failing them automatically.** Clutter is partly measurable, color variability adds to it, but no index is settled and none has a validated threshold for interfaces [@rosenholtz2007measuring].

*In LTF:* the Playwright screenshots already taken for end-to-end tests could feed such a check for `LessonPage`, `ChallengePage` and `FlyModePage`, with the result as a review note.
:::

### Every map tells white lies

Mark Monmonier's argument is that distortion is unavoidable, and that this is why readers need skepticism [@monmonier2018how]. A map must distort reality to put a three-dimensional world on a flat sheet, its symbols are almost always larger than the features they represent, and it must be selective to avoid hiding critical information in a fog of detail; he calls this the cartographic paradox, that an accurate map has to tell white lies. Because readers tolerate white lies, serious ones are easy to slip in. A single map is one of an indefinitely large number that could be made from the same data. He also warns that software lets people without cartographic training produce maps that look respectable, with crisp type and uniform symbols, while using an inappropriate projection or misleading symbols [@monmonier2018how]. The book is essay and example, its examples partly dated, and its purpose is critical literacy, not deception.

J. B. Harley pushed further: maps are not neutral windows but representations shaped by social rules as well as technical ones, and cartographic discourse keeps a "double silence" about the social rules [@harley1989deconstructing]. In European maps, he writes, the more powerful a place, the more prominent its sign: "size of symbol, thickness of line, height of lettering, hatching and shading, the addition of color" are the means by which rank is built into the image. All maps also use the devices of rhetoric, including "colors, decoration, typography, dedications" and appeals to authority, especially scientific maps, and the steps of mapmaking (selection, omission, simplification, classification, hierarchy, symbolization) are inherently rhetorical [@harley1989deconstructing]. The essay is theory, influential and much criticized, including in a 2015 special issue revisiting it; the claim that map signs carry social meaning is well supported by historical example, while the claim that all cartographic knowledge is power is a philosophical position [@harley1989deconstructing].

::: {.rule #ICO-064 grade="C"}
**Label every simplified diagram as simplified, and mark "not to scale" wherever a learner could mistake its geometry for the real thing.** Every map distorts and selects, readers accept white lies without noticing, and a clean-looking drawing borrows credibility it may not have earned [@monmonier2018how; @harley1989deconstructing].

*In LTF:* `WidgetFrame` shows a "Simplified model" badge when `simplified` is set, and the airspace profile says "Simplified and not to scale" in text. Make the flag mandatory in the widget registry: every widget declares whether it is to scale, and any widget that is not shows the badge and a "not to scale" line.
:::

::: {.rule #ICO-065 grade="C"}
**Name on the page what a diagram leaves out when the omission matters to the learner's decision.** What a map omits is part of its message, and selection and omission are rhetorical acts, not neutral ones [@harley1989deconstructing; @monmonier2018how].

*In LTF:* a traffic-pattern or airspace diagram that omits wind, terrain or other traffic says so in its caption ("No wind shown"), in the same plain words the lesson uses.
:::

::: {.rule #ICO-066 grade="C"}
**Make the visual prominence of each element match its importance to what the learner must do next.** Size, weight, lettering height, shading and color rank the things on a page whether or not the designer intends it [@harley1989deconstructing; @bertin2010semiology].

*In LTF:* on `LessonPage` a safety `Callout` is never visually quieter than a decorative element beside it, and on `ChallengePage` the "I'm set up, start flying" button is the most prominent action on the Brief tab. A hero image, ornament or illustration is never the most prominent thing on a page whose job is instruction.
:::

### Judge a map by its job

Arthur Robinson's *The Look of Maps* (1952) argued that map design should be judged by function and by more objective standards than the draftsman's taste, examining three visual components: lettering, structure (how lines, areas and symbols are built into a visual whole) and color [@robinson1952look]. It contains no maps. Robinson said that showing how to do things would make it a textbook, that using real maps as negative examples would harm cooperation and friendship, and that special-purpose maps should not be judged out of context. Many consider the book to have turned cartographic research toward communication and design theory; its individual prescriptions are best treated as hypotheses that later perceptual research tested [@robinson1952look; @maceachren1995how].

::: {.rule #ICO-067 grade="C"}
**Review every chart-like diagram against a stated reading task, and check its lettering, its structure (what sits above what) and its color separately.** Robinson's three components cover most of what can be evaluated visually in a map, and judging by function rather than taste is his central stance [@robinson1952look].

*In LTF:* each widget's test file states its reading task ("find the downwind leg and say which way you turn"; "read the current speed against the arcs"), and the review uses three questions: is every label legible and placed consistently, is the layer order clear, and is every color doing a job?
:::

::: {.rule #ICO-068 grade="C"}
**Teach what goes wrong with constructed examples, not by ridiculing a real chart, a real product or a real pilot.** Robinson kept real maps out of his book for this reason, judging that negative examples harm cooperation and are unfair out of context [@robinson1952look].

*In LTF:* lessons that show a misread display or a common error use an LTF-drawn example in the widget style, never a screenshot of someone else's mistake or an identifiable real-world incident used for effect.
:::

### What this means for Learn to Fly

The drawn sectional (`sectional-legend/Chart.tsx`) is the most map-like thing in LTF and the best test of this chapter. Its token set (`chart-land`, `chart-hills`, `chart-water`, `chart-city`, `chart-blue`, `chart-magenta`, `chart-ink`) already follows Imhof's ladder: quiet tints for areas, saturated blue and magenta for thin lines and symbols (ICO-057). Two improvements follow. Give `ChartText` the same halo as `Label` (ICO-058), and fix the small-label problem on phones (ICO-059), probably with a simplified phone layout that drops secondary labels, which also cuts the element count (ICO-061).

The `traffic-pattern` and `airspace-profile` widgets are white lies by design, and LTF already labels the airspace profile "Simplified and not to scale". Make that labeling a registry property for all widgets (ICO-064) and add omission captions (ICO-065).

On pages, the card-on-card habit is the 1 + 1 = 3 problem (ICO-060). The lesson page stacks a `SignupBanner`, a resume bar, an objectives `Card` and then blocks that are themselves bordered cards (`QuizBlock`, `WidgetFrame`, Callouts). Each is reasonable; together they make a page of boxes. Removing the border from one level of that stack (for example, letting the objectives sit as a list under a rule rather than in a tinted card) would make the remaining boxes mean something.

## Ornament: when decoration earns its place

### A grammar, not a pattern book

Owen Jones prefaced the color plates of *The Grammar of Ornament* (1856) with thirty-seven numbered propositions, "General principles in the arrangement of form and colour, in architecture and the decorative arts" [@jones1856grammar]. He wrote against the slavish copying of published patterns in his day; Proposition 36 says, in substance, that the principles discoverable in the works of the past belong to us, but not the results, and Proposition 37 ends with a call for better education of artists, manufacturers and the public in general principles [@jones1856grammar]. The propositions most useful for an interface, paraphrased from the 1856 text, are these. Decorative arts arise from and should attend upon architecture (1). Works should possess fitness, proportion and harmony, the result of which is repose (3). Construction should be decorated, but decoration should never be purposely constructed (5). Beauty of form comes from lines growing out of one another in gradual undulations, with nothing that could be removed without loss (6). Care for the general forms first, subdivide them with general lines, then fill the interstices with ornament that can itself be subdivided for closer inspection (7). All ornament should be based on a geometrical construction (8). Flowers and natural objects should not be copied but conventionalized (13) [@jones1856grammar].

On color, Jones says primary colors should be used in small quantities on small surfaces, balanced by secondary and tertiary colors on larger masses (16), a rule close to Imhof's a century later. Propositions 24 to 27 apply Chevreul's simultaneous contrast, and 28 to 33 give boundary rules: colors should never impinge on each other, and ornament on a contrasting ground should be separated by an edging of a lighter color, of gold, white or black [@jones1856grammar]. Proposition 18 gives numerical balance ratios from Field's chromatic equivalents, a nineteenth-century theory not checked against modern color science, and none of its numbers should be used. The book's cultural framework ranks the ornament of cultures in a Victorian progress narrative that a modern reader should not adopt [@jones1856grammar]. Its principles are hypotheses about balance, hierarchy and edge separation, not laws.

::: {.rule #ICO-069 grade="C"}
**Attach ornament only to an element that already exists for a structural reason; never add an element in order to decorate it.** Jones's fifth proposition, that construction should be decorated but decoration never purposely constructed, is the oldest statement of this test [@jones1856grammar]. Craft authority.

*In LTF:* the teal "horizon line" passes: it decorates real structure (the active nav item, the active tab, the `LessonPath` connector between completed stops, the progress fill, link underlines). A decorative divider, background pattern or illustrated band added between landing sections, with no content or navigation job, fails.
:::

::: {.rule #ICO-070 grade="C"}
**Test every decorative element by removing it: if the page loses nothing a learner needs or recognizes, leave it out.** Jones and Dresser both define a beautiful composition as one from which nothing can be removed without loss [@jones1856grammar; @dresser1873principles].

*In LTF:* the 24 px icons heading the landing "What you need" cards and the `FlaskConical` in `BetaBanner` are removable without loss of meaning; they stay only if they carry identity (once the custom icon set exists) and go first when a page is too busy.
:::

::: {.rule #ICO-071 grade="C"}
**Separate any patterned or tinted ground from text and symbols with a quiet edge or zone.** Jones's boundary propositions call for an edging of a lighter or darker color between ornament and a contrasting ground, the craft ancestor of halos and knockouts [@jones1856grammar; @imhof2007cartographic].

*In LTF:* if a texture or motif is ever added (a faint chart grid, a contour pattern on a hero band), text never sits directly on it: a `surface` panel or a `Label`-style halo sits between them, and in Night the zone is redrawn, not inverted.
:::

::: {.rule #ICO-072 grade="C"}
**Take principles from historical and admired work, never its results: do not copy another product's motifs, livery or ornament.** Jones's Proposition 36 distinguishes the principles that belong to everyone from the results that belong to their makers [@jones1856grammar].

*In LTF:* the instrument and chart drawing style is derived from how real instruments and charts work, which is a principle; it should not become a copy of a particular avionics maker's screens or of the sim's own interface art. The tail-fin mark is LTF's own.
:::

### Utility first, then character

Christopher Dresser wrote *Principles of Decorative Design* as art education for those who make manufactured goods; its preface says it attempts "simply to instruct" [@dresser1873principles]. His order is utility first: an object must first be formed as a work of utility and may then be made as beautiful as you please, and an object that is unpleasant to use will in the end be set aside. On truth, he condemns imitating one material in another (wood graining, marbling, a jug imitating wicker). On expression, he links form to effect: sharp, angular or spiny forms are exciting, while bold, broad forms and "breadth" of treatment give repose, so the ornamentist should ask what effect each form has on the mind. Decoration should suit the room, richness for a dining room, worth for a library, repose for a bedroom, and glitter must be used sparingly or it reads as vulgar [@dresser1873principles]. The claims about emotional effects of forms are plausible but untested in the book, and its moral and class framing is dated.

::: {.rule #ICO-073 grade="C"}
**Keep the base state of every screen calm (broad, quiet forms and few strong contrasts) and reserve sharp, high-contrast, angular treatment for warnings.** Dresser ties angular and glittering forms to excitement and broad treatment to repose, and cautions that glitter used freely reads as vulgar [@dresser1873principles]. Craft claim; consistent with the regular-base principle below.

*In LTF:* the warm neutrals and single accent are the calm base. The red `bg-warn` 64 px play disc on `YouTubeEmbed` is the one place a warning color is used for something that is not a warning; replace it with `ink` or the accent so that red keeps its meaning (see also ICO-018).
:::

::: {.rule #ICO-074 grade="C"}
**Do not imitate a material the interface is not made of; draw bezels, metal and depth only where a real instrument is being depicted.** Dresser counts imitation of one material in another as a failure of truth [@dresser1873principles].

*In LTF:* page UI stays flat (cards are `surface` with a 1 px line or soft shadow, which is what they are). The `fill-bezel` body of the G1000 widget is acceptable because it depicts a real instrument; the same bezel treatment on a page card, toast or button would not be.
:::

### Order, and the breaks in it

Ernst Gombrich's *The Sense of Order* extends his study of pictorial representation to decoration [@gombrich1979sense]. A Kirkus review summarizes the central argument: decoration arises from an innate sense of spatial order, balancing economy (quick comprehension, simplicity, predictability) against intellectual enjoyment (variety, complexity, surprise), so that it sits between monotony and confusion. Henri Zerner's review reports Gombrich's three activities of the decorative artist: framing (defining and emphasizing the field), filling (its content) and linking (connecting elements into networks). Drawing on Popper, Gombrich argues that we assume continuity and regularity and notice breaks in them, so the sense of order is a prerequisite for perceiving disorder. He observes that repetition can strip a motif of its representational meaning, and a review by Anthony Storr adds that excess order can drain meaning altogether [@gombrich1979sense]. Zerner finds the arguments heavily qualified, thinks the split between decorative and symbolic art reflects a Western classical tradition, and says Gombrich underestimates how fast patterns acquire social meaning. The core claim about expectation and deviation is consistent with later perception research, which this Part did not review.

::: {.rule #ICO-075 grade="C"}
**Give every ornament one of three jobs (framing a field, filling it, or linking elements) and remove any that has none.** Gombrich's framing, filling and linking describe what decoration does; ornament doing none of them is surplus [@gombrich1979sense].

*In LTF:* `Card` and panel borders frame; the drawn sectional fills its `WidgetFrame`; the `LessonPath` connector and the curriculum path link. A second border inside a card, a background tint behind a heading that already has a rule, or a decorative icon over a heading has no job.
:::

::: {.rule #ICO-076 grade="C"}
**Keep the base layout regular (aligned grid, consistent spacing, one card style) so that a warning or a current state can break the pattern and be seen.** People assume regularity and notice deviations from it, so an interface already full of irregular ornament leaves an alert nothing to break [@gombrich1979sense].

*In LTF:* the `border-4 border-warn` random-event alert and the single ink "current" pin in `LessonPath` work because the rest is regular. Do not add competing irregular elements (rotated badges, mixed card radii, ad hoc tints) that dilute them. The bracket radii in the code (`rounded-[2px]`, `[3px]`, `[4px]`) should be folded into the token radii.
:::

::: {.rule #ICO-077 grade="C"}
**Do not repeat a decorative motif or badge on every item in a sequence; mark only the items that differ.** Repetition can strip a motif of its meaning, so a badge on every step stops meaning anything [@gombrich1979sense].

*In LTF:* curriculum rows show "Bonus" only on bonus lessons and "Up next" only on the next module, which is right. If completed lessons each get a check, the check is a state, not ornament; a decorative airplane glyph on every row would be ornament repeated into noise.
:::

### The embellishment debate

The minimalist position has its most famous modern statement in Tufte, whose "do no harm" color principle and 1 + 1 = 3 analysis argue against non-data decoration [@tufte1990envisioning]. Its extreme ancestor is Adolf Loos's lecture "Ornament and Crime" (1910, often dated 1908), which argues that ornament is wasted labor, material and capital, and that its absence is a mark of cultural progress [@loos1910ornament]. Loos's economic point, that decoration costs production and reading time and dates quickly, is worth keeping. His premises are not: the essay ranks children, non-European peoples and criminals as earlier stages of one human development, a colonial and racial hierarchy rather than science, and its figures are unsourced [@loos1910ornament].

The experimental evidence complicates minimalism without overturning it. Bateman and colleagues showed 20 students 14 embellished charts by the designer Nigel Holmes and plain versions with the same data, titles and labels [@bateman2010useful]. Accuracy in describing the charts was no worse for the embellished ones, and description of the chart's value message was better. Recall after 12 to 22 days was significantly better for the embellished charts on subject, categories, trend and value message, and plain charts needed more prompting. Participants preferred the Holmes charts, and 40 percent of viewing time went to embellishment or dual-coded regions without making description slower [@bateman2010useful]. The sample was small, with ten people per recall condition, one embellishment style and one-tailed tests, and the authors do not advocate embellishment as a principle [@bateman2010useful]. A later dual-task study by Borgo and colleagues, outside this bibliography, found embellishments helped memory but slowed visual search. Borkin and colleagues found that observers agree about which visualizations are memorable, and that color and a human-recognizable object raise memorability [@borkin2013what]. Memorability is a one-second recognition measure, not comprehension, and a replication on scientific visualizations found the "dense and colorful" result did not transfer cleanly [@borkin2013what].

::: {.rule #ICO-078 grade="D"}
**Use embellishment that is tied to the content only where memory of the gist matters more than speed (recaps, share cards, the landing page), and never in explanations or Fly mode.** Embellished charts were recalled better weeks later without losing description accuracy, but the sample was small, memorability is not comprehension, and the minimalist case against non-data decoration remains strong for reading tasks [@bateman2010useful; @borkin2013what; @tufte1990envisioning].

*In LTF:* a module-completion card or the `CourseBadge` roundel may carry illustration tied to what was learned. The lesson body, `QuizBlock`, the widgets and everything in `FlyModePage` stay plain.
:::

::: myth
**"Ornament is waste, and any decoration harms comprehension."** The modernist case descends from Loos, whose argument rests on discredited premises and unsourced figures [@loos1910ornament]. Data-tied embellishment did not reduce description accuracy and improved long-term recall in a small experiment [@bateman2010useful]. Decoration has costs in search time and attention, but its effects depend on what it is tied to and where it is used, not on its existence.
:::

### What this means for Learn to Fly

The dossier records that LTF's landing page uses no illustration and that its identity rests on type, the teal line and the lesson path card; it also lists rounded cards, eyebrows and stock icons among the generic signals. Read through this chapter, the problem is not too much ornament but ornament of the wrong kind: generic structure repeated (cards, eyebrows) instead of meaningful ornament attached to structure (ICO-069).

LTF's one true ornament, the horizon line, is a model case: a single motif, attached to structure, doing linking and state jobs, in one color (ICO-069, ICO-075). Extend it before inventing anything else. A second candidate is drawn from the widget style: the compass rose, tick scales and chart contours already exist as SVG primitives (`Compass` in `shared/svg.tsx`). Used sparingly as framing devices (a tick scale as a section rule on the reference hub, a contour texture on the kneeboard band, always behind a quiet zone per ICO-071), they would make pages recognizably LTF's without decorating lesson bodies.

Two audits follow. First, dashed lines now mean three things: the `verify` callout that blocks publication, a locked `LessonPath` pin, and the `EmptyState` and `ErrorState` box. One line style with three meanings is the ornament version of the problem in ICO-018; keep dashed for "not yet available" (locked, verify) and give empty and error states a different frame. Second, the red play disc (ICO-073). Both are small changes that make the base more regular and the signals more meaningful (ICO-076).

## Editorial design: the lesson as a publication

### Design as clarification

Jan White, a magazine art director who worked at *Architectural Forum* and *House & Home* before decades as a consultant and teacher, argued in *Editing by Design* (first edition 1974) that editors and designers share one task: revealing the core of each message plainly and compellingly [@white2003editing]. His thesis, as summarized from the first edition onward, is that design is a clarifying tool, not a decorative one. A student reading of the book describes it as built on the interdependence of the editor and designer roles, pairing product-making (design) with storytelling (writing supported by design), and moving from general principles of multi-page media to specifics such as type and color [@white2003editing]. Its first chapter treats a publication as a physical object, how readers hold it, how pages fold, and which areas of a spread are most and least valuable. White frames his suggestions as options rather than rules, because editorial decisions are subjective. The book's text could not be read for this Part, so his specific rules are not given; it is craft authority, in print since 1974, and its advice about spreads and folds does not transfer literally to scrolling pages. What transfers is the stance that one person, or one process, owns both the words and the layout.

::: {.rule #ICO-079 grade="C"}
**Write one brief per lesson, shared by the writer and the designer, that names the one thing the learner must take from the page and what they will see first.** Editorial design treats editor and designer as partners in revealing the core of a message, and design as clarification of that core [@white2003editing].

*In LTF:* lesson front matter already has objectives ("In this lesson you will"). Add a single `focus` line (the one idea) and a `firstSeen` line (the first block after the objectives), and review the lesson's first screen against them. A diagram is specified in the brief by the writer who knows what must be understood and drawn by whoever knows how to make it readable (ICO-039).
:::

::: {.rule #ICO-080 grade="C"}
**Ask of every visual element on a lesson page "what does this clarify?", and remove it if the answer is nothing.** If design is clarification, an element that clarifies nothing is ornament and must pass the removal test [@white2003editing; @jones1856grammar].

*In LTF:* this applies to the eyebrow labels over headings as much as to pictures. On `LessonPage`, the mono "Lesson 0.1" label clarifies position in the course; a decorative eyebrow over each block heading would not.
:::

### A stable template, with controlled variety

Gombrich's trade-off between economy and intellectual enjoyment, with decoration placed between monotony and confusion, is a design target for a sequence of lessons [@gombrich1979sense]. Economy says each lesson should look and behave the same, so that the learner's sense of order does the work of navigation: the objectives are always in the same place, the section rail always on the left, the completion panel always at the end. Enjoyment says something should vary, or every lesson becomes the same gray column. The solution editorial designers use is to fix the frame and vary the content blocks: the template is constant, and the rhythm within it changes with a widget, a quiz, a callout, a figure.

Jones's seventh proposition describes the nested structure that makes this work at the scale of one page: care for the general forms first, subdivide them with general lines, then fill the interstices with detail that can be subdivided again for closer inspection [@jones1856grammar]. A page built this way is legible at a glance (headings, sections, the one diagram) and rewards close reading (the labels in the diagram, the callout text). Tufte makes the related argument that complexity is not the enemy of clear display: confusion and clutter are failures of design, not attributes of information, and the aim is design strategies that reveal detail [@tufte1990envisioning].

::: {.rule #ICO-081 grade="C"}
**Keep the lesson template fixed (the order of header, objectives, section rail, blocks and completion panel) and vary only the sequence of content blocks inside it.** Predictable structure gives economy of comprehension and variety within it keeps attention, between the poles of monotony and confusion [@gombrich1979sense]. Craft and art-historical argument, consistent with the perceptual evidence on regularity.

*In LTF:* `LessonPage` already fixes the order; keep `UnverifiedWarning`, `SignupBanner`, resume bar and objectives in that sequence on every lesson. Variety comes from `LessonRenderer` blocks. A lesson that needs a different top (a video first, say) is a template change for all lessons or none.
:::

::: {.rule #ICO-082 grade="C"}
**Build each lesson page in three levels: structure readable at a glance, sections readable in a scan, and detail that rewards close reading.** Jones's nested hierarchy of general forms, main lines and fine detail, and Tufte's argument that good design reveals detail rather than hiding it, describe the same structure [@jones1856grammar; @tufte1990envisioning].

*In LTF:* the glance level is the h1, the objectives and the `SectionNav` titles; the scan level is the block headings (`h2 mt-12 mb-3 text-2xl font-bold`, which should move to a `heading-*` token per the typography Parts) and figure captions; the close level is the paragraph text, widget labels and glossary popovers.
:::

### Small multiples

For a wide range of problems, Tufte argues, small multiples are the best design solution, because constancy of design puts the emphasis on changes in the data, not changes in the data frames [@tufte1990envisioning]. The same drawing repeated at several states lets the eye compare directly, which is exactly what animation does badly (see the chapter on realism and motion) [@tversky2002animation].

::: {.rule #ICO-083 grade="C"}
**Show a comparison of states as small multiples: the same diagram, at the same size and scale, repeated side by side with only the compared variable changing.** Constant design puts the emphasis on the data changes, and static frames permit the comparison and reinspection that animation does not [@tufte1990envisioning; @tversky2002animation].

*In LTF:* a lesson comparing three flap settings or four stages of a pattern uses one widget primitive rendered three or four times in a row (stacked on phones), with one shared legend. `WidgetFrame` could take a `multiples` prop that renders a model at listed states without the explore controls.
:::

### Order tells a story

Isotype practice treated ordering as a choice with meaning: sort by size, by time or by place, and each order tells a different story [@neurath1936international]. The same is true of every list in an interface. A progress list sorted by completion tells the learner how far they have come; sorted by curriculum order, it tells them what comes next; sorted by recent activity, it tells them what they were doing.

::: {.rule #ICO-084 grade="C"}
**Decide the order of every list and table by the story the learner needs from it, and state the order when it is not obvious.** Ordering by size, time or place tells different stories, and the choice should be deliberate [@neurath1936international].

*In LTF:* the curriculum and module pages keep course order (what comes next). Dashboard "Recent attempts" keeps time order. The challenges list, with five `Select` filters, should show its sort in the `role="status"` line ("Showing n challenges of n, in course order").
:::

### A mood for each part of the product

Dresser's advice that decoration suit the room (richness for dining, worth for a library, repose for a bedroom) translates into a mood map for a product with distinct areas [@dresser1873principles]. Lesson reading is the library: worth and calm, long measures of quiet text. A challenge briefing is a workshop: focus, clear steps. Progress and the dashboard are the drawing room: some cheer, the tier colors and the `tier-pop`. Fly mode is the bedroom in Dresser's sense of repose, because it must not compete with the simulator for attention.

::: {.rule #ICO-085 grade="C"}
**Assign each product area a mood and an ornament budget, and keep Fly mode the plainest screen in the product.** Decoration should suit the use of the space, with glitter sparing and repose where attention must rest [@dresser1873principles; @chandra2013evaluation].

*In LTF:* lessons (calm, no ornament in the body), challenge Brief (focused, structure only), dashboard and debrief (the one place for celebratory motion and tier color), landing page (the place for identity ornament), `FlyModePage` (no ornament, no decorative icons, the lowest element budget, ICO-061).
:::

### Authority, earned or borrowed

Harley's point that maps use decoration, typography and invocations of authority as rhetoric applies to any page that presents facts [@harley1989deconstructing]. An official-looking seal, a chart-like border or a technical typeface makes a page look authoritative whether or not its content has been checked. Monmonier adds that software lets anyone produce material with crisp type and uniform symbols that looks respectable while being wrong [@monmonier2018how]. For a product that teaches a safety-adjacent skill to beginners, the risk is real: a beginner cannot judge content and will judge the look.

LTF has an unusual answer already in place: honesty as UI. The dossier lists the "Draft · unverified" badge, "Last verified" lines on the speeds page, the `verify` callout that blocks publication, the public-beta banner, and the statement that the course badge "is not a pilot certificate". These are trust signals that are earned, because they are tied to a verification process, and they are worth more than any decorative authority.

::: {.rule #ICO-086 grade="C"}
**Never borrow authority with official-looking decoration (seals, certificate borders, chart-like frames); earn it with visible verification marks tied to a real check.** Decoration and typography are rhetorical devices that confer authority, and polished presentation can make unchecked material look respectable [@harley1989deconstructing; @monmonier2018how].

*In LTF:* the `CourseBadge` wings roundel keeps its disclaimer and never uses certificate-style borders, signatures or seal motifs. Reference and speeds pages show "Last verified" with the date. Chart-styled frames are used only for content that is in fact a chart drawing.
:::

### Captions that say what to notice

A caption is the editorial link between a picture and the text. The evidence on linked pictures says the link raises attention and recall [@houts2006role], and the evidence on signaling says cues that point at the relevant part help retention [@schneider2018meta]. Put together, a caption should do more than name the picture: it should say what to look at.

::: {.rule #ICO-087 grade="B"}
**Write each figure caption as a pointer to what the learner should notice, in the lesson's words, not as a title for the picture.** Pictures closely linked to captions raise attention and recall, and cues that direct attention to the relevant part improve retention [@houts2006role; @schneider2018meta].

*In LTF:* "The sim's assistance settings" is a title; "Turn off the assists highlighted in teal before your first lesson" is a caption (an illustrative form; the actual setting names come from the verified lesson). The same applies to `WidgetFrame` titles and to the "Describe this diagram" text, which should start with what the diagram shows changing.
:::

### What this means for Learn to Fly

LTF lessons are already structured like an editorial product: fixed header, objectives, section rail, blocks, completion panel, previous and next. What they lack is the editorial process around them. The dossier notes two typographic dialects (raw `text-2xl font-bold` on app pages, `display-*` and `heading-*` tokens on landing and `PageHeader`) and a lesson measure wider than the system's 68ch; those are typographic matters for other Parts, but they are also the symptom of no single owner for word-and-picture decisions (ICO-079). A lesson brief with a focus line, a stable template (ICO-081), a three-level hierarchy (ICO-082), small multiples for comparisons (ICO-083) and captions that point (ICO-087) would make the lessons read as one publication.

The mood map (ICO-085) also settles where the identity work from the brand Part should go: the landing page and the dashboard can carry ornament and illustration; lessons carry the horizon line and the widget drawing style; Fly mode carries nothing extra.

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

#### Icons

1. Every icon a beginner meets carries a visible word; icon plus label is the default on challenge cards, meta rows, the theme toggle, callouts, badges and tiers (ICO-008, ICO-001).
2. Icon-only controls are limited to close, menu, expand or collapse, back, external link, play, copy and search, each with an accessible name and a tooltip (ICO-012, ICO-011).
3. Nothing in the Brief tab, the Fly tab or `FlyModePage` depends on an icon alone, and Fly mode uses heavier strokes, `lg` buttons and no `ink-3` icons (ICO-009, ICO-013, ICO-015).
4. LTF writes an icon policy and an icon register before drawing custom icons; the register extends `challengeTypeMeta` with meaning, class, source and test fields and renders as one sheet in `DevComponentsPage` (ICO-011, ICO-021, ICO-006).
5. The custom challenge-type set is drawn as a language with a written vocabulary and grammar, one stroke and size table, and pictures chosen for closeness to the function, then tested between groups against the Lucide stand-ins with an 85 percent bar set in advance (ICO-002, ICO-016, ICO-017, ICO-024 to ICO-027).
6. One picture has one meaning: TriangleAlert stays the caution status icon and the emergency type gets its own glyph; no icon is reused for a second meaning (ICO-018, ICO-004).
7. Icons for flight concepts appear only after the lesson that teaches the word, and keep permanent labels (ICO-003, ICO-028, ICO-007).
8. Counts are shown by repeating a unit, as `DifficultyDots` does (ICO-019); the brand mark is never a control or status (ICO-022).
9. Meaningful icon and SVG strokes meet 3:1; `accent-line` never draws a meaningful stroke on `surface-sunken` in Day (ICO-014).

#### Pictures and diagrams

10. Lesson pictures are explanative, tagged with their function in content, and decorational pictures stay out of lesson bodies and above all out of the opening screen (ICO-031, ICO-034, ICO-035, ICO-036).
11. Widgets signal the active part, sit directly after the paragraph that introduces them, use the lesson's words in labels, and are tested by a reading task, not by preference (ICO-037, ICO-038, ICO-029).
12. The widget style stays schematic and flat; realistic screenshots are for orientation only (ICO-041, ICO-074).
13. Change over time is shown with static frames, small multiples or learner-driven widgets; nothing autoplays (ICO-046, ICO-047, ICO-083).
14. Every widget declares whether it is to scale; those that are not show "Simplified model" and "not to scale", and captions name what is omitted (ICO-064, ICO-065, ICO-044).
15. Each widget has an element budget and a stated reading task in its test file; Fly mode has the lowest budget (ICO-061, ICO-067, ICO-085).
16. Variables follow data type (hue and shape for categories, value for order, position for quantity), and instrument and chart colors are never repurposed (ICO-049, ICO-052, ICO-054, ICO-055).
17. Diagram labels have a halo and a minimum rendered size; the sectional chart gets a phone layout (ICO-058, ICO-059).

#### Ornament and editorial

18. The horizon line is the model ornament: attached to structure, one color, doing linking and state jobs; new ornament must frame, fill or link and pass the removal test (ICO-069, ICO-070, ICO-075).
19. The red play disc on `YouTubeEmbed` changes to a non-warning color; dashed borders are kept for "not yet available" and empty and error states get a different frame (ICO-073, ICO-018, ICO-076).
20. Embellishment tied to content is allowed only on recap, share and landing surfaces (ICO-078).
21. Each lesson has a brief with a focus line, a fixed template and a three-level hierarchy; captions point at what to notice (ICO-079, ICO-081, ICO-082, ICO-087).
22. Each area has a mood and an ornament budget: lessons calm, Brief focused, dashboard cheerful, landing for identity, Fly mode plainest (ICO-085).
23. Authority is earned by verification marks, never borrowed with official-looking decoration (ICO-086).
24. A named custodian owns the icon register, the widget primitives and the diagram vocabulary (ICO-045).

### Review checklist

Run these questions against a pull request or a page. Each names the rule it checks.

#### Icons and symbols

- Does every new or changed icon have a visible word next to it, or is it on the icon-only safe list with an accessible name and tooltip? (ICO-008, ICO-012)
- Is any meaning in the Brief tab, Fly tab or Fly mode carried by an icon alone? (ICO-009)
- Is the icon in the register, with its meaning sentence, class, source and test record? (ICO-021, ICO-024, ICO-030)
- Was the picture chosen for how closely it points at the function rather than for realism? (ICO-002)
- Is an icon for a flight term used before the lesson that teaches the term? (ICO-003)
- Is this the same drawing, size and stroke used everywhere else for this meaning, taken from the shared definition? (ICO-004, ICO-017)
- Does this picture already mean something else elsewhere in the product? (ICO-018)
- Does it look distinct from its neighbors when viewed in the set at its real size? (ICO-006)
- Is its detail suited to the task, minimal if it is scanned for among many? (ICO-005)
- Does each meaningful stroke meet 3:1 on its ground in both themes, and is the target at least 24 px (44 px in Fly mode)? (ICO-014, ICO-015)
- If it shows a count, is it a repeated unit or a printed number rather than a growing picture? (ICO-019)
- Does the change use the brand mark as a control, status or bullet? (ICO-022)
- If it is arbitrary, is it on the arbitrary-symbol list with a word? (ICO-023, ICO-007)
- If preference feedback is cited as support, is there also a task measure? (ICO-029)
- Does each icon do a job a word alone does less well, or is it ornament over a heading? (ICO-010)
- For a chart or instrument symbol, was an established convention looked up and its source recorded? (ICO-020)

#### Pictures, widgets and diagrams

- What job does each picture do, and is any of them only decorational? (ICO-034, ICO-031)
- Is anything decorative placed before or among the lesson's core explanation, especially at the top? (ICO-035, ICO-036)
- Does the widget highlight the part being discussed, and do its labels use the text's words? (ICO-037, ICO-038)
- Does the quiz test the understanding the picture teaches rather than its labels? (ICO-033)
- Does the diagram start simple for a newcomer, with a compact form for review pages? (ICO-032)
- Did a content expert set what it must show, and did beginners check what it appears to show? (ICO-039)
- Is a sequence or flow drawn in the shared schematic vocabulary (pins, one connector, one weight)? (ICO-043)
- If an animated and a static version are being compared, do they carry the same information and controls? (ICO-048)
- Are estimated or model values drawn softer and labeled as estimates? (ICO-053)
- Was the screen run through the clutter check, and was any flag reviewed by a person? (ICO-063)
- Is the picture calm and schematic, without frightening imagery for safety content? (ICO-040, ICO-041)
- Is a realistic screenshot being used to explain how something works rather than where to look? (ICO-041)
- Does anything animate without learner control, or animate where frames would do? (ICO-046, ICO-047)
- When states change, is the change also printed as text? (ICO-042)
- How many elements does the diagram show at its default state, and is each needed for its reading task? (ICO-061, ICO-067)
- Are subtle qualifiers and expectation-violating facts set in words? (ICO-062)
- Is each component on its own variable, with hue only for categories and position for quantities? (ICO-049, ICO-050, ICO-051, ICO-052)
- Is a color ramp of the right type, lightness-ordered, checked in each theme, not a rainbow, and labeled directly? (ICO-054, ICO-055, ICO-056)
- Is an instrument or chart color used for anything other than its real meaning? (ICO-052)
- Are large areas muted and strong color confined to small areas? (ICO-057)
- Does every label have a clear plane and a legible rendered size on a phone? (ICO-058, ICO-059)
- Is the diagram marked simplified or not to scale where it should be, and does its caption name what it omits? (ICO-064, ICO-065, ICO-044)
- Does visual prominence match what the learner must do next? (ICO-066)
- Does a teaching example of an error use a constructed example? (ICO-068)

#### Ornament and editorial

- Is each decorative element attached to real structure, and does it frame, fill or link? (ICO-069, ICO-075)
- Would the page lose anything if the element were removed? (ICO-070, ICO-080)
- Is text separated from any pattern or tint by a quiet zone? (ICO-071)
- Does the change add a second border, an extra tint or a card inside a card? (ICO-060)
- Does it use a warning color, sharp form or high-contrast treatment for something that is not a warning? (ICO-073)
- Does it imitate a material, or copy another product's motifs? (ICO-074, ICO-072)
- Does it make the base layout less regular (new radius, new card style, ad hoc tint)? (ICO-076)
- Is a badge or motif repeated on every item instead of marking the ones that differ? (ICO-077)
- Is embellishment confined to recap, share or landing surfaces? (ICO-078)
- Does the lesson keep the fixed template order and the three-level hierarchy, and does its first screen match the brief's focus? (ICO-079, ICO-081, ICO-082)
- Is a comparison shown as small multiples with constant design? (ICO-083)
- Is the order of each list chosen and, where unclear, stated? (ICO-084)
- Does the screen stay within its area's mood and ornament budget, with Fly mode plainest? (ICO-085)
- Does any element borrow authority (seals, certificate borders, chart-styled frames) that the content has not earned? (ICO-086)
- Do captions say what to notice? (ICO-087)
- Who is the custodian for the visual vocabulary this change extends, and have they reviewed it? (ICO-045, ICO-016)
