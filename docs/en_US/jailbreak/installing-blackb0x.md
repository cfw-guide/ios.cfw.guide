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

- Computer running macOS 10.11.x to 10.13.x or Windows XP to Windows 8.1 with iTunes installed. Wine will not work.
- The latest version of [Blackb0x](https://github.com/NSSpiral/Blackb0x/releases/tag/0.6.2)
- If you have an A1427 Apple TV 3, an [Arduino Uno](https://store.arduino.cc/products/arduino-uno-rev3), [MAX3421E USB host shield](https://www.ebay.com/sch/i.html?_nkw=MAX3421E+Arduino+USB+host+shield), and USB-A to USB-B cable
- A non-Siri enabled Apple TV aluminum remote:

![The remote in question](/assets/images/aluminum_tv_remote.png)

## Pwning with checkm8-a5

::: danger

Only do these steps if you have an A1427 Apple TV

:::

1. Download and install the [Arduino IDE](https://www.arduino.cc/en/software)
1. While it is installing, connect your MAX3421E USB host shield to the Arduino. The pins and sockets on the bottom of the host shield will line up with the pins and sockets on the Arduino.
1. Connect your Arduino to your computer.
1. Download [checkm8-a5](https://github.com/synackuk/checkm8-a5) from GitHub and import it into the Arduino IDE.
1. Connect your Apple TV to a computer and enter DFU:
    a. Hold Menu and Down until the LED on the Apple TV flashes rapidly.
    b. Let go, then hold Menu and Play/Pause until the LED on the Apple TV flashes rapidly.
    c. It will be displaying nothing on screen if it is in DFU. If it displays the Recovery Mode screen, perform the steps again.
1. Disconnect your Apple TV from your computer and connect it to your    
1. Under the Tools menu, select Port and ensure your Arduino is selected.
1. Also under the Tools menu, open Serial Monitor. Ensure the baud rate is set to 115200. Then, upload the sketch to the Arduino.
1. Serial Monitor will begin displaying a log of what the script is doing. Once it displays `Done!`, disconnect your Apple TV from the Arduino and proceed to the next steps. If it fails, repeat this guide starting from step 5 until it succeeds.

## Installing blackb0x

1. Unzip Blackb0x
1. Run Blackb0x
1. Connect your Apple TV via USB to your computer - you will most likely need to disconnect the HDMI cable
1. Click `Install Jailbreak`
1. Follow the steps Blackb0x provides to enter DFU
    - Skip this step if you have an A1427 Apple TV
1. Once Blackb0x says done, your Apple TV will reboot. Do not use the Apple TV yet, wait a few minutes until it resprings.

::: tip

It may take a few tries to get your Apple TV into DFU. Be patient and ensure you follow the steps exactly.

:::

You should now be jailbroken with Kodi installed on your home screen. To install packages, you will need to use SSH. The default password for both root is `alpine`.
