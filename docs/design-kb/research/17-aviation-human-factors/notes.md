# Lane 17: Aviation human factors and cockpit display design

Design lessons only. Nothing in this file states an aircraft number, limit, speed or procedure as fact; where a source describes a flight-deck display or checklist, it is described as a human-factors case, not as guidance for flying.

## degani1992typography

Degani, A. (1992). *On the Typography of Flight-Deck Documentation* (NASA Contractor Report 177605). San Jose State University Foundation for NASA Ames Research Center.

### Core claims

Degani argues that printed flight-deck documents (checklist cards, charts, manuals, flight plans) are displays in the full human-factors sense, designed with almost no applied research behind them. The summary says accessing and reading procedures "has a significant impact on flight safety" and that there is "a dearth of information on how to effectively design these displays" (report p. 1). The report is a literature review meant to "bridge" basic typography research and the people who design flight-deck documents. It is not an experiment.

The motivating cases are accident reports. The NTSB found the Air New Orleans BAe-3101 checklist typeface to be 57 percent smaller than that recommended by human engineering criteria (quoted in the report from NTSB 1988), while stating there was no evidence legibility caused that accident. A Saudi Arabian L-1011 crew spent about 3 minutes looking for a smoke procedure because they believed it was in the wrong section (quoted from a 1985 Flight Safety Focus account). Findability and legibility are safety properties, not polish.

Section 2 also warns against reading laboratory data as a look-up table: what an observer perceives combines what the data books say about sensing with the observer's own processing strategy.

### Specifics

The report covers typeface, case, font height, spacing, line length, italic and bold, contrast, color, glare, viewing angle, paper quality and pilot age.

Its list has 19 recommendations (pages 31 and 32). Among them: sans-serif is "usually more legible" than serif; avoid fonts with look-alike characters; set long text in lower case; x-height of important documents at or above 0.10 inch; line spacing not below 25 to 33 percent of font size; avoid long italic strings; use one or two typefaces for emphasis; black on white for most documents; avoid white on black in normal operations (and if used, little text, large type, sans-serif); avoid black over dark red, green or blue; use anti-glare laminate; assess pilot age groups and be conservative.

Section 3.11 argues that sub-optimal conditions combine: white on black, italics, bold, small type and color together hurt more than any alone. Degani cites Tinker (1963) for the finding that combined effects cannot be predicted by adding single effects.

Figures attributed by Degani to Tinker (1963): reading speed fell significantly on a 95.1 percent reflective glossy material compared with matte, and 75 percent of 224 subjects preferred non-glossy paper; tilting 0.10 inch type 105, 120 and 135 degrees from the line of sight slowed reading by 1.5, 5.3 and 9.8 percent. Section 4.4 reports a 50 percent reduction in retinal illumination at age 50 compared with age 20 and notes most laboratory subjects were probably young recruits. Red is usually associated with danger, green with normal and amber with caution.

### Replication and criticism

Evidence type: narrative literature review with second-hand figures from older legibility work. The author is candid: there is very little experimental data on reading in the airline cockpit, the experiments "were not conducted in a cockpit," most used college students at a desk in normal room lighting, and the list "are not specifications" but a baseline from "the author's subjective interpretation." He tells designers to validate in a simulator with representative pilots.

The paper-era numbers are dated. The Final Note warns that hard-to-read displays could carry over to electronic checklists. The sans-serif claim has been qualified by later screen-reading work; treat it as weak evidence. I found no formal replication; the claims are only as strong as the Tinker-era studies behind them.

### Implications for LTF

1. Treat fly mode as a flight-deck document. The learner reads it beside the sim in a dim room, eyes moving between a lit page and a dark scene, which is the luminance-shifting problem Degani describes. Offer a dark fly-mode theme with strong text contrast and avoid large pure-white panels at night.
2. Findability is a safety-style property. Keep section names and positions consistent across lessons, with one canonical name per checklist.
3. Do not stack small type, italics, color-only distinction and low-contrast dark mode in one panel. Test combinations.
4. The numbers are for paper at arm's length and must not be copied into CSS. Use them as direction and validate with learners at desk distance.
5. Offer a text-size control and never rely on color alone; red, amber and green chips need a text or icon pair.

Confirmed this session: read the NASA scan (PDF pages 1 to 10 and 29 to 36) from https://ntrs.nasa.gov/api/citations/19930010781/downloads/19930010781.pdf: Summary, Background, Scope, Sections 3.9 to 4, Final Note, recommendations. Record: https://ntrs.nasa.gov/citations/19930010781. Sections 3.1 to 3.8 not read in detail.

## degani1990checklists

Degani, A., & Wiener, E. L. (1990). *Human Factors of Flight-Deck Checklists: The Normal Checklist* (NASA Contractor Report 177549). University of Miami for NASA Ames Research Center.

### Core claims

The authors open by saying the aircraft checklist, "long regarded as the foundation of pilot standardization and cockpit safety," had "escaped the scrutiny of the human factors profession," even though improper use or non-use is often cited as a probable or contributing cause of accidents (abstract and report documentation page). They argue the checklist is more than a memory aid: it is "a generator and coordinator of many cockpit tasks" (p. 2). Their central move is to widen the frame from the checklist as a printed display to the checklist as part of a socio-technical system: manufacturer philosophy, regulator (the FAA Principal Operations Inspector), airline culture, production pressure ("making schedules") and the pilot all shape how it is designed and used. They write that the paper display turned out to be "only the outer shell of the problem."

