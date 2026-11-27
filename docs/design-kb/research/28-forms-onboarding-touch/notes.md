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

Design: between-subjects, N = 65 (42 female, mean age 27.5, range 18 to 67), 32 on original forms and 33 on improved forms; each person filled in all three forms after a practice form. The forms came from German-language newspaper sites, chosen by screening 23 registration forms against the 20 guidelines and then picking one of rather good quality (rank 11), one medium (rank 13) and one rather poor (rank 18). The authors excluded the top third of the ranking because they had too little room to improve. They did not apply the "keep the form short" guideline, because that needs knowledge of the business. The original forms violated 9, 9 and 12 guidelines respectively.

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

The game, "Hit It!", asked players to touch circles that appeared on screen, with a time limit that shrank, three stages of levels, scores, badges and high-score lists as motivation. It was published October 31, 2010. Data came from 91,731 installations that provided meaningful data (from 99,749 total) and 120,626,225 touch events. The sample was strongly Western (48.31 percent had a US English locale, 9.68 percent British English). Analysis used the four most common devices of the four most common resolutions (an HTC Wildfire, LG Optimus One, Samsung Galaxy S and Sony Ericsson Xperia X10), normalizing target size to millimeters. Only single-target micro levels were used for error analysis, the first level was dropped as practice, and only players with at least a hundred micro levels counted.

Findings: the error rate decreased with target size; below 15 mm error rose dramatically and jumped to over 40 percent for targets smaller than 8 mm. For targets under 12 mm, error at the screen border was much higher than at the center (on the HTC Wildfire, 31.68 percent at the border against 17.59 percent in the center), which the authors say corresponds to making a target about 3 mm larger (8 mm to 11 mm) to compensate. Touch offsets were systematic: for the Samsung Galaxy S the touches were skewed toward a position about 1.33 cm left of and 2.12 cm above the lower-right corner, and the other phones showed a similar skew. Shift vectors from 30 by 30 screen areas, applied to the 25 percent of data held out for testing, cut errors by about 3.1 to 4.1 percent in simulation; the live test, an independent-measures experiment with 12,201 installations and 15,326,444 touch events, gave the 7.79 percent figure.

### Replication and criticism

The authors compare with Parhi and colleagues: for a 10.89 mm circle (equivalent to a 7.7 mm square), Parhi found a 5 percent error rate and Perry and colleagues 12.3 percent, against 14.19 to 18.86 percent here. They attribute the higher rate to time pressure, not seeing the next target in advance and the animated background. So absolute numbers should not be compared across studies, but the shape of the size-error curve and the importance of position agree. The authors note they did not know how participants held their phones and that right-handed versus left-handed offsets would be an interesting follow-up. The sample is skewed toward Western Android gamers on 2010-era phones with small screens, and the task is rapid reaction, not careful form filling. Later work from other groups on large-scale touch data exists; I did not read it this session.

### Implications for LTF

This study supports two design rules and cautions against over-reading the numbers. First, treat small targets as risky in a way that scales steeply: errors are modest for targets above roughly the mid-teens in millimeters in this task, and climb quickly below that. LTF should lean toward the larger end for controls the learner taps often, especially when the learner is not looking at the device (fly mode with eyes on the sim). Second, place important buttons away from the extreme edges, or enlarge them there, because edge targets are harder to hit; combine with the thumb-region advice from the Parhi study. The paper also shows that touch offsets are consistent, so a hit area slightly offset toward the usual error direction (down and toward the thumb) is a defensible refinement, but only validate that on the real tablets LTF users own. Do not use the game-derived millimeter figures as thresholds; use them to justify a generous size and spacing policy.

Confirmed this session: full text read from the published PDF at https://typeset.io/pdf/100-000-000-taps-analysis-and-improvement-of-touch-4jul17t16a.pdf (abstract, study, results, discussion); Crossref record 10.1145/2037373.2037395 (title 100,000,000 taps, subtitle analysis and improvement of touch performance in the large; pages 133-142); web search summary of the abstract.

## bragdon2011experimental

Bragdon, A., Nelson, E., Li, Y., & Hinckley, K. (2011). Experimental analysis of touch-screen gesture designs in mobile environments. Proceedings of CHI 2011, 403-412. ACM.

