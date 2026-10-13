---
slug: l18-2-ifr-charts-and-the-approach-plate
code: L18.2
module: m18-ifr-system
order: 2
priority: P0
title: IFR charts and the approach plate
summary: Read the enroute low chart and every part of an approach plate, from the briefing strip to the minima, and know where current plates come from.
estimatedMinutes: 30
prerequisites: [l18-1-ifr-rules-minimums-currency-alternates-and-fuel]
objectives:
  - Identify airways, fixes, MEA and MOCA on an enroute low altitude chart.
  - Name the five parts of an approach plate and say what you read from each.
  - Choose the correct minima line for the Skyhawk and state its DA or MDA and visibility.
  - Find a current plate in the d-TPP and check its effective dates.
challenges: []
resources: [faa-dtpp, faa-chart-users-guide, faa-ifr-enroute-charts]
published: false
lastVerifiedAt: null
simVersion: null
---

## Two charts, one flight

A VFR sectional shows you the ground. An IFR chart shows none of that: it shows the invisible roads in the sky, the lowest altitudes that keep you clear of what you cannot see, and the exact path down to a runway hidden in cloud.

An IFR flight uses two charts. The **enroute low altitude chart** covers the cruise. The **approach plate** covers the last 10 minutes. This lesson teaches both, using an original training plate drawn for the purpose.

:::callout{type="real-world"}
In a real airplane, an instrument student spends hours with an instructor learning to brief plates under time pressure, in turbulence, with ATC talking. Reading a plate at a desk is step one; judging when a plate's numbers are too tight for today comes with training.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## The enroute low altitude chart

The enroute chart is a network map: its roads are **airways**, its junctions are **fixes**, and almost every line carries an altitude.

| Element                 | What it looks like                                       | What it tells you                                                              |
| ----------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Victor airway (V-route) | A black line labelled "V" and a number, between VORs     | A VOR-defined route; the radial from each end is printed on it                 |
| T-route                 | A blue line labelled "T" and a number                    | A GPS-only route, often routed around busy airspace                            |
| VOR                     | A compass rose with a frequency box and Morse identifier | The navaid that defines the airway; identify it as in [[l6-4-vor-navigation]]  |
| Fix or intersection     | A small triangle, with a five-letter name                | A named point; a **filled** triangle is a compulsory reporting point           |
| MEA                     | A bold number on the airway segment (for example 5000)   | Minimum enroute altitude: obstacle clearance and navaid reception              |
| MOCA                    | A number with an asterisk (for example \*3500)           | Minimum obstruction clearance altitude: obstacle clearance only                |
| MRA                     | A flag with "MRA" and an altitude at a fix               | Minimum reception altitude to identify that fix with a VOR                     |
| MCA                     | A flag with "MCA" at a fix, with a direction             | Minimum crossing altitude: be at or above it before crossing in that direction |
| Segment distance        | A number inside a box, or alongside the segment          | Nautical miles between fixes; totals between VORs are in a box with arrows     |
| Changeover point        | A bent symbol like a stepped line across the airway      | Where to switch from the VOR behind you to the one ahead                       |

The source for every symbol is the FAA Chart User's Guide, and the chart is reissued on a **56-day** cycle.

:::callout{type="verify"}
Verify every symbol description against the current Chart User's Guide (IFR enroute section) and confirm the enroute chart cycle (56 days). Screenshot for the shot list: none; use an original annotated drawing of a sample airway segment (not a chart crop) once the illustrator is available.
:::

## The altitude alphabet

The two altitudes you use every flight are the MEA and the MOCA. Both clear the terrain along the airway. The difference is radio reception:

- **MEA** guarantees obstacle clearance **and** usable VOR signal along the whole segment.
- **MOCA** guarantees obstacle clearance along the whole segment, but VOR signal only within **22 nm** of the VOR.

That is why the MOCA is often lower. With GPS as primary navigation, ATC may clear you at the MOCA when there is no terrain reason to be higher.

| Altitude | Guarantees                                     | When you use it                                     |
| -------- | ---------------------------------------------- | --------------------------------------------------- |
| MEA      | Obstacle clearance and VOR reception           | The normal minimum for the airway                   |
| MOCA     | Obstacle clearance; VOR only within 22 nm      | GPS navigation, or within 22 nm of the VOR          |
| MRA      | VOR reception for a specific fix               | Only if you identify that fix with VOR radials      |
| MCA      | Terrain clearance after a fix                  | Climb before the fix when the next MEA is higher    |
| MAA      | Staying out of conflicting signals or airspace | The maximum altitude on the segment                 |
| OROCA    | Terrain clearance for a whole grid square      | Off-airway planning only; it is not an ATC altitude |

:::callout{type="verify"}
Verify the MEA, MOCA, MRA, MCA, MAA and OROCA definitions against the Chart User's Guide and the Instrument Procedures Handbook (enroute chapter). Confirm the 22 nm MOCA reception figure and how 91.177 treats operating below the MEA with GPS.
:::

