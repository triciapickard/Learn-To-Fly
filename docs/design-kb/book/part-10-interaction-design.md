# Interaction Design

Interaction design is the design of behavior: what a control does when it is touched, what the
screen says back, what state the product is in and how a person gets out of a state they did not
want. This Part covers direct manipulation and the gulfs between intention and result,
affordances and signifiers, feedback and response time, modes, slips and mistakes, undo and the
protection of work, defaults, conceptual models, goal-directed design and excise,
microinteractions, and the special case Learn to Fly (LTF) lives with every day: a companion
screen used beside a simulator the web page cannot see.

The evidence is uneven, and the rules are graded to say so. A few findings rest on controlled
experiments (the Sellen, Kurtenbach and Buxton study of mode errors, the Carroll and Carrithers
training-wheels interface, Myers on progress indicators, the default-effect literature with its
meta-analysis). Most of the field's best-known ideas (direct manipulation, the gulfs of execution
and evaluation, signifiers, quasimodes, excise, microinteractions) are theory papers, craft
treatises and expert principles that have been refined and argued over rather than replicated.
Those carry grade C, and a reader should treat them as the accumulated judgment of careful
designers, not as measured effects. Use the Part in two ways: read a chapter before designing a
behavior (a widget, a checklist, a debrief form), and run the review checklist in the last chapter
against a pull request.

## Direct Manipulation and the Two Gulfs

### What Shneiderman named

In 1983 Shneiderman asked why a handful of systems (display editors, spreadsheets such as Visicalc,
video games, a spatial data management system) produced what he called glowing enthusiasm when
most computer tools of the time got grudging acceptance [@shneiderman1983direct]. Enthusiasts
reported mastery, competence, ease of learning, confidence, enjoyment and a wish to explore more
powerful features. He named the shared cluster direct manipulation and gave it four principles:
continuous representation of the object of interest; physical actions (pointing, dragging,
labeled button presses) in place of complex syntax; rapid, incremental, reversible operations
whose effect on the object is immediately visible; and a layered or spiral approach to learning
that lets a novice work with a small useful set of actions and expand from there.

He claimed seven benefits for systems built this way: novices learn basic functions quickly, often
by watching someone; experts work very fast; intermittent users retain the concepts; error
messages are rarely needed; users see at once whether an action furthers their goal and can change
direction; anxiety falls because the system is comprehensible and actions are easily reversed; and
users feel in control because they initiate actions and can predict responses. His examples ran
from full-page editors (citing a finding that performance time was about half that of line
editors) to a refinery schematic where one numbered button opens a detailed view, so an operator
need recall no commands in a once-a-year emergency, to driving a car, which he called his favorite
example.

The paper explains the effect through two kinds of user knowledge. Syntactic knowledge (the exact
form of a command) is arbitrary, rote-learned, volatile and specific to one system. Semantic
knowledge (concepts and functions) is structured, stable and independent of any system. Direct
manipulation lowers the dependence on the syntactic kind, so what the learner keeps is the
concept [@shneiderman1983direct].

It is an observational and theoretical paper, not an experiment, and it carries its own warnings.
Graphic representations can need more learning than words, can mislead users about which
operations are permitted, can take too much space (for experienced users a table of 50 document
names beats 10 icons) and do not automatically improve performance. He cites studies in which
people given detailed flowcharts did no better than people given code, and says metaphors must be
simple, unmixed and tested because users may not share the designer's picture.

