---
slug: l6-3-pilotage-and-dead-reckoning
code: L6.3
module: m6-vfr-navigation
order: 3
priority: P0
title: Pilotage and dead reckoning
summary: Navigate by landmarks and by calculation — true course, wind correction, magnetic heading, groundspeed and time.
estimatedMinutes: 30
prerequisites: [l6-2-airspace]
objectives:
  - Choose checkpoints and fly a route by pilotage.
  - Work out the true course, wind correction angle, magnetic heading, groundspeed and time en route.
  - Correct for drift using the 1-in-60 rule.
challenges: [c6-2-pilotage-to-tracy, c6-3-dead-reckoning-to-half-moon-bay]
resources: [phak-ch16, skyvector]
published: false
lastVerifiedAt: null
simVersion: null
---

## Pilotage

**Pilotage** means navigating by looking at landmarks and matching them to the chart.

1. Choose checkpoints that are **big, unique and easy to see**, about every **5–10 nm**.
2. **Chart to ground, then ground to chart.** Find the next checkpoint on the chart, look for it outside, and when you think you've found it, check the chart again for something nearby that confirms it.
3. **Hold your heading** precisely between checkpoints.
4. **Note the time** at each checkpoint, so you know whether you're early or late.

## Dead reckoning

**Dead reckoning** means navigating by calculation: you work out a heading and a time, then fly them. Pilots combine both methods, using dead reckoning to point the airplane and pilotage to check it.

The steps:

1. **True course (TC).** Measure the direction of your line on the chart, from true north, with a plotter or on SkyVector.
2. **Wind correction angle (WCA).** Turn into the wind so it doesn't blow you off course.
3. **True heading (TH)** = TC ± WCA.
4. **Magnetic heading (MH)** = TH ± variation.
5. **Groundspeed (GS)**, your speed over the ground after the wind.
6. **Time** = distance ÷ groundspeed. **Fuel** = time × fuel burn.

## The wind triangle

Drag the wind arrow and change the course. Watch how much you have to turn into the wind, and how the groundspeed changes.

::widget{name="wind-triangle"}

A **headwind** slows you down, a **tailwind** speeds you up, and a **crosswind** means you have to point the nose into the wind to hold your course.

## True to magnetic

Charts are drawn to **true** north, but your compass points to **magnetic** north. The difference is the **variation**, shown by the isogonic lines. Remember:

> **East is least, West is best.**

Subtract easterly variation; add westerly variation. In the Bay Area the variation is about **13° east**, so subtract 13°.

:::callout{type="verify"}
Author note: read the isogonic line on the current San Francisco sectional and update the 13° figure if it has changed.
:::

The compass itself has small errors, called **deviation**, listed on a card in the cockpit. The sim models little or none, so we'll ignore it here.

:::quiz{id="l6-3-q1" type="numeric" answer="72" tolerance="0" unit="°"}
True course 090, wind correction angle −5°, variation 13° east. What's the magnetic heading?

---

TH = 090 − 5 = **085**. MH = 085 − 13 (east is least) = **072**.
:::

:::quiz{id="l6-3-q2" type="numeric" answer="12" tolerance="0" unit="minutes"}
You have 20 nm to fly at a groundspeed of 100 kt. How many minutes will it take?

---

20 ÷ 100 = 0.2 hours = **12 minutes**.
:::

## The 1-in-60 rule

If you're **1 nm off course after flying 60 nm**, your heading is **1° off**. Scale it for any distance:

> Degrees off = nm off course × 60 ÷ distance flown

To correct, turn back toward your course by that many degrees to stop drifting. Turn about **twice** that many to get back on course, then take half of it off when you're back.

:::quiz{id="l6-3-q3" type="numeric" answer="4" tolerance="0" unit="°"}
After 30 nm, you're 2 nm off course. How many degrees off is your heading?

---

2 × 60 ÷ 30 = **4°**.
:::

## Worked example: Livermore to Tracy

The wind at 3,000 ft is **270° at 15 kt**, and we'll cruise at **110 KTAS**.

| Step             | Value                                    |
| ---------------- | ---------------------------------------- |
| True course      | 091° (measured on the chart)             |
| Distance         | 18 nm                                    |
| Wind             | 270° at 15 kt, almost directly behind us |
| WCA              | 0°                                       |
| True heading     | 091°                                     |
| Variation        | 13° E, so subtract                       |
| Magnetic heading | 078°                                     |
| Groundspeed      | 125 kt                                   |
| Time en route    | About 9 minutes                          |
| Fuel (at 10 GPH) | About 1.5 gal                            |

Checkpoints by pilotage: Interstate 580, the **Altamont Pass** wind farms, then the town of **Tracy**, with the airport just south-west of it.

:::callout{type="verify"}
Author note: measure the course and distance on SkyVector and check that the checkpoints are charted and visible in the sim.
:::

On the way back, the same wind is a headwind: the groundspeed drops to about 95 kt, and the trip takes 11 minutes.