:::quiz{id="l18-2-q1" type="single"}
An airway segment shows an MEA of 5,000 ft and a MOCA of \*3,500 ft. What does the MOCA guarantee that the MEA does not have to?

- [ ] Better VOR reception along the whole segment
- [x] Nothing extra: the MOCA guarantees obstacle clearance, but VOR reception only within 22 nm of the station
- [ ] Radar coverage
- [ ] A smoother ride

---

Both altitudes clear obstacles. The MEA also guarantees VOR reception along the whole segment; the MOCA only guarantees reception within 22 nm of the VOR, which is why it can be lower.
:::

## The approach plate, top to bottom

An **approach plate** is a one-page set of instructions for getting from the enroute structure to a runway without seeing it. Every FAA plate has the same layout, so once you can read one you can read them all.

To teach it, Learn-To-Fly uses the **Learn-To-Fly Training Plate**: an original, fictional **RNAV (GPS) RWY 25** approach to an invented airport called Training Field. It looks like an FAA plate but is not a real procedure, and is watermarked "Training plate — not a real procedure — not for navigation".

:::callout{type="verify"}
Widget W38 (Approach Plate Explorer) is embedded here once Phase 21 ships it: `::widget{name="approach-plate" mode="explore"}`. Until then the tables below describe the training plate; keep every number consistent with `content/approach-plates/` when the SVG and hotspot JSON are drawn (D2-10). Screenshot for the shot list: none (plate crops are never used).
:::

Read a plate from the top down. The order is the order you brief it:

| Part                 | Where       | On the training plate                                                                                                                                                                                     |
| -------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title and margin     | Top corners | "RNAV (GPS) RWY 25", Training Field, the chart's effective dates and the amendment number                                                                                                                 |
| Pilot briefing strip | Top band    | Navigation source and channel, final approach course **253°**, runway length **5,200 ft**, TDZE **395 ft**, airport elevation **400 ft**, notes, then the missed approach text and frequency boxes        |
| Plan view            | Middle      | The approach seen from above: the initial fix **FLYNG**, the intermediate fix **SKYHK**, the final approach fix **GLIDE**, the runway, the holding pattern at **HOLDE**, and terrain and obstacle symbols |
| Profile view         | Lower       | The approach from the side: 3,000 ft at FLYNG, 2,500 ft at SKYHK, **2,000 ft** at GLIDE, the glidepath to the runway, and the missed approach as a dashed climb                                           |
| Minima               | Lower band  | One line per approach type and one column per aircraft category, with DA or MDA and visibility                                                                                                            |
| Airport sketch       | Bottom      | The runway layout, lighting symbols, elevation and the touchdown zone, with the time-and-speed table beside it on plates that need one                                                                    |

The briefing strip exists so a pilot can brief the whole approach in about a minute, which you practice in [[l20-1-anatomy-of-an-instrument-approach]].

:::quiz{id="l18-2-q2" type="single"}
On the training plate, where do you find the final approach course and the missed approach instructions?

- [x] In the pilot briefing strip at the top
- [ ] In the airport sketch at the bottom
- [ ] In the minima section
- [ ] Only in the profile view

---

The briefing strip gathers the facts you need first: final approach course, runway and elevation data, notes and the missed approach. The profile and plan views show the same missed approach as a picture, but the briefing strip is where you read it.
:::

## Minima lines and categories

The minima section is the business end of the plate. Each **line** is an approach type; each **column** is an aircraft **category** by approach speed. The Skyhawk's final approach target of {{vspeed.approach}} puts it in **Category A**.

| Category | Approach speed (1.3 × stall speed in landing configuration) | Typical aircraft |
| -------- | ----------------------------------------------------------- | ---------------- |
| A        | Less than 91 kt                                             | Skyhawk          |
| B        | 91–120 kt                                                   | Light twins      |
| C        | 121–140 kt                                                  | Regional jets    |
| D        | 141–165 kt                                                  | Airliners        |

Now the training plate's minima, read down the Category A column:

| Line      | Minimum                                | Visibility | Kind                                              |
| --------- | -------------------------------------- | ---------- | ------------------------------------------------- |
| LPV       | DA **645 ft** MSL (250 ft above TDZE)  | 3/4 sm     | Decision altitude: decide at it, do not level off |
| LNAV/VNAV | DA **795 ft** MSL (400 ft above TDZE)  | 1 sm       | Decision altitude                                 |
| LNAV      | MDA **900 ft** MSL (505 ft above TDZE) | 1 sm       | Minimum descent altitude: level off, look, wait   |
| Circling  | MDA **1,000 ft** MSL                   | 1 sm       | For landing on a different runway                 |

The bracketed number is the **height above touchdown** (HAT) for straight-in lines, or height above airport for circling. Visibility is in statute miles, or an RVR value on runways that measure it. Which line you may use depends on equipment and signal: with a working WAAS GPS and an "LPV" annunciation on the HSI, you fly the LPV line.

