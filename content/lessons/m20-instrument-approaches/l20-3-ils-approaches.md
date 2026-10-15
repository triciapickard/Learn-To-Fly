---
slug: l20-3-ils-approaches
code: L20.3
module: m20-instrument-approaches
order: 3
priority: P0
title: ILS approaches
summary: Tune, identify and set up an ILS, intercept the localizer and glideslope, and fly to decision altitude by hand and with the autopilot.
estimatedMinutes: 30
prerequisites: [l20-1-anatomy-of-an-instrument-approach]
objectives:
  - Tune, identify and set up an ILS, including switching the CDI source from GPS to LOC.
  - Intercept and track the localizer and glideslope with corrections sized to the needle sensitivity.
  - Fly the ILS to decision altitude hand-flown and coupled, and state what must be in sight to continue below DA.
challenges: []
resources: [iph-approaches, ifh-nav, ecfr-91-175, aim-1-1, faa-dtpp]
published: false
lastVerifiedAt: null
simVersion: null
---

## Two beams to the runway

The ILS is the oldest precision approach still in daily use, and it remains the standard every other approach is measured against. Two radio beams come up from the runway: the **localizer**, which tells you left or right of the centerline, and the **glideslope**, which tells you above or below a 3° path to the touchdown zone. Follow both needles to the center and you arrive 200 ft above the runway, lined up, on speed, with the lights in front of you. That is the plan, anyway. The craft is in how you follow the needles, and in what you do when the lights are not there.

:::callout{type="real-world"}
In a real airplane, an ILS to minimums is flown after dozens of practice approaches with an instructor, in an airplane whose receivers and the ground equipment are both checked and NOTAMed. Real ILS signals have false glideslopes, critical areas and interference that the sim does not model. Use this lesson to learn the geometry and the habits, not to judge what you could do in real cloud.
:::

:::callout{type="safety"}
Instrument procedures change every 28 days. Never use this content for real IFR flight.
:::

## Localizer and glideslope geometry

Both ILS needles are **angular**. The localizer course is a wedge about 5° wide in total, tailored so it is roughly 700 ft wide at the runway threshold. Full-scale deflection is about 2.5° either side of center. The glideslope wedge is far thinner: full scale is about 0.7° above or below the 3° path. Compare that with the VOR you learned in [[l6-4-vor-navigation]], where full scale was 10°: the localizer is four times more sensitive, and the glideslope about fourteen times.

| Signal               | Full-scale deflection | Width at 5 nm from the runway | Width at 1 nm   |
| -------------------- | --------------------- | ----------------------------- | --------------- |
| Localizer            | ±2.5°                 | About ±1,300 ft               | About ±270 ft   |
| Glideslope           | ±0.7°                 | About ±370 ft                 | About ±75 ft    |
| VOR (for comparison) | ±10°                  | About ±5,300 ft               | About ±1,100 ft |

Because the wedge narrows, the same error in feet is a bigger needle movement the closer you get. Being 1° off the localizer at 5 nm puts you about 530 ft from the centerline; the same 1° at 1 nm is only about 106 ft, yet the needle shows the same deflection. Turn that around and you have the rule for corrections: a half-dot error at 5 nm needs a 5° heading change; the same half dot at 1 nm needs 1–2°. Big corrections late in the approach produce the classic zig-zag down final.

::widget{name="vor-cdi" mode="explore"}

:::callout{type="verify"}
Widget pending: Widget W36 (HSI, CDI Scaling and ILS) is embedded here once Phase 21 ships it: `::widget{name="hsi-cdi-ils" mode="ils"}`, with its "where is the aircraft?" quiz. The vor-cdi widget above shows the angular principle at VOR sensitivity.
:::

:::quiz{id="l20-3-q1" type="single"}
The ILS localizer needle is far more sensitive near the runway than it is 5 miles out because…

- [ ] the transmitter power is higher near the runway
- [x] the course is angular, so it narrows as you approach the antenna
- [ ] the G1000 changes the CDI scale automatically at the FAF
- [ ] the glideslope and localizer share one needle near the runway

---

The localizer is a wedge. Full scale is the same _angle_ everywhere, so the same deflection means fewer feet as the wedge narrows toward the antenna at the far end of the runway.
:::

