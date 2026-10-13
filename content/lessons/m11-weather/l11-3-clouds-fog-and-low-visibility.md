---
slug: l11-3-clouds-fog-and-low-visibility
code: L11.3
module: m11-weather
order: 3
priority: P0
title: Clouds, fog and low visibility
summary: How fog forms, why the marine layer closes an airport in minutes, what a ceiling really is, and the VFR minimums you must stay above.
estimatedMinutes: 20
prerequisites: [l11-1-weather-theory-air-masses-fronts-and-stability]
objectives:
  - Identify the type of fog from the conditions that formed it, and predict when it forms and clears.
  - Explain why a ceiling or visibility can drop faster than the forecast says.
  - State the VFR weather minimums for the airspace you plan to use and read a ceiling from a METAR.
challenges: []
resources: [faa-weather-handbook, ecfr-91-155]
published: false
lastVerifiedAt: null
simVersion: null
---

## The airport that disappears

Half Moon Bay is 12 minutes from Palo Alto in a Skyhawk. You leave KPAO under a blue sky, climb over the ridge, and the coast comes into view. Except it does not. Where the airport should be there is a flat white sheet, edge to edge, and the hills on your side of it have their tops in cloud.

Nothing on the forecast you read an hour ago said this. Or rather, it did, in a line you skimmed: `TEMPO 1416/1419 OVC006`. The marine layer came back early. This lesson is about why that happens, how to read the clues that it will, and the hard numbers that tell you when you may legally and safely keep going.

## Three ways to make fog

Fog is cloud on the ground. It forms whenever air cools to its dewpoint near the surface, and the three common ways that happens each have a name:

| Fog type      | How it forms                                                                                           | When and where                                                     | How it clears                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| **Radiation** | On a clear, calm night the ground radiates its heat away and cools the air touching it to the dewpoint | Inland valleys, winter and fall; the Central Valley's tule fog     | Burns off after sunrise as the ground warms, usually by late morning |
| **Advection** | Moist air **moves** (advects) over a colder surface and is cooled from below                           | Coasts, any time of day; the Bay Area's marine stratus and sea fog | Only when the wind changes or the air mass does; it can sit for days |
| **Upslope**   | Moist air is pushed up rising terrain and cools as it climbs                                           | The windward side of hills, including the coastal ridges           | When the wind stops pushing                                          |

Two more you will meet in the books: **precipitation (frontal) fog**, when rain falls through cold air ahead of a warm front, and **steam fog**, when cold air moves over warm water. In the Bay Area, think radiation fog inland in winter and advection fog on the coast all year.

The difference that matters most is the wind. Radiation fog needs calm air and dies with the sun. Advection fog needs wind, a steady feed of moist air over the cold water, and the sun alone will not kill it. A coastal airport under advection fog at 9 a.m. may still be under it at 3 p.m.

:::quiz{id="l11-3-q1" type="single"}
A steady 10 kt wind has been blowing from the ocean across the cold water near Half Moon Bay all afternoon. By 5 p.m. the airport is under a low overcast and visibility is 1 SM. What type of fog is this?

- [ ] Radiation fog
- [x] Advection fog
- [ ] Upslope fog
- [ ] Steam fog

---

Moist air moving over a cooler surface is the definition of advection fog. The clues are the wind, the ocean and the time of day: radiation fog needs calm air and clear nights and would not form at 5 p.m. with a 10 kt wind.
:::

## The marine layer at KHAF and KMRY

The marine layer from [[l11-1-weather-theory-air-masses-fronts-and-stability]] is advection fog and stratus on a grand scale: cool, moist Pacific air under an inversion, sitting against the coast. At the airports it shows up as a low overcast, often 500–1,500 ft AGL with tops around 1,500–2,500 ft, and sometimes as fog on the runway.

What makes it dangerous is how fast it moves and how local it is:

- **It is thin but solid.** From above it looks like a white floor and the sea or the airport underneath is invisible. You cannot descend through it VFR.
- **It moves with the sea breeze.** In the afternoon and evening it pushes inland and up the valleys; by late morning it pulls back. Twenty minutes can change an airport from VFR to IFR.
- **It respects terrain.** The coastal hills hold it back, so KPAO can be clear while KHAF, 15 nm west, is closed. KMRY sits right on the coast and is often the last airport in the region to clear.
- **It is predictable in general and unpredictable in detail.** The TAF knows it will come back tonight; it does not know whether it will arrive at 4 p.m. or 6 p.m.

