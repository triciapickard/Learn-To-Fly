# Lane 09: Quantitative laws and models of interaction

## fitts1954information

Fitts, P. M. (1954). The information capacity of the human motor system in controlling the amplitude of movement. *Journal of Experimental Psychology*, 47(6), 381-391. doi:10.1037/h0055392

### Core claims

Fitts extended information theory, which had just been applied to sensory and perceptual judgment, to the human motor system. His thesis is that the motor system, with its visual and proprioceptive feedback, behaves like a communication channel of roughly fixed capacity measured in bits per second. A task that demands a more precise movement over a longer distance demands more information per response, so, capacity being fixed, the movement must take longer. The paper predicts that average movement time is proportional to the minimum average information demanded by the amplitude and tolerance of the task, and that the rate of information transmitted stays roughly constant across a wide range of amplitudes and tolerances.

### Specifics

Evidence type: three controlled laboratory experiments, the first run at two stylus weights, all with right-handed college men (16 participants in Experiments I and II, 20 in III).

- Experiment I, reciprocal tapping: participants alternately struck two metal plates with a stylus. Plate widths (W) were 2, 1, 0.5 and 0.25 in. and center-to-center amplitudes (A) were 2, 4, 8 and 16 in., giving 16 conditions, each tested with a 1 oz and a 1 lb stylus on separate days. Trials lasted 15 seconds, with instructions to emphasize accuracy over speed. Errors were rare (1.2 and 1.3 percent) and practice effects small (3 and 5 percent faster in the second block).
- Experiment II, disc transfer (16 conditions) and Experiment III, pin transfer (20 conditions): eight discs or pins moved one at a time, amplitudes up to 32 and 16 in., no errors permitted.

The index of difficulty is Id = -log2(Ws / 2A) bits per response, where Ws is the tolerance range and A the average amplitude. Fitts calls the 2A denominator arbitrary but practical. The index of performance is Ip = Id / t bits per second, with t the mean seconds per movement. Fitts computed Ip condition by condition; the regression form MT = a + b x ID came later (see MacKenzie).

Results: for the eight best light-stylus tapping conditions Ip ranged from 10.3 to 11.5 bits/s. Disc transfer, with Id from 4 to 10 bits, ranged from 7.5 to 10.4 bits/s overall. Pin transfer ranged from 8.9 to 12.6 bits/s over all 20 conditions and varied by only 1.0 bit/s over its ten best. The summary puts optimum performance at roughly 10 to 12 bits/s over a difficulty range of 1 to 10 bits per response. Performance fell off at the extremes: 1 and 2 in. movements were less efficient than 4 to 8 in., and very small tolerances did poorly. The correlation of Ip across the two stylus weights was r = .97.

### Replication and criticism

The empirical regularity (movement time linear in the log of distance over width) is one of the most replicated results in human movement science and underlies HCI pointing research (see MacKenzie 1992 and Soukoreff and MacKenzie 2004, separate entries here). The information-theoretic interpretation is much weaker than the regularity. Fitts used a one-dimensional task with overlearned movements; the paper itself says capacity probably differs by limb and muscle group and that finger movements might reach higher values. The index ignores direction, grasp and release, and physical work, as Fitts notes. Later authors revised the formulation (see the MacKenzie entry for the Shannon form and effective width). The version read this session is the 1992 reprint in *Journal of Experimental Psychology: General* 121(3), 262-269, which carries an editor's note identifying it as a reprint of the 1954 article.

### Implications for LTF

The qualitative rule is the useful part: time to hit a target grows with distance and shrinks with target size, with both inside a logarithm. In fly mode, where a learner glances from the sim to a second screen and taps with one hand while the other holds a yoke or stick, controls used under time pressure (next step, mark done, back) should be large and close together, near where the thumb or cursor rests. Do not rely on the bit-per-second figures for design; they come from stylus tapping by college men with a different measurement convention. The research was supported by the US Air Force, but the paper says nothing about display design and cannot support any specific control layout in the Cessna. Use it to justify generous target sizes and short travel on LTF screens, and nothing more precise.

Confirmed this session: Crossref 10.1037/h0055392 (title, author, 1954, vol. 47, issue 6, pp. 381-391) and 10.1037/0096-3445.121.3.262 (the 1992 reprint); full text of the reprint read at https://www.cs.princeton.edu/courses/archive/fall08/cos436/FittsJEP1954.pdf (apparatus, participants, formulas, Tables 1 to 3, Discussion and Summary).

## mackenzie1992fitts

MacKenzie, I. S. (1992). Fitts' law as a research and design tool in human-computer interaction. *Human-Computer Interaction*, 7(1), 91-139. doi:10.1207/s15327051hci0701_3

### Core claims

MacKenzie's article is the paper that moved Fitts's law from experimental psychology into the standard toolkit of human-computer interaction. It makes three contributions. First, it reviews the history of the law and exposes problems in how it had been applied to computer input devices. Second, it proposes refinements, most importantly a different index of difficulty (the Shannon formulation) and the use of an effective target width that reflects where participants actually landed. Third, it reviews six studies that compared input devices and shows that the very different numbers they reported can be explained by differences in method, such as error handling, practice, and the range of conditions tested. The practical message is that Fitts's law is a good tool for comparing devices and layouts within one carefully run study, and a poor tool for quoting absolute performance figures across studies.

### Specifics

