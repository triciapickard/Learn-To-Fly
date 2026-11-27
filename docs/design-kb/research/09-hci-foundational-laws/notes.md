# Notes: HCI foundational laws and models

## Fitts1954

**Core claims.** Paul Fitts applied Shannon's information theory to the motor system. A rapid aimed movement over an amplitude A to a target of tolerance (width) W can be treated as transmitting information through a noisy channel, and the human motor system has a roughly constant channel capacity for a given limb and movement type, independent of how the amplitude and tolerance are combined. The practical consequence is a trade-off: if you demand more precision (smaller W) or more distance (larger A), movement time rises, and the rise is linear in the logarithm of the ratio A/W rather than in A or W separately. Faster movements are therefore only possible by accepting a wider spread of endpoints, which means more errors.

**Specifics.** Fitts defined the index of difficulty as ID = log2(2A/W) bits and the index of performance (now called throughput) as IP = ID / MT in bits per second. Four experiments were run: reciprocal tapping between two metal plates with a stylus, and disc and pin transfer tasks in which the participant moved washers or pins between holes or onto posts. The amplitudes were roughly 2, 4, 8 and 16 inches and the target widths roughly 0.25, 0.5, 1 and 2 inches (approximately; the combinations were crossed so that several A/W pairs had the same ID). The tapping task used two stylus weights (light and heavy) to see whether load changed capacity; it changed it little. Participants were told to be both fast and accurate, and Fitts estimated the information in the response from the distribution of endpoints, in effect treating the spread of landing points as noise. Reported capacity for the tapping task was on the order of 10 bits per second (secondary sources give about 10.6 bits/s for reciprocal tapping). The statistical form that practitioners use today is MT = a + b ID, with a and b fitted by regression for each device and condition; b is the reciprocal of throughput. The intercept a absorbs reaction and start-up costs and has no theoretical meaning in the original model.

**Criticism and status.** The law is among the most replicated results in HCI. Known issues: (1) The original ID can go negative for A less than W/2, which is why MacKenzie 1992 advocated the Shannon form log2(A/W + 1). (2) Fitts' original treatment used nominal W; later work shows that effective width, computed from the observed endpoint scatter (We = 4.133 times the standard deviation of endpoints, which corresponds to about 4 percent errors), makes results comparable across studies with different error rates. (3) The law applies to rapid, ballistic-plus-correction movement toward a visible target; it does not describe path-following (see Accot1997), very slow movements, or targets that must first be found by visual search. (4) The constants a and b differ by device, limb, posture and age, so a published value for a mouse cannot be assumed for a thumb. (5) Touch input adds finger occlusion and endpoint noise that Fitts' law alone misses (see Bi2013).

**Use for LTF.**
1. Make the most frequent control on each screen large and close to where the pointer or thumb already is; in fly mode the "next checklist item" action should be both the largest and the nearest target.
2. Hit areas can exceed the visible mark: a slim dial handle or slider thumb should carry an invisible padded target.
3. Screen edges and corners on desktop behave like targets of effectively unbounded depth, so persistent controls placed there are cheap to hit.
4. Separate destructive controls (reset progress) from common ones by distance, which deliberately raises their ID.
5. On mobile, place primary actions in thumb reach and keep spacing between adjacent targets so that errors do not rise when learners are tilted or distracted.

## Fitts1964

**Core claims.** Fitts and Peterson extended the 1954 result from serial (reciprocal) tapping to discrete responses, where the participant makes a single aimed movement to one of two targets after a stimulus signals which one. They found that the same relationship between movement time and the A/W ratio holds for discrete moves, so the law is not an artifact of the rhythm of repetitive tapping. They also separated the time taken to choose from the time taken to move, which is the first clean demonstration that choice (Hick-like) and movement (Fitts-like) times add.

**Specifics.** Participants had a stylus and two target plates; a stimulus light told them which plate to hit. Target width and amplitude were varied across blocks, as in 1954. The authors varied the a-priori probability of each response and found that when the signal was predictable, reaction time dropped but movement time did not, indicating that the movement phase is mostly independent of prior expectation. Secondary sources report a throughput of about 13.5 bits/s for the discrete task after removing reaction time, compared with about 10.6 bits/s for serial tapping; I could not confirm those figures against the original paper and they should be checked before being quoted. The paper also stresses that the information handled in the movement is separate from information in the choice.

**Criticism and status.** The result that discrete and serial throughputs differ has been revisited: discrete tasks tend to give higher throughput than reciprocal tasks, probably because a reciprocal task includes both a movement and a reversal. The additivity of choice and movement times is approximately true, but real interfaces add visual search before pointing, which neither paper models. Samples were small and the movements were arm movements with a stylus.

**Use for LTF.**
1. Treat any "pick one then act" interaction as two stages: deciding (Hick-like) and reaching (Fitts-like), and optimize each separately.
2. Predictable next actions reduce decision time without changing the cost of reaching, so make the likely next button the default and the most prominent.
3. For discrete taps in a cockpit-like panel, the hit area matters more than animation.
4. Budget per-step time: decision plus pointing, then add system response.

