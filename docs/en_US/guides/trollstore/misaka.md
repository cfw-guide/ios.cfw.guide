---
lang: en_US
title: Installing TrollStore (Misaka)
description: Guide to installing TrollStore via Misaka
permalink: /installing-trollhelper-misaka
redirect_from:
extra_contributors:
  - opa334
---

## Requirements

You will need:
- A device running iOS/iPadOS 15.0 to 15.7.1 or 16.0 to 16.1.2
- The Tips app installed to your device
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [Misaka](https://github.com/straight-tamago/misaka/releases/latest)

Additionally, you'll need to download the [TrollStore Misaka](https://cdn.discordapp.com/attachments/1157666534630625380/1178798853185622026/TrollStore_2.misaka) file onto your device.

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Misaka `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Misaka application can now be opened from home screen.

::: danger

If you're on iOS 16.0 to 16.1.2, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

## Injecting TrollStore Helper

1. Open Misaka
  - If asked on if you want to use KFD Mode, tap "No"
1. Go to the Settings button on the top left, scroll down to "EXPLOIT" and change the method to "MDC"
1. Reopen Misaka
1. Go to the "Packages [Emu/var]" tab
1. Tap import, then tap the "TrollStore_2.misaka" file you downloaded earlier
1. Tap on the long string that appears (make sure there's a checkmark) and then press the second button on the top right
1. Tap "Restart" to Restart SpringBoard

After doing this, reboot your device.

## Installing TrollStore

1. Unlock your device
1. Open the Tips app
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.