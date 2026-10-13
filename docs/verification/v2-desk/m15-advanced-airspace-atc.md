# M15 — desk verification (2026-10-13)

Sources consulted: AIM Change 3 (effective 2026-07-09, faa.gov HTML: 3-2-3, 3-2-4, 3-5-5, 4-1-15, 4-1-18, 4-2-3, 4-2-4, 4-2-8 to 4-2-10, 4-2-13, 4-3-13, 4-3-18, 4-4-6, 4-4-7, 5-2-5, 6-4-1, 6-4-2); Pilot/Controller Glossary (faa.gov, 2026-10-13); 14 CFR 61.95, 91.117, 91.129, 91.130, 91.131, 91.157, 91.215, 91.225 and Part 91 Appendix D (eCFR text read via law.cornell.edu); FAA Order JO 7110.65 (2-1-21, 2-4-3, 5-1-9, 7-5-1 to 7-5-6, 7-8-4, 7-8-5, 7-9-2, 7-9-7); FAA San Francisco VFR Terminal Area Chart and VFR Flyway Planning Chart, edition 2026-09-03 (aeronav.faa.gov PDF, next edition 2026-10-29); vatsim.net docs (Join VATSIM, Pilot Basics, Approved Software "current as of August 19, 2026", Finding ATC, Choosing a callsign, Code of Conduct), VATSIM blog (MSFS 2024 compatibility note 2024-11-24; S.O.A.R. pilot-training post 2025-10-15; UNICOM post 2023-10-30), VATSIM forum statement on Xbox compatibility (via search summary); vpilot.rosscarlson.dev (home, Download v3.12.1 of 2026-02-15, Documentation); oakartcc.org (home, /pilots/airports-and-charts). Not reachable: my.vatsim.net sign-up and flight-plan forms (403), prams.vatsim.net (JavaScript only), VATSIM forum post directly (403), v2 Section 9.4 Xbox check relies on the forum statement as summarized by search.

## L15.1 — Class B and Class C operations

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Class C: two-way comms before entry; satellite departures "as soon as practicable"; 91.215/91.225 equipment | Confirmed | 14 CFR 91.130(c), (d) | none |
| Class B: ATC clearance; private pilot or student/recreational/sport with 61.95/61.94/61.101/61.325; two-way radio; 91.215 + 91.225 | Confirmed | 14 CFR 91.131(a)–(d); 61.95 (training + endorsement within 90 days) | table row now adds "never a student solo at SFO itself" (Appendix D Section 4 lists SFO) |
| Speed limits: 250 KIAS below 10,000; 200 KIAS within 4 nm of Class C/D primary at or below 2,500 AGL; 200 KIAS under Class B | Confirmed | 14 CFR 91.117(a)–(c); AIM 3-2-4 | callout deleted |
| Class B VFR minimums "clear of clouds" | Confirmed | AIM 3-2-3 a | none |
| "Cleared into the Class Bravo" wording | Partly: official phraseology is "cleared through/to enter/out of Bravo airspace"; "remain outside Bravo airspace" | FAA Order 7110.65 7-9-2 | added one sentence (all forms count) to the lesson and the safety callout |
| "(call sign) standby" establishes Class C comms; reply without call sign does not | Confirmed | AIM 3-2-4 c; 7110.65 7-8-4 | callout tightened to a sim check |
| Mode C veil 30 nm, surface to 10,000 MSL; SFO in Appendix D Section 1; OAK/SJC not | Confirmed | 14 CFR 91.215(b)(2), 91.225(d)(2), Part 91 App. D §1; AIM 3-2-3 | "phone call to ATC" → "request to ATC for a deviation" (91.215(d)); callout tightened to a sim check |
| VFR flyway (no clearance, flyway chart on back of TAC) vs VFR transition route (clearance, on TAC) | Confirmed | AIM 3-5-5; SF TAC legend "VFR transition route (ATC clearance required) altitude assigned by ATC" | table: transition routes also appear on the flyway chart; "knows the altitude and path" → "knows the path" (SF routes have no published altitude) |
| Name a real flyway and transition route with charted altitude | Resolved: Bay Shore, Pacifica and Coastline VFR transition routes (altitude assigned by ATC); SE Bay Flyway "below 3000"/"below 4000" (Niles Canyon), NE Bay Flyway "below 4000"/"below 5000", NW Bay Flyway "below 4000", "ALT ATC ASGN" through the Oakland Class C | SF TAC + Flyway Planning Chart, 2026-09-03 edition | paragraph added; callout tightened to an author decision (C15.1 route design, screenshot) |

