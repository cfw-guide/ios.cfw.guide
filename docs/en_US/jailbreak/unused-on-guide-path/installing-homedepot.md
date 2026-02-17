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
  - WhitetailAni
  - LukeZGD
  - Alriceee
---

HomeDepot is capable of jailbreaking every 32-bit iOS device on firmware version 9.1 up to 9.3.4, as well as A5(X) devices on 8.0 to 8.4.1.

Note that the HomeDepot jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the HomeDepot jailbreak application to your device every 7 days from your computer.

We will use the Sideloadly tool to install the HomeDepot jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of HomeDepot for your iOS version:
  - Home Depot for [iOS 9.1-9.3.4](https://web.archive.org/web/20240121141909/http://wall.supplies/)
  - Home Depot for [iOS 8.0-8.4.1](https://web.archive.org/web/20240121141903/https://wall.supplies/OLD%20iPhone%20HACKED.html)
    - You also need to get the latest version of the [ohd patcher](https://github.com/LukeZGD/ohd/releases)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Patching Home Depot

::: danger

This is only needed on iOS 8.0 to 8.4.1, it is not needed for iOS 9.1 to 9.3.4.

:::

::: tip

### macOS and Linux

1. Open your Terminal application
1. Change directory to the folder where you saved the script and h3lix.ipa files
   - If you saved them to Downloads, this would be `cd ~/Downloads`
1. Type `./patch.sh` in the terminal
1. Drag and drop the MixtapePlayer `.ipa` file into the terminal
1. Press Enter

:::

::: tip

### Windows

1. Drag the MixtapePlayer `.ipa` onto the patch.cmd file

:::

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the HomeDepot `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The HomeDepot application can now be opened from home screen.

## Running HomeDepot

1. Open the HomeDepot application from your home screen
1. Tap `Prepare for Jailbreak` -> `Accept` -> `Dismiss` -> `Proceed with Jailbreak` -> `Begin Installation` -> `Use Provided Offsets`

When jailbreaking for a second time, an option called "Kickstart Jailbreak" will replace "Prepare for Jailbreak". Tap that instead.

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

## Updating Certificates

::: warning

While this section is *technically* optional, many modern repositories (including the repository the untether in the next section is on) **will not work** without these updated certificates.

:::

1. Open Safari on your iOS device
1. Go to the [http://tlsroot.litten.ca](http://tlsroot.litten.ca) website
1. Tap `Signed iOS Bundle (iOS 5+)`
1. Tap `Install` -> `Install` -> `Install` -> Done

## Untethering

::: danger

These steps are only applicable for devices on 9.1 to 9.3.4 - A5(X) devices on 8.0 to 8.4.1 should skip this step.

:::

This is an optional step which allows the jailbreak to run automatically when your device is booted. This means that you won't have to re-jailbreak through the HomeDepot app after your device is turned off.

You will have to use Cydia to install the untether. If you are unfamiliar with how Cydia works, please read [Using Cydia](/installing-homedepot/using-cydia.html) first, before returning to this page.

1. Open the Cydia application
1. Check the "Sources" tab and ensure "LukeZGD's Repo" is added
    - If you can't find it, tap `Edit` -> `+` and enter `lukezgd.github.io/repo`
1. Open the "Search" tab and enter "UntetherHomeDepot"
1. Tap on the tweak and then tap "Install" in the top right-hand corner of the screen
1. Confirm the installation

Once finished, you will be prompted to reboot your device.

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::
