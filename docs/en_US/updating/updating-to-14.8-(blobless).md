---
lang: en_US
title: Updating to 14.8 (Blobless)
description: Guide on updating to 14.8 without any blobs.
permalink: /updating-to-14-8-(blobless)
redirect_from:
  - /updating-to-14-3-(blobless)
  - /updating-to-14-4-(blobless)
  - /updating-to-14-4-1-(blobless)
  - /updating-to-14-4-2-(blobless)
  - /updating-to-14-5-(blobless)
  - /updating-to-14-6-(blobless)
  - /updating-to-14-7-(blobless)
  - /updating-to-14-7-1-(blobless)
  - /updating-to-14-8
---

## Required Reading

While iOS firmware version 14.8 is unsigned, it's still possible to update to it from a lower firmware version and use Odysseyra1n or unc0ver (depending on your device). However, this method will **expire on January 9th, 2022**.

::: danger

Odysseyra1n only fully supports A8(X), A9, A10(X), and A11 devices on iOS 14.8, and unc0ver only supports A12 and A13 iPhone's on iOS 14.8.

:::

::: warning

A11 devices do not allow you to use SEP functionality in a jailbroken state with Odysseyra1n on iOS 14.8. SEP functionality are things such as a passcode, Face ID/Touch ID, and Apple Pay.

:::

::: tip

You need a pre-existing jailbreak installed to use this method.

:::

## Preparing

1. Plug your iDevice into your computer and make a backup through iTunes or Finder
1. Launch your current jailbreak
1. Open your preferred package manager and add the following repo: `https://myxxdev.github.io/`
1. Search and install the `MyBloXX` package
    - There are multiple version; pick the one corresponding to your current iOS version
1. Tap `Restart Springboard`
1. Your device should now be in supervision mode
    - If it's not, go into MyBloXX settings and enable it manually by tapping "Enable Supervision Spoofing"
1. Once you're back into iOS, navigate to this webpage and click this link to install the [update profile](https://cdn.discordapp.com/attachments/688122358107603013/829323445200355359/90_Day_Delay.mobileconfig)
1. After installing the profile, 14.8 should show up in the Settings app as an update
1. Restart your device
1. Open your current jailbreak and restore rootfs
    - If you need a detailed guide on how to restore rootfs, follow <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> and select the jailbreak which you currently use.

## Updating to 14.8

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
    - Ensure that the version you are updating to is 14.8
1. Download and install the update
1. Once updated, remove the 14.8 update certificate through Settings

## Troubleshooting

If you're having issues with updating, install [OTAEnabler](https://repo.cadoth.net/) and reboot. If you're still having issues continue reading below. If it worked and you're on a compatible device, move on to either <router-link to="/installing-odysseyra1n">Installing Odysseyra1n</router-link> or <router-link to="/installing-unc0ver">Installing unc0ver</router-link>.

### "iOS is up to date"

1. Remove any beta profiles installed
1. Install the OTADisabler tweak and then uninstall it
1. Restart your device
  - You can also use ldrestart or a userspace reboot

### "Unable to check for updates"

1. Restore rootFS through your jailbreak
1. Install and open the <router-link to="/installing-unc0ver">unc0ver</router-link> application
1. Turn off "Disable updates"
1. Re-jailbreak using unc0ver

### It just freezes

Re-enable the OTA daemon using the iCleaner tweak

---

Credits to [dhinakg](https://github.com/dhinakg/) for discovering this method.
