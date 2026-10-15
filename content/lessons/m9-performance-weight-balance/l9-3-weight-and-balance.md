---
slug: l9-3-weight-and-balance
code: L9.3
module: m9-performance-weight-balance
order: 3
priority: P0
title: Weight and balance
summary: Add up what you are carrying and where it sits, find the center of gravity, check it against the envelope, and fix a load that does not fit.
estimatedMinutes: 25
prerequisites: [l9-2-reading-performance-charts]
objectives:
  - Compute total weight, total moment and center of gravity for a given load.
  - Decide whether a load is within the maximum weight and the CG envelope, before and after fuel burn.
  - Explain how a forward or aft center of gravity changes handling and stall behavior.
challenges: []
resources: [faa-weight-balance-handbook, phak-ch10]
published: false
lastVerifiedAt: null
simVersion: null
---

## Four people and a weekend's bags

Three friends want to come to Half Moon Bay for lunch. Everyone has a bag. The tanks are full. The airplane has four seats, so it fits, right?

Maybe. A Skyhawk with four adults, bags and full fuel is almost always over its maximum weight, and depending on who sits where it can also be out of balance. Neither problem shows on the walk-around. The airplane just flies differently, and in the worst case it stops flying in a way you cannot recover from. This lesson gives you the arithmetic to know before you start the engine: multiply, add, divide, compare.

## Why weight and balance matters

**Weight** is the easy half. Every extra pound needs more lift: a longer roll, a shallower climb, a higher stall speed. The chart in [[l9-2-reading-performance-charts]] assumed maximum weight; above it there is no chart, because the airplane was never tested there.

**Balance** is where the weight sits. The airplane pivots about its **center of gravity** (CG), and the tail holds the nose where you want it. The designers tested a range of CG positions and drew a box, the **envelope**. Inside it the airplane is predictable. Outside it, it is not.

| CG position          | What you feel                                                  | The danger                                                              |
| -------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Forward (nose-heavy) | Heavy elevator, very stable, higher stall speed, hard to flare | Running out of elevator in the flare; a nosewheel-first landing         |
| In the middle        | Normal                                                         | None                                                                    |
| Aft (tail-heavy)     | Light elevator, less stable, lower stall speed, better cruise  | A stall is easy to enter and may not recover, because the nose stays up |

Stability is the airplane's tendency to return to where it was after a bump. An aft CG eats stability: past the aft limit the nose would rather pitch up than down.

:::callout{type="safety"}
Aft CG and stall recovery. In [[l5-2-stalls-power-off-and-power-on]] the airplane recovered because the nose dropped when you released back pressure. With the CG behind the aft limit that help is gone, and a spin may be unrecoverable. Every loading case in this lesson is really a question about whether the stall recovery still works.
:::

## Datum, arm, moment, CG

Four words carry the whole subject.

- **Datum.** An imaginary vertical line the manufacturer chose. On the Skyhawk it is the lower front face of the firewall, the wall between the engine and the cabin. Every position is measured from it, in inches aft.
- **Arm.** The distance from the datum to where a weight sits. The rear seats are farther aft than the front seats, so they have a bigger arm.
- **Moment.** Weight × arm: how hard a weight pulls the balance toward itself. 200 lb at 73 in pulls harder than 200 lb at 37 in.
- **CG.** The balance point: total moment divided by total weight.

> **CG (in) = total moment ÷ total weight**

| Term   | Units | How you get it                                            |
| ------ | ----- | --------------------------------------------------------- |
| Weight | lb    | Scales, the sim's payload screen, 6 lb per gallon of fuel |
| Arm    | in    | The loading table for the airplane                        |
| Moment | lb-in | Weight × arm (often shown divided by 1,000)               |
| CG     | in    | Total moment ÷ total weight                               |

:::callout{type="verify"}
Widget pending: W23 (Weight and Balance Explorer) is embedded here once Phase 20 ships it: `::widget{name="weight-and-balance" mode="explore"}`. Until then the tables below are the walkthrough.
:::

:::quiz{id="l9-3-q1" type="order"}
Put the steps for finding the center of gravity in order.

1. List every item on board with its weight, including the empty airplane and the fuel
2. Multiply each weight by its arm to get its moment
3. Add up all the weights, and add up all the moments
4. Divide the total moment by the total weight
5. Compare the result with the envelope for that weight

---

Weights and arms first, moments second, totals third, one division, then the check. Skipping the last step is the most common real-world mistake: a correct CG number nobody compared with the envelope.
:::

## The loading table and the envelope