A 1943 B-32 checklist reproduced in the report is described as very similar in concept and design to a modern airliner checklist, with little conceptual rethinking in between.

### Specifics

Method (Section 1.3): field studies, interviews with line pilots from seven major U.S. carriers, incident and accident reports (ASRS, NTSB, ICAO), interviews with government officials, manufacturer information and the general literature. The field study observed flight crews from the jumpseat at one U.S. carrier: 42 crews, 72 flights (legs) and about 140 flight hours.

Concept: most checklist formats follow three steps: read or hear the item, accomplish it (verify or execute), respond to the outcome. The report covers "philosophy of use," standardization, mergers, line observations (initiation, challenge-response, completion, distractions), incident factors (phraseology, crew resource management), task analysis, item order and "the checklist as a system" ("system pathogens").

Appendix A gives 16 proposed guidelines, which the authors say are "not specifications" and may conflict. Most transferable: avoid using the checklist as a "site" for resolving discipline problems (1); standardize names for controls and displays (3); responses should portray the desired status or value, not just "checked" or "set" (4); touching the controls while conducting the checklist is recommended (5); the completion call should be the last item (6); subdivide a long checklist into smaller chunks tied to systems and functions (7); sequence items by the "geographical" layout of the cockpit, with a pictorial flow for training (8); put the most critical items as close as possible to the beginning so they are done before interruptions (10), and where this conflicts with (8) and (9), (10) takes precedence; duplicate critical items between task-checklists (11); do not couple checklists tightly to other tasks, and provide buffers for recovery and a way to "take up the slack" (12).

### Replication and criticism

Evidence type: a mixed-method technical report (field observation, interviews, accident reports) plus expert synthesis. It is not an experiment, and the observed sample was one carrier with two aircraft types, so frequencies should not be generalized. The guidelines are expressly proposals.

The authors extended it in a journal paper (Degani and Wiener, 1993, Human Factors 35(2), seen only as a search result). The wider checklist literature (see Haynes and Gawande in this lane) supports the broad direction but also shows checklists fail when imposed without local adaptation, which this report anticipates through its "philosophy of use" analysis.

### Implications for LTF

1. Chunk long procedures into task-sized lists in lessons and fly mode, with an explicit completion line at the end of each chunk, so the learner knows when to stop looking at the page.
2. Put the most consequential steps first on any checklist page, since learners get distracted. Guideline 10 outranks neat grouping.
3. Show the target state, not "done" ticks (guideline 4). A bare checkbox should not stand in for the check.
4. Order items by where the learner looks in the sim, with the panel layout as the sequence diagram (guideline 8).
5. Use identical control names across lessons, challenges and checklists (guideline 3).
6. Give recovery paths: a "resume here" affordance for learners who fall behind the sim, not a rigid sequence.

Confirmed this session: read the NASA scan (PDF pages 3 to 8, 69 to 71) from https://ntrs.nasa.gov/api/citations/19910017830/downloads/19910017830.pdf: contents, Summary, Section 1, Appendix A, and the report documentation page. Record: https://ntrs.nasa.gov/citations/19910017830 (web search). The body Sections 2 to 9 were not read.

## fitts1947analysis

Fitts, P. M., & Jones, R. E. (1947). *Analysis of Factors Contributing to 460 "Pilot-Error" Experiences in Operating Aircraft Controls* (Memorandum Report TSEAA-694-12). Dayton, OH: Aero Medical Laboratory, Air Material Command.

### Core claims

This is the founding document of the "design-induced error" argument. Fitts and Jones collected accounts of 460 errors that pilots made in operating aircraft controls and argued that a large share of what was being written off as "pilot error" was better explained by how controls were designed, shaped, placed and sequenced. The Google Books catalog description says the report "examines 460 accounts of errors pilots made when operating aircraft controls" and argues that many such accidents could be prevented through human-centered equipment design. A secondary account (The Mobility Forum, 2022) reports the authors' conclusion that the frequency of these errors, "and therefore the incidence of aircraft accidents, can be reduced substantially by designing and locating controls in accordance with human requirements." I could not read the 1947 memorandum itself, so that quotation is secondhand.

The same account says the authors rejected the then-usual view that such errors were mainly a matter of selection and training, and that pilots of all experience levels made them. It is widely cited as an early case of treating "pilot error" as something to investigate rather than an explanation; the authors themselves put the phrase in quotation marks.

### Specifics

Method, as reported by secondary sources: the data were accounts of errors collected by interviews and written reports from pilots, an early use of what later became the critical incident technique, rather than a controlled experiment. The categories of control error named in secondary summaries are operating the wrong control (substitution), failing to adjust a control properly, forgetting to operate a control, and being unable to reach a control when needed. I did not find a source giving the percentage in each category, and I do not give one.

