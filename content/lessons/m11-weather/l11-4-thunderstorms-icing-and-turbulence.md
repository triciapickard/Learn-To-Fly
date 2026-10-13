---
slug: l11-4-thunderstorms-icing-and-turbulence
code: L11.4
module: m11-weather
order: 4
priority: P0
title: Thunderstorms, icing and turbulence
summary: The three weather hazards a Skyhawk cannot fight, what makes each one, how far away to stay, and how to fly the bumps you cannot avoid.
estimatedMinutes: 20
prerequisites: [l11-1-weather-theory-air-masses-fronts-and-stability]
objectives:
  - State the three ingredients of a thunderstorm and the distance to keep from one.
  - Explain why the Skyhawk must avoid icing and what to do if ice starts to form.
  - Recognize turbulence in a forecast and fly at the right speed through it.
challenges: []
resources: [faa-weather-handbook, aim-7]
published: false
lastVerifiedAt: null
simVersion: null
---

## The hazards you do not fight

Most of this module is about weather you manage: a marine layer you wait out, a wind you plan around. This lesson is about three things you do not manage. Thunderstorms, structural icing and severe turbulence can break a Skyhawk or take it out of your control, and the only correct technique for each is distance.

:::callout{type="safety"}
No aircraft in this course flies near thunderstorms or in icing conditions. Not in a challenge, not in a lesson, not "just to see what it looks like". The sim can show you a storm; it cannot show you what the storm does to an airplane. Learn the hazards here, then plan every flight so you never meet them.
:::

## The thunderstorm life cycle

Three ingredients, all at once, make a thunderstorm:

1. **Moisture.** Enough water vapor to feed the cloud.
2. **Unstable air.** A lapse rate steep enough that rising air keeps rising ([[l11-1-weather-theory-air-masses-fronts-and-stability]]).
3. **A lifting action.** Something to start the parcel upward: a front, afternoon heating, or air forced up a mountain.

Take any one away and you get, at worst, a shower. Put all three together and a cumulus cloud grows through three stages:

| Stage           | What is happening inside                                                       | What you see                                      |
| --------------- | ------------------------------------------------------------------------------ | ------------------------------------------------- |
| **Cumulus**     | Updrafts only; the cloud builds upward, often at thousands of feet per minute  | A towering cumulus with a hard, cauliflower top   |
| **Mature**      | Precipitation starts; updrafts and downdrafts side by side. **Most dangerous** | Rain reaching the ground, an anvil top, lightning |
| **Dissipating** | Downdrafts win; the cloud rains itself out                                     | A spreading anvil, softening edges, rain shafts   |

The mature stage is where everything lives: lightning, hail, severe turbulence, wind shear, heavy rain, and **microbursts**, sudden downdrafts that spread out at the ground with more sink than any light airplane can out-climb. The hazards reach well outside the cloud. Hail falls from the anvil miles from the rain, and the gust front races ahead of the storm at the surface.

The rule for distance comes from the AIM: avoid any thunderstorm identified as severe or giving an intense radar echo by **at least 20 nm**, never fly under the anvil, and never try to fly beneath a storm even if you can see through to the other side. Embedded storms hidden in a layer of stratus are the worst case, because you cannot see them to avoid them; a Convective SIGMET for embedded thunderstorms ends the flight. Our home weather makes this easy: the Bay Area sees only a few storms a year. The Sierra in summer is a different story, which [[l13-1-mountain-weather-and-airflow]] takes up.

:::callout{type="verify"}
Check the thunderstorm avoidance guidance against the current AIM paragraph "Thunderstorm flying" (AIM 7-1-27 in recent editions; the number has moved) for the exact wording: 20 nm for severe storms or intense echoes, the anvil, "never fly under", and the note that any storm with tops at 35,000 ft or higher should be treated as severe. Confirm the three-stage life cycle names and the microburst description against the Aviation Weather Handbook.
:::

:::quiz{id="l11-4-q1" type="multi"}
Which three ingredients must all be present for a thunderstorm to form? Pick all that apply.

- [x] Moisture
- [x] Unstable air
- [x] A lifting action
- [ ] A strong temperature inversion
- [ ] Calm surface wind

