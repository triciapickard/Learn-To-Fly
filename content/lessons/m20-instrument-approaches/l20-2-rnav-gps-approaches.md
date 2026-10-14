---
slug: l20-2-rnav-gps-approaches
code: L20.2
module: m20-instrument-approaches
order: 2
priority: P0
title: RNAV (GPS) approaches
summary: Load, check and fly an RNAV (GPS) approach on the G1000 NXi, from the annunciation check before the FAF to an LPV decision altitude.
estimatedMinutes: 30
prerequisites: [l20-1-anatomy-of-an-instrument-approach, l18-4-the-g1000-nxi-and-gfc-700-for-ifr]
objectives:
  - Load and activate an RNAV (GPS) approach on the G1000 with the correct transition.
  - Confirm the approach mode annunciation before the FAF and choose the matching line of minima.
  - Fly an LPV or LNAV/VNAV glidepath to DA, and an LNAV approach to MDA using a continuous descent.
challenges: []
resources: [aim-1-1, aim-5, iph-approaches, garmin-g1000-nxi-pilots-guide, faa-dtpp]
published: false
lastVerifiedAt: null
simVersion: null
---

## The approach that lives in the box

The RNAV (GPS) approach is the one you will fly most. It needs no ground station, it exists at small airports that never had an ILS, and with WAAS it can bring you down to minima that match an ILS. All of it comes from satellites and the receiver in your G1000, which is also why this lesson spends so much time on one question: _is the box in the mode you think it is?_

:::callout{type="real-world"}
In a real airplane, flying RNAV approaches requires a WAAS-certified GPS with a current database, a check of GPS NOTAMs and RAIM or WAAS availability before the flight, and an instrument rating. The sim gives you a receiver that always works and a database that may be years old. The procedures here teach the method; treat every number as practice, not reference.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## WAAS and the lines of minima

Plain GPS is accurate enough to steer you left and right, but not up and down. **WAAS** (the Wide Area Augmentation System) adds ground stations and a geostationary satellite that correct the GPS signal until it is good enough for vertical guidance. One RNAV (GPS) plate can carry up to four lines of minima, and the line you may use depends on what your receiver can do _today_.

| Line          | Guidance                            | Minimum | What it feels like                                                         |
| ------------- | ----------------------------------- | ------- | -------------------------------------------------------------------------- |
| **LPV**       | WAAS lateral + WAAS vertical        | DA      | Flies like an ILS: angular needles that get more sensitive near the runway |
| **LNAV/VNAV** | GPS lateral + WAAS or baro vertical | DA      | A glidepath to a DA, usually a little higher than LPV                      |
| **LNAV+V**    | GPS lateral + _advisory_ vertical   | MDA     | An LNAV approach with a helpful glidepath you may not trust below MDA      |
| **LNAV**      | GPS lateral only                    | MDA     | Non-precision: step-downs or a continuous descent to a level-off           |

LPV and LNAV/VNAV are **approaches with vertical guidance** (APV). They are flown to a DA exactly like an ILS. LNAV is non-precision and flown to an MDA. LNAV+V is not a line of minima at all; it is the G1000 drawing an advisory glidepath on an LNAV approach so your descent is smooth, and the minima are still the LNAV MDA. The temperature limit printed beside LNAV/VNAV minima on some plates applies to baro-VNAV equipment; a WAAS glidepath is not affected by temperature.

:::callout{type="verify"}
Sim check: desk-verified 2026-10-13 against AIM 5-4-5 and 1-1-18 and Garmin 190-02177-02 (Table 5-14): LPV and LNAV/VNAV are APV flown to a DA, LNAV+V is advisory and flown to the LNAV MDA, and the LNAV/VNAV temperature note applies to baro-VNAV. Still open: does the MSFS 2024 G1000 NXi ever annunciate L/VNAV, and which modes does it support? Record them in `aircraft.yaml → ifrCapabilities` (the key does not exist yet).
:::

:::quiz{id="l20-2-q1" type="single"}
Your G1000 annunciates LPV on the final approach. Which minimum do you fly to, and how?

