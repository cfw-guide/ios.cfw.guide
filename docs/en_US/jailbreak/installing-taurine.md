---
lang: en_US
title: Installing Taurine
description: Guide to installing Taurine using TrollStore
permalink: /installing-taurine
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
  - Alriceee
---

Taurine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The tool is compatible with jailbreaking all devices on iOS/iPadOS versions 14.0 to 14.8.1.

::: warning

If you are already jailbroken with another jailbreak (besides Odysseyra1n), make sure to properly <router-link to="/restoring-rootfs">remove it</router-link> before proceeding.

:::

::: warning

*Reliable* M1 iPad Pro support for 1TB and 2TB M1 iPad Pro's requires an *unofficial* build of Taurine. If you are not comfortable with using an unofficial build, you can attempt to use the official release, but it will be extraordinarily unlikely that it ever succeeds.

:::

We will first install TrollStore using one of two methods (depending on your device), and then install Taurine through TrollStore.

## Installing TrollStore

The method that needs to be followed in order to install TrollStore depends on your device, select the tab that fits your device and follow the subsequent steps.

::: tip

If you already have TrollStore installed, you can skip this section.

:::

::::: tabs

:::: tab name="TrollHelperOTA (A12 and later)" :default="true"

::: warning

This method only supports A12 and later devices.

:::

### Installing TrollHelper

1. Open Safari
1. Open this page on your device
    - The url of this page is `https://ios.cfw.guide/installing-taurine`
1. On your device, [tap here](itms-services://?action=download-manifest&url=https://jailbreaks.app/cdn/plists/TrollHelper.plist):
    - If you're unable to access this page, type `itms-services://?action=download-manifest&url=https://jailbreaks.app/cdn/plists/TrollHelper.plist` into Safari
1. Tap `Install`

An app named `GTA Car Tracker` will now install to your iOS device, this app is TrollHelper, however.

### Installing TrollStore

1. Open the `GTA Car Tracker` app
1. Tap `Register Persistence Helper`
1. Tap `Install TrollStore`

The TrollStore application will now install to your iOS device.

::::

:::: tab name="TrollInstallerX (A11 and earlier)"

### Requirements

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
TrollInstallerX is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [TrollInstallerX](https://github.com/alfiecg24/TrollInstallerX/releases/latest/download/TrollInstallerX.ipa)

### Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollInstallerX `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

### Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The TrollInstallerX application can now be opened from home screen.

### Installing TrollStore

1. Open TrollInstallerX
1. Tap `Install TrollStore`
    - If your device is stuck on "Exploiting Kernel", reboot your device
1. When prompted to select an app to install the persistence helper into, select an app you care about **the least**
    - If you don't know what app to select, select `Tips`
    - If your device reboots *before* getting to this step, try again

Both TrollStore and its persistence helper should now be installed.

::::

:::::

## Installing Taurine

### Downloads

- The latest version of [Taurine](https://taurine.app/)
    - If you have a 1TB or 2TB M1 iPad Pro, you can opt to get the latest [unofficial Taurine](https://github.com/TheMasterOfMike/Taurine/releases/tag/1.1.7-3_M1) instead (if you do not have an M1 iPad Pro, **do not use this unofficial build**)

### Installing Taurine

1. Open `TrollStore`
1. Press the `+` on the top right
1. Go to where you saved the Taurine `.ipa` file
1. Tap on the Taurine `.ipa` file
1. Tap `Install`

The Taurine app will now be installed onto your device.

## Running Taurine

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Taurine application from your home screen immediately afterwards
1. Tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the Taurine application from your home screen immediately after rebooting
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

::: warning

If you receive the error `ERR_Jailbreak`, `ERR_Already_Jailbroken` or `ERR_KernRW` read the Taurine/Odyssey section on the <router-link to="/troubleshooting/#common-errors-on-odyssey-and-taurine">Troubleshooting</router-link> page.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Installing necessary software

1. Open the Sileo application
1. Tap on the "Search" tab
1. Search for "libiosexec1"
1. Tap "Modify", then Tap "Upgrade"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap "Done"
1. Search for "libhooker (common)", "PreferenceLoader", and "RocketBootstrap" and add them to the queue by pressing "Install"
    - While we're preparing the queue, do not install the anything that is queued until after we've selected all our programs to install
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap 'Restart SpringBoard'