---
slug: l11-1-weather-theory-air-masses-fronts-and-stability
code: L11.1
module: m11-weather
order: 1
priority: P0
title: 'Weather theory: air masses, fronts and stability'
summary: "Why the sky looks the way it does: air masses, fronts, stability and the Bay Area's own sea breeze and marine layer."
estimatedMinutes: 25
prerequisites: [l6-6-planning-a-cross-country-flight]
objectives:
  - Describe the weather typically found with cold and warm fronts.
  - Predict cloud type and visibility from stability.
  - Explain the Bay Area's sea breeze and marine layer.
challenges: []
resources: [faa-weather-handbook, phak-ch12]
published: false
lastVerifiedAt: null
simVersion: null
---

## Two airports, fifteen miles apart

It is 9 a.m. on a June morning. At Palo Alto the sky is blue and the wind is calm. At Half Moon Bay, 15 miles west over the hills, the airport sits under a gray lid of cloud at 600 ft, and it will stay there until lunchtime.

No storm, no front. This is the Bay Area doing what it does most summer mornings, and a pilot who understands _why_ can predict it before the forecast does. This lesson gives you enough theory to look at a sky, a METAR or a forecast and say "I know what that is, and I know what it does next."

:::callout{type="verify"}
Prerequisite: the spec says L6.7 (Weather basics: METARs and TAFs), which is not written. Swap `l6-6-planning-a-cross-country-flight` for `l6-7-...` when it exists.
:::

## The atmosphere in 5 minutes

Everything you fly in happens in the **troposphere**, the bottom layer of the atmosphere. Three facts about it explain most weather:

| Fact                                                                   | Why a pilot cares                                                             |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Air gets colder with height, about 2 °C per 1,000 ft on a standard day | Rising air cools, and cool air cannot hold as much water: that makes cloud    |
| Pressure falls with height, about 1 inHg per 1,000 ft near the surface | Your altimeter is a pressure gauge                                            |
| The sun heats the ground unevenly, and the ground heats the air        | Uneven heating makes pressure differences, and pressure differences make wind |

Wind blows from high pressure toward low pressure, bent by the Earth's rotation: in the northern hemisphere air spirals **clockwise and outward** around a high and **counterclockwise and inward** around a low. Air flowing into a low has nowhere to go but up, and rising air means cloud and rain. Air sinking in a high dries and warms. **Highs bring fair weather; lows bring weather.** Our systems travel roughly west to east, so what is over the Pacific today is often over you tomorrow.

The 2 °C per 1,000 ft figure is the standard lapse rate from [[l9-1-density-altitude-and-performance]]. It is an average; the real lapse rate on a given day decides whether the air is stable, the most useful idea in this lesson.

## Air masses

An **air mass** is a body of air hundreds of miles across that has sat over one kind of surface long enough to take on its character:

| Label           | Means                    | Character |
| --------------- | ------------------------ | --------- |
| **Maritime**    | Formed over an ocean     | Moist     |
| **Continental** | Formed over land         | Dry       |
| **Polar**       | Formed at high latitudes | Cold      |
| **Tropical**    | Formed at low latitudes  | Warm      |

"Maritime polar" air is cool and moist, which is what sits off the California coast all summer. Inland, the Central Valley bakes under hot, dry continental air. The Bay Area lives on the boundary between the two, and nearly all its everyday weather, the sea breeze and the marine layer included, comes from that contrast.

An air mass changes as it moves: cool air over warm ground is heated from below and becomes unstable; warm air over a cold ocean is cooled from below and becomes stable, and often foggy.

## Fronts

A **front** is the boundary where two air masses meet. The weather depends on which air mass is pushing and how steeply the boundary slopes.

| Front          | How it moves                                       | Weather you get                                                                                                                         |
| -------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Cold**       | Cold air wedges under warm air; fast and steep     | A narrow band of towering cumulus, showers, sometimes thunderstorms; gusty, shifting wind; a temperature drop; rapid clearing behind it |
| **Warm**       | Warm air slides up over cold air; slow and shallow | A wide area of layered cloud far ahead of it; steady rain or drizzle; low ceilings, poor visibility and fog; freezing rain in winter    |
| **Stationary** | Neither air mass wins                              | Warm-front weather that lingers for days                                                                                                |
| **Occluded**   | A cold front catches a warm front                  | A mix: wide low cloud plus embedded showers                                                                                             |