- [x] The LPV DA; keep descending on the glidepath and decide at DA
- [ ] The LNAV MDA; level off and wait for the runway
- [ ] The LPV DA, but level off 100 ft above it
- [ ] Whichever is lower

---

LPV is an approach with vertical guidance, flown to a **decision altitude** on the glidepath. You decide at DA; you do not level off.
:::

## Loading and activating the approach

You built flight plans with approaches in [[l18-4-the-g1000-nxi-and-gfc-700-for-ifr]]. The habit for an RNAV approach is the same five steps, done before the briefing so the briefing can check them.

1. Press **PROC**, choose **Select Approach**, and pick the airport and the approach by its charted title, for example "RNAV 25R" for the RNAV (GPS) RWY 25R.
2. Choose the **transition**: an IAF by name if you will fly the full procedure, or **VECTORS** if approach control will turn you onto final.
3. **Load** it. The approach appears at the end of the flight plan, inactive, so you can brief it while still enroute.
4. When ATC clears you, or you reach the IAF, **activate** it. With vectors, use **Activate Vector-to-Final**; the extended final approach course becomes the active leg.
5. Check the **CDI** is on GPS (magenta) and the active leg on the HSI is the one you expect.

Loading early and activating late is deliberate. An activated approach changes the active leg, and the autopilot in NAV mode will follow it. Activate when you mean it.

:::callout{type="verify"}
Sim check: Garmin 190-02177-02 confirms the PROC window items "Select Approach", "Activate Approach" and "Activate Vector-to-Final", the Transition field with VECTORS, and the LOAD / ACTIVATE? prompt. Still open: confirm the Working Title NXi in MSFS 2024 uses the same wording, and take the shot-list screenshot "PROC page with RNAV 25R loaded, VECTORS transition (KLVK)".
:::

:::quiz{id="l20-2-q2" type="order"}
Put the approach setup in order.

1. Load the approach from the PROC key with the right transition
2. Brief the approach against the loaded procedure
3. Activate the approach when cleared or at the IAF
4. Confirm the CDI source is GPS and the active leg is correct

---

Load first so the briefing can check the box against the plate. Activate only when the clearance or the IAF makes it real, then confirm what the HSI is now showing you.
:::

## The annunciations to check before the FAF

This is the heart of the lesson. About 2 nm before the FAF the receiver decides what level of service it can provide and announces it on the HSI, next to the CDI. The CDI scaling changes at the same moment, from the terminal scale to the approach scale.

| Annunciation           | Meaning                                | Minimum you may use           |
| ---------------------- | -------------------------------------- | ----------------------------- |
| **LPV**                | WAAS vertical guidance available       | LPV DA                        |
| **L/VNAV**             | LNAV/VNAV vertical guidance available  | LNAV/VNAV DA                  |
| **LNAV+V**             | Lateral only, advisory glidepath shown | LNAV MDA                      |
| **LNAV**               | Lateral only                           | LNAV MDA                      |
| **TERM** still showing | The approach has not armed             | None: do not descend on final |

A **LOI** flag (loss of integrity) before the FAF means the same as TERM: do not descend on final. The rule: **the annunciation chooses the minima, not the plate.** If you briefed LPV and the box says LNAV, the approach just became an LNAV to the MDA. You must notice this _before_ the FAF, because after the FAF you are busy, and because a glidepath that quietly disappears will leave you level at the FAF altitude wondering why.

The check is a spoken callout at about 2 nm from the FAF: "LPV annunciated, LPV minima, DA 650." If the box says something else: "LNAV annunciated, LNAV minima, MDA 900." Challenge C20.1 scores this callout as a required item, so make it a habit now.

:::callout{type="verify"}
Sim check: the annunciation text (LPV, L/VNAV, LNAV+V, LNAV; TERM before the approach arms; LOI for lost integrity) and the switch to approach scaling within 2 nm of the FAF are desk-verified against Garmin 190-02177-02 (Tables 2-3 and 5-14) and AIM 1-1-17. Still open: whether MSFS 2024 models a WAAS or integrity loss at all, and the screenshot "HSI with LPV annunciation, 2 nm before the FAF".
:::

