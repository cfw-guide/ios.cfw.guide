---
lang: en_US
title: Installing Phœnix
description: Guide to installing Phoenix
permalink: /installing-phoenix
redirect_from:
  - /installing-phœnix
  - /phœnix
  - /phoenix
  - /pn
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Alriceee
---

Phœnix is capable of jailbreaking 32bit iOS devices on firmware version 9.3.5 and 9.3.6.

Note that the Phœnix jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the Phœnix jailbreak application to your device every 7 days from your computer.

We will use the Sideloadly tool to install the Phœnix jailbreak application to your iOS device for use in the next step.

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Phœnix is currently signed at <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Phœnix](https://phoenixpwn.com/)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Phœnix `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your iOS version, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Phœnix application can now be opened from home screen.

## Running Phœnix

1. Open the Phœnix application from your home screen
1. Tap `Prepare for Jailbreak` -> `Accept` -> `Dismiss` -> `Proceed with Jailbreak` -> `Begin Installation` -> `Use Provided Offsets`

When jailbreaking for a second time, an option called "Kickstart Jailbreak" will replace "Prepare for Jailbreak". Tap that instead.

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::