# Lane 11: Interaction design principles (research notes)

Lane scope: direct manipulation, affordances and signifiers, feedback, modes, undo, defaults, error design, conceptual models, goal-directed design, command line versus GUI. Evidence types are labeled in each section (experiment, theory paper, craft treatise, expert opinion).

## shneiderman1983direct

Shneiderman, B. (1983). Direct manipulation: A step beyond programming languages. IEEE Computer, 16(8), 57-69.

### Core claims

Shneiderman starts from an observation: some interactive systems (display editors, spreadsheets, video games, a spatial data management system) generate "glowing enthusiasm" among users, in contrast to the grudging acceptance that most computer tools got in 1983. He lists the feelings enthusiasts report: mastery, competence, ease of learning, confidence, enjoyment and a desire to explore more powerful features. He then asks what the systems share, and names the cluster "direct manipulation": visibility of the object of interest, rapid reversible incremental actions, and replacement of command-language syntax by direct manipulation of the object.

The paper is a theory-and-observation article, not an experiment. Its argument: when the user can see and physically act on the thing being worked on, the system becomes "transparent" and attention stays on the task. 

### Specifics

The paper's "integrated portrait" lists four principles: (1) continuous representation of the object of interest; (2) physical actions (movement and selection by mouse, joystick, touch screen) or labeled button presses instead of complex syntax; (3) rapid, incremental, reversible operations whose impact on the object of interest is immediately visible; (4) a layered or spiral approach to learning that permits usage with minimal knowledge, so novices learn a modest useful command set, get reinforcing feedback, and then expand gracefully.

It then lists seven benefits claimed for systems that follow the principles: novices learn basic functionality quickly, often via demonstration by an experienced user; experts work extremely rapidly; knowledgeable intermittent users retain operational concepts; error messages are rarely needed; users can see immediately whether actions further their goals and change direction if not; anxiety falls because the system is comprehensible and actions are easily reversible; and users gain confidence and mastery because they initiate actions, feel in control and can predict system responses.

Examples in the paper: full-page display editors (a cited finding that performance time was about half that of line editors), the Visicalc spreadsheet, a spatial data management system, video games, CAD and process control (a refinery schematic where one numbered button gives a more detailed view, so no commands need recalling in a once-a-year emergency), driving a car ("my favorite example"), Query-by-Example, the Xerox Star and Plato lessons.

Games get extended discussion: they keep a continuous score so players can measure progress against themselves, and machine-generated judgments such as "Very good" are less effective because the same score means different things to different people.