## Tune, identify, set up

The ILS setup is a short ritual, done during the approach briefing from [[l20-1-anatomy-of-an-instrument-approach]] so that each item on the plate is matched by an action in the cockpit.

1. **Tune** the localizer frequency from the briefing strip into NAV1 (standby, then flip-flop to active). The glideslope is paired to the same frequency; there is nothing separate to tune.
2. **Identify** it. A localizer identifier is four letters starting with I, sent in Morse: the Training Plate's is **I-LTF**. On the G1000, the decoded identifier appears in the NAV frequency box once the signal is received; you can also push the NAV VOL/ID knob to hear the Morse and check it against the plate.
3. **Set the course.** Turn the CRS knob to the final approach course from the plate (280 on the Training Plate). On the HSI, the localizer needle rotates with the course arrow, so a wrong course gives you a tilted picture and a wrong intercept.
4. **Set the minimums** bug to the DA, and the heading bug to the expected vector.

Identifying is not optional. A localizer on a nearby frequency, or one under maintenance with the ident switched off, will show a needle that means nothing. If the identifier is missing or wrong, the ILS is not usable.

:::callout{type="verify"}
Sim check: the decoded identifier in the NAV frequency box and the NAV VOL/ID knob for Morse audio are confirmed in Garmin 190-02177-02. Still open: that the Working Title NXi in MSFS 2024 decodes the ident, and the screenshot "NAV1 with localizer tuned and identified (I-LTF)". Author decision: I-LTF must match the W38 Training Plate data when it exists.
:::

:::quiz{id="l20-3-q2" type="single"}
You tune the localizer and the needle centers, but no identifier appears and you hear nothing on the NAV audio. What does this mean?

- [ ] The signal is fine; some localizers do not have an identifier
- [x] The ILS is not identified and must not be used until it is
- [ ] The G1000 has switched the CDI to GPS
- [ ] You are too far away; the needle will become reliable inside the FAF

---

A centered needle with no identifier is a needle you cannot trust. The localizer may be off the air for maintenance with its ident disabled, or you may be on the wrong frequency. **Never use an unidentified ILS.**
:::

## The CDI source: GPS to LOC

Modern IFR flying has a trap built into it. You fly enroute and to the intercept on GPS, with a magenta needle. The ILS needs the HSI to show the localizer, a green needle driven by NAV1. If the CDI source is still GPS when you intercept, the needle you follow is the GPS leg, not the localizer, and the glideslope never appears.

The G1000 NXi is designed to switch the CDI source for you: with an ILS approach loaded and the localizer tuned, it changes GPS → LOC on its own once the FAF is the active leg and you are within 15 nm of it (activating Vector-to-Final switches it too). That is convenient, and it is exactly why you must check it rather than assume it. The callout, every ILS, as the localizer comes alive: "**CDI green, LOC1, course 280, glideslope alive.**" If the needle is still magenta, press the **CDI** softkey until it reads LOC1.

| Check                   | Right                                         | Wrong                             |
| ----------------------- | --------------------------------------------- | --------------------------------- |
| Needle color            | Green                                         | Magenta                           |
| Source label on the HSI | LOC1                                          | GPS                               |
| Course arrow            | Final approach course from the plate          | Whatever the last GPS leg was     |
| Glideslope indicator    | Present (a green diamond, alive or centering) | Absent, or the magenta GP diamond |

:::callout{type="verify"}
Sim check: the automatic GPS → LOC switch and its conditions (ILS/LOC approach loaded, FAF the active leg and within 15 nm, valid localizer tuned, GPS CDI inside 1.2 × full scale; Vector-to-Final also switches), and the colours (magenta GPS, green LOC1), are desk-verified against Garmin 190-02177-02. Still open: whether the Working Title NXi in MSFS 2024 does the switch, and the screenshot "HSI before and after the CDI switch to LOC1". If it does not, rewrite this section to teach the manual CDI press as the default.
:::

:::quiz{id="l20-3-q3" type="single"}
You are on a vector to the localizer, cleared for the ILS. The HSI needle is magenta and starting to center. What is the problem?

- [x] The CDI source is still GPS; the needle is the GPS leg, not the localizer
- [ ] Nothing; magenta means the localizer is captured
- [ ] The glideslope has failed
- [ ] You are inside the FAF too early

