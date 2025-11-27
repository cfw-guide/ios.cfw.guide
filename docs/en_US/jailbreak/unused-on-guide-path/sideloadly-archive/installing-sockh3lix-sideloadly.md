---
lang: en_US
title: Installing sockH3lix (Sideloadly)
description: Guide to installing sockH3lix
permalink: /installing-sockh3lix-sideloadly
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - hopolapopola
  - Alriceee
---

SockH3lix is capable of jailbreaking most 64-bit iOS devices on firmware version 10.0 up to 10.3.3.

It is also compatible with the iPhone 5 on 10.3.3 and 10.3.4. It is not compatible with A10 devices such as the iPhone 7 and iPad Pro (2nd generation).

Note that the sockH3lix jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the h3lix jailbreak application to your device every 7 days from your computer.

We will use Sideloadly to install the application to your device.

::: warning

iPhone 5's using this jailbreak may run into an issue where tweaks will not load properly. If this happens, you should try restoring your device, then jailbreaking with <router-link to="/installing-kok3shiX">Installing kok3shiX</router-link> instead.

:::

## Downloads

- The latest version of [sockH3lix](https://github.com/SongXiaoXi/sockH3lix/releases/latest)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the sockH3lix `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The sockH3lix application can now be opened from home screen.

## Running sockH3lix

1. Open the sockH3lix application from your home screen
1. Tap "Jailbreak"

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::
