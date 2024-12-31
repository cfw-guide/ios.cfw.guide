---
lang: en_US
title: Installing Dopamine (Sideloadly)
description: Guide to installing Dopamine using Sideloadly
permalink: /installing-dopamine-sideloadly
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
  - Alriceee
---

Dopamine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

Dopamine supports all devices on iOS 15.0 to 16.5, A14 and earlier devices and M1 devices on iOS 16.5.1, and A11 and earlier devices on iOS 16.6 to 16.6.1.

::: danger

If your device is using the preinstalled version of iOS that your device first shipped with, this guide will not work, and you'll need to follow <router-link to="/installing-dopamine">Installing Dopamine</router-link> instead.

:::

::: danger

if you are currently using *rootful* palera1n, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

:::

::: danger

If you have previously used Serotonin and/or Bootstrap, you will need to remove them fully before proceeding.

If you don't know what Bootstrap or Serotonin are, you can ignore this notice and proceed.

:::

## Downloads

::: tip

This section requires a computer.

:::

- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [Dopamine](https://ellekit.space/dopamine)
    <!---A12 and later devices on iOS 15 are recommended to download the 2.1.7 version of [Dopamine](https://github.com/opa334/Dopamine/releases/download/2.1.7/Dopamine.ipa) instead-->

### Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Dopamine `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password

The app will now install to your iOS device.

::: tip

Once Dopamine is successfully installed, a computer is no longer required for the remainder of this guide.

:::

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Dopamine application can now be opened from home screen.

::: danger

If you're on iOS 16.0 to 16.6.1, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

## Running Dopamine

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

## Installing TrollStore

::: tip

While Dopamine is now installed and setup, this next section - *while technically optional* - is **highly recommended**, since it'll allow you to install Dopamine and not have to worry about keeping it signed.

:::

### Installing TrollStore

1. Open the Sileo app
1. Go to the Search tab and search for `TrollStore Helper`
1. Tap on `TrollStore Helper`
1. Tap "Get"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. install the `TrollStore Helper` package
1. After TrollStore Helper installs, close Sileo
1. Open the `TrollHelper` app on your home screen
1. Press `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

::: danger

Make sure that you do the following steps, or you won't be able to access TrollStore after rebooting your device into stock iOS.

:::

### Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps
1. Reboot your device, then open the `Tips` app
1. Press `Refresh App Registrations`

TrollStore should now be accessible from the Home Screen. From there, we can use TrollStore to permanently install Dopamine.

### Downloads

- The latest version of [Dopamine](https://ellekit.space/dopamine)
    - A12 and later devices on iOS 15 are recommended to download the 2.1.7 version of [Dopamine](https://github.com/opa334/Dopamine/releases/download/2.1.7/Dopamine.ipa) instead
    - Make sure to download the `.ipa` file onto your iOS device

### Installing Dopamine

1. Open TrollStore if it is not open already
    - If you're in a different tab, go back to the `Apps` tab
1. Press the `+` on the top right
1. Go to where you saved the Dopamine `.ipa` file
1. Tap on the Dopamine `.ipa` file
1. Tap `Install`

The Dopamine app will now be installed onto your device.