:::quiz{id="l20-2-q3" type="single"}
You briefed the LPV line (DA 650 ft). Two miles before the FAF the HSI annunciates LNAV. The plate's LNAV MDA is 900 ft. What do you do?

- [ ] Continue to DA 650 ft; the briefing stands
- [x] Call it out, switch to the LNAV MDA of 900 ft, and fly a non-precision approach
- [ ] Go missed now
- [ ] Reload the approach and hope for LPV

---

The annunciation chooses the minima. LNAV means lateral guidance only, so you fly to the **LNAV MDA** and level off. A missed approach is not required, but an unbriefed descent to 650 ft would be a serious error.
:::

## T-shaped approaches and the hold-in-lieu

Most RNAV approaches are drawn as a **T**. The stem of the T is the final approach course. The crossbar is two IAFs, one on each side, 90° from the final course and a few miles outside the IF. A third IAF often sits on the stem itself, on the extended final.

| You arrive from              | Start at                 | Then                                                            |
| ---------------------------- | ------------------------ | --------------------------------------------------------------- |
| The left or right side       | A crossbar IAF           | Fly to the IF, turn onto final; no course reversal ("NoPT")     |
| Straight ahead (along final) | The IF, marked as an IAF | Continue straight down the stem; no course reversal             |
| From behind the airport      | The stem IAF             | Fly the **hold-in-lieu of a procedure turn** once, then inbound |

The hold-in-lieu is a holding pattern printed at the IF or FAF that does the job of a procedure turn: it turns you around to face the runway. You enter it with the normal entry from [[l19-1-holding-patterns-entries-timing-and-wind]], fly one circuit, and continue inbound. If you arrive from a direction marked NoPT, you do not fly it, and the G1000 knows this: it only sequences the hold when the transition needs it. If you are cleared "straight in", the hold is skipped even when it would otherwise apply.

Vectors-to-final skip all of this. ATC puts you on the stem, inside the IF, and the T is just a picture.

:::callout{type="tip"}
The G1000 shows the hold-in-lieu as a racetrack on the map. If you expected a straight-in and the map shows a racetrack ahead, your transition is wrong. Fix it before the IAF, not in the hold.
:::

## Flying the glidepath

From the FAF the LPV approach is an ILS in everything but the radio. The vertical needle (the **glidepath** indicator, a magenta diamond on the G1000) comes alive above you, descends to center, and you follow it down. The needles are angular, so they get sharper as the runway nears; small corrections early, tiny ones late.

::widget{name="g1000-pfd" mode="explore"}

The Skyhawk's glidepath recipe at a 90 kt groundspeed is simple: the 3° path needs about 450 fpm (groundspeed × 5), and flaps 10 with roughly 1,700–1,800 RPM gives that at the approach speed of {{vspeed.approach}}. Set the attitude, set the power, trim, and then make corrections with power first: a little more power to shallow the descent, a little less to steepen it. If the needle starts to drift, fix the trend while it is still within half a dot.

| Groundspeed on final | Descent rate for a 3° glidepath |
| -------------------- | ------------------------------- |
| 80 kt                | 400 fpm                         |
| 90 kt                | 450 fpm                         |
| 100 kt               | 500 fpm                         |

Flown coupled, the GFC 700 does this for you: with the approach active and the CDI on GPS, press **APR**. The GP mode arms (white) and captures (green) as the glidepath comes down to you. Your job becomes monitoring, calling out each mode change, and disconnecting at or before DA to land by hand. Never let the autopilot fly through DA.

:::callout{type="verify"}
Widget pending: Widget W36 (HSI, CDI Scaling and ILS) is embedded here once Phase 21 ships it: `::widget{name="hsi-cdi-ils" mode="lpv"}`.
:::

