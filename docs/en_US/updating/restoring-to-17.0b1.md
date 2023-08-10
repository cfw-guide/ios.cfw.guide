---
lang: en_US
title: Restoring to 17.0 beta 1
description: Guide on restoring to iOS/iPadOS 17.0 beta 1
permalink: /restoring-to-17-0b1
---

## Required Reading

In many circumstances, updating to a newer version of iOS/iPadOS can make it harder to potentially jailbreak in the future.

Luckily, iOS/iPadOS 17.0's *first beta* is still signed, meaning you can restore to it from any other iOS version with the help of iTunes or Finder.

::: warning

Make sure you disable `Find My` or you'll need to enter Recovery or DFU before restoring your device.

:::

::: warning

You should only *consider* doing this if you are on iOS/iPadOS 16.5.1 or later (excluding iOS/iPadOS 16.6b1) **and are using an M1, M2, or A14 and earlier device**.

Additionally, you'll end up having an outdated beta notice appear every time you unlock your device or open/close the Control Center or Notification Center. **This is not removable without a jailbreak.**

:::

## Downloads

The 17.0 beta 1 `.ipsw` file for your device:  
  - iPhones should download the file from [here](https://appledb.dev/firmware/iOS/21A5248v)
  - iPads should download the file from [here](https://appledb.dev/firmware/iPadOS/21A5248v)

## Restoring to 17.0 beta 1

1. Plug your device into your computer.
1. On iTunes or Finder, locate your device.
1. While holding down the Shift (Windows) or Option (Mac) key, click `Restore [Device Type]`.
1. Locate the `.ipsw` file you downloaded, and select that `.ipsw` file. 
    - Ensure that the version you are updating to is iOS 17.0 beta 1 (21A5248v)