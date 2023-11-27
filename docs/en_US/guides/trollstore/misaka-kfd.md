---
lang: en_US
title: Installing TrollStore (Misaka-kfd)
description: Guide to installing TrollStore via Misaka using kfd
permalink: /installing-trollhelper-misaka-kfd
redirect_from:
extra_contributors:
  - opa334
---

## Requirements

You will need:
- A device running iOS/iPadOS 16.2 to 16.5, or 16.6b1
- The Tips app installed to your device
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [Misaka](https://github.com/straight-tamago/misaka/releases/latest)

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

If you don't have it enabled already, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

## Injecting TrollStore Helper

::: warning

This method may take several tries in order to work successfully.

:::

1. Open Misaka
1. Go to the Settings button on the top left, scroll down to "EXPLOIT" and change the method to "MDC"
1. Reopen Misaka
1. Go to the "Packages [Emu/Var]" tab
1. Tap on the bottom left button (known as "ToolBox") and tap `Install TrollStore`, then tap `Tips`

Your device will respring after you tap `Tips`.

## Installing TrollStore

1. Unlock your device
1. Open the Tips app
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.