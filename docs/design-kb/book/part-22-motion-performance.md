# Motion and Perceived Performance

This Part covers time in the interface: how things move, how long they take to move, and how long a learner waits before the screen answers. The two halves belong together because both are about the same human limits. A transition that is too fast loses the eye, one that is too slow wastes it, and a page that answers late feels broken whether or not it is. The sources run from animation craft (Thomas and Johnston, Lasseter, Chang and Ungar), through controlled experiments on animated transitions, instructional animation and progress indicators, to response-time syntheses, a vendor's field-measurement standard, the accessibility standard and the evidence on vestibular sensitivity. Every chapter applies its material to the Learn to Fly (LTF) client as the code stands: the motion tokens in `tokens.css`, the global reduced-motion rule in `index.css`, the widget animation hooks, the loading components and Fly mode.

The evidence is mixed in a useful way. A few findings rest on several independent experiments or a meta-analysis: animated transitions help people track objects through a change, representational animation teaches procedural content better than static pictures on average, and visible progress makes waits easier to bear. Many of the most quoted numbers (the "2 second rule", the 0.1, 1 and 10 second limits, the 200 ms enter duration) are expert synthesis or convention, and they are graded that way here. Read the rules as a working policy: each says what to do, how strong the case is, and where it stops applying. A reviewer can run the checklist in the last chapter against a pull request that adds or changes any animation, transition, loading state or performance budget.

## What motion is for

### Change is the problem animation solves

Static screens handle change badly. Chang and Ungar describe the familiar failure: an icon expands into a window in one instant, a menu appears where nothing was a moment before, a moved object vanishes in one place and reappears in another [@chang1993animation]. Each jump leaves the user to compare the old screen with the new one and deduce what happened, which pulls attention from the task. Cartoon audiences follow even bizarre events without being startled, and the authors' proposal was to borrow cartoon technique so that the interpretation of change is offloaded to the perceptual system instead of to reasoning [@chang1993animation].

That framing gives the most useful single test for any motion in a product: does it show how the old state relates to the new one? A panel that grows out of the button that opened it answers "where did this come from". A checklist item that slides to the completed group answers "where did my item go". A spinner answers "is anything happening". Motion that answers none of these questions is decoration, and decoration has to justify itself on other grounds.

The paper is a design description of one system, the Self programming environment, and reports no user study; its claims of lower cognitive load and greater pleasantness are argued rather than measured [@chang1993animation]. Later experiments, covered in the chapters on transitions and on learning, test the claims directly and support some of them in specific tasks. The purpose test survives that scrutiny better than the specific techniques do.