Picture a cross-section. A cold front is a steep wall: the warm air ahead is shoved up fast, so the cloud is tall, the rain is heavy and short, and it all passes in an hour or two. A warm front is a long, gentle ramp: the cloud is flat and wide and the poor visibility lasts all day. "Warm front" on a briefing means **low cloud and poor visibility for a long time**. "Cold front" means **gusts, showers, maybe a thunderstorm, then it clears**.

In the sim you fly custom weather, so you will not watch a front go by. But the forecasts you decode in [[l11-2-forecasts-and-briefings]] are written in the language of fronts.

:::callout{type="verify"}
Widget W26 (Fronts cross-section, P1) is embedded here once Phase 20 ships it: `::widget{name="fronts-cross-section" mode="explore"}`. Until then the table above does the job. Check the front descriptions against the Aviation Weather Handbook (FAA-H-8083-28) and PHAK Chapter 12, including the wind shift: in the northern hemisphere the wind typically veers (for example southwest to northwest) as a cold front passes.
:::

:::quiz{id="l11-1-q2" type="multi"}
A cold front is forecast to pass Livermore this afternoon. Which of these should you expect? Pick all that apply.

- [x] A narrow band of showers, possibly with thunderstorms
- [x] Gusty wind that shifts direction as the front passes
- [x] Rapid clearing and good visibility behind the front
- [ ] A wide area of low stratus and drizzle lasting most of the day
- [ ] A slow, steady drop in visibility over many hours

---

Cold fronts are steep and fast: a narrow band of showers, a gusty wind shift, a temperature drop, then quick clearing. Wide stratus, drizzle and slowly worsening visibility are warm-front weather.
:::

## Stability and lapse rates

Lift a parcel of air. As it rises it expands and cools, about **3 °C per 1,000 ft** while dry. Once its water vapor starts condensing, the condensation releases heat and it cools more slowly, roughly **1.5 °C per 1,000 ft**. Now compare the parcel with the air around it:

- If the lifted parcel is **colder** than its surroundings, it sinks back. The air is **stable**: lift stops and clouds spread out flat.
- If it is **warmer**, it keeps rising on its own. The air is **unstable**: lift feeds on itself and clouds build upward.

| Air      | Real lapse rate                | Clouds            | Precipitation          | Visibility                     | Ride            |
| -------- | ------------------------------ | ----------------- | ---------------------- | ------------------------------ | --------------- |
| Stable   | Small, or an inversion         | Stratus: flat     | Steady drizzle or rain | Poor: haze, fog, smoke trapped | Smooth          |
| Unstable | Large (cools fast with height) | Cumulus: building | Showers, thunderstorms | Good, except in showers        | Bumpy, thermals |

An **inversion**, where temperature _rises_ with height, is the most stable case of all. Nothing gets through it; smoke, haze and moisture pile up underneath. Early morning over the Central Valley and the marine layer on the coast are both inversions, which is why both mean fog and poor visibility rather than storms.

Stability is a trade: a smooth ride under low cloud you cannot see through, or clear air between the clouds and a bumpy ride. [[l11-3-clouds-fog-and-low-visibility]] is mostly about stable air; [[l11-4-thunderstorms-icing-and-turbulence]] is mostly about unstable air.

:::quiz{id="l11-1-q1" type="single"}
Stable air brings…

- [ ] Cumulus clouds and good visibility
- [x] Stratus clouds and poor visibility
- [ ] Thunderstorms and turbulence
- [ ] Clear skies in all cases

---

Stable air resists vertical motion, so clouds form in flat layers and haze, smoke and moisture stay trapped near the ground. Cumulus, showers and turbulence are signs of unstable air.
:::

## Moisture and the temperature/dewpoint spread

The **dewpoint** is the temperature the air must cool to before its water vapor condenses into cloud or fog. A METAR reports both: `18/12` is 18 °C with a dewpoint of 12 °C. The gap is the **temperature/dewpoint spread**, one of the most useful numbers on a METAR:

| Spread                       | What it tells you                                                 |
| ---------------------------- | ----------------------------------------------------------------- |
| 10 °C or more                | Dry air; fog unlikely; afternoon cumulus bases will be high       |
| 3–5 °C and steady            | Humid; watch it in the evening                                    |
| Under about 3 °C and closing | Fog or low cloud likely soon, especially at night with light wind |
| 0 °C                         | Saturated: you are in fog or cloud                                |

The spread also predicts the height of fair-weather cumulus. A rising parcel cools about 3 °C per 1,000 ft while its dewpoint falls only about 0.5 °C, so the two meet, and cloud forms, roughly 400 ft up for each degree of spread:

> **Cumulus base (ft AGL) ≈ temperature/dewpoint spread (°C) × 400**

