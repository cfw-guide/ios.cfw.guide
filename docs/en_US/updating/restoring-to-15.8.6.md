---
lang: en_US
title: Restoring to 15.8.6
permalink: /restoring-to-15-8-6
description: Guide on restoring to iOS/iPadOS 15.8.6
---

## Required Reading

iOS/iPadOS 15.8.7 were recently released, patching the kernel exploit that Dopamine utilized, thus breaking Dopamine.

Luckily, iOS/iPadOS 15.8.6 are still signed, meaning you can restore to it from any other iOS version with the help of iTunes or Finder.

::: danger

iOS/iPadOS 15.8.6 will be unsigned in the future (likely during the week of March 16th-20th). As a result, if you are considering restoring back to iOS/iPadOS 15.8.6, you should consider doing so sooner rather than later.

:::

::: warning

It is only possible to restore to iOS/iPadOS 15.8.6 on devices that did not receive iOS 16 or later.

:::

## Downloads

The iOS/iPadOS 15.8.6 `.ipsw` file for your device:  
  - iPhones and iPod Touches should download the file from [here](https://appledb.dev/firmware/iOS/19H402.html)
  - iPads should download the file from [here](https://appledb.dev/firmware/iPadOS/19H402.html)

## Restoring to 15.8.6

::: warning

Assuming you are currently on iOS/iPadOS 15.8.7, you will likely need to enter Recovery Mode or DFU Mode in order to proceed.

:::

1. Plug your device into your computer.
1. On iTunes or Finder, locate your device.
1. While holding down the Shift (Windows) or Option (Mac) key, click `Restore [Device Type]`.
1. Locate the `.ipsw` file you downloaded, and select that `.ipsw` file. 
    - Ensure that the version you are updating to is iOS/iPadOS 15.8.6 (19H402)
