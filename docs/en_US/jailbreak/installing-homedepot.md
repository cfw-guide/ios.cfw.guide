---
lang: en_US
title: Installing HomeDepot
description: Guide to installing HomeDepot
permalink: /installing-homedepot
redirect_from:
  - /homedepot
  - /hd
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
---

HomeDepot is capable of jailbreaking every 32-bit iOS device on firmware version 9.1 up to 9.3.4.

Note that the HomeDepot jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the HomeDepot jailbreak application to your device every 7 days from your computer.

We will use the Sideloadly tool to install the HomeDepot jailbreak application to your iOS device for use in the next step.

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
HomeDepot is currently signed at <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [HomeDepot](http://wall.supplies/)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the HomeDepot `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The HomeDepot application can now be opened from home screen.

## Running HomeDepot

1. Open the HomeDepot application from your home screen
1. Tap `Prepare for Jailbreak` -> `Accept` -> `Dismiss` -> `Proceed with Jailbreak` -> `Begin Installation` -> `Use Provided Offsets`

When jailbreaking for a second time, an option called "Kickstart Jailbreak" will replace "Prepare for Jailbreak". Tap that instead.

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

## Untethering

This is an optional step which allows the jailbreak to run automatically when your device is booted. This means that you won't have to re-jailbreak through the HomeDepot app after your device is turned off.

You will have to use Cydia to install the untether. If you are unfamiliar with how Cydia works, please read [Using Cydia](/installing-homedepot/using-cydia.html) first, before returning to this page.

1. Open the Cydia application
1. Check the "Sources" tab and ensure "tihmstar's beta repo" is added
    - If you can't find it, tap `Edit` -> `+` and enter `repo.tihmstar.net`
1. Open the "Search" tab and enter "UntetherHomeDepot"
1. Tap on the tweak and then tap "Install" in the top right-hand corner of the screen
1. Confirm the installation

Once finished, you will be prompted to reboot your device.

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::