### Core claims

Soft buttons work well when a person is seated and looking at the phone, but people also use phones while walking, driving and doing other things. This paper asks how touch input holds up under such "situational impairments", comparing soft buttons with several gesture designs under different levels of motor activity and distraction. The authors find that when the environment is distracting, gestures can give significant performance gains and a lower attentional load, while matching soft buttons when attention is fully on the phone. Bezel-initiated gestures (starting from the screen edge) were the fastest and were not significantly affected by environment, and simple mark-based gestures were the most accurate. The implication is that the weakness of soft buttons is that they must be looked at, and that eyes-free alternatives help in divided-attention settings. It is a controlled within-subjects laboratory experiment.

### Specifics

The study used 15 participants (the reported tests have 14 degrees of freedom and the discussion refers to 13 of 15 users). It crossed four environments: direct (sitting, no distraction), indirect (sitting plus a situational-awareness task shown on a monitor), walking (on a motorized treadmill plus the situational-awareness task) and AST (sitting plus an attention-saturating task in which the user keeps a randomly drifting circle centered on a crosshair). Techniques were soft buttons (the control: 12 buttons in a 3 by 4 grid, 14.2 by 9.5 mm with 1 mm gaps), bezel marks, bezel paths, hard-button marks and hard-button paths, all designed for one-handed use. Mark gestures are simple single-stroke compass-direction marks; path gestures are free-form shapes. Eye-gaze was recorded.

Results: bezel marks had the lowest mean completion time (1,092.87 ms), significantly lower than soft buttons (1,244 ms), a 12.17 percent improvement. Soft buttons and hard-button marks (1,262 ms) did not differ significantly. Path gestures were slowest (bezel paths 1,344 ms, hard-button paths 1,534 ms). Mean accuracy was highest for hard-button marks (93.5 percent) and bezel marks (92.5 percent), followed by soft buttons (91.2 percent); path gestures were lowest (81.4 and 83.5 percent). Environment effects: soft-button time rose by 15.84 percent from direct to indirect and then stayed fairly flat, suggesting the largest cost came from not looking at the phone all the time. Bezel marks showed no significant difference across environments. Eye gaze showed gestures required looking at the phone 3.5 percent of the time against 98.8 percent for soft buttons. Performance on the distractor tasks was better with bezel marks than soft buttons. Thirteen of 15 users wanted more than one technique, and in the three non-direct environments no user preferred soft buttons. The authors give design recommendations: provide gestural shortcuts for soft-button commands, prefer marks over free-form paths unless a 2D operand is needed, and use bezel moding.

### Replication and criticism

This is a single lab study with a small sample, a treadmill and a monitor-based distractor, not real walking or driving, and with expert-style single-letter button labels. Some effects were not significant (for example bezel paths from direct to indirect, p = .052), and the gesture shapes tested affect the result, as the authors admit. The gesture types, in particular edge-initiated marks, are not widely used on mobile web pages because browsers reserve edge swipes (for back navigation and system gestures), so the direct recommendations are hard to transfer. The robust, transferable finding is the attention cost of having to look at a small target. Related studies cited in the paper by other authors (for example Kane and colleagues on larger buttons when walking) point the same direction. I have not verified later citing work in this session.

### Implications for LTF

LTF fly mode is a divided-attention interface: the learner is looking at a simulator and flying, with the page off to the side. This paper is the closest empirical match for that situation in the lane. It supports giving the learner controls that can be hit without looking: very large targets in fixed screen positions that never move, a minimal number of controls on screen, and consistent placement from step to step. It also supports offering a keyboard or voice-free alternative where reasonable, such as space or arrow keys on a desktop, but browsers do not allow edge gestures, so LTF should not depend on them. Avoid free-form gestures entirely. Expect the learner to glance away and return, so show the current step and state very clearly on every glance. Do not conclude from this paper alone that gestures beat buttons; it shows that looking is costly, not that a given swipe design suits LTF.

Confirmed this session: full text read from https://research.google.com/pubs/archive/37157.pdf (abstract, overview, results, discussion, design recommendations); Crossref record 10.1145/1978942.1979000 (title, four authors, 2011, pages 403-412).

## sears1991high

