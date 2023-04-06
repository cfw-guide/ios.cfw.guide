---
lang: en_US
title: Installing checkra1n for Apple TV (macOS)
description: Guide to installing checkra1n for Apple TV on macOS
permalink: /installing-checkra1n-tv/macos
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
  - zachary7829
---

## Requirements

- The latest release of [checkra1n](https://checkra.in)
- An Apple TV Siri remote (any generation)
- If you have an Apple TV 4K, you will also need two cables:
  - A GoldenEye or Foxlink X892 cable
  - An Alex DCSD cable
It is recommended to purchase these from AliExpress for the best prices. Note that they typically take about a month to arrive.

![A screenshot of the checkra1n application](/assets/images/checkra1n.png)

## Installing checkra1n

::: warning

If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.

:::

1. Open checkra1n on your computer
1. Plug your Apple TV device into your computer
1. If you are using an Apple TV 4K (1st generation):
    1. Connect your GoldenEye to your Apple TV's LAN port
    1. Connect your DCSD to the GoldenEye's Lightning port
    1. Connect the USB-A end of the DCSD to your computer
    - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
1. Click `Start` -> `Next` on checkra1n
    - Your device will be put into recovery mode automatically
1. You will now be presented with instructions in how to reboot your device into <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>, click `Start` to begin
    - Follow the instructions until your device shows a black screen
1. After this, checkra1n should automatically install

Your Apple TV device should now reboot.


You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.
