# Lane 31: Research methods and evidence

Notes for judging design evidence. Each section reports what the source says, how well it has held up, and what it means for Learn to Fly (LTF). Figures appear only where they were confirmed this session, with the confirming source named.

## openscience2015estimating

Open Science Collaboration (2015), "Estimating the reproducibility of psychological science", Science 349(6251), aac4716. DOI 10.1126/science.aac4716.

### Core claims

The Open Science Collaboration (OSC) organized a large group of labs to repeat published psychology experiments as closely as possible and asked a plain question: how often does a published finding show up again? The headline answer is that reproducibility was far lower than the published record implied. Replication effects were about half the size of the original effects, and most originals that had been declared statistically significant did not produce a significant result the second time.

The paper is also a methodological statement. It argues that a single published significant result is weak evidence that an effect is real and stable, and that the strength of the original evidence predicts replication better than who ran the study.

### Specifics

Confirmed from the abstract (Europe PMC record for the DOI): the team replicated 100 experimental and correlational studies published in three psychology journals, using high-powered designs and the original materials when available. The abstract reports these results.

- Replication effects were half the magnitude of original effects.
- Ninety-seven percent of original studies had statistically significant results.
- Thirty-six percent of replications had statistically significant results.
- Forty-seven percent of original effect sizes fell inside the 95% confidence interval of the replication effect size.
- Thirty-nine percent of effects were subjectively rated by the replication teams as having replicated the original result.
- If no bias is assumed in the original results, combining original and replication data left 68% of effects statistically significant.
- Correlational tests suggested that replication success was better predicted by the strength of the original evidence than by characteristics of the original or replication teams.

Note that the project reports several different "replication rates" because there is no single agreed definition of a successful replication. Significance in the replication, overlap of intervals, subjective ratings and a pooled estimate each give a different number. A reader who quotes only one of them is choosing a story. A second, independent confirmation of the 39-of-100 failure figure comes from Cockburn et al. (2020), who describe psychology researchers as having failed to replicate 39 out of 100 studies.

### Replication and criticism

The project was itself criticized. Gilbert, King, Pettigrew and Wilson published a technical comment in Science (351(6277): 1037, DOI 10.1126/science.aad7243) arguing that the OSC paper contained statistical errors and that, once corrected, the evidence did not show a replication crisis. A search summary of that comment notes its argument that confidence intervals of the replication estimates overlap the roughly 65.5% replication rate one would expect if every original effect were true. The OSC authors responded in the same journal (DOI 10.1126/science.aad9163), and the original authors of the comment then posted further replies. I confirmed only the existence and the thrust of these exchanges through search results, not their full text, so I do not rely on their detailed numbers here.

A fair summary is that the exact size of the problem is contested, with disagreement about what counts as a failure and about differences between original and replication protocols, while the direction is not. Replication effect sizes were smaller than original ones, which is what selective publication of significant results would produce. This is evidence of a large coordinated replication attempt, not a single experiment, and it covers psychology only. Whether HCI shows the same pattern is an open question, which Cockburn et al. (2020) and Greenberg and Buxton (2008) discuss from different angles.

### Implications for LTF

LTF will draw on psychology findings in several places: spacing and retrieval practice, multimedia learning, attention and color. The practical lesson is a rule for the design knowledge base: a single study with a small sample and p just under .05 is a lead, not a rule. Prefer findings with several independent replications, large samples or meta-analyses, and treat effect sizes in the original paper as probably inflated.

For LTF's own product decisions, the lesson is humility about small tests. If a lesson variant "wins" in a short pilot with a few dozen learners, expect the true difference to be smaller than observed or absent. Write the expected effect size down before testing (see Kohavi et al., 2009) and plan to confirm surprising wins with a second cohort before rewriting lessons.

Finally, the paper supports a citation habit for the KB: whenever a design guideline cites an experiment, record the sample size, whether it was replicated, and the effect size, so a future editor can downgrade a rule that has not held up.

Confirmed this session: Crossref record for 10.1126/science.aac4716 (title, issue, date); Europe PMC abstract for the DOI (all figures above); web search results naming the Gilbert et al. comment (DOI 10.1126/science.aad7243) and the OSC response (DOI 10.1126/science.aad9163); Cockburn et al. (2020) full-text PDF for the 39-of-100 statement.

## ioannidis2005why

Ioannidis, J. P. A. (2005), "Why most published research findings are false", PLoS Medicine 2(8), e124. DOI 10.1371/journal.pmed.0020124.

### Core claims

Ioannidis argues, with a probability model rather than new data, that for many study designs and fields a claimed research finding is more likely to be false than true. Whether a published claim is likely true depends on the study's power, the bias in how it was run and reported, the number of other teams testing the same question, and the prior ratio of true to non-existent relationships in the field being explored. A "significant" result alone does not tell you the claim is probably true.

### Specifics

The page fetched from PLoS Medicine this session gives the following. The abstract states that findings are less likely to be true when studies are small, effect sizes are small, designs are flexible, financial or other interests are strong, and many teams chase statistical significance.

The model uses the positive predictive value (PPV) of a claimed finding. With R the pre-study odds that a probed relationship is true, alpha the type I error rate and beta the type II error rate, the fetched page gives PPV = (1 - beta) R / (R - beta R + alpha) without bias. A finding is more likely true than false when (1 - beta) R > alpha. With bias u the formula adds terms and PPV falls as u rises. With n independent teams of equal power testing the same relationship, PPV falls further because at least one team will find a spurious positive.

The paper lists six corollaries, paraphrased from the fetched page.

1. The smaller the studies, the less likely findings are true.
2. The smaller the effect sizes, the less likely findings are true.
3. The greater the number and the lesser the selection of tested relationships, the less likely findings are true.
4. The greater the flexibility in designs, definitions, outcomes and analyses, the less likely findings are true.
5. The greater the financial and other interests and prejudices, the less likely findings are true.
6. The hotter a scientific field, with more teams involved, the less likely findings are true.

Worked numbers from the page include a barely significant result in a large discovery setting (100,000 polymorphisms, about 10 true) having a post-study probability of only about twelve times its tiny prior, and a simulation table in which a well-conducted, adequately powered randomized trial starting from a 50% prior is true about 85% of the time while underpowered early-phase trials are true about one time in four or less.

### Replication and criticism

This is a theoretical essay, not an empirical estimate of the share of false findings. Goodman and Greenland (2007, PLoS Medicine) criticized it, arguing that the way the model handles bias drives the number of false positives too high and that a reliable global estimate cannot yet be made (confirmed through a search summary; Ioannidis published a reply). A secondary account attributes an empirical false discovery estimate of about 14% to Jager and Leek (2014) for top medical journals, from a different method, though that account also notes the limits of that study. I did not read those papers, so treat the 14% as a pointer, not a confirmed number. The OSC replication project (2015) offered empirical support for the general worry in psychology.

So the paper is best read as a clear argument about which conditions make findings fragile, not as proof that "most" findings in any given field are false. The six corollaries, however, line up well with later empirical work on small samples and flexible analysis.

### Implications for LTF

The corollaries work as a quick screening checklist for any study cited in the KB or in lesson copy: small sample, small effect, many outcomes measured, flexible analysis, commercial interest, crowded topic. A study with several of these flags should not drive a rule.

For LTF's analytics, the model warns against dashboard fishing. If the team looks at many metrics across many learner segments and acts on whichever one moves, most of the discoveries will be noise. Pick a small number of outcomes in advance (for example challenge completion and quiz retention after a week), and treat everything else as exploratory.

It also argues for conservatism with aviation-training claims: if a source says a teaching technique "improves retention by X percent", ask whether it was one small study.