:::callout{type="verify"}
Approach categories are in 14 CFR 97.3 and the d-TPP legend. Confirm the speed bands and the 1.3 × Vso definition. The training plate minima above are invented; keep them identical to the W38 data file once it exists so the hotspot questions stay correct.
:::

:::quiz{id="l18-2-q3" type="single"}
You are flying the training plate's LPV line in the Skyhawk. At what altitude must you decide to land or go missed?

- [ ] 900 ft MSL
- [x] 645 ft MSL
- [ ] 395 ft MSL
- [ ] 250 ft MSL

---

The LPV line gives a decision altitude of 645 ft MSL for Category A. The 250 ft figure is the height above touchdown, not an altitude you read on the altimeter. 900 ft is the LNAV MDA.
:::

## Notes and symbols

The symbols you must recognize on any plate:

| Symbol or note                      | Meaning                                                                                                                     |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Triangle with **A** inside          | Non-standard alternate minimums; look them up in the d-TPP (from [[l18-1-ifr-rules-minimums-currency-alternates-and-fuel]]) |
| Triangle with **A** and "NA"        | Not authorised as an alternate                                                                                              |
| Triangle with **T** inside          | Non-standard takeoff minimums or an obstacle departure procedure; see [[l18-3-clearances-and-departures]]                   |
| Maltese cross in the profile view   | The final approach fix for a non-precision approach                                                                         |
| Lightning-bolt arrow in the profile | Glideslope or glidepath intercept point, the FAF for a precision approach                                                   |
| Dashed line in plan or profile      | The missed approach path                                                                                                    |
| "Procedure NA for arrivals at…"     | A restriction on how you may join the approach                                                                              |
| Minima line marked "NA"             | That line is not available (for example, circling to a runway over terrain)                                                 |
| Inoperative components note         | Higher minima when runway lights or a part of the system is out of service                                                  |

Read every note out loud when you brief. The note you skip is the one that applies today.

:::callout{type="verify"}
Verify each symbol against the d-TPP legend pages and the Chart User's Guide (terminal procedures section). Confirm the current rendering of the alternate and takeoff minimums symbols (triangle-A and triangle-T) and the inoperative components table reference.
:::

:::quiz{id="l18-2-q4" type="single"}
A plate shows a triangle with a "T" inside it next to the airport name. What should you do?

- [ ] Nothing; it marks the tower frequency
- [x] Look up the airport's takeoff minimums and obstacle departure procedure in the d-TPP before departing IFR
- [ ] Add 100 ft to every minimum on the plate
- [ ] Use the circling minima instead

---

The "T" triangle means the airport has non-standard takeoff minimums, an obstacle departure procedure, or both. They are printed in a separate section of the d-TPP, not on the plate. The next lesson covers them.
:::

## Where current plates come from, and why the cycle matters

Real plates come from the FAA's **digital Terminal Procedures Publication** (d-TPP), free, as one PDF per procedure, reissued on a **28-day** cycle. Each plate's margin shows the dates it is valid. An approach is amended when a tower is built, a minimum changes, a fix is renamed or a runway renumbered. Flying last cycle's plate means flying against a world that has moved.

For the Livermore procedures used in Course 3, the **ILS or LOC RWY 25R** and the **RNAV (GPS) RWY 25R** at KLVK (not for navigation), each challenge brief links to the current d-TPP PDF and records the cycle checked. The sim's navigation database follows a different, usually older cycle, so a fix name or minimum in the sim may differ from the current plate. When that happens, the lesson teaches the current one and the challenge flies the sim's.

:::callout{type="verify"}
Record the d-TPP cycle checked for the KLVK ILS or LOC RWY 25R and RNAV (GPS) RWY 25R (v2 Section 12.4; candidates only until verified in both the d-TPP and the sim's nav database). Confirm the 28-day d-TPP cycle and the current d-TPP URL in `resources.yaml`. Record the sim's AIRAC cycle for the version tested.
:::

:::callout{type="decision"}
You open your kneeboard and the plate's effective dates ended last week. The answer is not "it probably hasn't changed". Download the current one before you file. In the sim it takes 1 minute; in a real airplane it is the difference between a legal approach and a guess.
:::

## Practice and next steps

Three things to carry forward: the MEA keeps you clear of terrain and in VOR range; a plate is read top to bottom, briefing strip first; and the Skyhawk reads the Category A column of the minima.

**Practice.** This lesson feeds the `approach-plate-symbols` and `chart-symbols` flashcard decks: the enroute chart elements, the altitude alphabet, the plate layout and the symbols table.

**Fly it.** No challenge yet. You will brief the training plate in Module 20, starting with [[l20-1-anatomy-of-an-instrument-approach]].

**Next.** [[l18-3-clearances-and-departures]] turns the "T" symbol into a real briefing item and teaches you to copy the clearance that starts every IFR flight.