The best-known illustration in secondary accounts is the flap and landing-gear substitution error, where a pilot operates one control when intending the other. The lesson is that controls that look alike, sit close together and are used in sequence invite a predictable slip. Remedies named in the Mobility Forum summary are standardization, simplification, sequencing and interlocks; that page credits shape coding to Alphonse Chapanis, not to Fitts and Jones. A companion 1947 report covered 270 "pilot-error" experiences in reading instruments (per a search summary).

### Replication and criticism

Evidence type: a retrospective, self-report case collection analyzed by experts. It cannot give rates, because there is no denominator of correct operations, and the interviewed incidents are subject to recall and reporting bias. Its power is as a taxonomy and as an argument.

Extension: Flach, Larish and Weinstein (1989, Proceedings of the Fifth International Symposium on Aviation Psychology, abstract read) applied the Fitts and Jones classification to errors in aviation, driving and computer use. They report that the taxonomy transferred less well to errors in reading and interpreting instruments than to control errors, that control errors in automobiles and computers were very similar, and conclude that specific error types may change with the task while a general basis for classifying error may apply across levels of automation.

The argument was later developed in the human-error literature (see the Reason and Sarter and Woods sections in this lane). I did not find a published refutation of the 1947 report.

### Implications for LTF

1. Treat a learner slip first as a design hypothesis. If many learners confuse the same two controls in a widget, the widget or copy is at fault. Log wrong-answer events per widget and review them as design bugs.
2. Build look-alike traps out of the interface. Where a lesson introduces two easily confused controls, make labels, icons and positions clearly different and explain the difference in the same panel.
3. The four categories are a review checklist for a challenge briefing: can the learner pick the wrong control, set it improperly, forget it, or be unable to reach it (for example, because the briefing scrolled off screen in fly mode)?
4. Sequencing and interlocks have web analogs: keep step order identical to the order in the sim, and gate "next" behind an acknowledged verify step.
5. Feedback should not blame the learner; say when a layout invites the mistake.
6. Aviation specifics come from the aircraft's own documents, not from this source.

Confirmed this session: Google Books record https://books.google.com/books/about/Analysis_of_Factors_Contributing_to_460.html?id=XjgrygAACAAJ (title, authors, 1947, 64 pages); Mobility Forum summary https://themobilityforum.net/2022/09/01/how-psychologists-helped-make-todays-planes-safer/; Wright State abstract of Flach et al. 1989 https://research.wright.edu/en/publications/fitts-and-jones-analysis-of-pilot-error-40-years-later/; web searches. The report number comes from a search summary. The 1947 text was not accessible (DTIC returned 403).

## wickens1995proximity

Wickens, C. D., & Carswell, C. M. (1995). The proximity compatibility principle: Its psychological foundation and relevance to display design. *Human Factors, 37*(3), 473-494. https://doi.org/10.1518/001872095779049408

### Core claims

The paper formalizes the proximity compatibility principle (PCP) and reviews the evidence for it. The abstract (Crossref record, read this session) states the principle in one sentence: displays relevant to a common task or mental operation (close task or mental proximity) should be rendered close together in perceptual space (close display proximity). The authors add that there are different forms of task proximity, and that different information-processing mechanisms underlie the effects of different ways of manipulating display proximity. They then review experimental data in four design contexts: aviation, graphs, display layout and decision aiding.

The principle is a compatibility rule between two kinds of closeness. Task proximity is how much the information has to be combined, compared or used together in one mental operation. Display proximity is how close the items are in space, color, shared object boundaries, or other cues that make them look like one thing.

### Specifics

The trade-off, as stated in secondary summaries of the principle (search results this session), is that when a task requires integration of information, the display should present the data in close proximity; when information must be selectively attended, it should be shown with low proximity. That second half is what stops PCP from being "group everything." Close display proximity helps integration but can hurt focused attention, because the viewer has to pull one value out of a bundle.

The best-known empirical anchor is earlier work by Wickens and Andre (1988, Proceedings of the Human Factors Society annual meeting, abstract seen via search). It tested object displays, where several parameters are drawn as the dimensions of one shape. In that account, an object display gave better integration than a separate bar-graph display in an aircraft stall-analysis task but degraded focused attention on individual dimensions, and only homogeneous-feature objects produced emergent features that aid integration. Carswell and Wickens (1996, Human Factors 38(1), 1-22, title confirmed in Crossref) followed with a study of mixing and matching lower-level codes, concluding in its title that there are "two sources of proximity compatibility." I did not read that paper.

The abstract confirms the paper discusses "different forms" of task proximity and the mechanisms behind them. I did not read the full text, so which manipulations it lists (space, color, object integration) should be checked before quoting.

### Replication and criticism

Evidence type: a theoretical integration with a review of experiments (largely laboratory studies with simulated flight and graph-reading tasks), not a single study. The principle has been widely cited and extended (a Penn State record applies it to engineering interfaces), and has a Springer reference-work entry.