## Hick1952

**Core claims.** W. E. Hick of the Medical Research Council Applied Psychology Unit in Cambridge asked how choice reaction time depends on the number of alternatives. Using the information-theory framework, he argued that the time to respond is proportional to the information (in bits) the stimulus carries about which response is required, that is, to the reduction of uncertainty. For n equally probable alternatives the relation is RT = a + b log2(n + 1), where the +1 allows for the uncertainty about whether a signal will occur at all. The practical reading is that each doubling of the number of equally likely choices adds a roughly constant increment to reaction time.

**Specifics.** According to the abstract, the paper reports two experiments: a conventional choice-reaction task with up to ten alternatives, and a ten-choice task in which participants traded speed for accuracy by accepting different error rates. The apparatus was a row of lights with a corresponding row of keys that the participant pressed with the fingers. Hick concluded that the rate of gain of information is roughly constant, at about five bits per second (as stated in the paper's text according to a search summary). That figure should be read as the rate implied by the slope under his conditions; it is much lower than motor capacity in Fitts' work because it involves a decision process. Participants were practiced, and stimuli were equiprobable and unrelated to the responses they triggered, an arbitrary mapping.

**Criticism and status.** Replicated many times for arbitrary stimulus-response mappings and small sets. Does not hold for highly compatible mappings such as saying the word you hear or pointing to a light, where the slope is near zero, and the slope shrinks with extended practice. Performance with very large sets, sequential dependencies, and with visual scanning of menus (where search strategies dominate) departs from the law; see Proctor2018 and Liu2020. The log term has also been explained by other models (accumulator and diffusion models), so the law is a description, not a mechanism.

**Use for LTF.**
1. Fewer, grouped options help novices but the gain from removing a choice is logarithmic, so do not strip useful content for tiny savings.
2. Present choices in familiar order (sectional chart order, checklist order) so mapping becomes compatible.
3. Reserve prominent real estate for the likely choice.
4. Do not cite Hick's law as a design commandment in the knowledge base; cite it as a modest effect for unpracticed arbitrary choices.

## Hyman1953

**Core claims.** Ray Hyman independently asked whether reaction time is determined by the stimulus information, not only by the number of alternatives. He showed that when information is manipulated in three ways (number of equiprobable alternatives, unequal probabilities of the alternatives, and sequential dependencies between successive stimuli), mean reaction time is a roughly linear function of the average information in bits. The combined relationship is why the law is named Hick-Hyman.

**Specifics.** The display was a matrix of lights, and participants responded by vocally naming the light that came on, using arbitrary names (as I recall, nonsense syllables). The three experiments varied (a) the number of equally likely alternatives, (b) the probability distribution across a fixed set, and (c) the sequential dependency (the probability of a stimulus given the previous one). The average information per stimulus was computed from the entropy of the distribution; reaction time rose linearly with it, with an intercept on the order of a few hundred milliseconds and a slope of a few hundred ms per bit (I do not have reliable exact values and will not state them). Hyman also noted that different laws would be needed to predict reaction time to individual stimuli, because the average entropy hides the fact that rare stimuli are slower than frequent ones.

**Criticism and status.** A later critique is that in the first experiment the number of alternatives was fully confounded with bits, so only the probability and sequence manipulations really test the information account. Later work attributes much of the probability effect to repetition priming and expectancy rather than information per se. The slope also depends on mapping compatibility and practice, as in Hick's work. The law is robust as a descriptive fit in the laboratory and fragile as a predictor in applied settings.

**Use for LTF.**
1. Frequent, predictable sequences speed users up; design flows with a reliable "next" action.
2. Surprise costs time: when a screen deviates from the usual pattern, expect slower responses.
3. Default to the most likely option, since probability itself shortens decisions.
4. Keep mapping from instruction to control compatible (left control for left turn) to avoid the full Hick cost.

## Proctor2018

**Core claims.** Robert Proctor and Darryl Schneider's review in the Quarterly Journal of Experimental Psychology gives a historical account of Hick's and Hyman's experiments and theory and then surveys challenges to the law. It covers stimulus-response compatibility, practice, very large set sizes, and sequential dependencies, and notes that the law still generates research and is used in HCI design. The abstract describes it as revisiting Hick's article, which "played a seminal role in the cognitive revolution".

**Specifics.** Points the review makes, as far as I could confirm from the abstract and secondary descriptions: the log relationship holds best for arbitrary mappings with modest set sizes; it weakens or vanishes with compatible mappings and extended practice; with very large sets (as in typing or large menus) the relationship may change shape; sequential effects and repetition often account for part of what is attributed to uncertainty. The review contrasts accounts, including the original information-gain account, more recent accumulator and diffusion models, and accounts invoking stimulus identification and response selection stages. I did not have access to the full text and therefore do not report particular slope values from it.

**Criticism and status.** The review is itself the main balanced statement of what the law does and does not show; it is the sensible citation when someone invokes Hick's law in a design argument. It argues for a modest, conditional reading.

**Use for LTF.**
1. Cite this review when the knowledge base states a Hick's law claim.
2. Treat set size as one cost among several; compatibility and practice often outweigh it.
3. For expert users (returning learners), expect choice cost to fall quickly, so do not over-optimize for novices at the expense of experts.
4. Run quick tests with real learners rather than relying on the law.

## Liu2020

**Core claims.** Liu, Gori, Rioul, Beaudouin-Lafon and Guiard ask how relevant Hick's law really is to interface design. Their abstract argues that the law is less useful for design than often assumed; that it speaks against, not for, the popular principle that "less is better"; and that the stimulus-response setup in which the law was derived is rarely relevant to HCI tasks, where choice-reaction time can often be assumed constant. Instead they suggest that studying visual search and decision making in more detail is more fruitful than citing Hick's law.

**Specifics.** The paper (CHI 2020, Honolulu, 11 pages) re-examines the information-theoretic derivation of the law, reviews how HCI papers have used it, and reports experiments on choice with menu-like layouts; I confirmed the abstract-level claims but did not read the full text and so do not report effect sizes. Two points follow from the information-theory reading: first, under the law the cost of a choice grows with log2 of the number of alternatives, so splitting a large set into a deeper hierarchy does not reduce total bits, and merging small sets into one larger set adds little; second, the argument that fewer options always means faster choices does not follow, because the law says time is proportional to the information gained, and a category structure that conveys the same information costs the same bits spread across levels. They also note that in practice menu choice involves visual search whose time depends on layout, familiarity and grouping, and that users with a known target do not "choose" in the Hick sense at all.

**Criticism and status.** Peer reviewed at the main HCI conference. It is a correction to folk usage and fits the earlier reviews (Seow2005; Proctor2018). It is a single paper, and its empirical part has not been widely replicated in the sources I checked.

**Use for LTF.**
1. Do not justify removing lesson options or nav items by citing Hick's law.
2. When a menu is long, improve scanning (grouping, alignment, consistent labels) instead of only shortening it.
3. Where the learner knows the target (a returning user looking for "Checklists"), the cost is search and pointing, not choice time.
4. Test navigation with real tasks and timings.

## MacKenzie1992

**Core claims.** I. Scott MacKenzie's review in Human-Computer Interaction surveys Fitts' law as a research and design tool. His abstract frames the law as modeling human movement by analogy to information transmission, critically reviews the state of the law, and argues that research and design benefit from a slightly corrected version. The goal is a model usable for comparing results across studies and for design.

**Specifics.** The paper recommends: (1) the Shannon formulation, ID = log2(A/W + 1), which matches the information-theoretic analogy more closely than Fitts' log2(2A/W) and never goes negative; (2) using effective target width, We = 4.133 times the standard deviation of the endpoints along the axis of movement, so that all conditions are normalized to about 4 percent errors; (3) computing throughput as ID_e / MT, where ID_e uses the effective width and effective amplitude, so that a speed-accuracy strategy by the participant is accounted for; (4) reporting the regression constants a and b with the correlation. The review compares input devices (mouse, trackball, joystick, stylus, touchpad), noting that throughput values differ between studies, a mouse typically being in the range of roughly 3 to 5 bits per second in later experiments (approximate; Card et al.'s original 1978 figure for the mouse was higher at about 10 bits/s). It treats two-dimensional targets, with recommendations such as using the smaller of target width and height, and dragging tasks, which have higher intercepts and slopes than pointing alone. Later standards work (ISO 9241-9, now incorporated into 9241-411) adopted much of this method.

