---
lang: en_US
title: Installing p0laris
description: Guide to installing p0laris
permalink: /installing-p0laris
redirect_from:
  - /p0laris
  - /polaris
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
---

p0laris is capable of jailbreaking A5(X) devices on firmware versions 9.3.5 and 9.3.6.

Note that the p0laris jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the p0laris jailbreak application to your device every 7 days from your computer.

We will use the Sideloadly tool to install the p0laris jailbreak application to your iOS device for use in the next step.

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
p0laris is currently signed at <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [p0laris](https://p0laris.dev/)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the p0laris `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your iOS version, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The p0laris application can now be opened from home screen.

## Running p0laris

1. Open the p0laris application from your home screen
1. Tap `Jailbreak`

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::
