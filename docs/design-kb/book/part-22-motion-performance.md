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

## Easing and duration

### Slow in and slow out, tested

Slow in and slow out is the animator's habit of spending more frames near the start and end of a move than in its middle, so an object leaves its pose gently, travels quickly and settles gently [@thomas1981illusion]. Lasseter describes it as the spacing of in-between frames, which mathematically concerns second and third order continuity of motion, achieved in 3D systems by adjusting the tension, bias and continuity of splines [@lasseter1987principles]. Chang and Ungar's version says it gives weight and reduces surprise, and without it "movement feels artificial and dead" [@chang1993animation]. For decades this was an informal guideline with no data behind it.

Dragicevic, Bezerianos, Javed, Elmqvist and Fekete supplied the data [@dragicevic2011temporal]. They defined pacing as a time remapping of a constant-rate animation and compared four pacings of equal total duration: constant speed, slow-in/slow-out (a piecewise quadratic ease), fast-in/fast-out, and an adaptive pacing that slowed the frames of highest visual complexity without stopping. Twelve paid university students used all four in a Latin square, tracking one target among identical dark 16-pixel squares in an 800 by 800 area and clicking its final position. All transitions lasted one second, which the authors describe as a common duration for transitions [@dragicevic2011temporal].

Slow-in/slow-out had significantly lower error than the other techniques for every distractor profile. In one count of fully correct answers it led with 38%, ahead of constant speed (31%), fast-in/fast-out (15%) and adaptive speed (14%); the source notes record that it is unclear which of the paper's two data sets that count describes, so the percentages are indicative [@dragicevic2011temporal]. Adaptive speed did best only when complexity sat at the endpoints, where it reduces to slow-in/slow-out. Participants complained that the other pacings made them overshoot the target as it stopped. The authors attribute the advantage to predictability, not to extra time at complex moments: the gradual start helps the eye begin tracking and the gradual stop lets it predict where the object will end. They hypothesize a broader principle, keeping velocity variations low, of which slow-in/slow-out would be a special case [@dragicevic2011temporal].

Two earlier experiments used the same curve and are consistent with the result. Bederson and Boltman animated viewpoint changes for exactly one second at 20 frames per second with slow-in/slow-out, at an average speed of 750 pixels per second, and found better spatial reconstruction with no time penalty [@bederson1999animation]. Heer and Robertson link slow-in/slow-out to their principle of maximizing predictability [@heer2007animated].

The limits are specific and should travel with the rule. Twelve students, abstract stimuli, one target, one duration. Participants pressed a key to start each transition, so they knew when it would begin, which favors tracking; there was no eye tracker, and several simultaneous targets were not tested [@dragicevic2011temporal]. No figure in the paper applies to a 150 ms hover or a 200 ms popover, and the paper does not address whether to animate at all.

