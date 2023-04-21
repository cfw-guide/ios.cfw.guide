---
lang: en_US
title: Installing Blackb0x
description: Guide to installing Blackb0x
permalink: /installing-blackb0x
extra_contributors:
  - selfisht
redirect_from:
    - /blackb0x
discordNoticeText: For support in English, ask for help on the r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: none
---

Blackb0x is capable of untether jailbreaking the Apple TV (2nd generation) on Apple TV Software 5.3 and the Apple TV (3rd generation) on Apple TV Software 7.2.1 to 7.9. It is also capable of <router-link to="/types-of-jailbreak/#tethered-jailbreaks">tether jailbreaking</router-link> the Apple TV (2nd generation) on Apple TV Software 6.2.1 and the Apple TV (3rd generation) on Apple TV Software 6.0 to 6.2.

Blackb0x is an <router-link to="/types-of-jailbreak/#untethered-jailbreaks">untethered</router-link> jailbreak meaning that it survives a reboot and can cause a permanent bootloop if something goes wrong. If you encounter a bootloop, restore your device via iTunes, Finder (macOS Catalina and newer) or FutureRestore

## Requirements

- Intel-based Mac running macOS 10.9 or later.
- The latest version of [Blackb0x](https://github.com/NSSpiral/Blackb0x/releases/tag/0.6.2)
- A non-Siri enabled Apple TV aluminum remote:
<p><img src="/assets/images/aluminum_tv_remote.png" alt="A photo of a non-Siri enabled Apple TV aluminum remote" style="display: block; margin-inline: auto; max-width: 30em;"></p>


## Installing Blackb0x

Depending on your model of Apple TV, the steps are different. Select the tab that lists the A-code that corresponds to your Apple TV mode.

::::: tabs

:::: tab name="A1378, A1469" :default="true"

1. Unzip and run Blackb0x
1. Connect your Apple TV via USB to your computer - you will most likely need to disconnect the HDMI cable.
1. Click `Install Jailbreak`
1. Once Blackb0x says done, your Apple TV will reboot. Disconnect it from your computer, but once it boots, do not use the Apple TV yet, wait a few minutes until it displays a loading circle and then loads the home screen.

::: tip

It may take a few tries to get your Apple TV into DFU. Be patient and ensure you follow the steps exactly.

:::

::::

:::: tab name="A1427" :default="false"

1. Follow the checkm8-a5 guide [here](https://ios.cfw.guide/using-checkm8-a5)
1. Unzip and run Blackb0x
1. Connect your Apple TV via USB to your computer - you will most likely need to disconnect the HDMI cable.
1. Follow the steps blackb0x provides to enter DFU
1. Click `Install Jailbreak`
1. Once Blackb0x says done, your Apple TV will reboot. Disconnect it from your computer, but once it boots, do not use the Apple TV yet, wait a few minutes until it displays a loading circle and then loads the home screen.

::::

::: tip

Your Apple TV 3 may boot into recovery mode after using blackb0x. This is normal, it means you didn't disconnect the USB cable in time - the Apple TV 3 automatically boots into Recovery Mode if it is connected to a computer. Power cycle it and it will boot normally.

:::

You should now be jailbroken with Kodi installed on your home screen. To install packages, you will need to use SSH. To gain access, run the command `ssh -oHostKeyAlgorithms=+ssh-dss root@apple.tv.ip.here`. You can find the IP in Settings.
