---
slug: l10-1-crosswinds-revisited-gusts-wind-shear-and-limits
code: L10.1
module: m10-advanced-takeoffs-landings
order: 1
priority: P0
title: 'Crosswinds revisited: gusts, wind shear and limits'
summary: Put numbers on a gusty crosswind, add the right speed margin, and know when the right answer is another runway or another airport.
estimatedMinutes: 20
prerequisites: [l4-3-normal-approach-and-landing]
objectives:
  - Compute the crosswind and headwind components of a reported wind, including gusts.
  - Apply the gust-factor speed additive to the final approach speed.
  - Decide when a crosswind exceeds your personal limit and choose another runway or airport.
challenges: []
resources: [afh-ch9, aim-7, boldmethod-crosswind]
published: false
lastVerifiedAt: null
simVersion: null
---

## A gusty crosswind at Livermore

On a spring afternoon at Livermore, the ATIS reports wind 290 at 12 gusting 20. You are set up for Runway 25R, whose magnetic heading is about 254°, so the wind is about 35° off the nose and from the right. In Course 1 you landed in light crosswinds. Today the wind has a second number, and it changes the approach speed, the touchdown and the decision to land at all.

This lesson puts numbers on the wind, adds a speed margin for gusts, and has you set a personal crosswind limit before you fly.

:::callout{type="verify"}
Author decision: the spec's prerequisite is v1 L4.5 (crosswind takeoffs and landings), which is not written yet; `l4-3-normal-approach-and-landing` stands in and the recap below is self-contained. Swap the prerequisite to the L4.5 slug when it exists. (Desk-verified 2026-10-13: KLVK Runway 25R is 254° magnetic on the FAA airport diagram AL-6075 and AirNav.)
:::

## Recap: crab and wing-low

These techniques stop the wind pushing you off the centerline on final:

| Technique                | How it looks                                                                  | Where you use it                         |
| ------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------- |
| **Crab**                 | Wings level, nose turned into the wind, ground track straight down the runway | Final approach, down to the round-out    |
| **Wing-low (side slip)** | Upwind wing lowered with aileron, nose held straight with opposite rudder     | The last 100 ft, the flare and touchdown |

The crab is comfortable, but you cannot touch down in one. The wheels would meet the runway pointing sideways and the airplane would skip or swerve. So before touchdown you change the crab into a wing-low slip. Lower the upwind wing just enough to stop the drift, and press the opposite rudder just enough to keep the nose on the centerline. Touch down on the **upwind main wheel first**, then the other main, then the nose wheel. [[l10-2-slips]] takes the slip apart in detail.

:::callout{type="verify"}
Widget pending: Widget W25 (Crosswind Technique & Slip Visualiser) is embedded here once Phase 20 ships it, in crab and wing-low modes side by side (directive name to be confirmed when the widget exists). Until then the table above carries the recap. Screenshot for the shot list: "crab on final, Runway 25R, KLVK".
:::

## Gusts: add half the gust factor

A gust is a sudden change in wind speed. On final, a gust that drops from 20 kt to 12 kt takes 8 kt of airspeed away from your wing in a second or two. At {{vspeed.approach}}, that is a big slice of your stall margin. Carry extra speed to cover it, but not so much that you float.

As a rule of thumb, **add half the gust factor** to your normal approach speed. The gust factor is the gust minus the steady wind.

| Reported wind        | Gust factor | Additive | Final approach speed    |
| -------------------- | ----------- | -------- | ----------------------- |
| 290 at 12            | 0 kt        | +0 kt    | {{vspeed.approach}}     |
| 290 at 12 gusting 20 | 8 kt        | +4 kt    | {{vspeed.approach}} + 4 |
| 290 at 15 gusting 25 | 10 kt       | +5 kt    | {{vspeed.approach}} + 5 |

