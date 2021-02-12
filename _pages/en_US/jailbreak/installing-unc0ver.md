---
title: Installing unc0ver
permalink: /installing-unc0ver
redirect_from:
  - /installing-uncover
  - /unc0ver
  - /uncover
  - /u0
  - /uo
excerpt: Guide to installing unc0ver
---

{% include toc title="Table of Contents" %}

Unless you are using an A12 device on iOS 12.1.3 - 12.4.1, you should not be following this page due to the fact that, throughout the past several months, better options have emerged for all other devices/versions, which have superseded unc0ver to the extent where the guide is only recommended and will only contain references to the applicable devices/versions, which are listed on each devices page at [Get Started](get-started)
{:.notice--danger}

unc0ver is a [semi-untethered jailbreak](/types-of-jailbreak#semi-untethered-jailbreaks){:target="_blank"}, meaning it requires a app to re-apply the exploit after a reboot. Click the link to learn more.
{:.notice--info}

unc0ver is capable of jailbreaking every iOS device on firmware version 11.0 up to 13.5, excluding 12.4.9 - 12.5.1, however, for our purposes, it will be used to jailbreak A12 devices on 12.1.3 - 12.4.1.

Due to how [semi-untethered jailbreaks](/types-of-jailbreak#semi-untethered-jailbreaks){:target="_blank"} work, the app will need to be [re-signed](resigning-apps) once every 7 days.

We will use the AltStore tool to install the unc0ver jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [unc0ver](https://github.com/pwn20wndstuff/Undecimus/releases)
- The latest version of [AltStore](http://altstore.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) if on Windows

If you are running iOS 12.1.3 - 12.1.4, you will need to use [AltDeploy](resigning-apps#resign-with-a-mac-altdeploy)
{: .notice--info}

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
1. Download [unc0ver](https://github.com/pwn20wndstuff/Undecimus/releases) on your iOS Device and open the `.ipa` in AltStore
  - Make sure your iOS Device and Mac or PC are connected to the same WiFi network

The unc0ver application can now be opened from home screen.
{: .notice--primary}

## Running unc0ver

1. Reboot your phone
  - This is not necessary but recommended
1. Open the unc0ver application from your home screen immediately afterwards
1. Tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the unc0ver application from your home screen immediately after rebooting
1. Tap "Jailbreak"

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.
{:.notice--danger}

If unc0ver warns you that the app has been tampered with, reinstall unc0ver via AltStore
{:.notice--danger}

If you receive the error `rootFS already mounted, delete the OTA update`, read the [Troubleshooting](troubleshooting#rootfs_u0) page

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Cydia](using-cydia)
{: .notice--info}

If you've used Cydia before, continue to [Blocking Jailbreak Detection](blocking-jailbreak-detection)
{: .notice--textbox}