---

Magenta is GPS. Until the CDI reads **LOC1** in green you are not following the localizer, and the glideslope will not show. Press the CDI softkey, confirm the course, then intercept.
:::

## Intercepting the localizer

Approach control normally vectors you onto final at an **intercept angle of about 30°**, a few miles outside the FAF, below the glideslope. A 30° intercept is a good balance: shallow enough that the needle moves slowly as you join, steep enough that you get there. If you are flying the full procedure yourself, use 30° too; 45° at most, and never more at localizer sensitivity.

As the needle comes alive, **lead the turn**. At 30° and a typical final approach groundspeed, start turning onto the final approach course when the needle is about one dot from center. Roll out on the course heading plus a wind correction and watch the trend. Then bracket, as you did on VOR radials, but with smaller numbers.

| Where you are   | Correction for a half-dot error                      | Then                                              |
| --------------- | ---------------------------------------------------- | ------------------------------------------------- |
| Outside the FAF | 5°                                                   | Hold until the needle is centered, take half back |
| FAF to 2 nm     | 2–3°                                                 | Same                                              |
| Inside 2 nm     | 1–2°, flown with the rudder feet as much as the yoke | Hold the heading that keeps it centered           |

The number that matters is the **heading that holds the needle still**. Once you find it, fly that heading and stop chasing. Chasing the needle is the most common ILS error in the sim, and the cure is patience: make a small change, wait, read the trend.

## Glideslope intercept from below

Always intercept the glideslope **from below**, at the altitude the plate or ATC gives you for the intercept. There are two reasons. From below, the glideslope needle comes down to you, and you simply start the descent as it centers, one clean transition. From above you must dive to catch it, which is never a stabilized approach. The second reason is real-world only but worth knowing: an ILS transmits false glideslopes at steeper angles, and intercepting from above can put you on one.

The sequence, as the diamond descends:

1. **Glideslope alive** (the diamond moves from the top): flaps 10, slow to {{vspeed.approach}}, before-landing checklist complete.
2. **One dot above**: nothing yet, confirm the altitude is the intercept altitude.
3. **Centered**: reduce power to about 1,700 RPM, pitch down to the descent attitude, trim. Start the timer if the plate gives a localizer-only time.
4. Hold the attitude; correct the glideslope with **power**, the localizer with **heading**.

| Groundspeed on final | Descent rate for the 3° glideslope |
| -------------------- | ---------------------------------- |
| 80 kt                | 400 fpm                            |
| 90 kt                | 450 fpm                            |
| 100 kt               | 500 fpm                            |

:::callout{type="verify"}
Sim check: confirm the Skyhawk configuration at glideslope intercept (flaps 10, about 1,700 RPM, {{vspeed.approach}}) by flying the sim airplane and record it in `aircraft.yaml`; confirm the sim's ILS does not model false glideslopes. The false-glideslope sentence is real-world (AIM 1-1-9) and stays labelled as such.
:::

:::quiz{id="l20-3-q4" type="numeric" answer="400" tolerance="30" unit="fpm"}
A 10 kt headwind on final leaves you with a groundspeed of 80 kt. What descent rate holds the 3° glideslope?

---

Groundspeed × 5: 80 × 5 = 400 fpm. The headwind makes the descent shallower than the no-wind 450 fpm; if you keep 450 fpm you will sink below the glideslope.
:::

## Decision altitude and the runway environment

At DA you decide, and the decision is not "can I see something?" but "can I see the right things?" The rules say you may continue below DA only if you have the required flight visibility, you can descend to a landing on the runway at a normal rate using normal maneuvers, and at least one of a specific list of **runway environment** references is distinctly visible and identifiable.

| Reference you may use                                    | Notes                                                                                                               |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Approach light system                                    | Only down to 100 ft above the touchdown zone, unless the red terminating bars or red side-row bars are also visible |
| Runway threshold, threshold markings or threshold lights | Any of the three                                                                                                    |
| Runway end identifier lights (REIL)                      |                                                                                                                     |
| Visual glideslope indicator (PAPI or VASI)               |                                                                                                                     |
| Touchdown zone, its markings or its lights               |                                                                                                                     |
| Runway, runway markings or runway lights                 |                                                                                                                     |

