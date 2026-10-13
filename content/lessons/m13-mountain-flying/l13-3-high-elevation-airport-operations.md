---
slug: l13-3-high-elevation-airport-operations
code: L13.3
module: m13-mountain-flying
order: 3
priority: P0
title: High-elevation airport operations
summary: Take off and land above 5,000 ft, where you lean before takeoff, set an abort point, climb slower than the terrain wants and land faster than it looks.
estimatedMinutes: 20
prerequisites: [l13-2-planning-a-mountain-route, l9-2-reading-performance-charts]
objectives:
  - Lean the mixture for takeoff at a high-elevation airport using the run-up method.
  - Compute takeoff distance and climb rate at a high density altitude and set an abort point.
  - Fly an approach and go-around at a high airport at the normal indicated speed despite the higher groundspeed.
challenges: []
resources: [faa-tips-mountain-flying, phak-ch11]
published: false
lastVerifiedAt: null
simVersion: null
---

## Truckee on a hot afternoon

:::callout{type="real-world"}
In a real airplane, a pilot's first takeoff from a high airport is flown with a mountain flying instructor, with the numbers worked from the real POH and a briefed abort point. The engine, the leaning method and the climb rate all behave a little differently from the sim. Learn the method here; take the instructor there.
:::

Truckee–Tahoe (KTRK) sits at about 5,900 ft MSL. On a July afternoon it is 30 °C. Work it as you learned in [[l9-1-density-altitude-and-performance]]: pressure altitude about 5,900 ft with a standard altimeter setting, standard temperature up there about 3 °C, so the air is 27 °C hotter than standard. Density altitude ≈ 5,900 + 120 × 27 ≈ **9,100 ft**.

The Skyhawk that left Livermore at a density altitude of 400 ft is now at 9,100 ft before it leaves the ground. The engine makes roughly three quarters of its sea-level power, the runway roll about doubles, and the climb is a few hundred feet per minute. Nothing about the airplane has changed. Everything about the air has.

:::callout{type="verify"}
Confirm KTRK (about 5,900 ft) and KTVL (about 6,300 ft) field elevations, runway lengths and tower status and hours against the current Chart Supplement, then record them in `airports.yaml`. Widget W21 (Density Altitude Calculator) is embedded here once Phase 20 ships it: `::widget{name="density-altitude" mode="explore"}`, pre-set to KTRK; until then the worked example stands.
:::

## Leaning for takeoff

At Livermore you take off full rich. At a high density altitude, full rich is too much fuel for the thin air: the engine runs rough, makes less power and can foul the plugs. [[l9-4-leaning-the-mixture-and-fuel-management]] taught you to lean in cruise. At a high airport you lean **before takeoff**, during the run-up:

1. Run-up complete as normal, then throttle to full.
2. Pull the mixture back slowly and watch the RPM rise.
3. When the RPM peaks and starts to fall, push the mixture in just enough to recover the peak. That is best power for this air.
4. Leave it there for takeoff. Re-lean in the climb as the air thins.

The common rule of thumb is to lean for takeoff whenever the density altitude is above about 3,000 ft. Below that, full rich is fine and the extra fuel cools the engine.

:::callout{type="verify"}
Confirm the leaning method (lean to maximum RPM at full throttle during the run-up) and the 3,000 ft density altitude threshold against the Cessna 172S POH Section 4 "Before Takeoff" and the MSFS 2024 in-sim checklist. Confirm the sim's engine model actually loses RPM when over-rich at a high density altitude, so the method is observable.
:::

:::quiz{id="l13-3-q1" type="single"}
At a density altitude of 9,000 ft, how do you set the mixture for takeoff?

- [ ] Full rich, as always
- [x] Lean to peak RPM at full throttle during the run-up, then enrich slightly
- [ ] Lean until the engine runs rough, then leave it
- [ ] Idle cut-off until lined up, then full rich

---

Lean to **peak RPM at full throttle**, then push the mixture in a touch. Full rich wastes the little power you have; leaning past the peak loses power and risks overheating.
:::

## The abort point

Performance charts tell you how much runway the takeoff needs. They do not tell you whether today's takeoff is going to plan. The abort point does. The Learn-To-Fly rule of thumb:

> **If you do not have 70% of lift-off speed by 50% of the runway, abort.**

Lift-off is about {{vspeed.vr}}, so 70% is about 40 KIAS. Before you taxi, find the runway midpoint: a taxiway, a distance-remaining sign, or a landmark beside the runway. Then brief it aloud: "40 knots by the midpoint taxiway or I abort."

