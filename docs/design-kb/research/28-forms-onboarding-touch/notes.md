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

