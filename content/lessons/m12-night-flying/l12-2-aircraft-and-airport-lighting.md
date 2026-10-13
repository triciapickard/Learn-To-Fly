---
slug: l12-2-aircraft-and-airport-lighting
code: L12.2
module: m12-night-flying
order: 2
priority: P0
title: Aircraft and airport lighting
summary: Read an airport by its lights, fly a PAPI, and turn on a dark runway with seven clicks of the microphone.
estimatedMinutes: 20
prerequisites: [l12-1-night-vision-and-illusions]
objectives:
  - Identify runway, taxiway, threshold and approach lights by color and pattern.
  - Read a PAPI and a VASI and say whether you are high, low or on the glide path.
  - Activate pilot-controlled lighting at the correct intensity.
challenges: []
resources: [aim-2-1, afh-ch11, ecfr-91-209, faa-chart-supplement, faa-chart-users-guide, airnav]
published: false
lastVerifiedAt: null
simVersion: null
---

## Reading an airport by its lights

By day, an airport is pavement, paint and signs. By night it is a code: a flashing beacon on the horizon, two lines of white dots, a bar of green at one end and red at the other, blue dots wandering off to the side. Once you can read the code, a strange airport at night is easier to find than it is at noon.

:::callout{type="real-world"}
In a real airplane you learn lighting with an instructor beside you, at an airport you already know, before you ever try a dark one. Real lights are also less tidy than the sim's: bulbs fail, PCL systems time out on short final, and the Chart Supplement is full of notes about which lights do what. The colors and codes in this lesson are universal; the quirks of a real airport are not.
:::

## Aircraft lights and when to use them

The Skyhawk carries five sets of lights. Two are required by regulation at night; the rest are courtesy and self-preservation.

| Light                        | Where                                                   | Why                                 | When                                                                        |
| ---------------------------- | ------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------- |
| **Position (navigation)**    | Red on the left wingtip, green on the right, white tail | Show others which way you are going | On from sunset to sunrise, required                                         |
| **Beacon** (red flashing)    | Top of the tail                                         | Be seen                             | On before engine start, off after shutdown                                  |
| **Strobes** (white flashing) | Wingtips                                                | Be seen                             | On when entering the runway, off when clear and on the ramp (and in clouds) |
| **Landing light**            | Left wing leading edge (nose cowl on older Skyhawks)    | See and be seen                     | Takeoff and landing; many pilots leave it on within 10 nm of an airport     |
| **Taxi light**               | Left wing leading edge, beside the landing light        | See the taxiway                     | Taxiing at night                                                            |

The plain-language rule: from sunset to sunrise, your position lights must be on, and if the airplane has an anticollision light (the beacon or strobes) it should be on whenever the airplane is operating, unless flashing it would be unsafe, for example in cloud or next to another pilot on a dark ramp.

Position lights also let you read other traffic: another airplane's **red** light on your right and its **green** on your left means it is coming toward you.

:::callout{type="verify"}
Sim check: confirm the light switch names (NAV, BCN, STROBE, LAND, TAXI) and where each light sits on the MSFS 2024 G1000 NXi Skyhawk airframe (the real 172S carries the landing and taxi lights in the left wing leading edge). Desk-verified 2026-10-13: the position-light and anticollision-light rules match 14 CFR 91.209.
:::

## The airport beacon

The rotating beacon is the first thing you find at night. From miles out a lit airport is a slow, regular flash on the horizon, and the colors tell you what kind of airport it is.

| Beacon flashes                    | Meaning                    |
| --------------------------------- | -------------------------- |
| White and green                   | Lighted civil land airport |
| White and yellow                  | Lighted water airport      |
| White, green and yellow           | Lighted heliport           |
| Two quick white flashes and green | Military airport           |

Beacons run from dusk to dawn. A beacon lit in daytime at an airport with Class B, C, D or E airspace to the surface usually means the weather there is below VFR minimums; a hint, not a guarantee.

:::callout{type="verify"}
Sim check: which Bay Area beacons MSFS 2024 renders (KLVK, KTCY and KWVI are all white-green, sunset to sunrise, in the Chart Supplement) per v2 Section 9.2. Desk-verified 2026-10-13: the color codes and the daytime convention match AIM 2-1-9.
:::

## Runway and taxiway lighting

Once you are close, the beacon stops mattering and the colors on the ground take over. Learn this table until it is reflex; it is the whole of a night approach.