---

Moisture, unstable air and a lifting action. An inversion is the opposite of unstable air; it stops lift and prevents storms. Surface wind is not an ingredient.
:::

:::quiz{id="l11-4-q4" type="single"}
How far should you stay from a severe thunderstorm?

- [ ] 5 nm
- [ ] 10 nm
- [x] At least 20 nm
- [ ] Clear of the rain is enough

---

At least 20 nm, and never under the anvil. Hail, turbulence and gust fronts extend well beyond the visible cloud and the rain. Clear of the rain is not clear of the storm.
:::

## Icing: why the Skyhawk says no

**Structural icing** forms when two things meet: **visible moisture** (cloud, rain, drizzle) and a temperature **at or below freezing** on the airframe. Supercooled water droplets hit the wing, the strut, the propeller and the pitot tube, and freeze on contact.

| Ice type  | Looks like                  | Forms when                                 | Why it matters                                       |
| --------- | --------------------------- | ------------------------------------------ | ---------------------------------------------------- |
| **Rime**  | Rough, milky, opaque        | Small droplets freeze instantly            | Builds on leading edges; spoils the airflow          |
| **Clear** | Smooth, glassy, hard to see | Large droplets spread back before freezing | Heavy, hard to see, hard to shed; the most dangerous |
| **Mixed** | Both at once                | A mix of droplet sizes                     | Worst of both                                        |

Ice does four things to a wing at once: it ruins the shape so **lift drops**, it adds **drag**, it adds **weight**, and the spoiled airflow means the wing **stalls at a higher speed** than the one you learned. A Skyhawk with a quarter inch of rough ice on the leading edge can lose a large share of its lift, and the stall warning, which is calibrated for a clean wing, may not warn you. Ice on the pitot tube takes the airspeed with it; that is why the Skyhawk has a pitot heat switch, and why it goes on whenever you are in visible moisture near freezing.

The 172S has no boots, no heated wings, no way to remove ice in flight. Its limitations say so: **flight into known icing conditions is prohibited**. "Known" includes forecast: AIRMET Zulu or an icing shade on the GFA along your route at your altitude means that route or altitude is off.

If ice ever starts to form anyway, there is one answer: **get out**. Turn back toward the air you came from, which you know was ice-free. Descend into warmer air if terrain allows and the temperature at lower altitude is above freezing (the winds-aloft temperatures from [[l11-2-forecasts-and-briefings]] tell you). Do not climb into the cloud hoping to top it. Carry extra speed on the approach, use less flap, and land at the nearest suitable airport. And on the ground, remove **all** frost from the wing before takeoff; even a thin layer of frost raises the stall speed.

:::callout{type="classic"}
The G1000 Skyhawk's engine is fuel-injected, so it has no carburetor and no carburetor heat. If you fly the classic steam-gauge variant and it is carbureted, carburetor ice is a separate hazard that forms in clear air at temperatures well above freezing, and the answer is the carburetor heat knob. Check which engine your variant has.
:::

:::callout{type="verify"}
Confirm the 172S POH Section 2 limitation wording on flight into known icing (do not quote it; keep the paraphrase). Confirm the sim's Skyhawk variants: the G1000 NXi version should be fuel-injected (no carb heat); check whether the classic variant is carbureted and whether MSFS 2024 models airframe or pitot icing at all (see [[l11-5-weather-in-msfs-2024]]). Check the rime/clear/mixed descriptions and the frost guidance against the Aviation Weather Handbook and PHAK Chapter 12.
:::

:::quiz{id="l11-4-q3" type="single"}
What two conditions must both be present for structural ice to form on the airframe?

- [ ] Rain and a temperature below 10 °C
- [x] Visible moisture and a temperature at or below freezing
- [ ] Cloud and a temperature above freezing
- [ ] High altitude and strong wind

---

Structural icing needs visible moisture (cloud, rain, drizzle) and a temperature at or below 0 °C. Cloud above freezing gives you wet, not ice; cold clear air gives you cold, not ice. Both together give you ice.
:::

## Turbulence and the speed that keeps you safe

Turbulence is air moving in ways the airplane has to follow. It comes in several flavors, and the forecast names them:

| Type                     | Cause                                                  | Where you will meet it                                                                                                      |
| ------------------------ | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| **Mechanical**           | Wind tumbling over hills, buildings, tree lines        | Downwind of the coastal ridges; the approach to Runway 25 at Livermore on a windy day                                       |
| **Thermal (convective)** | Rising bubbles of warm air                             | Below about 5,000 ft on hot afternoons; smooth again above the inversion                                                    |
| **Frontal**              | The wind shift and lifting at a front                  | Crossing a cold front                                                                                                       |
| **Wind shear**           | Wind changing speed or direction over a short distance | Low level near storms, fronts and inversions; the gust factor in [[l10-1-crosswinds-revisited-gusts-wind-shear-and-limits]] |
| **Mountain wave**        | Strong wind across a ridge                             | The Sierra; see [[l13-1-mountain-weather-and-airflow]]                                                                      |

Pilots report it in four grades, and AIRMET Tango or a SIGMET tells you which to expect:

| Grade        | What it feels like                                                                           | For a Skyhawk                                          |
| ------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Light**    | Slight bumps; a little strain against the belt                                               | Normal                                                 |
| **Moderate** | Definite jolts; altitude and attitude change but you stay in control; unsecured objects move | Slow down, tighten the belt, consider another altitude |
| **Severe**   | Large, abrupt changes; momentary loss of control; objects thrown about                       | Not where you go. Turn back, land                      |
| **Extreme**  | The airplane is tossed about and practically impossible to control                           | Structural damage possible                             |

Now the number. **Maneuvering speed**, Va, is {{vspeed.va}} at maximum weight for the Skyhawk. At or below Va, a sharp gust or a full control input makes the wing **stall before it can overload** the airframe; above Va, the same gust can bend something. So the rule in rough air is simple: **slow to Va or below**, then fly attitude, not altitude. Accept that the altitude wanders a hundred feet; chasing it with big control inputs loads the airplane up more than the bumps do.

One catch: Va is lower when the airplane is lighter, because a lighter wing reaches its limit load at a lower speed. The token above is the maximum-weight figure. Solo with half tanks, slow another 10 kt or so. Lower Va for lower weight is one of the few places in flying where being light is not a bonus.

:::callout{type="tip"}
Do not confuse Va with the top of the green arc (Vno, {{vspeed.vno}}). The green arc is for smooth air. In turbulence, Va is your limit, and it is well inside the green.
:::

:::callout{type="verify"}
Confirm Va at the three POH weights (planned as 105, 98 and 90 KIAS at 2,550, 2,200 and 1,900 lb; v2 Section 8.1, ⚠ verify against POH Section 2) and whether `aircraft.yaml` gains per-weight tokens; if so, replace the "another 10 kt or so" prose with tokens. Check the turbulence intensity definitions against the AIM PIREP turbulence table (AIM 7-1-23 in recent editions).
:::

:::quiz{id="l11-4-q2" type="single"}
You hit moderate turbulence in cruise. What speed should you fly?

- [ ] Vno, the top of the green arc
- [ ] Vne, so you get through it faster
- [x] At or below Va for your weight
- [ ] Vy, the best rate of climb

---

At or below maneuvering speed for your current weight. Below Va the wing stalls before a gust can overload the structure. Vno is only for smooth air, and Vne is never the answer.
:::

## Practice and next steps

Four things to carry forward:

1. Thunderstorms need moisture, unstable air and lift. Stay at least 20 nm from a severe one and never under the anvil.
2. Ice needs visible moisture and freezing temperatures. The Skyhawk is not approved for known icing: if it forms, turn back and descend to warmer air.
3. In turbulence, slow to Va for your weight and fly attitude, not altitude.
4. AIRMETs Tango and Zulu, SIGMETs and Convective SIGMETs are the briefing's stop signs for all three.

**Practice.** This lesson feeds the `weather-codes` deck (thunderstorm stages, ice types, turbulence grades) and the `limits-and-speeds` deck (Va at {{vspeed.va}}).

**Next.** [[l11-5-weather-in-msfs-2024]] shows how the sim builds weather and, just as important, which of these hazards it does not model.
