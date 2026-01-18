---
lang: en_US
title: Using Carbon
description: Guide to using Carbon
permalink: /using-carbon
redirect_from:
  - /installing-carbon
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
---

Carbon is a semi-untethered WebKit-based jailbreak capable of jailbreaking every 64-bit iOS device on firmware versions 8.0 to 9.3.6.

Note that the Carbon jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

## Running Carbon

1. Open Safari on your iOS device
1. Go to [http://carbon.sep.lol](http://carbon.sep.lol) website
1. Press "Run
   - If the device reboots without prompting this, try again.

Carbon will now jailbreak your device. 

To rejailbreak in the future, repeat these steps

::: tip

Tap `Share` -> `Add to home screen` for easier access to Carbon.

:::

## Untethering

::: danger

These steps are only applicable for devices on 8.0 to 9.3.4 - devices on 9.3.5/9.3.6 should skip this section.

:::

This is an optional step which allows the jailbreak to run automatically when your device is booted. This means that you won't have to re-jailbreak through the HomeDepot app after your device is turned off.

You will have to use Cydia to install the untether. If you are unfamiliar with how Cydia works, please read [Using Cydia](/using-carbon/using-cydia.html) first, before returning to this page.

1. Open the Cydia application
1. Check the "Sources" tab and ensure "LukeZGD's Repo" is added
    - If you can't find it, tap `Edit` -> `+` and enter `lukezgd.github.io/repo`
1. Open the "Search" tab and enter "EverUntether Package"
1. Tap on the tweak and then tap "Install" in the top right-hand corner of the screen
1. Confirm the installation

Once finished, you will be prompted to reboot your device.

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, and are on iOS 9, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::