**Criticism and status.** Widely adopted and still the practical reference. Known limits: it is a model of aimed movement to known target locations, it does not include time to find the target, and the Shannon formulation, though practical, is a convention rather than a derivation from Fitts' original data. Touch input needs the corrections in Bi2013.

**Use for LTF.**
1. Estimate how much a larger button helps using ID: doubling W with A fixed saves about one bit, which at a throughput of 4 bits/s is roughly 0.25 s per selection.
2. Report touch-target decisions as ID changes, not as taste.
3. If LTF builds drag-based widgets (a heading dial, a throttle slider), expect dragging to cost more than clicking and give those widgets generous track width.
4. Use throughput, not raw time, when comparing alternative input approaches in tests.

## Bi2013

**Core claims.** Bi, Li and Zhai observed that Fitts' law predicts mouse and stylus pointing well but is insufficient for small targets with finger touch. They propose a dual-distribution hypothesis for the spread of touch endpoints: the endpoint distribution combines a speed-accuracy component (the effect Fitts' law models) and an absolute-precision component (noise from the finger, such as occlusion and imprecise contact area) that is independent of the speed-accuracy trade-off. From it they derive FFitts law, an expansion of Fitts' law for finger touch.

**Specifics.** The paper (CHI 2013, Paris, pages 1363 to 1372) reports three experiments: one-dimensional target acquisition, two-dimensional target acquisition, and touchscreen keyboard typing. The main finding is that FFitts law is more accurate than Fitts' law in modeling finger input on touchscreens, and it can predict tap-success rates for a given target size. The model subtracts an estimated absolute-precision variance from the observed endpoint variance before computing effective width, which matters most for small targets (below about 10 mm; I did not confirm the exact figure). I did not confirm the numeric fit statistics.

