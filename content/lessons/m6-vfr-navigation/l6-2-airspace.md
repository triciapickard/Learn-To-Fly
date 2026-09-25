---
slug: l6-2-airspace
code: L6.2
module: m6-vfr-navigation
order: 2
priority: P0
title: Airspace
summary: Classes B, C, D, E and G — how to spot them on a chart, what you need to enter each, and how to plan around them.
estimatedMinutes: 25
prerequisites: [l6-1-reading-a-sectional-chart]
objectives:
  - Identify Class B, C, D, E and G airspace on a sectional and a TAC.
  - State what you need to enter each class.
  - Plan an altitude that stays clear of Class B shelves.
challenges: []
resources: [phak-ch15, aim-3, faa-sf-tac, ecfr-91-155]
published: false
lastVerifiedAt: null
simVersion: null
---

## Why airspace exists

Airspace separates different kinds of traffic. Around big airports, airliners fly fast approaches and departures, so air traffic control needs to know who is there. Out in the countryside, pilots mostly look after themselves.

The busier the airspace, the more you need before you go in: a clearance, radio contact, or nothing at all.

## The classes

| Class | On the chart                                           | Typical limits                 | What you need to enter (VFR) | Bay Area example               |
| ----- | ------------------------------------------------------ | ------------------------------ | ---------------------------- | ------------------------------ |
| A     | Not shown on sectionals                                | 18,000 ft MSL and above        | IFR only                     | Overhead everything            |
| B     | Solid blue lines, with shelves like 100/SFC            | Surface to about 10,000 ft     | An **explicit clearance**    | San Francisco (SFO)            |
| C     | Solid magenta lines, a core and an outer shelf         | Surface to about 4,000 ft AGL  | **Two-way radio contact**    | Oakland (OAK), San Jose (SJC)  |
| D     | Dashed blue lines, with the ceiling in brackets ([25]) | Surface to about 2,500 ft AGL  | **Two-way radio contact**    | Livermore, Palo Alto, Hayward  |
| E     | Faded magenta or blue shading, or dashed magenta lines | Starts at 700 or 1,200 ft AGL  | Nothing                      | Around Tracy and Half Moon Bay |
| G     | Below Class E                                          | Surface to 700 or 1,200 ft AGL | Nothing                      | Near the ground at Tracy       |

- **Class B** needs you to hear the words "**cleared into the Class Bravo airspace**". Being told to "remain clear" or "stand by" is not a clearance.
- **Class C and D** need **two-way radio communication**: the controller has to answer you using your call sign.

:::quiz{id="l6-2-q1" type="single"}
What do you need to enter Class B airspace?

- [ ] Nothing
- [ ] Two-way radio communication
- [x] An explicit ATC clearance
- [ ] A flight plan

---

An **explicit clearance**: "cleared into the Class Bravo airspace". Radio contact alone isn't enough.
:::

:::quiz{id="l6-2-q2" type="single"}
What do you need to enter Class D airspace?

- [ ] An explicit clearance
- [x] Two-way radio communication
- [ ] A transponder only
- [ ] Nothing

---

**Two-way radio communication**, meaning the controller has answered you with your call sign.
:::

## Explore the Bay Area

This cross-section runs from Half Moon Bay on the coast to Tracy in the Central Valley. Click a layer to see its floor, ceiling and entry requirement. Move the airplane along the route and change its altitude to see which airspace you'd be in.

::widget{name="airspace-profile" mode="explore"}

:::callout{type="verify"}
Author note: check the cross-section against the current San Francisco TAC. The data is marked unverified (D-19).
:::

## Reading Class B shelves

Class B looks like an **upside-down wedding cake**: small at the bottom, getting wider with height. Each shelf is labeled with its ceiling over its floor, in hundreds of feet MSL.

- **100/SFC**: from the surface up to 10,000 ft MSL.
- **80/30**: from 3,000 ft up to 8,000 ft MSL.

Under a shelf, you can fly below its floor without a clearance. That's how pilots fly into Palo Alto and San Carlos, under the San Francisco Class B.

:::quiz{id="l6-2-q3" type="single"}
A Class B shelf is labeled 50/30. What does it mean?

- [ ] Floor 5,000 ft, ceiling 3,000 ft
- [x] Floor 3,000 ft MSL, ceiling 5,000 ft MSL
- [ ] 50 nm wide, 30 nm long
- [ ] Speed limit 250 kt below 3,000 ft

---

The top number is the **ceiling** and the bottom number is the **floor**, in hundreds of feet MSL: from 3,000 ft to 5,000 ft.
:::

## VFR weather minimums

To fly VFR, you need a minimum visibility and distance from clouds. This is a simplified version of the rules below 10,000 ft MSL:

| Airspace                | Visibility | Distance from clouds                              |
| ----------------------- | ---------- | ------------------------------------------------- |
| Class B                 | 3 sm       | Clear of clouds                                   |
| Class C, D and E        | 3 sm       | 500 ft below, 1,000 ft above, 2,000 ft horizontal |
| Class G (day, low down) | 1 sm       | Clear of clouds                                   |

Class G has more exceptions than this table shows. For the full rules, read 14 CFR 91.155.

:::callout{type="verify"}
Author note: check this simplified table against the current text of 14 CFR 91.155.
:::

## Special use airspace

Charts also show **restricted areas**, **military operations areas** (MOAs) and other special airspace. **Temporary flight restrictions** (TFRs) aren't on the chart at all; real pilots check for them before every flight. This course doesn't go into them in depth, but know they exist.

## Practice

On the San Francisco TAC, trace a route from **Palo Alto (KPAO)** west over the hills to **Half Moon Bay (KHAF)**. Which airspace do you start in? How high can you climb before you reach the Class B? Where does the Class B end? You'll fly this route in Lesson 6.3's dead reckoning challenge.
