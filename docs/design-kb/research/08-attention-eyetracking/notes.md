# Lane 08: Attention and eye tracking (research notes)

## yarbus1967eye
Yarbus, A. L. (1967). *Eye Movements and Vision* (B. Haigh, trans.). New York: Plenum Press.

### Core claims
Yarbus made some of the first reliable recordings of where the eye goes during long viewing of complex pictures, and argued that the pattern of fixations depends on the task the viewer is carrying out, not only on what the picture contains. His best known demonstration has one observer view Ilya Repin's painting "The Unexpected Visitor" several times, each time after a different instruction, producing visibly different scanning records. The book is the root of the idea that gaze is steered from the top down by goals, and it is the usual starting point for any claim that people look at what they need.

### Specifics
Method, as described by Tatler, Wade, Kwan, Findlay and Velichkovsky (2010, i-Perception 1:7-27): Yarbus developed suction-cap eye trackers and devices that presented stabilised retinal images, which faded from view within seconds. For the picture series, one observer viewed the painting seven times, each recording lasting 3 minutes, each after a different instruction. Paraphrasing that paper, the instructions covered free examination, estimating the family's wealth, giving the ages of the people, guessing what the family had been doing, remembering the clothing, remembering the positions of people and objects, and estimating how long the visitor had been away.

Main statements: where a person looks depends on the task. Tatler et al. quote Yarbus as writing that "Depending on the task in which a person is engaged...the distribution of the points of fixation on an object will vary correspondingly." Viewers of faces favored the eyes and cycled among eyes, nose and mouth. Over long viewing the eye returned repeatedly to the most informative elements in cycles, an observation that inspired the scanpath theory of Noton and Stark (1971).

### Replication and criticism
The evidence is modest by modern standards: the famous picture series is one observer, the face records came from very few recordings, and most citations rely on a single figure. Tatler et al. note that suction caps still showed some slippage.

Later work partly supports the core claim. DeAngelus and Pelz (2009) showed task-dependent differences across several observers viewing the painting. Tatler et al. (2010) re-ran the design with a portrait of Yarbus, 20 volunteers (two lost to technical problems) and seven instructions, and found that gaze allocation shifted with instruction, with the eyes and mouth taking the most gaze in free viewing. Cyclic scanning among features appeared in some observers but not in many, and it was weaker when the face appeared with the body.

Then the strong form was challenged. Greene, Liu and Wolfe (2012, Vision Research 62:1-8) tried to infer which of four tasks an observer was doing from summary eye-movement features. In their first experiment (16 observers, 10 s per image) task was classified at 27.1 percent against 25 percent chance, while image and observer identity were decoded well above chance (see the greene2012reconsidering section). A web search summary reports later papers that found small above-chance decoding with stronger classifiers, so the open question is how much task information scanpaths carry, not whether task matters at all. The sensible reading: task changes which information gets fixated, but a one-picture, within-observer contrast does not show that an analyst can read the task back out of a heat map.

### Implications for LTF
1. Put the task in every page. A learner asked "find your airspeed" will scan a panel differently from one told "describe the panel". Lesson text, challenge briefings and quiz stems should state the goal before showing the display, because the goal is what steers attention.
2. Do not design for a single imagined "natural" gaze path. Test widgets under the task the learner will actually be doing, for example while hand-flying next to the sim, not by free viewing a static screenshot.
3. For instrument-reading practice, the task-driven nature of gaze supports teaching the scan as an explicit procedure with a purpose at each step, not as "look at the panel".
4. If LTF ever collects gaze or click heat maps, segment them by task, because mixed-task aggregates blur.
5. Faces pull early fixations (eyes first), so any instructor photo or illustration in a lesson hero will draw the first look. Use that deliberately.

Confirmed this session: Open Library editions for work OL13258180W (publisher, year, translator Basil Haigh, translation editor Lorrin A. Riggs); the method, the quoted sentence, the citation count and the 2010 replication from Tatler et al. 2010, PMC3563050 (fetched summary); Greene et al. 2012 via PMC3526937. I did not read the 1967 book itself.

## posner1980orienting
Posner, M. I. (1980). Orienting of attention. *Quarterly Journal of Experimental Psychology, 32*(1), 3-25.

### Core claims
Posner argued that attention can be pointed at a location in space without moving the eyes, that covert orienting has measurable benefits when it points the right way and costs when it points the wrong way, and that it is related to saccadic eye movements and to distinct brain systems. The Crossref abstract frames the work as a "simple model task" in which people are told to commit attention to a position other than fixation, and says the covert mechanism is "sufficiently time locked to external events that its trajectory can be traced across the visual field in terms of momentary changes in the efficiency of detecting stimuli". It compares results from alert monkeys, brain-injured and normal human subjects and explores whether similar principles apply to orienting toward the semantic structures used in thinking.

### Specifics
The cueing paradigm that Posner made standard works like this, as described by Green and Woldorff (2011, Cognition 122:96-101; PMC3215838) and the Wikipedia entry for the Posner cueing task. The observer fixates a point between two boxes. A cue appears, then a target appears in one of the boxes after a variable interval (the stimulus onset asynchrony, SOA), and the observer responds as fast as possible. 

Key manipulations: (1) cue type. A central, symbolic cue such as an arrow demands voluntary (endogenous) orienting; a peripheral cue such as a flash at the location produces involuntary (exogenous) orienting. Green and Woldorff say central cues take a few hundred milliseconds to work, while peripheral cues act quickly but briefly. (2) validity. Posner's original studies used a mostly valid cue, 80 percent valid and 20 percent invalid, so observers learn to follow it. (3) a neutral baseline, no cue or a cue that signals timing but not place, so that benefits (faster than neutral at the cued place) and costs (slower than neutral at an uncued place) can be separated. Green and Woldorff attribute the benefit/cost split to Posner, Snyder and Davidson (1980), not to the 1980 paper under review.

Results in the secondary accounts: responses are faster and more accurate at cued than uncued locations. In Green and Woldorff's experiments with arrow cues 80 percent predictive, voluntary cueing effects appeared only at SOAs of 300 ms or more for short-duration targets, and effects at very short SOAs appeared only with long-duration targets and were attributed to cue-target conflict rather than attention.

Related, from Itti, Koch and Niebur (1998): their model inhibits the just-attended region for about 500 to 900 ms, citing Posner and Cohen (1984), not the 1980 paper. That is inhibition of return, which I did not confirm from Posner 1980 itself.

### Replication and criticism
The cueing advantage has been replicated many times and the paradigm is standard, but the specifics I could confirm are about boundaries. First, the voluntary versus involuntary distinction is carried by time course (slow versus fast), not by a sharp boundary. Second, Green and Woldorff argue that arrow-cue effects at very short SOAs come from stimulus conflict, not rapid orienting, so "arrows direct attention instantly" is too strong. Third, the 1980 paper is a framework paper drawing on clinical and animal data, so cite it for the idea and the paradigm. I did not retrieve its data tables and so quote no reaction times.

### Implications for LTF
1. Cues work, but only if they are usually right. If an LTF callout, pulsing highlight or "look here" arrow points to the wrong place often, learners will learn to discount it. Reserve emphasis for the element that matters and keep valid cues the overwhelming majority.
2. An invalid cue costs time. A stale highlight left on the wrong gauge after a step ends delays detection elsewhere, so clear emphasis when the step is done.
3. Speed differs by cue type. A sudden flash, color change or motion at the target location grabs attention quickly but briefly; an arrow or sentence that tells the learner where to look takes a few hundred milliseconds. Use peripheral onset for alerts that must be seen (a fly-mode warning) and symbolic cues for guided reading.
4. Attention can move without the eyes, so a learner looking at a display may be attending elsewhere. Do not equate "was on screen" with "was attended"; ask for a response when the point matters.
5. Let the cue precede the target: highlight the "airspeed" label, then reveal the number.

Confirmed this session: Crossref record and abstract for DOI 10.1080/00335558008248231; Green and Woldorff 2011 (PMC3215838) and the Wikipedia Posner cueing task page for the paradigm; the Itti et al. 1998 PDF for the inhibition figure. I did not read Posner 1980 in full.

## kahneman1973attention
Kahneman, D. (1973). *Attention and Effort*. Englewood Cliffs, NJ: Prentice-Hall.

### Core claims
Kahneman proposed that attention is best understood as a limited pool of mental capacity that is allocated among concurrent activities, rather than as a single bottleneck that blocks all but one input. In his account, the amount of effort a person invests is tied to the demands of the activity, to arousal, and to a policy for allocating capacity that is shaped by momentary intentions and by more enduring dispositions. He treated pupil dilation as a physiological index of how hard the mind is working. The book is the standard origin of the "capacity" view of attention and of the idea that mental effort can be measured.

