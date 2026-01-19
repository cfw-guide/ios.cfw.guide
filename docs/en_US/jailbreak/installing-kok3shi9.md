---
lang: en_US
title: Installing kok3shi9
description: Guide to installing kok3shi9
permalink: /installing-kok3shi9
redirect_from:
  - /installing-kokeshi
  - /installing-kokeshi9
  - /installing-kok3shi
  - /kok3shi
  - /kokeshi
  - /kok3shi9
  - /kokeshi9
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Alriceee
---

kok3shi9 is capable of jailbreaking 64-bit devices on 9.2 to 9.3.5.

::: warning

If you are using a 32-bit device, you should instead follow:
   - <router-link to="/using-carbon">Using Carbon</router-link> if you are on 9.3.5 or 9.3.6
   - <router-link to="/using-jailbreakme-4-0">Using JailbreakMe 4.0</router-link> if you are on 9.1 to 9.3.4

:::

## Downloads

- The latest version of [kok3shi9](https://web.archive.org/web/20250831054016/https://kok3shidoll.github.io/download/kokeshi/v5/kok3shi9_v5.0.3.ipa) from archive.org
- The latest version of [PlumeImpactor](https://github.com/khcrysalis/PlumeImpactor/releases/latest)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

## Installing the application

1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open PlumeImpactor
1. Go to `Settings` -> `Sign In`
1. Enter in your Apple Account and Password
1. Close the Settings and Sign In windows
1. Drag and drop the kok3shi9 `.ipa` file into PlumeImpactor
1. Click `Install`

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your iOS version, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The kok3shi9 application can now be opened from home screen.

## Running kok3shi9

1. Open the kok3shi9 application from your home screen
1. Tap `Jailbreak`

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Untethering (64-bit, iOS 9.2 to 9.3.4)

::: danger

The steps listed here only apply and only work for **64-bit devices** on iOS 9.2 to 9.3.4.

:::

This is an optional step which allows the jailbreak to run automatically when your device is booted. This means that you won't have to re-jailbreak through rerunning the kok3shi9 app after your device is turned off.

You will have to use Cydia to install the untether. If you are unfamiliar with how Cydia works, please read [Using Cydia](/installing-kok3shi9/using-cydia.html) first, before returning to this page.

1. Open the Cydia application
1. Go to the "Sources" tab
1. If you can't find it, tap `Edit` -> `+` and enter `kok3shidoll.github.io/kokeshi9`
1. Open the "Search" tab and enter "kokeshi 9.2-9.3.4 Untether"
1. Tap on the tweak and then tap "Install" in the top right-hand corner of the screen
1. Confirm the installation

Once finished, you will be prompted to reboot your device.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::
