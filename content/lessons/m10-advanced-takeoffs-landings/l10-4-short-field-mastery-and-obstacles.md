---
slug: l10-4-short-field-mastery-and-obstacles
code: L10.4
module: m10-advanced-takeoffs-landings
order: 4
priority: P0
title: Short-field mastery and obstacles
summary: Plan a takeoff over a 50-ft obstacle with real numbers, fly a precise approach at the short-field speed, and stop in the distance you planned.
estimatedMinutes: 20
prerequisites: [l4-1-normal-takeoff-and-climb, l9-2-reading-performance-charts]
objectives:
  - Plan a short-field takeoff over a 50-ft obstacle, including the wind and surface corrections.
  - Fly a short-field approach at the short-field speed and touch down within 200 ft beyond the aiming point.
  - Explain the trade-off between Vx and Vy and when to switch from one to the other.
challenges: []
resources: [afh-ch6, afh-ch9]
published: false
lastVerifiedAt: null
simVersion: null
---

## Palo Alto, full fuel, trees at the end

Palo Alto's single runway is about 2,400 ft long, with the bay at one end, obstacles at the other, and the San Francisco Class B overhead. With a passenger and full fuel on a warm afternoon, you do not have the luxury of a sloppy takeoff or a landing that floats. This is the short-field problem: the runway is firm, but there is not much of it, and something is in the way.

The short-field techniques from Course 1 get you most of the way. This lesson adds the two things that turn technique into mastery: **numbers from the chart** before you go, and **precision** when you fly.

:::callout{type="verify"}
The spec's prerequisite is v1 L4.6 (short-field takeoffs and landings), which is not written yet; `l4-1-normal-takeoff-and-climb` stands in, and the recap below is written so the lesson stands alone. Swap the prerequisite to the L4.6 slug when it exists. Confirm KPAO's runway length (2,441 ft in `airports.yaml`) and which runway end has the obstacles against the Chart Supplement.
:::

## Recap: the short-field techniques

|           | Short-field takeoff                                                                                          | Short-field landing                                       |
| --------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **Setup** | Flaps 10°, start at the very end of the runway, brakes held                                                  | Flaps 30°, stabilized early                               |
| **Power** | Full power against the brakes, check the engine, release                                                     | Power carried to the aiming point, then idle              |
| **Speed** | Lift off at {{vspeed.shortFieldLiftoff}}, climb at {{vspeed.shortFieldObstacle}} until clear of the obstacle | {{vspeed.shortFieldApproach}} on final, no faster         |
| **Then**  | Accelerate to {{vspeed.vx}}, then {{vspeed.vy}}; flaps up once clear and accelerating                        | Touch down on the aiming point, flaps up, maximum braking |

Every number in that table is the difference between the normal procedure and a shorter one. The normal rotation speed, {{vspeed.vr}}, becomes {{vspeed.shortFieldLiftoff}}. The normal approach speed, {{vspeed.approach}}, becomes {{vspeed.shortFieldApproach}}. A few knots sound like nothing; on a 2,400 ft runway they are hundreds of feet.

:::callout{type="verify"}
Confirm every speed in the recap table against the 172S POH Section 4 short-field procedures and the MSFS 2024 in-sim checklist, and confirm the flap settings (10° for takeoff, 30° for landing). The tokens come from `aircraft.yaml`; fix the values there, not here.
:::

## Obstacle clearance: distance to 50 ft, Vx and Vy

Takeoff charts give two distances: the **ground roll** and the **distance to clear a 50-ft obstacle**. The second is the one that matters when something is in the way, and it is always much longer than the first, because it includes the ground roll plus a climb to 50 ft at a shallow angle.

The climb from lift-off to the obstacle is flown at the **best angle of climb**, Vx, which is {{vspeed.vx}} at sea level. Vx gives the most altitude per foot of ground covered. The **best rate of climb**, Vy, {{vspeed.vy}}, gives the most altitude per minute. They are different speeds because the wing and the engine are best at different things:

|                | Vx (best angle)                               | Vy (best rate)                        |
| -------------- | --------------------------------------------- | ------------------------------------- |
| Speed          | {{vspeed.vx}}                                 | {{vspeed.vy}}                         |
| Best for       | Clearing an obstacle close to the runway      | Getting to altitude in the least time |
| Pitch attitude | Steeper, nose high, poor forward view         | Lower, better view and engine cooling |
| Stall margin   | Smaller                                       | Larger                                |
| Use it         | Until the obstacle is behind you, then switch | The rest of the climb                 |

Fly Vx only as long as you need it. The nose-high attitude hides the view ahead, the engine runs hotter, and the margin above the stall is thin, so a gust or a mistake bites harder. The moment the obstacle is clearly below and behind you, lower the nose to {{vspeed.vy}}, then let the flaps up.

The short-field procedure has its own obstacle-climb speed, {{vspeed.shortFieldObstacle}}, with the flaps at 10°, which is lower than the clean Vx. The flaps let the airplane climb at a lower speed; once they are up, Vx is the number.

:::quiz{id="l10-4-q1" type="single"}
Which statement about Vx and Vy is correct?

- [ ] Vx gives the most altitude per minute; Vy gives the most altitude per foot of ground covered
- [x] Vx gives the most altitude per foot of ground covered; Vy gives the most altitude per minute
- [ ] Vx and Vy are the same speed with different flap settings
- [ ] Vy is used to clear obstacles because it is faster

---

**Vx is best angle (altitude per distance over the ground); Vy is best rate (altitude per minute).** Use Vx to clear the obstacle, then Vy.
:::

## Planning the takeoff with the chart

Open the Learn-To-Fly performance table from [[l9-2-reading-performance-charts]] and work the Palo Alto example. Field elevation is 7 ft, so pressure altitude is close to sea level; take 30 °C and a full airplane.

| Step                                           | Figure (example)                            | Where it comes from                                                |
| ---------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| Distance to clear 50 ft, from the table        | 1,800 ft                                    | Takeoff table at pressure altitude and temperature, maximum weight |
| Headwind correction: 9 kt headwind, about −10% | −180 ft                                     | Rule of thumb (typical: about 10% less per 9 kt of headwind)       |
| Corrected distance to 50 ft                    | 1,620 ft                                    |                                                                    |
| Runway available                               | 2,441 ft                                    | `airports.yaml`                                                    |
| Margin                                         | About 820 ft, roughly a third of the runway | Your decision rule says whether that is enough                     |

The example figures are typical, not chart values; use the real table. Two corrections work against you, and you should know them: a **tailwind** of even 2 kt adds roughly 10% to the distance, and **dry grass** adds about 15% to the ground roll. Both are rules of thumb, and the chart notes override them.

:::callout{type="verify"}
Widget W22 (Performance Chart Reader) is embedded here once Phase 20 ships it, with the takeoff table selected and the runway bar showing required against available distance (directive name to be confirmed). Until then the worked table above stands in. Confirm the wind and surface corrections (−10% per 9 kt headwind, +10% per 2 kt tailwind, +15% dry grass) against the POH takeoff chart notes, and replace the example 1,800 ft with the sim-data value once the D2-11 tests are flown.
:::

:::quiz{id="l10-4-q2" type="numeric" answer="1620" tolerance="60" unit="ft"}
The table gives 1,800 ft to clear a 50-ft obstacle. The wind is a 9-knot headwind straight down the runway. Using the rule of thumb (about 10% less per 9 kt of headwind), what distance do you plan for?

---

1,800 ft less 10% is **1,620 ft**. Compare it against the runway available, not against the ground roll.
:::