Limits visible in the secondary summaries: the benefit depends on the task actually being integrative; only well-designed emergent features help (Wickens and Andre's homogeneous-feature condition); and the focused-attention cost is real, so a display serving both task types must compromise or offer two views. I did not search specifically for failed replications.

### Implications for LTF

1. Group by task, not by topic. If a learner must compare two things in one mental step (for example, an indicator reading and a target value during a challenge), place them together, in the same card, with shared color or a connecting line. If they must read one value without being distracted by another, separate them.
2. In fly mode choose per readout: integrated for "are these two things consistent," separate for "read this one number." Avoid both a single dense cluster and a scatter of isolated numbers.
3. Widgets built on emergent shapes suit integration questions but not single-parameter ones. Put a plain numeric readout beside any object-style widget.
4. Quiz layout: put the stimulus next to the question that needs it; keep unrelated material in separate groups.
5. Color is a proximity cue; do not reuse one color for unrelated groups on a page.
6. Which instruments or values belong together is aircraft knowledge that must come from approved sources, not from this paper.

Confirmed this session: Crossref record https://api.crossref.org/works/10.1518/001872095779049408 (title, authors, volume 37, issue 3, pages 473-494, September 1995, abstract text); Crossref record for Carswell and Wickens 1996 (DOI 10.1518/001872096778940750, title and pages); search-result summaries of Wickens and Andre 1988 and of the PCP literature. The full text of the 1995 paper was not accessed.

## endsley1995toward

Endsley, M. R. (1995). Toward a theory of situation awareness in dynamic systems. *Human Factors, 37*(1), 32-64. https://doi.org/10.1518/001872095779049543

### Core claims

Endsley presents situation awareness (SA) as a predominant concern in operating dynamic systems and builds a model of it from the role it plays in decision making. The Crossref abstract (read this session) says the paper offers "a theoretical model of situation awareness based on its role in dynamic human decision making in a variety of domains," explores how SA relates to individual and environmental factors, names attention and working memory as the critical factors limiting how operators acquire and interpret information, and hypothesizes mental models and goal-directed behavior as the mechanisms that overcome those limits. It addresses the impact of design features, workload, stress, system complexity and automation, introduces a taxonomy of SA errors, and derives design implications for enhancing operator SA.

The three-level structure is the part everyone remembers: perception of the elements in the environment, comprehension of their meaning, and projection of their status into the near future. Search results this session (including a 2026 meta-review) describe these as the three levels of Endsley's model and call it the most influential SA framework.

### Specifics

Per the abstract, the working parts are attention and working memory as the bottlenecks, with mental models and goal-directed behavior as the mechanisms that get around them. Beyond the abstract, I did not read the paper's detailed account of how goal-directed and data-driven processing interact, nor the full error taxonomy, so I do not describe them. What the abstract does confirm is that the taxonomy is "based on the model presented," that is, it is organized around the same information-acquisition and interpretation steps, and that the design implications address the factors listed: design features, workload, stress, system complexity and automation.

SA is treated as distinct from performance, and later measurement methods are outside this 1995 paper. I did not confirm any measurement protocol this session and cite none.

### Replication and criticism

Evidence type: a theoretical model with design implications, not an experiment. It has been influential; its weakness, per critics, is falsifiability.

Critique appeared in the same journal issue: Flach (1995) argued SA is a useful description but a circular explanation, since the event happened because SA was lacking and SA is judged lacking because the event happened (as summarized in a search result; I did not read Flach). Dekker later argued that practitioners get accused of "losing SA" in investigations and that the construct can be used to explain away human error (as summarized in the same results; Dekker 2015 not read). A 2026 meta-review in Human Factors (title in search results) notes the construct "still lacks a universally accepted operational definition." Some critics hold the three levels oversimplify intertwined, adaptive processes, and others that the model describes one person's internal state, not shared team understanding.

Endsley's reply (2015, "Situation awareness misconceptions and misunderstandings," seen as excerpts) says the levels are ascending, not linear stages, and that her work is not circular. Treat the debate as unresolved: SA is useful as a design framing, riskier as a causal explanation of why someone erred.

### Implications for LTF

1. Use the three levels as a design lens for every in-sim challenge briefing and fly-mode view. Level 1: does the page make the needed cue easy to notice (one or two things to watch, in a stable position)? Level 2: does it say what the cue means in plain words, so a beginner is not left with a number they cannot interpret? Level 3: does it say what to expect next, so the learner anticipates rather than reacts?
2. Write lesson content in that order: what to look at, what it means, what happens next. Quizzes can map to levels: "which gauge," "what does it tell you," "what will it do."
3. Working memory is the bottleneck. In fly mode keep the current and next step visible and drop completed steps out of sight.
4. Keep key items in stable positions, and reserve one loud, non-color-only alert for a rare critical change.
5. Avoid "lost situation awareness" in learner feedback, since critics say the phrase reads as blame. Dashboards should not claim to measure a learner's SA; the construct is contested.

Confirmed this session: Crossref record https://api.crossref.org/works/10.1518/001872095779049543 (title, author, Human Factors 37(1), 32-64, March 1995, abstract); web search summaries of the three-level model and of the Flach, Dekker and Endsley 2015 exchange, including https://journals.sagepub.com/doi/10.1177/1555343415572631 (excerpts only). The 1995 full text, Flach 1995 and Dekker 2015 were not read.

## sarter1995world

Sarter, N. B., & Woods, D. D. (1995). How in the world did we ever get into that mode? Mode error and awareness in supervisory control. *Human Factors, 37*(1), 5-19. https://doi.org/10.1518/001872095779049516

### Core claims

The paper argues that flexibility in automated systems has a price. The Crossref abstract (read this session) says that because the human supervisor must select the mode best suited to a situation, he or she "must know more than before about system operations" and must also meet new monitoring and attentional demands "to track which mode the automation is in and what it is doing." When designers "proliferate modes without supporting these new cognitive demands, new mode-related error forms and failure paths can result."

Mode error was already known in human-computer interaction, where the same input does different things in different modes. The authors argue that highly autonomous systems create a new kind of mode problem. A mode is no longer just a setting the user chose; the automation can change it by itself, and the user must keep an accurate picture of what it is doing. The result is what they call an expanded view of mode error: it includes failures of mode awareness (not knowing what mode is active and what it will do), not only the slip of using the wrong mode.

### Specifics

Evidence base: the abstract says the paper draws on empirical data from a series of studies of pilot-automation interaction in commercial glass-cockpit aircraft, used to illustrate the nature, circumstances and consequences of mode-awareness problems in supervisory control of automated resources. A search summary adds that the work tied mode-awareness problems to "automation surprises," meaning the automation does something the human did not expect, and that these occurred primarily in non-normal, time-critical situations. I could not read the paper's tables, so I report no sample sizes or percentages. A personal reading-notes page I fetched gives simulator figures, but I could not check it, so I leave them out.

Concepts stated or implied by the abstract: mode error (acting on an incorrect belief about the current mode), mode awareness (knowing which mode is active and what it is doing), and supervisory control (the human oversees rather than directly controls). The design problem is attributed to the combination of many modes and weak support for tracking them. The abstract does not list design recommendations, and I do not attribute any to the paper.

### Replication and criticism

Evidence type: observational and simulator studies plus incident analysis, interpreted by expert researchers. It is not a controlled experiment of one manipulation. It is highly cited and its core idea, that mode proliferation plus weak feedback produces predictable confusion, has been repeatedly echoed in later automation studies; Parasuraman and Riley 1997 (in this lane) cover related misuse and disuse failures.

Limits: the samples are professional pilots on early-1990s aircraft, so display details do not carry over; the generalization is the design pattern. Beginners in a sim are a different population, so the mechanism is relevant but frequencies are not. I did not find a published failure to replicate.

### Implications for LTF

1. Treat the app's own states as modes. Lesson, fly, practice and review modes need the same discipline: always show the current mode in the same place, in words as well as color, so a learner who looks away and returns knows it at a glance.
2. Avoid indirect mode changes. Do not switch a page from reading to quiz or to fly mode because of a timer, route change or external event without a visible announcement saying what changed and why.
3. Fewer modes beat better labels on many modes. If a challenge screen's state count grows, merge states before adding indicators.
4. When a lesson covers an autopilot or other automated function in the sim, make "which mode is active" an explicit item to observe and quiz, using the sim's exact mode names. Mode wording and procedure must come from the aircraft's documents, not this paper.
5. Provide a one-tap "where am I" element in fly mode: current lesson, step and mode.

Confirmed this session: Crossref record https://api.crossref.org/works/10.1518/001872095779049516 (title, authors, Human Factors 37(1), 5-19, March 1995, abstract); web search summaries (Semantic Scholar, Sage and reference-list results) and a reading-notes page whose figures I did not use. Full text not read.

## parasuraman1997humans

Parasuraman, R., & Riley, V. (1997). Humans and automation: Use, misuse, disuse, abuse. *Human Factors, 39*(2), 230-253. https://doi.org/10.1518/001872097778543886

### Core claims

The paper organizes the human side of automation under four words. The Crossref abstract (read in full this session) defines them. Use is the voluntary activation or disengagement of automation by human operators. Misuse is over-reliance on automation, which "can result in failures of monitoring or decision biases." Disuse is neglect or underutilization, "commonly caused by alarms that activate falsely." Abuse is "the automation of functions by designers and implementation by managers without due regard for the consequences for human performance," which "tends to define the operator's roles as by-products of the automation" and "can also promote misuse and disuse."

The paper's stance is that these are not operator character flaws. They follow from design and management decisions, and understanding the factors behind each can improve system design, training methods and policies for automation use.

### Specifics

Use: trust, mental workload and risk can influence whether an operator turns automation on or off, but interactions between factors and large individual differences make prediction of automation use difficult (abstract).

Misuse and monitoring: factors affecting how well people monitor automation include workload, automation reliability and consistency, and the saliency (conspicuousness) of automation state indicators. This links directly to the mode-awareness problem in Sarter and Woods 1995, which is in this lane.

Disuse and false alarms: the abstract states that disuse "often occurs because the base rate of the condition to be detected is not considered in setting the trade-off between false alarms and omissions." My gloss, from general probability: when the watched-for event is rare, even a fairly accurate alarm is wrong most of the times it sounds, so operators learn to ignore it. Alert thresholds must be set with the base rate in mind.

The abstract names three levers: system design, training, and "judicious policies and procedures." I did not read the full body and describe none of its empirical results.

### Replication and criticism

Evidence type: an integrative review combining empirical, theoretical and analytical studies, with a taxonomy. It is not itself an experiment.

A later review in Human Factors (Lee, 2008, "Review of a pivotal Human Factors article," Human Factors 50(3), 404-410, abstract read) examined papers citing and cited by the 1997 article. It found the paper to be "an important node" in the network of automation research and says Parasuraman and Riley "integrated previous research and identified differing expectations across designers, managers, and operators," and foresaw research on overreliance and underreliance. Lee's conclusion is that automation, although it seems to relieve people of tasks, "requires more, not less, attention to training, interface design, and interaction design," and he points to vicious cycles and "coevolution" in which humans and automation adapt to each other. Search results also point to a separate later paper on complacency and automation bias (Parasuraman and Manzey, 2010), which I did not read and do not describe.

Limits: the taxonomy is descriptive and does not say what level of automation is right, and findings from professional operators may not transfer to learners using consumer software.

### Implications for LTF

1. False alarms are a design cost. Warnings and nudges should fire rarely and mean something; frequent ones will be ignored (disuse). Log dismissals as a signal to retire a nudge.
2. Beware over-reliance on the app. If the app supplies a target or pass mark, learners may stop reading the sim (misuse). Make challenges require reading the sim, with the app confirming rather than supplying.
3. Lessons on any sim autopilot function should teach monitoring and the judgment to take over, not only switching it on; procedures and limits come from aircraft documentation.
4. Decide what the app automates by what helps learner attention, not by what is easy (abuse). Auto-ticking checklists or auto-advancing steps can reduce the learner to pressing "next."
5. Make any in-app automation state conspicuous, and state the limits of the app's checks (it cannot see the sim).

Confirmed this session: Crossref record https://api.crossref.org/works/10.1518/001872097778543886 (title, authors, Human Factors 39(2), 230-253, June 1997, full abstract); Crossref record https://api.crossref.org/works/10.1518/001872008x288547 (Lee 2008 abstract); web search summaries. The paper's body was not read.

## haynes2009surgical

Haynes, A. B., Weiser, T. G., Berry, W. R., Lipsitz, S. R., Breizat, A. S., Dellinger, E. P., ... Gawande, A. A. (2009). A surgical safety checklist to reduce morbidity and mortality in a global population. *New England Journal of Medicine, 360*(5), 491-499. https://doi.org/10.1056/NEJMsa0810119

### Core claims

This is the most cited field test of the idea that an aviation-style checklist can reduce harm in another high-stakes domain. The authors introduced a short surgical safety checklist, based on World Health Organization guidance, in eight hospitals in eight cities with very different resources, and compared outcomes before and after. Per a Harvard Gazette report of the paper and a PSNet summary (both fetched this session), the checklist reduced major complications and inpatient deaths after major operations, and the effect was seen in both high-income and low-income settings.

The checklist aims at safe anesthesia, infection prevention and effective teamwork, not only memory. Senior author Atul Gawande is quoted in the Harvard Gazette saying the findings "indicate that gaps in teamwork and safety practices in surgery are substantial in countries both rich and poor."

### Specifics

Design and sample (Harvard Gazette report of the study): 7,688 patients, 3,733 before and 3,955 after the checklist was introduced; one hospital each in Seattle, Toronto, London, Auckland, Amman, New Delhi, Manila and Ifakara; study period October 2007 to September 2008.

Checklist (PSNet summary): 19 items, based on the WHO Safe Surgery Saves Lives guidelines, organized around three pause points: sign in (before induction of anesthesia), time out (immediately before skin incision) and sign out (when the patient is ready to leave the operating room). The Harvard report describes it as a single page that takes only a few minutes to complete.

Results (Harvard Gazette report): major complications fell from 11 percent to 7 percent, and inpatient deaths after major operations fell from 1.5 percent to 0.8 percent, which the report calls a drop of more than 40 percent.

Two design features matter. The checklist is tied to named pause points in the workflow, and it includes communication steps, so it is a teamwork tool as well as a memory aid.

### Replication and criticism

Evidence type: a before-and-after comparison across eight sites. Such a design cannot by itself rule out other changes over time. The pages I fetched stated no limitations, so that is a general point about the design, not something I read in the paper.

The effect has not replicated cleanly at population scale. Urbach and colleagues (2014, New England Journal of Medicine; PubMed abstract and secondary summaries read this session) studied surgical safety checklists after a provincial policy in Ontario, Canada, using administrative data on 109,341 surgeries before and 106,370 after across 101 hospitals. Adjusted risk of death in hospital or within 30 days was 0.71 percent before and 0.65 percent after (not statistically significant, P=0.13), and complication risk was 3.86 percent before and 3.82 percent after (P=0.29). The authors concluded checklist implementation was not associated with significant reductions in operative mortality or complications. An accompanying editorial by Lucian Leape argued that effective use requires local adaptation and training, and Gawande raised methodological concerns about the Ontario study (per a PSNet summary). The size of benefit in routine practice is contested.

### Implications for LTF

1. A checklist is not magic; benefit depends on adoption. Design for real use beside the sim (short, at defined moments, easy to read) rather than shipping long lists.
2. Tie each checklist to named pause points, as the surgical list is tied to sign in, time out and sign out: one short list per pause in a challenge briefing.
3. Keep a fly-mode checklist to a single non-scrolling page.
4. Do not claim LTF produces safety outcomes or quote the 40 percent figure as a promise. This is evidence about operating-room teams, not solo sim learners. If a lesson cites checklist research, cite both the positive study and the contested replication.
5. Let learners add personal reminders to a challenge, in line with the local-adaptation point.

Confirmed this session: Crossref record https://api.crossref.org/works/10.1056/NEJMsa0810119 (title, authors, NEJM 360(5), 491-499, January 2009); Harvard Gazette report https://news.harvard.edu/gazette/story/2009/01/surgical-safety-checklist-drops-deaths-and-complications-by-more-than-one-third/ (numbers and quotes); PSNet summary https://psnet.ahrq.gov/issue/surgical-safety-checklist-reduce-morbidity-and-mortality-global-population (hospitals, 19 items); search-result summaries of Urbach et al. 2014 (https://pubmed.ncbi.nlm.nih.gov/24620866/). The paper's own text was not read.

## reason2000human

Reason, J. (2000). Human error: Models and management. *BMJ, 320*(7237), 768-770. https://doi.org/10.1136/bmj.320.7237.768

### Core claims

Reason contrasts two ways of thinking about human error. The person approach locates the cause of mishaps in individuals: forgetfulness, inattention, poor motivation, carelessness, negligence and recklessness. The system approach starts from the premise that humans are fallible and that errors are to be expected "even in the best organisations." On that view "errors are seen as consequences rather than causes," with origins in upstream systemic factors. His slogan for the practical consequence: "We cannot change the human condition, but we can change the conditions under which humans work." After an adverse event the key question becomes "not who blundered, but how and why the defences failed." The article is a short commentary written for clinicians (eight references), but it distills the aviation and industrial safety work of his 1990 book Human Error (Cambridge University Press, confirmed to exist via Open Library).

### Specifics

Person approach: typical countermeasures are poster campaigns, new procedures, discipline, retraining and "naming, blaming, and shaming." It persists because blaming individuals is "emotionally more satisfying than targeting institutions." Shortcomings: most unsafe acts are not egregious (in aviation maintenance, about 90 percent of quality lapses were judged blameless, citing Marx 1997), and by isolating individuals it overlooks that "it is often the best people who make the worst mistakes" and that mishaps follow recurrent patterns whoever is involved. Effective risk management depends on a reporting culture, which depends on trust and a just culture, meaning a shared understanding of where the line between blameless and blameworthy lies.

Swiss cheese model: high-technology systems have layers of defence (engineered alarms and barriers, people such as pilots and operators, and procedures and administrative controls). Each layer is like a slice of Swiss cheese whose holes continually open, close and shift. A single hole usually causes no harm; an accident happens when holes in several layers momentarily line up.

Active failures are unsafe acts by people in direct contact with the system, in forms including slips, lapses, fumbles, mistakes and procedural violations, and their effect on defences is direct and short-lived. Latent conditions are "resident pathogens" arising from decisions by designers, builders, procedure writers and top management. They create error-provoking conditions locally (time pressure, understaffing, inadequate equipment, fatigue, inexperience) and long-lasting holes in defences (untrustworthy alarms and indicators, unworkable procedures, design deficiencies). Unlike active failures, latent conditions can be identified and fixed beforehand. Reason's analogy: active failures are like mosquitoes that can be swatted one at a time, while the remedy is to strengthen defences and drain the swamps where they breed.

The article also presents high reliability organizations (nuclear carriers, nuclear plants, air traffic control) as examples of the system approach: they treat adaptive human variability as a defence and train staff to expect and recover from errors.

### Replication and criticism

Evidence type: expert synthesis and argument by a leading error researcher, not an experiment; the aviation-maintenance figure is cited from another source. The Swiss cheese metaphor is a communication model, not a validated predictive model.

I did not search for published critiques of the model, so I attribute none. One gap is visible in the text itself: the just-culture proposal leaves open where the line between blameless and blameworthy lies; Reason says only that a shared understanding is needed.

### Implications for LTF

1. Adopt the system approach as the app's stance on learner errors. A wrong answer or failed challenge is a consequence of what the lesson showed, in what order and how clearly. Review error patterns across learners as signals about the content, before concluding anything about the learner.
2. Use layers of defence as a design pattern: instruction, a pre-flight check, an in-flight prompt, a post-flight debrief. No single layer carries all the load.
3. Hunt for latent conditions in LTF itself: ambiguous copy, checklists inconsistent between lessons, an alert that cries wolf, a mismatch between the app's picture and the sim's. These are fixable ahead of time.
4. Avoid words like careless or negligent in learner-facing copy.
5. Add a lightweight "this was confusing" channel on every page and report back what changed.
6. Design for error tolerance: undo, safe retry, and "what to do when you are behind" guidance.

Confirmed this session: PMC full text https://pmc.ncbi.nlm.nih.gov/articles/PMC1117770/ (fetched and read: structure, definitions, quotes, figures); Crossref lookup (DOI 10.1136/bmj.320.7237.768, BMJ 320(7237), 768-770, 18 March 2000); Open Library record for Reason, Human Error, 1990 (OL2687468W); PSNet review https://psnet.ahrq.gov/issue/human-error.

## faa2010flightcrew

Federal Aviation Administration. (2010). Flightcrew alerting, 14 CFR 25.1322 (final rule, 75 Federal Register 67201, 2 November 2010). U.S. Code of Federal Regulations, Title 14, section 25.1322.

### Core claims

This is a regulatory standard for how alerts on a transport-category airplane flight deck must be designed. It is not a training document and nothing in it is a flying procedure. It matters here because it is one of the few places where a design convention for alerting is written as a rule: three priority levels, a mandatory color convention, a requirement to minimize false and nuisance alerts, and a requirement that alerts be easy to detect and understand under all foreseeable conditions. The paragraph summaries below are from the Cornell Legal Information Institute text of the section as fetched this session; I paraphrase except where a short phrase is quoted.

### Specifics

Paragraph (a), basic requirement: flightcrew alerts must give the crew the information needed to recognize a non-normal condition and decide what actions, if any, to take. They must be easy to detect and understand under all foreseeable operating conditions, including when multiple alerts occur, and each alert must be removed when its condition no longer exists.

Paragraph (b), three priority levels by urgency of awareness and response: a warning needs immediate awareness and immediate response; a caution needs immediate awareness and a response that can follow; an advisory needs awareness and may need a later response.

Paragraph (c), warnings and cautions: they must be prioritized within their category where necessary, and must use at least two different senses (aural, visual or tactile) to get attention. Each attention-getting cue must be acknowledgeable and suppressible unless it is required to be continuous.

Paragraph (d), false and nuisance alerts: the alerting function must minimize them by preventing inappropriate or unnecessary alerts. There must be a means to suppress an attention-getting component if the alerting function itself malfunctions and interferes with safe operation, that means must not be readily available so it cannot be operated by accident or habitual reflex, and when an alert is suppressed the crew must get a clear and unmistakable indication of that.

Paragraph (e), color convention: the text begins "Red for warning alert indications"; caution is amber or yellow; advisory is any color except red or green. On displays that cannot show these colors, visual coding techniques and other alerting elements must distinguish the levels.

Paragraph (f), color elsewhere: red, amber and yellow may be used for non-alerting functions but only to a limited extent and without adversely affecting flightcrew alerting. A search summary this session adds that the 2010 final rule text was harmonized with the European Aviation Safety Agency, and that commenters on the proposal raised concerns about reserving the three colors for alerting. I did not read the preamble.

### Replication and criticism

Evidence type: a regulation. It represents consensus and accumulated accident experience, not a controlled experiment, and it applies to a specific class of airplane. A related FAA human-factors guideline, as quoted in a search summary, says evaluations should verify that colors are distinguishable under expected lighting (red looks red, amber looks amber). That is guidance from the FAA human factors group, not from the rule.

Limits and caveats: the rule is a floor for certification, not a full alert design method; it says what an alert must do, not how to compose it. The color convention is cultural and regulated in aviation, but red is not universal for danger. Color-only coding fails for color-blind users, which is why the rule requires redundant senses for warnings and cautions and says other coding is needed on monochrome displays. I have not found a challenge to the three-tier structure in the sources I read.

### Implications for LTF

1. Use three levels, and only three, for in-app messages in fly mode and challenges: must-act-now, act-soon, and note-for-later. Give each level a distinct visual treatment and a distinct place on the page.
2. Reserve red (or the dark-theme equivalent) for must-act-now. If red is used for decoration, errors in forms, or progress, the real warning loses meaning. The rule's paragraph (f) is the model: limit red, amber and yellow elsewhere in the UI. Check this against the token palette in `tokens.css`, and keep it in both light and dark themes.
3. Never rely on color alone: pair each level with a word, an icon shape and, where sound is on, a sound. The rule requires at least two senses for the top two levels; in a web page this means text plus icon plus optional audio.
4. Minimize false and nuisance alerts. A nudge that is wrong or irrelevant should be rare and easy to turn off, but the off switch should not be so easy that it is hit by accident (paragraph (d)), and when a nudge type is off the page should say so.
5. Remove an alert when its condition clears (paragraph (a)). A stale "you are too fast" banner after the learner has corrected is a design bug.
6. Warnings must be acknowledgeable. Offer a dismiss control that does not hide the underlying state.
7. These are display-design principles only. They imply nothing about what the real aircraft's warnings are or what to do about them; any such content must come from the aircraft documentation.

Confirmed this session: text of 14 CFR 25.1322 fetched from https://www.law.cornell.edu/cfr/text/14/25.1322 (paragraph-by-paragraph summary; I did not obtain a verbatim copy); web search listing for the 2 November 2010 Federal Register final rule (https://www.govinfo.gov/content/pkg/FR-2010-11-02/pdf/2010-27629.pdf, title "Flightcrew Alerting", pages 67201-67210) and FAA AC 25-11B listing; the AC itself returned 403 and was not read.
