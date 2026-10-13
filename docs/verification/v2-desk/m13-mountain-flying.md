# M13 Mountain flying — desk verification (2026-10-13)

Sources consulted: AIM 7-6-7 "Mountain Flying" and 7-6-8 "Use of Runway Half-way Signs" (current edition online, 2026-10-13); FAA "Tips on Mountain Flying" FAA-P-8740-60 (AFS-803, 1999 pamphlet PDF via faasafety.gov); FAA/GAJSC Safety Enhancement Topic "Mountain Flying" (AFS-850 17_04, 2022 PDF); AC 00-57 "Hazardous Mountain Winds and Their Visual Indicators"; PHAK Ch 5 (turn radius, load factor and stall speed) and Ch 11 (density altitude, takeoff/landing performance); 14 CFR 91.151 and 91.159 (eCFR text read via law.cornell.edu); AirNav KAUN, KBLU, KTRK, KTVL, KMEV, KRNO (FAA data effective 2026-10-01, read 2026-10-13); NWS Directive 10-812 (FB forecast levels); Wikipedia/USGS GNIS for Donner Summit (I-80), Donner Pass, Donner Peak, Mount Judah and Castle Peak.

Real-world airport data recorded (AirNav, 2026-10-13; the sim may differ):

| Airport | Elevation | Tower | Runways |
| --- | --- | --- | --- |
| KAUN Auburn Muni | 1,538 ft | None, CTAF 122.7 | 7/25 3,700 x 75 ft asphalt |
| KBLU Blue Canyon–Nyack | 5,284 ft (estimated) | None, CTAF 122.9 | 15/33 3,300 x 50 ft asphalt; closed winters (snow) and sunset–sunrise; unattended |
| KTRK Truckee–Tahoe | 5,904 ft | Yes, part time, 120.575 (Mar 15–Apr 30 0700–1930; May 1–Aug 31 0700–2000; Sep 0700–1900; Oct 1–Mar 14 0700–1800); CTAF when closed | 11/29 7,001 x 100 ft; 2/20 4,654 x 75 ft asphalt |
| KTVL Lake Tahoe | 6,268 ft | None, CTAF 122.85 | 18/36 8,541 x 100 ft asphalt; rapidly rising terrain E, S and W; RWY 36 departures left to 320° after 1 nm to the shoreline |
| KMEV Minden–Tahoe | 4,724 ft | None, CTAF 123.05; glider/sailplane activity | 16/34 7,399 x 100 ft; 12/30 5,299 x 75 ft asphalt; 12G/30G dirt |
| KRNO Reno/Tahoe Intl | 4,415 ft | Yes, Class C, continuous | 17R/35L 11,001 ft; 17L/35R 9,000 ft; 8/26 6,102 ft concrete |

Terrain: I-80 Donner Summit 7,239 ft (westbound) / 7,227 ft (eastbound); historic Donner Pass 7,056 ft; Donner Peak 8,019 ft and Mount Judah 8,243 ft just south of the pass; Castle Peak 9,103 ft north of I-80. KAUN–KTRK great-circle distance computed from AirNav coordinates: about 49 nm.

## L13.1 — Mountain weather and airflow

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| W29 placeholder; rotor and wave description | Confirmed: smooth windward updraft, turbulent downdraft past the crest, waves for many miles downwind; wave forms with 15 kt or more across the ridge at 30° or more; rotors under the wave crests; lenticular (ACSL/CCSL) mark the wave | AIM 7-6-7; FAA-P-8740-60 "Mountain Wave"; AC 00-57 5.1.3 | Callout tagged `Widget pending:`; desk result recorded in it |
| Rotor location "level with the ridge top, a few miles downwind" | Corrected: AC 00-57 says assume rotors below ridge level within about 20 nm of the ridge | AC 00-57 5.1.3.1 | Text changed to "at or below ridge-top level and anywhere from a few miles to about 20 nm downwind" |
| Lee-side sink "1,000 fpm or more" (safety callout) | Made specific: AIM says downdrafts of 1,500–2,000 fpm are not uncommon on the leeward side | AIM 7-6-7 | Text changed to "1,500–2,000 ft per minute" |
| 20–25 kt ridge-level wind caution | Confirmed and sharpened: pamphlet says do not attempt mountain flying when forecast mountain-top wind exceeds 25 kt and adds 1,000 ft of ridge clearance above 20 kt; AIM says 35 mph (about 30 kt) for light aircraft; GAJSC sheet repeats 25 kt at 9,000/12,000 ft | FAA-P-8740-60 "Winds", "Ridge and Pass Crossing"; AIM 7-6-7; GAJSC Mountain Flying | Bullet rewritten with the exact FAA figures; callout deleted |
| I-80 corridor ridge elevations 8,000–9,000 ft | Confirmed: Donner Peak 8,019, Mount Judah 8,243, Castle Peak 9,103 ft | USGS GNIS via Wikipedia | none (callout deleted) |
| FB forecast has a 9,000 ft level | Confirmed: levels 3,000/6,000/9,000/12,000/18,000 ft…; the pamphlet itself says use the 9,000 and 12,000 ft forecasts in the west | NWS Directive 10-812; FAA-P-8740-60 "Winds Aloft Reports" | none (callout deleted) |
| Learn-To-Fly 20 kt no-cross limit (decision callout) | Consistent with FAA guidance (more conservative than the 25 kt pamphlet limit) | FAA-P-8740-60 | none |
| `WX_MOUNTAIN_WAVE` flight test | Open — sim check | v2 Phase 16 | Callout tightened and tagged `Sim check:` |

