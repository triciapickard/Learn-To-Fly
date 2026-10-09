---
slug: l0-2-setting-up-msfs-2024-for-training
code: L0.2
module: m0-getting-started
order: 2
priority: P0
title: Setting up MSFS 2024 for training
summary: Set up your controls, assistance options, views and a free flight so you learn real skills from the first flight.
estimatedMinutes: 20
prerequisites: [l0-1-welcome-how-learn-to-fly-works]
objectives:
  - Configure your controls so every essential function works without the mouse.
  - Apply the Learn-To-Fly Training assistance profile.
  - Set up views and a free flight with a chosen airport, weather and time of day.
challenges: []
resources: [msfs-official-site, msfs-forums]
published: true
lastVerifiedAt: 2026-09-28
simVersion: 'MSFS 2024 (1.8.16.0)'
---

## Choose your controller profile

You can learn to fly with any controller, but some make certain skills easier. Find your setup below. The key difference is **rudder**: the pedals (or a twist grip) that keep the airplane's nose lined up with where it is going. Every setup below has a way to use the rudder, so leave **Auto-Rudder off** whichever one you fly with.

### Gamepad only

A gamepad works for the whole course. By default the **triggers** control the rudder: **LT** for left rudder and **RT** for right rudder. Squeeze them gently; a light touch is all most turns and takeoffs need. The sticks are small, so use gentle movements and a softer sensitivity curve.

### Joystick with a twist grip

Twisting the stick controls the rudder. Most joysticks also have a throttle lever. Add a little dead zone to the twist axis so you don't press rudder by accident.

### Yoke, throttle quadrant and rudder pedals

The closest to a real cockpit. Bind the toe brakes on the pedals if they have them.

:::callout{type="sim"}
Auto-Rudder is an assist the real airplane doesn't have. In the real Skyhawk you use rudder in every turn and on every takeoff, so learn it from the first flight. If you ever fly with Auto-Rudder on, the lessons still explain what your feet would be doing.
:::

## Essential bindings

Bind these so you never need the mouse while flying. Test each one before moving on.

| Function                      | Test it                                                               |
| ----------------------------- | --------------------------------------------------------------------- |
| Pitch and roll                | Move the control: the yoke in the cockpit follows.                    |
| Rudder (axis if you have one) | Press or twist: the rudder pedals in the cockpit move.                |
| Elevator trim up and down     | Press a few times: the trim wheel turns and the trim indicator moves. |
| Flaps up and down             | With the battery on, each press moves the flap indicator one step.    |
| Brakes and parking brake      | The brake annunciation or the parking brake handle changes.           |
| Throttle                      | The throttle knob moves in and out.                                   |
| Mixture                       | The red mixture knob moves in and out.                                |
| Pause                         | The sim freezes and shows it is paused.                               |
| Look around and reset view    | You can look left and right and snap back to the default view.        |

:::callout{type="tip"}
Bind pause to an easy button you can reach without looking. Pausing is how you learn.
:::

## Sensitivity curves

A desktop joystick or gamepad has only a few inches of travel, and it gives you no feel of the airflow. Beginners tend to over-control: they move the stick too far, the airplane reacts, they correct too far the other way.

Two settings help:

- **A small dead zone** (a few percent) so the airplane doesn't twitch when your hand rests on the stick.
- **A softer curve** (less sensitivity near the center) so small movements make small changes, and full deflection is still available when you need it.

Start gently and adjust after a few flights. If turns feel sluggish, add sensitivity back.

## The Learn-To-Fly Training assistance profile

MSFS 2024 can help with almost everything. To learn real skills, turn most helpers off. From the main menu, open **Settings → General → Assistances**. The names below are the ones the sim uses (checked in MSFS 2024 version 1.8.16.0); they can change between sim updates.

| Setting                                                                            | Section             | Recommended                              | Why                                            |
| ---------------------------------------------------------------------------------- | ------------------- | ---------------------------------------- | ---------------------------------------------- |
| Auto-Rudder                                                                        | Piloting Assistance | Off                                      | Every controller can use rudder (see above).   |
| AI Auto-Trim                                                                       | Piloting Assistance | Off                                      | Trimming is a core skill.                      |
| Automixture                                                                        | Piloting Assistance | On for Module 0 only, then off           | You'll learn mixture in Module 1.              |
| Assisted Controller Sensitivity                                                    | Piloting Assistance | Off                                      | You set your own curves (above).               |
| Display active Waypoint Marker, Flight Path                                        | Visual Assistance   | Off                                      | Learn the runway picture and find your way.    |
| Taxi Ribbon                                                                        | Visual Assistance   | On for Modules 0–2, then off             | Lesson 3.2 teaches airport signs and markings. |
| Piloting and Controls Notifications                                                | Visual Assistance   | On for Modules 0–2                       | Helps you learn the controls.                  |
| Disable Crash Damage, Disable Aircraft Stress Damage, Disable Engine Stress Damage | Realism             | On (damage off) until Module 4, then off | Honest consequences, when you're ready.        |
| Unlimited Fuel                                                                     | Realism             | Off                                      | Fuel management matters.                       |

