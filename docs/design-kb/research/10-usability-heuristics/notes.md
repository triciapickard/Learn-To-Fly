# Lane 10: usability heuristics and inspection (research notes)

## nielsen1990heuristic

Nielsen, J., & Molich, R. (1990). Heuristic evaluation of user interfaces. Proceedings of CHI '90, 249-256. ACM. DOI 10.1145/97243.97281.

### Core claims

Heuristic evaluation is an informal inspection method: several evaluators examine an interface alone and judge it against a short list of recognized usability principles. The paper's result is double-edged. Individual evaluators were "mostly quite bad" at it: across four experiments a single evaluator found only 20% to 51% of the known problems. But different evaluators find different problems, so pooling a small group works well. The authors recommend three to five independent evaluators and argue that cheap, intuitive methods are the ones likely to be used in real projects ("discount usability").

### Specifics

Evidence type: four quasi-experiments with human evaluators, scored against problem lists the authors compiled themselves. Evaluators were not usability experts. Each received an interface and wrote a report of usability problems; the authors matched reports against known problems and gave credit even for incomplete descriptions. The lists had to be revised after a first pass because evaluators found problems the authors had missed.

The four experiments (Table 2):
- Teledata: a Danish videotex system, judged from ten screen dumps. 37 computer science students, 52 known problems, average 51% found.
- Mantel: a purpose-built paper specification of a phone-number lookup service. 77 readers of a Danish computer magazine, 30 known problems, average 38%.
- Savings: a live voice-response bank information system. 34 students, 48 known problems, average 26%.
- Transport: a live voice-response bus information system. The same 34 students, 34 known problems, average 20%.

Individual differences (Table 3) were large: in Teledata the worst evaluator found 22.6% and the best 74.5%; in Transport 6.7% and 46.7%. The authors observe that spread grows as the interface gets harder to evaluate, and that voice interfaces were hard because their output vanishes as soon as it is spoken. The same 34 people across Savings and Transport correlated only weakly (R squared 0.33), so a good evaluator on one system is not reliably good on another. Evaluation skill is not a Guttman scale: poor evaluators sometimes found hard problems that good ones missed.

Aggregation (Table 4, random aggregates by Monte Carlo sampling), average share of problems found by 1, 2, 3, 5 and 10 evaluators: Teledata 51, 71, 81, 90, 97%; Mantel 38, 52, 60, 70, 83%; Savings 26, 41, 50, 63, 78%; Transport 20, 33, 42, 55, 71%. Curves rise steeply to about five evaluators and flatten near ten. Even for the hardest interface, five evaluators found more than half.

The nine heuristics used (Table 1): simple and natural dialogue; speak the user's language; minimize user memory load; be consistent; provide feedback; provide clearly marked exits; provide shortcuts; good error messages; prevent errors.

Procedure: evaluators work independently and compare notes only after writing their reports, because working together early would bias them toward one way of analyzing. False positives were rare, and a team can challenge a lone evaluator's false positive. The authors add that the method may identify problems without suggesting solutions.

### Replication and criticism

The paper is among the most cited in HCI. The authors themselves state limits: only small interfaces, prototypes or running systems, and no real-user test of the problems (they argue validity from obviousness, and from the fact that at least 34 people worked through each interface, so any major problem would likely have bothered some). The problem lists are the authors' own. Later work in this lane qualifies the headline: the Nielsen and Landauer model (1993), the evaluator effect (Hertzum and Jacobsen 2001) and the comparative usability evaluation studies (Molich and others) show that overlap between evaluators varies, so "five evaluators find about two thirds" is an average from these four small cases, not a constant. In this paper five evaluators found anywhere from 55% to 90%.

### Implications for LTF

LTF is a small team, so heuristic evaluation is the realistic inspection method before user testing. Do not rely on one reviewer for a lesson page or the fly-mode screen. Have three to five reviewers each walk the same screens alone, write findings down, and merge only afterwards. Include someone who has used the simulator, since interface difficulty and domain knowledge change what is found. Fly mode, used with divided attention next to the sim, resembles the paper's hardest cases (ephemeral, time-pressured), so inspection will miss more there and should be backed by real task tests with beginners. Treat the 1990 nine as history; the 1994 refinement is the better base for an LTF review checklist.

Confirmed this session: read the full paper as page images (abstract, Tables 1 to 4, Figures 1 to 4, conclusions) from blogs.fu-berlin.de/hci2023/files/2023/06/Nielsen-and-Molich-1990-Heuristic-evaluation-of-user-interfaces.pdf; Crossref DOI 10.1145/97243.97281.

