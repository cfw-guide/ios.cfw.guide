---
lang: en_US
title: Installing Blackb0x
description: Guide to installing Blackb0x
permalink: /installing-blackb0x
redirect_from:
    - /blackb0x
discordNoticeText: For support in English, ask for help on the r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: none
extra_contributors:
    - WhitetailAni
---

Blackb0x is capable of untether jailbreaking the Apple TV 2 on Apple TV Software 5.3 and the Apple TV 3 on Apple TV Software 7.2.1 to 7.9. It is also capable of tether jailbreaking the Apple TV 2 on Apple TV Software 6.2.1 and the Apple TV 3 on Apple TV Software 6.0 to 6.2.

Blackb0x is an <router-link to="/types-of-jailbreak/#untethered-jailbreaks">untethered</router-link> jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore


## Requirements

- Computer running macOS 10.11.X or older or Windows XP or newer with iTunes installed. Wine will not work.
- The latest version of [Blackb0x](https://github.com/NSSpiral/Blackb0x/releases/tag/0.6.2)
- If you have an original Apple TV 3, an [Arduino Uno](https://store.arduino.cc/products/arduino-uno-rev3) and [MAX3421E USB Host Shield](https://www.ebay.com/sch/i.html?_nkw=MAX3421E+Arduino+USB+host+shield)
- A non-Siri enabled Apple TV aluminum remote:

![The remote in question](/assets/images/aluminum_tv_remote.png)

## Installing the application

1. Unzip Blackb0x
1. Run Blackb0x
1. Connect your Apple TV via USB to your computer - you will most likely need to disconnect the HDMI cable
1. Click `Install Jailbreak`
1. Follow the steps Blackb0x provides to enter DFU
1. Once Blackb0x says done, your Apple TV will reboot. Do not use the Apple TV yet, wait a few minutes until it resprings.

::: tip

It may take a few tries to get your Apple TV into DFU. Be patient and ensure you follow the steps exactly.

:::

You should now be jailbroken with Kodi installed on your home screen. To install packages, you will need to use SSH. The default password for both root is `alpine`.