Resources: added `faa-weather-handbook`.

## L13.2 — Planning a mountain route

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| KAUN about 1,500 ft, KBLU about 5,300 ft, KTRK about 5,900 ft | Confirmed 1,538 / 5,284 / 5,904 ft | AirNav 2026-10-13 | none (callout deleted) |
| Donner Summit I-80 about 7,200 ft; terrain either side 8,000–9,000 ft | Confirmed 7,239 ft; Donner Peak 8,019, Mount Judah 8,243, Castle Peak 9,103 ft | USGS GNIS via Wikipedia; Caltrans/AAroads | none (callout deleted) |
| KAUN–KTRK "roughly 50 nm" | Confirmed about 49 nm | computed from AirNav coordinates | none |
| Crossing altitude = terrain + 1,000 ft calm / + 2,000 ft with wind | Consistent: pamphlet says ridge + 1,000 ft, + 2,000 ft when mountain-top wind is above 20 kt, level 3 miles before and after; AIM adds "an extra thousand feet or so" from the leeward side | FAA-P-8740-60 "Ridge and Pass Crossing"; AIM 7-6-7 | none |
| 45° approach, 90° turn-away | Confirmed | FAA-P-8740-60; AIM 7-6-7 | none |
| Eastbound 9,500 ft (odd + 500) | Confirmed | 14 CFR 91.159 | none |
| Fly the windward side of the valley | Confirmed | FAA-P-8740-60 "Enroute Considerations" | none |
| Ceiling needed above the crossing altitude | Consistent: pamphlet wants a 2,000 ft ceiling over the highest pass | FAA-P-8740-60 "Ceiling Requirements"; GAJSC sheet | none |
| W21 placeholder; 20 min climb-time estimate | Open — widget pending; climb time is sim data | W22 flight test | Callout tagged `Widget pending:` + `Sim check:` |
| KBLU runway, surface, elevation | Confirmed RWY 15/33 3,300 x 50 ft asphalt, 5,284 ft, closed winters (snow) and sunset–sunrise | AirNav 2026-10-13 | Text now says "3,300 ft runway and closed in winter when snow covers it"; callout now `Sim check:` for scenery/landmarks only |
| Day VFR fuel reserve 30 min | Confirmed | 14 CFR 91.151(a)(1) | none |
| Learn-To-Fly 1 hour mountain reserve | Open — author decision (no FAA reserve figure for mountain flight) | FAA-P-8740-60 has none | Callout tagged `Author decision:` |
| `TIME_DAWN` sunset timing | Open — sim check | presets | Separate callout tagged `Sim check:` |

Resources: added `airnav`, `ecfr-91-151`, `ecfr-91-159`, `aim-7`.

