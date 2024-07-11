---
lang: en_US
title: Installing Def1nit3lyN0tAJa1lbr3akTool
description: Guide to installing Def1nit3lyN0tAJa1lbr3akTool
permalink: /installing-notajb
pkgman: sileo
---

Def1nit3lyN0tAJa1lbr3akTool is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The tool is capable of jailbreaking A11 and earlier devices on iOS/iPadOS versions 16.0 to 16.6.1.

We will first use Sideloadly to sideload TrollInstallerX, then use TrollInstallerX to install TrollStore, and then install Def1nit3lyN0tAJa1lbr3akTool from there.

::: warning

if you are currently using *rootful* palera1n, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

If you are using *rootless* palera1n, while you won't have to do anything, note that you **will lose your existing jailbreak setup** by following these steps.

:::

## Installing TrollStore

### Requirements

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
TrollInstallerX is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [TrollInstallerX](https://github.com/alfiecg24/TrollInstallerX/releases/latest)

### Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollInstallerX `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The TrollInstallerX application can now be opened from home screen.

### Installing TrollStore

1. Open TrollInstallerX
1. Tap `Install TrollStore`
    - If your device is stuck on "Exploiting Kernel", reboot your device
1. When prompted to select an app to install the persistence helper into, select an app you care about **the least**
    - If you don't know what app to select, select `Tips`
    - If your device reboots *before* getting to this step, try again

Both TrollStore and its persistence helper should now be installed.

## Installing Def1nit3lyN0tAJa1lbr3akTool

### Downloads

- The latest version of [Def1nit3lyN0tAJa1lbr3akTool](https://github.com/KpwnZ/Def1nit3lyN0tAJa1lbr3akTool/releases/latest)
    - Make sure to download the Def1nit3lyN0tAJa1lbr3akTool `.ipa` file **onto your iOS device**

### Installing the jailbreak

1. Open `TrollStore`
1. Press the `+` on the top right
1. Go to where you saved the Def1nit3lyN0tAJa1lbr3akTool `.tipa` file
1. Tap on the Def1nit3lyN0tAJa1lbr3akTool `.tipa` file
1. Tap `Install`

The Def1nit3lyN0tAJa1lbr3akTool app will now be installed onto your device.

## Running Def1nit3lyN0tAJa1lbr3akTool

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Def1nit3lyN0tAJa1lbr3akTool application from your home screen immediately afterwards
1. Tap "Start"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