The two numbers that tell you what it will do next are the temperature/dewpoint spread at the coastal airport and the wind. A spread of 1–2 °C and an onshore wind means the layer is forming or holding. A spread opening to 4–5 °C means it is lifting.

:::quiz{id="l11-3-q2" type="numeric" answer="3" tolerance="0" unit="°C"}
The Half Moon Bay METAR reads `16/13`. What is the temperature/dewpoint spread?

---

16 − 13 = 3 °C. That is at the edge of the "watch it" zone. If the next METAR shows it closing to 2 or 1, fog or a low stratus deck is forming; if it opens to 5, the layer is lifting.
:::

## Scud and "just one more mile"

**Scud** is the ragged, low cloud that hangs under a lowering ceiling or around hills. **Scud running** is what pilots call flying lower and lower to stay under it, in less and less visibility, because the destination is "just one more mile". It is one of the most consistent ways VFR pilots die.

Here is how it goes. The ceiling ahead looks a little lower, so you descend 300 ft to stay under it. Visibility drops to 4 miles, which is still legal. The ground is rising toward the hills, so you are now 800 ft above it. The ceiling lowers again. You descend again. Now you are at 500 ft AGL in 2 miles of haze with hills on both sides, and a turn back needs room you no longer have. Each step was small. Together they left you no way out.

:::callout{type="safety"}
Scud running kills by subtraction: a little less ceiling, a little less visibility, a little less altitude, a little less room to turn, until there is none. The defense is a rule, not a feeling: decide **before you take off** the ceiling and visibility at which you will turn around, and when you reach them, turn around. Nobody who turned back ever regretted it on the ground.
:::

:::callout{type="decision"}
**The turn-back point.** Before every flight toward weather, write down two things: a **place** (the ridge, a highway, a VOR radial) and a **condition** (ceiling below 1,500 ft AGL, visibility below 5 SM, or the hilltops not visible). Reaching either one means you turn back or divert to the alternate, immediately, without a discussion. Challenge C11.2 "Marine layer at Half Moon Bay" grades this exact decision: you brief the point before departure, and making the safe call at or before it is a pass even though you never land at KHAF.
:::

## Ceilings in METARs

A METAR lists cloud layers from the bottom up, each with a coverage and a height in hundreds of feet AGL. The **ceiling** is the height of the lowest layer that is **broken** or **overcast**, or the vertical visibility into fog. Few and scattered layers do not make a ceiling, however low they are.

| Code          | Coverage (eighths of the sky)     | Counts as a ceiling? |
| ------------- | --------------------------------- | -------------------- |
| `CLR` / `SKC` | None                              | No                   |
| `FEW`         | 1–2                               | No                   |
| `SCT`         | 3–4                               | No                   |
| `BKN`         | 5–7                               | **Yes**              |
| `OVC`         | 8                                 | **Yes**              |
| `VV`          | Sky obscured; vertical visibility | **Yes**              |

So `FEW004 SCT009 BKN012 OVC020` has a ceiling of 1,200 ft AGL: the few at 400 ft and the scattered at 900 ft are below it, but they are holes in the sky, not a lid. Legally that is a ceiling of 1,200 ft. Practically, a scattered layer at 900 ft is most of a lid, and over the sea it will be a full one in half an hour.

Pilots and forecasts group ceiling and visibility into four **flight categories**, and the GFA from [[l11-2-forecasts-and-briefings]] colors the map with them:

| Category | Ceiling                  | and / or | Visibility         |
| -------- | ------------------------ | -------- | ------------------ |
| **VFR**  | Above 3,000 ft AGL       | and      | Above 5 SM         |
| **MVFR** | 1,000–3,000 ft           | and/or   | 3–5 SM             |
| **IFR**  | 500 ft to below 1,000 ft | and/or   | 1 SM to below 3 SM |
| **LIFR** | Below 500 ft             | and/or   | Below 1 SM         |

Marginal VFR is legal, barely, and it is where scud running starts. For a new pilot, treat MVFR at the destination as a no-go and MVFR en route as a divert.

::widget{name="metar-decoder" mode="explore"}

:::callout{type="verify"}
Check the ceiling definition (lowest broken or overcast layer, or vertical visibility) and the flight-category thresholds against the Aviation Weather Handbook. Confirm the METAR decoder widget's example set includes a multi-layer METAR with a low scattered layer so the "ceiling is the first BKN" point can be clicked through.
:::

:::quiz{id="l11-3-q3" type="single"}
A METAR reports `FEW004 SCT009 BKN012 OVC020`. What is the ceiling?

