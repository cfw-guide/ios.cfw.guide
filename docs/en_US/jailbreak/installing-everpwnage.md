---
lang: en_US
title: Installing EverPwnage
description: Guide to installing everpwnage
permalink: /installing-everpwnage
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Alriceee
---

EverPwnage is an untethered jailbreak capable of jailbreaking 32-bit iOS devices on firmware versions 8.0 to 9.3.6.

We will use the Sideloadly tool to install the EverPwnage jailbreak application to your iOS device for use in the next step.

::: warning

If you are using a 32-bit device on firmware version 9.1 to 9.3.4, you should follow <router-link to="/using-jailbreakme4-0">Using JailbreakMe 4.0</router-link> instead.

:::

::: warning

EverPwnage is only capable of doing an *untethered* jailbreak for firmware versions 8.0 to 9.3.4.

On firmware versions 9.3.5/9.3.6, EverPwnage is a *semi-untethered* jailbreak.

:::

## Downloads

- The latest version of [EverPwnage](https://github.com/LukeZGD/EverPwnage/releases/latest)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the EverPwnage `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The EverPwnage application can now be opened from home screen.

## Running EverPwnage

1. Open the EverPwnage application from your home screen
1. Tap `Jailbreak`

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, and are using a device on iOS 9, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::