The provisional Learn-To-Fly takeoff table shows what you are up against:

| Density altitude | Ground roll (about) | Over a 50 ft obstacle (about) |
| ---------------- | ------------------- | ----------------------------- |
| 0 ft             | 900 ft              | 1,600 ft                      |
| 2,000 ft         | 1,100 ft            | 1,950 ft                      |
| 4,000 ft         | 1,350 ft            | 2,400 ft                      |
| 6,000 ft         | 1,650 ft            | 3,000 ft                      |
| 8,000 ft         | 2,050 ft            | 3,750 ft                      |
| 10,000 ft        | 2,550 ft            | 4,800 ft                      |

Maximum weight, no wind, dry pavement. Learn-To-Fly sim data, provisional until verified.

:::callout{type="verify"}
Widget W22 (Performance Chart Reader) replaces this table once Phase 20 ships it: `::widget{name="performance-chart" table="takeoff" mode="explore"}`. The numbers above are placeholders shaped like the real trend; replace them with the Truckee sim flight-test rows (v2 Phase 16, D2-11) and update the numeric question. Confirm the "70% of lift-off speed by 50% of the runway" rule against "Tips on Mountain Flying" (FAA-P-8740-60) or another citable source (v2 Appendix F.10 marks it ⚠).
:::

:::quiz{id="l13-3-q2" type="numeric" answer="3000" tolerance="100" unit="ft"}
Using the table above, what takeoff distance over a 50 ft obstacle do you plan at a density altitude of 6,000 ft, maximum weight, no wind?

---

Read the 6,000 ft row: about **3,000 ft** over the obstacle. Compare that with the runway length before you commit, and add margin for a tailwind or a hot engine.
:::

:::callout{type="decision"}
Full power, mixture leaned, rolling at Truckee. The midpoint taxiway slides past and the airspeed reads 35 KIAS. The rule says abort, so you abort: throttle idle, brakes, taxi back and think. Maybe the mixture was still too rich; maybe a tailwind sneaked in; maybe the day is too hot and the answer is to wait for evening or leave a passenger behind. An abort at 35 kt costs five minutes. Continuing costs the trees. In Challenge C13.1 "Truckee on a hot afternoon", aborting when the criteria are not met scores as the correct decision.
:::

:::quiz{id="l13-3-q3" type="single"}
What is the abort-point rule of thumb?

- [ ] Rotate by the midpoint or abort
- [x] 70% of lift-off speed by 50% of the runway, or abort
- [ ] 50% of lift-off speed by 70% of the runway, or abort
- [ ] Full RPM by the midpoint or abort

---

**70% of lift-off speed by half the runway.** For the Skyhawk that is about 40 KIAS at the midpoint. Slower than that, and the second half will not be enough.
:::

## Climb gradient versus terrain

Once airborne the question changes from "will it fly" to "will it out-climb the ground." Climb **rate** is feet per minute; what keeps you off the terrain is climb **gradient**, feet gained per mile over the ground. At a high density altitude both fall: the engine gives fewer feet per minute, and your true airspeed and groundspeed are higher, so you cover more ground for each foot.

| Density altitude | Climb rate at {{vspeed.vy}} (about) | Groundspeed, no wind (about) | Gradient (about) |
| ---------------- | ----------------------------------- | ---------------------------- | ---------------- |
| 0 ft             | 700 fpm                             | 74 kt                        | 570 ft per nm    |
| 4,000 ft         | 500 fpm                             | 79 kt                        | 380 ft per nm    |
| 8,000 ft         | 300 fpm                             | 84 kt                        | 215 ft per nm    |
| 10,000 ft        | 200 fpm                             | 86 kt                        | 140 ft per nm    |

Maximum weight. Learn-To-Fly sim data, provisional until verified.

At Truckee on that hot afternoon you are near the 8,000–9,000 ft rows: perhaps 250 fpm. The terrain north and east of the airport rises faster than that. The plan from [[l13-2-planning-a-mountain-route]] is to climb **over the valley**, circling if you must, and head for the ridge only at the crossing altitude. Turning toward rising terrain straight after takeoff is the mistake this module exists to prevent.

:::callout{type="verify"}
Replace the climb table with the W22 climb rows from the Truckee flight test. Confirm the rising terrain around KTRK and the sensible climb-out direction (over the Truckee basin or along the Truckee River) against the sectional and the sim scenery, so Challenge C13.1 criterion 5 has a defined heading band.
:::