## nielsen1994enhancing

Nielsen, J. (1994). Enhancing the explanatory power of usability heuristics. Proceedings of CHI '94, 152-158. ACM. DOI 10.1145/191666.191729.

### Core claims

Nielsen compared seven published sets of usability heuristics (101 principles in all) against a database of 249 real usability problems to see which principles best explain actual problems. No small number of factors explained most of the variation: problems come from a broad range of underlying phenomena. He therefore did not pick a winner but synthesized a candidate set of nine heuristics with broad explanatory coverage. These became the familiar heuristics, now published as ten, the tenth being help and documentation.

### Specifics

Evidence type: single-rater analysis of a problem database plus factor analysis. Not a user experiment.

The database: 249 problems from 11 earlier projects the author had collected (seven evaluated by heuristic evaluation, four by user testing; two with character-based interfaces, six graphical, three telephone-operated). Each of the 101 heuristics was rated for how well it explained each problem on a 0 to 5 scale (0 not at all; 3 a major part; 5 complete). The author warns of "less than perfect reliability" and cites earlier work where three specialists agreed on only about two thirds of items in a simple classification. Only the author could rate, since the original project knowledge was needed.

Source sets included the original ten heuristics (mean rating 3.72, 82% of problems explained at level 3 or more), the Star interface principles (2.38, 49%), and others such as Polson and Lewis and Carroll and Rosson. The author cautions this is not a competition: some sets were not meant for heuristic evaluation, and the database came largely from the original set's own projects.

Factor analysis (principal components): the two largest factors each account for about 6% of variance; the seven largest only about 30% together; 25 factors with 1% or more reach 62%; 53 factors are needed for 90%. The seven named factors: visibility of system status; match between system and real world; user control and freedom; consistency and standards; error prevention; recognition rather than recall; flexibility and efficiency of use. The labels are the author's subjective abstractions.

