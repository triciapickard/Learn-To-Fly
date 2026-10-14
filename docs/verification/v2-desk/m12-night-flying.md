# M12 — desk verification (2026-10-13)

Sources consulted: AIM Chapter 2 Section 1 (current edition online, 2026-10-13: 2-1-1 ALS, 2-1-2 VASI/PAPI, 2-1-3 REIL, 2-1-4 runway edge lights, 2-1-5 in-runway lighting, 2-1-8 pilot control of lighting, 2-1-9 beacons, 2-1-10 taxiway lights), AIM 7-5 (mountain flying, no night figure); 14 CFR 1.1, 61.57(b), 61.109(a)(2), 91.151(a), 91.159, 91.209 (eCFR text via the LII mirror); AFH FAA-H-8083-3C Chapter 11 (Night Operations), AFH-3B Chapter 10 for the historic cone-adaptation figure; PHAK FAA-H-8083-25C Chapter 17 (vision, illusions); FAA brochure AM-400-98/2 "Pilot Vision"; FAA Aeronautical Chart User's Guide (cug-complete_20260709, airport lighting symbols and MEF definition); Chart Supplement SW (cycle 2026-07-09 page via iflightplanner) for KLVK; AirNav 2026-10-13 for KLVK, KTCY, KWVI, KHWD, KRHV, E16, KSJC; SkyVector 2026-10-13 for distances and bearings; Wikipedia/AARoads for Hecker Pass, Mount Madonna, Mission Peak, Monument Peak elevations; AOPA Air Safety Institute ("Night magic", "Silent night", "Since You Asked"); v2.md Sections 9.2, 16 (C12.1–C12.4), 17.8–17.9, 18.4, Appendix B.2–B.4; `content/aircraft.yaml`, `content/airports.yaml`. Not reachable: FAA PDF/HTML via WebFetch (403; fetched the same URLs with curl instead), the Cessna 172S POH, the current SF sectional/TAC images (airspace floors and MEFs stay open), the sim.

## L12.1 — Night vision and illusions

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Night training: 3 h, XC over 100 nm, 10 full-stop T/O and landings | Confirmed | 14 CFR 61.109(a)(2) | callout deleted |
| Dark adaptation: cones 5–10 min, rods ~30 min | Confirmed; current AFH says "up to 30 minutes", 5–10 min cones is from AFH-3B Ch 10 | AFH-3C Ch 11, AFH-3B Ch 10 | text "for up to about 30 minutes"; callout deleted |
| Night vision degrades above 5,000 ft; CO, smoking, fatigue | Confirmed | AFH-3C Ch 11, FAA Pilot Vision brochure | none |
| Red light washes out chart colors; dim white for charts | Confirmed | AFH-3C Ch 11 | none |
| Off-center viewing 5–10° | Confirmed | PHAK Ch 17, AFH-3C Ch 11 | none |
| Autokinesis after 6–12 s of staring | Not supported: FAA says "many seconds" / "a prolonged period" | AFH-3C Ch 11, PHAK Ch 17 | changed "6–12 seconds" → "more than a few seconds"; W28 callout retagged `Widget pending:` |
| Black-hole, false horizon, featureless terrain, somatogravic descriptions | Confirmed | PHAK Ch 17, AFH-3C Ch 11 | none |
| MSFS 2024 night rendering (v2 9.2) | Open — sim | v2 Section 9.2 | callout tightened `Sim check:` |

