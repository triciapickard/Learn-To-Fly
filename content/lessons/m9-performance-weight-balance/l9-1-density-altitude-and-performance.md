---
slug: l9-1-density-altitude-and-performance
code: L9.1
module: m9-performance-weight-balance
order: 1
priority: P0
title: Density altitude and performance
summary: Why the same runway is "shorter" on a hot afternoon, and how to put a number on it before you take off.
estimatedMinutes: 20
prerequisites: [l8-2-preparing-for-your-checkride]
objectives:
  - Calculate pressure altitude and density altitude from field elevation, altimeter setting and temperature.
  - Explain how density altitude affects engine power, propeller thrust and lift.
  - Predict whether a takeoff will be longer or shorter than on a standard day.
challenges: []
resources: [phak-ch11, faa-pilot-safety-brochures]
published: false
lastVerifiedAt: null
simVersion: null
---

## The runway that shrinks in August

It is 3 p.m. on a hot August afternoon at Livermore. The ATIS says the temperature is 38 °C. You and a friend are loaded up with full fuel, and the airplane feels sluggish on the takeoff roll. The runway markers slide past slower than usual. You lift off well past the point where you normally do, and the climb is lazy.

Nothing is wrong with the airplane. The air is wrong, or rather, there is less of it. Hot air is thin air, and thin air hurts you three times over: the engine makes less power, the propeller has less to bite on, and the wing makes less lift at a given speed.

Pilots put a number on "how thin" with **density altitude**: the altitude in the standard atmosphere where the air would be this thin. On that August afternoon, Livermore (about 400 ft above sea level) performs like an airport at 3,400 ft. Every performance chart you will read in [[l9-2-reading-performance-charts]] is entered with density altitude or its two ingredients, so this lesson teaches you to compute it.

:::callout{type="safety"}
"High, hot and heavy" is a well-known accident pattern: a hot day, a high airport and a full airplane. Each factor alone is manageable. Together they can leave you unable to clear the trees at the end of the runway. The fix is always the same: do the numbers before you take off.
:::

## Pressure altitude: correcting for the altimeter setting

Density altitude is built in two steps. The first is **pressure altitude**: your altitude above the standard pressure level of 29.92 inHg.

On a standard day the altimeter setting is 29.92 and pressure altitude equals field elevation. When the pressure is lower, the air is thinner and pressure altitude is higher. A handy rule: each 0.01 inHg below 29.92 adds about 10 ft.

| Altimeter setting | Correction | Pressure altitude at a 400 ft airport |
| ----------------- | ---------- | ------------------------------------- |
| 30.12             | −200 ft    | 200 ft                                |
| 29.92             | 0 ft       | 400 ft                                |
| 29.82             | +100 ft    | 500 ft                                |
| 29.42             | +500 ft    | 900 ft                                |

The formula behind the table:

> **Pressure altitude = field elevation + (29.92 − altimeter setting) × 1,000**

The shortcut in the airplane: set 29.92 in the altimeter and read it. In the sim, you can do exactly that on the G1000 PFD with the BARO knob, then set the real altimeter setting back before you fly.

:::quiz{id="l9-1-q1" type="numeric" answer="900" tolerance="50" unit="ft"}
Field elevation is 400 ft and the altimeter setting is 29.42. What is the pressure altitude?

---

(29.92 − 29.42) × 1,000 = 500 ft, added to 400 ft gives 900 ft.
:::

## Density altitude: adding temperature

The second step corrects pressure altitude for temperature. The **standard atmosphere** (ISA) is 15 °C at sea level and cools by 2 °C for every 1,000 ft. At a pressure altitude of 500 ft, the standard temperature is 14 °C. If the real temperature is hotter than that, the air is thinner than standard and density altitude is higher.

> **Density altitude ≈ pressure altitude + 120 × (actual temperature − standard temperature)**

Work the August example:

| Step                  | Calculation                   | Result   |
| --------------------- | ----------------------------- | -------- |
| Pressure altitude     | 400 + (29.92 − 29.82) × 1,000 | 500 ft   |
| ISA temperature there | 15 − 2 × 0.5                  | 14 °C    |
| Temperature excess    | 38 − 14                       | 24 °C    |
| Density altitude      | 500 + 120 × 24                | 3,380 ft |

Livermore has become a 3,400 ft airport. Now flip it: a cold winter morning at 5 °C and 30.12 inHg gives a pressure altitude of 200 ft and a density altitude of about **−900 ft**. The same airplane leaps off the runway. Pilots love January and respect August.

:::callout{type="verify"}
Widget pending: W21 (Density Altitude Calculator) is embedded here once Phase 20 ships it: `::widget{name="density-altitude" mode="explore"}`. Until then the table above is the walkthrough. Desk-verified 2026-10-13: KLVK field elevation 400 ft (real-world AirNav 399.9 ft; `airports.yaml` 400 ft).
:::