::: {.rule #INT-001 grade="C"}
**Build every interactive diagram as a small world the learner acts on: the object is always
visible, the action is physical, and each change is small, immediate and reversible.** These are
Shneiderman's four principles, offered as observation and argument, not tested as a set
[@shneiderman1983direct]. The test for a widget is whether a learner can make a small change, see
its effect at once on the thing they changed, and take it back. A widget that needs a typed value,
a submit button and a separate result panel fails all three parts.

*In LTF:* the widgets in `src/features/widgets/` already lean this way: `WindTriangle` uses the
`useDrag` hook so the vector itself is dragged, and `RangeField` sliders update the drawing on
every change. Hold every new widget to the same standard before it reaches a lesson, and treat
the ghost "Reset" button in `WidgetFrame` as the required way back to the starting state.
:::

::: {.rule #INT-002 grade="C"}
**Use a picture only where it beats words for the person and task at hand; keep lists, tables and
labels where the learner must compare or look things up.** Shneiderman's own caveats say graphic
representations can cost more learning, mislead about what is allowed and waste space, and his
example of 50 names in a table beating 10 icons is the case to remember [@shneiderman1983direct].
Direct manipulation is a fit for continuous quantities and spatial relations, not a style to
apply everywhere.

*In LTF:* the V-speeds table on `SpeedsPage` and the module rows in `CurriculumMap` are correctly
tables and lists. Do not turn them into icon grids or draggable cards to look interactive.
:::

### Hutchins, Hollan and Norman: why it feels direct

Two years later Hutchins, Hollan and Norman argued that a list of surface features cannot explain
directness, and that interfaces with all of Shneiderman's features can still feel clumsy when they
force actions at too low a level [@hutchins1985direct]. They described directness as an impression,
an "orienting notion" produced by the relation between a person's task and the way the interface
lets it be done, and assumed it comes from committing fewer cognitive resources. Part of it, they
said, is the user's own adaptation, which designers can neither fully control nor take credit for.

They split directness into distance and engagement. Distance has two forms. Semantic distance is
the gap between what the person wants to say and what the interface language can express: can it
be said at all, and can it be said concisely? Articulatory distance is the gap between the meaning
of an expression and its physical form: key presses, mouse movements, the shape of the output.
Each form appears twice, once in the gulf of execution (from goals to the system's state) and once
in the gulf of evaluation (from the system's state back to goals). The gulf of execution is bridged
by making commands match the person's thoughts and goals; the gulf of evaluation by making output
present a good conceptual model that is easy to perceive, interpret and evaluate.

Their examples are the practical part. A person who wants to control how fast a tank's water
level rises, shown only the current level, must watch over time and compute the rate in their
head; a display that shows the rate of change directly is semantically closer (the example comes
from the Steamer training system). Moving a mouse to move a cursor is articulatorily direct
because the action mimics the intended movement, and a moving graph is more articulatorily direct
than a table of numbers carrying the same information [@hutchins1985direct].

Engagement rests on the model-world metaphor, in which the interface is a world the user acts in,
as against the conversation metaphor, in which the interface is an intermediary talking about a
hidden world. The paper lists the conditions for direct engagement: semantic and articulatory
directness in both execution and evaluation; inter-referential input and output, meaning an output
expression can be used as part of an input expression (a term credited to Draper); responsiveness
with no inappropriate delays; and an interface that does not draw attention to itself, since a
noticed interface puts the user in a third-person relation to the task.

The paper also lists what direct manipulation does badly. Repetitive operations are better
scripted. Direct interfaces struggle with variables and with the difference between one element
and a class of elements. They make accuracy demands on the user. And an interface that only mirrors
what people can already do misses new ways of thinking. It is a theory paper with no experiment,
and it says itself that it offers no way to measure the trade-offs.

::: {.rule #INT-003 grade="C"}
**Show the quantity the learner is trying to judge, not only the raw value it is computed from.**
Semantic distance in evaluation shrinks when the display shows what the person cares about: the
rate of change, not a level they must track over time [@hutchins1985direct]. The argument is
theoretical, with the Steamer example as illustration.

*In LTF:* in `PitchPower` and the `g1000-pfd` widget, the learner is usually asking "am I climbing
or descending, and how fast", so give the trend (a vertical-speed readout or trend mark) equal
prominence with the altitude itself. Any widget that teaches a relation between two quantities
should show both moving together.
:::

::: {.rule #INT-004 grade="C"}
**Put the control on the thing it changes: let the learner drag the needle, the vector or the
marker itself, and when a separate control is unavoidable, place it beside the output it moves.**
Inter-referential input and output, and articulatory directness, are two of the paper's
conditions for engagement [@hutchins1985direct]. A slider far below a dial is a small
conversation; dragging the dial's pointer is acting in the world.

*In LTF:* `WindTriangle` is the model. For dial widgets such as `AirspeedIndicator`, where a
`RangeField` drives the drawing, keep the slider immediately under the dial at the same width, so
the eye does not travel between cause and effect, and keep the keyboard path that `useDrag`'s
comment promises.
:::

::: {.rule #INT-005 grade="C"}
**Do not let a smooth widget stand in for the concept: pair every interactive diagram with the
words that say what to notice.** Hutchins, Hollan and Norman warn that an interface that disappears
still leaves the difficulty of the task domain with the user, and that direct manipulation is weak
with abstractions such as variables and classes [@hutchins1985direct]. A learner can drag a
pointer for a minute and come away with nothing.

*In LTF:* a widget block in `LessonRenderer` should sit between a sentence that says what to try
and a sentence that says what the learner should have seen. The "Describe this diagram" `details`
in `WidgetFrame` serves accessibility; it does not replace that teaching sentence in the lesson.
:::

### Layers, and the score

Shneiderman's fourth principle, layered learning, is a structure for the whole product as much as
for a widget: a first level with a few controls that already do something useful, then expansion
[@shneiderman1983direct]. His discussion of games adds a detail that matters for a training
product. Games keep a continuous score so players measure progress against themselves, and he
judged machine-generated verdicts such as "Very good" less effective, because the same score means
different things to different people. That is an expert observation, not a test, but it agrees
with the system approach to error described later in this Part, which prefers information to
judgment.

::: {.rule #INT-006 grade="C"}
**Report the learner's own measured result in neutral terms, and leave the verdict to the
learner or to an explicit rubric.** Shneiderman observed that a continuous score lets people
measure themselves, and that canned praise carries less information because a number means
different things to different people [@shneiderman1983direct]. This is observation, not
experiment.

*In LTF:* the `ResultView` percentage and the criterion-by-criterion rows are the right form. The
toast "Lesson complete. Nice work!" in `LessonPage.tsx` and the quiz's "Correct!" add a verdict
with no information; prefer "Lesson complete" and let the explanation carry the substance.
:::

::: {.rule #INT-007 grade="C"}
**Give every widget a first state with one or two controls that already teach something, and
reveal further controls only after that first relation is clear.** This is the layered or spiral
principle [@shneiderman1983direct]; the training-wheels evidence in the chapter on goals and
excise gives it experimental support for whole systems.

*In LTF:* the `g1000-pfd` widget (818 lines, with soft keys and several display regions) is the
one most at risk of opening with everything live. Start it with the region the lesson is about
active and the rest visibly inert, and let lesson directive props (the `props` record in
`WidgetProps`) choose which layer a given lesson opens.
:::

### What this means for Learn to Fly

Keep the direction the widgets already take: hand-built SVG instruments in `src/features/widgets/`,
immediate redraw on every input, a "Reset" in every `WidgetFrame`, and real dragging in
`WindTriangle`. Those are direct manipulation in Shneiderman's sense (INT-001).

Change three things. First, audit each widget for where the output sits relative to its control
(INT-004): a `RangeField` or a pair of Plus and Minus buttons should sit under the instrument it
drives, not in a separate panel, and where dragging the instrument itself is feasible it is
preferable. Second, audit each widget for semantic distance in evaluation (INT-003): if the lesson
asks the learner to judge a rate or a relation, the widget must show it, not leave it to mental
arithmetic. Third, replace verdict copy with information (INT-006): "Lesson complete. Nice work!"
becomes "Lesson complete", and the quiz's "Correct!" and "Not quite." can stay only because the
explanation that follows carries the content.

Build one thing: a short widget acceptance note in the widget's file header that answers four
questions (what is the object, what is the physical action, what is the smallest reversible step,
and what does the learner judge), so reviewers can check INT-001 to INT-005 without running the
widget. Keep lists and tables where they are (INT-002).

## Affordances, Signifiers and Constraints

### Gaver's four cases

Gaver took the ecological notion of affordance, which Norman had already brought into design, and
made it precise enough to analyze technology [@gaver1991technology]. Affordances are properties of
the world that are compatible with and relevant to a person's actions. When they are perceptible
they link perception and action directly; when they are hidden or false they produce mistakes. The
central move in the paper is to separate the affordance from the perceptual information about it.
An affordance exists whether or not it is perceived (a pit affords falling even when brush hides
it). Crossing "affordance present or not" with "information present or not" gives four cases:
perceptible affordance (both present), hidden affordance (the action is possible but nothing shows
it), false affordance (something shows an action that is not possible) and correct rejection
(neither). His door example: a thin vertical handle affords pulling and a flat plate affords
pushing, and a vertical handle on a door that must be pushed is false information. When the
apparent affordance matches the intended use, the artifact is easy; when it does not, errors are
common and signs become necessary.

Three further points from the paper are useful in review. Affordances are relational: a handle
affords grasping to a hand of a certain size, a cat door affords passage to a cat. Perceptible
affordances are inter-referential, in that what is perceived is what is acted on, with no
intermediate representation (a door handle needs none; a key turning in a lock does). And
on-screen raised buttons relate to their meaning through a causal depth cue (shading), not an
arbitrary symbol, which is why users of MacLean's tailorable buttons saw "pressable" but not
"movable or editable".

Gaver then adds two extensions. Sequential affordances unfold in time: acting on one reveals the
next (grasping a pivoting handle reveals that it turns, turning reveals that it pulls). Nested
affordances are grouped in space (the handle's pulling is nested within the door's). His screen
example is the Macintosh scroll box, a sequence of grab then drag in which the shaft allows only
vertical movement, contrasted with a Smalltalk-80 scrollbar that cannot be grabbed and so lacks
inter-referentiality. Affordances, he argues, are explored, not passively seen, and tactile and
auditory information can reveal them too (the sound of a latch). The paper is conceptual, with
interface examples, not an experiment [@gaver1991technology].

::: {.rule #INT-008 grade="C"}
**Give every action a visible cue on the element that performs it; an action with no cue is
treated as missing.** A hidden affordance (an action possible with no information for it) is one
of Gaver's error-producing cases [@gaver1991technology], and Tognazzini's discoverability principle
puts the same point bluntly: if the user cannot find it, it does not exist, and controls needed
for success should be visibly accessible at all times [@tognazzini2014first]. Both are expert
analysis, not experiment.

*In LTF:* draggable parts of a widget need a visible handle (a grip mark, a cursor change and a
focus ring), not only `cursor-pointer`. The keyboard shortcuts in `ChecklistRunner` ("Space ticks
an item, Backspace unticks the last one") are correctly printed under the title; keep any similar
shortcut printed where it applies.
:::

::: {.rule #INT-009 grade="C"}
**Do not give a non-interactive element the look of a control: no hover change, pointer cursor,
raised shadow, pill shape or chevron on anything that does nothing.** A false affordance (information
for an action that is not available) is Gaver's other error case [@gaver1991technology]. On a page
built mostly from bordered rounded rectangles, the cue that separates a clickable card from a
static one has to be deliberate.

*In LTF:* challenge cards on `ChallengesPage` correctly change border on hover because they are
links. Static cards (the landing sample challenge `Card`, the "What you need" cards, dashboard stat
tiles) must not gain hover styles. The landing setup chips (`rounded-sm bg-surface-sunken`) and the
reference hub's "Most looked up" chips are close in shape; the interactive ones need a border,
underline or icon the static ones lack.
:::

::: {.rule #INT-010 grade="C"}
**When one action leads to another, let the first reveal the second: grabbing a control should show
its range, its stops and where it will snap.** Gaver's sequential affordances describe interfaces
where each perceived action exposes the next one [@gaver1991technology]. A slider that shows its
end marks and detents only once grabbed, or a draggable pointer that shows its permitted arc while
held, teaches its own use.

*In LTF:* where a widget limits a value (a bank angle, a flap setting), draw the permitted range
and any meaningful stops on the instrument while the control is held, using the fixed instrument
tokens, and show the current numeric value in the `RangeField` display slot. The numbers themselves
come from content tokens, never from the widget code.
:::

### Norman: from affordances to signifiers

Norman introduced "affordance" to design in 1988, meaning perceivable affordances. By 2008 he wrote
that the term had been widely used and misused, and moved to "signifier": "I call any physically
perceivable cue a signifier, whether it is incidental or deliberate" [@norman2013design]. A
signifier can be accidental (an empty platform tells you the train has gone) or deliberate (a
scrollbar showing how much of a document remains). In his 1999 essay he separated real from
perceived affordances and pointed out that on a screen the designer controls only the perceived
ones; he described physical, logical and cultural constraints and called scrollbar behavior a
cultural convention, not an affordance. The same essay gives four principles for new users:
follow conventions; use words or labels with graphics; treat metaphors with suspicion (he thought
them more harmful than helpful, though they can train users); and build a coherent conceptual
model. The 2013 edition of his book keeps the science of 1988 and adds signifiers; its fourth
chapter covers four kinds of constraint (physical, cultural, semantic and logical), constraints
that force the desired behavior, conventions, and sound as a signifier [@norman2013design].

The affordance concept has been criticized heavily, including by Norman himself. McGrenere and Ho
are reported to have found ambiguity in his original usage (the paper was not read for this Part),
and Gaver's taxonomy is the clearer of the two accounts [@gaver1991technology]. A 2016 exchange,
known only through a search summary, has Norman rejecting the reading that he recanted: adding
signifiers does not mean affordances do not exist, only that signifiers matter more in many
situations. The practical upshot is a vocabulary: in review, ask whether a control has a signifier,
not whether it "affords" something.

::: {.rule #INT-011 grade="C"}
**Label icons with words wherever space allows, and never rely on an icon alone for an action a
beginner must find.** Words with graphics is one of Norman's four principles for new users
[@norman2013design], and Shneiderman's own caveat says graphic representations can need more
learning than words [@shneiderman1983direct]. Both are expert judgment.

*In LTF:* the codebase mostly follows this already: buttons pair lucide icons with text, tiers
print Gold, Silver and Bronze, and status badges add words to icons. Keep it so in `FlyModePage`,
where the learner glances from the sim and an unlabeled icon costs a second look, and in the
`QuizBlock` order controls, whose arrow-only buttons rely on `aria-label`; give sighted users a
visible "Move up" and "Move down" text or tooltip as well.
:::

::: {.rule #INT-012 grade="C"}
**Follow established web conventions for links, buttons, tabs and disclosure; spend novelty only
where the content needs it.** Norman's first principle for new users is to follow conventions,
and he classes scrollbar behavior as a cultural constraint rather than an affordance, which is why
breaking a convention breaks the cue [@norman2013design]. ISO 9241-110 lists conformity with user
expectations as one of its seven principles [@iso2020ergonomics].

*In LTF:* links are always underlined, tabs carry an underline, `<details>` rows in
`CurriculumMap` carry a chevron: these are conventions and should stay. The POH-style rail in
`ReferenceSections` is a deliberate novelty; below `lg` it scrolls sideways, which is a hidden
affordance unless the last visible item is cut at the edge or a fade shows more to the right.
:::

::: {.rule #INT-013 grade="C"}
**Treat skeuomorphic instrument faces as content, not as metaphor: draw an instrument the way the
real one looks because the learner must read the real one, and keep page controls conventional.**
Norman distrusts interface metaphors [@norman2013design]; Shneiderman says metaphors must be
simple, unmixed and tested [@shneiderman1983direct]. A faithful airspeed dial in a lesson is not a
metaphor for the app, it is the thing being taught.

*In LTF:* the fixed instrument tokens (`instrument`, `arc-*`, `bezel*`, `display-*`) belong only
inside widget drawings, as `product-context.md` records. Do not extend cockpit styling (bezels,
annunciator lights, toggle-switch imagery) to ordinary page controls such as `Button`, `Tabs` or
`ThemeToggle`; that would be the metaphor Norman warns against.
:::

### Look-alike controls and description errors

The evidence that matters most for a flight-training product comes from outside the screen.
Fitts and Jones collected 460 accounts of errors pilots made operating aircraft controls and
argued that much of what was filed as "pilot error" was explained by how controls were designed,
shaped, placed and sequenced [@fitts1947analysis]. The categories named in secondary summaries are
operating the wrong control (substitution), adjusting a control improperly, forgetting to operate
one, and being unable to reach one. The best-known illustration is the substitution of two
controls that look alike, sit close together and are used in sequence. The report is a
retrospective case collection, so it cannot give rates, and the 1947 text itself was not read; its
force is as a taxonomy and an argument. Norman's later classification of slips names the same
mechanism as a description error, an ambiguous or incomplete specification of the intended object,
which predicts confusion among similar-looking controls [@norman1981categorization].

Nielsen's analysis of 249 usability problems gives screen evidence of a related kind
[@nielsen1994enhancing]. Rating 101 published heuristics against the problems, he found that among
the 82 serious problems the ten best heuristics explained 95%, led by "seeing and pointing versus
remembering and typing" (22%) and "same things look the same" (18%). The analysis had one rater
and one database, mostly from his own projects, and he did not test whether the heuristics find new
problems, so this is some evidence, not a measured law.

::: {.rule #INT-014 grade="B"}
**Make controls that do different things look different in shape, position and label, and make
controls that do the same thing look the same everywhere.** Fitts and Jones traced many control
errors to look-alike, adjacent controls [@fitts1947analysis]; Norman calls the mechanism a
description error [@norman1981categorization]; and "same things look the same" was among the
largest explainers of serious problems in Nielsen's database [@nielsen1994enhancing]. Each source
has limits (case collections, a single rater), but they agree.

*In LTF:* the destructive "Reset" in `WidgetFrame` and `ChecklistRunner` is a ghost `sm` button
beside other ghost `sm` buttons ("Large text" in the runner); give it a distinct position (the far
end of the toolbar) and keep its rotate icon. In widgets that teach two easily confused cockpit
controls, draw them with different shapes and explain the difference in the same panel.
:::

::: {.rule #INT-015 grade="C"}
**Where the learner's eyes are elsewhere, back up a visual state change with a second channel: a
short sound, a haptic pulse where supported, or a change in a large stable region.** Gaver notes
that tactile and auditory information can reveal affordances [@gaver1991technology], and Norman's
book has a section on sound as a signifier [@norman2013design]. The Sellen result on mode feedback,
covered in the chapter on modes, shows sound and touch can carry state when vision is busy.

*In LTF:* `FlyPanel` already pairs its random-event alert with a two-tone beep through Web Audio and
falls back silently. Keep the sound reserved for that rare event (see the chapter on attention);
do not add sounds to routine ticks, which would teach the learner to ignore them.
:::

### Constraints that force the right path

Norman's chapter on constraints includes constraints that force the desired behavior
[@norman2013design], and the cleanest screen evidence for the idea is the training-wheels
interface. Carroll and Carrithers made typical and troublesome error states unreachable in a
commercial word processor; learners on the restricted interface learned faster, achieved more and
did better on a comprehension test than learners on the full system, and the control group spent
almost a quarter of its time recovering from the error states the restricted version blocked
[@carroll1984training]. The sample was small and the system was from the 1980s, so it supports the
principle more strongly than any one implementation. The design risk follows from the idea itself:
a blocked function frustrates people who want it unless the interface says what is unavailable
and why.

::: {.rule #INT-016 grade="B"}
**When you block an action to protect a beginner, show the blocked control as inert and say in a
few words why and when it becomes available.** Carroll and Carrithers showed that blocking error
states speeds learning [@carroll1984training]; Norman lists forcing constraints among the four
kinds [@norman2013design]. Neither source tests the cost of an unexplained block, so the
explanation is the safeguard.

*In LTF:* `LessonPath` has a `locked` state drawn as a dashed ring, and `Card` has a locked state.
Wherever locked appears, add the condition in words ("Opens after Lesson 2.3"), and do the same for
disabled buttons: the debrief's "Submit debrief" already lists the missing criteria under the
button, which is the pattern to copy.
:::

### What this means for Learn to Fly

LTF's main affordance risk is visual sameness. The product context records that bordered,
16 px-radius `bg-surface` cards with a soft shadow appear on lessons, challenge lists, airports,
checklists, dashboard tiles, quiz blocks, widget frames and resource cards, many hand-inlined
rather than built from `Card`. When almost everything is the same rectangle, the cue that one
rectangle is a link and its neighbor is not must be carried by something else (INT-009). Decide the
cue once: interactive cards are links, gain `border-line-strong` at rest through `Card interactive`,
change border on hover, and end in a chevron or arrow; static cards get none of these. Then replace
the hand-inlined copies with `Card` so the rule is enforced in one place.

Keep the conventions already in place (underlined links, labeled icons, chevrons on disclosure,
inset underlines on tabs) and do not extend cockpit styling to page controls (INT-012, INT-013).
Fix the hidden horizontal scroll in `ReferenceSections` and `Tabs` on phones with a visible cut or
fade (INT-012). Give `WidgetFrame`'s "Reset" a distinct position (INT-014). Give every locked or
disabled control a stated reason (INT-016), and give every draggable widget part a visible handle
and range while held (INT-008, INT-010).

## Feedback and Response Time

### Every action answers

Shneiderman's "Eight Golden Rules" make the plainest statement of the feedback principle: every
action should produce some response, modest for frequent minor actions and more substantial for
infrequent major ones [@shneiderman2016designing]. His fourth rule extends it to sequences: group
actions into a beginning, middle and end, and give feedback at the end of the group so the person
knows the job is done. The rules are expert rules of thumb first published in 1985, not experimental
findings, but they agree with every other principle list in this lane and with ISO 9241-110, whose
self-descriptiveness principle includes a clear indication of processing status
[@iso2020ergonomics].

The deeper reason feedback matters is in the gulf of evaluation. Hutchins, Hollan and Norman argue
that rapid feedback and a continual display of state let people use perception, rather than
inference, to judge an outcome [@hutchins1985direct]. Norman's account of slips adds that a slip
can be caught only if some monitoring mechanism notices a discrepancy between intention and act,
and that feedback is needed at each level of action for that to happen [@norman1981categorization].
A control that does not visibly change when pressed leaves the person unable to tell whether they
pressed the wrong thing, pressed nothing, or pressed the right thing and the system is slow.

::: {.rule #INT-017 grade="C"}
**Make the size of the feedback match the weight of the action: a small state change for a
frequent minor action, a clear confirmation for a rare or consequential one.** This is
Shneiderman's informative-feedback rule [@shneiderman2016designing], expert guidance rather than a
measured effect. Over-feedback is a fault too: a celebration on every checklist tick turns
information into noise.

*In LTF:* a `ChecklistRunner` or `FlyPanel` tick should change the row (check mark, fill, border)
and nothing else. Submitting a debrief is rare and consequential, so `ResultView` with its
`tier-pop` animation and large percentage is proportionate. The beta, sign-up and resume banners
are not feedback at all and should not borrow its forms.
:::

::: {.rule #INT-018 grade="C"}
**End every multi-step sequence with an explicit, visible end state that says what is now done.**
Shneiderman's closure rule asks for a beginning, middle and end with feedback at the end
[@shneiderman2016designing]; Degani and Wiener's checklist guidelines, discussed in the chapter on
attention, make the completion call the last item of a checklist [@degani1990checklists].

*In LTF:* `ChecklistRunner` announces "checklist complete" to screen readers when the last item is
ticked; give sighted users the same, a final row or a line under the list stating completion, not
only a full progress bar. The Fly tab's "Steps" list in `FlyPanel` has no end state at all; add one
that appears when every step is ticked and points to "Finish and debrief".
:::

### Response time: to what?

The response-time limits quoted in design guidance trace to Nielsen's summary, which states three
values he says are fixed by human perception [@nielsen1993response]. At about 0.1 second users feel
the system reacts instantaneously, the limit for the feeling of directly manipulating objects, and
nothing beyond the result needs showing. At about 1 second users notice a delay but keep their
train of thought, although they lose the feeling of working directly on the data; the 2014 update
adds that delays over one second should show the computer is working. At about 10 seconds
attention leaves the dialogue; longer waits need an indication of when the work will finish, a
percent-done indicator and a clearly marked way to interrupt, and are acceptable mainly at natural
breaks in the task.

The article cites Miller (1968) and Card and colleagues (1991), but it is an expert summary, not a
study, and the values could not be traced to explicit statements in Miller's paper
[@miller1968response]. What Miller did contribute, from his abstract, is the question that makes the
limits usable: "Response time to what?" Different human purposes and actions have different
acceptable response times, and his paper classified transactions by kind rather than naming one
limit. Shneiderman's 1984 review found much more variation than three fixed values suggest,
shaped by prior experience, large differences among individuals and tasks, and adaptation (users
"pick up the pace" of the system) [@shneiderman1984response]. He noted that people expect about a
tenth of a second for actions like turning a car's wheel or pressing a typewriter key, and that the
frequently mentioned two-second limit suits many other tasks. He also found little evidence that
very short response times reduce errors, and reported that error rates rise with response times
that are too short as well as too long. Treat 0.1, 1 and 10 seconds as an engineering convention
with an expert's authority, and measure LTF's own times.

Tognazzini sets a tighter target in his principles: acknowledge every click with visual or aural
feedback within 50 milliseconds [@tognazzini2014first]. The figure is his assertion, unsourced on
the page, but it points the same way: the acknowledgment of a control action must be local and
immediate even when the work it starts takes longer.

::: {.rule #INT-019 grade="C"}
**Change the pressed control's own state within about a tenth of a second of every tap, click or
key press, locally, before any server reply.** The 0.1 second limit for the feeling of direct
manipulation is a convention [@nielsen1993response], Tognazzini's 50 ms an expert target
[@tognazzini2014first]; neither is a measured threshold, but the direction is not in dispute.
Update the interface optimistically and reconcile when the server answers.

*In LTF:* `FlyPanel` ticks and debrief radio choices already update state and `sessionStorage`
synchronously, and `Button` shows `active:shadow-press` on press. Keep any future server-backed
tick (signed-in checklist progress) optimistic in the TanStack Query hook, with rollback and a
persistent error if the save fails.
:::

::: {.rule #INT-020 grade="C"}
**Give each kind of event its own time budget: control actions respond at once, conversational
steps (open a lesson, check an answer against the server, submit) acknowledge within about a second,
and anything that can run longer shows progress and a way out.** Miller's "response time to what?"
is the principle [@miller1968response]; Nielsen's three limits give the budgets as convention
[@nielsen1993response].

*In LTF:* lesson loads use `PageSkeleton` and widget chunks use `Skeleton h-72`; both meet the
second band. "Mark lesson complete" uses `Button loading` while the server responds, which fits a
conversational step. Write the budgets into the e2e suite as assertions on the time to first visible
change, so they are measured rather than assumed.
:::

### Progress indicators

Myers ran the classic experiment on progress feedback [@myers1985importance]. Forty-eight
volunteers, mostly computer-science graduate students and about one fifth novices, used two versions
of a forms-based query system, with each query followed by either a constant 10-second delay or a
random one from 1 to 17 seconds, with or without a percent-done indicator. The preference for
progress indicators was highly significant, and 86.1% of participants liked them. A previously
published preference for constant over variable response time did not replicate. Myers argued that
an indicator tells the person that the request was heard, accepted, interpreted and is being worked
on; that it matters most to novices, who may think a silent system has crashed; and that it helps
people plan, since an idle wait of unknown length is the one they cannot use. The measure was
attitude, not performance, and the sample was small and computer-literate.

Harrison and colleagues then showed that the behavior of a bar changes how long a wait feels
[@harrison2007rethinking]. With nine progress functions all lasting 5.5 seconds, shown in pairs to
22 participants, bars with pauses near the end (late pause, slow wavy, fast wavy) were perceived as
slower than linear, and accelerating bars (power, fast power) as faster; early pauses were about as
acceptable as linear progress. The authors read this as peak and end effects. Their suggestions:
leave bars for stable processes alone, put slow or variable stages first, and avoid stalls near the
end. The study was small, the bars short, and the ethics are plain: a bar that accelerates while
the work is stalled would be deception, not design.

::: {.rule #INT-021 grade="B"}
**Show a determinate progress indicator for any wait that can pass several seconds when the
fraction done is known, an indeterminate one when it is not, and never a percentage the system does
not have.** Myers found a strong preference for percent-done indicators [@myers1985importance], and
Nielsen's convention asks for one beyond about 10 seconds [@nielsen1993response]. For waits under a
second or two, an indicator draws attention to a delay that would otherwise pass unnoticed.

*In LTF:* the `ProgressBar` component is for learning progress; do not reuse it for loading.
If LTF ever adds an export or a long sync, use a determinate bar tied to real work; for lesson and
widget loads keep the skeletons, which are the right size of signal for short waits.
:::

::: {.rule #INT-022 grade="B"}
**Map any progress bar to real work, put slow or variable stages first, and never hold a bar near
its end.** Harrison and colleagues found that late pauses make waits feel longer and that early
pauses are tolerated [@harrison2007rethinking]. Shaping a bar to misrepresent stalled work is a
dark pattern; the Part on decisions and dark patterns covers the line.

*In LTF:* the `ProgressBar` used for module progress on `ModulePage` and the dashboard measures
learning, which has no end-stall problem, but the same honesty applies: a bar must reach full only
when the module is actually complete, never as a reward for visiting pages.
:::

### Feedback that survives a glance away

The classic advice assumes the person is looking at the screen. LTF's learner often is not.
Wroblewski's form study gives the one relevant finding: success messages that faded were easily
missed and made some people worry that valid fields had become invalid, and persistent messages
outside the field worked best [@wroblewski2009inline]. It was one study of one form with 22 people,
so the percentages are not general effects, but the mechanism (a transient signal is lost if
attention is elsewhere when it appears) is the same one Sellen and colleagues measured for modes,
where transient versus sustained is one of the feedback dimensions they list
[@sellen1992prevention]. Cooper and colleagues name the pattern the book's error chapter favors:
rich modeless feedback, status kept visible without interrupting [@cooper2014about].

::: {.rule #INT-023 grade="B"}
**Show the result of an action in a persistent, modeless form in the place where the action was
taken; use a transient toast only as a duplicate, never as the only record.** Fading messages are
missed [@wroblewski2009inline], sustained feedback is one of the dimensions that separates effective
mode feedback [@sellen1992prevention], and modeless feedback avoids interrupting the task
[@cooper2014about].

*In LTF:* `MarkComplete` does this well: after saving it is replaced by a persistent "Lesson
complete" status line, and the toast is a duplicate. `PreferencesSection` and `ProfileSection` rely
on a 6-second success toast alone; add an inline "Saved" state by the form's button. In `FlyPanel`,
which a learner reads in glances, nothing should depend on a toast.
:::

::: {.rule #INT-024 grade="C"}
**Keep errors visible until the learner deals with them, and put them next to the thing that
failed.** Toasts that report errors in LTF already persist, which matches Nielsen's advice that
status must be visible [@nielsen1993response] and Tognazzini's that status be visible, up to date
and accurate [@tognazzini2014first]. A failure that vanishes on a timer is one the learner may never
see.

*In LTF:* the `Toast` component correctly keeps errors until dismissed with `role="alert"`. For
"Could not save your progress. Please try again." on `LessonPage`, also restore the "Mark lesson
complete" button to its unsaved state with a short inline note, so the failure is visible where the
learner will look next.
:::

### What this means for Learn to Fly

LTF's feedback machinery is sound in its parts. Local ticks are instant, buttons have a pressed
state and a `loading` state, errors persist, quiz results arrive in an `aria-live="polite"` region,
and the debrief shows a live score preview in a `role="status"` box. The gaps are of three kinds.

First, sequences without an end (INT-018): the Fly tab's "Steps" list has no completion state, and
the checklist runner's completion is spoken but not shown. Second, transient-only success
(INT-023): account forms confirm only through a toast, and a learner beside the sim can miss a
6-second message. Third, unmeasured budgets (INT-019, INT-020): the response-time bands are a
convention, so the product should record its own times for tick, answer check, lesson load and
debrief submit, and put the targets in tests.

Two small copy decisions follow from proportion (INT-017): routine success is stated, not
celebrated, and the large `ResultView` treatment is kept for the one rare, consequential event it
marks.

## Modes and Mode Error

### What a mode is

Norman's collection of about a thousand slips put mode errors in the family of errors in forming
an intention: the person misclassifies the situation and then does what fits the assumed state but
not the true one [@norman1981categorization]. His examples included text editors with separate text
and command modes (in one experimental editor, typing the word "edit" while in command mode
destroyed the manuscript and then the ability to undo), devices whose buttons depend on mode
("aircraft automatic pilots, digital wristwatches"), and a person bellowing "Come in" into a
ringing telephone. The method was naturalistic, collected reports rather than experiments, so the
categories are useful and the frequencies are not estimates of anything.

Raskin gave the condition a precise form [@raskin2000humane]. An interface is modal with respect
to a given gesture when the current state of the interface is not the person's locus of attention
and the interface will produce one of several different responses to that gesture. Modes, he wrote,
are "a significant source of errors, confusion, unnecessary restrictions, and complexity". The
definition is useful because it is testable: list the gestures on a screen, and for each ask
whether its result depends on a state the person is not looking at. Raskin's remedy was the
quasimode, a mode kept alive only by a continuous action (the shift key), which a person cannot
forget being in because they are holding it. He also argued for monotony, one gesture for one
effect, so that habits form on a single path. His book is expert argument drawing on cognitive
psychology; it was not read in full for this Part, and claims here come from its summaries and
reviews.

Tesler's position, quoted by Sellen and colleagues, was that modes should be eliminated. Their
reply is that almost every interface contains modes (dialog boxes, cursor shapes, selection
states), so "modeless" systems are not modeless, and the job is to make modes salient and easy to
enter and leave [@sellen1992prevention].

::: {.rule #INT-025 grade="C"}
**List every mode on a screen (every state in which the same gesture produces a different result)
and remove any that the learner's task does not need.** Raskin's definition makes modes countable
[@raskin2000humane], and Sarter and Woods found that mode proliferation without support for
tracking it produces predictable new error forms in automated cockpits [@sarter1995world]. Fewer
modes beat better labels on many modes.

*In LTF:* "Mark lesson complete" in `MarkComplete` is a mode by this definition: the same press
saves progress for a signed-in learner and opens a "Save your progress" `Dialog` for a visitor, and
sign-in state is not on the learner's mind at that moment. Either label the visitor's button for
what it does ("Sign up to mark complete") or show the visitor a different control.
:::

### The evidence: hold the mode

Sellen, Kurtenbach and Buxton ran the best controlled test in this lane [@sellen1992prevention].
Twelve experienced vi users and twelve novices inserted a string after each of the 75 capitalized
words in a passage of about 190 words, while also servicing a distractor task on a second computer
that forced them to switch attention away and back. The design crossed the mode-switch method (the
i and escape keys, versus holding a foot pedal for insert mode) with visual feedback (none, versus
the whole screen turning dark pink in insert mode).

The held pedal produced significantly fewer mode errors under both liberal and conservative
scoring. Visual feedback also helped, but less: the switch method accounted for 15.6% of variance
(liberal) and 11.0% (conservative), the color for 4.8% and 4.1%. The pedal also shortened resume
time, the interval between finishing the distractor and the first editing action, which the authors
used as a measure of confusion about mode; the pink screen had no effect on it. Visual feedback
helped experts using the keyboard but was redundant with the pedal. Eight of the eleven novices
whose rankings could be classified preferred the pedal; experts split five and five. A second
experiment found that a pedal that had to be held signaled mode more saliently than one that
latched. The paper lists feedback dimensions (modality, reactive versus proactive, transient versus
sustained, demanding versus avoidable, user-maintained versus system-maintained) and cites Monk, who
cut mode errors by a third with a mode-contingent sound on every keystroke.

The limits are explicit. Twelve people per group, one narrow task and an unusual input device mean
the percentages should not be transferred to touch screens. The authors name rival explanations:
feedback through the limb that makes the switch, relief from competition for visual attention, and
spreading tasks across limbs. The ordering is what carries over: a state the user maintains beats
one the system maintains, and a color change is the weakest remedy tested.

::: {.rule #INT-026 grade="B"}
**Where an action changes meaning by mode and a wrong guess is costly, make the mode last only while
the learner holds it (press and hold, a held key), rather than a toggle that latches.** Sellen and
colleagues found user-maintained modes prevented mode errors better than system-maintained ones,
and held better than latched [@sellen1992prevention]; Raskin's quasimode is the design form
[@raskin2000humane]. The experiment was small and used a foot pedal, so the principle transfers and
the numbers do not.

*In LTF:* candidates are "press and hold to reveal the answer" in a widget's quiz mode and any
future "hold to record" control. Do not apply it to routine toggles such as "Large text" in
`ChecklistRunner`, where no gesture changes meaning.
:::

::: {.rule #INT-027 grade="B"}
**Never mark a mode by color alone; give every persistent mode a word, a fixed position and a shape
change as well.** The full-screen color change was the weakest remedy Sellen and colleagues tested
and had no effect on resume time [@sellen1992prevention]. Tognazzini asks for secondary cues
whenever color carries information [@tognazzini2014first].

*In LTF:* the `WidgetFrame` switch marks "Explore" or "Quiz me" by which pill is ink-filled, with
`aria-pressed` for assistive technology. Add a sustained cue inside the canvas in quiz mode (a
labeled header strip such as "Quiz: set the needle, then check"), so a learner who returns from the
sim sees the mode where they are about to act, not only in the toolbar.
:::

### Mode awareness when the system changes state

Sarter and Woods studied pilots working with the automation of glass-cockpit airliners and argued
that flexible automation has a price: the supervisor must know more about the system and must
track which mode the automation is in and what it is doing [@sarter1995world]. When designers
"proliferate modes without supporting these new cognitive demands", new mode-related errors follow.
Their expanded view of mode error includes failures of mode awareness (not knowing what mode is
active and what it will do), not only the slip of acting in the wrong one, and they tie it to
automation surprises, in which the system does something the person did not expect, mostly in
non-normal, time-critical situations. The studies are observational and simulator work with
professional pilots; the full text was not read, and no sample sizes are reported here. The
mechanism, mode proliferation plus weak feedback, is what transfers.

::: {.rule #INT-028 grade="C"}
**Show the current mode in words, always in the same place, so that a learner who looks away and
back can read it in one glance.** Sarter and Woods trace mode errors to weak support for tracking
mode [@sarter1995world]; Raskin's definition locates the risk in state that is not the locus of
attention [@raskin2000humane]. The remedy is to make the state part of what the learner already
looks at.

*In LTF:* `FlyModePage` shows the challenge code, title and goal; it does not say whether the timer
is running or whether random events are armed. Put a one-line status ("Timer running · events may
fire" or "Timer stopped") at a fixed position above "Steps", in words.
:::

::: {.rule #INT-029 grade="C"}
**Do not change a page's mode as a side effect of a timer, route change or unrelated control; when
a mode must change, say on screen what changed and why.** Automation surprises arise when the system
changes state without the person expecting it [@sarter1995world]. Tognazzini's principles ask that
status be visible, up to date and accurate [@tognazzini2014first].

*In LTF:* in `FlyPanel`, starting the optional "Timer" also schedules the challenge's random events.
The helper text says so only when events exist ("Start the timer when you unpause: something may
happen during this flight"), which is good; keep that sentence adjacent to the Start control, never
below the fold, and put the armed state in the mode line from INT-028.
:::

::: {.rule #INT-030 grade="B"}
**Test every mode with an interruption: have the learner switch to the sim, do something there, and
return, and measure both errors and the time to their first correct action.** Resume time was the
measure that separated the held pedal from the color screen in Sellen and colleagues' study, which
used a distractor task to force exactly this switch [@sellen1992prevention]. A mode that looks
clear on an uninterrupted walkthrough can still fail here.

*In LTF:* add this to the usability script for `FlyModePage`, the `WidgetFrame` quiz mode and the
`ChallengePage` tabs. The second screen is the normal case for LTF, so the interrupted test is the
representative one.
:::

### Modes in the product and in the sim

LTF learners work beside a simulator that has its own modes: pause states, autopilot modes,
camera views. Norman's list of mode-dependent devices includes aircraft automatic pilots
[@norman1981categorization], and Sarter and Woods's work is about exactly that class of system
[@sarter1995world]. The product's own modes compound the sim's. A learner thinking about whether
the sim is paused is not thinking about whether a widget is in quiz mode.

Saffer's framework treats modes as one of the "meta-rules" of a microinteraction, and his table of
contents names "spring-loaded" and "one-off" modes, which appear to correspond to Raskin's
quasimodes; his own definitions were not confirmed [@saffer2013microinteractions]. The safest
reading for LTF is Raskin's: a mode should be either held (and so impossible to forget) or
announced (and so impossible to miss).

::: {.rule #INT-031 grade="C"}
**Separate practice from anything scored or recorded by a different screen or a clearly different
frame, not by a toggle inside the same frame.** The Raskin-derived implication in the lane notes is
that a widget that is "explore" in a lesson and "scored" in a challenge should be visibly distinct
and entered by a clearly different path [@raskin2000humane]. Fewer modes is the first defense
[@sarter1995world].

*In LTF:* the challenge flow already does this: Brief, Fly and Debrief are separate tabs, and the
scored debrief is a form with its own heading "How did it go?". Keep `WidgetFrame`'s quiz mode
unscored (it emits `onQuizAnswer` events, which should never feed a tier or a grade); if widget
answers ever count, move them to a separate frame.
:::

::: {.rule #INT-032 grade="C"}
**When a lesson involves a sim function that has modes, make "which mode is it in now" an explicit
thing to observe and to check, using the sim's own names for the modes.** Mode awareness, not only
mode selection, is where supervisory errors arise [@sarter1995world], and Norman counted autopilots
among mode-dependent devices [@norman1981categorization]. This is a human-factors observation; the
mode names, indications and procedures must come from the aircraft and sim documentation, not from
these papers.

*In LTF:* when lesson content covers the sim's autopilot, its `QuizBlock` items can ask "what mode
is active" before "what do you do", and a `Callout type="sim"` can say where the mode is shown. Any
mode name or indication goes through the content verification process and carries a `verify`
callout until checked.
:::

### What this means for Learn to Fly

Run an inventory of modes on each interactive page (INT-025). The current list from the code is
short: the widget Explore and Quiz me switch, the checklist runner's read-do and do-verify modes and
its "Large text" toggle, the Fly tab's timer that arms random events, the visitor and signed-in
behaviors of "Mark lesson complete", and the Day, System and Night theme. Of these, the theme and
"Large text" are harmless, because no gesture changes meaning. The checklist mode is already handled
well: a `Badge` names it and a sentence explains it ("Read-do: read each item, then do it.").

The others need work. The visitor branch of "Mark lesson complete" changes what a press does
without saying so (INT-025). The widget quiz mode is marked by an ink pill only (INT-027). The armed
state of random events is invisible once the timer runs (INT-028, INT-029). For each, the fix is a
word at a fixed place, and the test is the interrupted walkthrough (INT-030). Keep practice and
scoring in different frames as the challenge tabs already do (INT-031).

## Slips, Mistakes and Designing for Error

### Two kinds of error, several levels

Norman defined a slip as an action that is not what the person intended, and from about a thousand
collected incidents (his own, Reason's diary collections, a book on pilot error, accident reports,
and Fitts and Jones's collections of pilot errors with controls and instruments) he built a
classification tied to a theory of action [@norman1981categorization]. An action sequence is
represented by a parent schema and child schemas, each with triggering conditions and an activation
level. Slips fall where that machinery fails: in forming the intention (mode errors, and
description errors, where the intended object is specified ambiguously), in activating schemas
(capture errors, where a familiar, well-practiced sequence takes over a similar one being performed;
data-driven and associative activation; loss of activation, where the person forgets what they set
out to do; misordering), and in triggering (spoonerisms, blends, intrusions, premature actions).
Errors in goals, decisions and problem solving are explicitly not slips. Norman also argued that a
slip can be detected only if a monitoring process notices a mismatch between intention and act,
which is why feedback at each level matters. The data are collected reports, so the paper gives no
prevalence; the schema account is a proposal, and later theories use other mechanisms while keeping
the categories.

Reason integrated this with other literatures in *Human Error* [@reason1990human]. The details
confirmed for this Part come from secondary summaries and from his 2000 paper, which restates the
framework: errors are classified by cognitive level (skill-based, rule-based, knowledge-based) and
by type, separating slips (attentional failures of execution) and lapses (memory failures) from
mistakes (failures of planning) [@reason2000human]. Norman's 2013 book keeps the same split in a
chapter titled "Human Error? No, Bad Design" and covers detecting error and designing for it
[@norman2013design].

The distinction matters for design because the remedies differ. A slip (the right intention,
executed wrongly) is reduced by making actions distinct, giving feedback and making correction
cheap. A mistake (the wrong intention, carried out correctly) is reduced by a better explanation, a
better conceptual model or a better picture of the situation; no amount of button styling fixes it.

::: {.rule #INT-033 grade="C"}
**Write feedback that distinguishes a slip from a mistake, and give each its own remedy: a slip gets
an easy correction, a mistake gets an explanation.** The slip and mistake distinction is the
backbone of Norman's and Reason's classifications [@norman1981categorization; @reason1990human;
@norman2013design]. It is a theoretical taxonomy built from collected errors, not a tested
intervention, so the copy patterns should be tested with learners.

*In LTF:* in `QuizBlock`, a numeric answer far outside any plausible range (a value off by a factor
of ten, or one that matches a different unit) is probably a slip; one close to a common
misconception is probably a mistake. The `explanation` field serves the mistake. The slip case
deserves a different response ("Check the unit: this question asks in knots"), which needs an
optional `slipHint` in the quiz schema rather than more text in the explanation.
:::

::: {.rule #INT-034 grade="B"}
**When a lesson changes one step in a sequence the learner has already practiced, mark the changed
step where it appears, every time it appears, until the learner has used the new version.** Capture
errors occur when a familiar sequence takes over a similar one [@norman1981categorization]; a
learner who has run a checklist several times will run the old version. Norman's evidence is a
collection of naturally occurring slips, which gives the mechanism but no rate.

*In LTF:* when a checklist in `features/reference/checklists.ts` or a challenge procedure is
revised, `ChecklistRunner` and `FlyPanel` can show a small "Changed" `Badge` on the revised item for
learners whose stored ticks predate the content's `lastVerifiedAt`. The step text itself stays
token-based content and is verified as content.
:::

### The system approach

Reason's 2000 paper contrasts two stances [@reason2000human]. The person approach locates the cause
of mishaps in individuals (forgetfulness, inattention, carelessness) and responds with posters,
retraining and blame. The system approach starts from human fallibility: errors are "consequences
rather than causes", and after an event the question is "not who blundered, but how and why the
defences failed". His slogan: "We cannot change the human condition, but we can change the
conditions under which humans work." The person approach overlooks that "it is often the best
people who make the worst mistakes" and that mishaps fall into recurrent patterns; he cites a
finding that about 90 percent of quality lapses in aviation maintenance were judged blameless.

He separates active failures (unsafe acts by people in direct contact with the system, including
slips, lapses, fumbles, mistakes and violations) from latent conditions, "resident pathogens"
introduced by designers, builders, procedure writers and managers. Latent conditions create
error-provoking conditions locally and long-lasting holes in defenses (untrustworthy alarms,
unworkable procedures, design deficiencies), and unlike active failures they can be found and
fixed in advance. The Swiss cheese model pictures layers of defense with moving holes; an accident
needs holes in several layers to line up. The paper is an expert synthesis for clinicians, and the
model is a communication device, not a tested predictive model.

Fitts and Jones made the same argument in 1947 about control errors, putting "pilot error" in
quotation marks and arguing that design, shape, placement and sequence explained much of it
[@fitts1947analysis]. Norman's chapter title makes the claim for everyday products
[@norman2013design].

::: {.rule #INT-035 grade="C"}
**Treat a cluster of wrong answers or failed criteria as a defect in the content or the interface
until shown otherwise, and review it as one.** This is the system approach [@reason2000human] and
the founding argument of design-induced error [@fitts1947analysis]. Both are expert synthesis and
case analysis; the stance is a design policy, not a measured effect.

*In LTF:* signed-in quiz answers are recorded through `useRecordQuizAnswer`, and `quizStore`
already keeps `firstAnswer` and `correctFirstTry`. Report first-try accuracy per question and per
widget quiz, and treat any item most learners miss on the first try as a content review ticket
(ambiguous prompt, misleading diagram, missing prerequisite) before treating it as a hard question.
:::

::: {.rule #INT-036 grade="C"}
**Design learning flows as several independent layers of defense (instruction, a check before
acting, a prompt during the action, a debrief after), so no single layer must catch everything.**
Reason's model treats safety as the product of layers whose holes must not line up
[@reason2000human]. It is a metaphor, so use it to structure design, not to predict outcomes.

*In LTF:* the challenge already has the layers: the lesson, the Brief tab with "Sim setup" and
"How you'll be scored", the Fly tab's steps, and the Debrief. Make each layer able to stand alone:
the Fly tab must not assume the Brief was read (put the one item that matters most first, as the
checklist chapter argues), and the Debrief must not assume the Fly tab was used.
:::

::: {.rule #INT-037 grade="C"}
**Never use blame words (careless, wrong, failed, mistake) about the learner in interface copy;
describe what happened and what to do next.** The person approach responds with blame, which the
system approach rejects [@reason2000human]; Fitts and Jones's quotation marks around "pilot error"
make the same point [@fitts1947analysis].

*In LTF:* current copy is close: "Not quite." and "Change your answer and check again." in
`QuizBlock`, "Not met" in the rubric, "Something went wrong" in `ErrorState`. Keep "Not met" as a
rubric value, and audit future debrief and result copy against this rule. The Part on writing and
microcopy covers wording in general.
:::

### Prevention, tolerance, recovery

ISO 9241-110 names use error robustness as one of seven interaction principles, with three groups
of recommendations: avoidance, tolerance and recovery [@iso2020ergonomics]. Shneiderman's rule on
preventing errors asks for designs that make serious mistakes hard (for example by disabling
inappropriate menu items), and when errors happen, simple and specific recovery guidance with the
state left unchanged or with instructions to restore it [@shneiderman2016designing]. Nielsen's
synthesis lists error prevention, and helping users recognize, diagnose and recover from errors, as
separate heuristics [@nielsen1994enhancing]. Tognazzini adds what an error message must say: what
went wrong, what to do about it, and allowance for a deeper fault [@tognazzini2014first]. All four
are standards or expert synthesis; their agreement is partly because they draw on the same earlier
lists, so it is not independent confirmation.

The one experiment in reach concerns timing. In Wroblewski's study of a registration form with 22
participants, validating a field after the person left it was fastest; validating while typing, and
before and while typing, produced more errors and lower satisfaction because premature messages
distracted people [@wroblewski2009inline]. Only 30 to 50 percent of participants noticed validation
messages on simple fields, against 80 to 100 percent on harder ones, so inline help pays mostly
where mistakes are likely. Commenters noted that errors were counted only at submission, which
flatters inline validation, and an earlier experiment had found inline messages ignored; both are
reasons to treat the percentages as one study's, and to keep the timing finding.

::: {.rule #INT-038 grade="C"}
**Make an error message say what happened, what the learner can do now, and whether the problem
might be bigger than this page, and leave the learner's input in place.** Tognazzini's three parts
[@tognazzini2014first] and Shneiderman's "leave the state unchanged" [@shneiderman2016designing]
are expert guidance, consistent with ISO's recovery recommendations [@iso2020ergonomics].

*In LTF:* "We could not load this. Check your connection and try again." in `ErrorState` has the
first two parts; `RootErrorPage` has all three ("If it keeps happening, please try again later").
The debrief's "Not saved" callout shows `error.message` from the API; make sure every server
message used there states an action, and confirm the form keeps the draft, which `saveDebrief`
already does on every change.
:::

::: {.rule #INT-039 grade="B"}
**Validate a field when the learner leaves it, never while they are still typing, keep the message
next to the field until it is fixed, and check quiz answers only when the learner asks.** Wroblewski
found validation on leaving the field fastest and premature messages harmful
[@wroblewski2009inline]. Inline checking of a quiz answer while typing would turn recall into trial
and error.

*In LTF:* `FormField` shows errors with an octagon icon and text, and `ErrorSummary` takes focus on
submit; keep both, and validate on blur, not on change. `QuizBlock` checks only on "Check answer",
and clears the previous result when the answer changes, which is correct; keep it so for the
numeric type, which already stores a `tolerance`.
:::

::: {.rule #INT-040 grade="C"}
**Prevent a serious error by making it impossible where you can, and when you disable an action,
say beside it what is missing.** This is Shneiderman's prevention rule [@shneiderman2016designing]
and the forcing-constraint idea [@norman2013design], with the explanation that keeps a block from
becoming a mystery (see INT-016).

*In LTF:* the debrief's "Submit debrief" is disabled until required criteria are answered and lists
them ("Answer the required criteria to submit: ..."); that is the pattern. Apply it to "Check
answer" in `QuizBlock`, which is disabled with no text when no option is chosen; a short hint
("Choose an answer first") would remove the guess.
:::

### What this means for Learn to Fly

LTF's copy already avoids blame and its forms keep the learner's input. The work this chapter asks
for is structural. Build the error-data loop (INT-035): first-try accuracy per quiz item and per
widget quiz, reviewed as content defects, with the "Report a problem" link in `BetaBanner` and
`ReportProblemDialog` as the second channel for latent conditions. Add the slip path to quizzes
(INT-033): a schema field for a unit or range hint distinct from the explanation. Mark changed steps
in procedures learners have already practiced (INT-034). Keep validation on blur (INT-039), keep
the challenge's layered structure but make each layer self-sufficient (INT-036), and give every
disabled button a reason (INT-040).

Two cautions. The slip and mistake labels are for designers; do not print them at learners, who
need the remedy, not the taxonomy. And the system approach is a stance toward learners' errors in
the app, not a claim about real-world flight safety, which LTF does not teach.

## Undo, Reversibility and Protecting Work

### Undo as an intention

Abowd and Dix began with undo in a shared text editor and reached a conclusion that holds for any
software: undo should be regarded "not as a system command to be implemented, but as a user
intention to be supported by the system" [@abowd1992giving]. The design question is "What is the
undo button for?", not "What does the undo button do?". They cite a study of Microsoft Word in which
even expert users could neither predict the effect of undo nor recognize its behavior, and adopt
Young and Whittington's four questions a person must be able to answer about any undo: which stream
of activity is relevant; how that stream is divided into units; which unit an undo affects; and
what undo means exactly (after undoing a delete, is the restored text selected again?).

Their formal model treats commands as an active script, with undo moving the last command to a
pending script and redo moving it back; treating undo as an ordinary command produces
inconsistencies in all but the simplest schemes. For several users the choice is global undo (the
combined stream) or local undo (your own actions), and people normally expect local. When actions
interfere, no sensible meaning for undo exists, and the system should warn or ask rather than guess.

The broader argument separates backward recovery (restore the earlier state, which is what an undo
button does) from forward recovery (move on from the present state toward the goal). In open
systems the action may already have affected the world: the paper's examples are that operators at
Three Mile Island "would have loved to have had an undo button", and that a navigator cannot ask
the pilot to back the plane up. The properties that support recovery are visibility (seeing the
effects of one's actions) and commensurate effort (what is easy to do should be easy to undo). Their
concrete suggestions are a wastebasket of past deletions, browsable past states and version merging.
It is an analytical paper with formal methods, not an experiment; Dix's later work notes that the
perceived granularity of undo is a psychological question outside formal analysis.

::: {.rule #INT-041 grade="C"}
**For every control whose effect can be reversed, write down the unit it acts on, what reversing it
restores, and how the learner sees that it was restored, and make the interface answer those
questions on screen.** These are Young and Whittington's questions as adopted by Abowd and Dix
[@abowd1992giving]: stream, unit, affected unit and exact meaning. An undo the learner cannot
predict is not a safety net.

*In LTF:* `ChecklistRunner` has two recoveries. Backspace unticks the most recent tick (its unit is
one tick, in time order); tapping a ticked item unticks that item. Both are visible at once. The
`QuizBlock` order type moves items one place with arrow buttons, and any change clears the previous
result. These are well defined; write the same answers into the header of any new widget.
:::

::: {.rule #INT-042 grade="C"}
**Make the effort to undo no greater than the effort to do: an action that takes one tap must be
reversible in one tap, and an action that destroys several minutes of work must not be a single
tap.** Commensurate effort is one of Abowd and Dix's two properties for recovery
[@abowd1992giving]; Shneiderman's rule on easy reversal says reversibility reduces anxiety and
encourages exploration [@shneiderman2016designing].

*In LTF:* the "Reset" in `ChecklistRunner` clears every tick, with its timestamps, in one tap, and
there is no way back; in a challenge those ticks are saved with the attempt. Offer "Undo" for a few
seconds after Reset (a toast with an action, which `Toast` already supports through `action`), or
keep the cleared state recoverable until the next tick.
:::

### Undo instead of "Are you sure?"

Raskin's account of habituation explains why confirmation dialogs fail: with repetition, people act
without conscious attention, so answering "yes" to a deletion prompt becomes a habit that defeats
the prompt's purpose [@raskin2000humane]. The remedy in his book, as summarized in course notes, is
easy undo, not a dialog that changes every time. Tognazzini reaches the same place from a different
direction: make actions reversible, always allow undo, always allow a way out
[@tognazzini2014first]. He mentions an unspecified study in which people in environments without
undo made no more mistakes but worked far slower, and an NN/g e-commerce observation that easy
removal from a cart led shoppers to add more items; both are his anecdotes, unsourced on the page.
Cooper and colleagues' error chapter has sections on "Undo, Redo, and Reversible Histories" and
"What If: Compare and Preview" [@cooper2014about]; the chapter text was not read.

::: {.rule #INT-043 grade="C"}
**Use undo, not a confirmation dialog, for any action that can be reversed; keep confirmation for the
few actions that cannot, and make that confirmation require something other than a reflexive
click.** Habituation defeats routine confirmations [@raskin2000humane], and reversible actions let
people explore [@tognazzini2014first; @shneiderman2016designing]. The evidence is expert argument
and anecdote.

*In LTF:* account deletion in `DataSection` is irreversible and is guarded properly: the
`Dialog` "Delete your account?" asks the learner to type "DELETE" and enter their password, which
cannot become a reflex. Do not add "Are you sure?" dialogs to resets, unticks or sign-out; give them
undo or make them harmless.
:::

::: {.rule #INT-044 grade="C"}
**Before an action that cannot be undone, say plainly that it cannot, in the same view as the
button.** Abowd and Dix show that irreversibility is a property people must be able to predict
[@abowd1992giving]; forward recovery is the only option once the world has changed.

*In LTF:* `DataSection` states "This cannot be undone." above "Delete my account", which is right.
"Submit debrief" records an attempt on the server, and the History tab lists attempts with no delete
control in the code read; if attempts are permanent, add one line by the button ("Your attempt is
saved to your history").
:::

### Protecting work across interruptions

Tognazzini's principles include "Protect users' work" and "State": the product should save work
continuously and let a person return to exactly where they were [@tognazzini2014first]. His
introduction says effective interfaces save work continuously and allow undo. The Xerox Star case
he tells shows how a reasonable rule can destroy work: the proposed rule "dragging always moves"
lost documents dragged to a printer, so the final rule became move within a volume and copy across
volumes. He also asks that any default or reset state its scope, so people know what reverting will
touch.

For LTF, interruption is the normal condition, not the exception. The learner leaves the page to
fly, the sim needs attention, the phone sleeps. Shneiderman's original argument for direct
manipulation was that reversible actions lower anxiety [@shneiderman1983direct], and Carroll and
Rosson's active users, who start doing before they have learned, need the same safety to explore
[@carroll1987paradox].

::: {.rule #INT-045 grade="C"}
**Save every learner input as it is made, and restore it after a refresh, a sign-in detour, a closed
tab or a change of device wherever the product can.** This is Tognazzini's "Protect users' work"
[@tognazzini2014first]. The cost of a lost checklist or debrief is not a few seconds of typing but
a flight that has to be repeated.

*In LTF:* `features/challenges/storage.ts` saves Fly-tab ticks, fired events and the debrief draft
to `sessionStorage` on every change, guarded against blocked storage, and its comment states the
goal ("a refresh or a detour through log-in loses nothing"). `sessionStorage` is per tab by design
(the file says "Per-tab drafts"), so the draft does not survive closing the tab, and ticks made in
`FlyModePage` on a phone never reach the debrief submitted from the desktop, which reads
`loadFlight` from its own tab. For signed-in learners, sync flight state to the server; for
everyone, say on `FlyModePage` that ticks stay on that device.
:::

::: {.rule #INT-046 grade="C"}
**Label every reset with its scope, and show the scope in the control or right beside it.**
Tognazzini asks that any reversion communicate its scope [@tognazzini2014first]. "Reset" alone does
not say whether it means this widget, this checklist, this lesson or everything.

*In LTF:* the `WidgetFrame` "Reset" returns one widget to its initial values, and the
`ChecklistRunner` "Reset" clears one checklist; both are clear in context because they sit in that
item's toolbar. If a progress reset is ever added to `/account`, it must name its scope ("Reset
progress for Module 2") and follow INT-043.
:::

::: {.rule #INT-047 grade="C"}
**On the companion screen, prefer forward recovery that takes one action (tap again, jump to the
current step) over any history or navigation.** Abowd and Dix distinguish forward from backward
recovery and note that in open systems forward is often the only kind available
[@abowd1992giving]. A learner flying cannot browse a history.

*In LTF:* `FlyPanel` lets a ticked step be unticked by tapping it again, which is forward recovery
in one action. Add a "Jump to current step" control on `FlyModePage` for long procedures, so a
learner who scrolled away can return in one tap; the `ChecklistRunner` already marks the current
item with `aria-current="step"`.
:::

::: {.rule #INT-048 grade="C"}
**Let learners see the consequence of a choice before committing to it, as a live preview that
changes with their input.** Cooper and colleagues name "What If: Compare and Preview" as an
error-prevention pattern [@cooper2014about], and Shneiderman's direct manipulation asks for effects
that are immediately visible [@shneiderman1983direct].

*In LTF:* the debrief's "Score preview" (`role="status"`, tier badge, percentage, "points of" and the
note that unanswered criteria count as Not met) is exactly this pattern. Keep it adjacent to the
submit button so the preview is the last thing seen before committing.
:::

### What this means for Learn to Fly

LTF protects work better than most products of its size: drafts save on every change, storage
failures are caught, the debrief survives a sign-in detour, and the irreversible account deletion
is guarded by typed confirmation and a password. The weak points are the edges of that system.

Fix the tab boundary first (INT-045): `sessionStorage` scoping means the second-screen workflow the
product is built around, a phone running `FlyModePage` beside the sim, cannot pass its ticks to the
debrief. Until flight state syncs, tell the learner where their ticks live. Then add undo to the
one-tap destructive action, the checklist "Reset" (INT-042), using the `Toast` `action` slot. State
irreversibility on "Submit debrief" if attempts are permanent (INT-044). Keep the score preview by
the submit button (INT-048), keep tap-to-untick (INT-047), and resist adding confirmation dialogs
anywhere an undo would do (INT-043).

## Defaults and the Cost of Choice

### Defaults are decisions

A default is what happens when the person does nothing, and the evidence that defaults steer
behavior is the strongest in this Part. Johnson and Goldstein compared organ-donor consent across
European countries and found that effective consent separated opt-in from opt-out countries by
nearly 60 percentage points, with no overlap between the two groups [@johnson2003defaults]. In their
companion online experiment with 161 respondents, where changing the answer took one mouse click,
stated donation was about twice as high under an opt-out default as under opt-in, and the opt-out
condition did not differ significantly from a neutral one that forced a choice; the opt-in default
was the outlier. They name three routes by which a default acts: as an implied recommendation,
through the effort of changing it, and through the status quo and loss aversion. They also report
natural experiments from car insurance and a retirement plan, where raising the default
contribution from 0 to 3 percent lifted the share of new employees saving anything from 31 to 86
percent while reducing the number who chose more than 3 percent.

The caveats are part of the finding. Consent rates measure agreement, not donations, and the
regression on actual donations found a smaller effect. A meta-analysis of default effects across 58
studies (pooled n of 73,675) reports d = 0.68 with wide heterogeneity: defaults worked better when
they signaled endorsement or reflected the status quo, and less well in environmental domains
[@johnson2003defaults]. The default effect is real and large on average, but it varies, and its
strength comes partly from being read as advice.

::: {.rule #INT-049 grade="A"}
**Choose every pre-set value as if most learners will keep it, because most will.** Cross-country
data, controlled experiments and a meta-analysis agree that defaults strongly shape what people end
up with, with heterogeneity across domains [@johnson2003defaults]. A default is a decision the
product makes for the learner, and it should be made and reviewed as one.

*In LTF:* the current defaults are mostly good choices. The theme follows the operating system
("System" in `ThemeToggle`), applied before first paint. `FlyModeLayout` defaults to dark unless the
learner chose light, which suits a screen beside a sim. "Remember me for 30 days" in `LoginForm`
defaults to off, the more private option. The challenge "Timer (optional)" starts stopped. Record
each of these choices and its reason in the component's comment so that changes are deliberate.
:::

::: {.rule #INT-050 grade="C"}
**Never set a default that benefits the product at the learner's expense; when privacy, data sharing
or messages are at stake, default to the more private, quieter option.** The endorsement route means
a self-serving default reads as advice [@johnson2003defaults]; the Part on decisions and dark
patterns treats preselection as a dark pattern. This is a policy grounded in the default evidence,
not a separate finding.

*In LTF:* if reminder emails, a public profile or analytics consent are ever added under `/account`,
they start off. A helpful default (for example a suggested review reminder) is acceptable only when
it is visible, labeled as a suggestion and one action to remove.
:::

::: {.rule #INT-051 grade="C"}
**Never pre-select an answer in a quiz, a rubric or any self-assessment; start every such choice
empty, and say how a blank is treated.** A pre-selected answer is a recommendation by default
[@johnson2003defaults], which in a test is a leak and in a self-assessment is a nudge toward a
score.

*In LTF:* `QuizBlock` starts empty (or restores the learner's own last answer), and the debrief
`RadioGroup`s start with no value. The debrief counts unanswered criteria as Not met, which is itself
a default; the "Score preview" says so ("unanswered criteria count as Not met"), which is the right
treatment. Keep that sentence whenever any criterion is blank.
:::

### Intelligent defaults

Tognazzini's principle on defaults has four parts: make defaults easy to replace, use them only when
they are intelligent, avoid the word "Default" in the interface, and communicate the scope of any
reversion [@tognazzini2014first]. ISO 9241-110 lists defaults that support the task among the
recommendations under suitability for the user's tasks [@iso2020ergonomics]. Saffer's chapter on
rules covers limited options and smart defaults, and his chapter on triggers includes "Bring the
Data Forward", which the lane notes read as showing the person's relevant data where they act
[@saffer2013microinteractions]; the book was not read in full, so his own definitions are not
quoted here. Raskin argued against adaptive interfaces that change on their own, because they
prevent habituation [@raskin2000humane].

The common thread is that a good default is the learner's most likely next value in this context,
and a bad one is a fixed value chosen for the system's convenience. The best default is often the
learner's own last choice in the same task, provided the interface does not rearrange itself in
ways that break habits.

::: {.rule #INT-052 grade="C"}
**Default each field to the value the learner most likely wants in this context (often their own last
value for the same task), make it easy to replace, and never label it "Default".** Tognazzini's
defaults principle [@tognazzini2014first], ISO's task-supporting defaults [@iso2020ergonomics] and
Saffer's smart defaults [@saffer2013microinteractions] agree; all are expert or consensus guidance.

*In LTF:* `QuizBlock` restores `lastAnswer` from `quizStore` so a learner returning to a question sees
what they chose, and `ChecklistRunner` opens in large text when started with `bigText` from fly mode.
`ChallengesPage` keeps its filters in the URL through `useSearchParams`, so the browser's Back
button returns a learner from a challenge to the list they had filtered; keep that, and keep "Clear
filters" one tap away.
:::

::: {.rule #INT-053 grade="C"}
**Do not let the interface rearrange itself based on usage; keep controls in fixed places and let
learner choices change values, not layout.** Raskin argued adaptive interfaces prevent habituation
[@raskin2000humane], and monotony (one gesture, one place) helps automaticity form. This is expert
argument, and critics note his strict positions were rarely adopted, so apply it to layout, not to
content.

*In LTF:* the `Header` nav, the challenge tab order (Brief, Fly, Debrief, History) and the
`FlyPanel` order (alert, Steps, Timer, Finish) should never reorder by usage. Personal content (the
dashboard "Continue" card, "Next up") can change; its position should not.
:::

::: {.rule #INT-054 grade="C"}
**When a pre-set value is a recommendation, say so in words; when it is merely a starting point,
make that clear too.** Defaults act partly as implied recommendations [@johnson2003defaults], so an
unexplained default can be mistaken for expert advice, which on a flight-training site carries
weight it may not deserve.

*In LTF:* any sim-setup value pre-filled in a challenge Brief (the "Sim setup" `dl` with copy
buttons) is a recommendation and should read as one ("Set up the sim like this"). Values come from
content tokens and verification, never from component code, per the project's content rules.
:::

### Fewer choices, at the right time

Defaults are one way to spare a learner a decision; deferring the decision is another. Laurel's
account of constraints, as summarized in a course reading, holds that good constraints limit what
people are likely to consider doing, not what they can do [@laurel1991computers], and the
training-wheels result shows a restricted early interface can speed learning
[@carroll1984training]. Carroll and Rosson's active users skip set-up and start the task
[@carroll1987paradox], which means a settings screen before the first lesson will mostly be clicked
through on its defaults. The design follows: pick good defaults, put the first real task first, and
ask for a choice only when it changes what the learner does next.

::: {.rule #INT-055 grade="C"}
**Ask the learner to choose only when the choice changes what they do next; otherwise pick a good
default and let them change it later where it applies.** Active users skip configuration
[@carroll1987paradox], and good constraints shape what people consider doing
[@laurel1991computers]. This is a design heuristic built on observation, not a measured effect.

*In LTF:* the product follows this: the landing CTA goes straight to the first lesson without an
onboarding screen, and theme, large text and the timer are chosen where they apply. If the planned
`/welcome` onboarding from the plan is built, every screen in it should have a default that lets the
learner proceed with one tap.
:::

### What this means for Learn to Fly

LTF's defaults are chosen well and mostly undocumented. Keep them: system theme, dark fly mode
unless light was chosen, "Remember me" off, timer stopped, quiz and rubric answers empty, last
answers restored. Document each choice where it is set (INT-049) so that later changes are reviewed
as decisions. Keep the explicit sentence about unanswered criteria (INT-051), and never pre-select a
rubric value even when the learner's previous attempt is known.

Two smaller points follow. Keep challenge filters in the URL so Back restores them (INT-052), and
phrase any pre-filled sim setup as a recommendation (INT-054). Keep the absence of a settings tour before the
first lesson (INT-055); it is the product's best default.

## Conceptual Models and the Blind Machine

### Seven stages and the system image

Norman's "Cognitive Engineering" chapter offered an approximate model of how a person acts on a
system [@norman1986cognitive]. As taught from it, the model has seven stages: forming the goal;
forming the intention; specifying an action; executing the action; perceiving the state of the
world; interpreting that state; and evaluating the outcome against the goal. That is one goal
stage, three on the execution side and three on the evaluation side. The stages are an
approximation, not discrete steps: not every goal passes through all of them, and feedback can
spawn new goals. The gulf of execution runs from goals to the physical system and the gulf of
evaluation back again, and they are bridged, as Hutchins, Hollan and Norman put it, by making
commands match the person's goals and by making output present a good conceptual model that is
readily perceived and interpreted [@hutchins1985direct]. The lecture summaries add that errors often
come from faulty mental models rather than carelessness, that people build models from fragments
and fill gaps with their own explanations, and that designers should supply a good conceptual model
through a coherent system image, with visible state, clear mappings and continuous feedback. The
chapter itself was not read for this Part; its content here rests on secondary accounts and on the
Hutchins paper, so the model is used as a review tool, not as tested theory.

Norman's 2013 book makes the system image a core idea in its first chapter, and covers natural
mapping (and how natural mappings vary with culture) in its third [@norman2013design]. The system
image is everything the product presents: words, controls, diagrams, documentation. The learner
builds a mental model from it, and the designer cannot talk to the learner any other way.

Cooper and colleagues make a related distinction between implementation models (how the thing
works inside) and mental models (how the person thinks it works), with the interface placed closer
to the mental model as the goal; the book's table of contents names the section, and its text was
not read [@cooper2014about].

::: {.rule #INT-056 grade="C"}
**Audit each challenge step through the seven stages, and fill the evaluation side explicitly: say
what the learner will see in the sim, what it means, and how they will know it went well.** The
seven stages are an approximate model offered as a design aid [@norman1986cognitive]. For a
beginner, the stages most likely to fail are perceiving, interpreting and evaluating, because a
beginner cannot yet tell from the sim's picture whether a maneuver went well.

*In LTF:* the Brief tab has Goal, "Sim setup", Procedure and "How you'll be scored". Add an
"What you should see" line to each procedure step, written in observable terms (an instrument or an
outside cue). Do not invent numeric targets; any number comes from verified content tokens.
:::

::: {.rule #INT-057 grade="C"}
**Use one name for each control, instrument, procedure and state everywhere in the product:
lessons, widgets, challenges, checklists, reference and copy.** The product's words and pictures are
its system image [@norman2013design]. Degani and Wiener's checklist guidelines ask for standardized
names for controls and displays [@degani1990checklists], and "same thing, same way" was the single
largest explainer in Nielsen's database, at 23% of all problems [@nielsen1994enhancing].

*In LTF:* the challenge tabs say "Fly" and the page says "fly mode"; the Fly tab's list is "Steps",
the Brief's section is "Procedure", and the reference has "checklists". These may be three different
things, but if a Brief "Procedure" and a Fly "Steps" are the same list, give them one name. Keep a
glossary of interface terms beside `features/reference/glossary.ts` and lint content against it.
:::

::: {.rule #INT-058 grade="C"}
**Describe states and actions in the learner's terms, not the system's: "saved on this device",
not "stored in session storage"; "your result", not "attempt record".** Cooper's distinction between
implementation and mental models puts the interface on the mental-model side [@cooper2014about];
Nielsen's heuristics include a match between the system and the real world
[@nielsen1994enhancing].

*In LTF:* the debrief callout "Your answers are kept on this device while you log in or sign up"
is a good example. Apply the same voice to the new fly-mode note in INT-045 ("Ticks are saved on
this device"), and avoid exposing words like "version" in "This challenge was updated" without
saying what changed for the learner.
:::

### Plans and situated action

Suchman's study of first-time users of an "expert help system" on a large Xerox photocopier is the
most direct precedent for LTF's problem [@suchman1987plans]. The system instructed users step by
step, each next instruction triggered by the user's successful completion of the last, using rules
and sensors that registered only certain changes (a closed cover, for example). Videotapes of pairs
of new users showed an asymmetry: the user's situation included everything they could see and say,
while the machine's situation consisted only of a plan written by its designer and the few actions
its sensors could detect. Instructions served as a resource for action but could not fully specify
it, and trouble followed when the user's question differed from the one the designer had
anticipated. Her broader claim, against the cognitive-science view of the time, is that plans are
derived from situated action, which consists of responses to circumstances as they arise, and that
plans are "inherently vague" formulations meant to accommodate contingencies. The source read for
this Part was the 1985 PARC report from which the book grew; the study is qualitative, small and
single-case, and its force is as a demonstrated pattern.

LTF is in the copier's position, with less sensing. The web app cannot see the sim at all. It does
not know whether the aircraft is on the runway, whether the sim is paused, or whether the last step
happened.

::: {.rule #INT-059 grade="C"}
**Never write an instruction that assumes the previous step succeeded; give the learner a way to
check the sim's state at each step, and a way to say they are not where the page expects.** Suchman
showed instructions fail when the machine cannot sense the situation and the user's question differs
from the designer's [@suchman1987plans]. LTF senses nothing in the sim, so the learner is the only
sensor.

*In LTF:* add to the Fly tab and `FlyModePage` a short "Not where you expected?" link under each
step group that opens the relevant Brief section or lesson section. The debrief's checkbox "I paused
the sim during the challenge" is a good model of letting the learner report sim state the app cannot
see.
:::

::: {.rule #INT-060 grade="C"}
**Treat a procedure as a resource the learner can enter at any step, not a script that must be run
from the top.** Plans are resources for situated action [@suchman1987plans], and Degani and Wiener
ask that checklists not be tightly coupled to other tasks and that they provide buffers to recover
and "take up the slack" [@degani1990checklists].

*In LTF:* `FlyPanel` lets steps be ticked in any order and `ChecklistRunner` marks the first unticked
item as current; neither forces sequence, which fits. Do not add step gating that blocks ticking step
5 until step 4 is ticked; the learner may have done step 4 in the sim and forgotten to tap.
:::

::: {.rule #INT-061 grade="C"}
**State plainly what the app can check and what only the learner can, wherever a result or score is
shown.** Parasuraman and Riley warn that people over-rely on automation they believe is checking
for them, and recommend making the limits of automation visible [@parasuraman1997humans]; Suchman
shows the cost of a machine that acts as if it knows more than it senses [@suchman1987plans].

*In LTF:* the debrief callout "Scores are self-assessed, so they only help you improve if they match
what happened. If you can, check your flight with the sim's replay before you answer." is the right
statement, and the server's recomputation of the tier should never be described as verification of
the flight. Keep similar wording on `ResultView` and the dashboard's "Gold results" tile.
:::

### Perceive, understand, anticipate

Endsley's model of situation awareness has three levels: perception of the elements in the
environment, comprehension of their meaning, and projection of their status into the near future
[@endsley1995toward]. It names attention and working memory as the bottlenecks and mental models and
goal-directed behavior as the mechanisms that get around them. As a design lens it is useful; as an
explanation of why someone erred it is contested. Flach argued that it is circular (the event
happened because awareness was lacking, and awareness is judged lacking because the event
happened), Dekker that "lost situation awareness" is used to explain away error, and a recent
review notes the construct still lacks an agreed operational definition. Endsley replied that the
levels are ascending, not linear stages, and that the model is not circular. Treat it as a way to
order information, not as something LTF measures.

::: {.rule #INT-062 grade="C"}
**Order guidance for each moment of a flight as what to look at, what it means, and what will happen
next.** Endsley's three levels give the order [@endsley1995toward]. Use it as a writing and layout
pattern only: the construct is contested as an explanation, so never tell a learner they "lost
situation awareness" and never claim to measure it.

*In LTF:* a Fly-tab step can carry the three parts in one line each ("Look: ...", "Means: ...",
"Next: ..."), and `QuizBlock` items can map to them ("which instrument", "what does it tell you",
"what will it do next"). The content itself goes through the verification process.
:::

### What this means for Learn to Fly

LTF's system image is the whole product: lesson text, widget drawings, the Brief, the Fly steps, the
reference and the copy. Two decisions follow. First, one vocabulary (INT-057): build an interface
glossary beside the aviation glossary, decide whether "Procedure" and "Steps" are the same thing,
and use the same name for each sim control across lessons, widgets and challenges. Second, design for
a machine that cannot see (INT-059 to INT-061): every step says what the learner should see, every
flow has a way back in, and every score says it is self-assessed.

Keep what is already right: steps can be ticked in any order (INT-060), the debrief asks about the
sim's pause state and says scores are self-assessed (INT-059, INT-061), and copy mostly speaks in the
learner's terms (INT-058). Add the evaluation side to challenge briefs (INT-056) and the look,
means, next pattern to Fly-tab steps where content allows (INT-062).

## Goals, Excise and the Active User

### Goal-directed design

Cooper and colleagues define interaction design as concerned first with the design of behavior,
and say user goals "can best be understood as narratives" [@cooper2014about]. They argue that
interaction design is "very much a design discipline, quite different from science and engineering",
and that "there is no such thing as an objectively good user interface": quality depends on who the
user is, what they are doing and why. The method they call Goal-Directed Design combines principles,
patterns and processes, with personas and scenarios as its modeling tools. The table of contents
(the body chapters were not read) shows the ideas most relevant here: "Optimizing for
Intermediates", with sections on "Perpetual Intermediates" and "Designing for Three Levels of
Experience"; "Reducing Work and Eliminating Excise", which sets goal-directed tasks against excise
tasks; "Platform and Posture"; and "Orchestration and Flow". The book also credits Moggridge and
Verplank with coining "interaction design" while working on the GRiD Compass laptop in the
mid-1980s. It is consultancy method and craft knowledge, not research.

Excise, as the chapter heading frames it, is work the product demands that does not serve the
person's goal. For LTF the learner's goal is to be able to fly a maneuver in the sim, not to
complete a lesson, so any tap, banner or form that adds effort without advancing that goal is
excise. The personas method behind the book is widely used and its evidence is mixed; there are
methodological critiques (Chapman and Milham) and studies of how designers actually use personas
(Matthews, Judge and Whittaker), whose conclusions were not read and are not reported here
[@cooper2014about].

::: {.rule #INT-063 grade="C"}
**For every step a learner must take, name the flying goal it serves; remove or merge any step that
serves none.** This is the excise test from Goal-Directed Design [@cooper2014about], expert method
rather than measured effect. Shneiderman's rule on reducing short-term memory load points the same
way: do not make people carry information from one display to another
[@shneiderman2016designing].

*In LTF:* the top of `LessonPage` can stack, before the first content block, an `UnverifiedWarning`,
a `SignupBanner`, a resume bar and the objectives `Card`, with the `BetaBanner` above the header.
Only the objectives serve the flying goal directly. Collapse the account and beta notices into one
dismissible line, and show the resume bar only when the saved section is not the first, as
`ResumeLink` already does.
:::

::: {.rule #INT-064 grade="C"}
**Design for the returning learner who knows the basics: show first-time guidance once, make it
dismissible, and never repeat an explanation the learner has already dismissed.** Cooper's "perpetual
intermediates" is the idea that most users are neither beginners nor experts for long
[@cooper2014about]; Shneiderman's universal-usability rule asks for explanations for novices and
shortcuts for experts in the same design [@shneiderman2016designing]. Raskin rejects the
beginner-expert split altogether, arguing for one interface that habits can form on
[@raskin2000humane]; the two positions agree on not maintaining two separate interfaces.

*In LTF:* the `BetaBanner` and `SignupBanner` already remember dismissal (`ltf-beta-banner`,
`ltf-signup-banner-dismissed`). Apply the same to the `ChecklistRunner` help line ("Space ticks an
item, Backspace unticks the last one") once a learner has used the keys, and to the random-event
explanation in `FlyPanel` once a learner has seen an event.
:::

### Active users

Carroll and Rosson described a pattern from IBM user studies: new users do not read manuals or
finish set-up; they start using the system at once to get their task done, even though learning
first would save them time later [@carroll1987paradox]. The paradox is a design principle: design
for the person who acts with limited knowledge and learns from what happens, not for an idealized
learner who studies first. The chapter was not read, only descriptions of it; Nielsen's account says
later studies confirmed the pattern, and "users never read" is an overstatement, since people do
consult help once stuck, especially when it is short and at the point of need.

The most cited design response from the same program is the training-wheels interface, described
in the chapter on affordances: blocking typical error states made new users faster and better at
learning, and the control group spent almost a quarter of its time recovering from errors the
restricted interface prevented [@carroll1984training].

::: {.rule #INT-065 grade="B"}
**Put the first real task on the first screen, and attach explanation to the action, at the moment
it is needed, rather than before it.** Active users start doing before learning
[@carroll1987paradox], and restricting early function to the essentials speeds learning
[@carroll1984training]. The first source is observational; the second is a small controlled
experiment.

*In LTF:* the landing CTA "Start lesson 0.1" goes straight to the lesson with no account and no
onboarding, and the hero note "You can start without an account" removes the expected barrier. Keep
both. In lessons, place a widget or quiz early, before long explanation; the landing's own promise is
"Read a little. Try it on the page. Fly it in the sim."
:::

::: {.rule #INT-066 grade="C"}
**Put anything the learner must not miss in the path of the task, not in a panel they are expected
to read first.** Because active users skip set-up and instructions [@carroll1987paradox], a critical
step placed in a "read this first" block will be skipped by the people who most need it.

*In LTF:* a sim setting that a challenge depends on belongs in the Brief's "Sim setup" list and again
as the first Fly step, not only in an introductory paragraph. The `safety` and `tip` callouts beside
"I'm set up, start flying" are in the path; keep critical content there and in the steps themselves.
:::

### Drama and the arc of a lesson

Laurel proposed that drama, read through Aristotle's analysis of dramatic form, is a useful model
for interface design [@laurel1991computers]. Designers create imaginary worlds that extend thinking,
feeling and action; representation has real consequences; and the aim is engagement from a
first-person point of view. Her account draws on plot structure (complication to resolution, with
discovery, surprise and reversal) and on constraints that limit what people are likely to consider
doing. Her earlier chapter, cited by Hutchins, Hollan and Norman, describes the first-person feeling
of direct engagement, and they borrow her analogy: an audience at a well-staged play suspends
disbelief, and the user of a model-world interface can suspend belief that the objects are artifacts
of a program [@hutchins1985direct]. The book is a conceptual argument known here through summaries;
a review in Science Fiction Studies, also known through a summary, criticizes it for a one-way model
that fails to engage with the specificity of either medium.

::: {.rule #INT-067 grade="C"}
**Give each lesson and challenge a visible arc: a stated goal at the start, a point where the learner
tries something that may not work, and an end that confirms what was achieved.** Laurel's dramatic
structure [@laurel1991computers] and Shneiderman's closure rule [@shneiderman2016designing] both
argue for it; both are expert frameworks. Do not add characters or narrative theatrics; the arc is
structural.

*In LTF:* lessons open with "In this lesson you will" and end with "Finished reading and trying the
questions?" and "Mark lesson complete"; challenges move from Brief to Fly to Debrief. The middle is
the weak point: a lesson whose blocks are all `markdown` has no attempt. Require at least one
`quiz` or `widget` block between the objectives and the completion panel.
:::

::: {.rule #INT-068 grade="C"}
**Write any persona or scenario as a labeled hypothesis tied to real evidence, and revise it when
evidence arrives.** Personas are central to Goal-Directed Design [@cooper2014about], and their
evidence base is mixed, with published methodological critiques. A persona that is not tied to
interviews or analytics is a guess with a name.

*In LTF:* the product's working persona (a beginner who has never flown, at a desktop with a
controller and a second screen) comes from the project's plan, not from research with learners. Mark it as a hypothesis in design documents,
and test the second-screen assumption: how many learners actually open `FlyModePage`?
:::

### What this means for Learn to Fly

LTF already does the hardest part of goal-directed design: the first screen leads to the first task,
with no account, no tour and no settings. Protect that (INT-065). The excise to remove is at the top
of lesson pages, where up to four notices can precede the content (INT-063), and in fly mode, where
`FlyModeLayout` still renders the `BetaBanner` above the challenge on a screen whose only job is
the flight. Show the beta notice once per session in fly mode, or fold it into the page footer there.

Make every lesson contain an attempt (INT-067), place critical setup in the path of the task
(INT-066), retire first-time help once it has been used (INT-064), and treat the second-screen
learner as a hypothesis to measure (INT-068).

## Microinteractions

### Saffer's four parts

Saffer argues that the unit of interface craft is the microinteraction, "a contained product moment
that revolves around a single use case" (in a reviewer's quotation of the book): a small piece of
functionality that does one thing [@saffer2013microinteractions]. Examples reported by the reviewer
include a mail client warning when you write to someone outside your organization, a web clipper's
button that grays out once the clipper is installed, a "Follow" button that becomes "Follow back"
when the other person already follows you, and a video site's tab icon that changes as the video
buffers, plays or pauses.

The book's chapters give the framework: triggers, rules, feedback, and loops and modes. A trigger
starts the microinteraction, either manually (the person initiates it) or as a system trigger (it
starts when conditions are met). Rules are the logic governing what can and cannot happen. Feedback
is the response the rules produce. Loops and modes are the meta-rules: how the microinteraction
behaves over time and what alternate states it has. Subsection titles listed for the book include,
for manual triggers, "Bring the Data Forward", discoverability, "Invisible triggers", and control
states and labels; for rules, limited options and smart defaults, microcopy and algorithms; and for
modes, "spring-loaded" and "one-off" modes, with long loops under loops. The reviewer reports advice
to start from the person's need (what, when, how often) and to do as much as possible with as little
as possible, under an epigraph from Charles Eames that the details "make the design".

The evidence is craft judgment illustrated by products, not research, and the book was known for
this Part through its contents and one review. A fair limitation, offered by the lane notes rather
than by a published critic, is that almost any interface event can be called a microinteraction, and
that polish on details can distract from structure. The framework's value is as a specification
template: it forces four questions to be answered before code is written.

::: {.rule #INT-069 grade="C"}
**Specify every small interactive moment by its trigger, its rules, its feedback and its loop before
building it, and write the four answers where reviewers can see them.** Saffer's four-part frame is
craft knowledge, not tested method [@saffer2013microinteractions]; its use is that each part is a
place where behavior is otherwise left to chance.

*In LTF:* for a `FlyPanel` step tick, the answers are: trigger, a tap on the row or the `Checkbox`;
rules, any order, untick allowed, timestamp kept; feedback, check mark plus `border-go bg-go-tint`
fill; loop, saved to `sessionStorage` for the tab, cleared after a submitted debrief. Write the same
four lines in the comment above every new interactive component.
:::

### Triggers

A manual trigger must look like what it does and show its current state. Saffer's section titles on
control states and labels, and his examples of a button that grays when its job is done or changes
its label to the next relevant action, describe a trigger whose appearance is driven by the rules
[@saffer2013microinteractions]. This is the signifier principle from the chapter on affordances at
the scale of one button [@norman2013design].

::: {.rule #INT-070 grade="C"}
**Let a trigger's label and look change with the state it controls, so the control itself always
says what pressing it will do now.** Saffer's examples of state-dependent labels
[@saffer2013microinteractions] and Norman's signifiers [@norman2013design] are the basis; both are
expert guidance.

*In LTF:* `Stopwatch` swaps Play and Pause, and `MarkComplete` is replaced by "Lesson complete" once
done; both follow the rule. The `CopyButton` in `BriefTab` swaps its icon to a green check and its
accessible name to "Copied" for 1.5 seconds, but a failed copy is silently ignored; show "Could not
copy" in that case, since the learner will paste into the sim and find nothing.
:::

::: {.rule #INT-071 grade="C"}
**Show the learner's relevant data at the point where they act: their last result next to the
retry, their best tier on the card that starts the challenge.** "Bring the Data Forward" is one of
Saffer's trigger sections [@saffer2013microinteractions]; Shneiderman's memory-load rule says not to
make people carry information between displays [@shneiderman2016designing].

*In LTF:* challenge cards on `ChallengesPage` show the best `TierBadge`, and the challenge header
shows "Best: {tier} {n}%". Extend the same to the Debrief tab: show the learner's previous result on
each criterion beside the radio group, read-only, so self-scoring can be compared with last time
without pre-selecting anything (INT-051).
:::

::: {.rule #INT-072 grade="C"}
**When the system triggers a microinteraction, say what triggered it in the same message.** A system
trigger starts on conditions the person did not set in that moment [@saffer2013microinteractions],
and an unexplained system action is an automation surprise in small [@sarter1995world].

*In LTF:* the random-event alert in `FlyPanel` shows the event's `label` and `message` with a beep
and "Got it". Add one line naming the trigger ("A random event from this challenge, fired by the
timer") so a learner who forgot they started the timer is not left wondering whether the sim or
the page raised it.
:::

### Rules and loops

The rules decide what the person can and cannot do, and the loop decides what happens over time.
Most microinteraction bugs in practice are undecided rules (can a tick be undone, does order
matter, what happens on the second press) and undecided loops (does the state survive a refresh,
the next session, a new version of the content). The lane's other sources supply the answers for
the hardest cases: undo should match the person's intention [@abowd1992giving], work should be
protected across interruptions [@tognazzini2014first], and a version change must not silently
reinterpret saved state.

::: {.rule #INT-073 grade="C"}
**Decide, and state in the code, what each microinteraction's state does across a refresh, a new
session, a sign-in and a content update.** Loops are Saffer's meta-rules for behavior over time
[@saffer2013microinteractions]; protecting work is Tognazzini's principle [@tognazzini2014first].

*In LTF:* `loadDebrief` discards a draft made for an older rubric version, and the server's
"This challenge was updated" error asks for a refresh; that is a decided loop, though the discarded
draft is lost without notice. Tell the learner when a saved draft was set aside because the rubric
changed, and keep their notes and reflections, which do not depend on the rubric.
:::

### Feedback in proportion

Saffer's chapter on feedback concerns methods and rules [@saffer2013microinteractions], and the lane
notes draw from it the advice to make feedback proportional: a completed checklist item needs a
small clear change, not a celebration. That agrees with Shneiderman's informative-feedback rule
[@shneiderman2016designing] and with the Part's chapter on feedback. Lists of "delight" details
circulate widely and have no evidence behind them beyond craft opinion.

::: {.rule #INT-074 grade="C"}
**Test any decorative or "delight" detail with real learners before making it a pattern, and drop
it if it slows the task or distracts from the sim.** The microinteraction literature is craft
judgment [@saffer2013microinteractions], and Hutchins, Hollan and Norman's condition for engagement
is an interface that does not draw attention to itself [@hutchins1985direct].

*In LTF:* the `tier-pop` animation on the result badge marks a rare event and is wrapped in
`motion-safe:`, which is proportionate. Do not extend celebratory motion to ticks, quiz answers or
lesson completion without testing; the Part on motion and perceived performance covers timing.
:::

### What this means for Learn to Fly

LTF has many microinteractions and most are well made: ticks are immediate and visible, the
checklist runner has keyboard shortcuts printed beside it, the stopwatch swaps its controls, the
copy button confirms, the theme toggle shows its state as an ink pill with a word and an icon.
Adopt the four-line specification (INT-069) as a comment convention for new interactive components,
so behavior is decided before it is coded.

Fix three specific gaps: the copy button's silent failure (INT-070), the random-event alert's
missing trigger line (INT-072), and the silent discarding of a debrief draft after a rubric update
(INT-073). Add previous per-criterion results to the Debrief tab as read-only context (INT-071).
Keep celebration for the one rare event that earns it (INT-074).

## Attention and the Companion Screen

### One thing at a time

Raskin built his account of interface design on the locus of attention: attention works like a
spotlight that lights one thing at a time, and stimuli outside it are mostly ignored
[@raskin2000humane]. With repetition, actions become habits performed without conscious attention.
For most software that is a theory of efficiency. For LTF it is a description of the use case. The
learner's locus of attention during a challenge is the sim; the companion screen is outside it,
consulted in glances. Everything on that screen must be readable in a glance, stable between glances
and silent unless something matters.

Hutchins, Hollan and Norman list an unobtrusive interface among the conditions for direct
engagement: an interface that is noticed puts the user in a third-person relation to the task
[@hutchins1985direct]. Dourish draws the same line with Heidegger's distinction between a tool that
is ready-to-hand (used so fluently that attention is on the task, as with a hammer) and one that is
present-at-hand (the tool itself becomes the object of attention) [@dourish2001where]. His book is a
philosophical synthesis, read here through a review that criticizes it for focusing almost entirely
on the ready-to-hand mode and neglecting how people move between the two. That gap is exactly LTF's
design problem: the companion screen should be ready-to-hand during the flight and become
present-at-hand, deliberately, when the learner stops to reflect.

Endsley's model names attention and working memory as the bottlenecks on situation awareness
[@endsley1995toward]. Whatever the debates about the construct, the practical inference is
uncontroversial: keep what the learner must hold in mind on screen, and keep the screen from
competing with the sim.

::: {.rule #INT-075 grade="C"}
**On the companion screen, keep one stable layout: the current and next step always in the same
place, completed items out of the way, and nothing that moves or reflows between glances.** The
locus of attention [@raskin2000humane] and working-memory limits [@endsley1995toward] are the basis;
both are theory and expert argument.

*In LTF:* `FlyModePage` renders the challenge header, then `FlyPanel large` with an alert slot at the
top, steps, then the timer. When a random event fires, the alert is inserted above "Steps" and
pushes the whole list down. Reserve the alert's space (or overlay it at a fixed position) so the
steps do not move, and keep a ticked step in place, dimmed, rather than reflowing the list.
:::

::: {.rule #INT-076 grade="C"}
**Allow no dialogs, popovers or overlays on the companion screen during a flight, except one rare
alert that the challenge itself defines.** An interface that draws attention to itself breaks
engagement [@hutchins1985direct], and the ready-to-hand tool is the one not noticed
[@dourish2001where].

*In LTF:* `FlyModeLayout` already strips the header and footer. It still renders the `BetaBanner`;
dismissing it is one more thing to do while flying. Hide it in fly mode after its first showing in
the session, and keep any future sign-up prompt, toast or glossary popover off `FlyModePage`.
:::

### Alerts that keep their meaning

Parasuraman and Riley organize the human side of automation under use, misuse, disuse and abuse
[@parasuraman1997humans]. Disuse, the neglect of automation, is "commonly caused by alarms that
activate falsely", and it occurs because the base rate of the condition is not considered when the
trade-off between false alarms and misses is set. Misuse is over-reliance, which produces failures
of monitoring. Abuse is automating functions without regard for the consequences for human
performance, which can reduce the operator to a by-product of the automation. Among the factors that
affect monitoring, the paper names the saliency of automation state indicators. It is an integrative
review of empirical work; the body was not read, and its findings are reported here at the level of
the abstract. A later review by Lee found it a pivotal paper and concluded that automation "requires
more, not less, attention to training, interface design, and interaction design".

Sellen and colleagues add the sensory side: sound and touch can carry state when vision is busy,
and Monk's mode-contingent sound cut mode errors by a third [@sellen1992prevention]. A sound is a
strong signal because it reaches a person whose eyes are elsewhere, which is also why it wears out
fastest when it fires for nothing.

::: {.rule #INT-077 grade="B"}
**Fire an alert only for an event that requires the learner to act, keep every alert rare, and
retire any prompt that learners routinely dismiss without acting.** False alarms produce disuse
[@parasuraman1997humans]; the review integrates many studies, though the mechanism is reported here
from its abstract. A sound or a pulse is worth something only while it means something.

*In LTF:* `FlyPanel`'s random event (red `border-4 border-warn`, `warning-pulse`, a two-tone beep,
`role="alert"`) is the only loud signal in the product and should stay the only one. If the product
records dismissals, log "Got it" taps with time-to-dismiss; an event dismissed in under a second
without a change in the learner's flight is a candidate for review.
:::

::: {.rule #INT-078 grade="C"}
**Do not automate the checks the learner is meant to perform: no auto-ticking, auto-advancing or
auto-scoring of what happens in the sim.** Over-reliance on automation degrades monitoring, and
automating without regard for human performance reduces the person to pressing "next"
[@parasuraman1997humans]. Since LTF cannot see the sim [@suchman1987plans], any automatic tick would
also be false.

*In LTF:* steps in `FlyPanel` and items in `ChecklistRunner` are ticked only by the learner, and the
debrief is self-scored; keep it so. A future sim-data integration should confirm what the learner
reports, not replace the report.
:::

### Checklist design on the second screen

Degani and Wiener's NASA report on flight-deck checklists is the strongest source on how procedures
should be laid out for a person whose attention is divided [@degani1990checklists]. They observed 42
crews over 72 flights and about 140 flight hours at one carrier, interviewed pilots from seven
carriers, and reviewed incident and accident reports. They found the checklist to be "a generator and
coordinator of many cockpit tasks", and the printed page "only the outer shell of the problem". Their
16 proposed guidelines are, in their words, "not specifications" and may conflict. The most
transferable: standardize names for controls and displays; responses should state the desired
status or value, not only "checked" or "set"; touch the controls while running the checklist; make
the completion call the last item; subdivide a long checklist into smaller task-related chunks;
sequence items by the physical layout of the cockpit, with a pictorial flow for training; put the
most critical items as near the beginning as possible so they are done before an interruption, which
takes precedence over layout order where the two conflict; and do not couple checklists tightly to
other tasks, leaving buffers to recover. The report is a mixed-method technical report from one
carrier, and the guidelines are proposals.

These are human-factors guidelines for how a list is structured, not aviation procedures. The items
themselves, and their order in a real aircraft, come from the aircraft's documents and LTF's
verified content.

::: {.rule #INT-079 grade="C"}
**Break any procedure longer than a screen into task-sized groups, end each group with a visible
completion line, and put the most consequential items first.** These are Degani and Wiener's
guidelines on chunking, completion calls and critical-first ordering [@degani1990checklists];
critical-first outranks neat grouping when they conflict.

*In LTF:* `FlyPanel` renders `challenge.procedure` as one flat numbered list. Allow procedure content
to carry group headings, show "Group complete" at the end of each, and give content authors the
critical-first rule in `content/README.md`.
:::

::: {.rule #INT-080 grade="C"}
**Write each checklist response as the state the learner should see, not as "checked" or "done".**
Degani and Wiener's guideline that responses portray the desired status or value
[@degani1990checklists] turns a tick from a memory aid into a check. A bare checkbox should not stand
in for the check itself.

*In LTF:* `ChecklistRunner` items and Fly-tab steps should read as item plus state (the form of
"Control, position"), with the state text coming from verified content. The `Checkbox` records that
the learner confirmed the state; the words carry what the state is.
:::

::: {.rule #INT-081 grade="C"}
**Order on-screen steps the way the learner's eyes and hands move through the sim's cockpit, unless a
critical item must come earlier.** Degani and Wiener recommend sequencing by the cockpit's physical
layout, with a pictorial flow for training [@degani1990checklists]. Matching the order of the page
to the order of the panel removes a translation the learner would otherwise do in working memory.

*In LTF:* a checklist-runner lesson can pair the list with a panel diagram that lights the region of
the current item, using the `g1000-pfd` or a panel widget; the order itself is content and must be
verified against the aircraft documents.
:::

### Coupling, reflection and help

Dourish's design principles include that users, not designers, manage coupling (how closely the
system is bound to their activity), and that embodied interaction turns action into meaning
[@dourish2001where]. The review that reports them also notes Dourish gives principles rather than
rules, which some designers find disappointing. The application for LTF is in two parts. During a
flight the learner should control how closely the app tracks them (a timer they choose to start,
ticks they choose to make). After a flight the app should become an object of attention on purpose:
breakdowns, in the phenomenological account, are where a tool becomes visible, and the debrief is
the planned breakdown.

How much help to give during practice is the one place in this Part where the evidence is genuinely
contested. Salmoni, Schmidt and Walter separated the temporary effect of feedback on performance
from its lasting effect on learning, and proposed the guidance hypothesis: feedback on every trial
helps performance during practice but can create dependence that hurts retention when feedback is
removed [@salmoni1984knowledge]. Later work was mixed. Wulf and Shea found that for complex skills,
learners given full concurrent feedback learned at least as well as those given less, so the
hypothesis holds best for simple tasks and does not justify withholding feedback from beginners on
complex ones.

::: {.rule #INT-082 grade="C"}
**Make the debrief the moment the app asks for full attention: after the flight, not during it, with
the questions that turn the flight into something learned.** Dourish's present-at-hand mode and the
idea of breakdown as a site of learning are philosophical design rationale [@dourish2001where], not
evidence of learning gains.

*In LTF:* the Debrief tab, its "Reflect" questions and the criterion-by-criterion `ResultView` are
this moment. Keep fly mode free of reflection prompts, and keep "Finish and debrief" as the explicit
transition on the Fly tab; on `FlyModePage`, which has no such button, add "Done flying? Debrief on
your main screen".
:::

::: {.rule #INT-083 grade="D"}
**Offer an optional reduced-help mode for learners who want to test themselves, but do not reduce
feedback by default for beginners on complex maneuvers.** The guidance hypothesis predicts that
constant feedback can create dependence [@salmoni1984knowledge], but replication is mixed and the
strongest qualification, for complex skills, points the other way. Do not claim any number of
attempts or feedback frequency is optimal without testing.

*In LTF:* a "Fly without steps" option on `FlyModePage` (steps collapsed, timer only) would let a
returning learner test retention, with the Debrief as the check. The default stays full steps.
:::

### What this means for Learn to Fly

`FlyModePage` and `FlyModeLayout` are the product's most distinctive interaction and its most
demanding. The dark, large-type, headerless layout is right. The changes this chapter asks for are:
a stable layout in which the random-event alert does not push the steps (INT-075); the beta notice
shown once and then gone in fly mode (INT-076); the alert kept as the product's only loud signal and
measured for false alarms (INT-077); procedures grouped with completion lines and critical items
first (INT-079); step text written as target states (INT-080) in cockpit order (INT-081); and an
explicit hand-off to the debrief from fly mode (INT-082). Keep every tick a learner action
(INT-078), and treat a reduced-help mode as an option to test, never a default (INT-083).
