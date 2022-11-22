---
lang: en_US
title: "palera1n Troubleshooting"
description: Fixing common issues on devices jailbroken with palera1n.
permalink: /palera1n-troubleshooting
extra_contributors:
  - iCrazeiOS
  - hopolapopola
  - Tanbeer191
  - TheHacker894
  - raizo
  - Superuser
---

::: tip

If you're looking for more general troubleshooting steps, you should take a look at <router-link to="/troubleshooting">Troubleshooting</router-link>

:::

## iPhone 7/8 Home Button does not work after jailbreaking with --semi-tethered

Due to reasons that haven't been figured out yet, using the --semi-tethered option to jailbreak with the iPhone 7 or iPhone 8 will cause the home button to be non-functional.

At this time, the only way to workaround this issue is to switch to tethered palera1n.

## Adding the palera1n repo or https://mineek.github.io/repo does not work

These are repositories that are only intended for use with rootless jailbreaks. Attempting to add these to palera1n (or any other currently available jailbreak) will fail.

## Packages from the Procursus repo don't properly work (e.g. killed: 9)

The binaries of these packages need to be resigned by Procursus Team with a newer version of ldid.

There are two workarounds to this issue that you can use until this is done:
  - Resign the binaries using `ldid -s` (e.g. `ldid -s /Applications/Filza.app`)
  - Add `https://mineek.online/` which is a mirror of the Procursus repository with the binaries resigned

## Attempting to use --semi-tethered with a WiFi-only iPad or iPod Touch does not succeed

Add --no-baseband to the end of the command used to jailbreak your device.

::: danger

Do not do this if the device you are having an issue with is a cellular device

:::

## NewTerm does not launch

Add `https://apt.nickchan.lol` and then install NewTerm3 from there instead.