## L15.2 — Flight following and working approach control

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Prerequisite L7.4 does not exist | Confirmed (no l7-4 lesson in content/lessons, 2026-10-13) | repo | callout tagged "Author decision:" |
| Traffic advisory format (clock, miles, direction, type/altitude), "radar contact", "traffic in sight", "negative contact" | Confirmed | AIM 4-1-15; PCG; 7110.65 2-1-21 | none |
| "Traffic no longer a factor" | Wrong: official phrases are "traffic no factor" and "traffic no longer observed" | 7110.65 2-1-21; PCG | table row changed to "traffic no factor" and a row added for "traffic no longer observed" |
| "Maintain VFR", "resume own navigation", "say altitude", at-or-below altitude assignments | Confirmed | PCG; AIM 4-1-18 d; 7110.65 7-8-5, 7-9-7 ("resume appropriate VFR altitudes") | sentence on "resume appropriate VFR altitudes" added; callout tightened to a sim check |
| Termination: advise before changing frequency, then squawk 1200; automatic termination when sent to tower/advisory frequency | Confirmed | AIM 4-1-15 c; PCG "radar service terminated"; 7110.65 5-1-9 | none |
| MSFS 2024 flight-following menu path, assignments, termination | Open — sim check | — | callout tightened |

## L15.3 — Light gun signals, lost comms and special VFR

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Light gun table, six signals, ground and air | Confirmed | AIM 4-3-13 TBL 4-3-1 | "Not used" → "Not applicable"; "Use extreme caution" → "Exercise extreme caution"; callout deleted |
| Acknowledgment: rock wings by day, landing/nav lights at night, ailerons/rudder on the ground | Confirmed | AIM 4-2-13 a2, b; 4-3-13 | none |
| Lost comms: 7600; remain outside/above the Class D until traffic flow determined; join pattern; watch tower; transmit in the blind if receiver only is out | Confirmed | AIM 4-2-13 (title "Communications with Tower when Aircraft Transmitter or Receiver or Both are Inoperative"), 6-4-2; 14 CFR 91.129(d)(2) | receiver-out paragraph now says what to tell the tower and when (AIM 4-2-13 a1); callout tightened to a sim check |
| Basic VFR near a towered airport "3 sm and 1,000 ft of cloud clearance above you" | Wrong | 14 CFR 91.155 (Class D: 3 sm, 500 below, 1,000 above, 2,000 horizontal; 1,000 ft ceiling in a surface area) | changed to "3 sm visibility, a ceiling of at least 1,000 ft, and 500 ft between you and the cloud above" |
| SVFR: surface areas only, ATC clearance, clear of clouds, 1 sm flight and ground visibility, pilot requests, night needs instrument rating + IFR equipment, ATC separates SVFR from IFR | Confirmed | 14 CFR 91.157(a)–(c); AIM 4-4-6; PCG "special VFR operations"; 7110.65 7-5-1 ("only when requested by the pilot") | none |
| "Banned at some major Class B airports" | Partly wrong: Appendix D Section 3 includes Class C airports (Buffalo, Columbus, Indianapolis, Louisville, Portland OR); SFO listed, OAK/SJC not | Part 91 App. D §3; AIM 4-4-6 e; SF TAC "NO SVFR" box at SFO | row changed to "some busy Class B and Class C airports"; sentence added naming SFO/OAK/SJC |
| SVFR clearance phraseology | Changed: "cleared to enter (name) surface area, maintain special VFR conditions (at or below altitude)" | 7110.65 7-5-3, 7-5-5 | example clearance rewritten |
| MSFS 2024 offers SVFR? | Open — sim check | — | callout tightened |

## L15.4 — Readbacks and phraseology

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| Readback items: altitude assignments, restrictions, vectors, runway assignment (incl. L/R/C), aircraft ID in every readback; runway, clearance to enter runway, hold short, line up and wait on taxi instructions; frequency change acknowledged | Confirmed; AIM uses "should", controllers must obtain hold-short readbacks | AIM 4-4-7 b; 4-3-18 b3 and notes; 4-2-3 d; 7110.65 2-4-3 | heading "What must be read back" → "What to read back, every time"; lead sentence and quiz explanation reworded; "call sign always last" softened (AIM allows either end) |
| Callout cites AIM 4-3-10 for line up and wait | Wrong section: 4-3-10 is Intersection Takeoffs; LUAW is AIM 5-2-5 (readback on taxi instructions is 4-3-18 b3) | AIM | callout deleted (resolved) |
| Altimeter setting readback | Not listed by the AIM | AIM 4-4-7, 4-3-18 | labeled "good practice, not required" |
| "Wilco alone to a hold-short is a violation" | Overstated; controller is required to obtain the readback | 7110.65 2-4-3; AIM 4-3-18 | reworded to "not acceptable: the controller ... will ask for it again" |
| "Affirm" as the FAA word | Wrong: FAA term is "Affirmative" | PCG; AIM 4-2-3 c | table row and quiz distractor changed to "Affirmative"; "Affirm" noted as ICAO form |
| Roger, Wilco, Negative, Unable, Stand by, Say again, Verify, Correction | Confirmed | PCG | none |
| 10,500 = "one zero thousand five hundred"; frequencies with "point"; three-digit headings | Confirmed | AIM 4-2-8, 4-2-9, 4-2-10 | none |
| W32 readback trainer placeholder | Widget pending; content/radio-drills.yaml does not exist yet | repo | callout tagged "Widget pending:" |
| Sim-ATC differences table | Open — sim check | — | callout tagged "Sim check:" |

