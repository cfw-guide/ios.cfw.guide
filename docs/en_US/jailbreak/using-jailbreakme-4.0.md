---
lang: en_US
title: Using JailbreakMe 4.0
description: Guide to using JailbreakMe 4.0
permalink: /using-jailbreakme-4-0
redirect_from:
  - /installing-jailbreakme-4-0
  - /jailbreakme-4-0
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
---

JailbreakMe 4.0 is capable of jailbreaking every 32-bit iOS device on firmware version 9.1 up to 9.3.4.

Note that the JailbreakMe 4.0 jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

## Running JailbreakMe 4.0

1. Open Safari on your iOS device
1. Go to the JailbreakMe 4.0 website ([https://lukezgd.github.io/jbme4](https://lukezgd.github.io/jbme4))
1. Tap "jailbreak me!"

After a couple of minutes, Cydia should be installed on your home screen.

To rejailbreak in the future, redoing these steps should rejailbreak your device.

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

## Untethering

This is an optional step which allows the jailbreak to run automatically when your device is booted. This means that you won't have to re-jailbreak through jailbreak.me after your device is turned off.

You will have to use Cydia to install the untether. If you are unfamiliar with how Cydia works, please read [Using Cydia](/installing-homedepot/using-cydia.html) first, before returning to this page.

1. Open the Cydia application
1. Check the "Sources" tab and ensure "LukeZGD's Repo" is added
    - If you can't find it, tap `Edit` -> `+` and enter `lukezgd.github.io/repo`
1. Open the "Search" tab and enter "UntetherHomeDepot"
1. Tap on the tweak and then tap "Install" in the top right-hand corner of the screen
1. Confirm the installation

Once finished, you will be prompted to reboot your device.

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::