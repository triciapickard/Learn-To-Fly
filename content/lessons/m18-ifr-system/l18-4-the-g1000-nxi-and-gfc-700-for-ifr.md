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
resources: [garmin-g1000-nxi-pilots-guide, ifh-glass]
published: false
lastVerifiedAt: null
simVersion: null
---

## The box flies the plan you give it

In [[l6-5-gps-navigation-with-the-g1000]] you learned Direct-To and a simple flight plan. IFR asks much more of the G1000: it must hold the whole clearance, fly a procedure's turns and altitudes, switch its needle sensitivity as you approach the runway, and tell the autopilot what to do next. Set up well, it does all that. Set up badly, it does something else, confidently, in cloud.

This lesson is about setting it up well, then watching it like a hawk.

:::callout{type="real-world"}
In a real airplane, an instructor sits beside you while you learn the avionics, and you practice the button pushes on a desktop trainer before the airplane ever moves. Garmin publishes a pilot's guide for the NXi that runs to hundreds of pages. This lesson covers the pages you need for Course 3; the pilot's guide is in "Go deeper" for the rest.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

:::callout{type="sim"}
The G1000 NXi in MSFS 2024 is a Working Title model of the real unit. It is close, but some menus, softkeys and autopilot behaviors differ from the Garmin manual, and they change with sim updates. Where this lesson says "press", the intent is right; the exact key may have moved.
:::

:::callout{type="verify"}
Author note: verify every key sequence in this lesson against the current MSFS 2024 Working Title G1000 NXi and record the sim version. Known differences to check: airway loading in the FPL page, the VTF behavior, automatic GPS-to-LOC CDI switching, GA mode behavior after a missed approach, and whether the yaw damper exists. Screenshot for the shot list: "G1000 FPL with a loaded approach; PROC menu; mode annunciator (armed/active)".
:::

## The flight plan for IFR

Your clearance ([[l18-3-clearances-and-departures]]) is a list of fixes and airways. The FPL page holds them in order, departure to destination. The NXi can load a whole airway as one entry, so you type the entry fix and the exit fix, not every intersection between.

| Step | Where                     | What you do                                                                                            |
| ---- | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1    | FPL page (MFD)            | Enter the departure airport, then each fix in the clearance, with the FMS knob and ENT as before       |
| 2    | FPL page, on a VOR or fix | Press MENU, choose "Load Airway", pick the airway and the exit fix; the NXi inserts every fix along it |
| 3    | FPL page                  | Enter the destination airport last                                                                     |
| 4    | FPL page                  | Read the plan against the clearance, fix by fix; look for a "discontinuity" line between legs          |
| 5    | PROC key                  | Load the departure (if any) and the expected approach (next section)                                   |
| 6    | FPL page                  | Check the total distance and ETE make sense against your fuel plan                                     |

A **discontinuity** is a gap: the NXi will fly to the fix before it, then give up. A plan with a discontinuity in cloud is a plan with a hole in it. Fix every one before engine start.

:::callout{type="verify"}
Verify the "Load Airway" menu path and the discontinuity display in the sim's NXi. In the sim, a flight plan filed on the world map is pushed into the G1000; confirm what happens to procedures loaded there and whether the learner should clear the plan and rebuild it (Challenge C18.2 assumes a rebuild from the clearance).
:::

## Loading procedures: the PROC key

Departures, arrivals and approaches are not typed in fix by fix. They come from the database through the **PROC** key, so the turns, altitudes and the missed approach arrive with them.

Loading the approach is the one you will do most:

1. Press **PROC**.
2. Choose **Select Approach**.
3. Pick the airport (usually filled in from the plan) and the approach by its charted name, for example "RNAV 25R" or "ILS 25R".
4. Pick a **transition**: an initial approach fix, or **VECTORS** if ATC will vector you to the final approach course.
5. Choose **Load** to add it to the end of the plan, or **Load and Activate** to fly it now.
6. Confirm the approach appears in the FPL page with its fixes, and that the CDI source is right (next section).

**Load** early, during the cruise, so the plan is ready. **Activate** only when ATC clears you for the approach or you are joining it. Activating too early can turn the airplane toward the first fix while you still owe ATC the enroute route.

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

PROC, Select Approach, the approach, the transition, Load, then check. Loading adds the procedure to the plan; activating makes it the active leg, so load early and activate when cleared.
:::

## Activating legs and vectors-to-final

The magenta leg on the map is the one the G1000 is flying. Two things change it on purpose:

