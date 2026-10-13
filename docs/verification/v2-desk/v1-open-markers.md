# v1 content (M1–M7) — desk verification of open markers (2026-10-13)

Scope: the 30 unpublished v1 lessons (`content/lessons/m0-…` to `m8-…`) and the 28
unpublished v1 challenges. The 42 open markers listed by `npm run content:verify-report`
(22 lesson verify callouts, 20 challenge YAML markers) were checked against the sources
below; none could be closed outright because every one asks something only the sim can
answer, so all 42 were tightened to a `Sim check:` with the desk-verified part recorded.
Seven passages of learner-facing text were corrected on the way (marked **changed**).
`published`, `lastVerifiedAt` and `simVersion` were not touched.

Sources consulted: AIM 4-1-20 (faa.gov online edition, read 2026-10-13); AirNav KLVK,
KTCY, KPAO and KSCK (FAA data effective 2026-10-01, read 2026-10-13); FAA airport diagram
LIVERMORE MUNI (AL-6075, d-TPP cycle 2610, 01–29 Oct 2026); OurAirports navaid record
for ECA; Federal Register 2015-25281 (Stockton Class D amendment); NOAA WMM-2025
declination calculator; Garmin G1000 NXi Pilot's Guide for the Cessna Nav III
(190-02177-00 Rev. A) and G1000 NXi Cockpit Reference Guide (190-02178-03 Rev. A); MSFS
2024 SDK docs, "Checklist Best Practices"; `content/presets.yaml` (WX_LIGHT_W: surface
wind 250° at 8 kt). The sim and the POH were not reachable.

## L1.2 — The cockpit: G1000 PFD and MFD

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Altimeter setting on the large ring of the CRS/BARO knob | Confirmed (Garmin side) | NXi Pilot's Guide, PFD bezel item 6 | callout tightened; sim bezel still open |