:::callout{type="tip"}
The three damage settings are worded backwards: switching **Disable Crash Damage** _on_ turns crash damage _off_. From Module 4, switch all three off so the airplane can be damaged.
:::

![The Piloting Assistance section of the MSFS 2024 assistance settings, with Auto-Rudder, AI Auto-Trim and Assisted Controller Sensitivity all switched off](m0-l2-assistance-piloting.webp 'Piloting Assistance, set as the table recommends (MSFS 2024 1.8.16.0). Automixture and the glider, helicopter and balloon assists are left out of this picture.')

![The Visual Assistance and Realism sections of the MSFS 2024 assistance settings, with Taxi Ribbon and Piloting and Controls Notifications on, the three Disable Damage switches on and Unlimited Fuel off](m0-l2-assistance-visual-realism.webp 'Visual Assistance and Realism, set for Module 0 (MSFS 2024 1.8.16.0).')

![More MSFS 2024 assistance switches: G-Suit, AI Radio Communications (ATC), ATC enforce flight plan, Airport Services Motion and Start flight without walkaround](m0-l2-assistance-other.webp 'The rest of the page. Leave these as they are for now; each challenge says when it needs ATC.')

:::quiz{id="l0-2-q1" type="single"}
Which assistance should be off so that you learn to trim?

- [ ] Auto-Rudder
- [x] AI Auto-Trim
- [ ] Piloting and Controls Notifications
- [ ] Unlimited Fuel

---

AI Auto-Trim does the trimming for you. Turn it off: trimming the airplane so it holds its attitude by itself is one of the most important skills in Module 2.
:::

:::quiz{id="l0-2-q2" type="single"}
You fly with a gamepad. How do you use the rudder?

- [x] Squeeze the triggers: LT for left rudder, RT for right
- [ ] You can't, so turn Auto-Rudder on
- [ ] Push the right stick left or right
- [ ] Only with rudder pedals

---

The gamepad triggers control the rudder by default, so leave Auto-Rudder off and learn to use it from the first flight, just as you would in the real airplane.
:::

## Views

Good views make flying much easier:

- **The default cockpit view** should show the top of the instrument panel and plenty of windshield. Most of your flying happens looking outside.
- **An instrument close-up** is handy for reading the PFD or tuning radios. Switch to it, read, and switch back.
- **Look left and right.** In the traffic pattern you need to see the runway off your wing. Practice looking with a hat switch or stick.

Save a custom camera for your favorite cockpit view so you can snap back to it with one button.

## Setting up a free flight

Every challenge lists its setup. Here is a worked example you can use for practice:

1. Choose **Free Flight** and select the **Cessna 172 Skyhawk** with the **G1000 NXi** panel.
2. Choose the departure airport: type **KLVK** (Livermore Municipal) and choose a parking spot on the ramp.
3. Set the weather to **clear skies** with calm wind, or choose custom weather and set it layer by layer.
4. Set the time to **10:00** local on a spring day.
5. Check fuel and payload: one pilot and about three quarters fuel.
6. Apply your assistance profile, then start the flight.

:::quiz{id="l0-2-q3" type="single"}
Why do challenges specify custom weather instead of live weather?

- [ ] Live weather is not available in MSFS 2024
- [x] So everyone flies in the same conditions
- [ ] Custom weather makes the sim run faster
- [ ] Real pilots only fly in calm weather

---

Custom weather makes a challenge repeatable: everyone who flies it gets the same wind, clouds and visibility, and you can fly it again in the same conditions to see if you improved.
:::

## The EFB and its map

MSFS 2024 gives you an **EFB** (electronic flight bag): a tablet in the cockpit, like the ones real pilots carry. Its **map** shows your airplane on a moving map. It's a great safety net while you learn. In Module 6 you'll put it away for pilotage challenges and navigate with a chart instead.

The EFB also has a **checklist** section for the Skyhawk. Learn-To-Fly has its own simplified checklists too (**Reference → Checklists**); Lesson 1.4 explains how the two fit together.

## Keeping this site open while you fly

MSFS 2024 has no built-in web browser. The toolbar (move the mouse to the top of the screen) holds the sim's own panels, but it can't show this site. The Fly tab of each challenge is designed for a second screen instead:

- **A second monitor** next to your main one is ideal.
- **A tablet or phone** works well. Open the challenge, then choose "Open fly mode". Fly mode uses large type and a dark theme that's easy to read in a dim room.
- **Pause** the sim whenever you need to read. Nobody is timing you unless you start the timer.