Confirmed this session: Crossref record for 10.1371/journal.pmed.0020124; PLoS Medicine article page (journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124) for abstract, formulas, corollaries and numbers; web search results on Goodman and Greenland (2007) and Jager and Leek.

## simmons2011false

Simmons, J. P., Nelson, L. D., and Simonsohn, U. (2011), "False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant", Psychological Science 22(11), 1359-1366. DOI 10.1177/0956797611417632.

### Core claims

The authors show that ordinary, well-intentioned flexibility in how a study is run and analyzed (they call it "researcher degrees of freedom") makes the real false-positive rate far higher than the nominal 5%. A researcher who decides when to stop collecting data, which measures to report, which covariates to include and which conditions to compare after seeing the data can find "significant" support for almost any hypothesis. They propose a disclosure-based remedy.

### Specifics

The abstract (Europe PMC) states that flexibility in data collection, analysis and reporting dramatically increases actual false-positive rates, that in many cases a researcher is more likely to falsely find evidence that an effect exists than to correctly find evidence that it does not, and that the proposed solution has six concrete requirements for authors and four guidelines for reviewers.

A column on the Association for Psychological Science site summarizing the paper reports these details. The simulations used 15,000 simulated samples. Checking significance and adding participants after an initial sample increased the false-positive rate by 50 percent, according to the column. Choosing among dependent variables, controlling for gender, and dropping one of three conditions each add to the rate, and using all these freedoms together produced a 61% false-positive rate, which the authors considered conservative. The column also states that a survey found roughly seven in ten psychological scientists admitted to making interim sample-size decisions.

The demonstration experiment: 20 undergraduates at the University of Pennsylvania listened to either "When I'm Sixty-Four" by the Beatles or "Kalimba", then reported their birth dates. After controlling for the father's age, participants appeared about a year and a half younger after the Beatles song (adjusted means 20.1 versus 21.5 years), F(1, 17) = 4.92, p = .040. The authors do not believe it; they ran it to show that a legitimate-looking analysis can "prove" an impossible effect. The column also shows a rewrite of the report disclosing all the flexibility, in which the effect disappears when the covariate is not used.

Among the requirements the column mentions are deciding the sample-size rule before collecting data and listing all variables collected.

### Replication and criticism

The paper is a simulation plus demonstration, so its evidence is a logical and numerical argument, and it has been widely accepted. Cockburn et al. (2020) cite related self-report evidence: over 63% of respondents in a survey of 2,000 psychologists admitted not reporting all dependent measures, and 56% admitted increasing the sample after failing to reach significance, and they note that with 15 dependent variables and only the significant ones reported, the chance of at least one false positive is 54%. Cockburn et al. also describe the p-curve, a method for checking whether a set of published studies shows signs of selective reporting, and note that statisticians question whether it can reliably tell p-hacking from other experimental flaws.

The remedies are disclosure-based, so they do not stop deliberate fraud, a limit the authors concede.

### Implications for LTF

A/B tests and lesson pilots at LTF are exactly the setting where flexibility creeps in: stopping a test the first day it looks good, trying five metrics, slicing by device or learner experience. Write a short pre-test note stating the metric, the sample rule and the stopping date, and store it with the result.

Adopt the paper's reporting habit in internal design decisions: say how many variants and measures were tried, not only the winner. When the KB cites a study, check whether the sample size was set in advance.

Confirmed this session: Crossref record (title, subtitle, volume, pages); Europe PMC abstract; APS "Fountain of Youth" column (psychologicalscience.org) for simulations and the music experiment; Cockburn et al. (2020) PDF for the survey figures and the 54% example.

## cohen1994earth

Cohen, J. (1994), "The earth is round (p < .05)", American Psychologist 49(12), 997-1003. DOI 10.1037/0003-066X.49.12.997.

### Core claims

Cohen, a statistician-psychologist known for power analysis and effect-size conventions, argues that the ritual of null hypothesis significance testing (NHST), with its mechanical yes-or-no decision around a ".05 criterion", has failed to advance psychology and has impeded it. The abstract names three near-universal errors: reading p as the probability that the null hypothesis is false, reading its complement as the probability of a successful replication, and assuming that rejecting the null affirms the theory that led to the test. His remedies are exploratory data analysis and graphs, better measurement, effect sizes with confidence intervals, and replication as the route to generalization.

### Specifics

The full text was read this session. Key arguments with the numbers the paper gives:

- What the test tells you versus what you want. NHST gives the probability of data as extreme as the observed data given that the null is true, P(D | H0). Researchers want P(H0 | D). Getting from one to the other needs a prior, as Bayes's theorem requires.
- The screening example. Cohen takes a diagnostic test for schizophrenia with an adult base rate of about 2%, sensitivity of at least 95% and specificity of about 97%. A positive test is "significant at p < .05" against the hypothesis that the case is normal, yet the probability that the case is normal given a positive test works out to about .60. His 2 x 2 table for 1,000 cases shows 50 positive results, of which 30 are false positives. A small p value therefore does not mean the null is unlikely when the base rate of true effects is low.
- The replication fallacy. Cohen cites Oakes (1986) for 42 of 70 academic psychologists believing that t = 2.7 with 18 degrees of freedom (p = .01) means a significant result would be obtained 99% of the time on repetition, and Rosenthal's point that with power around .50 the chance of three significant replications in a row is about one in eight.
- The nil hypothesis is always false. A hypothesis of exactly zero effect is essentially never true, so with a large enough sample it will be rejected. He cites Meehl and Lykken's cross-tabulation of 15 variables for 57,000 students in which all 105 chi-squares were significant, and the "crud factor" of ambient correlation among variables.
- Effect sizes in raw units. He favors regression coefficients and confidence intervals in meaningful units, with the example of a highly significant correlation between height and intelligence in 14,000 children translating into a need for 14 feet of extra height to raise IQ from 100 to 130. He also warns that standardized effect sizes depend on the variability of the sample.
- "What to Do?" Do not look for a magic replacement ritual; understand and improve your data with Tukey-style exploratory analysis and graphics; report effect sizes as confidence limits; use meta-analysis and replication.

### Replication and criticism

This is an expert argument essay with worked arithmetic, not an experiment. Its arguments are sound mathematics and have been repeated by many later authors, among them Cumming (2014), Gelman and Stern (2006), Dragicevic (2016) and the American Statistical Association statement (2016). The OSC project (2015) later provided empirical evidence that significance-driven publication yields unstable findings. The remedy that Cohen favors, confidence intervals, is not free of criticism: Dragicevic (2016) points out that using an interval merely to check whether it contains zero reproduces NHST with all its drawbacks. Cohen himself says confidence intervals are rarely reported partly because they are "embarrassingly large". Some Bayesian authors argue that intervals do not answer the question Cohen says researchers want to ask, which is why the Cockburn et al. (2020) review lists Bayesian methods among the proposals without declaring a winner.

### Implications for LTF

Two rules for the KB and for LTF analytics. First, never read "p < .05" as "the effect is real and big." Always look for the size of the difference and its interval. Second, consider base rates: if only a small share of design ideas truly help, even a "significant" win in a test is likely to be a false positive. That argues for few, well-motivated tests.

For learner-facing content, Cohen's screening example is a good model for a lesson on reading test results in aviation contexts (for example, why a positive result from an imperfect warning system is not always a real problem), but do not state any aircraft-specific figures without a source. The example could also inform an explainer widget on false alarms.

For dashboards and progress screens, report quantities in units learners and designers understand (minutes, flights completed, percent of items correct) rather than standardized scores alone.

Confirmed this session: Crossref record for 10.1037/0003-066X.49.12.997; full text PDF read (stat.cmu.edu copy at www.stat.cmu.edu/~brian/nynke/726-2007/726-402%20papers%20and%20projects/Cohen_AmerPsych_1994.pdf) for all figures and arguments; the Dragicevic and Cockburn et al. PDFs for the later commentary.