The **basic empty weight** (the airplane with oil and unusable fuel, nobody aboard) and its CG differ for every individual airplane; the value below is illustrative, and for the sim airplane you use the sim's own.

| Station                           | Arm (in)         | Limit                               |
| --------------------------------- | ---------------- | ----------------------------------- |
| Basic empty weight (illustrative) | 39.5 at 1,680 lb | Use the sim's value                 |
| Front seats                       | 37               | Seat adjustable, 34–46 in           |
| Rear seats                        | 73               |                                     |
| Fuel                              | 48               | 53 gal usable, 6 lb per gal         |
| Baggage area 1                    | 95               | 120 lb                              |
| Baggage area 2                    | 123              | 50 lb (120 lb combined with area 1) |

The maximum takeoff weight is {{aircraft.mtow}}. The envelope has an aft limit of 47.3 in at every weight and a forward limit that moves aft as the airplane gets heavier, 1.0 in for each 100 lb above 1,950 lb:

| Weight           | Forward limit | Aft limit |
| ---------------- | ------------- | --------- |
| 1,950 lb or less | 35.0 in       | 47.3 in   |
| 2,150 lb         | 37.0 in       | 47.3 in   |
| 2,350 lb         | 39.0 in       | 47.3 in   |
| 2,550 lb         | 41.0 in       | 47.3 in   |

:::callout{type="verify"}
Sim check: the basic empty weight of 1,680 lb at 39.5 in is illustrative. Record the MSFS 2024 Skyhawk's basic empty weight and CG from its weight and balance screen, then recompute every worked example, the fixes table and the answer to l9-3-q2. (Desk-verified 2026-10-13: station arms, baggage limits, the envelope and 6 lb/gal confirmed against the EASA TCDS for the 172S, PHAK Chapter 10 and the 172S POH Sections 2 and 6; the combined baggage limit was corrected to 120 lb.)
:::

Now work a load: you (190 lb) and a friend (150 lb) in front, one passenger (150 lb) in the back, a 40 lb bag in area 1, and 40 gal of fuel (240 lb).

| Item           | Weight (lb) | Arm (in) | Moment (lb-in) |
| -------------- | ----------- | -------- | -------------- |
| Empty airplane | 1,680       | 39.5     | 66,360         |
| Front seats    | 340         | 37       | 12,580         |
| Rear seat      | 150         | 73       | 10,950         |
| Baggage 1      | 40          | 95       | 3,800          |
| Fuel, 40 gal   | 240         | 48       | 11,520         |
| **Total**      | **2,450**   |          | **105,210**    |

CG = 105,210 ÷ 2,450 = **42.9 in**. At 2,450 lb the forward limit is 40.0 in and the aft limit 47.3 in; weight is under 2,550 lb. You are in the envelope with room on both sides.

:::quiz{id="l9-3-q2" type="numeric" answer="39.8" tolerance="0.3" unit="in"}
Empty airplane 1,680 lb at 39.5 in. Two people in the front seats totaling 350 lb. 30 gal of fuel. Nothing else. What is the CG?

---

Moments: 66,360 + 350 × 37 (12,950) + 180 × 48 (8,640) = 87,950 lb-in. Weight: 1,680 + 350 + 180 = 2,210 lb. CG = 87,950 ÷ 2,210 ≈ 39.8 in, inside the envelope (forward limit 37.6 in at that weight).
:::

## Fuel burn moves the CG

The load you take off with is not the load you land with. Skyhawk fuel sits at 48 in, usually a little **aft** of the loaded CG, so burning fuel moves the CG slightly **forward**. The movement is small, but "small" is not "zero." Take the load above and burn 25 gal (150 lb):

| Condition | Weight   | Moment  | CG      | Forward limit |
| --------- | -------- | ------- | ------- | ------------- |
| Takeoff   | 2,450 lb | 105,210 | 42.9 in | 40.0 in       |
| Landing   | 2,300 lb | 98,010  | 42.6 in | 38.5 in       |

Both points are inside. The habit: compute takeoff **and** landing. A load that starts near the forward limit gets closer to it as fuel burns, exactly when you want elevator authority for the flare.

:::quiz{id="l9-3-q3" type="single"}
An aft center of gravity makes the airplane…

- [ ] more stable, with a heavier elevator
- [x] less stable and harder to recover from a stall
- [ ] stall at a higher speed
- [ ] impossible to trim in cruise

---

