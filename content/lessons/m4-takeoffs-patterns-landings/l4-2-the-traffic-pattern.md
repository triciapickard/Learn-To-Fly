---
slug: l4-2-the-traffic-pattern
code: L4.2
module: m4-takeoffs-patterns-landings
order: 2
priority: P0
title: The traffic pattern
summary: The rectangular circuit around every airport — the legs, speeds, configuration and how to join and leave it.
estimatedMinutes: 20
prerequisites: [l4-1-normal-takeoff-and-climb]
objectives:
  - Name the legs of the traffic pattern.
  - Fly a rectangular pattern at pattern altitude with correct speeds and configuration.
  - Enter the pattern correctly at a non-towered airport.
challenges: [c4-2-fly-the-pattern]
resources: [aim-4-3, afh-ch8, boldmethod-patterns]
published: false
lastVerifiedAt: null
simVersion: null
---

## Why patterns exist

Near an airport, airplanes are taking off, landing and arriving from every direction. The **traffic pattern** is a standard rectangle around the runway that everyone flies. It makes traffic predictable: you know where to look for other airplanes, and they know where to look for you.

## The legs

The pattern has five legs, named by the direction you fly relative to the landing runway:

1. **Departure (upwind).** Climbing straight out after takeoff.
2. **Crosswind.** A 90° turn, flying across the runway direction.
3. **Downwind.** Parallel to the runway, in the opposite direction to landing.
4. **Base.** A 90° turn toward the runway.
5. **Final.** Lined up with the runway, descending to land.

Play the animation below. Turn on the configuration and radio calls, change the wind to see the airplane crab on each leg, and switch between left and right traffic.

::widget{name="traffic-pattern" config="true"}

## Direction and altitude

- **Left turns** are standard. Every turn in the pattern is to the left, so the runway stays on your side of the airplane (you sit on the left). Some runways use **right traffic** instead; the sectional chart and the Chart Supplement show it as "RP" for that runway.
- **Pattern altitude** is typically **1,000 ft above the airport**. Livermore's field elevation is about 400 ft, so its pattern is around 1,400 ft MSL; check the Chart Supplement for each airport.

:::callout{type="verify"}
Author note: check the pattern altitude and traffic direction for each KLVK and KTCY runway in the current Chart Supplement, and add them to `airports.yaml`.
:::

:::quiz{id="l4-2-q1" type="single"}
What is the standard traffic pattern direction?

- [x] Left turns
- [ ] Right turns
- [ ] Whichever way the wind blows
- [ ] It depends on the time of day

---

**Left** turns are standard, unless the runway is marked for right traffic (RP).
:::

## Configuration and speed on each leg

These are starting points; adjust the power to hold the speed.

| Point in the pattern      | Power        | Flaps | Speed (KIAS) |
| ------------------------- | ------------ | ----- | ------------ |
| Downwind                  | ~2,000–2,100 | 0°    | 85–90        |
| Abeam the touchdown point | ~1,500       | 10°   | 80           |
| Base                      | ~1,500       | 20°   | 70           |
| Final                     | as needed    | 30°   | 65           |

Flaps have speed limits: 10° only below {{vspeed.vfe10}}, and more than 10° only below {{vspeed.vfe}}.

:::callout{type="verify"}
Author note: fly these settings in the sim at C4.2's weight and adjust (Section 8.5).
:::

## Key points

- **Abeam the numbers.** When the touchdown point is straight off your left wingtip on downwind, reduce power, set flaps 10 and start down.
- **Turn base** when the touchdown point is about **45° behind** the wing.
- **Turn final** so you roll out lined up with the runway without overshooting. If you do overshoot, correct gently. Don't steepen the bank near the ground.
- **Spacing.** On downwind, the runway should be about half to one mile away, just outside the wingtip.

:::quiz{id="l4-2-q2" type="single"}
On downwind, when do you reduce power to start the descent?

- [ ] At the start of downwind
- [x] Abeam the touchdown point (the numbers)
- [ ] After turning base
- [ ] On final

---

**Abeam the touchdown point.** It gives you a consistent starting point for every approach.
:::

:::callout{type="tip"}
At your home airport, pick a visual point on the ground for each turn: a road, a building or a field corner. Consistent turn points give consistent approaches.
:::

## Wind on each leg

A crosswind blows you sideways. On each leg, point the nose slightly **into the wind** (crab) so your path over the ground stays rectangular. In the animation, set a wind and watch the airplane's nose point off the ground track.

## Entering and leaving

At a **non-towered** airport, the standard entry is on a **45° angle to the downwind leg**, at pattern altitude, aiming to join about midfield. Leave by flying straight out or with a 45° turn after reaching pattern altitude.

:::quiz{id="l4-2-q3" type="single"}
What is the standard pattern entry at a non-towered airport?

- [ ] Straight in on final
- [x] On a 45° angle to the downwind leg, at pattern altitude
- [ ] Overhead the runway at 2,000 ft
- [ ] On the base leg

---

A **45° entry to downwind** at pattern altitude, joining about midfield. It lets you see traffic already in the pattern.
:::

## Where to look

The pattern is where airplanes are most concentrated. Keep looking outside, especially before each turn and on final (someone might be on a long straight-in approach). Turn on your landing light in the pattern so others can see you.
