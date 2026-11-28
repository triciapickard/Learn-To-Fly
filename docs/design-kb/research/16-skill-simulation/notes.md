# Lane 16: Skill acquisition and simulator training

Evidence base for how beginners acquire a perceptual-motor and cognitive skill, how practice should be organized, and what the research says about using a simulator (and in particular a low-cost PC simulator) to train toward an aircraft. Each section follows the brief: core claims, specifics, replication and criticism, implications for LTF.

## fitts1967human

Fitts, P. M., & Posner, M. I. (1967). *Human performance*. Belmont, CA: Brooks/Cole.

### Core claims

Fitts and Posner's short textbook is the standard citation for the three-phase description of skill learning: a cognitive phase, an associative phase and an autonomous phase. The central idea is that a learner does not simply get faster at the same activity. The nature of the activity changes. Early on the learner works out what the task is and what to do, in a verbal and effortful way. Later the learner links the right responses to the right cues and removes errors. Finally the skill runs with little demand on attention, which frees capacity for other work. It is a textbook synthesis of mid-century experimental psychology, not a single experiment, so the evidence type is expert synthesis of laboratory and applied studies.

### Specifics

The stage names come from Fitts's earlier 1964 chapter, and the 1967 book carries the idea to a wide audience. Anderson (1982), who builds a formal theory on them, gives a compact description of the stages in his own words, which I read in full text. In the first stage, the cognitive stage, the learner makes an initial encoding of the skill that is good enough to produce the behavior "to at least some crude approximation", and Anderson notes that verbal mediation is common, with the learner rehearsing the information needed to carry out the skill. In the associative stage performance is smoothed out, errors in the initial understanding are gradually found and removed, and the verbal mediation drops out. In the autonomous stage improvement is gradual and continues, often indefinitely. Anderson also reports that the log-log straight-line "power law" of practice has been widely discussed with reference to Fitts and Posner (1967), so the book is one of the sources for the shape of the practice curve.

The three stages are descriptive categories, not sharply timed events, and I found no fixed hours for them. The practical content is the pairing of each stage with what instruction should do: in the cognitive stage the learner needs a clear picture of the goal and the component actions, in the associative stage the learner needs practice and informative feedback, and in the autonomous stage the learner needs continued practice with the demands of real conditions.

### Replication and criticism

The stage model has lasted because it is easy to apply and because later theory could be mapped onto it. Anderson's ACT account maps the three stages onto a declarative stage, a knowledge-compilation stage and a procedural stage. Critics point to three limits. First, the stages are not strictly separable: a single learner is typically at different stages for different parts of a complex task, so the model describes components, not whole courses. Second, the model is qualitative. It names phases but does not predict when a particular learner will move on, which is why Anderson and others built quantitative accounts. Third, Wulf and Shea (2002) argue that principles drawn from simple tasks may not carry over to complex skills. I did not find a single replication study to cite for the 1967 book, so the safe summary is that the framework is widely used as a broad description and weakly tested as a set of sharp stage boundaries.

### Implications for LTF

Use the three stages as a content-design checklist, not as a user label. Early lessons for a complete beginner sit in the cognitive stage: they should name the goal of a maneuver, show the parts in order and let the learner talk through them. A lesson page that gives a short, ordered "what you are doing and why" for each step fits that stage. Challenges that follow should push toward the associative stage by asking for the same maneuver repeatedly and returning specific feedback on errors. Fly mode should offer verbal rehearsal as optional, since the learner needs the sim in front of them and little text. Dashboards should not claim to detect "autonomous" performance, since the framework gives no measurable threshold; show consistency across attempts instead. Do not put hours on the stages in copy. User-facing copy should use plain phrases such as "learning what to do", "getting smooth" and "doing it without thinking about each step".

