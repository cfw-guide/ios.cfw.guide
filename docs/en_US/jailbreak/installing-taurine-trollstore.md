---
lang: en_US
title: Installing Taurine (TrollStore)
description: Guide to installing Taurine using TrollStore
permalink: /installing-taurine-trollstore
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
---

Taurine is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

::: warning

In order to follow this method, you'll need an A12 or newer device. If you have an A11 or earlier device, follow <router-link to="/installing-taurine">Installing Taurine</router-link> instead.

:::

While Taurine is compatible with jailbreaking every device on iOS/iPadOS versions from 14.0 to 14.8.1, this method of obtaining Taurine requires an A12 or newer device.

::: warning

If you are already jailbroken with unc0ver, make sure to properly <router-link to="/removing-unc0ver">remove unc0ver</router-link> before proceeding.

:::

::: warning

*Reliable* M1 iPad Pro support for 1TB and 2TB M1 iPad Pro's requires an *unofficial* build of Taurine. If you are not comfortable with using an unofficial build, you can attempt to use the official release, but it will be extraordinarily unlikely that it ever succeeds.

:::

## Downloads

- The latest version of [Taurine](https://taurine.app/)
    - If you have a 1TB or 2TB M1 iPad Pro, you can opt to get the latest [unofficial Taurine](https://github.com/TheMasterOfMike/Taurine/releases/tag/1.1.7-3_M1) instead (if you do not have an M1 iPad Pro, **do not use this unofficial build**)
    - Make sure to download the Taurine `.ipa` file **onto your iOS device**

## Installing TrollHelper

1. Open Safari
1. Go to [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
1. Tap `Install`

An app named `GTA Car Tracker` will now install to your iOS device, this app is TrollHelper, however.

## Installing TrollStore

1. Open the `GTA Car Tracker` app
1. Tap `Register Persistence Helper`
1. Tap `Install TrollStore`

The TrollStore application will now install to your iOS device.

## Installing Taurine

1. Go back to the `Apps` tab
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
1. Tap "Install"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap "Done"
1. Search for "libhooker (common)", "PreferenceLoader", and "RocketBootstrap" and add them to the queue by pressing "Install"
    - While we're preparing the queue, do not install the anything that is queued until after we've selected all our programs to install
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap 'Restart SpringBoard'