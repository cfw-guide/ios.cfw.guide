---
lang: en_US
title: Installing Dopamine
description: Guide to installing Dopamine using TrollStore
permalink: /installing-dopamine
pkgman: sileo
redirect_from:
  - /installing-fugu15max
extra_contributors:
  - opa334
  - iCraze
---

Dopamine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

Dopamine supports A9(X) and later devices on iOS 15.0 to 16.5, A9(X) to A14 and M1 devices on iOS 16.5.1, and A9(X) to A11 devices on iOS 16.6 to 16.6.1.

::: tip

If you're using an A8(X) iPad, at this time, you should follow <router-link to="/installing-meowbrek2">Installing meowbrek2</router-link> instead.

:::

::: danger

if you are currently using *rootful* palera1n, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

:::

::: danger

If you have previously used Serotonin and/or Bootstrap, you will need to remove them fully before proceeding.

If you don't know what Bootstrap or Serotonin are, you can ignore this notice and proceed.

:::

We will first install TrollStore using one of several methods (depending on your current device and iOS version), and then install Dopamine through TrollStore.

## Installing TrollStore

The method that needs to be followed in order to install TrollStore depends on both your device and your current firmware version, select the tab that fits your current firmware version and follow the subsequent steps.

::: tip

If you already have TrollStore installed, you can skip this section.

:::

::::: tabs

:::: tab name="TrollHelperOTA (15.0 to 15.4.1 / A12 and later 15.5 to 15.6.1)" :default="true"

::: warning

A11 and earlier devices are supported on iOS 15.0 to 15.4.1

A12 and later devices are supported on iOS 15.0 to 15.6.1

:::

### Installing TrollHelper

1. Open Safari
1. Depending on your device, enter one of the following url's:
    - If you're using an A12 or later device, enter [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
    - If you're using an A11 or earlier device, enter [https://api.jailbreaks.app/troll](https://api.jailbreaks.app/troll)
1. Tap `Install`

An app named `GTA Car Tracker` will now install to your iOS device, this app is TrollHelper, however.

### Installing TrollStore

1. Open the `GTA Car Tracker` app
1. Tap `Register Persistence Helper`
1. Tap `Install TrollStore`

The TrollStore application will now install to your iOS device.

::::

:::: tab name="TrollInstallerMDC (15.7 to 15.7.1 / 16.0 to 16.1.2 / A11 and earlier 15.5 to 15.6.1)"

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

The TrollInstallerMDC application can now be opened from home screen.

::: danger

If you're on iOS 16.0 to 16.1.2, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

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

:::: tab name="TrollMisaka (15.7.2 to 15.8.1)"

::: danger

This method can be very unreliable in some cases. If you are having issues with doing these steps, you can follow <router-link to="/installing-dopamine-sideloadly">Installing Dopamine (Sideloadly)</router-link> instead.

:::

### Requirements

- The Tips app installed to your device
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [TrollMisaka](https://github.com/straight-tamago/TrollMisaka/releases/latest)

### Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollMisaka `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

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

:::: tab name="TrollStar (16.2 to 16.6.1)"

::: warning

This method may have issues in some cases. If you are having repeated issues with this method, you can follow <router-link to="/installing-dopamine-sideloadly">Installing Dopamine (Sideloadly)</router-link> instead.

:::

### Requirements

- The Tips app installed to your device
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [TrollStar](https://github.com/34306/TrollStar/releases/latest)

### Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollStar `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

::: danger

If you don't have it enabled already, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

### Injecting TrollStore Helper

::: warning

This method may take several tries in order to work successfully.

:::

1. Open TrollStar
1. Tap `Click here to start!`
    - If the device reboots, wait a few minutes, then try again
1. Tap `Install TrollStore Helper to Tips`
1. Tap `Respring to Apply`

Your device will respring after you tap `Respring to Apply`.

### Installing TrollStore

1. Unlock your device
1. Open the Tips app
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

### Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps

::::

:::::

## Installing Dopamine

### Downloads

The latest version of [Dopamine](https://ellekit.space/dopamine)
  - Make sure to download the `.ipa` file onto your iOS device

### Installing Dopamine

1. Open TrollStore if it is not open already
  - If you're in a different tab, go back to the `Apps` tab
1. Press the `+` on the top right
1. Go to where you saved the Dopamine `.ipa` file
1. Tap on the Dopamine `.ipa` file
1. Tap `Install`

The Dopamine app will now be installed onto your device.

### Running Dopamine

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Dopamine application from your home screen immediately afterwards
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

Sileo should now be installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

While you are now jailbroken at this point, we need to both update and install some packages so that we're able to both update other packages and have stuff work properly

## Installing necessary software

1. Open the Sileo app
1. Tap on the "Sources" tab
1. Tap on the "ElleKit" repository, then tap on "All Categories"
1. Tap on `ElleKit`
1. Tap "Get"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap `Restart SpringBoard Later`
1. Go to the "Search" tab
1. Search for `PreferenceLoader`
1. Tap on `PreferenceLoader`
1. Tap on "Get"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap `Restart SpringBoard`

::: tip

After doing all the above steps, you may need to reboot and rejailbreak in order for tweak injection to function properly.

:::