Keep the extra speed to the round-out, then let it bleed off in the flare. Expect to float a little longer than usual while the extra speed bleeds off. Half the gust factor is the Airplane Flying Handbook's figure. For a short-field landing it is also the most the handbook allows. The Skyhawk's own handbook says only that approach speeds should be "slightly higher" in turbulent air.

:::quiz{id="l10-1-q1" type="numeric" answer="4" tolerance="0" unit="kt"}
The wind is reported as 12 knots gusting 20. How many knots do you add to your final approach speed?

---

Gust factor 20 − 12 = 8 kt. Half of that is 4 kt, so you fly final at {{vspeed.approach}} plus 4.
:::

## Wind shear near the ground

Wind shear is a sudden change in wind speed or direction over a short distance. Near the ground it comes from gust fronts, thunderstorm outflow, strong wind spilling over hills and hangars, and from a strong wind aloft slowing in the last few hundred feet.

On final, the airspeed jumps or drops 10 kt with no change in pitch or power. The airplane sinks hard or balloons, or the drift reverses. A sudden loss of headwind is the dangerous case. Airspeed drops, lift drops, and you sink toward the ground short of the runway.

If you meet wind shear on final, **go around**. Full power, pitch for {{vspeed.goAround}}, flaps to 20°, climb away and think about it at pattern altitude. In wind shear, the go-around is the correct decision.

:::callout{type="safety"}
Landing accidents are the biggest group of pilot-caused accidents in light airplanes, and loss of control on the runway leads that group. A gusty crosswind is the usual cause. Most of these accidents are small events: a drift at touchdown, a side load on the gear, a swerve toward the grass. The defenses are the right speed, the right technique and a go-around decided early.
:::

:::callout{type="verify"}
Sim check: confirm MSFS 2024 can produce gusts and low-level shear in the custom weather menu (wind layers with a gust setting) and name the controls here. (Desk-verified 2026-10-13: wind shear material is AIM 7-1-24 microbursts, 7-1-22 wind shear PIREPs and 4-3-7 LLWAS; the accident claim follows the AOPA ASI McSpadden Report, where loss of control on the ground is the leading landing-accident category.)
:::

:::quiz{id="l10-1-q2" type="single"}
On short final the airspeed suddenly drops 10 knots and the airplane sinks, with no change in pitch or power. What do you do?

- [ ] Lower the nose to regain the speed and continue
- [ ] Add a little power and hold the glide path
- [x] Full power and go around
- [ ] Add full flaps to stop the sink

---

That is wind shear. Add full power and go around. Trying to rescue the approach with small corrections near the ground is how shear accidents happen.
:::

## Maximum demonstrated crosswind is not a limit

The Skyhawk's handbook gives a **maximum demonstrated crosswind** of {{aircraft.maxCrosswind}}. The word to notice is _demonstrated_. It means a test pilot landed the airplane in that crosswind during certification and found it controllable. It is not a limitation, and the airplane does not become uncontrollable at 16 kt.

But you are not a test pilot on a test day. For a new pilot the demonstrated figure is a sensible **personal limit** to grow toward, and many instructors set a lower one, such as 10 kt, for early solo flights. The idea comes from [[l8-1-decision-making-and-personal-minimums]]. You write the number down on a calm day so you do not have to invent one on a windy one.

| Your experience                                  | Suggested personal crosswind limit          |
| ------------------------------------------------ | ------------------------------------------- |
| First crosswind landings in this course          | 8 kt                                        |
| Comfortable at 8 kt, no drift at touchdown       | 12 kt                                       |
| Several clean landings at 12 kt, including gusts | 15 kt (the demonstrated figure)             |
| Beyond the demonstrated figure                   | Only with an instructor, in a real airplane |

Raise your limit the way Challenge C10.1 "Crosswind mastery pack" raises it: one step at a time, after clean landings at the step below.

:::callout{type="decision"}
The ATIS reports 290 at 15 gusting 25 and your personal limit is 12 kt. The gust crosswind on Runway 25R works out at about 14 kt. Make this decision on the ground or at pattern altitude, before you reach final. **Crosswind above your limit? Pick another runway, or divert.** Flying to an airport with a runway that faces the wind is good airmanship.
:::