A Livermore afternoon of `26/11` has a spread of 15 °C: bases around 6,000 ft AGL. A Half Moon Bay morning of `13/12` has a spread of 1 °C: cloud 400 ft up, or already on the ground.

:::callout{type="verify"}
Check the cloud-base rule of thumb (spread in °C × 400 ft) and the "closing below about 3 °C" fog guidance against the Aviation Weather Handbook and PHAK Chapter 12. Label both as rules of thumb for convective cloud only.
:::

:::quiz{id="l11-1-q3" type="numeric" answer="4000" tolerance="400" unit="ft AGL"}
The METAR shows a temperature of 24 °C and a dewpoint of 14 °C on a sunny, unstable afternoon. About how high will the cumulus bases be?

---

The spread is 24 − 14 = 10 °C. At roughly 400 ft per degree, the bases form around 4,000 ft AGL.
:::

## Local weather: sea breeze, marine layer, valley heating

Now put it together for home. In summer a large high sits over the Pacific and the ocean off San Francisco is cold, so the air over it is cool, moist and very stable, capped by an inversion a few thousand feet up. Inland, the Central Valley heats to 35 °C or more by afternoon. Hot air rises over the valley, pressure there falls, and the cool ocean air pours inland through every gap in the coastal hills to replace it. That is the **sea breeze**:

| Time              | What happens                                                                          | At the airports                                                     |
| ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Night and morning | The land has cooled; the stable ocean air and its stratus deck push inland            | KHAF and KMRY under a 500–1,500 ft overcast; sometimes the bay too  |
| Late morning      | The sun warms the ground, the inversion weakens and the stratus burns off from inland | KPAO clears first, then the bay, then the coast                     |
| Afternoon         | The valley is hot; the sea breeze blows at full strength, often 15–20 kt              | West-facing runways: Runway 25 at Livermore, Runway 31 at Palo Alto |
| Evening           | The land cools, the breeze eases and the marine layer creeps back                     | KHAF goes IFR again by dinner time                                  |

The gray deck is the **marine layer**: stratus in the cool, stable air under the inversion, a warm-front sky with no front. The inversion also traps haze and smoke, so visibility under the layer can be poor even with no cloud.

**Valley heating** matters in two more ways. On hot afternoons the ground sends up thermals, so the ride below about 5,000 ft gets bumpy after noon, and the same heat drives the density altitude from [[l9-1-density-altitude-and-performance]]. Early morning is cooler, calmer and often foggier; afternoon is windier, bumpier and clearer. That trade is the Bay Area in one sentence.

:::callout{type="tip"}
When the pattern reverses and a hot, dry wind blows from the land toward the sea, the coast goes crystal clear and the inland hills become fire country: the best visibility of the year, and the worst smoke when something is burning ([[l11-3-clouds-fog-and-low-visibility]]).
:::

:::callout{type="verify"}
Confirm the local pattern against a NorCal source (NWS Monterey forecast discussions or the Aviation Weather Handbook on sea breezes and marine stratus): typical deck heights at KHAF and KMRY, burn-off times, and afternoon sea-breeze strength at KLVK. Confirm the runway choices (25 at KLVK, 31 at KPAO) against `airports.yaml`.
:::

:::quiz{id="l11-1-q4" type="single"}
Why does the afternoon wind at Livermore so often blow from the west in summer?

- [ ] A cold front passes the Bay Area every afternoon
- [x] The hot Central Valley draws cool, dense ocean air inland through the gaps in the hills
- [ ] The jet stream dips to the surface in summer
- [ ] Westerly wind is the default direction everywhere in the northern hemisphere

---

That is the sea breeze. Hot air rising over the inland valleys lowers the pressure there, and cool, dense Pacific air flows in to replace it through the gaps in the coastal hills. It builds through the afternoon and eases at night.
:::

## Practice and next steps

Four things to carry forward:

1. Highs bring fair weather; lows bring weather. Fronts are where air masses meet.
2. Cold front: narrow, gusty, showery, clears fast. Warm front: wide, low, gray, slow.
3. Stable air means stratus, poor visibility and a smooth ride. Unstable air means cumulus, good visibility and bumps.
4. A spread under about 3 °C and closing means fog or low cloud is coming.

**Practice.** This lesson feeds the `weather-codes` flashcard deck: the front types, the stability table and the spread rules.

**Next.** [[l11-2-forecasts-and-briefings]] turns this theory into the products real pilots read every morning: TAFs, the GFA, winds aloft, AIRMETs and PIREPs.
