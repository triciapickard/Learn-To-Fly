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
resources: [msfs-official-site, msfs-forums, msfs-checklist]
published: false
lastVerifiedAt: null
simVersion: null
---

## Choose your controller profile

You can learn to fly with any controller, but some make certain skills easier. Find your setup below. The key difference is **rudder**: the pedals (or a twist grip) that keep the airplane's nose lined up with where it is going.

### Gamepad only

A gamepad works for the whole course. The sticks are small, so use gentle movements and a softer sensitivity curve. Turn **auto-rudder on**: without a rudder axis, the sim keeps the airplane coordinated for you.

### Joystick with a twist grip

Twisting the stick controls the rudder. Most joysticks also have a throttle lever. Leave **auto-rudder off** so you learn to use the rudder, but add a little dead zone to the twist axis so you don't press rudder by accident.

### Yoke, throttle quadrant and rudder pedals

The closest to a real cockpit. Leave **auto-rudder off**. Bind the toe brakes on the pedals if they have them.

:::callout{type="sim"}
Auto-rudder is an assist the real airplane doesn't have. In the real Skyhawk you use rudder in every turn and on every takeoff. If you fly with auto-rudder on, the lessons still explain what your feet would be doing, and challenges tell you where it matters.
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

MSFS 2024 can help with almost everything. To learn real skills, turn most helpers off. The menu names change between sim updates, so this table lists what each setting **does**.

| Setting (what it does)                | Recommended                                        | Why                                     |
| ------------------------------------- | -------------------------------------------------- | --------------------------------------- |
| Assisted yoke or AI-controlled flight | Off                                                | You fly the airplane.                   |
| Auto-rudder                           | Off with pedals or a twist grip; on with a gamepad | See your controller profile.            |
| Assisted takeoff and landing          | Off                                                |                                         |
| Auto-mixture                          | On for Module 0 only, then off                     | You'll learn mixture in Module 1.       |
| Auto-trim or assisted trim            | Off                                                | Trimming is a core skill.               |
| Checklist auto-complete               | Off                                                | Use the checklist; don't let it work.   |
| Unlimited fuel                        | Off                                                | Fuel management matters.                |
| Crash and stress damage               | Off until Module 4, then on                        | Honest consequences, when you're ready. |
| Flight model                          | The most realistic one available                   |                                         |
| Landing guidance and path aids        | Off                                                | Learn the runway picture.               |
| Tooltips in the cockpit               | On for Modules 0–2                                 | Helps you learn the controls.           |

:::callout{type="verify"}
Author note: add the current MSFS 2024 menu path for each setting, with a dated screenshot, after checking them in the sim (Section 9.3).
:::

:::quiz{id="l0-2-q1" type="single"}
Which assistance should be off so that you learn to trim?

- [ ] Auto-rudder
- [x] Auto-trim (assisted trim)
- [ ] Tooltips
- [ ] Unlimited fuel

---

Auto-trim does the trimming for you. Turn it off: trimming the airplane so it holds its attitude by itself is one of the most important skills in Module 2.
:::

:::quiz{id="l0-2-q2" type="single"}
You fly with a gamepad and have no rudder axis. Should auto-rudder be on or off?

- [x] On
- [ ] Off

---

On. Without a rudder axis you can't coordinate turns yourself, so let the sim keep the ball centered. With pedals or a twist grip, turn it off and learn to use the rudder.
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

## The in-sim checklist and the VFR map

MSFS 2024 has a checklist panel for the Skyhawk. Open it from the toolbar and step through each phase of flight. You'll learn to use it properly in Lesson 1.4.

The **VFR map** shows your airplane on a moving map. It's a great safety net while you learn. In Module 6 you'll turn it off for pilotage challenges and navigate with a chart instead.

## Keeping this site open while you fly

The Fly tab of each challenge is designed for a second screen:

- **A second monitor** next to your main one is ideal.
- **A tablet or phone** works well. Open the challenge, then choose "Open fly mode". Fly mode uses large type and a dark theme that's easy to read in a dim room.
- **Pause** the sim whenever you need to read. Nobody is timing you unless you start the timer.

:::callout{type="verify"}
Author note: check whether MSFS 2024 has an in-sim browser or toolbar panel that can show a web page, and describe it here if it does.
:::

You're set up. Time for [[l0-3-your-first-flight]].
