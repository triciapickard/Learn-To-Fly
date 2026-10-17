---
slug: l18-4-the-g1000-nxi-and-gfc-700-for-ifr
code: L18.4
module: m18-ifr-system
order: 4
priority: P0
title: The G1000 NXi and GFC 700 for IFR
summary: Build an IFR flight plan with procedures, choose the right CDI source and scaling, and run the autopilot's modes without surprises.
estimatedMinutes: 30
prerequisites: [l6-5-gps-navigation-with-the-g1000]
objectives:
  - Build a G1000 flight plan with a departure, an airway and an approach, and activate the correct leg.
  - Select the CDI source and explain how GPS CDI scaling changes from enroute to approach.
  - Choose the autopilot mode for a climb, cruise, descent and approach, and read the mode annunciator.
challenges: []
resources: [ifh-glass]
published: false
lastVerifiedAt: null
simVersion: null
---

## What the G1000 does for IFR

In [[l6-5-gps-navigation-with-the-g1000]] you learned Direct-To and a simple flight plan. IFR asks more of the G1000: hold the whole clearance, fly a procedure's turns and altitudes, tighten its needle as you near the runway, and tell the autopilot what to do next. Set up correctly, it does all that. Set up wrong, it flies the wrong path in cloud with no warning.

This lesson shows you how to set it up correctly and then monitor it.

:::callout{type="real-world"}
In a real airplane, an instructor sits beside you while you learn the avionics, and you practice the button pushes on a desktop trainer before the airplane moves. Garmin's NXi pilot's guide runs to hundreds of pages. This lesson covers the pages you need for Course 3, and "Go deeper" has the rest.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

:::callout{type="sim"}
The G1000 NXi in MSFS 2024 is a Working Title model of the real unit. It is close, but some menus, softkeys and autopilot behaviors differ from the Garmin manual and change with sim updates. Where this lesson says "press", the action is right, but the exact key may have moved.
:::

:::callout{type="verify"}
Author decision: the spec lists L6.5 and L6.8 as prerequisites. L6.8 is not written, so `prerequisites` uses l6-5 only. Swap in l6-8 when it exists.
:::

:::callout{type="verify"}
Sim check: every key sequence in this lesson is desk-verified 2026-10-13 against the Garmin G1000 NXi Pilot's Guide for the Cessna Nav III (190-02177-00 Rev A). Fly each one in the current MSFS 2024 Working Title NXi and record the sim version. Known differences to check: airway loading in the FPL page, VTF behavior, automatic GPS-to-LOC CDI switching, GA behavior after a missed approach, and whether the yaw damper exists. Screenshot for the shot list: "G1000 FPL with a loaded approach; PROC menu; mode annunciator (armed/active)".
:::

## The flight plan for IFR

Your clearance ([[l18-3-clearances-and-departures]]) is a list of fixes and airways. The FPL page holds them in order, departure to destination. The NXi loads a whole airway as one entry. You type the entry and exit fixes, and it adds every intersection between them.

| Step | Where                     | What you do                                                                                                                                                                                       |
| ---- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | FPL page (MFD)            | Enter the departure airport, then each fix in the clearance, with the FMS knob and ENT as before                                                                                                  |
| 2    | FPL page, on a VOR or fix | With the cursor on the fix after the airway's entry point, press the LD AIRWY softkey (MFD) or MENU and "Load Airway" (PFD), pick the airway and the exit fix. The NXi inserts every fix along it |
| 3    | FPL page                  | Enter the destination airport last                                                                                                                                                                |
| 4    | FPL page                  | Read the plan against the clearance, fix by fix. Look for a "discontinuity" line between legs                                                                                                     |
| 5    | PROC key                  | Load the departure (if any) and the expected approach (next section)                                                                                                                              |
| 6    | FPL page                  | Check the total distance and ETE make sense against your fuel plan                                                                                                                                |

A **discontinuity** is a gap in the plan. The NXi flies to the fix before it, then has no next leg to fly. Fix every one before engine start.

