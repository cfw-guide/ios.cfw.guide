---
lang: en_US
title: Installing meowbrek2 (palera1n)
description: Guide to installing meowbrek2 using palera1n
permalink: /installing-meowbrek2-palera1n
pkgman: sileo
---

meowbrek2 is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered</router-link> jailbreak, meaning it requires an app to re-apply the exploit after a reboot.

This tool is capable of jailbreaking A11 and earlier devices on iOS/iPadOS versions 15.0 to 15.8.

::: warning

if you are currently using *rootful* palera1n, or setup *rootless* palera1n **before April 27th, 2023**, you need to first <router-link to="/removing-palera1n">Remove rootful palera1n</router-link> before proceeding.

If you are using *rootless* palera1n, and set it up **after April 27th, 2023**, this is not an issue, and you can continue with these steps.

:::

::: warning

Unless you were having issues with the main guide, it is highly recommended to follow <router-link to="/installing-meowbrek2-trollstore">Installing meowbrek2 (TrollStore)</router-link> instead.

:::

## Installing palera1n

::: tip

If you already have *rootless* palera1n installed and set it up **after April 27th, 2023**, you can ignore this section.

:::

In order to install TrollStore and then use meowbrek2, you'll need to first jailbreak with palera1n by following <router-link to="/installing-palera1n">Installing palera1n</router-link>. You can return to this page once you have finished installing palera1n.

## Installing TrollStore

::: tip

If it's not already added, you'll also need to add the `havoc.app` repository to Sileo

:::

::: tip

If you already have TrollStore installed (regardless of whether or not it was through the method listed here), you can skip this section

:::

### Installing TrollHelper

1. Open the Sileo application
1. Tap on the "Search" tab
1. Search for "TrollStore Helper"
1. Tap "Install"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap "Done", then close Sileo
1. Open the `TrollHelper` app on your home screen
1. Press `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

### Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps
1. Reboot your device

Once your device finishes rebooting, open the `Tips` app (which you set as the persistence helper) and press `Refresh App Registrations`.

## Installing meowbrek2

### Downloads

- The latest version of [meowbrek2](https://kok3shidoll.github.io/download/secret/00169AD7-0BA8-4CA6-B0F4-676C3090DFEC/meowbrek2_1.1.6_TS.tipa)
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

You should now be back in a jailbroken state with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
