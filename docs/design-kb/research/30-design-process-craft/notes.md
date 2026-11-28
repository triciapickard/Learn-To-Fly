# Lane 30: Design process and craft

Evidence base for how great work gets made: process, critique, iteration, prototyping, sketching, constraints, detail and finish, and the writings of noted practitioners. Evidence types are labeled in each section (experiment, craft treatise, theory, practitioner memoir, opinion). Aviation facts are never stated here; the notes describe design method only.

## tohidi2006getting

Tohidi, Buxton, Baecker and Sellen (2006), "Getting the Right Design and the Design Right: Testing Many Is Better Than One", CHI 2006, pp. 1243-1252.

### Core claims

The paper is a controlled experiment about usability testing of paper prototypes. Its central finding is that people who test a single design inflate their ratings and hold back criticism, while people shown the same design next to two alternatives rate it lower, criticize it more, and praise it less. The authors read this as faint praise: a lone prototype invites politeness, and a field of alternatives frees the participant to be honest. They also report a negative result they did not expect. Showing several designs did not produce more constructive suggestions for improvement. In their words, usability testing "is a means to identify problems, not provide solutions" (abstract, as quoted on the Microsoft Research record and in the paper). The title plays on a distinction the authors build their work on: getting the design right (refining one idea) versus getting the right design (exploring alternatives first).

### Specifics

Design: between-subjects. Forty-eight participants (26 female, 22 male), students or recent graduates from many disciplines at the University of Toronto, randomly assigned. Twelve saw all three prototypes (the Multiple condition) and twelve each saw only one of the three. The product was a house climate control system for a touch screen, built as hand-drawn paper prototypes on 5 by 8 inch index cards, laminated, with a person playing "the computer". The three prototypes were deliberately different in style: Circular (round dials and analog clocks), Tabular (drop-down lists) and Linear (horizontal timelines and sliders). All three were built by the same team to similar fidelity and had identical functions.

Procedure: four tasks (create a weekend setting, create a vacation setting, reset the time and date, override the temperature), think-aloud, then a questionnaire of ten-point scales covering ease of use per task, seven design dimensions (aesthetics, readability, consistency, real-world metaphors, navigation, explorability, learnability) and an overall usability rating, then a semi-structured interview.

Ratings (mean of the first eleven items, Mann-Whitney U, one-tailed): Circular 9.08 alone versus 8.13 in a group of three (p = 0.004); Tabular 8.83 versus 8.39 (p = 0.064, not significant at .05); Linear 7.92 versus 6.89 (p = 0.014). So every design scored lower when seen among alternatives, with two of three differences significant.

Comments: the team analyzed 24 of the 48 video tapes (six per cell), extracting 337 statements, coded by two independent judges with Cohen's kappa agreement reported as 85%. Positive comments per design fell significantly when seen in a group (Circular 6.42 to 2.67; Tabular 4.75 to 2.17; Linear 5.83 to 2.33). Negative comments rose significantly only for the Linear design, the lowest rated, where the Multiple-condition total was 70 negative comments against 11.5 for the single Linear condition. Substantial suggestions did not differ significantly between conditions.

### Replication and criticism

This is one experiment with modest cells (twelve per condition, six per cell for the comment coding), a single product domain and a student sample, so it is best read as a well-motivated demonstration, not a settled effect size. The authors themselves hedge that "without further study" the validity of the positive or negative comments is unknown. The Tabular rating difference missed significance. The paper quotes Wiklund and colleagues and Dicks on participants' reluctance to be critical, and its advice to test more than one alternative aligns with Dow et al. (2010) in this lane. The result on suggestions is a useful counterweight to enthusiasm: users find problems well but rarely design solutions. The paper's design-practice claim rests on expert opinion (a quoted design vice president on pitching several ideas), which is craft testimony, not data.

### Implications for LTF

Learner feedback about LTF lessons will skew positive when people see one version. When LTF tests a lesson layout, a fly-mode screen or a checklist widget with real learners, it should show two or three stylistically different versions in the same session and compare reactions, rather than asking "do you like this?" of a single design. Ask learners to find problems and rank, not to propose fixes; fixes are the designer's job. For a beginner audience that may defer to an "official-looking" product, expect even more politeness, so rely on task failures and hesitations observed in the sim, not on ratings. Treat satisfaction scores from a single prototype as an upper bound. For fly-mode, paper alternatives of the layout are cheap to test before any React code exists.

Confirmed this session: full text read (PDF from billbuxton.com/rightDesign.pdf, extracted locally), Microsoft Research record (microsoft.com/en-us/research/?p=151922), Crossref record for DOI 10.1145/1124772.1124960 (query.bibliographic search).

## dow2010parallel

Dow, Glassco, Kass, Schwarz, Schwartz and Klemmer (2010), "Parallel Prototyping Leads to Better Design Results, More Divergence, and Increased Self-Efficacy", ACM Transactions on Computer-Human Interaction 17(4).

### Core claims

Iteration is central to design learning but can cause fixation: refining one option steadily without looking at others. The paper tests whether making several prototypes in parallel and getting critique on the set, rather than refining one at a time, improves outcomes. Its answer from a controlled experiment is yes on three fronts: better measured quality (click-through data and expert ratings), more divergent designs, and larger gains in task-specific self-confidence. The authors also report that serial participants reacted worse to critique. The paper offers a theoretical account of why juxtaposing alternatives helps: comparison teaches principles, the design space is better explored, and critique is easier to absorb when it is not attached to a single beloved prototype.

### Specifics

Design: between-subjects, thirty-three novice and experienced participants (average age 22; about half had prior graphic or ad design experience, fourteen per the paper) designing 160 by 600 pixel web banner ads for a magazine client named in the paper (Ambidextrous). In both conditions each person made five prototype ads and then a final ad, and received descriptive critique on every prototype, with equal time per prototype. In the Serial condition critique arrived after each prototype. In the Parallel condition participants made three prototypes, received critique on all three, made two more and received critique again, then made the final ad. Note that this makes the Parallel condition an explore-then-refine hybrid, which is a fair reading of the design.

Measures: the 33 final ads ran in a real MySpace campaign for 15 days, receiving 501 total clicks on 1,180,320 impressions (an average click-through rate of 0.0424 percent, or 424 clicks per million impressions). The two top click-through ads were both Parallel (735 and 578 clicks per million impressions). During the first five days, when impressions were about equal, Parallel ads had 44 clicks on about 79,800 impressions against 26 clicks on about 79,658 for Serial (chi-square 4.60, p < 0.05). Independent professional raters also scored Parallel ads higher, and independent raters judged Parallel sets more diverse. Self-efficacy (a 20-point task-specific scale) rose for all participants on average from 10.85 to 12.12, with the Parallel group gaining significantly and the Serial group not. In interviews nearly half of the Serial participants reported negative reactions to critique; no Parallel participant did. Experienced participants outperformed novices on click-through, and their ads were less diverse than novices'.

