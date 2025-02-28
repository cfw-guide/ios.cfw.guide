---
lang: en_US
title: Installing TrollStore (TrollMisaka)
description: Guide to installing TrollStore via TrollMisaka
permalink: /installing-trollstore-trollmisaka
sidebar: false
redirect_from:
extra_contributors:
  - opa334
  - Alriceee
---

::: danger

This method is extremely unreliable, and should be avoided in most cases.

If you **are not** using an A8(X) iPad on 15.7.2 to 15.8.3, you should check the <router-link to="/installing-trollstore">Installing TrollStore</router-link> chart for a better option.

If you **are** using an A8(X) iPad on 15.7.2 to 15.8.3, you can either:
- Follow <router-link to="/installing-trollstore-trollrestore">Installing TrollStore (TrollRestore)</router-link> (A computer is outright *required*, Find My must also be disabled)
- Follow <router-link to="/installing-dopamine-sideloadly">Installing Dopamine (Sideloadly)</router-link> (Recommended if your goal is to jailbreak to begin with)
- Continue to follow this guide (Only recommended if you don't want to disable Find My *and* do not want to jailbreak)

:::

## Requirements

- A device running iOS/iPadOS 14.0 to 15.8.3
- The Tips app installed to your device
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [TrollMisaka](https://github.com/straight-tamago/TrollMisaka/releases/latest)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollMisaka `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The TrollMisaka application can now be opened from home screen.

## Adding a Keyboard

1. Open TrollMisaka, then exit the app *while keeping it in the app switcher*
1. Go to `Settings` -> `General` -> `Keyboard` -> `Keyboards` -> `Add New Keyboard...`
1. Select `TrollMisaka`
1. Tap `TrollMisaka`, then toggle on `Allow Full Access`, then tap `Allow`
1. Re-open TrollMisaka

After re-opening TrollMisaka, open the app switcher and then reboot your device.

::: danger

Do not fully close TrollMisaka until TrollStore is installed, or you will have to redo the entire guide from the beginning.

:::

## Injecting TrollStore Helper

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

## Installing TrollStore

1. Re-open the app switcher
1. Open the TrollMisaka app *from the app switcher*
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

## Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps