---
slug: l12-1-night-vision-and-illusions
code: L12.1
module: m12-night-flying
order: 1
priority: P0
title: Night vision and illusions
summary: How your eyes work in the dark, why it takes half an hour to see properly, and the three illusions that fool night pilots.
estimatedMinutes: 15
prerequisites: [l8-2-preparing-for-your-checkride]
objectives:
  - Explain dark adaptation and why a single bright light undoes it.
  - Use off-center viewing to find a dim light or a dark runway.
  - Name three night illusions and the counter for each one.
challenges: []
resources: [faa-pilot-safety-brochures, phak-ch17, afh-ch11]
published: false
lastVerifiedAt: null
simVersion: null
---

<!-- ltf:unverified-warning:start (managed by `npm run content:warnings`, do not edit) -->

> [!CAUTION]
> **UNVERIFIED CONTENT: NOT FOR LEARNING USE**
>
> This lesson is an unverified draft. It has not been checked in Microsoft Flight
> Simulator 2024 or against official sources, so its numbers, procedures and steps may be
> wrong. Do not use it to learn to fly, in the sim or in a real aircraft. Only verified
> content is published on the Learn to Fly site.

<!-- ltf:unverified-warning:end -->

## What changes at night

At 9 p.m. at Livermore, the runway is a pair of white dotted lines and the hills east of the field are invisible. Everything you learned in Course 1 still works at night, because the airplane flies the same way in the dark. Your eyes are what change, and this lesson covers how.

:::callout{type="real-world"}
In a real airplane, night flying is a separate block of training. A student pilot flies at least 3 hours at night with an instructor, including a night cross-country and 10 takeoffs and landings to a full stop, before the private pilot checkride. Nothing in this module replaces that. The sim gives you the procedures and the habits. The instructor gives you the judgment.
:::

## Rods and cones

The back of your eye has two kinds of light sensors. **Cones** sit in the center of your vision. They see color and fine detail, and they need plenty of light. **Rods** surround the cones. They see only shades of gray, they are poor at detail, but they work in very dim light and they are good at spotting movement.

The center of your vision, the spot you point at whatever you are looking at, has almost no rods. In daylight you never notice. At night it becomes a blind spot a few degrees wide. Look straight at a faint star and it disappears. Look slightly to one side and it comes back.

| Sensor | Where in your vision | Good at            | Needs         |
| ------ | -------------------- | ------------------ | ------------- |
| Cones  | The center           | Color, fine detail | Bright light  |
| Rods   | Around the center    | Dim light, motion  | Time to adapt |

The rest of this lesson follows from that table. You see at night with your rods, and your rods are slow to adapt, easy to blind and missing from the center of your vision.

## Dark adaptation

Walk out of a lit hangar onto a dark ramp and at first you see almost nothing. After 5–10 minutes your cones have adjusted and you can make out shapes. Your rods keep improving for up to about 30 minutes. That full sensitivity is what pilots call being **dark adapted**, and you lose it easily. One bright white light, such as a flashlight in the face, a lightning flash or a phone screen at full brightness, puts you back near the start.

Red light disturbs your rods less than white light, so many cockpit flashlights have a red mode. The trade-off is that red light washes out red ink, so the magenta and red symbols on a sectional chart can vanish. Most pilots use dim white light for reading charts and red or very dim light for everything else.

A few things make night vision worse before you even start: tiredness, carbon monoxide, smoking and altitude. Night vision degrades noticeably above about 5,000 ft, even if you feel fine.

:::quiz{id="l12-1-q1" type="single"}
After 25 minutes in a dark cockpit, someone shines a white flashlight into the cabin for 3 seconds. What happens to your night vision?

- [ ] Nothing; 3 seconds is too short to matter
- [x] Much of your dark adaptation is lost and takes minutes to recover
- [ ] Only your color vision is affected
- [ ] It improves, because your eyes recalibrate

---

A brief bright light resets much of your rods' adaptation, and recovery takes minutes, not seconds.
:::

## Off-center scanning

Because the center of your vision is blind in the dark, you find things at night by not looking straight at them. To see a dim light, an unlit airplane or the far end of a runway, look about 5–10° to one side of where you expect it. The rods around the center pick it up.

Then keep your eyes moving. Scan the sky in short stops, a second or two each, rather than sweeping. Rods detect motion well, so a slow, stepped scan finds traffic that a stare never will. Staring also starts one of the illusions below.

The same trick works on the ground. A dark taxiway edge or a hold-short line is easier to find in the corner of your eye than straight ahead.

## Black hole, autokinesis and false horizon

Your brain builds a picture of the world from what it can see. At night it has less to work with, so it guesses, and some of those guesses can kill you. Learn these by name.