Confirmed this session: Open Library records for the work (OL6554807W: Human performance, Brooks/Cole, Belmont, Calif., 1967, 162 pages; OL29344953W lists Fitts and Posner as authors) via openlibrary.org/search.json and the editions endpoint; stage descriptions read in the full text of Anderson (1982) (declarative and procedural stage account, and his description of Fitts's cognitive, associative and autonomous stages, plus the citation of Fitts and Posner 1967 for the power law); web search summary of the model's usual statement.

## anderson1982acquisition

Anderson, J. R. (1982). Acquisition of cognitive skill. *Psychological Review, 89*(4), 369-406. https://doi.org/10.1037/0033-295X.89.4.369

### Core claims

Anderson proposes a theory of how a cognitive skill develops over tens or hundreds of hours of practice. The theory has two major stages. In the declarative stage, facts about the domain are stored and interpreted by general procedures, so performance is slow and demands working memory. In the procedural stage, the knowledge is embodied directly in procedures (condition-action rules called productions), so performance is fast and does not require retrieving facts one at a time. The bridge between them is knowledge compilation. He ties the framework to Fitts's three stages and writes that the three main sections of his article correspond to those stages. The paper is a theory paper in the ACT framework, supported by simulations and by reference to empirical results on geometry, programming, language and memory tasks, so the evidence type is a computational theory with partial empirical support.

### Specifics

The opening of the paper states a scale: it says it takes at least 100 hours of learning and practice to acquire any significant cognitive skill to a reasonable degree of proficiency, that a student learning to program has achieved only a very modest facility after 100 hours, and that learning a primary language takes tens of thousands of hours. This is the framing for why theory must handle long time scales. The abstract describes the mechanisms. Knowledge compilation has two subprocesses. Composition collapses sequences of productions into single productions. Proceduralization embeds factual knowledge into productions, so the learner stops looking things up. After a skill is procedural, further learning "tunes" it through three processes: generalization (productions apply more widely), discrimination (productions become more selective) and strengthening (productions that work get stronger and run faster).

The paper also addresses the log-linear power law of practice: a plot of the logarithm of time to perform a task against the logarithm of amount of practice approximates a straight line. Anderson notes this is a surface contradiction to a multiple-stage, multiple-mechanism theory, since a smooth power law seems to suggest a single process. He argues that strengthening together with changes in the number of steps produce something that looks like a power function to a good approximation, though not a pure power law.

### Replication and criticism

ACT is a long-running research program, and its successors revised the detail. The detailed claims of the 1982 paper have been revised many times: the production-compilation mechanism, the account of strength and the power law all changed in later versions. A recurring criticism of the power law of practice is that averaging over learners and trials can produce a power function even when individual learning follows another form, and later authors in other lanes have debated this; I did not verify those papers here and make no claim about their numbers. A second concerns scope: the theory was developed for symbolic cognitive skills such as proof and programming, and a pilot's skill also includes perceptual-motor control. A third is that it says relatively little about which practice is best. Schmidt and Bjork (1992) show that conditions that speed gains in training can reduce lasting learning, which a pure strengthening story does not capture. Even so, the declarative-to-procedural account has strong support from the broad pattern that novices verbalize and experts do not.

### Implications for LTF

The most useful consequence is that explicit, fact-style knowledge ("what the airspeed band means", "what the checklist items are") is the early form of the skill, and the goal of practice is to turn it into procedure. Lessons should therefore put the facts first and the challenges second, and the challenge should require use of the facts without showing them. A page that always displays the fact beside the task keeps the learner in the declarative stage. In fly mode, a short procedural prompt is appropriate early on and should fade, in line with the fading-support idea in Wulf and Shea (2002). Quizzes should test application ("which control change fixes this?") more than recitation, because recitation tests the declarative form only. Progress dashboards can use time-to-complete and error counts across repeated attempts, and should expect a steep early gain followed by flatter gains, so that a plateau is not read as failure. The 100-hour figure concerns cognitive skills in general, so it must not appear in LTF copy as a flight claim.

Confirmed this session: Full text of the article read from a scanned PDF (Gwern.net 1982-anderson-2.pdf), including the abstract, the opening paragraph, Anderson's description of Fitts's three stages and the section "Procedural Learning: The Power Law"; Crossref record (DOI 10.1037/0033-295x.89.4.369, Psychological Review 89(4) 369-406, 1982).

## ericsson1993role

Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. *Psychological Review, 100*(3), 363-406. https://doi.org/10.1037/0033-295X.100.3.363

### Core claims

The article proposes that differences between expert and ordinary performers reflect a long period of deliberate practice, not innate talent as the main cause. The authors argue that in most domains people begin effortful practice regimens in childhood, and that individual differences even among elite performers are closely related to assessed amounts of deliberate practice (this is the content of the abstract as reported by the search summaries I read). In their own words as quoted by Macnamara and colleagues, "high levels of deliberate practice are necessary to attain expert level performance", and their framework could "provide a sufficient account" of the main facts about exceptional performance without needing scarce innate ability. The evidence is two retrospective studies of musicians plus a theoretical framework, so it is correlational evidence from small samples.

### Specifics

Deliberate practice is defined, in the description given by Macnamara, Hambrick and Oswald (2014), as engagement in structured activities created specifically to improve performance in a domain. Macnamara and Maitra (2019) add that the 1993 theory described deliberate practice as activities designed by a teacher, while the measure actually used was practice alone, which did not require teacher design. I did not read the 1993 text itself, so any further list of defining features should be checked in the original before it is used.

The violin study, as described in the full text of the replication by Macnamara and Maitra (2019) which I read, used three groups of 10 students from the Music Academy of West Berlin: a "best" group, a "good" group and a group of future music teachers who were less accomplished. Structured interviews asked for weekly practice hours alone since starting the instrument, and these were summed to cumulative totals. The replication reports the original cumulative practice alone to age 18 as 7,410 hours for the best, 5,301 for the good and 3,420 for the least accomplished, with a reported effect size of eta squared 0.48. Macnamara and colleagues (2014) report averages to age 20, with the best violinists above 10,000 hours, which is why papers quote different totals. The popular "10,000 hours" rule comes from the best violinists' total at age 20 and was taken up in Gladwell's Outliers. Ericsson and Harwell (2019), as summarized in a search result, say the popular rule is not what the paper claims.

### Replication and criticism

This paper is one of the most cited and most disputed in the lane. Critics raised three points. First, the data are retrospective self-reports, open to memory error and bias. Second, the definition shifted over time: Macnamara and Maitra document that Ericsson's later writing sometimes requires a teacher and sometimes allows self-designed practice. Third, correlation does not show cause: Sternberg, quoted in Macnamara et al. (2014), suggested deliberate practice may be a proxy for ability, since people stop doing what they do not do well.

The most direct test is the 2019 preregistered, double-blind replication with 39 violin students (13 per group, from the Cleveland Institute of Music and Case Western Reserve University). In it, the best group did not accumulate significantly more practice alone to age 18 than the good group (p = 0.364), and the best group's current weekly practice was lower than the good group's. The authors conclude the original's complete correspondence between practice and level was not replicated. Deliberate practice explained about 26 percent of variance in the replication against 48 percent in the original. The safe reading is that practice matters, but amount alone does not explain who becomes elite.

### Implications for LTF

LTF's learners are not elite performers, so the gap between "practice matters" and "practice explains everything" matters less than the useful core: practice that is structured, aimed at a specific weakness and followed by feedback beats unfocused repetition. LTF should not use the 10,000-hour idea in copy. Challenge design should make each attempt a targeted attempt at one thing (hold altitude within a band, flare at the right moment) with feedback afterward. The app can ask for a goal at the start of each fly-mode session and show a result at the end. Progress dashboards should avoid an hours-flown score as the headline and show targeted-skill improvement over attempts instead. Copy should not promise that effort alone guarantees mastery.

Confirmed this session: Crossref record for DOI 10.1037/0033-295x.100.3.363 (Psychological Review 100(3) 363-406, July 1993); web search summary of the abstract and of the violinist study; full text of Macnamara and Maitra (2019) at pmc.ncbi.nlm.nih.gov/articles/PMC6731745 for the original and replication numbers; full text of Macnamara, Hambrick and Oswald (2014) for the quoted passages. The 1993 article itself was not read.

## macnamara2014deliberate

Macnamara, B. N., Hambrick, D. Z., & Oswald, F. L. (2014). Deliberate practice and performance in music, games, sports, education, and professions: A meta-analysis. *Psychological Science, 25*(8), 1608-1618. https://doi.org/10.1177/0956797614535810

### Core claims

The authors ask whether the deliberate-practice view of expertise is supported across all the major domains where it has been tested. Their answer is that deliberate practice is important but explains much less of the variance in performance than the original theory claimed, and how much it explains depends strongly on the domain. The evidence type is a meta-analysis of observational (correlational) studies, which cannot show that practice causes performance and is subject to the quality of the practice estimates.

### Specifics

Inclusion criteria required a measure of the accumulated amount of an activity interpretable as deliberate practice, with the study referring to at least one publication on deliberate practice by Ericsson and colleagues, and a measure of performance reflecting skill in the domain. The search found 9,331 potentially relevant articles and identified 88 studies that met all criteria. These included 111 independent samples, 157 effect sizes and a total sample of 11,135 participants (all from the full text I read). The effect size was the correlation between accumulated deliberate practice and performance.

The headline results: deliberate practice explained 26 percent of the variance in performance for games (r = .51), 21 percent for music (r = .46), 18 percent for sports (r = .42), 4 percent for education (r = .21) and less than 1 percent for professions (r = .05, not significant). Task predictability moderated the effect: 24 percent of variance for highly predictable activities (r = .49), 12 percent for moderately predictable ones (r = .35) and 4 percent for activities of low predictability (r = .21). The authors give "handling an aviation emergency" as their example of a low-predictability environment, fencing as moderate and running as high. Method of assessing practice also mattered: studies using a retrospective interview gave 20 percent of variance (r = .45), retrospective questionnaires 12 percent (r = .34) and studies using a log kept as practice happened 5 percent (r = .22). The authors reason that logs are probably more accurate because people do not remember the past perfectly.

### Replication and criticism

Critics argue the meta-analysis used a broader definition of deliberate practice than Ericsson's, counting many kinds of domain-specific experience, and a music-focused reanalysis by other authors used stricter inclusion rules (both from a search summary; I did not read these papers). Hambrick, Macnamara and Oswald later published a review arguing the definition of deliberate practice has been inconsistent. The same group ran a sports-specific meta-analysis (Macnamara, Moreau and Hambrick, 2016, found in Crossref) to test moderators that cannot be tested across domains. A fair summary is that the broad finding, that practice explains a modest to moderate share of variance and less in unpredictable domains, has held up in the sense that no one disputes that other factors matter. Whether the true share is nearer one fifth or nearer one half depends on how deliberate practice is defined and measured, and the argument is still live.

### Implications for LTF

Two points matter for an app that teaches flying. First, the lower explained variance for low-predictability tasks, with aviation emergency handling given as the example, argues against a drill-only design for decision skills. Practice of rare events needs varied scenarios, not repetition of one. Second, the practice-measure result warns against building progress features on self-reported hours. If LTF shows a practice total, it should come from logged sessions, because retrospective estimates inflate the relationship. Copy that tells beginners that "everyone can reach X with enough hours" has no support in this literature and should be avoided. Also, because the range of domains runs from games to professions, a flight-training app should avoid claiming a particular share of success comes from practice. A safe framing is: structured practice with feedback helps, and so do good instruction and prior knowledge. Dashboards could display attempts and improvement in targeted skills while saying nothing about talent.

Confirmed this session: Crossref abstract for DOI 10.1177/0956797614535810 (26, 21, 18, 4 and under 1 percent); full text read from the author-hosted PDF (www.psychologie.uzh.ch McNamara.PsychSci.25.2014.pdf) for the 88 studies, 111 samples, 157 effect sizes, 11,135 participants, moderator values and the predictability examples; web search for the criticism and follow-ups.

## schmidt1992new

Schmidt, R. A., & Bjork, R. A. (1992). New conceptualizations of practice: Common principles in three paradigms suggest new concepts for training. *Psychological Science, 3*(4), 207-218. https://doi.org/10.1111/j.1467-9280.1992.tb00029.x

### Core claims

The authors argue that typical training procedures are far from optimal because they assume that whatever speeds improvement during practice also gives the best long-term performance and the best transfer. The review shows, with evidence from both motor and verbal learning, that this assumption is often wrong. Manipulations that maximize performance during training can be detrimental in the long term, and manipulations that slow acquisition can support the long-term goals. The evidence is a synthesis of laboratory experiments from three paradigms.

### Specifics

Two problems with the common view are named. Problem 1: acquisition performance is an imperfect indicator of learning, because variables can have temporary performance effects that disappear when the manipulation is removed. Problem 2: acquisition and retention are not separable, so the amount learned should be measured on delayed retention or transfer tests, performed without the practice manipulation. They note that trainers rarely see learners on the retention tests that are the real goal, and that learners can mislead instructors: in a keyboard study by Baddeley and Longman the schedules subjects preferred produced the least learning.

Three illustrations follow.

1. Scheduling of tasks. In Shea and Morgan's (1979) arm-movement study, blocked practice was better during acquisition, but after 10 minutes and 10 days random practice was better, whether the retention test itself was blocked or random. At minimal practice levels blocked practice gave better retention, which reversed with more practice. The verbal analogue is spacing: in Landauer and Bjork's name-learning experiments, the condition with zero items between tests gave about 95 percent on acquisition tests but 33 percent on the final retention test, whereas uniform spacing of 4 or 5 items gave about 43 percent in acquisition but 41 percent at final retention, and an expanding sequence of intervals gave 48 percent. In a face-name experiment a name presented once and tested four times was retained better than one presented five times (66 vs. 58 percent), so tests are potent learning events.
2. Feedback. In Schmidt, Young, Swinnen and Shapiro's (1989) study, feedback was given after every trial or in a summary after 5 or 15 trials. Errors in acquisition grew as the summary got longer, but on the 10-minute and 2-day no-feedback retention tests the 15-trial group did best. A 50 percent faded condition did better than 100 percent feedback on retention, with differences growing as the interval grew.
3. Induced variability. In Catalano and Kleiner's coincident-timing task, variable practice at four target speeds had larger error in acquisition (52 vs. 38 ms) but was more accurate on novel speeds.

The common principle offered is that the best-retention condition adds "difficulty" in acquisition that forces retrieval or reconstruction. The authors caution it is too extreme to say any difficulty helps: they note Shea and Upton's finding that interpolated processing tasks degrade both practice and retention.

### Replication and criticism

The three phenomena have been replicated widely: contextual interference (random over blocked practice), spacing and the testing effect, and reduced feedback frequency. Qualifications have emerged. Wulf and Shea (2002) show that for complex motor skills random practice is not clearly beneficial, especially for novices, and that frequent feedback may be better than reduced feedback. Guadagnoli and Lee (2004) offer the challenge point framework to explain such reversals by skill level and task difficulty. The paper's own boundary applies: the difficulty must engage the processing needed later, and not every difficulty helps.

### Implications for LTF

This is the most important single reference for a learning product that is used next to a simulator. First, do not judge a lesson design by how smoothly learners perform inside it. Performance during a guided lesson is an imperfect indicator of learning, so LTF should build delayed, unaided checks: a challenge a day later that asks for the maneuver with no prompts, or a quiz that appears on the next visit. Second, avoid making fly mode a constant coach. The feedback result suggests that feedback after every attempt helps during practice and can hurt unguided performance later, so fly mode could summarize across several attempts, or reduce prompts as the learner improves. Third, vary practice: change wind, altitude or starting position across attempts rather than repeating one setup, once the learner can handle the basics. Fourth, order lessons so that earlier topics return interleaved, not in a single block. Fifth, learners may prefer the easy arrangement, as in the keyboard study, so a preference survey is not evidence of learning.

Confirmed this session: Crossref record and abstract for DOI 10.1111/j.1467-9280.1992.tb00029.x (Psychological Science 3(4) 207-218); full text read from the author-lab PDF on bjorklab.psych.ucla.edu (saved scan, text extracted), including the figures quoted above.

## salmoni1984knowledge

Salmoni, A. W., Schmidt, R. A., & Walter, C. B. (1984). Knowledge of results and motor learning: A review and critical reappraisal. *Psychological Bulletin, 95*(3), 355-386. https://doi.org/10.1037/0033-2909.95.3.355

### Core claims

The review argues that earlier work on knowledge of results (KR, information about the outcome of a movement) had confounded two different effects: the temporary effect on performance while KR is present, and the relatively permanent effect on learning that shows when KR is later withdrawn. Once the two are separated, a different picture appears. The proposal that grew from this is the guidance hypothesis: KR guides the learner toward the correct response, which improves performance during practice, but if it is given too often the learner can come to depend on it, which degrades learning as measured when KR is removed. The evidence is a literature review and reinterpretation of dozens of experiments, so it is expert synthesis with clear testable predictions, rather than a new experiment.

### Specifics

I could not read the full text, so the specifics here come from the abstract-level summaries and from papers I did read that describe it. Relative frequency of KR is the proportion of trials on which KR is given (a later paper quotes the review's definition as the absolute frequency of KR divided by total trials). Summary KR is KR given about a whole set of trials after the set is finished. The learning measure the review urges is a no-KR retention or transfer test after a delay, because performance during practice mixes learning with the guiding effect of feedback. The review's practical conclusion, as relayed by later authors, is that a reduced relative frequency of KR slows acquisition when KR is present but supports better retention, because learners process their own intrinsic feedback and become less dependent on augmented information.

Schmidt and Bjork (1992), which I read in full, describe the same idea through experiments: with feedback after every trial versus after 5 or 15 trials, errors during practice grew with summary length but the 15-trial group did best on 10-minute and 2-day retention. They also note that "this important distinction has been mostly ignored since the late 1950s" and cite Salmoni et al. (1984) in the area of feedback and skill learning. Wulf and Shea (2002) cite the review as the source of the general conclusion that error-detection mechanisms are built through practice.

### Replication and criticism

The guidance hypothesis stimulated hundreds of experiments. The results have been mixed in a way that matters for applied work. A review of later work I read in search results says reduced-frequency findings were followed by several studies showing learning advantages of reduced feedback, but that replication has been mixed, and that the guidance hypothesis and a competing "feedback usefulness" hypothesis (Wulf, 1994) could not be confirmed in several studies. The most important qualification comes from Wulf and Shea (2002): in complex skills such as the ski simulator task, learners given 100 percent concurrent feedback learned at least as well as, and in one study better than, learners given reduced feedback, and the optimal length of a feedback summary was shorter for more complex tasks. The guidance hypothesis therefore holds best for simple tasks with one outcome, and it does not justify withholding feedback from beginners on complex tasks.

### Implications for LTF

LTF can use the review's distinction in two places. Measurement: whenever LTF wants to know whether a learner has learned something, test without help and after a delay. A guided pass in fly mode shows that guidance is working, not that the skill is learned. Feedback design: do not default to the maximum amount of feedback. After a challenge attempt, give a result and one specific pointer, and let the learner try again before showing more. For a complete beginner on a complex maneuver, such as a landing, the evidence from Wulf and Shea says frequent feedback can still be right in the first sessions, so reduce it gradually as the learner's attempts become consistent. Present a "summary after several attempts" view in the dashboard rather than only a per-attempt verdict. Finally, provide a no-help mode that learners can choose, labeled in plain terms, since dependence on prompts is a risk the review identifies. LTF must not claim a specific number of attempts or percentage of feedback is optimal without testing.

Confirmed this session: Crossref record for DOI 10.1037/0033-2909.95.3.355 (Psychological Bulletin 95(3) 355-386, 1984); web search summaries of the abstract and of later papers on the guidance hypothesis; full texts of Schmidt and Bjork (1992) and Wulf and Shea (2002), which describe and cite the review. The review itself was not read.

## wulf2002principles

Wulf, G., & Shea, C. H. (2002). Principles derived from the study of simple skills do not generalize to complex skill learning. *Psychonomic Bulletin & Review, 9*(2), 185-211. https://doi.org/10.3758/BF03196276

### Core claims

The review argues that much of what the motor learning field believed about practice came from simple laboratory tasks with one degree of freedom, little practice and modest demands on attention and memory, and that these principles do not reliably carry over to complex skills. Some factors have opposite effects on simple and complex skills, and others matter mainly for complex skills. The explanation is a load account, in the abstract's words: situations with low processing demands benefit from practice conditions that increase the load and challenge the performer, whereas practice conditions that result in extremely high load should benefit from conditions that reduce the load to more manageable levels. The evidence is a narrative review of experiments, many by the authors, using tasks such as a ski simulator and a stabilometer (balance platform).

### Specifics

Complexity is not defined by a single measure. The authors judge tasks complex if they generally cannot be mastered in a single session, have several degrees of freedom and perhaps tend to be ecologically valid, and simple if they have one degree of freedom, can be mastered in one session and look artificial. They give a student driver as a thought experiment: learning to drive might not benefit from practicing in rush hour traffic, though simple skills might benefit from extra demands.

Contextual interference: the random-practice advantage is robust for simple laboratory tasks, but results for complex skills are mixed. The review reports a kayak roll study and serving studies that favor alternation, but also studies where blocked practice was better for low-skilled or young learners, such as tennis groundstrokes for low-skilled students and Frisbee throwing by children aged 5 to 6. Feedback: for simple tasks, reduced frequency and long summaries helped retention, but for the ski simulator task 100 percent concurrent feedback proved most effective for learning, and the optimal summary length was shorter for more complex tasks (a summary of 5 trials beat 1 or 15 in a simulated batting task). Feedback organization: switching the feedback focus every trial (serial) was worse than blocked feedback in the ski simulator work. Further sections review physical guidance, observational and dyad practice (which they find more uniformly effective for complex tasks) and focus of attention, where an external focus on the movement effect beat an internal focus on body movements.

### Replication and criticism

This is a review, so its strength depends on the studies it covers. Many are from the same laboratory, a limit the authors implicitly acknowledge by calling for more research with complex tasks. A 2014 study I read in search results cites it for the point that random practice is generally effective for simple tasks and for complex ones once learners are experienced and memory demands are lower. The external-focus line of work grew into a large literature. I did not verify its later meta-analyses here, so I make no claim about its effect sizes. The core message, that boundary conditions depend on task complexity and learner skill, was later formalized in the challenge point framework (Guadagnoli & Lee, 2004).

### Implications for LTF

Flying is a complex skill by the authors' own criteria: it cannot be mastered in one session, has many degrees of freedom and is ecologically valid. LTF therefore must be cautious about importing simple-task advice such as "make it harder" or "withhold feedback" for beginners. In early lessons, reduce load: one control at a time, steady conditions, and frequent specific feedback, then add variation and reduce prompts as the learner stabilizes. Observation matters: short demonstration clips or a replay of a good attempt, followed by the learner's own attempt, suit complex skills, and pairing two learners to discuss attempts could be a later feature. Attention advice: wording for instructions should name effects ("keep the nose on the horizon mark") instead of body actions ("push forward 2 inches on the yoke"), which suits both the text and the in-sim coaching. Fly mode should keep instruction light so that the learner's attention stays outside the app, on the sim display.

Confirmed this session: Crossref record for DOI 10.3758/bf03196276; full text read from a PDF copy (coachingvb.com PDF of Psychonomic Bulletin & Review 9(2), 185-211) including abstract, complexity definition, CI, feedback and focus-of-attention sections; PLOS ONE paper at pmc.ncbi.nlm.nih.gov/articles/PMC4069194 for its citation of the review.

## hays1992flight

Hays, R. T., Jacobs, J. W., Prince, C., & Salas, E. (1992). Flight simulator training effectiveness: A meta-analysis. *Military Psychology, 4*(2), 63-74. https://doi.org/10.1207/s15327876mp0402_1

### Core claims

This is the best-known quantitative summary of whether flight simulators improve training outcomes. The main finding, as reported in the abstract summaries I read, is that using simulators together with aircraft training consistently improved training for jet aircraft compared with training in the aircraft alone. The authors found that the average effectiveness of performance-paced training (where trainees move on when they reach a standard) was greater than that of lock-step training, and that adding motion cuing added little to the training environments for jets. For helicopters, the number of experiments was too small for a conclusion. The evidence type is a meta-analysis of military and some civil simulator-training experiments, with all the limits of that: mostly large, expensive simulators, mostly trained pilots at a training stage, and a small number of usable studies.

### Specifics

The 1992 article follows a 1990 Naval Training Systems Center technical report by Jacobs, Prince, Hays and Salas (Crossref DOI 10.21236/ada228733, "A Meta-Analysis of the Flight Simulator Training Research"). That report's abstract, as quoted in a search result I read, says its search located 247 articles, research reports and technical reports, of which 26 had sufficient information for statistical meta-analysis: 19 involved jet pilot training and 7 involved helicopter pilot training. The same abstract says outcomes appeared to depend on the type of task and on how much and what kind of training was given. I could not confirm from the 1992 article itself whether it reuses exactly the same counts, so the counts should be attributed to the 1990 report. A companion paper by the same team on requirements for future research (Int. J. Aviation Psychology 2(2), Crossref DOI 10.1207/s15327108ijap0202_5) was not read.

A later review that I saw in a search result describes the 1992 findings as favoring combined simulator and aircraft training over aircraft-only training in a large share of the studies for inexperienced students; I did not confirm the exact proportion, so I do not quote it. The comparison of interest, as the abstract summaries describe it, is simulator-plus-aircraft training against aircraft-only training.

### Replication and criticism

The meta-analysis is cited widely, but several cautions apply. First, small numbers: only a small part of the located literature could be used, and for helicopters too few. Second, the abstract-level summaries I read describe flight simulator research in general, much of it from military research reports (I did not confirm the device types), so they say little on their own about what a consumer PC simulator can do. Third, the comparison is mostly against aircraft-only training, which cannot say whether the simulator hours were worth their cost, and the next entries on transfer effectiveness ratios (Roscoe) address that. Fourth, search results list later meta-analyses on simulator motion by other authors, which I did not read and make no claim about.

### Implications for LTF

For LTF, the main use of this paper is an evidence-based reason to believe that simulator time can improve actual flight training when it is part of a structured course, and a warning about what the evidence does not cover. The result that performance-paced training beat lock-step training supports a progress design where learners advance on demonstrated criterion, not on completed pages. LTF challenges can serve as the criterion: "complete this challenge to unlock the next lesson". The result on motion cuing suggests that the lack of a motion platform is not a reason to doubt the value of sim-based practice, but it should not be stated as a certainty for beginners, since the studies were not about complete novices on consumer hardware. Copy should avoid claiming that LTF replaces instructor-led flight training or that sim time will cut a specific number of hours; no such number is supported here. Instead say that the research supports using a simulator alongside real training, and the app should recommend working with an instructor for flight in an aircraft.

Confirmed this session: Crossref records for the 1992 Military Psychology article (DOI 10.1207/s15327876mp0402_1, 4(2) 63-74), the 1990 NTSC report (DOI 10.21236/ada228733) and the 1992 IJAP paper; web search summaries of the 1990 report abstract and of the 1992 findings (jets, motion, performance-paced training, helicopters). Neither the 1992 article nor the 1990 report full text was accessible (publisher and DTIC pages returned errors), so findings are from abstracts and secondary summaries.

## wightman1985parttask

Wightman, D. C., & Lintern, G. (1985). Part-task training for tracking and manual control. *Human Factors, 27*(3), 267-283. https://doi.org/10.1177/001872088502700304

### Core claims

The review asks whether teaching a complex task in pieces before the whole task improves learning efficiency or reduces cost, with a focus on tracking skills for manual control (the kind of continuous control found in flying). Part-task training is defined in the abstract as practice on some set of components of the whole task as a prelude to performance of the whole task. The authors discuss transfer of training and the methodology for assessing it, explain three procedures (segmentation, fractionation and simplification) and summarize ways of reintegrating the parts into the whole. The evidence type is a narrative review of experimental studies, mostly with simulated tracking tasks and some flight tasks.

### Specifics

The three procedures are the useful vocabulary. Segmentation divides a task along spatial or temporal lines, so the parts are practiced one after another and then chained. Fractionation separates a task into components that are normally performed at the same time, such as the control of two axes, and trains them separately. Simplification changes the task so that it is easier while keeping the whole task intact (my gloss: for instance slower dynamics or fewer things to track). (The definitions of segmentation and fractionation come from a later paper by Shute that I read in a search result, describing these terms; the abstract confirms the three names and that procedures for reintegrating parts are summarized.) The abstract adds that the review emphasized transfer of training and discussed crucial features of the methodology and of means of assessing transfer.

The reasoning behind part-task training is that learning efficiency may improve if the learner can concentrate on one component, and that simulators or other devices used for components can be cheaper than the full task. A review summarized in search results says that in a majority of cases part training was found to be less efficient than whole-task training, citing Wightman and Lintern among others. Another account notes that the recommendation to use part-task training applies to a segmented task, whose parts are performed sequentially, but not to a fractionated task whose components are performed together.

### Replication and criticism

The distinction between segmentation and fractionation has held up. The clearest later test is Wickens, Hutchins, Carolan and Cumming's meta-analysis of 37 transfer studies (another entry in this lane), which found that part-task training generally produced negative transfer when the parts were performed concurrently in the whole transfer task but not when the parts were performed in sequence, which fits the pattern in the 1985 review. The meta-analysis also found that part-task training was more successful when the integrated parts were varied in the priority they were given. So the 1985 review's cautions have support, though the review itself is older and mostly covers laboratory tracking tasks. I did not read the full 1985 text, so I cannot say which individual studies it weighed.

### Implications for LTF

LTF is a part-task trainer by nature: lessons break flying into pieces and a challenge picks one piece. Applying this review: segment a procedure along time. For example, teach takeoff roll, rotation and initial climb as separate steps in order, then chain them. Be careful with fractionation. Practicing pitch control alone, then bank control alone, does not guarantee that the learner can do both at once, so after any fractionated lesson include a challenge that requires both together, at a reduced difficulty if needed. Use simplification through the sim settings that LTF can instruct: calm winds and good visibility for early challenges, then add difficulty. Quizzes and widgets that isolate one instrument (an airspeed indicator widget) are part-task practice for reading and must be followed by whole-scan practice in the sim. In the dashboard, show part-task skills and "put it together" skills separately so a learner does not think that passing the parts means mastery of the whole.

Confirmed this session: Crossref record and abstract for DOI 10.1177/001872088502700304 (Human Factors 27(3) 267-283); web search summaries on segmentation and fractionation (Shute 1996 excerpt) and later reviews; Crossref abstract of Wickens et al. for the link to later evidence. The 1985 article full text was not read.

## taylor1997transfer

Taylor, H. L., Lintern, G., Hulin, C. L., Talleur, D., Emanuel, T., & Phillips, S. (1997). *Transfer of training effectiveness of personal computer-based aviation training devices* (DOT/FAA/AM-97/11). Washington, DC: Federal Aviation Administration, Office of Aviation Medicine.

### Core claims

The report tests whether a personal-computer aviation training device (PCATD) saves aircraft time in instrument flight training. Its abstract says PCATD training effectiveness had received only limited testing and that a commercially available PCATD was evaluated in a transfer of training experiment. The data show savings in airplane flight time that varied from 15 percent to over 40 percent for certain training exercises, but also cases in which savings were essentially zero or even decrements as high as 25 percent. In general, transfer savings were positive and substantial when new tasks were introduced, and the PCATD can provide benefit for certain tasks while its use in some areas will not save time and will erode the overall potential to reduce costs. The evidence type is a quasi-experimental transfer study run inside a university flight course. The same team published a journal version in the International Journal of Aviation Psychology in 1999 (Crossref DOI 10.1207/s15327108ijap0904_1), which I did not read.

### Specifics

Design: 144 students in instrument courses at the University of Illinois Institute of Aviation took part (117 in a basic instrument course and 27 in an advanced one, with some students followed across both), aged 18 to 30 with private pilot training. A PCATD group trained on the device and an Airplane group trained only in the airplane. Both had to show proficiency in the airplane on each lesson before moving on, so transfer was measured as the trials and time needed in the airplane. The apparatus was a commercial flight simulation program modified for the training aircraft's performance, a 60 MHz Pentium computer, a 20-inch monitor showing six instruments, a hood and commercial flight controls, at under $10,000 for software, hardware and controls, according to the report.

Measures: percent transfer and the transfer effectiveness ratio (TER), defined in the report as the trials or time saved in the airplane by the device group compared with the airplane group, as a function of the amount of device practice (following Roscoe, 1971). Findings: new tasks showed benefit, while review of tasks already learned to proficiency mostly did not; no single instrument procedure reviewed in the basic course showed statistically significant transfer, though in the basic course's Flight Lessons 34 to 38 total lesson-time transfer ranged from roughly 20 to 40 percent with TERs from about 0.20 to 0.50. In the advanced course, review of VOR approaches after some time had passed saved about one fifth of airplane trials, suggesting the device helps for refreshing tasks after a gap. Overall the PCATD group needed a mean of 47.4 hours in the airplane to finish the rating versus 51.3 for the Airplane group, about 4 hours, though the PCATD time that produced it exceeded 12.5 hours and 14 hours in the two courses. The report notes this was inefficient and that targeting only tasks with good transfer could give the same saving with about 6.75 and 4.5 PCATD hours in the two segments.

### Replication and criticism

A later study from the same group on maintaining instrument currency with PCATDs appears in Crossref (DOI 10.1207/s15327108ijap1304_04) but was not read. Limits: students were in one program, the Fall 1994 data were unstable because of small numbers and review lessons needing few trials, and the authors themselves say percent transfer and TER were insensitive in some lessons. The result is for instrument training of private pilots, not for beginners learning basic control.

### Implications for LTF

This is the closest evidence to LTF's setting: a low-cost PC simulator used before aircraft time. It supports three design points. Prioritize new material: sim practice pays most when a task is first introduced, so LTF challenges should come right after the lesson that introduces a maneuver. Do not pad review: practicing a task already at proficiency in the sim showed little benefit, so spaced reviews should be short and tied to a gap in time. Use the sim for what it transfers: the benefit was for instrument procedures, not for everything. Copy must not claim a percentage saving or hours saved for LTF; say that research on PC-based trainers found savings for some tasks and none for others.

Confirmed this session: The full FAA report text was downloaded from rosap.ntl.bts.gov/view/dot/57582/dot_57582_DS1.pdf and read (abstract, introduction, method, discussion and summary); Crossref record of the 1999 journal version (DOI 10.1207/s15327108ijap0904_1, Int. J. Aviation Psychology 9(4) 319-335).

## gopher1994transfer

Gopher, D., Weil, M., & Bareket, T. (1994). Transfer of skill from a computer game trainer to flight. *Human Factors, 36*(3), 387-405. https://doi.org/10.1177/001872089403600301

### Core claims

The study tests whether skills learned in a complex computer game carry over to real flight performance. Cadets in the Israeli Air Force flight school who received 10 hours of training on a computer game later flew better in test flights than a matched group with no game experience. The authors argue the transfer is not a coincidence of surface similarity but follows from a skill-oriented task analysis: efficient control and management of attention under high task load are skills that can improve with proper training and generalize to new situations. The evidence type is a field experiment with a control group inside a military flight school, which is stronger than correlation but small in scale and tied to one population.

### Specifics

The abstract, which I read through Crossref, gives the design. The game was chosen because the task analysis, using models of the human processing system, argued it was relevant to flight. Two embedded training strategies were compared: one focused on the specific skills involved in performing the game, the other designed to improve the general ability of trainees to cope with the high processing and response demands of the flight task and to teach better strategies of attention control. The flight performance scores of two groups of cadets who each received 10 hours of game training were compared with those of a matched group without game experience. Both game groups performed significantly better in the subsequent test flights. The abstract also notes discussion of the effects of the different training schedules, and that the game has since been incorporated into the Air Force's regular training program.

A secondary source I found says some of the skills acquired during 10 hours of the game, called Space Fortress II there, did transfer to flight school performance. A later US Army paper, which I found but could not read because the PDF was a scan, is described in a search summary as replicating the design with a commercial game and Space Fortress in helicopter training, but I did not confirm its results and do not rely on them.

### Replication and criticism

The key caution is generalization. The result shows that training a general cognitive component (attention management under load) with a purpose-built game, tied to explicit instructions about strategy, helped cadets. It does not show that any game or any flight simulator game helps flying. A general-interest summary I saw in a search result claims commercial combat games help fighter pilots, but that summary is a news brief and the claim does not describe this study. The study was done with a selected, motivated population, so effects for civilian learners are not guaranteed. Sample size and effect sizes were not available to me beyond "significantly better", so I give no numbers. I did not verify broader literature on transfer from games to untrained tasks here, so this entry stands on the one study.

### Implications for LTF

This paper supports two LTF ideas and warns against a third. Support: a small, well-designed practice task can train a component skill, here attention allocation, which the real task needs. LTF's quick interactive widgets (scanning an instrument panel, deciding which gauge to check next, setting priorities in a short scenario) are plausible training for attention control if they are built from a task analysis of flying, and if they come with explicit strategy instruction, not just play. The study's strategy-based group is the model: tell learners how to allocate attention, then let them practice. Support, second: the game was embedded in the course, not left optional. Warning: do not add game mechanics such as points and streaks and expect flight benefits; the study's benefit followed from a match between game demands and flight demands. Copy should say what the exercise trains (for example "practice checking the airspeed indicator, altimeter and heading in turn") not that it is "like flying".

Confirmed this session: Crossref record and full abstract for DOI 10.1177/001872089403600301 (Human Factors 36(3) 387-405, 1994); web search summaries of related work. The full article was not read.

## wickens2013effectiveness

Wickens, C. D., Hutchins, S., Carolan, T., & Cumming, J. (2013). Effectiveness of part-task training and increasing-difficulty training strategies: A meta-analysis approach. *Human Factors, 55*(2), 461-470. https://doi.org/10.1177/0018720812451994

### Core claims

This meta-analysis tests two common ways of making a hard task easier to learn: breaking it into parts (part-task training, PTT) and starting easy then getting harder (increasing-difficulty training, ID). The background is cognitive load theory: strategies that reduce the intrinsic load of a task during training free resources for learning. The authors report that both strategies have offered only mixed success, and the meta-analysis explains when each works. Evidence type: a meta-analysis of 37 transfer studies, using two effect measures.

### Specifics

All of this is from the abstract in Crossref. Two effect measures were used: a transfer ratio analysis (ratio of treatment transfer performance to control transfer performance) and a Hedges' g analysis (standardized difference between treatment and control group means). Results: PTT generally produced negative transfer when the parts were performed concurrently in the whole transfer task, but not when the parts were performed in sequence. Variable-priority training of the whole task (practicing the whole task while shifting which component gets emphasis) was a successful technique. ID training was successful when the increases were implemented adaptively but not when increased in fixed steps. For both strategies, experienced learners benefited less, or suffered more, which the authors say is consistent with cognitive load theory. The conclusion in the abstract: PTT can be successful if the integrated parts are varied in the priority they are given to the learner, ID is successful if the increases are adaptive, and the fundamental elements of cognitive load theory are confirmed.

### Replication and criticism

A meta-analysis is only as good as the studies in it, and these 37 were mostly laboratory and simulated tasks. The authors tie their results to cognitive load theory, but a pattern like "adaptive beats fixed" could also arise from other causes, such as adaptive schedules giving each learner the right amount of challenge, as the challenge point framework (Guadagnoli & Lee, 2004) would predict. Other lanes cover critiques of cognitive load measurement, so I do not repeat those. The result for part-task training agrees with the earlier review by Wightman and Lintern (1985) on segmentation versus fractionation, and the finding that experienced learners benefit less matches the expertise-reversal literature. The same group produced companion papers; Crossref lists one on cognitive load and error-prevention training methods, which I did not read.

### Implications for LTF

The two clearest rules for an app: (1) when a skill is split into parts, make sure the parts are not ones that must be done together in the real task, or follow them with whole-task practice where emphasis moves between parts. For example, teach "hold altitude" and "hold heading" together as one task with changing emphasis ("this time focus on altitude"), not as two separate drills that never meet. (2) Increase difficulty adaptively. LTF can do this because challenges produce scores: if a learner meets the standard on two attempts in a row, raise the difficulty (add crosswind or turbulence); if they struggle repeatedly, hold or lower it. Fixed ladders of the same difficulty increases for everyone perform worse in this evidence. Also respect the experience effect: learners who say they have prior experience (another sim, real lessons) should be offered a skip-ahead or a diagnostic challenge, and should not be forced through supports meant for novices. The effect sizes are not given here, so copy should not quote any.

Confirmed this session: Crossref record and complete abstract for DOI 10.1177/0018720812451994 (Human Factors 55(2) 461-470; online 2012-07-20, print April 2013). The full text was not read.

## lintern1990display

Lintern, G., Roscoe, S. N., & Sivier, J. E. (1990). Display principles, control dynamics, and environmental factors in pilot training and transfer. *Human Factors, 32*(3), 299-317. https://doi.org/10.1177/001872089003200304

### Core claims

The experiment examines which design features of a simulated landing display and its control dynamics help a complete beginner learn and transfer landing skill. The finding is that transfer to a conventional "contact" display was better after training with pictorial displays than with symbolic displays, and better with normal rather than reduced bank control order. It adds interactions with crosswind and with predictive augmentation. The evidence type is a quasi-transfer experiment with flight-naive participants, so it is direct evidence about beginners and about the training value of simulator design choices.

### Specifics

The abstract reports 64 flight-naive men in a fractional factorial quasi-transfer design, examining the effects of four display factors, one control response factor and one environmental factor on acquisition and transfer of aircraft landing skills. An additional 12 trainees served as experimental controls. Transfer was measured from each of 64 training conditions to a criterion condition with a conventional inside-out pictorial contact display, normal simulator control dynamics and a 5-knot crosswind. Results: transfer was better after training with pictorial displays than symbolic displays, and with normal rather than reduced bank control order. Interactions of crosswind with predictive augmentation and with bank control order showed that for some conditions transfer benefited from training with predictive augmentation and from training without crosswind.

The same research group later studied scene detail. A search summary of Lintern, Taylor and Koonce (1997) reports that beginners trained with a low-detail scene transferred better than those trained with a moderate-detail scene, and that augmented guidance helped transfer with the low-detail scene but degraded it with the moderate-detail scene. I did not read that paper, so treat the point as secondary.

### Replication and criticism

The experiments are old and used a specific simulator, and a fractional factorial design tests main effects efficiently but with limited power for high-order interactions, so the interactions deserve caution. The principle that a training display need not copy the real display, and that sometimes a simplified or augmented display trains better, has been influential in the flight-simulation literature, and the same logic appears in the debate in the medical field about fidelity (Hamstra et al., 2014). The study is about landing in a particular simulator and says nothing about desktop PC set-ups. Whether the same display factors matter with a modern simulator and graphics is untested here.

### Implications for LTF

Beginners can learn from a display that is not a perfect copy of the cockpit, and added guidance can help in some conditions and hurt in others. For LTF's widgets, this means a simplified instrument or a labeled schematic can be a good training display for first exposure, as long as later practice moves toward the real display the learner will see in the sim. Do not assume more realistic is better in a teaching diagram. Keep augmented cues (a predicted-path hint, a target band) in early challenges and plan to remove them. The crosswind interaction suggests starting practice without a crosswind for some maneuvers; add it after the learner has the basic skill. The study measured transfer to a conventional display, which is the model for LTF's final checks: test in the unaided condition the learner will actually face in Microsoft Flight Simulator.

Confirmed this session: Crossref record and complete abstract for DOI 10.1177/001872089003200304 (Human Factors 32(3) 299-317); web search summary of the 1997 scene-detail follow-up. The full text was not read.

## roscoe1971incremental

Roscoe, S. N. (1971). Incremental transfer effectiveness. *Human Factors, 13*(6), 561-567. https://doi.org/10.1177/001872087101300607

### Core claims

Roscoe proposes a way to judge a training device by what it saves, accounting for how much time you spend in it. The abstract describes a new method of measuring transfer of learning, in which the effectiveness of successive increments of training on one task, measured by the relative incremental savings in learning a second task, is postulated to be a negatively decelerated function of the time devoted to pretraining. He postulates that the relationship, inferred from aircraft-pilot training, applies in different forms to all educational experiences, which would allow formal programs to be evaluated in terms of incremental cost effectiveness. The evidence type is a methodological proposal with a conceptual argument, plus pilot-training data from related studies.

### Specifics

The measures, as the FAA report on PC training devices (Taylor et al., 1997) summarizes them, are percent transfer and the transfer effectiveness ratio (TER). Percent transfer is a conventional measure but, as Taylor et al. note after Roscoe, fails to consider the amount of practice in the training device. The TER is the ratio of the trials or time saved in the airplane by the device group, compared with the airplane-only group, as a function of the number of trials or time in the device. Roscoe's incremental version asks what each added block of device time saves, and the postulated curve is negatively decelerated: each extra hour of pretraining saves less than the one before. A companion study by Povenmire and Roscoe (1973, Crossref DOI 10.1177/001872087301500605) gave four groups of student pilots 0, 3, 7 or 11 hours in a Link GAT-1 ground trainer along with flight lessons in an airplane, and the search summary I read says average flight times to reach the private pilot criterion fit the negatively decelerated function.

### Replication and criticism

Roscoe's TER and incremental method are standard and are still used, as the 1997 PCATD study shows, which used TER explicitly. The negatively accelerated shape is supported in that one flight-training series, but the strong claim that it applies to all educational experiences is a postulate. Two limits follow from the definition (my reasoning, not a cited criticism): a device can show a high TER at small usage and still have little total value, and cost per hour differences between device and aircraft must be considered separately. In the PCATD study, rental cost was $69 per hour for the airplane and $5 per hour for the device, which is the kind of comparison the method aims to support. A further limit is that TER measured with a fixed criterion in the aircraft does not say whether skills learned in the device are retained or which parts of the skill transfer.

### Implications for LTF

LTF should think in terms of marginal return. If sim practice has diminishing returns, then there is an amount of practice per skill beyond which the next hour is better spent elsewhere (on another skill, or in an aircraft with an instructor). The app can therefore avoid designs that reward grinding the same challenge: after the learner shows consistent success, say so and offer the next skill. The dashboard can plot attempts against score for each skill and show the flattening, giving the learner a visible reason to move on. Because the method values saved real-aircraft time, LTF's best long-term evaluation would be a comparison of learners who used LTF with those who did not on the number of instructional hours to a milestone; that is an idea for later evaluation, not a claim. Copy must not state any hour savings.

Confirmed this session: Crossref record and abstract for DOI 10.1177/001872087101300607 (Human Factors 13(6) 561-567, December 1971); definitions of percent transfer and TER read in the FAA report DOT/FAA/AM-97/11; search summary of Povenmire and Roscoe (1973). The 1971 article text was not read.

## salas1998rational

Salas, E., Bowers, C. A., & Rhodenizer, L. (1998). It is not how much you have but how you use it: Toward a rational use of simulation to support aviation training. *International Journal of Aviation Psychology, 8*(3), 197-208. https://doi.org/10.1207/s15327108ijap0803_2

### Core claims

The article, from a special issue on simulation and training in aviation, argues that the simulation community holds mistaken or unsupported assumptions that stop it from using recent scientific findings from related fields. According to the abstract as paraphrased by the page I read, the assumptions concern two things: relying too heavily on high-fidelity simulation, and using simulation poorly to teach complex skills. The title gives the thesis: what matters is how a simulator is used, not how much realism it has. The article aims to examine these assumptions and encourage dialogue between behavioral scientists and engineers. The evidence type is an expert position paper that draws on the training literature, not a new experiment.

### Specifics

What I could confirm is limited to the abstract and to secondary accounts. The abstract opens by noting that one of the most remarkable changes in aviation training over recent decades is the use of simulation, which has made training more realistic, safer, cost-effective and flexible. The specific list of assumptions and the recommended practices are not in the abstract, so I do not state them from the paper. A course-quiz page and a Flight Safety Foundation review of a later edited volume (Jentsch, Curtis and Salas) attribute to the authors the ideas that "more is better" is an invalid assumption, that training in a high-fidelity simulator does not by itself ensure training success, and that instructional design (practice, feedback, scenario design) must come with the simulator for its advantages to be used. These are secondary and the quiz page is weak, so they are leads, not facts about the paper. A later paper in my search results cites it for the point that high-fidelity simulators can be prohibitively expensive or inaccessible.

### Replication and criticism

As a position paper it does not have a replication record. Its main claim, that fidelity is not the main driver of training effectiveness, is supported by the transfer studies in this lane: the PCATD study (Taylor et al., 1997) found positive transfer from a low-fidelity device for some tasks, Lintern and colleagues (1990) found that a simplified display could train better than a realistic one in some conditions, and Hamstra et al. (2014) argue in medicine that fidelity is poorly defined and not clearly tied to effectiveness. Against that, high-fidelity devices may well be justified for tasks that need realism, and the abstract I read does not say fidelity never matters. A fair reading is that fidelity matters only to the extent that the features it adds are needed for the skill being trained, and that this match is a design decision, not a default.

### Implications for LTF

The headline is permission and discipline: LTF can teach on a consumer simulator and a web page without apology, if its design is grounded in what each skill requires. Permission: do not spend effort on a replica cockpit widget or photorealistic art that does not support a learning goal. Discipline: every widget and challenge should state what skill it trains, what feedback the learner gets and how it connects to the next step. A "simulation is not training" mindset means the app should provide structure around the sim: objectives, a briefing before the attempt, specific feedback after it and a plan for the next attempt. Fly mode should be treated as the place where the learner uses Microsoft Flight Simulator, and the app's job is the instructional wrapper. Avoid copy that implies the sim by itself will teach flying ("just fly more").

Confirmed this session: Crossref record for DOI 10.1207/s15327108ijap0803_2 (Int. J. Aviation Psychology 8(3) 197-208, July 1998); abstract content via the UCF STARS record (stars.library.ucf.edu/facultybib1990/2436), read as a paraphrase; web search for secondary accounts. The article's full text was not read.

## hamstra2014reconsidering

Hamstra, S. J., Brydges, R., Hatala, R., Zendejas, B., & Cook, D. A. (2014). Reconsidering fidelity in simulation-based training. *Academic Medicine, 89*(3), 387-392. https://doi.org/10.1097/ACM.0000000000000130

### Core claims

This Perspective argues that "fidelity", the degree to which a simulator resembles the real thing in appearance, feel and behavior, is a misleading organizing concept for simulation-based education. The authors, drawing on their experience conducting a systematic review of simulation-based health professions education, say fidelity is inconsistently defined and applied, that the same simulator can look high or low fidelity depending on which features are emphasized, and that fidelity requirements vary by training task. Several empirical studies, they note, suggest fidelity is unrelated to educational effectiveness. The evidence type is an expert perspective article informed by a systematic review. It is about health professions, not aviation, but the argument is general and the source of its examples is the same literature that includes flight simulators.

### Specifics

They propose that other concepts better explain educational effectiveness because they shape the learning experience directly: transfer of learning (whether skills carry over to the real setting), learner engagement (how actively involved the learners are) and suspension of disbelief (how willingly learners accept the scenario as real). Recommendations: (1) stop using the word fidelity in simulation-based health professions education and use terms for physical resemblance and for functional task alignment; (2) shift emphasis from physical resemblance to functional correspondence between the simulator and the clinical context, that is, whether the simulator reproduces the information and the actions that the task depends on; (3) focus research and design on enhancing educational effectiveness through transfer, engagement and suspension of disbelief. These are from the publisher-side description of the article that I read, not the full text.

A related randomized trial I found in search results (Massoth and colleagues, BMC Medical Education 2019) allocated 135 fourth-year medical students to a high-fidelity group (n = 67) or low-fidelity group (n = 68) in an advanced life support course. Video-rated performance was similar across groups, theoretical knowledge improved in both without a difference between them, and the high-fidelity group rated its own performance too highly. It is a single-center study with a modest sample, and its title claims more than its performance data show.

### Replication and criticism

The paper is a perspective, so its claims can be tested only through the studies it cites. Its position fits other evidence in this lane, and the authors do not claim fidelity never matters; I did not review evidence on when added realism does pay off. The word "fidelity" has been defined in several ways in the wider literature (physical, functional, psychological), and the paper is one voice in that debate. A weakness is that "functional correspondence" can itself be hard to specify without a task analysis, which is the kind of analysis Taylor et al. (1997) describe in the PCATD report, where the simulator's features are matched to the learning requirements of the task.

### Implications for LTF

LTF's design vocabulary should avoid the single word "fidelity". For each widget or challenge, record two things: what physical features it reproduces (looks like the real instrument) and what functional demands it reproduces (needs the same information and decision as the real task). Teaching widgets, such as an interactive airspeed indicator, should aim first at functional match: the learner reads the same quantity and makes the same decision, even if the art is simplified. Engagement and suspension of disbelief matter for a self-paced web app: a short scenario that sets a plausible situation ("you are 600 feet above ground level on final approach and sinking") will draw learners in more than an abstract exercise, and the app should not undermine it with a mismatch to the sim. The medical trial's overconfidence result is a warning: more realistic training can make learners feel more prepared than they are, so LTF's progress claims should rest on checks rather than on how real the experience felt.

Confirmed this session: Crossref record for DOI 10.1097/acm.0000000000000130 (Academic Medicine 89(3) 387-392, March 2014); summary of the abstract at mayoclinic.elsevierpure.com/en/publications/reconsidering-fidelity-in-simulation-based-training; web search for the related trial (PMC6341720). The Perspective's full text was not read.

## guadagnoli2004challenge

Guadagnoli, M. A., & Lee, T. D. (2004). Challenge point: A framework for conceptualizing the effects of various practice conditions in motor learning. *Journal of Motor Behavior, 36*(2), 212-224. https://doi.org/10.3200/JMBR.36.2.212-224

### Core claims

The framework tries to unify scattered findings about practice conditions by describing them in terms of two variables, the learner's skill level and the difficulty of the task. Its central claim is that learning depends on the information available from performance, and that this information should be optimized along functions relating task difficulty to skill. Too little challenge gives too little information to learn from, and too much overwhelms the learner. The best difficulty, the optimal challenge point, differs by skill level and moves as skill improves. This is a theoretical article, with the conceptual argument supported by published experiments on contextual interference and knowledge of results, so it is expert theory, not a new experiment.

### Specifics

The abstract (read via a McMaster record in search results) describes the effects of practice conditions, such as contextual interference and knowledge of results, within the constraints of skill level and task difficulty. Secondary accounts I read, one an encyclopedia summary whose details I could not check against the paper, give the definitions: nominal task difficulty is the difficulty provided by the task independent of the performer and environment; functional task difficulty is how challenging the task is for a particular person in particular conditions. The optimal challenge point is the level of functional difficulty at which a learner of a given skill level learns best. Examples of predictions the secondary account attributes to the framework: the advantage of random practice over blocked practice is greatest for low-difficulty tasks, low contextual interference suits beginners and higher interference suits more skilled performers, and frequent feedback is more useful for high-difficulty tasks while less frequent feedback is better for low-difficulty ones. If these hold, they reconcile Schmidt and Bjork (1992), where difficulty helped on simple tasks, with Wulf and Shea (2002), where complex tasks benefited from reduced load.

### Replication and criticism

I found follow-up tests with mixed support. A 2015 experiment that varied nominal and functional difficulty reported that both affected performance on tests of learning, and another 2015 paper described itself as supporting the framework. A 2018 visuomotor study reported that the effect of task difficulty on mental workload, not nominal difficulty, affected motor learning, and that the framework applies only when some error is present. A common criticism is that difficulty is not explicitly defined, so functional difficulty cannot be measured directly, which makes the optimal challenge point hard to locate and the framework hard to falsify; another source notes that the "expert" category may be questionable. Search results also include a 2021 extension for sports coaching that builds on the framework. Evidence strength is moderate: plausible and widely used, but most support is indirect.

### Implications for LTF

This framework is the best available rationale for adaptive difficulty. LTF does not need the exact curve; it needs the idea that each learner has a band of challenge where practice is productive, and that the band moves. Concretely: let challenges have levels (wind, visibility, tolerance bands), start each learner low, and move up after a pattern of success, as Wickens et al. (2013) found adaptive increases to work better than fixed ones. Use signals such as consecutive attempts within tolerance, and time to complete, to estimate where the learner sits. Make feedback richer on hard tasks and early in learning, then thinner. Avoid prescribing difficulty by lesson number only. The risk of too much challenge deserves care in copy and design: a learner who fails repeatedly should see a path to an easier version, not a red failure screen. Because functional difficulty cannot be measured directly, LTF should treat its difficulty estimates as heuristics and check them with actual progress data.

Confirmed this session: Crossref record for DOI 10.3200/jmbr.36.2.212-224 (Journal of Motor Behavior 36(2) 212-224, June 2004); abstract text via the McMaster experts record in search results; encyclopedia and journal-abstract search summaries for definitions and follow-ups (marked as secondary above). The 2004 article's full text was not read.

## dreyfus1986mind

Dreyfus, H. L., & Dreyfus, S. E. (1986). *Mind over machine: The power of human intuition and expertise in the era of the computer*. New York: Free Press.

### Core claims

The book presents a five-stage account of skill acquisition (novice, advanced beginner, competent, proficient, expert) and, as its subtitle indicates, sets human intuition and expertise against the computer; the philosophical claim is that expertise is intuitive and not reducible to explicit rules. An earlier form of the model appeared in a 1980 report from Berkeley's Operations Research Center by Stuart and Hubert Dreyfus, and the book adjusts it to end with expertise. It is a philosophical and phenomenological argument illustrated with examples such as pilots and chess players, not an experimental study. It is included here because the model is very widely used in professional training, which makes it important to evaluate.

### Specifics

Peña's review (cited below) gives the stages. Novices follow context-free rules and need monitoring to conform to them. Advanced beginners gain real-world experience and begin to understand context, learning "instructional maxims". Competent performers develop emotional attachment and learn guidelines, and competence comes only after considerable experience. Proficient performers use intuition to recognize what is happening and develop personal rules for planning. Experts act fluidly and largely unconsciously on implicit knowledge, though they may fall back on analysis when intuition fails. Dreyfus later added master and practical wisdom stages. Peña notes the model was derived from experts such as pilots who handle direct, well-defined problems.

### Replication and criticism

The model has weak empirical support and several criticisms. Peña's review of cognitive science evidence concludes the model may partly explain the acquisition of some skills, but doubts it for clinical reasoning, noting that it rests on phenomenology and cites little scientific evidence, that medical students can generate hypotheses before extensive experience (undercutting the claim that novices ignore context), and that sophisticated skills involve both explicit and implicit knowledge. Gary Klein, an established researcher of expert decision making, argues in an essay that the model "runs into trouble from the very start": it starts novices on rules, but chess novices and fighter pilots preparing for combat do not follow tactical rules; training developers who use the model invent tactical rules where none exist, which trainees must later unlearn; and the experience does not reliably move people from procedures to intuition. He cites Gobet and Chassy (2009) as finding no empirical support for the stages and sees growth as continuous, built from a repertoire of patterns. Klein still agrees on the direction toward intuitive expertise.

### Implications for LTF

Do not build the product around the five stages or label learners with them. The evidence does not support sharp stages, and the claim that novices should start with context-free rules is the part Klein challenges most directly. LTF content for beginners that is rule-heavy (long checklists to memorize before touching the controls) is a risk; instead, give learners enough context and examples to see why a step matters and let them practice patterns. At the same time, the model's observation that early learners need a simple, concrete starting structure is consistent with the cognitive stage in Fitts and Posner and the declarative stage in Anderson, so a short procedure is fine when it is tied to a situation. Checklists in the flight context are a safety-critical procedure and are covered in other lanes. For dashboards, show competencies and consistency, not "you are a Competent pilot". Marketing copy should avoid "from novice to expert in N lessons" language.

Confirmed this session: Open Library records (work OL4299942W "Mind over machine", Free Press, New York, 1986, 231 pages, ISBN 0029080606) via openlibrary.org; Peña's review at pmc.ncbi.nlm.nih.gov/articles/PMC2887319 (fetched summary); Klein's essay on psychologytoday.com (fetched summary); web search for the 1980 report. The book itself was not read.
