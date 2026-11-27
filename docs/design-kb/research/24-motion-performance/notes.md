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

This is a controlled experiment with a modest, fairly homogeneous sample, tested on one visual setting with a mask that removed the later state, so the authors note better performance in predictable cases may partly reflect better memory transfer. Later work qualifies the optimism: Dragicevic et al. (2011, this lane) test timing distortions on the same task family and find slow-in slow-out helps tracking; Chevalier et al. (2016, this lane) review a decade of results and find the evidence for benefits is narrower than the enthusiasm. Tversky et al. (2002) review the earlier literature and warn that many positive findings were confounded by extra information in the animated condition. Heer and Robertson remain the standard citation for staging and simple transitions in data graphics, and their own statement that staging gains are "not overwhelming" should be kept in view.

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

Pacing profiles: the paper defines pacing as a time remapping of a constant-rate animation. Slow-in/slow-out is a smooth acceleration at the start and deceleration at the end; the paper writes it as a piecewise quadratic ease. The supposed benefits are that the gradual start helps users begin tracking and the gradual stop lets them predict where the object will end. Fast-in/fast-out is the reverse. Adaptive speed allocates frames according to a measure of visual complexity (how many distractors are near the target).

Study: twelve paid university students, each using all four techniques in a Latin square order, after a short warm-up of two trials; the session lasted about 45 minutes on average. The task was to track a single target point in an animated point cloud (dark gray 16-pixel squares in an 800 by 800 area) and click its final position, with an error metric normalized against the error expected from a random answer. All animations lasted one second, which the authors describe as a common duration for transitions. They used a generated data set and a real data set, and three distractor profiles describing where in the animation the visually complex part occurs (at the extremes, in the middle, or over the whole animation, labeled de, dm and do in the paper).

Results (from the paper text): there was a significant effect of technique on error; slow-in/slow-out was significantly better than the other techniques for all distractor profiles. Across all trials, the share of fully correct answers was highest for slow-in/slow-out (38%), then constant speed (31%), fast-in/fast-out (15%) and adaptive speed (14%) in one analysis. Adaptive speed worked best only when complexity was at the extremes, where it reduces to slow-in/slow-out; constant speed was better than adaptive and fast-in/fast-out for the other distractor profiles. Participants complained of overshooting the target as it stopped with the other pacings. The authors link this to smooth pursuit eye movement: they estimate that around 30% of a one-second animation is spent in the visuomotor response to the motion (about 100 ms for the open-loop response, 100 ms to detect termination and 100 ms to slow the eye to rest), so predictability matters.

Recommendation: for short-duration transitions that show state changes, use slow-in/slow-out pacing. The paper does not address whether to animate at all, and refers readers to Tversky et al. (2002) for that.

### Replication and criticism

A well-controlled experiment, but small (twelve students), with a single task (tracking one target), abstract stimuli (identical squares), and one duration. The authors list limitations: they did not test several simultaneous targets, participants started the transition themselves by pressing a key (so they knew when it would begin, which favors tracking), and they did not use an eye tracker. They hypothesize a third principle, keeping velocity variations low, which would make slow-in/slow-out a special case. Their results should hold for slightly different durations, but not for very different durations because of ceiling and floor effects. The finding agrees in direction with the craft claims of Thomas and Johnston, Lasseter and Chang and Ungar, and with Heer and Robertson's recommendation, but those sources did not test it.

### Implications for LTF

This is the evidence for LTF's default easing: where a widget element moves from one place to another over about a second, use an ease-in-out curve. The study measured tracking of an item the user expects, so it fits user-initiated moves (a click that moves a marker or reveals a panel). It does not support slow easing on a notification or a value that changes by itself while the learner looks at the sim.

Two cautions. First, "ease" is not free: easing wastes the start and end of the time budget, so a transition that needs to be as short as 150 ms may be better with a gentler curve than a strong ease-in-out. The paper tested one-second transitions, so no figure from it should be applied to short interface micro-transitions. Second, for gauges that show a measured quantity, the needle should follow the data, not an easing curve that lags or overshoots it; use easing for scripted demonstrations, and direct mapping for live or simulated values.

Confirmed this session: Crossref DOI 10.1145/1978942.1979233 (CHI 2011, pages 2009-2018); full text read at https://cs.au.dk/~elm/pdf/timedistort.pdf. Note that the "38%, 31%, 15%" figures are taken from the paper's count of correct answers; I did not confirm which of the paper's two analyses (generated or real data set) they describe, so treat them as indicative.
