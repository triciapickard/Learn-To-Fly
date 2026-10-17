---
slug: l1-2-the-cockpit-g1000-pfd-and-mfd
code: L1.2
module: m1-meet-the-skyhawk
order: 2
priority: P0
title: 'The cockpit: G1000 PFD and MFD'
summary: Find everything on the G1000's two screens, and see where each classic six-pack instrument lives on the glass.
estimatedMinutes: 20
prerequisites: [l1-1-the-airframe-and-flight-controls]
objectives:
  - Locate airspeed, attitude, altitude, vertical speed, heading and turn information on the PFD.
  - Identify the MFD's map, engine indication system (EIS) strip and softkeys.
  - Relate each PFD element to its classic six-pack equivalent.
challenges: []
resources: [ifh-glass, phak-ch8]
published: true
lastVerifiedAt: 2026-10-15
simVersion: 'MSFS 2024 (1.8.16.0)'
---

## Two screens

The G1000 NXi has two large displays:

- The **Primary Flight Display (PFD)**, in front of you on the left. It shows what you need to fly the airplane: attitude, speed, altitude, heading.
- The **Multi-Function Display (MFD)**, in the middle of the panel. It shows the moving map, the engine instruments and pages for flight planning.

The two screens are almost identical units. If one fails, the other can show the information you need to fly (called **reversionary mode**).

## A tour of the PFD

Hover over or tap each part of the PFD below, or press **Start tour** to step through them all. Each card tells you what it shows, which classic instrument it replaces and a tip.

::widget{name="g1000-pfd" mode="explore"}

The items you'll look at most:

1. **Attitude indicator.** The blue and brown background with the yellow airplane symbol. It shows pitch and bank.
2. **Airspeed tape** on the left, with colored speed bands (you will learn what they mean in Lesson 1.4).
3. **Altitude tape** on the right, with the **altimeter setting (BARO)** below it.
4. **Vertical speed** just right of the altitude tape.
5. **The HSI** at the bottom: heading, heading bug and course needle.
6. **Turn rate and slip/skid.** The magenta trend line above the HSI, and the small bar under the roll pointer at the top.

:::quiz{id="l1-2-q1" type="single"}
Where is the altimeter setting shown on the G1000 PFD?

- [ ] In the top bar, next to the COM frequencies
- [x] Below the altitude tape, in the BARO box
- [ ] Inside the HSI
- [ ] On the MFD only

---

The altimeter setting is in the BARO box below the altitude tape. You set it with the BARO knob. Your altitude is only correct when it's set to the local altimeter setting.
:::

## A tour of the MFD

In the sim the MFD shows OFF after a cold-and-dark start until you press the rightmost softkey (the up arrow) below it. Its main page is a **moving map**: your airplane, airports, airspace and your flight plan. Turn the **range knob** to zoom in and out.

Down the left edge is the **Engine Indication System (EIS)** strip. It shows:

- **RPM** (engine power, since the propeller is fixed pitch)
- **Fuel flow**, in gallons per hour (labelled FFLOW GPH)
- **Oil pressure** and **oil temperature**
- **EGT** (exhaust gas temperature, used when leaning) and **VAC** (vacuum)
- **Fuel quantity** in each tank (FUEL QTY GAL)
- **Engine hours** (ENG HRS)
- **Bus volts and battery amps** for the electrical system

The keys on the right bezel include **D→** (Direct-To), **FPL** (flight plan), **PROC** and **MENU**, and the **Nearest** softkey along the bottom lists the nearest airports. You'll learn them in Lesson 6.5.

:::quiz{id="l1-2-q2" type="single"}
What does the EIS strip on the MFD show?

- [ ] The moving map and airspace
- [x] Engine and fuel information
- [ ] The radio frequencies
- [ ] The flight plan

---

The Engine Indication System shows engine and fuel information: RPM, fuel flow, oil pressure and temperature, fuel quantity and electrical values.
:::

## Knobs and keys

The bezels around the screens hold the knobs you'll use most:

| Knob or key                            | What it does                                                  |
| -------------------------------------- | ------------------------------------------------------------- |
| NAV and COM knobs                      | Tune the standby frequency. The swap key makes it active.     |
| BARO (outer ring of the CRS/BARO knob) | Sets the altimeter setting.                                   |
| HDG                                    | Moves the cyan heading bug. Press it to sync to your heading. |
| CRS                                    | Sets the course on the HSI when you use a VOR.                |
| RANGE                                  | Zooms the map in and out.                                     |

:::callout{type="sim"}
In the sim, turning a knob uses the mouse wheel and pressing a knob (such as HDG to sync the heading bug) is a right-click. Press **Shift+1** to zoom in on the PFD so it's easy to read.
:::

## The classic six-pack on the glass

Older Skyhawks have six round instruments in two rows, the **six-pack**. Every one of them is on the PFD:

| Six-pack instrument | Where it is on the PFD                                   |
| ------------------- | -------------------------------------------------------- |
| Airspeed indicator  | Airspeed tape (left)                                     |
| Attitude indicator  | The sky and ground background in the middle              |
| Altimeter           | Altitude tape (right), with BARO below                   |
| Turn coordinator    | Turn rate trend line (airplane) and slip/skid bar (ball) |
| Heading indicator   | The HSI compass (bottom)                                 |
| Vertical speed      | The vertical speed scale (right edge)                    |

:::callout{type="classic"}
In the classic Skyhawk, the six-pack sits in two rows in front of you: airspeed, attitude and altimeter on top; turn coordinator, heading indicator and vertical speed below. The procedures are the same. Only the look is different.
:::

:::quiz{id="l1-2-q3" type="single"}
Which six-pack instrument does the PFD's slip/skid indicator replace?

- [ ] The heading indicator
- [ ] The vertical speed indicator
- [x] The turn coordinator's ball (inclinometer)
- [ ] The attitude indicator

---

The slip/skid bar under the roll pointer does the job of the ball in the turn coordinator. Step on the bar the same way you'd step on the ball.
:::

## Standby instruments and the compass

If the screens fail, you still have **standby instruments**: a small attitude indicator, airspeed indicator and altimeter. At the top center of the windshield is the **magnetic compass**, with a deviation card below it showing its small errors on each heading. It needs no electricity, so it is your last resort for heading.

:::callout{type="tip"}
Keep your eyes moving. Look outside, glance at the attitude, then airspeed, altitude and heading, and look outside again. Staring at any one number makes you miss the others.
:::

## Reading the screens in the sim

The PFD's text is small on a monitor. Use an **instrument close-up** camera view to read it, then snap back to your normal view for flying. Many pilots also zoom in slightly on their default view.
