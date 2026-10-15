# M9 — desk verification (2026-10-13)

Sources consulted: PHAK FAA-H-8083-25C Chapters 10 and 11 (faa.gov PDFs), FAA Weight & Balance Handbook FAA-H-8083-1 (faa.gov PDF), FAA density-altitude brochure P-8740-2 and "On Landings, Part II" P-8740-49 (faasafety.gov), 14 CFR 91.151 (eCFR text via LII mirror), AirNav KLVK and KTRK (real-world, 2026-10-13, FAA data effective 2026-10-01), EASA TCDS IM.A.051 for the Cessna 172R/172S (Issue 11, 2025-11; regulator equivalent of FAA TCDS 3A12, which would not load), Lycoming SI 1094D leaning summary (lycoming.com), Garmin G1000 NXi Cockpit Reference Guide for Cessna NAV III 190-02178-03 (static.garmin.com), AOPA ASI training tips (2025) on the 50 percent margin, and a widely published copy of the 172S NAV III POH (172SPHBUS-00, hosted by a Civil Air Patrol wing) for POH-only figures. POH-only figures are marked "POH check" in the lessons as the brief requires; where a regulator document (PHAK, TCDS) reproduces the same figure the item is treated as confirmed.

## L9.1 — Density altitude and performance

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| KLVK field elevation 400 ft | Confirmed (399.9 ft) | AirNav KLVK 2026-10-13; `airports.yaml` 400 ft | callout reduced to `Widget pending:` W21 |
| Standard atmosphere 15 °C / 29.92 inHg, 2 °C per 1,000 ft, 1 inHg ≈ 1,000 ft | Confirmed | PHAK Ch 11, "Structure of the Atmosphere", pressure-altitude table | none (text already correct) |
| Humidity raises density altitude only slightly (quiz l9-1-q3 explanation) | Confirmed | PHAK Ch 11 "Effects of Humidity"; P-8740-2 (add 10 % to takeoff distance if humid) | none |
| Same IAS, higher TAS and groundspeed at high DA | Confirmed | PHAK Ch 11 takeoff performance; P-8740-2 | none |
| Engine loses "roughly 3 %" power per 1,000 ft DA (no callout) | Not FAA-sourced; AVweb gives 3.5 %, trade sources 3 % | AVweb "Density Altitude and You" | none; rule of thumb, flagged here only |
| MSFS 2024 custom-weather menu path and control names, screenshot | Open — sim | — | callout tightened, `Sim check:` |

## L9.2 — Reading performance charts

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Chart assumptions: 2,550 lb, flaps 10°, full throttle before brake release, paved dry level, zero wind, 51 / 56 KIAS | Confirmed | PHAK Ch 11 Fig. 11-24 (Cessna short-field takeoff chart); 172S POH Section 5 copy | none |
| −10 % per 9 kt headwind; +10 % per 2 kt tailwind (tailwinds up to 10 kt); +15 % of ground roll on dry grass | Confirmed | PHAK Ch 11 Fig. 11-24 notes; 172S POH Section 5 copy | added "(the chart notes stop at 10 kt)" to the tailwind row; callout reduced to `Author decision:` slope |
| Runway-slope factor | Open — author decision (POH gives none) | — | callout tightened |
| Takeoff table cells, W22 widget | Open — sim flight tests | v2 Section 8.3 | callout tightened, `Sim check:` + `Widget pending:` |
| "Every 5 kt extra adds roughly 10 %" landing rule | Wrong (understates): roll-out grows with the square of the touchdown-speed ratio; 10 % fast ≈ +21 % | FAA P-8740-49 "On Landings, Part II" | changed to "landing 10 % fast (about 6 kt at {{vspeed.shortFieldApproach}}) adds roughly 20 % to the roll" |
| Landing table: flaps FULL (30°), 61 KIAS at 50 ft, paved dry level, zero wind | Confirmed as the POH conditions | 172S POH Section 5 copy (Fig. 5-11) | none |
| Landing table cells, screenshot | Open — sim | v2 Section 8.3 | callout tightened, `Sim check:` |
| +50 % personal margin | Confirmed as AOPA ASI recommendation (presented as personal, not regulatory) | AOPA ASI Training and Safety Tips, 2025 | none |
| KLVK 25R 5,253 ft, 25L 2,699 ft | Confirmed | AirNav KLVK 2026-10-13 | none |
| Resources | — | — | added `faa-pilot-safety-brochures` |

