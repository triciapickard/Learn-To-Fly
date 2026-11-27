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

## spool2001testing

Spool, J. M., & Schroeder, W. (2001). Testing web sites: Five users is nowhere near enough. CHI '01 Extended Abstracts on Human Factors in Computing Systems, 285-286. ACM. DOI 10.1145/634067.634236.

### Core claims

Spool and Schroeder, of the consultancy User Interface Engineering, report a test in which 49 users executed the same task on four production web sites. Their conclusion, stated in the title and abstract as found via the Dblp record and search, is that these sites would need considerably more than five users to find 85% of their problems. It is a two-page extended abstract, not a full paper, and it is the standard citation for the claim that "five users" fails on realistic, open-ended web tasks. Its significance is as a counterexample to the homogeneous-task assumption behind the Nielsen and Landauer curve.

### Specifics

Evidence type: an industry field study, reported in a two-page conference abstract. I could not read the paper itself this session (the publisher page was not reachable); the figures below are what other peer-reviewed papers say about it, and I attribute each to its source.

Design as described in the abstract record: the same task was executed by 49 users on four production web sites. Faulkner characterizes it as an unstructured, goal-oriented test, unlike her own structured one. I have not confirmed the task details.

What other authors report. Faulkner (2003), read in full, writes that in this study the first five users revealed only 35% of the usability problems, and that both the 13th and 15th users tested revealed at least one new severe problem that would have been missed had testing stopped after the first five sessions. A search-result summary of Woolrych and Cockton (2001) says they cited this study as an example in which the probability of a user finding a problem was far lower than the 31% typical value that Nielsen and Landauer's model assumes. The 31% is Nielsen's figure for the average chance that one user finds a given problem (nngroup.com, confirmed this session); Spool and Schroeder's goal-oriented testing gave much less.

My reading (inference, not from the paper): where the pool of possible problems is large, each user sees only a small slice, so detection probability per user is low and the curve rises slowly.

### Replication and criticism

The result is consistent with Faulkner's structured test with 60 users, where the lowest five-user sample found only 55% of problems, and with Lewis's (1994) finding that five participants suffice only when the average detection likelihood is about 0.32 to 0.42. It is weaker as evidence than those studies: it is an industry report with a short abstract, and I could not check how tasks were set or problems counted. Nielsen's reply is that the "five users" advice was always about iterative testing of a narrow design with comparable users, and that one big test should be replaced by several small ones; the data here do not test that reply directly. The paper's title is deliberately polemical, and the finding should be read as "the number depends on task openness and site size", not as a new constant such as "fifteen".

### Implications for LTF

Different LTF pages need different test sizes. A narrow scripted flow (open lesson one, answer the quiz, reach the result) behaves like the classic fixed-task case and will surface most of its problems in a few sessions. An open-ended area, such as free exploration of challenges, the dashboard or lesson search, behaves like Spool and Schroeder's sites and needs more learners and more sessions. Do not stop a round at the fifth learner when the fifth is still finding new problems; stop on a rule such as "two consecutive sessions with no new serious problem". Give open-ended sessions realistic goals, not only prescribed clicks.