::: {.rule #MOV-012 grade="B"}
**For a transition of about a second in which the learner must follow an element from one place to another, use slow-in/slow-out (ease-in-out) pacing.** In a controlled tracking experiment, slow-in/slow-out beat constant, fast-in/fast-out and adaptive pacing for every distractor profile, which the authors attribute to predictability [@dragicevic2011temporal]; one-second eased glides also supported spatial memory [@bederson1999animation]. The evidence is one small study of one-second, user-started transitions of abstract points.

*In LTF:* LTF has no ease-in-out token. Add one to `tokens.css` (for example a symmetric curve named `ease-in-out`) and use it for tracked relocations: a diagram panning to a new area, a marker jumping to a new position after a click, a card moving to a new group.
:::

### Ease-out for entrances, ease-in for exits

Most interface motion is not a tracked relocation. It is an entrance (a popover appears), an exit (a dialog closes) or a state change (a button darkens). For these, the common convention is to decelerate on entry, so the element arrives quickly and settles, and to accelerate on exit, so it leaves without lingering. LTF's tokens follow the convention exactly. The `ease-out` token is `cubic-bezier(0.16, 1, 0.3, 1)`, and the `ease-in` token is `cubic-bezier(0.7, 0, 0.84, 0)`; the comment above the animations reads "Enter 200ms ease-out, exit 150ms ease-in".

None of the sources in this Part tests these curves or durations. The supporting arguments are indirect. Chang and Ungar ask for motion as fast as legibility allows [@chang1993animation]. Lasseter observes that a movement the audience expects can be very short [@lasseter1987principles], and an entrance triggered by a click is expected. The convention is reasonable craft, and it should be graded as craft rather than defended with the tracking experiments, which tested something else.

The LTF `ease-out` curve is strongly front-loaded: with its first control point at (0.16, 1), the element covers most of its distance in the first part of the duration. That suits short entrances, where the element should be nearly in place at once, and it is the wrong curve for a tracked move, where the eye needs a gradual start to lock on [@dragicevic2011temporal].

::: {.rule #MOV-013 grade="C"}
**Use the `ease-out` token for entrances and the `ease-in` token for exits, at no more than about 200 ms, and never use them for movement the learner must track.** Short decelerating entrances follow the craft rule that interface motion should be as fast as legibility allows [@chang1993animation] and that expected motion can be brief [@lasseter1987principles]. No study in this Part tests the curves or the durations; the tracking evidence favors a different, symmetric curve for longer moves [@dragicevic2011temporal].

*In LTF:* keep `fade-in`, `pop-in`, `rise-in` and `slide-in-*` at 200 ms with `ease-out`. The overlay components define no exit animation today; if exits are added, use 150 ms with `ease-in`, as the token comment says.
:::

### Duration: the one-second family

Several independent sources land on roughly one second for transitions that preserve object constancy. Card, Robertson and Mackinlay designed immediate-response animations, such as swinging the branches of a 3D tree into view, to take about a second: much shorter and the user loses object constancy and must reorient, much longer and the user gets bored waiting [@card1991information]. Bederson and Boltman report that in pilot studies and their own experience, animations of about one second struck a balance, and they cite others who found one second appropriate [@bederson1999animation]. Dragicevic and colleagues call one second a common duration [@dragicevic2011temporal]. Heer and Robertson used 1.25 seconds in their first experiment and 2 seconds in their second, to fit multi-stage versions, and after finding that staged scatter-plot transitions increased tracking error, they recommend about one second per stage rather than about half a second [@heer2007animated].

This agreement is weaker than it looks. Card and colleagues' constant is an order-of-magnitude engineering value; Bederson's is from pilots; Dragicevic chose one second because it was conventional. The experiments show that one second works for the transitions they tested, not that it is optimal [@card1991information; @heer2007animated]. And they all concern large transitions: a viewpoint glide, a chart rearrangement, a tree expanding. They give no guidance for a 10 px tooltip fade.

::: {.rule #MOV-014 grade="B"}
**Give a transition that rearranges or relocates content the learner must keep track of about one second, and about one second per stage if it is staged.** One-second eased transitions supported tracking and spatial memory in several experiments [@bederson1999animation; @dragicevic2011temporal; @heer2007animated], and Card and colleagues' immediate-response constant points to the same order of magnitude [@card1991information]. The evidence shows one second works, not that it is best, and covers large, deliberate transitions only.

*In LTF:* a widget that changes configuration in a way the learner must follow (the load-factor diagram moving to a new bank angle, a chart view changing scale) animates for about a second. A `Popover` or `Tooltip` does not.
:::

### Too fast, too slow

Card and colleagues give both failure modes: too short and the user must reorient, too long and the user is bored [@card1991information]. Lasseter gives the same pair for character animation: too little time and the movement is over before the audience notices, too much and attention is lost [@lasseter1987principles]. Nielsen adds a mechanical cause of the first failure. Interfaces can be too fast for users to follow, so animations should be timed by a real-time clock rather than by processor speed [@nielsen1993response]. A tween that advances a fixed step per frame runs twice as fast on a 120 Hz display as on a 60 Hz one.

::: {.rule #MOV-015 grade="C"}
**Drive every script animation from elapsed time, never from a frame count.** Nielsen recommends running animations on a real-time clock because interfaces can become too fast to follow on faster machines [@nielsen1993response]; Card and colleagues show that both too-short and too-long animations cost the user [@card1991information]. Frame-counted tweens change speed with refresh rate.

*In LTF:* `useTween` already computes progress from `performance.now()`, and the traffic-pattern and VOR/CDI loops scale their step by the measured frame interval (capped at 0.1 s). Keep that pattern for every new `requestAnimationFrame` loop.
:::

### Overshoot and valid intermediate states

Lasseter warns that splines can overshoot at the extremes when there is a large change over few frames [@lasseter1987principles]. For a character this is a minor flaw. For an instrument it is a false reading: an airspeed needle that swings past its target and back has, for a fraction of a second, shown a value that was never true. Heer and Robertson's congruence guidelines make the general point for data graphics: keep intermediate states valid, and do not let a transition imply data that does not exist [@heer2007animated].

LTF's curves are safe on this count. Both control points of the `ease-out` token have a y value of 1, so the curve never exceeds its end value. `useTween` uses a cubic ease-out, `1 - (1 - t)^3`, which approaches its target from one side. The `Gauge` needle's 150 ms CSS transition uses the browser's default curve, which also does not overshoot. The one overshooting curve in the system is `tier-pop`, whose keyframes scale the badge to 1.08 before settling at 1. Its size means nothing, so the overshoot is harmless.

::: {.rule #MOV-016 grade="C"}
**Never use an easing curve that overshoots on any element whose position, angle or size encodes a value.** Splines overshoot when a large change is packed into few frames [@lasseter1987principles], and a valid transition keeps every intermediate frame a valid display of the data [@heer2007animated]. An overshooting needle teaches a wrong value.

*In LTF:* a `cubic-bezier` with a y control value above 1 or below 0, or a spring with bounce, is not allowed on `Gauge`, `Tape`, `Compass`, `ProgressBar`, `ProgressRing` or any widget marker. It is allowed on `tier-pop` and similar purely celebratory badges.
:::

### Micro-transitions on controls

Below the transitions the evidence covers lies a layer of very short changes: a button's background darkening on hover, an input's border turning teal on focus, a tab's text color changing. LTF gives these 150 ms (`duration-150`, used on `Button`, `Tabs`, `Card`, `Link`, `Checkbox`, `RadioGroup`, the header nav and the `control-box` utility). Color, opacity and blur changes that do not alter an element's perceived size, shape or position are not motion animation under WCAG's definition [@w3c2024wcag], so these transitions carry little accessibility risk. Their purpose is to soften a state change so it reads as a change of the same object rather than a flicker. There is no experiment behind the 150 ms value.

One micro-transition should never be eased: the press response. A pressed state must appear on the next frame, because it is the acknowledgment that the input arrived (see the chapter on response time). LTF's `active:shadow-press` on `Button` is not in the transitioned property list (`transition-colors`), so it appears at once, which is correct.

::: {.rule #MOV-017 grade="C"}
**Keep hover and focus color transitions at about 150 ms, and show pressed and checked states with no transition delay.** Color transitions are not motion under WCAG's definition [@w3c2024wcag] and soften a state change; acknowledgment of control activation belongs in the fastest response category [@miller1968response; @nielsen1993response]. The 150 ms value is convention.

*In LTF:* keep `duration-150` on controls. Check that `Checkbox` shows its checked fill on the frame of the click (its `transition-colors duration-150` eases the fill in; consider removing the transition on the checked state so the tick is immediate).
:::

### What this means for Learn to Fly

LTF's easing system has the right parts for entrances and exits and lacks the part the experiments support. Add a symmetric `ease-in-out` token and an `animate-*` or transition preset of about one second for tracked moves (MOV-012, MOV-014). Keep the `ease-out` and `ease-in` tokens at 200 and 150 ms for overlays (MOV-013), and keep `duration-150` on control colors (MOV-017).

The 400 ms transitions on `ProgressBar`, `ProgressRing` and the `LessonPath` connector sit between the two families. They show a value changing, they use `ease-out`, and they do not overshoot, so they pass MOV-016. Their length is not evidence-based; 400 ms is long enough to see the fill move and short enough not to delay the next action, which is the right trade for a progress display after "Mark lesson complete".

`useTween` (350 ms, cubic ease-out) is the main widget animation path. It is correct for values the learner sets directly (a slider moves, the needle eases to the new value), and it is the wrong choice for live values, discussed in the chapter on instruments. Document in its comment that the curve must stay non-overshooting, so that a future contributor does not swap in a spring.

## Animated transitions and object constancy

### What transitions are for

A transition joins two states of the same display. Its job is object constancy: the learner should be able to tell that this mark, card or region in the new state is the same one that was in the old state, and see what happened to it. Card, Robertson and Mackinlay named the risk directly: an immediate-response animation much shorter than about a second makes the user lose object constancy and reorient [@card1991information]. Chang and Ungar named the cause: without continuity, the user must compare two screens and deduce the connection [@chang1993animation].

Two experiments test the idea well enough to rely on, with caveats. One concerns viewpoint changes over a fixed space, the other changes between related statistical graphics.

### Viewpoint glides and the mental map

Bederson and Boltman asked whether animating a viewpoint change, a smooth glide from one place to another, helps users build a mental map of a spatial information space [@bederson1999animation]. Twenty participants (mean age 27, nearly all university students) navigated large family trees in the Pad++ zoomable interface, clicking a person to move there. In the animated condition the view glided for exactly one second with slow-in/slow-out; in the other it jumped. Each participant used one animated and one non-animated tree, in counterbalanced order, and afterwards reconstructed each tree away from the computer by placing printed photographs.

Reconstruction errors were significantly lower after animated navigation, both unweighted (F(1,19) = 16.165, p = .001) and weighted (F(1,19) = 16.816, p = .001), against a threshold of p of 0.01 or lower [@bederson1999animation]. There was no significant difference in navigation time or correctness, in memory recall questions or in satisfaction. There was an ordering effect: when the animated tree came first there was little difference, and the advantage appeared when it came second. Seventy-five percent of participants said the animation helped them learn relationships, 25% said it slowed them down, and participants did not prefer the animated transitions overall [@bederson1999animation].

The authors read this as animation helping with spatial relationships, not with more complex relationships among the data, and note that their data set was small [@bederson1999animation]. The ordering effect suggests some of the benefit appeared only after practice, a reason for caution with first-time users. The result supports glides over a fixed spatial layout; it says nothing about page navigation, where no continuous space exists.

::: {.rule #MOV-018 grade="B"}
**When a view pans or zooms over a fixed spatial layout, glide to the new view with an eased transition of about a second instead of jumping.** Animated viewpoint changes improved users' reconstruction of a spatial layout with no measurable cost in task time [@bederson1999animation]. The evidence is one experiment with twenty students, the benefit was spatial rather than relational, and it emerged mainly after practice.

*In LTF:* the sectional-legend `Chart` widget, any future airport diagram, and the traffic-pattern view if it zooms should glide between views. Route changes, tab changes in `ChallengePage` and section changes in `ReferenceSections` should not, because they are not movements over one space.
:::

### Transitions between data graphics

Heer and Robertson tested animated transitions between related statistical graphics: bar to pie, stacked to grouped bars, scatter-plot time steps and others [@heer2007animated]. They extended the theory of data graphics to transitions, proposed a taxonomy and design principles, built a system (DynaVis) that follows them, and ran two experiments with 24 participants (10 female, 14 male, aged 26 to 62) screened for familiarity with data graphics.

In the first experiment participants followed two highlighted objects across a transition and clicked their final locations. The initial graphic stayed for 3 seconds; static transitions were immediate; animated ones lasted 1.25 seconds; the display was masked 3 seconds after transition onset. The design crossed static, direct animation and staged animation with 8 or 16 elements, for 288 trials per person across six transition types. In the second, participants followed one target and estimated its percentage change, with animations lengthened to 2 seconds and 144 trials each [@heer2007animated].

Animation produced significantly lower error than static transitions in every condition of the first experiment. Staged animation beat direct animation except for the scatter-plot time step, where staging increased tracking error; the authors suggest that several short stages give more chances to lose a target, and recommend about one second per stage rather than half a second. In the second experiment animation helped significantly for the scatter plot and grouped bars, while heavily staged animation of stacked bars and donut charts increased error. The authors conclude that it is preferable to minimize unnecessary motion rather than to "do one thing at a time" at any cost [@heer2007animated]. More elements meant more tracking error. They describe the staging gains as "not overwhelming", and note that because the mask removed the final state, better performance in predictable transitions may partly reflect better memory transfer [@heer2007animated].

::: {.rule #MOV-019 grade="B"}
**Animate a change between two related diagram or chart states rather than swapping instantly, when the learner needs to follow specific marks through the change.** Appropriately designed animated transitions reduced object-tracking and change-estimation error compared with static transitions [@heer2007animated], consistent with the earlier spatial result [@bederson1999animation]. The sample was modest and homogeneous, the task was a lab tracking task, and the authors stress that animation can mislead if it violates the data's meaning.

*In LTF:* when a widget switches configuration (the airspace-profile diagram moving between views, the wind-triangle redrawing for a new wind), the marks that persist should move to their new places rather than disappear and redraw.
:::

### The design principles that come with the result

Heer and Robertson's principles are as useful as their data. Under congruence: keep intermediate states valid data graphics, use consistent mappings from operations to transitions, respect semantic correspondence (never reuse a mark for a different data point), and avoid ambiguity. Under apprehension: group similar transitions so they share common fate, minimize occlusion, maximize predictability (which they link to slow-in/slow-out), use simple transitions (translation and expansion are easier to follow than rotation), and use staging for complex transitions [@heer2007animated].

::: {.rule #MOV-020 grade="B"}
**Keep each mark's identity across a transition: the element that represents a thing in the old state must be the one that moves to represent it in the new state.** Semantic correspondence is one of Heer and Robertson's congruence principles, and their experiments measured exactly the ability to track marks through a change [@heer2007animated]. Reusing a mark for a different item makes the animation lie.

*In LTF:* use stable React keys tied to the thing represented (a waypoint id, a leg name, a runway) for SVG marks in widgets, never array indexes, so a re-render moves the right mark instead of recycling it.
:::

::: {.rule #MOV-021 grade="B"}
**Prefer translation and expansion to rotation in transitions, move related marks together, and split a complex change into at most two stages of about a second each.** Simple transitions and grouped motion are easier to follow, and heavy staging increased error in some tasks while modest staging helped in others [@heer2007animated]. The staging benefit is real but, in the authors' word, not overwhelming.

*In LTF:* a diagram that both rescales and moves points does it in two steps (rescale, then move). A transition with three or more stages is redesigned as two, or as a direct transition.
:::

### Disclosure and expansion

The most common transition in a document-like product is disclosure: a section opens, a panel expands, a menu grows. Chang and Ungar turned pop-up menus into "grow-up" menus that expand from the button and shrink back [@chang1993animation], and Chevalier and colleagues list revealing and hiding content as a distinct role [@chevalier2016animations]. The evidence for disclosure animation specifically is thin; it is an application of the object-constancy argument, and it carries little risk because the motion is small and local [@head2015designing].

::: {.rule #MOV-022 grade="C"}
**Open overlays and disclosures from the element that triggered them, with a short, small movement that shows where the content came from.** Growing content out of its source is Chang and Ungar's remedy for things that appear from nowhere [@chang1993animation]; revealing and hiding content is a recognized animation role [@chevalier2016animations]; small, local motion is low risk for motion-sensitive users [@head2015designing]. No experiment tests this case directly.

*In LTF:* `Popover` and `DropdownMenu` use `rise-in` (8 px), `Dialog` uses `pop-in` (scale 0.98 to 1), `Drawer` slides from its edge. All are small and local. The `CurriculumMap` module `<details>` opens with only a chevron rotation, because native `details` content cannot be animated simply; that is acceptable, since the chevron and the content directly below the summary make the relation obvious.
:::

### Scrolling as a transition

Scrolling to an in-page target is a viewpoint change over a fixed space, the case Bederson and Boltman tested [@bederson1999animation]. A smooth scroll shows the learner how far they traveled and in which direction. It also covers a large virtual distance quickly, which is one of Head's three factors that make motion likely to trigger vestibular symptoms [@head2015designing]. A short smooth scroll is useful; a long one across a whole lesson is both slow and risky.

::: {.rule #MOV-023 grade="C"}
**Smooth-scroll only over short distances; jump directly when the target is more than about a screen away, and always jump under reduced motion.** Smooth movement over a space supports orientation [@bederson1999animation], but motion that covers a large perceived distance is a vestibular risk [@head2015designing], and scroll behavior falls under the reduced-motion preference [@w3c2024wcag]. The one-screen threshold is a judgment, not a measured value.

*In LTF:* the mobile section `Select` in `LessonParts.tsx` calls `scrollIntoView({ behavior: 'smooth' })`; the global reduced-motion rule sets `scroll-behavior: auto`, but that does not override a behavior passed in script. Pass `'auto'` when `useReducedMotion()` is true, and consider `'auto'` when the target section is far away. `GlossaryPage` already jumps.
:::

### What this means for Learn to Fly

LTF's widgets are where animated transitions earn their place, and they already animate many state changes through `motion-safe:transition-transform` on SVG groups (turn coordinator, pitch-power, load-factor) and through `useTween`. Apply MOV-019 to MOV-021 as the authoring standard for widgets: persistent marks move rather than redraw, keys are stable, transitions are direct or two-stage, translation is preferred to rotation except where the instrument itself rotates.

Do not import the evidence into places it does not cover. Page navigation through the router stays instant: `RouteAnnouncer` and `ScrollRestoration` handle orientation for screen readers and scroll position, and no glide between pages would help, because there is no continuous space between `/learn` and `/challenges`. Tabs in `ChallengePage` (Brief, Fly, Debrief, History) and the numbered rail in `ReferenceSections` switch instantly with only their 150 ms underline and color changes, which is right.

Fix the one gap MOV-023 identifies in `LessonParts.tsx`: the smooth scroll ignores the reduced-motion preference when it is passed from script. The fix is one condition.

## Animation that teaches

### The pessimistic review

The strongest caution in this Part comes from Tversky, Morrison and Bétrancourt's review of whether animated graphics teach better than static ones [@tversky2002animation]. By their congruence principle animation should be ideal for content that changes over time. Yet they found the research on animation over static graphics "not encouraging". Where animation seemed to win, the animated and static versions were usually not equivalent.

Their examples fall into three groups [@tversky2002animation]. Incomparable content: in studies of speed-distance problems, the circulatory system, Newton's laws and the Pythagorean theorem, the animated version showed fine-grained steps or pathways the static version left out. Incomparable procedures: some animated conditions allowed interactivity or prediction, which help learning on their own, while the static ones did not; a later study by Hegarty and colleagues found no benefit of animation as such for a flushing cistern. Outright failures: animated path diagrams gave no benefit beyond static diagrams, and in instruction on Macintosh software, any graphic beat none but animation did not beat equivalent text or static graphics. In Palmiter and Elkerton's help-system studies, animation users finished the training task faster but the test task more slowly, and after a week the text group improved while the animation group declined [@tversky2002animation].

The review is selective and narrative, and its studies are mostly small and from the 1980s and 1990s [@tversky2002animation]. It does not say that animation never helps. It says that the early studies did not meet the burden of proof, and that when animation did seem to help, something else was usually doing the work.

::: myth
**"Animated explanations teach better than static diagrams."** Early studies that seemed to show this usually gave the animated group more information, or interactivity and prediction, that the static group lacked; with equivalent content, animation often showed no advantage, and in one help-system study animation learners did worse a week later [@tversky2002animation]. A later meta-analysis finds a modest average benefit that depends on what is taught [@hoffler2007instructional]. Animation is a tool for some content, not a general upgrade.
:::

### The meta-analysis

Höffler and Leutner pooled the experiments that compared instructional animations with static pictures to answer the question the narrative review left open [@hoffler2007instructional]. Across 26 primary studies and 76 pairwise comparisons, the mean weighted effect size for learning outcomes was d = 0.37 (95% confidence interval 0.25 to 0.49), a medium-sized advantage for animation. The advantage depended on purpose and kind of content. Representational animations, which depict the content being learned, showed larger effects than decorational ones (d = 0.40, 95% CI 0.26 to 0.53, for the representational group). Highly realistic animations such as video showed the largest effect among realism levels (d = 0.76, 95% CI 0.39 to 1.13). Effects were largest when the learning target was procedural-motor knowledge (d = 1.06, 95% CI 0.72 to 1.40) [@hoffler2007instructional].

Two cautions come with the numbers. They come from the publisher-affiliated listing, not a full reading of the paper. And the realism moderator is confounded with content: realistic video tends to be used for motor procedures, so it is not clear whether realism or procedural content drives the large effect [@hoffler2007instructional]. Later meta-analyses are reported to find smaller overall effects, a pattern typical of a literature whose early reviews included confounded comparisons; those figures have not been checked for this book and are not used here. The reasonable reading of the evidence as a whole: animation helps on average, modestly, and most for procedural and motor content shown representationally, which is consistent with Tversky and colleagues' warning about abstract content [@tversky2002animation; @hoffler2007instructional].

::: {.rule #MOV-024 grade="A"}
**Use animation or video to teach procedural and motor content, such as where to look and how inputs change over a maneuver, and default to annotated static diagrams for abstract relationships.** A meta-analysis of 76 comparisons found a modest average advantage for instructional animation, largest for procedural-motor knowledge [@hoffler2007instructional]; a review of earlier studies found little advantage when static and animated versions carried the same information [@tversky2002animation]. The moderator analysis is confounded with realism, and later syntheses are reported to be smaller.

*In LTF:* a lesson on the flare or on the scan during a turn may justify a short demonstration (or a clip of the sim). A lesson on why the altimeter reads what it does uses a labeled static diagram, with an interactive widget if change is the point.
:::

::: {.rule #MOV-025 grade="B"}
**Cut any lesson motion that does not depict the thing being taught.** Representational animations showed larger learning effects than decorational ones in the meta-analysis [@hoffler2007instructional], and salient but irrelevant motion draws novices away from the thematic point [@tversky2002animation]. Decorative motion spends attention without teaching.

*In LTF:* a `WidgetFrame` does not animate its border, title or "Simplified model" badge; a lesson `Callout` never animates; motion inside a widget belongs to the instrument or diagram itself.
:::

### Interactivity and learner control

The review's most constructive suggestion is that interactivity may overcome animation's problems [@tversky2002animation]. Animations "must be slow and clear enough for observers to perceive movements, changes, and their timing", should lean toward the schematic and away from the realistic, may need annotation (arrows, highlighting) to direct attention, and benefit from learner control: stop, start, replay, zoom and speed [@tversky2002animation]. Several of the apparent animation advantages in the reviewed studies came from interactivity or prediction, which is a reason to build those in deliberately rather than relying on motion alone.

::: {.rule #MOV-026 grade="B"}
**Give every teaching animation play, pause, step and replay controls, and annotate where the learner should look.** Learner control and annotation are the review's conditions for animation to succeed, and interactivity and prediction explain several apparent animation advantages in the studies it examines [@tversky2002animation]. Where an animation lasts more than five seconds and starts on its own, a pause control is also a WCAG Level A requirement [@w3c2024wcag].

*In LTF:* the traffic-pattern widget already has play and pause (`Play`, `Pause`, `SkipForward`, `Undo2` in `TrafficPattern.tsx`); make that the template. Any new demonstration widget has the same control set in its `WidgetFrame` header, and highlights the active leg or element with the accent.
:::

::: {.rule #MOV-027 grade="B"}
**Ask the learner to predict before a demonstration plays.** Prediction helped learning on its own in studies where it accompanied animation, which is one reason those animations seemed to win [@tversky2002animation]. A prediction prompt makes the demonstration a test of a guess rather than something to watch.

*In LTF:* a widget in "Quiz me" mode (the `WidgetFrame` toggle) asks "Where will the needle go?" before it animates; Explore mode lets the learner drive it.
:::

### Schematic, not realistic, and the sim already moves

Tversky and colleagues advise leaning toward the schematic [@tversky2002animation], while the meta-analysis finds the largest effects for realistic animation [@hoffler2007instructional]. The two are compatible once content is separated from realism: realistic video teaches motor procedures well, and schematic diagrams teach structure and cause. For LTF the realistic animation already exists. The learner has Microsoft Flight Simulator open beside the browser. An LTF animation that imitates the sim competes with a much better version of itself. LTF's animations should do what the sim cannot: show hidden causes, slow a quick event, isolate one variable, or put a value on screen that the sim's panel does not show.

::: {.rule #MOV-028 grade="C"}
**Animate what the simulator cannot show (forces, hidden causes, a slowed or isolated variable), and send the learner to the sim for realistic motion.** Schematic animation with annotation is the review's recommendation [@tversky2002animation]; realistic animation helps most for motor procedures [@hoffler2007instructional], which is what the sim provides. This is an application of the two findings, not a tested comparison.

*In LTF:* the load-factor and angle-of-attack widgets show quantities the sim does not draw, which is the right use. A lesson that needs realistic motion says "Watch the horizon in the sim as you do this" in a `sim` `Callout` rather than drawing its own horizon.
:::

### Retire the demonstration

Chevalier and colleagues note that a teaching animation may no longer be needed once learning has taken place [@chevalier2016animations]. Repeated demonstrations cost time on every visit and become noise. The ordering effect in Bederson and Boltman's study points the other way for orientation animations (their benefit appeared with practice) [@bederson1999animation], so the rule applies to teaching demonstrations, not to transitions that keep the learner oriented.

::: {.rule #MOV-029 grade="C"}
**Play a widget's demonstration or affordance hint on the learner's first encounter only, then replace it with a static hint.** A teaching animation can be discontinued once learning has taken place [@chevalier2016animations]; repeated, unchosen motion is a cost [@tversky2002animation]. This is a design proposal from a taxonomy, not a tested result.

*In LTF:* a looping "drag me" hint on a widget handle runs once per widget per learner (remembered in local storage like `ltf-signup-banner-dismissed`), then becomes a static arrow and the instruction text.
:::

### What this means for Learn to Fly

The thirteen widgets in `src/features/widgets/` are LTF's teaching animations, and most are interactive rather than playback, which is the form the evidence favors. Write the following into the widget authoring standard. A widget states, in its lesson context, what it teaches; if the content is abstract, the widget's value comes from interaction (the learner changes an input and sees the effect), not from motion. A widget that plays on its own has play, pause, step and replay (MOV-026) and shows a static end state that carries the full lesson point (MOV-004). "Quiz me" mode asks for a prediction before revealing (MOV-027). No widget imitates the sim's out-the-window view (MOV-028).

For lesson authors in `content/`, add a line to the widget block guidance: a widget is not a substitute for the sentence that states the fact. The fact is in the lesson prose, the widget is where the learner tests it. That keeps lessons usable when a widget fails to load (the `WidgetFallback` in `WidgetBlock.tsx`) and when reduced motion is on.

## Instruments in motion

### Two kinds of moving value

LTF's widgets draw instruments: a round `Gauge` with a needle, a G1000-style `Tape` with a pointer box, a `Compass`, a turn coordinator, an attitude display in the PFD. Their needles and tapes move for two different reasons, and the reasons call for different motion.

The first is a scripted or learner-set change. The learner moves a slider from one value to another, or a lesson step sets a new configuration, and the needle travels from the old reading to the new one. The motion here is a transition between two states, and the evidence of the last two chapters applies: it should be eased, non-overshooting, short enough not to delay and long enough to follow [@dragicevic2011temporal; @heer2007animated; @lasseter1987principles].

The second is a live or simulated value. A widget runs a model forward in time, as the traffic-pattern and VOR/CDI widgets do in their `requestAnimationFrame` loops, and the instrument shows the model's state frame by frame. The motion here is the data. An easing curve on top of it makes the needle lag behind the value it claims to show, and a curve that overshoots shows values the model never had. Dragicevic and colleagues tested easing on user-started, one-second relocations the participant expected [@dragicevic2011temporal]; nothing in that work supports easing a value that changes by itself.

::: {.rule #MOV-030 grade="C"}
**Ease an instrument only between two set states; when it shows a continuously modeled value, map the value to the needle directly on every frame.** The tracking evidence for easing covers expected, user-started transitions [@dragicevic2011temporal], and a valid transition keeps every intermediate state true to the data [@heer2007animated]. Easing a live value adds lag and, with some curves, false readings [@lasseter1987principles].

*In LTF:* `useTween` is for learner-set values. A widget whose model advances in a frame loop (traffic pattern, VOR/CDI) writes positions straight from the model. The 150 ms CSS transition on the `Gauge` needle group in `svg.tsx` should be disabled when the gauge is driven by a frame loop, or it will smear the motion by 150 ms.
:::

### The needle must not teach a wrong value

Lasseter's spline-overshoot warning [@lasseter1987principles] matters most here. An instrument widget in a training product teaches the learner what a reading looks like. A needle that swings past the target and settles back shows, for a fraction of a second, a reading the configuration does not produce. A learner who is still learning where the arcs lie can take the overshoot as part of the instrument's behavior. MOV-016 already forbids overshooting curves on value-bearing elements; for instruments it is the most important motion rule in the Part.

Heer and Robertson's requirement that intermediate states be valid data graphics [@heer2007animated] has a second consequence for instruments. Interpolating between two readings is valid only if every value in between is a possible reading. For an airspeed needle moving between two speeds it is. For a heading moving from just west of north to just east of north, linear interpolation of the angle sweeps the long way round through south, which no compass would do. For an attitude display changing both pitch and bank, interpolating each separately is fine; interpolating the screen coordinates of the horizon line's ends is not.

::: {.rule #MOV-031 grade="C"}
**Interpolate instrument values in the instrument's own units and geometry, taking the short way round on any circular scale.** Intermediate states must be valid displays of the data [@heer2007animated]; an interpolation that passes through impossible readings shows false data mid-transition. This is a direct application of the congruence principle, not a tested result.

*In LTF:* `Compass`, the heading bug in the PFD and the VOR/CDI course selector interpolate headings by the signed shortest difference. The `useTween` hook interpolates raw numbers; wrap headings before passing them in.
:::

### Timing that reads as physical

Thomas and Johnston's timing principle holds that the number of frames an action takes conveys weight and character [@thomas1981illusion]. On an instrument, timing conveys the instrument's physics. A real needle has inertia and damping; it does not teleport, and it does not wobble when it is well damped. A short eased transition (LTF's `useTween` runs for about 350 ms with a cubic ease-out) reads as a damped instrument settling. That is a craft judgment: no study in this Part tests how fast a teaching needle should move.

There is one constraint from the response-time literature. When the learner drags a slider, the needle's response is direct manipulation, and the 0.1 second category applies: beyond it, the user loses the feeling of operating directly on the data [@nielsen1993response; @card1991information]. A 350 ms tween that starts on the same frame as the input is still a response within that category, because motion begins at once. A tween that waits, or that restarts from the old value on each input event, breaks the link.

::: {.rule #MOV-032 grade="C"}
**When the learner drags a control that drives an instrument, start the instrument's motion on the same frame and keep the eased catch-up short, about a third of a second.** Feedback within about 0.1 second preserves the sense of direct manipulation [@nielsen1993response; @card1991information]; damped motion reads as physical [@thomas1981illusion]. The 350 ms value is LTF's current convention, not a measured optimum.

*In LTF:* `useTween` already starts from the current interpolated value rather than the last target, so a dragged slider produces continuous motion; keep that property under test, because a refactor that restarts from the previous target would make the needle stutter.
:::

### Degrade detail before responsiveness

Card, Robertson and Mackinlay's Governor monitored the system's cycle time and, when it rose too high, let rendering processes lower quality (for example leaving off most text during motion) to protect the 0.1 second perceptual cycle [@card1991information]. LTF's widgets are hand-built SVG, some large (the PFD widget is 818 lines with many elements). On a mid-range phone, a widget that redraws every tick label and its halos on every frame can drop frames while the learner drags. The Governor idea gives the priority order: protect the update rate of the moving part, then restore detail.

::: {.rule #MOV-033 grade="C"}
**Keep static instrument detail (ticks, arcs, labels) out of the per-frame render path, and if a widget cannot hold its frame rate, simplify what it draws during motion.** Card and colleagues protected the perceptual cycle by lowering rendering quality under load [@card1991information]; solidity requires the moving object to keep up with input [@chang1993animation]. Their numbers are from 1991; the priority order transfers.

*In LTF:* in `Gauge` and `Tape`, the needle or tape group is the only element that changes on each frame; arcs and ticks are memoized. The traffic-pattern trail (`setTrail` keeps up to 240 points) is a candidate to thin during playback on slow devices.
:::

### Reduced motion on an instrument

WCAG 2.3.3 exempts animation that is essential to the functionality or information conveyed [@w3c2024wcag]. A needle that follows a modeled value is the information, so the needle's movement is arguably essential. Its smoothing and easing are not: under reduced motion, the needle can jump to each new value or step in coarse increments without losing anything. LTF's `useTween` already does this, jumping straight to the target when the user prefers reduced motion. The two playback widgets go further and do it well: under reduced motion `TrafficPattern.tsx` replaces its frame loop with a step to the next leg every 1.5 seconds, and `VorCdi.tsx` replaces its Fly and Pause toggle with a "Fly 1 minute" button that advances the model in one jump. The content survives; only the continuous motion goes.

::: {.rule #MOV-034 grade="C"}
**Under reduced motion, jump instruments to each new value instead of easing, and replace continuous playback with stepped playback rather than removing it.** WCAG 2.3.3 allows essential motion but not non-essential smoothing [@w3c2024wcag]; the reduced-motion preference asks to remove non-essential movement, not all change [@w3c2024wcag]. The learner must still get the lesson.

*In LTF:* `useTween`'s reduced-motion branch, the stepped legs in `TrafficPattern.tsx` and the "Fly 1 minute" button in `VorCdi.tsx` are the pattern. One refinement: the 1.5 second automatic step still changes the display on its own while the learner reads, so give it the same pause control as the animated playback (it already sits behind `playing`, which is correct).
:::

### What this means for Learn to Fly

The widgets are where LTF's motion quality is most visible and most consequential, because they teach what instruments look like. Adopt MOV-030 to MOV-034 as the widget motion standard and write them into the shared primitives: `useTween` (learner-set values, non-overshooting, starts from current value, jumps under reduced motion), a documented "live" path for frame-loop widgets that bypasses both `useTween` and the `Gauge` CSS transition, and a heading interpolation helper beside `Compass`.

Add tests where the behavior is mechanical and checkable: that `useTween` never returns a value outside the range between origin and target, that heading interpolation from 350 to 10 passes through 0 rather than 180, and that reduced motion produces the target on the next tick. These are small unit tests under `src/features/widgets/shared/` and protect the most important property in the Part: the instruments never show a value that was not true.

## Response time

### Response time to what?

Robert Miller, writing at IBM in 1968 when time-sharing terminals were new, argued that there is no single acceptable system response time [@miller1968response]. The right answer depends on what the user is doing; a search summary of his abstract records the question "Response time to what?" as the heart of the issue. He framed terminal use as a conversation in which each kind of exchange carries its own expectation, and proposed a catalog of response-time categories keyed to the type of exchange.

The original text could not be read for this book, and the table survives here through a third-party reproduction, so the figures are a reader's summary rather than a quotation [@miller1968response]. As reproduced, response to control activation is 0.1 to 0.2 seconds; to "System, are you listening?", 3; to "System, can you do work for me?", 2 for simple and 5 for complex work; to "System, do you understand me?", 2 to 4; to identification, 0.4 to 0.5 for feedback and 0.2 for confirmation; to "Here I am; what work should I do next?", 10 to 15; to a simple inquiry of listed information, 2; to a simple status inquiry, 7 to 10; to a complex tabular inquiry, 4; to a request for the next page, 1; to "Now, run my problem", 15; graphic response from a light pen, 0.1; and to a complex graphic inquiry, 2 to 10 [@miller1968response].

The table is expert synthesis from experience, not experiment, and belongs to an era of terminals, light pens and character output [@miller1968response]. What lasts is the principle: match the response time to the kind of transaction, and acknowledge sooner than you deliver.

::: myth
**"Miller found that users will wait only 2 seconds."** Miller's 1968 paper proposed a table of about fourteen transaction types with different response expectations, from a tenth of a second for control activation to fifteen seconds for running a problem, based on his judgment rather than an experiment [@miller1968response]. Later authors reduced the table to round numbers [@nielsen1993response; @card1991information]. A single "2 second rule" collapses the table into one value and turns expert judgment into a measured limit it never was.
:::

::: {.rule #MOV-035 grade="C"}
**Set a separate response budget for each kind of exchange (control feedback, answer checking, next page, long operation), and acknowledge every input sooner than you deliver its result.** Miller's central argument is that acceptable response time depends on the transaction, with acknowledgment owed sooner than results [@miller1968response]; Myers lists the messages a responsive system conveys, that the request was heard, accepted and is being worked on [@myers1985importance]. The specific numbers are from 1968 and secondary.

*In LTF:* the budgets in the chapter on performance budgets are written per exchange: press feedback, quiz "Check answer", lesson-to-lesson navigation, saving progress, submitting a debrief.
:::

### The three time constants

Card, Robertson and Mackinlay tuned their Information Visualizer to three human time constants [@card1991information]. Perceptual processing, 0.1 second: to maintain the illusion of animation the screen must repaint at least that often. Immediate response, 1 second: a person can make an unprepared response to a stimulus within about a second, and beyond that, conversation fills the gap with a backchannel ("uh-huh") or a signal that the speaker is still thinking ("uh..."); the system therefore gives status feedback at intervals no longer than about a second. Unit task, 10 seconds (the paper gives 5 to 30): an elementary task act should complete in about that time, and if agents take longer, the user stays active and can start the next request [@card1991information]. The constants are taken from Card, Moran and Newell's psychology of human-computer interaction and from Newell's unified theories of cognition, and they are order-of-magnitude values a decade apart, not thresholds with confidence intervals [@card1991information].

Nielsen restated them as the three limits now quoted everywhere [@nielsen1993response]. 0.1 second is "about the limit for having the user feel that the system is reacting instantaneously"; no special feedback is needed beyond showing the result. 1.0 second is "about the limit for the user's flow of thought to stay uninterrupted"; between 0.1 and 1.0 second users notice the delay and lose the feeling of operating directly on the data, but no special feedback is needed. 10 seconds is "about the limit for keeping the user's attention focused on the dialogue"; longer waits invite task switching, so users need feedback on when the computer expects to finish [@nielsen1993response]. A 2014 update says web applications follow the same limits and adds that delays over 10 seconds need a clear way to interrupt, and that users will need to reorient afterwards [@nielsen1993response].

::: {.rule #MOV-036 grade="C"}
**Treat 0.1, 1 and 10 seconds as categories of experience (feels instant, keeps the flow of thought, holds attention), not as pass-fail cutoffs.** The values are order-of-magnitude constants from cognitive science adopted by Card and colleagues and restated by Nielsen [@card1991information; @nielsen1993response]; experiments on delay find smooth, non-linear effects rather than cliffs [@galletta2004web]. Nothing breaks at 1.1 seconds; experience degrades gradually.

*In LTF:* write budgets as "the press state appears within the instant category" and measure actual distributions, rather than as "must be under 1.000 s".
:::

::: {.rule #MOV-037 grade="C"}
**For any operation that can take longer than about a second, show a status cue at once; for any that can take longer than about ten seconds, show progress, an estimate and a way to cancel.** Card and colleagues gave status feedback at intervals no longer than the immediate-response constant [@card1991information]; Nielsen's guidance for waits beyond ten seconds is a percent-done indicator, an estimate and a way to interrupt [@nielsen1993response]. Both are expert syntheses.

*In LTF:* `Button` `loading` covers the one-second case for actions (saving, submitting, signing in). Nothing in LTF currently takes ten seconds in normal use; if offline download of a module or an export of attempt history is added, it needs the full treatment.
:::

### Delay effects are real, modest and non-linear

The best experiment in this lane on web delay is Galletta, Henry, McCoy and Polak's [@galletta2004web]. Earlier rules of thumb ranged from "no greater than 2 seconds" to warnings about delays of 12 seconds or more. The authors randomly assigned 196 undergraduates to one constant delay of 0, 2, 4, 6, 8, 10 or 12 seconds and asked them to complete nine search tasks on a familiar and an unfamiliar site, measuring performance, attitudes and behavioral intentions.

Delay mattered, but the effects were non-linear and the explained variance small: in the neighborhood of 2% for performance, 5% for attitudes and 7% for behavioral intentions [@galletta2004web]. Declines in performance and intentions began to flatten at delays of 4 seconds or longer, and attitudes flattened at about 8 seconds or longer. Restricting the analysis to the familiar site raised the explained variance for attitudes and intentions to about 16% [@galletta2004web]. Delay is one influence among many, it costs something at every length with diminishing marginal effect, and its effect is easier to see where users know the site.

The study has the usual limits: a lab, students, fixed delays, immediate attitude measures, no purchase or loyalty data, and an early broadband context in which multi-second loads were normal [@galletta2004web]. A later secondary paper attributes to Galletta and colleagues an optimal response time of 0.5 seconds; the claim does not appear in the paper, which tested 0 to 12 seconds in 2-second steps, and should not be repeated [@galletta2004web].

::: {.rule #MOV-038 grade="B"}
**Aim to be reliably fast in the common case and to remove long-tail delays, rather than to clear a single threshold.** Delay effects on performance, attitudes and intentions are non-linear, flattening at a few seconds, with small explained variance [@galletta2004web]; patience is context-dependent [@nah2004study]. A budget built around one cutoff misses both the cost below it and the tail above it.

*In LTF:* track the slowest lesson loads and the slowest "Check answer" and debrief submissions, not only the median, and treat a page that is occasionally very slow as a defect even if it is usually fast.
:::

### Patience and feedback

Nah's study is the usual source for "web users will wait about 2 seconds" [@nah2004study]. Its abstract, as available for this book, reports two findings: feedback prolongs tolerable waiting time, and the tolerable waiting time for information retrieval is approximately 2 seconds. The full text could not be read. A secondary account by Galletta and colleagues describes the experiment: subjects were given ten links of which only seven worked, so the measure was how long people waited on a broken link before giving up [@galletta2004web]. Subjects with feedback (a status bar) waited on average 38 seconds after clicking the first non-working link, those without feedback 13 seconds; on later attempts, 7 and 3 seconds [@galletta2004web]. That account describes the conference version, and the figures should be checked against the journal article before they are relied on.

Read carefully, the study measures patience when an outcome is uncertain and a link may never load, not tolerance of a slow page that does load. The "2 seconds" figure is therefore a statement about patience under failure, and patience shrank sharply with repeated failure [@nah2004study; @galletta2004web].

::: myth
**"Users abandon any page that takes more than 2 seconds."** Nah's figure comes from how long people waited on links that did not work at all, and the same study found that feedback lengthened waiting considerably [@nah2004study; @galletta2004web]. A controlled study of fixed delays from 0 to 12 seconds found modest, non-linear effects rather than a cliff [@galletta2004web]. Speed matters, but there is no universal two-second cliff.
:::

::: {.rule #MOV-039 grade="B"}
**After a failed or stalled request, switch quickly from a loading state to a plain error with a retry, and do not leave a spinner running.** Patience on a non-working link was short and shrank sharply on each later attempt, while feedback extended it [@nah2004study; @galletta2004web]. The figures come from a secondary account of one experiment.

*In LTF:* the `ErrorState` ("Something went wrong", "Try again") is the right destination; set TanStack Query retry and timeout settings so a lesson that cannot load reaches it within a few seconds rather than after a long series of silent retries. A widget chunk that fails to load already falls to `WidgetFallback`.
:::

### Perceived causality and the next frame

Google's threshold article for its web metrics cites two perception results that sharpen the 0.1 second category [@google2024web]. Michotte's work on perceived causality is cited for the finding that the sense that one event caused another holds up to about 100 ms and is lost beyond about 200 ms. Kaaresoja and colleagues are cited for the finding that visual feedback within 85 ms appeared simultaneous with a touch 75% of the time. Both are reported through the article, not read here. Together with Miller's control-activation category and Nielsen's instant limit, they say the same thing: the acknowledgment of an input must be on screen within roughly a tenth of a second, or the link between action and response weakens [@google2024web; @miller1968response; @nielsen1993response].

::: {.rule #MOV-040 grade="B"}
**Paint a visible response to every click, tap and key press within about 100 ms, even when the result takes longer.** Perceived causality and simultaneity research cited by the Core Web Vitals threshold work puts the window near 100 ms [@google2024web], consistent with Miller's control-activation category and Nielsen's instant limit [@miller1968response; @nielsen1993response]. The perception studies are known here only through a secondary summary.

*In LTF:* "Check answer" in `QuizBlock` disables and shows its pressed state on the frame of the click; `Checkbox` rows in `FlyPanel` tick on the frame of the tap; "Mark lesson complete" shows `loading` at once while the request runs.
:::

### What this means for Learn to Fly

LTF's interactions fall into five exchanges, and each gets its own expectation. Control feedback (every `Button`, `Checkbox`, `RadioGroup`, `Tabs` trigger and widget control): instant, within the next frame or two (MOV-040). Local answers (a quiz check computed in the client, a widget's "Quiz me" result): instant to well under a second, since no network is involved. Server acknowledgments (saving progress, recording an attempt, submitting a debrief that the server rescores): a pressed and loading state at once, a result within about a second in the common case, and a clear error with retry if it fails (MOV-037, MOV-039). Navigation (lesson to lesson, module to lesson): within the flow-preserving category, with the lesson title and first paragraph first (see the chapter on budgets). Long operations: none today.

Write these five as a short table in the client checklist, `.claude/skills/ltf-review/references/client.md`, so that a new feature is assigned to one of them and reviewed against it. Do not write "2 seconds" anywhere in the plan or the code comments as a user limit.

## Waiting, progress and loading

### Show that work is happening

Myers argued in 1985 that every system has operations that cannot finish instantly, and that a percent-done progress indicator, a graphic that fills as the task advances, is better than a static busy picture such as an hourglass, because it shows how fast the task is going and whether the program has crashed [@myers1985importance]. If the program crashes, an indicator that the program itself updates stops moving, so the indicator also proves the program is alive. He argued that indicators matter most for novices, who may panic and think the computer has crashed, and that people dislike idle waiting partly because they cannot plan another task when the wait has unknown length [@myers1985importance].

His experiment had forty-eight unpaid volunteers, mostly computer science graduate students with about a fifth computer novices, use two versions of a forms-based query system in which each query was followed by a delay either constant at 10 seconds or random from 1 to 17 seconds, with or without a progress indicator [@myers1985importance]. The preference for systems with progress indicators was highly significant, and a large majority of participants said they liked them. The source is an OCR scan with errors, so exact printed statistics from it are not repeated here. The experiment also failed to replicate an earlier finding that people prefer constant to variable response time: no significant preference appeared [@myers1985importance].

The design guidance is still current. Show progress as a graphic rather than a number when an exact value is not needed, because a graphic is quicker to read, implies that only an estimate is available and fits in a small space [@myers1985importance].

::: {.rule #MOV-041 grade="B"}
**Show a determinate progress indicator when the fraction of work done is known, and an indeterminate one, which claims no percentage, when it is not.** People strongly preferred systems with progress indicators, which also show that the program is alive [@myers1985importance]; Nielsen recommends running progress, or a generic busy indicator as a last resort, when the total is unknown [@nielsen1993response]. The preference evidence is one experiment with a computer-literate sample, measuring attitudes rather than performance.

*In LTF:* `ProgressBar` and `ProgressRing` show known fractions (lessons done in a module). The `Button` `loading` spinner and `Skeleton` are indeterminate, which is right for network requests whose length LTF cannot know. Never put a percentage on a lesson or widget load.
:::

### How the bar moves changes how long it feels

Harrison, Amento, Kuznetsov and Bell showed that the behavior of a progress bar changes perceived duration even when the real duration is identical [@harrison2007rethinking]. Twenty-two participants from two computer research labs compared nine progress functions, each 5.5 seconds long, shown in pairs: linear, early pause, late pause, slow wavy, fast wavy, power (accelerating), inverse power (decelerating), fast power and inverse fast power. There was a strong order effect: the first bar seen was judged faster in 376 of 990 comparisons (38%), the second in 262 (26%), with no preference in 352 (36%). Controlling for order, three functions were perceived as slower than linear (slow wavy, fast wavy and late pause, the ones with pauses near the end), four were close to linear, and two, power and fast power, both accelerating toward the end, were perceived as faster [@harrison2007rethinking]. An early pause was about as acceptable as linear.

The authors read this through duration neglect and peak-and-end effects: people judge an experience by its salient moments and its end. Their design suggestions: leave bars alone for processes with stable known progress; for variable processes, avoid late pauses; put slow or variable stages first, since users tolerate stalls at the start better than at the end [@harrison2007rethinking]. The study is small, the bars short, and no independent replication was found; a follow-up by the lead author used 5 and 15 second bars and found similar visual effects at both lengths [@harrison2010faster].

::: {.rule #MOV-042 grade="B"}
**Map a progress bar to real work, order variable stages first, and never let it stall near the end.** Bars that paused near the end felt slower and bars that accelerated toward the end felt faster, in a paired-comparison study of identical durations [@harrison2007rethinking]. The study used 5.5 second bars and a lab sample, and has not been independently replicated.

*In LTF:* if a future multi-step operation (an offline module download, an import) shows a bar, it fills from real progress; if one stage is slow and unpredictable, it runs first. A bar never sits at 99%.
:::

### Visual augmentations, and where they stop being honest

Harrison, Yeo and Hudson then changed how bars look rather than how they move [@harrison2010faster]. A pulsating fill whose frequency increased was preferred over constant or decreasing pulsation. Ribbing that moved backwards, against the direction of progress, was significantly preferred over still or forward ribbing (p < 0.001), with backwards decelerating ribbing preferred most; the authors explain it by induced motion, motion judged relative to its surroundings. In a method-of-adjustment test with 16 participants, a 5 second solid bar felt equal to a 5.61 second ribbed bar (12.2% longer) and a 15 second bar to a 16.75 second ribbed bar (11.7% longer), a significant effect; the abstract summarizes it as an 11% reduction in perceived duration [@harrison2010faster]. The four experiments were small, with young participants (mean ages 19 to 23), short bars and one lab, and the measure is perceptual, not abandonment [@harrison2010faster].

The authors are explicit that ribbed bars appear faster when in fact they are not [@harrison2010faster]. That is where the ethical line sits. Making a real wait feel better is service; making a stalled process look like it is progressing is deception. A bar that accelerates toward the end because the work really accelerates is honest; one scheduled to accelerate regardless of the work is a dark pattern, and Part XIX, Decisions, Persuasion and Dark Patterns, governs it.

::: {.rule #MOV-043 grade="B"}
**Treat perceptual tricks for waits as polish worth about a tenth of perceived duration, used only after the wait itself has been shortened, and never to disguise a stalled process.** Backwards-moving ribbing reduced perceived duration by roughly 11% in small lab studies [@harrison2010faster]; accelerating progress feels faster [@harrison2007rethinking]. The gain is modest, and a schedule that does not reflect real work misleads.

*In LTF:* the order of effort is: avoid the wait (preload, cache, smaller chunks), then show honest feedback, then tune perception. LTF's `shimmer` is a quiet indeterminate cue; it does not need ribbing.
:::

### The psychology of waiting lines

Maister's essay on queues in restaurants, airports and clinics frames satisfaction as perception minus expectation, and offers eight propositions [@maister1985psychology]. Occupied time feels shorter than unoccupied time. People want to get started. Anxiety makes waits seem longer. Uncertain waits are longer than known, finite waits. Unexplained waits are longer than explained waits. Unfair waits are longer than equitable waits. The more valuable the service, the longer the customer will wait. Solo waits feel longer than group waits. A second law, "It's hard to plan catch-up ball", observes that a customer told a long wait and served early is happier than one told a short wait who then waits longer [@maister1985psychology].

The essay is observation and craft, with no experiment; Maister says the propositions are not exhaustive and that tolerance varies with culture and setting [@maister1985psychology]. Some propositions have been tested piecemeal with mixed results that this book has not examined. The propositions are best used as prompts for honest design, not as laws, and for waits of a few seconds the subtle ones matter less than getting out of the way.

::: {.rule #MOV-044 grade="C"}
**Tell the learner what is loading, and show useful content at once while the rest arrives.** Uncertain and unexplained waits feel longer, and people want to get started [@maister1985psychology]; feedback extends patience [@nah2004study]. Maister's propositions are observational, and occupying time must not become a way to hide slowness.

*In LTF:* the widget `LoadingRegion` already names what is loading ("Loading {title}") for screen readers; show the same words visibly inside the `Skeleton` when a widget takes more than a second or two. Render the lesson title, objectives and first paragraph before any widget chunk resolves.
:::

::: {.rule #MOV-045 grade="C"}
**Make confirmation of a saved result unmistakable, because an uncertain learner experiences the wait as longer and may repeat the action.** Anxiety lengthens waits [@maister1985psychology]; delayed feedback leads users to think a page is broken and repeat clicks [@google2024web]. A beginner who is unsure whether a challenge was recorded is the anxious waiter in Maister's sense.

*In LTF:* after "Finish and debrief" and the debrief submission, the result card with the `TierBadge` is itself the confirmation; if the save fails, the "Not saved" message in `DebriefForm` must be as prominent as the result. A `Toast` alone is not enough confirmation for a scored attempt.
:::

### Skeletons, spinners and the short wait

Nielsen warns against decorating short waits: for operations of about 2 to 10 seconds a full percent-done indicator can be excessive and cause distracting screen changes [@nielsen1993response]. The same logic applies below a second, where any indicator that flashes on and off draws attention to a delay that would otherwise pass unnoticed [@harrison2007rethinking]. That argues for a short delay before an indicator appears, so that fast responses show nothing but the result.

A skeleton is a placeholder shaped like the content. It promises the layout (and avoids the shift when content arrives) and it shows that something is coming. Its shimmer is decorative motion; under reduced motion it should stop, which LTF's does.

::: {.rule #MOV-046 grade="C"}
**Delay a loading indicator by a few hundred milliseconds so that fast responses show only the result, and keep any indicator that does appear on screen long enough not to flicker.** A flashing indicator draws attention to a delay that would otherwise pass unnoticed, and full indicators for short waits cause distracting screen changes [@nielsen1993response; @harrison2007rethinking]. The specific delay is a convention.

*In LTF:* `PageSkeleton` and the `ProtectedRoute` skeleton appear only if the query has not resolved after a short delay (roughly a third of a second); content cached by TanStack Query renders without any skeleton.
:::

::: {.rule #MOV-047 grade="C"}
**Give every indeterminate indicator a text label that survives reduced motion, so that a frozen spinner never reads as a crash.** Novices are the most likely to mistake a still display for a crash [@myers1985importance]; reduced motion removes the movement that signals life [@w3c2024wcag]. A label carries the message without motion.

*In LTF:* the global reduced-motion rule stops `animate-spin` and `animate-pulse` after one iteration, so the `Button` `Loader2` and the `AppLoading` logo become still images. Add visible text ("Saving", "Loading the course") beside each, and make `AppLoading` say what it is waiting for.
:::

### What this means for Learn to Fly

LTF has the components for honest waiting and needs to use them more deliberately. `Skeleton` (shaped placeholders, shimmer that stops under reduced motion) and `LoadingRegion` (one announcement for screen readers) are right. The landing page rendering from static fallback data while the API loads is the best possible wait: none at all. The gaps are small. Indicators appear immediately rather than after a short delay (MOV-046). `AppLoading` is an anonymous pulsing logo, the hourglass Myers argued against, and it becomes a static logo under reduced motion (MOV-047). The widget skeleton is labeled for screen readers but not visibly (MOV-044). And a failed request can sit in silent retries before reaching `ErrorState` (MOV-039).

None of LTF's operations needs a determinate bar today. If one is added, MOV-041 to MOV-043 apply, and the ethics of perceived duration are a review item rather than a tuning opportunity.

## Performance budgets and field measurement

### The Core Web Vitals

Core Web Vitals are the subset of Google's Web Vitals that the Chrome team says apply to all web pages and should be measured by every site owner [@google2024web]. They cover loading, interactivity and visual stability, with "good" thresholds as follows. Largest Contentful Paint (LCP), measured from when the page starts loading, at 2.5 seconds or less. Interaction to Next Paint (INP) at 200 milliseconds or less. Cumulative Layout Shift (CLS) at 0.1 or less. A page passes when it meets all three at the 75th percentile of page loads, with mobile and desktop segmented separately. INP became stable in 2024, replacing First Input Delay [@google2024web].

INP observes the latency of all click, tap and keyboard interactions during a visit and reports a single value, usually the worst. Each interaction has three parts: input delay, processing duration, and presentation delay until the next frame is painted. "Good" is at or below 200 ms, "needs improvement" up to 500 ms, "poor" above 500 ms. The rationale given is that delayed feedback makes users think the page is broken and repeat their clicks [@google2024web].

### How the thresholds were chosen

The threshold article is unusually open about method [@google2024web]. Thresholds should reflect a high-quality experience grounded in perception and HCI research, and must be achievable: at least 10% of origins in real-world Chrome data must meet "good", and "poor" is set so that the worst 10 to 30% of origins fall into it, unless research suggests otherwise. For INP, the article says research points to 100 ms as ideal and that 200 ms was chosen for achievability; at 200 ms, on May 2022 data, 56% of phone origins and 96% of desktop origins passed. For LCP, 1.5 and 2 seconds were judged not consistently achievable, and 2.5 seconds was chosen, which 42% of phone and 51% of desktop origins met on April 2020 data [@google2024web].

So "good" means what a large share of real sites can reach, not a proven human optimum, and the INP threshold is explicitly weaker than the research ideal. The metrics belong to one vendor, which publishes lifecycle rules (stable metrics change at most once a year but can be retired), and no independent study located for this book tests whether passing them predicts task success or learning [@google2024web]. They are still the best available common yardstick for field performance, and they are measured the right way: from real users, at a high percentile, by device class.

::: {.rule #MOV-048 grade="C"}
**Adopt LCP, INP and CLS as LTF's field performance budget, measured from real users at the 75th percentile, separately for mobile and desktop, and cite the current definitions with their date.** The metrics and thresholds are the Chrome team's public standard, combining perception research with an achievability criterion, and they stress field over lab data [@google2024web]. The thresholds are pragmatic, vendor-defined and revisable, and have no tested link to learning outcomes.

*In LTF:* the plan's performance section in `v1.md` records the three thresholds with the date of the web.dev page they came from, and the review checklist links to it.
:::

### Measure in the field, not only in the lab

The vitals page says lab measurement does not replace field measurement [@google2024web]. A Lighthouse run on a developer laptop tells you about one load on fast hardware; it says nothing about INP on a widget during a real lesson on a mid-range phone. LTF currently measures neither: there is no web-vitals library or `PerformanceObserver` in `src/`, so the only performance guard is the bundle check.

::: {.rule #MOV-049 grade="C"}
**Collect LCP, INP and CLS from real sessions, tagged with route and device class, and review the 75th percentile and the worst routes regularly.** Field data at a high percentile is the basis of the Core Web Vitals assessment [@google2024web], and delay effects are spread across the distribution rather than concentrated at one cutoff [@galletta2004web]. Collection must respect the product's privacy commitments.

*In LTF:* add the small `web-vitals` library, within what the `/privacy` page commits to, send route pattern (for example `/learn/:moduleSlug/:lessonSlug`, never the learner's identity), metric, value and device class to a server endpoint validated with a Zod schema, and add a dashboard query. Tag INP with the widget name when the interaction target is inside a `WidgetFrame`.
:::

### Interaction responsiveness on an interactive site

LTF is an interaction-heavy product. Lessons contain quizzes and widgets; challenges contain checklists, a stopwatch, a rubric and a live score preview. INP will be dominated by the heaviest of these interactions, because it reports roughly the worst one [@google2024web]. The research ideal for the next painted frame is 100 ms, and the categories from the response-time chapter say the same [@google2024web; @nielsen1993response].

::: {.rule #MOV-050 grade="C"}
**Set LTF's internal INP target at 100 ms for lesson and challenge interactions, stricter than the public 200 ms threshold, and treat 200 ms as the line that must never be crossed at the 75th percentile.** The threshold article identifies 100 ms as the research ideal and 200 ms as an achievability compromise [@google2024web]; feedback near 100 ms preserves perceived causality and the feeling of instant response [@google2024web; @nielsen1993response]. The stricter target is a product decision for a divided-attention audience.

*In LTF:* the expensive handlers are known: widget input that rerenders a large SVG (the PFD), the debrief rubric recomputing the score preview, and the `ChallengesPage` filters recomputing the grid. Each should paint its immediate state change first and defer heavy work (with `startTransition` or a deferred value) so the next frame is cheap.
:::

### Layout stability for a reading product

CLS measures unexpected layout movement [@google2024web]. For a lesson page it is the most learner-visible of the three: a widget chunk that loads into a placeholder of the wrong height pushes the paragraph the learner is reading down the screen. LTF reserves space with `Skeleton className="h-72"` for every widget, whatever its real height. A widget taller or shorter than 288 px shifts the text below it when it arrives.

::: {.rule #MOV-051 grade="C"}
**Reserve the final size of every late-loading element (widgets, images, embeds) so that nothing the learner is reading moves when it arrives.** CLS of 0.1 or less is the stability threshold [@google2024web]; a shift while reading is unexpected motion of a large area, the kind most likely to disorient [@head2015designing]. The threshold is a vendor standard.

*In LTF:* give each widget in the registry a known aspect ratio or minimum height and use it for its `Skeleton` in `WidgetBlock.tsx` instead of the fixed `h-72`. Lesson images need `width` and `height` attributes too; `YouTubeEmbed` reserves `aspect-video`, which is right.
:::

### Loading the first meaningful content

LCP rewards getting the main content on screen. On a lesson page that is the title and the first paragraph, not the widget halfway down [@google2024web]. Maister's "people want to get started" gives the human reason for the same priority [@maister1985psychology]. LTF lazy-loads every page as its own chunk and every widget as its own chunk, and its build fails if the initial JavaScript that `index.html` loads exceeds 250 KB gzipped (`scripts/check-bundle-size.ts`). Lesson content is cached by TanStack Query with a content stale time, so returning to a lesson can render at once.

::: {.rule #MOV-052 grade="C"}
**Render the lesson's title, objectives and first paragraph before any widget or below-the-fold media, and preload the next lesson's data and route chunk when the learner reaches the end of the current one.** LCP measures the arrival of the main content [@google2024web]; showing something useful at once shortens the felt wait [@maister1985psychology]; the cheapest wait is the one avoided [@harrison2010faster]. Prefetching must stay within data and privacy budgets.

*In LTF:* keep the 250 KB initial JavaScript budget in `check-bundle-size.ts`. Add a prefetch of the next lesson's query and lazy route module when the completion panel ("Finished reading and trying the questions?") scrolls into view, so "Next" feels instant.
:::

### What this means for Learn to Fly

LTF has a build-time budget and no field measurement. Add field measurement (MOV-049) before tuning anything, then set the targets: LCP within the "good" threshold on mobile at the 75th percentile for the landing, curriculum and lesson routes; INP at 100 ms internally and never above 200 ms (MOV-050); CLS within the threshold on lesson pages, which requires per-widget placeholder sizes (MOV-051). Record the thresholds and their source date in `v1.md` (MOV-048) with a Decision Log entry, since they add to the plan's performance section. The prefetch on lesson completion (MOV-052) is the single change most likely to make the course feel fast, because lesson-to-lesson navigation is the exchange every learner repeats.

## Motion sensitivity and reduced motion

### Who is affected

A vestibular disorder is, in Val Head's definition, "any disease, damage, or injury to the vestibular system", the inner-ear and brain system that controls balance and eye movements; it affects people of all ages with widely varying severity, and animation can also affect people with epilepsy and migraine sensitivities [@head2015designing]. Head cites vestibular.org figures of about 8 million American adults reporting a chronic balance problem and a further 2.4 million a chronic dizziness problem, and notes that the share of any particular audience is hard to estimate [@head2015designing].

The population evidence is broader. Agrawal and colleagues analyzed the 2001 to 2004 National Health and Nutrition Examination Survey and estimated that about 35.4% of US adults aged 40 and older, about 69 million people, had some vestibular dysfunction, many without knowing it [@agrawal2009disorders]. The figures reach this book through secondary accounts (the sample was more than 5,000 adults, given as 5,086 in an abstract-level summary). Dysfunction was defined by a modified Romberg test of standing balance on firm and foam surfaces, not by diagnosis, and the study measured nothing about sensitivity to screen motion [@agrawal2009disorders]. The 35.4% is the share with a measurable balance deficit, not the share who will be made ill by animation.

::: myth
**"About a third of adults get dizzy from web animation."** The one-third figure is the prevalence of measurable vestibular balance dysfunction among US adults aged 40 and over in a national survey, defined by a standing balance test [@agrawal2009disorders]. The study did not measure reactions to screen motion. It supports a conservative motion policy as a mainstream concern, not a specific count of affected users; the design rules rest on the standard and on practitioner evidence [@w3c2024wcag; @head2015designing].
:::

### What triggers symptoms

Head interviewed two people with vestibular conditions and reviewed the sites they found problematic, among them large areas of motion, parallax effects with foreground and background at different speeds, a carousel that flicked back to the first picture with no pause control, scrolljacking, horizontal scroll triggered by vertical scrolling, and 3D zoom transitions that covered a large virtual distance quickly [@head2015designing]. From these she identified three factors. Relative size: large motion relative to the screen is most likely to trigger symptoms; a small button with a 3D rotation probably will not, a full-screen wipe probably will, and animating only opacity, color and blur is unlikely to be a problem. Mismatched direction and speed: exaggerated parallax and scrolljacking are highly likely to trigger symptoms, as is motion in a different direction from scrolling or not tied to scroll speed. Distance covered: animation that crosses a large perceived virtual distance can trigger symptoms even when nothing changes size [@head2015designing].

The evidence is two interviews and a handful of sites, synthesized with general principles, and no controlled studies of web animation parameters and symptoms were found for this book [@head2015designing]. The factors are consistent with WCAG's Understanding document, which singles out movement beyond scrolling triggered by scrolling, such as parallax [@w3c2024wcag]. Head's interviewees did not want all interface animation removed; she argues that animation still reduces cognitive load and prevents change blindness when used well [@head2015designing].

::: {.rule #MOV-053 grade="C"}
**Keep interface motion small relative to the viewport, matched in direction and speed to what the learner is doing, and short in perceived distance; never use parallax, scrolljacking or scroll-triggered motion.** These are Head's three trigger factors from interviews with people with vestibular conditions [@head2015designing], and the WCAG Understanding document names scroll-triggered movement as a vestibular trigger [@w3c2024wcag]. The factors are practitioner synthesis, not experiment.

*In LTF:* LTF already has none of the high-risk patterns; the landing page's seven bands are static. The largest motion is the 320 px `Drawer` sliding in from the edge on phones, which is user-triggered and edge-anchored; keep it as the upper bound.
:::

### What WCAG requires

WCAG 2.2, a W3C Recommendation dated 12 December 2024, has three success criteria on motion [@w3c2024wcag]. SC 2.2.2 Pause, Stop, Hide (Level A): moving, blinking or scrolling information that starts automatically, lasts more than five seconds and is shown alongside other content needs a mechanism to pause, stop or hide it, unless it is essential; auto-updating information needs a way to pause, stop, hide or control its frequency. SC 2.3.1 Three Flashes or Below Threshold (Level A): nothing flashes more than three times in any one second, unless the flash is below the general and red flash thresholds. SC 2.3.3 Animation from Interactions (Level AAA): motion animation triggered by interaction can be disabled, unless it is essential to the functionality or the information conveyed [@w3c2024wcag].

The definitions matter. Motion animation is the addition of steps between conditions to create the illusion of movement or a smooth transition; changes of color, blur or opacity that do not alter perceived size, shape or position are not motion animation, and an element that appears instantly is not animated. Essential means that removing it would fundamentally change the information or functionality, and it cannot be achieved another way. SC 2.3.3 covers animation the user's interaction starts, SC 2.2.2 animation the page starts, and one animation can fail both [@w3c2024wcag]. The standard is consensus, not experiment, and 2.3.3 is at the strictest conformance level, though honoring the preference is cheap [@w3c2024wcag].

::: {.rule #MOV-054 grade="C"}
**Meet WCAG 2.3.3 even though it is Level AAA: every non-essential motion animation stops or becomes a non-motion change when reduced motion is requested.** SC 2.3.3 requires that interaction-triggered motion can be disabled unless essential [@w3c2024wcag]; a large minority of adults have measurable vestibular dysfunction [@agrawal2009disorders]. The criterion is consensus; the cost of meeting it is low.

*In LTF:* the global rule in `index.css` sets animation and transition durations to 0.01 ms and iteration counts to 1 under `prefers-reduced-motion: reduce`, and components add `motion-safe:` to their animations. That covers every CSS animation. JavaScript animation is not covered by the CSS rule and must check `useReducedMotion()`, as `useTween`, `TrafficPattern` and `VorCdi` do and as `LessonParts.tsx`'s smooth scroll does not (MOV-023).
:::

::: {.rule #MOV-055 grade="C"}
**Replace a removed motion with an instant change or a fade, which WCAG does not count as motion, rather than with nothing.** Opacity and color changes are outside WCAG's definition of motion animation [@w3c2024wcag], and the reduced-motion preference asks for removal of non-essential movement, not of all visual change [@w3c2024wcag]. A state change still needs to be visible.

*In LTF:* under reduced motion, `rise-in`, `pop-in` and `slide-in-*` could keep their opacity component and drop their transform, instead of all becoming instant. A `reduced` variant of each keyframe that animates opacity only would do it.
:::

### The auto-starting cases

Two LTF animations start without interaction and loop: `shimmer` on `Skeleton` (1.4 s, infinite) and `warning-pulse` on the random-event alert in `FlyPanel` and the warning state in `AngleOfAttack` (1.2 s, infinite). A skeleton normally disappears within a few seconds, so it rarely reaches the five-second limit of SC 2.2.2; a slow load can push it past. The warning pulse is a ring that expands to 8 px and fades; its purpose is to draw the eye to an alert, and it lasts until the learner acts. Under reduced motion both run once and stop.

::: {.rule #MOV-056 grade="C"}
**Stop any looping animation after about five seconds unless the learner can pause it, and stop it at once under reduced motion.** SC 2.2.2 requires a pause, stop or hide mechanism for automatic motion lasting more than five seconds alongside other content [@w3c2024wcag]; continuous looping motion is decorative after its first cycles [@harrison2010faster]. The five-second limit is normative.

*In LTF:* `Skeleton` shimmer stops after a few cycles and the visible loading label (MOV-047) takes over. `warning-pulse` on the `FlyPanel` alert stops after a few pulses, leaving the `border-4 border-warn` frame, which already marks the alert without motion. Both pulses are well under the flash limit of SC 2.3.1; keep any future alert slower than three cycles a second.
:::

### An in-app setting

The operating system preference is the standard mechanism, and the techniques WCAG lists as sufficient include the CSS media query (C39), the same query read in script (SCR40) and letting users set a preference [@w3c2024wcag]. Head recommends a visible control to reduce or stop animation globally, alongside respecting browser preferences [@head2015designing]. Many learners will never have found the operating system setting. A learner using a simulator, itself a source of visually induced motion, may be more sensitive than average on a given day, and needs a way to turn LTF's motion down without leaving the browser.

::: {.rule #MOV-057 grade="C"}
**Offer a persistent in-app "Reduce motion" setting that defaults to the operating system preference and can override it.** Letting users set a preference is a sufficient technique for SC 2.3.3, and practitioner guidance recommends a visible global control [@w3c2024wcag; @head2015designing]. The setting complements the media query; it does not replace it.

*In LTF:* add a "Motion" choice (System, Reduced, Full) to Preferences on `/account` next to `ThemeToggle`, store it like `ltf-theme`, apply it before first paint with the same inline script in `index.html` as a `data-motion` attribute, and make `useReducedMotion()` and the global CSS rule read the attribute as well as the media query.
:::

### What this means for Learn to Fly

LTF's reduced-motion support is better than most products': a global CSS kill switch, `motion-safe:` on component animations, and JavaScript widgets that check the preference and substitute stepped alternatives. Theme switching never animates page colors, a deliberate choice recorded in `ThemeToggle.tsx`. Three changes complete the policy. Fix the script-passed smooth scroll in `LessonParts.tsx` (MOV-023). Add the in-app setting (MOV-057), which also needs a `CHANGELOG.md` line because it is learner-facing. Bound the two looping animations (MOV-056). Then add an end-to-end check in `e2e/` that loads a lesson, a challenge and the Fly panel with `reducedMotion: 'reduce'` emulated and asserts that no element has a running animation after a second.

## Motion for a divided-attention screen

### The second-screen case

Fly mode (`FlyModePage`, in `FlyModeLayout`) is built for a learner who is flying in the simulator and glancing at a phone, tablet or second monitor beside it. The rest of this Part assumes a learner looking at the page. Here the learner is mostly looking elsewhere, and every motion question changes sign. A transition that helps a watching learner track a change is one that a glancing learner will usually miss. An animation that plays once and disappears is the worst case: it carries information only to someone who happened to look during it [@tversky2002animation]. Motion at the edge of vision pulls the eye, which is useful for a real alert and harmful for anything else.

None of the sources in this Part studied a simulator companion screen, so the rules in this chapter are applications of general findings and are graded C. The human-factors evidence on alerting and divided attention in cockpits belongs to Part XVI, Skill, Simulation and the Cockpit, and Part VII, Perception and Attention; the rules here are limited to timing and motion.

### Show states, not processes

Tversky and colleagues found animation hard to perceive when it is fast or complex, and argued that people conceive many continuous processes as discrete steps [@tversky2002animation]. A learner glancing at Fly mode for a second sees one frame of whatever is on screen. If that frame is mid-transition, it is a frame of nothing. The rule for a glance is that every frame must be a complete, readable state.

::: {.rule #MOV-058 grade="C"}
**In Fly mode, show every change as an immediate new state, with no transition the learner must watch to understand.** Animations carry information only to someone who perceives them at the right time and speed [@tversky2002animation]; the benefit Bederson and Boltman found for glides was a better spatial map built over repeated use, not faster reading of a new value [@bederson1999animation]. This is an application to a divided-attention context, not a tested result.

*In LTF:* in `FlyPanel large`, a ticked step changes to `border-go bg-go-tint` at once; the `Stopwatch` digits update every 250 ms in tabular `readout` mono, so the width never jitters; nothing slides or fades in Fly mode except the alert.
:::

### Acknowledge every tap, unmistakably

Miller's principle that acknowledgment comes before results [@miller1968response] matters most when the learner looks away immediately after tapping. A learner ticks "Steps" items in `FlyPanel` with a thumb while holding a controller, and looks back at the sim before the screen has finished changing. Card and colleagues' immediate-response constant says that a response arriving after about a second with no cue is likely to be missed by a user whose attention is elsewhere [@card1991information]. The confirmation must happen on the frame of the tap and must be large enough to read in peripheral vision on the next glance.

::: {.rule #MOV-059 grade="C"}
**On the Fly mode screen, confirm every tap on the next frame with a large, persistent change of state that can be read at a glance.** Acknowledgment of control activation belongs in the fastest response category [@miller1968response; @nielsen1993response], and a cue that arrives late is easily missed under divided attention [@card1991information]. The size and persistence requirement is a judgment.

*In LTF:* the full-row tick state in `FlyPanel` (`border-go bg-go-tint`, check fill) is the right kind of confirmation; keep it free of any transition. A `Toast` is not a Fly mode confirmation: it is small, in a corner and auto-dismisses after 6 seconds.
:::

### One kind of motion: the alert

The random-event alert in `FlyPanel` is the one place where LTF uses motion to pull attention from somewhere else. It arrives with two beeps from Web Audio, a `role="alert"` region with a 4 px `border-warn` frame on `bg-warn-tint`, large bold text, and `warning-pulse`, a ring that expands to 8 px and fades every 1.2 seconds. That is a deliberate use of motion as an alerting channel, combined with sound and a static visual marker, and it is the right design: motion is the strongest peripheral cue, sound reaches a learner whose eyes are on the sim, and the static frame carries the message once the learner looks. The pulse animates a ring rather than the text, so contrast holds throughout, which the token comment records.

Two refinements follow from the earlier chapters. The pulse should stop after a few cycles (MOV-056), because once the learner has looked, continued motion only competes with the sim. And because motion is reserved for this alert, nothing else on the Fly mode screen may move, or the alert loses its meaning.

::: {.rule #MOV-060 grade="C"}
**Reserve motion on the Fly mode screen for alerts that need the learner's attention, always pair it with sound and a static visual marker, and stop it once it has done its job.** Motion attracts attention to whatever moves, including the irrelevant [@tversky2002animation]; looping automatic motion needs a stop mechanism after five seconds and must stay below the flash threshold [@w3c2024wcag]. The pairing with sound is a design decision for a learner whose eyes are on another screen.

*In LTF:* keep the beep, the `border-4 border-warn` frame and `warning-pulse` together on the `FlyPanel` alert; under reduced motion the frame and sound remain and the pulse runs once. No other element in `FlyModeLayout` uses an `animate-*` class.
:::

### Quiet waiting on the companion screen

If anything on the Fly mode screen has to wait for the network, the indicator should be small and still. A shimmering skeleton or a spinning icon in peripheral vision is a motion cue with no message for the pilot. Harrison and colleagues' augmented bars were designed to be watched [@harrison2010faster]; a learner flying is not watching. Fly mode should load everything it needs before the learner starts and hold it locally. LTF already stores challenge flight state and debrief drafts in session or local storage (`features/challenges/storage.ts`), so the screen does not depend on the network during the flight.

::: {.rule #MOV-061 grade="C"}
**Load everything Fly mode needs before the flight starts, and use a still, labeled indicator for any wait that remains.** Visible feedback reassures during waits [@myers1985importance], but looping motion competes for attention [@tversky2002animation]; perceptual tuning of indicators assumes the viewer is watching [@harrison2010faster]. The application to a companion screen is a judgment.

*In LTF:* `FlyModePage` should render from the challenge data TanStack Query already cached on `ChallengePage`; if it must fetch, it shows "Loading the challenge" as text without a shimmer. Saving at "Finish and debrief" can wait until the learner is back on the screen.
:::

### Keeping the screen alive

A companion screen that dims or locks mid-flight is the longest wait of all. `FlyPanel` offers "Keep the screen on while flying" through the Screen Wake Lock API where the browser supports it. This is performance in the sense of this Part: it removes a wait (unlocking a phone with one hand) at the moment the learner can least afford it.

::: {.rule #MOV-062 grade="C"}
**Keep the Fly mode screen awake while a flight is in progress, with the learner's consent, and say plainly when the device does not support it.** Removing a wait is better than managing it [@harrison2010faster; @maister1985psychology]; for a divided-attention user, a screen that has to be woken is a delay at the worst moment. The rule is an application, not a finding.

*In LTF:* keep the wake-lock toggle in `FlyPanel`, re-request the lock when the page becomes visible again (browsers release it when the tab is hidden), and show "This browser cannot keep the screen on" where `wakeLock` is unavailable.
:::

### What this means for Learn to Fly

Fly mode needs its own motion policy, stricter than the rest of the product, and it should be written into the Fly mode section of `v1.md` and the comment at the top of `FlyModeLayout`. The policy is short: no transitions (MOV-058); immediate, large, persistent confirmation of taps (MOV-059); motion reserved for the random-event alert, paired with sound and a static frame, and bounded in time (MOV-060); everything loaded before the flight (MOV-061); the screen kept awake (MOV-062). The current `FlyPanel` already meets most of it. Verify two details in code review: that the `BetaBanner`, which `FlyModeLayout` shows above everything, has no motion when dismissed, and that `Checkbox` inside the large `FlyPanel` shows its tick without the 150 ms color transition.

## Decision list and review checklist

### Decisions this Part settles for Learn to Fly

The decisions below are stated for the product as the code stands. Each names the rules it rests on; the grades on those rules say how firm each decision is.

#### Purpose and vocabulary

1. Every animation has a named purpose and role, recorded in the pull request and, for tokens, in a one-line comment beside each keyframe in `tokens.css`. Engagement, hooking and persuasion are not accepted purposes (MOV-001, MOV-002).
2. LTF adds no route or page transitions. Navigation is instant; orientation comes from `RouteAnnouncer`, `ScrollRestoration`, breadcrumbs and headings (MOV-001, MOV-018).
3. Motion never carries a fact alone; every animated end state shows the full information as text, a `readout` or the widget description (MOV-004).
4. One thing moves at a time on a page. A playing widget suppresses other optional motion (MOV-005).
5. Character motion is limited to `tier-pop` and comparable achievement moments; controls keep 150 ms color transitions and nothing more (MOV-006, MOV-008, MOV-017).

#### Easing and timing tokens

6. Add an `ease-in-out` token and a roughly one-second tracked-move preset for relocations the learner must follow; keep `ease-out` and `ease-in` for entrances (200 ms) and exits (150 ms) only (MOV-012, MOV-013, MOV-014).
7. No overshooting curve or spring is allowed on any element that encodes a value; `tier-pop` keeps its overshoot because a badge's size encodes nothing (MOV-016).
8. Every script animation runs on elapsed time, as `useTween` and the widget loops already do (MOV-015).
9. Pressed and checked states appear on the frame of the input without transition (MOV-017, MOV-040).
10. Interface animations never block input; a new input cancels or completes a running transition (MOV-011).

#### Transitions and widgets

11. Widgets animate persistent marks to new positions with stable keys, using direct or at most two-stage transitions that prefer translation (MOV-019, MOV-020, MOV-021).
12. Views that pan or zoom over a fixed layout (the sectional chart, future airport diagrams) glide for about a second (MOV-018).
13. Overlays grow from their trigger with small, local motion, as `Popover`, `DropdownMenu`, `Dialog` and `Drawer` already do (MOV-022).
14. Smooth scroll is used only over short distances and never under reduced motion; `LessonParts.tsx` is fixed to pass `'auto'` when reduced motion is on (MOV-023).
15. Instruments ease only between set states; frame-loop widgets map values directly and bypass the `Gauge` CSS transition; headings interpolate the short way round; static instrument detail is kept out of the per-frame path (MOV-030, MOV-031, MOV-032, MOV-033).
16. Under reduced motion, instruments jump and playback steps, following the existing `useTween`, `TrafficPattern` and `VorCdi` patterns (MOV-034).

#### Teaching with motion

17. Animation or video is used for procedural and motor content; abstract relationships default to annotated static diagrams or interactive widgets (MOV-024, MOV-025).
18. Every playback widget has play, pause, step and replay, annotates where to look, and in "Quiz me" mode asks for a prediction first (MOV-026, MOV-027, MOV-003).
19. LTF does not imitate the simulator's realistic motion; it shows what the sim cannot (MOV-028).
20. Affordance hints and demonstrations play once per learner, then become static (MOV-029).
21. Mechanical parts move mechanically, and direct manipulation keeps the dragged element under the pointer (MOV-009, MOV-010).
22. User-started changes are fast; system-started changes get a cue (MOV-007).

#### Response, waiting and loading

23. Interactions are assigned to five exchanges (control feedback, local answers, server acknowledgments, navigation, long operations), each with its own expectation, recorded in the client review checklist (MOV-035, MOV-036, MOV-037).
24. "2 seconds" is not written anywhere as a user limit; budgets are categories plus measured distributions, with attention to the slow tail (MOV-036, MOV-038).
25. Failed requests reach `ErrorState` with "Try again" within a few seconds, not after long silent retries (MOV-039).
26. Progress indicators are honest: determinate only for known fractions, never stalled near the end, never scheduled to look faster than the work (MOV-041, MOV-042, MOV-043).
27. Loading indicators appear only after a short delay; visible labels accompany every indeterminate indicator, including `AppLoading`, so a frozen spinner never reads as a crash (MOV-044, MOV-046, MOV-047).
28. Confirmation of a scored attempt is the result card itself, and a failed save is as prominent as a success (MOV-045).

#### Budgets and measurement

29. LCP, INP and CLS are LTF's field budget at the 75th percentile, by device class, recorded in `v1.md` with the source date and a Decision Log entry (MOV-048).
30. LTF adds real-user collection of the three metrics, tagged by route pattern, device class and widget, with no learner identity (MOV-049).
31. The internal INP target is 100 ms, with 200 ms as the line never crossed; heavy handlers paint their immediate state first (MOV-050).
32. Each widget has a known placeholder size so that `WidgetBlock` reserves the right space (MOV-051).
33. The 250 KB initial JavaScript budget stays; the next lesson is prefetched when the completion panel is reached (MOV-052).

#### Motion sensitivity

34. No parallax, scrolljacking, scroll-triggered motion or full-screen movement; the `Drawer` is the upper bound on motion size (MOV-053).
35. WCAG 2.3.3 is treated as required. The global CSS rule stays; every JavaScript animation checks `useReducedMotion()`; removed motion is replaced by an instant change or a fade (MOV-054, MOV-055).
36. Looping animations (`shimmer`, `warning-pulse`) stop after a few cycles and at once under reduced motion; nothing flashes faster than the WCAG limit (MOV-056).
37. A persistent in-app "Motion" setting (System, Reduced, Full) is added to `/account` Preferences, applied before first paint (MOV-057).

#### Fly mode

38. Fly mode has no transitions, confirms taps on the next frame with large persistent state changes, reserves motion for the random-event alert paired with sound and a static frame, loads everything before the flight and keeps the screen awake (MOV-058, MOV-059, MOV-060, MOV-061, MOV-062).

### Review checklist

Run these questions against any pull request that adds or changes an animation, transition, loading state, data fetch on a learner path, or performance budget. A "no" is a finding unless the pull request explains why the rule does not apply.

#### Purpose

- Does the pull request name what each new motion shows (a change of state, work in progress, or the thing taught)? (MOV-001)
- Is its role one of orientation, tracking, revealing, progress, feedback or teaching, rather than engagement or persuasion? (MOV-002)
- Is every fact the motion conveys also present in the end state, as text or a readout? (MOV-004)
- Is this the only thing moving on the screen while it runs? (MOV-005)
- Is any expressive or overshooting motion confined to an achievement moment? (MOV-006, MOV-008)

#### Timing and easing

- Is a user-started change fast, and does a system-started change have a cue? (MOV-007)
- Can the learner act during the animation, and does input cancel it? (MOV-011)
- Does a tracked relocation use ease-in-out for about a second, and does an entrance or exit use the `ease-out` or `ease-in` token at 200 or 150 ms? (MOV-012, MOV-013, MOV-014)
- Is the animation driven by elapsed time rather than frame count? (MOV-015)
- Does any curve with a y control value above 1 or below 0, or any spring, touch an element that encodes a value? (MOV-016)
- Do pressed and checked states appear without a transition? (MOV-017)

#### Transitions and widgets

- Do persistent marks move rather than redraw, with keys tied to what they represent? (MOV-019, MOV-020)
- Is the transition direct or two-stage, preferring translation, about a second per stage? (MOV-021)
- Does a pan or zoom over a fixed layout glide, and does a page or tab change not? (MOV-018)
- Does an overlay grow from its trigger with small motion? (MOV-022)
- Does any smooth scroll cover a short distance and respect reduced motion in script? (MOV-023)
- Is a live value mapped directly, and is easing used only between set states? (MOV-030)
- Do headings and other circular values interpolate the short way? (MOV-031)
- Does a dragged control move the instrument on the same frame, with a short catch-up? (MOV-032)
- Are static ticks, arcs and labels outside the per-frame render path? (MOV-033)
- Does the dragged element stay under the pointer, and does the widget move its parts as the real instrument would? (MOV-009, MOV-010)
- Under reduced motion, does the widget jump or step while keeping all its content? (MOV-034)

#### Teaching

- Is the animated content procedural or motor, or does the widget teach through interaction rather than motion? (MOV-024)
- Does every motion depict the thing taught? (MOV-025)
- Can the learner play, pause, step and replay, is the focus annotated, and does a prediction come first in quiz mode? (MOV-026, MOV-027)
- Does the process shown match the steps learners think in? (MOV-003)
- Does the animation show something the simulator cannot? (MOV-028)
- Does a hint or demonstration stop repeating after the first encounter? (MOV-029)

#### Response and waiting

- Which of the five exchanges is this interaction, and does it meet that exchange's expectation? (MOV-035, MOV-036)
- Is there a status cue for anything that can exceed about a second, and progress, estimate and cancel for anything near ten? (MOV-037)
- Has the slow tail been considered, not only the typical case? (MOV-038)
- Does a failed request reach a plain error with retry within a few seconds? (MOV-039)
- Is a visible response painted within about 100 ms of every input? (MOV-040)
- Is a determinate indicator used only for a known fraction, and is any bar honest and free of late stalls? (MOV-041, MOV-042, MOV-043)
- Does the wait say what is loading, and does useful content appear first? (MOV-044)
- Is a scored or saved result confirmed unmistakably, including on failure? (MOV-045)
- Is the indicator delayed so fast responses show none, and does it carry a text label that survives reduced motion? (MOV-046, MOV-047)

#### Budgets

- Does the change keep LCP, INP and CLS within the recorded field budget, and is it measured in the field? (MOV-048, MOV-049)
- Does a heavy handler paint its immediate state first, within the 100 ms internal target? (MOV-050)
- Is the final size of every late-loading element reserved? (MOV-051)
- Does the lesson's main content render before widgets, and does the initial bundle stay within 250 KB gzipped? (MOV-052)

#### Motion sensitivity

- Is the motion small, matched to the learner's action and short in perceived distance, with no parallax or scroll-triggered effects? (MOV-053)
- Does the motion stop, or become an instant change or a fade, under reduced motion, including in JavaScript? (MOV-054, MOV-055)
- Does any looping animation stop within about five seconds or offer a pause, and stay below the flash limit? (MOV-056)
- Does the change respect the in-app motion setting once it exists? (MOV-057)

#### Fly mode

- Is every Fly mode change an immediate state, and is every tap confirmed on the next frame with a large, persistent change? (MOV-058, MOV-059)
- Is motion on the Fly mode screen limited to the alert, paired with sound and a static marker, and bounded in time? (MOV-060)
- Is everything Fly mode needs loaded before the flight, and does the screen stay awake? (MOV-061, MOV-062)
