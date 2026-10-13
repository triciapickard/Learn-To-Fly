---
slug: l9-2-reading-performance-charts
code: L9.2
module: m9-performance-weight-balance
order: 2
priority: P0
title: Reading performance charts
summary: Turn density altitude into a takeoff and landing distance, correct it for wind and grass, add a margin, and compare it with the runway you have.
estimatedMinutes: 25
prerequisites: [l9-1-density-altitude-and-performance]
objectives:
  - Read takeoff and landing distance from a table, interpolating between rows and columns.
  - Apply headwind, tailwind and grass corrections to a chart distance.
  - Add a personal safety margin and compare the result with the runway available.
challenges: []
resources: [phak-ch11, afh-ch6]
published: false
lastVerifiedAt: null
simVersion: null
---

## Finishing the August question

In [[l9-1-density-altitude-and-performance]] you left Livermore on a hot afternoon with a density altitude of about 3,400 ft and an honest "I don't know yet." A performance chart turns the air you have into feet, and feet can be compared with a runway. The method is the same for every chart: find your conditions, read the distance, correct for what the chart does not know, add your margin, compare.

## What a performance chart tells you (and what it assumes)

A takeoff chart answers one question: _at this pressure altitude, temperature and weight, how far does the airplane need?_ It gives two numbers. **Ground roll** is brake release to lift-off. **Distance over a 50 ft obstacle** is the distance to climb past a 50 ft tree at the far end, the number that keeps you alive at a short field. The chart only promises them under the conditions it was built with:

| The chart assumes                                                                                              | What it means for you                                         |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Maximum weight (2,550 lb)                                                                                      | Lighter is better; the chart is conservative if you are light |
| Flaps 10°, full throttle before brake release                                                                  | Any other technique gives a longer roll                       |
| Lift-off and climb at the short-field speeds ({{vspeed.shortFieldLiftoff}} then {{vspeed.shortFieldObstacle}}) | A lazy rotation adds hundreds of feet                         |
| Paved, dry, level runway                                                                                       | Grass, wet pavement and upslope all add distance              |
| Zero wind                                                                                                      | Headwind helps, tailwind hurts; you correct for both          |
| A healthy engine making full power                                                                             | The sim's engine is always healthy; a real one may not be     |

The chart is the **best case for a good pilot**. You start from its number and only ever add to it.

:::callout{type="note"}
Always use the POH for a real airplane. The real Cessna 172S handbook has its own takeoff and landing tables with notes explaining the corrections. The table in this lesson comes from the sim and is for the sim.
:::

## Reading the Learn-To-Fly sim-data chart

Learn-To-Fly's performance tables are flown in the sim, so they match what the sim airplane actually does. Below is a **provisional** takeoff table for the Skyhawk at 2,550 lb, flaps 10°, paved dry level runway, zero wind. Each cell shows **ground roll / distance over a 50 ft obstacle**, in feet.

| Pressure altitude | 0 °C          | 20 °C         | 40 °C         |
| ----------------- | ------------- | ------------- | ------------- |
| Sea level         | 800 / 1,450   | 930 / 1,690   | 1,070 / 1,950 |
| 2,000 ft          | 960 / 1,760   | 1,120 / 2,050 | 1,290 / 2,380 |
| 4,000 ft          | 1,170 / 2,180 | 1,360 / 2,550 | 1,580 / 2,970 |
| 6,000 ft          | 1,430 / 2,720 | 1,670 / 3,200 | 1,940 / 3,760 |

_Learn-To-Fly sim data · provisional. Replace with the flown table before publishing._

The table is entered with **pressure altitude and temperature**, not density altitude; the chart does that arithmetic for you. Find your row, find your column, read the cell. Notice how fast it grows: heat alone adds a third at sea level, and a hot day at a 6,000 ft airport needs two and a half times the distance you are used to at Livermore.

:::callout{type="verify"}
The table above is illustrative and provisional. Replace every cell with the Week 1 and Week 5 sim flight-test results stored in `aircraft.yaml → performanceTables` (v2 Section 8.3, D2-11) and record the sim version. Widget W22 (Performance Chart Reader) is embedded here once Phase 20 ships it: `::widget{name="performance-chart" mode="explore"}`. Until then the table is the walkthrough. The numeric knowledge-check answers below are computed from this provisional table and must be recomputed when it is replaced.
:::