:::callout{type="decision"}
Palo Alto on a hot day, full fuel, and a 3 kt tailwind because the tower is using the other runway for traffic flow. The corrected distance to 50 ft comes out at 2,300 ft against 2,441 ft available. That margin is a few seconds of acceleration. **Numbers don't fit? Don't go.** Wait for the wind to change, ask for the other runway, leave fuel or a passenger behind, or go another day. Nobody has ever regretted the takeoff they did not make.
:::

:::callout{type="safety"}
On the sectional chart and the airport diagram, obstacles near the runway appear as tower and tree symbols with their heights; the Chart Supplement lists them by runway end, for example "trees, 50 ft, 400 ft from the threshold". The "50-ft obstacle" in a takeoff chart is a planning assumption. The real tree may be 70 ft and closer. Read what is actually at the end of the runway before you plan around a number.
:::

:::callout{type="verify"}
Confirm the obstacle symbols and the Chart Supplement obstruction wording against the FAA Chart User's Guide and the current Chart Supplement entry for KPAO. Screenshot for the shot list: "short-field takeoff, Vx climb, KPAO" (confirm which runway end has the obstacles and whether C10.4 uses Runway 31).
:::

## The precise approach

A short-field landing is a normal landing flown with less tolerance. The approach is stabilized **early**, by 500 ft AGL rather than 300 ft, with full flaps and the speed at {{vspeed.shortFieldApproach}}. That speed is only a little above the stall with flaps, so hold it: do not add to it, and do not let it decay.

On final, the rule from [[l4-3-normal-approach-and-landing]] matters more than ever: **pitch for airspeed, power for the glide path**. Keep a little power on all the way to the aiming point. It gives you fine control over the descent and lets you fix a low approach without diving for the runway. The aiming point should sit still in the windshield. Place it short of your intended touchdown point by the length of the float, which at {{vspeed.shortFieldApproach}} is short.

At the aiming point, power to idle, a brief flare, and touch down positively, with little float. A short-field landing that floats 500 ft past the aiming point is a normal landing, not a short-field landing, and on a short runway it may be an overrun.

::checklist{slug="short-field-landing"}

## Maximum braking without skidding

After touchdown:

1. **Hold the nose up briefly** with back elevator for aerodynamic braking, then let the nose wheel down.
2. **Flaps up.** With the flaps retracted the wing stops lifting, and the weight goes onto the wheels, where the brakes can use it.
3. **Brake firmly and evenly**, as hard as you can without locking a wheel. A skidding tire has less grip than a rolling one, and the airplane swerves.
4. **Keep straight** with rudder, not with differential braking.

:::callout{type="verify"}
Confirm the "flaps up after touchdown for braking" step against the 172S POH short-field landing procedure and the AFH, and confirm it does not conflict with the Learn-To-Fly `short-field-landing` checklist embedded above. Confirm that MSFS 2024 models wheel lock-up and the loss of braking effectiveness in a skid.
:::

:::quiz{id="l10-4-q3" type="single"}
Why do you raise the flaps during the short-field landing roll?

- [ ] To reduce drag so the airplane slows down
- [x] To put more weight on the wheels so the brakes work better
- [ ] To prepare for a go-around
- [ ] To cool the engine

---

With the flaps down the wing is still carrying some of the weight. Flaps up puts that weight on the tires, and **braking effectiveness depends on weight on the wheels**.
:::

## Practice and next steps

Three things to carry forward:

1. Plan with the distance to 50 ft, corrected for wind and surface, and compare it with the runway available.
2. Vx until the obstacle is behind you, then Vy.
3. {{vspeed.shortFieldApproach}} on final, power to the aiming point, flaps up and firm braking after touchdown.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck (the short-field speeds and the Vx/Vy distinction).

**Fly it.** Challenge C10.4 "Short field over an obstacle" has you plan the distances, take off over a simulated 50-ft obstacle and land short at Palo Alto. Then step back from the runway itself to what happens around it, in [[l10-5-runway-safety-wake-turbulence-and-hot-spots]].