## cumming2014new

Cumming, G. (2014), "The new statistics: why and how", Psychological Science 25(1), 7-29. DOI 10.1177/0956797613504966 (published online November 2013).

### Core claims

Cumming argues that psychology, and by extension other fields, must change how it conducts research. First, to deal with an incomplete and untrustworthy literature, researchers need research-integrity practices: prespecification where possible, avoidance of selection and inappropriate data-analytic practices, complete reporting and encouragement of replication. Second, because of the severe flaws of NHST, they should move to estimation: effect sizes, confidence intervals and meta-analysis. He calls these "the new statistics". The techniques are not new, but adopting them widely would be new for many researchers.

### Specifics

The Europe PMC abstract describes an eight-step new-statistics strategy for research with integrity. It begins by formulating research questions in estimation terms ("how much?" rather than "is there an effect?"), has no place for NHST, and aims at building a cumulative quantitative discipline. I could not read the numbered list of steps this session, so I do not reproduce them.

An APS Observer piece on the paper reports these points, confirmed this session.

- A confidence interval (CI) is read as a range of plausible values for the true effect. Values outside it are relatively implausible, and plausibility falls off smoothly toward the ends. The "cat's-eye" picture makes this visible by drawing a fatter shape where a value is more plausible.
- An example of the reading: a response-time improvement of 34 ms with a 95% CI of [7, 61] means the true improvement could plausibly be anywhere from 7 to 61 ms.
- The "dance of the p values" is Cumming's illustration of how widely p varies across replications of the same experiment. His summary is that it is nonsensical to rely on p. In a reader comment he reports that p varies widely at any level of power.
- Journals have tried a no-p-values policy: the APS page notes that Rothman's journal Epidemiology published no p values during his decade as editor.

From Dragicevic's chapter (confirmed in the full text): Cumming's rule of thumb for judging two independent error bars by eye says that if two 95% CIs overlap by less than about a quarter of their average length, the difference is statistically significant at .05. Dragicevic cautions that it is a convenient reference point and should not be used as a binary rule.

### Replication and criticism

This is a tutorial and advocacy paper, with strong support among methodologists, but not unanimity. Cockburn et al. (2020) record that there is no consensus on what should replace NHST, that some researchers still defend NHST and dichotomous testing in their place, and that others say calls to abandon NHST distract from the replication problem because there is no evidence yet that abandoning NHST will improve replicability. The journal Basic and Applied Social Psychology went further, banning dichotomous statistics, including confidence intervals. Dragicevic warns against using CIs as significance tests in disguise. The ASA statement (2016) lists estimation among several acceptable approaches without insisting on one.

Evidence for the benefits of estimation is mostly argument and illustration so far, not randomized comparisons of research quality.

### Implications for LTF

For any LTF measurement (quiz scores, time to complete a challenge, retention across a week), report an estimate with an interval, in plain units. A line such as "median 12 minutes faster, interval 3 to 21" prompts better decisions than "significant".

Where traffic is small, which is likely for a niche flight-training product, intervals will be wide, and that is information: it says the data cannot yet distinguish the options. Accept ties and choose on other grounds (cost, clarity, accessibility).

Teach the habit in the KB: every claim entry should state the effect, its uncertainty and the sample, and flag when only a p value was reported.

Confirmed this session: Crossref record (title, subtitle "Why and How", volume 25, issue 1, pages 7-29); Europe PMC abstract; APS Observer page (psychologicalscience.org/observer/theres-life-beyond-05); BITSS page; Dragicevic (2016) PDF for the overlap rule; Cockburn et al. (2020) PDF for the debate over alternatives.

## kohavi2009controlled

Kohavi, R., Longbotham, R., Sommerfield, D., and Henne, R. M. (2009), "Controlled experiments on the web: survey and practical guide", Data Mining and Knowledge Discovery 18(1), 140-181. DOI 10.1007/s10618-008-0114-1.

### Core claims

Randomized controlled experiments on live websites (A/B tests and variants) are the best scientific design for establishing a causal link between a change and user behavior, and the authors, with experience at Amazon, Microsoft, DuPont and NASA, give a practical guide to running them trustworthily. They argue that organizations learn more by listening to customers than to the "Highest Paid Person's Opinion" (HiPPO), that small changes can have large and surprising effects, and that experimentation systems must be carefully built to avoid invalid results.

### Specifics

The full text was read this session. Notable content:

- Terminology. A control and treatment are randomly assigned live users. The Overall Evaluation Criterion (OEC) is the quantitative measure of the experiment's objective, ideally agreed in advance and not short-term-focused. An A/A test splits users into two identical groups to validate the system.
- Surprising results. A checkout-page example where the redesign cost a site about 90% of its revenue, and an Amazon cart-recommendations prototype that a senior vice-president opposed but that won in an experiment.
- Sample size. A rule of thumb n = 16 sigma^2 / delta^2 per variant gives 80% power (21 instead of 16 for 90%). Their example says detecting a 5% change in revenue needs over 409,000 users, and a Bernoulli conversion-rate example needs under 122,000.
- Run lengths. Run at least one or two weeks, then in multiples of a week to capture day-of-week effects; run at 50%/50% for maximum power (a 99%/1% split takes about 25 times longer); use ramp-up and automatic abort for risky treatments.
- Pitfalls. Robots can skew results so that an A/A test shows far more than 5% false positives; novelty and primacy effects mean some experiments must run for weeks, and the analysis can be repeated on new users only; underpowered tests are a common mistake; a "no significant difference" result does not prove no difference; multiple comparisons need adjustment, which lowers power; interactions are rarer than assumed but should be watched.
- Speed matters. They cite reported experiments linking added delay to lost revenue or queries, so a losing variant may simply be slower.

### Replication and criticism

This is practitioner experience, not a controlled study of experimenting, and it reflects very large sites where samples are huge. Its power formulas are textbook statistics. The paper's limits are mostly about scale: it assumes traffic that LTF will not have, and its advice on instrumenting and validating the randomization applies even to small sites.

Its call to bold experimentation sits uneasily with Greenberg and Buxton (2008), who warn about evaluating immature designs, and with the selective-reporting concerns of Simmons et al. (2011): the OEC-in-advance rule is the paper's own guard against these.

### Implications for LTF

With small traffic, a classic A/B test of fine details (button color, copy tweaks) cannot reach adequate power. Use the sample-size rule to see how many learners are needed to detect a plausible effect, and if that number is out of reach, decide from principles, qualitative sessions and accessibility, not from underpowered tests.

Where testing is feasible, test large differences (a new lesson structure versus the old one), run for whole weeks, agree the single success metric first, and check that randomization and logging work with an A/A run.

For fly mode, measure performance (page load and interaction delay) since slowness can drive the result. Never use "no significant difference" as proof that a change is harmless.

Confirmed this session: Crossref record; full text PDF (ai.stanford.edu/~ronnyk/2009controlledExperimentsOnTheWebSurvey.pdf) for all terms, formulas, numbers and lessons above.

## greenberg2008usability

Greenberg, S., and Buxton, B. (2008), "Usability evaluation considered harmful (some of the time)", Proceedings of CHI 2008, 111-120. DOI 10.1145/1357054.1357074.

### Core claims

Greenberg and Buxton, two senior figures in HCI, argue that usability evaluation, which the field teaches and reviewers demand as a default, can be ineffective or harmful when applied "by rule" instead of "by thought". The abstract lists four ways it can go wrong: during early design it can mute creative ideas that do not conform to current interface norms; applied to radical innovations it can quash an inspired vision because of the problems of an immature technology; used to validate an academic prototype it may suggest scientific worthiness without a meaningful critique of everyday adoption; and ignoring how cultures adopt technology over time means today's reluctance forestalls tomorrow's acceptance. The choice of evaluation method, if any, must arise from the actual problem or research question.