- [ ] 400 ft AGL
- [ ] 900 ft AGL
- [x] 1,200 ft AGL
- [ ] 2,000 ft AGL

---

The ceiling is the lowest broken or overcast layer: BKN012, which is 1,200 ft AGL. Few and scattered layers do not count, though a scattered layer at 900 ft over the coast is a warning that the real ceiling may be about to drop.
:::

## VFR minimums: the numbers you must know

The legal minimums from [[l6-2-airspace]] are the floor under every decision in this module. In the airspace you fly most, simplified and below 10,000 ft MSL:

| Airspace                | Flight visibility | Distance from clouds                              |
| ----------------------- | ----------------- | ------------------------------------------------- |
| Class B                 | 3 SM              | Clear of clouds                                   |
| Class C, D and E        | 3 SM              | 500 ft below, 1,000 ft above, 2,000 ft horizontal |
| Class G (day, low down) | 1 SM              | Clear of clouds                                   |

Two more rules bite at airports. To take off, land or fly the pattern VFR at an airport inside Class B, C, D or E surface airspace, such as Livermore or Palo Alto, the reported **ceiling must be at least 1,000 ft** and ground **visibility at least 3 SM**. If it is not, you need a special VFR clearance, which [[l15-3-light-gun-signals-lost-comms-and-special-vfr]] covers, or you wait.

Remember that cloud clearance is measured from you to the cloud. With a 1,200 ft ceiling at a 400 ft airport, the cloud base is 1,600 ft MSL and you must stay 500 ft below it: a 1,100 ft MSL pattern at an airport whose pattern altitude is 1,400 ft. That is not a pattern, that is a problem. The marine layer does not need to reach the ground to close an airport to you.

:::callout{type="verify"}
Check the table against 14 CFR 91.155 (basic VFR weather minimums) including the Class G day and night rows and the above-10,000 ft row, and the surface-area ceiling and visibility rule in 91.155(c) and (d). Confirm KLVK pattern altitude (1,400 ft MSL) and elevation (400 ft) in `airports.yaml`. Keep the learner table simplified; the regulation reference stays here.
:::

## Visibility, haze and smoke

Visibility can fall with no cloud at all. Haze and smoke collect under the same inversions that make the marine layer, and in fire season a METAR's `FU` (smoke) can take a clear-sky day down to 3 SM. Three things make reported visibility worse than it sounds:

- **Slant visibility.** The observer measures along the ground. Looking down through haze at a 30° angle, you see less. A runway reported at 4 SM may not appear until you are 2 miles out.
- **Flying into the sun.** Haze lights up when the sun is low and ahead of you. Westbound at 5 p.m. in smoke, a legal 5 SM is a wall.
- **No horizon.** In thick haze over water or flat ground, the horizon fades and your eyes have nothing to level the wings against. That is the beginning of the instrument flying problem that [[l11-6-the-go-no-go-decision-and-vfr-into-imc]] takes on.

:::quiz{id="l11-3-q4" type="single"}
Which of these conditions is marginal VFR (MVFR)?

- [ ] Ceiling 4,000 ft, visibility 8 SM
- [x] Ceiling 2,000 ft, visibility 4 SM
- [ ] Ceiling 800 ft, visibility 2 SM
- [ ] Ceiling 300 ft, visibility ½ SM

---

MVFR is a ceiling of 1,000–3,000 ft and/or visibility of 3–5 SM. The first option is VFR, the third is IFR, the fourth is LIFR. MVFR is legal for VFR flight in most airspace, which is exactly why it is dangerous.
:::

## Practice and next steps

Four things to carry forward:

1. Radiation fog: calm, clear nights inland; burns off. Advection fog: wind over cold water on the coast; may not.
2. The spread closing under 3 °C with an onshore wind means the marine layer is forming or holding.
3. The ceiling is the lowest broken or overcast layer. Few and scattered do not count, but they are a warning.
4. Set a turn-back point before you go. Reaching it means you turn.

**Practice.** This lesson feeds the `weather-codes` deck (fog types, flight categories, ceiling rules) and the `airspace-and-minimums` deck (the VFR minimums table).

**Fly it.** Challenge C11.2 "Marine layer at Half Moon Bay" flies KPAO to KHAF with the layer lower than forecast. Brief your turn-back point and alternate first; the decision is what is graded. It opens after [[l11-6-the-go-no-go-decision-and-vfr-into-imc]]. Next: [[l11-4-thunderstorms-icing-and-turbulence]], the unstable side of the weather.