Confirmed this session: Crossref DOI 10.1145/634067.634236 (CHI '01 Extended Abstracts, pp. 285-286); Semantic Scholar record giving the full title "Testing web sites: five users is nowhere near enough"; Dblp-derived search summary (49 users, four production web sites, considerably more than five users for 85%); Faulkner (2003) full text for the 35% figure and the 13th and 15th user finding; search summary of Woolrych and Cockton (2001). Not read: the paper itself.

## shneiderman2016designing

Shneiderman, B., Plaisant, C., Cohen, M., Jacobs, S., & Elmqvist, N. (2016). Designing the user interface: Strategies for effective human-computer interaction (6th ed.). Pearson. (First edition by Shneiderman 1987.)

### Core claims

Shneiderman's textbook is the standard university text on interface design. Its best-known contribution to design practice is the "Eight Golden Rules of Interface Design", first published in 1985 and presented in the sixth edition in Section 3.3.4, within the chapter "Guidelines, Principles, and Theories". The rules are a compact checklist of experience-based heuristics, a close cousin of Nielsen's ten, aimed at interactive systems in general. Pearson's contents listing (seen in search results) shows chapters on usability of interactive systems, universal usability, and guidelines, principles and theories, plus later parts on design issues such as information search and data visualization.

### Specifics

Evidence type: textbook and craft synthesis by recognized researchers; the rules are expert-derived rules of thumb, not experimental findings. I read the rules as published by the author's own university page (cs.umd.edu/users/ben/goldenrules.html), which cites the sixth edition, Section 3.3.4. I did not read the book itself.

The rules, with the page's explanations in my words:
1. Strive for consistency: the same action sequences, terminology and visual conventions in similar situations. Exceptions such as confirming a delete or hiding passwords should be understandable and few.
2. Seek universal usability: design for diverse users (experience, age, disability, culture, technology); explanations for novices and shortcuts for experts both improve a design.
3. Offer informative feedback: every action should produce some response, modest for frequent minor actions and more substantial for infrequent major ones.
4. Design dialogs to yield closure: group action sequences into parts with a beginning, middle and end, and give feedback at the end of a group (a confirmation page after checkout) so users feel accomplishment.
5. Prevent errors: design so serious mistakes are hard to make (for example by disabling inappropriate menu items); when errors occur, give simple, specific recovery guidance and leave the state unchanged or explain how to restore it.
6. Permit easy reversal of actions: reversibility reduces anxiety and encourages exploration, for single actions, data entry or groups of actions.
7. Keep users in control: experienced users want to feel in charge and dislike surprises, tedious data entry, difficulty getting information and inability to reach their desired result.
8. Reduce short-term memory load: the page says people can hold about seven plus or minus two chunks in short-term memory, and advises against making users carry information from one display to another (re-entering phone numbers, hiding site locations, splitting forms).

The page notes that others, including Jakob Nielsen and Jeff Johnson, have expanded the rules since 1985. Overlap with Nielsen's ten is large (consistency, feedback, error prevention, reversal, memory load); closure and universal usability are the distinctive rules.

### Replication and criticism

The rules are not an empirical result and have not been tested as a set. They are accepted because they reflect repeated observation and agree with other lists (ISO 9241-110, Nielsen). One element is shaky: the "seven plus or minus two" figure in rule 8. Cowan (2001), whose abstract I read via Europe PMC, argues that Miller's number was "more of a rough estimate and a rhetorical device than a real capacity limit" and that the evidence suggests a central capacity limit averaging about four chunks. The advice to reduce memory load survives, but the number should not be quoted as a design limit; lane 09 covers the details. Smith and Mosier (1986) add a caution general to guideline lists: they must be tailored and often rest on judgment.

### Implications for LTF

Use rule 4 (closure) as the shape of an LTF lesson: a clear start, a middle and a visible end that tells the learner what they achieved, such as a completed checklist or a finished challenge debrief. Use rule 6 for the progress and quiz parts: let learners retake a quiz, revisit a lesson, and undo a mis-entered answer without penalty. Rule 3 applies to widgets: a simulated control should respond to every input, with bigger responses for bigger actions. Rule 8 supports keeping the checklist and the current step on screen in fly mode instead of asking the learner to remember what the lesson said, without quoting any number for the limit. Rule 2 means designing for both a first-time learner and a returning one who wants to skip ahead.

Confirmed this session: cs.umd.edu/users/ben/goldenrules.html (rules and Section 3.3.4 attribution); Open Library record /works/OL15842384W and ISBN 9780134380384 edition record (Pearson, 616 pages, authors list, sixth edition); search results for the Pearson table of contents; Europe PMC abstract of Cowan (2001), Crossref DOI 10.1017/s0140525x01003922.

## norman2013design

Norman, D. A. (2013). The design of everyday things (Revised and expanded edition). Basic Books. (Originally The Psychology of Everyday Things, 1988.)

### Core claims

Norman argues that people's frustration with ordinary objects, doors, switches, stove controls, comes from design that ignores human psychology, not from user stupidity. Bad designs hide the controls, link controls to functions arbitrarily, give no feedback and demand too much memorization. Good design makes the right action discoverable and the result understandable. The revised edition (which says the world changed in the 25 years since the original) keeps the science, adds the concept of signifiers and new final chapters, and recasts the argument about error as "Human Error? No, Bad Design".

### Specifics

Evidence type: a synthesis of cognitive psychology and design practice, with examples and Norman's own observation. It is a canonical craft and theory text, not an experimental report. I did not have the book text; the points below are from the publisher and author pages listed in the confirmation line.

Principles and concepts named in those pages: affordances (what an object allows a person to do) and signifiers (perceptible signals of what can be done). In his preface, Norman says affordances cause confusion for virtual objects and that signifiers are more important to designers; he quotes "Signifiers are signs, perceptible signals of what can be done." Mapping (how controls relate to effects, with a note in the preface that what is a natural mapping varies by culture); feedback (informing people about the results of actions); conceptual models (the mental model people form of how something works); constraints (physical, cultural, semantic and logical limits that guide use; forcing functions split into lock-in and lock-out); knowledge in the head versus in the world (how much people must remember versus how much the environment shows them).

Error: slips (action-based or memory lapses) are distinguished from mistakes (rule-based, knowledge-based, or memory lapses); these are linked to the seven-stage model of action. The NN/g book page lists the advice as: make things visible, exploit natural relationships between controls and function, use constraints intelligently, provide feedback, reduce memorization demands (a summary, not Norman's own words).

Process: human-centered design is an iterative cycle of observation, idea generation, prototyping and testing; Norman says it suits incremental innovation, not radical innovation, and proposes activity-centered design as a variant.

### Replication and criticism

It is a theory and craft book, so the question is not replication but influence and refinement. Norman's preface says affordances are confusing when applied to virtual objects, which is why he added signifiers. In the revised edition, the "human error is design error" position is sharpened by the slip and mistake taxonomy. I did not verify specific published critiques this session, and the principles give qualitative guidance rather than numbers, so they need user observation to apply.

### Implications for LTF

Two parts apply directly. First, the gulf between what the learner wants to do and what the screen lets them do: every LTF control (a widget knob, a next button, a toggle between light and dark) needs a visible signifier and visible feedback. Second, error: when a learner enters a wrong answer or follows a checklist step wrongly, treat it as a design signal rather than a user failure; separate slips (they knew, but pressed the wrong control) from mistakes (they misunderstood), because the remedies differ (constraints and confirmation for slips; better explanation for mistakes). Widget interaction in the sim-side fly mode should use natural mapping: a widget that depicts the sim's control should match the sim's layout and direction of movement. Keep knowledge in the world: on-screen checklists and labels, not memorized lessons.

Confirmed this session: publisher and author descriptions at www.jnd.org/books/the-design-of-everyday-things-revised-and-expanded/, jnd.org/preface-design-of-everyday-things-revised-edition/ (preface content), nngroup.com/books/design-everyday-things-revised/; Open Library ISBN 9780465050659 record (Basic Books, 2013, Revised and Expanded Edition). I did not read the book text.

## krug2014dont

Krug, S. (2014). Don't make me think, revisited: A common sense approach to web usability (3rd ed.). New Riders. (First edition 2000.)

### Core claims

Krug's short, popular book argues for a single guiding idea, which he calls his first law of usability and which is also its title: a page should not make the user think. A second claim is that how people actually use the Web is different from how designers imagine they do: users scan rather than read, settle for "good enough" choices (he calls this satisficing), and muddle through. The third is practical: usability testing should be so simple, cheap and frequent that teams really do it. The preface of the third edition says the basic principles are unchanged since 2000 because "usability is about people and how they understand and use things, not about technology". It is a craft book by a consultant, not a research report.

### Specifics

Evidence type: practitioner craft authority, based on the author's testing and consulting experience; it gives no experimental data. I read the publisher's sample pages (contents, preface and Chapter 4, plus the index).

Contents (third edition, 216 pages per the publisher and Open Library): guiding principles ("Don't make me think!", "How we really use the Web: scanning, satisficing, and muddling through", "Billboard Design 101: designing for scanning, not reading", "Animal, vegetable, or mineral?: why users like mindless choices", "Omit needless words"); navigation and the home page; testing ("Usability testing on 10 cents a day: keeping testing simple, so you do enough of it"); and larger concerns (mobile, courtesy, accessibility). The preface says the second edition added three chapters, and the publisher says the third edition has updated examples and a new chapter on mobile usability.

Chapter 4 (read in full from the sample) states Krug's second law of usability: it does not matter how many times you have to click, as long as each click is a mindless, unambiguous choice. He argues the "number of clicks" rule (some sites stipulate three, four or five) is a poor metric, and that what counts is how hard each click is, in the thought required and the uncertainty about whether the choice is right. He offers a rule of thumb, which he hedges with "might be something like", that three mindless, unambiguous clicks equal one click requiring thought, with exceptions where users repeat the same path or pages load slowly. A footnote credits Pirolli and Card's information foraging research for the "scent of information". Guidance when a choice is genuinely hard should be brief, timely and unavoidable; his example is the "LOOK RIGHT" marking on London street corners.

The index points to material I did not read: scanning pages (pp. 22 to 23), satisficing (pp. 24 to 25, indexed alongside Gary Klein), the "average user" as a myth, do-it-yourself usability testing (p. 115) and the "reservoir of goodwill".

### Replication and criticism

Krug's claims are craft assertions. Some are consistent with independent research (scanning behavior; satisficing as a decision style) but I did not verify the research behind them in this lane; lane 08 covers scanning and eye tracking. The click-count claim is worth flagging as debunking material: the book itself argues against the "three-click rule", saying difficulty per click matters more, and gives a hedged exchange rate rather than a measured one. The "usability testing on 10 cents a day" advice is cheap-testing advocacy in the discount-usability tradition; Faulkner, Spool and Schroeder, and Hertzum (this lane) show small tests vary a lot by chance and by evaluator. The book was written for the Web of 2000 to 2013, so its navigation and forms examples may not map to a learning app.

### Implications for LTF

Apply the "mindless choice" test to every LTF screen: at each fork (start lesson, continue, skip, retry, open fly mode) the learner should be able to answer "which one?" without thinking, because the labels and grouping are unambiguous. Drop any internal rule such as "everything within three clicks" and replace it with a check that each step is self-evident and signals progress. Use brief, timely, unavoidable help at the point of need, such as a one-line prompt beside the control a learner must find on the sim, not a separate help page. Treat the book as inspiration for the testing routine (frequent, small, whole team watching), while checking its claims about scanning against the eye-tracking lane before baking them into layout rules.

Confirmed this session: publisher sample pages (ptgmedia.pearsoncmg.com/images/9780321965516/samplepages/0321965515.pdf, read as text: contents, preface, Chapter 4, index); informit.com listing (3rd edition, New Riders, 216 pages, ISBN 978-0-13-359727-1); Open Library record for ISBN 9780321965516 (Pearson Education, 2014, 216 pages); search results listing the chapter titles.

## iso2018ergonomics

International Organization for Standardization. (2018). Ergonomics of human-system interaction, Part 11: Usability: Definitions and concepts (ISO 9241-11:2018). ISO. (Second edition; replaces ISO 9241-11:1998.)

### Core claims

ISO 9241-11 is the international standard that defines usability. Usability is "the extent to which a system, product or service can be used by specified users to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use" (the definition as quoted in ISO 9241-110:2020, clause 3.6, which cites 9241-11:2018, 3.1.1). The standard treats usability as an outcome of use: it depends on who the users are, what they are trying to do and where, and so can differ for different users, goals and contexts. It gives a framework and does not prescribe methods for design or evaluation.

### Specifics

Evidence type: a consensus standard, not research. I could not buy or read the standard itself. The content below is from (a) ISO 9241-110:2020, which reproduces several 9241-11 definitions with clause numbers and which I read in the free preview, and (b) search results on the ISO, AFNOR and BSI catalogue records.

Definitions as quoted in the 110 preview, with their 9241-11:2018 clause numbers. Usability (3.1.1) as above, with a note that the "specified" users, goals and context refer to the particular combination under consideration; the word "usability" is also used as a qualifier for the knowledge, activities and design attributes that contribute to it. Context of use (3.1.15): the combination of users, goals and tasks, resources and environment, where the environment includes technical, physical, social, cultural and organizational parts. Goal (3.1.10): the intended outcome. Task (3.1.11): a set of activities undertaken to achieve a specific goal (goals are independent of the means; tasks describe particular means). User (3.1.7): the person who interacts with the system, including those who operate it, use its output, or support it. User experience (3.2.3): the combination of the user's perceptions and responses resulting from the use and anticipated use of a system, product or service. Use error (3.3.3): a user action or lack of action that leads to a result different from that intended by the manufacturer or expected by the user; the term is chosen to avoid implying blame on the user.

The three components, as ISO 9241-110 (clause 4.4) restates them: effectiveness is the accuracy and completeness with which users achieve specified goals; efficiency is the resources used in relation to the results achieved; satisfaction is the extent to which the user's physical, cognitive and emotional responses to use meet the user's needs and expectations.

Structure (from the catalogue records): the main clauses are outcomes of use (effectiveness, efficiency, satisfaction) and usability in a context of use (specified users, goals, contexts), with an annex on measurement of the three components. The record for the standard shows it was last reviewed and confirmed in 2023 and that it cancels and replaces the 1998 edition.

### Replication and criticism

A standard is not replicated; it is revised and challenged. The 2018 edition is a revision of a 1998 text. One natural mapping of the three components to measures (my suggestion, not the standard's text): task success and errors for effectiveness, time or effort for efficiency, questionnaires such as the SUS for satisfaction. The 2018 edition also defines user experience as a related concept. I did not verify published criticism of the definition this session. A limit worth stating: because the definition is relative to "specified" users, goals and contexts, a usability claim without a stated context is empty.

### Implications for LTF

Write the LTF usability goals in this form: for complete beginners (specified users), completing the first lesson and its in-sim challenge (specified goals), on a desktop browser next to a running flight sim (specified context), with a stated share succeeding unaided (effectiveness), within a stated time (efficiency), and rating the experience on a standard questionnaire (satisfaction). Record the context of use for each page: fly mode has a different context (divided attention, partial screen, hands on the controls) from a lesson page read at a desk, so its targets differ. Use the standard's neutral term "use error" in analysis, which keeps the focus on design rather than on the learner. Specific numeric targets for LTF are product decisions, not something the standard supplies.

Confirmed this session: free preview of ISO 9241-110:2020 (cdn.standards.iteh.ai sample PDF, read as text, clauses 3.1 to 3.11 and 4.4); web search of ISO, AFNOR and BSI records for ISO 9241-11:2018 (replaces 1998 edition; reviewed 2023; clause structure). Not read: the standard itself (paywalled; iso.org page returned an access error).

## iso2020ergonomics

International Organization for Standardization. (2020). Ergonomics of human-system interaction, Part 110: Interaction principles (ISO 9241-110:2020). ISO. (Second edition; replaces ISO 9241-110:2006.)

### Core claims

ISO 9241-110:2020 sets out seven interaction principles, with general design recommendations under each, that apply to the analysis, design and evaluation of interactive systems independent of any interaction technique. It is the standards counterpart to Nielsen's ten heuristics. The seven are: suitability for the user's tasks, self-descriptiveness, conformity with user expectations, learnability, controllability, use error robustness and user engagement. The order does not imply priority, and the standard says applying a single recommendation does not mean a principle is fully satisfied.

### Specifics

Evidence type: consensus standard. Read from the free preview (the full document is paywalled), which includes the foreword, introduction, scope, definitions, clause 4 in full and the table of contents of clause 5.

Definitions of the seven principles (clause 4.1, paraphrased): suitability for the task, the functions and interactions are based on the task, not the technology; self-descriptiveness, the system presents information where needed so its capabilities and use are immediately obvious without unnecessary interactions; conformity with user expectations, behavior is predictable from the context of use and accepted conventions; learnability, the system supports discovery, allows exploration, minimizes the need for learning and supports learning when needed; controllability, users keep control of the interface and interactions, including speed, sequence and individualization; use error robustness, the system helps avoid errors, treats identifiable errors tolerantly and helps recovery; user engagement, functions and information are presented in an inviting and motivating way that supports continued interaction.

Recommendations are grouped (Table 1): suitability (identifying suitability for a task; optimizing effort; defaults supporting the task); self-descriptiveness (presence and obviousness of information; clear indication of processing status); conformity (appropriate behavior and responses; internal and external consistency; changes in the context of use); learnability (discovery, exploration, retention); controllability (interruption by the user, flexibility, individualization); use error robustness (avoidance, tolerance, recovery); engagement (motivating the user, trustworthiness, increasing involvement). Annex A is an informative checklist.

Changes from 2006: individualization was merged into controllability, user engagement is new, and other principles and recommendations were revised. The recommendations are described as derived from ergonomics research and from heuristic guidance including Bastien, Dzida, Molich, Nielsen and Tognazzini. The standard notes that principles overlap and that trade-offs are needed: its smart-watch example gives conformity with expectations higher priority because the display cannot support self-descriptiveness.

Scope limits: the standard excludes marketing, aesthetics and corporate identity, and says it does not cover the specifics of every application domain, naming safety-critical systems, collaborative work and AI features.

### Replication and criticism

As a standard it is revised through committee, not tested. Its content converges with Nielsen (1994), Shneiderman and Norman, which is an argument for robustness of the shared ideas but also means the lists are not independent evidence of each other: all draw on the same earlier heuristics. The addition of user engagement in 2020 reflects a shift toward motivation, which earlier lists lacked and which has no strong empirical grounding in this document.

### Implications for LTF

Use the seven principles as the vocabulary for LTF design reviews alongside Nielsen's ten, since they add two things the Nielsen list lacks: learnability as its own principle (discovery, exploration and retention map onto lesson design), and user engagement (motivation, trustworthiness). Trustworthiness matters for a teaching product that touches aviation: the standard's category, with the scope note that safety-critical domains are not covered, is a reason to keep LTF's content verification visible. Use "suitability for the task" to keep widgets tied to what the learner is doing in the sim, not to what is technically easy to render. Use the checklist in Annex A only after obtaining the full standard.

Confirmed this session: read the free preview of ISO 9241-110:2020 (cdn.standards.iteh.ai/samples/75258/83c8cf072187487686645aad04eff40e/ISO-9241-110-2020.pdf, 13 pages as text); web search of ISO and iteh records (second edition, replaces 2006). Not read: clause 5 recommendations in full.

## smith1986guidelines

Smith, S. L., & Mosier, J. N. (1986). Guidelines for designing user interface software (Report ESD-TR-86-278). The MITRE Corporation, Bedford, MA, for the Electronic Systems Division, U.S. Air Force Systems Command.

### Core claims

Smith and Mosier compiled the most comprehensive collection of user interface guidelines of its time: 944 guidelines for software that implements the interface of computer-based information systems, organized into six functional areas. The report revises and extends earlier Air Force guideline compilations and is meant as a practical tool for system analysts, software designers and managers: to set design requirements, to coordinate decisions and to evaluate software. The authors are candid about its limits: guidelines are not rules, many rest on judgment rather than experiment, and they must be tailored into enforceable design rules for each project.

### Specifics

Evidence type: a government-sponsored compilation of guidelines drawn from literature, practice and expert judgment. It is neither an experiment nor a meta-analysis. I read the report's introduction as reproduced on hcibib.org/sam/, and Nielsen's later review of a sample of the guidelines.

Organization: six sections with these guideline counts: data entry 199, data display 298, sequence control 184, user guidance 110, data transmission 83, data protection 70 (these sum to 944, which matches the figure in Nielsen's review). Within each section guidelines are grouped by function. Each has a number, a short title and a single-sentence statement; related guidelines are cross-referenced; examples may be followed by noted exceptions; supplementary comments explain reasoning; reference notes cite sources by author and date. The report excludes hardware design, physical workstation factors, training and documentation.

Intended use, as the introduction describes it: not every guideline applies to every system, so designers must select relevant ones, resolve conflicts and prioritize under budget and schedule. Guidelines should be tailored into specific design rules by a team (analysts, human factors specialists, software designers, managers, possibly users), documented, given an exception process and perhaps weighted. The authors say guidelines should be offered as a resource, not imposed as a contractual standard, because "It is only specifically worded design rules that can be enforced, not guidelines." Task analysis should precede tailoring and prototype testing with users should follow initial design. The introduction also reports a 1986 survey in which respondents applied only about 40 percent of the guidelines from the previous edition.

Nielsen's review (nngroup.com, Alertbox; the URL suggests January 2005): he reviewed a stratified sample of 60 guidelines, 10 from each section (opening the report to the middle of each section and taking the first ten from the upper left page). Of these he annotated 13 and left 47 uncommented, meaning he considered them still correct. Seven were outdated: the guidelines on field markers and automatic justification, on a distinctive label format (now done automatically), on single activation of function keys and on a single key for continuous functions, on display identification, and on redistributing messages (intent kept, advice no longer relevant). Six annotated guidelines still hold with caveats. He notes that the data protection section "remains highly relevant" and that function-key guidance reflects the mainframe era.

### Replication and criticism

The report's weakness is the one its authors name: the evidence behind individual guidelines varies, and citation does not imply supporting data. Nielsen's sample suggests a high survival rate of the underlying principles (53 of 60 by a simple count, with the exceptions tied to obsolete technology) but this is a single expert's judgment on a small, non-random-within-section sample, and it says nothing about the other 884. The 40 percent application figure in the report itself shows that large guideline lists are often ignored. Later work moved from long lists to short heuristic sets (Nielsen and Molich 1990, who cite this report as the source of roughly a thousand rules) for exactly that reason.

### Implications for LTF

LTF does not need a thousand guidelines, but it does need the report's method. Write a short set of LTF-specific design rules in enforceable wording (for example "every altitude states MSL or AGL" and "every control name matches the sim's name"), with a defined exception process, instead of general guidelines that cannot be checked. Group them by function (entry, display, sequence, guidance) so reviewers can find them. Expect to review them as technology changes, as Nielsen found for function keys. Remember the finding that large lists go largely unapplied: keep the LTF rule set short, tied to a checklist used in reviews, and test it with real reviewers.

Confirmed this session: hcibib.org/sam/ (introduction, counts per section, use and caveats); nngroup.com/articles/sixty-guidelines-from-1986-revisited/ (sample of 60, seven outdated, 944 total); search results listing the report number ESD-TR-86-278 and date August 1986. I did not read the guidelines text of individual sections.

## brooke1996sus

Brooke, J. (1996). SUS: A "quick and dirty" usability scale. In P. W. Jordan, B. Thomas, B. A. Weerdmeester, & I. L. McClelland (Eds.), Usability evaluation in industry (pp. 189-194). Taylor & Francis.

### Core claims

Brooke presents the System Usability Scale (SUS), a ten-item questionnaire that gives a single score from 0 to 100 for the perceived usability of any system. It was designed to be "quick and dirty": cheap to administer, usable on small samples, and technology-independent. The UCL summary of the chapter describes it as a reliable, low-cost scale for global assessments of system usability. SUS measures how users feel about a system overall; it does not diagnose what is wrong.

### Specifics

Evidence type: a short practitioner chapter introducing an instrument (the chapter itself is about six pages), later supported by research by other authors. I did not read the chapter. The facts below are from a catalogue summary of it and from an author-run benchmarking page.

Format (UCL construct database summary): ten statements, each answered on a five-point scale from "strongly disagree" to "strongly agree". The standard statements, as listed on the MeasuringU page, alternate positive and negative wording: I think that I would like to use this system frequently; I found the system unnecessarily complex; I thought the system was easy to use; I think that I would need the support of a technical person to be able to use this system; I found the various functions in this system were well integrated; I thought there was too much inconsistency in this system; I would imagine that most people would learn to use this system very quickly; I found the system very cumbersome to use; I felt very confident using the system; I needed to learn a lot of things before I could get going with this system.

Scoring (MeasuringU, the site of Jeff Sauro, co-author of Quantifying the User Experience): for odd items subtract 1 from the response; for even items subtract the response from 5; add the ten converted values and multiply by 2.5, giving 0 to 100. The page cautions that SUS scores are not percentages and should be reported as percentile ranks. It states that the average across about 500 studies is 68, that raw 74 is around the 70th percentile (B minus), that a score above 80.3 is top 10% (A), 68 is a C and below 51 an F. It adds that SUS can be used with as few as two users but small samples give imprecise estimates, so a confidence interval should be reported; that items 4 and 10 measure learnability and the other eight usability; that SUS is not diagnostic; and that its correlation with task performance is modest (about r = .24, around 6% of variance).

Bibliographic notes: the chapter is in Usability Evaluation in Industry (Jordan, Thomas, Weerdmeester and McClelland, eds.; Taylor & Francis; 1996, based on an international seminar), pp. 189-194 per Brooke's own citation. Wikipedia attributes SUS to Digital Equipment Corporation in the mid-1980s, but I did not confirm that from a primary source and treat the 1996 chapter as the publication.

### Replication and criticism

SUS has been studied heavily by others: Bangor, Kortum and Miller (2008) analyzed a large data set; Lewis and Sauro (2009, "The factor structure of the System Usability Scale", Crossref record seen this session) examined whether it has two factors, usability and learnability (items 4 and 10), a finding described in the MeasuringU page. The original chapter reported no pretests, per a database listing. The main criticisms are practical: SUS gives a number without reasons; the 68 benchmark is an average of mixed products, not a pass mark; and the score should not be read as a percentage.

### Implications for LTF

SUS is a candidate satisfaction measure for LTF beta tests, but it must be paired with observation because it is not diagnostic. Administer it after a defined task, not after a casual visit, and report percentiles and a confidence interval, not the raw score alone. Because LTF will have small early samples, do not compare two versions on SUS unless the sample is large enough to show a real difference. Item wording refers to "this system", so name the product (LTF, not the simulator) when asking; the learner might otherwise rate the sim. Do not edit the items without checking, since changed wording makes the benchmarks inapplicable.

Confirmed this session: web search results and the UCL constructDB page (verdi.cs.ucl.ac.uk/constructDB/publications/brooke-susa-1996.html) for format and citation; Routledge book page (Usability Evaluation in Industry, Taylor & Francis/CRC, 1996) and search for pp. 189-194; measuringu.com/sus/ for items, scoring and benchmark statements; Crossref for Lewis and Sauro (2009). Not read: the chapter itself.
