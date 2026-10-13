---
slug: l13-1-mountain-weather-and-airflow
code: L13.1
module: m13-mountain-flying
order: 1
priority: P0
title: Mountain weather and airflow
summary: How wind behaves over a ridge, how to spot mountain wave before it finds you, and the wind limit that keeps you out of the lee-side sink.
estimatedMinutes: 20
prerequisites: [l11-1-weather-theory-air-masses-fronts-and-stability]
objectives:
  - Describe windward lift and lee-side sink when air flows over a ridge.
  - Recognize the signs of mountain wave from clouds and the winds-aloft forecast.
  - Set a wind limit for a ridge crossing and apply it to a forecast.
challenges: []
resources: [faa-tips-mountain-flying, aim-7]
published: false
lastVerifiedAt: null
simVersion: null
---

## The invisible river

:::callout{type="real-world"}
In a real airplane, nobody flies the Sierra after reading a lesson. A real pilot takes a mountain flying course with an instructor who knows the local passes, flies the route in calm weather first, and builds up to windier days over many flights. This module gives you the ideas and lets you try them in the sim, where a bad decision costs a restart. It is a first look, not a license.
:::

Think of the air as a river and the mountains as rocks on the riverbed. Water meeting a rock speeds up over the top, then tumbles and swirls on the downstream side. Air over a ridge does the same thing, and the Skyhawk is a leaf on that river.

Course 1 weather was about clouds and visibility. Mountain weather adds a third thing: **the vertical movement of air**. Rising air lifts you for free. Sinking air can descend faster than the Skyhawk can climb. This lesson shows you where each one lives, how to see it coming, and when the honest answer is "not today."

:::callout{type="safety"}
A Skyhawk at a high density altitude might climb 300 ft per minute. The lee side of a Sierra ridge in a strong wind can sink at 1,000 ft per minute or more. No amount of skill wins that contest. The only winning move is to not be there.
:::

## Why wind accelerates over ridges

A ridge squeezes the wind into a thinner layer, and like water through a narrow channel, it speeds up. A 20 kt wind in the valley can be 30 kt or more at the crest, and three things follow:

| Where you are                    | What the air does            | What you feel in the Skyhawk                      |
| -------------------------------- | ---------------------------- | ------------------------------------------------- |
| Windward slope (facing the wind) | Rises smoothly up the slope  | Free lift: a better climb than the charts promise |
| Ridge crest                      | Fastest, often gusty         | Strong headwind or tailwind, bumps                |
| Lee slope (behind the ridge)     | Sinks, tumbles, forms rotors | Sink that can exceed your climb rate, turbulence  |

The lee side is the whole problem. The air that rose smoothly on the windward side comes down the back of the ridge like a waterfall. The stronger the wind, the stronger the sink and the farther downwind it reaches.

:::quiz{id="l13-1-q1" type="single"}
Crossing a ridge with a strong wind, where should you expect the sink?

- [ ] On the windward side, as the air piles up against the slope
- [x] On the lee side, behind the ridge
- [ ] Directly over the crest only
- [ ] Nowhere, as long as you are above the ridge

---

The air rises on the windward side and sinks on the **lee side**. Flying downwind across a ridge, the sink waits right after the crest; flying upwind, it is the first thing you meet.
:::

## Lee-side downdrafts and rotors

On the lee side the sinking air can curl back on itself into a horizontal spinning tube called a **rotor**, roughly level with the ridge top and a few miles downwind. The turbulence inside can be severe enough to cause loss of control in a light airplane, and it is invisible unless there is enough moisture to form a ragged, tumbling cloud.

Above the rotor, in a stable air mass, the air keeps bouncing up and down for tens of miles downwind. That is **mountain wave**. Glider pilots love the rising parts; you care about the sinking parts and the rotor underneath. In a strong wind, stay well above ridge level, keep away from the lee side, and treat any sink as a signal to turn toward lower terrain.

:::callout{type="verify"}
Widget W29 (Mountain Airflow) is embedded here once Phase 20 ships it: `::widget{name="mountain-airflow" mode="explore"}`. Confirm the rotor and wave description against AIM 7-6 and "Tips on Mountain Flying" (FAA-P-8740-60).
:::

## Lenticular clouds

Lenticular clouds are the mountain's warning flag. They form at the crest of each wave, where rising air cools below its dew point, and evaporate on the way down. The result is a smooth, lens-shaped cloud that **does not move**, even in a 40 kt wind.

One lenticular tells you three things: strong wind aloft, air stable enough to form a wave, and probably a rotor below. A dry day can have all three without the cloud, which is why you also check the forecast.

| Sign        | What it looks like                                  | What it means                      |
| ----------- | --------------------------------------------------- | ---------------------------------- |
| Cap cloud   | Cloud hugging the crest, spilling down the lee side | Strong flow over the ridge         |
| Rotor cloud | Ragged, rolling cloud level with the ridge top      | Severe turbulence beneath the wave |
| Lenticular  | Smooth lens that stays put, sometimes stacked       | Wave above; rotor probably below   |

:::quiz{id="l13-1-q2" type="multi"}
Which of these are signs of mountain wave? Pick all that apply.

- [x] Smooth, lens-shaped clouds that stay in place over the ridge
- [x] A ragged, rolling cloud sitting level with the ridge top downwind of it
- [ ] Scattered fair-weather cumulus over the valley at noon
- [x] A winds-aloft forecast of 35 kt at ridge level

