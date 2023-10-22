---
lang: en_US
title: "Sideloading Apps"
description: Guide to using sideloading and resigning your apps with or without a computer
permalink: /sideloading-apps
redirect_from:
  - /resign
  - /resigning
  - /altstore
  - /altdaemon
  - /altserver
  - /altdeploy
  - /sideload
  - /sideloading
  - /reprovision
  - /repro
  - /reprovision-reborn
  - /sideloadly
  - /resigning-apps
extra_contributors:
  - ssalagginkool
  - TheHacker894
  - bradleytechman
---

## Required Reading

Semi-untethered jailbreaks require the use of a sideloaded app to jailbreak. Apps sideloaded with a regular Apple ID will expire after 7 days (or 365 days with a Developer Apple ID). After that period, you will no longer be able to open that app to re-jailbreak.

::: danger

If you are using iOS 16, you will need to take extra steps beforehand to open sideloaded apps:

1. Open Settings
1. Go to Privacy & Security and find the `Developer Mode` entry
1. Toggle Developer Mode on, then press `Reboot`
1. After the device reboots, unlock it, and confirm that you want to enable Developer Mode
  - If you have a passcode enabled, you'll need to enter it.

:::

## Sideloading apps

### Sideload using Sideloadly

::: tip

Sideloadly is compatible with iOS 7 and newer.

:::

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the `.ipa` file of your choice into Sideloadly
1. Enter your Apple ID
1. Enter in your password
    - Sideloadly must make a request to its servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

### Sideload using AltStore


::: tip

AltStore is only compatible with iOS 15 and newer.

AltServer for macOS is only compatible with 11.0 and higher.
(10.14 and 10.15 can download [AltServer 1.6.2](https://f000.backblazeb2.com/file/altstore/altserver/1_6_2.zip))

AltServer for Windows is only compatible with Windows 10 and higher.


:::

 1. Download the latest versions [AltServer](http://altstore.io/), [iTunes](https://www.apple.com/itunes/download/win32) if on Windows, and [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) if on Windows
1. Install AltServer for your respective operating system
   
      ::: tip
   
    -For AltServer 1.6.2 and below, on macOS, open the Mail app and open `Mail` -> `Preferences` in the menu bar
    - Click on the `General` tab, the `Manage Plug-ins`, check `AltPlugin`, and apply
      
      :::

1. Connect your iOS Device to your Mac or PC via USB
1. Click AltStore/AltServer in the Menu Bar/System Tray
1. Click Install AltStore
    - Follow all onscreen prompts
1. Open Settings and navigate to `General` -> `Device Management` and verify AltStore
1. Open iTunes (Windows or macOS Mojave or older) or Finder (macOS Catalina or newer) and enable syncing over WiFi
1. Download your desired IPA file and open it in AltStore on your iOS Device.
    - Make sure your iOS Device and Mac or Windows PC are connected to the same WiFi network

## Resigning Apps

### Resigning using Reprovision Reborn

::: tip

ReProvision Reborn is compatible with iOS 9 and newer

:::

1. Add the Havoc Repo to your preferred package manager ([havoc.app](https://havoc.app/))
1. Install Reprovison Reborn
1. Open Reprovision Reborn and follow all onscreen prompts
    - You will be asked to enter your Apple ID. This is only sent to Apple and no one else.

### Resigning using AltDaemon

::: tip

AltDaemon, which utilizes AltStore, is only compatible with iOS 13 and newer. AltDaemon may also work on rootless iOS 15 and 16.

:::

AltDaemon allows AltStore to automatically re-sign these applications, without needing to connect to a computer running AltServer over a local network.

1. Add the Chariz repository to your package manager ([repo.chariz.com](https://repo.chariz.com/))
1. Download and install the "AltDaemon" tweak
1. Close your package manager
1. Sign any apps that are about to expire
