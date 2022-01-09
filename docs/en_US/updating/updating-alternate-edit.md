---
lang: en-US
title: Updating (Blobless, Alternate Edit)
description: Guide on updating without any blobs by editing an alternate profile.
permalink: /updating-alternate-edit
---

## Required Reading

This guide will take you through updating to a higher, unsigned firmware version using an edited alternate update profile. These profiles are unsupported on iOS versions below 14.5, however using a jailbreak, it's possible to trick the device into thinking it's supported on any firmware version.

At the time of writing, you can use this method to update to 14.8, even though it's unsigned.

::: warning

This guide requires a jailbreak. If you don't have a jailbreak installed, navigate to [Get Started](/get-started) to install a jailbreak.

:::

::: tip

This method is only useful for firmware version 14.5 and below. If you are on a more recent firmware version, follow [Updating to 14.8 (Blobless)](/updating-to-14-8-(blobless-alternate)).

:::

## Preparing

1. Plug your iDevice into your computer and make a backup through iTunes or Finder
1. Launch your current jailbreak
1. Open your preferred package manager and add the following repo: [https://cydia.ichitaso.com/](https://cydia.ichitaso.com/)
1. Search and install the `SupervisedEnabler` package
1. Tap `Restart Springboard`
1. Your device should now be supervised
    - You can check by going into the settings app, where a message should be present at the top indicating so. If there isn't, attempt to reinstall `SupervisedEnabler`
1. Once you're back into your device, navigate to this webpage
1. Click the following link and install the [Beta Profile](https://cydia.ichitaso.com/no-ota15.mobileconfig)
1. Click the following link and install the [14.8 Update Profile](/assets/files/delay.mobileconfig) <span style="font-size: 13px; vertical-align: top; padding-left: .1em;">(<a href="https://dhinakg.github.io/delayed-otas.html" target="_blank">Source</a>)</span>

## Editing the profile

1. Open your [package manager](/package-managers) and install the [Filza](https://moreinfo.thebigboss.org/moreinfo/depiction.php?file=filzafilemanagerDp) file manager
1. Open the Filza app and navigate to `/Library/Managed Preferences`
1. Open the `mobilecom.apple.MobileAsset.plist` file
1. Set `MobileAssetAssetAudience` to `c724cb61-e974-42d3-a911-ffd4dce11eda`
1. Reboot your device
    - Alternatively, run `launchctl reboot userspace` in a terminal to run a userspace reboot
1. After rebooting, 14.8 should show up in the Settings app as an update 
    - If it does not, uninstall the profiles and try again
    - If it still doesn't work, ask for help in the r/Jailbreak [Discord Server](https://discord.gg/jb)

## Updating to 14.8

1. Open your current jailbreak and restore rootFS
    - If you need a detailed guide on how to restore rootfs, follow <router-link to="/restoring-rootfs">Restoring Rootfs</router-link> and select the jailbreak which you currently use
1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
    - Ensure that the version you are updating to is 14.8
1. Download and install the update
1. Once updated, remove both:
    - The beta profile you installed earlier
    - The alternate 14.8 profile you used to update