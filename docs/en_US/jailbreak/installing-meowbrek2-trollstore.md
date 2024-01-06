---
lang: en_US
title: Installing meowbrek2 (TrollStore)
description: Guide to installing meowbrek2 via TrollStore
permalink: /installing-meowbrek2-trollstore
pkgman: sileo
---

meowbrek2 is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered</router-link> jailbreak, meaning it requires an app to re-apply the exploit after a reboot.

meowbrek2 supports A11 and earlier devices on firmware versions 15.0 to 15.8, however this method only works firmware versions 15.0 to 15.7.1

::: warning

if you are currently using *rootful* palera1n, or setup *rootless* palera1n **before April 27th, 2023**, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

If you are using *rootless* palera1n, and set it up **before April 27th, 2023**, this is not an issue, and you can continue with these steps.

:::

::: warning

If you are on 15.7.2 to 15.8, you cannot use this guide to install meowbrek2 and will need to follow <router-link to="/installing-meowbrek2">Installing meowbrek2</router-link> instead.

:::

## Installing TrollStore

The method that needs to be followed in order to install TrollStore depends on your current firmware version, select the tab that fits your current firmware version and follow the subsequent steps

::: tip

If you already have TrollStore installed, you can skip this section.

:::

::::: tabs

:::: tab name="TrollHelperOTA (15.0 to 15.4.1)" :default="true"

### Installing TrollHelper

1. Open Safari
1. Go to [https://api.jailbreaks.app/troll](https://api.jailbreaks.app/troll)
1. Tap `Install`

An app named `GTA Car Tracker` will now install to your iOS device, this app is TrollHelper, however.

### Installing TrollStore

1. Open the `GTA Car Tracker` app
1. Tap `Register Persistence Helper`
1. Tap `Install TrollStore`

The TrollStore application will now install to your iOS device.

::::

:::: tab name="TrollInstallerMDC (15.5 to 15.7.1)"

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

::::

:::::

## Installing meowbrek2

### Downloads

- The latest version of [meowbrek2](https://kok3shidoll.github.io/download/secret/meowbrek2_1.1.4_TS.tipa)
    - Make sure to download the meowbrek2 `.tipa` file **onto your iOS device**

### Installing the jailbreak

1. Re-open the `TrollStore` app on your home screen
1. Press the `+` on the top right
1. Go to where you saved the meowbrek2 `.tipa` file
1. Tap on the meowbrek2 `.tipa` file
1. Tap `Install`

The meowbrek2 app will now be installed onto your device.

## Running meowbrek2

1. Reboot your phone
    - This is not necessary but recommended
1. Open the meowbrek2 application from your home screen immediately afterwards
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and you don't re-enter a jailbroken state, simply try rebooting and running the exploit again until it does work.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