---

Lenticular clouds, rotor clouds and strong winds at ridge level all point to wave. Fair-weather cumulus at noon are a sign of afternoon convection, covered below.
:::

## Winds aloft at ridge level

You learned to read a winds-aloft forecast in [[l11-2-forecasts-and-briefings]]. For a crossing, the number that matters is the wind at **ridge level**, not the surface wind at your departure airport. Sierra crests along the I-80 corridor sit around 8,000–9,000 ft MSL, so the 9,000 ft forecast level is your reference. Two things matter most:

- **Speed at ridge level.** The FAA's mountain flying material cautions that about 20–25 kt or more at ridge level means strong lee-side sink and likely turbulence. Many instructors use 20 kt as the number that ends the conversation for a light airplane.
- **Direction relative to the ridge.** Wind blowing straight across the ridge makes the strongest wave. Wind along the ridge is gentler.

:::callout{type="verify"}
Confirm the 20–25 kt ridge-level wind caution against "Tips on Mountain Flying" (FAA-P-8740-60) and AIM 7-6, the I-80 corridor ridge elevations (8,000–9,000 ft) against the current San Francisco sectional, and that the winds-aloft (FB) forecast has a 9,000 ft level.
:::

:::callout{type="decision"}
Set your limit before you look at the forecast, not after. Learn-To-Fly's starting mountain limit: **ridge-level wind 20 kt or more, or any lenticular or rotor cloud, and you do not cross.** Write it on the kneeboard. When the 9,000 ft forecast says 25 kt from the west, the decision is already made.
:::

:::quiz{id="l13-1-q3" type="single"}
The winds-aloft forecast gives 9,000 ft winds of 270° at 28 kt. The ridge you plan to cross runs north–south at about 8,500 ft MSL. Using the limit above, what do you do?

- [ ] Cross 500 ft above the ridge, straight on, for the shortest exposure
- [ ] Cross 2,000 ft above the ridge and accept the bumps
- [x] Do not cross today; fly the valley legs or stay on the ground
- [ ] Cross after sunset, when the wind drops

---

28 kt straight across the ridge is above the 20 kt limit, so the crossing is off. Altitude does not fix a rotor, and night adds its own problems. The good decision here is the "no."
:::

## Afternoon convection

Wave is a wind problem. Convection is a sun problem. By late morning in summer the slopes heat the air beside them and it rises in bubbles called thermals. Over the flat Central Valley you felt these as light chop; mountain slopes face the sun directly, so the thermals are stronger and closer together. Three things follow:

1. **Turbulence** builds through the afternoon, worst over sun-facing slopes and ridgelines.
2. **Cumulus** form over the peaks by noon and can grow into thunderstorms by mid-afternoon in July and August.
3. **Density altitude** peaks at the same time, so your climb is at its worst exactly when the air is roughest ([[l9-1-density-altitude-and-performance]]).

The fix is the oldest mountain rule: **fly early**. Dawn departures give cool, calm air and the best climb you will get all day.

## The Sierra in summer

Put the pieces together for the region this module flies:

| Factor          | Typical Sierra summer pattern                                          | What to do                                                        |
| --------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Prevailing wind | Westerly; the Sierra's east face and the Carson Range are the lee side | Expect wave near Truckee, Minden and Lake Tahoe                   |
| Morning         | Calm, cool, smooth                                                     | Be across the ridge by mid-morning                                |
| Afternoon       | Thermals, cumulus, high density altitude                               | Be on the ground or back in the valley                            |
| Smoke           | Wildfire smoke can cut visibility for days                             | Check visibility, not just clouds                                 |
| Terrain         | Peaks above 9,000 ft near the passes                                   | Plan the crossing altitude in [[l13-2-planning-a-mountain-route]] |

Minden (KMEV) is a famous glider site because the Carson Range makes such reliable wave: wonderful for a sailplane, a warning for you. Challenge C13.4 "Mountain wave" puts you eastbound over that range on a windy day to feel the sink early, slow to {{vspeed.va}}, turn toward lower ground and choose not to continue.

:::callout{type="sim"}
MSFS 2024 models wind over terrain and some updrafts and downdrafts, but how strong and realistic its lee-side sink and rotor turbulence are is uncertain, and is checked before the challenge ships.
:::

:::callout{type="verify"}
Fly the `WX_MOUNTAIN_WAVE` preset over the Carson Range and record the sink rate, turbulence and whether any rotor is modeled (v2 Phase 16 flight test). Shot list: "lenticular cloud over the Carson Range" if the sim renders one.
:::

## Practice and next steps

Three things to carry forward:

1. Air rises on the windward side of a ridge and sinks on the lee side; the stronger the wind, the stronger the sink.
2. Lenticular clouds, rotor clouds and 20 kt or more at ridge level mean mountain wave: do not cross.
3. Fly the mountains early, when the air is cool and calm and your climb rate is best.

**Practice.** This lesson feeds the `weather-signs` flashcard deck: windward versus lee, the cloud signs of wave, and the 20 kt ridge-level limit.

**Next.** [[l13-2-planning-a-mountain-route]] plans the KAUN to KTRK crossing over Donner Summit, with a crossing altitude and an escape route for every leg.