Evidence type: a review and methodological argument, with a reanalysis of Fitts's original data and a survey of six device studies. The details below come from the author's own online copy of the article (https://www.yorku.ca/mack/hci1992.html), fetched this session; the final part of the page (the conclusions) was beyond what the fetch returned.

Formulas stated in the paper:
- Fitts's original: ID = log2(2A/W), with the prediction model MT = a + b log2(2A/W), and index of performance IP = 1/b in bits per second.
- Welford's variant, log2(A/W + 0.5), which the page says Card, English and Burr (1978) used (see the card1978evaluation entry).
- MacKenzie's Shannon formulation, ID = log2(A/W + 1), equivalently log2((A+W)/W). Because the logarithm of a quantity at least one cannot be negative, it avoids the negative difficulty values the other two forms can yield (overlapping targets, or wide and short text targets).
- Effective width, We = 4.133 x SD of the endpoint scatter, or, when only an error rate is known, We = W x 2.066 / z (z from the unit normal). The page's worked example: 2 percent errors on a 5 cm target gives We of about 4.45 cm. The idea is to adjust the target to what participants actually did, so speed and accuracy are folded into one measure.
- Reanalysis of Fitts's 1954 data using We with the Shannon form: the correlation rose from .9831 to .9937 and IP fell from 10.6 to 8.2 bits per second.

Problems the paper lists: movement time sits above the regression line at low difficulty; reducing W costs more time than an equal increase in A, which breaks the symmetry the model assumes; intercepts are often nonzero or negative; error rates are often unreported; and across the six device studies IP ranged from about 1.1 to 13.7 bits per second, with the mouse giving 10.4 in one study and 2.6 in another. The paper discusses power-function alternatives and a linear speed-accuracy trade-off for time-constrained tasks, and notes that Fitts's law had not then been tested in 3D tasks.

Recommendations: use the Shannon formulation or say which formula you used; use effective width and aim for a nominal error rate of about 4 percent while reporting it; test a wide, representative range of conditions (roughly 1 to 7 bits); control and report learning; compare devices by rankings within a study; treat the selection method (for example button press) as a separate factor because it affects the intercept; and apply the law to rapid, aimed movements.

### Replication and criticism

The Shannon formulation became the dominant form in HCI and was built into the international standard on pointing-device evaluation (the standard is covered through Soukoreff and MacKenzie 2004, a separate entry in this lane). The paper itself is a critical review, so it records many limits of Fitts's law. Later work extended it to touch and mobile input and to two-dimensional targets, which this lane touches through the steering-law entry. Evidence quality: the underlying law is well replicated for aimed movements, but the absolute IP values are device-, population- and method-dependent. A caution for LTF: the paper's authority is for pointing, not for tasks with a decision or reading component.

### Implications for LTF

For design review, use the Shannon form qualitatively: time to hit a control rises with the log of distance divided by size plus one. That supports three rules for LTF's full-screen fly mode. Make primary actions (next step, done, back) large, at least as wide as the finger or the cursor's practical scatter, and group them near where the hand already rests. Avoid placing small, frequent targets at the far edge of a screen from the controls the learner just used. Do not make time-critical targets tiny just because there is room. Because effective width depends on how accurately people actually land, expect worse landing accuracy when a learner is half-attending to the sim, so size targets for degraded precision rather than for the best case. For internal evaluation, if LTF ever measures its own pointing performance, follow the paper's advice: report error rates, test a range of conditions, and compare designs within one study instead of against figures quoted from the literature. Do not cite IP values (bits per second) in design docs; the paper itself shows how unstable they are across studies.

Confirmed this session: Crossref work record 10.1207/s15327051hci0701_3 (title, author, 1992, vol. 7, issue 1, pp. 91-139); abstract, formulas, criticisms and recommendations read from https://www.yorku.ca/mack/hci1992.html (first 100,000 characters); web search for the citation and abstract opening line.

## hick1952rate

Hick, W. E. (1952). On the rate of gain of information. *Quarterly Journal of Experimental Psychology*, 4(1), 11-26. doi:10.1080/17470215208416600

### Core claims

Hick applied the new mathematics of information theory to choice reaction time. His principal finding, stated in the abstract, is that the rate of gain of information is on average constant with respect to time within the duration of one perceptual-motor act, with a value of the order of five bits per second. Because the amount of information in a choice grows with the logarithm of the number of equally likely alternatives, a constant rate of gain predicts that reaction time grows with the logarithm of the number of alternatives, not linearly. He also reported that reaction times to individual stimuli were related to the objective uncertainty about which response would be needed, and he considered conceptual models of the process, concluding that tests against the data were inconclusive.

### Specifics

Evidence type: small laboratory experiments with very few participants, interpreted with a mathematical model. The abstract describes two experiments: a conventional choice-reaction experiment with up to ten alternatives and a negligible proportion of errors, and a ten-choice experiment in which subjects deliberately reduced reaction time by allowing themselves various proportions of errors. The review by Proctor and Schneider (2018), read this session, adds detail: Hick first fit Merkel's older data with a logarithmic function. In his own Experiment 1, Hick was the sole subject, with ten lamps arranged in a small irregular circle and ten fingers resting on keys. Blocks used no uncertainty (go/no-go) and two through ten alternatives, and analysis was restricted to the little and ring fingers so finger differences would not matter. His function was RT = b log10(n + 1), with the "+1" accommodating the possibility of no stimulus. In Experiment 2, he and a second subject varied the error proportion in runs of 100 trials; the second subject was later identified as the psychologist Richard Gregory, who said in a recorded interview that the law rests on "my nervous system" and that the experiment went on for months. Experiment 3 checked that learning of the repeated ten-choice sequences did not explain the results.

The widely used form of the law, which Hick did not write in this way, is RT = a + b log2 n, with a as the intercept and b the slope; it is sometimes expressed through average information H as RT = a + bH. Hick also considered process models: replication of the stimulus against templates (simultaneous, serial and self-replication), search, and a hierarchical sequence of binary classification decisions. Of these he thought only self-replication and progressive classification promising; the latter is the model of choosing among eight equally likely alternatives by three successive halvings.

### Replication and criticism

The logarithmic set-size effect has been replicated many times with keypress tasks of two to ten alternatives. Proctor and Schneider list well-documented limits: the slope is near zero when stimulus-response mapping is highly compatible (for example saccades to a stimulus location, or pressing the key that vibrates under the finger), the slope shrinks with practice (one cited study found the eight-versus-two difference falling from close to 500 ms in the first session to a little over 300 ms in the fifth, and another found 149 ms after nearly 4000 trials), results for very large sets are mixed, and sequential effects and repetition effects challenge the pure information-theoretic reading. Schneider and Anderson (2011) offer a memory-based account instead. The sample in the original was tiny (Hick and one other person), so the original paper's authority comes from the later replications, not from its own statistics.

### Implications for LTF

Use the law narrowly. It supports a modest claim: when a learner must pick one response from a list whose items have no obvious mapping, time grows slowly (logarithmically) as the list grows, and it is steeper for unpractised learners. It does not say that a page with fewer choices is always faster, and it does not apply to scanning a list for a word you already know, to reading, or to compatible actions. For fly mode, where a learner chooses a checklist step or a lesson from a short list while flying, keep the set small and consistently ordered so practice can flatten the slope. For a quiz, the number of answer options is a weak lever; wording and content matter far more (see the Liu et al. entry). Never cite "Hick's law" in a design decision as proof that fewer options always win; cite the specific effect (log growth in unpractised arbitrary mappings) and the limits above.

Confirmed this session: Crossref 10.1080/17470215208416600 (title, author, 1952, vol. 4, issue 1, pp. 11-26); abstract via OpenAlex (api.openalex.org/works/doi:10.1080/17470215208416600); details of experiments, formula and limits from the full text of Proctor and Schneider (2018), https://web.ics.purdue.edu/~dws/pubs/ProctorSchneider_2018_QJEP.pdf. I did not read Hick's original full text.

## hyman1953stimulus

Hyman, R. (1953). Stimulus information as a determinant of reaction time. *Journal of Experimental Psychology*, 45(3), 188-196. doi:10.1037/h0056940

### Core claims

Hyman showed, one year after Hick, that choice reaction time depends on the information in the stimulus set, not simply on the number of alternatives. The paper opens by recalling Merkel's finding that reaction time rises with the number of equally probable alternatives and by connecting this to communication theory, in which the information a message carries increases as the number of possible messages increases. Hyman then tested whether reaction time is a function of information regardless of how the information is varied, by changing the number of alternatives, the probability of each alternative, and the sequential dependencies between successive stimuli. This is why the relation is called the Hick-Hyman law.

### Specifics

Evidence type: a small set of laboratory experiments with a handful of participants. According to the review by Proctor and Schneider (2018), read this session: Hyman used up to eight stimulus locations (a matrix of lights), four subjects, and vocal responses in which each location was assigned a name from a set of pseudowords (Bun, Boo, Bee, Bore, By, Bix, Bev and Bate). In Experiment 1 he varied the number of equally likely alternatives. In Experiment 2 he changed the information conveyed by varying the probability with which particular stimulus-response pairs occurred. In Experiment 3 he introduced sequential dependencies between successive trials. When the results from all three experiments were plotted against the bits of information transmitted from stimuli to responses, each subject's data could be fit with a single function of the form RT = a + bH, where H is the average information in a block of trials. This is the formulation now used for the Hick-Hyman law.

Proctor and Schneider note that arbitrary mappings like Hyman's (locations to pseudoword names) do show set-size effects, whereas compatible mappings nearly remove them. They also report a limit Hyman himself drew: when he varied probability within blocks, the regression line fitted to block means did not predict mean times for the individual trial types inside a block; he is quoted (p. 194) as saying that "we cannot predict, on the basis of the regression line fitted to the means of the conditions, what the mean reaction times will be to the components which make up a condition" (quoted in Proctor and Schneider 2018).

### Replication and criticism

The linear relation between reaction time and transmitted information held in many later studies, which is why the law is credited to both authors. Kornblum (1967 to 1969) pointed out a confound: with equally likely alternatives, repetitions of the same stimulus-response pair become rarer as set size grows, and repetitions are faster than switches. He also built blocks with equal average information but different repetition probability (for a set size of 4, repetition probabilities of 0.08 and 0.44 both gave 1.87 bits) and found shorter mean times for the block with more repetitions, which he took to reject the pure information account. Hyman and Umilta (1969) replied that his very short response-stimulus interval (140 ms) was a poor test and found only small differences with an interval of about 7.5 s, while Kornblum's later design with a minimum interval of 2.9 s gave a pattern like his first (all per Proctor and Schneider 2018). A 2016 paper listed in the University of Iowa repository also notes that stimulus and response uncertainty were confounded in the original work. Schneider and Anderson (2011) account for the set-size effect with memory interference instead of information. The evidence is laboratory-based, consistent for arbitrary mappings, and contested as an account of mechanism.

### Implications for LTF

The practical point from Hyman is that the number of options is only a proxy: what matters is how uncertain the learner is about which option is right. A menu of eight items where one is nearly always chosen (for example "Continue" on a lesson page) behaves like a smaller menu. LTF should therefore make the expected action visually primary and keep rare actions available but quiet. In a quiz, probability and sequence also matter: randomizing answer order raises uncertainty, but for a learner who has learned a checklist order, keeping the order fixed lets practice reduce choice time. For fly mode, predictable ordering of a checklist (the same order every time, matching the sim cockpit flow) removes uncertainty and so reduces time per step, which is better than shrinking the list. Avoid presenting Hyman's numbers; they come from four people naming lights.

Confirmed this session: Crossref 10.1037/h0056940; first paragraph of the paper via OpenAlex (api.openalex.org/works/doi:10.1037/h0056940), which describes Merkel's finding and the communication-theory link; experiment details and criticism from Proctor and Schneider (2018), https://web.ics.purdue.edu/~dws/pubs/ProctorSchneider_2018_QJEP.pdf; search results (scilit.com record and an Iowa repository listing) for the confounding critique. I did not read Hyman's full text.
## proctor2018hicks

Proctor, R. W., & Schneider, D. W. (2018). Hick's law for choice reaction time: A review. *Quarterly Journal of Experimental Psychology*, 71(6), 1281-1299. doi:10.1080/17470218.2017.1322622

### Core claims

This review, published in the journal that carried Hick's original article (cited in it as the third most cited article in that journal's history, per an editorial by Brysbaert, 2016), describes the historical context and experiments behind Hick's law, traces its immediate impact, and surveys the challenges and modeling work since. Its overall verdict is that the law (choice reaction time rises roughly linearly with the logarithm of the number of equally likely alternatives) is robust enough to be one of the few widely acknowledged laws in psychology, yet it is bounded: stimulus-response compatibility, practice, very large set sizes and sequential dependencies all change or remove the effect. The authors also note that the law is regarded as a fundamental principle of interface design for human-computer interaction, and they survey how HCI has used it.

### Specifics

Evidence type: a narrative review of laboratory literature, with attention to how HCI adopted the law. Figures below are from the full text read this session.