**Criticism and status.** A 2021 follow-up reports that FFitts law has been used in touch-pointing research but that its fit was in some other studies inferior to Fitts' law with the nominal width, so its advantage is not uniform. It applies to single-finger taps, not to gestures.

**Use for LTF.**
1. Small touch targets fail for reasons beyond Fitts' law, so enforce a minimum touch target (platform guidance is about 44 to 48 CSS pixels; verify in the accessibility lane's standards) regardless of how clean a small control looks.
2. Where learners tap while holding a controller or keyboard with the other hand, allow extra margin.
3. Prefer larger targets for the most frequent actions on phone layouts in fly mode.
4. Visible feedback on tap helps people see misses.

## Card1978

**Core claims.** Card, English and Burr at Xerox PARC compared four devices (a mouse, a rate-controlled isometric joystick, step keys, and text keys) for selecting text on a CRT. The mouse was faster than the other devices on every measure and had the lowest error rate. It was also the first comparative evaluation of the mouse and one of the first uses of Fitts' law in HCI: pointing with the mouse and the joystick followed Fitts' law, and the analysis showed that the mouse's performance was close to the limit of the hand's capacity, so improving it much further was unlikely, whereas the joystick's problem lay in its control order (rate control).

**Specifics.** Participants selected text targets of various distances and sizes; the measures were selection time, errors and learning over sessions. The mouse's advantage in positioning speed was demonstrated mainly against the rate-controlled joystick (a secondary source notes no absolute joystick was tested). The paper reported a mouse information rate of roughly 10 bits per second (as commonly cited), in line with Fitts' hand-movement result; later replication by others got lower mouse throughput, partly because of differing calculations. The study excluded error trials from the Fitts' law analysis, which Soukoreff and MacKenzie (2003) later revisited. The technical report version (SSL-77-1) is dated 1977; the journal article appeared in 1978. I did not confirm exact mean times or error percentages and do not report them.

**Criticism and status.** Small samples, a text-selection task, and early hardware; the claim that the mouse is best must be read relative to those alternatives. The lasting contribution is the method: measure movement time against ID and compare devices by slope.

**Use for LTF.**
1. Direct, position-mapped manipulation beats indirect rate-control; widgets that map pointer position to value (drag a needle) are better than repeated click-to-step arrows.
2. Measure designs rather than assuming; the Fitts-regression approach is cheap.
3. Learning curves matter: record early sessions, not only expert times.
4. The best interface device is often the one that matches the natural control order of the task.

## Card1980

**Core claims.** Card, Moran and Newell proposed the Keystroke-Level Model (KLM) to predict the time an expert needs to complete a routine task, without errors, on an interactive system. The model decomposes a task into a small set of physical operators and a mental operator and sums their times, so designers can compare alternatives on paper before building them. It measures only one aspect of performance: time.

