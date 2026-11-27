## parhi2006target

Parhi, P., Karlson, A. K., & Bederson, B. B. (2006). Target size study for one-handed thumb use on small touchscreen devices. Proceedings of MobileHCI 2006, 203-210. ACM.

### Core claims

The paper asks how large an on-screen target must be before one-handed thumb use stops being slowed or made error-prone by its size. Earlier target-size work had studied stylus input on handhelds and index-finger input on large kiosk-sized screens. None had studied a thumb while the same hand holds a small device. The authors ran a two-phase experiment and concluded that 9.2 mm targets are large enough for discrete tasks (tapping a button, radio button or checkbox) and 9.6 mm targets for serial tasks (entering a sequence of digits). Their reasoning is a trade-off: speed kept improving as targets grew, but error rates stopped improving at about those sizes, so larger targets cost screen space without buying accuracy. The paper is an experimental study with a small sample, and it is the origin of the frequently quoted "about 9 to 10 mm" fingertip target rule.

### Specifics

Twenty right-handed participants (17 male, 3 female, aged 19 to 42, mean 25.7) took part. Only five had used a touchscreen handheld even occasionally; 18 regularly used keypad handhelds. Thumb length averaged 115 mm and hand width 88 mm. The device was an HP iPAQ h4155 PDA with a 240 by 320 pixel display at 0.24 mm dot pitch, so the experiment stimuli were specified in millimeters, not pixels. Participants stood and used only the right thumb. A session lasted about 45 minutes.

Phase 1 (discrete targets) was a 5 by 9 by 5 within-subjects design: target sizes 3.8, 5.8, 7.7, 9.6 and 11.5 mm per side, nine screen locations (a 3 by 3 grid), five repetitions. Each target was surrounded by randomly placed distractor targets with zero edge-to-edge spacing, a deliberate choice to resemble real layouts with neighboring widgets. Selection used a lift-off strategy: both touch-down and release had to fall inside the target, and dragging out cancelled. Phase 2 (serial targets) used a soft numeric keypad and four-digit codes, with key sizes of 5.8, 7.7, 9.6, 11.5 and 13.4 mm and four screen regions (a 2 by 2 grid).

Results: task time fell significantly with every size increase in the discrete phase, even between the two largest sizes. Error rates declined with size, but there was no significant difference between 9.6 and 11.5 mm. Hit-distribution analysis showed that a box of 9.1 by 8.9 mm would enclose 95 percent of hits to a 9.6 mm target at any screen location. Participants' comfort ratings showed the smallest comfortable target averaged 7.7 mm or less in all regions for discrete tasks. For the serial keypad, errors were significantly higher at 5.8 mm than at 9.6 mm and above; no other pairwise differences were significant. Participants said keys had to be about 8.8 to 8.9 mm in three of the four regions. Error rates were higher in serial than in discrete tasks, so the authors recommended nothing under 9.6 mm for data entry. Targets in the rightmost column showed a right-leaning hit bias, leading the authors to recommend that targets on the right edge (for right-handed users) extend to the screen edge.

The authors also note that in the serial phase Fitts' law would predict equal times across uniformly scaled keypads, yet bigger keys were faster. They hypothesize that targets smaller than the thumb force physical accommodation such as reorienting the thumb, effectively making the target smaller than it is.

### Replication and criticism

The sample is small, young, mostly male and mostly unfamiliar with touchscreens, and the device was a 2005-era PDA, used standing and not walking. The authors themselves flag that results may differ for other grips and when walking. Later work with far larger samples, such as the 100,000,000 taps study in this lane (henze2011100), measured touch accuracy in the wild on modern phones and is a useful cross-check on this small-sample result. Platform guidance (Apple and Google minimums) and the WCAG 2.2 minimum differ from 9.2 mm; the paper should be read as one empirical anchor, not as a specification. Sergeeva's student replication exists but I did not verify its conclusions, so it is not relied on.

### Implications for LTF

LTF fly mode will be used on a tablet or phone next to a running sim, often one-handed or while looking at the monitor. Controls that are tapped repeatedly (checklist ticks, next step, quiz options) are discrete targets and should be at least roughly 9 to 10 mm physical size on the device, with generous padding, with serial controls such as a numeric entry for an altitude or heading at the larger figure. Put primary actions in the lower right for right-handed use and let them reach the screen edge. Do not place small controls next to each other with no spacing, because the study used zero spacing and still found that error stopped improving only at the larger sizes. Treat the millimeter figures as a floor to be verified against current device specs, and test with real beginners, not engineers.