:::quiz{id="l9-1-q2" type="numeric" answer="3400" tolerance="300" unit="ft"}
Livermore: field elevation about 400 ft, altimeter 29.82, temperature 38 °C. What is the density altitude?

---

Pressure altitude 500 ft, standard temperature 14 °C, excess 24 °C. 500 + 120 × 24 ≈ 3,400 ft.
:::

## What actually changes

Thin air changes four things you can feel from the cockpit:

- **Engine power.** The engine burns air and fuel. Less air means less power at full throttle. A normally aspirated engine like the Skyhawk's loses roughly 3% of its power for every 1,000 ft of density altitude.
- **Propeller thrust.** The propeller is a wing. Thin air gives it less to push against, so the same RPM makes less thrust.
- **Lift.** The wing needs a certain _number of air molecules per second_ to make the lift that holds you up. In thin air that takes a higher true airspeed.
- **True airspeed and groundspeed.** Your airspeed indicator measures air pressure, so it is fooled by thin air in exactly the same way the wing is. You rotate and approach at the **same indicated airspeed** as always, but the airplane is moving faster over the ground. Faster groundspeed means a longer takeoff roll and a longer landing roll.

Put together: a longer takeoff roll, a shallower climb, a longer landing roll and a worse go-around. The indicated speeds you learned in Course 1 do not change. The distances do.

:::quiz{id="l9-1-q3" type="single"}
Which of these increases density altitude?

- [x] Higher temperature
- [ ] Higher altimeter setting
- [ ] Lower field elevation
- [ ] Higher humidity, but only below freezing

---

Hotter air is thinner air. A higher altimeter setting (more pressure) and a lower elevation both make the air denser. Humidity does raise density altitude slightly at any temperature, but it is a small effect compared with heat.
:::

## Rules of thumb, and when to stop trusting them

Pilots carry a few shortcuts for density altitude:

| Rule of thumb                                                       | Use it for                                   |
| ------------------------------------------------------------------- | -------------------------------------------- |
| Each 0.01 inHg below 29.92 adds about 10 ft of pressure altitude    | Quick pressure altitude without a chart      |
| Each 1 °C above standard adds about 120 ft                          | Quick density altitude                       |
| Standard temperature drops 2 °C per 1,000 ft                        | Finding "standard" at your pressure altitude |
| Takeoff distance grows roughly 10% per 1,000 ft of density altitude | A feel for how bad it is, not a plan         |

These are fine for a sanity check. They are **not** a plan. Shortcuts drift as the numbers get big, and the performance chart in the next lesson already includes the real effect. Use the rule of thumb to catch a chart mistake, and use the chart to decide whether to go.

:::callout{type="decision"}
Would you take off? Livermore on that August afternoon, 3,400 ft density altitude, two people and full fuel, Runway 25R with about 5,200 ft available. The honest answer is "I don't know yet", because you have not read the chart. That is the right answer. The wrong answer is "it's a long runway, it'll be fine." Carry the question into [[l9-2-reading-performance-charts]].
:::

## Density altitude in the sim

MSFS 2024 computes air density from the weather you set, so density altitude is real in the sim. Two settings control it:

- **Temperature.** In custom weather, the surface temperature slider sets the OAT. Drag it to 38 °C and the Skyhawk will struggle just as the chart predicts.
- **Pressure.** The altimeter setting (shown as "pressure" or "QNH" in the weather panel) changes pressure altitude.

The weather presets used by Learn to Fly challenges already fix both, so a challenge brief that says "hot day" is reproducible: everyone flies the same thin air.

:::callout{type="sim"}
The sim's engine model loses power with altitude, but the exact loss may not match a real Lycoming. Our performance tables ([[l9-2-reading-performance-charts]]) come from flying the sim airplane, not from the real handbook, so they match what you will see in the sim. In a real airplane, use the real POH.
:::

:::callout{type="verify"}
Sim check: confirm the MSFS 2024 custom-weather menu path and the labels of the surface temperature and pressure (QNH) controls, and record the sim version. Screenshot for the shot list: "hot-day takeoff: runway remaining at lift-off (KLVK)".
:::

## Practice and next steps

Three things to carry forward:

1. Pressure altitude = elevation + (29.92 − altimeter) × 1,000.
2. Density altitude ≈ pressure altitude + 120 × (OAT − ISA temperature).
3. Indicated speeds stay the same; distances and the climb get worse.

**Practice.** This lesson feeds the `limits-and-speeds` flashcard deck: the two formulas, the ISA lapse rate and the 2 °C per 1,000 ft rule.

**Fly it.** Challenge C9.1 "Hot day at Livermore" asks you to compute the density altitude, predict the takeoff roll, then fly it and compare. It opens after [[l9-2-reading-performance-charts]].