:::callout{type="verify"}
Sim check: confirm how the Working Title NXi shows a gap between legs (the Garmin guide does not use the word "discontinuity") and the airway path above (desk-verified 2026-10-13 against the Garmin NXi Pilot's Guide: LD AIRWY softkey on the MFD, MENU and "Load Airway" on the PFD). In the sim, a flight plan filed on the world map is pushed into the G1000; confirm what happens to procedures loaded there and whether the learner should clear the plan and rebuild it (Challenge C18.2 assumes a rebuild from the clearance).
:::

## Loading procedures: the PROC key

You do not type departures, arrivals and approaches fix by fix. You load them from the database with the **PROC** key, so the turns, altitudes and missed approach come with them. You will load approaches most often:

1. Press **PROC**.
2. Choose **Select Approach**.
3. Pick the airport (usually filled in from the plan) and the approach by its charted name, for example "RNAV 25R" or "ILS 25R".
4. Pick a **transition**: an initial approach fix, or **VECTORS** if ATC will vector you to the final approach course.
5. Choose **Load** to add it to the end of the plan, or **Load and Activate** to fly it now.
6. Confirm the approach appears in the FPL page with its fixes, and that the CDI source is right (next section).

**Load** early, in the cruise, so the plan is ready. **Activate** only when ATC clears you for the approach. Activating too early can turn the airplane toward the first fix while you still owe ATC the enroute route.

::widget{name="g1000-pfd" mode="explore"}

:::quiz{id="l18-4-q1" type="order"}
Put the steps for loading an approach in order.

1. Press PROC
2. Choose Select Approach
3. Pick the approach by its charted name
4. Pick a transition or VECTORS
5. Choose Load (or Load and Activate)
6. Confirm the approach in the FPL page and check the CDI source

---

PROC, Select Approach, the approach, the transition, Load, then check. Loading adds the procedure to the plan. Activating makes it the active leg, so load early and activate when cleared.
:::

## Activating legs and vectors-to-final

The magenta leg on the map is the one the G1000 is flying. To change it on purpose, use one of these:

- **Activate Leg.** On the FPL page, put the cursor on the fix you want, press MENU and choose "Activate Leg". The G1000 now navigates to that fix along the leg leading into it. Use it after ATC says "proceed direct" to a fix on the route, or when you joined the route mid-way.
- **Vectors-to-final (VTF).** Choosing VECTORS as the approach transition, or "Activate Vector-to-Final" from the PROC menu, makes the final approach course the active leg, extended outward from the final approach fix. When ATC says "turn left heading 220, intercept the final approach course", use VTF. The CDI shows the final approach course, and NAV or APR mode will capture it.

If you keep the full procedure active while ATC vectors you, the G1000 may try to take you to an initial fix you were never going to fly. If you activate VTF too early, it drops the earlier fixes. You can recover from both, but you avoid them by choosing the right one at the right time.

:::callout{type="verify"}
Sim check: whether VTF in the sim's NXi keeps the intermediate fixes (newer NXi software does) or drops them, and whether reactivating the full approach restores them. The learner-facing text must match what the sim does. Activate Leg (ACT LEG softkey or MENU, "Activate Leg") and "Activate Vector-to-Final" desk-verified 2026-10-13 against the Garmin NXi Pilot's Guide.
:::

## CDI source and scaling

The HSI needle follows whichever source the **CDI** softkey selects: GPS (magenta), LOC1/VOR1 (green) or VOR2. IFR makes this a checklist item, because the autopilot's NAV and APR modes follow the same source. For an RNAV approach the source must be GPS. For an ILS it must be LOC1, tuned and identified. The NXi can switch from GPS to LOC by itself as you join an ILS. Check that it did.

GPS does one more thing. The needle's **full-scale** distance shrinks as you near the runway, so the same half-dot means a smaller error on final than enroute:

| Phase           | Annunciation on the HSI | Full-scale deflection                                                      | When                                                                        |
| --------------- | ----------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Departure       | DPRT                    | ±0.3 nm                                                                    | While a loaded departure procedure is being flown                           |
| Terminal        | TERM                    | ±1.0 nm                                                                    | Within 30 nm of the departure airport, and within 31 nm of the destination  |
| Enroute         | ENR                     | ±2.0 nm                                                                    | Between those: more than 30 nm out and more than 31 nm from the destination |
| Approach (LNAV) | LNAV or LNAV+V          | Shrinks from ±1.0 nm to ±0.3 nm at the FAF, then tighter toward the runway | From 2 nm before the final approach fix                                     |
| Approach (LPV)  | LPV                     | Shrinks to an angle, like a localizer, narrowing to the runway             | From 2 nm before the FAF, with a glidepath on the HSI                       |
| Missed approach | MAPR                    | ±0.3 nm                                                                    | Once the missed approach is activated                                       |

Keep the needle centered in every phase and you do not need to track the scaling. Watch the change from one phase to the next. As scaling tightens, a centered needle can drift toward a dot with no change in heading. Expect it and correct early. The G1000 HSI shows two dots each side, so one dot is half of full scale.

:::callout{type="verify"}
Widget pending: Widget W36 (HSI, CDI Scaling and ILS) is embedded here once Phase 21 ships it: `::widget{name="cdi-scaling" mode="explore"}`. Until then the table is the walkthrough. Scaling values and distances desk-verified 2026-10-13 against the Garmin NXi Pilot's Guide (Table 2-2).
:::

:::callout{type="verify"}
Sim check: whether the Working Title NXi auto-switches the CDI from GPS to LOC on an ILS (the Garmin guide says it does when an ILS is loaded, the FAF is the active leg within 15 nm, the localizer is tuned and the GPS needle is within 1.2 times full scale) and whether it shows the MAPR scaling state.
:::

:::quiz{id="l18-4-q2" type="single"}
You are 20 nm from the destination with the HSI on GPS and the needle one dot right of center. Roughly how far are you from the course?

- [ ] 2.0 nm
- [x] About 0.5 nm
- [ ] 0.3 nm
- [ ] Impossible to say without an ILS

---

Within 31 nm the scaling is TERM, full scale ±1.0 nm. The G1000 HSI has two dots each side, so one dot is half of full scale, about 0.5 nm. Enroute the same dot would be 1.0 nm. At the final approach fix it would be 0.15 nm or less.
:::

## The GFC 700: autopilot modes

The GFC 700 controls two axes: lateral (where the nose points) and vertical (what the altitude does). It runs one mode on each axis at a time. **AP** engages the servos. **FD** shows the command bars without them, so you can hand-fly the same targets.

| Mode | Kind                 | What it does                                                                                | Use it for                                  |
| ---- | -------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------- |
| HDG  | Lateral              | Flies the heading bug                                                                       | Vectors                                     |
| NAV  | Lateral              | Follows the CDI source (GPS, VOR or localizer)                                              | Airways, direct legs, a localizer intercept |
| APR  | Lateral and vertical | Follows the course and captures the glideslope or glidepath                                 | ILS and LPV final approach                  |
| ALT  | Vertical             | Holds the current altitude                                                                  | Cruise, level segments                      |
| VS   | Vertical             | Holds a vertical speed you set with the NOSE UP/DN keys                                     | Descents at a planned rate                  |
| FLC  | Vertical             | Holds an airspeed by pitching, climbing or descending at the power you set                  | Climbs at {{vspeed.vy}} or cruise climb     |
| VNV  | Vertical             | Flies the altitudes in the flight plan's descent profile                                    | Enroute descents with VNAV constraints      |
| GA   | Both                 | Go-around: wings level, pitch up, flight director on, autopilot off, altitude capture armed | The missed approach, first second           |

Every vertical mode uses the **altitude preselect**. Set the cleared altitude there and ALT captures it. If you forget, FLC or VS will climb through the clearance. Set it first, every time.

The **mode annunciator** at the top of the PFD shows what the autopilot is doing. **Active** modes are green. **Armed** modes, waiting for a condition, are white. "HDG" green with "GPS" white means the autopilot is flying the heading bug now and will capture the GPS course when it reaches it. Read it after every button press.

:::callout{type="verify"}
Sim check: whether VNV and a yaw damper are modeled in the sim's GFC 700, whether GA disconnects the autopilot in the sim, and that the sim's PFD shows armed modes white and active modes green (the knowledge check below depends on it). Desk-verified 2026-10-13 against the Garmin NXi Pilot's Guide: mode names, NOSE UP/NOSE DN keys, GA disengaging the autopilot and arming altitude capture, and the white/green convention.
:::

:::quiz{id="l18-4-q3" type="single"}
On the mode annunciator, armed modes are shown in which color?

- [ ] Green
- [x] White
- [ ] Magenta
- [ ] Amber

---

Active modes are green. Armed modes, waiting for a capture, are white. Reading the annunciator after every button press is how you know what the autopilot will do next.
:::

## What's it doing now?

Autopilot surprises usually have the same cause. The mode you think is engaged is not the one in the annunciator. Here are the common ones:

| What you see                             | Why                                                          | Fix                                                         |
| ---------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| AP on, airplane wandering in ROL and PIT | No lateral or vertical mode selected. These are the defaults | Select HDG or NAV, and ALT, VS or FLC                       |
| NAV armed but never captures             | CDI source is wrong, or the course is too far away           | Check the CDI softkey. Intercept at a sensible angle in HDG |
| Airplane climbs through the clearance    | Altitude preselect not set                                   | Set the preselect before engaging a vertical mode           |
| No glideslope capture on the ILS         | NAV instead of APR, or above the glideslope                  | Arm APR below the glideslope, before the final approach fix |
| Turn toward a fix you did not expect     | Full procedure active while being vectored                   | Activate vectors-to-final, or HDG mode until cleared        |
| Autopilot off with no warning            | GA pressed, or trim or servo disconnect                      | Check the annunciator. Re-engage when stable                |

To avoid all of them, press a button, look at the annunciator and say the modes out loud: "HDG, ALT, GPS armed." If the words do not match the plan, fix it before the airplane flies the wrong path.

## The before-approach setup

Ten minutes before descent, with the approach briefed from the plate ([[l18-2-ifr-charts-and-the-approach-plate]]), set the airplane up. Challenge C18.2 "Program the box" follows this list:

| Item                   | Set to                                                                      |
| ---------------------- | --------------------------------------------------------------------------- |
| Approach               | Loaded, correct transition, no discontinuity                                |
| NAV frequencies        | Localizer or VOR tuned in NAV1 and identified, if used                      |
| CDI source             | GPS for RNAV; LOC1 for ILS (or confirmed auto-switch)                       |
| Altitude preselect     | The next cleared altitude                                                   |
| Heading bug            | The current heading, so HDG mode does nothing surprising                    |
| Minimums               | DA or MDA entered as BARO minimums in the PFD's Tmr/Ref window              |
| Missed approach        | First heading and altitude reviewed out loud                                |
| Timer                  | Reset in the same Tmr/Ref window, for a timed non-precision approach        |
| Standby frequencies    | Tower or CTAF in COM standby                                                |
| Fuel and the alternate | Rechecked against [[l18-1-ifr-rules-minimums-currency-alternates-and-fuel]] |

:::callout{type="verify"}
Sim check: confirm the Tmr/Ref softkey path (MINS field, BARO, altitude) and the timer in the sim's NXi. Desk-verified 2026-10-13 against the Garmin NXi Pilot's Guide. Author decision: align this table with the 14 items in Challenge C18.2 once the challenge YAML is written.
:::

## Practice and next steps

To carry forward: load early and activate when cleared; the CDI source must match the approach; and the annunciator, not your memory, tells you what the autopilot is doing.

**Practice.** This lesson has no flashcard deck of its own. The CDI scaling table and the autopilot modes table are worth a card each in the `ifr-rules` deck once it is built.

**Fly it.** Challenge C18.2 "Program the box" sets up the G1000 for an IFR flight before engine start, against the clock.

**Next.** [[l18-5-enroute-ifr-and-lost-communications]] takes the plan into the air: airways, altitudes, the reports ATC expects, and what to do when the radio goes quiet.
