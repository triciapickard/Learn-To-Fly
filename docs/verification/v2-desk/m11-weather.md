# M11 — desk verification (2026-10-13)

Sources consulted: AIM Chapter 7 Section 1 (current online edition, 2026-10-13); 14 CFR 91.103, 91.151, 91.155 (eCFR text via law.cornell.edu); Aviation Weather Handbook FAA-H-8083-28B (2026 revision PDF from faa.gov); PHAK FAA-H-8083-25C Chapter 12; Airplane Flying Handbook FAA-H-8083-3C Chapter 18 (Inadvertent VFR Flight Into IMC); aviationweather.gov GFA tool and its help page; AOPA Air Safety Institute 35th McSpadden (formerly Nall) Report figure view, 2023 data; AirNav KLVK, KPAO, KHAF, KMRY, KSNS (FAA data effective 2026-10-01, read 2026-10-13); repo `content/airports.yaml` and `content/aircraft.yaml`; MSFS forum developer posts (sim facts, not treated as verified).

## L11.1 — Weather theory: air masses, fronts and stability

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Prerequisite should be L6.7 | Open — author decision (L6.7 not written) | v2 L11.1 spec | callout tightened, tagged `Author decision:` |
| W26 front cross-section; front descriptions and cold-front wind shift | Widget pending; descriptions confirmed; wind variable and gusty at passage, west-northwest behind | PHAK Ch 12 "Cold Front"; AWH Ch 11 | callout tightened, tagged `Widget pending:` |
| Cloud-base rule (spread °C × 400 ft) | Confirmed: convergence 4.4 °F (2.5 °C) per 1,000 ft, dry adiabatic 3 °C, dewpoint −1 °F per 1,000 ft | PHAK Ch 12 "Methods by Which Air Reaches the Saturation Point" | labelled "rule of thumb for convective cloud only"; callout deleted |
| Fog "under about 3 °C and closing" | Confirmed as a watch threshold; AWH: fog seldom forms with a spread over 2 °C | AWH 18.1.1 | added "fog seldom forms with a spread over 2 °C" to the table; callout deleted |
| Moist adiabatic lapse rate "roughly 1.5 °C" | Imprecise: PHAK gives 1.1–2.8 °C per 1,000 ft; AWH teaches 2 °C | PHAK Ch 12; AWH 12.x | changed 1.5 °C → 2 °C "(it varies with temperature)" |
| Local pattern: deck heights, burn-off, sea breeze 15–20 kt | Mechanism confirmed; numbers have no single citable source | AWH 10.6.1, 18.1.1.1.2; NWS Monterey AFDs (qualitative only) | callout tightened, tagged `Author decision:` |
| Runway choices KLVK 25, KPAO 31 | Confirmed: 25L/25R 254° mag, 31 307° mag | AirNav 2026-10-13; `airports.yaml` | none |

## L11.2 — Forecasts and briefings

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Standard briefing elements and order | Confirmed: adverse conditions, VFR flight not recommended, synopsis, current, en route, destination, winds aloft, NOTAMs, ATC delays | AIM 7-1-5 | row 1 now mentions "VFR flight not recommended"; row 8 → "ATC delays and more"; callout deleted |
| "VFR flight not recommended" still issued | Confirmed, advisory, part of the standard briefing | AIM 7-1-5 b.2 | see above |
| Outlook briefing threshold | Confirmed: six or more hours before departure | AIM 7-1-5 d | "more than 6 hours" → "six or more hours" |
| TAF: 5 SM radius, 24 h (30 h at some major airports), TEMPO, PROB rules | Confirmed; TEMPO = each spell under 1 h and in aggregate less than half the period; PROB30 only in NWS TAFs, not in the first 9 h | AWH 27.4.1, 27.4.2.10.2–3; AIM 7-1-28 | callout tightened to the W17 TAF-mode request, tagged `Widget pending:` |
| BECMG "used rarely" in US TAFs | Wrong: NWS TAFs exclude BECMG | AIM 7-1-28 note; AWH 27.4 | changed to "which NWS TAFs do not use; you will meet it in military and foreign TAFs" |
| GFA view names and flight-category colors | Wrong: no "Surface" view; views are Ceiling & Visibility, Clouds, Precipitation, Thunderstorms, Temperature, Winds, Turbulence, Icing; MVFR is blue, not yellow (IFR red, LIFR magenta/purple, VFR unshaded); forecasts to 18 h | aviationweather.gov/gfa and /gfa/help; AWH 3-27 | table and prose rewritten; shot-list callout tightened, tagged `Author decision:` |
| FB decoding: 1,500 ft / 2,500 ft gaps, +50/−100 rule, sign dropped above 24,000 ft, 9900 | Confirmed; directions are true | AWH 27.2.1.1 | added "Directions are true, like a chart, not magnetic"; callout deleted |
| AIRMET Sierra/Tango/Zulu, G-AIRMETs | Confirmed; Tango wind criterion is "greater than 30 kt" | AIM 7-1-6; AWH 3-14, 26.x | "30 kt or more" → "above 30 kt"; added G-AIRMET sentence; callout deleted |
| SIGMET and Convective SIGMET criteria | Confirmed (severe icing; severe/extreme turbulence or CAT; dust/sand storms below 3 mi; volcanic ash; convective: severe, embedded, lines, large areas) | AIM 7-1-6; AWH 26.2.4 | none |
| PIREP field codes | Confirmed against TBL 7-1-18 | AIM 7-1-18 | none |
| KLVK–KMRY about 65 nm, roughly south; KSNS as alternate; KMRY Class C | Confirmed: 66 nm, true track 181°; KSNS 12 nm ENE of KMRY, towered Class D (Class C approach); KMRY Class C | Great-circle from AirNav coordinates; AirNav KSNS/KMRY 2026-10-13; `airports.yaml` | callout deleted |

