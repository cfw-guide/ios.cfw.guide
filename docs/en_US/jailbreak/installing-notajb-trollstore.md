---
lang: en_US
title: Installing Def1nit3lyN0tAJa1lbr3akTool (TrollStore)
description: Guide to installing Def1nit3lyN0tAJa1lbr3akTool using TrollStore
permalink: /installing-notajb-trollstore
pkgman: sileo
---

Def1nit3lyN0tAJa1lbr3akTool is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The tool is capable of jailbreaking A11 and earlier devices on iOS/iPadOS versions 16.0 to 16.5, however this method of installing Def1nit3lyN0tAJa1lbr3akTool only supports 16.0 to 16.1.2.

We will first use Sideloadly to sideload TrollInstallerMDC, use TrollInstallerMDC to then install TrollStore, and then install Def1nit3lyN0tAJa1lbr3akTool from there.

::: warning

if you are on firmware versions 16.2 to 16.5, you should follow <router-link to="/installing-notajb">Installing Def1nit3lyN0tAJa1lbr3akTool</router-link> instead.

:::

::: warning

if you are currently using *rootful* palera1n, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

If you are using *rootless* palera1n, this is not an issue, and you can continue with these steps.

:::

## Installing TrollStore

### Requirements

- The Tips app installed to your device
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [TrollInstallerMDC](https://dhinakg.github.io/apps.html)

### Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollInstallerMDC `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

### Enabling Developer Mode

1. Go to the main page of the Settings app
1. Go to `Settings` -> `Privacy & Security`, then scroll down until you see `Developer Mode`
1. Tap `Developer Mode`, toggle it on, and follow the on-screen instructions

### Injecting TrollStore Helper

::: warning

If you've already opened Tips, reboot your device before following these steps

:::

1. Open TrollInstallerMDC
1. Once it says "Successfully replaced Tips binary", close the `TrollInstallerMDC` app
    - If it gives an error, close TrollInstallerMDC and re-open it 

### Installing TrollStore

1. Open the `Tips` app
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

### Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps

## Installing Def1nit3lyN0tAJa1lbr3akTool

### Downloads

- The latest version of [Def1nit3lyN0tAJa1lbr3akTool](https://github.com/KpwnZ/Def1nit3lyN0tAJa1lbr3akTool/releases/latest)
    - Make sure to download the Def1nit3lyN0tAJa1lbr3akTool `.ipa` file **onto your iOS device**

### Installing the jailbreak

1. Go back to the `Apps` tab in TrollStore
1. Press the `+` on the top right
1. Go to where you saved the Def1nit3lyN0tAJa1lbr3akTool `.tipa` file
1. Tap on the Def1nit3lyN0tAJa1lbr3akTool `.tipa` file
1. Tap `Install`

The Def1nit3lyN0tAJa1lbr3akTool app will now be installed onto your device.

## Running Def1nit3lyN0tAJa1lbr3akTool

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Def1nit3lyN0tAJa1lbr3akTool application from your home screen immediately afterwards
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
