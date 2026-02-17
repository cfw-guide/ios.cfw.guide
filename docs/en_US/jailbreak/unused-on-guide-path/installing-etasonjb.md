---
lang: en_US
title: Installing EtasonJB
description: Guide to installing etasonjb
permalink: /installing-etasonjb
redirect_from:
  - /etasonjb
  - /es
  - /eta
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Alriceee
---

EtasonJB is capable of jailbreaking 32-bit iOS devices on firmware version 8.4.1.

Unlike most modern jailbreaks, EtasonJB is persistent after a reboot (this is also referred to as an "untethered" jailbreak). This means that after you reboot the device, the device will stay jailbroken and you won't have to run the exploit again.

We will use the Sideloadly tool to install the EtasonJB jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [EtasonJB](https://etasonjb.tihmstar.net/)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the EtasonJB `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The EtasonJB application can now be opened from home screen.

## Running EtasonJB

1. Open the EtasonJB application from your home screen
1. Tap `Etason JB!`

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Updating Certificates

::: warning

While this section is *technically* optional, many modern repositories **will not work** without these updated certificates.

:::

1. Open Safari on your iOS device
1. Go to the [http://tlsroot.litten.ca](http://tlsroot.litten.ca) website
1. Tap `Signed iOS Bundle (iOS 5+)`
1. Tap `Install` -> `Install` -> `Install` -> Done