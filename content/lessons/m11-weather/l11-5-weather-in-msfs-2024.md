---
slug: l11-5-weather-in-msfs-2024
code: L11.5
module: m11-weather
order: 5
priority: P0
title: Weather in MSFS 2024
summary: Presets, custom weather and live weather in the sim, how to rebuild a real METAR layer by layer, and what the sim does not model.
estimatedMinutes: 15
prerequisites: [l0-2-setting-up-msfs-2024-for-training]
objectives:
  - Set up custom weather in MSFS 2024 to match a challenge brief or a real METAR.
  - Explain the limits of live weather in the sim and why challenges use custom weather.
  - Reproduce a challenge's weather preset exactly.
challenges: []
resources: [msfs-forums, msfs-official-site]
published: false
lastVerifiedAt: null
simVersion: null
---

## The weather you choose

In a real airplane the weather is given and you decide whether to fly in it. In the sim you choose the weather, which is a gift for training: you can put a 600 ft marine layer over Half Moon Bay on demand and fly the decision ten times in an afternoon. The price of the gift is honesty. You must know how the sim builds weather, how to set it up exactly as a brief asks, and which real hazards it only paints.

## Presets, custom and live

MSFS 2024 offers three ways to set the weather, chosen on the world map before the flight or changed in flight from the toolbar's weather panel:

| Mode       | What it is                                                                                | Use it for                                                                    |
| ---------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Preset** | A named, fixed scene such as clear skies, scattered clouds, overcast or rain              | Quick setup when the brief names a sim preset                                 |
| **Custom** | Every element set by hand: clouds, wind, visibility, precipitation, temperature, pressure | Every Learn to Fly challenge: the brief lists the values and you dial them in |
| **Live**   | Real-world weather pulled from a data service and rendered in the sim                     | Looking at today's sky; the P1 live-weather challenge C11.4                   |

Challenges use custom weather for the reason they did in [[l0-2-setting-up-msfs-2024-for-training]]: repeatability. A brief that says `WX_MARINE_LAYER` has to mean the same cloud base for every learner, every time.

:::callout{type="verify"}
Sim check: confirm the MSFS 2024 menu paths (weather on the world map before a flight; the toolbar weather panel in flight), record the preset names the sim ships (Clear Skies, Few Clouds, Scattered Clouds, Broken Clouds, Overcast, Rain, Snow, Storm, any others) with the sim version, and note which service feeds live weather and how often it refreshes.
:::

## The custom weather controls

The custom panel is a stack of layers. Each control maps onto something you read in [[l11-2-forecasts-and-briefings]]:

| Control           | What it sets                                                       | METAR equivalent                      |
| ----------------- | ------------------------------------------------------------------ | ------------------------------------- |
| **Cloud layers**  | Base and top altitude, coverage (a few wisps to solid), density    | `FEW`, `SCT`, `BKN`, `OVC` and height |
| **Precipitation** | Rain or snow intensity from a cloud layer                          | `-RA`, `RA`, `SN`                     |
| **Visibility**    | How far you can see; may be labeled as haze or aerosol density     | `10SM`, `4SM`, `BR`, `HZ`, `FU`       |
| **Wind layers**   | Direction, speed and gusts at the surface and at altitudes you add | `27012G20KT` and the winds aloft      |
| **Temperature**   | Surface temperature                                                | `22/09` (the first number)            |
| **Pressure**      | Altimeter setting at the surface                                   | `A3010`                               |
| **Humidity**      | How moist the air is; affects haze and cloud formation             | The dewpoint, loosely                 |

Add cloud layers from the bottom up, as a METAR lists them. Set the lowest layer first, check its base against the brief, then add the next. A gust value in the wind layer gives you the gusty approaches of [[l10-1-crosswinds-revisited-gusts-wind-shear-and-limits]].

:::callout{type="verify"}
Sim check: confirm the control names and units in the MSFS 2024 custom weather panel: cloud bases in feet MSL or AGL (MSFS developers have said layer altitudes are MSL, which changes every Module 11 preset; confirm in the sim), visibility as a distance or a haze slider, pressure in inHg or hPa, and whether separate turbulence or thermal controls exist. Shot list: "custom weather panel with a single overcast layer at 600 ft over KHAF, annotated".
:::

:::quiz{id="l11-5-q1" type="single"}
A challenge brief specifies `WX_MARINE_LAYER`. Which weather mode do you use?

- [ ] Live weather, because the marine layer is real
- [ ] The "Overcast" preset
- [x] Custom weather, set to the values the brief lists
- [ ] Whatever the sim loads by default

---

Custom weather, entered from the brief's values. Live weather may or may not have a marine layer today, and a preset's overcast is at the preset's height, not the brief's.
:::

## Recreating a real METAR