## L15.5 — Flying on VATSIM

| Item | Result | Source | Change made |
| --- | --- | --- | --- |
| VATSIM free; vPilot for MSFS 2024 on Windows; no Xbox path | Confirmed (free to join incl. software; Approved Software lists MSFS 2024/2020/X: vPilot; no console client; VATSIM Xbox statement cites console network limits) | vatsim.net Join VATSIM, Approved Software (2026-08-19); VATSIM forum statement via search | paragraph added ("PC-only, no Xbox path"); callout tightened to author decision (Commercial Use Policy check) |
| Real name; age 16+; VATSIM ID (CID) | Confirmed | Code of Conduct A4; Join VATSIM | step 1 adds "real, full name" and age 16 |
| New Member Orientation mandatory (course + exam in myVATSIM); P0 the only rating required; P1 VFR, P2 IFR, P3 multi-engine, P4 ATP | Confirmed | vatsim.net Pilot Basics; VATSIM blog 2025-10-15 | step 3 and 5 reworded; "free training" claim dropped (not verifiable) |
| Region/division chosen by residence | Open — sign-up form not readable without an account | — | callout keeps this item (author decision) |
| vPilot settings: credentials on Network tab, PTT tab, connect window call sign + type, typed text sent on selected COM frequency, flight plan via VATSIM web form | Confirmed | vPilot Documentation | none |
| "Connect first in observer mode" | Wrong: vPilot observer mode is for a second pilot in a shared cockpit (same call sign + letter); VATSIM's advice is to connect parked and listen | vPilot Documentation "Shared Cockpit (Observer) Mode"; Pilot Basics step 7; Code of Conduct A9 | step 7 and "Listening first" rewritten; "observer session" → "listening session" in plan and summary. Frontmatter objective 2 still says "connect in observer mode" (frontmatter not touched; author to reword) |
| Model matching for MSFS 2024 | Partly: VATSIM pointed to FSLTL in Nov 2024; may be stale | VATSIM blog 2024-11-24 | step 4 reworded with the caveat; Career mode warning added |
| Sim menu paths to disable AI traffic/ATC | Open — sim check | — | callout tightened |
| "File a flight plan for every flight, VFR included" | Wrong as a rule: IFR must file, VFR encouraged | Code of Conduct B10 | sentence rewritten (still "file one anyway") |
| Flight plan form fields, type/equipment, voice indicator, pattern flight accepted | Open (my.vatsim.net 403); voice preferred, receive-only/text-only allowed | Code of Conduct A14 | sentence added; callout tightened |
| UNICOM 122.800, monitor and announce; voice and text; top-down coverage | Confirmed | Code of Conduct B5; vPilot docs; vatsim.net Finding ATC; VATSIM UNICOM post | text example changed to the "(airport) traffic, (call sign) ..." format; callout keeps only the C15.5 criteria alignment |
| Code of Conduct rows: unattended 30 min (B3b/A9), no connecting on runway/taxiway (B1), pausing only under ATC with permission (B2), time acceleration (B9), real weather (B13), real name/status call signs/fictional aircraft (A4, A12, A13), frequencies for operations only (A16) | Confirmed; "disconnect while airborne" and "slew" are not in the Code | Code of Conduct | table rewritten; quiz q4 option "disconnecting on short final" replaced by "time acceleration on downwind without asking"; callout deleted |
| vZOA = Oakland ARTCC on VATSIM; pilot briefings for KLVK/KOAK/KSJC | Partly: site confirmed; airports-and-charts page says "coming soon ... temporary system", no briefings found | oakartcc.org | paragraph rewritten; callout deleted |

Still open for the sim: 8 items · for the POH: 0 · author decisions: 6 · widget pending: 1

Counts: 20 verify callouts at the start · 5 resolved and deleted · 15 rewritten and retagged (8 Sim check, 6 Author decision, 1 Widget pending) · 0 left as written · 11 learner-facing corrections. Wanted resources (not added to resources.yaml): FAA Order JO 7110.65 (atc_html), 14 CFR 91.117, 91.129, 91.215, 91.225, 61.95, Part 91 Appendix D, AIM 3-5 (Other Airspace Areas), AIM 4-4 (ATC Clearances), AIM 6-4 (Two-way Radio Communications Failure).
