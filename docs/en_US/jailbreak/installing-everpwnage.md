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

EverPwnage is capable of jailbreaking 32-bit iOS devices on firmware versions 8.0 to 8.4.1, as well as A6(X) devices on 9.0 to 9.0.2.

::: warning

EverPwnage is only capable of doing an *untethered* jailbreak on:
 - A6(X) devices on 8.0 to 8.2
 - 32-bit devices on 8.3 to 8.4.1

In all other cases, EverPwnage will be a *semi-untethered* jailbreak.

:::

::: danger

EverPwnage does not support A5(X) devices on firmware versions 9.0 to 9.0.2. If you have an A5(X) device on 9.0 to 9.0.2, you should follow <router-link to="/installing-pangu9">Installing pangu9</router-link> instead.

Additionally, if you want an *untethered* jailbreak with an A6(X) devices on firmware versions 9.0 to 9.0.2, you should also follow <router-link to="/installing-pangu9">Installing pangu9</router-link> instead.

:::

We will use the Sideloadly tool to install the EverPwnage jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [EverPwnage](https://github.com/LukeZGD/EverPwnage)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the EverPwnage `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The EverPwnage application can now be opened from home screen.

## Running EverPwnage

1. Open the EverPwnage application from your home screen
1. Tap `Jailbreak`

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
