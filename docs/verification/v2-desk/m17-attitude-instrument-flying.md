# M17 — desk verification (2026-10-13)

Sources consulted: Instrument Flying Handbook FAA-H-8083-15B (faa.gov PDF, 2026-10-13; Chapters 3, 5, 6 and 7), Pilot's Handbook of Aeronautical Knowledge Chapter 8 (faa.gov PDF, 2026-10-13), Instrument Rating – Airplane ACS FAA-S-ACS-8C (faa.gov PDF, 2026-10-13), AIM 5-4-11 (online edition, Change 3 effective 2026-07-09), Pilot/Controller Glossary (online, 2026-10-13), FAA Order JO 7110.65 paragraphs 5-6 and 5-10-3 (online, 2026-10-13), Garmin G1000 NXi Pilot's Guide for the Cessna Nav III (190-02177-00 Rev. A, Civil Air Patrol mirror of the Garmin PDF). Not reachable: the sim, the 172S POH, MSFS 2024 Working Title NXi behaviour (forum search found nothing on chevrons or declutter).

## L17.1 — The instrument scan

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| W33 placeholder | Widget pending | — | callout retagged `Widget pending:` |
| NXi PFD layout: turn rate indicator above the HSI | Confirmed: "located directly above the rotating compass card" | Garmin NXi Pilot's Guide, Flight Instruments | sentence added after the table; screenshot stays `Sim check:` |
| "Tachometer (EIS strip)" listed as a PFD instrument | Corrected: in the Cessna NXi the EIS lives on the MFD (PFD only in reversionary mode) | Garmin NXi Pilot's Guide, EIS section | table header "Instrument on the G1000", row "Tachometer (EIS strip, MFD)", prose names the MFD |
| Control vs performance instruments, fixation / omission / emphasis | Confirmed | IFH Ch 6 (control and performance method; cross-check errors) | none |
| Attitude-and-power table | Open — sim | `content/aircraft.yaml` (unverified) | callout tightened to `Sim check:` |
| Custom weather, assistance names, instruments-only camera | Open — sim | v2 Sections 9.5 and 9.6 | callout tightened to `Sim check:` |

## L17.2 — Basic instrument maneuvers and patterns

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Gold tier ±100 ft / ±10° / ±10 kt "inspired by" the IR ACS | Confirmed (IR.IV.A.S1 adds bank ±5° in turns) | FAA-S-ACS-8C Area IV Task A | none |
| Bank for standard rate ≈ TAS ÷ 10 + 7 | Confirmed as an IFH rule (Ch 4: "divide the airspeed by ten and add 7", 90 kt → 16°). IFH Ch 7/8 also give "15% of TAS" (100 kt → 15°), which matches the geometry better | IFH Ch 4, Ch 7, Ch 8 | clause added: the rule rounds a little high, the turn rate bar is the judge; sim check records the real bank |
| Roll-out lead ≈ half the bank angle | Confirmed | IFH Ch 7 ("lead of one-half the angle of bank") | none |
| Level-off lead = 10% of vertical speed (500 fpm → 50 ft) | Confirmed | IFH Ch 7 and Ch 8 | none |
| Timed turns: 3°/s, degrees ÷ 3 | Confirmed | IFH Ch 7 | none |
| NXi turn rate indicator: ticks for half-standard and standard, magenta trend vector | Confirmed; "lug" → "lubber line"; arrowhead above 4°/s noted | Garmin NXi Pilot's Guide, Turn Rate Indicator | prose fixed; screenshot and bank-at-cruise stay `Sim check:` |
| Pattern A "compare with the IFH figure" | Resolved: FAA-H-8083-15B has no Pattern A/B; its basic instrument flight patterns are racetrack, procedure turn, 80/260, teardrop and circling | IFH Ch 7, "Basic Instrument Flight Patterns" | callout rewritten as `Author decision:`; leg table checked for internal consistency (all legs match their times) |

