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
