---
lang: en_US
title: Restoring to 27.0.1
permalink: /restoring-to-27-0-1
description: Guide on restoring to iOS/iPadOS 27.0.1
---

## Required Reading

iOS/iPadOS 27.2 was recently released, patching several bugs that could potentially lead to a jailbreak.

Luckily, iOS/iPadOS 27.0.1 is still signed, meaning you can restore to it from any other iOS version with the help of iTunes or Finder.

::: danger

iOS/iPadOS 27.0.1 will be unsigned in the future (likely during the week of November 2nd-6th). As a result, if you are considering restoring back to iOS/iPadOS 27.0.1, you should consider doing so sooner rather than later.

:::

::: warning

If you are using an iPad that *does not* support iPadOS 27, you should instead follow <router-link to="/restoring-to-26-7-1">Restoring to 26.7.1</router-link>.

Additionally, if you are using an iPhone Duo, you should instead follow <router-link to="/restoring-to-27-1">Restoring to 27.1</router-link>.

:::

## Downloads

The iOS/iPadOS 27.0.1 `.ipsw` file for your device:  
  - iPhones should download the file from [here](https://appledb.dev/firmware/iOS/24A446.html)
  - iPads should download the file from [here](https://appledb.dev/firmware/iPadOS/24A446.html)

## Restoring to 27.0.1

::: warning

Assuming you are currently on iOS/iPadOS 27.2, you will likely need to enter Recovery Mode or DFU Mode in order to proceed.

:::

1. Plug your device into your computer.
1. On iTunes or Finder, locate your device.
1. While holding down the Shift (Windows) or Option (Mac) key, click `Restore [Device Type]`.
1. Locate the `.ipsw` file you downloaded, and select that `.ipsw` file. 
    - Ensure that the version you are updating to is iOS/iPadOS 27.0.1 (24A446)