## L9.3 — Weight and balance

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Datum "lower front face of the firewall" | Confirmed | 172S POH Sections 2 and 6 copy; aviatize W&B page citing TCDS 3A12 | learner text changed from "near the front of the engine compartment" to "the lower front face of the firewall, the wall between the engine and the cabin" |
| Station arms: front seats 37 (adjustable 34–46), rear 73, fuel 48.0, baggage 95 and 123 | Confirmed | EASA TCDS IM.A.051 (seats 34–46 in and 73 in, baggage 95 in, fuel 48.0 in); POH Section 6 copy (fuel FS 48.00, front seats FS 34–46) | "Seat adjustable, 34–46 in" added to the table |
| Baggage limits 120 lb area 1, 50 lb area 2, combined | Combined limit is **120 lb, not 200 lb** | EASA TCDS IM.A.051; 172S POH Section 2 copy | changed "200 lb combined" → "120 lb combined" (worked examples already load 120 lb or less combined, so no numbers change) |
| Envelope: forward 35.0 in ≤ 1,950 lb, straight line to 41.0 in at 2,550 lb; aft 47.3 in all weights | Confirmed | EASA TCDS IM.A.051; 172S POH Section 2 copy | none |
| 6 lb per US gal | Confirmed | PHAK Ch 10; POH Section 6 copy | none |
| Basic empty weight includes oil and unusable fuel | Confirmed | POH Section 1 definitions copy; FAA W&B Handbook | none |
| CG = total moment ÷ total weight; weight-shift formula ΔCG = weight × distance ÷ total weight | Confirmed | FAA W&B Handbook Ch 2; PHAK Ch 10 | none |
| Aft CG: less stable, light controls, harder stall/spin recovery; forward CG: heavy elevator, higher stall speed, flare authority | Confirmed | PHAK Ch 10 "Effects of Adverse Balance"; W&B Handbook Ch 1 | none |
| Arithmetic of all three worked loads and quiz l9-3-q2 | Rechecked, correct for the illustrative 1,680 lb / 39.5 in | — | none |
| Basic empty weight / CG of the sim airplane; recompute | Open — sim | — | callout tightened, `Sim check:` |
| Sim W&B screen path, station names, envelope enforcement, screenshot | Open — sim | — | callout tightened, `Sim check:` |
| W23 widget | Pending | — | `Widget pending:` |

## L9.4 — Leaning the mixture and fuel management

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Leaning method: ENGINE → LEAN → ASSIST, ΔPEAK readout, peak marked per cylinder | Confirmed for the real NXi | Garmin CRG 190-02178-03 (Engine, Lean, Assist softkeys; ΔPEAK); 172S POH Section 4 copy | none; sim behaviour left open |
| 50 °F rich of peak = recommended lean; peak EGT = best economy; full rich above 75 % | POH-only (copy agrees: Fig. 4-4) | 172S POH Section 4 copy | peak-EGT table row reworded to "75 % power or less"; `POH check:` kept |
| 100 °F rich of peak = best power | Confirmed (Lycoming, not POH) | Lycoming SI 1094D summary | none |
| Full-rich cruise fuel flow 13–14 GPH | Open — sim readout | — | `Sim check:` |
| Lean for max RPM above 3,000 ft pressure altitude; full-throttle static run-up | Confirmed | PHAK Ch 11 Fig. 11-24 note 1; POH Sections 4 and 5 copy | callout deleted |
| KTRK elevation about 5,900 ft | Confirmed (5,904 ft) | AirNav KTRK 2026-10-13 | callout deleted |
| 91.151: 30 min day / 45 min night at normal cruising speed | Confirmed | 14 CFR 91.151(a) | callout deleted; resource `ecfr-91-151` added |
| Start, taxi, takeoff and climb allowance | 2 gal was under the POH figures (1.4 gal start/taxi/takeoff plus climb fuel) | 172S POH Section 5 copy | changed 2 → 3 gal, total 34 → 35 gal; `POH check:` kept |
| NXi fuel totalizer behaviour in the sim | Open — sim | — | `Sim check:` |
| Selector BOTH / LEFT / RIGHT; takeoff and landing on BOTH; single tank in level flight only | Confirmed (POH limitation, widely published; matches `checklists.yaml`) | 172S POH Sections 2 and 7 copy | none |
| Engine-faltering row | POH restart is shutoff ON, selector BOTH, pump ON, mixture RICH — "or the fuller tank" was not POH | 172S POH Section 3 copy; `checklists.yaml` restart row | row changed to "Fuel pump ON, selector BOTH, mixture RICH, shutoff valve confirmed ON" |
| Sim tank-feed and selector modelling | Open — sim | — | `Sim check:` |

Still open for the sim: 8 items · for the POH: 2 · author decisions: 1 · widgets pending: 3

Notes for the author: `aircraft.yaml` has no `weightAndBalance` or `performanceTables` sections yet (v2 Sections 8.2 and 8.3 expect them). The FAA W&B Handbook PDF at the resources.yaml URL identifies itself as FAA-H-8083-1A, while the resource title says 1B. Wanted resource (not added): FAA safety brochure P-8740-49 "On Landings, Part II" is covered by the existing `faa-pilot-safety-brochures` slug; a dedicated 172S TCDS 3A12 resource would be useful for Module 9.