## L17.3 — Unusual attitude recovery

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Nose-high order: power, nose down, wings level | Confirmed ("increase power…, apply forward elevator pressure…, correct the bank"; applied almost simultaneously, in that sequence) | IFH Ch 7, Unusual Attitudes and Recoveries | none |
| Nose-low order: power off, wings level, ease out | Confirmed ("reduce power…, correct the bank…, raise the nose… smooth back elevator pressure") | IFH Ch 7 | none |
| ACS: identify both nose-high and nose-low, correct sequence | Confirmed | FAA-S-ACS-8C IR.IV.B.S1 | none |
| G1000 "declutters and draws red chevrons" | Corrected: declutter (inset map, annunciations, lower windows) at +30°/−20° pitch or 65° bank, with attitude, airspeed, altitude, VS and HSI kept; red chevrons from 50° nose up and 30° nose down. The IFH Ch 7 glass example uses other thresholds (30° up / 15° down); Garmin wins for the NXi | Garmin NXi Pilot's Guide, Unusual Attitudes and PFD Annunciations | paragraph rewritten; callout tightened to `Sim check:` (does the MSFS NXi reproduce it; screenshot) |
| W34 placeholder | Widget pending | — | callout retagged `Widget pending:` |

## L17.4 — Partial panel and the magnetic compass

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| AHRS failure → red X on attitude and heading; ADC failure → airspeed, altitude, VS, TAS, OAT | Confirmed | Garmin NXi Pilot's Guide, red X table; IFH Ch 7 ("loss of all heading and attitude indications on the PFD") | callout rewritten: confirmed part recorded |
| Turn rate indicator lost with the AHRS | Consistent with the IFH, not stated by Garmin | IFH Ch 7 | stays `Sim check:` |
| Standby attitude indicator power source | Open — POH (real NAV III: vacuum; recent airframes: GI 275) | 172S NAV III POH Section 7 | `POH check:` |
| DISPLAY BACKUP → reversionary mode | Confirmed (red button on the audio panel) | Garmin NXi Pilot's Guide, System Overview | none |
| ANDS: accelerate north, decelerate south, on E/W headings | Confirmed | IFH Ch 5; PHAK Ch 8 | none |
| Compass turning rule "latitude plus half the bank" attributed to the IFH | Corrected: the IFH and PHAK both teach **15° plus half the latitude** (40° N → 35°); at 38° N that is 34°, not 45°. The lesson's example turns were also the wrong way round (a right turn from east does not reach north first) | IFH Ch 5 (Northerly/Southerly Turning Errors); PHAK Ch 8 | rule, example headings (west→north roll out at 325; east→south at 215), quiz q4 (answer 45 → 34, tolerance 5), summary bullet and W35 note updated; lead/lag wording replaced by "shows less/more turn than you made" because the FAA texts use lead/lag the other way round |
| UNOS: undershoot north, overshoot south | Confirmed | IFH Ch 5; PHAK Ch 8 | none |
| W35 placeholder | Widget pending | — | callout retagged `Widget pending:` |
| No-gyro: "This will be a no-gyro vector", "turn left/right", "stop turn", standard rate until turned onto final, then half standard rate | Confirmed; the half-rate call is "MAKE HALF-STANDARD RATE TURNS" | AIM 5-4-11 (Change 3, eff. 2026-07-09); P/CG "No gyro approach/vector"; JO 7110.65 5-6 and 5-10-3 | table row corrected ("Make all turns half standard rate" → "Make half-standard rate turns"); "execute the turn immediately" added; callout reduced to `Sim check:` (built-in ATC has no no-gyro option) |
| Failure menu path for AHRS | Open — sim | v2 Section 9.1 | callout tightened to `Sim check:` |

## L17.5 — Spatial disorientation

No verify callouts. Content checked anyway:

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Canals stop sensing a steady turn "after about 20 s" | Corrected to "about 15–20 s" | IFH Ch 3 ("may take about 15–20 seconds for the fluid… to reach the same speed") | table row and summary bullet |
| Leans, Coriolis, graveyard spiral, somatogravic, inversion: cause, sensation, wrong reaction | Confirmed | IFH Ch 3, Vestibular Illusions | none |
| Risk reducers (head still, fatigue/illness) | Confirmed | IFH Ch 3 | none |

Still open for the sim: 9 items · for the POH: 1 · author decisions: 1 · widgets pending: 3

Wanted resources (not added to `resources.yaml`): FAA Order JO 7110.65 (controller phraseology), Pilot/Controller Glossary.