Confirmed this session: full text of the paper read from the author-hosted PDF (https://www.telerik.com/docs/default-source/blogs-docs/parhi-mobilehci06-pdf); Crossref record 10.1145/1152215.1152260 (title, authors, 2006, pages 203-210); web search summary (query "Parhi Karlson Bederson Target size study ...").

## seckler2014designing

Seckler, M., Heinz, S., Bargas-Avila, J. A., Opwis, K., & Tuch, A. N. (2014). Designing usable web forms: Empirical evaluation of web form improvement guidelines. Proceedings of CHI 2014, 1275-1284. ACM.

### Core claims

Many guideline lists exist for web forms, but before this study nobody had tested a whole set of them together against real forms. The authors took 20 published guidelines (compiled by Bargas-Avila and colleagues from the empirical literature), rebuilt three real news-site registration forms in an improved version that applied them, and compared original and improved versions in a controlled eye-tracking lab experiment. The improved forms were completed faster, needed fewer submission attempts, drew fewer fixations and saccades, and were rated more usable. The headline message is that guideline-driven form redesign has a measurable, multi-method payoff even on forms from high-traffic sites, and the gain is largest where the original form was worst.

### Specifics

Design: between-subjects, N = 65 (42 female, mean age 27.5, range 18 to 67), 32 on original forms and 33 on improved forms; each person filled in all three forms after a practice form. The forms came from German-language newspaper sites, chosen by screening 23 registration forms against the 20 guidelines and then picking one of rather good quality (rank 11), one medium (rank 13) and one rather poor (rank 18). The authors excluded the top third of the ranking because they had too little room to improve. They did not apply the "keep the form short" guideline, because that needs knowledge of the business. The original forms violated 9, 9 and 12 guidelines respectively. Fourteen HCI experts rated how serious the consequences of violating each guideline would be (1 to 5); the highest-rated was "never clear completed fields" and the lowest-rated included "use color to mark required fields".

The guidelines themselves (Table 1 of the paper) are grouped as content, layout, input types, error handling and submission. Examples stated there: place labels above fields; do not use more than one column, one question per row; match field size to expected answer length; use radio buttons for up to four options and a drop-down for more; state required formats in advance without an extra example; show error messages after the form is sent, all together, embedded in the form, noticeable by color, icon and text, polite and explaining the fix; never clear already completed fields after an error; disable the submit button after a click; show a confirmation page saying what happens next; avoid reset buttons.

Measures: submissions needed, error types, task completion time (log-transformed), keystroke-level model predictions from a form analyzer tool, eye-tracking (fixation count and duration, saccade time) with a 60 Hz SMI tracker, NASA-TLX, SUS, ASQ, the Form Usability Scale (nine items), and interviews.

Results: in all three forms fewer attempts were needed to submit the improved form. Completion time improved by 25 percent (Sueddeutsche, 113 to 85 seconds), 33 percent (NZZ, 105 to 70 seconds) and 18 percent (Spiegel, 104 to 85 seconds); the difference was significant for the two worse forms (effect sizes d = .93 and 1.00) but not for the best one. The keystroke model had predicted only 7 to 23 percent. Fixations on the NZZ form fell from a mean of 155 to 96. Subjective ratings improved overall, with the strongest effects on the NZZ form. Users most often complained about missing format specifications and unclear required versus optional marking in original forms, and the authors say guidelines on format specification and on error message design had a remarkable effect on first-attempt success.

### Replication and criticism

This is a single lab experiment with a small, young, internal-database sample of experienced internet users, from German-language sites, and it tests the guideline set as a bundle. It cannot say which individual guideline did the work; the authors infer from interviews and error counts that format specification (guideline 13) and error message handling (17) mattered most, and that expert severity ratings did not track actual user impact well. The effect on the best-quality form was not significant, so benefits shrink as baseline quality rises. The original Bargas-Avila guideline set is a literature synthesis, and some individual rules (for example the radio-button threshold of four options, or the single-column rule) rest on only a few studies. A CHI 2013 work-in-progress version of this study exists. Later practitioner research (for instance Baymard on checkout forms, also in this lane) broadly agrees on the importance of error and format design.

### Implications for LTF

LTF has few forms: sign-up, sign-in, settings, and short answer or numeric entry inside challenges. The study supports a plain checklist for these. Use one column, labels above fields, state formats before the learner types (for example "Altitude in feet MSL"), keep typed text after an error, put the error beside the field in words and an icon (not color alone), and give a clear confirmation of what happens next. Mark optional fields, not required ones, when most are required. The strongest evidence is for format hints and error messages, so invest there first, especially in challenge entry fields where units and formats are easy to get wrong. Avoid captchas and reset buttons.

Confirmed this session: full text read from https://research.google.com/pubs/archive/42513.pdf; Crossref record 10.1145/2556288.2557265; abstract via web search of the Google research publication page.

## bargasavila2010simple

Bargas-Avila, J. A., Brenzikofer, O., Roth, S. P., Tuch, A. N., Orsini, S., & Opwis, K. (2010). Simple but crucial user interfaces in the World Wide Web: Introducing 20 guidelines for usable web form design. In R. Mátrai (Ed.), User Interfaces (InTech).

### Core claims

The chapter is a literature review turned into a rule set. The authors argue that web forms are the main contact point between users and site owners, that people never visit a site in order to fill in a form, and that an unusable form is therefore a hurdle where a transaction is lost. They cite a practitioner claim (attributed to Wroblewski, 2008) that a successful redesign of a poor form may raise completion by 10 to 40 percent, and an eBay account of a registration-form redesign. From the empirical and practitioner literature they derive 20 guidelines under five headings: content, layout, input types, error handling and submission. The chapter is a synthesis, not a single experiment, and it mixes controlled studies (including the authors' own) with expert best practice. It is the source list that the CHI 2014 test in this lane (seckler2014designing) later evaluated as a bundle.

### Specifics

The chapter summarizes the evidence behind each group. Content: ask only what is necessary; let users tell required from optional at all times. A study by Pauwels and colleagues, as reported here, found that color-highlighting required fields led to faster completion, fewer errors and higher satisfaction than an asterisk alone. Tullis and Pons found people were fastest when required and optional fields were separated.

Layout: Penzo's eye-tracking comparison (reported by the chapter, and read directly elsewhere in this lane) found left-aligned labels took nearly twice as long as right-aligned ones, and top-aligned labels were fastest, needing one fixation for label plus field. Wroblewski's reading is that left-aligned labels suit unfamiliar data where you want people to slow down. One column, one question per row; match field length to expected answer length. Christian and colleagues found that a month field half the size of the year field produced more answers in the expected format, and Couper and colleagues found more incorrect answers when field size did not fit the expected input.

Input types: radio buttons for two to four options and a drop-down beyond four, on the advice of Miller and Jarrett, but the empirical comparisons are mixed. The chapter reports that Healey found radio buttons faster per question but no difference over the whole questionnaire, Hogg and Masztal found no difference, and Heerwegh and Loosveldt found drop-downs slower in one study that a second study did not replicate. Checkboxes beat list boxes for multiple selection (the authors' own 2009 study). For dates, the authors' comparison of six designs found a drop-down best when format errors must be avoided and a single text field with MM and YYYY symbols fastest; Christian and colleagues reported 92.9 to 95.8 percent correct format when symbols were used, fewer when instructions sat to the right of the year field.

Error handling: stating the format rule in advance, without an extra example, produced significantly fewer errors and submission trials in the authors' study. In the 2007 comparison of six error-message presentations they report, messages embedded next to fields, shown after the send button, led to fewer consecutive errors, while inline validation (message appears as the field is left) led to significantly more errors, because people ignored or dismissed the messages. Never clear completed fields; make errors noticeable at a glance by color, icon and text; disable the submit button after a click; show a confirmation page and e-mail; avoid reset buttons.

### Replication and criticism

The inline validation finding is the most contested. It was reported in 2007 on a single study, and a later well-known practitioner test (wroblewski2009inline in this lane) reported the opposite for certain fields. The most defensible reading is that validation timing matters by field type and wording, not that one policy always wins. The date-entry and error-message results come from the authors' own lab studies with modest samples. The radio-versus-drop-down advice rests on mixed evidence and the chapter itself says so. Required-field coloring should not rely on color alone for accessibility reasons (see WCAG in this lane). As a book chapter, it is not peer-reviewed in the usual sense, but its citations are traceable and later tests (seckler2014designing) found the bundle effective.

### Implications for LTF

Use this chapter as a checklist for sign-up, sign-in, settings and typed answers in challenges: state formats in advance, one column, labels on top, size fields to the expected answer, show errors after submit next to the field with icon and text, never clear typed input, and confirm what happens next. For quiz answers that need units, show the unit beside the input. Treat inline validation as a per-field decision and test it with beginners, not as a blanket rule.

Confirmed this session: full chapter text read from https://cdn.intechopen.com/pdfs/10814.pdf (reached via https://doi.org/10.5772/9500); Crossref record 10.5772/9500 (six authors, 2010, publisher InTech, book User Interfaces, ISBN 9789533070841).