### Specifics

The authors' PDF was read this session. The paper is an opinion essay, and says so, written in the "considered harmful" tradition. Notable points:

- The doctrine. Evaluation is central to HCI education, academia and industry. They cite Barkhuus and Rode's analysis of 24 years of CHI papers, reporting that almost all accepted papers have some evaluation and that evaluations are dominated by quantitative empirical usability studies (about 70%) followed by qualitative ones (about 25%).
- Weak science. Much evaluation in research is an "existence proof": the researcher builds a situation where the new technique can beat the old one at least once. That is confirmatory testing, not the risky, refutation-seeking hypothesis testing that gives strong evidence. Replication, which would bound the claim, is rare and hard to publish.
- Method shapes the question. Researchers choose the method reviewers favor and then fit a problem to it.
- Sketches versus prototypes. Early designs are best treated as sketches, many and cheap, so the team generates and compares many ideas ("getting the right design") before refining one ("getting the design right"). Premature evaluation of a sketch mistaken for a prototype can kill a promising design and encourages local hill-climbing.
- Usable versus useful. Evaluation methods such as think-aloud, task walkthroughs and heuristic evaluation focus on problems, not benefits, so they favor "more usable systems, but not radically new ones". They cite Landauer's point that many systems are too hard to use but also do too little that is useful.
- The role of expert judgment. They quote Snodgrass and Coyne on the tacit understanding that experienced designers use when assessing designs, arguing that subjective expert critique can be as legitimate as measurement.

The remedy is breadth: choose among methods, use sketches early, accept that big effects in real contexts are hard to evaluate with classic lab methods, and value discovery and invention differently.

### Replication and criticism

An opinion essay has no replications, only reception. The paper has been influential in HCI research culture and is listed by Wobbrock and Kientz (2016) as an example of an "opinion" research contribution of type "application". It does not claim usability testing is useless: the authors say they have practiced it for decades and that it should continue for many but not all situations.

Critics from the practitioner side might note that its examples come from research settings and that product teams with real users often benefit from early testing. Kohavi et al. (2009) argue from industrial experience that experiments are cheap and informative and that bold bets can be tested, which complements, not contradicts, the call for sketching first. The paper's concern about confirmatory studies matches the later statistical critiques (Cockburn et al., 2020; Dragicevic, 2016).

### Implications for LTF

LTF should test early ideas as sketches. Before building an interactive widget (for example an instrument explainer or a fly-mode layout), compare several rough alternatives, ideally with a few target learners looking at paper or static mockups, and critique them as sketches. Do not run a usability test on a first prototype and let its bugs decide the concept.

Once a design is chosen, evaluation is valuable for finding real problems: the beginner audience, the use beside a sim with controls in hand, and the need to read quickly are all context-specific, so test in that context, not in a quiet lab.

Distinguish usable from useful. A lesson that learners can navigate without error may still fail to teach. Pair usability checks with learning measures (quiz delay retest, challenge performance) and with qualitative feedback about what was valuable.

Confirmed this session: Crossref record; the authors' PDF (billbuxton.com/usabilityHarmful.pdf) read for the abstract and all points above; the Wobbrock and Kientz PDF for its categorization of this paper as an opinion contribution.

## henrich2010weirdest

Henrich, J., Heine, S. J., and Norenzayan, A. (2010), "The weirdest people in the world?", Behavioral and Brain Sciences 33(2-3), 61-83. DOI 10.1017/S0140525X0999152X.

### Core claims

Behavioral scientists routinely publish broad claims about human psychology based on samples from Western, Educated, Industrialized, Rich and Democratic (WEIRD) societies. The authors ask whether this is justified. Their review of the comparative database finds substantial variability across populations and finds WEIRD subjects to be unusual compared with the rest of the species, frequently outliers. The domains reviewed include visual perception, fairness, cooperation, spatial reasoning, categorization and inferential induction, moral reasoning, reasoning styles, self-concepts and related motivations, and the heritability of IQ. They conclude that researchers should be much less cavalier about inferring human nature from this thin slice of humanity.

### Specifics

The abstract was confirmed through Europe PMC and the author preprint was read in full (the preprint is dated March 2009 on its pages; numbers below are from that version).

- Who is sampled. The paper cites an analysis (Arnett 2008) of top journals in six sub-disciplines of psychology from 2003 to 2007: 68% of subjects came from the United States and 96% from Western industrialized countries. The authors note that 96% of psychological samples come from countries with only 12% of the world's population, and that 67% of the American samples in the Journal of Personality and Social Psychology consisted solely of undergraduate psychology students.
- Visual perception. The Mueller-Lyer illusion, a textbook example of a supposedly universal perceptual effect, was measured in 16 societies (14 of them small-scale) by Segall and colleagues in the 1960s. American undergraduates had the strongest effect: on average segment "a" had to be about a fifth longer than "b" before the two were judged equal, while the San foragers of the Kalahari were unaffected. The authors relate this to exposure to "carpentered" environments.
- Economic games. In the Ultimatum and Dictator games, a pair of anonymous people split money. The authors report that the U.S. adult non-student sample occupies the extreme end of the distribution for offers and rejections across the societies studied.
- Why it matters. Even supposedly basic processes can vary, so "universal" cannot be assumed from a WEIRD sample alone.

### Replication and criticism

The paper is a review article, so its evidence is a synthesis of other people's studies, and the quality of each comparison varies. Its central warning about generalization is widely accepted, but individual comparisons can be contested, and many of the cited cross-cultural effects come from older or small studies. The paper does not claim that WEIRD findings are wrong, only that their generality is unknown.

For HCI specifically, Greenberg and Buxton (2008) and Cockburn et al. (2020) raise different sampling and validity worries (student participants, lab tasks). I did not confirm HCI-specific numbers on student sampling this session.

### Implications for LTF

The target audience of LTF is complete beginners flying a particular simulator, and much design evidence comes from university students and general web users. Check how closely the participants in a cited study resemble LTF learners in age, prior experience, reading language, device and motivation. Treat visual-perception results (color, line length, symbol recognition) as possibly population-dependent, and test key displays with real learners, including those with diverse backgrounds and abilities.

LTF teaches in US English with knots, feet and inHg, so cultural assumptions in icons, color meanings and metaphors may not travel to every learner; do not claim universality in KB entries unless the evidence spans populations.

Confirmed this session: Crossref record; Europe PMC abstract; author preprint PDF (www2.psych.ubc.ca/~henrich/pdfs/Weird_People_BBS_final02.pdf) read for the sampling figures, Mueller-Lyer and economic-game passages.

## cockburn2020threats

Cockburn, A., Dragicevic, P., Besancon, L., and Gutwin, C. (2020), "Threats of a replication crisis in empirical computer science", Communications of the ACM 63(8), 70-79. DOI 10.1145/3360311.

### Core claims

Many areas of computer science, including HCI, performance analysis, software engineering and artificial intelligence, treat statistical significance as the standard of evidence, yet there has been little debate about the replication crisis that has shaken other fields. The authors review the contributors to the crisis elsewhere, focusing on over-reliance on and misuse of NHST, and their analysis of papers in a cross section of computer science journals suggests that a large proportion of the field faces the same threats. They recommend richer evidentiary criteria and more openness (preregistration, data and artifact repositories).

### Specifics

The authors' version was read in full this session.