With the CG aft the tail has less leverage to push the nose down, so the airplane is less stable in pitch and the nose may not drop on its own in a stall. It also stalls slightly slower and cruises slightly faster, which is why the aft limit is a temptation as well as a danger.
:::

## Fixing an out-of-limits load

Back to the Half Moon Bay lunch: you alone in front (170 lb), two friends in the back (170 lb each), 70 lb of bags in area 1, 50 lb in area 2, and 30 gal of fuel (180 lb).

| Item           | Weight (lb) | Arm (in) | Moment (lb-in) |
| -------------- | ----------- | -------- | -------------- |
| Empty airplane | 1,680       | 39.5     | 66,360         |
| Front seat     | 170         | 37       | 6,290          |
| Rear seats     | 340         | 73       | 24,820         |
| Baggage 1      | 70          | 95       | 6,650          |
| Baggage 2      | 50          | 123      | 6,150          |
| Fuel, 30 gal   | 180         | 48       | 8,640          |
| **Total**      | **2,490**   |          | **118,910**    |

CG = 118,910 ÷ 2,490 = **47.8 in**. The weight is fine, but the aft limit is 47.3 in. Half an inch out is out.

You have three tools, gentlest to bluntest: **move bags, reduce fuel, leave a passenger.** The weight-shift formula tells you what each move is worth without redoing the table:

> **Change in CG = weight moved × distance moved ÷ total weight**

| Fix                                        | Change in CG                      | New CG  | Result                                           |
| ------------------------------------------ | --------------------------------- | ------- | ------------------------------------------------ |
| Move the 50 lb bag from area 2 to area 1   | 50 × 28 ÷ 2,490 = 0.6 in forward  | 47.2 in | In, by 0.1 in. Area 1 is now at its 120 lb limit |
| Move one friend from the back to the front | 170 × 36 ÷ 2,490 = 2.5 in forward | 45.3 in | Comfortably in                                   |

Reducing fuel does not help here: fuel sits just aft of this CG, so taking it out moves the CG almost nowhere. People are the big lever.

:::callout{type="decision"}
Would you go with the first fix, 0.1 in inside the limit? A careful pilot would not. Your weights are estimates (did anyone step on a scale?), the seats may not be where the table assumes, and 0.1 in is smaller than your errors. Put a friend in the front seat and fly with a margin you can trust.
:::

## Setting payload and fuel in the sim

A challenge brief will tell you what to load. Set the fuel and the payload at each station so the sim airplane matches the table you worked on paper; then your computed CG is the sim's CG. In MSFS 2024 the loading is set from the aircraft's weight and balance screen, reachable from the EFB tablet in the cockpit or from the aircraft customization panel before the flight. It shows fuel per tank and a weight for each seat and baggage station.

| Our station   | Likely sim entry             | Note                                          |
| ------------- | ---------------------------- | --------------------------------------------- |
| Front seats   | Pilot and copilot weights    | Enter the two people separately               |
| Rear seats    | Rear passenger weights       |                                               |
| Fuel          | Left and right tank quantity | Keep them equal unless told otherwise         |
| Baggage 1 / 2 | Baggage station weights      | The sim may show one combined baggage station |

:::callout{type="sim"}
The sim's payload screen maps to our stations, but not always one for one: it may combine the two baggage areas, it may not model seat position, and its empty weight and CG are whatever the aircraft file says. Record those the first time you open the screen. The sim does model the consequences: an aft-loaded Skyhawk feels light in pitch and is reluctant to drop its nose in a stall. Feel it, carefully, at altitude.
:::

:::callout{type="verify"}
Sim check: confirm the MSFS 2024 menu path for weight and balance (EFB "Aircraft" tab versus the pre-flight customization panel), the station names it shows, whether baggage is one station or two, and whether it enforces the envelope. Record the sim's basic empty weight and CG and the sim version. Screenshot for the shot list: "weight and balance screen with the aft-loaded lunch flight".
:::

## Practice and next steps

What to keep:

1. Moment = weight × arm. CG = total moment ÷ total weight. Compare with the envelope at that weight.
2. Check takeoff and landing; fuel burn moves the CG.
3. Aft CG means less stability and a stall that may not recover. Forward CG means a heavy flare.
4. To fix an aft load, move people before bags; fuel barely helps.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck: the maximum weight, the baggage limits, 6 lb per gallon and the CG formula.

**Fly it.** Challenge C9.2 "Load it right" gives you a passenger and bag list, asks for the CG on paper, then has you load the sim to match and fly a pattern. Next, [[l9-4-leaning-the-mixture-and-fuel-management]] covers the fuel you just weighed.