## L12.2 — Aircraft and airport lighting

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Position lights sunset–sunrise; anticollision lights unless PIC judges unsafe | Confirmed | 14 CFR 91.209(a)(1), (b) | reg part resolved; callout tightened `Sim check:` (switch names, light positions) |
| Red left / green right / white tail; red-on-your-right means head-on | Confirmed | AFH-3C Ch 11 | none |
| Landing light within 10 nm of an airport | Confirmed ("within 10 miles and below 10,000 ft") | AFH-3C Ch 11 | "below 10 nm" → "within 10 nm" |
| Landing/taxi light location | 172S: left wing leading edge (older Skyhawks: nose cowl) | type knowledge, sim check kept | table changed "Cowl or wing"/"Cowl" → "Left wing leading edge" |
| Beacon colors and military double flash; daytime beacon in B/C/D/E surface area | Confirmed (paragraph is AIM 2-1-9, not 2-1-10) | AIM 2-1-9 | "From 20 nm out" → "From miles out"; callout tightened `Sim check:` |
| Runway edge white, yellow last 2,000 ft or half; threshold green, end red | Confirmed | AIM 2-1-4 | none |
| Runway centerline: alternating red/white "for the last 3,000 ft" | Wrong: white until 3,000 ft remaining, alternating red/white for the next 2,000 ft, all red last 1,000 ft | AIM 2-1-5 | changed to "alternating red and white from 3,000 ft remaining, then all red for the last 1,000 ft" |
| TDZL first 3,000 ft (or midpoint); REIL; taxiway blue/green; clearance bar 3 yellow; runway guard lights flashing yellow | Confirmed | AIM 2-1-3, 2-1-5, 2-1-10 | none |
| KLVK/KTCY lighting (real world) | KLVK HIRL 7L/25R, MIRL 7R/25L (not available when tower closed), MALSR 25R, PAPI 7L P4R 4.0°, 25R P4L 3.0°, no REIL; KTCY MIRL, REIL and P2L on all four ends | Chart Supplement SW 2026-07-09 (KLVK), AirNav 2026-10-13 | added one real-world paragraph; W27 callout split into `Widget pending:` + `Sim check:` with the baseline |
| PAPI "a row of four lights to the left", "roughly 3°" | Partly wrong: PAPI is two or four units, normally left side, typically 3°; KTCY, KWVI, E16 have 2-light PAPIs, KLVK 7L is on the right at 4.0° | AIM 2-1-2, AirNav | text rewritten; added 2-light PAPI reading; KLVK note added; callout deleted |
| PAPI/VASI indications, VASI red-over-white | Confirmed | AIM 2-1-2 | none |
| PAPI obstacle clearance "±10° out to 4 nm" (callout only) | PAPI is ±10° to 3.4 NM; VASI ±10° to 4 NM | AIM 2-1-2 | not in learner text; callout deleted |
| KLVK PAPI on 7L and 25R only | Confirmed | Chart Supplement, `airports.yaml` | none |
| ALS names (MALSR, ALSF-2, ODALS), rabbit, length | Confirmed | AIM 2-1-1 and FIG 2-1-1 | added "KLVK has a 1,400 ft MALSR on 25R, on 118.1 after hours"; callout tightened `Sim check:` |
| Which `airports.yaml` fields have an ALS | KLVK yes (MALSR 25R); KTCY, KWVI, KHWD none; KSJC/KOAK/KSFO assumed; others not checked | AirNav | noted in callout |
| PCL 7/5/3 clicks within 5 s, 15-minute timer, start with 7 | Confirmed | AIM 2-1-8 | none |
| Sectional star before L = lighting limitations | Confirmed | Chart User's Guide (airport data legend) | none |
| KTCY PCL exists | Confirmed: MIRL, REIL, PAPI activated on CTAF 123.075 | AirNav 2026-10-13 | sentence added to the `sim` callout; verify callout tightened `Sim check:` |

## L12.3 — Night operations: preflight to landing

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Light-by-phase table; two flashlights; test every light; dim panel | Confirmed | AFH-3C Ch 11, v2 Appendix B.2 | callout tightened `Sim check:` (cockpit dimmers, NXi auto-dim) |
| KLVK tower 0700–2100 local, CTAF 118.1 | Confirmed | Chart Supplement SW, AirNav | none |
| Airspace when KLVK tower closed | Class D svc 1500–0500Z‡, other times Class G | Chart Supplement SW 2026-07-09 | text now says Class D lapses to Class G; after-hours lighting (MIRL 7R/25L off, HIRL low until keyed, PAPI continuous) added; callout tightened `Sim check:` |
| Takeoff: attitude indicator, positive rate, no turns until safe altitude; somatogravic illusion | Confirmed (AFH gives no 500 ft figure; course standard) | AFH-3C Ch 11, PHAK Ch 17 | none |
| Pattern: altimeter/VSI cross-check, VASI/PAPI, checklist time on downwind | Confirmed | AFH-3C Ch 11 | none |
| Roundout cue with landing light (beam on pavement, tire marks visible) | Confirmed | AFH-3C Ch 11 | none |
| Roundout without landing light "a little higher than you think" | AFH: start when the far-end lights first appear to rise above the nose; warns of rounding out too high | AFH-3C Ch 11 | sentence rewritten to the AFH cue |
| W18 night mode, landing-light rendering | Open — widget / sim | v2 Section 17 | split into `Widget pending:` and `Sim check:` |
| Night definitions: 1.1, 91.209, 61.57(b) | Confirmed | 14 CFR 1.1, 91.209, 61.57(b) | callout deleted |
| Currency: 3 T/O and landings to a full stop, 90 days, 1 h after sunset to 1 h before sunrise, same category/class/type | Confirmed; v2 18.4 panel wording matches | 14 CFR 61.57(b), v2 Section 18.4 | none |

