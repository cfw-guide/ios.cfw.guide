---
lang: en_US
title: Installing Odyssey
description: Guide to installing Odyssey
permalink: /installing-odyssey
redirect_from:
  - /odyssey
  - /od
---

Taurine is a [semi-untethered jailbreak](/types-of-jailbreak/#semi-untethered-jailbreaks), meaning it requires a app to re-apply the exploit after a reboot.

The tool is compatible with jailbreaking devices on iOS/iPadOS versions from 13.0 to 13.7.

Due to how semi-untethered jailbreaks work, the app will need to be [re-signed](/resigning-apps) once every 7 days.

We will use AltStore to install the Odyssey jailbreak application to your iOS device for use in the next step.

::: warning
If you are already jailbroken with unc0ver, make sure to properly [remove it](/removing-unc0ver) before proceeding.
:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Odyssey is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [Odyssey](https://theodyssey.dev)
- The latest version of [AltStore](http://altstore.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) if on Windows

## Installing the application

1. Download AltStore for your respective operating system
1. Launch AltStore/AltServer
    - On macOS, open the Mail app and open `Mail` -> `Preferencees` in the menu bar
    - Click on the `General` tab, the `Manage Plug-ins`, check `AltPlugin` and apply
1. Connect your iOS Device to your Mac or PC via USB
1. Click AltStore/AltServer in the Menu Bar/System Tray
1. Click Install AltStore
    - Follow all onscreen prompts
1. Open Settings and navigate to `General` -> `Device Management` and verify AltStore
1. Download [Odyssey](https://theodyssey.dev/#download) on your iOS Device and open the `.ipa` in AltStore
    - Make sure your iOS Device and Mac or PC are connected to the same WiFi network

The Odyssey application can now be opened from home screen.

## Running Odyssey

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Odyssey application from your home screen immediately afterwards
1. Tap "Jailbreak"

::: tip
If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.
:::

::: warning
If you receive the error `ERR_Jailbreak`, `ERR_Already_Jailbroken` or `ERR_TFP0` read the Taurine/Odyssey section on the [Troubleshooting](/troubleshooting/#common-errors-on-odyssey-and-taurine) page
:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](/faq/#what-are-tweaks), themes and more.