:::callout{type="sim"}
Our table comes from sim tests, not from the real handbook. The sim's engine, propeller and tires are models, and models drift with sim updates. If your own takeoffs are consistently longer than the table, tell us; it may need re-flying.
:::

## Interpolation, step by step

Real days do not land on the chart's rows. Livermore in August was 500 ft pressure altitude and 38 °C: between the sea-level and 2,000 ft rows, between the 20 °C and 40 °C columns. You **interpolate**, which is a long word for "take the proportional share."

Do one direction at a time. First temperature, in each row that brackets you. 38 °C is 18 of the 20 degrees from 20 °C to 40 °C, so take 0.9 of the difference:

| Row       | 20 °C | 40 °C | Difference | 0.9 of it | At 38 °C |
| --------- | ----- | ----- | ---------- | --------- | -------- |
| Sea level | 1,690 | 1,950 | 260        | 234       | 1,924    |
| 2,000 ft  | 2,050 | 2,380 | 330        | 297       | 2,347    |

Then pressure altitude. 500 ft is a quarter of the way from sea level to 2,000 ft, so take 0.25 of the difference between the two numbers you just made: 1,924 + 0.25 × (2,347 − 1,924) ≈ **2,030 ft** over a 50 ft obstacle. The same steps on the ground-roll numbers give about **1,110 ft**.

Three habits: write the four corner numbers down first (most errors are reading the wrong cell); round up, never down; and if your conditions fall outside the table, stop. **Do not extrapolate.** Outside the chart means the test pilots did not go there, and neither should you.

:::quiz{id="l9-2-q1" type="numeric" answer="1205" tolerance="40" unit="ft"}
Using the provisional table, what is the takeoff ground roll at a pressure altitude of 2,000 ft and 30 °C?

---

30 °C is halfway between the 20 °C and 40 °C columns in the 2,000 ft row: halfway between 1,120 and 1,290 is about 1,205 ft.
:::

:::quiz{id="l9-2-q2" type="numeric" answer="2300" tolerance="60" unit="ft"}
Using the provisional table, what is the distance over a 50 ft obstacle at a pressure altitude of 3,000 ft and 20 °C?

---

3,000 ft is halfway between the 2,000 ft and 4,000 ft rows in the 20 °C column: halfway between 2,050 and 2,550 is 2,300 ft.
:::

## Corrections: wind, surface, slope

The chart assumes zero wind on dry pavement. Now adjust for the runway you actually have, using these typical rules of thumb:

| Condition            | Correction                                                        | Example on a 2,030 ft obstacle distance |
| -------------------- | ----------------------------------------------------------------- | --------------------------------------- |
| Headwind             | Subtract about 10% for each 9 kt of headwind                      | 9 kt headwind → about 1,830 ft          |
| Tailwind             | Add about 10% for each 2 kt of tailwind                           | 4 kt tailwind → about 2,440 ft          |
| Dry grass            | Add about 15% of the **ground roll**                              | 1,110 ft roll → add about 170 ft        |
| Upslope, wet or soft | No simple factor; a reason for more margin, or a reason not to go |                                         |

Look at the asymmetry. A 9 kt headwind buys 10%; a tailwind of just 2 kt costs the same 10%. That is why pilots taxi the full length of an airport to take off into a light wind. Use only the headwind component; the crosswind widget from Course 1 splits the wind for you.

:::callout{type="verify"}
Confirm the correction factors (−10% per 9 kt headwind, +10% per 2 kt tailwind, +15% of ground roll on dry grass) against the notes on the Cessna 172S POH Section 5 takeoff tables, and label them as typical in the published lesson. Decide whether to teach a slope factor; the POH tables give none and the draft deliberately gives no number.
:::

:::quiz{id="l9-2-q3" type="single"}
A 4 kt tailwind on takeoff…

- [ ] shortens the takeoff distance, because the airplane starts with extra airflow
- [x] increases the takeoff distance, by roughly 20%
- [ ] has no effect below 5 kt
- [ ] only matters for the landing roll

---

With a tailwind the airplane must reach a higher groundspeed before the wing sees flying airspeed. The rule of thumb is about +10% per 2 kt, so 4 kt costs roughly 20%. Small tailwinds matter.
:::