| Light                                     | Color and pattern                                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Runway edge lights**                    | White. On instrument runways, yellow for the last 2,000 ft (or the last half, if shorter) as a caution zone |
| **Runway threshold**                      | Green, seen from the approach                                                                               |
| **Runway end**                            | Red, seen from the runway looking toward the far end (the same fixtures show green to the other direction)  |
| **Runway centerline** (large runways)     | White, then alternating red and white from 3,000 ft remaining, then all red for the last 1,000 ft           |
| **Touchdown zone lights** (large runways) | Rows of white bars either side of the centerline for the first 3,000 ft                                     |
| **REIL**                                  | A pair of synchronized white flashes, one each side of the threshold: "the runway is here"                  |
| **Taxiway edge lights**                   | Blue                                                                                                        |
| **Taxiway centerline lights**             | Green                                                                                                       |
| **Runway guard lights**                   | Alternating flashing yellow at a runway holding position: "you are about to enter a runway"                 |
| **Clearance bar**                         | Three yellow lights in the pavement marking a hold point on a taxiway                                       |

Two things catch new night pilots. First, **blue is never a runway**. Lining up on the taxiway happens, even at towered airports, and the color is the cue. Second, a runway with only edge lights looks like a narrow pair of lines, and as you descend the lines spread apart. That spreading is the sight picture you will use in [[l12-3-night-operations-preflight-to-landing]] to judge the flare.

For the home airports, the Chart Supplement says: Livermore's long runway (7L/25R) has high-intensity edge lights and the short one (7R/25L) medium-intensity, with no REIL; Tracy has medium-intensity edge lights, REIL on all four runway ends and a PAPI for each. The sim may draw less than that.

:::callout{type="verify"}
Widget pending: W27 (Airport Lighting Explorer) is embedded here once Phase 20 ships it: `::widget{name="airport-lighting" mode="explore"}`, a night-view runway and taxiway with every light clickable, a day/night toggle, a PCL panel and a PAPI slider. The spec's "W27 hotspots" knowledge check goes there. Until then the table above carries the content. Screenshots for the shot list: "KLVK runway lights at night", "PAPI at night".
:::

:::callout{type="verify"}
Sim check: record which lights MSFS 2024 renders at KLVK and KTCY (v2 Section 9.2). Real-world baseline (Chart Supplement SW, 2026-10-13): KLVK HIRL 7L/25R, MIRL 7R/25L, MALSR 25R, PAPI on 7L (right side, 4°) and 25R (left side, 3°), no REIL; KTCY MIRL, REIL and a 2-light PAPI on all four runway ends. Desk-verified 2026-10-13: every color and distance in the table matches AIM 2-1-3 through 2-1-5 and 2-1-10.
:::

:::quiz{id="l12-2-q1" type="single"}
On a night approach you see a row of green lights across the near end of the runway and a double white flash either side of it. What are you looking at?

- [ ] The runway end and the runway guard lights
- [x] The runway threshold and the REIL
- [ ] A taxiway with a clearance bar
- [ ] The displaced threshold and touchdown zone lights

---

Green across the near end is the threshold; the synchronized white flashes are the runway end identifier lights (REIL), there to help you pick the runway out of the surrounding lights.
:::

## PAPI and VASI

At night you cannot judge your glide path by looking at the ground, so the airport does it for you with colored lights beside the runway. The two common systems use the same idea: white means you are above the light's beam, red means you are below it.

A **PAPI** is a single row of two or four lights, usually on the left side of the runway near the touchdown zone. Each light turns from white to red at a slightly different angle, so the mix of colors tells you how far off the path you are. The path is normally 3°; a few are steeper.

| PAPI                   | Meaning                   |
| ---------------------- | ------------------------- |
| Four white             | Well above the glide path |
| Three white, one red   | Slightly high             |
| **Two white, two red** | **On the glide path**     |
| One white, three red   | Slightly low              |
| Four red               | Well below the glide path |

A two-light PAPI, common at small airports such as Tracy and Watsonville, gives only three answers: both white is high, one of each is on the path, both red is low.

A **VASI** uses two bars, one nearer the threshold and one farther down the runway. The near bar's beam is set a little lower than the far bar's, so on path you see the near bar white and the far bar red. The old rhyme still works: _red over white, you're all right; white over white, you're high as a kite; red over red, you're dead_.

| VASI (far bar over near bar) | Meaning               |
| ---------------------------- | --------------------- |
| White over white             | Too high              |
| **Red over white**           | **On the glide path** |
| Red over red                 | Too low               |

Livermore has a PAPI on Runways 7L and 25R only (the 7L one sits on the right side of the runway and is set to a steep 4°), so if you are landing on the short runway at night you are on your own for glide path: fly the same descent point and power setting you would by day and watch the altimeter.

:::quiz{id="l12-2-q2" type="single"}
On final at night the PAPI shows two white and two red lights. You are…

