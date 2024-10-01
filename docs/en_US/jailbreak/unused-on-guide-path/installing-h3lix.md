---
lang: en_US
title: Installing h3lix
description: Guide to installing H3lix
permalink: /installing-h3lix
redirect_from:
  - /installing-helix
  - /helix
  - /h3lix
  - /h3
  - /he
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - hopolapopola
---

h3lix is capable of jailbreaking every 32-bit iOS device on firmware version 10.0 up to 10.3.4.

Note that the h3lix jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the h3lix jailbreak application to your device every 7 days from your computer.

We will use Sideloadly and a patcher script to install the application to your device.

## Downloads

- Version RC6 of [h3lix](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/UgV1HAJT) from the Legacy Jailbreak Archives
- The latest version of [Sideloadly](https://sideloadly.io/)
- macOS and Linux: Jakeajames' [patcher script](https://gist.github.com/jakeajames/b44d8db345769a7149e97f5e155b3d46)
- Windows: [winh3lixpatcher](https://github.com/kawaiizenbo/winh3lixpatcher/releases)

## Patching the application

::: tip

If you wish to not have to patch an application, and are on iOS 10.3.x, you could follow <router-link to="/installing-socket">Installing Socket</router-link> instead, though keep in mind that kok3shiX is currently in an alpha stage.

:::

::: tip

### macOS and Linux

1. Open your Terminal application
1. Change directory to the folder where you saved the script and h3lix.ipa files
   - If you saved them to Downloads, this would be `cd ~/Downloads`
1. Type `./patch.sh` in the terminal
1. Drag and drop the h3lix `.ipa` file into the terminal
1. Type "h3lix.ipa"
1. Press Enter

:::

::: tip

### Windows

1. Drag the h3lix ipa onto the winh3lixpatcher.exe file

:::

You now have a patched h3lix ipa that you can sign

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the h3lix `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The h3lix application can now be opened from home screen.

## Running h3lix

1. Open the h3lix application from your home screen
1. Tap "Jailbreak"

::: tip

If the app displays `Uicache Failed!` this means the patching process was not done properly and you should double check you followed the steps above properly

:::

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::