- **Activate Leg.** On the FPL page, put the cursor on the fix you want, press MENU and choose "Activate Leg". The G1000 now navigates to that fix along the leg leading into it. Use it after ATC says "proceed direct" to a fix on the route, or when you joined the route mid-way.
- **Vectors-to-final (VTF).** Choosing VECTORS as the approach transition, or "Activate Vectors-to-Final" from the PROC menu, makes the final approach course the active leg, extended outward from the final approach fix. When ATC says "turn left heading 220, intercept the final approach course", you want this: the CDI shows the final approach course, and NAV or APR mode will capture it.

If you keep the full procedure active while being vectored, the G1000 may try to take you to an initial fix you were never going to see. If you activate VTF too early, the G1000 drops the earlier fixes. Both are recoverable, and both are the kind of surprise this lesson exists to prevent.

:::callout{type="verify"}
Verify Activate Leg and VTF behavior in the sim's NXi: whether VTF keeps the intermediate fixes (newer NXi software does) or drops them, and whether reactivating the full approach restores them. The learner-facing text must match what the sim actually does.
:::

## CDI source and scaling

The HSI needle follows whichever source the **CDI** softkey selects: **GPS** (magenta), **LOC1/VOR1** (green) or **VOR2**. IFR turns this from a convenience into a checklist item, because the autopilot's NAV and APR modes follow the same source. For an RNAV approach the source must be GPS. For an ILS it must be LOC1, tuned and identified. The NXi can switch from GPS to LOC by itself as you join an ILS; check that it did.

GPS does one more thing you need to know about. The needle's **full-scale** distance shrinks as you get closer to the runway, so the same half-dot means a smaller error on final than enroute:

| Phase           | Annunciation on the HSI | Full-scale deflection                              | When                                                 |
| --------------- | ----------------------- | -------------------------------------------------- | ---------------------------------------------------- |
| Enroute         | ENR                     | ±2.0 nm                                            | More than 30 nm from the destination                 |
| Terminal        | TERM                    | ±1.0 nm                                            | Within 30 nm of the departure or destination airport |
| Approach (LNAV) | LNAV or LNAV+V          | ±0.3 nm at the final approach fix                  | From about 2 nm before the FAF                       |
| Approach (LPV)  | LPV                     | Angular, like a localizer, narrowing to the runway | After the FAF, with a glidepath on the HSI           |

Fly the needle to the center in every phase and the scaling takes care of itself. The trap is the **transition**: as scaling tightens, a needle that was centered can drift toward a dot with no change in your heading. Expect it, and correct early.

:::callout{type="verify"}
CDI scaling values are from v2 Appendix F.6 and must be verified against the G1000 NXi pilot's guide (ENR, TERM, LNAV and LPV full-scale values and the distances at which they change). Confirm whether the sim's NXi auto-switches GPS to LOC on an ILS and whether a "MISSED APPR" scaling state exists. Widget W36 (HSI, CDI Scaling and ILS) is embedded here once Phase 21 ships it: `::widget{name="cdi-scaling" mode="explore"}`. Until then the table is the walkthrough.
:::

:::quiz{id="l18-4-q2" type="single"}
You are 20 nm from the destination with the HSI on GPS and the needle one dot right of center. Roughly how far are you from the course?

- [ ] 2.0 nm
- [x] About 0.4 nm
- [ ] 0.3 nm
- [ ] Impossible to say without an ILS

---

Within 30 nm the scaling is TERM, full scale ±1.0 nm. One dot on a five-dot scale is about 0.2 of full scale, so about 0.4 nm. Enroute the same dot would be 0.8 nm; on final it would be 0.12 nm or less.
:::

## The GFC 700: autopilot modes

The GFC 700 autopilot has two jobs, lateral (where the nose points) and vertical (what the altitude does), and one mode in each at a time. The **AP** key engages the servos; the **FD** key shows the command bars without them, so you hand-fly the same targets.

| Mode | Kind                 | What it does                                                               | Use it for                                  |
| ---- | -------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| HDG  | Lateral              | Flies the heading bug                                                      | Vectors                                     |
| NAV  | Lateral              | Follows the CDI source (GPS, VOR or localizer)                             | Airways, direct legs, a localizer intercept |
| APR  | Lateral and vertical | Follows the course and captures the glideslope or glidepath                | ILS and LPV final approach                  |
| ALT  | Vertical             | Holds the current altitude                                                 | Cruise, level segments                      |
| VS   | Vertical             | Holds a vertical speed you set with the NOSE UP/DN keys                    | Descents at a planned rate                  |
| FLC  | Vertical             | Holds an airspeed by pitching, climbing or descending at the power you set | Climbs at {{vspeed.vy}} or cruise climb     |
| VNV  | Vertical             | Flies the altitudes in the flight plan's descent profile                   | Enroute descents with VNAV constraints      |
| GA   | Both                 | Go-around: wings level, pitch up, flight director on, autopilot off        | The missed approach, first second           |