The explanatory section cites problem-solving research (Polya, Montessori, Wertheimer, Papert's Logo) and develops a syntactic/semantic model of user knowledge. Syntactic knowledge (command details) is arbitrary, rote-learned, volatile and system-dependent; semantic knowledge (concepts and functions) is structured, system-independent and stable. Direct manipulation reduces reliance on the syntactic kind.

### Replication and criticism

Hutchins, Hollan and Norman credit Shneiderman with coining the term (citing 1974, 1982 and 1983 work), so the paper has been extended and qualified more than replicated. It carries its own caveats in a "Problems with direct manipulation" section: graphic representations can need more learning than words, can mislead users into wrong conclusions about permitted operations, can take excessive screen space (a table of 50 document names beats 10 icons for experienced users), and do not automatically improve performance. It cites studies where subjects given detailed flowcharts did no better than those given code, and says metaphors must be simple, unmixed and tested because users may not share the designer's metaphor.

The sharper critique came two years later in Hutchins, Hollan and Norman (1985), who argued that a checklist of surface features cannot explain directness and that the term needs a cognitive account (see that source). The evidence is anecdote, user enthusiasm and a few cited experiments: expert opinion, not a controlled test of the four principles.

### Implications for LTF

LTF's widgets (instrument panels, trim and throttle demonstrations, flight path diagrams) should be real direct manipulation: the learner drags a yoke, pitch or throttle control and sees the instrument change at once, with a visible way to return to the starting state. "Rapid, incremental, reversible" is a good acceptance test for every interactive explanation.

The layered-learning principle supports lesson structure: a first level with a few controls, then expansion. The game observations support a displayed running measure (for example, a challenge shows the learner's own numeric deviation from the target, not "Great job!"), which also matches the project's copy rules against empty praise. The caution about learned icons argues for labeled controls in fly mode and for testing any metaphor with beginners.

Confirmed this session: read the full text of the 1983 article (PDF at cl.cam.ac.uk/~pr10/iui/shneiderman83.pdf, text extracted locally); Crossref record DOI 10.1109/mc.1983.1654471 (Computer 16(8), 57-69, August 1983); Hutchins et al. 1985 text for the credit statement.

## hutchins1985direct

Hutchins, E. L., Hollan, J. D., & Norman, D. A. (1985). Direct manipulation interfaces. Human-Computer Interaction, 1(4), 311-338.

### Core claims

The paper tries to give a cognitive account of both the advantages and disadvantages of direct manipulation. Its abstract names two phenomena behind the feeling of directness: the information-processing distance between the user's intentions and the facilities the machine provides, and the relation between the input and output vocabularies of the interface language. The authors say direct manipulation is not a unitary or quantifiable property but an "orienting notion": directness is an impression produced by a relationship between the user's task and the way the interface lets it be done. They assume the feeling of directness results from committing fewer cognitive resources, and that part of it comes from user adaptation, so designers cannot fully control or take credit for it.

### Specifics

Two aspects of directness are distinguished: distance and engagement. Distance has two forms. Semantic distance concerns the relation between what the user wants to say and the meaning of expressions in the interface language: can the thing be said at all, and can it be said concisely? Articulatory distance concerns the relation between the meaning of an expression and its physical form (key presses, mouse movements, graphical output). Each form is analyzed in both the gulf of execution (from goals to system state) and the gulf of evaluation (from system state back to goals). The gulf of execution is bridged by making the commands and mechanisms match the user's thoughts and goals; the gulf of evaluation by making output present a good conceptual model that is readily perceived, interpreted and evaluated.

A worked example: a user wants to control how fast a water level in a tank rises. A display of the current level forces the user to watch over time and compute the rate mentally; a display that shows the rate of change directly is semantically closer (the figures are from the Steamer training system). Another: moving a mouse to move a cursor is articulatorily direct because the action mimics the intended movement; a moving graph is more articulatorily direct than a table of numbers carrying the same information.

Engagement rests on the model-world metaphor (the interface is a world the user acts in) as opposed to the conversation metaphor (the interface is an intermediary that discusses a hidden world). Requirements for direct engagement listed in the paper: semantic and articulatory directness in both execution and evaluation; inter-referential input and output (an output expression can be used as part of an input expression, a term credited to Draper); responsiveness with no inappropriate delays; and an unobtrusive interface, since a noticed interface puts the user in a third-person relationship to the task. Rapid feedback and continual state display let people use perception to evaluate outcomes.

Section 6 lists problems: repetitive operations are better scripted; direct manipulation interfaces struggle with variables and with distinguishing an individual element from a class; they put accuracy demands on the user; and a direct interface that merely mirrors what people can already do misses new ways of thinking.

### Replication and criticism

This is a theory paper with no experiment. Its framework was reused widely (the gulfs reappear in Norman's later books), but the paper itself says it offers no way to measure the trade-offs. The authors themselves say directness is "an impression or a feeling", not something quantifiable. It also qualifies Shneiderman: a list of surface properties is unlikely to capture the sources of power, and interfaces with those features can still feel clumsy when they demand actions at too low a level. The paper's own note says a version appears as a chapter in Norman and Draper (1986).

### Implications for LTF

The two-gulf frame is a practical review tool. For each widget ask: what does the learner intend (semantic), and what physical action does the widget require (articulatory)? A "set the power" widget that asks for a numeric entry is semantically indirect for a beginner thinking "climb"; a slider with an immediate climb-rate readout is closer. On the evaluation side, show the quantity the learner cares about (rate, not just value), as in the tank example: a vertical speed trend rather than a table of altitudes.

The paper's warning that an invisible interface leaves task-domain difficulty with the user is a reminder that a smooth widget does not teach aviation by itself; the lesson text must supply the concepts. The engagement conditions argue for a quiet fly mode: no modal dialogs over the controls being practiced.

Confirmed this session: read the full text (PDF at vis.csail.mit.edu/classes/6.859/readings/pdfs/Hutchins-DirectManipulationInterfaces.pdf, text extracted locally); Crossref record DOI 10.1207/s15327051hci0104_2 (Human-Computer Interaction 1(4), 311-338, December 1985).

## gaver1991technology

Gaver, W. W. (1991). Technology affordances. Proceedings of CHI '91, 79-84. ACM.

### Core claims

Gaver takes the Gibsonian notion of affordance, which Norman had already brought into design, and tries to make it precise and useful for analyzing technologies. Affordances are properties of the world that are compatible with and relevant for people's interactions. When they are perceptible, they offer a direct link between perception and action; hidden and false affordances lead to mistakes. Complex actions can be understood as groups of affordances that are sequential in time or nested in space. The paper positions the ecological approach as a more succinct alternative to detailed cognitive accounts for everyday artifacts, reserving cognitive analysis for artifacts that are complex, difficult and error-prone.

### Specifics

The central move is to separate an affordance from the perceptual information about it. Affordances exist whether or not they are perceived, and whether or not there is perceptual information for them (a pit affords falling even if concealed by brush). Crossing "affordance present or not" with "information present or not" gives four cases in the paper's Figure 2: perceptible affordance (both), hidden affordance (affordance, no information), false affordance (information, no affordance), and correct rejection (neither). The paper's door-handle example: thin vertical handles afford pulling and flat horizontal plates afford pushing; a vertical handle on a locked door is a false affordance. When the apparent affordance matches the intended use the artifact is easy; when it does not, errors are common and signs are needed.

Affordances are relational and complementary: a handle's affordance for grasping depends on the grasper's hand size, a cat door affords passage to a cat but not to the author. Perceptible affordances are "inter-referential": the attributes relevant for action are available for perception, so what is perceived is what is acted upon, with no mediating representation (a key turning in a lock needs mediation; a door handle does not). Onscreen raised buttons are "nomically" related to their referent (the shading is a causal depth cue, not an arbitrary symbol), and the paper uses MacLean and colleagues' tailorable buttons to show that users saw "pressable" but not "movable or editable".

Two extensions are introduced. Sequential affordances: acting on one perceptible affordance reveals the next (grasping a pivoting handle reveals, through touch, that it turns; turning reveals pulling). Nested affordances: affordances grouped in space (the handle's pulling is nested within the door's pulling). The Macintosh scroll box is analyzed as a sequence (grab, then drag, with the shaft permitting only vertical dragging), contrasted with the Smalltalk-80 scrollbar, which cannot be grabbed and so lacks inter-referentiality. The paper argues affordances are explored, not passively perceived, and reframes metaphor as a way to import consistent affordances, with learning as a matter of attention. It also notes non-visual modes: tactile and auditory information can reveal affordances (the sound of a latch).

### Replication and criticism

This is a conceptual paper illustrated with interface examples, not an experiment. The paper separates actual affordances from perceived ones, a distinction Norman later drew himself: he wrote in 2008 that "affordance" had been "widely used and misused" and moved to "signifiers" (see norman2013design), and McGrenere and Ho are reported to have found ambiguity in his original usage (paper not read). The ecological alternative to cognitive analysis is itself disputed; the paper concedes cognitive approaches for complex artifacts.

### Implications for LTF

Use the four cases as a checklist for every control. A false affordance in LTF would be a styled element that looks tappable but is not (for example a decorative card in a lesson with a hover effect). A hidden affordance would be a draggable instrument knob with no visible cue. Sequential affordance advice suggests letting a first, obvious interaction (grab the control) reveal the next (drag range, snapping marks). In fly mode, where a learner glances between sim and page, controls should be perceptible without mediation, and non-visual cues (a subtle sound or haptic on supported devices) are one way to confirm state changes when eyes are on the sim.

Confirmed this session: read the full text (PDF at perso.lisn.upsaclay.fr/mbl/Stanford/CS477/papers/Gaver-CHI1991.pdf, text extracted locally); Crossref record DOI 10.1145/108844.108856 (pages 79-84, CHI '91 proceedings).

## norman2013design

Norman, D. A. (2013). The design of everyday things (Revised and expanded edition). Basic Books. (Original 1988 as The Psychology of Everyday Things.)

### Core claims

Norman argues that people struggle with everyday objects because designs ignore human psychology, and that the resulting "human error" is usually bad design. The publisher's description lists the core principles as making controls visible, using natural links between controls and functions, and applying constraints wisely. The author's own page says the core science is unchanged from 1988 except for the addition of "signifiers"; the examples, the discussion of implementation and the last two chapters are new. The book is a synthesis and craft treatise by a cognitive scientist, backed by examples and prior experimental work, not a single study.

### Specifics

The 2013 contents list (confirmed from the publisher's table of contents) shows the architecture. Chapter 1 covers "Fundamental Principles of Interaction" and "The System Image". Chapter 2 develops "The Gulfs of Execution and Evaluation" and "The Seven Stages of Action", closing with "Seven Fundamental Design Principles". Chapter 3 is "Knowledge in the Head and in the World", including "Natural Mapping" and "Culture and Design: Natural Mappings Can Vary with Culture". Chapter 4 covers "Four Kinds of Constraints: Physical, Cultural, Semantic, and Logical", affordances and signifiers, "Constraints That Force the Desired Behavior", conventions, and "Using Sound as Signifiers". Chapter 5 is "Human Error? No, Bad Design": it separates slips from mistakes, classifies each, and covers detecting error, "Designing for Error", resilience engineering and "The Paradox of Automation". Chapter 6 introduces the double-diamond model and the human-centered design process; chapter 7 deals with business and innovation.

The signifier concept, defined in Norman's 2008 column "Signifiers, not affordances" (jnd.org): "I call any physically perceivable cue a signifier, whether it is incidental or deliberate." Signifiers can be accidental (an empty platform tells you the train has left) or deliberate (a scrollbar showing how much of a document remains). Norman says he introduced "affordance" into design in 1988 meaning perceivable affordances, that the term had been "widely used and misused", and that designers should provide signifiers. In his 1999 essay "Affordances and design" he separated real from perceived affordances, observing that on screens designers control only the perceived ones, and he described physical, logical and cultural constraints, calling scrollbar behavior a cultural convention and not an affordance. In that essay he gives four principles for new users: follow conventions; use words or labels with graphics; metaphors (which he considers more harmful than helpful, though they can train users); and build a coherent conceptual model.

### Replication and criticism

The book's claims are explanatory rather than experimental. The affordance concept it popularized has been heavily criticized, including by Norman himself. McGrenere and Ho observed an ambiguity in his original definition and use of affordance (reported in secondary search results; the paper itself was not read). Gaver (1991) supplied a clearer taxonomy (see gaver1991technology). Norman's 2016 exchange in Interactions, per a search summary, rejected a "recanted" reading: adding signifiers does not mean affordances do not exist, but signifiers matter more in many situations (the page itself returned HTTP 403, so this rests on the search snippet). The gulf diagram originates in the Hutchins, Hollan and Norman work and the 1986 Norman and Draper volume.

### Implications for LTF

Treat "signifier" as the default design vocabulary for LTF screens: a control either has a perceivable cue or it does not. The gulf of execution maps to "can a beginner tell what to do on this widget?" and the gulf of evaluation to "can they tell what happened?". The chapter 5 stance makes a sound policy for quizzes and challenges: wrong answers are treated as design information (what did the page make easy to misread?), not learner failure. Slips (right intention, wrong action, such as tapping the wrong trim button on a phone) deserve different remedies from mistakes (wrong intention, such as misunderstanding what a flap setting does), and LTF's feedback copy should distinguish them.

Norman's advice to follow conventions argues against novel navigation patterns, and his skepticism about metaphors is a caution for cockpit-style skeuomorphic widgets: faithful instrument faces are justified because learners must read the real instruments, not because they are a metaphor for the app. The book contains no aviation-specific facts relevant here.

Confirmed this session: Open Library edition record (Basic Books, 2013, 9780465072996, work OL1879162W); Google Books page (Basic Books, 368 pages, published 5 Nov 2013); publisher table of contents PDF at toc.library.ethz.ch; jnd.org book page, jnd.org/signifiers-not-affordances/ and jnd.org/affordances-and-design/ read via fetch. The book text itself was not read.

## raskin2000humane

Raskin, J. (2000). The humane interface: New directions for designing interactive systems. Addison-Wesley.

### Core claims

Raskin, who started the Macintosh project at Apple, argues that interfaces should be designed from what is known about human cognition, not from industry convention or from the internals of the computer. A plain definition appears in the book's first chapter (as summarized in course notes at Brown University, CS092): an interface is humane if it is responsive to human needs and considerate of human frailties. Raskin's recurring ideas are that people attend to one thing at a time (the "locus of attention"), that repeated actions become automatic habits ("habituation"), and that anything which makes the same gesture mean different things (a mode) will eventually cause errors. The book is expert opinion and design argument by an experienced practitioner, drawing on cognitive psychology and quantitative models, with proposals tested mostly in his own later systems.

### Specifics

Chapter titles recorded in a published review include "Cognetics and the Locus of Attention" (chapter 2) and "Meanings, Modes, Monotony, and Myths" (chapter 3), plus a chapter on quantification. Definitions reported by the review and the course notes:

- Locus of attention: attention works like a spotlight that illuminates one thing at a time; stimuli outside it are mostly ignored.
- Habituation: with repetition, users act without conscious attention. The course notes give Raskin's example that answering "yes" to a confirm-deletion prompt becomes a habit, which defeats the purpose of the prompt, and that the better remedy is easy undo, not a dialog that changes every time.
- Mode: a human-machine interface is modal with respect to a given gesture when (1) the current state of the interface is not the user's locus of attention and (2) the interface will execute one of several different responses to the gesture. Modes, in Raskin's words as quoted in a review, are "a significant source of errors, confusion, unnecessary restrictions, and complexity".
- Quasimode: a mode maintained only by a constant action by the user, the shift key being the standard example. The Raskin Center summary says that because you must actively maintain a quasimode you cannot accidentally forget you are in it.
- Monotony: there is exactly one gesture to achieve a given effect, which makes automaticity easier to acquire.
- Noun-verb interaction (choose the content, then the action) is less modal than verb-noun, according to the course notes, with palettes in drawing tools a recognized exception.
- Raskin rejects the beginner-expert dichotomy and argues adaptive interfaces prevent habituation (course notes).
- He advocates measuring efficiency with GOMS-style analysis and Fitts's law instead of relying on taste (Raskin Center summary), and his Archy environment applied these ideas (a continuous searchable document, keyboard "leap" navigation, no modes).

### Replication and criticism

Raskin's mode argument is consistent with controlled evidence: Sellen, Kurtenbach and Buxton (1992, also in this lane) found that a user-maintained mode (a held foot pedal) prevented mode errors better than a system-maintained one, which is the logic behind quasimodes. The claim that modes cannot be eliminated, only managed, appears in that same paper, which quotes Tesler's argument against modes and notes that "modeless" systems like the Macintosh still contain modes (dialog boxes, selection states). Critics of Raskin point out that his strict monotony and anti-customization positions have rarely been adopted, and that Archy did not achieve wide use; those are observations about adoption, not experiments. The book's design proposals (zooming interfaces, universal undo and command systems) were not covered by the sources I could read, so I make no claims about them.

### Implications for LTF

Modes matter in a flight-training app because learners work alongside a sim with its own modes (pause, active pause, autopilot states). An LTF page must never change what a gesture means silently. For example, a widget that is "explore" mode in a lesson and "scored" mode in a challenge should be visually distinct and, where possible, entered only by holding or by a clearly different screen, not by a hidden toggle.

Habituation argues against repetitive confirmation dialogs (for example "reset progress?"): prefer undo. Monotony supports one canonical way to advance in lessons and checklists, with the same control in the same place. The locus-of-attention idea fits fly mode: the learner's attention is on the sim, so the companion screen should hold a single, large, stable focus with no layout shifts, and any state change should be visible in peripheral vision.

Confirmed this session: Open Library edition record (Addison-Wesley Professional, 29 March 2000, ISBN 9780201379372); Raskin Center page raskincenter.org/jef/humane-interface/; Brown CS092 chapter notes PDF (cs.brown.edu/courses/cs092/2005/bell.raskin.pdf, student notes, secondary); WebSearch results quoting a published review. The book itself was not read.

## sellen1992prevention

Sellen, A. J., Kurtenbach, G. P., & Buxton, W. A. S. (1992). The prevention of mode errors through sensory feedback. Human-Computer Interaction, 7(2), 141-164.

### Core claims

Two experiments in a text-editing task show that feedback reduces mode errors, and that feedback the user maintains by their own physical action (kinesthetic, a foot pedal held down to stay in insert mode) is more effective than feedback the system maintains (the screen turning pink). The authors conclude that user-maintained mode states prevent mode errors more effectively than system-maintained ones. This is a controlled experiment with a within-subjects design, the best direct evidence in this lane for how to handle modes.

### Specifics

Mode error definition, following Norman (1981): the user misclassifies the situation and performs an action appropriate to the assumed but not the true state. The task simulated the vi editor: insert the string "errorerror" after each word printed in capitals in a block of about 190 words with 75 capitalized words. A navigation mode error was typing navigation keys while in insert mode; an insertion mode error was typing text while in navigation mode.

Experiment 1 crossed mode-switch method (keyboard i and escape, versus holding a sustain pedal while typing) with visual feedback (the whole screen went dark pink in insert mode, versus no change). Twelve experts (experienced vi users) and twelve novices each did all four conditions in counterbalanced order, and also serviced a concurrent distractor task on a second computer (digits 1 to 6 presented after beeps, at intervals of about 4.5 seconds on average) which forced them to switch attention and then resume.

Results: the pedal produced significantly fewer mode errors than the keyboard under both liberal and conservative error classification; visual feedback also reduced errors. The omega-squared analysis attributed 15.6% of variance (liberal) and 11.0% (conservative) to mode-switch method, versus 4.8% and 4.1% to visual feedback, roughly three times as much. The pedal was also faster and gave a significantly faster "resume time" (the interval from finishing the distractor to the first editing action, used as a measure of confusion about mode); visual feedback had no effect on resume time. For experts, visual feedback helped with the keyboard but was redundant with the pedal. In rankings, 8 of the 11 classifiable novices preferred the pedal conditions; experts split five and five between keyboard and pedal.

Experiment 2 tested whether the pedal's advantage came from the user having to actively hold the mode. A non-latching pedal (hold to stay in the mode) gave a more salient indication of mode than a latching one. The paper also lists dimensions of feedback: sensory modality; reactive versus proactive; transient versus sustained; demanding versus avoidable; user-maintained versus system-maintained. It cites Monk (1986), who reduced mode errors by a third with a mode-contingent sound on each keystroke.

### Replication and criticism

The conference version appeared at INTERACT 90 (pages 667 to 673); this journal article expands it. The sample is small (12 per group), tasks are narrow (vi-style editing), and the foot pedal is unusual hardware, so the numbers should not be transferred to touch UIs. The authors flag alternative explanations for the pedal advantage (feedback through the limb that makes the switch, relief from competition for visual attention, distribution of tasks over limbs) and say the user-maintained explanation is the one of most interest. It also supports the paper's counter to Tesler's no-modes position: almost all interfaces contain modes (dialog boxes, cursor shape, selection state), and design should make them salient and easy to enter and exit. Norman (1981) lists aircraft automatic pilots among devices whose displays and buttons depend on mode, so the finding is relevant to cockpit-like systems, though this study did not test one.

### Implications for LTF

The result is a direct argument for how LTF should show mode in fly mode. A color change alone (the weakest condition here) is not enough: a tint that is the only signal of "practice versus scored" will be missed when the learner's eyes are on the sim. Prefer user-maintained states for risky modes (hold-to-record, press-and-hold to reveal an answer) and make persistent states carry several cues (label, position, shape, and not color alone). Test any mode with an interrupt task (switch to the sim, come back) and measure resume time as well as errors, using the paper's design as a template.

Confirmed this session: read the full text (Microsoft Research PDF, text extracted locally); Crossref record DOI 10.1207/s15327051hci0702_1 (HCI 7(2), 141-164, June 1992); search results confirming the INTERACT 90 conference version.

## cooper2014about

Cooper, A., Reimann, R., Cronin, D., & Noessel, C. (2014). About face: The essentials of interaction design (4th ed.). Wiley. (First edition by Cooper, 1995.)

### Core claims

The book presents Goal-Directed Design, a method for designing the behavior of interactive products from an understanding of what people are trying to achieve. The introduction (read in the publisher's front-matter sample) defines interaction design as concerned first with the design of behavior, not only form, and says user goals "can best be understood as narratives". It argues that interaction design is "very much a design discipline, quite different from science and engineering", and that "there is no such thing as an objectively good user interface": quality depends on who the user is, what she is doing and her motivations. It combines three tools: principles, patterns and processes. The authors are practitioners at the Cooper consultancy, so the book is craft knowledge and consultancy method, not experimental research.

### Specifics

The table of contents (confirmed from the sample) shows the structure. Part I, Goal-Directed Design: a design process for digital products (including "Recognizing User Goals" and "Implementation Models and Mental Models"), design research, "Modeling Users: Personas and Goals", scenarios and requirements, framework and refinement, creative teamwork. Part II, Making Well-Behaved Products: design values and interaction design principles, digital etiquette ("Designing Considerate Products", "Designing Smart Products"), "Platform and Posture", "Optimizing for Intermediates" (including a section on "Perpetual Intermediates" and "Designing for Three Levels of Experience"), "Orchestration and Flow", "Reducing Work and Eliminating Excise" (goal-directed tasks versus excise tasks, types of excise), "Metaphors, Idioms, and Affordances" (including "Direct Manipulation and Pliancy" and "Escape the Grip of Metaphor"), data entry, storage and retrieval, and "Preventing Errors and Informing Decisions" (including "Using Rich Modeless Feedback", "Undo, Redo, and Reversible Histories" and "What If: Compare and Preview"). Part III covers desktop, web, mobile and other platform details.

Terms the contents list names (I read the headings, not the chapter text): implementation models and mental models (a chapter 1 section), excise (chapter 12, set against goal-directed tasks), and posture (chapter 9, with sections on postures for the desktop, web and mobile devices). The sample's introduction also says that the first edition, published in August 1995, equated "software design" with user interface design, and credits Moggridge and Verplank with coining "interaction design" while working on the GRiD Compass laptop in the mid-1980s.

### Replication and criticism

Goal-directed design and personas are widely used but their evidence is mixed. The personas method has drawn critical papers: Chapman and Milham (2006, Proceedings of the Human Factors and Ergonomics Society) argued methodologically against the method (Crossref record confirms the title and venue; I did not read the argument), and Matthews, Judge and Whittaker (CHI 2012) studied how designers actually perceive and use personas (record confirmed; findings not read). I therefore make no claim about their conclusions. The book's rules about excise, undo and modeless feedback are consistent with the evidence in other lane sources (Sellen et al. on modes; Abowd and Dix on undo; Tognazzini's case studies), but the book itself supplies argument and examples, not controlled studies. The claim that the web "knocked back interaction design idioms by more than a decade" is the authors' opinion.

### Implications for LTF

LTF has a clear goal-directed framing: the learner's goal is "be able to fly this maneuver in the sim", not "complete the lesson", so lesson progress UI, quizzes and badges that add effort without advancing that goal are excise. A concrete test: for each tap a learner must make, can they name the flying goal it serves?

The "perpetual intermediate" idea (the sample's table of contents names it; I did not read the chapter) suggests designing for the large middle: most users are neither first-time nor expert for long. For LTF this is the returning learner who knows the basics, so fly mode should not re-explain, and first-time guidance should be dismissable. Personas are cheap to write but weakly evidenced, so any LTF persona should be tied to real interviews or analytics, and labeled as a hypothesis. "Rich modeless feedback" is a chapter title that matches the Sellen result: keep status visible without interrupting.

Confirmed this session: Open Library edition record (Wiley, Sep 2014, ISBN 9781118766576, 720 pages); publisher front-matter sample PDF (content.e-bookshelf.de) read for the table of contents, foreword and introduction; Crossref records for Chapman and Milham 2006 (DOI 10.1177/154193120605000503) and Matthews et al. 2012 (DOI 10.1145/2207676.2208573). The body chapters were not read.

## tognazzini2014first

Tognazzini, B. (2014). First principles of interaction design (revised and expanded). AskTog (asktog.com), 5 March 2014.

### Core claims

Tognazzini, who designed Apple's first human interface in 1978 and spent more than 14 years at Apple, offers a list of principles intended for web and mobile as much as desktop. The introduction says effective interfaces are visibly apparent, forgiving, and give users a sense of control; they save work continuously, allow undo, and do the maximum of work for the minimum of user input. This is expert craft opinion with case studies, and some arithmetic and speed figures asserted by the author. It is a widely used checklist for heuristic evaluation but not a peer-reviewed study.

### Specifics

The page is organized by named principles. Among them (all read this session): Aesthetics (visual design is for trained visual designers, fashion should never override usability, and visual design should be user-tested like behavior); Anticipation (bring all information and tools needed for each step to the user); Autonomy (users control their environment, within rules; keep status visible, up to date and accurate); Color (provide secondary cues whenever color conveys information; the page gives about 10% of males and fewer than 1% of females as color-blind, an uncited figure); Consistency (four forms: levels of consistency, induced inconsistency, continuity, and consistency with user expectations, quoting Buxton that the last is "the most important"); Defaults (make them easy to replace, use them only when intelligent, avoid the word "Default", and communicate the scope of any reversion); Discoverability ("If the user cannot find it, it does not exist"; use Active Discovery; controls needed for success should be visibly accessible at all times); Efficiency of the User (measure user productivity, and make error messages say what went wrong, what to do, and allow for a deeper fault); Explorable Interfaces (make actions reversible, always allow undo, always allow a way out); Fitts's Law; Human-Interface Objects; Latency Reduction; Learnability; Metaphors; Protect Users' Work; Readability; Simplicity (avoid the "Illusion of Simplicity"; use progressive revelation); State; and Visible Navigation.

Specific claims worth noting, each the author's own assertion: acknowledge every click with visual or aural feedback within 50 milliseconds; a one-pixel boundary can slow edge tools by 20% to 30%; Fitts's law predicts Macintosh pull-down menus are about five times faster to acquire than Windows menus; hiding Mac scroll bars costs a computed 21 person-years per day across 66 million users (an estimate built on assumed one extra second per scroll and ten scrolls per day); an unspecified study found people in non-undoable environments made no more mistakes but worked far slower; an NN/g e-commerce observation that easy item removal from carts led shoppers to add more items. The Xerox Star drag rule is told as a case: the proposed "dragging always moves" rule lost documents dragged to a printer, so the final rule was move within a volume and copy across volumes.

### Replication and criticism

Most numbers are unsourced in the page itself and should be treated as anecdote or estimate. The Fitts's law advantages for screen edges are well supported in the broader HCI literature (see lane 09) but the 20% to 30% and five-times figures are Tognazzini's. The page itself says "I expect I have made mistakes" per a search summary and invites reader comments. The 1990s original is the citable version for the early principles. His strong stance against hiding controls and flat design is contested by designers who value minimal screens; the page concedes small mobile screens as an exception. The "Always allow Undo" claim is more rigorously treated by Abowd and Dix (1992, also in this lane).

### Implications for LTF

Several principles map directly onto LTF risks. "Protect users' work" and State: a learner interrupted mid-lesson (they are flying a sim too) should resume exactly where they were, and quiz answers and checklist progress should be saved continuously. "Discoverability" and "visible navigation": do not hide fly-mode controls behind gestures. Latency: acknowledge taps in 50 ms terms by changing the control state at once, even when data loads later, as a design target to measure in LTF's own testing. Defaults: any "reset" control must state its scope (this lesson, this module, everything). Color: any status shown with color in instrument widgets or progress needs a secondary cue. Error messages should say what happened, what to do, and whether the fault might be deeper.

Confirmed this session: read the full page at asktog.com/atc/principles-of-interaction-design/ (via fetch summary, 5 March 2014 revision); search results listing the older edition at asktog.com/basics/firstPrinciplesOldEdition.html.

## reason1990human

Reason, J. (1990). Human error. Cambridge University Press.

### Core claims

Reason offers an integrated theory of human error aimed at cognitive psychologists, human factors professionals and safety people. Cambridge's description calls the book "a major theoretical integration of several previously isolated literatures", identifying cognitive processes shared across many error types, and says improving safety in modern technology depends on understanding how human error works. The book's contents (from a retailer listing) run from "The nature of error" through "Performance levels and error types", "Cognitive under-specification and error forms", "A design for a fallible machine", "The detection of errors", "Latent errors and systems disasters", to "Assessing and reducing the risks associated with human error". It is theory synthesis drawing on diary studies, laboratory work and accident analyses.

### Specifics

Details I could confirm come from a secondary search summary and from Reason's own later paper (BMJ 2000, which summarizes the same framework). The book classifies errors by cognitive level, skill-based, rule-based and knowledge-based, and by type: slips (execution failures linked to attention) and lapses (memory failures) versus mistakes (planning failures). The detailed generic error-modelling system (GEMS) is named in the book's framework but I could not confirm its mechanics from any source I read, so I do not describe it.

Reason's 2000 BMJ paper, which I read in full via a JSTOR-derived PDF, develops the part most relevant to design: the "person approach" (blame individuals for forgetfulness, inattention, carelessness) versus the "system approach" (people are fallible, errors are consequences rather than causes, and the question is how defenses failed). It distinguishes active failures (unsafe acts by people in direct contact with the system, such as slips, lapses, fumbles, mistakes and procedural violations) from latent conditions ("resident pathogens" introduced by designers, builders, procedure writers and management), and presents the Swiss cheese model: defensive layers have holes that open and shift, and an accident needs several holes to line up. Search sources disagree on where the Swiss cheese picture first appeared; the 2000 paper is the version I confirmed. The paper states that in aviation maintenance, some 90% of quality lapses were judged blameless, and it says two features of error are overlooked by the person approach: the best people often make the worst mistakes, and mishaps fall into recurrent patterns.

### Replication and criticism

The slip and mistake distinction also structures the error chapter of Norman's 2013 book (see norman2013design), whose contents list "Two Types of Errors: Slips and Mistakes". The framework rests on classification of naturally collected errors and case studies of accidents, and is theory rather than a predictive model; the Swiss cheese image is best treated as a communication device, since the 2000 paper presents it as a metaphor and not a tested model. The PSNet review page (read) says the book's "error analysis and theory" "may be too technical for the average reader" while praising his explanations. The publisher page lists the date as 1990 in metadata but 1991 in text; the Open Library record gives 1990.

### Implications for LTF

For a flight-training product the system approach is the right stance: when learners get a quiz or challenge wrong, treat the cause as a design condition (a misleading diagram, an ambiguous question) before blaming the learner. LTF's feedback copy can teach the slip, lapse, mistake distinction in neutral terms; for example a slip is "you meant the right thing and pressed the wrong control", which has different remedies from a mistake in understanding.

Error-tolerant design follows: make destructive actions reversible, detect likely slips (for example unit mismatches in numeric answers) and ask for confirmation only where the cost of a slip is high. I make no aviation claims; the book is general. If LTF later covers real-world human factors topics (for example checklist discipline), this is a source to cite after the full text is read.

Confirmed this session: Open Library record (Cambridge University Press, 1990, work OL2687468W); Cambridge publisher listing (ISBN 9780521314190, 320 pages in publisher metadata); retailer table of contents via search; PSNet review; full text of Reason (2000) BMJ 320:768-770 as a PDF. The book text itself was not read.

## norman1981categorization

Norman, D. A. (1981). Categorization of action slips. Psychological Review, 88(1), 1-15.

### Core claims

Norman defines a slip as the error that occurs when a person does an action that is not what was intended, and uses several collections of slips (primarily of actions) to devise a theory of action. In his theory an action sequence is represented by a parent schema and child schemas; several schemas can be active at once; each has triggering conditions and an activation value. The path from intention to action is activation of the parent schema, activation of child schemas, and triggering when conditions match. Slips fall into three major categories, which he links to three failure points: errors in forming the intention, faulty activation of schemas, and faulty triggering.

### Specifics

Data: he examined roughly 1,000 incidents, 200 from his own collection, plus motor slips from Reason's work (1975 to 1979), a book on pilot error, official accident reports, and Fitts and Jones's collections of pilot errors in controls and instrument reading. The categories (as listed in the article): (a) errors in formation of the intention, including mode errors (erroneous classification of the situation) and description errors (ambiguous or incomplete specification of the intention); (b) faulty activation of schemas, including capture errors (a sequence being performed is similar to another more frequent or better-learned one, which takes over), data-driven and associative activation, loss of activation, and misordering; (c) faulty triggering, including spoonerisms, blends, intrusions of thoughts and premature triggering. Errors in goals, decision making and problem solving are explicitly not counted as slips.

The mode error definition is the one later taken up in HCI (Sellen et al. quote it): the situation is misclassified and the action fits the assumed state but not the true one. The article's examples include text editors with text and command modes (in one experimental editor, trying to insert the word "edit" while in command mode destroyed the whole manuscript and then the ability to undo), devices whose buttons depend on mode ("aircraft automatic pilots, digital wristwatches"), and the report of bellowing "Come in" into a ringing phone. Norman also argues that feedback and monitoring are needed at each level of action specification, and that a slip can be detected only if the monitoring mechanism becomes aware of a discrepancy between intention and act.

### Replication and criticism

The method is naturalistic: collected reports, not experiments, so frequencies are not estimates of prevalence, and the paper notes that most collections do not record whether the error was caught. Diary studies of slips have since been widely used (Reason and Mycielska 1982 is cited in Sellen et al.), and the taxonomy was extended by Reason (1990). The schema-activation account is a theoretical proposal; the paper presents it as an outline and not as a tested model. Many later cognitive accounts use different mechanisms but the categories stay in use.

### Implications for LTF

Capture errors predict a real LTF risk: a learner who has practiced a sequence (for example a start-up checklist) will repeat the familiar version even after the lesson has changed one step, so LTF should flag changed steps and not rely on the learner noticing. Description errors predict confusion among similar-looking controls (several similar toggles or knobs on a widget), so make controls distinct in shape and position, not only in label.

Mode errors matter wherever a button changes meaning by state, and the paper's own example list includes aircraft automatic pilots, so LTF should teach learners to check the mode before acting. This is a human-factors observation from the paper; it states no procedures.

Confirmed this session: Crossref record DOI 10.1037/0033-295x.88.1.1 (Psychological Review 88(1), 1-15, January 1981); full text read from a PDF copy hosted at ocw.tudelft.nl (course materials).

## abowd1992giving

Abowd, G. D., & Dix, A. J. (1992). Giving undo attention. Interacting with Computers, 4(3), 317-342.

### Core claims

Abowd and Dix start with undo in a synchronous shared text editor and conclude something that applies to single-user software too: undo should be regarded "not as a system command to be implemented, but as a user intention to be supported by the system" (the abstract). The question to ask of a design, they say, is "What is the undo button for?", not "What does the undo button do?". The paper combines a formal model of undo (a "script" model and the "handle space" model of Dix) with a user-knowledge analysis, and ends with design recommendations. It is a theory and analysis paper with formal methods, not an empirical study.

### Specifics

The paper cites a study of Microsoft Word (reference [27] in the paper) which found that even expert users could not both predict the effect of the undo command and recognize its behavior. It adopts a knowledge analysis by Young and Whittington listing four questions a user must be able to answer about undo: what stream of activity is relevant; how that stream is articulated into units (lexical, syntactic or semantic level); which unit is affected by an undo; and what the definition of undo is (for example, after undoing a delete, is the restored text also reselected?).

Formal model: user commands form an active script; undo removes the last command from the active script and places it in a pending script, and redo reverses that. Dix showed that treating undo commands as ordinary commands leads to inconsistencies in all but the simplest schemes. For multiple users, the choice is global undo (the composite stream) or local undo (only your own actions). Global undo is easier for the system, but users will normally expect local undo, except possibly in a shared single-insertion-point editor. The formal analysis shows that when commands commute, local and global undo agree; when they interfere, no sensible meaning exists for the undo key, and the system should detect this and warn or consult the user rather than guess.

The broader argument: backward error recovery (restore the previous state, which is what an undo button does) versus forward error recovery (move on from the present state toward the goal). In open systems the erroneous action may already have affected the world; the paper's example is that the operators at Three Mile Island "would have loved to have had an undo button" but it was not possible, and a cockpit navigator cannot ask the pilot to back the plane up. They state the "principle of intent": undo is the user's intention, not a system function. Properties that support users' own recovery are visibility (seeing the effects of one's actions) and commensurate effort (things easy to do should be easy to undo). Concrete suggestions: keep many past deletes (a Mac-like wastebasket as forward recovery), let users browse past states of the document and copy from them, and offer version merge tools.

### Replication and criticism

The paper's claims are analytical, so "replication" means later uptake. Alan Dix's undo page (read) shows continued work with Mancini and Levialdi on a formal framework for single-user undo, and notes some issues lie outside formal analysis: users' perceived granularity of undo is a psychological question. An ACM paper titled "Point of no Undo: Irreversible Interactions as a Design Strategy" surfaced in search (title only; not read), which suggests the value of undo is itself debated. The Word study is known to me only through this paper, and the shared-editor setting limits direct transfer to LTF.

### Implications for LTF

LTF is mostly single-user, so the useful part is the intent framing. Quiz and challenge UIs should offer recovery that matches what learners want: change an answer before submitting, go back one lesson step without losing state, restart a challenge attempt. Note the paper's distinction: recovery need not be an "undo" button; a visible previous state or editable answer satisfies the intent.

Granularity matters: the four knowledge questions give a checklist for any LTF control that can be undone (what is a unit, what does it restore, is selection restored?). Where actions cannot be reversed (submitted scored attempts, anything reported to a server), say so before the action, since the paper shows irreversibility is a design property users must be able to predict. In fly mode, forward recovery fits: after a wrong checklist tick, the easiest recovery is to tap again, not to navigate a history.

Confirmed this session: Crossref record DOI 10.1016/0953-5438(92)90021-7 (Interacting with Computers 4(3), 317-342, December 1992); read the full paper (PDF from alandix.com/academic/papers/undo92/); read Alan Dix's undo page (alandix.com/academic/topics/undo/).

## suchman1987plans

Suchman, L. A. (1987). Plans and situated actions: The problem of human-machine communication. Cambridge University Press.

### Core claims

Suchman argues against the view, dominant in cognitive science and AI, that purposeful action is the execution of plans. She contrasts it with a view from anthropology and sociology in which plans are derivative of situated action, which consists of ad hoc responses to the actions of others and the contingencies of the situation. The abstract of the 1985 Xerox PARC report from which the book grew says plans are "inherently vague" common-sense formulations designed to accommodate unforeseeable contingencies, and that the machine studied was insensitive to particular circumstances, which was both a design resource and a fundamental limitation. The method is an ethnographic and conversation-analytic study of video recordings, a qualitative case study, not an experiment.

### Specifics

I read the 1985 PARC report version (Intelligent Systems Laboratory report ISL-6), not the 1987 book; the book revised and extended it, so I describe only what the report shows. The preface sets two images: the European navigator, who charts a plan and relates every move to staying on course, and the Trukese navigator (following Gladwin 1964), who sets an objective and responds to conditions as they arise, unable to describe the course in advance. Suchman argues that the essential nature of situated action is Trukese, even if the plan-based account is the one that is "ready-at-hand".

The empirical core is a study of first-time users of an "expert help system" attached to a large photocopier at Xerox PARC. The system instructs the user step by step, with each next instruction invoked by the user's successful enactment of the last, using rules coded in LISP and sensors that register only certain changes (such as a closed cover). The data are videotapes of pairs of first-time users, an arrangement she found useful because collaboration makes reasoning audible. A prior study, of about 20 hours of observation of new users with written instructions in office settings, led her to the conclusion that a video record was needed. Her analysis frames the interaction as asymmetry: the user's situation includes everything they can see and say, while the machine's situation consists only of a plan written by its designer and the few user actions its sensors can detect. Instructions serve as a resource for action, but cannot exhaustively specify action, and follow-on trouble arises when the user's question differs from the one the designer anticipated.

### Replication and criticism

The study has a small sample and is single-case, so it is not a statistical result; its force is as a demonstrated pattern and as a reframing of design. It was influential (summaries describe it as providing intellectual foundations for HCI; Gaver 1991 cites it as part of the attack on decontextualized cognitive approaches). I did not find or read a direct scholarly rebuttal; the reader reviews that surfaced in search describe the book as somewhat dated but "cutting edge" when first published, and a note that the copier chapters are harder reading than the first half.

### Implications for LTF

Lessons are plans, and learners act in situations. A flight lesson that reads like a fixed procedure will fail when the sim is in a different state than the page assumes: weather, aircraft position, a missed step, the sim paused. Treat the lesson steps as resources: show what to look for in the sim to confirm each step happened, and give a way to say "I'm not where the page thinks I am".

Suchman's finding that help fails when the machine cannot sense the situation applies to LTF directly, since the web app cannot see the sim (unless a future integration reports state). Design for that blindness: let learners confirm state themselves, provide "what you should see" checks, and avoid instructions that assume success of the previous step. Checklists and procedures should be presented as support for a pilot's judgment, which is also how many training programs treat them, but I make no claim about aviation procedure.

Confirmed this session: Open Library record (Cambridge University Press, 1987, work OL4962782W); read the 1985 Xerox PARC report version in full (PDF at cs.colby.edu/courses/J16/cs267/papers/Suchman-PlansAndSituatedActions.pdf); search summaries for reception. The 1987 book text was not read.

## norman1986cognitive

Norman, D. A. (1986). Cognitive engineering. In D. A. Norman & S. W. Draper (Eds.), User centered system design: New perspectives on human-computer interaction (pp. 31-62). Lawrence Erlbaum Associates.

### Core claims

The chapter proposes "cognitive engineering" as an applied cognitive science for the design of systems, and offers an approximate model of how people act on a system: a goal, then a sequence of stages from intention to action, then stages that perceive and interpret the system's state and compare it with the goal. The model locates difficulty in two gulfs, execution and evaluation, and ties errors to the mental models users build. It is theory and design framework; the evidence is argument and example, not new experiments. I could not access the chapter text this session, so this section rests on secondary accounts and bibliographic records, and I flag the limits below.

### Specifics

Details I could confirm from secondary sources. The seven stages as taught in an RPI lecture page and a wikibook: forming the goal; forming the intention; specifying an action; executing the action; perceiving the state of the world; interpreting the state of the world; evaluating the outcome. That is one goal stage, three execution stages and three evaluation stages. Both sources stress that the stages are an approximation, not discrete steps; not every goal needs all of them, and feedback can spawn new goals and actions.

The gulfs: the chapter's Figure 3.1, as described in search summaries, shows the gulf of execution running from goals to the physical system and the gulf of evaluation running from the physical system to goals, each unidirectional. The same caption appears in the Hutchins, Hollan and Norman paper (read in full, see hutchins1985direct), which states that the gulf of execution is bridged by making system commands and mechanisms match the user's thoughts and goals, and the gulf of evaluation by making output present a good conceptual model that is readily perceived and interpreted. The RPI lecture summary adds that errors often arise from faulty mental models, not carelessness, that models are built from fragmentary evidence so people fill gaps with their own explanations, and that designers should provide a good conceptual model supported by a coherent system image, with visible state, clear mappings and continuous feedback.

A student study guide (low authority) says the chapter defines the design model, the user's model and the system image. I could not verify that against the chapter, though the 2013 edition's table of contents does list "The System Image".

### Replication and criticism

The seven-stage model has been widely adopted as a teaching tool, and it is explicitly described as an approximation. The extension I could confirm is a 2023 arXiv paper by Subramonyam and colleagues, "Bridging the Gulf of Envisioning", which argues that Norman's gulfs do not explain how a user turns a goal into an intention in the first place, a gap they say large language model interfaces make acute. Empirical tests of the model's predictions are not something I could confirm, and a paper applying the 1986 model to "post-WIMP" interfaces surfaced in search but could not be fetched, so I make no claim about its findings.

### Implications for LTF

The seven stages are a usable audit for LTF's challenge briefings. For each step of a challenge, ask: does the learner know the goal (stage 1), can they form an intention in aviation terms (2), is the action specified in controls they can find in the sim (3), can they execute it (4), what in the sim will they see (5), how do they interpret it (6), and what tells them whether they succeeded (7)? The gaps most likely in LTF are 5 to 7: a beginner often cannot tell from the sim's picture whether a maneuver went well, so briefings should state what success looks like in observable terms (instrument and outside-view cues) without inventing numeric targets that have not been verified.

The goal-to-intention gap from the 2023 paper applies to beginners who do not yet have the vocabulary to turn "I want to land" into intentions; progressive lesson structure should provide that vocabulary before challenges ask for it. LTF's wording, icons and diagrams are the system image of the whole training, so one consistent vocabulary across lessons, widgets and challenges is needed.

Confirmed this session: Crossref records for the chapter (DOI 10.1201/9780367807320-3, pages 31-62 (search summaries give 31-61), and a later reissue DOI 10.1201/b15703-3); search results confirming Lawrence Erlbaum, Hillsdale, 1986; RPI lecture page cs.rpi.edu/academics/courses/spring97/GHMI/lectures/norman2.html; wikibooks page on the seven stages; arXiv abstract 2309.14459; Hutchins et al. (1985) full text for the gulf definitions. The chapter itself was not read.

## saffer2013microinteractions

Saffer, D. (2013). Microinteractions: Designing with details. O'Reilly Media.

### Core claims

Saffer argues that the unit of interface craft is the microinteraction: in his words (as quoted in a reviewer's account) "a contained product moment that revolves around a single use case", a small piece of functionality that does one thing. Examples in a review include a Gmail warning when you chat with someone outside your organisation, an Evernote clipper button that grays out when already installed, a Mixcloud "Follow" button that becomes "Follow back" when the other person follows you, and YouTube's favicon changing as the video buffers, plays or pauses. The book is practitioner craft knowledge with many product examples, not research. It is a practical complement to the more theoretical sources in this lane.

### Specifics

The book's structure, confirmed from the Google Books listing (O'Reilly, 30 April 2013, 170 pages): Chapter 1 Designing Microinteractions; Chapter 2 Triggers; Chapter 3 Rules; Chapter 4 Feedback; Chapter 5 Loops and Modes; Chapter 6 Putting It All Together; Appendix A Testing Microinteractions. The framework is four parts. A trigger starts the microinteraction, and may be manual (initiated by the user) or a system trigger (initiated when conditions are met). Rules are the logic that governs what the user can and cannot do. Feedback is the response the rules produce. Loops and modes are what a search listing and a review call the "meta-rules" of the microinteraction: how it behaves over time and what alternate states it has.

Search listings give subsection titles that show topics covered: manual triggers (including "Bring the Data Forward", discoverability of manual triggers, "Invisible triggers", control states and labels), system triggers, rules (limited options and smart defaults, microcopy, algorithms), feedback (methods and rules), and modes (including "spring-loaded" and "one-off" modes) and loops (including long loops). The reviewer reports the advice to start from the user's need (what, when, how often), to do as much as possible with as little as possible, and an epigraph from Charles Eames that "the details are not the details" but "make the design". I did not read the book, so I cannot give its own definitions of these terms beyond the above.

### Replication and criticism

There is no empirical evidence here: the book's claims are craft judgments supported by examples. The sources I found were all positive; the one review I read lists no criticisms. A fair critique is that a "microinteraction" is defined loosely and almost any UI event can be so labeled, and that polish details can distract from structure, though I found no source making this argument and offer it only as a limitation of evidence type. The "spring-loaded" modes in the listing appear to correspond to what Raskin called quasimodes (see raskin2000humane) and what Sellen et al. tested with a held pedal, but I could not confirm Saffer's own definition.

### Implications for LTF

LTF has many moments of this size: ticking a checklist item, submitting a quiz answer, revealing a hint, completing a lesson. The four-part frame is a useful design template for each. For a checklist tick: the trigger (a tap target), the rules (can items be unticked, is order enforced), the feedback (a visible, immediate state change that does not rely on color alone) and the loop or mode (does the tick reset, does it persist to the next session). Smart defaults in rules, and "bring the data forward" in triggers, suggest showing the learner's relevant value (for example their last answer) where they act.

The advice to make feedback proportional fits LTF's tone: a completed checklist item needs a small clear change, not celebration. Treat any list of "delight" ideas with caution; the evidence base is craft opinion, so LTF should test such details with real learners before standardizing them.

Confirmed this session: Open Library record (O'Reilly, 2013, ISBN 9781449342685, work OL17316791W); Google Books page (O'Reilly Media, 30 April 2013, 170 pages, chapter list); search results listing the table of contents; Marc Abraham's book review (marcabraham.com, 10 July 2013). The book itself was not read.

## dourish2001where

Dourish, P. (2001). Where the action is: The foundations of embodied interaction. MIT Press.

### Core claims

Dourish argues that two apparently separate trends in interface design, tangible computing and social computing, share a foundation in embodiment: the way physical and social activity unfolds in real time and space, with people situated in the world. He draws on phenomenology (Heidegger, Schutz, Merleau-Ponty) and Wittgenstein's philosophy of language, which reject the Cartesian split between mind and body, to ground a conceptual framework and six design principles. His author page says meaning is not fixed inside technologies: users create and share meaning through interaction with systems and with one another. The book is a theoretical synthesis, not an empirical study.

### Specifics

The author's page names three themes: creating, manipulating and communicating meaning; and establishing and maintaining practice. A review of the book (a four-page journal-style review hosted at dcs.gla.ac.uk; the reviewer's name is not in the file I read) gives the structure and the six principles. The book discusses tangible computing broadly (Ishii's group at MIT, Xerox PARC's tabs and LiveBoards, Wellner's DigitalDesk) and social computing as "the application of sociological understanding to the design of interactive systems", with studies of an air traffic control room and a print shop. It then sets out the philosophy. The central distinction is Heidegger's ready-to-hand (a tool used so fluently that attention is on the task, as with a hammer) versus present-at-hand (the tool becomes an object of conscious attention). The design principles reported by the review: computation is a medium; meaning arises on multiple levels; users, not designers, create and communicate meaning; users, not designers, manage coupling; embodied technologies participate in the world they represent; embodied interaction turns action into meaning. Dourish deliberately gives principles, not rules or guidelines, noting that rules would lay down a method and the variety of settings makes that inappropriate.

### Replication and criticism

The same review praises the book strongly but names a weakness: it focuses almost entirely on ready-to-hand interaction and neglects present-at-hand objectification and how people move between the two modes; it also treats "digital" as opposed to "real" and "physical", which the reviewer calls contradictory. Another criticism in the review is that designers wanting practical rules may be disappointed. As a philosophical perspective it is not tested by experiments; the author states embodied interaction "is not a technology or a set of rules" but a perspective (as quoted in the review).

### Implications for LTF

The ready-to-hand idea names what fly mode is for: a learner should be absorbed in flying, not in the companion app. Any element that forces the learner to attend to the app (modal prompts, small tap targets, layout shifts) breaks the engagement, and the page should become "present-at-hand" only when something goes wrong or when the learner chooses to reflect, such as after a challenge. The reverse matters for learning: breakdowns, where a tool becomes visible, are where learning happens, so a post-challenge review that makes the learner's performance explicit is a good design pattern.

The embodied, situated view also supports LTF's decision to connect lessons to actual sim practice instead of simulating everything in the browser. The review's point that users manage coupling suggests letting learners decide how closely LTF tracks their progress. Because the book is theory, any LTF claim based on it should be treated as design rationale, not evidence of learning gains.

Confirmed this session: Open Library records (MIT Press editions, 2001 and 2004, work OL9207460W); MIT Press and Dourish author pages as summarized via search and fetch (dourish.com/embodied/); the review PDF at dcs.gla.ac.uk/~matthew/papers/WhereTheActionIs.pdf read in full. The book itself was not read.

## laurel1991computers

Laurel, B. (1991). Computers as theatre. Addison-Wesley.

### Core claims

Laurel proposes a new theory of how people interact with computers, using Aristotle's analysis of dramatic form to explain the experience (Google Books description). Her thesis, as summarized in a course reading, is that drama is a useful model for interface design: designers create imaginary worlds that extend human thinking, feeling and action; computer representation, like dramatic representation, has real consequences; and the aim is engagement from a first-person point of view. The book is a conceptual argument by a designer and researcher, not an experiment.

### Specifics

Confirmed bibliographic details: Addison-Wesley, 1991, 211 pages (Google Books record); later printings in 1993. The reading summary lists the elements she takes from Aristotle's Poetics: action, character, thought, language, melody or pattern, and spectacle or enactment. It says she also draws on Aristotle's four causes (formal, material, efficient and end) to compare drama with human-computer activity, on plot structure (complication to resolution, with discovery, surprise and reversal), on constraints (good constraints limit what people are likely to consider doing, not what they can do), and on engagement and catharsis, favoring direct, multi-sensory, first-person experiences. That summary also notes research projects applying the ideas (CMU's Oz project and MIT Media Lab work). A search summary of a review in Science Fiction Studies says Laurel recasts theatre as "mediated improvisation" and that current interface deficiencies are described as failures to observe elements of dramatic structure such as enactment, pattern, character and action.

Her earlier chapter "Interface as mimesis" (in Norman and Draper 1986) is cited in Hutchins, Hollan and Norman (1985) as the discussion of the "first-personness" feeling of direct engagement, which I read there. Hutchins et al. use an analogy from her line of thought: audiences of a well-staged play willingly suspend disbelief and engage with the drama, and the user of a model-world interface can suspend belief that the objects are artifacts of a program.

### Replication and criticism

The same review quoted in search results is critical: by limiting human-computer interaction to a one-way, purely descriptive model derived from Aristotle's account of theatre, Laurel "fails to engage with the deep specificity of either medium" (a search summary of the review; I could not fetch the review). The book is a framework, and its value is as a design lens; it has not been tested in experiments, and the source summaries I could read are secondary.

### Implications for LTF

The dramatic frame suits a training product: a lesson has an arc (setup, complication, resolution), and a challenge briefing is a short play in which the learner is the protagonist and the sim is the stage. Concretely, structure each lesson as a clear sequence with a beginning goal, a moment where something is tried and may go wrong, and a resolution that confirms what was learned, instead of a flat list of facts.

The first-person emphasis argues for second-person copy ("you") and for controls that act on the learner's own flight, not on an abstract diagram. The warning from the criticism is that the theatre metaphor can be overextended: LTF should not add characters or narrative theatrics where plain instruction is clearer, and any such element should be tested. Constraints in Laurel's sense (shape what learners are likely to attempt) correspond to lesson sequencing and to hiding advanced options until they matter, as long as the controls needed for the current task stay visible.

Confirmed this session: Open Library record (Addison-Wesley, 1991, work OL3922230W, 211 pages in the edition record); Google Books record; reading summary at astralsite.com/Drama/read3.html (authorship unknown, secondary); search summary of the Science Fiction Studies review; Hutchins et al. full text for the cited passages. The book itself was not read.