## L13.3 — High-elevation airport operations

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| KTRK about 5,900 ft, KTVL about 6,300 ft, runways, tower status | Confirmed 5,904 ft (part-time tower 120.575, seasonal hours above) and 6,268 ft (no tower, CTAF 122.85); runways in the table above | AirNav 2026-10-13 | Airport part of the callout deleted; W21 placeholder tagged `Widget pending:` |
| Density altitude arithmetic (5,900 ft, 30 °C → about 9,100 ft) | Confirmed: ISA at 5,900 ft is 3.3 °C; 5,900 + 120 × 27 = 9,140 ft | PHAK Ch 11 (ISA table) | none |
| "Three quarters of sea-level power", TAS about 2% per 1,000 ft | Confirmed: 3% power loss and 2% TAS gain per 1,000 ft | GAJSC Mountain Flying sheet; FAA-P-8740-60 | none |
| Leaning method: full-throttle run-up, lean to peak RPM | Confirmed for normally aspirated engines | FAA-P-8740-60 "Starting, Taxi, and Run-up"; GAJSC sheet | Callout tightened to `POH check:` (3,000 ft threshold wording) + `Sim check:` (RPM response) |
| "70% of lift-off speed by 50% of the runway" abort rule | Confirmed; it is the FAA rule of thumb, with the caveat that the ASI may be unreliable at that speed | AIM 7-6-8 | "The Learn-To-Fly rule of thumb" → "The FAA's rule of thumb (AIM 7-6-8)"; callout now `Widget pending:` + `Sim check:` for the table rows only (v2 Appendix F.10 ⚠ can be cleared) |
| 70% of {{vspeed.vr}} = about 40 KIAS | Confirmed: 0.7 × 55 = 38.5 | aircraft.yaml | none |
| Climb gradient table arithmetic (fpm × 60 ÷ kt) | Confirmed 568 / 380 / 214 / 140 ft per nm; rates are sim placeholders | arithmetic | none |
| Climb table rows; KTRK climb-out direction | Open — sim check (W22 rows; heading band for C13.1); real-world noise-abatement remark recorded | AirNav KTRK remarks | Callout tagged `Sim check:` |
| Go-around mixture and flap sequence | Open — POH check | 172S POH balked landing | Callout tightened and tagged `POH check:` |
| KTVL climb-out "over the lake" | Confirmed direction is north: terrain rises rapidly E, S and W; RWY 36 departures turn left to 320° after 1 nm to the shoreline | AirNav KTVL remarks (Chart Supplement) | Recorded in the callout; `Sim check:` kept for scenery |

Resources: added `aim-7`, `airnav`.

## L13.4 — Canyon turns and escape routes

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| "Never enter a canyon you cannot turn around in" | Confirmed: AIM says avoid confined areas without room for a 180° turn and always fly a planned escape route; GAJSC sheet says never fly up a canyon you have not flown down | AIM 7-6-7; GAJSC Mountain Flying | One sentence added attributing the rule to the AIM |
| Turn-diameter table (60/80/100 KTAS at 30°/45°) | Confirmed: R = V² ÷ (11.26 × tan bank) gives diameters 1,108/639, 1,969/1,137, 3,076/1,776 ft | PHAK Ch 5 "Radius of Turn" | none |
| "Halving speed cuts the diameter to a quarter; 30° → 45° cuts it about 40%" | Confirmed (radius ∝ V²; tan 30 ÷ tan 45 = 0.58) | PHAK Ch 5; FAA-P-8740-60 ("turning radius is proportional to the square of true airspeed") | none |
| 45° bank stall speed "about 20% faster" | Confirmed: load factor 1.41, stall speed rises with the square root → +19% | PHAK Ch 5 "Load Factors and Stalling Speeds" | none (POH stall table not needed) |
| "Fly one side of the valley/canyon" | Confirmed for the updraft (windward) side | FAA-P-8740-60 "Enroute Considerations" | none |
| Escape-turn steps (slow, flaps 10°, 45° coordinated) | Open — author decision: not in FAA-P-8740-60 or the AIM; needs an instructor review or a citable source | — | Callout tightened and tagged `Author decision:` |

Resources: added `aim-7`, `phak-ch5`.

Still open for the sim: 7 items (L13.1 wave preset; L13.2 climb time, KBLU/landmarks, TIME_DAWN; L13.3 leaning RPM response, W22 rows + KTRK climb-out, KTVL go-around) · for the POH: 2 (L13.3 3,000 ft leaning threshold; balked-landing mixture/flap sequence) · author decisions: 2 (L13.2 1 hour reserve; L13.4 escape-turn steps) · widget placeholders: 4 (W29, W21 x2, W22).

Wanted but not changed (outside this module's folder): add KAUN, KBLU, KTRK, KTVL, KMEV and KRNO to `content/airports.yaml` with the real-world data above; `aim-7`'s resource URL could point at `chap7_section_6.html` (mountain flying is AIM 7-6-7, half-way signs 7-6-8); consider a resource entry for AC 00-57 and for the GAJSC "Mountain Flying" safety-enhancement sheet.
