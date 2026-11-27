# Information Architecture and Wayfinding

Information architecture is the structure of a product: what its parts are, what they are called, how they are grouped, and how a person moves between them. Wayfinding is the person's side of the same problem: knowing where you are, where you can go, and how to get back. This Part covers both, from Kevin Lynch's studies of how residents hold a city in their heads, through the information foraging models that predict which link a person will follow, to the menu experiments on depth and breadth and the practitioner craft of labels, breadcrumbs, card sorting and search. Learn to Fly (LTF) is a small information space today, two published modules in a public beta, but its content files already describe 22 modules in three courses, a glossary of 179 terms, 30 challenges and a reference section with speeds, checklists, airports and resources. The structure decisions made now decide whether that growth reads as a course or as a pile.

The evidence is uneven, and the rules are graded to show it. The strongest findings are the menu depth experiments (several independent laboratory studies, all pointing the same way, with known confounds) and the information scent models (computational models fitted to observed link choices). The vocabulary problem rests on one well-cited empirical paper. Lynch, Arthur and Passini, and Golledge supply concepts and a review vocabulary, not effect sizes. Krug, Kalbach, Rosenfeld and colleagues, Spencer and the Nielsen Norman Group articles are craft authority, and their rules are graded C. Use the Part in two ways: as a set of numbered rules to cite in a design review, and as a checklist (the last chapter) to run against a page or a pull request. Where a rule contradicts the way LTF is built today, the chapter-ending section says so and names the component.

## The learner's mental map

A person moving through any environment, a city, a building or a website, builds an internal model of it and uses that model to decide where to go next. Lynch called the quality that makes this easy legibility: how easily the parts of an environment can be recognized and organized into a coherent pattern in the mind of someone moving through it [@lynch1960image]. He proposed a design criterion to go with it, imageability, the quality of an object that gives it a high probability of evoking a strong image in an observer. The claim that matters for a product is the practical one: designers can deliberately make an environment easier to hold in the mind, and they do it by controlling a small number of recognizable elements.

### Five elements of a legible place

Lynch's study ran about five years across three US cities chosen for contrast: Boston, with many distinct elements; Jersey City, with few; and Los Angeles, a newer kind of city [@lynch1960image]. Residents described their city, drew a quick sketch map as if for a stranger and described an imaginary trip, and trained observers then examined the cities in the field. From the sketch maps Lynch isolated five element types:

- **Paths**: channels along which people move, such as streets and transit lines. They organize the other elements.
- **Edges**: linear boundaries that are not used as paths, such as shores, walls and rail cuts.
- **Districts**: medium to large areas with a common character that a person mentally enters.
- **Nodes**: strategic points such as junctions that a person can enter and that act as foci. The most successful nodes were both unique and intensified the character of their surroundings.
- **Landmarks**: external reference points that a person does not enter, with at least one aspect that is unique or memorable in context.

One physical feature can play different roles for different people. A motorway is a path to a driver and an edge to a pedestrian [@lynch1960image]. The five types can also be grouped by geometry: points (nodes and landmarks), lines (paths and edges) and areas (districts). For a website the translation is direct enough to be useful. The path is the sequence a learner is meant to follow. A district is a section with its own character. An edge is a boundary between kinds of activity. A node is a page where choices are made. A landmark is a fixed, distinctive element that tells a person where they are without being a destination itself.

The evidence behind the elements is interview and sketch-map data from small samples, not experiment. Lynch acknowledged the small size, class bias and partial locational bias of his samples, and critics have said he neglected variation among observers [@lynch1960image]. The specifics of his spatial image were contested by later researchers, while most of the elements are still accepted as design considerations. Later work also showed that an element can be memorable for personal, historical or cultural meaning, not only for visual distinctiveness. The right use of Lynch in a design review is as a vocabulary of questions, not as a source of numbers.

