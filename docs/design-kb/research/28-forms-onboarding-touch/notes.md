## parhi2006target

Parhi, P., Karlson, A. K., & Bederson, B. B. (2006). Target size study for one-handed thumb use on small touchscreen devices. Proceedings of MobileHCI 2006, 203-210. ACM.

### Core claims

The paper asks how large an on-screen target must be before one-handed thumb use stops being slowed or made error-prone by its size. Earlier target-size work had studied stylus input on handhelds and index-finger input on large kiosk-sized screens. None had studied a thumb while the same hand holds a small device. The authors ran a two-phase experiment and concluded that 9.2 mm targets are large enough for discrete tasks (tapping a button, radio button or checkbox) and 9.6 mm targets for serial tasks (entering a sequence of digits). Their reasoning is a trade-off: speed kept improving as targets grew, but error rates stopped improving at about those sizes, so larger targets cost screen space without buying accuracy. The paper is an experimental study with a small sample, and it is the origin of the frequently quoted "about 9 to 10 mm" fingertip target rule.

### Specifics

Twenty right-handed participants (17 male, 3 female, aged 19 to 42, mean 25.7) took part. Only five had used a touchscreen handheld even occasionally; 18 regularly used keypad handhelds. Participants stood and used only the right thumb.

Phase 1 (discrete targets) was a 5 by 9 by 5 within-subjects design: target sizes 3.8, 5.8, 7.7, 9.6 and 11.5 mm per side, nine screen locations (a 3 by 3 grid), five repetitions. Each target was surrounded by randomly placed distractor targets with zero edge-to-edge spacing, a deliberate choice to resemble real layouts with neighboring widgets. Selection used a lift-off strategy: both touch-down and release had to fall inside the target, and dragging out cancelled. Phase 2 (serial targets) used a soft numeric keypad and four-digit codes, with key sizes of 5.8, 7.7, 9.6, 11.5 and 13.4 mm and four screen regions (a 2 by 2 grid).

Results: task time fell significantly with every size increase in the discrete phase, even between the two largest sizes. Error rates declined with size, but there was no significant difference between 9.6 and 11.5 mm. Hit-distribution analysis showed that a box of 9.1 by 8.9 mm would enclose 95 percent of hits to a 9.6 mm target at any screen location. For the serial keypad, errors were significantly higher at 5.8 mm than at 9.6 mm and above; no other pairwise differences were significant. Participants said keys had to be about 8.8 to 8.9 mm in three of the four regions. Error rates were higher in serial than in discrete tasks, so the authors recommended nothing under 9.6 mm for data entry. Targets in the rightmost column showed a right-leaning hit bias, leading the authors to recommend that targets on the right edge (for right-handed users) extend to the screen edge.

### Replication and criticism

The sample is small, young, mostly male and mostly unfamiliar with touchscreens, and the device was a 2005-era PDA, used standing and not walking. The authors themselves flag that results may differ for other grips and when walking. Later work with far larger samples, such as the 100,000,000 taps study in this lane (henze2011100), measured touch accuracy in the wild on modern phones and is a useful cross-check on this small-sample result. Platform guidance (Apple and Google minimums) and the WCAG 2.2 minimum differ from 9.2 mm; the paper should be read as one empirical anchor, not as a specification.

### Implications for LTF

LTF fly mode will be used on a tablet or phone next to a running sim, often one-handed or while looking at the monitor. Controls that are tapped repeatedly (checklist ticks, next step, quiz options) are discrete targets and should be at least roughly 9 to 10 mm physical size on the device, with generous padding, with serial controls such as a numeric entry for an altitude or heading at the larger figure. Put primary actions in the lower right for right-handed use and let them reach the screen edge. Do not place small controls next to each other with no spacing, because the study used zero spacing and still found that error stopped improving only at the larger sizes.