## Margins: a personal rule

The chart is a best case flown by a test pilot. You are a student, the engine is not new and the runway is not perfectly dry. So you add a margin. A common **personal minimum** is to add 50% to the corrected chart distance and insist the runway is at least that long. It is not a regulation or a handbook limit; it is a rule a careful pilot chooses in calm conditions, writes down, and does not renegotiate on the day. The August example, finished:

| Step                                   | Distance over 50 ft |
| -------------------------------------- | ------------------- |
| Chart, interpolated (500 ft PA, 38 °C) | 2,030 ft            |
| Wind: 5 kt headwind, about −5%         | 1,930 ft            |
| Personal margin +50%                   | 2,900 ft            |
| Runway 25R available                   | 5,253 ft            |
| Runway 25L available                   | 2,699 ft            |

On 25R you have nearly twice what you need. On the short parallel, 25L, you fail your own rule and would be trusting the chart's best case with no room for a slow rotation.

:::callout{type="decision"}
Would you take off? Yes from 25R: 2,900 ft needed with margin, 5,253 ft available. Not from 25L, even though the raw chart number fits. The chart says you can; your personal minimum says you will not. Choosing the long runway when the short one "would probably work" is exactly the decision this module is building.
:::

:::callout{type="tip"}
Do the numbers before you need them. Work the takeoff and landing distances during planning, with the forecast temperature. On the day you only check that the real temperature and wind are no worse than planned. Nobody interpolates well while taxiing.
:::

## Landing distance and why it matters more at short fields

Landing has its own chart, read the same way. The numbers are shorter than takeoff, which lulls people. The provisional landing table at 2,550 lb, flaps 30°, short-field technique, paved dry level runway, zero wind, 20 °C:

| Pressure altitude | Ground roll | Over a 50 ft obstacle |
| ----------------- | ----------- | --------------------- |
| Sea level         | 590         | 1,320                 |
| 2,000 ft          | 640         | 1,410                 |
| 4,000 ft          | 690         | 1,500                 |
| 6,000 ft          | 750         | 1,610                 |

_Learn-To-Fly sim data · provisional._

Two things make landing the harder problem at a short field. First, the chart assumes you cross the obstacle at exactly {{vspeed.shortFieldApproach}} with no float; every 5 kt of extra speed adds roughly 10% to the distance, plus float you cannot predict. Second, a landing has no "abort before midpoint": if it goes long, your only tool is the go-around, decided early. Density altitude hurts the landing less than the takeoff, because the engine is not involved, and hurts the go-around a lot, because it is.

:::callout{type="safety"}
A long landing at a short field is a go-around, not a hard-braking contest. If you are not on the ground in the first third of the runway, go around. The runway behind you cannot be used.
:::

:::callout{type="verify"}
Replace the provisional landing table with Week 1 sim test data (v2 Section 8.3). Confirm the "about 10% per 5 kt extra approach speed" rule against the POH landing-table notes, or drop the number and keep the idea. Screenshot for the shot list: "performance table with the August interpolation marked" (v2 Section 46.4).
:::

:::quiz{id="l9-2-q4" type="multi"}
Which of these does the takeoff chart already include? Pick all that apply.

- [x] The effect of temperature
- [x] The effect of pressure altitude
- [ ] A tailwind
- [ ] A grass runway
- [ ] Your personal safety margin

---

The chart is entered with pressure altitude and temperature, so those are built in. Wind, surface and your own margin are corrections you apply afterward.
:::

## Practice and next steps

The method, one line each:

1. Pressure altitude and temperature → read the chart, interpolating between rows and columns.
2. Correct: headwind helps a little, tailwind hurts a lot, grass adds to the roll.
3. Add your personal margin (a common choice is +50%) and compare with the runway available.
4. Outside the chart means no answer, not a guess.

**Practice.** This lesson has no flashcard deck of its own; the three correction factors are worth a card in your own notes.

**Fly it.** Challenge C9.1 "Hot day at Livermore" opens now: compute the density altitude, predict the takeoff roll from this table, fly it on a hot preset and compare. Then [[l9-3-weight-and-balance]] adds the other half of "high, hot and heavy": how much you weigh and where it sits.
