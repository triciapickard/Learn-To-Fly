# Lane 12: Information visualization. Research notes

## cleveland1984graphical

Cleveland, W. S., & McGill, R. (1984). Graphical perception: Theory, experimentation, and application to the development of graphical methods. Journal of the American Statistical Association, 79(387), 531-554.

### Core claims

Cleveland and McGill replace taste with a theory of how people decode quantities from graphs. They call the visual decoding of information encoded on a graph "graphical perception". The approach has two parts: a list of elementary perceptual tasks that viewers perform when extracting quantitative information, and an ordering of those tasks by how accurately people perform them. The design rule that follows is to build graphs so the viewer needs tasks high in the ordering (judging position along a common scale) rather than tasks low in it (area, volume, shade). Their experiments supported the elements of the theory but also showed that the task list needed to grow. The abstract ends bluntly: some popular graphs need radical surgery, and offer dot charts, grouped dot charts and framed-rectangle charts as replacements.

### Specifics

The ordering. A course summary (Cornell INFO 3312 slides, a secondary account) gives it as: position along a common scale; position along non-aligned scales; length, direction and angle; area; volume and curvature; shading and color saturation. I did not read the 1984 full text, so this is secondary.

The experiments. The authors' own 1986 follow-up (International Journal of Man-Machine Studies 25, 491-500, read in full this session) describes the 1984 experiments. Experiment 1 (angle versus position): ten sets of five numbers summing to 100 were each drawn as a bar chart and a pie chart, and subjects judged what percentage each of the other four values was of the largest. Experiment 2 (length versus position) used divided bar charts; the same percentage-of-larger judgment was made under three position conditions and two length conditions.

The 1986 experiment used 127 subjects (24 high school students, 60 college students, 43 technically trained professionals), each making 210 judgments across seven stimulus types. Result as stated in its abstract: two types of position judgment were most accurate, length second, angle and slope third, area last, and greater distance between judged objects reduced accuracy. The three subject groups performed nearly alike.

Design consequence: a pie forces angle judgments, a bar chart allows position judgments, a dot chart puts every value on one common scale.

### Replication and criticism

Heer and Bostock (2010) re-ran the position-length experiment on Mechanical Turk with 50 subjects per chart. The rough shape and ranking of the position and length types were preserved. Area proved worse than angle, and both worse than position, as predicted, but angle was not worse than length; the original position-angle experiment used a different task format, so the two were never directly comparable.

Later work qualifies the ranking. McColeman, Yang, Brady and Franconeri ("Rethinking the Ranks of Visual Channels", a 2021 preprint, seen via search summary) argue that a two-value ratio judgment is a narrow baseline because real charts show many values; their experiments with 2, 4 and 8 marks did not recover the classic ranking and gave rankings that varied with mark count. Skau and Kosara (EuroVis 2016, Computer Graphics Forum 35(3)) report, per the abstract page, that angle was the weakest cue in pie and donut charts and that a donut read as accurately as a pie, which complicates the idea that pies fail because of angle.

The evidence is laboratory experiment on one task (relative magnitude of two values). It is strong for that task and a weaker basis for a universal law of chart quality.

### Implications for LTF

LTF will draw airspeed against limits, altitude over time, score histories and challenge error distributions. Default to position along a common scale (dot plots, aligned bars, lines on a shared axis) wherever the learner must read a value or compare two precisely. Keep angle and area encodings for rough proportion or where the metaphor is the point, such as a round dial mimicking a cockpit instrument.

A fly-mode readout glanced at beside the sim should use a single marker on a labeled scale, not a shaded cell. A progress dashboard should use an aligned row of bars on a shared baseline rather than a ring per lesson. Never rely on shade alone for a quantitative comparison, in either theme.

Because the ranking concerns two-value ratios, test real multi-mark charts with learners rather than deferring to it.

Confirmed this session: Crossref record for DOI 10.1080/01621459.1984.10478080 (vol. 79, issue 387, pages 531-554); abstract wording from WebSearch result snippets of the paper's abstract page; Cleveland and McGill 1986 full text (vis.arc.vt.edu/~npolys/projects/safas/science.pdf); Heer and Bostock 2010 PDF (homes.cs.washington.edu/~jheer/files/2010-MTurk-CHI.pdf); WebSearch summaries for the two critiques.

## heer2010crowdsourcing

Heer, J., & Bostock, M. (2010). Crowdsourcing graphical perception: Using Mechanical Turk to assess visualization design. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '10), 203-212. ACM.

### Core claims

The paper asks whether Amazon Mechanical Turk can serve as a platform for graphical perception experiments, and answers yes with caveats. The authors replicate two earlier laboratory studies (Cleveland and McGill's proportion judgments, and Stone and Bartram's gridline transparency study), find that crowdsourced results match, and then use the platform to run new experiments on rectangular area judgments and on chart size and gridline spacing. They also report cost and performance data and distill advice for running crowdsourced studies. It also gave designers concrete numbers for gridline strength, chart height and gridline spacing.

### Specifics

Experiment 1A (replication of Cleveland and McGill). Seven judgment types: three position judgments on a common scale, two length judgments, one angle (pie) and one circular area (bubble). Ten charts at 380 by 380 pixels, 70 trials, 50 subjects per chart, $0.05 per judgment. A first question (which of two marked values is smaller) verified attention; only 14 of 3,481 answers were wrong (0.4 percent). A short qualification test ensured understanding; a pilot without it left over 10 percent of responses unusable. Accuracy used Cleveland and McGill's log absolute error. Result: the shape and ranking of the original position and length types were preserved. Theory predicts area is worse than angle and both worse than position, and the data agreed; theory also predicts angle is worse than length, which the data did not show.

Experiment 1B (rectangular area). Subjects judged what percentage the smaller of two rectangles was of the larger, with rectangles or a 600 by 400 pixel treemap of 24 values. Design: 2 displays by 9 aspect-ratio combinations, 108 trials, 24 assignments each. Accuracy matched circular area. Aspect ratio mattered (p below 0.05), and, somewhat surprisingly, comparisons of rectangles of aspect ratio 1 were worst. The authors suggest viewers use side lengths as a proxy for area, so squares maximize error. Treemap context did not hurt accuracy.