- Terms. Publication bias, the file drawer effect, p-hacking, p-fishing and HARKing (hypothesizing after the results are known, an instance of the Texas sharpshooter fallacy).
- Scale in other fields. Cancer researchers could not reproduce 47 of 53 landmark results, psychologists failed to replicate 39 of 100 studies, and a Nature survey of more than 1,500 researchers found 90% agreed there is a crisis.
- Inflated errors. If a researcher collects 15 dependent variables and reports only the significant ones, the probability of a type I error is 54% rather than 5%.
- Survey of CS. They inspected the ten most downloaded articles from each of 41 "ACM Transactions" journals (410 articles). Sixty-one (15%) used a dichotomous interpretation of p, spread across 21 journals (51%). All but two of those 61 reported at least one finding below .05, suggesting publication bias.
- Proposals reviewed. Redefine significance (alpha of .005, proposed by 75 senior scientists and heavily criticized), abandon significance thresholds, adopt Bayesian methods (not immune to "b-hacking"), help readers form their own conclusions with charts of effect sizes and intervals, quantify p-hacking (p-curves, with limits), preregistration and registered reports.

### Replication and criticism

This is a review plus a small descriptive survey, and the survey counts p-value usage, not wrongdoing. Presence of p < .05 interpretation suggests risk, not proof of unreliable results. The authors themselves note limits: cautious language may be less persuasive, reviewers may distrust papers without p values, and nothing yet proves that abandoning NHST improves replication. Shepperd (2018), an arXiv paper whose abstract I read this session, argues in a software-engineering context that replications of underpowered studies add little and that meta-analysis is the better way to combine evidence, which is a complementary view.

### Implications for LTF

For the KB, any claim sourced from an HCI or CS paper should be graded by the same filters: sample size, preregistration, reporting of all measures, effect sizes with intervals, availability of data. Treat a dichotomous "significant" result in a small HCI experiment as weak.

For LTF's own research (pilots with learners), preregister a one-paragraph plan, record all measures collected, and share raw anonymous data internally so analyses can be checked.

Confirmed this session: Crossref record (DOI 10.1145/3360311); the authors' PDF from hal.science/hal-02907143 read for all numbers above; Shepperd (arXiv 1802.04580) abstract.

## kaptein2012rethinking

Kaptein, M., and Robertson, J. (2012), "Rethinking statistical analysis methods for CHI", Proceedings of CHI 2012, 1105-1114. DOI 10.1145/2207676.2208557.

### Core claims

Kaptein and Robertson argue that CHI researchers typically test hypotheses with significance tests and interpret results with routine "canned" p values, an approach that statisticians, economists and psychologists increasingly criticize. They identify three problems with current practice: the fallacy of the transposed conditional, neglect of statistical power, and reluctance to interpret effect sizes. These can lead to weakly specified hypotheses and weak theories, and so to studies of limited practical or scientific value. They argue that CHI research should judge findings by the magnitude and practical importance of effects, not by statistical significance alone.

### Specifics

Only the abstract was available this session (University of Edinburgh Research Explorer record, with the ACM metadata confirmed through Crossref and a search summary). The abstract says the authors illustrate each concern using publicly available data from CHI 2010. The keywords given in the search result include Bayesian statistics, research methods and usability evaluation. I could not read the body, so I do not report its tables, counts or specific recommendations.

The three named problems can be explained from confirmed related sources.

- The transposed conditional. This is the confusion of P(data | null) with P(null | data) that Cohen (1994) describes as the "inverse probability" error. Cohen illustrates it with a screening-test example in which a "significant" positive result still leaves about a 60% probability that the case is normal.
- Neglected power. Cohen cites a typical power of about .50 for medium effects, and Kohavi et al. (2009) list underpowered experiments as a common mistake. With low power, a non-significant result says little, and a significant one tends to overestimate the effect.
- Not interpreting effect sizes. Dragicevic (2016) and Cumming (2014) argue that the question for a design is "how much better?", with an interval, not "is p below .05?".

### Replication and criticism

This is a methodological critique and position paper with illustrations, not an experiment, and it sits in the same line of argument as Dragicevic's chapter in the Springer volume "Modern Statistical Methods for HCI" (2016), which I read. Cockburn et al. (2020) describe the continuing lack of consensus on a replacement for NHST, so the paper's position (move to effect sizes and consider Bayesian methods) is one view in a live debate and has trade-offs: Bayesian analyses introduce a choice of priors, which adds another researcher degree of freedom (Cockburn et al., 2020).

Evidence that CHI adopted the recommendations is mixed, and Cockburn et al. suggest dichotomous significance reasoning is still common in computer science.

### Implications for LTF

The three problems translate directly into LTF habits. When comparing two lesson versions, report the difference in a concrete measure with an interval, not only "significant". Do a rough power estimate before running a pilot, and if power is poor, say so in the report and avoid concluding "no difference". Choose a smallest effect worth caring about (for instance, a few more percent of learners finishing a challenge) before looking at data, and judge results against it.

Because the abstract points to magnitude and practical importance as criteria, the KB can adopt "practical importance" as a required field when summarizing a study: what is the effect in units LTF cares about, and would it change a design decision?

Confirmed this session: Crossref record for 10.1145/2207676.2208557; University of Edinburgh Research Explorer abstract page; web search summary naming keywords; the Cohen, Dragicevic, Cumming and Kohavi texts for the related points.

## lazar2017research

Lazar, J., Feng, J. H., and Hochheiser, H. (2017), Research Methods in Human-Computer Interaction, 2nd edition, Morgan Kaufmann. ISBN 978-0-12-805390-4.

### Core claims

This is the standard textbook for empirical methods in HCI. Its premise is that HCI research draws on many methods from different disciplines and that the choice of method must follow from the research question: controlled experiments, surveys, interviews and focus groups, diaries, case studies, ethnography, usability testing and others, each with its strengths and risks, and with a shared requirement of care about validity and ethics.

### Specifics

Publisher and library records confirmed this session: the second edition was published by Morgan Kaufmann (an Elsevier imprint) in April 2017, with a listed paperback ISBN of 978-0-12-805390-4, an e-book ISBN of 978-0-12-809343-6 and a length of about 534 to 562 pages depending on the catalog. The publisher's description says the second edition adds material on research with children, older adults and people with cognitive impairments. A library catalog states that the first edition appeared in 2009; Open Library lists the first publication as 2010 under a Wiley imprint, so the first edition's year is recorded inconsistently and I do not rely on it.

A search summary of the publisher and library listings gives the second edition as 16 chapters. The summary names these topics: an introduction to HCI research; experimental research; experimental design; statistical analysis; surveys; diaries; case studies; interviews and focus groups; ethnography; usability testing; analyzing qualitative data; automated data collection methods; measuring the human (physiological measures); online and ubiquitous HCI research; working with human subjects; and working with research participants with disabilities. The summary notes the listings differ slightly in formatting, so I treat the chapter list as indicative, and I did not read any chapter text.

### Replication and criticism

A textbook is secondary evidence and carries the consensus of its authors, so its strength depends on the primary literature behind each chapter. Its statistics chapter dates from 2017 and sits in the middle of the shift toward estimation and open science described by Cumming (2014), Kaptein and Robertson (2012) and Cockburn et al. (2020), and I did not check how far it adopts those recommendations. Readers should pair it with the newer statistical critiques in this lane. One university reading list appeared in my search results, but that is weak evidence about the quality of the book.

### Implications for LTF

The book gives LTF a menu for choosing a method that fits a question:

- To decide between two designs with measurable outcomes, a controlled comparison (see Campbell and Stanley, 1966, on threats to validity).
- To understand how beginners actually practice with a simulator, interviews, diary studies or observation (see Beyer and Holtzblatt, 1998).
- To get opinions at scale, a carefully designed survey, with its own validity risks.
- To check whether a design works for participants with disabilities or cognitive differences, the chapter topics on working with such participants indicate the need for specific protocols, which should be informed by the accessibility lane of this KB.