## L12.4 — Night cross-country and night emergencies

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| KLVK–KWVI direct ~45 nm | Confirmed 45.4 nm | SkyVector 2026-10-13 | "a pleasant hour's flying" → "about half an hour's flying" |
| Valley routing I-680, US 101, SR 152 over Hecker Pass; C12.3 legs | Confirmed (Outbound, Watsonville, Return) | v2 Section 16 | none |
| Dual night XC over 100 nm | Confirmed | 14 CFR 61.109(a)(2) | none |
| SJC Class C / SFO Class B along the route | Open — needs the TAC; SJC Class C service 0600–0000 local | AirNav KSJC | callout tightened `Author decision:` |
| Airports along the route | KHWD tower 0700–2100, PCL 120.2; KRHV tower 0700–2200, PCL 119.8; E16 MIRL PCL 122.7, PAPI continuous; KWVI PCL 122.8 (MIRL 2/20, REIL 2, PAPI 2/9/20; 9/27 unlit) | AirNav 2026-10-13 | one sentence on tower hours and PCL added |
| Hecker Pass "about 2,000 ft", "lit by the highway" | Pass 1,339 ft; Mount Madonna 1,900 ft; highway traffic only | Wikipedia, AARoads | decision callout numbers corrected; "about 1,600 ft" below a 3,500 ft cruise |
| MEFs for the route quadrangles | Open — chart; Mount Hamilton 4,265 ft and Mount Diablo 3,849 ft make them far higher than the valley terrain | Wikipedia | step 1 reworded; callout tightened `Author decision:` |
| C12.3 cloud variant scattered at 4,500 ft | Confirmed | v2 Section 16 | none |
| Beacon "visible 20 nm or more" | No FAA figure | — | "visible from a long way" |
| Leg courses ~190/~250/~010 and altitudes | Wrong: KLVK→Gilroy ≈150 M, Gilroy→KWVI ≈235 M, KWVI→Gilroy ≈055 M, Gilroy→KLVK ≈330 M (from coordinates, 13° E variation); nearby terrain Mission/Monument Peaks ~2,600 ft | SkyVector bearing 358° T KWVI→KLVK, Wikipedia | table rebuilt with four legs: 5,500 / 4,500 / 5,500 / 6,500 ft MSL; callout `Author decision:` on courses and the 6,500 ft choice |
| VFR cruising altitudes odd/even + 500 above 3,000 ft AGL | Confirmed | 14 CFR 91.159 | none |
| "2,000 ft at night over mountainous terrain" | No FAA figure (AFH Ch 11, AIM 7-5); v2 B.3 uses 1,000–2,000 ft | AFH-3C Ch 11, AIM 7-5-6, v2 Appendix B.3 | text now calls it a Learn to Fly planning minimum |
| Fuel reserve day 30 / night 45 minutes | Confirmed | 14 CFR 91.151(a) | none |
| 10 GPH planning figure | Confirmed | `aircraft.yaml` fuelBurn | callout reduced to `Widget pending:` (W20 night mode) |
| Glide 1.5 nm per 1,000 ft | Matches `aircraft.yaml` (9:1); POH chart not reachable | `aircraft.yaml` | callout tightened `POH check:` |
| Night forced landing: best glide, toward airport/lit area, landing light on in time, slowest speed; AFH exception for known suitable unlit terrain | Confirmed | AFH-3C Ch 11, AOPA ASI | AFH exception added after "Avoid the black" |
| Alternator flow, reset guidance, 30-minute battery | Open — POH; flow matches v2 B.4 | v2 Appendix B.4 | split into `POH check:` and `Sim check:` |

Still open for the sim: 10 items · for the POH: 2 · author decisions: 3 · widget pending: 4

Wanted resources (not added to `resources.yaml`): FAA brochure AM-400-98/2 "Pilot Vision" as its own slug (currently only the brochures index), AIM 2-1-8/2-1-9 are covered by `aim-2-1`.
