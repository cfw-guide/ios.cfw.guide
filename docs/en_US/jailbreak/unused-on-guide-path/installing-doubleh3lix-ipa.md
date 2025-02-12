---
lang: en_US
title: Installing doubleh3lix
description: Guide to installing doubleH3lix via Sideloading
permalink: /installing-doubleh3lix-ipa
redirect_from:
  - /installing-doubleh3lix-(ipa)
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - TophattedWasTaken
  - Alriceee
---

::: warning

This guide is mainly designed to be a fallback should you, for any reason, run into issues doing <router-link to="/using-tns">TotallyNotSpyware</router-link>. In most cases, TotallyNotSpyware is generally easier and better than manually installing doubleh3lix.

:::

doubleh3lix is capable of jailbreaking every A7 to A9(X) device on firmware versions 10.0 to 10.3.3.

Note that the doubleh3lix jailbreak is <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">not “persistent”</router-link> (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the doubleh3lix jailbreak application to your device every 7 days from your computer.

We will use the Sideloadly tool to install the doubleh3lix jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [doubleh3lix](https://doubleh3lix.tihmstar.net/ipa/doubleH3lix-RC8.ipa)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the doubleh3lix `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The doubleh3lix application can now be opened from home screen.

## Running doubleh3lix

1. Open the doubleh3lix application from your home screen
1. Tap "Jailbreak"

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::