:::callout{type="verify"}
Sim check: confirm the pitch-and-power numbers (flaps 10, 1,700–1,800 RPM, about 450 fpm at {{vspeed.approach}}) by flying the sim airplane and record them in `aircraft.yaml`. GP (not GS) arming on APR for a GPS approach is confirmed in Garmin 190-02177-02 (AFCS, Glidepath Mode); still open: that the sim's GFC 700 captures the glidepath from below and what its annunciator says.
:::

:::quiz{id="l20-2-q4" type="numeric" answer="450" tolerance="30" unit="fpm"}
Your groundspeed on final is 90 kt. What descent rate holds a 3° glidepath?

---

Groundspeed × 5: 90 × 5 = 450 fpm. Slower groundspeed, lower rate; a headwind on final makes the descent shallower, not steeper.
:::

## LNAV with CDFA and the advisory glidepath

When the box gives you only LNAV, the final segment ends at an MDA, and the old way to fly it was "dive and drive": descend quickly at each fix, level off, repeat. Learn to Fly teaches the **continuous descent final approach** (CDFA) instead: a steady 3° descent from the FAF, timed to reach the MDA at a point from which a normal landing is still possible, then a level-off at MDA if the runway is not in sight. It is one attitude and one power setting, just like an ILS, and it keeps the airplane stabilized.

The G1000's **LNAV+V** advisory glidepath is a gift for CDFA: it draws the 3° path for you. But it is _advisory_. It does not know about the step-down altitudes or the MDA, and following it below the MDA is descending below minima. The discipline is: fly the advisory glidepath down to the MDA, then **level off at MDA** and treat the diamond as decoration until the runway appears. Garmin's own guide warns that the autopilot will not level off at the MDA for you, even with the MDA set in the altitude preselect.

| Technique      | Descent profile                    | Pros                                            | Cons                                                     |
| -------------- | ---------------------------------- | ----------------------------------------------- | -------------------------------------------------------- |
| CDFA           | One steady 3° descent to MDA       | Stabilized; same picture as an ILS              | Must compute the rate and the level-off point            |
| Dive and drive | Steep descents, level at each step | Reaches MDA early; more time to spot the runway | Multiple configuration changes; easy to bust an altitude |

The numbers behind CDFA, and the step-down fixes that may interrupt it, are worked through in [[l20-4-vor-and-other-non-precision-approaches]].

:::callout{type="verify"}
Widget pending: Widget W39 (Descent and VDP Planner, P1) is embedded here once Phase 21 ships it: `::widget{name="descent-vdp" mode="cdfa"}`. Until then the table above carries the comparison.
:::

:::callout{type="verify"}
Sim check: does the Working Title NXi's LNAV+V advisory glidepath in MSFS 2024 respect step-down fixes? (That it continues below the MDA is confirmed by Garmin 190-02177-02, AFCS warning.)
:::

## Practice and next steps

Four things to carry forward:

1. LPV and LNAV/VNAV go to a DA; LNAV goes to an MDA; LNAV+V is LNAV with a hint.
2. Load early, activate when cleared, and set the transition the way you will really arrive.
3. Two miles before the FAF: read the annunciation aloud and set the minima it allows.
4. On an LNAV, fly a continuous descent to MDA and level off there, whatever the diamond says.

**Practice.** This lesson feeds the `approach-plate-symbols` deck (the four lines of minima and their guidance) and the `ifr-rules` deck (the annunciation rule).

**Fly it.** Challenge C20.1 "RNAV (GPS) approach" starts you on vectors to the KLVK "RNAV (GPS) RWY 25R" (not for navigation) with the weather at minimums, and scores the annunciation callout, the tracking and the decision at DA. Next: [[l20-3-ils-approaches]], where the needles come from a radio instead of a satellite.

:::callout{type="verify"}
Sim check: KLVK "RNAV (GPS) RWY 25R" (Amdt 2) is confirmed in d-TPP cycle 2610 (01–29 Oct 2026) with LPV, LNAV/VNAV, LNAV and circling lines; the plate notes "RADAR Required" and a baro-VNAV temperature limit. Still open: confirm the sim's nav database carries it with the same title and fixes (UHHUT, GAYNS, OYAHI, DRNAY, WHYEE).
:::