::: {.rule #NAV-001 grade="C"}
**Give the course one main path whose order does not change, and show it as a line the learner can see.** Lynch found that paths organize the other elements of a remembered environment [@lynch1960image], and Golledge's survey reports that route knowledge, a sequence anchored by choice points and landmarks, can be followed without an accurate overall map [@golledge1999wayfinding]. A stable order is what lets a learner say where they have been and where they are going. The evidence is qualitative and from cities, so this is a craft rule; it does not say the path must be enforced, only that it must exist and be visible.

*In LTF:* the module and lesson order in `content/modules.yaml` is the path. `LessonPath` (numbered pins on a vertical connector, teal only between completed stops) already draws it on the landing page and in `CurriculumMap`. Never reorder published lessons; add new ones at the end of a module or in a new module.
:::

::: {.rule #NAV-002 grade="C"}
**Make each kind of place recognizable at a glance, so a learner arriving from a link knows which district they are in.** Districts in Lynch's account are areas a person mentally enters because they share a character [@lynch1960image]. On a website the equivalent is a section whose pages share a frame: the same header treatment, the same kind of title, the same position for the same controls. The rule is about consistency within a district and difference between districts; it does not require a different color for each.

*In LTF:* Learn, Challenges and Reference are the three districts named in `PRIMARY_NAV`. Lessons open with a mono `Lesson 0.1` label in `text-accent`, challenges with the eyebrow "Challenge {code}" in `PageHeader`, and reference pages with breadcrumbs under "Reference". Keep those openings fixed per district, and do not let a reference page borrow the lesson opening or the reverse.
:::

### Anchors, routes and surveys

Golledge's edited volume surveys how people encode, store and use spatial knowledge, across psychology, geography, planning and neuroscience [@golledge1999wayfinding]. A cognitive map, in the framework restated by Golledge and Gärling, is a hypothetical construct for place-based knowledge in long-term memory that lets a person establish locations, distances and directions and link places in sequence. People define common anchors, significant places recognized by most people, and personal anchors tied to their own activities; minor information attaches to the anchors as "primers and fillers." The framework distinguishes egocentric knowledge (person-to-object relations that change as you move) from the anchoring structure (object-to-object relations that stay put). A traveler with poor egocentric knowledge can be locally disoriented while still grasping the larger layout.

Two findings from the same chapter matter for design. Human spatial representations are incomplete and error prone: pointing errors between familiar places average about 25 to 30 degrees, shorter distances tend to be overestimated and longer ones underestimated [@golledge1999wayfinding]. And a correct map is not needed to follow a route: route knowledge can be self-contained, anchored by choice points and landmarks. The translation is that a site should not depend on its users having an accurate overall picture. It should make the next step obvious from wherever they are, and offer the overall picture as something to consult, not something to hold.

The volume also stresses large individual differences in spatial ability, which caution against designing for one typical user [@golledge1999wayfinding]. A learner who thinks in lists will not be helped by a spatial metaphor alone, and a learner who thinks spatially will not be helped by a list alone. Pairing the two is cheap.

::: {.rule #NAV-003 grade="B"}
**Make every page usable with route knowledge alone: the next step must be clear without consulting the course map.** Golledge's survey reports that people's spatial representations are incomplete and error prone, and that route knowledge anchored by choice points can be followed without a correct map [@golledge1999wayfinding]. The evidence comes from physical travel, so the grade reflects indirect evidence for screens. The course map remains necessary for the learner who wants the overview; it must not be the only way to know what comes next.

*In LTF:* `PrevNext` at the foot of `LessonPage` ("Next lesson" with code and title) and the completion panel carry route knowledge. On the dashboard, the Continue card does the same. Every lesson, including the last of a module, needs a next step; when `navigation.next` is null the page should offer the next module or the module's challenge, not nothing.
:::

::: {.rule #NAV-004 grade="C"}
**Keep a few landmarks on every page, always in the same place, and keep them rare enough to stay distinctive.** Lynch's landmarks are reference points a person does not enter, memorable because at least one aspect is unique in context [@lynch1960image]. Golledge's anchors play the same role in memory [@golledge1999wayfinding]. A landmark only works if it is in the same place each time and if there are few of them; a page full of distinctive marks has none.

*In LTF:* the landmarks are the fin-and-stripe `Logo` at the top left of `Header`, the active-section underline (`shadow-[inset_0_-3px_0_var(--color-accent-line)]`), the mono code label on lessons and challenges, and the "current" ink pin in `LessonPath`. Do not add a second accent-colored mark to the header, and do not move the code label below the title on some pages and above it on others.
:::

::: {.rule #NAV-005 grade="C"}
**Pair every spatial or visual cue for location with a text label that says the same thing.** Individual differences in spatial ability are large [@golledge1999wayfinding], and a cue that only some learners decode is a cue that fails the others. Text also survives contexts where the visual cue does not, such as a screen reader, a phone layout that hides the rail, or a printout.

*In LTF:* `LessonPath` pins carry numbers, and status icons already have sr-only text ("Completed:", "In progress:", "Not started:"). Extend the habit: the `SectionNav` active item should keep its mono number and title, and the module card's "Up next" eyebrow should stay text, not become a colored dot.
:::

### Edges and the places between

Edges are the element designers forget. Lynch defined them as linear boundaries that are not paths [@lynch1960image], and their job in a city is to tell a person that they are leaving one kind of place for another. A product has edges wherever the rules of interaction change: moving from reading to a timed task, from a page with full navigation to a page with none, from the site to the simulator. An unmarked edge is the digital equivalent of walking through an unmarked door into a different building.

::: {.rule #NAV-006 grade="C"}
**Mark every edge between kinds of activity with a visible change of frame and a labeled way back.** Edges in Lynch's sense separate districts [@lynch1960image]; Arthur and Passini add that wayfinding decisions are made in response to cues met along the way, so the cue has to be at the boundary itself [@arthur1992wayfinding]. A learner should never discover only after the fact that they are now in a timed or full-screen context.

*In LTF:* `FlyModeLayout` is the clearest edge in the product: no header or footer, dark unless the learner chose Day, `text-xl`, and a "Back to challenge" link at the top. That is right. Two gaps: the `BetaBanner` still renders above Fly mode, which adds a dismissible strip to a screen whose point is to have one decision at a time; and the Fly tab inside `ChallengePage` uses the same frame as Brief, so the move into the steps and the stopwatch is not marked. Show a short heading change or a frame change when the Fly tab opens.
:::

### What this means for Learn to Fly

LTF already has a legible skeleton. The path exists in `content/modules.yaml` and is drawn by `LessonPath`. The three districts are named in `PRIMARY_NAV` (Learn, Challenges, Reference) and each has a recognizable opening. Fly mode is a genuine edge with its own layout. The landmarks are few: the `Logo`, the teal underline on the active section, the mono codes.

What to keep: `LessonPath` as the one drawing of the course, the code labels (`L0.1`, `C4.3`, `M0`) as landmarks, the separate `FlyModeLayout`.

What to change: remove `BetaBanner` from `FlyModeLayout` or replace it there with a one-line text mention in the footer area of the page (NAV-006). Give the last lesson of each module a next step that crosses into the module's challenge or the next module (NAV-003). Treat the dashboard as the main node of the signed-in product (NAV-001; see also the chapter "Orientation on every page"): today it is reachable only through `UserMenu` on desktop and the drawer on phones, so a signed-in learner's main junction has no persistent landmark in the header.

What to build: nothing new is needed for the map itself. The work is discipline: the order of published lessons never changes, each district keeps its opening, and no new accent mark competes with the existing landmarks (NAV-002, NAV-004).

## Wayfinding happens at decision points

Arthur and Passini, a graphic designer and an architect trained in environmental psychology, moved wayfinding away from the idea that finding your way is a matter of consulting a stored map or reading signs. They treat it as purposeful problem solving: people make decisions as they move, in response to the information they meet, and a wayfinding system has to deliver the right information at the place where each decision is made [@arthur1992wayfinding]. Architecture and graphics are, in their account, two parts of one information system, to be planned together. The book was not read directly for this Part; the specifics below come from the publisher's description, a catalog abstract and secondary accounts that give page references.

### The anatomy of a wayfinding decision

Secondary accounts describe the book's model as three linked processes: decision making (forming an action plan), decision execution (carrying it out) and information processing, which feeds both [@arthur1992wayfinding]. A wayfinding decision is a behavior, such as turning right, going up or looking for information, made in response to an environmental stimulus such as an intersection, a stairway or a billboard [@arthur1992wayfinding, 31]. Perception in this setting is "directed and purposeful perception" [@arthur1992wayfinding, 33]: people look for what their current decision needs and screen out the rest. From that follows the book's most quotable line, that information received "at the wrong place is as good as no information at all" [@arthur1992wayfinding, 34], and its corollary, that relevant information buried in a complex body of information may be screened out and not remembered.

On a website, a decision point is any place where the learner has to choose what to do next: the end of a lesson, the top of a module page, the result of a challenge, the dashboard after signing in. Each one can be inspected with three questions taken from the book's checklist spirit: where am I, where can I go from here, and how do I know I am finished? If the answer to one of them sits on another page, in a help article or in a tooltip that the learner has to discover, the page fails the test even if the information exists somewhere in the product.

::: {.rule #NAV-007 grade="C"}
**Put the information each decision needs on the same screen as the decision, next to the control that acts on it.** Arthur and Passini's principle that information at the wrong place is as good as none [@arthur1992wayfinding, 34] is a craft synthesis from building design, with no controlled test behind it on screens; information foraging research (see the chapter "Information scent and the cost of a click") supplies the mechanism, since people judge a link by the cues they can see at the moment of choice [@pirolli1999information].

*In LTF:* the lesson row in `CurriculumMap` shows minutes beside the title, and `ModulePage` gives "About {h} hours of lessons and sim time" above "Start module n". Keep both. The gap is readiness: every lesson file has a `prerequisites` field in its frontmatter, but no page renders it. The learner deciding whether to start a lesson cannot see what it assumes. Show prerequisites on the lesson page under the meta row, as links.
:::

::: {.rule #NAV-008 grade="C"}
**Design every page for a first-time visitor who knows none of the product's or aviation's vocabulary.** A design guideline derived from the Arthur and Passini tradition is to design for the first-time visitor, because repeat visitors can lean on experience [@arthur1992wayfinding]. LTF's audience makes the rule stronger than it is for most products: a complete beginner is a first-time visitor to the domain as well as to the site.

*In LTF:* labels such as "Brief", "Debrief", "Fly mode" and "kneeboard" are aviation framing and among LTF's most distinctive traits. They are fine as names, but each needs a plain description where it first appears: the `ChallengePage` tab list should show what each tab is for on a first visit, and the "The kneeboard" heading on the reference hub needs a line saying it is a printable sheet of key numbers.
:::

::: {.rule #NAV-009 grade="C"}
**Give each decision point one primary next action, and make every other option visibly secondary.** Lynch's most successful nodes were unique and intensified their surroundings [@lynch1960image], and decision-making models of wayfinding treat each junction as one choice, not a survey of all possible routes [@arthur1992wayfinding]. A page that offers five equal options at the point of decision has handed the decision back to the learner without the information to make it.

*In LTF:* the dashboard does this well: the Continue card (`border-accent-line bg-accent-tint`, large button) sits above the progress and stats. The end of `LessonPage` does not: after the blocks come "Fly it" cards, "Go deeper" cards, glossary chips (below `xl`), the completion panel with "Mark lesson complete", and then `PrevNext`, so five kinds of exit compete. Order the end zone as completion first, then the single next step (next lesson or the module's challenge), and move "Go deeper" above the completion panel as part of the lesson body.
:::

### Navigation and wayfinding are different tasks

Golledge and Gärling draw a distinction that the rest of this Part relies on. Navigation, in their usage, is following a predetermined, calculated route, optimized for time or cost. Wayfinding is finding a path, often an unfamiliar one, and involves search, exploration, satisficing and emotion [@golledge1999wayfinding]. The two call for different interfaces. A person navigating wants the route laid out step by step with the current step marked. A person wayfinding wants a view of options, cues to judge them, and freedom to change their mind.

LTF contains both. Flying a challenge in the simulator while the steps are open on a second screen is navigation in this sense: the route is fixed, and the learner's job is to execute it. Choosing what to study next on the dashboard, or browsing the reference hub, is wayfinding. A design that treats both the same way serves neither.

::: {.rule #NAV-010 grade="C"}
**Present a fixed procedure as a strictly ordered list with the current step marked, and present open choices as a set of labeled options with a recommendation.** Golledge and Gärling distinguish navigation along a predetermined route from wayfinding that involves search and satisficing [@golledge1999wayfinding]. The distinction is conceptual, so the rule is graded on expert consensus, but it matches the human-factors finding that serious usability problems cluster around what is visible and salient [@nielsen1994enhancing].

*In LTF:* `FlyPanel` lists "Steps" as `Checkbox` rows, ticked rows turning `border-go bg-go-tint`. That is the navigation pattern; add an explicit "current step" treatment (the first unticked row) so the learner's eye returns to the right place after looking at the sim. The dashboard's "Next up" list and the `ChallengesPage` filter grid are wayfinding surfaces and should keep a recommended item at the top.
:::

### Pressure narrows the learner's attention

Decisions get worse under pressure. Zaphiris's paper on Web link depth reports, from earlier work by Wallace and colleagues, that rushed users made 96 percent more errors and took 16 percent longer [@zaphiris2000depth]. The figure is a secondary report in one paper and should not be quoted as a general constant, but its direction matches everything else in this lane: the cost of a wrong turn is higher when the person has less attention to spare. A learner in Fly mode is flying the simulator with one part of their attention and reading LTF with another.

::: {.rule #NAV-011 grade="B"}
**On any screen used while flying, reduce the choices to the one the procedure needs next, and remove navigation that is not an exit.** Time pressure raises errors [@zaphiris2000depth], and decision points with many options demand the directed perception that divided attention cannot supply [@arthur1992wayfinding]. The grade is B because the stress finding is a single secondary report, though consistent in direction with the wider human-factors literature.

*In LTF:* `FlyModePage` has one exit ("Back to challenge"), the goal, and `FlyPanel large`. Keep it that way. Do not add the global header, a module link, or a glossary panel to Fly mode. If a lookup is needed there, it should be one predictable control (see the chapter "Lookup, learning and berrypicking").
:::

### Structure is learned from configuration, not only from signs

Later reviews of the Arthur and Passini tradition qualify its emphasis on signs and cues. Space syntax studies found that after a short exposure to a building, people tend to head for spaces from which the rest of the building is most accessible, which suggests that they absorb the layout's configuration and not only its landmarks and signs [@arthur1992wayfinding]. The same reviews list open questions: how people use several simultaneous cues, how they give and take directions, and how interior and exterior wayfinding differ. For a website the configuration finding has a plain reading. A newcomer looks for the page from which everything else is reachable, and that page should be easy to find and should actually connect to everything.

::: {.rule #NAV-012 grade="B"}
**Make one overview page the most connected place in each district, and route newcomers to it.** Space syntax research reports that people seek the most globally accessible space in a new building [@arthur1992wayfinding]. On a website that space is a hub page listing every part of a section. The evidence is from buildings, so the grade is B for the mechanism and indirect for screens.

*In LTF:* the hubs exist: `/learn` (`CurriculumPage`), `/challenges` and `/reference`. Each should link to every item in its district. `/reference` reaches speeds, checklists, airports, glossary and resources through `ReferenceSections` and the search box; `/learn` lists every published module and lesson. Keep the header items pointing at these hubs, never at a deep page.
:::

::: {.rule #NAV-013 grade="C"}
**Review the content structure and the interface labels together, as one system, in the same pull request.** Arthur and Passini treat architectural and graphic components of wayfinding as one information system planned together [@arthur1992wayfinding]; Rosenfeld and colleagues define information architecture as the synthesis of organization, labeling, search and navigation systems [@rosenfeld2015information]. A new module added to the content without a decision about where it appears on `/learn` is the digital version of a corridor with no sign.

*In LTF:* a change to `content/modules.yaml` (new module, renamed module, new course) needs a matching check of `CurriculumMap`, the landing curriculum preview (`features/landing/curriculumPreview.ts`), the breadcrumbs on `ModulePage` and `LessonPage`, and the page titles from `usePageTitle`.
:::

### What this means for Learn to Fly

The product's decision points are few and identifiable: the landing hero ("Start lesson 0.1" or "Continue where you left off"), the dashboard Continue card, the top of `ModulePage` ("Start module n"), the end of `LessonPage`, the Brief tab's "I'm set up, start flying", and the result in `ResultView`, which already links each weak criterion to the lesson section behind it ("Review {code} {title}"). That last link is exactly what NAV-007 asks for: the information (which skill to revisit) appears at the moment of the decision (what to do after a disappointing score).

What to keep: the single Continue card on the dashboard, the single exit in Fly mode, the criterion-to-lesson links in `ResultView`.

What to change: render lesson `prerequisites` (NAV-007); reorder the end of `LessonPage` so that completion and one next step lead (NAV-009); add a current-step marker to `FlyPanel` (NAV-010); give each aviation-framed label a first-use description (NAV-008).

What to build: a decision-point audit in design review. For every new page, the reviewer lists its decision points and, for each, writes down where the information for it is. If the answer is "on another page", the page is not finished.

## Information scent and the cost of a click

Pirolli and Card proposed that people looking for information behave like animals foraging for food: they adapt to the structure of their environment and try to get the most value for the effort they spend [@pirolli1999information]. The theory borrows the rational-analysis tools of optimal foraging theory from biology and anthropology, and it was built two ways: an analysis of what an ideal forager would do given the costs and payoffs of an information environment, and a process model, ACT-IF, implemented as a production system that simulates people using complex information technology. Its practical vocabulary has become the standard way to talk about links.

### Scent, patches and diet

Three ideas carry most of the weight [@pirolli1999information]. **Information scent** is the value a person estimates for a source before visiting it, judged from cues such as labels, summaries and images, together with what the person already knows. **Information patches** are clusters of information, in space or time; the forager decides whether to stay in a patch or move to another. The **information diet** is the choice of which sources to pursue at all, given that the value of information depends on the task it serves. In the precursor paper the patch decision followed Charnov's marginal value theorem: leave a patch when the rate of gain in it falls to the average rate available across the environment. The diet decision ranked items by profitability, expected gain per unit of handling time. The theory assumes people satisfice, taking an option that is good enough, rather than optimizing perfectly.

The first empirical illustrations were small. The precursor work used time-coded video of four researchers working for an hour each with Scatter/Gather, a document-clustering browser, and the authors suggested from the theory that ordering cluster titles by probability of relevance would raise the rate of gain [@pirolli1999information]. Fu and Pirolli later reported that the 1999 analysis found ACT-IF's scent-based rankings of Scatter/Gather clusters correlated well with the clusters users actually chose [@fu2007snifact]. A glossary summary of the theory notes its limits [@pirolli1999information]: its applicability is not fully understood, building such models is complex, and in practice information foraging is used mostly as a design perspective rather than a validated predictive tool.

### What the Web models found

SNIF-ACT carried the theory onto the Web and tested it against observed behavior [@fu2007snifact]. The model computes the scent of a link for a goal by summing the activation of the goal's words given the words in the link, with association strengths approximated from word co-occurrence statistics in large text corpora. Version 1.0 was tested against detailed protocol data from 8 participants on two information-seeking tasks. Link selections and site-leaving actions made up 72 percent of the 189 actions extracted from the logs (48 percent following a link, 24 percent leaving a site). In one comparison the link with the highest model scent was chosen 19 times and the next highest 15 times, and a model that simply chose links by their position on the page fit worse.

Version 2.0 added a Bayesian satisficing mechanism: links on a page are evaluated one after another, and the model clicks, or goes back, as soon as its accumulated assessment is good enough [@fu2007snifact]. Validated on data from 74 subjects, it fit human behavior better than version 1.0 and better than the position model. Two further results matter for design. Mean page scent was high at first and fell before participants left a site, which is what the patch model predicts: people leave when the expected gain from staying drops below the expected gain from moving on. And the model reproduced the Law of Surfing, an empirical regularity in how long navigation paths get before people give up.

The limits are stated by the authors. The model evaluates links in sequence, while real users also process pages hierarchically; users' different background knowledge is not modeled; the data come from mid-2000s sites with mostly text links [@fu2007snifact]. Scent and position were also correlated (r = .64 in the paper), which is one reason the authors tested a combined model. Treat SNIF-ACT as strong evidence that link wording predicts choice and leaving, measured on real tasks, but not as a calibrated tool for LTF's pages.

::: {.rule #NAV-014 grade="B"}
**Write every link, button and card title so that a first-time learner can predict the destination from its words alone.** Information scent computed from link words predicted which links people chose and when they left a site, better than link position did [@fu2007snifact; @pirolli1999information]. The grade is B: two validated models and consistent theory, but on text links, specific tasks and older sites. The rule applies to the label as read, including any visible summary; an icon alone carries little scent.

*In LTF:* `PrevNext` ("Next lesson" plus `{code} {title}`), challenge cards (code, title, meta row) and "See the curriculum" have strong scent. Weak ones: "Go deeper" (deeper into what?), "Fly it" as a section heading (it introduces challenge cards, but the words do not say so), "Open the course" on the landing hero. Rename to say the destination: "Further reading", "Challenges for this lesson", "Open the curriculum".
:::

::: {.rule #NAV-015 grade="B"}
**Put the recommended next step first and make it visually distinct, because learners take the first option that looks good enough.** SNIF-ACT 2.0's satisficing mechanism, which evaluates links in order and acts once one is good enough, fit 74 subjects better than a model that compares all options [@fu2007snifact]. Learners will not reliably compare every card before choosing.

*In LTF:* the `CurriculumMap` current module opens by default with `border-accent-line bg-accent-tint` and an "Up next" eyebrow, and the dashboard Continue card leads its page. Do the same on `ModulePage`: the first incomplete lesson in the "Lessons" list should carry the same current treatment as `LessonPath`'s ink pin, not just appear in order.
:::

::: {.rule #NAV-016 grade="B"}
**Treat the end of every patch as the place learners are most likely to leave, and give it the strongest scent on the page.** Mean page scent dropped before participants left a site [@fu2007snifact], and the patch model predicts leaving when the gain rate falls [@pirolli1999information]. The end of a lesson, a finished challenge and an empty search are all patch ends.

*In LTF:* the end of `LessonPage` is a patch end. A weak or crowded "what next" there is where learners stop (see NAV-009). The `ResultView` after a debrief is another; it already offers "Review {code} {title}" per criterion and a link to the next challenge. The reference search's "Nothing matches" state is a third: it should offer a path out (the glossary A to Z list, or the hub sections), not only report the miss.
:::

::: {.rule #NAV-017 grade="C"}
**Never give a link more scent than its destination can deliver; a link to a page that is not ready must say so or not be a link.** Inflated scent draws a forager into a patch whose gain is lower than predicted, and the patch model predicts quick abandonment and lower trust in later cues [@pirolli1999information]. The rule is an implication of the theory rather than a tested finding.

*In LTF:* the landing curriculum list renders every module as a `Link` to `/learn/{slug}` with a chevron, including rows marked "Being written". Since only published modules are served (v1.md D-32), those links lead to an empty or missing page. Render unpublished rows as plain list items without a chevron, keep the "Being written" note, and link to `/roadmap` once for the group.
:::

### Patches, gain and the cost of staying

The patch model gives designers a way to reason about when learners stop. A forager stays while the rate of gain is good and leaves when it drops to the average available elsewhere [@pirolli1999information]. Two things affect that judgment that a designer controls: how much gain the learner perceives (progress, a sense of having learned something) and how much effort the learner believes is left. A lesson that hides its length invites the learner to overestimate the remaining cost; a lesson with no visible completion point never lets the learner bank the gain.

::: {.rule #NAV-018 grade="C"}
**Show the size of every patch before entry and the learner's position inside it during the visit.** Under the patch model, the decision to stay depends on expected gain against remaining effort [@pirolli1999information]; a learner who cannot see the remaining effort cannot make that judgment well. This is a theory-derived craft rule.

*In LTF:* "About n minutes" in the lesson meta row, "n lessons · n challenges · about h" on each `CurriculumMap` card, and the mobile section `Select` ("Section i of n: title") already do this. Add the position of the lesson in its module ("Lesson 2 of 5") to the lesson header, beside the mono code: the code `L0.2` alone does not tell a beginner how many lessons remain.
:::

::: {.rule #NAV-019 grade="C"}
**Order items within a list by how likely they are to serve the learner's current goal, where the order is not already fixed by the course sequence.** Pirolli and Card's own design suggestion was to order cluster titles by probability of relevance, to raise the rate of gain [@pirolli1999information]. It was proposed from the theory, not tested as an interface change, so the grade is C.

*In LTF:* the course sequence fixes the order of lessons, so this rule does not apply to `CurriculumMap` or `ModulePage`. It does apply to the reference hub's "Most looked up" chips, to search results (exact name matches before definition matches, as `searchGlossary` already does), and to the default sort of `ChallengesPage` for a signed-in learner (unfinished challenges from the current module first).
:::

::: {.rule #NAV-020 grade="B"}
**When testing navigation, separate the effect of a label's wording from the effect of its position.** Scent and link position were correlated at r = .64 in the SNIF-ACT data, and a position-only model fit worse than a scent model [@fu2007snifact]. A link that is chosen often may simply be first.

*In LTF:* if analytics are added to the lesson end zone or the dashboard, compare click share for the same label in two positions before concluding that a label works. In a tree test or first-click test, randomize the order of sibling items.
:::

### Scent beside the simulator

Fly mode changes the cost side of foraging. Every glance from the sim to the second screen costs attention the learner is using to fly, so the handling time of any lookup is high. The theory's answer is to raise the value per glance: one strong cue per decision, at a predictable place, never a choice among several weak ones [@pirolli1999information]. The same holds for printed and full-screen checklists.

::: {.rule #NAV-021 grade="C"}
**On screens used beside the simulator, give each glance one high-confidence cue in a fixed position, and never require reading a list of options to find it.** The cost of information is the handling time, and foraging theory predicts that high handling costs make people abandon sources [@pirolli1999information]; under time pressure errors rise [@zaphiris2000depth]. The grade is C because no study here measured second-screen use beside a simulator.

*In LTF:* in `FlyPanel large` the stopwatch digits and the steps list are in fixed places. Keep the steps list from reflowing when a step is ticked, and keep the random-event alert (`border-4 border-warn bg-warn-tint`) in one fixed slot rather than pushing the steps down.
:::

### What this means for Learn to Fly

Scent is the most practical lens in this Part because every label in LTF can be inspected against it without a study. The product's strongest scent is in its codes plus titles (`L0.1 Welcome: how Learn to Fly works`, `C4.3 Full-stop landing`), its "Review {code} {title}" links in `ResultView`, and its Continue card. Its weakest is in short section headings that name an activity instead of a destination ("Go deeper", "Fly it") and in links that lead nowhere yet ("Being written" module rows).

What to keep: code-plus-title on every lesson and challenge link; the current-module treatment in `CurriculumMap`; the criterion review links.

What to change: rename "Go deeper" and "Fly it" headings to destination words (NAV-014); stop linking unpublished modules (NAV-017); add "Lesson n of m" to the lesson header (NAV-018); give the search miss state a way out (NAV-016); mark the first incomplete lesson on `ModulePage` (NAV-015).

What to build: a label review step. For every new link or card, the reviewer covers everything but the label and asks a stated goal ("you want to practice landings"): would a beginner pick this? That test costs nothing and catches most scent failures before a user does.

## Depth, breadth and the shape of the course

The oldest quantitative question in information architecture is how to arrange a fixed set of items: many choices on few levels, or few choices on many levels. It has been tested more often than any other structural question in this Part, from text terminals in 1981 to Web pages at the end of the decade, and the answer has held in direction while shifting in detail.

### The menu experiments

Miller held 64 end items constant and varied depth from one level of 64 to six levels of two, with breadth running from 2 to 64 [@miller1981depth]. Goal acquisition time formed a U-shaped function, lowest at two levels of eight choices, and the error data agreed, so the fastest structure was also the most accurate. Both the flat 64-item screen and the six-level binary tree did worse. Miller's conclusion was moderate: depth should be minimized, but not at the cost of crowding the display.

Kiger repeated the design with five structures over 64 bottom-level items: three symmetric trees (8 by 8, 4 by 4 by 4, and six levels of 2) and two asymmetric two-level trees, a 4-item menu followed by a 16-item menu and the reverse [@kiger1984depth]. He dropped Miller's flat condition. Time and errors rose with depth. The 4-then-16 tree was fastest and had the fewest errors, followed closely by, and not reliably different from, 16-then-4 and 8-by-8. Participants rated 8-by-8 easiest and preferred it. He gave as a general principle that depth should be minimized by providing broad menus of up to eight or nine items each, but his own fastest tree had a 16-item page, so the finding is "two levels beat three or six," not "eight is best."

Landauer and Nachbar approached the same question on a touch screen with ordered items: integers from 1 to 4096, or 4096 alphabetically ordered words, selected through successive menus of 2, 4, 8 or 16 alternatives [@landauer1985selection]. Time per screen grew with the logarithm of the number of alternatives, consistent with decision and movement components in series, and their conclusion was that "broader, shallower menu trees yield faster search than narrower, deeper ones." Because the logarithm grows slowly while each extra level adds a whole screen, the arithmetic favors breadth. The caveat is in the materials: numbers and alphabetized words have an obvious order, so each choice is a bisection of a known sequence.

### The Web replications

Larson and Czerwinski asked whether the menu result survives on the Web when the categories are natural and well labeled [@larson1998web]. Nineteen experienced users searched three structures, each with 512 bottom-level items drawn from the Encarta encyclopedia: 8x8x8, 16x32 and 32x16. Because the categories were built to be natural, only 128 items appeared in all three, and those were the targets. Pages with 8 or 16 items used one column and 32 items two columns, so nothing scrolled. Each person did 8 searches per structure. The two-level 16x32 structure was fastest at 36 seconds (SD 16), 32x16 next at 46 seconds (SD 26), and the three-level 8x8x8 slowest at 58 seconds (SD 23); the deep tree was reliably slower than both two-level ones, which did not differ reliably from each other. Of the 14 five-minute time-outs, 9 were in 8x8x8. Lostness, on Smith's measure, was 0.35 for 16x32 (not lost), 0.49 for 32x16 and 0.63 for 8x8x8 (very lost). Pre-tests of memory span and visual scanning did not predict search time (r = -0.27 and r = -0.12, neither reliable).

The authors drew two lessons. Depth harms search on the Web, and the medium condition beat the broadest one, so "broader is always better" is also wrong; designers must balance the number of category decisions against the number of items to scan on a page [@larson1998web]. Their limits: one domain, 19 people, categories set by an editor rather than a user test, and no meaningful error data because participants kept searching until they found the target.

Zaphiris ran a smaller replication of Kiger's structures as Web link hierarchies over 64 almanac facts about Cyprus, with 17 participants and Back-button navigation only [@zaphiris2000depth]. Mean total time was 36.0 seconds for 2x6, 32.2 for 4x3, 20.3 for 8x2, 21.0 for 4-then-16 and 32.4 for 16-then-4, a significant effect of structure. Errors were too few to show an effect. In the discussion he reports that the number of links per page, over 2 to 16, did not seem to affect speed; depth did. Preference again diverged: the fastest structure, 8x2, ranked only third on difficulty, and the two mixed structures got the lowest difficulty scores.

### What the confounds change

The direction is replicated; the details have known weaknesses. Miller and Kiger held the bottom nodes identical across structures, which forced unnatural categories in some conditions and confounds category soundness with depth [@larson1998web]. Their participants studied the hierarchies at length and received feedback, so their results describe trained, best-case performance, not a first visit [@miller1981depth]. In the replication record of Miller's study, Snowberry, Parkinson and Sisson found that memory span did not predict performance but visual scanning did, especially in the deepest trees, and that when the 64 items were grouped into coherent categories the broad flat structure did better than when they were random [@miller1981depth]. So the quality of the categories carries as much weight as the shape. One student review called Miller's study statistically inconclusive, while the abstract describes a clear U; the strength of the original effect is uncertain [@miller1981depth].

::: myth
**"Menus and navigation bars should hold seven items, plus or minus two."** The claim stretches G. A. Miller's 1956 paper, which concerned the span of immediate memory and of absolute judgment on one stimulus dimension, measured in chunks and bits, and which gives no rule for lists or menus [@miller1956magical]. Items on a screen can be re-read, so memory span does not limit them. The Web study with the best results used 16 and 32 items per page, and memory span did not predict search time [@larson1998web]. Miller himself closed the paper by suspecting the many sevens were "a pernicious, Pythagorean coincidence" [@miller1956magical].
:::

::: myth
**"Hick's law proves that fewer choices make faster decisions, so cut options."** Hick's law describes reaction time growing with the logarithm of the number of alternatives, so each added item costs less than the one before; Liu and colleagues argue it speaks against, not for, the popular "less is better" principle, that logarithmic data do not by themselves show Hick's law at work, and that choice reaction time is often roughly constant in real interface tasks [@liu2020relevant]. The menu study that applied the law found it favors broad, shallow trees over splitting items into levels [@landauer1985selection].
:::

::: {.rule #NAV-022 grade="A"}
**Keep every lesson within two levels of the curriculum overview: overview, then module, then lesson, and no level above or between.** Depth costs time and errors in every study of the question: Miller, Kiger, Landauer and Nachbar, Larson and Czerwinski, and Zaphiris, on terminals, touch screens and the Web [@miller1981depth; @kiger1984depth; @landauer1985selection; @larson1998web; @zaphiris2000depth]. The deep Web structure also produced the most lostness and time-outs [@larson1998web]. The conditions: the studies used text lists, artificial or encyclopedic content and mostly trained participants, so the rule fixes the shape, not the labels, which must still be tested.

*In LTF:* today `/learn` lists modules and each module opens to its lessons, so a lesson is two levels below the overview. `content/modules.yaml` already defines three courses (Course 1 is M0 to M8, then "Skyhawk Advanced VFR" and "Skyhawk Instrument Foundations"). Do not add a course page between `/learn` and the module. Show courses as headed groups on the one `/learn` page.
:::

::: {.rule #NAV-023 grade="B"}
**Prefer a broad level of up to about 16 to 32 well-labeled items over adding a level, provided the page can be scanned without scrolling past the group.** Two-level structures with 16 and 32 items per page beat a three-level structure of eights [@larson1998web], and links per page over 2 to 16 did not slow users when depth stayed low [@zaphiris2000depth]. The grade is B: one well-designed Web study and one small replication; the upper bound is the largest breadth tested, not a recommended target.

*In LTF:* 22 modules on one `/learn` page fall inside the tested range if each row stays one line of code and title with its summary, as the `<details>` summary in `CurriculumMap` does. The 179-term glossary and 30-challenge list exceed it and need grouping or filters (see NAV-024 and the chapter "Organizing the content").
:::

::: {.rule #NAV-024 grade="B"}
**When a list grows long, group it visibly on the same page instead of moving part of it one level down.** Coherent categories made a broad structure work where random arrangement did not [@miller1981depth], and Larson and Czerwinski's advice is to balance category decisions against items scanned [@larson1998web]. Visible grouping adds scanning structure without adding a decision level.

*In LTF:* `GlossaryPage` groups terms A to Z (`groupByLetter`), and `ReferenceSections` groups reference content into five numbered sections. On `/learn`, when Course 2 modules are published, group by course with a `heading-lg` course heading and a one-line description, all on the same page.
:::

::: {.rule #NAV-025 grade="B"}
**Use a short top level of a few large groups over a longer, well-grouped second level, rather than equal breadth at each level.** Kiger's fastest structure was 4 items then 16 [@kiger1984depth], and in Zaphiris's replication 4-then-16 (21.0 seconds) nearly matched the fastest tree while 16-then-4 took 32.4 [@zaphiris2000depth]. Two small studies agree, so the grade is B.

*In LTF:* the header's three items (Learn, Challenges, Reference) over long, well-grouped hub pages is this shape. Resist adding header items for every content type (Glossary, Checklists, Airports); they belong inside Reference.
:::

::: {.rule #NAV-026 grade="B"}
**Do not choose a navigation structure on stated preference; measure task success and time alongside it.** Preference and performance diverged in Kiger's study (8-by-8 preferred, 4-then-16 fastest) [@kiger1984depth], in Larson and Czerwinski's (32x16 ranked best by 11 of 19, 16x32 fastest) [@larson1998web] and in Zaphiris's (the fastest structure ranked third) [@zaphiris2000depth]. The three studies are small, but they agree.

*In LTF:* when restructuring `/learn` or the reference hub, collect success and time on tasks ("find the lesson about the traffic pattern") as well as which version testers liked.
:::

::: {.rule #NAV-027 grade="C"}
**In a navigation audit, count the levels between the hub and every destination, not only the items per page.** Depth, not breadth, drove time in the Web studies [@zaphiris2000depth; @larson1998web]; a page that looks tidy because it hides items behind another level has paid for tidiness with depth.

*In LTF:* the deepest destinations today are a checklist (`/reference` to `/reference/checklists` to `/reference/checklists/:slug`) and an airport, each two below the hub. A lesson section reached by anchor (`#section`) from `ResultView` adds no level. Keep that count at two.
:::

### What this means for Learn to Fly

The shape the evidence favors is the shape LTF has now: a short global level of three items and hub pages with one broad level beneath them. The risk is not the present but the content plan. Twenty-two modules in three courses invite a course level, and 179 glossary terms and a growing challenge list invite subcategory pages. Each of those would add depth, which every study here penalizes.

What to keep: three items in `PRIMARY_NAV`; module then lesson; `CurriculumMap` rows that expand in place; reference sections on one hub page.

What to change: when Course 2 is published, add course headings to `/learn` rather than a course route (NAV-022, NAV-024). Keep glossary, checklists and airports under Reference (NAV-025).

What to build: a tree test on the `/learn` structure before Course 2 ships, with beginners and tasks phrased in their words, measuring success and lostness (NAV-026; method in the chapter "Researching the structure").

## Path length, clicks and effort

Designers reach for click counts because they are easy to measure. The evidence says they measure the wrong thing. What predicts success and satisfaction is whether each step is clear and whether the person ends up where they meant to go; the number of steps matters only through those.

### The three-click rule did not survive the data

Porter tested the folk rule that users abandon a site if they cannot find what they want within three clicks [@porter2003testing]. His data came from usability sessions with 44 users, 620 tasks and more than 8,000 clicks, with tasks running from two or three pages to as many as 25, and with users rating satisfaction after each task. The distribution of click-stream lengths was the same for successful and unsuccessful tasks; in a summary of the article, 80 percent of tasks were not completed until about 15 clicks, whether they succeeded or failed. Users did not give up after three clicks. The share of dissatisfied users ranged only from 46 to 61 percent across click-stream lengths, so fewer clicks did not make more satisfied users. And users complained about the number of clicks only when they failed to find what they wanted; successful users did not.

A 2019 Nielsen Norman Group commentary, read alongside Porter's article, calls the rule an arbitrary rule of thumb, traces its earliest known print reference to Zeldman in 2001, and notes that it conflicts with another myth, that sites should have at most seven main navigation categories [@porter2003testing]. The right number of clicks, it argues, depends on task complexity, the cost of each click (a page load versus an instant expand) and the confusion each one introduces. Its recommendations are strong scent in labels, breadcrumbs, mega menus in place of cascading dropdowns, hub pages and surfacing key tasks.

The limits of Porter's evidence are worth stating. It is an observational analysis of one set of sessions, not a controlled experiment, and the article does not say when the sessions were run beyond "recent" [@porter2003testing]. It shows the rule has no support in those data; it does not establish a right number. It is consistent with the foraging account, in which scent and not count drives abandonment [@fu2007snifact].

::: myth
**"Users leave if they cannot find content within three clicks."** In 620 tasks by 44 users, click-stream lengths were distributed the same way for successful and failed tasks, users did not abandon after three clicks, and satisfaction did not rise as paths got shorter [@porter2003testing]. Complaints about clicks came only from users who failed. The rule's earliest known print source is a 2001 book, not a study [@porter2003testing].
:::

::: {.rule #NAV-028 grade="B"}
**Never use a click budget as a design rule or an acceptance test; judge a navigation path by task success, time and whether the learner knew where they were.** Click count did not distinguish successful from failed tasks or predict satisfaction [@porter2003testing], while link scent predicted choices and leaving [@fu2007snifact]. The grade is B: one large observational study and consistent model evidence. A complaint about "too many clicks" should be read as a report of failure to find, and investigated as one.

*In LTF:* no review should reject a design for being "four clicks deep" or accept one for being "two clicks." A lesson is two levels below `/learn` (NAV-022) because of depth evidence, not a click budget. In feedback from the beta ("Report a problem"), treat any "hard to find" or "too many steps" report as a labeling or structure problem to trace.
:::

### Cheap clicks and obvious clicks

Krug's version of the same point is that the number of clicks matters less than whether each click is an obvious, unambiguous choice [@krug2014dont]. The rule of thumb attributed to him, that three mindless clicks equal one click that requires thought, is a statement about effort per step, not a limit on steps, and it is not an experimentally derived number; the source for it here is secondary summaries of the book. Taken with Porter, it gives two levers that designers control: the thought each step requires and the time each step costs.

::: {.rule #NAV-029 grade="C"}
**Prefer a longer path of obvious choices to a shorter path that makes the learner stop and think at any step.** Krug argues that effort per click, not the number of clicks, is what users feel [@krug2014dont], and Porter's data show no penalty for longer successful paths [@porter2003testing]. This is craft authority supported indirectly by one observational study.

*In LTF:* step-by-step lesson flows (sections in `SectionNav`, one idea per block) are preferable to cramming a procedure onto one dense screen. The challenge flow (Brief, then "I'm set up, start flying", then Fly, then Debrief) is four steps, each obvious; do not merge Brief and Fly to save a click.
:::

::: {.rule #NAV-030 grade="C"}
**Make each navigation step cheap: expand in place where possible, keep route changes fast, and show where loading content will appear.** The cost of a click, a page load against an instant expand, changes how many clicks a task can afford [@porter2003testing]. The rule follows craft guidance rather than a controlled comparison.

*In LTF:* `CurriculumMap` opens module cards in place as `<details>`, and the challenge tabs switch through `?tab=` without a full reload. Every route is a lazy chunk (`router.tsx`) with `PageSkeleton` while it loads, and `RouteAnnouncer` moves focus to the new `h1`. Keep page chunks small enough that a lesson-to-lesson move from `PrevNext` feels instant on a laptop beside the sim; the bundle budget (`npm run size`) is the guard.
:::

### Backtracking is the real cost

If length is not the problem, what is? The foraging models describe two kinds of action at the level of a page, following a link and leaving, and SNIF-ACT 2.0 explicitly models the choice to go back when no link on a page is good enough [@fu2007snifact]. Larson and Czerwinski measured lostness, which compares the pages a person actually visited with the pages the task required, and found it highest in the deepest structure [@larson1998web]. Both point to the same signal: a person who backs up and tries again has met a label or a structure that misled them. A long path walked forward is not a problem; a short path walked twice is.

::: {.rule #NAV-031 grade="B"}
**Treat backtracking and revisits, not path length, as the evidence of a navigation problem, and measure them in tests.** Lostness, based on pages visited against pages required, separated a deep structure from shallower ones [@larson1998web], and the decision to go back is one of the two main navigation actions in the foraging models [@fu2007snifact]. The grade is B: one experiment with a quantified measure, plus model evidence.

*In LTF:* in a usability session, count how often a learner uses the browser Back button, the breadcrumb, or the header to undo a choice while looking for a lesson, a checklist or a speed. If analytics are added later, a route followed within seconds by a return to the previous route is the event to watch.
:::

::: {.rule #NAV-032 grade="C"}
**Surface the few most common tasks directly on the hub pages, so the learner does not have to navigate to them at all.** Surfacing key tasks on hubs is one of the replacements recommended for the three-click rule [@porter2003testing], and satisficing learners take the first good-enough option [@fu2007snifact].

*In LTF:* this is what the reference hub's "Most looked up" chips and the dashboard's Continue card do, and the landing hero's "Start lesson 0.1" or "Continue where you left off" does it for visitors. Keep the surfaced set small and data-driven: "Most looked up" should be revised from real lookups once the beta collects them, not fixed by guess.
:::

### What this means for Learn to Fly

LTF's paths are short already, and that is not the point. The things that matter are that each step is obvious (NAV-029), cheap (NAV-030) and never needs undoing (NAV-031). The product does well on cheapness: lazy routes with skeletons, in-place expansion, tabs in the query string, "/" to focus the reference search and Enter to open its first result. It does less well on obviousness in a few places identified in the previous chapters, such as the crowded end of `LessonPage` and the weakly labeled "Go deeper" section.

What to keep: in-place `<details>` modules; tab state in `?tab=` and section state in `?section=`; `RouteAnnouncer`'s focus move; the bundle budget.

What to change: drop any review language about click counts (NAV-028); make "Most looked up" data-driven once lookups are logged (NAV-032).

What to build: a lostness measure in LTF usability tests (NAV-031), recorded per task alongside success and time, so that structural changes can be compared on evidence.

## Labels and the vocabulary problem

A label is a promise about what lies behind it, written in words the designer chose. The best-documented fact about such words is that other people would have chosen different ones. For a product whose users are learning a new vocabulary, that fact shapes every menu, heading and search box.

### People name things differently, most of the time

Furnas, Landauer, Gomez and Dumais measured how consistently people name the same object or action [@furnas1987vocabulary]. Across five application-related domains, spontaneous word choice was surprisingly variable: the probability that two people favored the same term was below 0.20 in every domain. They then simulated access schemes built on vocabulary and found that the common approach, access through one designer's favorite word, would fail 80 to 90 percent of the time in many common situations. The remedy they derived as optimal was "unlimited aliasing": a system that recognizes as many alternative words as possible for the same target, which the abstract reports could improve on single-word access several-fold. Their conclusion was that for success without extensive training, or on a first try at a new target, a system must recognize the words people will spontaneously use.

The details available here come from the abstract and two secondary records; the names of the domains, the participant numbers and the simulation settings were not confirmed, and no direct replication was found [@furnas1987vocabulary]. The headline figure describes free naming in the studied domains. It does not say that every interface label has a hit rate under 20 percent, and it does not say people cannot learn a vocabulary with training. What it does say, firmly, is that the designer's own word is a poor guess at the user's.

The problem is sharper for LTF than for most products. Its learners do not yet speak the language of pilots, and the simulator has its own names for some of the same controls. A beginner looking for the lesson on the flare might type "landing", "touchdown", "round out" or "pull up before the runway." Each is a reasonable word, and a system that knows only one of them fails the others.

::: {.rule #NAV-033 grade="B"}
**Index every lesson, glossary term and checklist under several names: the pilot's term, the simulator's term and a plain-language description.** Two people chose the same name with probability below 0.20 in every domain studied, and single-word access failed 80 to 90 percent of the time in simulation, while unlimited aliasing was derived as the optimal remedy [@furnas1987vocabulary]. The grade is B: one influential empirical paper with simulation, not independently replicated in what was found here.

*In LTF:* the glossary already supports this. Terms in `content/glossary.yaml` carry an `aliases` list (AGL has "Above Ground Level"; Airspeed indicator has "ASI"), and both `searchGlossary` and the reference index (`buildReferenceIndex`) match on aliases. Only about one entry in four has aliases today (42 of 179). Checklists are indexed only by title and phase, and lessons are not in the reference index at all. Add aliases to every term a beginner might name differently, an `aliases` field to checklists, and lessons (title, summary, aliases) to the index.
:::

::: {.rule #NAV-034 grade="B"}
**Never settle a navigation label on the team's judgment alone; test it with people from the target audience before it ships.** Designers' word choices fail to match users' most of the time [@furnas1987vocabulary], and card sorting and label tests exist to find the users' words (see the chapter "Researching the structure") [@spencer2009card]. For LTF the test group is people who have never flown, not instructors or simulator enthusiasts, whose vocabulary already matches the designer's.

*In LTF:* module titles ("Fundamentals of flight", "Slow flight, stalls and emergencies"), tab names (Brief, Fly, Debrief, History) and reference section names ("V-speeds and limits") are candidates for a quick label test with beginners before Course 1 is fully published.
:::

### Labeling as a system

Rosenfeld, Morville and Arango treat labeling as one of the four systems of an information architecture, alongside organization, navigation and search [@rosenfeld2015information]. Labeling, in their terms, is deciding what to call the categories and the navigation elements. Treating it as a system means the same thing is called the same name wherever it appears: in the menu, the page title, the breadcrumb, the heading and the search result. A label that changes between the link and the page breaks the link's promise even if the content is right.

Nielsen's analysis of 249 usability problems from 11 projects supports this from a different direction [@nielsen1994enhancing]. Of the candidate heuristics, consistency ("same thing, same way") explained the largest share of all problems, 23 percent, and "same things look the same" explained 18 percent of the serious ones. The analysis had one rater and a database drawn largely from the author's own projects, so the percentages are an indication, not a measurement, but the finding that inconsistency is the most common single explanation of usability problems is widely accepted.

::: {.rule #NAV-035 grade="B"}
**Call each page and section by exactly one name, and use that name in the header link, the page title, the `h1`, the breadcrumb and any search result.** Rosenfeld and colleagues define labeling as a system that must be consistent across navigation elements [@rosenfeld2015information], and consistency was the largest single explanation of usability problems in Nielsen's database [@nielsen1994enhancing]. The grade is B because the supporting analysis is indirect and single-rater.

*In LTF:* most routes comply: "Learn" is the header link, the `PageHeader` title and the document title; "Module 0: Getting started" appears in the breadcrumb and the document title. Two gaps. The challenge breadcrumb ends with the code alone ("C4.3") while the page title and `h1` give code and title; show both. And the reference hub's `h1` is "What do you need to know?", with "Reference" only as the eyebrow above it, while the header link, breadcrumbs and document title say "Reference"; a screen reader user moving by headings hears the question, not the page name. Make the `h1` read "Reference" and keep the question as the large subtitle.
:::

### Writing the label itself

Nielsen and Li's guidelines for large menus give the most specific advice on label wording in this lane [@nielsen2017mega]. Use concise, distinct labels that start with the most information-carrying word. Use base verbs ("shop", not "shopping"). Avoid made-up terms. Order groups by workflow or importance, with the most important at the top left in left-to-right languages. Show each choice only once. In their annotated examples the weak menus had labels that were not front-loaded and were hard to tell apart. These guidelines are expert opinion: the article reports that user testing shows mega menus work but gives no design, participant count or metrics [@nielsen2017mega].

::: {.rule #NAV-036 grade="C"}
**Start every label with its most distinctive word, and make sibling labels differ in their first words.** Front-loaded, distinct labels are Nielsen and Li's main wording rule [@nielsen2017mega], and scent models predict that labels sharing words with a goal split choices between them [@fu2007snifact]. This is expert guidance with indirect model support.

*In LTF:* challenge and lesson rows lead with a mono code, then the title; when scanning titles, the code is not the distinctive part, the first word of the title is. Write titles so their first word differs from siblings in the same module. For example, two lessons beginning "Your first..." and "Your second..." should lead with the activity instead.
:::

::: {.rule #NAV-037 grade="C"}
**Keep invented terms and unexplained abbreviations out of navigation labels; where an aviation term is the right name, show its plain meaning beside it the first time.** Nielsen and Li advise against made-up terms in navigation [@nielsen2017mega], and the vocabulary problem predicts that an unfamiliar word fails most first-time users [@furnas1987vocabulary]. Aviation terms are what learners are there to learn, so the rule is not to avoid them but to never let them be the only cue.

*In LTF:* the reference rail's "01 V-speeds and limits" assumes the learner knows what a V-speed is. The glossary's empty-search message ("Try a shorter word or an abbreviation, such as “Vy” or “CTAF”.") suggests the very abbreviations a beginner does not know. Rewrite it to suggest plain words ("Try a shorter word, or describe it, such as “climb speed” or “radio frequency”") and make sure those plain words are aliases.
:::

::: {.rule #NAV-038 grade="C"}
**Write link text that makes sense out of context, naming the destination, never "click here" or "read more."** In Power and colleagues' study of 32 blind users on 16 sites, link purpose was the one finding that both the authors and their critics accepted as valid [@power2012guidelines], and screen reader users often meet links in a list stripped of their surroundings. Scent models make the same demand for all users [@fu2007snifact].

*In LTF:* "Open in the glossary" in the lesson glossary popover, "Review {code} {title}" in `ResultView` and "Back to challenge" in Fly mode are good. "See what's coming on the roadmap" on the dashboard puts the link on "roadmap" alone; link the whole phrase.
:::

::: {.rule #NAV-039 grade="C"}
**Log searches that return nothing and treat the list as a backlog of missing aliases and missing content.** The vocabulary problem means every zero-result query is a word the system did not anticipate [@furnas1987vocabulary]. Reviewing them is the cheapest form of unlimited aliasing.

*In LTF:* the reference search shows "Nothing matches “{query}”" and the glossary has its own empty state. Neither query is recorded. When analytics are added, record the normalized text of zero-result queries (no account identifiers) and review them before each content release.
:::

### What this means for Learn to Fly

LTF's labels are mostly honest and consistent, and the glossary already implements aliasing, which is the single most evidence-backed label technique in this lane. The work is to extend what exists: more aliases, aliases on checklists, lessons in the search index, and plain words alongside aviation terms in navigation labels.

What to keep: `aliases` in the glossary and alias matching in `searchGlossary` and `buildReferenceIndex`; code-plus-title links; destination-naming link text.

What to change: add aliases to many more terms and to checklists, and index lessons (NAV-033); make the challenge breadcrumb show the title and make "Reference" visible on the hub (NAV-035); rewrite the glossary empty-state hint (NAV-037); link whole phrases (NAV-038).

What to build: a label test with beginners for module titles and tab names (NAV-034), and zero-result query logging (NAV-039).

## Organizing the content

Before anything is labeled or linked, someone decides what the pieces are and how they group. Rosenfeld, Morville and Arango give four working definitions of information architecture: the structural design of shared information environments; the synthesis of organization, labeling, search and navigation systems; the art and science of shaping information products to support usability, findability and understanding; and an emerging discipline and community of practice [@rosenfeld2015information]. Their textbook is craft authority, refined over four editions since 1998, and it synthesizes research methods rather than reporting experiments. Its organizing vocabulary is the most widely used in the field.

### Structuring, organizing and the messy middle

The authors place information between data (facts in highly structured databases) and knowledge (what is in people's heads), in "the messy middle," where there is often no single right answer [@rosenfeld2015information]. Within it they separate three acts. Structuring sets the granularity of the information "atoms" and their relations. Organizing groups them into meaningful categories. Labeling decides what to call the categories and the navigation elements. The separation is useful in review because the three fail differently: a structuring failure produces pages that are the wrong size (a lesson that should be two, a checklist split across pages), an organizing failure puts things in the wrong group, and a labeling failure puts the right thing behind the wrong word.

The book's organization systems chapter distinguishes organization schemes from organization structures [@rosenfeld2015information]. Secondary summaries of the book report its taxonomy of schemes as exact schemes, which are objective and mutually exclusive (alphabetical, chronological, geographical), and ambiguous schemes, which are subjective (by topic, task, audience, metaphor, or a hybrid); one summary reports the authors' view that ambiguous schemes, though harder to build, often serve users better. That wording was not confirmed against the book, so treat the taxonomy as the commonly taught version of the authors' argument.

The distinction maps cleanly onto LTF. A course for beginners is an ambiguous scheme by nature: it is organized by learning sequence and task, and its order encodes pedagogy and safety that no alphabetical list could. Reference material is the opposite. A learner looking up a speed, a checklist or a term already knows what they want, and an exact scheme (alphabetical, by phase of flight, by airport identifier) lets them find a known item without having to understand the designer's categories.

::: {.rule #NAV-040 grade="C"}
**Organize the course by learning sequence, and organize reference material by an exact scheme the learner can predict without knowing the course: alphabetical, phase of flight or identifier.** Rosenfeld and colleagues distinguish exact schemes, suited to known-item lookup, from ambiguous ones, suited to learning and browsing [@rosenfeld2015information]; Marchionini's distinction between lookup and learning makes the same cut from the searcher's side [@marchionini2006exploratory]. This is craft consensus.

*In LTF:* the curriculum is sequence-based (`modules.yaml`, `LessonPath`); the glossary is alphabetical (`groupByLetter`); checklists carry a `phase` eyebrow; airports are listed by ICAO code. Keep each scheme pure: do not sort the glossary by module, and do not list checklists in lesson order. If a checklist list grows, order it by phase of flight in the order a flight happens.
:::

### Facets, metadata and polyhierarchy

The book treats metadata, controlled vocabularies and thesauri as part of the architecture, with sections on faceted classification and polyhierarchy [@rosenfeld2015information]. A facet is an independent attribute of an item (its type, its difficulty, its module) that can be used to filter or group a collection without forcing the item into one tree. Polyhierarchy lets one item appear under more than one parent. Both solve the same problem, that real content belongs to several categories at once, and both have a cost: an item that lives in several places has no single home, and a learner who finds it twice may not realize it is the same item.

::: {.rule #NAV-041 grade="C"}
**Tag every lesson, challenge and reference item with a small fixed set of facets, and generate cross-links and filters from the tags rather than writing them by hand.** Metadata and controlled vocabularies are part of the architecture in Rosenfeld and colleagues' account, and faceted classification is their main tool for content that belongs to several categories [@rosenfeld2015information]. The rule is craft guidance; its payoff is consistency, since hand-written cross-links drift.

*In LTF:* challenges already carry module, type, difficulty and priority, and lessons carry `module`, `challenges`, `resources` and `prerequisites` in frontmatter; glossary terms carry `related` and `lessons`. Add two facets that matter for beginners: phase of flight and aircraft system, on lessons, checklists and terms, so a checklist page can list "Lessons that use this checklist" from data.
:::

::: {.rule #NAV-042 grade="C"}
**Give every lesson exactly one home in the course, and allow multiple parents only for reference items.** Polyhierarchy solves multi-category content at the cost of a single home [@rosenfeld2015information]; for a course, where the path is the main wayfinding device, a lesson in two modules breaks the path (NAV-001). Reference items have no path to break.

*In LTF:* `modules.yaml` lists each lesson slug in one module. Keep that a validator rule. A glossary term may appear under several lessons' "Terms in this lesson" chips and in the A to Z list; a checklist may be linked from many lessons and challenges. Both are fine because their canonical home (`/reference/glossary#slug`, `/reference/checklists/:slug`) is fixed.
:::

### Filters on collections without a path

Where a collection has no learning sequence, facets become filters. Kalbach's treatment of navigation design frames the choice around human information behavior, not technology: how people find things and how they are guided [@kalbach2007designing]. A filter panel is a form of guided navigation, and it inherits all the label rules of the previous chapter. Its facet names are labels, and so are its option values.

::: {.rule #NAV-043 grade="C"}
**For a collection that has no fixed order, provide facet filters named in the learner's words, show the result count, keep the filter state in the URL and offer one way to clear everything.** Faceted classification is the standard tool for such collections [@rosenfeld2015information], and filter names are labels subject to the vocabulary problem [@furnas1987vocabulary]. Craft consensus.

*In LTF:* `ChallengesPage` does almost all of this: five `Select` filters, "Showing n challenges of n" in a `role="status"` line, filters in the URL, and "Clear filters" in the empty state. One label leaks internal vocabulary: the facet is called "Priority" with options "Core" and "Bonus". "Priority" is the content team's term (`priority: P0`); rename the facet "Core or bonus." Also offer "Clear filters" beside the count whenever any filter is set, not only when the result is empty.
:::

### Does the product need search?

The book's search chapter opens with a question: does your product need search [@rosenfeld2015information]? A small site with a clear structure can serve most users with browsing; search earns its cost when the content is large, when users arrive with known items in mind, or when the vocabulary problem makes browsing unreliable. LTF has all three conditions in its reference section and none of them in its course. A beginner rarely knows the name of the lesson they need; a learner mid-flight often knows exactly which speed or checklist they want.

::: {.rule #NAV-044 grade="C"}
**Provide search where learners look up known items, and make it cover every item of that kind; do not rely on search to find the course path.** Search is justified by content size and known-item tasks [@rosenfeld2015information; @marchionini2006exploratory], and a search box that covers some items of a kind and not others teaches learners that a miss means nothing exists.

*In LTF:* `ReferenceSearch` covers speeds, checklists, airports, glossary terms and resources, which is the right scope for lookup. Lessons are excluded, which is defensible (learners find lessons through `/learn`), but a learner searching "crosswind" at the reference hub finds a glossary term and no lesson. Add lessons as a sixth kind, ranked after reference items, labeled "Lesson", so the search never reports a miss for a topic the course covers.
:::

::: {.rule #NAV-045 grade="C"}
**Keep a content inventory and a site map that are generated from the content files, and review them whenever a module or route is added.** Rosenfeld and colleagues' design and documentation chapter treats site maps and content inventories as living documents of the architecture [@rosenfeld2015information]. Generated documents cannot drift from the product the way hand-drawn ones do.

*In LTF:* `content/` is the source of truth, `npm run content:warnings` already generates per-module README files listing each lesson and its verification state, and `src/router.tsx` lists every route. A generated site map (routes plus published modules and lessons) would let a reviewer see the whole structure, and its depth, in one file.
:::

### What this means for Learn to Fly

LTF's content model is already richer than its interface. The frontmatter carries prerequisites, challenges, resources and priority; glossary terms carry aliases, related terms and lessons. The interface uses some of this (glossary backlinks, challenge filters, "Recommended lessons" in `BriefTab`) and ignores the rest (prerequisites, any facet for phase of flight or aircraft system).

What to keep: the split between a sequenced course and exactly organized reference; one home per lesson; filters in the URL.

What to change: rename the "Priority" facet (NAV-043); add lessons to `ReferenceSearch` (NAV-044).

What to build: phase-of-flight and aircraft-system facets in the content schema and the cross-links they generate (NAV-041), and a generated site map (NAV-045).

## Orientation on every page

Most visits to a website do not start at the home page. Search results, shared links and bookmarks drop people onto interior pages, and a learner returning to LTF after a week opens the lesson they last read, not the curriculum. Every page therefore has to answer the orientation questions on its own, without assuming the visitor came through the front door.

### The trunk test

Krug's statement of the problem is a thought experiment: imagine being blindfolded, driven around in a car trunk and dropped on a random page of a site [@krug2014dont]. You should be able to tell, at once, what site it is, what page you are on, what the major sections are and how to get home; summaries of the book add where you are in the structure and how to search. The practical version is to print a random page, hold it at arm's length or squint, and circle the site name, the page name, the main sections and the you-are-here mark. The test matters, Krug argues, precisely because search and shared links land people on interior pages. His list of elements to include on every page follows from it: site ID, page name, sections (primary navigation), local navigation, "you are here" indicators and search [@krug2014dont].

The trunk test is a heuristic walk-through, not a validated instrument; no study of its reliability was found, and the details here come from secondary summaries of the book rather than the text itself [@krug2014dont]. Its value is that it turns orientation into a check anyone on a team can run in a minute.

::: {.rule #NAV-046 grade="C"}
**Run the trunk test on every page template: from the page alone, a reviewer must be able to point to the site, the page name, the section, the page's place within the section, and the way back to the section hub.** Krug's trunk test and his list of persistent elements are craft guidance from usability practice [@krug2014dont]; Lynch's landmarks and districts give the same questions a theoretical frame [@lynch1960image]. A page that fails one question needs a visible element that answers it.

*In LTF:* `LessonPage` passes most of it: `Logo` (site), the `h1` (page), the header underline on Learn (section), the breadcrumb "Learn › Module n: title" and the mono "Lesson 0.1" label (place), and the breadcrumb links (way back). What it lacks is the lesson's position in the module (NAV-018). `FlyModePage` deliberately fails the section question because it has no header; that is acceptable only because it is an edge with a labeled exit (NAV-006).
:::

### You are here

Persistent navigation tells a person what exists; a you-are-here indicator tells them which of those things they are in. Rosenfeld and colleagues group these devices under placemaking and distinguish embedded navigation (global, local and contextual, built into pages) from supplemental navigation (site maps, indexes, guides) [@rosenfeld2015information]. Kalbach's book covers the same elements from the user's side [@kalbach2007designing]. The craft consensus is that the current location should be marked at every level of navigation that is visible: the section in the global bar, the page in the local list, the item in a sequence.

::: {.rule #NAV-047 grade="C"}
**Mark the current location at every visible level of navigation, with a treatment that does not rely on color alone.** Krug lists "you are here" indicators among the elements every page needs [@krug2014dont], and WCAG forbids color as the only means of conveying information [@w3c2024wcag]. The rule is craft consensus backed by a standard.

*In LTF:* the header marks the active section with ink text and a 3 px `accent-line` inset underline (shape plus color); `SectionNav` marks the active section with `border-accent-line font-semibold text-accent` and a mono number; `ReferenceSections` marks the active section with `bg-accent-tint` and a 3 px inset; `Tabs` use the same underline. That is one consistent you-are-here language, and it should stay the only one. Make sure `NavLink`'s `aria-current="page"` reaches screen readers on every one of them, including the reference rail.
:::

::: {.rule #NAV-048 grade="C"}
**Show breadcrumbs on every page below a hub, mirroring the real structure, with the current page last and not linked.** Breadcrumbs are among the replacements recommended for click-count rules because they show location and offer a one-step way up [@porter2003testing; @krug2014dont]. They describe the structure; they are not a history trail.

*In LTF:* `Breadcrumbs` renders a `nav aria-label="Breadcrumb"` with the last item `aria-current="page"` and, on phones, only the parent ("‹ Module 3"). It is used on module, lesson, challenge, checklist, airport, glossary, resources, speeds and attempts pages. Two fixes: the challenge trail ends with the code alone (NAV-035), and the reference hub sections reached by `?section=` have no trail at all, which is acceptable because they stay on the hub page.
:::

### Headings are the navigation for many readers

For people who use screen readers, the heading outline of a page is its navigation. In WebAIM's 2026 survey of 1,780 screen reader users, 67.8 percent said they navigate by headings first when looking for information on a long page, and 88.3 percent found heading levels very or somewhat useful [@webaim2026screen]. Landmarks were used often or whenever available by 28.3 percent, and first by only 3.4 percent; skip links were used always or often by 37.7 percent. The survey is self-selected and self-reported, and its authors say it may not represent all screen reader users, but its direction has held across eleven editions and matches observational studies [@webaim2026screen].

::: {.rule #NAV-049 grade="B"}
**Give every page one `h1` that names it and a descending heading outline that mirrors its sections, with no skipped levels and no decorative headings.** Heading navigation is the dominant strategy for screen reader users on long pages [@webaim2026screen]. The grade is B: a large, repeated survey of self-reported behavior rather than observation. Sighted scanners use the same outline [@krug2014dont].

*In LTF:* the product has one `h1` per page, and `RouteAnnouncer` moves focus to the new page's `h1` and announces the title after each client-side navigation, which turns the heading into the arrival point. Lesson block headings render as `h2` and markdown `h3` below them. Check the end-of-lesson sections: "Terms in this lesson" is an `h2` inside a box, so the lesson outline ends with several `h2`s of support material at the same level as the lesson's content sections. Group them under one `h2` ("After this lesson") with `h3`s beneath.
:::

### Sticky navigation and what it covers

A sticky header keeps orientation visible, which is good, and covers part of the page, which can hide exactly what the learner is trying to reach. WCAG 2.2 added success criterion 2.4.11, Focus Not Obscured (Minimum), at level AA: a focused component must not be entirely hidden by author-created content, and the Understanding document names sticky headers, footers and cookie banners as the hazards [@w3c2023wcag]. The same problem affects in-page links: a jump to a section heading can land it under the header.

::: {.rule #NAV-050 grade="C"}
**Offset every in-page jump and every scroll-to-focus by the full height of all sticky bars, so that nothing a learner jumps or tabs to lands underneath them.** WCAG 2.2 requires that a focused component not be entirely hidden by author-created content such as sticky headers [@w3c2023wcag]. This is a standards requirement, graded C.

*In LTF:* the `Header` is sticky at 64 px (`h-16`), and on phones the lesson's section `Select` is also sticky at `top-16`; lesson block headings use `scroll-mt-24` (96 px), which may not clear both bars on a phone. Glossary entries use `scroll-mt-24` and `md:scroll-mt-40`. Set a global `scroll-padding-top` on `html` that equals the sticky stack per breakpoint, so tabbing and anchor links are covered everywhere, not only where someone remembered a `scroll-mt` class.
:::

::: {.rule #NAV-051 grade="C"}
**Give every page a unique document title that leads with the page name and ends with the site name.** Page name and site ID are two of the trunk-test answers [@krug2014dont], and the title is what a learner sees in a tab strip, a bookmark and a search result, and what `RouteAnnouncer` reads aloud. Craft consensus.

*In LTF:* `usePageTitle` produces "Page title · Learn to Fly", lessons use "{code} {title}", challenges "{code} {title}", Fly mode "Fly: {code} {title}". Keep this pattern. The default title in `index.html` contains an em dash, which the copy rules forbid; replace it with the same "·" separator.
:::

### The signed-in junction

For a signed-in learner, the dashboard is the node where the next decision is made: it holds the Continue card, progress, "Next up" and recent attempts. In Lynch's terms it is the most important node in the product for a returning user [@lynch1960image], and Krug's list of persistent elements would include a way to reach it from every page [@krug2014dont]. In LTF the dashboard has no link in the header bar; on desktop it is the first item of the avatar `UserMenu`, and on phones it appears in the drawer below the main navigation.

::: {.rule #NAV-052 grade="C"}
**Make the signed-in learner's home (the dashboard) reachable from a visible, labeled item on every page, not only from inside an account menu.** Nodes are where choices happen, and the most important one should be a landmark as well as a destination [@lynch1960image; @krug2014dont]. Craft consensus.

*In LTF:* when signed in, add "Dashboard" (or "My progress", if a label test prefers it) to the visible header items beside Learn, Challenges and Reference, or make the `Logo` link go to `/dashboard` for signed-in learners and say so in its accessible name. The first is clearer; the second changes the meaning of the site ID and should be tested.
:::

### What this means for Learn to Fly

The orientation scaffolding in LTF is solid: one site mark, a sticky header with a consistent you-are-here underline, breadcrumbs with a phone-sized parent link, unique page titles, one `h1` per page and a route announcer that lands focus on it. The gaps are local: the lesson's place in its module, the outline of the end-of-lesson zone, the sticky-bar offset on phones, the dashboard's hidden position and one em dash in the default title.

What to keep: `Header`, `Breadcrumbs`, `RouteAnnouncer`, `usePageTitle`, `SkipLink`, the single underline treatment for current location.

What to change: add "Lesson n of m" (NAV-046); group support sections under one heading (NAV-049); add a global `scroll-padding-top` (NAV-050); fix the `index.html` title (NAV-051); surface the dashboard for signed-in learners (NAV-052).

What to build: a trunk-test pass in design review for every new page template (NAV-046), run by printing or screenshotting the page and circling the five answers.

## Lookup, learning and berrypicking

A course invites the assumption that learners read it once, in order, from the first lesson to the last. They do not. They reopen an earlier lesson before a challenge, look up a term halfway through a paragraph, jump from a disappointing score to the section that explains it, and move between the browser and the simulator many times in one session. Two models from information science describe this behavior and what an interface must do to support it.

### Berrypicking

Bates contrasted the classic information retrieval model, in which a user states one query, matches it against a database and receives one set of results, with what searchers actually do [@bates1989design]. In her berrypicking model the query itself evolves as the searcher learns from what they find, and the need is met not by one best set but by a series of selections gathered bit by bit, like picking scattered berries rather than harvesting a bush. The model differs from the classic one in four respects: the nature of the query (evolving, not fixed), the nature of the process (a bit-at-a-time path), the range of search techniques used and the territory searched.

She describes six widely used techniques, drawn from earlier studies of scholars [@bates1989design]: footnote chasing, or backward chaining through references; citation searching, or forward chaining to later work that cites a known item; the journal run, reading through a central journal; area scanning, browsing materials shelved next to ones already found; subject searches in bibliographies and indexing services; and author searching. Evidence she cites includes Stenstrom and McBride, who found that over 87 percent of social science faculty said they used abstracting journals only occasionally, rarely or never, while 69 percent relied on footnote chasing. For each technique she lists design features: for chaining, simple jumps in any direction without "returning to go"; for journal runs, easy moves between contents lists and articles; for area scanning, the ability to browse a classification at several levels of generality and to "jump the rails" of the scheme.

The model is an argument from earlier studies of mostly academic searchers, not an experiment, and Bates notes that much of the evidence comes from social scientists and humanists [@bates1989design]. It makes design suggestions but reports no tested interface. It remains widely taught and built upon, and its emphasis on evolving needs and browsing anticipates the exploratory search framework below.

### Lookup is not learning

Marchionini separated lookup (fact retrieval and known-item search) from two richer activities, learning and investigating, which together he called exploratory search [@marchionini2006exploratory]. A literature review summarizes lookup as depending on well-defined queries that retrieve discrete facts or documents, and learning and investigating as requiring browsing, several iterations and the assessment of many potentially relevant results. Exploratory search, in this account, blends querying with browsing to satisfy complex needs, and its tools must move beyond predictable fact retrieval.

The framework is conceptual and contested at the margins [@marchionini2006exploratory]. Experimental studies often define exploratory search indirectly through task attributes; Savolainen has argued that the distinctions are unnecessary and that existing information-seeking models cover them; White and Roth treat exploratory search as both a problem context and a process, with a two-phase model of exploratory browsing followed by focused searching. The core distinction, that a person who needs a fact and a person who is learning a topic need different interfaces, is not in dispute.

LTF holds both activities in one product. A learner mid-flight who needs a speed or a checklist item is doing lookup and needs a direct answer in one step. A learner starting a new topic is learning and needs an overview, related material and room to browse. The reference section and Fly mode are lookup surfaces; lessons, modules and the dashboard are learning surfaces.

::: {.rule #NAV-053 grade="C"}
**Give every lesson at least four independent ways in: the course map, the continue path, search, and cross-links from related content.** Berrypicking searchers use several techniques and change them as they go [@bates1989design], and Rosenfeld and colleagues treat findability through some combination of browsing, searching and asking as a critical success factor [@rosenfeld2015information]. A single route serves only the learner whose need matches it. Craft consensus from models of search behavior.

*In LTF:* lessons are reachable from `/learn` and `ModulePage`, the dashboard Continue card and landing CTA, `PrevNext`, glossary term pages ("lessons" backlinks), challenge Briefs ("Recommended lessons") and `ResultView` review links. The missing way in is search (NAV-044).
:::

::: {.rule #NAV-054 grade="C"}
**Link backward to what a page assumes and forward to what builds on it, in both directions, generated from the same data.** Backward and forward chaining are two of the most used search techniques in Bates's account, and her design feature for them is simple jumps in any direction [@bates1989design]. Craft rule derived from the model.

*In LTF:* glossary terms already link to related terms and to lessons that use them (forward from the term). Lessons link to their terms through "Terms in this lesson" chips with "Open in the glossary" (backward). Lessons do not show their `prerequisites` (backward chaining is missing, see NAV-007), and lessons do not show which later lessons build on them. Generate both lists from frontmatter.
:::

::: {.rule #NAV-055 grade="C"}
**On every item page, show its neighbors in the same group, so a learner can scan sideways without returning to the list.** Area scanning, browsing items collocated with one already found, is one of Bates's six techniques, and she recommends browsing a classification at several levels and jumping its rails [@bates1989design]. Craft rule.

*In LTF:* `ChecklistPage` links the previous and next checklist by title, and `PrevNext` does the same for lessons. `GlossaryPage` is one A to Z page, so a term's neighbors are already on screen around its anchor. `AirportPage` has no sideways links; add previous and next airport by ICAO code.
:::

::: {.rule #NAV-056 grade="C"}
**Design lookup surfaces to answer a known-item question in one step, and design learning surfaces for overview and browsing; do not mix the two on one screen.** Marchionini's distinction between lookup and exploratory learning [@marchionini2006exploratory] matches Rosenfeld and colleagues' split between exact and ambiguous schemes [@rosenfeld2015information]. Craft consensus from a conceptual framework.

*In LTF:* the reference hub opens on the search box ("What do you need to know?"), the "Most looked up" chips and the kneeboard: a lookup surface. `SpeedsPage` puts the answer in a large table with `font-mono text-2xl font-bold` values and a sticky `KeyNumbers` panel. Keep lesson prose and widgets off the speeds page; link to the lesson that explains each speed instead.
:::

::: {.rule #NAV-057 grade="C"}
**When an outcome reveals a gap, route the learner to the specific section that fills it, not only to a retry.** The berrypicker's goal evolves with what they find [@bates1989design]; a failed challenge changes the learner's need from "fly it again" to "understand this one step." The interface should respond to the new goal. Craft rule.

*In LTF:* `ResultView` does this: each criterion with a linked lesson section shows "Review {code} {title}", which opens `/learn/{module}/{lesson}#{section}`. Extend it to every rubric criterion that has a lesson behind it, and when an attempt does not pass, place the review links above the action to fly again.
:::

::: {.rule #NAV-058 grade="C"}
**Do not judge learning pages by time to answer; judge them by understanding, quiz results and returns.** Exploratory search is defined by browsing and iteration, not by speed to a fact [@marchionini2006exploratory]. A metric designed for lookup will reward a learning page for being thin.

*In LTF:* time on `LessonPage` and the number of sections visited are not failure signals. Quiz results in `QuizBlock`, lesson completion and challenge tiers are the outcome measures for lessons; time to answer belongs to the reference search and `SpeedsPage`.
:::

### Lookup beside the simulator

Fly mode is the extreme case of lookup: the learner is flying, the need is a single item, and the cost of a failed lookup is a lost step in the procedure. Today `FlyModePage` shows the challenge's goal and steps and links back to the challenge; it has no route to the checklist or key numbers the challenge uses, and the learner who needs one must leave Fly mode or open another tab. `ChecklistPage` has its own large-type, full-screen mode for a second screen.

::: {.rule #NAV-059 grade="C"}
**On a second-screen flying view, offer lookup only, and make each lookup one step to the item the current task needs, without leaving the view.** Lookup needs a direct answer [@marchionini2006exploratory], information belongs where the decision is made [@arthur1992wayfinding], and the cost of each glance is high (NAV-021). Craft rule, untested for this setting.

*In LTF:* add to `FlyModePage` a short, fixed row of links to the checklists and key numbers that the challenge's Brief already references, opening as an overlay or a panel within `FlyModeLayout` (with a single close control) rather than a route change that loses the stopwatch. Do not add search there.
:::

### What this means for Learn to Fly

LTF supports more berrypicking than most course sites: glossary backlinks, challenge-to-lesson recommendations, criterion review links, and a reference hub that is built for lookup. The missing pieces are the backward links from lessons (prerequisites), forward links to later lessons, sideways links on airport pages, lessons in search, and one-step lookups inside Fly mode.

What to keep: the glossary's `related` and `lessons` links; "Recommended lessons" in `BriefTab`; "Review {code} {title}" in `ResultView`; the lookup-first reference hub.

What to change: render prerequisites and "used later in" lists on lessons (NAV-054); add neighbors to airport pages (NAV-055); lead with the review link after a low score (NAV-057).

What to build: a one-step lookup row in Fly mode (NAV-059), and outcome measures for learning pages that are not time-based (NAV-058).
