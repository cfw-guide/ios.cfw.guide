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
sidebar:
  nav: ios1314
---

Many users have reported crashing, rebooting and other stability issues while using unc0ver. We recommend to wait until a more stable option is available before jailbreaking.
{: .notice--danger}

If you use a device with an A8-A10(X) SOC, we recommend using [Odysseyra1n](/installing-odysseyra1n) or [Odysseyn1x](using-odysseyn1x) instead.
{: .notice--primary}

unc0ver is a [semi-untethered jailbreak](/types-of-jailbreak#semi-untethered-jailbreaks){:target="_blank"}, meaning it requires a app to re-apply the exploit after a reboot. Click the link to learn more.
{: .notice--info}

unc0ver is capable of jailbreaking every iOS device on firmware version 11.0 up to 14.3, however, for our purposes, it will be used to jailbreak devices in which no easier option is available

Due to how [semi-untethered jailbreaks](/types-of-jailbreak#semi-untethered-jailbreaks){:target="_blank"} work, the app will need to be [re-signed](resigning-apps) once every 7 days.

We will use the AltStore tool to install the unc0ver jailbreak application to your iOS device for use in the next step.

## Downloads

unc0ver is currently signed at [jailbreaks.app](https://jailbreaks.app/) for easy installation without a computer.
{: .notice--primary #ifJailbreaksAppSigned}

<script src="/if_jailbreaksapp_signed.js"></script>

- The latest version of [unc0ver](https://unc0ver.dev/)
- The latest version of [AltStore](http://altstore.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) if on Windows

If you are running iOS 11.0 - 12.1.4, you will need to use [AltDeploy](resigning-apps#resign-with-a-mac-altdeploy)
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
  - If unc0ver warns you that the app has been tampered with, reinstall unc0ver via AltStore
1. Open the settings menu and disable the `Disable Auto Updates` toggle

	unc0ver disables Over-The-Air updates by default, however it's recommended to toggle this as it can cause issues when updating manually if not disabled.
	{: .notice--warning}

1. Tap "Done"
1. Tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the unc0ver application from your home screen immediately after rebooting
1. Tap "Jailbreak"

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.
{:.notice--info}

If you receive the error `rootFS already mounted, delete the OTA update`, read the [Troubleshooting](troubleshooting#rootfs_u0) page

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Cydia](using-cydia)
{: .notice--info}

If you've used Cydia before, continue to [Blocking Jailbreak Detection](blocking-jailbreak-detection)
{: .notice--textbox}
