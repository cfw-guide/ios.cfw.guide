---
lang: en_US
title: Installing openpwnage
description: Guide to installing openpwnage
permalink: /installing-openpwnage
redirect_from:
  - /openpwnage
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Alriceee
---

openpwnage is capable of jailbreaking all 32bit devices on firmware versions 8.4b4 to 9.3.6.

Note that the openpwnage jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the openpwnage jailbreak application to your device every 7 days from your computer.

We will use the Sideloadly tool to install the openpwnage jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [openpwnage](https://github.com/0xilis/openpwnage)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the openpwnage `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your iOS version, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The openpwnage application can now be opened from home screen.

## Running openpwnage

1. Open the openpwnage application from your home screen
1. Tap `Jailbreak`

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, and are on iOS 9, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::