Coverage (Table 1): a greedy choice of ten heuristics from the pool explains 85% of all 249 problems, led by consistency (same thing, same way) at 23%. Of the 249, 82 were classed serious and 167 minor. The ten best for serious problems explain 95% of them, led by "seeing and pointing versus remembering and typing" (22%) and "same things look the same" (18%). Serious problems are somewhat more concentrated and lean on making things visible and salient. Heuristics that mostly explain minor problems (speak the user's language, aesthetic integrity, shortcuts) should still be kept, the author argues, because they matter to satisfaction and expert efficiency.

Conclusion: the nine candidates are visibility of system status; match between system and the real world; user control and freedom; consistency and standards; error prevention; recognition rather than recall; flexibility and efficiency of use; aesthetic and minimalist design; and helping users recognize, diagnose and recover from errors. They seem excellent at explaining found problems, but whether they are good at finding new ones remains untested.

### Replication and criticism

The heuristics are almost universal, but their derivation is thinner than their reputation: one rater, one database, and an explicit absence of any test of finding power. Nielsen's web article lists ten and says they have been unchanged since 1994 (nngroup.com/articles/ten-usability-heuristics, last reviewed 30 January 2024). Retrospective accounts disagree on how many factors and heuristics came out of the study (nine in the paper), which looks like loose secondary citation. Cite the paper for what it did, and treat the heuristics as expert craft knowledge, not a validated measurement instrument.

### Implications for LTF

Use the ten as a shared review vocabulary. The two biggest explainers, consistency and recognition over recall, become rules: one name for each sim control everywhere (and never two names for one switch), and showing the control, position or checklist item on screen rather than relying on memory from an earlier lesson. Add aviation-specific review items (units, MSL or AGL, sim version) instead of hoping the general list catches them. Because serious problems cluster around salience and visibility, spend inspection effort on whether the next action in fly mode is obvious at a glance.

Confirmed this session: read the full paper as page images (abstract, rating scale, factor lists, Table 1, conclusions, appendix) from static.aminer.org/pdf/PDF/000/089/679/enhancing_the_explanatory_power_of_usability_heuristics.pdf; nngroup.com/articles/ten-usability-heuristics (ten names, published 24 April 1994); Crossref DOI 10.1145/191666.191729.

## gould1985designing

Gould, J. D., & Lewis, C. (1985). Designing for usability: Key principles and what designers think. Communications of the ACM, 28(3), 300-311. DOI 10.1145/3166.3170.

### Core claims

Gould and Lewis, both at IBM, argue that a useful, easy-to-use system results from three principles: early and continual focus on users and tasks, empirical measurement of usage, and iterative design (design, test, measure, redesign, repeated as often as needed). The article has an empirical half: surveys of 447 designers show that the principles, though they feel obvious once stated, are rarely mentioned when designers describe how they would develop a system. It is the founding statement of what became user-centered design.

### Specifics

Evidence type: opinion and craft argument backed by a survey and a single case study. Not an experiment.

The principles as the authors word them: (1) Early focus on users and tasks. Designers must understand who the users will be, by studying their cognitive, behavioral, anthropometric and attitudinal characteristics, and by studying the nature of the work. They recommend direct contact with potential users rather than hearing about them through intermediaries, and suggest a panel of expected users who work closely with the design team (they call it "interactive design"). (2) Empirical measurement. Early in development, intended users should carry out real work with simulations and prototypes, and their performance and reactions should be observed, recorded and analyzed. The authors insist that testing a prototype is a usability test, not a selling job, and that reviewing or demonstrating a prototype to users is not a substitute. They also recommend testable behavioral goals set early. (3) Iterative design. When problems are found they must be fixed, which means a repeated cycle; a single revision is not sufficient. They stress that the implementation approach must allow flexible, cheap change.

The survey (Table I): 447 people attending six surveys (systems planners, designers, programmers and developers, many at human factors talks) were asked to write the key steps one should go through in developing and evaluating a computer system for end users, using an office system or point-of-sale terminal as the example. Responses were graded by several judges. Of the respondents, 26% mentioned none of the principles, 35% mentioned one, 24% two and 16% three. Individually, 62% mentioned something about early focus on users, 40% about empirical measurement, and 20% about iterative design. Grading was liberal, and the authors note the sample was probably biased toward human factors.

Why designers resist (Section 4): the principles are not seen as worth following; they are confused with similar but different ideas (for example showing a design to users for approval, versus studying their work); the value of user interaction is misestimated (designers underestimate user diversity); competing approaches seem credible; and the principles are seen as impractical.

The ADS case: IBM's touch-tone voice-messaging system was designed with these principles, including user scenarios and a prototype; the article states that customers reported new users were often able to learn it with no training.

### Replication and criticism

Cockton (2008, "Revisiting usability's three key principles", CHI 2008, seen only via search snippets this session) argues the principles are post hoc and that the paper offers few examples of successful application of the first two; he contends the authors attribute successes to the principles as presented. The survey proves how designers described their process, not what they did, as the authors admit.

### Implications for LTF

For a one-product team the three principles reduce to a routine. Know the user: write down who the beginner is (no flying experience, a keyboard or yoke, one screen or two) and observe real ones rather than trusting designer intuition. Test early: put beginner users in front of a lesson or the fly-mode screen with the sim running, and record where they stall. Iterate: budget for at least two rounds, since the paper treats a single revision as insufficient. Write testable behavioral goals for each lesson, such as "a new learner completes the first checklist unaided"; do not set vague goals like "easy to use". Keep user tests distinct from demos: showing a finished screen to a pilot friend is review, not testing.

Confirmed this session: read pages 1 to 4 and 8 to 9 of the article (abstract, Table I, Sections 1 to 4, 6) as page images from the CMU-hosted PDF www.cs.cmu.edu/~bam/uicourse/20790utc04/cmuonly/p300-gould.pdf; Crossref DOI 10.1145/3166.3170 (CACM 28(3), 300-311); web search for Cockton's critique.

## virzi1992refining

Virzi, R. A. (1992). Refining the test phase of usability evaluation: How many subjects is enough? Human Factors, 34(4), 457-468. DOI 10.1177/001872089203400407.

### Core claims

Virzi reports three experiments relating the proportion of usability problems found to the number of test subjects. As described by Lewis (1994) and Faulkner (2003), the paper supports three claims: observing four or five participants reveals about 80% of a product's usability problems; additional participants reveal fewer and fewer new problems (diminishing returns); and the more severe problems tend to be found by the first few participants. The paper is one of the two roots of the "five users" rule, the other being Nielsen and Landauer (1993), and it is the root of the "severe problems show up first" idea.

### Specifics

Evidence type: empirical usability tests analyzed by subsampling, with a binomial (cumulative probability) model. I could not read the paper itself this session: the publisher's abstract was blocked, so everything below comes from the two secondary papers named in the confirmation line, both of which are peer-reviewed accounts that describe Virzi directly.

Method as reported by Faulkner (2003): Virzi calculated the percentage of problems found by different sample sizes against the problems revealed by 12 users in the first study and by 20 users in the second and third. His essential finding was that about five users would uncover approximately 80% of the problems, and in the case of the most severe problems he indicated that three users would reveal most of them. Lewis (1994) states the 80% claim holds so long as the average likelihood of problem detection per participant is between 0.32 and 0.42, "as in Virzi". If that likelihood is lower, more than five participants are needed.

Caution in the original: Faulkner quotes Virzi (p. 467) as saying subjects should be run until the number of new problems uncovered drops to an acceptable level, leaving "acceptable" to the practitioner. Faulkner notes that both Virzi and Nielsen tried to state the limits of their recommendations, but practitioners adopted the number five and dropped the qualifications. Faulkner adds that Virzi and Nielsen both aimed to show that statistical rigor could be relaxed in real-world testing.

The statistical idea is that if each participant independently has probability p of encountering a given problem, then the chance a problem has been seen by at least one of n participants is one minus (1 minus p) to the power n. With p near 0.3 to 0.4, the curve passes 80% at about five participants. The model assumes problems are found independently and with the same probability for every problem and every participant.

### Replication and criticism

The three claims have not fared equally. Lewis's independent study (1994) clearly supported diminishing returns, partly supported the 80% claim (only if the average detection likelihood was 0.32 to 0.42), and failed to support the severity claim: using behavioral categories for impact, he found no correlation between problem severity and rate of discovery. So "serious problems are found first" is not safe to rely on. Faulkner (2003) tested the 80% claim directly with 60 users and found that the average held (85% for samples of five) but variation was large (55% to nearly 100%). Woolrych and Cockton (2001) argued the formula's homogeneity assumption makes it over-predict. The strongest defensible reading is that five participants find a large share of the frequent problems, with considerable chance variation, and that rarer problems need many more users.

### Implications for LTF

Do not cite "five users find 80% of problems" as a law in LTF planning. If LTF tests a lesson flow with beginners, treat five as a sensible size for a round of testing that will be followed by a fix and another round, not as proof of coverage. Do not assume the severe problems will surface in the first few sessions; scan every session for severe failures, such as a learner unable to find the next step in fly mode. Keep a per-problem count, so you can see when new sessions stop adding new problems (Virzi's own stopping rule) rather than stopping at a fixed number. Beginners with and without gaming experience may differ, so include both.

Confirmed this session: Crossref DOI 10.1177/001872089203400407 (title, author, Human Factors 34(4), 457-468); Lewis (1994) abstract via Europe PMC (DOI 10.1177/001872089403600215) for the three claims, 0.32 to 0.42 range and the severity null result; Faulkner (2003) full text (link.springer.com/content/pdf/10.3758/BF03195514.pdf) for the sample sizes of 12 and 20, three users for severe problems, and the quotation attributed to p. 467. Not read directly: Virzi's own text (SAGE page returned 403).

## lewis1994sample

Lewis, J. R. (1994). Sample sizes for usability studies: Additional considerations. Human Factors, 36(2), 368-378. DOI 10.1177/001872089403600215.

### Core claims

Lewis tested Virzi's (1992) three claims on an independent usability study. Diminishing returns held clearly. The "four or five participants find 80%" claim held partially: only when the average likelihood of problem detection was between 0.32 and 0.42, as in Virzi's data. When detection likelihood is lower, more than five participants are needed. The claim that severe problems are found earlier was not supported. The data also gave evidence that the binomial probability formula can model problem-discovery curves given an estimate of the average detection likelihood, and economic simulations suggested that only the average detection likelihood strongly influences the sample size that maximizes return on investment.

### Specifics

Evidence type: one empirical usability study (the abstract does not give its sample or product; I did not read the full text) plus economic simulation. Quoted facts below are from the abstract, read via Europe PMC.

The abstract frames the study around Virzi's three claims: (1) observing four or five participants will let a practitioner discover 80% of a product's usability problems; (2) observing additional participants reveals fewer and fewer new problems; (3) more severe problems are easier to detect with the first few participants. Lewis's result: claim 2 clearly supported, claim 1 partially supported, claim 3 unsupported.

Severity was measured with behavioral categories (impact of the problem on the user's work) rather than ratings by experts, and these showed no correlation between severity and the rate of discovery. This is an important methodological point: Virzi's severity result may depend on how severity is rated.

The binomial formula, with p the average likelihood that one participant finds a given problem, predicts the cumulative share of problems found. Lewis's point is that the value of p must be estimated from the product and study, since it differs from study to study.  A 2012 CACM review of sample-size work by Lewis (not accessible this session) is described in a search snippet as reporting that the average p varies widely among studies.

The economic simulations estimated return on investment under a variety of settings; the abstract says only the average likelihood of detection strongly influenced the range of sample sizes that give maximum ROI. Nielsen and Landauer's abstract gave a similar cost-benefit exercise with maximum benefit/cost ratio at four evaluations for a "medium" example (confirmed this session).

### Replication and criticism

Lewis (1994) is itself the main independent check on Virzi and is cited by later reviews (Faulkner 2003). Cited findings from it are the "p between 0.32 and 0.42" condition and the severity null. Critics (Woolrych and Cockton 2001) note that the binomial model assumes homogeneity of problems and users, and Lewis's own approach still relies on it. Spool and Schroeder (2001) found much lower detection rates on live web sites with open tasks. The overall picture after 1994 is that sample size should be chosen from an estimate of p for the type of product and test, not from a fixed number.

### Implications for LTF

For LTF the important idea is that the right number of test participants depends on how likely each problem is to be seen by one learner. For a narrow, well-defined task (for example "start the first lesson and finish the first quiz") p may be high and five is reasonable. For open-ended challenge pages (many possible paths) p is lower and more participants are needed. Estimate p from the first few sessions (what share of observed problems were seen by only one learner) and use it to decide whether to keep testing. Do not assume that severe problems come first; read every session for blockers. Record impact in behavioral terms: a stall, a wrong action, a request for help, a task failure.

Confirmed this session: abstract of the paper via Europe PMC REST (DOI 10.1177/001872089403600215); Crossref record (Human Factors 36(2), 368-378, SAGE); web search snippets for the CACM 2012 review. I did not read the full text or the 2012 review (blocked).

## faulkner2003beyond

Faulkner, L. (2003). Beyond the five-user assumption: Benefits of increased sample sizes in usability testing. Behavior Research Methods, Instruments, & Computers, 35(3), 379-383. DOI 10.3758/BF03195514.

### Core claims

Faulkner tests the popular belief that five test users are enough by running a structured usability test with 60 users and repeatedly drawing random subsets. Her abstract: some randomly selected sets of five users found 99% of the problems while others found only 55%; with 10 users the lowest percentage found by any set rose to 80%, and with 20 users to 95%. Her argument is not that Nielsen and Virzi were wrong on average but that practitioners misread an average as a guarantee: the study supports the basic claims but "not the assumption" that five users suffice for any usability test.

### Specifics

Evidence type: one experiment (a structured usability test) with a resampling analysis. A strength is that she used full-sample data; the weakness is one application and one task.

Method: a web-based employee time sheet application. Sixty participants performed a single task (complete a weekly time sheet with supplied data), 20 in each of three experience groups: novice/novice (inexperienced computer users who had never used the application), expert/novice (experienced computer users new to the application) and expert/expert (experienced with both). One computer, one location. Two measures: time to complete the task, and "user deviations", logged as tick marks on a data sheet whenever a participant departed from the optimal path. Deviations were the basis for finding problems. Mean deviations were 65.6, 43.7 and 19.2 for the three groups in that order, and the groups differed significantly.

Resampling: a MATLAB program drew 100 random samples at each size of 5, 10, 20, 30, 40, 50 and all 60 users. The full group identified 45 problem areas. Table 2 (100 samples per size): at 5 users the minimum found was 55% and the mean 85.55%, SD 9.3; at 10 users minimum 82%, mean 94.7%; at 15, minimum 90%, mean 97.05%; at 20, minimum 95%, mean 98.4%; larger sizes approached 100%. The 95% confidence interval was plus or minus 18.5 percentage points for five users and plus or minus 6.4 for ten. Her summary: the risk of relying on any one set of five was that nearly half the problems could be missed.

The discussion also reviews why the five-user figure spread. Nielsen (1993) based his calculations on data from 13 studies; Faulkner reports a critique (Grosvenor 1999) that Nielsen's confidence intervals used the z distribution rather than the t distribution, so an interval he gave as plus or minus 24% would actually be plus or minus 32%. She notes Nielsen's text said five "might be enough for many projects" and that practitioners dropped the qualifier. She cites Spool and Schroeder (2001), in which the first five users revealed only 35% of the problems and the 13th and 15th users each found a new severe problem, and Perfetti and Landesman (2002), where users 6 to 18 each found more than five new obstacles. She warns that subtle problems, least likely to be found by small samples, can be the most serious, citing accident literature (the 1995 American Airlines flight 965 crash and Three Mile Island) for cases where subtle usability problems contributed.

### Replication and criticism

Evidence is stronger than the other critiques because it is a controlled structured test, but it covers one simple application. A subtle point: her result is about the variance of small samples, which is a prediction of the binomial model itself, not a refutation of it. Nielsen's defence is to run small, iterative rounds rather than one test (see the Nielsen and Landauer section). The abstract gives 80% as the ten-user minimum while Table 2 gives 82%; use the table.

### Implications for LTF

Treat any small test round as a draw from a distribution: five learners may find nearly everything or little more than half. Plan for rounds of testing rather than a single pass, and add more participants for the screens where a miss is costly (the first-run onboarding, fly mode, the first challenge briefing). Recruit across experience levels (people who have never used a flight sim, people who have played other games, people who have used MSFS), as Faulkner's groups differed greatly in deviations and time. Log deviations from the intended path, as she did, since it is a cheap, comparable measure. Subtle problems (a number given without an MSL or AGL label) are least likely to appear in few sessions, so also inspect against a checklist.

Confirmed this session: full text read (link.springer.com/content/pdf/10.3758/BF03195514.pdf, 5 pages, abstract, method, Tables 1 and 2); Europe PMC record PMID 14587545; Crossref DOI 10.3758/bf03195514.

## nielsen1993mathematical

Nielsen, J., & Landauer, T. K. (1993). A mathematical model of the finding of usability problems. Proceedings of INTERCHI '93 (CHI '93), 206-213. ACM. DOI 10.1145/169059.169166.

### Core claims

Nielsen and Landauer model the finding of usability problems as a Poisson-type process: the detection of problems as a function of the number of test users or heuristic evaluators is well fitted by a simple curve in which each added person finds a decreasing number of new problems. From this they derive a cost-benefit rule for how many to use. The abstract says the data come from 11 studies and that for a "medium" example 16 evaluations would be worth their cost, with the maximum benefit/cost ratio at four. The paper, together with Nielsen's 1993 book, is the source of the "five users" folk rule, which Nielsen later popularized in a 2000 web article.

### Specifics

Evidence type: statistical modeling fitted to existing project data (not a new experiment), plus an economic model. I could not obtain the full text (the PDF links I tried were blocked or missing), so the model details below are from the abstract and from Nielsen's 2000 article, and I do not attempt to report the paper's tables.

The model, as Nielsen states it in "Why you only need to test with 5 users" (nngroup.com, 18 March 2000, confirmed this session): the number of problems found with n users is N times (1 minus (1 minus L) to the power n), where N is the total number of problems in the design and L is the proportion found by a single user. Nielsen says the typical value of L is 31%, averaged across the projects studied, and that the curve "bends around 5 users". Five users would find about 85% under those values (this is arithmetic on the stated formula and typical L, not a claim from the article). Nielsen's practical advice in that article: rather than one big study, run several small ones; with 15 users available, run three studies of five rather than one of 15, fixing the problems between rounds. For more than one user group he recommends three to four users per group for two groups, and three per group for three or more groups. The article says quantitative studies need 20 users and card sorting 15.

Count discrepancy: the abstract says 11 studies, whereas Faulkner (2003) and a vendor summary say 13 studies. I report the abstract's number as primary; the 13 may refer to the book's data set.

### Replication and criticism

This is the most contested paper in the lane. Woolrych and Cockton (2001, "Why and when five test users aren't enough", IHM-HCI) argue the formula assumes too much homogeneity in how users find problems and that its key value was set optimistically; they report evidence the formula "can fail spectacularly" in a realistic web test (abstract as quoted in search results). Faulkner (2003) quotes a critique that the original used z rather than t distributions for confidence intervals. Spool and Schroeder (2001) found much lower per-user detection on live sites with open tasks. Lewis (1994) found support for the binomial model if p is estimated from the study. Nielsen himself concedes the formula holds only for comparable users who use the site in similar ways. The fair summary: the diminishing-returns shape is robust; the single value L of 31% is not a constant.

### Implications for LTF

Use the model to decide budget, not to claim coverage: choose small repeated rounds (about five learners, fix, repeat) over one big test. Estimate L for LTF from the first round: if each learner hits only a fifth of the problems, plan for more learners. Test separately for distinct groups: LTF has at least two (people new to sims and people who have flown other aircraft in a sim), so plan three to four per group as the article suggests. The model's numbers are for finding problems, not for measuring task times or success rates, which need larger samples.

Confirmed this session: abstract text via web search of the paper's record (11 studies, Poisson, 16 evaluations, benefit/cost maximum at four); Crossref DOI 10.1145/169059.169166; nngroup.com/articles/why-you-only-need-to-test-with-5-users (formula, 31%, three-studies advice, group sizes); Faulkner (2003) full text for the critique summary.

## hertzum2001evaluator

Hertzum, M., & Jacobsen, N. E. (2001). The evaluator effect: A chilling fact about usability evaluation methods. International Journal of Human-Computer Interaction, 13(4), 421-443. DOI 10.1207/s15327590ijhc1304_05.

### Core claims

Three of the most widely used usability evaluation methods, cognitive walkthrough, heuristic evaluation and thinking-aloud testing, all suffer from a substantial "evaluator effect": different evaluators who evaluate the same interface with the same method detect markedly different sets of problems. A review of eleven studies finds the effect for novice and experienced evaluators, for cosmetic and severe problems, for problem detection and for severity judgments, and for simple and complex systems. Average agreement between any two evaluators using the same method on the same system ranges from 5% to 65%, and no method is consistently better. The authors conclude that a thinking-aloud study by one evaluator is "highly questionable" as an authoritative statement of what problems an interface contains, and that the simplest way to cope is to use multiple evaluators.

### Specifics

Evidence type: a review and re-analysis of eleven existing studies, some with newly derived figures from data the original authors supplied. Read in full from the authors' preprint (mortenhertzum.dk/publ/IJHCI2001.pdf).

Two measures. The detection rate is the average of each evaluator's problem count divided by the collective count of all evaluators. It is flattered when few evaluators are used (its lower bound is 100/n percent) and assumes the group found all problems. The preferred measure is any-two agreement: for each pair of evaluators, the problems both found divided by the problems either found, averaged over all pairs. It runs from 0% to 100% and measures agreement only, not coverage. The authors stress that this is reliability, not validity (whether problems show up in real use).

Examples in the review. Cognitive walkthrough: with 11 first-time users evaluating a web library system against three set tasks, 58% of the 33 problems found collectively were found by only one evaluator and none by all. Thinking-aloud: Jacobsen, Hertzum and John (1998) had four HCI researchers analyze the same videotaped sessions of four users with nine set criteria for what counts as a problem; 46% of the 93 collectively found problems were detected by only one evaluator and another 20% by two. The two experienced evaluators found more (average detection 59% against 45%) but agreed on only 40% of the problems they found collectively.

Severity. Seven studies assess severity. In four experiments the detection rate was appreciably higher for severe problems; in ten there was largely no difference. So the effect is not only about cosmetic issues. Agreement on severity ratings was also low: in three studies, any-two agreement on which problems were severe was 28% and 20% (two of the studies), and the mean Spearman correlation between severity ratings was 0.31, 0.24 and 0.23.

Causes: usability evaluation involves interpretation. Three weaknesses of the methods: vague goal analyses lead to different task scenarios; vague evaluation procedures lead to "anchoring" (evaluators drift toward evaluating for a user like themselves); vague problem criteria lead to "anything being accepted as a usability problem". Recommendations: involve several evaluators; check coverage of task scenarios (prioritize high-risk and high-frequency functions); define problem criteria explicitly.

### Replication and criticism

The same group repeated the effect later: Hertzum, Molich and Jacobsen (2014, Behaviour & Information Technology 33(2); abstract read in the preprint) had 19 experienced professionals analyze video-recorded sessions with five users. Participants reported on average 33% (moderated) and 32% (unmoderated) of the problems reported by all participants in their group, and 50% and 40% of the problems rated critical or serious by anyone. Up to 24% (moderated) and 30% (unmoderated) of problems reported by several participants were rated critical by one and minor by another. The effect persists with modern professionals. Limit noted by the authors: how problems are grouped changes detection rates, and validity was not examined.

### Implications for LTF

Never trust one reviewer's list of problems or one reviewer's severity rating. For LTF review rounds: two or more people independently list problems against agreed problem criteria, then merge and have a third person rate severity from the merged list. Define what counts as a problem in advance (a learner stalls, performs a wrong action, misreads a unit, needs outside help). Write the task scenarios in advance, including high-risk ones (setting up fly mode next to the sim, reading a checklist while flying), rather than leaving each reviewer to choose. Treat inspection results as inputs to a test, not as the truth.

Confirmed this session: full text of the 2001 preprint (mortenhertzum.dk/publ/IJHCI2001.pdf) including abstract, equations, Tables 1 and 2 discussion, causes; abstract of the 2014 paper (mortenhertzum.dk/publ/BIT2014.pdf); Crossref DOI 10.1207/s15327590ijhc1304_05 (IJHCI 13(4), 421-443).

## molich2004comparative

Molich, R., Ede, M. R., Kaasgaard, K., & Karyukin, B. (2004). Comparative usability evaluation. Behaviour & Information Technology, 23(1), 65-74. DOI 10.1080/0144929032000173951.

### Core claims

CUE-2 (Comparative Usability Evaluation 2) asked nine independent teams to evaluate the same web site, Hotmail, in late 1998. The paper's headline: teams applied very different methods, spent very different amounts of effort, and reported very different problems. The authors write that the assumption that all labs doing a usability test get the same results is "plainly wrong" (as quoted in secondary accounts), and that no single method reliably finds all usability problems. The paper is the best-known "many teams, one product" study in the field and the main evidence that usability test results depend heavily on who runs the test.

### Specifics

Evidence type: a natural experiment in which professional teams evaluated one live web site, then the authors compared methods, problem lists and reports. I could not read the paper itself (the publisher page returned an access error). What follows is from the author's own project page (dialogdesign.dk/cue-2), secondary reports of figures that Molich gave in an interview, and the Hertzum and Jacobsen review.

Project page: nine teams tested the popular www.hotmail.com web site simultaneously in November and December 1998, to confirm CUE-1 in a larger, better-controlled study. The page states that CUE-2 "clearly confirmed the CUE-1 results", and lists as take-aways that no single method reliably finds all problems (so combine methods); that the total number of problems exceeds what one or a few tests can find (so test smaller feature sets iteratively); that one professionally conducted test is useful and its problems should be fixed; and that quality assurance, including avoiding method mistakes and writing usable reports, matters.

Figures relayed by an article on alistapart.com (attributing them to Molich's interview with Christine Perfetti at User Interface Engineering, not the paper itself): the teams reported 310 different usability problems; the most frequently reported problem was found by seven of nine teams; only six problems were reported by more than half of the teams; 232 problems (75%) were reported only once. The 310 figure also appears in a search record for the paper's abstract. The same article reports that for CUE-4 (hotel reservation site, 17 teams, nine tests and eight expert reviews) 340 problems were reported, 205 only once, and nine by more than half the teams. Molich's conclusion, as reported: to find all the serious Hotmail problems you would have to hire all nine teams.

Earlier CUE results as summarized by Hertzum and Jacobsen (2001, read in full): in a first comparison, 129 of 141 reported problems were reported by only one laboratory; in a second, 147 of 186. They note that these studies differ from evaluator-effect studies because more than the evaluator varied (procedure, test users).

Sources disagree on the exact number of teams in the earlier round (seven or nine in different secondary accounts); I treat the nine teams of the paper as confirmed only through the project page.

### Replication and criticism

The CUE series has been repeated (CUE-4 and later, run by Molich and colleagues; CUE-4 appears in Crossref as Molich and Dumas 2008, Behaviour & Information Technology 27(3), 263-281) and produces the same pattern. Hertzum, Molich and Jacobsen (2014) showed variability even when teams analyze the same video sessions. As Hertzum and Jacobsen stress for such studies, more than the evaluator varies (procedure, test users), and the comparison measures reliability, not validity. A problem reported by only one team may still be real; merging problem lists involves judgment.

### Implications for LTF

Test results are a sample of what a team happened to notice, so LTF should not treat one round of testing as complete. Prefer iterative small tests on a narrow feature set (one lesson page, or fly mode alone) over a single large test. Write down test tasks, success criteria and the problem definition before testing, and keep a short report template so findings are usable by the next person. Because the unique problem is typical, never discard a finding just because only one person raised it; look at its severity. Combine methods (inspection, task testing, interviews) rather than relying on one.

Confirmed this session: dialogdesign.dk/cue-2/ (page text); alistapart.com/usability-myth-jpg (relayed interview figures, treated as secondary); Hertzum and Jacobsen (2001) full text; web search for the abstract record; Crossref DOI 10.1080/0144929032000173951. Not read: the paper itself.
