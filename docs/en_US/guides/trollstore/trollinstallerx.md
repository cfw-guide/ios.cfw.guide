---
lang: en_US
title: Installing TrollStore (TrollInstallerX)
description: Guide to installing TrollStore via TrollInstallerX
permalink: /installing-trollstore-trollinstallerx
sidebar: false
redirect_from:
extra_contributors:
  - opa334
  - alfiecg
---

::: warning

A8(X) iPads are only supported on firmware versions 14.0 to 15.1.

:::

TrollInstallerX supports all iOS/iPadOS devices on firmware versions 14.0 to 15.1.1, as well as all A9(X) and later devices on firmware versions 15.2 to 16.6.1.

## Requirements

- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [TrollInstallerX](https://github.com/alfiecg24/TrollInstallerX/releases/latest)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollInstallerX `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The TrollInstallerX application can now be opened from home screen.

::: danger

If you're on iOS 16.0 to 16.6.1, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

## Running TrollInstallerX

1. Open TrollInstallerX
1. Tap `Install TrollStore`
    - If your device is stuck on "Exploiting Kernel", reboot your device
1. When prompted to select an app to install the persistence helper into, select an app you care about **the least**
    - If you don't know what app to select, select `Tips`
    - If your device reboots *before* getting to this step, try again

The persistence helper, and in most cases, TrollStore itself, should now be installed.

::: danger

On iOS 16.5.1 for A15, A16, and M2 devices, as well as iOS 16.6 to 16.6.1 for A12 and later devices, you'll need to install TrollStore through the installed persistence helper after using TrollInstallerX, this is covered in the following additional section below.

All other devices **do not** need to follow the next additional section.

:::

## Additional Steps

::: warning

If the persistence helper is not installed into the app you selected, shut down your device normally, turn your device back on, open the app you want as your persistence helper, then close the app (**from the app switcher**) and run TrollInstallerX again.

:::

1. Open the app you selected as your persistence helper from your home screen
1. Press `Install TrollStore`.

TrollStore will now be installed to your device.