## L1.3 — Engine, fuel and electrical systems

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Both sim Skyhawk variants fuel injected | Open — Sim check (the sim's steam-gauge "Basic"/"Classic" configuration could not be checked on the web) | MSFS forums only | callout tightened |

## L1.4 — Speeds, limits and checklists

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Speeds vs the sim's EFB checklist | Open — Sim check | POH (checked 2026-10-09 by the author) | callout tightened |
| In-sim checklist "can auto-complete items" | Wrong: the default EFB checklist app supports visual helpers (highlight, camera) only, no automatic evaluation or actions | MSFS 2024 SDK docs, Checklist Best Practices | **changed** the sim callout to say it highlights but never checks off or moves controls; callout tightened to confirm in 1.8.16.0 |

## L2.2 — Attitude flying and trim

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Cruise sight picture screenshot, 100–105 KIAS at 2,300 RPM | Open — Sim check | — | callout tagged |

## L2.3 — Climbs and descents

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Descent RPM ranges | Open — Sim check | — | callout tagged |

## L3.1 — Preflight and engine start

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Walkaround features modeled | Open — Sim check | — | callout tagged |
| Engine start sequence | POH part already confirmed by the author; sim behaviour open | POH Section 4 | callout tightened |

## L3.2 — Taxiing, signs and markings

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Northwest Apron (FBO, terminal), taxiway A along the north side of 7L/25R | Confirmed real-world | FAA airport diagram AL-6075 (cycle 2610) | callout tightened; sim layout and parking name still open |

## L3.3 — Run-up, before takeoff, and after landing

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| "Transponder to standby" after landing | Wrong: altitude reporting stays on over the whole movement area; STBY/OFF only at the parking spot | AIM 4-1-20 b | **changed** item 3 to "leave it in ALT … standby only once you're parked" (no marker existed; fixed for consistency with C3.4) |

## L4.1 — Normal takeoff and climb

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Lined-up sight picture screenshot | Open — Sim check | — | callout tagged |

## L4.2 — The traffic pattern

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Pattern power settings | Open — Sim check | — | callout tagged |

## L4.3 — Normal approach and landing

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| LVK PAPI on 7L and 25R only; TCY PAPI on 8, 26, 12, 30 | Confirmed, with detail: LVK 7L is a 4-light PAPI on a 4.0° path, 25R 3.0°; Tracy's are 2-light PAPIs (8 at 3.4°, the rest 3.0°) | AirNav KLVK, KTCY (2026-10-13) | **changed**: added one sentence on two-light PAPIs; callout tightened with the angles and light counts |

## L4.4 — Go-arounds

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Balked-landing sequence vs POH | POH part already confirmed by the author; sim EFB and climb speed open | POH Section 4 | callout tightened |

## L5.1 — Slow flight

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| RPM for 55 KIAS full flaps | Open — Sim check | — | callout tagged |

## L5.4 — Engine failure and forced landings

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Glide 1.5 nm per 1,000 ft | POH part already confirmed by the author; sim glide open | POH Figure 3-1 | callout tightened |
| MSFS 2024 failures menu | Open — Sim check (no official documentation of a stock failures menu found) | MSFS docs/forums | callout tightened |

## L6.3 — Pilotage and dead reckoning

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| KLVK→KTCY true course 091°, 18 nm | Confirmed: 090.6° true, 18.0 nm from the FAA coordinates | AirNav coordinates, great-circle calculation | callout tightened |
| Variation 13° E | Confirmed: 12.7° E at Livermore on 2026-10-13 | NOAA WMM-2025 | none |
| Landmarks visible in the sim | Open — Sim check | — | callout tightened |

## L6.4 — VOR navigation

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Decoded identifier and Morse audio on the G1000 | Confirmed (Garmin side): the NAV box shows the decoded station identifier; audio via the audio panel NAV1 key and the NAV VOL/ID knob | NXi Pilot's Guide, Audio and CNS | **changed** step 2 to say where the ID appears and how to hear it; callout tightened to the sim's NXi |

## L6.5 — GPS navigation with the G1000

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| FPL entry steps | Partly wrong: the MFD needs the FMS knob pushed for the cursor, the NXi fills in the origin airport, and the active flight plan needs no "Activate" step (only stored plans do) | NXi Cockpit Reference Guide, Creating a Basic Flight Plan | **changed** steps 1–4; callout tightened to the world-map sync |

## L7.2 — Non-towered airports (CTAF)

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Sim ATC window CTAF calls | Open — Sim check | — | callout tagged |

## L7.3 — Towered airports and sim ATC

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| ATIS 119.65, ground 121.6, tower 118.1, Northwest Apron, 7L/25R and 7R/25L | Confirmed real-world | AirNav KLVK; FAA airport diagram AL-6075 | callout tightened; sim still open |
| Sim ATC window options | Open — Sim check | — | callout tagged |

## C1.1 — Cockpit scavenger hunt · C3.1 — Cold and dark to running

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Parking spot name "Main ramp" | Open — Sim check | — | comment tightened |

## C3.2 — Taxi to the runway at KLVK

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Parking spot name | Open — Sim check; real-world name is the Northwest Apron | FAA airport diagram AL-6075 | comment tightened |
| Runway 25R | Confirmed real-world 7L/25R; sim name open | AirNav KLVK | comment tightened |
| Taxiway A route to 25R | Confirmed real-world; sim signs and exact sequence open | FAA airport diagram AL-6075 | note tightened |

## C3.3 — Run-up

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Start at the 25R run-up area | Open — Sim check | — | comment tightened |

## C3.4 — After landing and shutdown

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Runway 25R | Confirmed real-world; sim name open | AirNav KLVK | comment tightened |
| "Transponder to GND or standby" after landing | Wrong twice: AIM 4-1-20 keeps altitude reporting on until parked, and this NXi revision has no GND softkey (Standby, On, ALT, VFR, Code, Ident; ALT is selected automatically on the ground) | AIM 4-1-20 b; NXi Pilot's Guide, Transponder | **changed** to "transponder left in ALT until you're parked"; marker tightened to the sim's softkey names |

## C4.1 — Normal takeoff and departure · C4.3 — Full-stop landing · C4.4 — Go-around · C6.1 — Landmark hunt · C6.2 — Pilotage to Tracy

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Runway 25R | Confirmed real-world 7L/25R; sim name open | AirNav KLVK | comment tightened |

## C4.2 — Fly the pattern · C4.7 — Three-circuit session

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Runway 26 for the preset wind | Confirmed: 26 is 255° magnetic, WX_LIGHT_W surface wind 250° at 8 kt | AirNav KTCY; presets.yaml | comment tightened; sim start option open |

## C5.1 — Slow flight

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| 1,900–2,100 RPM at 55 KIAS | Open — Sim check | — | note tightened |

## C6.1 — Landmark hunt

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Six landmarks visible in the sim | Open — Sim check (all six are real features) | — | note tightened |

## C6.2 — Pilotage to Tracy

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| California Aqueduct visible in the sim | Open — Sim check | — | note tightened |

## C6.3 — Dead reckoning to Half Moon Bay

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Runway 31 at Palo Alto for the preset wind | Confirmed: 31 is 307° magnetic, wind 250° at 8 kt; right turn 10° until the Dumbarton Bridge also confirmed | AirNav KPAO; presets.yaml | comment tightened; sim start option open |
| KPAO→KHAF 280° true, 18.6 nm | Confirmed: 279.8°, 18.7 nm | great-circle calculation from AirNav coordinates | none |

## C6.4 — VOR tracking

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| "Stockton Class C" | Wrong: Stockton Metropolitan is Class D, surface to 2,500 ft MSL within 4.5 nm | Federal Register 2015-25281; FAA-sourced airport listings | **changed** to Class D in the comment |
| ECA is the Manteca VORTAC on 116.0, about 15 nm northeast of Tracy | Confirmed: 056° true, 15.4 nm; ECA sits 4.7 nm southeast of KSCK, so a start 10 nm south of it at 3,500 ft is well clear | OurAirports ECA; great-circle calculation | comment tightened; sim database open |

## Out of scope, for the author

- `content/checklists.yaml` lines 135–136 and 420–421 say "STANDBY or ON" before taxi and
  "STANDBY or ground mode" after landing, and their notes claim the NXi has a GND softkey.
  AIM 4-1-20 b wants altitude reporting on over the whole movement area (STBY/OFF only at
  the parking spot), and the NXi Pilot's Guide lists Standby, On, ALT, VFR, Code and Ident
  only. Not edited (data file outside this task).
- `content/aircraft.yaml` line 22 still carries "verify the exact name" for the classic
  variant; the sim calls its steam-gauge Skyhawk configuration "Basic" on the MSFS forums.
- No new resources needed; the Garmin NXi guides used are the ones `resources.yaml` already
  lists.

Still open for the sim: 42 items · for the POH: 0 · author decisions: 0
