---
lang: en_US
title: Installing Pangu933
description: Guide to installing Pangu933
permalink: /installing-pangu933
redirect_from:
  - /pangu933
  - /pangu9
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - hopolapopola
  - Braec0
  - Alriceee
---

Pangu933 is capable of jailbreaking every 64bit iOS device on firmware version 9.2 up to 9.3.3.

Note that the Pangu933 jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot, which luckily does not require the application to be installed. You will be instructed on how to do this.

We will use the Sideloadly tool to install the Pangu933 jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [Pangu933](https://web.archive.org/web/20170214021020/http://dl.pangu.25pp.com/jb/NvwaStone_1.1.ipa) _(archive.org)_
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Pangu9 `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Pangu application can now be opened from home screen.

## Running Pangu933

1. Open the Pangu933 application from your home screen
    - Allow notifications if prompted
1. Tap "Start"
1. Lock the device
1. You should get a notification telling you that the jailbreak has succeeded

On the first installation, the jailbreak may take some time to complete. This is normal.

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

## Rejailbreaking

As Pangu933 is a semi-untethered jailbreak, you won't remain jailbroken if your device reboots or powers off for any reason. Luckily, rather than needing to keep the Pangu933 app sideloaded, you can simply follow the below steps to rejailbreak your device.

::: danger

This **does not** install the jailbreak in the first place - you'll need to sideload the Pangu933 app and jailbreak normally first before being able to follow this section.

:::

1. Open Safari on your iOS device
1. Go to the [jbme.ddw.nu](http://jbme.ddw.nu) website
    - Make sure your device is in portrait rotation (you'll get a notice to tilt the device if it isn't)
1. Tap "go"

Your device should now be in a jailbroken state again.

::: warning

If your device crashes or restarts unexpectedly and you don't enter a jailbroken state, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::