It also works as the reference for study ethics: any LTF test with real learners should follow consent and data-handling norms, and the "working with human subjects" topic marks where to look.

Confirmed this session: elsevier.com catalog record (second edition, ISBN, April 2017 date) returned by web search; Open Library search for the work; O'Reilly and library catalog results for page counts, the first-edition note and the chapter topics.

## glaser1967discovery

Glaser, B. G., and Strauss, A. L. (1967), The Discovery of Grounded Theory: Strategies for Qualitative Research, Aldine.

### Core claims

The book argues that social-science theory should be generated from systematically analyzed data instead of only being derived from grand theories and then tested. It defends qualitative research as capable of rigor, and it introduces a method for building theory from data, called the constant comparative method, with theoretical sampling to decide what to collect next.

### Specifics

The book itself was not available this session. These details come from a PMC overview article on grounded theory (PMC6318722) and a web search summary, and the bibliographic data from Open Library (work OL3623883W, first published 1967, Aldine).

- Origin. Glaser and Strauss developed the method while studying terminally ill patients and awareness of dying, first reported in Awareness of Dying (1965).
- Constant comparison. Analysis starts with the first data and continues throughout. The researcher compares incident to incident within each code, then codes with codes, collapsing them into categories, and compares new data with earlier data. This is intended to find consistencies and differences and to refine theoretically relevant categories.
- Theoretical sampling. The researcher follows leads from the analysis by sampling new participants or material to fill gaps, clarify uncertainties and test interpretations. The purpose is to develop theoretical categories, not to represent a population.
- Theoretical saturation. Sampling continues until new data analysis no longer adds material to existing theoretical categories and the categories are sufficiently explained.
- Inductive stance. The book challenged the prevailing view that theory should be deductively tested and defended the rigor of qualitative methods.

### Replication and criticism

