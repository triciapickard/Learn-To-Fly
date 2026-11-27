# Lane 24: Motion, time and performance in interfaces

Evidence notes for the Learn to Fly Design Knowledge Base. One section per source, in sources.json order.

## thomas1981illusion

Thomas, F. and Johnston, O. (1981). *Disney Animation: The Illusion of Life*. New York: Abbeville Press.

### Core claims

The book is a craft treatise by two of Disney's senior animators, written after decades of studio practice. Its central claim is that convincing movement is not a matter of drawing accuracy but of a small set of repeatable techniques that make the audience believe a drawn character has weight, intention and personality. Those techniques are usually summarized as twelve basic principles of animation, and the book organizes its account of Disney's process around them. It is a history and a teaching text in non-technical language, built on the authors' memory of what worked in the studio from the 1930s onward, not on controlled experiments.

### Specifics

A secondary account of the book (Wikipedia, "Twelve basic principles of animation", fetched this session) lists the twelve as: squash and stretch (deformation conveys weight and flexibility while volume stays constant in realistic work); anticipation (a preparatory movement readies the audience for an action); staging (placement, light and camera direct attention to what matters and strip unnecessary detail); straight ahead action and pose to pose (two ways of building a movement, often combined); follow through and overlapping action (loose parts keep moving after the main motion stops and move at different rates); slow in and slow out (more frames near the start and end of a motion, fewer in the middle); arcs (natural motion follows curved paths, mechanical motion is the exception); secondary action (supporting movement that adds life without pulling attention from the main action); timing (the number of frames an action takes sets its speed and conveys weight, mood and personality); exaggeration (pushing past literal reality, with restraint); solid drawing (volume and weight in forms); and appeal (the quality that makes a character interesting to watch).

Publication facts confirmed this session: first published by Abbeville Press in 1981, with the 1981 edition regarded as having the best image quality; a revised edition appeared in 1995 from Hyperion under the inverted title *The Illusion of Life: Disney Animation*. Open Library lists the 1981 first edition and a collector's edition from Abbeville. Page counts differ between catalogs, so I do not quote one.

The principles reach interface designers through intermediaries: Lasseter (1987) carries them into 3D computer animation and Chang and Ungar (1993) into user interfaces.

### Replication and criticism

There is nothing to replicate: the book states craft knowledge. Its authority comes from the quality of the films it explains and from the fact that generations of animators have used the vocabulary. Caveats from the secondary account: the principles were written for hand-drawn character animation, exaggeration needs restraint so it does not confuse the viewer, and secondary action should be dropped when it competes with the main action. Empirical work on interface animation (Tversky, Morrison and Bétrancourt 2002; Bederson and Boltman 1999; Heer and Robertson 2007, all in this lane) shows that attractive animation does not by itself improve comprehension, so craft quality is necessary but not sufficient evidence that an interface animation helps a learner. Treat the twelve principles as a source of hypotheses to test, not as proof.

### Implications for LTF

Three principles translate cleanly into a lesson and challenge app. Anticipation: a widget that is about to change (a gauge needle, a panel opening) should give a short cue before the change, so a beginner who is glancing between the sim and the browser is not surprised. Slow in and slow out: movement that eases rather than snapping reads as physical, which suits instrument-like widgets such as an airspeed needle or an attitude indicator, where the motion itself is part of the lesson. Staging: at any moment one thing should move, and the rest should stay still, so attention goes where the lesson wants it. Squash and stretch, exaggeration and appeal are mostly risky for a serious training tool: playful deformation on a checklist item would undercut trust.

For fly mode, where the learner is flying and glancing at the screen, the lesson of timing is to keep any change slow enough to be read and quiet enough not to pull the eye from the sim. Decorative animation belongs in the lesson-reading context, not in fly mode. Never use motion to carry information that is not also available statically.