Sears, A., & Shneiderman, B. (1991). High precision touchscreens: Design strategies and comparisons with a mouse. International Journal of Man-Machine Studies, 34(4), 593-613.

### Core claims

Before smartphones, touchscreens were seen as fast but imprecise, which limited them to kiosks with large targets. Sears and Shneiderman argued that the poor reputation came from two fixable causes: noisy hardware readings and a poor selection strategy, "land-on", which commits the selection the instant the finger touches down. Their remedy combines software stabilization (filtering and smoothing raw touch data) with a lift-off strategy: the finger drags a cursor shown slightly above the fingertip and the selection is committed only when the finger is lifted. Under that design, people could hit targets as small as one pixel and performed as well as with a mouse for targets from 32 down to 4 pixels per side. The paper also proposes a variant of Fitts' law for touchscreen pointing. It is an early set of three controlled experiments and the origin of the "confirm on release" convention that mobile buttons use today.

### Specifics

I read the University of Maryland technical report version of the work (dated January 1989, with the same title), which carries the same abstract as the journal record; the figures below are from that report and should be checked against the journal article before being quoted as the 1991 numbers. The three studies compared a touchscreen, a touchscreen with stabilization, and a mouse (the third study only compared the stabilized touchscreen and the mouse). Targets were rectangles of 1, 4, 16 and 32 pixels per side, which the report gives as 0.4 by 0.6, 1.7 by 2.2, 6.9 by 9.0 and 13.8 by 17.9 mm. Subjects were university volunteers with mixed computer experience and mostly no touchscreen experience; the third study had 20 subjects. A selection ended when the target was selected or after a maximum number of errors (five in the first study, ten in the third). The cursor was a plus sign 6.1 mm above the finger. Preference was rated on a 1 to 9 scale.

Results as reported: in the first study both touchscreens were faster than the mouse for 16-pixel targets, and the mouse was faster for single pixels, with no other significant differences. In the second study the non-stabilized touchscreen produced an average of 5.95 errors per single-pixel target and hit the maximum error count more than 39 percent of the time, while the stabilized one averaged 0.73 errors and hit the maximum under 0.01 percent of the time, and subjects preferred the stabilized touchscreen. In the third study, the stabilized touchscreen was as fast or faster than the mouse down to four pixels, the mouse was better for the single-pixel target (9.8 against 5.4 seconds mean selection time), and subjects preferred the mouse (mean 7.9 against 5.6). The authors also discuss "gravity" (enlarging the selectable area around a target), zooming for tiny targets, and arm fatigue as open issues.

### Replication and criticism

The studies used a 1980s touchscreen with a mouse as comparator, a trained-by-instruction cursor offset and mostly novice subjects, so the absolute sizes do not map to phones. Parhi and colleagues (a source in this lane) cite this work for the finding that lift-off selection let touch match mouse accuracy down to 1.7 by 2.2 mm targets, while noting that selection times were fastest and errors lowest for the largest targets (13.8 by 17.9 mm). The central idea, that commitment on release lets users correct their aim, has been adopted widely and replicated in practice by every touch OS's button behavior, though I did not verify specific later controlled replications in this session. The stabilization finding mostly concerns hardware noise that modern controllers handle.

### Implications for LTF

On the web, the usual click or tap event already fires on release, so LTF gets lift-off for free; the design lesson is not to bypass it. Do not trigger irreversible or progress-advancing actions on touch-down or pointer-down (for example, advancing a checklist or submitting a quiz answer on pointerdown), and allow the learner to slide off a button to cancel. For drag widgets such as a heading or throttle slider, show the value being set in a readout offset from the fingertip so the finger does not hide it, which is the same problem the offset cursor solved. The paper's "gravity" idea suggests larger invisible hit areas around small controls. Finally, a one-pixel-accuracy mindset is wrong for LTF; the evidence shows large targets are always fastest and least error-prone, so design for coarse input.

Confirmed this session: University of Maryland technical report PDF read in full (https://www.cs.umd.edu/users/ben/papers/Sears1991High.pdf); Crossref record 10.1016/0020-7373(91)90037-8 (journal, volume 34, issue 4, pages 593-613, April 1991); Penn State Pure record via web search summary.

