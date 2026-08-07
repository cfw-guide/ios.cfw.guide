---
lang: en_US
title: Installing Dopamine
description: Guide to installing Dopamine using PlumeImpactor
permalink: /installing-dopamine
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
  - Alriceee
---

Dopamine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

Dopamine supports all devices on iOS/iPadOS 15.0 to 17.3.1, and A13 and earlier devices on iOS/iPadOS 17.4 to 18.7.1 and 26.0 to 26.0.1.

If you are on iOS/iPadOS 16.7 or later (excluding iOS/iPadOS 17.0), due to how semi-untethered jailbreaks work, the app will need to be <router-link to="/resigning-apps">re-signed</router-link> once every 7 days.

::: danger

If your device is using the preinstalled version of iOS/iPadOS that your device first shipped with, this guide will not work, and you'll need to follow <router-link to="/installing-dopamine-trollstore">Installing Dopamine (TrollStore)</router-link> instead.

Additionally, if you are using a device on iOS/iPadOS 15.0 to 16.6.1, as well as iOS/iPadOS 16.7 RC (20H18) and 17.0, it's highly encouraged to follow <router-link to="/installing-dopamine-trollstore">Installing Dopamine (TrollStore)</router-link> instead.

:::

::: danger

if you are currently using *rootful* palera1n, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

:::

::: danger

If you have previously used nathanlr, Relaxin, Serotonin, and/or Bootstrap, you will need to remove them fully before proceeding.

If you don't know what any of those tools are, you can ignore this notice and proceed. If you used nathanlr specifically, you can remove it by following <router-link to="/removing-nathanlr">Removing nathanlr</router-link>.

:::

::: tip

Unless jailbreaks.app is signed, this guide requires a computer.

:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Dopamine 2.5b4 is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [PlumeImpactor](https://github.com/khcrysalis/PlumeImpactor/releases/latest)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [Dopamine](https://ellekit.space/dopamine)

### Installing the application

1. Plug your iOS/iPadOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open PlumeImpactor
1. Go to `Settings` -> `Sign In`
1. Enter in your Apple Account and Password
1. Close the Settings and Sign In windows
1. Drag and drop the Dopamine `.ipa` file into PlumeImpactor
1. Click `Install`

The app will now install to your iOS/iPadOS device.

::: tip

Once Dopamine is successfully installed, a computer is no longer required for the remainder of this guide.

:::

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The Dopamine application can now be opened from home screen.

::: danger

If you're on iOS/iPadOS 16.0 or later, and did not use jailbreaks.app to install Dopamine, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

## Running Dopamine

::: tip

If you are using an A12(X/Z) or A13 device on iOS/iPadOS 16.6 or later, the screen will briefly turn off and on during the jailbreak process. This is perfectly normal, and is a result of one of the exploits in the jailbreak process requiring this.

:::

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Dopamine application from your home screen immediately afterwards
1. Tap "Jailbreak"

::: warning

On certain devices with 2GB of RAM running iOS/iPadOS 15.8.7 to 15.8.8 or iOS/iPadOS 16.7 or later, the Dopamine app may need to respring the device before you can attempt to jailbreak. The Dopamine app will notify you if this is the case.

If your device needs this additional step, you will need to redo steps 2 and 3 of this section after the respring is complete.

:::

::: warning

If your device has a replacement screen, there is a chance (*especially if the screen is of low quality*) that the touchscreen **will not work** after userspace rebooting into a jailbroken state. This is **not** a Dopamine issue, and can only be fixed by getting a better screen replacement.

:::

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
1. Go to the "Search" tab
1. Search for `PreferenceLoader`
1. Tap on `PreferenceLoader`
1. Tap on "Get"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap `Reboot Device`

::: tip

The `Reboot Device` button in this case does not fully reboot your device. As a result, you will still be in a jailbroken state after pressing this button.

:::

## Next Steps

Depending on your current firmware version, there may be additional *recommended* steps that you are able to follow. Select the tab that fits your current firmware version, and - if applicable - follow the subsequent steps.

::::: tabs

:::: tab name="iOS/iPadOS 16.7 to 16.7.16 / 17.0.1 to 18.7.1 / 26.0 to 26.0.1" :default="true"

There are no additional steps that can be completed on your current firmware version.

::::

:::: tab name="iOS/iPadOS 15.0 to 16.6.1 / 16.7 RC (20H18) / 17.0"

### Installing TrollStore

::: tip

While Dopamine is now installed and setup, this next section - *while technically optional* - is **highly recommended**, since it'll allow you to install Dopamine and not have to worry about keeping it signed.

:::

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

Make sure that you do the following steps, or you won't be able to access TrollStore after rebooting your device.

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
    - Make sure to download the `.ipa` file onto your iOS/iPadOS device

### Installing Dopamine

1. Open TrollStore if it is not open already
    - If you're in a different tab, go back to the `Apps` tab
1. Press the `+` on the top right
1. Go to where you saved the Dopamine `.ipa` file
1. Tap on the Dopamine `.ipa` file
1. Tap `Install`

The Dopamine app will now be installed onto your device.

::::

:::::