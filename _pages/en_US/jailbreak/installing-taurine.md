---
title: Installing Taurine
permalink: /installing-taurine
redirect_from:
  - /taurine
  - /tr
excerpt: Guide to installing Taurine
sidebar:
  nav: ios1314
---

Taurine is a [semi-untethered jailbreak](/types-of-jailbreak#semi-untethered-jailbreaks){:target="_blank"}, meaning it requires a app to re-apply the exploit after a reboot. Click the link to learn more.
{:.notice--info}

Due to how semi-untethered jailbreaks work, the app will need to be [re-signed](resigning-apps) once every 7 days.

We will use AltStore to install the Taurine jailbreak application to your iOS device for use in the next step.

## Downloads

If jailbreaks.app is signed, you may skip this section.
{: .notice--info}

- The latest version of [Taurine](https://taurine.app/)
- The latest version of [AltStore](http://altstore.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) if on Windows

## Installing the application

Alternatively, you can use [jailbreaks.app](https://jailbreaks.app) if it is signed, and skip this section.
{: .notice--info}

1. Download AltStore for your respective operating system
1. Launch AltStore/AltServer
  - On macOS, open the Mail app and open `Mail` -> `Preferencees` in the menu bar
  - Click on the `General` tab, the `Manage Plug-ins`, check `AltPlugin` and apply
1. Connect your iOS Device to your Mac or PC via USB
1. Click AltStore/AltServer in the Menu Bar/System Tray
1. Click Install AltStore
  - Follow all onscreen prompts
1. Open Settings and navigate to `General` -> `Device Management` and verify AltStore
1. Download [Taurine](https://taurine.app/) on your iOS Device and open the `.ipa` in AltStore
  - Make sure your iOS Device and Mac or PC are connected to the same WiFi network

The Taurine application can now be opened from home screen.

## Running Taurine

1. Reboot your phone
  - This is not necessary but recommended
1. Open the Taurine application from your home screen immediately afterwards
  - If you have unc0ver installed, enable "Restore RootFS" before proceeding to remove unc0ver
1. Tap "Jailbreak"

If you restored rootFS, go back to step 1 and repeat this section.

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.
{:.notice--danger}

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](faq#tweaks), themes and more.

## Installing necessary software

1. Open the Sileo application
1. Tap on the "Search" tab
1. Search for "libhooker"
1. Tap "Install"
  - This will begin a queue - do not install the queue until we've selected all our programs to install
1. Search for "PreferenceLoader" and "RocketBootstrap" and add them to the queue by pressing "Install"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, restart your device and re-jailbreak using Taurine

Continue to [Using Sileo](using-sileo)
{: .notice--info}