### Specifics
The Princeton Kahneman archive lists the book's table of contents, which includes a chapter titled "A Capacity Model of Attention" and a closing "Review and Preview". A recent critical reappraisal by Bruya and Tang (2018, Frontiers in Psychology, "Is attention really effort? Revisiting Daniel Kahneman's influential 1973 book Attention and Effort") summarizes the argument as follows, and I rely on that account for the claims below.

Capacity: attention is a general limited capacity for mental work that can be spread over concurrent activities. Kahneman rejects structural bottlenecks in favor of "a general limit on man's capacity to perform mental work" (as quoted by Bruya and Tang, pp. 7-9 of the book). Arousal: he separates the intensive aspect of attention from general arousal but argues that in its physiological manifestations effort is a special case of arousal, defined as sympathetic dominance. Identification: attention is equated with effort, so a schoolboy who works harder is paying more attention. Voluntary attention is effort in activities selected by current plans and intentions, and involuntary attention is effort in activities selected by more enduring dispositions. Effort is linked to demand: time pressure is an important determinant of effort, and novel stimuli produce a surge of mental effort.

Evidence: the main index is pupil dilation. Kahneman reviewed research programs, including his own, in which pupil size tracked mental work. A saying-versus-thinking comparison controlled for muscle strain, and dilation was largest during the task and larger for success than failure, which he used to rule out anxiety (Bruya and Tang's account).

### Replication and criticism
The book has been cited more than 10,000 times according to Bruya and Tang, and they argue it has gained the status of an unquestioned premise. Their critique, which is a conceptual paper rather than a replication:
- "Effort" is never operationally defined and the step from effort to attention is not justified; they cite Moray (1974) calling the concept "rather elusive".
- Pupil responses decrease with practice on high-load tasks (Geva et al., 2013), which is hard to square with a literal identity of attention and effort if demands are still being met.
- Meditation studies report attention alongside parasympathetic signs, so effortful attention is only one kind.
- Under adaptive gain theory, pupil dilation reflects readiness to spend resources rather than the expenditure itself.
- The evidence leaned on laboratory tasks with forced attention and says little about low-effort, ecologically valid attention such as games.

Capacity thinking was later developed into multiple-resource models, which the Wickens et al. (2003) abstract applies to cockpit displays (see wickens2003attentional). Because I read the book only through a catalog entry and a critical review, I do not quote its text directly.

### Implications for LTF
1. Beginners have little spare capacity. Everything unfamiliar (the sim controls, the vocabulary, the instruments) costs effort, so a lesson that adds decorative motion, extra text or multiple simultaneous calls to action competes with the thing being learned. Cut anything that does not serve the one task.
2. Time pressure raises effort. In challenge briefings and in fly mode, avoid countdowns or urgency language unless time pressure is itself the learning goal, because it taxes capacity that the learner needs for the flying.
3. Respect the policy side. People direct capacity by their current intention. A page that states the single thing to do next ("set the altimeter, then continue") lets the learner commit capacity to it; a page with five equal calls to action leaves the policy undecided.
4. Novel stimuli produce a surge of effort, so keep persistent page chrome calm and reserve novelty for what matters.
5. Treat effort proxies skeptically: effort and attention are contested as the same thing, and effort measures fall with practice.

Confirmed this session: Open Library record OL7198970W (Prentice-Hall, 1973, Englewood Cliffs, 246 pages); Princeton Kahneman archive table of contents (surfaced in search); Bruya and Tang 2018 (frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2018.01133/full) via fetched summary. I did not read the book.

## theeuwes1992perceptual
Theeuwes, J. (1992). Perceptual selectivity for color and form. *Perception & Psychophysics, 51*(6), 599-606.

### Core claims
Theeuwes asked whether people can use what they know about a target to shield themselves from conspicuous but irrelevant items. His experiments say they cannot, at least when the irrelevant item differs on a very salient dimension. Even with extended, consistent practice, "complete top-down selectivity toward a particular feature was not possible" (Europe PMC abstract, PMID 1620571). What gets through depends on the relative discriminability of the dimensions: a uniquely colored item interferes with a search for a unique shape, and a uniquely shaped item interferes with a search for a unique color. The paper is a central citation for stimulus-driven attention capture by the "singleton", the one item that differs from its neighbors.

### Specifics
The abstract reports three visual-search experiments. Subjects searched multi-element displays for a salient green circle. In one condition the target had a unique form, being the circle among green squares. In the other the target had a unique color, being the green item among red circles. In the distractor conditions an additional salient item in the other dimension was present as well, and the key measure was whether it slowed the search. The paper is an extension of Theeuwes (1991), which reported cross-dimensional interference, and its logic is that a preattentive parallel stage could, in principle, be told to guide the attentive stage to one known feature. The result was that it could not do so completely.

I did not read the full text, so I do not report reaction-time figures or sample sizes. The qualitative findings I can state from the abstract are: the interference appeared in both directions (color distractor on form search and form distractor on color search); it did not go away with practice; and it scaled with how discriminable the distractor's dimension was compared with the target's.

### Replication and criticism
This is one of two competing schools in attention capture, and the dispute is documented in Burke, Hornof, Nilsen and Gorman (2005), which I read. The stimulus-driven school, here represented by Theeuwes (1991, 1992), holds that a unique, salient item captures attention whatever the searcher intends. The goal-driven school argues the opposite. Bacon and Egeth (1994), as summarized by Burke et al., concluded that searchers who are looking for a singleton adopt a "singleton detection mode" and so attend to anything that pops out, because that takes less effort than filtering by the relevant dimension; when the target was no longer a singleton the irrelevant singleton stopped distracting. Folk et al. (1992) proposed contingent involuntary orienting: only distractors that share a task-critical property with the target capture attention. Burke et al. also report Pashler (2001) finding that participants searched faster with irrelevant flashing distractors, a surprising result.

So the honest state of the field, from what I read, is that the interference is real in the lab conditions Theeuwes used, but whether it generalizes to every salient item in every task is contested. Burke et al. sum up the second school by saying the attractiveness of certain stimuli may depend on the viewer's mindset rather than any intrinsic power of animation. Theeuwes is not directly about animation, ads or interfaces, so extending it to LTF is an inference.

### Implications for LTF
1. Make the accent color mean one thing. If red is used for "stop" or "limit" in an instrument widget, a red item elsewhere on the page (a decorative tag, a red button) competes with it. Reserve the loudest hue for the single most important state.
2. Do not scatter equally salient items. A page with several uniquely colored or shaped elements asks the learner to search among competing singletons. Give each screen one visual focal point, and let secondary elements be calm.
3. Expect interference across dimensions: a bright badge or colored progress chip can slow finding a specific shape, such as a gauge needle. Keep chrome (progress bars, streak counters, badges) neutral inside widget regions in fly mode.
4. Do not rely on telling learners to "ignore the red banner". Practice does not eliminate the effect in the lab, so remove the distractor instead.
5. Use salience deliberately for warnings: a unique color or shape is the right device for a "you are in an unsafe configuration" cue because it will be noticed, but it is also what makes it costly everywhere else, so use it sparingly and only for real warnings.

Confirmed this session: Crossref query returning DOI 10.3758/bf03211656 (Perception & Psychophysics 51(6) 599-606, 1992); abstract from Europe PMC (PMID 1620571, DOI search); Burke et al. 2005 manuscript for the competing accounts. I did not read the paper itself.

## itti1998model
Itti, L., Koch, C., & Niebur, E. (1998). A model of saliency-based visual attention for rapid scene analysis. *IEEE Transactions on Pattern Analysis and Machine Intelligence, 20*(11), 1254-1259.

### Core claims
The paper presents a computational model, inspired by early primate vision, that turns an image into a single topographic "saliency map" and then picks attended locations in order of decreasing saliency. Its purpose is to break down scene understanding by rapidly selecting conspicuous locations for detailed analysis. It is the standard citation for "bottom-up saliency": where attention goes first is predictable from how much a place differs from its surroundings in color, brightness and orientation.

### Specifics
I read the full six-page paper. Inputs are static color images, usually 640 by 480 pixels, filtered into nine spatial scales. Features come from center-surround operations (differences between fine and coarse scales). Three kinds of feature: intensity contrast (dark centers on bright surrounds and the reverse), color opponency (red/green and blue/yellow, built from four broadly tuned color channels), and local orientation at 0, 45, 90 and 135 degrees using Gabor pyramids. In total 42 feature maps are computed: six for intensity, 12 for color and 24 for orientation.

Combining incomparable maps is handled by a normalization operator that promotes maps with a small number of strong peaks and suppresses maps with many comparable peaks. The maps are merged into three conspicuity maps (intensity, color, orientation), normalized and summed into the input to the saliency map. The saliency map feeds a winner-take-all network; the winning location becomes the focus of attention and is then inhibited so it is not revisited at once (inhibition of return). Parameters were chosen so that attention shifts in about 30 to 70 ms of simulated time and an attended area stays inhibited for about 500 to 900 ms.

Results are mostly demonstrations. On artificial pop-out displays, a target that differed from distractors by orientation, color, intensity or size was always attended first irrespective of the number of distractors; a target defined only by a conjunction of features (the only red horizontal bar among red vertical and green horizontal bars) took search time that increased linearly with the number of distractors, matching widely observed human results. On natural scenes, the authors report that most attended locations were objects of interest such as faces, flags, persons, buildings or vehicles. A comparison against local spatial frequency content used 258 images.

### Replication and criticism
The authors state limits themselves: no top-down guidance; no motion channel, though motion strongly affects human saliency, and it cannot detect conjunctions or features with no dedicated map. They say it "does not necessarily indicate similarity between human eye fixations and the model's attentional trajectories". The paper contains no human eye-tracking data of its own.

Subsequent testing was less kind. Tatler, Hayhoe, Land and Ballard (2011) report that evaluations of salience-based models against human fixations give areas under the ROC curve of roughly 0.55 to 0.65 (0.5 is chance), so salience accounts for only a modest share of fixations, and that salience correlates only with short saccades and weakens once the viewer's task changes. In a natural task (Rothkopf et al. 2007, cited there), people looked mainly at objects, with about 15 percent of fixations on background, while the salience model predicted more than 70 percent on background. Tatler et al. conclude that salience is not a suitable framework for natural behavior, though large, sudden events can still capture attention.

### Implications for LTF
1. Difference still matters for first glance. The element that differs strongly in color, brightness or orientation from its surroundings gets early attention, so make the intended focal point the most conspicuous item and check that nothing decorative outcompetes it.
2. Do not trust a saliency or "attention map" tool to predict learner gaze: it predicts only modestly and fails once learners have a task. Prefer testing with real learners doing real tasks.
3. A feature with no dedicated map cannot pop out. For widgets, make the key cue differ in a basic feature (a different color, or a clear orientation change in a needle) rather than in a subtle conjunction (a slightly different shape plus color).
4. Motion is a strong factor the model omitted; keep animation off screens where something else must be found.
5. Pop-out holds only for single-feature targets, so on a panel with many gauges a single unique cue (a warning color) is found fast, while a target defined by a combination needs search that grows with clutter.

Confirmed this session: Crossref record for DOI 10.1109/34.730558; full text read from a downloaded PDF copy; Tatler et al. 2011 full text for the ROC range and the Rothkopf figures.

## tatler2011eye
Tatler, B. W., Hayhoe, M. M., Land, M. F., & Ballard, D. H. (2011). Eye guidance in natural vision: Reinterpreting salience. *Journal of Vision, 11*(5), article 5.

### Core claims
Models of where people look were built mostly on studies of people viewing still pictures, and the dominant result was the image-salience framework (Itti and Koch and descendants). The authors argue that salience-based schemes "are poor at accounting for many aspects of picture viewing and can fail dramatically in the context of natural task performance" (abstract). Their alternative: gaze in natural behavior follows behavioral relevance, learned expectations, reward and the reduction of uncertainty about the world, not the conspicuity of image regions. This is a peer-reviewed review and position paper, not a single experiment.

### Specifics
I read the full text. Evidence cited by the authors:
- Evaluations of salience models against human fixations give areas under the ROC curve in the region of 0.55 to 0.65 (0.5 is chance), so the proportion of fixation behavior that image salience explains is modest.
- Correlations between features and fixation are only found for small-amplitude saccades and disappear once the viewer's cognitive task is manipulated.
- In a natural task, Rothkopf, Ballard and Hayhoe (2007) found that people looked mainly at objects, with only about 15 percent of fixations on the background, whereas the salience model predicted that more than 70 percent should fall on background.
- Drivers look consistently at or near the tangent point of a bend or at the lane ahead, with around 50 percent of fixations by three drivers within an area of about 3 degrees in diameter (Land and Lee, 1994, as cited).
- In everyday tasks such as making tea or a sandwich, people look at the places where an object is about to be put, including currently empty locations, and fixations fall almost entirely on task-relevant objects. Before a task begins, fixations split roughly equally between relevant and irrelevant objects.

The authors examine five assumptions of the salience framework: that preattentive features drive fixation, that there is a default bottom-up "free viewing" mode, that targets are selected from a map by a winner-take-all rule, that time can be ignored, and that saccades land precisely on targets. They also argue that picture viewing has artifacts: monitor framing induces a central bias, and the sudden onset of a whole scene has no real-world analogue. In their alternative, learning teaches people where and when to look, and reward-based models (for example Sprague, Ballard and Robinson, 2007, a virtual walking agent that learns where to look to maximize reward) are the promising direction, though still early.

### Replication and criticism
This is a synthesis of many studies, and the evidence base is strong for the claim that task and reward dominate in natural behavior. It does not say salience is irrelevant: the authors concede that conspicuity can capture attention when signals are large, such as sudden onsets or surprising events, and that it may play a larger role under reduced cognitive load. Reward-based models are described as underdeveloped, and they are not yet predictive tools you can run on a layout. I did not retrieve later rebuttals, so I cannot say how the field has moved since 2011.

### Implications for LTF
1. Flying is a task-driven activity like those the paper studies (driving, walking, tea making), though the paper does not cover flying, so this is an inference. Gaze follows what the task needs and learned expectations; novices have not learned the "where and when" yet. An instrument-scan lesson should teach it: where to look, when, and why.
2. Do not use image salience to predict where learners will look on a lesson page. They will look where the task takes them. Design for the task, then test.
3. Expect learners to look ahead of an action at the place where something will happen (the empty location before the object arrives). Pre-position information where the next step's action will occur, such as the control the learner is about to use.
4. Because fixations before a task starts are spread over relevant and irrelevant items, put the task statement first; once the task begins, gaze concentrates on what is needed.
5. The authors say monitor framing induces a central bias, so do not assume that a centrally placed element is read just because it is there.

Confirmed this session: Crossref record for DOI 10.1167/11.5.5; full text of the paper (PDF copy, 23 pages) with numeric checks on ROC range, 15 percent, tangent point, sandwich and tea making; PMC3134223 summary (also fetched).

## greene2012reconsidering
Greene, M. R., Liu, T., & Wolfe, J. M. (2012). Reconsidering Yarbus: A failure to predict observers' task from eye movement patterns. *Vision Research, 62*, 1-8.

### Core claims
Yarbus's 1967 figure is often read as showing that an observer's task can be seen in their scanpath. Greene, Liu and Wolfe tested that directly. A classifier fed summary eye-movement features could identify which image and which observer a record came from at above-chance rates, but it could not identify which task the observer was performing, and human judges looking at overlaid scanpaths also failed. The authors conclude, in the words of the fetched PMC text, that "static scan paths alone do not appear to be adequate to infer complex mental states of an observer."

### Specifics
Method (PMC3526937): 64 grayscale Time Life photographs from 1930 to 1979, each with at least two people, displayed at 24 by 24 degrees on a 21-inch CRT. Eye movements were recorded with an EyeLink 1000 at 1000 Hz, right eye, with calibration error of 1 degree or less. Four tasks: memory, guessing the decade, judging how well the people know each other, and judging wealth. Seven summary features: number of fixations, mean fixation duration, mean saccade amplitude, percentage of the image covered by fixations (1 degree fovea), and the dwell-time share on faces, bodies and objects. A linear discriminant classifier with leave-one-out cross-validation decoded image, participant and task.

Results, as reported in the paper:
- Experiment 1 (16 observers, 10 s per image): image 33 percent correct against 1.5 percent chance; participant 26 percent against 6.3 percent; task 27.1 percent against 25 percent chance. The "people" task was best at 42 percent and memory worst at 18 percent.
- Experiment 2 (8 new observers rating how well each image suited each task): the lack of task decoding did not depend on image suitability. With the 37 images that had no ambiguity flags, task decoding was 26.6 percent (p = 0.31), and high-agreement and low-agreement subsets were both 24.6 percent.
- Experiment 3 (16 observers, 60 s viewing, 20 images): participant 42.8 percent, image 54.4 percent, task 25.9 percent (p = 0.70).
- Experiment 4 (humans judging overlaid scanpaths, about 10 observers, 100 trials per condition): 26.3 percent correct at 10 s and 27.5 percent at 60 s, no better than chance.
- Using only the first second, the first two seconds or the last eight seconds did not rescue task decoding (about 25 to 27 percent).

Three classifiers gave the same null result for task. Image and observer were decodable, so the features carried information; task information was what was missing.

### Replication and criticism
The authors list reasons for the gap with Yarbus: task effects may only appear within one observer and one image; the labels on Yarbus's figure may flatter the differences; summary statistics discard the temporal structure of scanpaths; and instructions may not change viewing much unless the information is needed. Their own limits: each observer saw each image once, features were summaries, and samples were modest.

The result has been qualified since. A web search summary (not read in full) reports that Borji and Itti (2014, "Defending Yarbus", Journal of Vision) decoded task slightly but significantly above chance using aggregate features and a boosting classifier; that Hsiao and Cottrell reanalyzed the same data with stronger algorithms and predicted task; and that Bahle, Mills and Dodd (2017) found humans could deduce task from eye movements alone. Tatler et al. (2010) had found that instruction shifts gaze for one portrait (see yarbus1967eye). The net position is that task shapes gaze but the signal in simple summary statistics from mixed pictures is weak, and strong claims in either direction need care.

### Implications for LTF
1. Do not promise "we can tell what the learner is thinking from where they look". Even in a lab with research-grade trackers and well-chosen tasks, task identification from summary gaze features was no better than chance.
2. If LTF ever adds gaze-based adaptation, treat it as unreliable inference and prefer explicit signals such as answers and time on step.
3. Check within-subject, within-page comparisons, not pooled ones, if gaze studies are run on LTF pages. The positive Yarbus-style evidence comes from comparing the same viewer and picture under different instructions.
4. Be wary of "people looked at X, so they wanted X" in heat-map reports; a different task gives a different map.
5. Gaze alone does not reveal the learner's intention, so teach what to look for explicitly and ask.

Confirmed this session: Crossref record for DOI 10.1016/j.visres.2012.03.019; full text and results from PMC3526937 (fetched summary of the paper); the later-work paragraph is from a web search summary only and is flagged as such.

## rensink1997see
Rensink, R. A., O'Regan, J. K., & Clark, J. J. (1997). To see or not to see: The need for attention to perceive changes in scenes. *Psychological Science, 8*(5), 368-373.

### Core claims
The paper argues that people do not build a complete, detailed internal copy of a scene, and that noticing a change requires focused attention on the part that changes. When the brief motion signals that normally draw attention to a change are swamped, large and obvious changes in real-world pictures become very hard to find. The abstract says observers "never form a complete, detailed representation of their surroundings", and the introduction describes perception of change as "mediated through a narrow attentional bottleneck", with attention drawn by high-level interest. It introduced the flicker paradigm, now the standard demonstration of change blindness.

### Specifics
I read the scanned paper (OCR is rough in places). In the flicker paradigm an original image A alternates with a modified image A', with a brief blank field between them, until the observer reports the change. In this study each image was shown for 240 ms and each blank for 80 ms, in the order A, A, A', A', and the cycle continued for up to 60 s or until the observer responded. All experiments used the same 48 color images of real-world scenes, 27 by 18 degrees. A single change was made to one object or area: a change in color, location, or presence versus absence. Ten naive observers took part in each experiment, were told the possible kinds of change and had six practice trials. They pressed a key on noticing and then described the change, so guesses did not count. The measure was the average number of alternations needed, from correct responses only.

To test the role of interest, changes were sorted by the interest of the changed part. Five naive observers described each scene in words. "Central interest" (CI) parts were objects mentioned by three or more observers; "marginal interest" (MI) parts were mentioned by none. The MI changes were slightly larger on average (22 versus 18 square degrees).

Results, Experiment 1: marginal-interest changes needed an average of 17.1 alternations (10.9 s) before being identified, and for some images observers needed more than 80 alternations (50 s) to find a change that was obvious once seen. Central-interest changes were found after an average of 7.3 alternations (4.7 s). When the blanks were removed, identification took only 1.4 alternations (0.9 s) with no interest difference, which shows the changes were easy to see in the absence of flicker. Per the abstract, a valid verbal cue made identification much faster, ruling out poor visibility, and changes to important objects were found faster.

### Replication and criticism
The flicker method was widely adopted; I did not retrieve later replication or meta-analytic work, so I give no replication figures. Two cautions come from the paper itself. First, the manipulation is artificial: the flicker masks the local motion signals that, in ordinary viewing, attract attention to a change. The authors say that it is only when low-level transients are masked or disregarded that the sparse nature of the scene representation shows. Second, "no complete representation" is inferred from slow detection. The evidence is controlled experiments with small samples (10 per experiment) but large effects.

The related inattentional-blindness work of Simons and Chabris (see simons1999gorillas) extends the point from changes to unexpected events.

### Implications for LTF
1. If a value or state changes on screen, a learner may not notice, especially if the change coincides with a redraw, page transition, loading flash or scroll. Updates that happen during a transient (a re-render, a modal opening) can be missed.
2. Use a transient on purpose. A brief, local animation at the changed element restores the motion signal that attracts attention; a silent swap does not. Pair it with an explicit label ("flaps now 10") for state that matters.
3. A verbal cue naming what changed makes it easy to find, so state the change in words beside the widget.
4. "On the screen" does not mean "seen". For quizzes that rely on noticing, give time and a prompt.
5. Interest speeds detection: tie changes to objects the lesson has made important (the airspeed tape in an airspeed lesson). Learners will find changes to what matters faster than changes elsewhere.
6. My inference, not from the paper: a cockpit display that changes mode without a transient may go unnoticed, so LTF widgets should show changes as visible events.

Confirmed this session: Crossref abstract for DOI 10.1111/j.1467-9280.1997.tb00427.x; full text of the paper from a PDF copy (Experiment 1 numbers and method); no later replication papers read.

## simons1999gorillas
Simons, D. J., & Chabris, C. F. (1999). Gorillas in our midst: Sustained inattentional blindness for dynamic events. *Perception, 28*(9), 1059-1074.

### Core claims
People can fail to see a clearly visible, unexpected object or event when their attention is occupied with something else, even when the object appears in the middle of the scene for several seconds. The authors name this inattentional blindness and tie it to the broader finding that we perceive and remember mainly what receives focused attention. From the Crossref abstract: "the likelihood of noticing an unexpected object depends on the similarity of that object to other objects in the display and on how difficult the priming monitoring task is." Spatial proximity to the attended locations did not affect detection, which suggests "observers attend to objects and events, not spatial positions" (abstract).

### Specifics
Observers watch a video of two teams passing basketballs and perform a monitoring task, counting passes by one team. During the video an unexpected object or person (a woman with an umbrella, or a person in a gorilla suit) crosses the scene. The abstract names the manipulations: similarity of the unexpected object to the attended items, and difficulty of the counting task.

From Simons (2010, i-Perception 1:3-6; PMC3563049), which describes the 1999 work: Simons and Chabris first replicated Neisser's partially transparent design, then filmed fully visible actors including a woman in a gorilla suit who stopped mid-action, faced the camera and thumped her chest. In that condition "only 50% of observers noticed" the gorilla, and before viewing about 90 percent of people predicted they would notice it (as reported there). I did not read the results section, and secondary sites give per-condition percentages that disagree, so I do not repeat them.

### Replication and criticism
In Simons (2010), a new green-screen video (red stage curtain, three white-shirt and three black-shirt players, the clip lasting 30 seconds with the gorilla on screen for 6 seconds) was shown to 76 people at a university student union, who counted white-team passes; after exclusions 23 knew the original gorilla video and 41 did not. All 23 familiar viewers noticed the gorilla, against 56 percent (23 of 41) of unfamiliar viewers. In that new video, a curtain color change (red to gold) and a player leaving were noticed by only 11 and 16 percent across both groups. The familiar group did no better: 17 percent of familiar and 29 percent of unfamiliar viewers noticed the curtain or the player, a difference reported as not significant. Knowing about the gorilla gave no significant help in spotting other surprises.

Cautions: this is a lab demonstration, and the 50 percent figure belongs to one video and one counting task, not a universal rate. It shows failure to notice, not a defective visual system, and it does not say how often the failure matters in skilled, familiar tasks.

### Implications for LTF
1. When a learner is busy with a demanding task, assume that unexpected but important information will be missed even if it is large and in plain view. Do not put the only warning, correction or "you drifted off heading" notice in a place and form that the primary task makes irrelevant.
2. The more similar a new element is to what is being attended, the more likely it is noticed. A notification styled like the content the learner is already focused on will be seen more than one styled differently; a warning styled like "other" chrome is likely to be ignored.
3. Difficulty matters. In fly mode, where the learner may be hand-flying and glancing at the screen, the more of the learner's attention the flying consumes, the less will be left for peripheral instructions. Keep briefing screens glanceable and put critical instructions before the task, not during it.
4. Knowing about the effect gave no significant protection in the 2010 data, so do not rely on vigilance: make important alerts redundant (visual plus audio where supported) and require acknowledgment.
5. Teach the scan: a habitual, scheduled check reduces reliance on chance noticing of a drifting value.

Confirmed this session: Crossref record and abstract for DOI 10.1068/p281059 (the same article is also indexed under 10.1068/p2952); Simons 2010, https://pmc.ncbi.nlm.nih.gov/articles/PMC3563049 (fetched summary) for the study descriptions and percentages. I did not read the 1999 paper's results section.

## benway1998banner
Benway, J. P. (1998). Banner blindness: The irony of attention grabbing on the World Wide Web. *Proceedings of the Human Factors and Ergonomics Society Annual Meeting, 42*(5), 463-467.

### Core claims
Web designers make important links distinctive, for example as banners, in order to draw attention to them. Benway's experiments found the opposite effect when people were looking for something specific: they often overlooked precisely the distinctive items. The Crossref abstract states the irony directly: "the user who really wants to find the information the designer has highlighted is not likely to do so." The paper reproduced "banner blindness" under controlled conditions and gave the phenomenon its name in the human-factors literature.

### Specifics
I have only the abstract (Crossref) and secondary descriptions, not the full paper. From the abstract: banner blindness was reproduced under controlled conditions in experiments where users were asked to find specific items. The findings reported are:
- Banners located higher on the page, and therefore further from the other page links, were missed more often than banners located lower and closer to the other links.
- Banners were missed more often on pages containing links to categories than on pages containing links to specific items.
- Users saw banners "hardly at all" when clicking a banner was not required to accomplish the task.

Burke, Hornof, Nilsen and Gorman (2005) cite Benway and Lane (1998) as early research suggesting that Web users are functionally blind to rectangular graphics that they perceive to be advertisements. (Crossref lists this paper under Benway alone; I did not resolve how it relates to the Benway and Lane citation.) I report no sample sizes or tasks, because I have not read them.

### Replication and criticism
The effect has been reproduced elsewhere. Burke et al. (2005) ran eye-tracking experiments on search among news headlines with banner ads: people looked directly at banners in only 11.7 percent of trials, and of the banners that participants later "remembered", about 94 percent had not been directly looked at, which they read as recognition by luck (see burke2005highcost). Kara Pernice of Nielsen Norman Group (article dated 22 April 2018, at the NN/g URL below) reports that NN/g first documented banner blindness in 1997 through usability testing and replicated it with eye tracking in 2007, and that a new study with 26 participants found it persisting. In one page example, 148 fixations fell on a page's content area excluding the hero, and only one fixation, about 0.8 percent, was in the right rail, which NN/g describe as 33 times less than the space might warrant.

Qualifications: Burke et al. note that more recent studies at the time found that people do notice ads, dislike them, and that site credibility suffers (Fogg et al. 2001), and their own results show that ads can still slow search through peripheral processing even without being fixated. So "blind" is too absolute. Pernice's article is industry research, not peer reviewed. She says three traits signal an ad: placement (top banner, right rail), ad-like treatment such as animation, and proximity to ads; large mobile inline ads were harder to avoid.

### Implications for LTF
1. Anything that looks like an ad or promotion will be skipped by a learner who is focused on a goal. In LTF, treat upgrade banners, announcements, newsletter prompts and "new lesson" ribbons as skippable, and do not put essential information in them.
2. Do not make crucial content look like an ad: Pernice's examples include useful sections ignored because they looked promotional. Avoid banner-shaped blocks, text in images and right-rail placement for "prerequisites" or "safety note" content.
3. Placement matters: banners far from the other links were missed more than banners close to them (Benway). Put important calls to action in the flow of the main links, not above or beside them.
4. Making a link "pop" does not help a searcher looking for something else, so test with real tasks.
5. In fly mode, assume the learner will ignore anything banner-like around the edges. Put what matters in the reading line of the task, and keep the edges quiet.

Confirmed this session: Crossref record and abstract for DOI 10.1177/154193129804200504 (the SAGE page returned HTTP 403, so no full text); Burke et al. 2005 manuscript for Benway and Lane's characterization and the 11.7 and 94 percent figures; the NN/g article https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/ for the 2018 numbers.

## burke2005highcost
Burke, M., Hornof, A., Nilsen, E., & Gorman, N. (2005). High-cost banner blindness: Ads increase perceived workload, hinder visual search, and are forgotten. *ACM Transactions on Computer-Human Interaction, 12*(4), 423-445.

### Core claims
"Banner blindness" says people ignore ads; yet users complain that ads distract them. The authors resolve the contradiction with two experiments. Banner ads (animated or static) can slow visual search and raise perceived workload even though people rarely look straight at them, and they are barely remembered afterwards, with animated ads recalled no better than static ones and in places worse. In the abstract's words: "Eye tracking data reveal people rarely look directly at banners," and "animated banners are more difficult to remember than static look-alikes".

### Specifics
Experiment 1 (search for short words, two banners on screen) used four banner types: animated commercial, static commercial, cyan with flashing big text, and blank. After timed trials, participants rated workload with the NASA Task Load Index (TLX). Mean search times did not differ significantly across banner types (the numbers ranged from about 4.8 to 5.8 seconds), but flashing-text banners produced the highest rated workload, with a repeated-measures ANOVA F(3, 36) = 6.52, p < .001 (mean 160.71, against 121.44 for animated, 107.83 for static and 110.54 for blank), and were rated more frustrating and mentally demanding. One search-time effect appeared: a target sandwiched between two flashing-text banners took an average of 75 percent (4.3 seconds) longer to find.

Experiment 2 (search through news headlines, with an exact-match and a harder semantic-match precue) used animated commercial, static commercial and gray-rectangle banners, 100 banner designs, and eye tracking with an LC Technologies Eyegaze system. Twenty-four undergraduates took part (in the manuscript). Results from the abstract: both animated and static commercial banners decreased search speed. Eye movements: participants looked at a banner in 11.7 percent of trials regardless of banner type, with gray rectangles (8.8 percent) almost as likely to be fixated as static (13.0) or animated (13.2) banners. Of trials with a direct banner look, 70 percent happened on the first eye movement. In the memory test, of 164 banners correctly remembered, only 10 had received a direct gaze, so participants did not directly look at 93.9 percent of the banners they "remembered". The authors read this as luck given high false-alarm rates, and signal-detection analysis showed static banners somewhat better than chance while animated banners were recognized no better than chance.

The introduction reviews stimulus-driven capture by abrupt onsets (Yantis and Jonides) against goal-driven contingent orienting (Folk et al.).

### Replication and criticism
I read the author manuscript (submitted September 2004) and the Crossref abstract of the journal version; numbers could differ in the final paper. The evidence is lab experiments with student samples, a controlled task and a stylized layout, so ecological validity is limited, a point the authors partly address by moving from a precue display to free mouse movement in Experiment 2. The Experiment 1 search-time null is itself a finding: simple search was not slowed by animation, which the authors tie to participants' incentive not to look at banners. The results are consistent with the earlier Benway paper (see benway1998banner) and with later NN/g observations, but they also qualify "blindness": ads cost time and effort even without direct fixation, plausibly via peripheral processing. The authors also critique earlier studies that found no animation effect (Diaper and Waelend 2000).

### Implications for LTF
1. Peripheral animation has a cost even if learners never look at it. Avoid looping animation, shimmer or flashing text around task content; in fly mode, none.
2. Flashing text is the worst: highest workload, and it slows finding things next to it. Never use blinking text for emphasis. Use static emphasis (weight, color, position) instead.
3. Animation does not buy memory. If something needs to be remembered, such as a V-speed or a checklist step, repeat it as static text in the reading line and test recall, rather than animating it.
4. Do not assume a promotional banner placed beside a lesson is "free". It can slow the learner and raise workload while not being read.
5. In a goal-directed task people avoid banner-like regions, so help placed there will not be seen.

Confirmed this session: Crossref record and abstract for DOI 10.1145/1121112.1121116; full read of the author manuscript at thoughtcrumbs.com (ToCHI04.pdf, marked "submitted, please do not cite") for Experiment 1 and 2 numbers; the journal PDF itself was not read.

## nielsen2006fshaped
Nielsen, J. (2006, April 16). F-shaped pattern for reading web content. Nielsen Norman Group Alertbox. https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/

### Core claims
Nielsen reports that when people read text-heavy web pages, their gaze often follows a rough "F": a horizontal sweep across the top of the content, a second shorter horizontal sweep a little lower, and a vertical scan down the left side. His practical conclusion is that users do not read word by word, so the most important information should come first, and each line should begin with information-carrying words. It is among the most quoted eye-tracking findings in web design.

### Specifics
The article is an industry research report, not a peer-reviewed paper. It states that the eyetracking study involved 232 users who viewed thousands of web pages; it gives no task count, page count or demographics. A later NN/g update says a study run 11 years after the original confirmed the findings.

The three components of the F: (1) a top horizontal bar, usually across the upper part of the content area; (2) a lower bar, reached after moving down a bit, usually covering a shorter span than the first; (3) a stem, a vertical movement down the left side of the content, which can be a slow, systematic scan (a solid stripe on a heat map) or a faster, spottier one. Variants: a third horizontal read gives an E shape, and a single horizontal read gives an inverted L. Examples include a corporate "about us" article, an e-commerce product page (the second bar sits lower because of a product image) and a search results page.

Recommendations on the page: assume users will not read word by word, because thorough reading is rare, especially in initial vendor research; put the most important information in the first two paragraphs, since users will read more of the first than the second; start subheads, paragraphs and bullets with information-carrying words, since users notice the left edge while scanning and read the third word on a line much less often. Caveats on the page: the F is "a rough, general shape", not a uniform behavior; users read less of the second horizontal area than the first; other tasks yield different patterns (for example, direct scanning when looking for prices or numbers).

A follow-up by Kara Pernice, "Text Scanning Patterns: Eyetracking Evidence" (NN/g, 25 August 2019), places the F among four patterns. The F-pattern appears when users fixate on the beginnings of lines and near the top, with no subheadings or bullets; it is called the least effective. The spotted pattern (fixating on specific standout or task-matching words such as links, bold words or digits) is slightly more effective, and the layer-cake pattern (fixating mainly on headings and subheadings) is the most effective scanning method. The commitment pattern (reading nearly all content words) occurs when users are highly motivated and gives the best comprehension but takes longest. The article notes the F-pattern is mirrored in right-to-left languages and uses a heat map aggregating 47 people.

### Replication and criticism
The F is a heat-map aggregate shape, not a single person's path, and its authority rests on the NN/g dataset, whose full method I could not see. Buscher, Cutrell and Morris (2009) describe such "broad patterns" as lacking detailed quantitative analysis and then supply some: they report that the upper-left and left regions of a page attract the earliest and most attention, and that the entire right side above the fold is neglected, which is broadly compatible with the F's left-weighted shape (see buscher2009what). Pernice's 2019 text itself reframes the F as one outcome of poorly structured pages, so it is not a design target.

### Implications for LTF
1. Do not design to the F. Design so the F is not needed: add meaningful subheadings and short bullets so learners can use the layer-cake and spotted patterns, which Pernice rates as more effective.
2. Front-load: start paragraphs, list items and headings with the key term, because the left edge and first words get the attention.
3. Put the single most important instruction in the first lines of a lesson page and in the left-hand reading line, not in a right sidebar.
4. For beginners who must understand, motivated reading (the commitment pattern) may happen on the pages that matter to them. Do not assume skimming everywhere, but design for both skim and read: headings, then short chunks.
5. If LTF is ever localized for right-to-left languages, expect the pattern to mirror.

Confirmed this session: WebFetch of https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/ (date, 232 users, components, recommendations, caveats) and https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/ (2019 patterns, 47-person heat map, RTL); Buscher et al. 2009 full text for the comparison.

## nielsen2010eyetracking
Nielsen, J., & Pernice, K. (2010). *Eyetracking Web Usability*. Berkeley, CA: New Riders.

### Core claims
The book reports a multi-year eye-tracking study of how people look at websites and turns it into design guidance on page layout, navigation, site elements, image selection and advertising, illustrated with gaze plots and heat maps. Its publisher descriptions say it confirms many established web design conventions and reports new user behaviors for the first time. The signature findings include the F-shaped reading pattern, that users focus on bulleted lists, and that promotional content in the right column of a page may get little or no attention (the publisher's example is an "About Us" page heat map in which the rightmost promotional column received no attention). It is craft and industry research at large scale, not peer-reviewed science, and it should be read that way.

### Specifics
Scale: the NN/g and Peachpit pages describe a three-year study with about 1.5 million instances of users looking at websites. The NN/g page does not give a participant count. A reviewer (Cennydd Bowles, a practitioner, early 2010) and a search summary of an academic citation both give 300 participants, with the latter stating ages 18 to 64; I treat the 300 as secondary. The Peachpit product page gives the copyright year as 2010, publication date 4 December 2009 and ISBN-13 978-0-321-49836-6, and notes the book is no longer in print. Open Library lists a 2010 edition from New Riders with that ISBN.

Coverage, from the publisher descriptions: where users look and what they skip, with chapters on layout, navigation menus, site elements, images and advertising. The related articles by Nielsen (2006) and Pernice (2019) that I read give the book's most-cited patterns (see nielsen2006fshaped) and the NN/g banner blindness article by Pernice (see benway1998banner) covers advertising findings. I did not have the book's text and so do not list its individual guidelines.

### Replication and criticism
The study is large, but its documentation is thin by academic standards, and the criticisms I found are about method and scope. Bowles's review praises the size, the well-designed test script and a few useful findings (busy layouts dilute attention from key information; "a link is a promise"), and criticizes: generalizing from a 300-person study is limited, as eye tracking needs site-specific tasks; the heat maps date from late 2005 and lab work seems to have finished by mid-2006, years before publication; only informational sites were studied, with web apps excluded because eye tracking struggled with dynamic elements such as Ajax and drop-downs; tests apparently used Internet Explorer 6 with no browser choice, which may change navigation behavior; the book acknowledges little outside research. He concludes that eye tracking mostly confirms long-standing design principles. That is one practitioner's opinion, though a specific one.

Independent academic work is consistent with parts of the findings but with different emphasis. Buscher et al. (2009) found strong attention to the left and top of pages and neglect of the right side above the fold in a controlled 20-participant study, and found differences by task (see buscher2009what). Pan et al. (2004) found gaze varied with gender and viewing order (see pan2004determinants). So the right-column neglect is supported in more than one source, whereas precise percentages of attention by region should be treated as site-dependent.

### Implications for LTF
1. Use the book for hypotheses, not rules. The consistent, replicated points (left and top attract more; right rail is neglected; bullets and subheads are scanned) are safe defaults. Specific thresholds or percentages from NN/g should be re-tested on LTF's own pages.
2. Put lesson content in the main column and not in a right rail. If LTF has a sidebar of tips, expect it to be skipped, and make sure nothing necessary lives only there.
3. Make links and buttons keep promises. "A link is a promise" suggests labels must say exactly what happens next ("Start the pre-flight lesson", not "Go").
4. The data are from desktop informational sites around 2005. Mobile use, apps, dark mode and a fly-mode second-screen context are outside it. Run small in-house tests with task scripts instead of importing findings wholesale.
5. Because gaze is task-specific, write test tasks that mirror real LTF jobs: find the next lesson, read a V-speed, start a challenge.

Confirmed this session: Peachpit product page (https://www.peachpit.com/title/0321498364: publisher, copyright 2010, ISBN-13, description); NN/g book page (https://nngroup.com/books/eyetracking-web-usability: 1.5 million instances, about us heat map); Open Library edition list for work OL15473984W; Bowles's review via fetch. The book itself was not read.

## pan2004determinants
Pan, B., Hembrooke, H. A., Gay, G. K., Granka, L. A., Feusner, M. K., & Newman, J. K. (2004). The determinants of web page viewing behavior: An eye-tracking study. In *Proceedings of the Eye Tracking Research & Applications Symposium (ETRA 2004)* (pp. 147-154). ACM.

### Core claims
Early web eye-tracking studies often reported a single "how people view pages" pattern. Pan and colleagues asked what actually determines gaze on a web page: the individual viewer, the kind of site, the order in which pages are seen, or the task. Their answer, from the abstract as summarized by Penn State's research portal, is that gender, viewing order and the interaction between page order and site type affected eye movements, while task instructions did not have a significant effect. Their scanpath analysis found that more complex page designs produced more variation in how different subjects scanned the same page.

### Specifics
Sample and stimuli: 30 subjects viewed 22 web pages from 11 popular websites (abstract, as reported in a web search). The study was a conference paper at ETRA 2004 in San Antonio, March 22 to 24, 2004. Buscher, Cutrell and Morris (2009) give extra detail about the design: the study looked at the dependency of scanpaths (repetitive sequences of fixations and saccades) on viewer gender, type of site (business, news, search, shopping), viewing order of pages and task. They found significant differences in all variables except task.

I could not retrieve the full text, so I do not report effect sizes, the eye tracker, how fixations were defined, or the details of the scanpath metric. The summary above relies on the abstract text from the Penn State portal and on Buscher et al.'s description.

### Replication and criticism
Task is the main point of controversy. Buscher et al. point out that Pan et al. "used a weak task differentiation: remembering what was on a Web page vs. no specific task at all" (their related work section), and that in later work on web search, using stronger tasks (informational versus navigational search), Pan's group again saw little difference in gaze behavior. In contrast, Buscher et al.'s own study with 20 participants and clearer tasks (information foraging versus page recognition) found gaze patterns that differed by task, with the center-left region most important for foraging and the top-left for recognition, so Pan's null on task should not be generalized. It also sits uneasily with the broader literature, from Yarbus onward, that gaze depends on task (see yarbus1967eye), though that literature mostly concerns pictures, not web pages.

Greene et al. (2012) add that task decoding from gaze can be weak (see greene2012reconsidering). I treat the Pan result as evidence that task effects on page-level gaze patterns can be small and depend on how different the tasks really are, not as evidence that task is irrelevant.

The paper has been well cited (Penn State's portal lists 259 Scopus citations), and its design choice of using real popular sites raises ecological validity but reduces control: page content, layout and familiarity vary together. Heat maps of 2004 pages are also dated.

### Implications for LTF
1. Do not assume that one gaze pattern describes all learners. Gender, order effects and page type shifted viewing in this study, so a single "average heat map" hides variation. Where a layout matters, test with a mix of learners.
2. Page order and novelty matter: the first page viewed is not like the fifth. For an onboarding flow, evaluate the first screens separately from later ones.
3. Complex pages produce more variable scanning, so more learners will find different things. If the goal is a consistent first look (for example, to a safety note), reduce visual complexity.
4. Don't over-read a null on task. If LTF tests whether a task framing changes behavior, use tasks that really differ (find a number versus read for understanding), as Buscher et al.'s critique implies.
5. Treat a single eye-tracking sample of 30 as hypothesis-generating. LTF's own tests will be smaller still.

Confirmed this session: Crossref record for DOI 10.1145/968363.968391 (six authors, ETRA 2004, pp. 147-154); the Penn State Pure page (pure.psu.edu) for the abstract summary and the Scopus count; Buscher et al. 2009 full text for their description of the study. Full text of Pan et al. not read.

## buscher2009what
Buscher, G., Cutrell, E., & Morris, M. R. (2009). What do you see when you're surfing? Using eye tracking to predict salient regions of web pages. In *Proceedings of CHI '09* (pp. 21-30). ACM.

### Core claims
The paper measures where on web pages people look, in the first second and over a whole task, for two kinds of task, and builds a simple model that predicts which page elements will receive attention from features of the page's code and rendering. Its general finding is that the left and top of the page attract the earliest and most attention, and the right side above the fold is largely neglected. It also introduces "fixation impact" for mapping gaze to page elements.

### Specifics
I read the full paper. Twenty participants (10 male, aged 18 to 69, mean 33.0) viewed 361 distinct web pages (2,126 page views) while doing information-foraging tasks (eight tasks across four topics plus two free browsing tasks, each about five minutes) and a page-recognition task in which they rated familiarity with pages they had seen and 12 others. Pages were shown in Internet Explorer 7; the area above the fold was 996 by 716 pixels. Eye tracking used a Tobii x50 at 50 Hz with 0.5 degree accuracy. A fixation was detected after steady gaze within a 50 pixel radius for at least 100 ms.

Fixation impact: each fixation is treated as a 2 degree circle (about 66 pixels there, matching the fovea). A Gaussian with volume 1 is laid over that circle and the fraction falling on each page element is multiplied by the fixation duration, so an element that fully covers the circle gets the whole duration. Three measures: median fixation impact, viewing frequency (percent of viewers who looked at an element) and median time to first fixation. Regions were a 3 by 3 grid above the fold plus everything below.

Findings: "the entire right side above the fold is neglected" for both task types. Participants took about 3 seconds to fixate the three right-side regions in foraging tasks and about 2 seconds in recognition tasks, and the median fixation impact there was 0. The four upper-left regions generally attracted the most attention. In the first second of foraging, center-left drew the most and earliest attention; in recognition the top-left did. Below the fold, fixation impact over the full task was large for foraging, which they attribute to in-depth reading.

Prediction: features were 44 binary HTML element names, three abstract features (DOM tree depth, "logo" in image name, link to the site home page) and 12 rendering features (size, aspect ratio, ten position flags). Element size ranked top for information gain. Linear regression on the top 10 features gave a correlation of 0.50 (10-fold cross validation); a pruned decision tree classifying whether an element got any fixation impact had Kappa 0.59, precision 75 percent and recall 53 percent; the combination of the two gave a correlation of 0.69.

### Replication and criticism
This is a conference paper with a modest sample, one browser and screen, and 2009-era pages. Its authors note that the prediction models were purposely simple and fail on pages with unusual layouts, giving Wikipedia, where images often sit at the far right, as an example. It quantifies what NN/g only illustrated: the left-and-top bias and right-side neglect, with timing data and visible task dependence. It criticizes earlier work (for example Pan et al., 2004) for a weak task manipulation and for lacking quantitative analysis (see pan2004determinants).

Methodologically, the paper shows how arbitrary definitions can be: its fixation is 50 pixels and 100 ms, while Djamasbi et al. (2010) define a fixation as a gaze longer than 300 ms (see djamasbi2010generation). Comparisons across eye-tracking studies need those definitions aligned.

### Implications for LTF
1. Place the lesson's primary content in the upper-left to center-left of the main page. Assume anything above the fold on the far right will take seconds to be fixated and may be ignored.
2. Size matters most: big elements are looked at. Make the key diagram or instrument widget the largest element, rather than relying on color alone.
3. Recognition differs from finding: for a returning learner, the top-left carries identity, so keep titles and navigation consistent there.
4. Test above-the-fold content in the first seconds. Because the first second is spent on expected locations, put the lesson title and the first instruction where they are expected, not in a novel position.
5. If LTF measures attention, weight by fixation duration, map to named elements and fix the fixation definition in the protocol.

Confirmed this session: Crossref record for DOI 10.1145/1518701.1518705; full text read from a PDF copy (dfki.de), including methods, results and the prediction numbers.

## djamasbi2010generation
Djamasbi, S., Siegel, M., & Tullis, T. (2010). Generation Y, web design, and eye tracking. *International Journal of Human-Computer Studies, 68*(5), 307-323.

### Core claims
Using a survey and an eye-tracking study, the authors examined what attracts Generation Y (here, ages 18 to 31) on retail home pages. Their abstract states that pages with "a main large image, images of celebrities, little text, and a search feature" may be preferred. The eye-tracking half supplies evidence about attention: large images and faces were fixated early and heavily, text blocks were not, and the highest-rated pages produced focused hot spots while the lowest-rated pages produced scattered fixation. The paper frames this with visual hierarchy, in which size and position steer where users look first.

### Specifics
I read the journal version. Study I was an online survey of 98 people (55 male, 43 female) who rated the visual appeal of 50 home pages that had been scored on four characteristics (large main picture, little text, search bar, celebrity images); pages with higher scores were rated as more appealing.

Study II used the three most liked and three least liked pages from Study I. Nineteen employees of a Fortune 100 company, aged 18 to 31, viewed each page for at least 10 seconds on a Tobii 1750 eye tracker and gave an appeal rating; they could scroll and move on with the mouse. Fixation was defined as a gaze longer than 300 ms. Analyses: heat maps of cumulative fixations, areas of interest drawn on them, and time to first fixation in the first five seconds, giving an average viewing order.

Findings: the highest-rated pages had focused, bright hot spots near the center of the page; fixation on the lowest-rated pages was much more scattered, suggesting that nothing immediately drew attention. Fixations on the best pages were on the main large picture and celebrity images. When many images were present, only the first few were fixated. Participants fixated faces within the first two fixations when a face was present. First fixations were mostly at the center and top of the area above the fold, typically on focal points when present; logos and top navigation were viewed within the first four fixations. Blocks of text were not fixated in the first few fixations on most pages. When a large main image was absent, long link lists in the navigation attracted early fixations. The area below the fold received little fixation over the entire viewing time. The authors suggest the early logo fixation is orientation to expected structure.

### Replication and criticism
Evidence quality is modest. The eye-tracking sample is 19 employees of one company in a narrow age band, viewing six pages chosen for being at the extremes of appeal, with instructions to rate appeal and not content. The authors say the large-image relationship may apply only to younger users. Image size, fame and layout are confounded across brands. Results about early fixation at the top and center and neglect below the fold are consistent with the larger Buscher et al. (2009) data (see buscher2009what), though that study used a different fixation definition (at least 100 ms in a 50 pixel radius) than the 300 ms used here, so numbers cannot be compared directly.

A 2011 paper by the same group ("Visual hierarchy and viewing behavior", LNCS 6761), seen only as a Springer listing, reports more scattered viewing on pages with complex visual hierarchies; I did not read it.

### Implications for LTF
1. A clear focal point organizes the first seconds. Give each lesson page one dominant element (a large diagram or instrument) so the first fixations land on it and viewing is focused; pages with no dominant element produced scattered fixation.
2. Faces draw early, heavy attention. If LTF uses people (an instructor, a pilot photo), expect them to compete with the content; place them where they point toward the content or leave them out of instrument pages.
3. The top-left is a reliable orienting zone (logo, navigation, title). Keep consistent, calm identity there.
4. Little text above the fold helps the first impression, but LTF's learners come to read; use a large image and a short headline above the fold, then structured text below, and do not hide critical instructions below the fold on first view.
5. The study measured appeal, not learning. Do not infer that "prettier first impression" produces better comprehension; test comprehension separately.

Confirmed this session: Crossref record for DOI 10.1016/j.ijhcs.2009.12.006; full text of the journal version PDF (WPI author page); the 2011 follow-up as a Springer listing via search only.

## wickens2003attentional
Wickens, C. D., Goh, J., Helleberg, J., Horrey, W. J., & Talleur, D. A. (2003). Attentional models of multitask pilot performance using advanced display technology. *Human Factors, 45*(3), 360-380.

### Core claims
Pilots divide their attention among flying, navigation, communication and monitoring for traffic, and the way information is presented (spoken versus on a display) changes how much scanning and workload this takes. The paper reports simulator experiments and then shows that the pattern of pilots' visual scanning can be predicted by an expected-value model of selective attention. The model is the root of what is now called SEEV (salience, effort, expectancy, value). This is the lane's aviation human-factors source.

### Specifics
From the abstract (Crossref): in Part 1, 12 instrument-rated pilots flew a high-fidelity simulation in which air traffic control information about traffic and flight parameters, delivered by voice, was compared with advanced display presentations of equivalent information (a cockpit display of traffic information and a data link display). Redundant combinations were also tested, while pilots flew, monitored for outside traffic and read back messages. The data suggested a modest cost for visual presentation over auditory presentation, a cost mediated by head-down visual scanning, and no benefit for redundant presentation. The effects were modeled by multiple-resource and preemption models of divided attention. In Part 2, visual scanning in all conditions was fit by an expected value model of selective attention derived from a previous experiment, accounting for 94 percent of the variance in the scanning data and 90 percent in a second validation experiment.

The SEEV formulation, as given in a later review of driver attention models (Kotseruba and Tsotsos, 2021, arXiv 2104.05677), which I read: the probability of looking at an area of interest depends on salience (S, the physical properties of events), effort (EF, distance from the previous fixation or demands of concurrent tasks), expectancy (EX, tied to the event rate or bandwidth of information in the area) and value (V, the reward for processing or the cost of missing information), each with a coefficient. A prescriptive version considers only bandwidth, relevance and task priority. Those authors report that expectancy and value were the dominant factors in later driving experiments and that predicted dwell times correlated highly with observed ones (r squared above 0.9 in one set).

### Replication and criticism
Evidence: simulator experiments with 12 pilots, plus a model fitted to the scan data. I could not tell from the abstract what unit the 94 and 90 percent variances refer to. Kotseruba and Tsotsos list limitations: SEEV does not model a visual-processing pipeline or the dynamic switching of gaze, because it computes cumulative gaze per area; in the original work the parameters were set a priori from assumptions about priority and bandwidth, which proved hard to establish in less structured driving settings; and in one lane-change experiment it failed to reproduce a left-right asymmetry. An extension, Adaptive Information Expectancy, addresses dynamics. A web search summary said a later study of experienced drivers at intersections found a poor fit; I did not verify it. The finding of "no benefit for redundant presentation" is specific to the tested tasks and displays and should not be generalized to all redundancy.

### Implications for LTF
1. People look where information changes fast and matters most. Expectancy (how often an instrument changes) and value (the task priority) predict scanning, so LTF's instrument-scan teaching should say which instruments change quickly and which matter for the current task, not merely list instruments.
2. Effort counts. Information that is far away or behind another task is looked at less. In fly mode, keep the elements the learner needs together and near the simulator's reading line, and avoid separating related readouts.
3. Salience is a bottom-up term in the model; the top-down terms dominate. Do not rely on color or motion alone to get the learner to look at a value; teach the task reason and place the value where the learner expects it.
4. Head-down time has a cost. A second-screen coach that pulls the learner's eyes from the sim should be glanceable and brief; voice prompts may reduce head-down scanning, though the modality finding is specific to the paper's tasks.
5. As a design check for widgets, list the areas of interest, estimate each one's rate of change and task value, and put high-expectancy, high-value elements where effort to reach them is lowest.

No aircraft-specific numbers are asserted here.

Confirmed this session: Crossref record and abstract for DOI 10.1518/hfes.45.3.360.27250; the SEEV formulation and limitations from Kotseruba and Tsotsos (arXiv 2104.05677, downloaded and read); a web search summary for the driving-study caveat. The paper's full text was not read.

## holmqvist2011eye
Holmqvist, K., Nyström, M., Andersson, R., Dewhurst, R., Jarodzka, H., & van de Weijer, J. (2011). *Eye Tracking: A Comprehensive Guide to Methods and Measures*. Oxford: Oxford University Press.

### Core claims
This is a methods textbook, not a study. Its argument is that eye-tracking results depend on choices that are often left unstated, such as hardware, calibration, how raw samples are turned into fixations and saccades, and how measures are defined, and that researchers from different fields often miss useful methods from one another. The Lund University research portal record says the book is aimed at researchers who actively use an eye tracker and covers the technology, signal processing, algorithms, experimental design, stimulus programming, participant instructions and data analysis, stressing practical skills such as camera setup and calibration because poor recordings limit what a study can show. The authors describe it as "the first comprehensive textbook on methodology for new users of eye tracking" (record text).

### Specifics
Structure (from a catalog record and the portal): Part I presents the technology and skills needed to perform high-quality research with eye trackers; Part II covers the predominant methods applied to the data the trackers record; Part III outlines the measures that can be calculated from the events and representations in Part II. A table-of-contents excerpt lists a chapter on estimating oculomotor events from raw data, with sections on principles and algorithms for event detection and on dispersion-based, velocity and acceleration algorithms. The authors built a taxonomy of eye-movement methods and measures from a review of method sections in journal papers, book chapters, theses and conference proceedings, organized around operational definitions because the same measure often goes by different names. The book is meant to support people evaluating a tracker, planning a study, recording and processing data, or reading eye-movement research.

I have not read the book's chapters, so I do not list its specific thresholds or recommendations. What I can give concretely are methodological variations visible in the other studies of this lane, which show why the book's concerns matter:
- Fixation definition: Buscher et al. (2009) counted a fixation after gaze stayed within a 50 pixel radius for at least 100 ms; Djamasbi et al. (2010) defined a fixation as a gaze longer than 300 ms. Numbers of fixations, durations and heat maps change with such choices.
- Accuracy and sampling: Buscher et al. used a 50 Hz tracker with 0.5 degree accuracy; Greene et al. (2012) used 1000 Hz and required calibration error of 1 degree or less, recalibrating every eight images.
- Scoring: Burke et al. (2005) encoded fixations by watching a video of the gaze overlay, counting each item once even with several saccades within it.

### Replication and criticism
As a textbook it is not subject to replication, and I found no critique of it. A caution relevant to its authors: a 2022 paper by Holmqvist and colleagues on a minimal reporting guideline (Behavior Research Methods) appeared on PubMed Central marked as retracted, with a retraction notice in 2023; I read only the flagged page and did not use its content. Use the book with that in mind, and for any specific reporting guideline check the current literature.

Broader limits of the method that come from the studies in this lane: gaze shows where the eye points, not what is processed. Burke et al. found that most "remembered" banners had not been directly fixated, and Rensink et al. and Simons and Chabris show that looking does not guarantee seeing. Greene et al. show that task cannot reliably be read from summary gaze statistics. Heat maps aggregate across people and tasks and hide the variation Pan et al. reported.

### Implications for LTF
1. Write down the method before trusting any gaze result. If LTF ever runs an eye-tracking or webcam study, report the tracker, sampling rate, accuracy, calibration procedure, fixation definition and task, so that numbers can be compared to other work.
2. Prefer cheap, direct measures first: task success, time on step, errors, and think-aloud with five or so learners. Eye tracking is expensive and most of its answers are about where people look, not whether they understood.
3. When reading vendor or industry heat maps (including NN/g's), ask which fixation definition, which tasks, which pages and which participants produced them.
4. Do not use gaze as a proxy for comprehension. The lane's studies show fixation does not equal attention or memory.
5. If a beginner-friendly "where to look" overlay is built for instrument scanning, label it as a teaching device and not as measured gaze of experts, unless expert data are collected with a documented method.

Confirmed this session: Open Library record OL16360873W (Oxford University Press, 2011, ISBN 9780199697083); Lund University research portal record (portal.research.lu.se) for the description and ISBN; search results for the three-part structure and chapter on event detection; the PMC page flagging the 2022 paper as retracted. The book itself was not read.