In the sim the weather presets make this a fair test: at `WX_IMC_LOW` you break out just above DA and the lights are there; at `WX_IMC_BELOW` they are not, and the only correct answer is the missed approach in [[l20-5-missed-approaches]]. "I think I see a glow" is not on the list. Say it aloud at DA: "Minimums. Runway in sight, landing," or "Minimums. Going missed."

:::quiz{id="l20-3-q5" type="multi"}
At DA, which of these alone allow you to continue descending? Pick all that apply.

- [x] The PAPI, clearly visible
- [x] The runway threshold lights
- [ ] A bright glow in the cloud ahead
- [x] The approach lights, down to 100 ft above the touchdown zone
- [ ] The G1000 map showing you over the runway

---

The PAPI, the threshold lights and the approach lights are all on the list (the approach lights only to 100 ft above the touchdown zone unless the red bars are visible). A glow and a map position are not. The decision is about what you can _identify_ out the window.
:::

## Coupled approach with APR

The GFC 700 flies a beautiful ILS, and watching it do so teaches you what a good one looks like. The sequence, with the approach loaded and activated, the localizer tuned and identified, and the CDI on LOC1:

1. On the intercept vector, **HDG** mode with the vector heading, **ALT** holding the intercept altitude.
2. Press **APR**. The annunciator shows LOC and GS **armed** in white beside the active HDG and ALT.
3. As the localizer comes alive the autopilot **captures** it: LOC turns green and HDG drops out. Call it: "LOC captured."
4. As the glideslope centers, GS turns green and ALT drops out. Call it: "Glideslope captured." Set the power for the descent; the autopilot does not touch the throttle.
5. At about 200 ft above DA, confirm your hand is on the yoke. **At DA, disconnect** and land by hand, or go missed. The autopilot never flies you below DA.

If a mode you expected does not appear within a few seconds, intervene: press the mode again, check the CDI source, or disconnect and hand-fly. Challenge C20.3 scores exactly this: each mode change called out, and any wrong mode corrected within 5 seconds.

:::callout{type="decision"}
Coupled, at DA, in `WX_IMC_LOW`: the approach lights appear through the murk. You disconnect, keep the picture, and land. Same approach in `WX_IMC_BELOW`: nothing. You press the go-around button, say "going missed", and the autopilot is already pitching up. Both are good flights. Only one of them has a landing.
:::

:::callout{type="verify"}
Sim check: Garmin 190-02177-02 confirms that APR arms LOC and GS (armed modes in white beside the active mode), that APR can be pressed from HDG mode, and that the GA button keeps the autopilot engaged in GA mode (older G1000 installations disconnected it). Still open: the sim's annunciator text and colours, GA behaviour at DA, and the screenshot "Mode annunciator with LOC and GS captured".
:::

## Practice and next steps

Four things to carry forward:

1. ILS needles are angular; corrections shrink as the runway grows.
2. Tune, identify, set the course, set the minimums; green needle, LOC1, course from the plate.
3. Intercept at 30° and from below; descent rate ≈ groundspeed × 5; glideslope with power, localizer with heading.
4. At DA, land only on the runway environment list. Otherwise, go missed.

**Practice.** This lesson feeds the `ifr-rules` deck (the runway environment list) and the `limits-and-speeds` deck (the approach configuration).

**Fly it.** Challenge C20.2 "Hand-flown ILS" puts you on a 30° intercept to the KLVK "ILS RWY 25R" (not for navigation) with the autopilot off. Challenge C20.3 "Coupled ILS" flies the full procedure on the KMRY "ILS or LOC RWY 10R" (not for navigation) with the autopilot in APR. Fly the hand-flown one first; the coupled one is more fun when you know what the autopilot is doing for you. Next: [[l20-4-vor-and-other-non-precision-approaches]].

:::callout{type="verify"}
Sim check: KLVK "ILS RWY 25R" (Amdt 9A; charted separately from "LOC RWY 25R") and KMRY "ILS or LOC RWY 10R" (Amdt 29A) are confirmed in d-TPP cycle 2610 (01–29 Oct 2026). The lesson states no identifiers or courses for them; keep it that way. Still open: both procedures in the sim's nav database under those titles.
:::
