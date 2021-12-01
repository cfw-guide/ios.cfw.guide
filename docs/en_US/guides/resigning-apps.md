---
lang: en_US
title: "Resigning Apps"
description: Guide to using resigning your apps with or without a computer
permalink: /resigning-apps
extra_contributors:
  - TheHacker894
---

## Required Reading

Semi-untethered jailbreaks require the use of a sideloaded app to jailbreak. Apps sideloaded with a regular Apple ID will expire after 7 days or 365 days with a Developer Apple ID. After that period, you will no longer be able to open that app to re-jailbreak.

## Resign with a Mac (AltDeploy)

::: warning
AltDeploy has not been optimized for newer versions of macOS. You may experience incompatibility issues.
:::

1. Download and Install the latest version of [AltDeploy](https://github.com/pixelomer/AltDeploy/releases)
1. Connect your iOS Device to  your Mac via USB
1. Choose the IPA file you want to sideload
    - Follow all onscreen prompts
1. Open Settings and navigate to `General` -> `Device Management` and verify the app you sideloaded

## Resign With Computer (AltStore/AltServer)

::: tip
AltServer is only compatible with iOS 12.2 and newer.
:::

1. Download the latest versions [AltServer](http://altstore.io/), [iTunes](https://www.apple.com/itunes/download/win32) if on Windows, and [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) if on Windows
1. Install AltServer for your respective operating system
    - On macOS, open the Mail app and open `Mail` -> `Preferencees` in the menu bar
    - Click on the `General` tab, the `Manage Plug-ins`, check `AltPlugin` and apply
1. Connect your iOS Device to your Mac or PC via USB
1. Click AltStore/AltServer in the Menu Bar/System Tray
1. Click Install AltStore
    - Follow all onscreen prompts
1. Open Settings and navigate to `General` -> `Device Management` and verify AltStore
1. Open iTunes (Windows or macOS Mojave or older) or Finder (macOS Catalina or newer) and enable syncing over WiFi
1. Download your desired IPA file and open it in AltStore on your iOS Device.
    - Make sure your iOS Device and Mac or Windows PC are connected to the same WiFi network

## Resign Without a Computer (AltDaemon)

::: tip
AltDaemon, which utilizes AltStore, is only compatible with iOS 12.2 and newer.
:::

AltDaemon allows AltStore to automatically re-sign these applications, without needing to connect to a computer running AltServer over local network.

1. Add the Dynastic repository to your package manager ([repo.dynastic.co](https://repo.dynastic.co/))
1. Download and install the "AltDaemon" tweak
1. Close your package manager
1. Sign any apps that are about to expire

## Resign Without a Computer (ReProvision Reborn)

::: tip
ReProvision Reborn is compatible with iOS 9 and newer
:::

1. Add the Packix Repo to your preferred package manager ([repo.packix.com](https://repo.packix.com/))
1. Install Reprovison Reborn
1. Open Reprovision Reborn and follow all onscreen prompts
    - You will be asked to enter your AppleID. This is only sent to Apple and no one else.