Confirmed this session: Crossref has no record for the book; Open Library work OL2924612W (https://openlibrary.org/works/OL2924612W) lists Abbeville Press 1981 editions and ISBN 0896592332 for the collector's edition; Wikipedia pages "Disney Animation: The Illusion of Life" and "Twelve basic principles of animation" fetched for edition history and the list of principles. I did not read the book itself.

## lasseter1987principles

Lasseter, J. (1987). Principles of traditional animation applied to 3D computer animation. *ACM SIGGRAPH Computer Graphics*, 21(4), 35-44.

### Core claims

Lasseter argues that the arrival of reliable keyframe animation systems would let more people make computer animation and, unfortunately, more bad computer animation, much of it because users did not know the principles hand-drawn animators had used for over fifty years. The paper's abstract says it describes the principles of traditional two-dimensional hand drawn animation and their application to 3D computer animation, and that understanding them is essential to good computer animation and should also matter to the designers of the animation systems. It is a practitioner paper by a Pixar animator, with examples drawn from the films *Luxo Jr.* and *The Adventures of Andre and Wally B.*

### Specifics

The paper (full text read this session from a scanned copy) lists the principles it treats: squash and stretch, timing, anticipation, staging, follow through and overlapping action, straight ahead and pose-to-pose action (keyframing), slow in and out, arcs, exaggeration, secondary action, and appeal. Definitions it gives:

- Squash and stretch defines the rigidity and mass of an object by distorting its shape during an action; the rule is that, however much an object squashes or stretches, its volume stays constant. A hinged object like the lamp in *Luxo Jr.* can squash without deforming.
- Timing is the speed of an action and "gives meaning to movement". It reflects weight and size and can carry emotional meaning. He says the animator should spend enough time, but no more, on the anticipation, the action and the reaction, because too much time loses attention and too little means the movement finishes before the audience notices it. The faster the movement, the more important it is that the audience can still read it.
- Anticipation is the preparation for an action. The amount of anticipation affects the speed of the action that follows: if the audience expects something, the action can be much faster without losing them. His example is a zip-off in *Andre and Wally B.* where the action itself lasts only three or four frames, but the anticipation lasts long enough that the audience knows what is coming.
- Staging is presenting an idea so it is completely and unmistakably clear; he says only one idea should be seen by the audience at a time.
- Slow in and slow out concerns the spacing of the in-between frames between extreme poses; mathematically, he says, it refers to second and third order continuity of motion. In 3D systems it is achieved by adjusting the tension, direction or bias and continuity of splines, and he warns that splines can overshoot at extremes when there is a large change over few frames.

He makes a point that matters for software: designers of animation systems should understand the principles, because the tools shape what animators can easily do.

### Replication and criticism

This is expert opinion and craft description, with no experimental test. Its influence is enormous in the animation industry, and the principles became the standard vocabulary of computer character animation. Chang and Ungar (1993, this lane) explicitly adapt them to user interfaces, and later empirical HCI work (Tversky et al. 2002; Heer and Robertson 2007; Dragicevic et al. 2011) tests whether animated transitions actually help comprehension, with mixed results: motion that is well staged and eased helps in some tasks and not in others. The principles were developed for storytelling and character, so their transfer to information tasks is plausible but unproven in general.

### Implications for LTF

The most useful items are timing and anticipation as a pair. A transition should be slow enough to be followed and carry a cue that tells the learner it is about to happen, such as a highlight on the element that will change. Staging tells us to animate one thing at a time on a lesson page. Slow in and slow out gives a rule for easing curves on every moving widget. Lasseter's spline overshoot warning is a direct caution for instrument widgets: an easing curve that overshoots can briefly show a wrong value (an airspeed needle passing the true value), which in a training tool teaches the wrong thing. Use non-overshooting easing on any widget that shows a real quantity.

Confirmed this session: Crossref returned DOI 10.1145/37402.37407 for volume 21 issue 4 pages 35-44 (the DOI 10.1145/37401.37407 appears in some BibTeX records, but Crossref's record is the one used here); full text read from https://www.ics.uci.edu/~fowlkes/class/ics162/exercises/lasseter.pdf and the SIGGRAPH education summary page https://education.siggraph.org/static/HyperGraph/animation/character_animation/principles/prin_trad_anim.htm.


## chang1993animation

Chang, B.-W. and Ungar, D. (1993). Animation: from cartoons to the user interface. *Proceedings of the 6th Annual ACM Symposium on User Interface Software and Technology (UIST '93)*, 45-55.

### Core claims

User interfaces are built from static presentations and handle change badly: icons expand into windows in one instant, menus pop up where nothing existed a moment before, and moved objects vanish in one place and appear in another. The authors argue that this forces users to compare the old and new screens and deduce the connection, which pulls attention from the task. Cartoon animation solves the same problem, because its audience follows even bizarre events without being startled. The paper tests that idea by applying cartoon techniques in the interface of the Self programming language, with the aim of offloading the interpretation of change to the perceptual system. The claimed benefits are cognitive (the user keeps thinking about the task) and affective (less surprise and unease).

### Specifics

Source of the principles: the authors state they draw on Thomas and Johnston's treatise. They group them as solidity, exaggeration and reinforcement.

- Solidity. Objects should move continuously and as if they have mass. Dragging an outline instead of the object destroys that. Motion must keep up with the cursor, and the Self interface was tuned to hold 20 to 30 frames per second during interactive movement.
- Motion blur. Cartoonists' rule of thumb, as the paper reports it: if an object moves more than half its size (or alternatively its full size) between two frames, add motion blur, because otherwise the eye sees two objects, one flashing out and another in (temporal aliasing). Self draws a stippled trail the color and width of the object between old and new positions. The authors note higher frame rates reduce but do not remove the need.
- Arrivals and departures. Objects fly in, grow from a point or dissolve in, and leave the opposite way. Pop-up menus become "grow-up" menus that expand from the button and shrink back.
- Anticipation. A small, quick contrary movement before the object moves by itself (not when the user drags it) draws the eye and prepares the user.
- Slow in and slow out. Movement leaves a pose slowly, goes faster in the middle and ends slowly; the authors say this gives weight, reduces surprise and, without it, "movement feels artificial and dead". They stress these motions are still quite fast.
- Arcs for non-interactive movement; follow through (objects wiggle briefly when they stop or are hit).

Section 4 lists where interfaces differ from cartoons, and this is the most reusable part. A cartoon is passive and an interface is interactive, so the techniques are not imposed on objects the user is moving directly. The user must regain control immediately if they want to move on; animation should be "as fast as it can be while still preserving legibility", and the authors say that done well it can speed an interface up (moving an object across the screen in only two frames with motion blur). Surprise gags and wackiness should not transfer: anticipation that misleads would be disturbing in an interface.

### Replication and criticism

This is a design-research paper describing one system, not a controlled experiment. It reports no user study in the text I read; the claims of reduced cognitive load and increased pleasantness are argued, not measured. Later experiments qualify them. Tversky, Morrison and Bétrancourt (2002) find that informational animations often fail to beat equivalent static graphics, and Bederson and Boltman (1999) and Heer and Robertson (2007) find that animated transitions can help in specific, measurable tasks. The paper has been widely cited as the origin of the claim that interface animation should preserve object identity across states, which later work on animated transitions tests directly. The Self interface also used 1993-era colormap tricks, so the frame-rate figures should not be read as current targets.

### Implications for LTF

The strongest transferable rule is the purpose test: animation exists to show how the old state relates to the new one. On an LTF lesson page, a panel that opens, a checklist item that completes or a quiz answer that is revealed should change continuously enough that the learner sees what moved where, not flash. The second is the speed rule: as fast as legibility allows. Use short transitions, so that the learner is never waiting for the interface; never block input on a decorative animation, and let a click cancel a running one.

The paper's warnings about wackiness map onto the aviation setting: bounce, wiggle and follow through are fine for a small reward cue in lesson reading, but should not appear on instrument widgets where a wiggling needle would look like turbulence or a fault. Anticipation must never mislead; do not animate toward a wrong answer. For fly mode, use only the minimal cues: a quick fade or slide that preserves identity, with no motion that is not triggered by the learner or by a real data change.

Confirmed this session: Crossref DOI 10.1145/168642.168647 (title, authors, UIST proceedings, pages 45-55, 1993); full text read at https://bibliography.selflanguage.org/_static/animation.pdf.

## heer2007animated

Heer, J. and Robertson, G. G. (2007). Animated transitions in statistical data graphics. *IEEE Transactions on Visualization and Computer Graphics*, 13(6), 1240-1247.

### Core claims

The paper asks whether animated transitions between related statistical graphics (bar to pie, stacked to grouped bars, scatter plot time steps) actually improve graphical perception. The authors extend theory of data graphics to cover transitions, propose a taxonomy of transition types and a set of design principles, build a system (DynaVis) that follows them, and run two controlled experiments. Their summary finding is that appropriately designed animated transitions significantly improve graphical perception at both a syntactic level (tracking objects across a change) and a semantic level (estimating how much a value changed). They are careful to say that animation is no guarantee: it adds timing and complexity, and can mislead if the animation violates data semantics.

### Specifics

Design principles are organized under the Congruence and Apprehension principles of Tversky, Morrison and Bétrancourt (2002). Under congruence: keep intermediate states valid data graphics, use consistent mappings from operations to transitions, respect semantic correspondence (do not reuse a mark for a different data point), and avoid ambiguity. Under apprehension: group similar transitions (Gestalt common fate), minimize occlusion, maximize predictability (the authors link this to slow-in slow-out timing), use simple transitions (translation and expansion are easier to understand than rotation), and use staging for complex transitions.

Experiments: 24 subjects (10 female, 14 male, aged 26 to 62) screened for familiarity with data graphics. Experiment 1 was object tracking: follow two highlighted objects across a transition, then click their final locations. The initial graphic stayed for 3 seconds, static transitions were immediate and animated ones lasted 1.25 seconds, and the display was masked 3 seconds after transition onset. The design was 3 (static, direct animation, staged animation) by 2 (size, 8 or 16 elements) within subjects, 288 trials per person, across six transition types. Experiment 2 asked subjects to follow one target and estimate its percentage change, with animations lengthened to 2 seconds to accommodate multi-stage versions, 144 trials each.

Results (from the paper text): animation produced significantly lower error than static transitions in all Experiment 1 conditions; staged animation beat direct animation except for the scatter plot time step, where object tracking error was higher with staging. The authors hypothesize that multiple shorter stages give more chances to lose a target, and they recommend about one second per stage rather than about half a second. In Experiment 2 animation helped significantly for the scatter plot and grouped bars; heavily staged animation in stacked bars and donut charts increased error, so the authors conclude it is preferable to minimize unnecessary motion rather than "do one thing at a time" at any cost. Participants preferred staged animation over animation, and animation over static, and axis rescaling made estimation harder, though animation reduced that cost. Increasing the number of elements increased tracking error.

### Replication and criticism

This is a controlled experiment with a modest, fairly homogeneous sample, tested on one visual setting with a mask that removed the later state, so the authors note better performance in predictable cases may partly reflect better memory transfer. Later work extends rather than overturns it: Dragicevic et al. (2011, this lane) test pacing on a related tracking task and find slow-in slow-out helps. Tversky et al. (2002) review the earlier literature and warn that many positive findings were confounded by extra information in the animated condition. Heer and Robertson remain the standard citation for staging and simple transitions in data graphics, and their own statement that staging gains are "not overwhelming" should be kept in view.

### Implications for LTF

Where LTF changes one chart or widget state into another (for example, switching an instrument widget from one configuration to another, or revealing a corrected answer on a diagram), an animated transition of roughly one to two seconds beat an instant swap in these experiments, and keeping marks identifiable across the change matters more than visual flair. Use direct interpolation for simple changes, split complex changes into at most two stages (for example, rescale the axis, then move the points), and avoid multi-stage choreography. Keep scales fixed where possible so the transition does not need an axis rescale. Make sure intermediate states are valid: an airspeed needle sweeping between two readings should never pass through values the aircraft could not show.

The benefits were measured in a study task, not in a learner glancing from a sim to a screen. In fly mode there is no case for animated transitions of this kind; show the new state at once. In lesson pages, offer the animation but let the learner replay it or skip it, and pair it with the final static state.

Confirmed this session: Crossref DOI 10.1109/tvcg.2007.70539 (volume 13, issue 6, pages 1240-1247); full text read from https://idl.cs.washington.edu/files/2007-AnimatedTransitions-InfoVis.pdf.

## tversky2002animation

Tversky, B., Morrison, J. B. and Bétrancourt, M. (2002). Animation: can it facilitate? *International Journal of Human-Computer Studies*, 57(4), 247-262.

### Core claims

The review asks whether animated graphics teach or communicate better than static ones. By the authors' Congruence Principle (the structure and content of an external representation should correspond to the desired structure and content of the internal one), animation should be ideal for change over time. Yet the paper finds the research on animation over static graphics "not encouraging". Where animation seems to win, scrutiny shows the animated and static versions were not equivalent: the animation carried more information, or came with interactivity or prediction, which help learning on their own. The authors propose that animation fails because it breaks a second principle, Apprehension: graphics should be accurately perceived and appropriately conceived, whereas animations are often too complex or too fast to perceive and many continuous events are conceived as sequences of discrete steps. They suggest interactivity may overcome both problems, and that animation may do better for real-time reorientation in time and space than for teaching complex systems.

### Specifics

The review is selective and concentrates on animation used to teach complex mechanical, biological, physical and computational systems, comparing animated graphics to informationally equivalent static ones.

- Incomparable content. Examples include studies of speed-distance problems (Baek and Layne 1988), the circulatory system (Large et al. 1996), Newton's laws (Rieber 1990, 1991) and the Pythagorean theorem (Thompson and Riding 1990), where the animated version showed fine-grained steps or pathways the static version left out.
- Incomparable procedures. Some animation conditions allowed interactivity or prediction and the static ones did not, as in Schnotz and Grzondziel (1999) and Hegarty et al. (1999); a later study by Hegarty and colleagues found no benefit of animation per se for a flushing cistern.
- Outright failures. Morrison and Tversky (2001) found animated path diagrams gave no benefit beyond individual static diagrams, and graphics helped only low spatial ability participants over text. Rieber's studies of Newton's laws found no effect of graphic condition. Byrne, Catrambone and Stasko (1999) found animation benefits equal to making predictions with static graphics.
- Teaching software use. Studies of Macintosh, MacDraw and HyperCard instruction found any graphic beat none, but animation did not beat equivalent text or static graphics. In Palmiter and Elkerton's help-system studies, animation users finished the training task faster but the test task more slowly, and after a week the text group improved while the animation group declined.
- Other points: animations usually take more time; they are not universally preferred; and animated weather maps led novices to attend to perceptually salient but thematically unimportant information (Lowe 1999).

Conditions for success: animations "must be slow and clear enough for observers to perceive movements, changes, and their timing", should lean toward the schematic and away from the realistic, may need annotation (arrows, highlighting) to direct attention, and benefit from learner control (stop, start, replay, zoom, speed). The caveats section says real-time uses such as progress fill bars and reorientation animations have, in their words, perhaps passed the test of time and appear the most promising uses.

### Replication and criticism

This is a narrative review, so its strength depends on the studies it covers, mostly from the 1980s and 1990s, many with small samples. It is also heavily cited as the base for the congruence and apprehension principles used in later visualization work (Heer and Robertson 2007 build their guidelines on them). Later work qualified the pessimism; see the meta-analysis by Höffler and Leutner (2007) in this lane. The review does not claim animation never helps; it claims a burden of proof the early studies did not meet.

### Implications for LTF

This is the main caution in the lane for LTF's explainers. A moving diagram is not evidence of learning. When LTF shows how a control input changes an aircraft attitude or airspeed, test it against the equivalent static annotated sequence, and make sure the animated version does not simply contain more information. Offer step controls (play, pause, step, replay) so the learner can inspect microsteps, and keep a static version with arrows for review.

Animations should be schematic, not realistic: a clean diagram of the horizon line and a wing beats a rendered scene. Use annotation to show where to look. Never present an animation as the only carrier of a key fact, because learners under load tend to notice the salient motion and miss the thematic point.

For fly mode, where the learner glances away from the sim, an animation that plays once and disappears is the worst case. Show states, not processes, and keep any process view in the lesson page where it can be paused.

Confirmed this session: Crossref DOI 10.1006/ijhc.2002.1017 (volume 57, issue 4, pages 247-262); full text read at https://hci.stanford.edu/courses/cs448b/papers/Tversky_AnimationFacilitate_IJHCS02.pdf.

## hoffler2007instructional

Höffler, T. N. and Leutner, D. (2007). Instructional animation versus static pictures: a meta-analysis. *Learning and Instruction*, 17(6), 722-738.

### Core claims

The meta-analysis pools experiments that compared learning from instructional animations with learning from static pictures, to answer the question that narrative reviews such as Tversky, Morrison and Bétrancourt (2002) left open: does animation help on average? The authors report that it does, with a medium-sized advantage, and that the size of the advantage depends on what the animation is for and how it is drawn. They state that the findings fit cognitive load theory and multimedia learning theories and have implications for instructional design. Read together with the 2002 review, the result is that animation is not useless but is not a free upgrade either: purpose and kind of knowledge decide.

### Specifics

Sample and effect sizes, as reported on the publisher-affiliated listing and a search summary fetched this session (the full text was not available to me, so I report only numbers that appeared in the listing):

- The meta-analysis covers 26 primary studies with 76 pairwise comparisons of dynamic against static visualizations.
- The mean weighted effect size for learning outcomes was d = 0.37 (95% confidence interval 0.25 to 0.49), described as a medium-sized advantage for animation.
- Moderators: representational animations (those that depict the content) showed larger effects than decorational ones, with d = 0.40 (95% CI 0.26 to 0.53) reported for the representational group. Highly realistic animations such as video-based ones showed the largest effect among realism levels, d = 0.76 (95% CI 0.39 to 1.13). Effects were largest when the learning target was procedural-motor knowledge, d = 1.06 (95% CI 0.72 to 1.40).

Types of comparison the paper discusses (from its title and abstract, not read in full): animation versus static picture for the same content, with learning outcome as the dependent measure. Two cautions follow from the design of such syntheses: the pooled studies differ in how equivalent the static comparison was (the problem Tversky et al. raise), and the "realistic" moderator is confounded with the kind of content, since realistic video tends to be used to teach motor procedures.

A later meta-analysis, reported in a search summary I fetched, found a smaller overall effect. Berney and Bétrancourt (2016) are reported there as finding g = 0.226 across 140 pairwise comparisons, and Castro-Alonso and colleagues (2019) as finding g = 0.23 over 82 comparisons. I did not read those papers, so treat these two figures as leads to be checked before they are used in any LTF document.

### Replication and criticism

A meta-analysis is stronger evidence than a single experiment, but it inherits the problems of its inputs: heterogeneous designs, learners and measures, and possible publication bias. The pattern of a medium initial effect shrinking in later syntheses (per the search summary) is typical for a literature where the first reviews included studies with confounded static controls. It also fits Tversky et al.'s argument. The reasonable summary is that animation helps for procedural and motor content shown representationally, with a modest average advantage, and gives little reason to expect large gains for abstract concepts.

### Implications for LTF

LTF's explainers will mix two kinds of content. For procedural, motor-flavored content (how to move the yoke, how a flare looks as the runway changes, where to look during a turn), the meta-analysis supports using animation or video, and the largest reported effect is exactly for this kind of knowledge. For abstract relationships (why airspeed trades against pitch, how a pressure altimeter reads a setting), the evidence for animation over a good static diagram is weaker, so default to a labeled static diagram, and add an animation only when change over time is the point.

The decorational versus representational split gives a simple review rule: if a motion does not depict the thing being taught, it is decoration and should be cut or made optional. Realistic, video-like material may help motor procedures, but LTF should avoid claiming this for its schematic widgets without testing them.

The sim itself is already the realistic animation: a lesson that asks the learner to watch their own aircraft in the sim while reading is likely better than an LTF animation that imitates the sim. LTF's animations should do what the sim cannot, such as showing hidden causes (forces, airflow) or slowing a quick event.

Confirmed this session: Crossref DOI 10.1016/j.learninstruc.2007.09.013 (volume 17, issue 6, pages 722-738, December 2007); abstract-level numbers read via https://www.leibniz-ipn.de/en/research/publications/instructional-animation-versus-static-pictures-a-meta-analysis and a web search summary. Full text not read; later meta-analyses mentioned only from a search summary.

## bederson1999animation

Bederson, B. B. and Boltman, A. (1999). Does animation help users build mental maps of spatial information? *Proceedings of the IEEE Symposium on Information Visualization (InfoVis '99)*, 28-35.

### Core claims

The authors ask whether animating a viewpoint change (a smooth glide from one place to another) helps users build a mental map of a spatial information space, compared with an instant jump. Their abstract reports that animation improved users' ability to reconstruct the information space, with no penalty on task performance time, and they say the study provides strong evidence for adding animated transitions in applications with fixed spatial data where the user navigates around the data space. The paper is careful to treat animation as a time cost: in the worst case an animation is just an increase in system response time, so a transition that is too fast may not connect old and new states, and one that is too long wastes the user's time.

### Specifics

The study used a Pad++ zoomable interface. Participants navigated family trees, clicking on family members to move around, where each person was shown as a photograph with a name above it. The trees were large relative to the screen, so navigation required moving the viewpoint.

- Animated condition: the viewpoint glided to the destination, showing the places in between. All animations lasted exactly one second at 20 frames per second, with an average speed of 750 pixels per second, using slow-in slow-out (speed increases smoothly, runs at a constant rate in the middle and decreases smoothly at the end). The non-animated condition jumped immediately to the destination.
- Design: each participant used an animated tree and a non-animated tree, with half given the animated tree first. Tasks were: navigating to learn relationships, answering questions from memory, and reconstructing the tree away from the computer by placing printed photographs. Error scoring for reconstruction counted faces in wrong positions and also weighted errors by distance (weight one for a swap or same-row error, two for one row off, three for two rows off). Subjective satisfaction used a subset of the QUIS questionnaire.
- Participants: twenty, aged 20 to 44 (mean 27), 55% male, nearly all university students, paid $10 each. Training required 100% accuracy.
- Results: reconstruction errors were significantly lower with animation, both unweighted (F(1,19) = 16.165, p = .001) and weighted (F(1,19) = 16.816, p = .001); the significance threshold was set at p of 0.01 or lower. There was no significant difference in navigation time or correctness, memory recall questions or satisfaction. There was an ordering effect: when the animated tree came first there was little difference, and when it came second animation was significantly better. 75% of subjects said the animation helped them learn relationships, and 25% said it slowed them down, although subjects did not prefer the animated transitions overall.

The authors explain the pattern as animation helping with spatial relationships but not more complex relationships among data, and they note that their data set is small. They also report in the introduction that in pilot studies and their experience animations of about one second struck a balance, citing others who found one-second animations appropriate.

### Replication and criticism

A single experiment with twenty students and one task domain, so the generalization to "many applications" is the authors' claim, not a demonstrated result. The ordering effect suggests some of the benefit appeared only after practice, which should make a designer cautious about first-time users. The no-effect results for memory and satisfaction are as important as the positive one. Later work extends the question to graph layouts and animated data graphics (Heer and Robertson 2007; Dragicevic et al. 2011, both in this lane), and the review by Tversky et al. (2002) predicted exactly this mixed picture: animation tends to help at the perceptual level of tracking and spatial relationships, and less at conceptual levels. An accessible follow-up in the dynamic graph literature, found in the same search, examines animation and mental map preservation (PubMed record 20498503), which I did not read.

### Implications for LTF

LTF has two places where viewpoint change is real: moving between sections of a long lesson, and zoomed or panned diagrams such as a chart or airport diagram view. When a diagram view changes, a one second eased glide kept learners oriented without slowing them down in this study, so a short glide is preferable to a jump cut for panning or zooming over a fixed spatial layout. Do not extend this to ordinary page navigation, where no continuous space exists to preserve.

The result also sets a ceiling on what to claim: the animation helped rebuild the layout, not learn relationships. A glide on a chart helps a learner remember where things are, but quizzing on the relationships needs other design (retrieval practice, worked examples), covered elsewhere in the knowledge base. Treat any transition longer than about a second with suspicion, since the study's own framing is that transitions are response time. In fly mode, skip the glide: the learner needs the new information immediately.

Confirmed this session: Crossref returned the IEEE proceedings record (DOI 10.1109/infvis.1999.801854, pages 28-35) and a 2003 reprint; the open technical report HCIL TR 98-11 (CS-TR-3964, September 1998) read in full at https://www.cs.umd.edu/projects/hcil/jazz/learn/papers/CS-TR-3964.pdf, with the abstract also found on drum.lib.umd.edu. Numbers above come from that technical report; the conference version may differ in minor details.

## dragicevic2011temporal

Dragicevic, P., Bezerianos, A., Javed, W., Elmqvist, N. and Fekete, J.-D. (2011). Temporal distortion for animated transitions. *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '11)*, 2009-2018.

### Core claims

Slow-in/slow-out pacing (the "ease" in "ease-in-out") has long been an informal design guideline for animated transitions, but the authors say no empirical data existed to support it. They test object tracking under four pacing strategies of the same total duration: constant speed, slow-in/slow-out, fast-in/fast-out, and an adaptive technique that slows the visually complex parts of the animation. Their abstract reports that slow-in/slow-out outperformed the other techniques, with technique differences depending on the type of visual transition. The authors explain the advantage as predictability, not as extra time to decipher complex moments.

### Specifics

Pacing profiles: the paper defines pacing as a time remapping of a constant-rate animation. Slow-in/slow-out is a smooth acceleration at the start and deceleration at the end; the paper writes it as a piecewise quadratic ease. The supposed benefits are that the gradual start helps users begin tracking and the gradual stop lets them predict where the object will end. Fast-in/fast-out is the reverse. Adaptive speed picks the frames of highest visual complexity and slows the animation (without stopping it) around them; it reduces to slow-in/slow-out when the complexity peaks are at the endpoints.

Study: twelve paid university students, each using all four techniques in a Latin square order, after a short warm-up of two trials; the session lasted about 45 minutes on average. The task was to track a single target point in an animated point cloud (dark gray 16-pixel squares in an 800 by 800 area) and click its final position, with an error metric normalized against the error expected from a random answer. All animations lasted one second, which the authors describe as a common duration for transitions. They used a generated data set and a real data set, and distractor profiles describing where the visual complexity of a task falls: complex at the two endpoints (de), complex in the middle (dm), or roughly constant (do). The real data set (a table of 1,038 digital cameras shown as scatterplots) used only the first two bins.

Results (from the paper text): there was a significant effect of technique on error; slow-in/slow-out was significantly better than the other techniques for all distractor profiles. In one analysis the share of fully correct answers (303 correct overall) was highest for slow-in/slow-out (38%), then constant speed (31%), fast-in/fast-out (15%) and adaptive speed (14%) in one analysis. Adaptive speed worked best only when complexity was at the extremes, where it reduces to slow-in/slow-out; constant speed was better than adaptive and fast-in/fast-out for the other distractor profiles. Participants complained of overshooting the target as it stopped with the other pacings. The authors link this to smooth pursuit eye movement: they estimate that around 30% of a one-second animation is spent in the visuomotor response to the motion (about 100 ms for the open-loop response, 100 ms to detect termination and 100 ms to slow the eye to rest), so predictability matters.

Recommendation: for short-duration transitions that show state changes, use slow-in/slow-out pacing. The paper does not address whether to animate at all, and refers readers to Tversky et al. (2002) for that.

### Replication and criticism

A well-controlled experiment, but small (twelve students), with a single task (tracking one target), abstract stimuli (identical squares), and one duration. The authors list limitations: they did not test several simultaneous targets, participants started the transition themselves by pressing a key (so they knew when it would begin, which favors tracking), and they did not use an eye tracker. They hypothesize a third principle, keeping velocity variations low, which would make slow-in/slow-out a special case. Their results should hold for slightly different durations, but not for very different durations because of ceiling and floor effects. The finding agrees in direction with the craft claims of Thomas and Johnston, Lasseter and Chang and Ungar, and with Heer and Robertson's recommendation, but those sources did not test it.

### Implications for LTF

This is the evidence for LTF's default easing: where a widget element moves from one place to another over about a second, use an ease-in-out curve. The study measured tracking of an item the user expects, so it fits user-initiated moves (a click that moves a marker or reveals a panel). It does not support slow easing on a notification or a value that changes by itself while the learner looks at the sim.

Two cautions. First, "ease" is not free: easing wastes the start and end of the time budget, so a transition that needs to be as short as 150 ms may be better with a gentler curve than a strong ease-in-out. The paper tested one-second transitions, so no figure from it should be applied to short interface micro-transitions. Second, for gauges that show a measured quantity, the needle should follow the data, not an easing curve that lags or overshoots it; use easing for scripted demonstrations, and direct mapping for live or simulated values.

Confirmed this session: Crossref DOI 10.1145/1978942.1979233 (CHI 2011, pages 2009-2018); full text read at https://cs.au.dk/~elm/pdf/timedistort.pdf. Note that the "38%, 31%, 15%" figures are taken from the paper's count of correct answers; I did not confirm which of the paper's two analyses (generated or real data set) they describe, so treat them as indicative.

## chevalier2016animations

Chevalier, F., Henry Riche, N., Plaisant, C., Chalbi, A. and Hurter, C. (2016). Animations 25 years later: new roles and opportunities. *Proceedings of the International Working Conference on Advanced Visual Interfaces (AVI '16)*, 280-287.

### Core claims

The paper revisits Baecker and Small's 1990 taxonomy of the roles animation plays in interfaces, twenty-five years on. The authors reviewed academic publications and commercial systems and interviewed 20 professionals of various backgrounds. The result is an expanded taxonomy of 23 roles in five categories: keeping in context, teaching aid, user experience, data encoding and visual discourse. They state that the aim is to give the field a common language, guide evaluation, and spark research. It is a conceptual and survey contribution, not an experiment, and the authors say explicitly that they chose not to report published evaluation results, because mixed results and complex procedures needed more space than available and they could not summarize them accurately.

### Specifics

Method (from the paper): a review (a search of the ACM Digital Library and keyvis.org for papers with "animation" or "animated transition", plus examples from websites, apps and products), an iterative build of the taxonomy compared against Baecker and Small's scenarios, with minor and hybrid roles removed, and a validation step where the 20 interviewees listed at least five animation uses each, then tried to classify them using the taxonomy and suggested missing roles. They use Bétrancourt and Tversky's broad definition: any application that generates a series of frames where each frame is an alteration of the previous one.

The 23 roles by category are: keeping in context (staying oriented during navigation; supporting tracking during layout changes; maintaining up to date; replaying history and summarizing); teaching aid (affordance and preview; training by demonstration; explaining how a system works; illustrating an algorithm; teaching a new representation of information); user experience (hooking the user; keeping the user engaged; providing visual comfort and aesthetics; making activity and progress visible; revealing or hiding content; providing a virtual tour; providing feedback of an input mechanism); data encoding (revealing data relationships; conveying uncertainty or randomness; encoding emotion; encoding an object attribute); and visual discourse (supporting a narrative; highlighting content; persuading and convincing).

Role-specific points of use here: staged animation for complex navigation (the SpaceTree example grows a branch in three steps); animation that makes progress visible and fights boredom while a system is busy (hourglass cursors from 1985, spinning wait wheels, progress bars); and a note that once learning has taken place, a teaching animation "may not be needed anymore and its use discontinued". Evaluation advice is given per category: revisitation and multiple-object-tracking experiments for keeping in context, pre-test and post-test designs for teaching, viewing time, dropout and A/B tests for user experience, and questionnaires for possible drawbacks such as dizziness, distraction and boredom. The authors also flag that the outcomes of existing empirical studies of animation as a teaching aid are mixed, so more research is needed.

### Replication and criticism

A taxonomy cannot replicate, but it can be judged on coverage and usefulness. The validation was informal interviews with 20 experts, not a controlled test of the taxonomy, and the authors acknowledge that it could be refined further. Its value for a designer is as a checklist of purposes. Its weakness is that it says little about which roles have strong evidence; for that, the experimental papers in this lane (Tversky et al. 2002; Höffler and Leutner 2007; Heer and Robertson 2007; Dragicevic et al. 2011) are the better guides. The paper treats uses such as "hooking the user", "persuading" and engagement as legitimate roles, while noting that they are rarely studied, so roles with little evidence sit next to roles with strong evidence.

### Implications for LTF

Use the taxonomy as a design-review question: before adding motion, name the role it plays, and check the evidence for that role. For LTF the defensible roles are staying oriented (a short glide when a diagram pans or zooms), tracking during layout change (a card or checklist item that moves to a new position), revealing and hiding content (a short expand or collapse that preserves where things came from), making activity and progress visible (a progress indicator while content loads), affordance and preview (a looping hint on a widget that the learner can drag), and explaining how a system works (a lesson animation with step controls). Roles that LTF should treat with suspicion are hooking, keeping engaged and persuading, because the evidence is thin and they fit poorly with a trustworthy training product.

The "teaching animation can be retired once learned" note suggests a pattern: show a demonstration animation on a learner's first encounter with a widget, then replace it with a static hint.

The paper lists dizziness as a possible drawback to measure, a prompt for the reduced-motion work covered by the WCAG and vestibular sources in this lane: every role above needs a non-animated equivalent.

Confirmed this session: Crossref DOI 10.1145/2909132.2909255 (AVI 2016, pages 280-287); full text read from the HAL copy https://hal-enac.archives-ouvertes.fr/hal-01322962/document. The search tool's suggested Dragicevic authorship was wrong: the authors are Chevalier, Henry Riche, Plaisant, Chalbi and Hurter.

## myers1985importance

Myers, B. A. (1985). The importance of percent-done progress indicators for computer-human interfaces. *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '85)*, 11-17.

### Core claims

Myers argues that any computer system has operations that cannot finish instantly, and that a "percent-done progress indicator", a graphic that fills as a task advances, is better than a static busy picture such as an hourglass because it shows how fast the task is going and whether the program has crashed. The paper reports a formal experiment in which people preferred systems with progress indicators. It also reports a failed attempt to replicate an earlier finding: that people prefer constant to variable response time, and that progress indicators reverse this. The abstract states plainly that those results were not statistically significant, and that no significant preference for constant response time was shown, contrary to previously published results.

### Specifics

Design guidance in the paper: show progress graphically rather than as a number, because a graphic is quicker to assimilate when an exact value is not needed, implies that only an approximate estimate is available, and fits in a small space. If a program crashes, a progress indicator that is updated by the program stops moving, so it also tells the user the program is still running. For programs that cannot estimate how long they will run, "random progress" (dots, a moving "busy bee", a changing pattern) at least shows the system has not crashed. Where a process has several passes, the indicator can be divided into sections.

Experiment: forty-eight unpaid volunteers, mostly computer science graduate students, about one fifth computer novices. Each used two versions of a forms-based query system for a simulated transportation database, answering eight questions requiring about 14 queries. Each query was followed by a delay that was either a constant 10 seconds or random from 1 to 17 seconds (empirical mean 8.601 seconds), with or without a progress indicator. After each version, participants completed a 10-item semantic differential questionnaire (for example anxious to relaxed, bored to excited, scored 1 to 9), then a comparison questionnaire. Sessions took about 40 minutes.

Results (from the paper): the difference between progress indicators and none was highly significant (p = 0.0006). On the comparison questionnaire, 86.1% of the subjects liked progress indicators, with a mean usefulness rating of 2.94 on a scale where 1 was "Very Useful" and 9 "Useless, Annoying". There was no significant preference for constant over variable response time (p = 0.046 as printed in the scan, which I could not reconcile with the stated non-significance, so I do not rely on it; without indicators, p = 0.1497). The pattern in the means went in the hypothesized direction (constant better without a progress bar, variable slightly better with one) but was not significant. Participants rated their second version lower than the first, which the author attributes to boredom with the long response times.

Interpretation: observation suggested that with an indicator participants watched the screen, and without one they looked around the room and noticed results in peripheral vision. Myers lists the messages a progress display conveys, following Miller (1968): the request was heard, accepted, interpreted and is being worked on. He argues that indicators matter most for novices, who may panic and think the computer has crashed, and that people dislike idle waiting partly because they cannot plan another task when the wait is of unknown length.

### Replication and criticism

A single experiment with a small convenience sample of computer-literate students and an artificial task; the preference result is robust in the sense that it is consistent with decades of practice, but the effect measured is a rating of attitude, not task performance. The failed replication of the constant-versus-variable response time effect is a useful historical note: it shows that "predictable beats fast" is a hypothesis tied to context, and the author himself says the earlier Miller experiment varied the rate at which characters appeared, a different situation. Harrison et al. (2007, 2010, this lane) extended the research from "have an indicator" to "how the indicator behaves changes perceived duration". Nielsen's response-time guidance and Nah (2004) later gave thresholds for when an indicator is needed at all. Those later sources are separate in this lane.

### Implications for LTF

The paper supports a simple rule: if a step takes long enough that the learner would wonder whether anything is happening, show that it is happening. For LTF this means any operation that can exceed a second or two (loading a lesson's heavy interactive widget, saving progress, checking an answer against the server) needs visible feedback that something was received, and a determinate indicator when LTF can compute a fraction. For work with unknown length, a looping indicator is better than nothing, but it should not claim a percentage it does not have.

The finding on novices matters for a beginner audience: they are the people most likely to assume a freeze means a crash, and a learner who fears they broke the lesson is a learner who leaves. In fly mode the same rule applies, with stricter conditions: any state the learner is waiting on (for example a checklist step being saved) needs an immediate acknowledgment and no spinner that keeps moving after the work is done.

The paper's other lesson is about method: the headline claim (people prefer indicators) is well supported while the more interesting claim failed to replicate. Treat claims in the design literature by their individual support.

Confirmed this session: Crossref DOI 10.1145/317456.317459 (CHI '85 proceedings, pages 11-17) and 10.1145/1165385.317459 (SIGCHI Bulletin 16(4)); full text read at https://www.cs.cmu.edu/~bam/papers/percentdoneCHI85.pdf (scan with OCR errors, hence the unreliable printed p value noted above).

## harrison2007rethinking

Harrison, C., Amento, B., Kuznetsov, S. and Bell, R. (2007). Rethinking the progress bar. *Proceedings of the 20th Annual ACM Symposium on User Interface Software and Technology (UIST '07)*, 115-118.

### Core claims

Progress bars usually map linearly to work done, but real processes are multi-stage and variable, so bars accelerate, decelerate or pause, and humans perceive time non-linearly. The paper reports an experiment that identifies which progress behaviors make a process seem shorter or longer, even though the real duration is identical, and suggests design considerations. The theoretical frame is duration neglect and peak-and-end effects from the psychology of retrospective judgment: people judge an experience largely by its salient moments and its end, not its total length.

### Specifics

Nine progress functions, all 5.5 seconds long: linear (baseline); early pause (a large pause around 25%); late pause (around 75%); slow wavy (three large steps separated by pauses); fast wavy (many small quick steps); power (accelerating); inverse power (decelerating); fast power (rapidly accelerating); and inverse fast power (rapidly decelerating). Two bars ran one after the other on screen, and the participant said which felt faster or that they were equal; a replay button was available. All 45 trials (36 unique pairs plus 9 self-pairs) took under 15 minutes. Twenty-two participants from two computer research labs (14 male, 8 female, mean age about 37) did it in their offices. Bars were 600 by 50 pixels.

Results (from the paper): a strong order effect, with the first bar seen preferred as faster in 376 of 990 comparisons (38%), the second in 262 (26%), and no preference in 352 (36%). After controlling for order with a logistic regression, the nine functions clustered into three groups: three perceived as slower than linear (slow wavy, fast wavy and late pause, the functions with pauses near the end), four near linear, and two perceived as faster than linear (power and fast power, both accelerating, with the fastest progress near the end). Differences between groups were significant at the 0.05 level. The authors read this as peak and end effects: pauses lengthen perceived time, accelerating progress is favored, and both effects are exaggerated near the end. Early pause was about as preferred as linear.

Design suggestions: for processes with known stable progress (copying a file) leave bars alone; for dynamic or roughly estimated processes, compensate for the aversion to late pauses by caching progress early, and downplay progress at the beginning then accelerate toward the end; for multi-stage processes, put slow or variable stages first, since users tolerate stalls at the start more than at the end.

### Replication and criticism

A small lab study, fifteen minutes per person, with very short (5.5 second) bars and a research-lab sample, so scaling to minutes-long waits is an assumption. A related experimental result by the same lead author (Harrison, Yeo and Hudson 2010) used 5 and 15 second bars and found the visual-effect results similar at both. The deeper ethical question is whether manipulating perceived duration is honest. Harrison et al. frame it as making real waits feel better, not as hiding failures; a bar that accelerates at the end while the work is stalled would cross the line. The Gizmodo and broadcast coverage of the later study treated it as a trick, which is the reading LTF should avoid. I did not locate an independent replication in this session.

### Implications for LTF

If LTF shows a determinate progress bar for loading a heavy lesson or a simulation checker, keep it honest: map it to real work, and if stages vary, order them so the slow or variable work comes first and the bar does not stall near 100%. Never hold a bar at 99% while waiting. If total time is unknown, use an indeterminate indicator, not a fake percentage. Because accelerating bars are perceived as faster, a gentle ease-in is acceptable when it reflects real work, but a fabricated schedule that does not is a dark pattern, and the decision-and-dark-patterns lane of this knowledge base should be checked before using it.

For short waits under a second or two, a progress bar is probably worse than a skeleton or no indicator at all, since a flash of a bar draws attention to a delay that would otherwise pass unnoticed.

Confirmed this session: Crossref DOI 10.1145/1294211.1294231 (UIST '07, pages 115-118); full text read at https://chrisharrison.net/projects/progressbars/ProgBarHarrison.pdf and the author's project page. I did not find an independent replication.

## harrison2010faster

Harrison, C., Yeo, Z. and Hudson, S. E. (2010). Faster progress bars: manipulating perceived duration with visual augmentations. *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '10)*, 1545-1548.

### Core claims

This note extends the 2007 work from how a progress bar moves to how it looks. The authors propose two visual augmentations that make bars seem faster without changing real duration: a pulsating fill color and animated ribbing that moves backwards, against the direction of progress. They rank variants with head-to-head comparisons against standard solid-color bars, then measure the size of the effect. Their abstract reports that backwards-moving, decelerating ribbing had the strongest effect and, in a final experiment, reduced perceived duration among participants by 11%.

### Specifics

Study 1 (pulsating): 20 participants (7 female, mean age 23) compared five pulsation behaviors, each a 5-second bar whose fill varied sinusoidally between light blue and blue at a starting frequency of 1.1 Hz and an end frequency of 1.1 (constant), 1.17 and 1.25 Hz (slow and fast increasing), or 0.95 and 0.8 Hz (slow and fast decreasing). The most preferred behavior, fast increasing, had a mean preference score of 0.21; behaviors with increasing frequency were significantly preferred over constant or decreasing ones.

Study 2 (ribbing): the same participants compared seven ribbing behaviors on a bar moving right at 128 pixels per second, with ribbing moving at 0, 7.8, 15.6 or 31.3 mm per second in various directions and accelerations. Backwards-moving ribbing was significantly preferred over still or forward ribbing (p < 0.001), and decelerating or accelerating ribbing over still ribbing; backwards decelerating had the highest average preference (0.34 against 0.29 for backwards accelerating). The authors invoke induced motion (motion judged relative to its surroundings) to explain why ribbing moving against the bar's direction creates an illusion of greater speed.

Study 3: 10 participants (5 female, mean age 19) compared a solid bar, the best pulsating bar and the best ribbed bar at 5 and 15 seconds. At 15 seconds, both augmented bars were significantly preferred over the solid bar (p < 0.05); at 5 seconds only the pulsating bar approached significance (p < 0.1).

Study 4: 16 participants (6 female, mean age 22) used a method-of-adjustment procedure in which the duration of the ribbed bar was adjusted until it felt equal to a solid bar. A 5-second solid bar felt equal to a 5.61-second ribbed bar (12.2% longer) and a 15-second bar to a 16.75-second ribbed bar (11.7% longer), a significant effect (p < 0.001). The authors speculate the effect may scale to longer durations, and note an upward trend at 15 seconds that might mean a larger effect.

### Replication and criticism

Four small experiments with young participants (mean ages 19 to 23), all on short bars, in one lab. The 11% figure is an average effect on a perceptual measure, not a measure of satisfaction or abandonment in the field. The note is a four-page CHI note, and the authors flag that scaling to longer durations needs more tests. A later literature on perceived duration of spinners and progress bars (not read this session) would be the place to look for field replications. The authors are explicit that ribbed bars "appear" faster when in fact they are not, which makes the ethical caveat from the 2007 paper relevant here too.

### Implications for LTF

The augmentation has a cost-benefit profile LTF can use without any deception: an indeterminate loading indicator with motion against the direction of travel is a known way to reduce perceived wait. But the benefit is about 11% of a perceived wait, so it is a polish item, not a substitute for being faster. Spend effort first on avoiding the wait (preloading the next lesson step, caching), then on honest feedback, and only then on perceptual tuning.

Two cautions for a learner audience. First, animated stripes are decorative motion, and they must stop for users who prefer reduced motion (see WCAG 2.3.3 in this lane); a static filled bar with a text label is the fallback. Second, in fly mode, continuous looping motion at the edge of vision is a distraction; use a quiet, small, static or slow indicator there.

Confirmed this session: Crossref DOI 10.1145/1753326.1753556 (CHI '10, pages 1545-1548); full text read at https://chrisharrison.net/projects/progressbars2/ProgressBarsHarrison.pdf.

## nah2004study

Nah, F. F.-H. (2004). A study on tolerable waiting time: how long are Web users willing to wait? *Behaviour & Information Technology*, 23(3), 153-163.

### Core claims

The study asks two questions about waiting for a web page: what effect does feedback have on users' tolerable waiting time, and how long will users wait for a page to download before abandoning it? According to the abstract as summarized in the search results fetched this session, feedback prolongs tolerable waiting time, and the tolerable waiting time for information retrieval is approximately 2 seconds. The paper became a standard citation for the claim that web users tolerate only a couple of seconds, and (more reliably) for the claim that a visible indicator makes people wait longer.

### Specifics

I could not obtain the full text or the publisher abstract page this session (the publisher, repository and aggregator pages refused the fetch), so I confirm only these items.

- The abstract-level findings above, from search summaries of the abstract.
- The conference version of the work (AMCIS 2003, same title) is described in a search summary as listing competing hypotheses about the tolerable wait, including thresholds of 2, 4, 10, 15 and 30 seconds, that the experiment was designed to test.
- A later paper that reviews delay studies (Galletta, Henry, McCoy and Polak 2004, Journal of the Association for Information Systems 5(1), read in full this session) describes Nah's experiment: subjects were given ten links of which only seven worked. Subjects given feedback (a status bar) waited on average 38 seconds after clicking the first non-working link before giving up, while those without feedback waited 13 seconds. In subsequent attempts, subjects waited 3 seconds without feedback and 7 seconds with feedback. Galletta and colleagues conclude from this that patience does not seem to last forever. This is a secondary account of the 2003 version, so the numbers should be checked against the 2004 article before they are quoted as findings of the published paper.
- A blog-style review, also found in search results and treated with caution, describes the design as an "infinite links" task with and without a feedback bar, with wait times dropping on repeated attempts and the feedback group waiting significantly longer across attempts, and gives the author's estimate of acceptable waiting time as 2 to 4 seconds. I did not confirm that range from a primary source, so I do not rely on it.

### Replication and criticism

The central caveat is what the experiment measures: how long people waited before giving up when a link was broken, not how long they were willing to wait for a working page that eventually loaded. The "2 seconds" figure is therefore a statement about patience under an uncertain outcome and not a general threshold for acceptable load time. It is cited that way by later work (a 2008 paper cites it for the claim that very short delays make consumers abandon a site), which stretches the finding. The large drop in patience from the first to the later attempts (38 to 7 seconds with feedback, per the secondary account) shows that tolerance depends on repeated experience and trust. Galletta et al. (2004) tested fixed delays of 0, 2, 4, 6, 8, 10 and 12 seconds with 196 undergraduates and found that performance and behavioral intention declines began to flatten at about 4 seconds or longer and attitudes at about 8 seconds or longer, with only small explained variance (about 2%, 5% and 7% for performance, attitudes and intentions), so effects of delay exist but are modest and non-linear. Neither study measures real purchasing or abandonment in the field.

### Implications for LTF

The two usable lessons are (1) an honest indicator extends patience, which supports showing progress or status for any operation that may exceed a couple of seconds, and (2) patience after a failure is short and shrinks on each retry, so error handling for a failed save or load needs to be fast: show the failure, say what happened, and offer a retry rather than a spinner that runs on. For a learner doing a lesson, a broken or hung interactive widget is exactly the "non-working link" case: after a few seconds, switch from "loading" to "this is taking longer than expected" with a plain-text option to continue without the widget.

LTF should not quote "2 seconds" as a validated universal rule. When writing performance budgets for the app, use measured field data for the actual audience (see the Core Web Vitals source in this lane) and treat the thresholds in Miller, Card and Nielsen as perceptual categories (instant, flow-preserving, attention-holding) rather than as tolerances.

Confirmed this session: Crossref DOI 10.1080/01449290410001669914 (BIT 23(3), 153-163, author Fiona Fui-Hoon Nah); abstract-level findings from search summaries (publisher page https://www.tandfonline.com/doi/abs/10.1080/01449290410001669914 returned 403 to fetch); the 38, 13, 7 and 3 second figures and the Galletta et al. figures were read in the Galletta et al. full text at https://www.gwern.net/doc/economics/advertising/2004-galletta.pdf.

## miller1968response

Miller, R. B. (1968). Response time in man-computer conversational transactions. *Proceedings of the AFIPS Fall Joint Computer Conference, Part I (AFIPS '68)*, 267-277. San Francisco.

### Core claims

Miller, writing at IBM when time-sharing terminals were new, argues that there is no single acceptable "system response time". The right answer depends on what the user is doing, and he proposes a catalog of response-time categories keyed to the type of exchange. His framing is conversational: a person using a terminal is in a transaction with the system, and each kind of transaction implies a different expectation of how quickly the system should answer. A search summary of the abstract reports that the limits of "system response time" were controversial and that an issue was "Response time to what?". The paper is the origin of the idea that the same two or three second delay can be acceptable for one purpose and disruptive for another.

### Specifics

I could not obtain the paper's text this session (the one hosted copy returned a server error), so the following comes from secondary accounts, and every figure below should be treated as a reader's summary, not as a quotation of Miller.

A third-party summary page reproduces Miller's table of response types, with times in seconds: response to control activation, 0.1 to 0.2; response to "System, are you listening?", 3; to "System, can you do work for me?", 2 for simple and 5 for complex; to "System, do you understand me?", 2 to 4; to identification, 0.4 to 0.5 for feedback and 0.2 for confirmation; to "Here I am; what work should I do next?", 10 to 15; to a simple inquiry of listed information, 2; to a simple inquiry of status, 7 to 10; to a complex inquiry in tabular form, 4; to a request for the next page, 1; to "Now, run my problem", 15; graphic response from a light pen, 0.1; and to a complex inquiry in graphic form, 2 to 10. A separate paper that cites Miller summarizes his advice as: interactions should ideally complete in under four seconds, preferably two, but a new task request can take up to fifteen seconds without being perceived as negative, and that Miller based the figures on his experience as a behavioral psychologist (a point I have only from that secondary citation).

Nielsen (1993, in this lane) and Card, Robertson and Mackinlay (1991, in this lane) both cite Miller as a basis for the familiar 0.1, 1 and 10 second limits. The popular simplification that Miller "found" a 2-second limit therefore collapses a table of about fourteen categories into one number, and also mixes expert judgment with measured data.

### Replication and criticism

Miller's table is expert synthesis from the late 1960s, based on his own experience of computing and not on experiments with web users. The figures belong to an era of terminals, light pens and character output, so applying them to a modern web app is an analogy. Myers (1985, this lane) tried to replicate a related claim from Miller's earlier (1977) work, that constant response time is preferred to variable, and found no significant preference. Later laboratory and field studies of delay (Galletta et al. 2004, in this lane) find non-linear and modest effects of delay on performance and attitudes. The honest reading is that Miller established the principle (match response time to the kind of transaction, and give acknowledgment sooner than results) while the numbers are approximations that later authors reduced to three round values.

### Implications for LTF

Use Miller for the principle, not for the numbers. LTF has several transaction types, and each deserves a separate budget: a press or tap should show feedback near-instantly (his control-activation category); selecting an answer in a quiz should acknowledge within a fraction of a second even if the full explanation takes longer; loading a new lesson page is closer to his "next page" category; and running a heavy check should show progress.

The principle that acknowledgment comes before the result also gives a rule for fly mode, where the learner's eyes are on the sim: each tap on the companion screen needs an immediate, unmistakable response (pressed state, subtle sound or vibration if available) because the learner may look away before the result renders.

Do not cite "Miller says 2 seconds" in the knowledge base without the qualification that his table lists many categories and that the numbers are from 1968.

Confirmed this session: Crossref DOI 10.1145/1476589.1476628 (AFIPS '68 Fall, part I; Crossref lists page 267, other sources 267-277); table values read on https://aakinshin.net/vignettes/system-response-time-standards/ (secondary); search summaries of the abstract; text of the original not read.

## card1991information

Card, S. K., Robertson, G. G. and Mackinlay, J. D. (1991). The information visualizer, an information workspace. *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '91)*, 181-186.

### Core claims

The paper proposes the "information workspace", a user interface concept that treats the cost structure of information, from secondary storage to immediate use, as the central problem, and describes an experimental system, the Information Visualizer, that implements it. The relevance to this lane is a short passage in which the authors tune the system to three human time constants for perceptual processing, immediate response and unit tasks, and justify the design of interactive animation against them. They argue that interactive animation and 3D graphics allow more information to be packed into a workspace because the user can disambiguate and reveal information by manipulating objects.

### Specifics

The paper's architecture is the Cognitive Coprocessor, a scheduler loop with double-buffered graphics, described as an impedance matcher between the cognitive and perceptual needs of the user and the speed of the machine agents (derived from the idea of supervisory control). It introduces a table of human time constants for tuning the system (Table 3 in the paper), with values and references as follows:

- Perceptual processing, 0.1 seconds. To maintain the illusion of animation the screen must be repainted at least every 0.1 second. The Cognitive Coprocessor has a Governor mechanism that monitors the basic cycle time and, when it gets too high, lets cooperating rendering processes lower the quality of rendering (for example leaving off most of the text during motion) so that cycle speed is increased.
- Immediate response, 1 second. A person can make an unprepared response to a stimulus within about a second. Beyond a second, either the listener makes a backchannel response ("uh-huh") or the speaker signals they are still thinking ("uh..."). The system therefore has agents provide status feedback at intervals no longer than this constant. Immediate-response animations, for example swinging the branches of a 3D tree into view, are designed to take about a second: if much shorter the user loses object constancy and must reorient, and if much longer the user gets bored waiting.
- Unit task, 10 seconds. The user should be able to complete an elementary task act within about 10 seconds (the paper says 5 to 30), roughly the pacing of a point-and-click editor. Agents may take longer, but the user always stays active and can start the next request.

The table cites two sources for these values (Card, Moran and Newell's 1983 psychology of human-computer interaction, and Newell's 1990 Unified Theories of Cognition).

### Replication and criticism

These are engineering rules of thumb drawn from cognitive science, not experimental results of this paper. The constants are order-of-magnitude values (a decade apart), not thresholds with confidence intervals; Nielsen later adopted them as 0.1, 1 and 10 seconds. The page range is listed as 181-186 in the proceedings listing found by search and 181-188 elsewhere, so the page range should be double-checked before citing it in print. The hedged use of "about" is important: the paper does not claim that a response at 1.1 seconds breaks anything. The Bederson and Boltman (1999) and Heer and Robertson (2007) experiments, in this lane, test one-second transitions empirically; their results are consistent with the rule that one second is workable, without establishing it as optimal.

### Implications for LTF

The three constants give LTF a vocabulary for budgets. At the 0.1 second scale, anything that responds to a tap or drag (a slider that moves an aircraft model, a widget following a pointer) should update within a frame or two, and under load it should degrade quality (drop labels or shadows) before it drops responsiveness, which is the Governor idea. At the one second scale, transitions that preserve object constancy (a card moving to a new place) should take roughly a second at most, and anything slower than a second needs a status cue. At the ten second scale, a task that takes longer (generating a debrief from a logged flight) needs visible progress and the ability to continue elsewhere.

This is also a design rule for fly mode: because the learner's attention is divided, a response that arrives after more than a second with no cue risks being missed entirely.

Confirmed this session: Crossref DOI 10.1145/108844.108874 (CHI '91, pages 181-186); full text read from https://courses.ischool.berkeley.edu/i213/s99/Readings/p181-card.pdf (OCR text; the Table 3 values and the descriptions above were read there).

## nielsen1993response

Nielsen, J. (1993). Response times: the 3 important limits. Nielsen Norman Group (excerpt from *Usability Engineering*, Academic Press, 1993; updated 2014).

### Core claims

Nielsen distills decades of response-time work into three limits that are rooted in human perception and attention, and that do not change as computers get faster: about 0.1 second (the system feels instantaneous), about 1 second (the user's flow of thought stays uninterrupted) and about 10 seconds (the limit for keeping attention on the dialogue). He says Miller (1968) and Card, Robertson and Mackinlay (1991) are the basis for the guidance. A 2014 update states that web-based applications follow the same limits as other software. This is an expert synthesis published by a respected practitioner, not a new experiment.

### Specifics

From the page fetched this session:

- 0.1 second is "about the limit for having the user feel that the system is reacting instantaneously". Beyond it, the user needs feedback, but no special feedback is needed to display the result.
- 1.0 second is "about the limit for the user's flow of thought to stay uninterrupted". Between 0.1 and 1.0 seconds users notice the delay and lose the feeling of operating directly on the data, but no special feedback is necessary.
- 10 seconds is "about the limit for keeping the user's attention focused on the dialogue". Longer waits invite users to switch to other tasks, so they need feedback on when the computer expects to finish.

Guidance on indicators, citing Myers (1985): for waits of more than about 10 seconds use a percent-done indicator, ideally a graphic progress bar, which gives reassurance that the system has not crashed, an estimate so users can do other work, and something to look at. If the total is unknown, show running progress such as the absolute amount completed; a generic busy indicator is a last resort. For operations of about 2 to 10 seconds, a full percent-done indicator can be excessive and cause distracting screen changes, so Nielsen suggests a busy cursor with a small changing counter. He also notes that an interface can be too fast for users to follow, so animations should run on a real-time clock rather than depend on processor speed. The 2014 update adds that for delays over 10 seconds there should also be a clear way for users to interrupt, and that users will need to reorient themselves after the delay.

### Replication and criticism

The numbers are round values that Nielsen and later usability practice extracted from older sources, and a reader should treat them as categories of experience, not sharp cutoffs. Miller's own table has many categories (see the Miller source in this lane), and the Card et al. constants are order-of-magnitude values. The Nielsen formulation is the most-cited version because it is easy to remember. Empirical work finds smooth, non-linear effects of delay on performance and attitude rather than cliffs at 1 or 10 seconds (Galletta et al. 2004, in this lane), and Nah (2004) found patience differs sharply by context. Nielsen Norman Group also published the 2014 update without new data, so the extra guidance on web applications is professional judgment.

### Implications for LTF

This is the most useful single page for writing performance requirements. A sensible set of LTF budgets, expressed in the categories rather than as guarantees: responses to taps and drags should feel instant (the 0.1 second category); navigation between lesson steps should stay within the flow-preserving category of about a second, and any work likely to exceed it needs an immediate placeholder (a skeleton, a progress indicator); anything beyond roughly ten seconds, such as a large download of offline material, needs a percent-done indicator, estimate and cancel.

The 2 to 10 second guidance is a warning against decorating short waits: a full progress bar that flashes on and off for a three second fetch is worse than a calm, small status line. For fly mode, tighten the categories: the learner is dividing attention, so aim for instant response to taps and avoid anything that needs a second look.

Confirmed this session: page content fetched at https://www.nngroup.com/articles/response-times-3-important-limits/ (author Jakob Nielsen, dated January 1, 1993, with a 2014 update); Open Library lists the parent book (work OL3522752W, Academic Press 1993; Morgan Kaufmann edition OL7941012W).

## maister1985psychology

Maister, D. H. (1985). The psychology of waiting lines. In J. A. Czepiel, M. R. Solomon and C. F. Surprenant (Eds.), *The Service Encounter: Managing Employee/Customer Interaction in Service Businesses*. Lexington, MA: Lexington Books (D. C. Heath).

### Core claims

Maister, a professional-services consultant writing about queues in restaurants, airports and clinics, argues that how long a wait feels matters more than how long it is. He frames satisfaction with a service as perception minus expectation (his "First Law of Service") and observes that waiting is an experience to be managed, not only an operational cost. The chapter offers eight propositions about the psychology of waiting, each presented as the title of a section with real-world examples. It is an essay in the craft-and-observation tradition, with no experiment of its own, and it has been the most-cited non-technical source for designing waits in services and software.

### Specifics

I read the full essay on the author's site (https://davidmaister.com/articles/the-psychology-of-waiting-lines/), which gives these section titles in order:

1. Occupied time feels shorter than unoccupied time (examples: menus and bars while waiting for a table, telephone holds with sports highlights, medical waiting rooms with weighing machines and eye charts).
2. People want to get started (staff acknowledging seated guests; a walk-in clinic's triage nurse).
3. Anxiety makes waits seem longer.
4. Uncertain waits are longer than known, finite waits.
5. Unexplained waits are longer than explained waits.
6. Unfair waits are longer than equitable waits (order of seating, numbered queues).
7. The more valuable the service, the longer the customer will wait.
8. Solo waits feel longer than group waits.

The introduction also gives the second law, "It's hard to plan catch-up ball": a customer who is made to wait and then served earlier than promised is happier than one who is told a short wait and then waits longer. He mentions elevator mirrors as an example of occupying time. His concluding remarks say the propositions are not exhaustive, that cultural and class differences in tolerance exist and are not explored, and that the psychology of waiting is context-specific and can be managed and researched in the manager's own setting.

Later restatements: Don Norman's 2008 essay on his site (https://jnd.org/the-psychology-of-waiting-lines/) updates the essay with eight design principles, opening with "emotions dominate" and ending with the principle that the memory of an event is more important than the experience, and a shorter version appeared as "Designing waits that work" in MIT Sloan Management Review (2009). I confirmed those facts from the page only, not the full text.

### Replication and criticism

The propositions have mostly been tested piecemeal. A search summary reports that Jones and Peppiatt (1996) tested two of the propositions with 300 members of the public, and that other studies have found mixed support, some confirming and some refuting. I did not read those studies, so I cannot say which propositions hold up. The claim that waits are shortened by occupying time is the most consistent with the progress-bar work in this lane (Harrison et al. 2007, 2010; Myers 1985), where a visible indicator or motion changed perceived duration, but the progress bar research is on seconds, not on the minutes of a service queue. Some secondary lists of the propositions disagree on wording and order, so cite the chapter itself. The essay is persuasive on mechanism but offers no effect sizes, and many of its examples (supermarket lines, airport gates) are from a 1980s service environment.

### Implications for LTF

Several propositions map directly onto learning software. "Uncertain waits are longer than known, finite waits" and "unexplained waits are longer" argue for saying what is happening and roughly how long it will take ("Loading the airport chart, a few seconds"), not an anonymous spinner. "People want to get started" argues for showing something at once: the lesson title and first paragraph before the heavy widgets load. "Occupied time feels shorter" argues for putting useful content in a wait (a tip, the objective of the lesson) but only if it does not reduce clarity, and not as a trick.

"Anxiety makes waits seem longer" matters for a beginner flying a simulator: a learner who is unsure whether a challenge was recorded is anxious, so confirmation after a step must be unmistakable. "Unfair waits" is the lesson for any queue-like feature (a retry limit, a locked next lesson): say why.

Do not over-apply. For waits under a few seconds, the subtle propositions matter less than getting out of the way. And the essay is advice for managing perception; LTF should use it to be clear, not to disguise slowness.

Confirmed this session: essay text read at https://davidmaister.com/articles/the-psychology-of-waiting-lines/; citation (editors, publisher, year) confirmed from search results; page range not confirmed so left blank in sources.json; Norman's page https://jnd.org/the-psychology-of-waiting-lines/ read for the later restatement.

## galletta2004web

Galletta, D. F., Henry, R., McCoy, S. and Polak, P. (2004). Web site delays: how tolerant are users? *Journal of the Association for Information Systems*, 5(1), 1-28.

### Core claims

The paper tests how web page loading delays affect performance, attitudes and behavioral intentions. Previous work had recommended a wide range of rules of thumb, with some saying response times should be no greater than 2 seconds and others cautioning about delays of 12 seconds or more, and a recurring suggestion that complex tasks allow longer response times. The authors ran a between-subjects experiment with fixed delays of 0, 2, 4, 6, 8, 10 and 12 seconds and report that delay mattered, but that its effects were non-linear and the explained variance was small. They describe a flattening of the decline: decreases in performance and behavioral intentions begin to flatten at delays of 4 seconds or longer, and attitudes flatten at 8 seconds or longer.

### Specifics

From the abstract and text (full text read this session): 196 undergraduate students were randomly assigned to one constant delay and asked to complete nine search tasks, exploring one familiar and one unfamiliar site. The dependent variables were performance, attitudes and behavioral intentions. Plots against delay suggested non-linear regression. Explained variance was in the neighborhood of 2% for performance, 5% for attitudes and 7% for behavioral intentions; restricting the analysis to the familiar site raised explained variance for attitudes and intentions to about 16%. The authors propose, from earlier work, that increasing delay hurts performance with diminishing marginal effect, and treat familiarity (the site's structure matching users' expectations) as a moderator. They call for future research on expectations, variability and feedback, and on actual purchasing behavior.

The paper also summarizes earlier work on delay, which I read in the same text: Nah (the 38, 13, 7 and 3 second figures described under Nah 2004 in this lane), a study by Polak in which delay length, variability and feedback were manipulated and delay length was the most significant predictor of performance on a search task with feedback (gradually loading graphics) alleviating the effect somewhat, and older studies in which, for example, time to solution increased as response time increased.

### Replication and criticism

A single laboratory study with student participants, fixed delays rather than variable ones, and attitude measures collected immediately; it cannot speak to long-term loyalty or purchase. Very small explained variance means delay was one factor among many, a result that sits uneasily with the hard thresholds in popular guides. The authors themselves flag that expectations, variability and feedback were not tested. The study is also an early broadband-era result, collected when page loads of several seconds were common, so the absolute level of tolerance may have fallen since. A secondary paper I fetched (Scholz et al. 2024, arXiv 2401.03751) states that Galletta et al. showed an optimal response time of 0.5 seconds; I could not find that claim in the Galletta text I read (it tested 0 to 12 seconds in 2-second steps), so I treat that statement as unreliable.

### Implications for LTF

This paper is the best caution against treating "2 seconds" or "3 seconds" as a cliff. Delay costs something at every length, with diminishing marginal effect, and the effects are modest compared with other influences, so an LTF performance budget should aim at being reliably fast in the common case and avoiding long tail delays. Familiarity mattered: for the familiar site, delay explained more of the variance in attitudes and intentions (about 16%), so the delay effect was easier to see where users knew the site. Whether returning learners are less forgiving of a slow lesson page is a hypothesis LTF could test with its own data.

For measurement, use field data (see the Core Web Vitals source in this lane) and compare against the learner's task, not a single number. Do not use this study to justify a progress indicator for waits of one or two seconds.

Confirmed this session: Crossref DOI 10.17705/1jais.00044 (JAIS 5(1), 1-28, January 2004); full text read at https://www.gwern.net/doc/economics/advertising/2004-galletta.pdf.

## google2024web

Google. (2024). Web Vitals and Core Web Vitals, with "Defining the Core Web Vitals metrics thresholds". web.dev (Google Chrome team).

### Core claims

Core Web Vitals are the subset of Web Vitals that Google says apply to all web pages, should be measured by all site owners and appear across Google's tools. They cover three aspects of user experience: loading, interactivity and visual stability. They are an industry standard for field measurement of perceived performance, defined and revised by the Chrome team in public documents. They are not peer-reviewed research, but the threshold-setting article describes its method and cites the human-perception literature that this lane's other sources come from.

### Specifics

From the vitals page (published May 4, 2020, last updated October 31, 2024 per the page): the three metrics and their "good" thresholds are Largest Contentful Paint (LCP) at 2.5 seconds or less, measured from when the page first starts loading; Interaction to Next Paint (INP) at 200 milliseconds or less; and Cumulative Layout Shift (CLS) at 0.1 or less. A page passes when it meets all three at the 75th percentile of page loads, segmented by mobile and desktop. INP became a stable Core Web Vital in 2024 and replaced First Input Delay (FID), which measured only the first interaction. Metrics move through experimental, pending and stable phases, pending ones are held at least six months, and stable ones will not change more than once a year.

From the INP page: INP observes the latency of all click, tap and keyboard interactions during a visit and reports a single value (usually the worst; on pages with more than 50 interactions, one of the highest is ignored per 50). An interaction has three parts: input delay, processing duration and presentation delay until the next frame is painted. Thresholds: good at or below 200 ms, needs improvement up to 500 ms, poor above 500 ms. The page's rationale: after an interaction the next painted frame should show visual feedback, and delayed feedback makes users think the page is broken and repeat clicks.

From "Defining the Core Web Vitals metrics thresholds": thresholds are chosen to reflect a high-quality experience based on human perception and HCI research, to be achievable (at least 10% of origins in real-world CrUX data must meet "good"), and to set "poor" so that the worst 10 to 30% of origins fall into it, unless research suggests otherwise. The article cites Card and Newell (a 1 second immediate-response range of roughly 0.3 to 3 seconds), Miller (delays beyond about 2 seconds change how users work; control feedback within 0.1 second), Nielsen (0.1 second feels instantaneous), Michotte 1962 (perceived causality holds to about 100 ms, mixed from 100 to 200 ms and lost beyond 200 ms), and Kaaresoja et al. (visual feedback within 85 ms appeared simultaneous 75% of the time, with perceived quality dropping from 100 to 150 ms). It says that research points to 100 ms as ideal for INP and 200 ms was chosen for achievability. For LCP, candidates from 1 to 3 seconds were compared on April 2020 data; at 2.5 seconds, 42% of phone origins and 51% of desktop origins met it, and the team judged 1.5 and 2 seconds not consistently achievable. For CLS, testing showed shifts of 0.15 and above were consistently disruptive, and 0.1 was chosen over 0.05 partly because third-party embeds often cause shifts above 0.05. The 75th percentile was chosen to balance coverage against outliers.

### Replication and criticism

The thresholds are a mix of research and pragmatics; the article is open about the achievability criterion, which means the "good" values reflect what a large share of real sites can reach, not a proven human optimum. The INP threshold is explicitly weaker than the research ideal (100 ms). The vitals are also commercial in context: they feed Google's search page-experience signals. I did not locate independent studies of whether passing the thresholds predicts learner outcomes. Lab tools such as Lighthouse cannot measure INP, so lab scores and field scores can disagree; the page stresses that lab measurement does not replace field measurement. As web standards, the metrics will change, so any LTF document should cite the current page and date.

### Implications for LTF

Adopt the three vitals as the field-measured performance budget for the LTF client, measured at the 75th percentile on mobile and desktop separately, and add real-user monitoring of INP on interactive widgets, because LTF's pages are interaction-heavy. CLS is directly relevant to lesson pages with images, diagrams and late-loading widgets: reserve space for every widget and image so text does not jump while a learner reads. LCP matters for the first lesson view: render the lesson title and first paragraph before any heavy widget.

INP's focus on "the next painted frame shows feedback" fits the Miller and Card constants in this lane: respond to a tap with a visible state change within roughly 100 to 200 ms, even if the full result takes longer. For fly mode, set a stricter internal target for INP than the public 200 ms good threshold, because the learner's glances are short.

Do not treat the vitals as a substitute for task measures; add timing for LTF-specific moments, such as the time from opening a lesson to reading its first step.

Confirmed this session: pages fetched at https://web.dev/articles/vitals (published May 4, 2020, updated October 31, 2024), https://web.dev/articles/inp, and https://web.dev/articles/defining-core-web-vitals-thresholds. No Crossref record exists; verified via direct fetch of the pages.