### Replication and criticism

The effect has an unusually concrete outcome measure (real clicks), which is a strength, but the sample is small and the population is students, and click-through rates were tiny in absolute terms. The paper reports that click performance was not a good predictor of the rated quality (an R-squared of 0.032 appears in the text), so "better" depends on the yardstick. The conditions differ in more than parallelism: the Parallel group saw its first feedback later and had an explicit second round. A later CHI 2011 paper from the same group, titled Prototyping Dynamics, appears in search results; this note did not read it. The study is consistent with Tohidi et al. (2006), but both are experiments with modest samples, not meta-analyses.

### Implications for LTF

When designing a new widget (for example an interactive attitude indicator explainer or a checklist runner), sketch three or more genuinely different approaches before refining any, and collect critique on the set. Keep critique descriptive and tied to goals. For the content team, apply the same rule to lesson openings and challenge briefings: draft several, compare, then refine. Expect the team's own confidence to rise too, which matters for a small project. When evaluating results, use a behavioral metric (completion, errors, time to find a control) alongside expert judgment, because the paper shows that the two can disagree.

Confirmed this session: full text read (Stanford HCI PDF ParallelPrototyping2010-submitted.pdf, extracted locally; author list, abstract and all figures quoted above come from it), Crossref record for DOI 10.1145/1879831.1879836, WebSearch summary of the published version.

## cross1982designerly

Cross (1982), "Designerly Ways of Knowing", Design Studies 3(4), pp. 221-227.

### Core claims

Cross argues that design is a "third area" of education and inquiry beside the sciences and the humanities, with its own things to know, ways of knowing them and ways of finding out about them. He wants design education justified on intrinsic grounds (what students come to understand), not merely vocational ones. He then gathers early observational evidence that designers think differently from scientists: they solve problems by proposing solutions and learning from them, not by analysing the problem exhaustively. Designers satisfice, impose a "primary generator" to bound an ill-defined problem, and treat problem and solution as developing together. Design knowledge, he says, is held largely tacitly in people and also embodied in objects.

### Specifics

Contrasts the paper draws (as lists in the text): phenomenon of study (sciences: the natural world; humanities: human experience; design: the man-made world); methods (sciences: controlled experiment, classification, analysis; humanities: analogy, metaphor, criticism, evaluation; design: modelling, pattern-formation, synthesis); values (sciences: objectivity, rationality, neutrality, concern for truth; humanities: subjectivity, imagination, commitment, concern for justice; design: practicality, ingenuity, empathy, concern for appropriateness).

Evidence cited: Lawson's block experiment. Postgraduate architecture and science students were set problems of arranging coloured 3D blocks under rules, some of them not disclosed at first. Scientists mostly explored combinations systematically to find the rule (a problem-focused strategy); architects proposed a series of solutions and had them eliminated until one was acceptable (a solution-focused strategy). Cross reports that Lawson found first-year architecture students and sixth-form school students could not be told apart by strategy, suggesting the designerly strategy is learned. Other named ideas: Simon's satisficing; Rittel-style "wicked" (ill-defined) problems; Jones's remark that changing the problem to find a solution is the most challenging part of designing; the "primary generator" that both limits the problem and suggests a solution; Alexander's constructive diagrams and pattern language; the observation that designers' knowledge of their own process is largely tacit, so teaching leans on apprenticeship; and a second area of "knowledge in the products", the wealth of knowledge carried in the objects of material culture.

### Replication and criticism

This is a position paper, not an experiment, and it leans on a few early observational studies. Cross developed the ideas in later design-cognition work (Dorst and Cross 2001 in this lane is an example). The neat three-way contrast is a model Cross himself calls "a useful, if crude, way" of beginning to be articulate about design. A later essay titled "Delightful Phrase: Are there really designerly ways of knowing?" shows the phrase has been questioned, but this note did not read it. As craft-theory and observational evidence, treat it as a framework, not a result.

### Implications for LTF

LTF teaches a skill learned by doing, so the lesson design should favor concrete attempts followed by feedback, the same solution-first pattern Cross describes: let the learner try a pitch correction in the widget and see what happens before the full theory. Because experts hold knowledge tacitly, LTF's authors (and any pilot or instructor consulted) will find it hard to state what they actually look at; plan interviews and observation, not just questionnaires, when extracting expert scan patterns for fly-mode. The "problem-focused versus solution-focused" distinction also warns that LTF's design process should not wait for complete requirements: build and show early. Finally, the values list (practicality, ingenuity, empathy, appropriateness) is a usable check on whether a screen serves a nervous beginner.

Confirmed this session: full text read (Readings.design PDF of the 1982 paper, extracted locally), Crossref record for DOI 10.1016/0142-694x(82)90040-0.

## rittel1973dilemmas

Rittel and Webber (1973), "Dilemmas in a General Theory of Planning", Policy Sciences 4(2), pp. 155-169.

### Core claims

The authors argue that the social professions mistakenly tried to behave like applied scientists. Science handles "tame" problems, where the problem can be stated completely and the solver knows when it is solved. Planning and policy problems are "wicked": they cannot be definitively described, have no stopping rule, and cannot be solved in the sense of final, objective answers, only "re-solved over and over again". They label wicked problems by ten properties and argue that treating a wicked problem as tame, or taming it prematurely, is morally objectionable. The paper is about city planning and social policy, not product design, but it became the standard citation for open-ended design problems.

### Specifics

The ten properties, as stated: (1) there is no definitive formulation of a wicked problem (formulating the problem is the problem, because every specification of the problem is a specification of a direction of treatment); (2) wicked problems have no stopping rule (the planner stops because of time, money or patience, saying "that's good enough"); (3) solutions are not true or false but good or bad; (4) there is no immediate and no ultimate test of a solution; (5) every solution is a "one-shot operation" because there is no opportunity to learn by trial and error, every attempt counts; (6) there is no enumerable set of potential solutions or well-described set of permissible operations; (7) every wicked problem is essentially unique; (8) every wicked problem can be considered a symptom of another problem; (9) the discrepancy can be explained in numerous ways, and the choice of explanation determines the resolution; (10) the planner has no right to be wrong.

Other claims: the "first generation" systems approach (understand the problem, gather information, analyze, synthesize, solve) fails for wicked problems because one cannot understand the problem without a solution concept; "second generation" approaches should model planning as an argumentative process in which an image of problem and solution emerges gradually. The paper also warns about incrementalism: attacking a problem at too low a level, small improvements can make higher-level problems harder.

### Replication and criticism

This is theory and argument by example, not empirical research, and its ten properties are a descriptive list, not a tested model. A limitation visible from the text itself: the ten properties are asserted with examples from planning, not tested, and they are offered as a distinguishing list for a class of problems. In design research, property 5 (no trial and error) does not hold for software and prototypes, which can be tried cheaply, so the paper's design relevance is strongest for properties 1, 2, 3, 6 and 9. Cross (1982) cites it for ill-defined design problems. Its warning about incrementalism (property 8) resonates with the hill-climbing argument in Norman and Verganti (2014).

