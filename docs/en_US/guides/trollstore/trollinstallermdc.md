---
lang: en_US
title: Installing TrollStore (TrollInstallerMDC)
description: Guide to installing TrollStore via TrollInstallerMDC
permalink: /installing-trollstore-trollinstallermdc
sidebar: false
redirect_from:
extra_contributors:
  - opa334
  - Alriceee
---

## Requirements

- A device running iOS/iPadOS 15.0 to 15.7.1 or 16.0 to 16.1.2
- The Tips app installed to your device
- The latest version of [PlumeImpactor](https://github.com/khcrysalis/PlumeImpactor/releases/latest)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [TrollInstallerMDC](https://dhinakg.github.io/apps.html)

## Installing the application

1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open PlumeImpactor
1. Go to `Settings` -> `Sign In`
1. Enter in your Apple Account and Password
1. Close the Settings and Sign In windows
1. Drag and drop the TrollInstallerMDC `.ipa` file into PlumeImpactor
1. Click `Install`

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The TrollInstallerMDC application can now be opened from home screen.

::: danger

If you're on iOS 16.0 to 16.1.2, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

## Injecting TrollStore Helper

::: warning

If you've already opened Tips, reboot your device before following these steps

:::

1. Open TrollInstallerMDC
1. Once it says "Successfully replaced Tips binary", close the `TrollInstallerMDC` app
    - If it gives an error, close TrollInstallerMDC and re-open it 

## Installing TrollStore

1. Open the `Tips` app
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

## Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps