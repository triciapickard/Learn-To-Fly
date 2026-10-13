# M16 — desk verification (2026-10-13)

Sources consulted: PHAK (FAA-H-8083-25C) Chapter 2 and Chapter 17 (faa.gov PDFs); Risk Management Handbook FAA-H-8083-2A (2022) Chapters 2–3; AIM 8-1-1 (online edition, 2026-10-13); FAA Tips on Mountain Flying (FAA-P-8740-60); AirNav KLVK, KAUN, KBLU, KTRK, KTVL, KSMF (FAA data effective 2026-10-01, read 2026-10-13); leg distances computed great-circle from the AirNav coordinates; v1.md Section 12.9; v2.md Sections 14.3, 14.4, 15 (L16.1, L16.2, C16.1, C16.2), 21.8; `content/aircraft.yaml`.

## L16.1 — Risk management for longer flights

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| 5P = Plan, Plane, Pilot, Passengers, Programming | Confirmed | PHAK Ch 2 "The 5 Ps Check" (the 2022 RMH 2A no longer contains the 5P model) | none |
| 5P decision points | Corrected: "top of climb" is not one of them. PHAK: preflight, just before takeoff, midpoint of flight (hourly if longer than 2 h), just before descent, just before the FAF or, VFR, entering the traffic pattern | PHAK Ch 2 p. 2-13 | changed "top of climb" → "midpoint of the flight, or every hour on a flight longer than 2 hours"; "before the approach" → "before entering the pattern" (text and summary list) |
| Quiz q1 crosswind arithmetic | Corrected: 240°/18G26 on KTRK RWY 29 (286° mag) gives ~13 kt steady, ~19 kt in gusts, not 15 kt | AirNav KTRK runway headings 2026-10-13; sin(46°) | changed "a 15 kt crosswind component on the runway in use" → "about 13 kt of crosswind on Runway 29, and nearly 19 kt in the gusts"; answer unchanged (still exceeds the 12 kt minimum) |
| PAVE asks four questions; IMSAFE, F = fatigue | Confirmed | PHAK Ch 2 (PAVE, IMSAFE checklists) | none |
| Hazardous attitudes and antidote wording | Confirmed as PHAK wording ("Follow the rules. They are usually right." etc.). Note RMH 2A Figure 3-2 words the anti-authority antidote "They help prevent accidents."; PHAK wins | PHAK Ch 2 Figure 2-4; RMH 2A Figure 3-2 | none |
| Personal minimums: "a decision already made", relax one line at a time, never to complete a specific flight | Confirmed | RMH 2A Ch 2 "cautions" (not adjust to complete a flight; one variable at a time; consult a CFI) and Step 6 "Stick to the plan" | none |
| Personal-minimum starting values (wind 20, xwind 12, gust 8, vis 5/8, ceiling 3,000, DA 7,000, fuel 1 h, 2.5 h leg, night, 10 h awake) | Open — author decision. RMH 2A gives only a sample built from the pilot's own experience (sample pilot: 10 kt wind, 5 kt gusts, 7 kt crosswind, 2,500 ft/4 sm day VFR) and prescribes nothing; `{{aircraft.maxCrosswind}}` = 15 kt in `aircraft.yaml` matches | RMH 2A Figures 2-6 to 2-8; `content/aircraft.yaml` | callout tightened to `Author decision:`; kneeboard print still open (v2 21.8 lists the planning sheet, not this worksheet) |
| Acute vs chronic fatigue | Confirmed, chronic wording tightened. PHAK 17: acute is short-term, cured by rest and 8 h sleep; chronic extends over a long period and is not relieved by rest. AIM 8-1-1: chronic "occurs when there is not enough time for full recovery between episodes of acute fatigue"; fatigue "may not be apparent to a pilot until serious errors are made" | PHAK Ch 17 p. 17-13; AIM 8-1-1 | changed "builds over days of poor sleep" → "builds when there is not enough recovery between tired days" |
| Fatigue signs (narrowed attention, irritability, accepting drift) | Confirmed in substance (PHAK 17: degraded attention and concentration, "disruption of the perceptual field", irritability; PHAK 2: "acceptance mode" at the end of a long day) | PHAK Ch 17, Ch 2 | none |
| 2.5-hour leg and 10-hours-awake limits | Open — author decision. No FAA figure; PHAK 2 only says run the 5P check hourly on flights over 2 h | PHAK Ch 2, Ch 17; RMH 2A | callout tightened to `Author decision:` |
| `airspace-and-minimums` deck for 5P/antidote cards | Open — author decision. Slug is defined in v2 14.4; no `content/flashcards/` directory exists yet; the v2 L16.1 spec names no Practice deck | v2.md 14.4, 15 | same callout |