| Illusion                | What you feel                                          | What is happening                                                                                                   | The counter                                                                                              |
| ----------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Black-hole approach** | You feel high, so you descend early and fly too low    | No ground lights between you and the runway (water, fields, desert). Your brain judges height from the runway alone | Fly the PAPI or VASI, stay at pattern altitude until the normal descent point, cross-check the altimeter |
| **Autokinesis**         | A single light seems to drift or move                  | You stared at one point of light for more than a few seconds. Tiny eye movements make it appear to wander           | Shift your gaze, keep scanning, check the instruments, use more than one reference                       |
| **False horizon**       | You level the wings against something that is tilted   | A sloping cloud deck, a lit highway, a shoreline, or stars below a cloud layer that look like ground lights         | Trust the attitude indicator, not the view                                                               |
| **Featureless terrain** | You feel higher than you are over dark ground or water | Nothing in view gives a sense of scale. It is the black-hole effect away from the runway                            | Altimeter and planned altitudes. Never descend "by eye" at night                                         |

The black-hole approach is the most dangerous of these. A runway at the edge of a dark area, such as Watsonville with Monterey Bay beyond it, looks and feels normal while you fly a long, low approach into the ground short of the threshold. The runway's shape tells you that you are on path, and the dark ground below gives you nothing to correct it.

:::callout{type="verify"}
Widget pending: W28 (Night Vision and Illusions, P1) is embedded here once Phase 20 ships it: an eye diagram, a dark-adaptation timer, an off-center viewing demo and a side-view black-hole approach showing perceived versus actual glide path. Until then the table above carries the content. Screenshot for the shot list: "black-hole approach at KWVI".
:::

:::quiz{id="l12-1-q2" type="single"}
A black-hole approach makes you feel…

- [ ] lower than you are, so you fly too high
- [x] higher than you are, so you fly too low
- [ ] faster than you are, so you land long
- [ ] as if the runway is moving

---

With no lights between you and the runway, your brain overestimates your height. Pilots descend early and fly a dangerously low approach. Fly the PAPI or VASI and cross-check the altimeter instead of trusting your eyes.
:::

:::quiz{id="l12-1-q3" type="multi"}
Which of these protect your night vision? Pick all that apply.

- [x] Dimming the panel and the screens as low as you can read them
- [x] Looking slightly to one side of a dim light
- [ ] Staring at a single light to keep it in focus
- [x] Avoiding bright white light for 30 minutes before you fly
- [ ] Turning the landing light on in cruise so you can see ahead

---

Dim lighting, off-center viewing and avoiding bright light all help. Staring at one light causes autokinesis, and the landing light in cruise lights nothing useful ahead while its glare costs you dark adaptation.
:::

## What the sim can and can't show

The sim draws a convincing night, but it cannot do anything to your rods. A monitor is a light source, so you will never experience true dark adaptation at your desk.

The sim does reproduce geometry. The black-hole approach is a problem of missing visual cues, and the sim removes the same cues. A false horizon from a sloping cloud deck looks the same on a screen. So the illusions are worth practicing here. In a real airplane they arrive when your eyes are tired and there is no pause button.

:::callout{type="sim"}
Your screen gives your eyes more light than they would get in a real cockpit, and the sim's ambient light comes from a setting rather than the moon. Treat every night challenge as practice for procedures and sight pictures. Real night vision is slower and worse than what you see on screen.
:::

:::callout{type="tip"}
Dim your room and your screen before a night challenge: room lights off, monitor brightness down, and the sim's panel and flood lights dimmed rather than left at daytime brightness. It will not dark-adapt you, but it brings the sight pictures closer to reality and trains the habit of a dim panel.
:::

:::callout{type="verify"}
Sim check: confirm the MSFS 2024 night rendering notes in v2 Section 9.2 (how night is chosen in free flight, moon phase and moonlight, Bay Area city lights, cockpit lighting controls) and record the sim version checked.
:::

## Practice and next steps

To carry forward:

1. Rods see at night, they take about 30 minutes to adapt, and one bright light undoes it.
2. Look 5–10° to one side of what you want to see, and keep scanning.
3. For black hole, autokinesis and false horizon, the counter is always the instruments and the glide path lights.

**Practice.** This lesson has no flashcard deck of its own. The three illusions return in the knowledge checks of [[l12-3-night-operations-preflight-to-landing]] and in the Module 12 challenges.

**Next.** You cannot fly at night without reading lights, so [[l12-2-aircraft-and-airport-lighting]] teaches the colors and the codes: what the beacon means, how to read a PAPI, and how to turn on a dark airport with your microphone.