## L11.3 — Clouds, fog and low visibility

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Ceiling definition; flight-category thresholds | Confirmed (lowest broken/overcast or VV; VFR >3,000 and >5; MVFR 1,000–3,000 and/or 3–5; IFR 500–<1,000 and/or 1–<3; LIFR <500 and/or <1) | AIM 7-1-7, 7-1-28; AWH 24.x | none |
| METAR decoder example with a low scattered layer | Open — no W17 component exists yet (registry name only) | `src/features/widgets/registry.ts` | callout tightened, tagged `Widget pending:` |
| VFR minimums table; 91.155(c) ceiling 1,000 ft and (d) ground visibility 3 SM | Confirmed (B: 3 SM clear of clouds; C/D/E: 3 SM 500/1,000/2,000; G day ≤1,200 AGL: 1 SM clear of clouds) | 14 CFR 91.155 | callout deleted |
| KLVK elevation 400 ft, pattern 1,400 ft MSL | Confirmed (AirNav 399.9 ft) | AirNav 2026-10-13; `airports.yaml` | none |
| Fog types (radiation, advection, upslope, frontal, steam); advection fog needs wind | Confirmed; advection fog deepens with wind up to about 15 kt | AWH 18.1.1.1; PHAK Ch 12 | none |

## L11.4 — Thunderstorms, icing and turbulence

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Avoid severe storms / intense echoes by 20 nm; anvil; never under; tops ≥35,000 ft | Confirmed, worded "at least 20 miles" (AIM) / "20 mi" (AWH); tops ≥35,000 ft "extremely hazardous" | AIM 7-1-27; AWH 22.8 | "20 nm" → "20 miles" in prose, quiz and summary; added the 35,000 ft sentence; callout deleted |
| Three ingredients, three stages, microbursts | Confirmed (towering cumulus, mature, dissipating; microburst <2.5 mi across, downdrafts to 6,000 fpm) | AWH Ch 22; AIM 7-1-24; PHAK Ch 12 | none |
| 172S known-icing limitation wording | Open — POH check | POH Section 2 | callout tightened, tagged `POH check:` + `Sim check:` (variants, icing modelled) |
| Rime/clear/mixed descriptions; frost | Confirmed | AWH Ch 20; PHAK Ch 12 | none |
| Va 105/98/90 KIAS at 2,550/2,200/1,900 lb | Confirmed (aircraft.yaml records the POH check of 2026-10-13) | `content/aircraft.yaml` vspeeds.va and limits note | per-weight figures written into prose; callout deleted (per-weight tokens listed under wanted items) |
| Turbulence intensity definitions | Confirmed; table is AIM 7-1-21 (not 7-1-23) | AIM TBL 7-1-21 | none (the paragraph number only appeared in the callout) |

## L11.5 — Weather in MSFS 2024

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Menu paths, preset names, live-weather source and refresh | Open — sim | sim | callout tightened, tagged `Sim check:` |
| Custom panel control names and units (MSL vs AGL, visibility, pressure) | Open — sim; MSFS developers have said layer altitudes are MSL (forum, unverified) | sim; forums.flightsimulator.com | callout tightened, tagged `Sim check:` |
| Save custom weather as preset; cloud-base precision; visibility units | Open — sim | sim | callout tightened, tagged `Sim check:` |
| Icing, thunderstorm effects, live-weather lag, ATIS | Open — sim | sim | callout tightened, tagged `Sim check:` |

## L11.6 — The go/no-go decision and VFR into IMC

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| VFR-into-IMC statistic | Resolved: 35th McSpadden Report (2023 data) — weather accidents 15 (13 fatal); VFR into IMC led with 10 accidents, all fatal; 156 fatal of 929 non-commercial fixed-wing accidents (~17%) | AOPA ASI McSpadden Report figure view, figs 1.1, 1.7.1, 1.7.2 | safety callout now states the figures and year; callout deleted |
| Legal column (3 SM; 500 ft below cloud; 1,000 ft ceiling; 30-min day reserve) | Confirmed | 14 CFR 91.155, 91.151 | none |
| Suggested visibility minimum 6 SM vs L8.1's 5 SM | Aligned to L8.1 | `l8-1-decision-making-and-personal-minimums.md` | 6 SM → 5 SM; callout deleted |
| 180° turn: bank guidance | Partly: AFH Ch 18 says smallest practical bank, no more than 10°; lesson, v2 §10.3 and C11.3 use standard rate 15–20° | AFH FAA-H-8083-3C Ch 18 "Inadvertent VFR Flight Into IMC" | callout tightened, tagged `Author decision:` + `Sim check:` (GFC 700 LVL) |
| Wings level first, trust instruments, small pitch changes, get help | Confirmed | AFH Ch 18 | none |

Still open for the sim: 6 items (L11.4 variants/icing, L11.5 ×4, L11.6 LVL button) · for the POH: 1 (L11.4 known icing) · author decisions: 4 (L11.1 prerequisite, L11.1 local numbers, L11.2 GFA shot list, L11.6 bank angle) · widget pending: 3 (W26, W17 TAF mode, W17 example set)

Wanted resources (not added to `resources.yaml`): AFH Chapter 18 as its own slug (`afh-ch18` exists; L11.6 could list it), `aim-7` for L11.2, and the AOPA ASI McSpadden Report page for L11.6. Wanted tokens: per-weight Va (`vspeed.va2200`, `vspeed.va1900`) so L11.4 can drop its literals.