::: {.rule #MOV-001 grade="C"}
**Give every animation a stated purpose: showing how an old state became a new one, showing that work is in progress, or depicting the thing being taught.** Chang and Ungar's argument for interface animation is that it lets perception, not reasoning, connect successive states [@chang1993animation]; the experimental literature supports animation only where it does one of a small set of jobs [@tversky2002animation; @heer2007animated]. Motion with no answer to "what does this show" is decoration. The rule is a review discipline, not a finding.

*In LTF:* a pull request that adds an `animate-*` class, a `transition-*` utility or a `requestAnimationFrame` loop names the purpose in its description. "Feels nicer" is not a purpose.
:::

### A vocabulary of roles

Chevalier, Henry Riche, Plaisant, Chalbi and Hurter revisited Baecker and Small's 1990 taxonomy of animation in interfaces twenty-five years later. They reviewed academic papers and commercial systems, interviewed 20 professionals, and arrived at 23 roles in five categories [@chevalier2016animations]:

| Category | Example roles |
| --- | --- |
| Keeping in context | staying oriented, tracking layout change |
| Teaching aid | demonstration, explaining a system |
| User experience | progress visible, revealing content, feedback |
| Data encoding | relationships, uncertainty, attributes |
| Visual discourse | narrative, highlighting, persuading |

The full list under user experience also includes hooking the user, keeping the user engaged and providing visual comfort and aesthetics [@chevalier2016animations]. The taxonomy is a survey and a common language, not an experiment, and the authors deliberately chose not to report published evaluation results, because the results were mixed and could not be summarized accurately in the space available [@chevalier2016animations]. It tells a designer what animation can be for; it does not say which roles have evidence behind them. For that, the experimental papers are the guide.

Two of the paper's observations deserve a place in practice. First, once learning has taken place, a teaching animation "may not be needed anymore and its use discontinued" [@chevalier2016animations]. Second, the authors list dizziness as a drawback worth measuring, which links the taxonomy to the accessibility material in the chapter on motion sensitivity.

::: {.rule #MOV-002 grade="C"}
**Name the role a motion plays from the Chevalier taxonomy, and treat engagement and persuasion roles as needing a stronger case than orientation, tracking, progress and teaching roles.** The taxonomy of 23 roles comes from a literature and product review validated with 20 practitioners [@chevalier2016animations]; the roles with experimental support are tracking through change, spatial orientation and progress display [@heer2007animated; @bederson1999animation; @myers1985importance]. Hooking, keeping engaged and persuading fit poorly with a training product whose credibility rests on honesty.

*In LTF:* the defensible roles are revealing content (`Popover`, `Dialog`, `Drawer`, `CurriculumMap` disclosure), tracking (a marker moving in a widget), orientation (a diagram that pans), progress (`Skeleton`, `Progress`, the `Button` loading spinner), feedback (`tier-pop` on a result) and demonstration (the traffic-pattern playback). Nothing in LTF should animate to "hook" a visitor on the landing page.
:::

### Congruence and apprehension

Tversky, Morrison and Bétrancourt gave the field two principles that later work builds on [@tversky2002animation]. Congruence: the structure and content of an external representation should correspond to the structure and content of the desired internal one. By that principle animation should be ideal for anything that changes over time. Apprehension: the representation should be accurately perceived and appropriately conceived. Animation often fails here, because it is too fast or too complex to perceive, and because people conceive many continuous events as sequences of discrete steps [@tversky2002animation].

The two principles explain why animation so often disappoints. A continuous animation of a process is congruent with the process, but if the learner thinks of the process as five steps, a continuous sweep makes the steps harder to pick out. Heer and Robertson organize their design guidelines for animated data graphics under these same two headings [@heer2007animated], which is a sign of how well the framing travels.

::: {.rule #MOV-003 grade="B"}
**Before animating a process, check that learners can perceive it at the chosen speed and that its motion matches how they think of the process, usually as a few discrete steps.** The review evidence shows animations failing when they are too fast or complex to perceive, or when continuous motion is shown for content people conceive in steps [@tversky2002animation]; guidelines for animated graphics build on the same two principles [@heer2007animated]. The principles are a synthesis of mostly older, small studies.

*In LTF:* a lesson animation of a procedure (the legs of the traffic pattern, the phases of a turn) pauses or marks each step, rather than sweeping continuously from start to end.
:::

### Motion carries a cost

Animation costs time. Bederson and Boltman put the point plainly: in the worst case an animation is just an increase in system response time [@bederson1999animation]. Tversky and colleagues note that animations usually take longer than static equivalents and are not universally preferred [@tversky2002animation]. Card, Robertson and Mackinlay tuned their animations to about a second because much shorter ones lost object constancy and much longer ones bored the user [@card1991information]. So every animation spends some of the learner's time and attention, and the purpose has to be worth it.

The second cost is attention captured by the wrong thing. In a study Tversky and colleagues review, animated weather maps led novices to attend to perceptually salient but thematically unimportant information [@tversky2002animation]. Motion is among the strongest attention cues there is, which is exactly why it must point at what matters.

The third cost is physical. Some people become distracted or nauseous from animated content, and large or mismatched movement is the most likely trigger [@w3c2024wcag; @head2015designing]. That cost falls on a specific group of users, and the chapter on motion sensitivity treats it in full.

::: {.rule #MOV-004 grade="B"}
**Never make motion the only carrier of a fact; the end state must show everything the motion showed.** Animations take time, can be missed, and lead novices toward salient but unimportant features [@tversky2002animation]; some users switch motion off or cannot tolerate it [@w3c2024wcag]. A learner who looked away, or who has reduced motion on, must still get the information.

*In LTF:* when a widget animates a needle to a new reading, the reading is also shown as a `readout` value or in the widget's "Describe this diagram" text. When `tier-pop` animates the result badge in `ResultView`, the tier word is printed in the badge.
:::

::: {.rule #MOV-005 grade="C"}
**Animate one thing at a time on a given screen, and keep everything else still while it moves.** Lasseter's staging principle is that only one idea should be seen by the audience at a time [@lasseter1987principles]; Thomas and Johnston's staging directs attention by stripping what does not matter [@thomas1981illusion]. Heer and Robertson's experiments qualify the rule for data graphics (excessive staging can hurt), so "one at a time" means one focus, not a long sequence [@heer2007animated].

*In LTF:* a lesson page does not run a widget demonstration while a `Toast` rises and the `Skeleton` shimmer runs below. If a widget is playing, other motion on the page waits or does not happen.
:::

### Motion is part of the brand, but last

Motion contributes to how a product feels, and a product whose every element fades and slides at the same 200 ms reads as a template. That is a real concern for LTF, whose owner's complaint is that it looks generic. But the evidence in this Part says nothing about distinctiveness through motion, and a training product gains far more from motion that is quiet, correct and fast than from motion that is characterful. The defensible place for character is narrow: the rare moments of achievement and the few instrument-like widgets where physical, eased movement is itself part of the lesson.

::: {.rule #MOV-006 grade="C"}
**Spend motion character only on moments of achievement and on instrument-like widgets; keep all other interface motion short, quiet and uniform.** Craft authority treats exaggeration and secondary action as things to use with restraint and drop when they compete with the main action [@thomas1981illusion]; Chang and Ungar's own caution is that cartoon techniques are not to be imposed on what the user is operating directly [@chang1993animation]. There is no evidence that expressive interface motion improves a learning product.

*In LTF:* `tier-pop` on the challenge result is the right kind of place for a touch of overshoot. `Button`, `Tabs`, `Card` and form controls keep their 150 ms color transitions and nothing more.
:::

### What this means for Learn to Fly

LTF's motion system is small and already disciplined: seven named animations in `tokens.css` (`fade-in`, `pop-in`, `slide-in-right`, `slide-in-left`, `rise-in` at 200 ms; `shimmer` at 1.4 s; `tier-pop` at 400 ms; `warning-pulse` at 1.2 s), 150 ms color transitions on controls, 400 ms transitions on `ProgressBar`, `ProgressRing` and `LessonPath`, and `requestAnimationFrame` loops inside several widgets. Most of these pass the purpose test. Overlays (`Dialog`, `Drawer`, `Popover`, `Tooltip`, `DropdownMenu`) reveal content from somewhere. `Toast` enters from where it lives. `ProgressBar` fills toward its new value, which is a real-time progress display of the kind Tversky and colleagues consider the most promising use of animation [@tversky2002animation]. `tier-pop` is feedback at a moment of achievement.

Keep the system small. Add a short purpose line to the top comment of the motion block in `tokens.css` for each animation, so a future contributor knows what each one is for. Adopt the purpose and role questions (MOV-001, MOV-002) as the first items of the review checklist. Audit the two candidates that fail or nearly fail the purpose test: the `AppLoading` pulsing logo (a busy indicator with no information, discussed in the chapter on waiting) and the hover scale on the `YouTubeEmbed` play disc (harmless, but decoration). Do not add page transitions between routes: there is no continuous space between pages to preserve, and every route change would pay the cost.

## The animator's principles, translated

### Where the principles come from

Thomas and Johnston's *Disney Animation: The Illusion of Life* sets out the craft knowledge of Disney's senior animators from the 1930s onward [@thomas1981illusion]. Its central claim is that convincing motion comes from a small set of repeatable techniques that make an audience believe a drawn figure has weight, intention and personality. The techniques are summarized as twelve principles: squash and stretch, anticipation, staging, straight ahead action and pose to pose, follow through and overlapping action, slow in and slow out, arcs, secondary action, timing, exaggeration, solid drawing and appeal [@thomas1981illusion]. The book is a history and a teaching text, not an experiment; its authority is the quality of the films it explains and the generations of animators who used its vocabulary.

Lasseter carried the principles into 3D computer animation in 1987, arguing that easier keyframe tools would produce more animation and, unfortunately, more bad animation, because their users did not know what hand-drawn animators had learned over fifty years [@lasseter1987principles]. Chang and Ungar then carried them into user interfaces [@chang1993animation]. The chain matters: interface designers get these principles at two removes, through papers written for character animation and then adapted for one research system.

::: myth
**"The twelve principles of animation are proven rules for interface motion."** They are craft knowledge for hand-drawn character animation, stated without experiment [@thomas1981illusion; @lasseter1987principles]. Their transfer to interfaces was argued by Chang and Ungar without a user study [@chang1993animation], and experiments on interface animation show that attractive, well-crafted motion does not by itself improve comprehension [@tversky2002animation; @heer2007animated]. Treat the principles as a source of hypotheses and a shared vocabulary, not as evidence.
:::

### Timing and anticipation, as a pair

Lasseter's definitions are precise enough to use. Timing, the speed of an action, "gives meaning to movement"; it conveys weight and size and can carry emotion [@lasseter1987principles]. The animator should spend enough time, but no more, on the anticipation, the action and the reaction: too much loses attention, too little means the movement is over before the audience notices it. The faster the movement, the more it matters that the audience can still read it [@lasseter1987principles].

Anticipation is the preparation for an action, and its amount changes how fast the action can be. If the audience expects something, the action can be much faster without losing them. Lasseter's example is a zip-off in *The Adventures of André and Wally B.* where the action itself lasts three or four frames, while the anticipation lasts long enough that the audience knows what is coming [@lasseter1987principles]. In Chang and Ungar's interface version, anticipation is a small, quick contrary movement before an object moves by itself (never when the user drags it), which draws the eye and prepares the user [@chang1993animation].

The pairing has a direct interface consequence. A change the user starts is already anticipated: the click is the anticipation, so the response can be fast. A change the system starts is not, so it needs a cue, or it needs to be slow enough to be caught, or both.

::: {.rule #MOV-007 grade="C"}
**Make user-started changes fast, and give system-started changes a cue before or as they happen.** Lasseter's account of anticipation is that an expected action can be much faster without losing the audience [@lasseter1987principles]; Chang and Ungar reserve anticipation for objects that move by themselves, not those the user drags [@chang1993animation]. A click is its own anticipation; an unprompted change has none.

*In LTF:* opening a `Popover` from a glossary chip needs no wind-up and should stay at 200 ms or less. A random event in `FlyPanel` (the system-started change) already has its cue in the beep and the `warning-pulse` ring; a widget that changes state on a timer, such as the traffic-pattern playback reaching a new leg, should highlight the next leg label before the marker turns.
:::

### Staging, arcs and the principles that transfer

Staging is presenting an idea so it is completely and unmistakably clear, with one idea seen at a time [@lasseter1987principles]. It is the most portable principle, covered as MOV-005. Slow in and slow out is the second, and the only one with a direct experimental test, covered in the chapter on easing. Arcs, the principle that natural motion follows curved paths while mechanical motion is the exception [@thomas1981illusion], has a narrower use in interfaces: mechanical movement is honest for mechanical things. A tape scrolling past a pointer box moves in a straight line because the real tape does; a needle sweeps an arc because it pivots.

Follow through and overlapping action (loose parts keep moving after the main motion stops), squash and stretch (deformation shows weight and flexibility while volume stays constant), exaggeration and appeal are principles of character [@thomas1981illusion; @lasseter1987principles]. They make a lamp seem alive in *Luxo Jr.* They are risky in a training tool. A checklist item that squashes when ticked, or a gauge needle that wobbles after it arrives, suggests turbulence, a fault or play.

::: {.rule #MOV-008 grade="C"}
**Do not use squash and stretch, follow-through wobble, bounce or exaggeration on instruments, checklists, scores or any element that represents a real quantity or procedure.** These principles exist to give character weight and personality [@thomas1981illusion; @lasseter1987principles]; Chang and Ungar's interface adaptation keeps solidity, slow in and out and anticipation, and excludes imposed effects on objects the user manipulates [@chang1993animation]. On an instrument, a wobble reads as data.

*In LTF:* `Gauge`, `Tape`, `Compass` and every widget in `src/features/widgets/` move needles, tapes and markers without bounce. `ChecklistRunner` items change color and check state; they do not squash or bounce.
:::

::: {.rule #MOV-009 grade="C"}
**Move mechanical things mechanically: rotate needles about their pivot, translate tapes in straight lines, and follow the geometry of the instrument being drawn.** Arcs are the craft rule for natural motion, with mechanical motion named as the exception [@thomas1981illusion]; Chang and Ungar's solidity principle asks that objects move continuously and as if they have mass [@chang1993animation]. An instrument widget is a mechanical object, and its motion should be the motion of the real parts.

*In LTF:* keep the fix recorded in `widgets/shared/svg.tsx`, where the needle rotates by CSS about the pivot because an SVG `rotate()` transform animated as a matrix and slid the needle off its pivot mid-swing.
:::

### Solidity and the frame rate

Chang and Ungar's first group of principles is solidity: objects should move continuously and as if they have mass. Dragging an outline instead of the object destroys the effect, and motion must keep up with the cursor; the Self interface was tuned to hold 20 to 30 frames per second during interactive movement [@chang1993animation]. Their cartoonists' rule of thumb for motion blur is that if an object moves more than half its size (or, in an alternative version, its full size) between frames, the eye sees two objects, one flashing out and another in, so a blur trail is drawn between positions [@chang1993animation]. Higher frame rates reduce but do not remove the need.

The figures come from 1993 hardware with colormap tricks and should not be read as current targets [@chang1993animation]. What survives is the principle: during direct manipulation the moved object must stay with the pointer, and a large jump between frames breaks the impression of one continuous object. Card, Robertson and Mackinlay make the matching engineering point: to maintain the illusion of animation the screen must repaint at least every 0.1 second, and their system's Governor lowered rendering quality (leaving off most text during motion) to protect the cycle time [@card1991information].

::: {.rule #MOV-010 grade="C"}
**During a drag, keep the dragged element under the pointer on every frame, and drop rendering detail before dropping frames.** Solidity requires continuous motion that keeps up with the cursor [@chang1993animation]; Card and colleagues' Governor degraded rendering quality to hold the perceptual cycle time [@card1991information]. The specific frame rates in both papers are from their era; the priority order is what transfers.

*In LTF:* draggable widget elements (the aircraft in the VOR/CDI widget is one, through `useDrag`) update directly from the pointer, without a tween; native range sliders already do. If a widget struggles on a low-end phone, hide labels and the trail while dragging and redraw them on release.
:::

### Speed: as fast as legibility allows

Chang and Ungar's most reusable section lists where interfaces differ from cartoons. A cartoon is passive and an interface is interactive. The user must be able to regain control immediately, and animation should be "as fast as it can be while still preserving legibility" [@chang1993animation]. Done well, they argue, animation can speed an interface up: an object can cross the screen in two frames with motion blur and still be followed [@chang1993animation].

This is the opposite of the instinct to make motion noticeable. Interface animation is not a performance for the user to watch; it is a bridge the user crosses on the way to the next action.

::: {.rule #MOV-011 grade="C"}
**Never block input while an interface animation runs; a click or key press during a transition cancels or completes it at once.** Chang and Ungar's account of what separates interfaces from cartoons is that users must regain control immediately [@chang1993animation]; Bederson and Boltman count a transition's time as added response time [@bederson1999animation]. An animation the user must wait out is a delay.

*In LTF:* Radix `Dialog` and `Drawer` already accept input during their 200 ms entrances; keep it that way. Widget tweens through `useTween` restart toward the newest target when the input changes, which is correct; any future demonstration animation must stop when the learner touches the widget.
:::

### What this means for Learn to Fly

Of the twelve principles, LTF should use four on purpose. Staging (MOV-005) governs lesson pages: one moving thing at a time. Timing and anticipation (MOV-007) separate user-started changes, which are fast, from system-started ones, which get a cue. Slow in and slow out governs tracked movement (see the chapter on easing). Arcs and solidity (MOV-009, MOV-010) govern the widgets, which are LTF's most distinctive asset according to the product dossier and the place where motion quality is most visible.

The remaining principles are mostly off limits. The one place where the product already uses a character principle is `tier-pop`, whose keyframes overshoot to 1.08 scale before settling at 1: a small exaggeration at a moment of achievement, which is the right place for it. Do not extend that vocabulary to `Badge`, `ProgressRing`, `LessonPath` pins or the completion panel on `LessonPage`. Record MOV-008 in the widget authoring notes in `src/features/widgets/` so that new widgets do not add bounce to needles for liveliness.