### Implications for LTF

"How should we teach a complete beginner to fly in a simulator?" is wicked: its formulation depends on the solution you imagine, and there is no stopping rule. The practical lesson is to set stopping rules from outside (a release date, a count of lessons, a completion benchmark) and accept "good enough" explicitly, and to record decisions, since good-or-bad judgments differ between learners, instructors and the owner. Because LTF's content can be tested cheaply, treat property 5 as inapplicable to screens but relevant to anything irreversible, such as publishing a lesson learners will rely on for real-world habits. Challenge and quiz design should name the explanation chosen for a learner error (property 9), since different explanations lead to different remedies.

Confirmed this session: full text read (EPA-hosted PDF archive.epa.gov/reg3esd1/data/web/pdf/rittel+webber+dilemmas+general_theory_of_planning.pdf, extracted locally), Crossref record for DOI 10.1007/BF01405730.

## norman2014incremental

Norman and Verganti (2014), "Incremental and Radical Innovation: Design Research vs. Technology and Meaning Change", Design Issues 30(1), pp. 78-96.

### Core claims

Human-centered design (HCD), the iterative cycle of observation, ideation, rapid prototyping and testing, is a form of hill climbing. It reliably improves a product up to the top of the hill it is already on, but it cannot tell you whether a higher hill exists elsewhere. The authors argue that radical innovation, a change of frame, comes either from a technology change or from a deliberate change in the meaning of the product, not from HCD or design research. Once a radical product exists, HCD is "invaluable" for improving it. Both kinds of innovation are needed: radical innovation opens a new domain, and incremental innovation is how the value of that potential is captured.

### Specifics

The paper provides three framings: hill climbing in an unknown terrain; movement in a space defined by "technology change" and "meaning change" axes; and a design-research quadrangle based on Stokes's two dimensions of advances in understanding and consideration of practicality. The hill-climbing figure labels points A (start), B (the peak of the current hill after incremental work), and C (a different, larger hill reached by radical change), and notes that the first outcome after the jump is often inferior to B, so HCD is then needed to climb the new hill. Norman describes hill climbing as making tiny movements along all design dimensions and keeping whichever raises quality, like a blindfolded person feeling the ground around them, and notes that such procedures get trapped in local maxima.

Definitions: incremental innovation is "improvements within a given frame of solutions" (doing better what we already do); radical innovation is "a change of frame" (doing what we did not do before). The authors borrow three criteria from Dahlin and Behrens for a radical invention: novel, unique and adopted. The first two define radicalness, the third success. Examples used: indoor plumbing, electric lighting, the automobile, airplane, radio and television, Facebook and Twitter (radical changes arising without design research), Edison's light bulb (improvement plus an infrastructure system), Apple's multi-touch (not invented by Apple; multi-touch systems had been in laboratories for more than 20 years), and the video game console market (Sony and Microsoft followed technology change; Nintendo, using new sensor technology, changed the meaning from games for experts to games for everyone). They report a citation that Larry Keeley of Doblin estimates the failure rate of radical innovation at 96 percent, via a Business Week article; that figure is the paper's relayed estimate, not measured here. The paper adopts design as "making sense of things", citing Krippendorff.

### Replication and criticism

