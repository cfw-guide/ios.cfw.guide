---
lang: en_US
title: Installing meowbrek2
description: Guide to installing meowbrek2
permalink: /installing-meowbrek2
pkgman: sileo
---

meowbrek2 is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered</router-link> jailbreak, meaning it requires an app to re-apply the exploit after a reboot.

meowbrek2 supports A11 and earlier devices on firmware versions 15.0 to 15.8.3.

::: warning

if you are currently using *rootful* palera1n, or setup *rootless* palera1n **before April 27th, 2023**, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

If you are using *rootless* palera1n, and set it up **after April 27th, 2023**, this is not an issue, and you can continue with these steps.

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

:::: tab name="TrollMisaka (15.7.2 to 15.8.3)"

::: warning

This method may have issues in some cases. If you are having repeated and unresolvable issues, you can follow <router-link to="/installing-meowbrek2-palera1n">Installing meowbrek2 (palera1n)</router-link> instead.

:::

### Requirements

- The Tips app installed to your device
- The latest version of [AltServer](http://altstore.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) if on Windows
- The latest version of [TrollMisaka](https://github.com/straight-tamago/TrollMisaka/releases/latest)

### Installing the application

1. Open AltServer
1. Plug your iOS device into your computer
1. Shift-Click (Windows) or Option-Click (macOS) AltServer in the System Tray or Menu Bar
1. Click `Sideload .ipa`, then select your device
1. Select the TrollMisaka `.ipa` file

The app will now install to your iOS device.

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The TrollMisaka application can now be opened from home screen.

### Adding a Keyboard

1. Open TrollMisaka, then exit the app *while keeping it in the app switcher*
1. Go to `Settings` -> `General` -> `Keyboard` -> `Keyboards` -> `Add New Keyboard...`
1. Select `TrollMisaka`
1. Tap `TrollMisaka`, then toggle on `Allow Full Access`, then tap `Allow`
1. Re-open TrollMisaka

After re-opening TrollMisaka, open the app switcher and then reboot your device.

::: danger

Do not fully close TrollMisaka until TrollStore is installed, or you will have to redo the entire guide from the beginning.

:::

### Injecting TrollStore Helper

::: warning

This method may take several tries in order to work successfully.

:::

1. Unlock your device
1. Immediately open `Spotlight Search` (via swipping down on the middle of the home screen)
1. Tap the globe icon on the keyboard
    - If needed, select `TrollMisaka` from the list of keyboards
1. Tap `kopen`
    - If the device reboots, try these steps again
1. Tap `Install TrollStore`
    - If the keyboard app seemingly refreshes, try again, If it fails, try again in Safari instead.

Once it says it's successful, you can continue with the next section.

### Installing TrollStore

1. Re-open the app switcher
1. Open the TrollMisaka app *from the app switcher*
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

- The latest version of [meowbrek2](https://kok3shidoll.github.io/download/secret/8F38F948-BCF6-46AF-8926-C95D823107B0/meowbrek2_1.1.7_TS.tipa)
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