- [ ] too high
- [x] on the glide path
- [ ] too low
- [ ] lined up on the wrong runway

---

Two white, two red is on path. More white means higher, more red means lower. Fly it all the way down: at night it is your best protection against a black-hole approach.
:::

## Approach lighting systems

Runways with instrument approaches add a long carpet of lights stretching out from the threshold: an **approach lighting system** (ALS). It gives an instrument pilot the first visual cue at the end of an approach, and at night it is the easiest way to find the runway from miles away.

You do not need the variants for VFR flight. Know the shape: white bars down the extended centerline, often with a crossbar, sometimes with sequenced flashing lights that race toward the runway ("the rabbit"). Systems named MALSR, ALSF-2 or ODALS differ in length and flashing; the Chart Supplement lists which one an airport has. The threshold is where the green starts, and the approach lights sit **before** it. Do not land on them. Livermore has one: a 1,400 ft MALSR on Runway 25R, which you turn on yourself on 118.1 once the tower has closed.

:::callout{type="verify"}
Sim check: does MSFS 2024 render the KLVK Runway 25R MALSR (real-world 1,400 ft MALSR, Chart Supplement SW, 2026-10-13)? Desk-verified 2026-10-13: the ALS names and descriptions match AIM 2-1-1; of the `airports.yaml` fields checked (KLVK, KTCY, KWVI, KHWD) only KLVK has an ALS, besides the airline airports.
:::

## Pilot-controlled lighting

Many non-towered airports turn their lights off at night to save power and let you turn them on from the air. This is **pilot-controlled lighting** (PCL). Tune the CTAF (or whatever frequency the Chart Supplement names) and key the microphone in quick clicks:

| Clicks within 5 seconds | Intensity |
| ----------------------- | --------- |
| **7**                   | High      |
| **5**                   | Medium    |
| **3**                   | Low       |

Always start with 7 clicks: full brightness is what you want while you are still looking for the airport, and you can click down to 5 or 3 once the glare bothers you. The lights usually stay on for about 15 minutes, so re-key them when you join the pattern. There is nothing quite like the runway going dark on short final.

On a sectional, an airport whose lighting has limitations (such as PCL) shows an asterisk before the lighting letter, and the Chart Supplement spells out the details.

:::callout{type="sim"}
Whether MSFS 2024 models pilot-controlled lighting, and at which airports, is unconfirmed. Challenge C12.2 "Pilot-controlled lighting at Tracy" keeps the 7-click procedure as a required habit step either way: tune the CTAF, click 7 times within 5 seconds, say what you see. If the sim's lights are already on, the habit still counts. In the real world Tracy's edge lights, REIL and PAPIs are all pilot-controlled on the CTAF, 123.075.
:::

:::callout{type="verify"}
Sim check: key the CTAF 7 times within 5 seconds at KTCY in MSFS 2024 and record whether the lights respond (v2 Section 9.2). Desk-verified 2026-10-13: the 7/5/3 clicks, 5-second window, 15-minute timer and "start with 7" match AIM 2-1-8; the star-before-L sectional convention matches the Chart User's Guide.
:::

:::quiz{id="l12-2-q3" type="numeric" answer="7" tolerance="0" unit="clicks"}
You arrive at a dark non-towered airport. How many times do you key the microphone within 5 seconds to turn the runway lights on at high intensity?

---

Seven clicks for high, five for medium, three for low. Start with seven so you can see the airport, then turn them down if you need to.
:::

:::quiz{id="l12-2-q4" type="multi"}
Which lights must be on for a night flight? Pick all that apply.

- [x] Position lights
- [x] Beacon or strobes, unless flashing them would be unsafe
- [ ] Landing light at all times
- [ ] Taxi light during cruise

---

The rules require position lights and an anticollision light from sunset to sunrise. Landing and taxi lights are for the airport environment; in cruise they only cost you night vision.
:::

## Practice and next steps

Three things to carry forward:

1. White edges, green threshold, red end, blue taxiways. Blue is never a runway.
2. Two white, two red on the PAPI; red over white on the VASI.
3. Seven clicks within 5 seconds, and re-key before they time out.

**Practice.** This lesson feeds the `light-signals` deck with lighting cards: beacon colors, runway and taxiway colors, PAPI and VASI indications, and the PCL click counts.

**Fly it.** Challenge C12.2 "Pilot-controlled lighting at Tracy" starts you 10 nm west of Tracy at night: find the beacon, turn on the lights, make the CTAF calls and land on the PAPI. Before that, read [[l12-3-night-operations-preflight-to-landing]], which puts the lights to work from preflight to the flare. If the CTAF calls feel rusty, revisit [[l7-2-non-towered-airports-ctaf]].