## Approach with a high true airspeed

Landing at a high airport is the mirror image. You fly final at the **same indicated airspeed** as at Livermore, {{vspeed.approach}} with flaps 30°, because the wing feels the same thin air the airspeed indicator does. But true airspeed is about 2% higher per 1,000 ft, so at Lake Tahoe (KTVL, about 6,300 ft) your 65 KIAS is about 73 KTAS, and with no wind that is your groundspeed too.

- **The ground rushes.** The picture looks fast. Trust the airspeed indicator and do not raise the nose to "slow down."
- **The flare is the same, the roll is longer.** Expect roughly 25% more landing roll at a density altitude of 6,000–7,000 ft, so touch down in the first third and brake firmly.
- **Pattern turns are wider.** A faster groundspeed at the same bank gives a bigger turn radius, so the pattern needs more room and the base turn comes a little earlier.

| Airport (about)       | Indicated on final  | True airspeed (about) | Landing roll compared with KLVK |
| --------------------- | ------------------- | --------------------- | ------------------------------- |
| KLVK, 400 ft          | {{vspeed.approach}} | 66 KTAS               | Baseline                        |
| KTRK, 5,900 ft        | {{vspeed.approach}} | 73 KTAS               | About +20%                      |
| KTVL, 6,300 ft, 30 °C | {{vspeed.approach}} | 76 KTAS               | About +30%                      |

:::callout{type="sim"}
MSFS 2024 computes true airspeed and groundspeed from air density, so the fast-looking final is real in the sim. The engine power model at altitude is less certain: the sim's Skyhawk may lose more or less power than a real Lycoming, so the takeoff and climb tables above come from flying the sim airplane, not the real POH. Use the real POH in a real airplane.
:::

## The go-around at altitude

A go-around at Livermore is a non-event: full power and the Skyhawk climbs away at {{vspeed.goAround}}. At a density altitude of 8,000 ft, full power is three quarters of what you are used to, and with flaps 30° the airplane may barely climb. The procedure from [[l4-4-go-arounds]] does not change, but the margins do:

1. Full power, mixture already leaned for the airport (set it in the before-landing checklist).
2. Flaps to 20° immediately; the drag of full flaps is more than the engine can carry.
3. Pitch for {{vspeed.goAround}}, then flaps 10° and up once climbing.
4. Climb straight ahead over the lowest ground; no turns until you are climbing well.

Brief it before every mountain approach: "Leaned for 9,000, flaps 20 straight away, climb out over the lake." Challenge C13.3 "Arrival at South Lake Tahoe" checks that the brief happened.

:::callout{type="verify"}
Confirm the mixture setting for a high-altitude go-around and the flap retraction sequence against the Cessna 172S POH balked-landing procedure and the MSFS 2024 in-sim checklist. Confirm the climb-out direction at KTVL (over the lake versus toward the terrain south of the field) against the sectional and sim scenery.
:::

:::quiz{id="l13-3-q4" type="single"}
On final at Lake Tahoe the ground looks much faster than usual. The airspeed indicator shows {{vspeed.approach}}. What do you do?

- [ ] Raise the nose to slow to a normal-looking speed
- [ ] Add 10 KIAS so the controls feel firmer
- [x] Keep {{vspeed.approach}}; the fast picture is the higher true airspeed, and the wing is happy
- [ ] Go around; the approach is unstable

---

**Keep the indicated speed.** The wing and the airspeed indicator feel the same thin air. Slowing to make the picture look normal would put you near the stall; adding speed lengthens an already longer roll.
:::

## Practice and next steps

Three things to carry forward:

1. Lean for takeoff above about 3,000 ft density altitude: peak RPM at full throttle during the run-up, then a touch rich.
2. 70% of lift-off speed by half the runway, or abort. Brief it before you taxi.
3. Climb over the valley at {{vspeed.vy}}; land at the normal indicated speed and expect a longer roll; flaps 20° immediately on a go-around.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck: the leaning threshold, the abort rule and the true-airspeed rule of thumb.

**Fly it.** Challenge C13.1 "Truckee on a hot afternoon" has you compute the density altitude, plan the roll and the abort point, lean, and out-climb the terrain. Challenge C13.3 "Arrival at South Lake Tahoe" flies the lake from KTRK to KTVL and lands with that fast-looking final. Then [[l13-4-canyon-turns-and-escape-routes]] covers the one maneuver you hope never to need.
