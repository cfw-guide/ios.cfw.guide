---
lang: en_US
title: Installing Socket
description: Guide to installing Socket
permalink: /installing-socket
redirect_from:
  - /socket
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: zebra
extra_contributors:
  - hopolapopola
  - staturnz
---

Socket is capable of jailbreaking every 32-bit iOS device on firmware version 10.0.1 up to 10.3.4.

Socket is generally an <router-link to="/types-of-jailbreak/#untethered-jailbreaks">untethered jailbreak</router-link>, meaning it only requires the exploit to be run once, whether through a website, an app, or a computer.

We will use PlumeImpactor to install the application to your device.

::: danger

Socket is **not** untethered *by default* on the iPad 4th Generation on firmware versions 10.3.2 to 10.3.4, due to an issue where the device will not successfully finish booting around 7% of the time.

You can choose to enable the untether through an option in the Socket app after sideloading Socket. *However*, doing so will require you to reboot the device (whether by holding the home button and power button, or by using [Legacy iOS Kit](https://github.com/LukeZGD/Legacy-iOS-Kit/wiki/Misc-Utilities) and its "Reboot Device" option) in the event the device does not successfully boot.

Note that if you are using firmware versions 10.0.1 to 10.3.1, or are using an iPhone 5 or iPhone 5C on firmware versions 10.3.2 to 10.3.4, you are not affected by this issue, and will have the untether enabled by default.

:::

## Downloads
<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Socket is currently signed at <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Socket](https://github.com/staturnzz/socket/releases)
- The latest version of [PlumeImpactor](https://github.com/khcrysalis/PlumeImpactor/releases/latest)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

## Installing the application

1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open PlumeImpactor
1. Go to `Settings` -> `Sign In`
1. Enter in your Apple Account and Password
1. Close the Settings and Sign In windows
1. Drag and drop the Socket `.ipa` file into PlumeImpactor
1. Click `Install`

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The Socket application can now be opened from home screen.

## Running Socket

::: danger

If you are using an iPad 4th Generation on firmware versions 10.3.2 to 10.3.4, and are willing to enable the untether despite the aforementioned warnings, you can do so by clicking the gear icon on the bottom right corner, and then toggling on `Install Untether`.

Note that if you are using firmware versions 10.0.1 to 10.3.1, or are using an iPhone 5 or iPhone 5C on firmware versions 10.3.2 to 10.3.4, the untether is enabled by default, and these warnings do not apply to you.

:::

1. Open the Socket application from your home screen
1. Tap "Jailbreak"

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Zebra installed on your home screen. You can use Zebra to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Updating Certificates

::: warning

While this section is *technically* optional, many modern repositories **will not work** without these updated certificates.

:::

1. Open Safari on your iOS device
1. Go to the [http://tlsroot.litten.ca](http://tlsroot.litten.ca) website
1. Tap `Signed iOS Bundle (iOS 5+)`
1. Tap `Install` -> `Install` -> `Install` -> Done