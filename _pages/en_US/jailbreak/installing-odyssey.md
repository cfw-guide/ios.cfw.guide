---
title: Installing Odyssey
permalink: /installing-odyssey
redirect_from:
  - /odyssey
  - /od
excerpt: Guide to installing Odyssey
sidebar:
  nav: ios1314
---

Odyssey is a [semi-untethered jailbreak](/types-of-jailbreak#semi-untethered-jailbreaks){:target="_blank"}, meaning it requires a app to re-apply the exploit after a reboot. Click the link to learn more.
{:.notice--info}

If you are already jailbroken with unc0ver, make sure to properly [remove it](removing-u0) before proceeding.
{:.notice--danger}

Due to how semi-untethered jailbreaks work, the app will need to be [re-signed](resigning-apps) once every 7 days.

We will use AltStore to install the Odyssey jailbreak application to your iOS device for use in the next step.

## Downloads

Odyssey is currently signed at [jailbreaks.app](https://jailbreaks.app/) for easy installation without a computer.
{: .notice--primary #ifJailbreaksAppSigned}

<script src="/assets/js/if_jailbreaksapp_signed.js"></script>

- The latest version of [Odyssey](https://cdn.discordapp.com/attachments/668928257428815892/819903339978424360/Odyssey_1.3.1b2.ipa)
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

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.
{:.notice--danger}

If you receive the error `ERR_Jailbreak`, `ERR_Already_Jailbroken` or `ERR_TFP0` read the Taurine/Odyssey section on the [Troubleshooting](troubleshooting#taurine_odyssey) page
{: .notice--info}

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Sileo](using-sileo)
{: .notice--info}