## Choosing the runway and the airport

Now put numbers on it. The crosswind component is the part of the wind that blows across the runway:

> **Crosswind = wind speed × sin(angle between the wind and the runway)**
>
> **Headwind = wind speed × cos(angle)**

A rough table does the job in the cockpit:

| Angle off the runway | Crosswind (fraction of the wind) | Headwind (fraction of the wind) |
| -------------------- | -------------------------------- | ------------------------------- |
| 30°                  | 0.5                              | 0.87                            |
| 45°                  | 0.7                              | 0.7                             |
| 60°                  | 0.87                             | 0.5                             |
| 90°                  | 1.0                              | 0                               |

For gusts, compute the component twice: once with the steady wind and once with the gust. The gust number is the one you compare against your limit. For wind 290 at 12 gusting 20 on Runway 25R, the wind is about 35° off, so call the crosswind 0.6 of the wind. That gives a steady crosswind of about 7 kt and a gust crosswind of about 12 kt.

Try the widget with a real wind. Enter the runway heading and the reported wind, then try the other runway end and the other airports in the region. At Livermore the only choice is 7 or 25. At Tracy the crossing runways (8/26 and 12/30) give you four directions to pick from.

::widget{name="crosswind" mode="explore"}

:::quiz{id="l10-1-q3" type="numeric" answer="14" tolerance="2" unit="kt"}
You are landing on Runway 25 (heading 250). The wind is 310 at 16. What is the crosswind component?

---

The wind is 60° off the runway. 16 × sin 60° ≈ 16 × 0.87 ≈ 14 kt. The headwind is only about 8 kt.
:::

## Controls on the rollout and taxi

The landing is not over at touchdown. As the airplane slows, the controls lose authority but the wind does not, so you need more aileron into the wind as you decelerate, until the yoke is fully over by taxi speed. Keep the nose straight with rudder.

On the taxiway, position the controls for the wind:

| Wind relative to the airplane | Aileron                                                | Elevator            | Memory aid   |
| ----------------------------- | ------------------------------------------------------ | ------------------- | ------------ |
| Quartering headwind           | Turn the yoke into the wind (upwind aileron up)        | Neutral             | "Climb into" |
| Quartering tailwind           | Turn the yoke away from the wind (upwind aileron down) | Forward (nose down) | "Dive away"  |

:::callout{type="sim"}
MSFS 2024 models gusts, but its ground handling in gusts is forgiving compared with a real Skyhawk. You get no seat-of-the-pants cue when a gust lifts a wing, and the tires grip well. Fly the rollout as you would in a real airplane, with the aileron fully into the wind by taxi speed, every time. You are practicing the habit for the real thing.
:::

:::quiz{id="l10-1-q4" type="single"}
You have just touched down with a crosswind from the right. During the rollout, what do you do with the ailerons?

- [ ] Center them as soon as the nose wheel is down
- [x] Keep turning the yoke to the right, adding more as the airplane slows
- [ ] Turn the yoke to the left to level the wings
- [ ] Hold them wherever they were at touchdown

---

Add more aileron into the wind as you slow down. The ailerons lose authority as the airplane slows, but the wind stays the same.
:::

## Practice and next steps

To carry forward:

1. Gust additive: add half the gust factor to {{vspeed.approach}}.
2. Crosswind = wind × sin(angle). Compute it with the gust speed and compare it against your personal limit.
3. Over your limit: another runway or another airport, decided early.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck (the gust additive, the demonstrated crosswind figure and the crosswind table).

**Fly it.** Challenge C10.1 "Crosswind mastery pack" lands you in four crosswinds, from 8 kt to 15 gusting 22, with auto-rudder off. Pass each one before the next. First, though, learn the slip properly in [[l10-2-slips]].
