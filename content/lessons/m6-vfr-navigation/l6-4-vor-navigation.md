---
slug: l6-4-vor-navigation
code: L6.4
module: m6-vfr-navigation
order: 4
priority: P0
title: VOR navigation
summary: Tune and identify a VOR, find which radial you're on, and intercept and track a radial.
estimatedMinutes: 25
prerequisites: [l6-3-pilotage-and-dead-reckoning]
objectives:
  - Tune and identify a VOR on the G1000.
  - Work out which radial you're on using the course selector and CDI.
  - Intercept and track a radial to or from a station.
challenges: [c6-4-vor-tracking]
resources: [phak-ch16, ifh-nav, garmin-g1000-nxi-pilots-guide]
published: false
lastVerifiedAt: null
simVersion: null
---

## How a VOR works

A **VOR** is a radio station on the ground that sends out 360 **radials**, like the spokes of a wheel. Each radial is a magnetic course **from** the station: the 090 radial runs due east (magnetic) from it.

Your VOR receiver tells you which radial you're on, or how far you are from the course you've selected.

## Tune and identify

1. **Tune** the VOR's frequency, shown in the box next to its compass rose on the sectional.
2. **Identify** it. Each VOR sends a three-letter Morse code identifier. Listen to it (or, on the G1000, check the decoded identifier next to the frequency) and compare it with the chart.

Always identify. It confirms you have the right station and that it's working. A VOR under maintenance may send no identifier at all.

:::callout{type="verify"}
Author note: check how the MSFS 2024 G1000 shows the decoded identifier and how to listen to the Morse ID.
:::

:::quiz{id="l6-4-q1" type="single"}
Why do you identify a VOR?

- [ ] To tell ATC which VOR you're using
- [x] To confirm it's the right station and that it's working
- [ ] To turn the VOR on
- [ ] It's only needed at night

---

To **confirm it's the right station and that it's working**. Never navigate on an unidentified VOR.
:::

## The CDI and the TO/FROM flag

- The **course selector** (called the OBS on older instruments) sets the course you want.
- The **course deviation indicator** (CDI) needle shows whether that course is to your left or right. Full deflection means 10° or more off.
- The **TO/FROM flag** shows whether the selected course takes you **to** the station or **from** it.

Move the airplane around the station, turn the course selector and watch the needle and the flag.

::widget{name="vor-cdi" mode="explore"}

**To find which radial you're on:** turn the course selector until the needle centers with a **FROM** flag. The course shown is your radial.

:::quiz{id="l6-4-q2" type="single"}
The needle is centered with a FROM flag, and 090 is selected. Where are you?

- [ ] On the 270 radial, west of the station
- [x] On the 090 radial, east of the station
- [ ] Directly over the station
- [ ] Flying toward the station on a heading of 090

---

You're **on the 090 radial**, east of the station. FROM means the course 090 leads away from the station, so you're on that side of it.
:::

## Intercepting and tracking

1. **Set the course** you want to fly.
2. **Turn to an intercept heading**: the course plus or minus 30–45°, toward the needle.
3. **Wait** for the needle to move toward the center.
4. As it centers, **turn onto the course**.
5. **Correct for wind.** If the needle drifts off, turn about 10° toward it. When it's centered again, turn back about 5°. Keep halving the correction until the needle stays put. This is called **bracketing**.

The rule to remember: **fly toward the needle**, as long as your heading roughly matches the selected course.

:::quiz{id="l6-4-q3" type="single"}
Your heading roughly matches the selected course, and the needle is left of center. Which way do you turn?

- [x] Left, toward the needle
- [ ] Right, away from the needle
- [ ] Neither; wait for it to center
- [ ] Turn around

---

**Left, toward the needle.** The course is to your left.
:::

## Reverse sensing

If your heading is roughly **opposite** to the selected course, the needle works backward: turning toward it takes you further away. To avoid this, keep your heading roughly in line with the selected course. If you want to fly the other way, set the reciprocal course.

## On the G1000

- Press the **CDI** softkey to cycle the HSI's navigation source: **GPS → VOR1 → VOR2**.
- The needle color tells you the source: **magenta for GPS**, **green for VOR**.
- Tune NAV frequencies with the **NAV knob** and the flip-flop key.
- Set the course with the **CRS** knob.

The G1000's **HSI** combines the heading indicator and the CDI. Turn on the HSI view to see how it looks.

::widget{name="vor-cdi" mode="quiz" hsi="true"}

:::callout{type="classic"}
The classic Skyhawk has a separate VOR indicator with an OBS knob, a vertical needle and a TO/FROM flag, just like the first diagram above.
:::

## VORs are going away

The FAA is shutting down some VORs and keeping a network of them as a backup to GPS, called the **Minimum Operational Network** (MON). Many VORs will remain for years, but check the chart for the ones in your area.
