---
lang: en_US
title: Restoring to 27.1
permalink: /restoring-to-27-1
description: Guide on restoring to iOS 27.1
---

## Required Reading

iOS 27.2 was recently released, patching several bugs that could potentially lead to a jailbreak.

Luckily, iOS 27.1 is still signed, meaning you can restore to it from any other iOS version with the help of iTunes or Finder.

::: danger

iOS 27.1 will be unsigned in the future (likely during the week of November 2nd-6th). As a result, if you are considering restoring back to iOS 27.1, you should consider doing so sooner rather than later.

:::

::: warning

iOS 27.1 was only released for the iPhone Duo, and was not released for any other device.

If you are not using an iPhone Duo, you should instead follow either:
- <router-link to="/restoring-to-27-0-1">Restoring to 27.0.1</router-link> if you are using an iPad that supports iPadOS 27 or a different iPhone
- <router-link to="/restoring-to-26-7-1">Restoring to 26.7.1</router-link> if you are using an iPad that *does not* support iPadOS 27

:::

## Downloads

- The iOS 27.1 `.ipsw` file for the [iPhone Duo](https://updates.cdn-apple.com/2026FallFCS/3f41a447-d8a6-48ae-83ae-056a64f57fd4/iPhone19,4_27.1_24A94425_Restore.ipsw)

## Restoring to 27.1

::: warning

Assuming you are currently on iOS 27.2, you will likely need to enter Recovery Mode or DFU Mode in order to proceed.

:::

1. Plug your device into your computer.
1. On iTunes or Finder, locate your device.
1. While holding down the Shift (Windows) or Option (Mac) key, click `Restore iPhone`.
1. Locate the `.ipsw` file you downloaded, and select that `.ipsw` file. 
    - Ensure that the version you are updating to is iOS 27.1 (24A94425)