This is a conceptual argument with illustrative cases, not an experiment. Norman reports that he tried to find counterexamples, an instance of radical innovation produced by HCD, and failed; that is absence of evidence in a non-systematic search, which is suggestive but not conclusive. A follow-up correspondence exchange in Design Issues (Langrish, Norman and Verganti, 2014, Design Issues 30(3), pp. 104-107) shows the thesis drew a reply, but this note did not read it. The editorial introduction to the special issue summarizes the claim as HCD being "ideally suited for incremental innovation and unlikely to lead to radical innovation". A limitation of the metaphor (my observation, not the authors'): it treats quality as one landscape, whereas real products have competing stakeholders. The authors say their account is neutral between technological and social determinism.

### Implications for LTF

LTF is mostly a hill-climbing project, and that is appropriate: a learner-facing app is improved by observation, quick prototypes and testing, which is exactly what keeps lessons clear and fly-mode usable. The paper's useful warning is about the frame. If the frame is "a lesson site with videos and quizzes", HCD will polish it. Frame changes for LTF would be things like the learner using a second screen with live sim state, or a challenge system that reads sim telemetry. Those are technology or meaning changes, and no amount of user testing of the current layout will produce them. So set aside deliberate time to question the frame (what is the meaning of a "lesson" for a nervous beginner?) and use HCD afterward to refine the result. Also use the point that early radical versions are often worse than the polished incremental alternative: a pilot of a new interaction should be judged against its potential, not against a refined baseline.

Confirmed this session: full text read (eScholarship PDF escholarship.org/uc/item/0mr972w6, extracted locally), the editorial introduction in Design Issues 30(1), Crossref records for DOI 10.1162/desi_a_00250 and the correspondence 10.1162/desi_c_00286.

## lawson2005how

Lawson (2005), How Designers Think: The Design Process Demystified, 4th edition, Architectural Press (Elsevier); first published 1980.

### Core claims

Drawing on decades of observing designers at work and interviewing designers, clients and collaborators, Lawson argues that designing is a learnable skill, that everyone can design and ability can be improved, and that the design process can be described as a set of recognizable thinking types, strategies, tactics and traps, working toward a model of designing. He rejects the idea that the process can be reduced to a measurable, sequential method. The book is not presented as a prescription for how designers should think, and it is meant to be read with a companion volume, What Designers Know.

### Specifics

Publisher's table of contents for the 4th edition: Part 1 What is design (the changing role of the designer; route maps of the design process); Part 2 Problems and solutions (the components of design problems; measurement, criteria and judgement in design; a model of design problems; problems, solutions and the design process); Part 3 Design thinking (types and styles of thinking; creative thinking; guiding principles; design strategies; design tactics; design traps; design as conversation and perception; towards a model of designing).

Chapter 5, "Measurement, criteria and judgement in design" (an excerpt of which I read; pages 70, 71 and 74 of the book were read closely), contains several concrete points. Lawson warns that it is tempting to use more precise measurement than a design situation deserves, and invokes Stevens's scales of measurement (ordinal versus interval and ratio) to argue that numbers can lend false respectability. He describes students submitting thermal analyses with heat loss computed "down to the last watt" who cannot say how many kilowatts are lost when a door is open for a few minutes, and says a designer needs a feel for the meaning behind numbers more than precise calculation. His worked example is Axel Boje's open-plan office study: about 7 seconds to open and close a door, rooms changed about 11 times a day in a 100-person, 25-room office, giving 32 door movements or 224 seconds saved per person per working day, and an extrapolated saving of some 2000 minutes per month per employee. Lawson's point is that such figures are "quite useless" unless one also knows how important 7 seconds is, and calls it a "numerical measuring disease". He also notes that scientists have tried to develop increasingly precise tools for assessing design but there is little evidence that this helps designers or improves standards. Finally, he reports that in a legislative standard for housing (Parker Morris kitchen layouts), of three recommendations only the one most easily measured from an architect's drawing became mandatory, and that those Mandatory Minimum Standards were later withdrawn.

Cross (1982) reports Lawson's block-problem experiments comparing architects and scientists; see that section for the details.

### Replication and criticism

How Designers Think is a synthesis of observational studies, case interviews and practitioner reasoning, so it is expert description, not controlled evidence. As Cross (1982) reports it, Lawson's comparison of designers with scientists used student participants and a block-arranging task; whether it generalizes to professional practice is a question this note cannot settle. Schön's reflective practitioner and Dorst and Cross's co-evolution of problem and solution (both in this lane) cover overlapping ground with different methods. The ebook listing sources disagree on whether the 4th edition added two or three new chapters; the publisher page says three. A reader should treat the book as a taxonomy of how designers report thinking rather than as a validated model.

### Implications for LTF

The measurement chapter is the most directly useful for a product that will have dashboards and progress metrics. LTF should resist over-precise indicators for learner progress: a percentage that implies decimal accuracy about "readiness" is a numerical measuring disease. Use coarse bands (not started, practicing, steady) backed by observable performance in challenges. Beware the Parker Morris effect: what is easiest to measure (quiz score, lesson count) tends to become the requirement, while harder qualities (judgment, situational awareness) vanish from the design. For design reviews, build "criteria and judgement" explicitly: write the criteria, then also record the judgment call, instead of scoring options with weighted sums.

Confirmed this session: publisher page (Routledge, 4th edition, table of contents), a Lawson chapter excerpt read page by page from the KTH-hosted PDF of the 4th edition (images read, pages 70 to 74 cited), Open Library record OL2084632W, summary of the block experiment from Cross (1982).

## schon1983reflective

Schön (1983), The Reflective Practitioner: How Professionals Think in Action, Basic Books.

### Core claims

Secondary accounts quote Schön that "competent practitioners usually know more than they can say". Skilled practitioners exhibit knowing-in-action, an intuitive competence developed through practice, and when surprised they engage in reflection-in-action: thinking about what they are doing while doing it. Design is a primary example: the designer has a "reflective conversation with the situation", makes a move (a sketch, a line), sees what it implies (including unintended consequences), and then reframes the problem. The professional's task is to set the problem (frame it) rather than only solve a given one.

### Specifics

Sources read this session are secondary and one interview with Schön. Concepts: knowing-in-action (tacit, skilled performance, such as walking); reflection-in-action (thinking while acting, triggered by surprise; the interview gives jazz improvisation as an example); reflection-on-action (reviewing afterward); the situation "talking back" to the designer; moves with side effects ("no direct path" between intention and result); and evaluation of moves by asking whether the consequences are desirable, whether the design still fits earlier moves, and what new problems or possibilities the move created. In the interview Schön also describes an architect who sketches a building on a site's contours, finds the contours work against the form, and reframes the problem as imposing a geometry. A second article (Malinin, ARDETH) summarizes the book's best-known case, the studio exchange between the master Quist and the student Petra: Quist lays tracing paper over her plan, draws while talking with deictic words ("here", "this"), tries a sketch arranging three L-shaped classrooms into the slope, and tests the frame through section drawings; drawings are "things to think with". Schön also calls the internal sense of quality in a designer a "gyroscope" in the interview, one that develops over years.

### Replication and criticism

Schön's evidence is detailed case analysis of protocols and transcripts, which is qualitative and interpretive. The article by Malinin reports criticisms: Eraut (2004) and Webster (2008) say the constructs lack clarity; reflection-in-action and reflection-on-action are hard to separate; Schön's examples (jazz, pitching) seem to contradict his claim that reflection interferes with action; Boud and Walker (2002) and Webster (2008) say context and power are ignored; Mewburn (2012) notes the power dynamic between Quist and Petra. A search summary also attributes to Roozenburg and Dorst the judgment that, taken as an empirical theory, Schön's theory of reflective practice is weak and fuzzy; this was not read in the original. Even critics agree the vocabulary (framing, backtalk, moves) has proved durable in design research and education.

### Implications for LTF

The "conversation with the situation" is a direct model for the learner using LTF alongside the simulator: they take an action in the sim, the aircraft responds, and the lesson should help them read that backtalk. Fly-mode copy should name what to watch for after a control input, not only what to do. For the LTF team, build a sketch-and-look loop: any widget (for example an airspeed tape) should be drawn in rough form and examined in context, because the problems appear only when the thing exists. Schön's warning about "falling in love with an initial design idea" (reported in the interview as a tacit habit that accumulates) argues for a standing review where someone other than the author names what the design is doing wrong. The notion of a tacit "gyroscope" suggests LTF should recruit reviewers with real taste for the domain, not just checklists.

Confirmed this session: Stanford HCI chapter (hci.stanford.edu/publications/bds/9-schon.html, an interview with Schön), a read of the ARDETH article (journals.openedition.org/ardeth/754), WebSearch summary of publisher and review pages, Open Library record OL3466056W. The book itself was not read in full.

## buxton2007sketching

Buxton (2007), Sketching User Experiences: Getting the Design Right and the Right Design, Morgan Kaufmann (Elsevier).

### Core claims

Buxton's book pairs careful engineering and usability work with early sketching and ideation, and distinguishes two phases that are often confused: "getting the right design", an exploratory phase of sketching and ideation to choose a direction, and "getting the design right", the refinement and usability engineering phase. One chapter is titled "Sketches are not Prototypes". On the standard reading, sketches are quick, cheap, plentiful things made to explore and to ask questions, and they belong early; prototypes are fewer and test and resolve. The publisher describes the aim as "informed design", shaping emerging technology to serve society.

### Specifics

Structure (publisher's table of contents): Part I "Design as Dreamcatcher" includes a case study on Apple, design and business, the role of design, a sketch of the process, the cycle of innovation, the anatomy of sketching, experience design versus interface design, sketching interaction, "Sketches are not prototypes", where the user is in all this, the object of sharing, annotation, and design thinking and ecology. Part II, "Stories of Methods and Madness", includes the Wizard of Oz technique, Chameleon, bricolage, visual storytelling, simple animation, "Shoot the Mime", the bifocal display, video "invisionment", and interacting with paper. Part III is recapitulation and coda.

Characteristics of a sketch as listed in lecture slides by Greenberg and colleagues that synopsize Buxton (University of Calgary, per a search summary; I could not confirm them in Buxton's own wording): quick and inexpensive, plentiful, timely (when needed), minimal detail, appropriate degree of refinement, suggest and explore rather than confirm, and ambiguity. Treat the wording as the slides' list. Tohidi, Buxton, Baecker and Sellen (2006), in this lane, supplies Buxton's experimental support: seeing three designs produced more honest critique than one.

### Replication and criticism

The book is craft argument and teaching synthesis, not a controlled study. Its evidence is case stories and the author's long industry career. The sketch-versus-prototype distinction is widely taught, but an Interaction Design Foundation article I read presents the characteristic list (quick, timely, disposable, plentiful, minimalist) as its own, not Buxton's, so the list varies across secondary sources. Dow et al. (2010) offers experimental backing for the parallel-alternatives practice that Buxton advocates. A limitation is that several of its case chapters (the bifocal display, video, paper interaction) concern novel interaction hardware and media, so web-lesson design must translate the lessons.

### Implications for LTF

Use sketch-level artifacts for all early LTF decisions: paper or whiteboard layouts of the fly-mode screen, a flow of a challenge briefing, three versions of a lesson opener. Mark them visibly rough so learners and reviewers critique structure, not polish. Produce many sketches (the point is volume), then fewer prototypes in the React app. Separate the two questions in project planning: "right design" sprints (diverge, compare, choose) before "design right" sprints (accessibility, copy, edge cases, performance). Use Wizard-of-Oz techniques (a person simulating sim feedback) to test fly-mode flows before any telemetry integration exists.

Confirmed this session: publisher page (shop.elsevier.com, description and table of contents), Open Library record OL7940434W, WebSearch results on sketch characteristics (Calgary slides, secondary), Interaction Design Foundation article (fetched), and the Tohidi et al. paper.

## brooks2010design

Brooks (2010), The Design of Design: Essays from a Computer Scientist, Addison-Wesley Professional, 448 pages.

### Core claims

Brooks, best known for software engineering, studies design across fields (software, buildings, computer architecture, books, organizations) and argues that the "rational model" of design, a waterfall of goals, requirements, options, evaluation and choice, is too simplistic. Real design is exploratory: the requirements are discovered while designing. He maintains that great designs come from great designers and that the process matters mainly for communication and collaboration. The publisher's summary adds that bolder design decisions usually produce better outcomes, and the book treats constraints, budgets and exemplars as working tools.

### Specifics

Table of contents (publisher's InformIT page): Part I Models of Designing: 1 The Design Question; 2 How Engineers Think of Design: The Rational Model; 3 What's Wrong with This Model?; 4 Requirements, Sin, and Contracts; 5 What Are Better Design Process Models? Part II Collaboration and Telecollaboration. Part III Design Perspectives: 8 Rationalism versus Empiricism in Design; 9 User Models: Better Wrong than Vague; 10 Inches, Ounces, Bits, Dollars: The Budgeted Resource; 11 Constraints Are Friends; 12 Esthetics and Style in Technical Design; 13 Exemplars in Design; 14 How Expert Designers Go Wrong; 15 The Divorce of Design; 16 Representing Designs' Trajectories and Rationales. Part IV a house-design computer system. Part V Great Designers: 19 Great Designs Come from Great Designers; 20 Where Do Great Designers Come From? Part VI seven case studies from a beach house and a kitchen remodel to System/360 architecture and the book design of a computer architecture text.

From reviews and an interview I fetched: an InfoQ reviewer reports Brooks concluding that "the Rational Model is much too simplistic" and finding Boehm's spiral model the most promising alternative; that a design brief must be ambiguous enough to allow creative freedom yet clear about constraints; that constraints "shape both the overall architecture and, to a lesser degree, the detailing" (Brooks, as quoted by the reviewer); that he names exemplars (Bach, Rembrandt, Seymour Cray, Christopher Wren, Niklaus Wirth, Donald Knuth) and advises designers not all to study the same ones; and that for custom products he strongly favors early, frequent user testing with prototypes. In the July 2010 Wired interview by Kevin Kelly (seen only through a mirror copy), Brooks is quoted advising to "identify your scarcest resource", which "very often is not money", and that "Great design does not come from great processes; it comes from great designers." and to practice design and seek knowledgeable criticism. These quotations are as reported by the secondary pages; I did not read the book's own text.

### Replication and criticism

This is expert craft essay, the product of one eminent practitioner's reflection and interviews, not research. The InfoQ reviewer faults it for not following up on cross-disciplinary inspiration and for omitting Parnas's "faking the rational process" critique. A caution of mine, not a reviewer's: the "great designers" thesis is hard to apply to a team, though the book's two chapters on collaboration are a counterweight. The rejection of the waterfall resembles Rittel and Webber's (1973) critique of first-generation systems approaches and Schön's reflection-in-action. These come from independent traditions, which gives the claim more weight than a single source.

### Implications for LTF

Three direct uses. First, do not try to specify the whole curriculum and then build it; treat early lessons as probes that reveal what the requirements really are. Second, "constraints are friends": LTF's real constraints (one aircraft, one simulator, a beginner who is also operating the sim, one narrow fly-mode screen, a small team) are design material, so name them early in each design brief and budget against them, as Brooks's chapter on budgeted resources suggests. The scarcest resource may be learner attention in the cockpit-adjacent moment, not engineering time. Third, designate one accountable designer per major surface (fly-mode, lesson page, quiz) with authority over coherence, and use collaboration for critique, not committee authorship. Study a few chosen exemplars (excellent checklists, well-made instrument displays) deeply, rather than collecting many.

Confirmed this session: publisher page (informit.com, full table of contents, page count, ISBN, date), Open Library record OL15452584W, InfoQ review (fetched), WebSearch summary of the Wired interview mirror (wirednews.pages.dev/2010/07/ff-fred-brooks), Wikipedia stub.

## kocienda2018creative

Kocienda (2018), Creative Selection: Inside Apple's Design Process During the Golden Age of Steve Jobs, St. Martin's Press.

### Core claims

A former Apple software engineer (2001 to 2017) describes how Apple built Safari, the first iPhone, and the iPad keyboard, arguing that there was no formal process but a recognizable way of working that he calls creative selection: make a demo, show it, take feedback, make the next demo, and keep what survives. He organizes the book around seven elements: inspiration, collaboration, craft, diligence, decisiveness, taste and empathy. Demos are the currency: an idea is hard to discuss without something to look at.

### Specifics

As summarized by MacStories (John Voorhees) and a reader's summary at jarango.com: the book opens with a 2009 demo to Steve Jobs of prototype iPad keyboard layouts in a conference room called Diplomacy at One Infinite Loop. Richard Williamson's early demo that put the Konqueror browser on Mac OS X led to Safari; Jobs set a mandate that kept the Safari team focused on speed. The iPhone keyboard evolved through repeated demos and daily use by colleagues, from an early prototype with multiple letters on each key to the keyboard that shipped in 2007. Kocienda was designated "Directly Responsible Individual" for the iPhone keyboard (and, per another page, for multi-touch). Taste, in the reviewer's wording, is refined judgment that yields an integrated whole. The final chapter, "The Intersection", offers three examples. I could not confirm a "three-day" structure or a "demo pit" in any source; one review lists six elements without empathy, but two others list seven including empathy.

### Replication and criticism

This is a memoir with a framework laid on top of it, so it is evidence of one practitioner's view of one company in one period, not of what works generally. The reviewers raise points: the view is bottom-up (Kocienda worked on part of the product with limited sight of the whole); the process is "really a culture that depends on visionary leadership", hard to replicate; the early chapters sometimes pause to tie stories to the framework; and the demo-feedback-next-demo cycle is, as one reviewer says, essentially the traditional design feedback loop under a new name. Survivorship and hindsight are obvious risks for a book about a famously successful product. It nonetheless agrees with the experimental work on comparing alternatives in this lane (Dow et al. 2010).

### Implications for LTF

For a small team, borrow the habit, not the mystique. Make a visible, runnable demo of every new idea within days (a clickable airspeed tape, a checklist runner with fake data) and review it with the people who will use it. Name a single directly responsible person per feature so decisions do not diffuse. Build explicit space for taste: schedule reviews where someone with strong aviation-training sense can say a screen feels wrong, and then write down why, so that taste turns into rules (for example "never put two moving numbers within one glance of each other in fly-mode"). Treat empathy as a practice of watching real beginners use the sim next to the app. Do not copy secrecy or the scary-review culture; the evidence for them is anecdote.

Confirmed this session: MacStories review (macstories.net), jarango.com reader summary, WebSearch results from several reviews, a16z page (promotional, little detail), Open Library record OL19754856W.

## sennett2008craftsman

Sennett (2008), The Craftsman, Yale University Press, New Haven; about 326 to 336 pages depending on the catalog record.

### Core claims

Sennett, a sociologist, defines craftsmanship broadly as the basic human impulse to do a job well for its own sake, and argues that it covers the computer programmer, the doctor, the artist and the parent as well as the carpenter. Skill develops through the body and the hand and through repetition, and technical understanding grows through imagination. He argues that people motivated only by material reward or competition do not tend to produce as good work, that written instruction is weak for physical skill, and he traces the rise and decline of the craftsmanship ethos across history.

### Specifics

The book has a prologue, ten chapters in three parts and a conclusion; chapter titles include "Material Consciousness" (4), "The Hand" (5) and "Resistance and Ambiguity" (8). A BU review summarizes themes: medieval workshops teaching by "authority in the flesh" rather than written rules; touch and sight forming an "extended rhythm"; repetition that becomes ritual yet stays alert; showing over telling (chefs convey technique through narrative and metaphor); tools that require a deliberate human agent; repair that builds understanding; progress that is nonlinear and takes detours; obsession that can serve good work but turns harmful as perfectionism (Wittgenstein's house for his sister is the cited example); open-ended play with materials. A Times Higher Education review reports three basic craft abilities: to localize (work with the material thing in front of you), to question (one problem prompts new ones) and to open up (willingness to change habits). Examples include Stradivari and Guarneri workshops and, in the review, Japanese car plants. The BU reviewer reports Linux offered as a modern collaborative, workshop-like craft. I did not find a source confirming the popular "10,000 hours" claim in this book, and I do not cite it.

### Replication and criticism

This is humanistic scholarship, not experiment. Its argument is historical and philosophical. Reviewer Keith Tester (Times Higher Education) says the book does not take the economic threats to craftsmen seriously enough, understates the profit motive (even in Japanese car plants), and risks being used as a "panacea" in management seminars. He notes that employers measure a good job by quantifiable value and craftsmen by engagement. The BU reviewer finds little to criticize. Reviewers report the book as the first part of a planned trilogy on material culture. Read it as a framework for attitudes and for the structure of learning, not as proof of how skill is acquired.

### Implications for LTF

Flight training is a craft taught through the hand and the eye, so Sennett's points map well. First, showing beats telling: wherever a lesson explains a control input, pair text with a short demonstration or an interactive widget that responds, and let the learner repeat the motion in the sim. Second, repetition with attention: design challenges so repeating a maneuver stays interesting (vary the conditions, ask for a specific observation each time) instead of drilling by rote. Third, "resistance and ambiguity": a lesson that never lets the learner struggle teaches little; build in controlled difficulty and a path to recover from mistakes. Fourth, the three abilities offer a lesson-design test: does the learner localize (focus on this control and this instrument), question (what happened and why), and open up (change a habit)? For the LTF team, a craft attitude means doing detail work (copy, icons, edge cases) for its own sake, but Sennett's perfectionism warning applies: set a point where polish stops.

Confirmed this session: WebSearch results (catalog records, BU and THES reviews), BU review (bu.edu/cpt/?p=1842), Times Higher Education review (timeshighereducation.com/node/82595), Wikipedia overview, Open Library record OL1870880W. The book text was not read.

## jones1970design

Jones (1970), Design Methods: Seeds of Human Futures, Wiley-Interscience, London (reissued 1992).

### Core claims

John Christopher Jones, the first professor of design at the Open University, collected and organized methods for designing, devised or borrowed from other disciplines, in response to what he called "a world-wide dissatisfaction with traditional procedures" (as quoted in a review of the book). The book is part of the 1960s design methods movement, which aimed to make the design process explicit and systematic. A synopsis divides design into three stages, divergence, transformation and convergence, and groups methods by purpose: methods for searching for ideas (divergence and transformation), methods for exploring problem structure (transformation), and methods of evaluation (convergence). Jones's wording describes the book as "concerned with creative behavior and with technological change".

### Specifics

Concrete things that could be confirmed this session: the 1970 first publication by Wiley (Open Library lists Van Nostrand Reinhold and Wiley-Interscience editions); the later edition of 1992; the three-stage framework as reported in publisher and bookseller synopses (Powell's); the presence of worksheets and practical strategies for generating ideas; and the remark, quoted by Cross (1982) from Jones, that "changing the problem in order to find a solution is the most challenging and difficult part of designing" along with the warning that designing "should not be confused with art, with science, or with mathematics" (Cross's footnote 20 cites a Jones source; this note does not know which). I have not read the book's text, so no individual method is described here. The black-box and glass-box labels sometimes attached to Jones could not be confirmed as his own.

### Replication and criticism

I found no controlled trials of the movement's methods in the sources read, and the movement was later criticized from inside. Lawson (2005) in this lane notes that a mandated housing standard arrived in "the early period of what has now been called first generation design methodology" and was later withdrawn, and Rittel and Webber (1973) argue that the first-generation systems approach, phases of understand, gather, analyze, synthesize, solve, fails for wicked problems, since one cannot understand the problem before conceiving a solution. Cross (1982) cites design-process studies showing designers jump to solutions rather than working in phases. The divergence and convergence idea may still be useful as a description of cycles within design work; this note did not verify later uses of it.

### Implications for LTF

Jones is useful as a menu, not a procedure. Keep the idea that every design question has a diverge phase (generate many options without judging) and a converge phase (choose with stated criteria), and that mixing the two weakens both: do not critique ideas while still generating them. Apply it at small scale: each new widget gets an ideas-only session, then a named-criteria review (readable at arm's length, low glance cost, correct for a left-seat view). Do not adopt any fixed phase model for the whole project; LTF's design problems (see Rittel and Webber) will loop back. When citing Jones in LTF's own documents, cite only what is confirmed from the book itself, and prefer more recent empirical work for claims about effectiveness.

Confirmed this session: Open Library record OL4279596W, WebSearch results including Powell's synopsis, The Marginalian page on the book (themarginalian.org), Cross (1982) full text for the two Jones quotations. The book itself was not read.

## dorst2001creativity

Dorst and Cross (2001), "Creativity in the Design Process: Co-evolution of Problem-Solution", Design Studies 22(5), pp. 425-437.

### Core claims

Creative design is not a matter of first defining a problem and then searching for a solution. Designers move back and forth, developing the problem space and the solution space together, so that a partial understanding of one prompts a change in the other. The paper tests a co-evolution model of this on protocol data and finds it generally valid. The authors propose refinements to the model and introduce two new notions, "default" and "surprise" problem and solution spaces. They also note that there is no guarantee that a creative event will occur during a design process.

### Specifics

Method (as recorded on the publisher and institutional pages): protocol studies of nine experienced industrial designers working on a design task. The resulting designs were rated on overall quality and on several aspects including creativity, and the authors looked for patterns in how the problem was framed and how originality arose. Concepts: problem space and solution space as parallel, linked areas of exploration; co-evolution, meaning that each is revised in light of the other; and the two new concepts of "default" and "surprise" problem and solution spaces (I could not confirm their definitions; the names suggest an expected starting frame and an unexpected one, which is my inference only). I could not read the full text this session, so the definitions of default and surprise, the identity of the task and the ratings data are not described beyond what the abstract states. Secondary sources describe the finding as designers working simultaneously on the problem and the solution.

The paper tests a pre-existing co-evolution model (its source was not read here) and relates naturally to Lawson's solution-focused observations and Schön's framing. Cross (1982) in this lane already describes designers learning about the problem by trying solutions; this paper adds protocol evidence on nine professionals and ties it to creativity.

### Replication and criticism

The evidence is a small protocol study of professionals, which gives rich process data but not statistical generality. A 2019 Cambridge paper titled "Reframing the design process: integrating goals, methods and manifestation into the co-evolution model" appears in search results but was not read; its title suggests the model has since been extended. The central idea, co-evolution, is widely cited in design research. A limitation worth recording: protocol analysis relies on the designers' verbalizing, which can distort their process, and the "creative event" judgments depend on raters. The concept of default and surprise spaces is a proposal, not a measured quantity.

### Implications for LTF

For LTF's authors, this paper is permission and a method. When writing a lesson, do not freeze the learning objective before drafting the explanation; drafting the explanation often reveals that the objective was wrong (a stated objective sometimes turns out to hide the real confusion the learner has). Keep a lightweight record of reframings: when a draft changes the problem statement, write the new statement above the draft. In widget design, a useful heuristic of my own (not from the paper) is to look for an idea that satisfies the learner's problem (what do I look at?) and the technical solution (what the React component can render reliably) at once. Expected frames are risks: a screen that follows the usual frame of cockpit-replica apps may be the expected solution but not the best one for beginners. Plan a reframing check late in design: ask what frame would make this problem simple. Do not expect creativity on a schedule; protect time for exploration and accept that some sessions yield nothing.

Confirmed this session: Crossref record for DOI 10.1016/s0142-694x(01)00009-6, the Eindhoven research portal abstract page (research.tue.nl), the Open University repository entry (oro.open.ac.uk/3278) via search summary; full text was not accessible, so the notes are limited to the abstract.

## pye1968nature

Pye (1968), The Nature and Art of Workmanship, Cambridge University Press (reissued by Bloomsbury; later editions exist).

### Core claims

David Pye (1914 to 1993), a furniture designer and, from 1964 to 1974, Professor of Furniture Design at the Royal College of Art, argues that the quality of a handmade or machine-made thing depends on how the making is controlled. He divides workmanship into the "workmanship of risk", where the quality of the result is not predetermined and depends on the maker's judgment, skill and care as the work goes on, and the "workmanship of certainty", where the result is fixed in advance by jigs, templates, machines or automation. The two are ends of a spectrum, and Pye argues that free, unguided workmanship has an aesthetic richness that regulated work cannot easily match.

### Specifics

Definition (quoted on the Wikipedia page, citing the book p. 4): the workmanship of risk is "workmanship using any kind of technique or apparatus, in which the quality of the result is not predetermined". The practical test, as reported by Mortise and Tenon magazine: is the result "predetermined and unalterable once production begins"? Pye notes the workmanship of certainty has been in occasional use in undeveloped forms since the Middle Ages, most often chosen for speed or accuracy, "both especially important for quantity production". The workmanship of risk "has "hardly ever been known, in a pure form"" because of templates, jigs and machines, so the distinction is a spectrum of how far an operation is guided. A typewriter is an intermediate case: a typist can spoil a page, but the letters will always look right. Free workmanship, unguided by jigs, has "an immensely various range of qualities" and "aesthetic richness, delicacy and subtlety", as the magazine quotes. The book's table of contents includes chapters on free and regulated workmanship (chapter 4) and on diversity (chapter 7). The article also reports Pye's view that hand-made items will go on being specifically made because people will continue to demand individuality in their possessions, and the point that there is "much more in workmanship than not spoiling the job": unguided tools do not by themselves yield beautiful work.

### Replication and criticism

This is a craft treatise, an extended argument from the author's experience as a maker and teacher; it makes no empirical claims that can fail a test. Its terms are widely taught in craft and design education, and it has been republished with new commentary (a 2020 Bloomsbury edition lists Ezra Shales, per Open Library). One limit is that Pye's examples are woodworking and typewriters; applying "risk" to digital work needs translation. Digital rendering is closer to the workmanship of certainty: the same code produces the same pixels. But the decisions about what the code renders, the copy, the order, the spacing, remain workmanship of risk in the sense that quality is not predetermined, and the quality of them depends on the maker's attention.

### Implications for LTF

The distinction gives LTF a way to allocate care. Use certainty where it protects learners: a typed content schema, token substitution for V-speeds and aircraft numbers, a shared component for every callout, automatic validation. These make errors impossible rather than unlikely. Reserve the workmanship of risk for the places where human judgment matters and cannot be encoded: the wording of an explanation, the pacing of a challenge, the exact feel of a fly-mode glance target, the diagram that clarifies a stall. For these, write the attention into the process: a reviewer reads each lesson aloud, and the designer checks each widget at real size next to the sim. Pye's warning that unguided tools do not by themselves produce beauty applies in reverse as well: a perfect component library does not by itself produce a clear lesson. Finish is a decision, not an accident.

Confirmed this session: Open Library record OL6520988W, Wikipedia page on Pye (bio, dates, the p. 4 definition), Mortise and Tenon article "There is Much More in Workmanship than Not Spoiling the Job" (fetched), search-result summaries of the book's table of contents and reviews. The book itself was not read, so quotations are as reported by those pages.

## rams2026good

Rams, Dieter (via Vitsœ), "Good design" (ten principles), Vitsœ website, accessed 2026.

### Core claims

In the late 1970s Dieter Rams, the German industrial designer long associated with the Vitsœ furniture company, was worried about "an impenetrable confusion of forms, colours and noises" around him. He asked himself whether his own design was good design, and the answer took the form of ten principles. The core idea is restraint in service of the user: design is useful, understandable and honest, is unobtrusive, and concentrates on the essential ("less, but better"). Principle 8 puts craft at the center: nothing is arbitrary or left to chance in good design, and care and accuracy show respect for the user.

### Specifics

The ten headings, as listed on the Vitsœ page: (1) Good design is innovative: innovation is far from exhausted but should develop alongside new technology and never be an end in itself. (2) Good design makes a product useful: remove anything that detracts from usefulness. (3) Good design is aesthetic: appearance affects usefulness and well-being, and "only well-executed objects can be beautiful". (4) Good design makes a product understandable: it clarifies structure and ideally is self-explanatory. (5) Good design is unobtrusive: products are like tools, neutral and restrained, leaving room for the user's self-expression. (6) Good design is honest: it does not overstate innovation, power or value and makes no promises it cannot keep. (7) Good design is long-lasting: it avoids fashion. (8) Good design is thorough down to the last detail. (9) Good design is environmentally friendly. (10) Good design is as little design as possible: it concentrates on the essentials; "Less, but better" and "Simplicity is the key to excellence." The page states that Rams began developing a storage system in 1957 that led to Vitsœ (founded 1959) and that Vitsœ has worked with him for over 65 years. The page gives the principles under a Creative Commons CC-BY-NC-ND 4.0 licence for accurate and fair sharing. Date of first writing varies across the secondary pages seen (one says the late 1970s, others give 1973 or 1995 for versions), so this note does not assign a precise year.

### Replication and criticism

The principles are a practitioner's credo: opinion backed by an exemplary body of work, not an empirical finding. Their host is a company that sells Rams-designed furniture, so the page is both primary source and brand material. They are not a checklist with testable criteria: "innovative" and "unobtrusive" can pull against each other, and "as little design as possible" has no stated threshold. They also reflect a mid-century industrial product context with long product lives; the "long-lasting" and "unobtrusive" principles sit uneasily with fast-changing software. Cognitive research in this knowledge base (on cognitive load and on aesthetics and trust) can supply tested versions of some claims.

### Implications for LTF

The principles make a useful review rubric if each is translated into a concrete question. Useful (2): does every element on a fly-mode screen help the learner act now? Understandable (4): can a first-time learner tell, without reading, what a control does? Unobtrusive (5): the interface should recede while the learner flies the sim; quiet color, no animations that draw the eye away from the simulator. Honest (6): never overstate readiness ("you are ready to solo") or accuracy; label any unverified aviation material clearly. Thorough to the last detail (8): consistent units, MSL and AGL always stated, no placeholder text, tokens for every number. Less but better (10): remove a lesson element and see whether anyone misses it. Use the principles for reflection and not as a score; and remember that the page is craft opinion, not evidence of learning outcomes.

Confirmed this session: Vitsœ page (vitsoe.com/gb/about/good-design, fetched: headings, intro, licence, dates), Wikipedia and other search results for dating variations. The Lovell and Ive Phaidon book on Rams was found in Open Library (OL17402278W) but not read and is not cited as a source here.

## vignelli2010canon

Vignelli (2010), The Vignelli Canon, Lars Muller Publishers (a free PDF edition is hosted by RIT).

### Core claims

Massimo Vignelli (whose New York City Subway diagram is reproduced in the book) wrote this short book to pass on the "guidelines, those set by ourselves for ourselves" of his office, noting that young designers lacked basic principles. He frames design as a discipline, not a style: "Design is one", one discipline applied to many subjects. Part One, "The Intangibles", names three aspects, semantics (the search for meaning), syntactics (the consistent structure) and pragmatics (whether the result is understood), followed by discipline, appropriateness, ambiguity, visual power, intellectual elegance, timelessness, responsibility and equity. Part Two, "The Tangibles", covers paper sizes, grids, type, scale, color, layout and white space.

### Specifics

Semantics: begin every project by searching for the meaning of the subject: research the company, product, market, competition, user and the history of the subject, "to better define the parameters within which we will have to operate". Design without semantics is "shallow and meaningless". Syntactics: the discipline that controls grammar in design, with components such as structure, grid, typefaces, text, headlines and illustrations; consistency comes from the relationship of the elements. Pragmatics: "Whatever we do, if not understood, fails to communicate and is wasted effort", and an artifact "should stand by itself in all its clarity"; he adds "We love complexities but hate complications!" Discipline: attention to detail needs a set of "self imposed rules" and there are no hierarchies in quality; "Every detail is important because the end result is the sum of all the details". Appropriateness: the search for what is specific to a problem, which defines the area of possible solutions and transcends style. Ambiguity, positively, as a plurality of meanings that enriches, but handled with caution because it can backfire. Responsibility: three levels, to oneself, to the client, and to the public; "a design should stand by itself, without excuses, explanations, apologies."

Part Two limits: he describes an exhibition made using only four typefaces (Garamond, Bodoni, Century Expanded and Helvetica) to show that variety comes from structure rather than type, says he can "get along well with a half a dozen" typefaces, and prefers a more objective approach to type (using space, weight and alignment) over expressive type ("I don't believe that when you write dog the type should bark!"). He also states "Good design is never boring, only bad design is."

### Replication and criticism

Craft opinion of a notable practitioner, with no empirical test. He anticipates the objection that rules limit creativity: Vignelli says the book is not meant to stifle creativity or "reduce it to a bunch of rules" and that lack of knowledge, not formula, prevents good design. A limitation for screen work: his type and layout rules come from print and from modernist signage, so claims about type size and grids must be checked against legibility research (see the legibility and screen typography lanes).

### Implications for LTF

A compact, tested-by-use model for a design system. Use the three-part frame as the gate for each new surface: semantic (what does this mean to a beginner pilot, and have we researched it?), syntactic (does it use the same grid, type scale and tokens as everything else?), pragmatic (can a first-time learner understand it without help?). Adopt the economy-of-type habit: a small number of type styles and sizes from tokens, so differences carry meaning. The discipline passage supports a written, self-imposed rulebook for LTF (units, MSL/AGL, token use, callout styles) that makes consistent detail work routine. Keep the responsibility triad in mind: to the project's integrity, to the owner's constraints, and to the learner. Ambiguity belongs in illustration, not in instructions or numbers.

Confirmed this session: full text read (RIT-hosted PDF of The Vignelli Canon, extracted locally), Open Library record OL16963936W (Lars Muller 2010).