Experiment 2 (gridline alpha). Subjects adjusted gridline transparency on scatter plots over five background intensities and four data densities. Density had a significant effect (F(3,2413)=3.49, p=0.015); background intensity did not. The results corroborated Stone and Bartram's recommendation of alpha 0.2 as a "safe" default. Display configuration mattered a little: greater color depth correlated with lighter choices, and older Mac OS X (gamma 1.8) with darker ones.

Experiment 3 (chart size and gridlines). Subjects compared two marked bars in charts of height 40, 80, 160 or 320 pixels with gridline spacings of 10, 20, 50 or 100 units on a 0 to 100 scale. Charts 40 pixels tall produced significantly more error (p below 0.001); heights from 80 up did not differ. Accuracy plateaued, with little benefit beyond 80 pixels for a 0 to 100 scale, roughly where pixel and data resolution match. Gridlines improved accuracy, with no significant difference between 10 and 20 or between 50 and 100. Error rose steeply at 40 pixels with spacing of 10 units; the authors suggest gridlines be at least 8 pixels apart.

### Replication and criticism

The paper is itself a replication study, and it received a CHI honorable mention award (per its Interactive Data Lab listing). Its limits are stated by the authors: no control over display, viewing distance or lighting, so only perceptual tasks insensitive to environment suit crowdsourcing. The chart-height results come from one scale (0 to 100) and 2010-era screens, so copy the principle (accuracy plateaus once pixel resolution matches data resolution), not the pixel values. Later work questions two-value ratio tasks as a basis for ranking (see the Cleveland entry).

### Implications for LTF

Gridlines and reference lines in LTF charts should be light and sparse with a default alpha near 0.2, checked on both themes (the study used light to mid-gray backgrounds only, so dark mode needs its own check). Give charts enough height to reach pixel-data resolution, but do not inflate them: an inline lesson chart that is too short loses accuracy, one that is much taller adds nothing. Keep gridlines at least 8 pixels apart on phones. For treemap-like or area layouts (for example a time-in-phase breakdown) do not assume squares are best, and prefer lengths when precision matters. If LTF tests widgets remotely, give each task an attention check and a worked example first.

Confirmed this session: Crossref record DOI 10.1145/1753326.1753357 (pages 203-212); full text read from homes.cs.washington.edu/~jheer/files/2010-MTurk-CHI.pdf; honorable mention from the UW Interactive Data Lab listing via WebSearch.

## bateman2010useful

Bateman, S., Mandryk, R. L., Gutwin, C., Genest, A., McDine, D., & Brooks, C. (2010). Useful junk? The effects of visual embellishment on comprehension and memorability of charts. Proceedings of CHI 2010, 2573-2582. ACM.

### Core claims

Tufte and Cleveland-style guidance says non-data decoration ("chart junk") makes charts harder to interpret. Bateman and colleagues tested that with embellished charts by the designer Nigel Holmes against plain versions of the same charts. They found that accuracy in describing the embellished charts was no worse than for plain ones, and that recall after a gap of two to three weeks was significantly better for the embellished ones. The authors are cautious: they do not advocate embellishment as a general principle, because strong images can bias interpretation, but they say the results question some premises of the minimalist approach and that embellishment has real effects that research should understand.

### Specifics

Stimuli. Fourteen charts from Holmes's book on creating charts and diagrams, each with a plain counterpart carrying exactly the same data, chart type, titles, axis labels and values. Plain versions kept axis ticks and chart style but dropped axis lines, were framed in black and used grayscale; they were not engineered to maximize data-ink.

Participants and design. Twenty university students (9 male, 11 female, aged 18 to 40). Each saw only one version of each chart, alternating versions, with presentation order counterbalanced across two groups of ten and the first two slides as training. Charts were shown full screen with an eye tracker running; participants were not told recall would follow.

Procedure. Part 1: participants described each chart, answering four verbal questions (subject, categories and values, trend, and whether the author was trying to convey a value message), with graduated prompts. Part 2: ten participants were tested for recall after a five-minute distraction game, ten after 12 to 22 days (scheduled for two to three weeks). Answers were scored for quality and for prompting needed.

Results. Description showed no differences for subject, categories or trend, but value-message description was better for Holmes charts (t(19)=3.37, p=.003). Completion time did not differ. Long-term recall differed significantly for subject (p=.015), categories (p near .000), trend (p=.042) and value message (p=.020), and plain charts needed more prompting. Participants preferred the Holmes charts on enjoyment, attractiveness and memorability. Eye tracking showed 40 percent of on-screen time on Holmes charts went to embellishment or dual-coded regions, yet description time was not longer; on Holmes charts 67 percent of time was on data or data plus embellishment versus 78 percent on plain charts.

