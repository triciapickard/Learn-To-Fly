# M10 — desk verification (2026-10-13)

Sources consulted: AIM (current edition online, 2026-10-13: 2-3-5, 2-3-8, 4-3-7, 4-3-18, 7-1-22, 7-1-24, 7-4-3 to 7-4-9); 14 CFR 91.129 via eCFR text (law.cornell.edu mirror); AFH FAA-H-8083-3C Chapters 6 and 9 (faa.gov PDFs); PHAK Chapter 14; Private Pilot ACS FAA-S-ACS-6C and Commercial Pilot ACS FAA-S-ACS-7B (faa.gov PDFs, Nov 2023); Cessna 172S NAV III POH 172SPHBUS Rev 2 (18 Nov 2010, web-hosted copy on txwg.cap.gov, confirm against the course's POH revision); FAA d-TPP cycle 2610 (01–29 Oct 2026) airport diagrams AL-6075 (LVK), AL-294 (OAK), AL-9216 (PAO); FAA Chart Supplement SW hot spot list (editions 9 Jul–3 Sep 2026 and 29 Oct–24 Dec 2026, identical entries for LVK and OAK); AirNav KLVK, KPAO, KOAK (2026-10-13); AOPA ASI McSpadden (Nall) Report coverage.

## L10.1 — Crosswinds revisited: gusts, wind shear and limits

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Prerequisite swap to L4.5 | Open — author decision | — | callout tightened (`Author decision:`) |
| KLVK RWY 25R magnetic heading (lesson said about 250°) | Corrected: 254° magnetic, 270° true | FAA airport diagram AL-6075 (2610); AirNav KLVK 2026-10-13 | changed "roughly 250°, 40° off" → "about 254°, about 35° off"; recomputed example crosswinds 8/13 kt → 7/12 kt, decision callout 16 kt → 14 kt |
| Widget W25 placeholder | Widget pending | — | callout tagged `Widget pending:` |
| Gust additive = half the gust factor | Confirmed; AFH caps it at one-half for short-field; POH says only "slightly higher approach speeds in turbulent air" | AFH Ch 9 "normal approach speed plus one-half of the wind gust factors"; "no more than one-half the gust factor"; 172S POH Sect 4 short field landing | callout deleted; one sentence added recording the POH wording |
| Wind shear AIM references | Confirmed, references corrected: 7-1-24 is Microbursts, 7-1-22 Wind Shear PIREPs, LLWAS is 4-3-7 | AIM 7-1-22, 7-1-24, 4-3-7 | recorded in the tightened callout |
| Loss-of-control accident claim | Corrected wording: landing accidents are the largest pilot-caused group and loss of control on the ground leads it | AOPA ASI McSpadden Report (2022 data: 136 LOC-ground landing accidents); AFH Ch 9 "more at risk during approach and landing than any other phase" | safety callout reworded |
| MSFS 2024 gust/shear weather controls | Open — sim check | — | callout tightened (`Sim check:`) |

## L10.2 — Slips

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Widget W25 placeholder | Widget pending | — | callout tagged |
| Forward-slip recovery order (lesson: rudder first, then wings) | Corrected: wings levelled and rudder released together, smoothly; abrupt rudder release makes the nose swing and speed build | AFH Ch 9 "Discontinuing a slip is accomplished by leveling the wings and simultaneously releasing the rudder pressure" | recovery paragraph rewritten; order quiz l10-2-q2 steps and explanation rewritten |
| Slips with flaps wording | Confirmed and paraphrased: steep slips with >20° flap may cause a slight elevator oscillation; full-rudder sideslip with >20° flap may show it at approach speed; does not affect control | 172S POH Sect 4 normal landing and crosswind landing notes | prose updated; callout tightened to `Sim check:` |
| Static port location and slip airspeed error | Confirmed single static source on the left side of the fuselage; AFH confirms "considerable error" possible; direction of error not documented | 172S POH Sect 4 preflight item; AFH Ch 9 | removed "high or low depending on which way you slip"; callout tightened to `Sim check:` |
| MSFS auto-rudder menu path | Open — sim check (expected Options › Assistance options › Piloting) | community guides only | callout tightened (`Sim check:`) |

## L10.3 — Soft-field takeoffs and landings

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Dry grass +15% ground roll | Confirmed | 172S POH Sect 5 takeoff chart notes "increase distances by 15% of the ground roll figure" | callout tightened to `Sim check:` (surface model) |
| Soft-field flaps 10°, early lift-off, level off to accelerate | Confirmed | 172S POH Sect 4 "Soft or rough field takeoffs are performed with 10° flaps…"; AFH Ch 6 (stay in ground effect until at least Vx, flaps up at Vy) | callout tightened to `Sim check:` (sim lift-off speed, screenshot) |
| Soft-field final approach speed (lesson used {{vspeed.approach}}) | Corrected: AFH says the short-field approach speed applies and extra speed causes float | AFH Ch 9 soft-field approach and landing | landing table "Final" row now uses {{vspeed.shortFieldApproach}} |
| Soft-field landing technique (power through touchdown, nose held off, no braking, flaps not retracted during roll) | Confirmed | AFH Ch 9; 172S POH normal landing note on rough/soft fields | none |
| Grass strip for the C10.3 variant; Week 2 surface findings | Open — author decision + sim check | — | callout tightened |

## L10.4 — Short-field mastery and obstacles

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Prerequisite swap to L4.6 | Open — author decision | — | callout tightened |
| KPAO runway length 2,441 ft | Confirmed 2,441 × 70 ft (real-world) | AirNav KPAO 2026-10-13 | none |
| Which end has the obstacles (lesson said "trees at the end") | Corrected: charted obstructions are an 8-ft lighted dike 300 ft from the RWY 13 end and a 5-ft lighted dike 230 ft from the RWY 31 end; no trees listed | Chart Supplement data via AirNav KPAO | heading and opening sentence changed; safety callout example now uses the real KPAO entry |
| Short-field speeds and flaps (10° / 30°, 51 / 56 / 61 KIAS) | Confirmed; tokens in `aircraft.yaml` match | 172S POH Sect 4 short field takeoff/landing checklists and Sect 5 Figure 5-5 header (lift-off 51, 50 ft 56) | callout tightened to `Sim check:` (in-sim checklist) |
| Wind and surface corrections (−10% per 9 kt headwind, +10% per 2 kt tailwind up to 10 kt, +15% dry grass) | Confirmed | 172S POH Sect 5 takeoff chart notes | prose reworded as chart notes rather than rules of thumb; callout tagged `Widget pending:` + `Sim check:` |
| Example 1,800 ft to 50 ft at sea level, 30 °C | Confirmed close: POH chart gives 1,810 ft | 172S POH Figure 5-5 | parenthetical added in the table |
| Chart Supplement obstruction wording / obstacle symbols | Partly: wording confirmed from the KPAO entry; Chart User's Guide not checked | AirNav KPAO | safety callout reworded; runway choice left as `Author decision:` |
| Flaps up after touchdown; aerodynamic braking step | Confirmed flaps-up step; corrected step 1: Cessna lowers the nose wheel carefully immediately after the mains touch and holds the yoke full back while braking | 172S POH short field landing; AFH Ch 9 braking ("incipient skid"); `short-field-landing` checklist | braking steps rewritten; callout tightened to `Sim check:` (skid modelling) |
| Short-field landing objective "within 200 ft beyond" | Confirmed | Private Pilot ACS FAA-S-ACS-6C PA.IV.F.S10 | none |

## L10.5 — Runway safety: wake turbulence and hot spots

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Vortex behaviour (start/stop, sink, drift, linger, heavy-clean-slow) | Corrected: current AIM says vortices sink at several hundred fpm, slowing and weakening (no "level off below the path"); near the ground they move laterally at 2–3 kt; a 1–5 kt crosswind can hold the upwind vortex on the runway | AIM 7-4-3, 7-4-4 | table rows rewritten; callout left as `Author decision:` (diagram) |
| Avoidance table | Corrected: the "take off behind a landed airplane — rotate beyond its touchdown point" row is in neither AIM 7-4-6 nor PHAK Ch 14; replaced with the 2-minute low-approach/touch-and-go item and the parallel-runway item | AIM 7-4-6; PHAK Ch 14 | table rows replaced |
| Time-based spacing | Confirmed and sharpened: 2 min behind heavy, 3 min behind super (same threshold); 3 min for a small aircraft from an intersection behind a large (waivable on pilot request, not behind a B757); no mandatory interval from the same threshold behind a large non-757; request extra spacing on ground control | AIM 7-4-9 | prose rewritten; callout deleted |
| Hold-short and crossing rules; marking and sign descriptions | Confirmed: clearance required before crossing any runway, "taxi to" does not authorise entering/crossing the departure runway; two solid/two dashed lines, solid on the hold side; white on red sign, "15-33" ordering (so "25R-7L" is right from the north side at KLVK) | 14 CFR 91.129(i); AIM 4-3-18; AIM 2-3-5, 2-3-8 | callout tightened to `Sim check:` |
| KOAK hot spots | Confirmed HS 1 (Twy A/B both cross 28R), HS 2 (ramp exits onto H/G toward 10L-28R), HS 3 (Twy C between C1 and J, APCH/DEP hold) | Chart Supplement SW hot spot list; FAA diagram AL-294 (2610) | Oakland paragraph rewritten with the three hot spots |
| KLVK hot spots (lesson said none charted) | Corrected: KLVK has HS 1–HS 6 (hold-short non-compliance at 25R/Twy B, 25L/Twy C, 07L/Twy H, 07R/Twy G, 25R/Twy G; confusion at Twy J/A/G) | Chart Supplement SW hot spot list; FAA diagram AL-6075 (2610) | Livermore prose and taxi-brief table rewritten; callout tightened (`Author decision:` screenshot) |
| Hold-short readback requirement; KLVK Taxiway A route | Confirmed: ATC must obtain a readback of all runway hold short instructions; pilots read back runway assignment, any clearance to enter a runway, any hold-short or LUAW; Taxiway A runs along the north side of 7L/25R to the 25R end | AIM 4-3-18 b; FAA diagram AL-6075 | callout deleted |

## L10.6 — Power-off accuracy landings

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Commercial ACS power-off 180 tolerance | Confirmed: Task IV.M, CA.IV.M.S8 "within 200 feet beyond or on the specified point with no side drift … aligned with … the runway centerline"; AFH: throttle closed abeam the spot, glide at recommended speed or 1.4 Vso, downwind usually not above 1,000 ft AGL | FAA-S-ACS-7B (Nov 2023); AFH Ch 9 "180° Power-Off Approach" | callout deleted; standard added to the intro; `afh-ch9` added to resources |
| Maximum glide figure | Confirmed 68 KIAS best glide; ratio already checked by the author against POH Figure 3-1 in L5.4 (sim check recorded there) | 172S POH Sect 3 | none (no duplicate callout) |
| Typical base-turn and roll-out altitudes | Open — sim check | — | callout tightened (`Sim check:`) |

Still open for the sim: 11 items · for the POH: 0 · author decisions: 6 · widget pending: 3

Wanted resources (not in `resources.yaml`): `ecfr-91-129` (14 CFR 91.129), `faa-acs-private` already exists; a `cessna-172s-poh` reference entry would let POH citations carry a slug.