Take an example METAR for Half Moon Bay (invented for this lesson): `KHAF 131655Z 30008KT 3SM BR OVC006 14/13 A3012`. Rebuild it in custom weather:

| METAR group | Set in the sim                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| `30008KT`   | Surface wind layer: 300° at 8 kt, no gusts                                                                                |
| `3SM BR`    | Visibility about 3 statute miles (about 5 km). Mist means thick haze; raise the humidity if the sim offers it             |
| `OVC006`    | One cloud layer, solid coverage, base 600 ft above the airport. KHAF is at 66 ft, so about 670 ft MSL if the sim uses MSL |
| `14/13`     | Temperature 14 °C; humidity high                                                                                          |
| `A3012`     | Pressure 30.12 inHg                                                                                                       |

Then check it from the cockpit. Set the altimeter to 30.12 and confirm the field elevation reads about right. Taxi out and look up: the base should be a few hundred feet overhead. Climb into it and note the altitude the windscreen goes white. If it is more than 100 ft off the brief, adjust the layer and try again; Challenge C11.3 "Inadvertent IMC: the 180" depends on the cloud base being where the brief says.

:::callout{type="tip"}
Save your custom weather as a named preset in the sim after you build it. Name it after the Learn to Fly preset (`WX_MARINE_LAYER_600`) and you will never dial it in again.
:::

:::callout{type="verify"}
Sim check: confirm MSFS 2024 can save custom weather as a user preset and the menu path; fly through a layer three times and record the entry altitude each time to see how precisely the sim holds a cloud base (v2 Section 9.3); confirm the visibility control's units so the 3 SM to about 5 km conversion matches its label.
:::

:::quiz{id="l11-5-q2" type="single"}
A METAR reports `OVC008` at an airport with an elevation of 400 ft. Where should the base of your sim cloud layer be?

- [ ] 8,000 ft
- [x] 800 ft above the airport, about 1,200 ft MSL
- [ ] 400 ft MSL
- [ ] 80 ft above the airport

---

METAR cloud heights are in hundreds of feet above ground level, so `OVC008` is an overcast at 800 ft AGL, about 1,200 ft MSL over a 400 ft airport. Check whether the sim's layer control wants AGL or MSL before you enter it.
:::

## What the sim gets right, and what it only paints

The sim's atmosphere is good enough for everything this course asks of it. It is not the real sky, and this is the lesson to say so plainly.

:::callout{type="sim"}
**What works.** Density altitude is real: temperature and pressure change engine power and takeoff distance ([[l9-1-density-altitude-and-performance]]). Wind layers, gusts and crosswinds are modeled and the airplane responds honestly. Cloud layers block the view like real cloud, so a marine layer or a cloud bank is a true view-limiting device, which is what makes C11.2 and C11.3 possible. Visibility and haze reduce what you can see at about the distances you set.

**What is only painted, or uncertain.** Thunderstorms are visuals with some bumps; they do not produce the hail, microbursts or gust fronts of [[l11-4-thunderstorms-icing-and-turbulence]], so a sim storm teaches nothing about real storms except what they look like. Icing may or may not be modeled, depending on the version; never learn ice behavior from the sim. Turbulence in and under cloud is mild compared with the real thing. Live weather is a snapshot that can lag the real METAR by an hour and smooths out local detail. There are no AIRMETs, SIGMETs or PIREPs inside the sim, and the sim's ATIS reads the sim's weather, not the real one.

**What this means for you.** Use the sim to practice setting up, reading and deciding. Use the real products and the real minimums to decide whether a real flight would go. The decision skill transfers; the feel of a storm does not, and you do not want it to.
:::

:::callout{type="verify"}
Sim check: in the current sim version, whether airframe and pitot icing are modeled (visually and in performance); whether thunderstorm presets produce turbulence, wind shear or lightning effects on the airplane; the live-weather refresh interval and typical lag against the real METAR; and whether the sim ATIS reads the active custom weather. Record the sim version in `simVersion` when verified.
:::

## Practice and next steps

Three things to carry forward:

1. Challenges always use custom weather from the brief's values. Build cloud layers bottom up and check the base from the cockpit.
2. A METAR maps onto the custom panel group by group: wind, visibility, clouds, temperature, pressure.
3. The sim models wind, cloud and density altitude well; it only paints thunderstorms and icing.

**Practice.** This lesson has no flashcard deck of its own, but rebuild the METAR-to-sim table from memory before your first Module 11 challenge.

**Fly it.** Challenge C11.4 "Live-weather cross-country" (P1) switches live weather on, has you brief it for real, and flies KLVK to KMRY and back if the briefing says go. Before that, [[l11-6-the-go-no-go-decision-and-vfr-into-imc]] teaches the decision itself, and what to do when you get it wrong.