The authors later diverged. The PMC overview describes three genres, a traditional Glaserian one, an evolved version from Strauss, Corbin and Clarke, and a constructivist one from Charmaz, differing in philosophical position, use of literature and coding approach (Glaser's open, selective and theoretical coding versus open, axial and selective coding). It notes that Glaser rebutted Strauss and Corbin's 1990 account.

A caution from a web search summary: some later authors use "saturation" loosely as a sample-size justification, which differs from the original meaning of stopping when categories stop developing. Qualitative findings are not tested for statistical replication in the same way as experiments; their credibility rests on transparency of coding and the fit of the theory to the data. Because I did not read the original, I cannot report its page-level claims.

### Implications for LTF

For LTF, grounded theory offers a way to learn from open-ended learner material (interview transcripts, forum posts, support questions, session notes) and build categories of beginner confusion without presuming them in advance. Compare cases constantly, sample further when a category is thin (for example, learners who quit early), and stop when new material stops changing the categories.

State the limit: such analysis yields concepts and hypotheses about why learners struggle, not estimates of how many struggle. Pair it with counts from analytics or a survey. Keep the sampling logic documented so readers know the findings are theoretical, not representative.

Confirmed this session: Open Library search result for the work; PMC6318722 overview page for constant comparison, theoretical sampling, saturation and the genres; web search summary on saturation usage. The book text was not read.

## beyer1998contextual

Beyer, H., and Holtzblatt, K. (1998), Contextual Design: Defining Customer-Centered Systems, Morgan Kaufmann.

### Core claims

Beyer and Holtzblatt present a complete front-end design process based on observing and interviewing people in their own work context. Customer data, not designers' assumptions, drives decisions about what needs matter, what a system should do and how it should be structured. The book is a craft and method text by practitioners, and it is built on field experience rather than controlled experiments.

### Specifics

The 1998 book was not available this session. Confirmed from a library catalog record (Weber State; San Francisco, Morgan Kaufmann, 1998, 472 pages), Open Library (work OL2716486W) and web search summaries of publisher and course material:

- Contextual Inquiry follows a master-apprentice model: the interviewer observes users working and asks about what they do, instead of arriving with a fixed question list like a survey or focus group.
- Four principles, named in the book's table of contents and the publisher's listing: context, partnership, interpretation and focus.
- Work models (flow, sequence, artifact, cultural and physical) capture what was learned, per summaries of the table of contents. Notes from interviews are organized into an affinity diagram, built bottom-up in one or two sessions, per a search summary.
- Later stages in the method overview: consolidation across customers, work redesign, user environment design, and mockup and testing with customers.

A later short book by the same authors, "Contextual Design: Evolved" (Morgan and Claypool, 2014; its text was available this session but is a different work), describes the method's revision in 2013 to reflect how touchscreen phones and always-on devices changed lives, and states that the method was first invented in 1988.

### Replication and criticism

The book is craft authority, not experimental evidence. Contextual Design has been widely used in industry, but no experiment in this session compares its outcomes with other methods. It is costly in time and expertise, and the observational findings are context-bound; they illustrate rather than prove. Greenberg and Buxton (2008) support the broader point that research methods must fit the question, and Lazar et al. (2017) place field methods such as ethnography beside experiments and surveys as complements.

### Implications for LTF

Observe real beginners at home using the sim next to LTF: where the keyboard and joystick are, how the screen is divided, what they glance at, what interrupts them. These observations should shape fly mode, checklists and challenge briefings more than designer opinion does.

Use interpretation sessions and an affinity diagram to turn a small number of sessions into themes. Treat the themes as hypotheses to check with analytics or a survey.

Confirmed this session: Open Library search; Weber State catalog entry; web search summaries of the book's table of contents; the 2014 "Contextual Design: Evolved" PDF front matter for the 1988 origin and the 2013 revision.

## campbell1966experimental

Campbell, D. T., and Stanley, J. C. (1966), Experimental and Quasi-Experimental Designs for Research, Houghton Mifflin (first published 1963 as a chapter in the Handbook of Research on Teaching, Rand McNally).

### Core claims

Campbell and Stanley set out a vocabulary and a checklist for judging whether a study's causal claim can be believed. They distinguish internal validity (did the treatment make a difference in this specific instance?) from external validity (to what populations, settings, treatments and measures can the effect be generalized?). They call internal validity "the basic minimum without which any experiment is uninterpretable" and note that the two kinds of validity are often at odds. They then evaluate 16 designs against named threats and argue for randomized designs where possible and for carefully chosen quasi-experimental designs where it is not.

### Specifics

The full text of the 1966 reprint was read this session (its preface says the survey first appeared in the Handbook of Research on Teaching, Rand McNally, 1963, under a longer title, and that the 1966 reprint added a table of contents, supplementary references and indexes).

Eight classes of extraneous variables threaten internal validity.

1. History: specific events between the first and second measurement, besides the treatment.
2. Maturation: processes within the respondents over time, such as growing older, hungrier or more tired.
3. Testing: the effect of taking a test on scores in a second test.
4. Instrumentation: changes in the calibration of an instrument or in the observers or scorers.
5. Statistical regression: when groups are selected for extreme scores.
6. Selection: biases in choosing respondents for comparison groups.
7. Experimental mortality: differential loss of respondents from groups.
8. Selection-maturation interaction, which appears in some multiple-group quasi-experimental designs.

Four factors threaten external validity: the reactive or interaction effect of testing (a pretest changing sensitivity to the treatment), interaction of selection biases with the treatment, reactive effects of experimental arrangements, and multiple-treatment interference.

The designs are coded with X for treatment, O for observation and R for random assignment. The book calls three designs pre-experimental (one-shot case study, one-group pretest-posttest, static-group comparison), three "true" experimental designs (pretest-posttest control group, the Solomon four-group design, posttest-only control group) and ten quasi-experimental designs, including time series, equivalent time samples, nonequivalent control group, counterbalanced designs, multiple time series and regression-discontinuity analysis. It describes the one-shot case study as having such a total absence of control as to be of almost no scientific value. Randomization is described as the all-purpose procedure for achieving pretreatment equality of groups within known statistical limits.

On replication the authors say that multiple experimentation is more typical of science than once-and-for-all definitive experiments, and that successful experiments need replication and cross-validation under other conditions. They also recommend varying the treatment's execution to test generalization, not only exact repetition. They warn that their summary tables of pluses and minuses must not replace reading the discussion, and that the chapter is not meant to substitute a dogma of 13 acceptable designs for an earlier dogma.

### Replication and criticism

The book is a canonical craft and methods monograph, and its threats list has been absorbed into most later teaching of research design. It is not an empirical finding and has not been "replicated". Its limits are about its time: its examples are educational, its statistics (for example gain scores and analysis of covariance) predate modern mixed models, and it says nothing about p-hacking or open science. Kohavi et al. (2009) can be read as carrying its logic to online experiments: A/A tests and robot filtering address instrumentation and selection concerns, while novelty and primacy effects are testing or reactivity effects.

### Implications for LTF

The threats list converts to a review checklist for any LTF evaluation of a lesson. A before-and-after improvement in quiz scores after a redesign could come from history (a new sim update or season), maturation (learners get better with time anyway), testing (they saw the quiz before), regression (the lowest scorers were chosen for the remedial lesson) or selection (different learners signed up). A randomized comparison, or at least a time series with a comparison group, rules these out.

For external validity, note who took part and where: beginners in a trial may not represent the whole audience, and a signed-up cohort may be more motivated. Be wary of the one-shot case study: "learners who took lesson X passed challenge Y" proves nothing without a comparison.

Use the pretest warning in quizzes: a pretest may itself change what learners attend to.

Confirmed this session: Open Library search (works OL68797W and OL10558330W; ISBN 0395307872 for the 1966 Houghton Mifflin printing); full text PDF (jameslindlibrary.org copy) read for the threats lists, design list and quoted claims paraphrased above.

## gelman2006difference

Gelman, A., and Stern, H. (2006), "The difference between 'significant' and 'not significant' is not itself statistically significant", The American Statistician 60(4), 328-331. DOI 10.1198/000313006X152649.

### Core claims

A common error is to summarize comparisons by statistical significance and then draw a sharp line between significant and nonsignificant results. The authors point out a distinct error: comparing two results by comparing their significance levels. Changes in significance are not themselves significant, and even large changes in significance levels can correspond to small, nonsignificant changes in the underlying quantities. To compare two treatments, test the difference, not the difference between their significance statuses.

### Specifics

The full text was read this session. This is not the familiar complaint that .05 is arbitrary, or that significance is not practical importance; the paper says explicitly that it is a different point.

- Theoretical example. Two independent studies give effect estimates and standard errors of 25 plus or minus 10 and 10 plus or minus 10. The first is significant at the 1% level, the second is only one standard error from zero. The difference of 15 has a standard error of about 14, so the difference is not close to significant. A third larger study estimating 2.5 with standard error 1.0 reaches the same significance as the first, yet differs significantly from it; so equal significance does not mean equal effect and "replication" judged by significance alone can mislead.
- Applied example one. A study of older brothers and men's sexual orientation (published in Proceedings of the National Academy of Sciences in 2006) was described as finding that only the number of older brothers mattered, not older sisters, apparently by comparing a significant coefficient (0.28, standard error 0.10) with nonsignificant ones (0.08, standard error 0.10, for older sisters) without testing the difference. The authors suspect the data are equally consistent with birth order generally mattering.
- Applied example two. A set of experiments on electromagnetic fields and calcium efflux in chick brains at frequencies from 1 Hz to 510 Hz, which shaded results by significance level and inferred separate processes. Plotting estimates with standard errors instead shows effects just about always positive and typically not far from 0.1, with dramatic features of the first plot explainable by sampling variability.
- Recommendation. Show estimates and standard errors; test differences directly; be aware that confidence intervals do not solve the problem if the habit is to check whether they include zero.

### Replication and criticism

This is a short statistical teaching article with worked examples, and its arithmetic is not contested. The authors themselves note that "everybody knows" the error yet they have seen it constantly. Later reviews (Dragicevic, 2016, in the full text) list "misinterpretations regarding comparisons" among the usability problems of p values, which treats it as a recurring misinterpretation in the statistics used in HCI. The ASA statement (2016) includes Gelman and Stern in its reference list.

### Implications for LTF

Any LTF dashboard or test report that compares variants or learner groups must compare them directly. Examples to avoid: "the new lesson raised completion for experienced users (significant) but not for beginners (not significant), so it works only for experienced users". The correct move is to estimate the difference between the two groups' effects, with an interval, which will usually be wide.

The same rule applies to subgroup analysis in the KB's evidence summaries: do not read a "significant in group A but not in group B" claim as a real difference between groups unless the paper tests it. When showing results in the product (for example, progress charts), show the estimates and their uncertainty, not shaded significance bands.

Confirmed this session: Crossref record for 10.1198/000313006X152649; full text PDF (sites.stat.columbia.edu/gelman/research/published/signif4.pdf) read for all numbers and examples.

## wobbrock2016research

Wobbrock, J. O., and Kientz, J. A. (2016), "Research contributions in human-computer interaction", Interactions 23(3), 38-44. DOI 10.1145/2907069.

### Core claims

Knowledge in HCI comes in a small number of types, each with its own criteria for being judged. The article offers seven research contribution types and describes how CHI, the field's flagship conference, formalized types of contribution in its submission process, showing how submissions and acceptances were distributed across types in 2016. The practical point for evidence is that different kinds of contributions deserve different kinds of evidence, and judging an artifact by empirical standards (or an opinion essay by experimental ones) is a category error.

### Specifics

The authors' PDF was read this session. The seven types:

- Empirical contributions: new findings from observation and data gathering (experiments, user tests, field observations, interviews, surveys, diaries and others), judged on the importance of the findings and the soundness of the methods.
- Artifact contributions: new systems, techniques, toolkits, sketches and mockups, judged by the type of artifact; they are often accompanied by studies "but do not have to be, and sometimes should not be".
- Methodological contributions: new or adapted methods, judged on utility, reproducibility, reliability and validity.
- Theoretical contributions: concepts, models, frameworks, judged on novelty, soundness and power to describe, predict and explain.
- Dataset contributions: corpora or benchmarks, judged by usefulness and representativeness.
- Survey contributions: reviews and meta-analyses, judged by how well they organize what is known and reveal gaps.
- Opinion contributions: essays and arguments, "judged on the strength of their argument", which should use evidence and fairly consider opposing views.

For CHI 2016 the paper reports 2,316 submissions and 546 acceptances (23.6%). Empirical studies of system use made up 44.0% of submissions, empirical studies of people 28.4% (with the best acceptance rate, 26.3%), and artifact or system papers 24.2%. Authors could choose more than one type: 63.9% chose exactly one and 30.4% more than one. The paper traces how CHI's call for papers moved from long descriptors to eight keyword types.

### Replication and criticism

This is a descriptive overview by two well-known HCI researchers, grounded in an earlier whitepaper and in CHI submission data, so it carries authority within the community but is not an experiment. The eight CHI 2016 keywords split empirical work into studies of systems and of people, a change from the original seven types. The paper's classification is a convention, not a finding, and other taxonomies exist. It lists Greenberg and Buxton (2008) as an opinion contribution.

### Implications for LTF

Use the types as a labeling scheme in the KB: every source entry should say what kind of contribution it is (empirical experiment, theory, opinion, dataset), because the right level of trust differs. An essay with a strong argument can guide design thinking but is not data on effect sizes.

For LTF's own work, the taxonomy suggests that a new widget is an artifact whose evaluation should be holistic and context-specific, while a claim that "this explanation raises retention" is an empirical claim needing a controlled comparison.

Confirmed this session: Crossref record; author PDF (faculty.washington.edu/wobbrock/pubs/interactions-16.pdf) read for the seven types and the CHI 2016 figures.

## dragicevic2016fair

Dragicevic, P. (2016), "Fair statistical communication in HCI", in Modern Statistical Methods for HCI, Springer, 291-330. DOI 10.1007/978-3-319-26633-6_13.

### Core claims

Statistical tools are tools for end users, and in research the end users are scientists who need to communicate findings clearly, accurately and openly to peers. Dragicevic argues that p values and dichotomous testing are poor tools for that task, have been criticized for decades, and should be replaced in HCI by estimation: informative charts with effect sizes and interval estimates, interpreted in a nuanced way. The chapter explains this in non-technical terms and gives a long list of practical tips. The abstract says the guidance shows how to communicate empirical results without any tests or p values.

### Specifics

The open full text (HAL) was read this session.

- Principles of "fair statistical communication", derived from Fisher's "right of other free minds" to use conclusions: clarity, transparency, simplicity, robustness (similar outcomes should yield similar conclusions), non-contingency (no analysis decision should depend on the data) and precision.
- A worked example. For a hypothetical weight-loss pill study, a single "p = .009" leaves the reader unable to tell how large or how uncertain the effect is, whereas a plot of the mean difference with a 95% interval shows both. Effect sizes capture practical significance; p values capture statistical significance.
- Misinterpretations catalogued: general difficulty reading p, confusing p with the probability the null is true, treating a high p as proof of no effect ("accepting the null"), and misreading p as a measure of replication reliability. Section 3 adds problems with dichotomous testing: false certainty, mistaken comparisons (see Gelman and Stern, 2006), publication bias, p-hacking and dichotomous thinking.
- Confidence intervals: use them as an estimate of plausible values, not as a significance test by another name. He says that using an interval only to see if it excludes zero is essentially the same as NHST. Plausibility does not drop suddenly at the limit.
- Tips (numbered up to at least 25). Ask focused research questions; prefer simple designs, within-subject designs and continuous scales; prefer pictures to numbers for intervals; use numbers wisely (put full numeric intervals in a table or supplement); build intuition for sampling variability by watching simulated replications; learn Cumming's "inference by eye" (non-overlap of error bars; the quarter-overlap rule for independent groups as a rule of thumb, not a binary rule); ban dichotomous interpretations.
- Publication bias. Estimation legitimizes negative and inconclusive results and makes publication criteria more flexible, which can advance knowledge of what does not work and encourage replication.

### Replication and criticism

This is an expert methodological chapter, an argument supported by examples and literature. It sits in the "estimation" camp with Cumming (2014), and shares ground with the ASA statement (2016) and Cockburn et al. (2020), who note that it is difficult to persuade reviewers used to p values and that evidence that abandoning NHST improves replicability is lacking. The author is open that interpreting intervals is "an art". Frequentist intervals are not credible regions for the parameter, and he discusses the epistemic interpretation as a heuristic. There is a practical risk that "no tests" reports are read as hiding unfavorable results, which Cockburn et al. mention as a reviewer concern.

### Implications for LTF

This chapter is a ready-made reporting standard for LTF's research notes. Show a chart with the estimated difference and an interval; say what the smallest important difference is; describe how many variants and measures were tried; do not say "no effect" when an interval includes both zero and useful values.

For learner-facing progress displays, the same logic suggests showing ranges or trends instead of a falsely precise single number (for example a score estimate with a margin), though the learner audience needs simpler framing than researchers.

For the KB's reading of the literature: when a source reports only p values, record that the effect size and uncertainty are unknown.

Confirmed this session: Crossref record; HAL full text (hal.science/hal-01377894) read for the abstract, principles, tips, example and conclusion; citation line confirming Springer, pp. 291-330.

## wasserstein2016asa

Wasserstein, R. L., and Lazar, N. A. (2016), "The ASA's statement on p-values: context, process, and purpose", The American Statistician 70(2), 129-133. DOI 10.1080/00031305.2016.1154108.

### Core claims

The American Statistical Association (ASA) issued, for the first time on a specific matter of statistical practice, a policy statement on p values and statistical significance. It sets out six principles, aimed at researchers, practitioners and science writers who are not primarily statisticians, to correct widespread misuse. The accompanying editorial explains why the Board acted and how the statement was written. The authors state that nothing in the statement is new: statisticians had sounded the alarm for decades.

### Specifics

The full text of the statement and editorial was read this session.

- Definition. Informally, a p value is the probability, under a specified statistical model, that a statistical summary of the data (such as a sample mean difference between two groups) would be equal to or more extreme than its observed value.
- The six principles:
  1. P values can indicate how incompatible the data are with a specified statistical model.
  2. P values do not measure the probability that the studied hypothesis is true, or the probability that the data were produced by random chance alone.
  3. Scientific conclusions and business or policy decisions should not be based only on whether a p value passes a specific threshold.
  4. Proper inference requires full reporting and transparency (do not report only the analyses that pass a threshold; disclose the number of hypotheses explored, data collection decisions, all analyses and all p values computed).
  5. A p value, or statistical significance, does not measure the size of an effect or the importance of a result.
  6. By itself, a p value does not provide a good measure of evidence regarding a model or hypothesis; for example, a p value near 0.05 taken by itself offers only weak evidence against the null.
- Other approaches named: estimation with confidence, credibility or prediction intervals; Bayesian methods; likelihood ratios or Bayes factors; decision-theoretic modeling; false discovery rates. All rely on further assumptions.
- Process. The editorial describes more than two dozen experts, a two-day meeting of 20 members in October 2015, and approval by the ASA Executive Committee on January 29, 2016. Development was "lengthier and more controversial than anticipated", the group debated how to treat multiple comparisons and did not address alternative hypotheses, error types or power. Over two dozen commentators contributed online supplements with differing views.
- Conclusion: no single index should substitute for scientific reasoning.

### Replication and criticism

This is a consensus statement from a professional body, not new data, and the editorial openly records disagreement among the experts on what it should say. The editorial says there were differing perspectives on how to characterize alternatives to the p value and that not everyone agreed with leaving out alternative hypotheses, error types and power. The statement does not tell people to stop using p values; it tells them how not to misuse them. Cockburn et al. (2020) record that some researchers still defend NHST and dichotomous testing. The statement's principle 3 is consistent with Cohen (1994), Cumming (2014) and Dragicevic (2016), while the discussion piece "Don't throw out the error control baby with the bad statistics bathwater" (Mayo, in the online supplement list) shows a defense of error-control methods; I saw only the titles of the supplement, not their text.

### Implications for LTF

The six principles make a short, authoritative checklist for any statistical claim that enters the KB or LTF's own analytics. In particular, principle 3 applies to product decisions: a business decision ("ship this variant") should not rest on p < .05 alone but on effect size, cost, risk and prior evidence.

Principle 4 translates into a logging rule: whenever LTF analyzes learner data, record how many analyses were run. Principle 5 argues for reporting practical differences, such as minutes saved or percent of challenges completed.

Learners themselves may meet p values in aviation safety or training research; the statement offers plain-language phrasing for any explainer content on evidence, which should still be checked by an expert before publication.

Confirmed this session: Crossref record; the statement's full text PDF (stat.berkeley.edu/~aldous/Real_World/ASA_statement.pdf) read for all principles, definition and the editorial's process details.
