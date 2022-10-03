---
lang: en_US
title: Installing TrollStore (TrollInstaller)
description: Guide to installing TrollStore using TrollInstaller
permalink: /installing-trollinstaller
redirect_from:
  - /trollinstaller
extra_contributors:
  - opa334
---

## Requirements

You will need:
- An A10 or newer device on iOS 15.0 to 15.1.1
- The latest version of [TrollInstaller](https://github.com/opa334/TrollStore/releases/latest)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
TrollInstaller is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

## Installing TrollInstaller

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollInstaller `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The TrollInstaller application can now be opened from home screen.

## Installing TrollStore

1. Open the `TrollInstaller` app on your home screen
1. Press `Install`
    - If your device reboots, redo these steps

TrollStore should now be installed. If it doesn't appear on the home screen, restart your device.

::: tip

While TrollStore is now installed, we recommend doing the following section so that you'll be able to resolve your apps being unable to open if the icon cache is reloaded

:::

## Installing Persistence Helper

::: warning

This will replace the `Tips` app (or another app that you choose) on your device with TrollHelper

:::

1. Open the `TrollStore` app on your home screen
1. Press on the `Settings` tab and press `Install Persistence Helper`
1. Select the `Tips` app
    - You can choose another *uninstallable default app* instead, but we recommend the tips app as it's the most useless app present.

The app which was replaced should now open the Persistence Helper.