- Hick's setup: he was the sole subject in Experiment 1, with ten lamps in a small irregular circle and ten fingers on keys; blocks ran from go/no-go through ten alternatives; his function was RT = b log10(n + 1). The common modern form is RT = a + b log2 n, or RT = a + bH.
- Hyman (1953): up to eight locations, four subjects, vocal responses with pseudoword names; set size, probability and sequential structure varied; one function RT = a + bH fit each subject.
- Compatibility: set-size effects were small or absent for saccades to a target location, for key presses signaled by a vibration under the finger, and for cursor movement to a stimulus location, but present for arbitrary mappings such as letter cues. Schneider and Anderson (2011) argue the key factor is whether stimulus-response associations must be held in memory.
- Practice: the slope shrinks. One study found an eight-versus-two difference close to 500 ms in the first session and a little over 300 ms in the fifth; another found only 149 ms after nearly 4000 trials with the law still present. Teichner and Krebs (1974) concluded that with enough practice reaction time might become independent of set size. The review states that the slope can vary from zero to several hundred milliseconds.
- Large sets: most studies used two to ten alternatives (up to 3.3 bits). Results beyond that are mixed (Conrad's reading of nonsense-syllable lists from 4 to 32 syllables followed a log function).
- Sequential effects (Kornblum): repetitions are faster than switches, and repetition probability falls as set size grows, a confound.
- HCI: the review notes that Card, Moran and Newell (1983) listed the law as an information-theory principle in the Model Human Processor, and describes Landauer and Nachbar (1985) on menu trees, where the number of alternatives per screen was 2, 4, 8 or 16 and screen times fit a logarithmic function, leading to the conclusion that broader, shallower trees are faster.
- Contemporary models: accumulator and evidence-accumulation models, and the memory-based model of Schneider and Anderson (2011), in which the effect arises from associative interference in retrieval.

### Replication and criticism

The review is itself a map of replications and limits. The best summary is that the set-size effect replicates for key-press tasks with arbitrary mappings, is context dependent otherwise, and has no agreed mechanism. The authors' discussion of sequential effects shows the original information-theoretic reading was disputed from the 1960s. For HCI, they report promotional uses of the law (design handbooks and web articles claiming that understanding it makes pages more engaging), which the evidence base above does not support in that form; Liu et al. (2020, separate entry) press that point.

### Implications for LTF

For writers, this review gives the safe wording of the law and its limits. A statement LTF can stand behind: "When someone must pick one response from a list of unfamiliar, arbitrarily mapped options, time rises slowly (logarithmically) with the number of options, and shrinks with practice." Statements to avoid: "fewer options are always faster," "7 items is the limit," or any milliseconds-per-option figure. For fly mode, the compatibility finding matters: when a control's position mirrors what it does (next on the right, back on the left, as in sim panels), selection costs little regardless of count; arbitrary icon sets cost more. For quizzes, answer options are labeled text mapped to a choice, which is closer to the arbitrary case, so four options is fine and the meaningful lever is wording and plausibility. For navigation of a long lesson list, practice flattens costs, so keep position and order stable across visits instead of reshuffling by recommendation.

Confirmed this session: Crossref 10.1080/17470218.2017.1322622 (title, authors, 2018, vol. 71, issue 6, pp. 1281-1299); Europe PMC abstract; full text of the Purdue-hosted copy (https://web.ics.purdue.edu/~dws/pubs/ProctorSchneider_2018_QJEP.pdf) read in full for the sections on Hick's experiments, Hyman, compatibility, practice, large sets, sequential effects and HCI.

## liu2020relevant

Liu, W., Gori, J., Rioul, O., Beaudouin-Lafon, M., & Guiard, Y. (2020). How relevant is Hick's law for HCI? In *Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems* (pp. 1-11). ACM. doi:10.1145/3313831.3376878

### Core claims

The paper is a critical review of how HCI uses Hick's law. The abstract (confirmed via Semantic Scholar and OpenAlex) says the law's application to HCI is controversial, with some holding that it does not apply to HCI tasks and others treating it as a cornerstone of interface design, and that it is often misunderstood. The authors reviewed the choice-reaction-time literature and argue four points: (1) Hick's law speaks against, not for, the popular principle that "less is better"; (2) logarithmic growth of observed time data cannot automatically be interpreted as Hick's law; (3) the stimulus-response paradigm behind the law is rarely relevant to HCI tasks, where choice reaction time can often be assumed to be constant; and (4) for interface design, a detailed look at psychological processes such as visual search and decision making is more fruitful than a mere reference to Hick's law. The keywords listed on the authors' institutional page include convexity, logarithm and uncertainty.

### Specifics

Evidence type: a conceptual and literature-based argument by a team from Universite Paris-Saclay, presented at CHI 2020 (Honolulu, April 2020). I could read the abstract, the institutional record and secondary descriptions, but the full text was blocked to my fetch tools (HTTP 403 from the ACM and CORE copies and an access-denied page from HAL), so the details below are limited to what those records state. I did not read the paper's own figures, models or experiments.

What the abstract and secondary descriptions establish:

- The central logic of point (1). Hick's law says reaction time grows with the logarithm of the number of alternatives. A logarithm grows ever more slowly, so adding items costs less and less per item. One secondary description (unverified against the paper) says the paper argues that the logarithmic form favors showing everything at once rather than splitting a set into groups, since each group pays the logarithmic cost again. What I can attest is the abstract's claim that the law speaks against "less is better."
- Point (2): mechanisms other than the information-processing one can produce logarithmic curves. One description gives visual search in a hierarchical menu and scrolling through an alphabetized menu as examples. So a curve fitting log(n) does not show Hick's law operating.
- Point (3): my reading is that in typical interfaces users often know what they want (a familiar item, a known command), so the choice is not a stimulus-response choice among unpracticed alternatives and the time is dominated by search and pointing.
- The design principle offered concerns how many items to show at once, grounded in the convexity of the response-time function, according to the paper's keywords and a search description. I cannot give the paper's recommended numbers.

### Replication and criticism

This is a 2020 conference paper with, at the time of the institutional listing, 17 Scopus citations; its argument is a reading of the literature, not a replication. It is consistent with the older observation, in Proctor and Schneider (2018), that the effect depends on compatibility, practice and the memory demands of the mapping, and that the information-theoretic interpretation has been disputed since the 1960s. It is compatible with the menu-depth conclusion of Landauer and Nachbar (1985), who used the law to favor broader, shallower menus. The paper is a corrective, not a new law: it should lower confidence in design rules of the form "reduce choices to speed decisions."

### Implications for LTF

LTF should retire "Hick's law" as a slogan in design reviews. The workable replacements: (a) judge menus, checklists and answer sets by the processes that actually occur (visual search of a list the learner has not seen, reading, deciding) and test them; (b) prefer fewer navigation levels to many levels with few items, since each level adds a full cost of a screen and a decision; (c) do not cut content from a lesson index merely to reduce choices; instead structure it so that scanning is easy (consistent order, clear headings, stable positions). For fly mode the guidance is concrete: show the current checklist step prominently and the rest as an ordered, stable list; the learner's choice is almost always "the next step," so the number of items is not the driver. Treat the exact numbers in the paper as unavailable to me until the full text is read.

Confirmed this session: Crossref 10.1145/3313831.3376878 (title, first four authors, 2020, pp. 1-11); full author list and abstract from Semantic Scholar API (api.semanticscholar.org, DOI lookup) and OpenAlex; publication page at https://researchportal.ip-paris.fr/en/publications/how-relevant-is-hicks-law-for-hci/ (authors, venue, keywords). Full text not read.

## landauer1985selection

Landauer, T. K., & Nachbar, D. W. (1985). Selection from alphabetic and numeric menu trees using a touch screen: Breadth, depth, and width. In *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '85)* (pp. 73-78). ACM. doi:10.1145/317456.317470

### Core claims

Landauer and Nachbar tested how people select a target through a tree of menus, and showed that the time per screen is well described by a function that combines the Hick-Hyman law (the decision component) with Fitts's law (the movement component) in series. The abstract states that mean response time for each screen was well described by T = k + c log b, where b is the number of alternatives on the screen, "in agreement with the Hick-Hyman and Fitts' laws for decision and movement components in series." Because the logarithm grows slowly while each extra level of the tree adds a whole screen of cost, they showed that the function favors breadth over depth in menus, and they offered speculations about when other functions might apply. It is the earliest widely cited empirical application of the Hick-Hyman law to a user-interface structure.

### Specifics

Evidence type: a controlled laboratory experiment with a touch screen. The abstract says goal items were selected by a series of touch-menu choices among sequentially subdivided ranges of integers or alphabetically ordered words. The number of alternatives at each step, b, was varied and, inversely, so was the size of the touch target (more alternatives on a screen means smaller touch areas). Proctor and Schneider's review (2018), read in full this session, adds details: the target was an integer from 1 to 4096, or one of 4096 alphabetically ordered words; the number of alternatives per step was 2, 4, 8 or 16, with the number of screens necessarily falling as breadth rose; and the response times were fit well by a logarithmic function, as predicted by Hick's and Fitts's laws, and not by a linear function, which would be what serial visual search implies. The review also reports the paper's conclusion in these words, quoted there from the paper (p. 76): "Broader, shallower menu trees yield faster search than narrower, deeper ones."

The logic is easy to restate. For a tree that must cover N items with b choices per screen, the number of screens is log N to the base b. If time per screen is k + c log b, total time is (log N / log b) x (k + c log b) = k log N / log b + c log N. The second term does not depend on b at all, so the only thing that changes with breadth is the per-screen overhead k, which is paid fewer times as b grows. That is why the authors say breadth is favored: the "decision plus movement" cost per screen is log-like, and the fixed overhead per screen (screen change, reorientation, k) is what depth multiplies. This derivation is the arithmetic implied by the stated formula, not a quoted result.

### Replication and criticism

The finding has a long afterlife and has been qualified. Larson and Czerwinski (1998, CHI '98, Microsoft Research), working with web-style hierarchies, reported according to the Microsoft Research abstract that increased depth hurt search performance and that a medium depth-and-breadth condition outperformed the broadest, shallowest structure; I did not read the full paper, so take that as an abstract-level statement. Kiger (1984, Crossref-verified in this session as *International Journal of Man-Machine Studies* 20(2), 201-213) is an earlier study of the depth-breadth trade-off. Liu et al. (2020) argue that logarithmic curves do not by themselves identify Hick's law, and that visual search and scanning of an ordered list can produce the same shape. The experiment's content also matters: alphabetic and numeric ranges have an obvious ordering, which makes the choice at each step a bisection of a known sequence. Menu items without a natural order, or with ambiguous category labels, behave differently, because the learner can pick the wrong branch and must backtrack.

### Implications for LTF

For LTF's information architecture, this study justifies a flat, broad structure for things with an obvious order (lessons in a course in numbered sequence, checklist steps, airport or altitude lists) and warns against nesting to cut item counts. The concrete advice: a course page should show all lessons of a module at once with clear numbers and grouped headings, not hide them behind several levels of expanding menus; a fly mode should present the current checklist section and the steps within it on one screen. Two cautions. First, the result assumes ordered, predictable items, so category menus ("Systems", "Procedures", "Emergencies") need labels that make the right branch evident or learners will backtrack. Second, with beginners the cost of a wrong branch (misreading a label) can exceed the per-screen overhead, so test label clarity before trusting the arithmetic. Do not quote any millisecond value from this paper without reading the full text.

Confirmed this session: Crossref 10.1145/317456.317470 (CHI '85 proceedings, pp. 73-78) and a duplicate Crossref record 10.1145/1165385.317470 (SIGCHI Bulletin 16(4)); abstract via OpenAlex; experiment description and the quoted conclusion from Proctor and Schneider (2018), https://web.ics.purdue.edu/~dws/pubs/ProctorSchneider_2018_QJEP.pdf; Larson and Czerwinski via the Microsoft Research abstract (web search) and Crossref 10.1145/274644.274649; Kiger via Crossref 10.1016/s0020-7373(84)80018-8.

## accot1997beyond

Accot, J., & Zhai, S. (1997). Beyond Fitts' law: Models for trajectory-based HCI tasks. In *Proceedings of the ACM SIGCHI Conference on Human Factors in Computing Systems (CHI '97)* (pp. 295-302). ACM. doi:10.1145/258549.258760

### Core claims

Fitts's law models aimed pointing. Accot and Zhai argue that interfaces increasingly require trajectory-based interaction (navigating nested menus, drawing curves, moving in 3D worlds) and that performance on these tasks cannot be modeled by Fitts's law as it is applied to pointing. They explore whether simple regularities exist for trajectories, use "steering through tunnels" as the experimental paradigm, and report that a simple steering law does exist. The paper presents the motivation, analysis, four experiments and applications. The law's core idea is that the difficulty of steering is the integral of the inverse of the path width along the path, and that completion time is linear in that difficulty, in contrast to the logarithmic dependence on the distance-to-width ratio in pointing.

### Specifics

Evidence type: four controlled laboratory experiments plus a mathematical derivation. All used a Wacom tablet (18 x 25 in.) with a stylus, a 19-inch monitor, and full-screen tasks. The text read this session is the CHI '97 paper as hosted by Virginia Tech's course archive (the page layout is scrambled by text extraction, so I cite only values I could read unambiguously).

- Experiment 1, goal passing: ten participants passed a stylus through two goals separated by amplitude A with vertical variability W. The result was the Fitts-like relation MT = a + b log2(A/W + 1), with r-squared = 0.987 and an average error rate of 7.4 percent (higher for small widths).
- Derivation: the authors recursively subdivide a path into N goals. As N goes to infinity the task becomes a tunnel of length A and width W, and the logarithm disappears: difficulty is proportional to A/W. Hence MT = a + b (A/W), with a and b empirical constants.
- Experiment 2, straight tunnel of constant width: thirteen participants, four amplitudes (250 to 1000 pixels) and eight widths (20 to 90 pixels), five trials per combination, a warm-up session and a data session. The linear relation held.
- Experiment 3, narrowing tunnel (width varies along the path): regression of time on the integral index of difficulty gave r-squared = 0.968 on one analysis and 0.978 on another; error rates were much higher than in pointing studies (about 18 percent in one set of conditions).
- Experiment 4, spiral tunnel, to test the method on complex paths.
- The general law: the index of difficulty for a path C is the integral over the curve of ds / W(s), and the time to steer through C is T = a + b times that integral. For a constant width it reduces to the A/W form.

The authors also note that Fitts's law studies showed little difference between a mouse and a stylus, although writing with a mouse is plainly harder, which motivated adding trajectory tasks to device evaluation.

### Replication and criticism

The steering law has been replicated and extended. Accot and Zhai's follow-up studies (verified in this session through Crossref and OpenAlex abstracts) applied it to input-device evaluation: five devices in linear and circular steering tasks, with the law holding for all five at correlations above 0.98 (CHI '99, pp. 466-472), and a "scale effects" study (CHI 2001) that found a U-shaped relationship between movement scale and performance and rejected straight-line or no-effect hypotheses. The Nielsen Norman Group has an article on its implications for UI design (I did not read it). Limits: the experiments are in a single paradigm (stylus on a tablet with visible tunnel boundaries), error rates were high, and the theory assumes the path boundaries are hard constraints. Real interface paths (cascading menus) have soft boundaries, and design uses of the law are inferred from the lab results rather than independently tested in the paper.

### Implications for LTF

Steering is the model for any task where the learner must keep a pointer inside a corridor: dragging a slider along a track, moving a cursor diagonally across a cascading menu, tracing a flight path or an approach on a map widget, and dragging a control surface in an interactive explainer. The law says time rises in proportion to length over width, so doubling the path length or halving its width doubles the time, which is a steeper penalty than pointing. For LTF widgets, this argues for: avoiding narrow tunnels (do not require a drag to stay inside a thin track or a diagonal menu pathway); giving sliders wide hit areas and forgiving constraints (clamp rather than cancel when the pointer wanders); preferring click-to-set or tap-to-step controls where the learner needs speed; and, for any drag-to-trace widget, accepting tolerance bands as wide as the teaching point allows. In fly mode, where attention is split, avoid steering tasks entirely.

Confirmed this session: Crossref 10.1145/258549.258760 (CHI '97 pp. 295-302); full text read from https://research.cs.vt.edu/ns/cs5724papers/2.humanperf.fitts.accot.beyondfitts.pdf (abstract, Experiments 1 to 4, r-squared values, derivation); follow-up abstracts via OpenAlex for 10.1145/302979.303133 and 10.1145/365024.365027.

## soukoreff2004towards

Soukoreff, R. W., & MacKenzie, I. S. (2004). Towards a standard for pointing device evaluation, perspectives on 27 years of Fitts' law research in HCI. *International Journal of Human-Computer Studies*, 61(6), 751-789. doi:10.1016/j.ijhcs.2004.09.001

### Core claims

The paper surveys the HCI literature that uses Fitts's law to model pointing and compare devices, finds it inconsistent and contradictory, and proposes a standard methodology. According to the authors' own online copy, they make seven recommendations for building Fitts's law models, mainly for predicting movement time and comparing pointing devices, and they support the ISO 9241-9 standard. Their argument is that wildly different formulations, difficulty ranges and treatment of errors have made published numbers incomparable, so that a field built on a quantitative law has accumulated results that cannot be combined. Progress, they say, requires conforming to some standard, and they favor ISO 9241-9.

### Specifics

Evidence type: a systematic literature review and methodological proposal (the version read is the authors' HTML copy at https://www.yorku.ca/mack/ijhcs2004.html; I read the first 100,000 characters, which covered the recommendations and the two survey tables).

- Scope of the survey: 24 published Fitts's law models of the mouse that did not use ISO 9241-9 (the paper's Table 3), and 9 studies that did (Table 4).
- Spread of results: mouse throughput in the non-standard studies ranged from 2.55 bits per second (Epps, 1986) to 12.5 bits per second (Gillan et al., 1990), a spread of nearly 10 bits per second. Even studies using the same formulation disagreed widely.
- Spread under the standard: the nine ISO 9241-9 studies all used the Shannon formulation, the accuracy adjustment (effective width) and mean-of-means throughput; mouse throughput fell between 3.7 and 4.9 bits per second across five models from four research groups, a spread of 1.2 bits per second. The authors caution that nine studies are too few for firm conclusions.
- Recommended method: use the Shannon formulation of the index of difficulty (in bits); use a wide range of difficulty, with 2 to 8 bits suitable for most situations, and present each condition about 15 to 25 times per subject; record end-point scatter; compute effective target width as 4.133 times the standard deviation of end-points (or derive it from a 4 percent error rate), and compute effective difficulty from effective width and effective distance, adjusting separately for each subject and condition; regress movement time on effective difficulty, expecting a small intercept (a positive intercept under 400 ms and a negative one not below about -200 ms; larger values need investigation); predict only within the range of effective difficulty used to build the model; compute throughput as the mean of means across subjects and conditions, and do not use the reciprocal of the regression slope; and report movement times, error rates, effective distances and end-point standard deviations for each condition and subject.

### Replication and criticism

The paper is itself a critique of replication practice. Its main finding is that identical-sounding Fitts's law studies are not replications of one another. The ISO-style methodology it recommends reduces the spread but rests on few studies, as the authors admit. The 4 percent error target is a convention, not a law, and the authors present the standard as one option among three. For design work the safe reading is that relative comparisons from one carefully run study are meaningful and absolute throughput from the literature is not.

### Implications for LTF

LTF should not import bits-per-second numbers to justify specific target sizes. This paper gives the reason: the same device yields figures that differ by a factor of nearly five depending on method. What LTF can adopt is the discipline. If the team ever tests control sizes (for example big versus small "next" buttons in fly mode), design the test the standard way: a range of target sizes and distances covering roughly 2 to 8 bits, many repetitions, errors recorded and folded in through effective width, and comparisons within the same study. A cheaper alternative is to follow the qualitative principle from the Fitts and MacKenzie entries: large targets, short distances, generous tolerance. Also note that the standard covers mouse and similar devices; a thumb on a tablet next to a flight stick is a different situation, and the paper's data cannot be assumed to transfer.

Confirmed this session: Crossref 10.1016/j.ijhcs.2004.09.001 (title, authors, 2004, vol. 61, issue 6, pp. 751-789); recommendations and survey figures from https://www.yorku.ca/mack/ijhcs2004.html (first 100,000 of about 112,000 characters). I did not read the journal PDF.

## card1978evaluation

Card, S. K., English, W. K., & Burr, B. J. (1978). Evaluation of mouse, rate-controlled isometric joystick, step keys, and text keys for text selection on a CRT. *Ergonomics*, 21(8), 601-613. doi:10.1080/00140137808931762

### Core claims

The paper compares four devices for selecting text on a CRT display and concludes, per its abstract, that the mouse is fastest on all counts and has the lowest error rates. It shows that variations in positioning time with the mouse and the joystick are accounted for by Fitts's law; that the mouse's measured Fitts's law slope constant is close to the values found in other eye-hand tasks, leading to the conclusion that positioning time with this device is almost the minimal achievable; and that positioning time for the key devices is proportional to the number of keystrokes which must be typed. It is widely credited as the first comparative evaluation of the mouse and the first use of Fitts's law in HCI (MacKenzie's retrospective, read this session, calls it a seminal paper).

### Specifics

Evidence type: a controlled laboratory comparison from Xerox PARC. The abstract and the later reanalysis give the following.

- Devices: mouse, rate-controlled isometric joystick, step keys, and text keys. The task was selection of text on a CRT display.
- Fitts's law for the mouse: according to MacKenzie and Soukoreff's 2003 reanalysis (https://www.yorku.ca/mack/chi03a.html), the original model was MT = 1.03 + 0.096 ID, giving a throughput of 1/0.096 = 10.3 bits per second. The study used five amplitudes (1, 2, 4, 8, 16 cm) and four widths (1, 2, 4, 10 characters), producing 20 target conditions and 12 unique difficulties. The mouse had a 5 percent error rate, and error trials were excluded from the original Fitts's law model.
- The ISO-style reanalysis: using the Shannon formulation with effective width, throughput ranged from 1.42 to 3.77 bits per second with a mean of 2.65 bits per second; removing a nominal 0.5 s grasp time from each movement time raised throughput to 4.32 bits per second. The gap between 10.3 and 2.65 bits per second for the same data illustrates how much the method matters (see Soukoreff and MacKenzie, 2004).
- The model also uses Welford's variant, log2(A/W + 0.5), for the index of difficulty (MacKenzie 1992, read this session, says the paper used that form).
- This paper's constants (positioning about 1.1 s, with the Fitts range 0.8 to 1.5 s) feed the keystroke-level model's P operator, as the keystroke model report states.
I did not find the number of participants in any source I read, so I do not state it.

### Replication and criticism

Later studies confirmed the mouse as an efficient pointing device and re-measured devices under ISO 9241-9. The 2003 reanalysis shows how method-dependent the headline figure is: the original model excluded error trials and used the original formulation, and the ISO-style recalculation of the same data gives far lower throughput, so the 10.3 bits per second figure cannot be compared with ISO-era mouse values of 3.7 to 4.9 bits per second (Soukoreff and MacKenzie 2004). The paper's conclusion that the mouse is nearly minimal in time is a statement about the 1978 comparison set, not a general claim about all devices. Evidence quality: one experiment from an industrial laboratory, influential mainly because it demonstrated the method.

### Implications for LTF

Two lessons. First, device comparison by Fitts's law is a tool for explaining why a device wins, not just that it wins: the mouse wins because its movement cost matches the base human limit, while key-based selection costs per keystroke. That matters for the LTF audience in a specific way: some learners will use a keyboard, mouse, trackpad, touch or the sim's own controls beside LTF, and keyboard shortcuts count as keystroke cost. Offer both direct selection (click or tap on a checklist step) and key-driven stepping (arrow keys, space for "done"), because a learner whose hands are on a yoke and throttle may prefer one key to a pointing movement. Second, the history is a warning about headline numbers. Do not cite "10 bits per second" for pointing or any single throughput figure; the same dataset gives about 2.65 to 4.32 bits per second under the modern method.

Confirmed this session: Crossref 10.1080/00140137808931762 (title, authors, 1978, vol. 21, issue 8, pp. 601-613); abstract via OpenAlex; reanalysis facts from https://www.yorku.ca/mack/chi03a.html; additional context from https://www.yorku.ca/mack/hci1992.html and the Xerox report of the keystroke-level model. Full text of the 1978 paper not read.

## card1980keystroke

Card, S. K., Moran, T. P., & Newell, A. (1980). The keystroke-level model for user performance time with interactive systems. *Communications of the ACM*, 23(7), 396-410. doi:10.1145/358886.358895

### Core claims

The keystroke-level model (KLM) predicts how long an expert user will take to execute a routine task with a given method on an interactive system, by listing the low-level operations in the method and summing standard times for them. The central idea, in the authors' own words from the report version, is that "the time for an expert to do a task on an interactive system is simply the time it takes to do the keystrokes", an idea they call a little too simplistic, so the model adds operators for pointing, homing, drawing, mental preparation and system response. The model is built for designers: write down the method, code it, sum the times. It deliberately addresses only one aspect of performance, how long error-free routine tasks take experts, and not errors, learning, recall, fatigue or acceptability.

### Specifics

Evidence type: an engineering model validated against an experiment. I read the earlier Xerox PARC report version of the paper (Report SSL-79-1, AIP Memo 122, March 1979, scanned PDF at the CMU library site), not the CACM article itself, so the page numbers and any changes in the published version are unconfirmed.

Operators and times (Figure 1 of the report):
- K, a keystroke or button press: time depends on typing skill. Best typist (135 words per minute) 0.08 s; good (90 wpm) 0.12 s; average skilled (55 wpm) 0.20 s; average non-secretary (40 wpm) 0.28 s; typing random letters 0.50 s; complex codes 0.75 s; worst typist 1.20 s.
- P, pointing to a target on a display with a mouse: 1.10 s on average (range 0.8 to 1.5 s by Fitts's law), not including the button press that often follows (0.2 s).
- H, homing the hands on the keyboard or another device: 0.40 s.
- D(nD, lD), drawing nD straight segments of total length lD cm on a 0.56 cm grid: 0.9 nD + 0.16 lD s, flagged by the authors as a very restricted operator.
- M, mentally preparing to execute physical actions: 1.35 s, estimated from the experiment.
- R(t), system response: an input parameter, counted only when it makes the user wait; a response shorter than the 1.35 s M can be overlapped with it.

Heuristic rules for placing M (Figure 2): Rule 0 inserts Ms before all Ks that are not part of an argument string and before Ps that select commands; Rule 1 deletes an M if the next operator is fully anticipated (PMK becomes PK); Rule 2 deletes Ms inside a cognitive unit such as a command name; Rule 3 deletes the M before a redundant terminator; Rule 4 deletes the M before a K that ends a constant string, but keeps it for a variable string. The principle is to place an M wherever a decision must be made, except where the decision can overlap other operations. The authors say the rules are crude heuristics, and applying them is ambiguous ("fully anticipated" and "cognitive unit" are judgment calls).

Worked example: replacing a five-letter word on a line-oriented editor (POET) came to 8.4 s (4 M plus 15 K at 0.2 s), against 6.2 s on a display editor with mouse (DISPED), a difference of about two seconds.

Validation: predictions were tested against data from 28 users, on 10 systems, over 14 task types. The abstract reports a root-mean-square prediction error of 21 percent for individual tasks, and much better for collections of tasks. The report also gives simplified versions (keystrokes only; prorated mental time; constant operator time), which trade ease for accuracy.

### Replication and criticism

KLM became the commonest GOMS-family tool. John and Kieras (1996, Crossref-verified, abstract read) compare four GOMS variants, KLM, the original GOMS, NGOMSL and CPM-GOMS, on one task. Limits are built in: expert, error-free, sequential, routine execution; M placement is subjective; operator times were measured on 1970s text editors and hardware; the 21 percent error is for single tasks. A single average M of 1.35 s hides large variation, and later work (not read here) refined it. Treat the numbers as historical.

### Implications for LTF

KLM is useful as a thinking method for fly mode and checklists, not for its constants. Count what a learner must do to complete a step: a pointing movement, a key press, moving a hand between devices (homing), and a decision. Each decision (M) costs more than a keystroke, so remove decisions first: preselect the next item, default the answer, keep the next action in the same place. Homing is the hidden cost for LTF specifically: a learner moving a hand from yoke or throttle to a mouse or phone pays a homing cost on every step, so do not alternate between devices. Use KLM-style counting in design reviews to compare two layouts in operator counts, and do not publish milliseconds.

Confirmed this session: Crossref 10.1145/358886.358895 (CACM 23(7), 396-410, 1980); report SSL-79-1 pages 1-5 (title, abstract) and 8-13 (operator table, examples, rules) read at https://iiif.library.cmu.edu/file/Newell_box00072_fld05090_doc0005/Newell_box00072_fld05090_doc0005.pdf; John and Kieras abstract via OpenAlex (10.1145/235833.236054).

## card1983psychology

Card, S. K., Moran, T. P., & Newell, A. (1983). *The psychology of human-computer interaction*. Hillsdale, NJ: Lawrence Erlbaum Associates. ISBN 0898592437.

### Core claims

The book aims to lay a scientific foundation for an applied psychology concerned with the people who use interactive computer systems (Routledge's description of the 1983 volume). It presents results from the Applied Information-Processing Psychology Project at Xerox PARC, and its method is to describe the user as an information processor with measurable parameters, analyze tasks into goals, operators, methods and selection rules (the GOMS model), and give designers engineering models, among them the keystroke-level model, that predict performance before a system is built. John and Kieras (1996) say that since this book, the GOMS model has been one of the most widely known theoretical concepts in HCI.

### Specifics

Evidence type: a canonical research monograph (488 pages in the current Routledge listing) that synthesizes experiments, models and applied analyses. Structure per the publisher's table of contents: Part I, Science Base (The Human Information-Processor); Part II, Text-Editing (system and user variability, an exercise in task analysis, the GOMS model of manuscript editing, extensions of the GOMS analysis, models of devices for text selection); Part III, Engineering Models (the keystroke-level model, the unit-task level of analysis); Part IV, Extensions and Generalizations (an exploration into circuit design, cognitive skill, applying psychology to design reprise).

GOMS stands for Goals, Operators, Methods and Selection rules (as summarized by encyclopedic and course sources found by search, and by John and Kieras). Its main application in the book is text editing, though the authors extended it to other tasks.

The Model Human Processor (MHP) describes three interacting subsystems (perceptual, cognitive, motor), each with memories and a processor. I could not read the 1983 text, so the figures below are the "typical [bounds]" values as reproduced in a later paper by Jastrzembski and Charness, who cite Card et al. (1986) as the source (https://pmc.ncbi.nlm.nih.gov/articles/PMC4591021/, Table 1); the 1983 book may differ in detail. Perceptual processor cycle time 100 ms [50 to 200]; cognitive processor cycle time 70 ms [25 to 170]; motor processor cycle time 70 ms [30 to 100]; visual image store decay 200 ms [90 to 1000], capacity 17 letters; auditory image store decay 1500 ms, capacity 5 letters; working memory pure capacity 3 chunks [2.5 to 4.2], effective capacity 7 chunks [5 to 9], decay 7 seconds [5 to 226] for the general case; Fitts's law slope 100 ms/bit [70 to 120]; power law of practice exponent 0.40 [0.20 to 0.60]. Proctor and Schneider (2018) add that the MHP includes an Information Theory Principle specified as Hick's law. The same reproduced table lists two variable-rate principles: perceptual cycle time varies inversely with stimulus intensity, and cognitive cycle times decrease with greater task effort, practice, expertise and automaticity.

### Replication and criticism

The MHP's numbers come from best and worst individual performers across studies, so the bounds are wide; Jastrzembski and Charness re-estimated them for older adults and found slower values (for example perceptual cycle 178 ms, motor 146 ms, cognitive 118 ms, and a Fitts slope of 175 ms/bit), which shows the figures vary with population. The idea of effective working-memory capacity of seven chunks sits against Cowan's four (see that entry). GOMS and the KLM are limited to expert, error-free, routine performance and say little about learning or understanding. The book's influence is not in doubt, but it is a modeling program, not a body of independently replicated laws.

### Implications for LTF

The book is the source of the idea that interface decisions can be reasoned about with a small set of human constants. LTF should use the structure, not the numbers: a goal (complete the pre-flight check), operators (look, read, tap, say, key), methods (step through the list) and selection rules (skip if already done). A well-made lesson or challenge briefing makes the method the same every time, so that learners chunk it. Because the working-memory capacity in the MHP is small for new material, a beginner holding a briefing in memory while operating the sim is at the limit, so briefings should be short and be displayed beside the sim rather than memorized. The population in these studies was adults using text editors, which differs from the audience for flight training.

Confirmed this session: Open Library work OL5911100W (Card, 1983, Erlbaum, ISBN 0898592437); publisher description and table of contents at https://www.routledge.com/The-Psychology-of-Human-Computer-Interaction/Card-Moran-Newell/p/book/9780898598599; MHP values from the PMC article above, which is Jastrzembski and Charness (2007), Crossref 10.1037/1076-898x.13.4.224, *Journal of Experimental Psychology: Applied* 13(4), 224-248 (first 100,000 of 228,000 characters); Proctor and Schneider (2018) for the Hick's law principle; John and Kieras (1996) abstract. The book itself was not read.

## miller1956magical

Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. *Psychological Review*, 63(2), 81-97. doi:10.1037/h0043158

### Core claims

Miller observed that two very different measures, the span of absolute judgment (how many categories of a single stimulus dimension, such as pitch or loudness, a person can reliably identify) and the span of immediate memory (how many items can be repeated back), both landed near seven. He argued that this "bottleneck" can be stretched in two ways: by judging stimuli on several dimensions at once, and by recoding input into larger units, which he called chunks. The paper's closing section is explicitly skeptical about the number itself: he proposes to withhold judgment about whether anything deep lies behind the many sevens, and suspects it is only "a pernicious, Pythagorean coincidence" (quoted from the paper's final paragraph, as reproduced in the abstract record and at https://psychclassics.yorku.ca/Miller/). The paper is an essay on information theory in psychology, not a report of one experiment.

### Specifics

Evidence type: a theoretical review that draws on earlier experiments by others, with Miller's synthesis. Findings reported on the Classics in the History of Psychology copy:

- Absolute judgment of one dimension: pitch about 2.5 bits (roughly six categories); loudness 2.3 bits (about five); saltiness 1.9 bits (about four); position of a point in an interval 3.25 bits; size of squares 2.2 bits; other single-dimension results from 1.6 bits (curvature) to 3.3 bits (direction). Across unidimensional variables the mean was 2.6 bits with a standard deviation of 0.6, about 6.5 categories, within a total range of 3 to 15 categories.
- Multiple dimensions raise capacity but with diminishing returns: dot position in a square 4.6 bits (about 24 positions), colors of equal luminance about 3.6 bits, six auditory variables of five values each 7.2 bits (about 150 categories), and accuracy on each dimension falls as dimensions are added.
- Subitizing: counting up to five or six dots is essentially error-free, which Miller does not equate with absolute judgment.
- Immediate memory: decimal digits carry about 3.3 bits each, a span of seven digits holds about 23 bits, and English words about 10 bits each. Hayes found a span of about nine for binary digits and about five for monosyllabic words. Absolute judgment is limited by bits; immediate memory is limited by chunks. The span in chunks stays roughly constant while bits per chunk can grow.
- Recoding: in Smith's demonstration, binary digits recoded in pairs (base four) or triples (octal) let people recall far more; spans were nine for binary digits and seven for octal digits, and Smith drilling himself reached 24 binary digits with 2:1 recoding, 36 with 3:1 and about 40 with 4:1 and 5:1.

Note what the paper does not say: it does not give a design rule for lists, menus, page elements or navigation. The 1956 paper's units are bits and chunks, and the limit applies to memory span and to judging a single physical dimension.

### Replication and criticism

Cowan (2001, separate entry) argues that seven was meant "more as a rough estimate and a rhetorical device than as a real capacity limit" and that the pure capacity is about four chunks. Others put capacity in terms of resource and quality instead of item count (Ma, Husain and Bays, 2014, abstract read), and Alvarez and Cavanagh (2004) found visual memory capacity ranging from 1.6 objects for shaded cubes to 4.4 for colors depending on information load. Shneiderman (1984) calls the value of seven contested by later researchers but a good estimate. In UI practice the paper has been stretched into a rule that menus, tab bars or lists must hold seven plus or minus two items; no result in the paper supports that, and the memory-span finding does not apply to items displayed on screen and available for re-reading.

### Implications for LTF

Use Miller for what it supports: chunking. Group related information so each group is one unit, and teach learners chunks that they will reuse (for example, a named checklist section or a recurring flow) so that a larger amount fits in working memory. Do not use "7 plus or minus 2" to cap the number of nav items, lesson cards or answer options; those are visible, not remembered. Do use it as a reason not to require learners to remember unstructured sequences while operating the sim: a spoken or typed number (frequency, squawk code, heading) in chunks of two or three digits is easier to hold than a long string, and a fly-mode screen should keep the number visible instead of asking learners to recall it. Avoid giving the figure "seven" in learner-facing copy.

Confirmed this session: Crossref 10.1037/h0043158 (title, author, 1956, vol. 63, issue 2, pp. 81-97); full text read at https://psychclassics.yorku.ca/Miller/ (via a fetch summary of the findings and the closing remarks); concluding paragraph also via the OpenAlex abstract record; Ma et al. abstract via Europe PMC; Alvarez and Cavanagh abstract via OpenAlex.

## cowan2001magical

Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. *Behavioral and Brain Sciences*, 24(1), 87-114. doi:10.1017/s0140525x01003922

### Core claims

Cowan reconsiders Miller's seven. According to the abstract, Miller (1956) summarized evidence that people can remember about seven chunks in short-term memory tasks, but that number was meant more as a rough estimate and a rhetorical device than as a real capacity limit. Others have suggested a more precise limit of three to five chunks. Cowan brings together a wide variety of data suggesting that the smaller capacity limit is real, and concludes that a single, central capacity limit averaging about four chunks is implicated, along with other, non-capacity-limited sources of memory performance. He also proposes that the limit applies to the focus of attention. The article is a target article in a journal that publishes open peer commentary, so its claims were published alongside many critical responses.

### Specifics

Evidence type: a broad review that integrates experiments on many tasks, with a theoretical proposal. The abstract lays out the method for finding the limit: capacity limits are useful in analyses of information processing only if the boundary conditions for observing them can be described carefully. Four basic conditions allow chunks to be identified and capacity to be observed: (1) when information overload limits chunks to individual stimulus items; (2) when other steps are taken specifically to block the recoding of stimulus items into larger chunks; (3) in performance discontinuities caused by the capacity limit; and (4) in various indirect effects of the capacity limit. Under these conditions, rehearsal and long-term memory cannot be used to combine stimulus items into chunks of unknown size, and storage mechanisms that are not capacity-limited, such as sensory memory, cannot refill the capacity-limited store during recall. The paper distinguishes the pure short-term-memory capacity limit, expressed in chunks, from compound limits obtained when the number of separately held chunks is unclear (the situation in a typical digit-span test, where chunking, rehearsal and long-term memory contribute). It also discusses why pure capacity estimates fall within a narrow range.

The practical meaning: when learners cannot rehearse or regroup (for instance when many unrelated items appear and disappear quickly), the number they can keep active is about three to five items, not seven; when they can group items into familiar units and rehearse, they can retain more material, but that is the effect of chunking and long-term memory, not a larger store. I did not read the main text, so I cannot report the experiments or the individual commentaries.

### Replication and criticism

The capacity of about four has been replicated in many tasks, but its interpretation is contested. Alvarez and Cavanagh (2004) found that visual short-term memory capacity varied from 1.6 objects for shaded cubes to 4.4 for colors across five stimulus classes, and that capacity was almost exactly predicted by the information load of each item (r-squared of .992 between visual search rate and the reciprocal of capacity); extrapolating gave an upper bound of about four or five objects, so the number depends on what the items are. Ma, Husain and Bays (2014), in a review in Nature Neuroscience, describe a proposal that working memory is a limited resource distributed flexibly among all items, so that the quality rather than the quantity of representations determines performance, which challenges both seven and four as fixed counts. Cowan's own abstract notes that the limit can only be observed under carefully stated conditions. The message is that "four" is an average under restricted conditions, not a constant to design to.

### Implications for LTF

Where Miller's number is a rhetorical flourish, Cowan's is a caution for novices: a beginner who does not yet have chunks for flight concepts has a small working memory for them. For LTF this supports several concrete choices. Introduce no more than about three or four new terms or values in one step, then consolidate before adding more. Keep the item the learner is acting on visible so memory is not the bottleneck. Do not require learners to hold two unrelated numbers in memory while looking at the sim and answering a quiz item. Use named chunks (a section name) so that familiar learners treat a block as one unit, and let them expand it. Avoid presenting this as "the rule of four" in the design system: use it as a prompt to check each screen for how many separate things the learner must track, and test with real beginners, since the figure depends on the material.

Confirmed this session: Crossref 10.1017/s0140525x01003922 (title, author, 2001, vol. 24, issue 1, pp. 87-114); abstract via OpenAlex; Alvarez and Cavanagh abstract via OpenAlex (Crossref 10.1111/j.0963-7214.2004.01502006.x); Ma et al. abstract via Europe PMC (Crossref 10.1038/nn.3655). The article body and commentaries were not read.

## newell1981mechanisms

Newell, A., & Rosenbloom, P. S. (1981). Mechanisms of skill acquisition and the law of practice. In J. R. Anderson (Ed.), *Cognitive skills and their acquisition* (pp. 1-55). Hillsdale, NJ: Lawrence Erlbaum Associates.

### Core claims

Newell and Rosenbloom studied how practice improves performance. The abstract on a CMU-hosted record (read this session) says the chapter argues that a single power law of practice describes all the empirical practice data, presents a set of practice curves, analyzes power functions mathematically and tests three classes of functions against the curves, reviews existing models of practice, and proposes the chunking theory of learning as a mechanism rooted in modern cognitive psychology. The chapter opens with the sentence "Practice, and the performance improvement that it engenders, has long been a major topic in psychology." In the form later adopted in HCI, the law says that the time to perform a task falls as a power of the number of practice trials: big gains early, slower gains later, with no sharp plateau. Quoted by Heathcote and colleagues, the authors reason that a power function implies "a learning process in which some mechanism is slowing down the rate of learning" (p. 18), which the chunking theory explains: as people form chunks of ever larger size, each remaining improvement is rarer.

### Specifics

Evidence type: a theoretical and empirical synthesis with curve fitting on published data sets, from the early cognitive-science program at Carnegie Mellon. I could not read the chapter (page counts differ across records, 1-55 in one and 1-51 in another, so I leave the page range out of the source entry); the points below are from its abstract and from the precise account in Heathcote, Brown and Mewhort (2000, full text read).

- The two functions compared: a power function with an asymptote and a preexperimental practice parameter (the four-parameter "general power function"), and a three-parameter exponential. The fit was by minimizing squared deviations in log(RT minus the asymptote). The authors report that the power function fit better than the exponential in every case, across a wide range of tasks.
- The practical form: performance time T falls as T = A + B(N + E)^-beta, where N is the trial number and E accounts for prior practice (Heathcote et al.'s Equation 1). The model human processor of Card, Moran and Newell (1983) uses the law, with an exponent estimate of 0.40 and bounds of 0.20 to 0.60 as reproduced by Jastrzembski and Charness (2007).
- Heathcote and colleagues quote one remark from the chapter: "Curve fitting without benefit of a model is notoriously a black art" (p. 23).
- Crossman's 1959 study of cigar rolling is cited by secondary sources as an early demonstration of the power form, and the law was proposed as a psychological regularity by Snoddy in 1928; I did not verify either from a primary source.
- Data: per Heathcote et al., all but one of the tasks in the survey used averaged data (over subjects, conditions or practice blocks).

### Replication and criticism

This is the most challenged claim in the lane, and see the entry on Heathcote, Brown and Mewhort (2000): the apparent power law is largely an averaging artifact, and individual learning curves are better described by exponentials. Evans, Brown, Mewhort and Heathcote (2018, Psychological Review, abstract read) state that early work favored a power law but this was shown to be an artifact of averaging over participants who are individually better described by an exponential law; their own analysis supports a delayed exponential law in a clear majority of paradigms. The chunking theory is a separate matter: it is a mechanism proposal that predicted the power law, so when the law is revised, the mechanism loses its main supporting evidence, though the idea of chunking remains independently supported (see Miller 1956 and Cowan 2001). The enduring part is the qualitative shape: rapid early improvement, then diminishing returns.

### Implications for LTF

For progress and practice design, use the qualitative curve and avoid the formula. Beginners improve fastest on the first handful of repetitions, so one or two practice attempts at a skill in the sim are worth much more than the tenth. Progress dashboards should not promise linear improvement, and a learner whose times plateau has not failed. Use averages with care: a group average curve looks smooth and power-like even when individuals improve in steps, so show each learner their own attempts and not only a class average. Do not display any "predicted attempts to mastery" number derived from a power-law fit. For challenges, it supports spaced short attempts with feedback rather than one long run, and it means that early difficulty and frustration are normal and expected, not a sign the learner is poorly suited.

Confirmed this session: Crossref 10.4324/9780203728178-6 (2013 Psychology Press reprint volume record, pp. 12-66, ISBN 9780203728178, no author fields); citation and abstract at https://aitopics.org/doc/classics:7D0BECCD (editor J. R. Anderson, Erlbaum, Hillsdale NJ, pp. 1-55, 1981); web search showing BibBase's 1981 record (pp. 1-51); Heathcote et al. full text (see that entry); Evans et al. abstract via OpenAlex (10.1037/rev0000105).

## heathcote2000power

Heathcote, A., Brown, S., & Mewhort, D. J. K. (2000). The power law repealed: The case for an exponential law of practice. *Psychonomic Bulletin & Review*, 7(2), 185-207. doi:10.3758/bf03212979

### Core claims

The paper contests the claim that the relationship between response time and practice follows a power function. Its abstract (read in the authors' pre-print copy) says the evidence for a power law is flawed because it is based on averaged data. The authors surveyed the form of the practice function for individual learners and learning conditions in paradigms that have shaped theories of skill acquisition, fitting power and exponential functions to 40 sets of data representing 7910 learning series from 475 subjects in 24 experiments. The exponential function fit better than the power function in all the unaveraged data sets, and averaging produced a bias in favor of the power function. A new function based on the exponential, the APEX function, fit better than a power function with an extra pre-experimental practice parameter. Their conclusion: the best candidate for the law of practice is the exponential or APEX function, not the power function.

### Specifics

Evidence type: a quantitative survey and reanalysis of many existing data sets, with mathematical arguments about curve fitting.

- Why averaging matters: it has been known for about fifty years that an average curve need not have the form of the individual curves (the paper cites Estes 1956, Sidman 1952 and Kling 1971), and recent work shows linear averaging produces a composite systematically biased toward the power function. All but one of the tasks Newell and Rosenbloom examined used averaged data.
- Conceptual difference: an exponential implies a constant relative learning rate (proportional to what is left to learn); a power function implies a rate that slows hyperbolically with practice, so a mechanism is slowing learning. The relative learning rate of the general power function is beta/(N+E); for the exponential it is the constant alpha.
- Two technical criticisms of Newell and Rosenbloom: (1) they compared a three-parameter exponential with a four-parameter power function, and a large preexperimental-practice parameter lets the power function mimic an exponential in a finite practice range (though with badly behaved estimates); (2) they fit by minimizing squared deviations in log(RT minus asymptote), which is undefined for any sample below the asymptote and is more problematic in noisy individual data. The authors refit a subset of Newell and Rosenbloom's data by ordinary least squares: for averaged data the power function still fit better, but for the two unaveraged series (times to win and to lose a card game) the exponential fit better.
- The APEX function: E(RT) = A + B e^(-alpha N) N^(-beta), a four-parameter function that nests both power and exponential. Its relative learning rate is alpha + beta/N, decreasing like a power early in practice and approaching a nonzero constant later. It is used as a referee: if it beats the power function, an exponential component is supported.

### Replication and criticism

The result has been influential and has itself been refined. Evans, Brown, Mewhort and Heathcote (2018) summarize it as showing that the early power-law support was an artifact of averaging, then argue that even power and exponential forms both assume a steadily slowing speedup and propose a delayed exponential law that fit a clear majority of paradigms (abstract read). The authors also note a caveat from Estes (quoted in the paper, personal communication): the form of the practice law does not constrain theory very much, because many different models can mimic particular curve shapes. A secondary search summary reported different counts of data sets; the figures above are from the paper's own abstract and take priority. The tasks in the survey are speeded laboratory tasks (visual search, memory search, and the like), not rich real-world skills.

### Implications for LTF

The lesson is mainly about averages. LTF's dashboards and analytics will aggregate attempt times and scores across learners; the aggregate will look like a smooth power-law curve whether or not any learner's curve looks like that, so aggregate curves should not be used to tell an individual what to expect, or to design pacing for everyone. Per-learner displays should show actual attempts and be robust to step-like jumps and plateaus. For content design, the qualitative message is unchanged: early repetitions give the largest gains, and improvement slows. Do not hard-code a learning-rate model (for example to schedule review) from a power-law assumption; use learner-level data or simple rules. In user research, prefer individual trajectories over means when reporting how long it takes beginners to master a widget or task.

Confirmed this session: Crossref 10.3758/bf03212979 (title, authors, 2000, vol. 7, issue 2, pp. 185-207); full text of the authors' pre-print read at https://users.cs.northwestern.edu/~paritosh/papers/KIP/power-law-repealed.pdf (abstract, introduction, practice functions and technical criticisms); Evans et al. abstract via OpenAlex (Crossref 10.1037/rev0000105).

## stevens1957psychophysical

Stevens, S. S. (1957). On the psychophysical law. *Psychological Review*, 64(3), 153-181. doi:10.1037/h0046162

### Core claims

Stevens argued that the relation between the physical magnitude of a stimulus and its perceived magnitude is, for many sensory continua, a power function, not the logarithmic function that Fechner had derived from Weber's law. A secondary summary of the paper (search result, not the full text) puts the general law as equal stimulus ratios producing equal subjective ratios, a first-order approximation being a power function with an exponent that differs by continuum. He also divided continua into two classes: Class I, prothetic, continua concerned with "how much" (such as loudness), and Class II, metathetic, continua concerned with "what kind and where" (such as pitch), and he suggested the two classes differ in their psychological processes and in how just-noticeable differences relate to the subjective scale.

### Specifics

Evidence type: a theoretical and empirical synthesis built on direct scaling (magnitude estimation) by Stevens's laboratory and others. I could read an excerpt of the section on the two classes of continua, on the Terhardt site (http://terhardt.userweb.mwn.de/ter/ref/Stevens1957a.html), and an encyclopedic account of the law and its exponents; I did not read the whole paper.

From the excerpt: four functional criteria distinguish the classes. (1) The subjective size of the just-noticeable difference is unequal on Class I continua and roughly equal on Class II. (2) Category rating scales are typically concave downward on Class I and possibly linear on Class II. (3) Time-order error is expected on Class I and generally absent on Class II (Stevens suggests calling the latter a "category effect"). (4) Hysteresis appears, for example in bisection judgments of loudness depending on the order of presentation.

From the encyclopedia entry on psychophysics (https://www.encyclopedia.com/social-sciences-and-law/sociology-and-social-reform/sociology-general-terms-and-concepts/psychophysics), a secondary source, which attributes exponents to Stevens's work: Weber's law holds that the Weber fraction, delta I over I, is constant along a continuum; under good conditions it is about 1 percent for brightness, 2 percent for loudness and 20 percent for saltiness, and the law fails near absolute threshold. Fechner assumed all just-noticeable differences are equal subjective units, so sensation grows as the logarithm of the stimulus. Stevens's power law has apparent magnitude growing as a power of stimulus magnitude, with exponents that depend on the continuum and conditions: loudness 0.6 (binaural) and 0.54 (monaural); brightness 0.33 (5 degree target, dark-adapted eye) and 0.5 (point source); electric shock 3.5; and apparent length of a projected line of light 1.0. Magnitude estimation has observers assign numbers in proportion to perceived magnitude; magnitude production has them adjust the stimulus to match numbers.

The upshot for display design: perceived magnitude is not proportional to physical magnitude for most continua. An exponent below 1 compresses (loudness, brightness), above 1 expands (shock), and near 1 means the perceived quantity tracks the physical one (length).

### Replication and criticism

Power-law scaling was widely replicated in magnitude estimation experiments, and it supplanted the logarithmic law in much of psychophysics. It has well-known critics. The encyclopedia entry lists that Fechner's equal-jnd assumption is a powerful if questionable assumption and that, historically, the log law disagreed with observers' direct loudness judgments. A search summary also reports that critics say Stevens's magnitude-estimation approach provides neither a direct test of the power law nor of the assumptions behind the method; I did not trace that criticism to a primary source. The exponents in the encyclopedia entry vary with stimulus conditions (for example two different brightness values for different targets), so no single value should be treated as a constant.

### Implications for LTF

LTF's instrument widgets (airspeed, altitude, vertical speed, engine gauges) and color encodings are display scales, and psychophysics says perceived change depends on the ratio of the change to the current level, not its absolute size. Practical rules: for a quantity that must be compared (two bar lengths, two needle angles), use length or position, which are perceived about proportionally (exponent near 1 for length), rather than brightness or area of a shape, which compress. For thresholds and warning states, make the change large in relative terms (a step change in hue and shape, not a slightly brighter color), and expect the same absolute change to be noticed in dim themes and bright themes differently. When animating counters or progress, expect equal steps in the displayed number to feel unequal if the quantity is logarithmic (for example speed ratios). Design the light and dark themes so that tonal steps have equal perceived steps, which in practice means testing with a perceptual color space (see the color lanes) instead of equal numeric steps. Do not cite a specific exponent in design documents.

Confirmed this session: Crossref 10.1037/h0046162 (title, author, 1957, vol. 64, issue 3, pp. 153-181); excerpt from the Terhardt reference page; exponents, Weber fractions and criticisms from the encyclopedia.com psychophysics entry fetched this session; a search summary for the prothetic and metathetic classes. The paper was not read in full.

