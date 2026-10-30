---
lang: en_US
title: Restoring to 26.7.1
permalink: /restoring-to-26-7-1
description: Guide on restoring to iPadOS 26.7.1
---

## Required Reading

iOS/iPadOS 26.7.2 was recently released, patching several bugs that could potentially lead to a jailbreak.

Luckily, iPadOS 26.7.1 is still signed and restorable for devices that do not support iPadOS 27, meaning you can restore to it from any other iOS version with the help of iTunes or Finder.

::: danger

iPadOS 26.7.1 will be unsigned in the future (likely during the week of November 2nd-6th). As a result, if you are considering restoring back to iPadOS 26.7.1, you should consider doing so sooner rather than later.

:::

::: warning

If you are using an iPad that supports iPadOS 27, or are using an iPhone, you should instead follow <router-link to="/restoring-to-27-0-1">Restoring to 27.0.1</router-link>.

:::

## Downloads

The iPadOS 26.7.1 `.ipsw` file for your device:
  - The `.ipsw` file for your device can be downloaded from [here](https://appledb.dev/firmware/iPadOS/23H30.html)
  - Devices that say `OTA` support iPadOS 27 and do not have the ability to restore to 26.7.1

## Restoring to 26.7.1

::: warning

Assuming you are currently on iPadOS 26.7.2, you will likely need to enter Recovery Mode or DFU Mode in order to proceed.

:::

1. Plug your device into your computer.
1. On iTunes or Finder, locate your device.
1. While holding down the Shift (Windows) or Option (Mac) key, click `Restore [Device Type]`.
1. Locate the `.ipsw` file you downloaded, and select that `.ipsw` file. 
    - Ensure that the version you are updating to is iPadOS 26.7.1 (23H30)