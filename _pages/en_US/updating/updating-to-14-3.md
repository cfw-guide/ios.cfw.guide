---
title: Updating to 14.3 (Blobless)
permalink: /updating-to-14-3
excerpt: Guide on updating to 14.3 without any blobs.
redirect_from:
  - /and@@starplayer132
---

## Required Reading

While iOS firmware version 14.3 is unsigned, it's still possible to update to it from a lower firmware version. However, this method will **expire on April 26th, 2021**.

This is a good firmware version to update to as it supports the latest Taurine jailbreak, while being a fairly stable OS to begin with.

You need a pre-existing jailbreak installed to use this method.
{: .notice--warning}

## Preparing

1. Plug your iDevice into your computer and make a backup through iTunes or Finder
  - This is important as the device will be wiped later on
1. Launch your current jailbreak
1. Open your preferred package manager and add the following repo: `https://myxxdev.github.io/`
1. Search and install the `MyBloXXX` package
  - There are multiple version; pick the one corresponding to your current iOS version
1. Tap `Restart Springboard`
1. Once you're back into iOS, navigate to this webpage and click this link to install the [update profile](https://cdn.discordapp.com/attachments/688122358107603013/829323445200355359/90_Day_Delay.mobileconfig)
1. After installing the profile, 14.3 should show up in the Settings app as an update
1. Restart your device
1. Open your current jailbreak and enable restoring rootFS
  - This will remove all tweaks and other jailbreak related data
1. Tap the button to jailbreak your device

## Updating to 14.3

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
  - Ensure that the version you are updating to is 14.3
1. Download and install the update

## Wiping your device

1. Open the Settings application
1. Go to `General` -> `Reset`
1. Tap `Erase All Contents and Settings`
1. Follow any prompts and confirmations that appear
1. Once your device is erased, restore the device backup you made earlier

## Troubleshooting

If you're having issues with updating, follow the advice below. If it worked, continue on to [installing Taurine](installing-taurine).

### "iOS is up to date"

1. Remove any beta profiles installed
1. Install the OTADisabler tweak and then uninstall it
1. Restart your device
  - You can also use ldrestart or a userspace reboot

### "Unable to check for updates"

1. Restore rootFS through your jailbreak
1. Install and open the [unc0ver](installing-unc0ver) application
1. Turn off "Disable updates"
1. Re-jailbreak using unc0ver

### It just freezes

Re-enable the OTA daemon using the iCleaner tweak

Continue to [Installing Taurine](installing-taurine)
{: .notice--info}
