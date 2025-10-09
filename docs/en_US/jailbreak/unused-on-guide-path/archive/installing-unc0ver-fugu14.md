---
lang: en_US
title: Installing unc0ver (Fugu14)
description: (NON-FUNCTIONAL) Guide to installing unc0ver with Fugu14
permalink: /installing-unc0ver-fugu14
pkgman: cydia
redirect_from:
  - /installing-uncover-fugu14
  - /installing-unc0ver-(fugu14)
  - /installing-uncover-(fugu14)
extra_contributors:
 - Alriceee
---

::: danger

This guide is **no longer functional** as it is currently written due to various changes to the tools and services this method relies on, and only exists as an archive to how this method previously worked. While it may still be technically possible to use this method with substantially more steps, those steps require a high amount of technical knowledge, and far easier methods are available.

Generally speaking, if you were considering following this guide, you should follow <router-link to="/installing-taurine">Installing Taurine</router-link> instead, which is the currently recommended jailbreak for all devices on iOS/iPadOS 14 (including those which supported jailbreaking with this method).

*Alternatively*, if you are on iOS/iPadOS 14.3 specifically (**not** 14.4 to 14.5.1) and you want to use unc0ver specifically, you can follow <router-link to="/installing-unc0ver">Installing unc0ver (TrollStore)</router-link> instead.

:::

unc0ver is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app to re-apply the exploit after a reboot.

The Fugu14 method of unc0ver supports A12 or newer devices on iOS 14.3 to 14.5.1

::: warning

The Fugu14 method of unc0ver does not support beta versions of iOS. If you're on a beta version of iOS 14.3, 14.4, or 14.5, follow <router-link to="/installing-taurine">Installing Taurine</router-link> instead.

:::

We will use the AltStore tool to allow us to set everything up to be able to jailbreak.

## Downloads

- The latest version of [unc0ver](https://unc0ver.dev)
- The latest version of [AltStore](http://altstore.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.
- The latest version of [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) if on Windows

## Installing the Application

1. Download AltStore for your respective operating system
1. Launch AltStore/AltServer
    - On macOS, open the Mail app and open `Mail` -> `Preferences` in the menu bar
    - Click on the `General` tab, the `Manage Plug-ins`, check `AltPlugin` and apply
1. Connect your iOS Device to your Mac or PC via USB
1. Click AltStore/AltServer in the Menu Bar/System Tray
1. Click Install AltStore
    - Follow all onscreen prompts
1. Open Settings and navigate to `General` -> `Device Management` and verify AltStore
1. Download [unc0ver](https://unc0ver.dev) on your iOS Device and open the `.ipa` in AltStore
    - Make sure your iOS Device and Mac or PC are connected to the same WiFi network
1. Once the `.ipa` installs, you should see a prompt that the jailbreak requires untethering, tap `Install Untethered Jailbreak`
    - If you don't see this prompt after installing the `.ipa`, your device/version combination is incompatible, and you should return to <router-link to="/get-started">Get Started</router-link>.
1. AltStore will install a placeholder application, once this completes, tap `Open Placeholder`
1. Tap `Setup Fugu14`, then once the process completes, tap `OK`
1. Re-open AltStore
1. AltStore will then patch said placeholder application, once this completes, tap `Open Placeholder` once again
1. Tap `Install Untether`
1. Once the untether is finished installing, tap `Reboot Now` and allow the device to reboot
1. Re-open AltStore
1. Tap `Install unc0ver` and allow unc0ver to be installed.
1. Tap `Open unc0ver`

## Running unc0ver

1. Open the settings menu and disable the `Disable Auto Updates` toggle
    - unc0ver disables Over-The-Air updates by default, however it's recommended to toggle this as it can cause issues when updating manually if not disabled
1. Tap "Done"
1. Tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the unc0ver application from your home screen immediately after rebooting
1. Tap "Jailbreak"

::: tip

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.

:::

::: warning

If you receive the error `rootFS already mounted, delete the OTA update`, read the <router-link to="/troubleshooting/#rootfs-already-mounted">Troubleshooting</router-link> page

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-sileo">Installing Sileo</router-link>

:::