Confirmed this session: full text of the paper read from the author-hosted PDF (https://www.telerik.com/docs/default-source/blogs-docs/parhi-mobilehci06-pdf); Crossref record 10.1145/1152215.1152260 (title, authors, 2006, pages 203-210); web search summary (query "Parhi Karlson Bederson Target size study ...").

## seckler2014designing

Seckler, M., Heinz, S., Bargas-Avila, J. A., Opwis, K., & Tuch, A. N. (2014). Designing usable web forms: Empirical evaluation of web form improvement guidelines. Proceedings of CHI 2014, 1275-1284. ACM.

### Core claims

Many guideline lists exist for web forms, but before this study nobody had tested a whole set of them together against real forms. The authors took 20 published guidelines (compiled by Bargas-Avila and colleagues from the empirical literature), rebuilt three real news-site registration forms in an improved version that applied them, and compared original and improved versions in a controlled eye-tracking lab experiment. The improved forms were completed faster, needed fewer submission attempts, drew fewer fixations and saccades, and were rated more usable. The headline message is that guideline-driven form redesign has a measurable, multi-method payoff even on forms from high-traffic sites, and the gain is largest where the original form was worst.

### Specifics

Design: between-subjects, N = 65 (42 female, mean age 27.5, range 18 to 67), 32 on original forms and 33 on improved forms; each person filled in all three forms after a practice form. The forms came from German-language newspaper sites, chosen by screening 23 registration forms against the 20 guidelines and then picking one of rather good quality (rank 11), one medium (rank 13) and one rather poor (rank 18). The authors excluded the top third of the ranking because they had too little room to improve. They did not apply the "keep the form short" guideline. The original forms violated 9, 9 and 12 guidelines respectively.

The guidelines themselves (Table 1 of the paper) are grouped as content, layout, input types, error handling and submission. Examples stated there: place labels above fields; do not use more than one column, one question per row; match field size to expected answer length; use radio buttons for up to four options and a drop-down for more; state required formats in advance without an extra example; show error messages after the form is sent, all together, embedded in the form, noticeable by color, icon and text, polite and explaining the fix; never clear already completed fields after an error; disable the submit button after a click; show a confirmation page saying what happens next; avoid reset buttons.

Measures: submissions needed, error types, task completion time (log-transformed), keystroke-level model predictions from a form analyzer tool, eye-tracking (fixation count and duration, saccade time) with a 60 Hz SMI tracker, NASA-TLX, SUS, ASQ, the Form Usability Scale (nine items), and interviews.

Results: in all three forms fewer attempts were needed to submit the improved form. Completion time improved by 25 percent (Sueddeutsche, 113 to 85 seconds), 33 percent (NZZ, 105 to 70 seconds) and 18 percent (Spiegel, 104 to 85 seconds); the difference was significant for the two worse forms (effect sizes d = .93 and 1.00) but not for the best one. The keystroke model had predicted only 7 to 23 percent. Subjective ratings improved overall, with the strongest effects on the NZZ form. Users most often complained about missing format specifications and unclear required versus optional marking in original forms, and the authors say guidelines on format specification and on error message design had a remarkable effect on first-attempt success.

### Replication and criticism

This is a single lab experiment with a small, young, internal-database sample of experienced internet users, from German-language sites, and it tests the guideline set as a bundle. It cannot say which individual guideline did the work; the authors infer from interviews and error counts that format specification (guideline 13) and error message handling (17) mattered most, and that expert severity ratings did not track actual user impact well. The effect on the best-quality form was not significant, so benefits shrink as baseline quality rises. The original Bargas-Avila guideline set is a literature synthesis, and some individual rules (for example the radio-button threshold of four options, or the single-column rule) rest on only a few studies.

### Implications for LTF

LTF has few forms: sign-up, sign-in, settings, and short answer or numeric entry inside challenges. The study supports a plain checklist for these. Use one column, labels above fields, state formats before the learner types (for example "Altitude in feet MSL"), keep typed text after an error, put the error beside the field in words and an icon (not color alone), and give a clear confirmation of what happens next. Mark optional fields, not required ones, when most are required. The strongest evidence is for format hints and error messages, so invest there first, especially in challenge entry fields where units and formats are easy to get wrong. Avoid captchas and reset buttons.

Confirmed this session: full text read from https://research.google.com/pubs/archive/42513.pdf; Crossref record 10.1145/2556288.2557265; abstract via web search of the Google research publication page.

## bargasavila2010simple

Bargas-Avila, J. A., Brenzikofer, O., Roth, S. P., Tuch, A. N., Orsini, S., & Opwis, K. (2010). Simple but crucial user interfaces in the World Wide Web: Introducing 20 guidelines for usable web form design. In R. Mátrai (Ed.), User Interfaces (InTech).

### Core claims

The chapter is a literature review turned into a rule set. The authors argue that web forms are the main contact point between users and site owners, that people never visit a site in order to fill in a form, and that an unusable form is therefore a hurdle where a transaction is lost. From the empirical and practitioner literature they derive 20 guidelines under five headings: content, layout, input types, error handling and submission. The chapter is a synthesis, not a single experiment, and it mixes controlled studies (including the authors' own) with expert best practice. It is the source list that the CHI 2014 test in this lane (seckler2014designing) later evaluated as a bundle.

### Specifics

The chapter summarizes the evidence behind each group. Content: ask only what is necessary; let users tell required from optional at all times. A study by Pauwels and colleagues, as reported here, found that color-highlighting required fields led to faster completion, fewer errors and higher satisfaction than an asterisk alone.

Layout: Penzo's eye-tracking comparison (reported by the chapter, and read directly elsewhere in this lane) found left-aligned labels took nearly twice as long as right-aligned ones, and top-aligned labels were fastest, needing one fixation for label plus field. One column, one question per row; match field length to expected answer length. Christian and colleagues found that a month field half the size of the year field produced more answers in the expected format, and Couper and colleagues found more incorrect answers when field size did not fit the expected input.

Input types: radio buttons for two to four options and a drop-down beyond four, on the advice of Miller and Jarrett, but the empirical comparisons are mixed. The chapter reports that Healey found radio buttons faster per question but no difference over the whole questionnaire, Hogg and Masztal found no difference, and Heerwegh and Loosveldt found drop-downs slower in one study that a second study did not replicate. Checkboxes beat list boxes for multiple selection (the authors' own 2009 study). For dates, the authors' comparison of six designs found a drop-down best when format errors must be avoided and a single text field with MM and YYYY symbols fastest; Christian and colleagues reported 92.9 to 95.8 percent correct format when symbols were used, fewer when instructions sat to the right of the year field.

Error handling: stating the format rule in advance, without an extra example, produced significantly fewer errors and submission trials in the authors' study. In the 2007 comparison of six error-message presentations they report, messages embedded next to fields, shown after the send button, led to fewer consecutive errors, while inline validation (message appears as the field is left) led to significantly more errors, because people ignored or dismissed the messages. Never clear completed fields; make errors noticeable at a glance by color, icon and text; disable the submit button after a click; show a confirmation page and e-mail; avoid reset buttons.

### Replication and criticism

The inline validation finding is the most contested. It was reported in 2007 on a single study, and a later well-known practitioner test (wroblewski2009inline in this lane) reported the opposite for certain fields. The most defensible reading is that validation timing matters by field type and wording, not that one policy always wins. The date-entry and error-message results come from the authors' own lab studies with modest samples. The radio-versus-drop-down advice rests on mixed evidence and the chapter itself says so. Required-field coloring should not rely on color alone for accessibility reasons (see WCAG in this lane).

### Implications for LTF

Use this chapter as a checklist for sign-up, sign-in, settings and typed answers in challenges: state formats in advance, one column, labels on top, size fields to the expected answer, show errors after submit next to the field with icon and text, never clear typed input, and confirm what happens next. For quiz answers that need units, show the unit beside the input. Treat inline validation as a per-field decision and test it with beginners, not as a blanket rule.

Confirmed this session: full chapter text read from https://cdn.intechopen.com/pdfs/10814.pdf (reached via https://doi.org/10.5772/9500); Crossref record 10.5772/9500 (six authors, 2010, publisher InTech, book User Interfaces, ISBN 9789533070841).

## wobbrock2009userdefined

Wobbrock, J. O., Morris, M. R., & Wilson, A. D. (2009). User-defined gestures for surface computing. Proceedings of CHI 2009, 1083-1092. ACM.

### Core claims

Touch gesture sets had mostly been invented by system designers, often with recognizer reliability in mind, and so did not necessarily match what people would do unprompted. The authors propose a guessability, or elicitation, method: show a participant the effect of an action (the referent) and ask them to perform the gesture they think would cause it (the sign). From 1,080 gestures by 20 non-technical participants for 27 commands, with one and two hands, they derive agreement scores, a taxonomy of surface gestures and a consensus gesture set. Their findings: users rarely care how many fingers they use, one hand is preferred to two, desktop idioms strongly shape mental models, and some commands elicit little agreement, which argues for on-screen widgets. The paper's central design stance is that gesture vocabularies should be validated against users' guesses, not only against recognizers.

### Specifics

Method: 20 participants, recruited as people without prior experience with touchscreens such as the iPhone, performed gestures on a Microsoft Surface prototype tabletop with logging software, a think-aloud protocol and video. For each of 27 referents (commands such as move, rotate, delete, zoom, select, task switch, close), they saw an animation of the effect and then performed a gesture, once with one hand and once with two. After each gesture they rated two seven-point statements: that the gesture was a good match for its purpose and that it was easy to perform.

Agreement score: gestures for each referent are grouped into sets of identical gestures, and the score is the sum of squared group-size proportions, averaged over referents. The paper's worked example gives 0.42 for "move a little" (groups of 12, 3, 3 and 2 out of 20). Overall agreement was 0.32 for one-hand and 0.28 for two-hand gestures. Referent complexity correlated inversely with agreement (r = -.52): the more conceptually complex the command, the less people agreed.

Taxonomy: four dimensions, namely form, nature (physical, symbolic, metaphorical, abstract), binding (object-centric, world-dependent, world-independent, mixed) and flow (discrete or continuous). Simple commands usually produced physical gestures; complex ones produced metaphorical or symbolic gestures.

The consensus set was built by taking the largest group for each referent and resolving conflicts in favor of the referent with the larger group. It covers 57.0 percent of all gestures proposed, has 48 gestures across 22 dedicated referents (31 one-handed, 17 two-handed), and deliberately includes aliases, several gestures for one command, which raises guessability. The three authors designed their own sets beforehand, and each author covered only 43.5 percent of the user-defined gestures.

### Replication and criticism

The authors list limits: participants were non-technical, literate American adults, the setup had no system feedback or recognizer, users could not revise earlier gestures, and a large tabletop is not a phone. Elicitation studies became a widely used method afterward, but later reviews by other researchers raised the issue that agreement scores depend on how the referents are shown and on legacy bias from desktop and phone use. That is anticipated in the paper's own "It's a Windows World" finding. I did not confirm specific later critiques in this session, so treat the later-methodology debate as something to check before relying on it. The finding that finger count is not a reliable discriminator is directly against designer-made sets of the time and is largely consistent with how modern phones treat one-finger versus multi-finger input.

### Implications for LTF

Do not make beginners learn an invented gesture vocabulary. Use only gestures that people already know from their phones: tap, drag, pinch, swipe, and give every gesture a visible equivalent control, because the paper found complex commands elicit no shared gesture and need on-screen widgets. In fly mode, avoid hidden gestures such as multi-finger swipes to change step; use big visible next and back buttons. For any widget that moves (a heading dial, a throttle slider, a pan and zoom chart), support the obvious physical gesture, tolerate a sloppy drag and do not require a precise number of fingers or a diagonal path. Offer more than one way to do the same thing (alias), such as dragging a slider or tapping the plus and minus buttons.

Confirmed this session: full text read from https://microsoft.com/en-us/research/wp-content/uploads/2009/04/SurfaceGestures_CHI2009.pdf (abstract, method, results, discussion); Crossref record 10.1145/1518701.1518866.

## holz2011understanding

Holz, C., & Baudisch, P. (2011). Understanding touch. Proceedings of CHI 2011, 2501-2510. ACM.

### Core claims

Capacitive touchscreens and similar devices assume that a person aims with the center of the contact area between finger and glass. The authors' earlier paper (the 2010 generalized perceived input point model, also in Crossref under 10.1145/1753326.1753413) had found systematic error offsets that depend on finger posture, which suggests the assumption is wrong. In this paper they test an alternative: people align visual features on the top of the finger (such as the fingernail or the outline seen from above) with the target, not the underside that touches the glass. They propose the projected center model, under which error offsets drop to 1.6 mm compared with 4 mm for the traditional contact-area model. The inaccuracy of touch is framed as a parallax artifact between how users aim (from above) and how devices sense (from below). The work is a set of controlled lab experiments, a mixture of qualitative interviews and quantitative targeting studies.

### Specifics

The paper describes touch as translating a two-dimensional target location into a six-dimensional finger posture (three rotation angles, two position values and pressure). Three user studies were run. An initial interview study with 12 participants had people acquire printed targets at five combinations of finger pitch and roll; many reported placing a visual feature, such as a bright spot on the nail, over the target, and visual feedback from the top of the finger was the most common explanation. Study 1 recruited 30 participants (10 female) who acquired crosshair targets on a touchpad while an overhead camera recorded the finger and a footswitch committed the input, so that pressing did not disturb the pose.

The method compares candidate models by how small the leftover systematic offset is. The best vertical half-models, which rely on the top of the finger, cut error offsets to 44 percent of the contact-area model in Study 1 (all vertical models together reached 37 percent). In Study 2 the top-versus-bottom model reduced mean error to 39 percent. Per-participant horizontal models helped much less (84 percent of the contact-area error in Study 1).

For engineering, the authors combine offset with spread to compute the minimum button size for 95 percent reliable input. A device using the projected-center model supports 4.9 mm targets, compared with 7.9 mm for the corresponding contact-area model (8.6 mm in their previous paper, corrected for yaw), a factor of 2.6 in target area. These figures describe a lab touchpad with an overhead camera and trained recording conditions; they are not guidance for a phone screen as sold.

### Replication and criticism

Evidence is controlled experiments with small, young, institution-recruited samples (12 to 30 per study) and a custom apparatus, so effect sizes are specific to that setup. The paper's engineering claims (camera sensing from above could be inherently more accurate) went beyond what shipped on consumer phones, which continue to use capacitive sensing, sometimes with software offset correction. The qualitative finding, that touch error depends on finger angle and that people do not tap with the exact center of the contact patch, is consistent with the large-scale observation of offsets in the wild reported by Henze and colleagues (a source in this lane), but I have not confirmed in this session that any later study replicated the projected center model itself. Treat it as a well-argued, single-lab model.

### Implications for LTF

The practical lesson is not a number but a behavior: people tap slightly away from where they aim, and the error is not random. Tap errors will shift with grip, finger angle and tablet position, which in a sim setup (device on a desk beside the keyboard, thumb or index finger at a flat angle) can differ from the usual handheld case. Therefore, keep the interactive hit area larger than the visible button, leave real space between adjacent tap targets (for example the four options in a quiz, or the plus and minus buttons around a value), and avoid placing destructive actions next to frequent ones. Do not rely on fine pointer precision in widgets such as dials and sliders; give them a generous drag handle and snap values. Test fly mode with the device flat on a desk, since low finger angles produce the larger offsets the paper describes.

Confirmed this session: full text read from https://static.siplab.org/papers/chi2011-understanding_touch.pdf (abstract, studies, engineering section, conclusions), project page https://siplab.org/projects/Understanding_Touch; Crossref records 10.1145/1978942.1979308 and 10.1145/1753326.1753413.

## henze2011100

Henze, N., Rukzio, E., & Boll, S. (2011). 100,000,000 taps: Analysis and improvement of touch performance in the large. Proceedings of MobileHCI 2011, 133-142. ACM.

### Core claims

Lab studies of touch had small samples, often fewer than 30 people. The authors instead published a tapping game on the Android Market and recorded where players touched, to study error rates by target size and screen position and to test whether systematic touch offsets can be corrected. They found error rates rise sharply as targets shrink, errors are higher near the screen border than in the center, and touches are systematically skewed (on the phones they analyzed, toward a point in the lower right of the screen, consistent with right-handed thumb use). A compensation function that shifts touch positions, derived from 75 percent of the data and tested on an update of the game, reduced the error rate by 7.79 percent. The study is a large-scale observational and quasi-experimental field study with inherently low internal validity, which the authors state openly.

### Specifics

The game, "Hit It!", asked players to touch circles that appeared on screen, with a time limit that shrank, three stages of levels, scores, badges and high-score lists as motivation. It was published October 31, 2010. Data came from 91,731 installations that provided meaningful data (from 99,749 total) and 120,626,225 touch events. The sample was strongly Western (48.31 percent had a US English locale). Analysis used the four most common devices of the four most common resolutions (an HTC Wildfire, LG Optimus One, Samsung Galaxy S and Sony Ericsson Xperia X10), normalizing target size to millimeters. Only single-target micro levels and players with at least a hundred micro levels were used for error analysis.

Findings: the error rate decreased with target size; below 15 mm error rose dramatically and jumped to over 40 percent for targets smaller than 8 mm. For targets under 12 mm, error at the screen border was much higher than at the center (on the HTC Wildfire, 31.68 percent at the border against 17.59 percent in the center), which the authors say corresponds to making a target about 3 mm larger (8 mm to 11 mm) to compensate. Touch offsets were systematic: for the Samsung Galaxy S the touches were skewed toward a position about 1.33 cm left of and 2.12 cm above the lower-right corner, and the other phones showed a similar skew. Shift vectors from 30 by 30 screen areas, applied to the 25 percent of data held out for testing, cut errors by about 3.1 to 4.1 percent in simulation; the live test, an independent-measures experiment with 12,201 installations and 15,326,444 touch events, gave the 7.79 percent figure.

### Replication and criticism

The authors compare with Parhi and colleagues: for a 10.89 mm circle (equivalent to a 7.7 mm square), Parhi found a 5 percent error rate and Perry and colleagues 12.3 percent, against 14.19 to 18.86 percent here. They attribute the higher rate to time pressure, not seeing the next target in advance and the animated background. So absolute numbers should not be compared across studies, but the shape of the size-error curve and the importance of position agree. The authors note they did not know how participants held their phones. The sample is skewed toward Western Android gamers on 2010-era phones with small screens, and the task is rapid reaction, not careful form filling.

### Implications for LTF

This study supports two design rules and cautions against over-reading the numbers. First, treat small targets as risky in a way that scales steeply: errors are modest for targets above roughly the mid-teens in millimeters in this task, and climb quickly below that. LTF should lean toward the larger end for controls the learner taps often, especially when the learner is not looking at the device (fly mode with eyes on the sim). Second, place important buttons away from the extreme edges, or enlarge them there, because edge targets are harder to hit; combine with the thumb-region advice from the Parhi study. The paper also shows that touch offsets are consistent, so a hit area slightly offset toward the usual error direction (down and toward the thumb) is a defensible refinement, but only validate that on the real tablets LTF users own. Do not use the game-derived millimeter figures as thresholds; use them to justify a generous size and spacing policy.

Confirmed this session: full text read from the published PDF at https://typeset.io/pdf/100-000-000-taps-analysis-and-improvement-of-touch-4jul17t16a.pdf (abstract, study, results, discussion); Crossref record 10.1145/2037373.2037395 (title 100,000,000 taps, subtitle analysis and improvement of touch performance in the large; pages 133-142); web search summary of the abstract.

## bragdon2011experimental

Bragdon, A., Nelson, E., Li, Y., & Hinckley, K. (2011). Experimental analysis of touch-screen gesture designs in mobile environments. Proceedings of CHI 2011, 403-412. ACM.

### Core claims

Soft buttons work well when a person is seated and looking at the phone, but people also use phones while walking, driving and doing other things. This paper asks how touch input holds up under such "situational impairments", comparing soft buttons with several gesture designs under different levels of motor activity and distraction. The authors find that when the environment is distracting, gestures can give significant performance gains and a lower attentional load, while matching soft buttons when attention is fully on the phone. Bezel-initiated gestures (starting from the screen edge) were the fastest and were not significantly affected by environment, and simple mark-based gestures were the most accurate. The implication is that the weakness of soft buttons is that they must be looked at, and that eyes-free alternatives help in divided-attention settings. It is a controlled within-subjects laboratory experiment.

### Specifics

The study used 15 participants (the reported tests have 14 degrees of freedom and the discussion refers to 13 of 15 users). It crossed four environments: direct (sitting, no distraction), indirect (sitting plus a situational-awareness task shown on a monitor), walking (on a motorized treadmill plus the situational-awareness task) and AST (sitting plus an attention-saturating task in which the user keeps a randomly drifting circle centered on a crosshair). Techniques were soft buttons (the control: 12 buttons in a 3 by 4 grid, 14.2 by 9.5 mm with 1 mm gaps), bezel marks, bezel paths, hard-button marks and hard-button paths, all designed for one-handed use. Mark gestures are simple single-stroke compass-direction marks; path gestures are free-form shapes. 

Results: bezel marks had the lowest mean completion time (1,092.87 ms), significantly lower than soft buttons (1,244 ms), a 12.17 percent improvement. Soft buttons and hard-button marks (1,262 ms) did not differ significantly. Path gestures were slowest (bezel paths 1,344 ms, hard-button paths 1,534 ms). Mean accuracy was highest for hard-button marks (93.5 percent) and bezel marks (92.5 percent), followed by soft buttons (91.2 percent); path gestures were lowest (81.4 and 83.5 percent). Environment effects: soft-button time rose by 15.84 percent from direct to indirect and then stayed fairly flat, suggesting the largest cost came from not looking at the phone all the time. Bezel marks showed no significant difference across environments. Eye gaze showed gestures required looking at the phone 3.5 percent of the time against 98.8 percent for soft buttons. Thirteen of 15 users wanted more than one technique, and in the three non-direct environments no user preferred soft buttons. The authors give design recommendations: provide gestural shortcuts for soft-button commands, prefer marks over free-form paths unless a 2D operand is needed, and use bezel moding.

### Replication and criticism

This is a single lab study with a small sample, a treadmill and a monitor-based distractor, not real walking or driving, and with expert-style single-letter button labels. Some effects were not significant (for example bezel paths from direct to indirect, p = .052), and the gesture shapes tested affect the result, as the authors admit. Edge-initiated gestures also depend on the physical bezel of the test phone, which a web page cannot rely on, so the direct recommendations are hard to transfer. The robust, transferable finding is the attention cost of having to look at a small target. The paper's related work cites Kane and colleagues finding an interaction between walking and button size and proposing larger buttons when walking, which points the same direction.

### Implications for LTF

LTF fly mode is a divided-attention interface: the learner is looking at a simulator and flying, with the page off to the side. This paper is the closest empirical match for that situation in the lane. It supports giving the learner controls that can be hit without looking: very large targets in fixed screen positions that never move, a minimal number of controls on screen, and consistent placement from step to step. It also supports offering keyboard shortcuts such as space or arrow keys on a desktop, and LTF should not depend on edge gestures. Avoid free-form gestures entirely. Expect the learner to glance away and return, so show the current step and state very clearly on every glance. Do not conclude from this paper alone that gestures beat buttons; it shows that looking is costly, not that a given swipe design suits LTF.

Confirmed this session: full text read from https://research.google.com/pubs/archive/37157.pdf (abstract, overview, results, discussion, design recommendations); Crossref record 10.1145/1978942.1979000 (title, four authors, 2011, pages 403-412).

## sears1991high

Sears, A., & Shneiderman, B. (1991). High precision touchscreens: Design strategies and comparisons with a mouse. International Journal of Man-Machine Studies, 34(4), 593-613.

### Core claims

Before smartphones, touchscreens were seen as fast but imprecise, which limited them to kiosks with large targets. Sears and Shneiderman argued that the poor reputation came from two fixable causes: noisy hardware readings and a poor selection strategy, "land-on", which commits the selection the instant the finger touches down. Their remedy combines software stabilization (filtering and smoothing raw touch data) with a lift-off strategy: the finger drags a cursor shown slightly above the fingertip and the selection is committed only when the finger is lifted. Under that design, people could hit targets as small as one pixel and performed as well as with a mouse for targets from 32 down to 4 pixels per side. The paper also proposes a variant of Fitts' law for touchscreen pointing. It is an early set of three controlled experiments and the origin of the "confirm on release" convention that mobile buttons use today.

### Specifics

I read the University of Maryland technical report version of the work (dated January 1989, with the same title), which carries the same abstract as the journal record; the figures below are from that report and should be checked against the journal article before being quoted as the 1991 numbers. The three studies compared a touchscreen, a touchscreen with stabilization, and a mouse (the third study only compared the stabilized touchscreen and the mouse). Targets were rectangles of 1, 4, 16 and 32 pixels per side, which the report gives as 0.4 by 0.6, 1.7 by 2.2, 6.9 by 9.0 and 13.8 by 17.9 mm. Subjects were university volunteers whose computer experience was not controlled; the third study had 20 subjects, eight of whom had used a touchscreen once. A selection ended when the target was selected or after a maximum number of errors (five in the first study, ten in the third).

Results as reported: in the first study both touchscreens were faster than the mouse for 16-pixel targets, and the mouse was faster for single pixels, with no other significant differences. In the second study the non-stabilized touchscreen produced an average of 5.95 errors per single-pixel target and hit the maximum error count more than 39 percent of the time, while the stabilized one averaged 0.73 errors and hit the maximum under 0.01 percent of the time, and subjects preferred the stabilized touchscreen. In the third study, the stabilized touchscreen was as fast or faster than the mouse down to four pixels, the mouse was better for the single-pixel target (9.8 against 5.4 seconds mean selection time), and subjects preferred the mouse (mean 7.9 against 5.6). The authors list "gravity" (enlarging the selectable area around a target), zooming and arm fatigue as future work.

### Replication and criticism

The studies used a 1980s touchscreen with a mouse as comparator, a trained-by-instruction cursor offset and mostly novice subjects, so the absolute sizes do not map to phones. Parhi and colleagues (a source in this lane) cite this work for the finding that lift-off selection let touch match mouse accuracy down to 1.7 by 2.2 mm targets, while noting that selection times were fastest and errors lowest for the largest targets (13.8 by 17.9 mm). The central idea, that commitment on release lets users correct their aim, matches how click events work on current touch devices, though I did not verify specific later controlled replications. The stabilization finding mostly concerns hardware noise.

### Implications for LTF

On the web, the usual click or tap event already fires on release, so LTF gets lift-off for free; the design lesson is not to bypass it. Do not trigger irreversible or progress-advancing actions on touch-down or pointer-down (for example, advancing a checklist or submitting a quiz answer on pointerdown), and allow the learner to slide off a button to cancel. For drag widgets such as a heading or throttle slider, show the value being set in a readout offset from the fingertip so the finger does not hide it, which is the same problem the offset cursor solved. The paper's "gravity" idea suggests larger invisible hit areas around small controls. Finally, a one-pixel-accuracy mindset is wrong for LTF; the evidence shows large targets are always fastest and least error-prone, so design for coarse input.

Confirmed this session: University of Maryland technical report PDF read in full (https://www.cs.umd.edu/users/ben/papers/Sears1991High.pdf); Crossref record 10.1016/0020-7373(91)90037-8 (journal, volume 34, issue 4, pages 593-613, April 1991); Penn State Pure record via web search summary.

## penzo2006label

Penzo, M. (2006, July 12). Label placement in forms. UXmatters.

### Core claims

Penzo reports a small eye-tracking test of four label placements in a plain web form and concludes that labels above their fields are usually best, because the eye does not have to jump sideways between label and field. If labels must sit beside fields, right-aligning them is better than left-aligning them. This short practitioner article became the most cited evidence behind the common "put labels on top" rule, and it is the study that Bargas-Avila's 20 guidelines and Wroblewski's book rely on for label placement. It is a usability test written up for practitioners, not a peer-reviewed experiment, and it reports no statistics.

### Specifics

Method as described on the page: an eye-tracking usability test (fixations, saccades, saccade durations and completion times) of four form layouts built from forms in Luke Wroblewski's earlier article on web application form design, with visual design stripped out so that only label placement varied. Gaze recording ended when the user clicked submit. Each form had four required fields including a drop-down list. The article describes two groups, expert users (mostly designers and programmers, with some usability experts) and novices, but does not state how many people took part and does not name the eye-tracker. The tests were run in March 2006 according to an author comment.

The four forms were: (1) left-aligned labels to the left of the fields; (2) right-aligned labels to the left of the fields; (3) left-aligned labels above the fields; (4) bold labels above the fields. Reported results: in form 1 each label and field pair cost one saccade of about 500 ms, some label-field distances being excessive. In form 2, total fixations fell by nearly half and completion times were nearly halved, with saccade times about 170 ms for experts and 240 ms for novices. In form 3, saccades were about 50 ms (roughly a tenth of form 1), most fixations landed on the input fields, and no experts needed to recheck labels, though some novices did. In form 4, saccade time rose from about 50 to about 80 ms (nearly 60 percent) with no clear benefit, so bold labels did not help. Recommendations: put labels above fields; right-align if beside; keep labels for adjacent fields visually distinct; drop-downs attract attention strongly, so use them for important data or place less important ones lower.

### Replication and criticism

The study has weaknesses the page itself surfaces. The sample size is not stated and no significance tests or variance are given, the forms were deliberately bare, and the author acknowledged the bare pages may have affected the bold-label result. The page includes a 2011 comment by Caroline Jarrett arguing that the conclusions overstate what the experiment showed, noting that later work by Das and colleagues (2008) and by Feichtinger (2010) found no advantage for labels above fields in simple forms, and urging designers to consider mobile devices, localization and form complexity. Das, McEwan and Douglas (NordiCHI 2008, DOI 10.1145/1463160.1463217), as summarized by a web search of the abstract, found results against Wroblewski's recommendation, suggesting right-aligned labels at least for multi-field forms, with a small sample of UK university-educated users; I could not read its full text. So the actual evidence is: labels beside fields cost extra eye movement, left-aligned side labels are the worst, and above-field versus right-aligned is contested for simple forms. Above-field is the safe default for narrow screens regardless, because side labels cannot fit.

### Implications for LTF

Use labels above fields in every LTF form and answer box. This is also the right layout for phones and for large text settings, where side labels run out of room. Keep labels plain weight, short and always visible (not placeholder-only), and give numeric answer fields a visible unit label. For the wider desktop layout of an account page, do not claim that above-label is empirically proven faster than right-aligned labels; choose it for consistency and for responsive reasons. Because drop-downs attract disproportionate attention, avoid putting a drop-down at the top of a short sign-up form unless it matters most. If LTF ever needs a long form with unfamiliar content, the practitioner view (see Wroblewski) is that left-aligned labels can slow people down usefully, but there is no LTF form that calls for that.

Confirmed this session: full article page fetched and read at https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php (method, four tests, results, comments including the 2011 reply); web search of the Das, McEwan and Douglas abstract and Napier repository record.

## w3c2024web

World Wide Web Consortium. (2024). Web Content Accessibility Guidelines (WCAG) 2.2 (W3C Recommendation, 12 December 2024), with the Understanding documents for success criteria 2.5.5, 2.5.7 and 2.5.8.

### Core claims

WCAG 2.2 is the current W3C Recommendation for web accessibility, edited by Alastair Campbell, Chuck Adams, Rachael Bradley Montgomery, Michael Cooper and Andrew Kirkpatrick. Among its nine new success criteria are 2.5.7 Dragging Movements (Level AA) and 2.5.8 Target Size (Minimum) (Level AA); 4.1.1 Parsing was removed. For this lane the relevant requirements are that pointer targets be large enough, or spaced far enough apart, that people with tremor, limited dexterity or coarse pointing can activate them without hitting a neighbor, and that anything done by dragging can also be done with a simple tap or click. These are normative standards, written by consensus and not experiments, and they define a floor for conformance, not a best-practice size.

### Specifics

SC 2.5.8 Target Size (Minimum), Level AA: the size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when (a) Spacing: undersized targets pass if a 24 CSS pixel circle centered on each target's bounding box does not intersect another target or the circle of another undersized target; (b) Equivalent: the function can be achieved by another control on the same page that meets the criterion; (c) Inline: the target is in a sentence or its size is constrained by the line height of non-target text; (d) User agent control: the size is determined by the browser and not modified by the author; (e) Essential: a particular presentation is essential or legally required. The Understanding document says the aim is that targets can be activated without accidentally activating an adjacent target, and that sufficient spacing can work as effectively as larger size. Its examples include a row of buttons 20 pixels high with 4-pixel margins that passes by spacing, while the same toolbar with no gaps fails.

SC 2.5.5 Target Size (Enhanced), Level AAA, uses 44 by 44 CSS pixels with similar exceptions. The Understanding page does not explain how 44 was derived, and it recommends larger targets for frequently used controls, actions that cannot be easily undone, hard-to-reach or edge-of-screen controls and steps in a sequential task.

SC 2.5.7 Dragging Movements, Level AA: all functionality that uses a dragging movement can be achieved by a single pointer without dragging, unless dragging is essential or determined by the user agent. Examples: a range slider also lets users tap the track; a map also offers directional buttons; a sortable list offers up and down controls.

### Replication and criticism

These are consensus standards, not findings, so replication does not apply. Criticism is that 24 CSS pixels is a deliberately low compromise floor (about 6 mm at a typical 96 CSS pixel inch, though a CSS pixel is not a fixed physical length on phones), well below the millimeter sizes in the touch studies in this lane (for example the 9 to 10 mm Parhi recommendation), and that the spacing exception lets visually tiny controls pass. The AAA 44 pixel figure is not justified in the document. Platform guidelines from Apple and Google specify their own sizes; I did not confirm those numbers this session, so LTF should check current platform documents before quoting them.

### Implications for LTF

Treat 24 by 24 CSS pixels as the absolute floor for any pointer control, and design primary and repeated controls (next step, checklist tick, answer options, fly-mode buttons) at the 44 pixel level or larger because the touch studies and the sim-side use case justify it. Apply the spacing rule between adjacent small controls such as plus and minus steppers. Every drag widget (heading dial, slider, sortable item) needs a tap or button alternative under 2.5.7, which also helps a learner using a mouse beside a keyboard in the sim chair. LTF's own content validation could assert target sizes in component tests.

Confirmed this session: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html, https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html, https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html, and the front matter of https://www.w3.org/TR/WCAG22/ (title, status, date, editors, list of new criteria).

## wroblewski2009inline

Wroblewski, L. (2009, September 1). Inline validation in web forms. A List Apart, Issue 291.

### Core claims

Wroblewski reports a usability study, run with the London firm Etre, comparing a registration form that validated only on submit with five variants that validated inline (as people fill in the form). The best inline variant beat the control on every measure: higher success, fewer errors, faster completion, higher satisfaction and fewer eye fixations. The article's practical point is not that inline validation is always good but that its effect depends on timing, on message style and on the kind of question. It is a small practitioner study with a published write-up and open comments, and its headline percentages became the most quoted numbers in the form-validation debate.

### Specifics

Design as stated in the article: 22 average users aged 21 to 49; six versions of a registration form (a control that validated when the user clicked "create account", and five inline variants), presented in random order. Measures were success rate, error rate, completion time, satisfaction ratings and eye-tracking metrics. Timing variants were "after" (validate when the field is left), "while" (validate as the user types) and "before and while". Display variants were success messages that faded, messages inside fields, and persistent messages outside fields.

Reported results, best inline version against control: success rate up 22 percent, errors made down 22 percent, satisfaction rating up 31 percent, completion time down 42 percent, eye fixations down 47 percent. On timing, the "after" method was fastest, seven to ten seconds faster than "while" and "before and while" respectively; "before and while" produced the highest error rates and worst satisfaction, because premature error messages distracted people (a participant quote on the author's talk slides says it is frustrating when a field flashes red before anything has been typed). Only 30 to 50 percent of participants noticed validation messages on simple first-half fields (name, email) against 80 to 100 percent on harder second-half fields such as user ID and password, so validation matters most where answers are not obvious. Persistent messages outside the field worked best; fading success messages were easily missed and made some people worry that valid fields had become invalid; in-field messages gave no clear benefit. Success checkmarks on simple fields caused confusion about whether they meant "correct" or merely "valid".

Recommendations: reserve inline validation for questions people need help with, validate open-ended questions after the user finishes (or while typing with a delay), keep messages persistent and outside the input, and clarify what a success indicator means.

### Replication and criticism

The article lists its own caveats and its comments add more. The sample is small; Etre described the metrics as indicative, not definitive. Commenters questioned the within-subjects design and familiarity bias (Etre said order was randomized). Errors were counted only at submission, so corrections made during inline validation were not counted as errors, which flatters the inline versions. Percentages from small counts can mislead. Vision-impaired and screen-reader users were not tested, and server-side validation is still required. The finding pulls against the earlier Basel experiment reported in Bargas-Avila's chapter (a source in this lane), in which inline error messages led to significantly more errors because people ignored them. The two are compatible only if timing and message design matter, which is the author's own conclusion. Baymard's later large-scale testing (the next source) supports validating on blur and clearing errors promptly.

### Implications for LTF

Challenge answers and account forms in LTF should validate sparingly. Validate unit or format problems (for example an altitude typed with the wrong unit, or a malformed email) when the learner leaves the field, never while they are still typing the first characters. Do not show green ticks on trivially correct fields; reserve inline help for fields where mistakes are likely, such as passwords and username availability. Keep the message persistent next to the field, with text and an icon, and keep a submit-time summary as a safety net. In a quiz, inline correctness feedback while typing would turn a recall task into trial and error, so check quiz answers only on submit. Do not quote the 22, 31, 42 and 47 percent figures as general effects; they come from one small study of one form.

Confirmed this session: full article fetched and read at https://alistapart.com/article/inline-validation-in-web-forms/ (study design, results, timing and display findings, author caveats and comments); author's talk slides at https://static.lukew.com/MIX10_WebForms_Lukew_03152010.pdf repeat the same Etre figures and the participant quote.

## baymard2024inline

Baymard Institute (Scott, E.). (2024, January 9). Inline form validation: 31% of sites have none and many more get it wrong. Baymard Institute research article.

### Core claims

Baymard's large-scale e-commerce usability research finds that errors shown only after submit force people to stop, hunt for the problem and often re-enter data, and that live inline validation shortens correction because the input is still fresh. It also finds that many sites implement inline validation badly. The article gives three implementation details: avoid premature validation, remove error messages as soon as the field becomes valid, and show positive validation as well as errors. The evidence is participant observation from the institute's large-scale testing, backed by a site benchmark, written by Baymard's research lead.

### Specifics

Baymard describes its method only as multiple rounds of large-scale testing, with participant observations and quotes, and a benchmark of top e-commerce sites (the site describes it as covering 344 sites; the article does not give participant counts). On prevalence it reports that 31 percent of sites provide no inline validation at all (its own summary says 32 percent, a one-point inconsistency within the article).

Observed problems with submit-only errors: people must stop and locate the error, forms sometimes reset so fields must be re-entered, and the flow is interrupted just after pressing submit. Examples named include sites that let users leave invalid fields unflagged and one where a participant received two separate submit-time errors in a row.

The three details: (1) Premature validation. Some sites told users that their input was wrong before they had typed enough (street address, email, phone and card fields are cited). Participants found this frustrating and it interrupted typing. Recommended: validate when the user leaves the field (onblur), and for fixed-length fields such as ZIP codes, phone and card numbers validate once the expected length is reached. (2) Remove errors immediately. Some sites kept the error visible after the field was fixed, especially in interdependent fields such as password confirmation, and users read it as still wrong. Recommended: recheck on every keystroke so the error clears as soon as the input becomes valid. (3) Positive validation for all fields: checkmarks or green borders reduce the load of reviewing the whole form and give a sense of progress; password strength and match indicators are cited. Further recommendations: validate related fields together and keep a traditional error page, because users may still submit with errors present.

### Replication and criticism

This is an industry research article, not a peer-reviewed study, with no reported sample sizes and no statistics. It confirms Wroblewski's recommendation to delay validation until the user finishes, and it conflicts with the older Basel result that inline error messages increased errors, and with Wroblewski's own warning that success checks on trivial fields can confuse. Where Baymard advises positive validation on all fields and Wroblewski advises restraint, the disagreement is real and untested head to head in what I read. The benchmark counts (31 or 32 percent) are properties of large retailers and may not describe education sites. The recommendations rest on observation of e-commerce checkout, where address and card entry dominate.

### Implications for LTF

Adopt the common ground of the two sources: validate on blur or at a known length, never on first keystroke, clear errors the instant they are fixed, and also show a summary at submit. On sign-up, use positive confirmation sparingly, for example a password-match or strength indicator, but not a tick on every field. Do not copy the retail setting wholesale: LTF has few fields, so many of the observed checkout failures (address, card) do not apply, and the largest value is in password and confirmation handling. For challenge-answer fields, validate format only (numbers, units), never correctness before submit.

Confirmed this session: https://baymard.com/research-articles/inline-form-validation fetched and read (author, date, findings and recommendations, internal 31/32 percent inconsistency).

## christian2007helping

Christian, L. M., Dillman, D. A., & Smyth, J. D. (2007). Helping respondents get it right the first time: The influence of words, symbols, and graphics in web surveys. Public Opinion Quarterly, 71(1), 113-125.

### Core claims

Survey methodologists, not interface designers, produced some of the cleanest experiments on how the appearance of an answer space steers what people type. This article applies visual design theory to a concrete problem: getting web respondents to enter a date in the format the researcher wants (two digits for the month and four digits for the year), so that no error message or correction request is needed afterward. Across a series of experiments embedded in web surveys of random samples of university students, the authors manipulated the size and proximity of the answer spaces, symbols instead of words as instructions, the wording of the question stem and where the symbolic instruction appeared. Use of the desired format rose, through the series of manipulations, from 45 percent to 96 percent. Their conclusion is that writing effective web survey questions may depend as much or more on the presentation of the answer spaces as on question wording itself.

### Specifics

I could read the publisher's abstract page and the way the study is described in the Bargas-Avila chapter in this lane, but not the full paper, so the details below are limited to what those two accounts state. The experiments asked for a month and a year in two separate text boxes. The manipulations were: making the month box half the size of the year box, so that the box width signals the expected length; using the symbols MM and YYYY placed with the boxes instead of verbal instructions such as "enter two digits for the month"; changing the question stem; and moving the symbolic instruction around the boxes. The Bargas-Avila chapter reports that 92.9 to 95.8 percent provided the correct format when symbols (MM and YYYY) were used, and that positioning the instruction to the right of the year field led to fewer correct answers. A search-result snippet of the paper gave 55.3 percent with word labels against 90.6 percent with the symbolic instruction, but I could not confirm that snippet against the full text, so it is not relied on.

A companion study by Smyth, Dillman, Christian and McBride (Public Opinion Quarterly, 2009, 73(2), 325-337, DOI 10.1093/poq/nfp029), whose abstract I read, shows the same design logic for open-ended answers: enlarging the answer box had little effect on early responders but substantially improved response quality among late responders, and any explanation that made quality and length salient improved quality for both early and late responders.

### Replication and criticism

The results come from surveys of university students answering web questionnaires, in a context with no task stakes beyond participation, so effect sizes may differ for other populations and for sign-up forms. The direction (visual cues beat words) is consistent with form-usability work from other groups: Couper and colleagues found more incorrect answers when field size did not fit expected input (as cited by the Bargas-Avila chapter), and Seckler and colleagues found format specification to be among the most influential guideline fixes. I did not verify any later replication specifically of the 45 to 96 percent series. The dependence on exactly which manipulations were combined means the headline jump cannot be attributed to a single change.

### Implications for LTF

For typed answers in challenges and for any date or time field, let the input itself carry the instruction: set the box width to the expected number of characters, put the format symbols (such as HH:MM or a unit suffix) inside or immediately beside the box, and avoid a paragraph of rules. A learner entering an altitude, a heading or a frequency should see the expected digit count in the box shape and a visible unit, so mistakes are prevented, not reported. Use separate small fields where a structured value is short and fixed, and one text field where format is flexible. Open-ended reflection prompts, if LTF adds any, should use a roomy answer box and a sentence that tells the learner what a useful answer looks like.

Confirmed this session: publisher abstract page at https://academic.oup.com/poq/article-abstract/71/1/113/1885521 (experiments, the 45 percent to 96 percent result, conclusion); Crossref record 10.1093/poq/nfl039 (volume 71, issue 1, pages 113-125, 2007); the Bargas-Avila chapter text; the 2009 companion abstract page at https://digitalcommons.unl.edu/sociologyfacpub/668. The full text could not be retrieved.

## carroll1987paradox

Carroll, J. M., & Rosson, M. B. (1987). The paradox of the active user. In J. M. Carroll (Ed.), Interfacing thought: Cognitive aspects of human-computer interaction. MIT Press.

### Core claims

Carroll and Rosson, then at IBM, described a pattern from user studies at the IBM User Interface Institute in the early 1980s: new users do not read manuals or complete set-up and instead start using the system at once to get their task done. This is paradoxical, because spending some time up front on learning or configuring would save time later. The paradox gives designers a principle: do not design for an idealized, rational learner who studies first; design for an active user who acts with limited knowledge and learns from what happens. The chapter is a theoretical and review argument grounded in observations of learners, and is one of the founding statements of minimalist instruction and of "learning by doing" interface design.

### Specifics

I could not read the chapter itself, only descriptions of it. The accounts I could fetch say: the observation arose from IBM user studies; users skip manuals and start working because they are motivated to finish a task, not to learn the system; and they would be better off if they invested in learning. Nielsen's 1998 column on the topic (Nielsen Norman Group, 4 October 1998, which credits the 1987 chapter) draws the lesson that designers cannot assume an idealized, rational user and must design for the way users actually behave, and notes that later studies, including his own, confirmed the pattern. A university lecture note describes the argument as identifying two problems, the production paradox and the assimilation paradox, both attributed to the active user, who "acts on the system with limited knowledge of it". The note does not define them, so I describe them only by that label. A related experiment by Carroll and Carrithers, the training-wheels interface (see the next source), is the most cited design response from the same research program.

### Replication and criticism

The claim that users skip manuals is a robust, widely reported observation, but the evidence I could access is secondary: I have not seen the original data, and "users never read" is an overstatement if taken literally (people do consult help once stuck, especially when it is short and located at the point of need). Nielsen's account says later studies confirmed the pattern but does not cite them in the text I read. The paradox is a design heuristic, not a measured effect size, and has no formal replication record that I can point to. Popular summaries add specifics (for example that tooltips are the remedy) that are not in the chapter's accessible descriptions and should not be attributed to it.

### Implications for LTF

LTF's learners are exactly active users: they will open the simulator and try things before finishing a lesson. Do not front-load a long tutorial or settings tour. Put the first real task on the first screen, give guidance where the learner is working (the current step, the next action, a one-line hint on demand), and make exploration safe so that a wrong click costs nothing and can be undone. The first lesson should start with something to do in the sim within a minute, with theory attached to the action, not before it. Because learners skip, anything critical (a safety or sim-setup step) must be in the path of the task, not in a "read me first" panel. Provide a short optional "how this works" link and measure whether it is opened.

Confirmed this session: Open Library record for the book (Interfacing thought, MIT Press, 1987; ISBN 0262031256, work OL18262599W, via https://openlibrary.org/api/books); Nielsen Norman Group article https://www.nngroup.com/articles/paradox-of-the-active-user/ (read in full); lecture note https://cwa.mdx.ac.uk/bis4407/lec12Examples/carroll.html. The chapter text and page range were not available and are left blank.

## carroll1984training

Carroll, J. M., & Carrithers, C. (1984). Training wheels in a user interface. Communications of the ACM, 27(8), 800-806.

### Core claims

New users of high-function application systems become frustrated and confused by the errors they make in the early stages of learning. Carroll and Carrithers built a "training wheels" interface for a commercial word processor in which typical and troublesome error states were made unreachable, which removed some of the sources of new-user learning problems. Learners who used the blocked-off interface learned substantially faster, achieved better learning and did better on a comprehension post-test than learners using the full system. A control group spent almost a quarter of its time recovering from the error states that the training interface blocked off. The authors speculate on how this strategy might be refined and more generally on how function should be organized in a user interface. This is the main experimental demonstration of the idea that onboarding can be done by restricting what the system allows, instead of explaining it.

### Specifics

The abstract on the Crossref record for the paper (10.1145/358198.358218) gives the following. Design: a training interface for a commercial word processor, built from the basic functions of the system itself, in which typical and troublesome error states were unreachable. Outcomes: faster learning, better learning achievement and better performance on a comprehension post-test, compared with a control group that used the system without the block. The control group's time lost to recovering from the error states the training interface blocked off was almost a quarter of their time. The companion article in Human Factors by the same authors (26(4), 377-389, 1984, DOI 10.1177/001872088402600402), whose abstract I read, reports that the training-wheels word processor disabled functions that novices typically do not need but that could lead to errors and confusion, and that in two experiments (one on learning by doing and one on learning from the manual) the restricted version improved learning efficiency.

Secondary summaries I came across give further numbers (twelve office temporaries, a 21 percent speed advantage, seven blocked errors), but I could not confirm them against the paper or a reliable summary, so they are not used here. The full text was not available to me this session.

### Replication and criticism

The paper is a single controlled experiment with a small sample of novices on a 1980s word processor, and the abstracts say little about long-term transfer. Follow-up work by Carroll and colleagues in the same research program (the Human Factors paper) tested the idea in two experiments. I saw a secondary note that a later study by Catrambone and Carroll found training-wheels learners did better on advanced editing tasks after moving to the full system, but I did not confirm it. A design risk follows from the idea itself: blocking functions can frustrate people who want them, so the interface must make clear what is unavailable and why; I did not find a controlled study of that cost. Treat the finding as strong support for the principle but weak support for any particular implementation.

### Implications for LTF

Training wheels is the most direct fit for LTF's first lessons. Early on, show a reduced interface: only the controls that matter for this step are active, and the rest are hidden or inert with a short explanation of why. Locked widgets should say what they unlock ("Available after Lesson 3"). In a sim-setup walkthrough, hide advanced settings until the learner has completed the basic flight, and in a challenge, disable options that lead to well-known beginner errors until the learner has seen why. Unlock progressively and let experienced learners skip ahead, since the cost of the approach falls on people who already know the system. Never block a function in a way that leaves the learner unable to tell why it does not work.

Confirmed this session: Crossref records and abstracts for 10.1145/358198.358218 (CACM) and 10.1177/001872088402600402 (Human Factors); the Penn State repository abstract page at https://pure.psu.edu/en/publications/blocking-learner-error-states-in-a-training-wheels-system/. The full text and the secondary figures were not confirmed.

## kendrick2020mobileapp

Kendrick, A. (2020, June 21). Mobile-app onboarding: An analysis of components and techniques. Nielsen Norman Group.

### Core claims

The Nielsen Norman Group article analyzes what mobile apps do in their first-run experience and argues that onboarding adds interaction cost and strains memory, so professionals should avoid creating app onboarding whenever possible and fix usability problems instead. It sorts onboarding into components: tutorials in a deck-of-cards format, interactive walkthroughs, and coach marks (instructional overlays), and gives conditions under which each is justified. It is a practitioner analysis from a research firm, built on example apps and on the firm's earlier research, not a controlled experiment.

### Specifics

The article discusses about eleven example apps and does not say how many apps were reviewed or how they were chosen. Its points: deck-of-cards tutorials did not improve task performance in NN/g research the article cites, and are not recommended; if used, show a highly visible Skip option, few cards and one concept per card. Interactive walkthroughs are recommended only when the workflow is new or unfamiliar (examples given are a game and a mind-mapping app), and are called unnecessary for workflows people already know. Coach marks are described as often nice to have, not need to have, and should be timely and unobtrusive; one weather app is criticized for highlighting every interaction on a single screen, and a popup tip is suggested for a checklist app. The article says onboarding screens may be useful in three situations, one being an app, such as banking, where an account must be created and identity confirmed before use. Its one numeric example is illustrative: prompting a habit-statistics feature after seven days of data. It reports no study percentages or sample sizes.

### Replication and criticism

The evidence is expert judgment plus examples and a reference to prior NN/g tutorial testing, whose method I did not read. It therefore cannot establish how much onboarding helps or hurts, and its recommendation is a judgment, not a measured result. It is consistent with the older experimental line of Carroll (paradox of the active user, training wheels): people want to act, and constraint inside the task teaches better than explanation ahead of it. The article is about mobile apps and not about web learning products where the first task is itself instructional. There is no controlled replication of its component recommendations that I could confirm.

### Implications for LTF

Do not build a carousel tutorial for LTF. Let the first lesson be the onboarding, with the learner taking the first real action quickly. Use coach marks only for the one interface that is not obvious: fly mode, the first time it is opened, with one dismissible tip tied to the control it explains and not shown again after dismissal. Ask for an account only when it provides value (saving progress), and allow the first lesson without one. Any permission or setting (notifications, sim connection) should be requested at the moment it is needed with a sentence saying why. Measure whether learners skip or open any first-run help before keeping it.

Confirmed this session: the article page at https://www.nngroup.com/articles/mobile-app-onboarding/ fetched and summarized (author, date, components, recommendations, no study numbers). Method details and the earlier tutorial research were not available.

## hoober2013how

Hoober, S. (2013, February 18). How do users really hold mobile devices? UXmatters.

### Core claims

Hoober reports a field observation of how people hold and touch phones in public places and uses it to argue that designers should not assume a single grip. His data show that one-handed use is common but not universal, that people switch grips often, and that a large share of observed phone use involves no touching at all. The article became the origin of the popular "thumb zone" reach diagrams. Importantly, the page now carries the author's own later correction, discussed below, which makes this source a useful warning about how a small observational study turned into a design myth.

### Specifics

Method: observation over about two months, ending January 8, 2013, by Hoober and a few other researchers, of people using mobile devices in public places such as streets, airports, bus stops, cafes, trains and buses. There were 1,333 observations; 780 of the people observed were touching the screen and the rest were listening, looking or talking. Observers did not record individual activities, demographics or device identities, and tablets were rarely seen and excluded. Each person was logged from the first few seconds of observation.

Results as stated on the page: over 40 percent of observations involved no key or screen input; voice calls were 22 percent and passive use such as listening 18.9 percent. Among people touching the screen, grips were one-handed 49 percent, cradled (one hand holding, the other touching) 36 percent and two-handed 15 percent. Of one-handed users, the right thumb was used 67 percent and the left thumb 33 percent. Of cradlers, 72 percent touched with a thumb and 28 percent with a finger, and 79 percent held with the left hand. Of two-handed users, 90 percent used portrait. His conclusions: grip is not static, users switch grips sometimes every few seconds, usually when the task changes; one-handed use often coincides with other tasks such as carrying bags; designers should not assume one-handed use, should not put low-priority or dangerous functions in hard-to-reach places, should pay more attention to left-hand interaction, and should test prototypes by holding them since fingers obscure content.

### Replication and criticism

The article lists its own limitations: it cannot give the share of the whole population using phones, since the total number of people encountered was not counted; no demographic or task data; devices were not reliably identified, so phone sizes were not compared; observations were brief and made in public, not in offices or homes; and the reach diagrams were rough, based on informal sampling of coworkers. The page also carries an editor's note that Hoober later did further research and updated his guidelines, and a 2017 comment in which he says the reach drawings and the claim about touch locations were inaccurate and should be ignored. Commenters raised handedness skew and missing age data. So the grip proportions are a dated, single-method snapshot (2013 phones, public settings), and the thumb-reach map should not be used.

### Implications for LTF

Do not design LTF around a thumb zone. The relevant lesson is the opposite one: grips vary and change, the learner's hand is often doing something else, and there is no safe region of a screen. LTF fly mode is also not a handheld phone situation; it is probably a tablet or phone propped up beside a keyboard (LTF should confirm with its own usage data). Place controls where they are reachable by either hand and in consistent positions, and avoid putting destructive actions (reset progress, leave challenge) in places that are easy to hit by accident. Make sure a hand or finger does not hide the one piece of information the learner needs, such as the current step or a value being adjusted; show it offset from the control. Include left-handed use in tests. If LTF wants grip statistics for its own audience, measure them with its own analytics, not from this article.

Confirmed this session: full article fetched and read at https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php (method, numbers, conclusions, limitations, 2017 author comment and editor's note).

## wroblewski2008web

Wroblewski, L. (2008). Web form design: Filling in the blanks. Rosenfeld Media.

### Core claims

This is the most-cited practitioner book on forms. It treats forms as conversations between a company and a person, argues that forms are often the linchpin of a web application's success yet are poorly considered, and offers data-driven and experience-based recommendations drawn from the author's work at Yahoo! and eBay, newly commissioned usability studies and the views of other designers (publisher description, https://lukew.com/resources/web_form_design.asp). The book is craft and practitioner authority, with some original testing, and not peer-reviewed research. It is the origin of several widely repeated rules: top-aligned labels for speed, right-aligned labels as a compromise, and minimizing the number of inputs.

### Specifics

I did not have the book's text, so the content below is limited to the publisher's description, a published review and the author's own conference slides, and is labeled accordingly. A published review (Designers Review of Books, January 2009) describes three sections: Form Structure (designing around the user's goal, balancing marketing, business and usability needs, deciding whether a form is needed at all, including an eBay registration redesign mapped page by page using drop-off data); Form Elements (labels, alignment, input fields, actions, and messaging such as help, errors and success, including the pros and cons of right-aligned labels); and Form Interaction (auto-validation, input types and engaging people from a human perspective). The review cites a case study from Jared Spool in which a store that required registration before checkout replaced its register button with a continue button and a note that an account was optional, and reports it as a 45 percent increase in purchasing customers; the reviewer notes the figures come from Spool's article, not the book's own research, and I did not verify them independently.

From the author's 2010 conference slides (Modern Web Form Design, MIX10, https://static.lukew.com/MIX10_WebForms_Lukew_03152010.pdf): any question asked requires people to parse it, formulate a response and input their answer, so ask whether it can be removed, postponed or inferred; top-aligned labels are suited to familiar data, minimize completion time, suit localization and complex inputs, and are a better format for mobile screens but need more vertical space; for selection-dependent inputs use page-level for many dependent inputs, a drop-down when a long initial list has few dependents each, and inline exposure for short lists; validate "open" inputs after people finish and keep messages persistent. These slides repeat the Etre figures reported in the separate A List Apart source in this lane.

### Replication and criticism

The book predates much of the empirical work in this lane. Its label-placement advice leans on Penzo's eye-tracking write-up, which has an unreported sample size, and the 2011 comment by Caroline Jarrett on the Penzo page points to Das and colleagues (2008) and Feichtinger (2010) as finding no advantage for labels above fields in simple forms. The inline-validation advice is backed by one small study (the A List Apart article), and the Basel experiment reported in Bargas-Avila's chapter found the opposite for one error-message design. The big-dollar case studies that circulate with this literature are secondhand. The review calls the book engaging and compares it to Krug, which tells us about reception, not accuracy. I could not read the book itself, so whether the text hedges these points is unknown to me.

### Implications for LTF

Use the book as a checklist, not as proof. Concrete takeaways that do not depend on contested claims: ask only questions you need (can it be removed, postponed or inferred), which for LTF means a sign-up with email and password and nothing else, with everything else asked later and only if it improves the learner's experience; frame the form as a conversation with plain, second-person labels; and treat the form's primary action as visually dominant with secondary actions quiet. Verify any specific recommendation against the primary evidence in this lane before putting it into LTF's design rules, particularly label alignment and inline validation. Do not cite the dollar figures from case studies.

Confirmed this session: Open Library data record for ISBN 9781933820248 (Web form design, Luke Wroblewski, Rosenfeld Media, 2008; work OL8508572W via the search API); publisher page https://lukew.com/resources/web_form_design.asp; review https://designersreviewofbooks.com/2009/01/web-form-design; conference slides read in full. The book text itself was not read.

## jarrett2009forms

Jarrett, C., & Gaffney, G. (2009). Forms that work: Designing web forms for usability. Morgan Kaufmann.

### Core claims

Jarrett and Gaffney, who come from the information-design and usability-consulting tradition, argue that a form is a conversation conducted in three layers: relationship (why the person is there and whether they trust and understand what is being asked), conversation (the questions, and whether they can be answered), and appearance (layout and controls). A form fails if any layer fails, and designers who work only on appearance fix the wrong layer. The publisher's description says the book shows how to design forms that are efficient, attractive and cost-effective, with a focus on asking the right questions in a way that users can answer. The evidence type is practitioner craft and consulting experience, with references to published studies.

### Specifics

From the publisher's page (Elsevier): the book covers the full process of making forms, presents the three-layer model and includes many examples, from label alignment and mandatory fields to grids and color. The table of contents on that page is: Introduction (what is a form?); persuading people to answer; gathering the right information; making questions easy to answer; writing instructions; choosing between drop-downs and other controls; making the form flow easily; taking care of the details; making the form look easy; testing (described as the best bit). The Open Library record gives xvii and 199 pages, with Gerry Gaffney as contributor, and a foreword by Steve Krug is mentioned on the publisher page.

From Jarrett's own slides (as summarized in a web search result, not read directly): relationship is about getting users to the right form and explaining what they must do; conversation is about handling real-world options and the questions asked; appearance is about layout and clearly labelled controls; complexity affects all three layers, and failure shows up as users being unable to read the form, unable to answer it or unable to reach their goal. In a comment on the Penzo article, Jarrett argued that label-placement conclusions overstated the experiment's evidence and that designers should consider mobile devices, localization and form complexity.

### Replication and criticism

The three-layer model is a framework with no experimental test that I could find; it is useful because it routes problems to the right fix, not because it has been measured. Where the book gives specific rules (for example on drop-downs against radio buttons) the empirical basis is mixed, as the radio versus drop-down studies reported in Bargas-Avila's chapter show (no consistent speed difference). The author's own caution on label placement is evidence for treating pat rules skeptically. I did not read the full text; the claims here come from the publisher's description and table of contents and from the Penzo page comment.

### Implications for LTF

The three layers are a handy diagnostic for LTF's few forms and for challenge answer entry. Relationship: explain in one line why LTF asks for an email (to save progress) before asking. Conversation: ask only questions that the learner can answer and that LTF will use, and write instructions as part of the question, not in a separate block. Appearance: single column, visible labels, plain controls. For in-sim challenges, the conversation layer matters most: the learner must know what value to read from the sim, where in the sim to find it and in which unit before the answer box appears. Use the book's final chapter as a prompt to test every form with a few real beginners before launch.

Confirmed this session: Open Library records for ISBN 9781558607101 (Forms that work, Morgan Kaufmann/Elsevier, 2009, Gaffney as contributor, xvii + 199 pages); Elsevier product page https://shop.elsevier.com/books/forms-that-work/jarrett/978-1-55860-710-1 (description, authors, table of contents, date listed as 2008 and 2009); web search summary of the three-layer model. The book text was not read.