The authors suggest the images were tightly tied to topic and trend (a monster's rising teeth tracked the data) and that emotion may anchor memory.

### Replication and criticism

The evidence is a small within-and-between-subjects lab experiment (20 people, 10 per recall condition) using one-tailed t-tests, with Holmes charts as the only embellishment style. Borgo and colleagues (IEEE TVCG 2012, abstract and repository summaries only) used a dual-task design and found embellishments helped memory, slowed visual search and had a mixed effect on concept comprehension, so the benefit is real but not free. A later study of enhanced graphics, seen only in a search summary, reports that data-relevant enhancements helped recall of titles and themes but not specific values, and unrelated ones were remembered worse than plain charts. A 2023 replication preprint by Syeda, South, Raynor and Panavas exists (Crossref record; I could not read its results). Stephen Few wrote a critique (not read). The authors note that monitoring tasks put interpretability first, while static charts may value memorability.

### Implications for LTF

This paper licenses restraint rather than ornament. LTF should not decorate charts with arbitrary clip art, but a small number of meaningful, topic-relevant illustrations, such as a stylized Cessna silhouette integral to a chart of climb performance, may aid memory of a lesson's take-away. Keep exact values in plain labeled marks.

Split by context. In fly mode and in any instrument widget, where the learner reads values under workload next to the sim, use plain, high data-ink displays; the authors themselves note monitoring tasks differ. In lesson summary graphics and the end-of-lesson recap that a learner should remember weeks later, a restrained pictorial element tied to the data is defensible. Test it: because the effect rests on 20 participants, run a short comprehension and delayed-recall check on LTF's own lessons before relying on embellishment as a design principle.

Confirmed this session: Crossref DOI 10.1145/1753326.1753716 (pages 2573-2582); full text read from vis.csail.mit.edu/classes/6.859/readings/pdfs/Bateman-UsefulJunk.pdf; Borgo et al. abstract via WebSearch summaries (ieeevis.org, Hertfordshire repository); Syeda et al. title and authors via Crossref (10.31219/osf.io/dferj).

## borkin2013what

Borkin, M. A., Vo, A. A., Bylinskii, Z., Isola, P., Sunkavalli, S., Oliva, A., & Pfister, H. (2013). What makes a visualization memorable? IEEE Transactions on Visualization and Computer Graphics, 19(12), 2306-2315.

### Core claims

The paper treats memorability as a measurable property of a visualization and asks what makes one stick. The authors ran, in their words, the largest visualization study to date: 2,070 single-panel visualizations from news media, government reports, scientific journals and infographic sources, each labeled by chart type and rated for data-ink ratio and visual density. Using Mechanical Turk they collected memorability scores for hundreds of these and found that observers are consistent about which visualizations are memorable and which are forgettable. Color and the inclusion of a human-recognizable object enhance memorability, while common graph types (bar, line, pie, scatter) are less memorable than unusual ones such as grids and matrices, trees and networks, and diagrams. The authors suggest memorability may be a general measure of information utility, but the lead author cautions that a memorable visualization is not necessarily a good one.

### Specifics

Design (as described by the authors' summaries and by a replication that "closely follows" the method). Participants play an online memory game: a stream of images is shown for one second each, and the participant presses a key on seeing an image they have seen before. Memorability of a target image is the hit rate (repeats correctly detected) and false alarm rate (new images wrongly flagged), often combined as d' = Z(HR) minus Z(FAR). The Harvard press summary describes more than 5,000 collected graphics categorized by color, density and theme; the full-text methods were not retrievable, so participant counts are unconfirmed. A 2018 scientific-visualization replication (Li and Chen) reports Borkin's infographic means as hit rate 0.55 and false-alarm rate 0.13.

Findings reported in public summaries and abstracts:
- Human-recognizable elements (photos, people, cartoons, logos) were, in Pfister's words in the Harvard press piece, "the most dominant thing that affects the memorability".
- Visually dense visualizations and those using many colors were more memorable. This ran against the hypothesis, drawn from the minimalist tradition, that low density and a high data-ink ratio would help.
- Unusual chart types (trees, networks, grid matrices, diagrams) beat familiar bars, lines, pies and scatters.
- Oliva noted that a graph can be simple or complex and both can be memorable.

### Replication and criticism

The 2018 scientific-visualization study by Li and Chen validated the game on 50 of Borkin's images with a rank correlation of 0.69 against the original scores, then found lower hit rates (about 48 percent) and lower false alarms (about 7 percent) for scientific visualizations. For those images, objective density and clutter measures correlated negatively with memorability, and faces again scored high ("face is special"). So the "dense and colorful is memorable" result is partly about the infographic sample from government documents and newspapers with fairly consistent layouts, and it did not transfer cleanly. Memorability is also a one-second recognition measure, which is not comprehension, accuracy or learning. The authors explicitly decline to issue sweeping guidelines and call the chart junk debate ongoing. Memory for a chart's gist after a glance differs from accurate reading of values.

Evidence class: large crowdsourced observational and correlational study with an experimental memory paradigm; strong on consistency across observers, weak on causation (features were annotated, not manipulated).

### Implications for LTF

LTF has two kinds of visual: those a learner needs to remember (the pattern of a traffic pattern, the shape of a descent profile) and those a learner needs to read exactly (an airspeed readout). Borkin supports giving the first kind a distinctive, specific, human-scaled form: a labeled picture of the aircraft or a pilot's viewpoint, not a generic bar chart. A lesson recap card could use a distinctive diagram rather than a stock chart.

It does not support decorating the second kind. In fly mode, accuracy and glanceability come first, and one-second recognition memory says nothing about whether a value was read correctly. Do not cite the paper to justify density or color for their own sake in dashboards. Because "common graphs are less memorable", avoid the same plain bar chart template on every lesson page; vary form when the data justify it, and keep one consistent encoding for the same quantity across the app so learners do not have to relearn a chart.

Confirmed this session: Crossref DOI 10.1109/tvcg.2013.234 (TVCG 19(12), 2306-2315); abstract-level summary at vcg.seas.harvard.edu/publications/20130101-what-makes-a-visualization-memorable; Harvard SEAS press item (seas.harvard.edu/news/2013/10/what-makes-data-visualization-memorable); Li and Chen replication text (arxiv.org/pdf/1808.00607). The original full text could not be fetched.

## tufte1983visual

Tufte, E. R. (1983). The visual display of quantitative information. Cheshire, CT: Graphics Press. (Second edition 2001; the second-edition text was read this session.)

### Core claims

Tufte's book is a craft treatise on statistical graphics, with theory and about 250 illustrations of strong and weak examples (publisher description). Its argument is that graphical excellence is "the well-designed presentation of interesting data", a matter of substance, statistics and design, and that excellence "consists of complex ideas communicated with clarity, precision, and efficiency". He adds that excellence gives the viewer the greatest number of ideas in the shortest time with the least ink in the smallest space. From this he derives a theory: graphics should tell the truth about the data (graphical integrity), and ink that does not carry data should be removed (data-ink). It supplies the terms lie factor, data-ink ratio, chartjunk and small multiples.

### Specifics

Contents (second edition): Part I Graphical Practice (excellence, integrity, sources of integrity); Part II Theory of Data Graphics (data-ink, chartjunk, data-ink maximization, multifunctioning elements, data density and small multiples, aesthetics).

Graphical integrity. Two principles are given: the physical representation of numbers on the graphic "should be directly proportional to the numerical quantities represented", and labeling should be clear, detailed and thorough. The measure of violation is the Lie Factor, the size of the effect shown in the graphic divided by the size of the effect in the data. A value of one suggests reasonable accuracy; values above 1.05 or below 0.95 indicate substantial distortion. In practice, Tufte says, almost all distortions overstate, with factors of two to five not uncommon. His worked example, a fuel economy standards graphic, yields a Lie Factor of 14.8. He notes that tables usually outperform graphics for data sets of 20 numbers or less.

Data-ink. Data-ink is the non-erasable, non-redundant ink that changes as the data change. The data-ink ratio is data-ink divided by total ink, equal to one minus the proportion that can be erased without loss of data-information. The five principles in his conclusion: above all else show the data; maximize the data-ink ratio; erase non-data-ink; erase redundant data-ink; revise and edit. In the body, the maximizing and erasing rules are qualified "within reason".

Chartjunk. Includes moiré vibration (op-art patterns that shimmer; "probably the most common form of graphical clutter"), heavy grids and the "duck", a graphic whose whole form is itself decoration, named after the duck-shaped store.

Data density and small multiples. Data density is the number of entries in the data matrix divided by the area of the graphic; the principle is to maximize it and the size of the data matrix "within reason", shrinking marks as data grow. Small multiples are "a series of graphics, showing the same combination of variables, indexed by changes in another variable", like film frames, with the design held constant so attention goes to shifts in the data. His summary: for non-data-ink, less is more; for data-ink, less is a bore.

### Replication and criticism

This is craft authority and argument by example, not experiment. Later empirical work gives a mixed verdict. Bateman et al. (2010) found embellished charts described as accurately as plain ones and remembered better after two to three weeks (20 participants), challenging the premise that non-data-ink hurts. Borkin et al. (2013) found denser, colorful and picture-bearing visualizations more memorable, against minimalist expectations. Gillan and Richman (as summarized by Bateman) found high data-ink ratios correlated with faster, more accurate responses, but depending on where the extra ink was placed: background images hurt, axis lines helped. The 0.95 to 1.05 tolerance is Tufte's own judgment, not an experimental result.

### Implications for LTF

Treat the integrity rules as a checklist for every LTF chart: zero baselines for bars, proportional marks, labeled units (knots, feet MSL or AGL), no 3D. Check the lie factor of any icon or area-scaled graphic; scale one dimension only.

Apply data-ink economy where learners read values under load, such as fly mode and instrument readouts: thin gridlines, no frames, no gradients, direct labels. Do not treat data-ink as dogma for lesson pages; the evidence above says a meaningful illustration can help memory, so "within reason" is the operative phrase.

Small multiples suit LTF well: the same chart repeated across attempts, phases of flight or aircraft configurations, with identical axes so the learner's eye sees only change. For a handful of numbers (a checklist's five target values, a score of six items) use a table, not a chart.

Confirmed this session: Open Library search and edition list (work OL2824012W; 1983 edition ISBN 9780961392147, 197 pages, Graphics Press); publisher page edwardtufte.com/book/the-visual-display-of-quantitative-information (second edition 2001, 197 pages); second-edition full text read via archive.org copy (passages on excellence, lie factor, data-ink, moiré, density, small multiples).

## munzner2014visualization

Munzner, T. (2014). Visualization analysis and design. Boca Raton, FL: A K Peters/CRC Press.

### Core claims

Munzner offers a textbook framework for analyzing and designing visualizations in terms of three questions: what data is shown, why the user is looking at it (the task), and how the visual encoding and interaction are built. She argues that design should start from an abstraction of the data and the task, not from a favorite chart type, and that validation must happen at four nested levels (domain situation, abstraction, idiom, algorithm), because an error at an outer level cannot be repaired by polish at an inner one. It synthesizes earlier perception research (Bertin, Mackinlay, Cleveland and McGill) into a shared vocabulary and a short list of rules of thumb; it reports no new experiments.

### Specifics

Structure: fifteen chapters from data abstraction, task abstraction and the four validation levels through marks and channels, rules of thumb, arranging tables, spatial data and networks, mapping color, manipulating views, faceting into multiple views, reducing items, focus+context and case studies.

Marks and channels. Marks are geometric primitives (points, lines, areas); channels are the visual properties that control how a mark appears. Channels split into magnitude channels, which show ordered attributes, and identity channels, which show categories. Her lecture slides list the magnitude channels in effectiveness order: position on a common scale, position on an unaligned scale, length, tilt or angle, area, depth (3D position), color luminance, then color saturation; identity channels are spatial region, color hue, motion, shape. Channels are judged on accuracy, discriminability (how many distinct steps can be told apart), separability (whether using one channel interferes with another) and popout.

Rules of thumb (the slide summary): no unjustified 3D; no unjustified 2D; eyes beat memory; resolution over immersion; overview first, zoom and filter, details on demand; responsiveness is required; function first, form next. Reasons for the first: depth is a weak channel, occlusion hides data, perspective distortion corrupts size channels, tilted text is hard to read; 3D is legitimate for truly spatial data when the task is shape perception. "Eyes beat memory" favors side-by-side views (small multiples) over animation for comparing many states, since comparing a visible item to a remembered one is harder. "Resolution over immersion" says pixels are the scarcest resource. Responsiveness uses three rough bands for feedback: about 0.1 seconds for perceptual processing, 1 second for immediate response, 10 seconds for brief tasks. "Function first, form next" holds that aesthetics matter as another level of function (hierarchy, alignment, flow) but that starting with aesthetics makes function hard to add later.

### Replication and criticism

The empirical base is the cited literature, so its strengths and weaknesses are those of that literature. The channel ranking inherits the Cleveland and McGill two-value ratio-judgment framing, which later work questions (a 2021 preprint by McColeman et al. found the ranking did not hold when more than two marks were reproduced; Heer and Bostock 2010 found angle not worse than length). Her course slides present the rules as guidelines with justified exceptions. I found no controlled study testing whether designers who use the framework build better visualizations.

Evidence class: expert synthesis and textbook, with citations to experiments.

### Implications for LTF

The framework is a good way to run LTF design reviews. Before drawing any chart, write the abstraction: what data (a time series of airspeed samples), what task (compare to a target, spot drift, identify a trend). A chart type then falls out. "Compare many attempts" suggests small multiples over animation (eyes beat memory).

"No unjustified 3D" is a direct rule for LTF: do not draw attitude or flight-path data as 3D bars or perspective plots; reserve 3D for the places where shape is the task (a pattern flown around an airport, an illustrated approach path). The same rule backs plain 2D instrument widgets.

"Responsiveness is required" gives defensible timing bands for widgets: hover highlights near 0.1 seconds, taps and slider drags feel immediate within about a second, and anything near ten seconds needs a progress cue. "Function first, form next" suits a staged build: get the right encoding before styling, then style for both themes.

Use the channel table to choose encodings for dashboards: use position and length for quantities, and save hue for categories (phases of flight), never for magnitude.

Confirmed this session: Open Library search (work OL21546112W, CRC Press 2014, ISBN 9781466508910 per the author's page links); author's book page cs.ubc.ca/~tmm/vadbook (chapter list, first edition errata); Munzner's course slides on rules of thumb (cs.ubc.ca/~tmm/courses/436V-20/slides/rulesofthumb.pdf) and week 3 channels slides, downloaded and read; WebSearch summary for the nested model's origin. The book itself was not read.

## mackinlay1986automating

Mackinlay, J. (1986). Automating the design of graphical presentations of relational information. ACM Transactions on Graphics, 5(2), 110-141.

### Core claims

Mackinlay treats a graphical presentation as a sentence in a graphical language and argues that good graphic design can be codified as two kinds of criteria. Expressiveness criteria decide whether a graphical language can express exactly the desired information, no more and no less. Effectiveness criteria decide whether the language exploits the capabilities of the output medium and the human visual system. Using these criteria and a composition algebra that combines a small set of primitive graphical languages, he built APT (A Presentation Tool), an artificial-intelligence prototype that generates and ranks designs (bar charts, scatter plots, connected graphs) from a description of the data. The paper's lasting influence is the extension of Cleveland and McGill's accuracy ranking to ordinal and nominal data, the ancestor of later rankings of visual variables by data type.

### Specifics

Expressiveness. A design is expressive if its sentences encode all the facts in the data and no additional facts. His examples show violations: a bar chart of a relation whose domain is not ordered expresses an ordering the data lack, because most people read bar lengths as encoding an ordered or quantitative set; a scatter plot of the same relation avoids the problem.

Effectiveness. The author is candid that "there does not yet exist an empirically verified theory of human perceptual capabilities" strong enough to prove effectiveness theorems, so the paper offers a conjectural theory built on Cleveland and McGill's observation that perceptual tasks differ in accuracy. For quantitative data he reproduces their ranking (Figure 14): position, length, angle, slope, area (ranked fifth), volume, then density and color at the bottom. Because that ranking says nothing about nonquantitative data, and color, at the bottom for quantities, is a very effective way to encode nominal sets, he extends it (Figure 15) with separate rankings for quantitative, ordinal and nominal data. Position tops all three. For nominal data the figure runs position, color hue, texture, connection, containment, density, color saturation, shape; the ordinal ranking also starts with position, then color saturation among the channels shown. He states the extension "has not been empirically verified". His area analysis (Figure 16) says area can encode a tenfold quantitative range and a few ordinal steps if step sizes are large, and nominal values, though people may read them as ordinal.

Principle of Importance Ordering: encode more important information more effectively. Since the ranking does not give a total order (two scatter plots with an area encoding for a third variable require the same tasks), the input to APT lists relations in order of importance and the most important receives the highest-ranked channel.

Method. Primitive languages (axes, bar chart, line chart, scatter plot, color, shape, size, saturation, texture, orientation, tree, network) are composed into candidate designs, filtered by expressiveness and ordered by effectiveness. The scope is 2D static presentation; animation and 3D are future work.

### Replication and criticism

The effectiveness theory is explicitly conjectural. The quantitative part rests on Cleveland and McGill and inherits the criticisms listed in that entry (two-value ratio tasks; Heer and Bostock found angle not worse than length). The nominal and ordinal rankings were extended from psychophysics and analysis without experiments by the author's own account. Later recommender systems such as Draco continue the idea of searching the design space by rules (per a review seen in search results). It is a systems and theory paper with a prototype, not a user evaluation.

### Implications for LTF

Use Mackinlay's two tests as a code-review question for each LTF chart. Expressiveness: does the picture imply anything the data lack? A line joining discrete lesson scores implies continuity; bars for unordered phases imply an order. Effectiveness: is the most important quantity on the highest-ranked channel? In a challenge debrief, the learner's key error (for example deviation from a target) should be positioned on a common scale, not encoded in area or color shade, while secondary variables use lower channels.

For categories such as phase of flight, use hue, texture or containment rather than length or area. For ordinal ratings, use ordered lightness rather than rainbow hues. Check that shape and position still carry meaning when color perception is impaired.

Treat Importance Ordering as a layout rule for dashboards and fly mode: the quantity to act on first gets position on an axis and the most room.

Confirmed this session: Crossref DOI 10.1145/22949.22950 (ACM TOG 5(2), 110-141); full text read from courses.ischool.berkeley.edu/i247/f05/readings/Mackinlay_APT_TOG86.pdf (abstract, expressiveness and effectiveness sections, Figures 14 to 16 as extracted text, conclusion); the Draco remark is from a WebSearch summary only.

## shneiderman1996eyes

Shneiderman, B. (1996). The eyes have it: A task by data type taxonomy for information visualizations. Proceedings 1996 IEEE Symposium on Visual Languages, 336-343. IEEE Computer Society.

### Core claims

Shneiderman offers a starting point for designing advanced graphical interfaces to large collections: the Visual Information-Seeking Mantra, "overview first, zoom and filter, then details on demand". He is explicit that this is only a starting point, so the paper adds a task by data type taxonomy (TTT) to sort the many information visualization prototypes then appearing. The taxonomy has seven data types (one-, two- and three-dimensional data, temporal and multi-dimensional data, tree and network data) and seven tasks (overview, zoom, filter, details-on-demand, relate, history, extract). He argues that visual displays exploit human perception better than text, since users can scan, recognize and recall images rapidly and detect changes in size, color, shape, movement or texture. The paper reports no new experiment.

### Specifics

The seven tasks, defined in the paper:
- Overview: gain an overview of the entire collection.
- Zoom: zoom in on items of interest.
- Filter: filter out uninteresting items.
- Details-on-demand: select an item or group and get details when needed.
- Relate: view relationships among items.
- History: keep a history of actions to support undo, replay and progressive refinement.
- Extract: allow extraction of sub-collections and of the query parameters.

The seven data types, each with item attributes and typical user problems:
- 1-D linear data (documents, source code, name lists);
- 2-D planar or map data (adjacency, containment, paths);
- 3-D real-world objects (with cautions about disorientation and occlusion);
- temporal data, where items have start and finish times and may overlap;
- multi-dimensional data, where items with n attributes become points in n-space (tasks: patterns, clusters, correlations, gaps, outliers);
- tree data and network data.

Dynamic queries are presented as the mechanism for filtering: sliders, buttons or alphasliders coupled to rapid display update, "less than 100 milliseconds" being the goal, with rapid, incremental, reversible actions and no error messages. He cites an empirical comparison of a dynamic-query interface against a form-fill-in interface for a chemical table of elements, a counterbalanced within-subjects study with 18 chemistry students that showed faster performance and lower error rates for dynamic queries (Ahlberg and colleagues, 1991, as cited in the paper). He notes that most prototypes fail to support history.

### Replication and criticism

Craft and Cairns (2005, "Beyond guidelines: what can we learn from the visual information seeking mantra?") reviewed the literature citing the Mantra and report that, although many cite it, "there are no reasonably obvious studies that have validated" it. They conclude that it acts as inspiration and guideline for practitioners, not as a scientifically studied approach, and call for empirical validation and for design patterns. Shneiderman himself calls the ideas descriptive and explanatory rather than prescriptive, according to that paper, yet it has become a prescriptive principle for many designers. Munzner's slides adopt it as a rule of thumb. The task list is also criticized as high level: the paper itself says the seven tasks are at a high level of abstraction and more tasks and refinements are natural next steps. The evidence class is expert opinion plus one small cited experiment; I found no later experimental test of the mantra as a whole.

### Implications for LTF

The mantra maps directly onto an LTF learner dashboard and debrief: overview first (a single summary of progress across lessons or of a flight's error), zoom and filter (choose a lesson, a phase of flight or a time window), then details on demand (the actual numbers for one event, revealed on tap or hover). In fly mode keep only the overview and one detail; do not require zoom while the learner is also flying.

The History task suggests undo and retrace for any explorable widget; the Extract task suggests letting a learner save or share a challenge result. The latency guidance (under about 100 milliseconds for dynamic updates) is a sound target for sliders and parameter widgets that change a diagram live, such as a slider that changes pitch attitude in a lesson, though the number is the author's goal, not a measured threshold.

Do not read the mantra as proven; use it as a starting checklist and test the actual flow with beginners, who may need the overview explained in words before they can use it. Because details on demand rely on hover on desktop, provide a tap equivalent on touch screens.

Confirmed this session: Crossref DOI 10.1109/vl.1996.545307 (pages 336-343); full text read from cs.umd.edu/~ben/papers/Shneiderman1996eyes.pdf; Craft and Cairns abstract and introduction read at www-users.york.ac.uk/~pc530/pubs/craft_cairns.pdf.

## franconeri2021science

Franconeri, S. L., Padilla, L. M., Shah, P., Zacks, J. M., & Hullman, J. (2021). The science of visual data communication: What works. Psychological Science in the Public Interest, 22(3), 110-161.

### Core claims

This is a 52-page evidence review by five researchers from perception, cognition, education and computer science, aimed at people who communicate data to students, coworkers and the general public. Its central distinction:  the visual system extracts broad statistics (mean, extremes) from a display within a fraction of a second, whereas comparing between subsets of values is slow, limited to only a handful per second. Effective graphics therefore avoid taxing working memory, guide attention to the one comparison that matters, and respect familiar conventions. The review sorts guidance into extracting data precisely and without illusion, mapping values to concepts, conveying uncertainty and risk, and tailoring to the audience, especially viewers with low graphical literacy, numeracy or domain knowledge.

### Specifics

The authors' key guidelines, paraphrased from the full text:
- Visualize with histograms and scatterplots before trusting statistical summaries.
- Failing to start axes at zero can cause viewers to overestimate differences. The text adds that a zero baseline can make effect sizes illegible when data sit far from zero, and that designers disagree on whether the rule is absolute; one cited approach spans 0.75 standard deviations either side of the mean.
- When plotting circles or squares, map data to area, not diameter. Do not plot intensities on intensities (contrast illusions). Mapping continuous numbers to a spectrum of hues exaggerates differences that straddle hue boundaries. For color-blind viewers pair red with blue rather than green.
- Use grouping cues, annotation and highlighting to narrow the viewer to the single most important comparison.
- Convert legends into direct labels and integrate text as annotation; avoid animation, which typically leads to confusion.
- Embellishments can distract if unrelated to the data, but related ones can improve memory and engagement.
- Prefer formats familiar to the audience, and respect conventions such as "up" meaning "more".
- For lay audiences communicating uncertainty, avoid error bars, which can be misinterpreted as data ranges; show examples of discrete outcomes, simultaneously or over time. For low-numeracy risk communication, use absolute rather than relative rates, frequencies (3 out of 10) rather than percentages, and icon arrays with the same denominator.

On clutter, the review says that despite strong calls to declutter, "there is only mixed evidence" that it improves aesthetic ratings and little evidence that it affects objective performance, and that some researchers discourage further testing of a simple declutter rule given the small, mixed effects. Studies of pictorial embellishment show no improvement in memory for data, mixed results, or better memory for content or message (Bateman et al. 2010 among them), and pictorial elements do improve memory for having seen a visualization (Borkin et al. 2013). On animation, controls helped precise country questions but hurt extracting global trends.

### Replication and criticism

This is a narrative review, not a meta-analysis; its strength is breadth, and it flags where evidence is mixed. Several recommendations rest on a few experiments or on practitioner consensus (the authors include practitioner guidebooks explicitly). A corrigendum to the article was published in 2022 (Crossref record 10.1177/15291006221099494); I did not read it. The error-bar advice rests on a growing but limited literature (see the Hullman entry), and the zero-baseline advice is contested, as the authors report.

### Implications for LTF

This paper is the best single guide to LTF's chart defaults, for it targets beginners with low graphical literacy. Directly adoptable: direct labels instead of legends; one highlighted comparison per chart with an annotation saying what to see; axes starting at zero for bars; area, not diameter, for any circular marks; red and blue rather than red and green; no rainbow ramps.

For uncertainty (for example a learner's score variability across attempts), show a handful of individual attempts rather than an interval, and use "3 out of 10 landings" style frequencies rather than percentages in feedback copy.

Because comparisons between subsets are slow, fly-mode screens should carry a single comparison (current against target) with the target marked, not a panel of six lines. Avoid animated charts unless the animation is the point and is narrated. For a beginner audience, introduce each new chart format with a one-line "how to read this" before relying on it, since unfamiliar formats must be learned.

The mixed evidence on decluttering justifies a middle path: do not strip LTF charts to bare minimum, and do not add decoration unrelated to the data.

Confirmed this session: Crossref DOI 10.1177/15291006211051956 (PSPI 22(3), 110-161) and corrigendum record; full text read from the data.europa.eu course copy of the PDF (abstract, clutter and embellishment section, zero baseline discussion, Summary of Key Guidelines).

## hullman2019pursuit

Hullman, J., Qiao, X., Correll, M., Kale, A., & Kay, M. (2019). In pursuit of error: A survey of uncertainty visualization evaluation. IEEE Transactions on Visualization and Computer Graphics, 25(1), 903-913.

### Core claims

Evaluating an uncertainty visualization is harder than evaluating other charts, because people have difficulty interpreting uncertainty and it is hard to define "correct" behavior. The authors present a taxonomy of the decisions in designing such an evaluation and apply it to 86 user studies of uncertainty visualization published between 1987 and 2018. Their finding is that evaluation practice, particularly in visualization research, centers on performance and satisfaction measures that assume more predictable, statistically driven judgment than the human judgment and decision-making literature suggests. They flag a bias toward measuring accuracy rather than decision quality, a tendency toward confirming that a new technique "works" rather than explaining why, and a habit of comparing visualizations against each other while rarely including a no-uncertainty or plain-text baseline. The paper concludes with recommendations for evaluators.

### Specifics

Taxonomy. Six levels: behavioral targets (what aspect of behavior is examined, for example performance or quality of user experience), expected effects (what counts as success), evaluation goals (compare visualizations, or test uncertainty against no uncertainty), measures (satisfaction ratings, probability estimates, subjective confidence, and derived measures such as error or utility), elicitation techniques (a physical apparatus up to ordinary HTML inputs), and analysis approaches (null hypothesis significance testing versus Bayesian estimation). The sample yields 372 evaluation paths across 86 publications (lab page). A common path: performance, increasing accuracy, comparing visualizations, probability estimates from which error is derived, slider, frequentist testing.

Observations stated in the paper:
- Heuristics are adaptive and often lead to accurate judgments, so it is hard to create conditions where they fail. The authors note that error bars lead to perceptual bias and to underweighting of uncertainty, citing other work, and describe "within-the-bar" bias, where outcomes inside a bar's area are judged more likely.
- Where studies elicited decisions, accuracy-focused goals were about twice as common as decision-quality goals. Decision-quality designs, such as paying participants by a utility function (for example salting a road given forecasts, or catching simulated buses), offer realistic tradeoffs and let people learn across trials.
- Roughly 20 percent of paths (72) concern confidence. The authors warn about the hard-easy effect (overconfidence on difficult tasks, underconfidence on easy ones), that confidence reports are noisy, and that confidence is not a direct linear function of statistical confidence.

Recommendations include considering explanation as an end goal (ask people how they made the judgment), using decision frameworks for realism and control, accounting for the ambiguity of confidence, and validating elicited responses (for example recognizing the effect of priors).

### Replication and criticism

This is a systematic survey of study methods, not a study of whether any display works, so its evidence class is a literature review with a coding scheme; reliability of the coding is the authors' own. Its conclusions about "mismatch" are interpretive. Franconeri et al. (2021) draw on this line of work when advising lay audiences to avoid error bars. I found no work this session that overturns its central warning, that a display improving accuracy on a lab probability question may not improve decisions.

### Implications for LTF

LTF will show uncertain quantities: the spread of a learner's landing sink rates, the likelihood that a flight plan fits within a fuel reserve, the range of a weather forecast. This survey is a caution against assuming any one display communicates uncertainty. Design choices to adopt: explain in words next to the picture what the spread means; avoid error bars for beginners (see Franconeri et al.); and when testing LTF's own uncertainty displays with learners, measure decisions (would you continue the approach?), not just whether they can read a number.

Do not report confidence as a self-rated "how sure are you" slider without recognizing it is noisy and subject to overconfidence on hard tasks, which matters for self-assessment widgets in a flight-training app, where beginners may be overconfident exactly when a task is hard. Use frequency framings ("in 3 of your last 10 attempts") for risk. Keep any no-uncertainty baseline in LTF's tests, to check whether the extra display helps at all.

Confirmed this session: Crossref DOI 10.1109/tvcg.2018.2864889 (TVCG 25(1), 903-913; some listings give 2018); full text read from tableau.com/sites/default/files/2023-01/uncertainty_vis_eval.pdf (abstract, introduction, section 5); WebSearch for the lab page count of 372 evaluation paths.

## hullman2015hypothetical

Hullman, J., Resnick, P., & Adar, E. (2015). Hypothetical outcome plots outperform error bars and violin plots for inferences about reliability of variable ordering. PLOS ONE, 10(11), e0142444.

### Core claims

Common static depictions of probability distributions, such as error bars, are hard for viewers to interpret. The authors propose and test an alternative, hypothetical outcome plots (HOPs), which animate a finite set of individual draws from the distribution, one per frame. Their argument is that HOPs need little statistical background, because viewers can infer properties of a distribution by mental processes such as counting and integration. In an experiment comparing HOPs with error bars and violin plots, people made much more accurate judgments about plots of two and three quantities with HOPs, while accuracy was similar across all three displays for most questions about a single quantity.

### Specifics

Design (as reported on the PLOS ONE page). An online study on Amazon Mechanical Turk with 288 participants, 96 per display condition (HOPs, error bars, violin plots),. Each participant completed nine tasks: four about one variable, four about two variables, and one about three variables. In the HOPs condition each frame showed one simulated draw, advancing every 400 milliseconds. Responses were scored by absolute error, and the paper does not report percent-correct figures. Dropout was 13.1 percent for HOPs, 14.4 percent for error bars and 9.4 percent for violin plots.

Results (absolute error, as reported):
- Two variables (the probability that B exceeds A): HOPs had much lower error than both static displays on all four tasks (all p below 0.001).
- Three variables (the probability that B exceeds A and C): HOPs had lower error than both (F(2,573) = 43, p below 0.001).
- One variable, estimating the mean: with high variance, HOPs were significantly worse than the others (F(2,573) = 32, p below 0.001); with low variance there was no significant difference.
- One variable, probability questions: mixed. Violin plots helped on some threshold questions, while error bars and HOPs each performed worst on different tasks.
- Error bars and violin plots on two-variable questions: error was never below 36 percentage points on any task. On one task whose correct answer was 59 percent, some answers clustered near 95 percent and others near 23 percent.

Stated limitations: possibly above-average numeracy in the sample; normal distributions that may favor static plots; underlying distributions rather than sampling distributions; only two static comparison displays; no reasoning reports; frame rate not varied.

### Replication and criticism

A follow-up by Kale, Nguyen, Kay and Hullman (IEEE TVCG 2019, "Hypothetical outcome plots help untrained observers judge trends in ambiguous data") tested HOPs against error bars and line ensembles in two crowdsourced experiments on an applied task, judging which of two underlying trends more likely produced a noisy time series. A summary on the UW Interactive Data Lab page says participants correctly interpreted the underlying trend for more ambiguous jobs-number examples with HOPs than with error bars; I did not read the full results. This is an extension from the same lab, so independent replication is still desirable.

Criticisms and boundaries: HOPs are weaker for estimating a mean under high variance, as the original data show; animation demands time and attention, and Franconeri et al. (2021) generally warn that animation can confuse, while still listing discrete outcomes as the best-supported advice for lay uncertainty communication. HOPs cannot be read at a glance or printed. The evidence is a single between-subjects crowdsourced experiment with moderate samples.

### Implications for LTF

HOPs suit LTF where uncertainty is part of the lesson: wind variability on an approach, the scatter of a learner's touchdown points, or simulated outcomes of a decision. Showing example outcomes as dots or ghosted traces one at a time (or as a static strip of individual outcomes) communicates "this could go several ways" without requiring the learner to understand an interval.

Two cautions. First, any animated chart must honor the operating system's reduced-motion setting and offer a static alternative; a static ensemble of individual draws is the safe fallback. Second, the cost: HOPs are slow and worse for estimating a precise mean. Do not use them in fly mode, where the learner cannot watch a flicker beside the sim; put them in lesson explainers and debriefs.

Pair the display with a plain frequency sentence, as Franconeri et al. advise. Measure whether learners decide better, not just whether they answer a probability question.

Confirmed this session: Crossref DOI 10.1371/journal.pone.0142444 (PLOS ONE 10(11), e0142444); PLOS ONE article page abstract and results summarized via WebFetch (journals.plos.org/plosone/article?id=10.1371/journal.pone.0142444, first 100,000 characters); Kale et al. via Crossref (10.1109/tvcg.2018.2864909) and WebSearch excerpts.

## borland2007rainbow

Borland, D., & Taylor, R. M., II. (2007). Rainbow color map (still) considered harmful. IEEE Computer Graphics and Applications, 27(2), 14-17.

### Core claims

Borland and Taylor argue that the rainbow color map, the sweep through the spectral hues (violet, blue, cyan, green, yellow, orange, red) used to turn numbers into colors, is rarely the best choice for pseudocolor displays. Their phrase, as quoted by the 2023 rebuttal I read, is that the map's "characteristics of confusing the viewer, obscuring the data and actively misleading interpretation make it a poor choice for visualization". Search summaries of the abstract give the three problems as: no perceptual ordering of the hues, uncontrolled luminance variation, and the creation of apparent gradients or boundaries not in the data. They show the problem on simple data sets and recommend alternatives for several display categories, with a luminance-varying map such as grayscale suggested where detail and sharp features matter. A search summary reports their survey of IEEE Visualization proceedings from 2001 to 2005 found about half of pseudocoloring papers (51 percent, with a higher share outside medical imaging) used the rainbow. It is a viewpoint piece, not an experiment.

### Specifics

What I could confirm of the content comes from the 2023 reply (Ware, Stone and Szafir, IEEE CG&A 43(3), 88-93, read in full), which restates the three standard critiques:
1. The rainbow is not monotonic in luminance, which can distort the shapes people infer from the data (shape-from-shading needs luminance variation; a face rendered in a rainbow looks unnatural).
2. It is not perceptually uniform, which can distort the perception of data variation (the number of just-noticeable differences between steps varies along the map).
3. It partitions data into distinct colored bands that create false divisions (hue banding).

The 2023 article adds mechanisms. The classic HSV rainbow, a simple interpolation in RGB, performs poorly on perceived distance between quantities and is extremely nonuniform in how much data it communicates at different points, especially between cyan and green. Feature-resolving power depends mostly on luminance variation (lightness L* gradient), so flat spots in the luminance profile mean poor ability to see small features. The authors add that full rainbows are very hard to make accessible to people with severe color blindness.

Alternatives named in the sources: grayscale, perceptually designed multi-hue maps such as Viridis and Magma, Batlow, Turbo (smooth, symmetric luminance profile), and Paraview's Uniform.

### Replication and criticism

The anti-rainbow position became close to dogma, and in 2023 three authors who had each written against rainbows (Ware, Stone, Szafir) published "Rainbow Colormaps Are Not All Bad" in the same magazine. Their argument: experimental evidence on the rainbow's utility is mixed. Rainbow maps have repeatedly been the most accurate in studies where a value must be read using a key; they may draw attention to global structure and help people reason about relationships between distributions (citing Reda and Szafir 2021 and Reda et al. 2021, which I did not read). They say the critiques hold for the classic map but can be mitigated by designs such as Turbo. A cited study (Liu and Heer 2018) found well-designed multi-hue maps can raise accuracy over single-hue ones. They do not defend the classic HSV rainbow, and note that rainbow use fell in the visualization literature but not in domain science.

The evidence is expert argument in 2007 and mixed experiments afterward; a practical reading is to avoid the classic rainbow and test the task.

### Implications for LTF

Do not use a rainbow or jet gradient for any continuous quantity in LTF (for example, a heat map of how closely a learner held altitude over time, or a map of wind speeds). Use a single-hue ramp with monotonic lightness, or a perceptually designed multi-hue map such as Viridis, and check it in light and dark themes since a ramp that ends in a near-black value disappears on a dark background.

When a quantity must be read exactly, add a labeled key, or better, direct labels or numbers; the 2023 article's point that rainbows are good for key-based lookup is a reminder that the key matters more than the hue sequence.

For the categorical case (phases of flight), a small set of distinguishable hues is appropriate; this is a different use from the continuous map the critique addresses. Never encode good or bad solely as red versus green.

Confirmed this session: Crossref DOI 10.1109/mcg.2007.323435 (vol. 27, issue 2, pages 14-17); abstract-level summary from WebSearch (ui.adsabs.harvard.edu listing and search snippets); the 2023 rebuttal PDF read in full (repository.library.noaa.gov/view/noaa/58953); the 2007 full text could not be retrieved (university copy blocked by a script challenge).