Every vertical mode uses the **altitude preselect**: set the cleared altitude, and ALT captures it. Forget to set it and FLC or VS will climb through the clearance. Set it first, every time.

The **mode annunciator** at the top of the PFD shows what the autopilot is doing. **Active** modes are shown in **green**; **armed** modes, waiting for a condition, are shown in **white**. "HDG" green with "GPS" white means: flying the heading bug now, will capture the GPS course when it gets there. The annunciator is the autopilot's only honest sentence; read it after every button press.

:::callout{type="verify"}
Verify the mode list and names in the sim's GFC 700 (and whether VNV and a yaw damper are modeled), the NOSE UP/DN key names, and the GA behavior (whether GA disconnects the autopilot in the sim). The active-green, armed-white convention is from the Garmin pilot's guide and must be confirmed on the sim's PFD; the knowledge check below depends on it.
:::

:::quiz{id="l18-4-q3" type="single"}
On the mode annunciator, armed modes are shown in which color?

- [ ] Green
- [x] White
- [ ] Magenta
- [ ] Amber

---

Active modes are green; armed modes, waiting for a capture, are white. Reading the annunciator after every button press is how you know what the autopilot will do next.
:::

## What's it doing now?

Every autopilot surprise has the same cause: the mode you think is engaged is not the mode in the annunciator. The common ones:

| What you see                             | Why                                                          | Fix                                                         |
| ---------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| AP on, airplane wandering in ROL and PIT | No lateral or vertical mode selected; these are the defaults | Select HDG or NAV, and ALT, VS or FLC                       |
| NAV armed but never captures             | CDI source is wrong, or the course is too far away           | Check the CDI softkey; intercept at a sensible angle in HDG |
| Airplane climbs through the clearance    | Altitude preselect not set                                   | Set the preselect before engaging a vertical mode           |
| No glideslope capture on the ILS         | NAV instead of APR, or above the glideslope                  | Arm APR below the glideslope, before the final approach fix |
| Turn toward a fix you did not expect     | Full procedure active while being vectored                   | Activate vectors-to-final, or HDG mode until cleared        |
| Autopilot quietly off                    | GA pressed, or trim or servo disconnect                      | Check the annunciator; re-engage when stable                |

The habit that beats all of them: press a button, look at the annunciator, say what it shows out loud. "HDG, ALT, GPS armed." If the words do not match the plan, fix it before the airplane shows you the difference.

## The before-approach setup

Ten minutes before descent, with the approach briefed from the plate ([[l18-2-ifr-charts-and-the-approach-plate]]), set the airplane up. This list is the shape of Challenge C18.2 "Program the box":

| Item                   | Set to                                                                      |
| ---------------------- | --------------------------------------------------------------------------- |
| Approach               | Loaded, correct transition, no discontinuity                                |
| NAV frequencies        | Localizer or VOR tuned in NAV1 and identified, if used                      |
| CDI source             | GPS for RNAV; LOC1 for ILS (or confirmed auto-switch)                       |
| Altitude preselect     | The next cleared altitude                                                   |
| Heading bug            | The current heading, so HDG mode does nothing surprising                    |
| Minimums               | DA or MDA entered in the PFD's minimums field                               |
| Missed approach        | First heading and altitude reviewed out loud                                |
| Timer                  | Reset, for a timed non-precision approach                                   |
| Standby frequencies    | Tower or CTAF in COM standby                                                |
| Fuel and the alternate | Rechecked against [[l18-1-ifr-rules-minimums-currency-alternates-and-fuel]] |

:::callout{type="verify"}
Verify the PFD minimums field (BARO MIN) softkey path and the timer location in the sim's NXi. Align this table with the 14 items in Challenge C18.2 once the challenge YAML is written.
:::

## Practice and next steps

Three things to carry forward: load early, activate when cleared; the CDI source must match the approach; and the annunciator, not your memory, says what the autopilot is doing.

**Practice.** This lesson has no flashcard deck of its own; the CDI scaling table and the autopilot modes table are worth a card each in the `ifr-rules` deck once it is built.

**Fly it.** Challenge C18.2 "Program the box" sets up the G1000 for an IFR flight before engine start, against the clock.

**Next.** [[l18-5-enroute-ifr-and-lost-communications]] takes the plan into the air: airways, altitudes, the reports ATC expects, and what to do when the radio goes quiet.