## L16.2 — Preparing for the Advanced VFR stage check

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Tier tolerances (±200/15/20, ±150/10/15, ±100/10/10) | Confirmed | v1.md 12.9 | none |
| Silver rule, badge name "Skyhawk Advanced VFR (Sim)", not a certificate | Confirmed | v2.md 14.3 | none |
| C16.1 format (12 kt or 12G18, failure at 10–30 min, slip prompt, Silver standards per row, soft/short-field not required) | Confirmed | v2.md C16.1 spec | none |
| C16.2 legs, dawn, 30% "Truckee closed" prompt, optional Return | Confirmed | v2.md C16.2 spec | none |
| KAUN | Confirmed real-world: 1,538 ft, RWY 07/25 3,700 x 75 ft, non-towered, CTAF 122.7, AWOS 119.375, NorCal Approach 125.4 | AirNav KAUN 2026-10-13 | none (lesson says "CTAF at Auburn") |
| KTRK "about 5,900 ft", tower | Confirmed real-world: 5,904 ft; RWY 11/29 7,001 x 100, 02/20 4,654 x 75; part-time tower 120.575 (0700–1800 Oct 1–Mar 14, to 1930/2000/1900 by season), GND 118.3, ATIS 118.0; calm-wind RWY 02; summer afternoon DA often above 9,000 ft | AirNav KTRK 2026-10-13 | "the tower at Truckee" → "the part-time tower at Truckee" |
| KTVL "about 6,300 ft" | Confirmed real-world 6,268 ft; **no tower** (CTAF 122.85, ASOS 124.725). Lesson text never claims a KTVL tower | AirNav KTVL 2026-10-13 | none |
| Flight following facility near Sacramento and its Class C | Confirmed: Northern California TRACON "NorCal Approach"; KSMF Class C sectors 125.25 (SW), 125.4 (W–NE), 127.4 (E–SE); KLVK NorCal Departure 125.35 (RWY 25) / 123.85 (RWY 07). Lesson names no frequencies, so nothing to change; a KLVK–KAUN direct line passes east of the SMF Class C | AirNav KSMF, KLVK, KAUN 2026-10-13 | none |
| Donner Summit terrain and crossing altitude | Confirmed: I-80 Donner Summit 7,239 ft (Donner Pass on old US 40, 7,056 ft); Donner Peak 8,019, Mt Judah 8,243, Mt Lincoln 8,383 within 2 nm south, Castle Peak 9,103 north. Tips on Mountain Flying: ridge + 1,000 ft (+2,000 ft if ridge winds > 20 kt), level 3 mi before, cross at 45°. L13.2's 9,500 ft MSL is consistent; L16.2 states no number | Wikipedia/SummitPost elevations; FAA-P-8740-60; L13.2 | none |
| Leg distances | Computed: KLVK–KAUN 83 nm, KAUN–KBLU 26 nm, KBLU–Donner Summit 18 nm, Donner–KTRK 9 nm (KAUN–KTRK 49 nm direct), KTRK–KTVL 27 nm; KLVK–KTRK 126 nm direct. "About 2 hours" for the capstone is plausible with the Auburn stop and the climb | great-circle from AirNav coordinates | none |
| KBLU usable in the sim | Open — sim check (real-world: public, 3,300 x 50 ft asphalt, 5,284 ft, unattended, CTAF 122.9, closed in winter and sunset–sunrise) | AirNav KBLU 2026-10-13 | callout tightened to `Sim check:` |
| Swap `[[l6-6…]]` for `l6-7` | Resolved: keep l6-6. v1 L6.7 is "Weather basics: METARs and TAFs" (P1, not written), which does not fit the nav-log row | v1.md 13.2 | note removed |
| Shot list "Donner Summit from the west" | Open — author decision (no images in lessons) | authoring rules | split into its own `Author decision:` callout |

Still open for the sim: 1 item · for the POH: 0 · author decisions: 4

Wanted resources (not added): an AIM Chapter 8 slug (`aim-8-1`, Fitness for flight) if the fatigue section should cite AIM 8-1-1 directly.