**Specifics.** Operators: K (keystroke or button press), P (pointing to a target with a pointing device), H (homing the hand between keyboard and device), D (drawing), M (mental preparation) and R (system response time). I confirmed that the M operator is about 1.35 seconds in the original model; I did not confirm the other values by search. From memory of the paper and later tutorials (verify before citing): K about 0.2 s for an average skilled typist (range roughly 0.08 to 1.2 s depending on skill), P about 1.1 s (or computed with Fitts' law), H about 0.4 s. Heuristic rules decide where to insert M operators: place an M before each chunk of actions that starts a new "thought", delete Ms inside tightly bound units (such as typing a known word) and before consecutive terminators. The paper validated the model against measured times for several tasks and systems and reported prediction errors of roughly 20 percent (approximate). The model assumes the user knows the method (expert, error-free).

**Criticism and status.** Ignores learning, errors, novices and parallel actions; M placement involves judgement; the times derive from desktop keyboards and mice in the 1970s and must be adapted for touch and mobile (touch-KLM variants exist). Despite that, it remains the most used quick model for step counting, and later tools (CogTool) automate it.

**Use for LTF.**
1. Count steps in key flows (start a lesson, tick a checklist item) and add about 1.35 s for each mental pause; remove steps with the highest cost.
2. Compare alternative layouts on paper: the one with fewer P and M operators wins for experts.
3. Keep method steps consistent to remove M operators.
4. Remember it predicts experts, so test novices separately.

## Card1983

**Core claims.** The Psychology of Human-Computer Interaction is the founding text of cognitive engineering for HCI. It proposes that the user be modeled as an information processor with three interacting subsystems (perceptual, cognitive, motor), each with a cycle time and memory characteristics: the Model Human Processor (MHP). It also introduces GOMS (Goals, Operators, Methods, Selection rules) for analysing tasks, treating behaviour as problem solving in a problem space, and gathers laws such as Fitts' law, Hick's law and the power law of practice as "principles of operation".

**Specifics.** Cycle times from the 1986 handbook version of the MHP, cited by secondary sources: perceptual processor about 100 ms (range 50 to 200), cognitive processor about 70 ms (range 25 to 170), motor processor about 70 ms for a discrete micromovement (range 30 to 100). One closed-loop cycle of perceiving, deciding and moving is therefore about 240 ms. Memory parameters from the same source (as I recall; verify): working memory about 7 chunks (range 5 to 9) lasting a few seconds without rehearsal, a visual image store of roughly 200 ms and an auditory store of roughly 1.5 s, and a long-term memory of effectively unlimited capacity. Principles of operation include Fitts' law, the uncertainty principle (decision time increases with uncertainty), and the power law of practice. The book's applied chapters analyse text editing (the POET studies) and propose the keystroke-level model and the four GOMS levels (goal, unit task, functional, keystroke).

**Criticism and status.** Serial, error-free and expert-oriented; Suchman (1987) and others argued that real activity is situated and not planned in full. The parameter ranges are wide, so predictions are rough. Still the canonical source for human performance constants and the origin of the cognitive-model tradition in HCI. The 1986 handbook figures should not be attributed directly to the 1983 book without checking.

**Use for LTF.**
1. Feedback within about 100 ms feels instantaneous because it falls inside one perceptual cycle; hold interaction latency under that for dragged widgets.
2. A full see-decide-act loop costs about a quarter second, which sets the floor for reactive in-sim prompts.
3. Use GOMS-style task breakdowns for fly mode, where hands are busy.
4. Use the model to predict expert paths and use observation to find novice problems.

## Miller1956

**Core claims.** George Miller's essay reports a recurring pattern across two kinds of experiment. In absolute judgment (identify which of several stimuli differing on one dimension was presented), people can reliably distinguish only about seven categories, or about 2.5 bits of information, regardless of the dimension. In immediate memory span, people can repeat back about seven items, whether the items are binary digits, decimal digits, letters or words. He draws the distinction that matters for design: the span is limited by the number of chunks, not by the number of bits, and people extend effective capacity by recoding information into larger chunks.

**Specifics.** Absolute-judgment results he summarized (from other laboratories): pitch about 5 to 6 categories (roughly 2.5 bits), loudness about 5 (about 2.3 bits), saltiness of solutions about 4 (about 1.9 bits), position of a pointer on a line about 10 (about 3.25 bits), and so on; adding dimensions raises capacity but far less than the sum (the channel capacity grows slowly with extra dimensions). Memory-span results (credited to Hayes and others) show the span falling as the information per item rises: roughly 9 for binary digits, 7 for decimal digits, 6 to 7 for letters, and about 5 for monosyllabic words (approximate). He describes recoding by Sidney Smith, who learned to regroup binary digits into octal-like groups and so recalled around 40 binary digits. He also connects the limits to counting dots, where a span of about 6 to 7 items is perceived at a glance (subitizing). Miller was playful: he says the number "plagued" him and treated the coincidence of the two limits as possibly accidental.

**Criticism and status.** The paper is among the most cited and most misapplied in psychology. It does not say that menus should have seven items, that pages should have seven links, or that people can hold seven things while doing something else. Later work puts pure short-term capacity nearer four chunks (Cowan2001), and shows that the span depends on word length and rehearsal time (Baddeley). The absolute-judgment results concern unidimensional stimuli identified without a reference scale, which is not how people read a menu. A 1994 reprint exists in Psychological Review's centennial issue with a different DOI.

**Use for LTF.**
1. Never use "7 plus or minus 2" to justify navigation or menu size.
2. Do use chunking: group the 20-odd pre-start checklist items by phase, and show frequencies and altitudes as familiar units (121.5, 3,000 ft MSL).
3. Do not require learners to hold items from one screen to another; display them.
4. Color-coded categories beyond about five or six levels will not be reliably identified by color alone.

## Cowan2001

**Core claims.** Nelson Cowan argues that when chunking and rehearsal are prevented, the capacity of working memory (the focus of attention) is about four chunks, with a range of three to five, rather than Miller's seven. The target article in Behavioral and Brain Sciences reviews evidence from many paradigms and proposes a single central capacity limit, averaging about four chunks, together with other non-capacity limits such as time-based decay and interference. Miller's seven, in Cowan's reading, was a rough estimate and a rhetorical device, inflated by chunking and rehearsal.

**Specifics.** Cowan's evidence includes: whole-report and partial-report studies of briefly shown arrays; change detection of colored squares, where observers detect changes in about three to four items; studies of recall in which items cluster in groups of about three to four when grouping is imposed; the subitizing range of about four; and results from memory-span tasks when rehearsal is blocked by articulatory suppression. He emphasizes the conditions under which pure capacity can be seen: chunks must be known in advance, rehearsal prevented, and grouping not available. Capacity is thus about the number of independent chunks, not the amount of information in them, the point Miller made. The open-peer-commentary format brought many responses; some argued for a smaller or larger number or for resource-based accounts.

**Criticism and status.** Replicated broadly in terms of a limit near three to five items for simple visual arrays. The debate is whether capacity comes in discrete slots or a flexible resource divided among items (Ma, Husain and Bays 2014 argue for resource models), and whether estimates depend on item complexity. The "4 plus or minus 1" claim is now the standard working number in cognitive psychology, though others find lower values for complex objects. Practical conditions seldom meet the pure-capacity assumptions.

**Use for LTF.**
1. Plan any single view so the learner needs to track at most about four independent things (for example, airspeed, heading, altitude, and the next step).
2. Show three or four steps at a time in procedures, and highlight the current one.
3. Move information from memory to the screen (persistent labels, remembered targets).
4. When a quiz requires comparing options, keep to about four.
5. Treat the number as a guide, tested with real learners.

## Accot1997

**Core claims.** Johnny Accot and Shumin Zhai show that Fitts' law does not model trajectory-based tasks, in which the pointer must stay within a constrained path (steering through a tunnel, drawing a line, navigating nested menus). They derive and test the steering law: the time to steer through a path is proportional to the integral of the inverse of the path width along the path. For a straight tunnel of length A and constant width W the law reduces to T = a + b (A/W), linear in A/W, not in its logarithm, because every portion of the path must be controlled continuously.

**Specifics.** The paper's experiments used steering tasks such as straight and circular tunnels of varied length and width, with participants moving a stylus inside the tunnel as fast as possible without leaving it; I do not have the exact participant numbers. Correlations between the model and measured movement times were very high (r squared above about 0.98 in the abstract-level descriptions I recall; verify). The general form is T = a + b times the integral over the path of ds / W(s), with W varying along the path (for curved tunnels the width is measured perpendicular to the path). Predictions were applied to drop-down menus, where moving to a submenu without leaving the parent item's region is a steering task, and to scrolling and dragging. The CHI '97 extended abstract appears separately with the shorter title "Beyond Fitts' law".

**Criticism and status.** The law has been confirmed in many later tasks, with extensions to curves and to touch. Real interfaces are less constrained than a tunnel, since users may leave the path briefly, and the slope b depends on the device. The relevant design lessons have been adopted widely (for instance "safe triangle" menu behavior).

**Use for LTF.**
1. Wide diagonal paths in nested menus; tolerate the pointer cutting across other items for a few hundred milliseconds.
2. Slider and dial tracks should be wide or forgiving; a thin track makes dragging linearly costly.
3. Avoid requiring a precise path (a drawn route on a chart) unless the learning goal is the steering.
4. Where a path is needed, display its width visibly so learners see the tolerance.

## Newell1981

**Core claims.** Allen Newell and Paul Rosenbloom document that practice follows a power law: the time to perform a task on trial N is T = B times N to the power of minus alpha, a straight line on log-log axes. They collect data from many domains (motor, perceptual and cognitive) that fit this form and propose a mechanism, chunking, as an explanation: with practice, the learner stores increasingly large patterns that can be applied in one step, so each trial involves fewer steps. The key practical claim is that improvement has strongly diminishing returns, so the early practice trials produce the largest gains.

**Specifics.** The data sets include classic ones: cigar rolling (Crossman), reading inverted text, mirror tracing (Snoddy), card sorting, and Seibel's very long study of a 1,023-choice reaction task, in which performance continued to improve over tens of thousands of trials. The exponent alpha is typically less than one (values of a few tenths are common; I do not give particular values for individual data sets). Time continues to fall on the log-log line over several orders of magnitude of practice, so there is no clear plateau, only slower change. The chunking model gives a simulation that reproduces the power-law form from the mechanism of acquiring chunks, with the relevant hierarchy of chunks built by experience. Page numbers vary between records (1 to 51 or 1 to 55).

**Criticism and status.** Heathcote, Brown and Mewhort (2000) argued that the power law is an artifact of averaging over participants and that exponential functions fit individual learners better; subsequent debate continues, though the qualitative lesson of rapid early gains and slow later gains is robust. The law describes time for a fixed task, not changes in strategy.

**Use for LTF.**
1. Progress displays should expect fast early gains and slow later ones; do not promise linear improvement.
2. Early repeats of short challenges give disproportionate benefit.
3. Show learners their own time or error curve over attempts, with the early drop explained.
4. Practice must keep going after "it works" because gains continue slowly.

## Shneiderman1983

**Core claims.** Ben Shneiderman named and described direct manipulation: interfaces in which the user acts on a continuous visible representation of the objects of interest, with physical actions or labeled buttons in place of complex command syntax, and rapid, incremental, reversible operations whose effect on the object is immediately visible. He argued that this style makes systems easier to learn and remember, reduces errors and anxiety, and gives users a feeling of mastery and control.

**Specifics.** The paper (IEEE Computer, August 1983, pages 57 to 69) surveys examples: display editors that show the document as it will look, spreadsheets, video games such as Pong, graphical and spatial data management, computer-aided design, and air traffic control displays, which he sees as embodying the ideas. Its explicit properties are: continuous representation of the object of interest; physical actions or button presses in place of command syntax; and rapid, incremental, reversible operations with immediate feedback. The benefit list in his later textbook Designing the User Interface (various editions) is: novices learn basic functionality quickly; experts work rapidly; intermittent users retain concepts; error messages are rarely needed; users see immediately whether actions further their goals; anxiety is reduced; users gain confidence and mastery. The same textbook states the eight golden rules of interface design: strive for consistency; enable frequent users to use shortcuts; offer informative feedback; design dialogs to yield closure; prevent errors and offer simple error handling; permit easy reversal of actions; support internal locus of control; reduce short-term memory load.

**Criticism and status.** The paper is conceptual and argued from examples, with limited experimental evidence; later work (Hutchins1985) analyses why directness feels as it does. Direct manipulation is awkward for abstract, repetitive or very large tasks, and for accessibility, because it depends on vision and precise pointing.

**Use for LTF.**
1. Make instrument widgets (altimeter setting knob, yoke) draggable with real-time response.
2. Allow undo or reset on every practice interaction.
3. Show the effect of an action in the same place as the action.
4. Provide keyboard alternatives for those who cannot drag.

## Hutchins1985

**Core claims.** Hutchins, Hollan and Norman analyse why some interfaces feel direct. They define directness as the distance between a user's goals and the actions needed to meet them, and describe two gulfs: the gulf of execution (how to turn goals into system actions) and the gulf of evaluation (how to interpret what the system displays in terms of the goal). Each gulf has a semantic distance (does the interface let you express what you mean, and show the outcome in the terms you think in) and an articulatory distance (how the form of the input and output relates to its meaning). Directness is highest when the distances are small. A second ingredient is engagement, the feeling of acting directly on the objects of the task world rather than talking about them.

**Specifics.** The paper (Human-Computer Interaction 1(4): 311 to 338) contrasts the conversation metaphor (a dialog with an intermediary) with the model-world metaphor (the system is a world of objects the user acts on). It introduces inter-referential input and output: output elements that can also be input, so the user acts on what the display shows. It lists costs of direct manipulation as well: it can be hard to refer to sets of objects, repetitive tasks are tedious, and the interface can mislead about system capabilities. A version also appeared in Norman and Draper's User Centered System Design (1986).

**Criticism and status.** Theoretical, not tested with measures of directness; it influenced later affordance and gulf terminology (Norman's Design of Everyday Things) and is widely used in teaching.

**Use for LTF.**
1. Shrink semantic distance: label controls in aviation terms (heading bug, trim) rather than generic UI terms.
2. Make output manipulable (click the instrument to change it).
3. Show outcomes in the same units as the cockpit.
4. Avoid stacked abstraction layers between a learner and the thing they are learning about.

## Bush1945

**Core claims.** Vannevar Bush, wartime head of the US Office of Scientific Research and Development, argued in The Atlantic Monthly (July 1945) that the problem after the war was no longer producing knowledge but finding it: the growing mass of research exceeded the ability to consult it. Indexing by alphabet and class is artificial, whereas the human mind works by association, jumping from one item to another linked to it. He proposed a mechanized private file and library, the memex, which stores a person's books, records and communications and allows any item to be retrieved quickly and linked to another by an associative trail. Trails could be saved and shared, and a new profession of "trail blazers" would create them.

**Specifics.** The memex is a desk with translucent screens, a keyboard, sets of buttons and levers, and microfilm storage. The user taps a code to bring up an item, and a second code to join it to another, so that later either item brings up the other. Users could add their own marginal notes and comments. Bush also forecasts a head-mounted camera for recording, a voice-driven typewriter (the "Vocoder"), photographic and electronic storage of reduced size, and new forms of encyclopedia built from trails. Bibliographic note: the essay is usually cited as volume 176, issue 1, pages 101 to 108, although one index gives different page numbers; a condensed version appeared in Life in September 1945. One sentence introduces the device: "Consider a future device for individual use, which is a sort of mechanized private file and library" (section 6; verify wording).

**Criticism and status.** A vision, not a study; its microfilm and electromechanical details were overtaken by digital technology. It is cited as the ancestor of hypertext (Nelson, Engelbart) and the web. Critics note it assumes a single user's trails and underestimates the difficulty of creating good links.

**Use for LTF.**
1. Support associative navigation: link a lesson to the instruments, checklists and challenges it relates to, in both directions.
2. Let learners build their own trails (bookmarks, notes attached to a lesson).
3. Provide a visible "how I got here" path so the learner can retrace.
4. Treat the app as an extension of the learner's memory, especially when they switch between the sim and the app.

## Licklider1960

**Core claims.** J. C. R. Licklider, a psychologist then at Bolt Beranek and Newman, proposed that the useful future of computing was a symbiosis, a cooperative partnership in which humans set goals, formulate hypotheses, and evaluate, while computers do the routinizable work that prepares the way for insight. The hope, in his words, was that human brains and computing machines would be coupled together very tightly. He contrasted this with mechanically extended man (humans operating machines) and with artificial intelligence, which he expected to arrive much later.

**Specifics.** The paper (IRE Transactions on Human Factors in Electronics, HFE-1, March 1960, pages 4 to 11) rests on an observation from his own work: by a time-and-motion analysis, he estimated that about 85 percent of his "thinking" time was spent getting into a position to think, such as finding data, plotting and calculating, and only the remainder on thinking itself (his own estimate; the wording of the figure is from memory). He lists the obstacles to symbiosis: the mismatch of speeds between human and machine, the memory needed, the "language" problem of communicating in a form each can use, and the poor input and output equipment. He anticipates time-sharing, large shared memories, more natural languages, display and control equipment such as large screens and light pens, and speech recognition, and he sketches a 'pre-symbiotic' period of some years before the full partnership.

**Criticism and status.** It is an argument from a single researcher's observation and anticipation, not data. It accurately predicted interactive computing, though the timescale was optimistic. Some of its assumptions about division of labor have been revised in light of machine learning.

**Use for LTF.**
1. The app should do the lookups and arithmetic (fuel, headings, V-speed tokens) so the learner's attention is for flying.
2. Responses should be quick enough to feel like a conversation with a partner (fits the roughly 100 ms to 1 s feedback ranges).
3. Distinguish what the learner decides from what the app computes, and say so on screen.
4. Reduce the "getting into position to think" overhead before each practice session, such as setup steps.

## Seow2005

**Core claims.** Steven Seow compares the two surviving information-theoretic performance laws, the Hick-Hyman law and Fitts' law, both rooted in Shannon and Weaver's information theory. According to the abstract summary I could find, the Hick-Hyman law failed to gain momentum in HCI, whereas Fitts' law received and continues to receive substantial attention. The article covers the origin, formulation, development and applications of each law, and considers why Hick-Hyman gained less traction. A citing paper (Liu et al. 2020) reads the article as examining the possible reasons for that gap.

**Specifics.** I could not access the full text or confirm the volume, page range or DOI of the journal listing by search, so the bibliographic record is marked "memory". What is established from secondary descriptions: both laws are logarithmic in a ratio-like quantity (choices, or amplitude over width); both are interpretable as channel capacity or rate of information transmission; applications of Hick-Hyman in the HCI literature are scarce compared with Fitts' law; compatibility and practice effects limit Hick-Hyman. Expect the article to discuss the effective-width correction for Fitts' law and the handling of unequal probabilities for Hick-Hyman, but those details are not confirmed here.

**Criticism and status.** A review of two laws, not an experiment. Its framing (why one law has been useful and one has not) is consistent with Proctor2018 and Liu2020. Treat details as to be verified.

**Use for LTF.**
1. Prefer Fitts-style target arithmetic, which is solid, over Hick-style choice arithmetic, which is conditional.
2. Where both could apply (a menu), model pointing and choice separately.
3. Cite the pair together in the KB so that readers see the difference in strength of evidence.
4. Verify this source's details before quoting.

## Lane synthesis

The sources agree that simple interaction is lawful. Pointing time grows with the logarithm of distance over target size (Fitts1954, Fitts1964, MacKenzie1992), and finger touch needs an added precision term (Bi2013). Choice time grows, under limited conditions, with the logarithm of the number of alternatives (Hick1952, Hyman1953). Skill follows a rapidly diminishing-returns curve (Newell1981). Working memory holds only a few chunks (Miller1956, Cowan2001). Cognitive-engineering models (Card1980, Card1983) turn these into predictions of expert time, and the founding visions (Bush1945, Licklider1960, Shneiderman1983, Hutchins1985) argue that interfaces should be direct, visible, reversible and a partnership with the person's memory.

The sources conflict where the laws are stretched. Proctor2018, Liu2020 and Seow2005 show Hick's law is conditional and does not license "fewer options is always faster". Cowan2001 replaces Miller's seven with about four. The power law of practice is contested by exponential fits. FFitts may not always beat plain Fitts' law. Card1978's mouse throughput of about 10 bits/s is higher than later figures.

Ten actionable takeaways:
1. Make frequent targets large and close; extend hit areas beyond the visible mark.
2. Use ID arithmetic to justify size: doubling width saves about one bit.
3. On touch, enforce generous minimum targets and spacing.
4. Give nested menus and sliders wide steering paths.
5. Do not cite 7 plus or minus 2 for menu or link counts.
6. Limit simultaneous things to track to about four; chunk everything else.
7. Group and order familiar choices for compatible mapping; do not remove content on the basis of Hick's law alone.
8. Count steps with KLM and keep feedback under about 100 ms.
9. Make widgets directly manipulable, continuous and reversible, with output units as in the cockpit.
10. Expect fast early learning and slow later gains, and show learners their own curve; let them leave trails and notes so the app extends their memory.

Verification caveat: only some figures were confirmed by web search (the M operator of 1.35 s, MHP cycle times, Hick's rate of about five bits per second, Cowan's capacity of about four, Fitts' 10.6 bits/s as a secondary figure). Other numbers are marked approximate or from memory and should be checked before publication.

