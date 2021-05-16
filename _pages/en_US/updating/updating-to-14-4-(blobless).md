---
title: Updating to 14.4 (Blobless)
permalink: /updating-to-14-4-(blobless)
excerpt: Guide on updating to 14.4 without any blobs.
redirect_from:
  - /updating-to-14-4
  - /updating-to-14-3-(blobless)
  - /and@@starplayer132
---

## Required Reading

While iOS firmware version 14.4 is unsigned, it's still possible to update to it from a lower firmware version and use Odysseyra1n. However, this method will **expire on June 8th, 2021**.

Odysseyra1n only fully supports A8(X) to A10(X) on iOS 14.4, with limited support (no security) for A11 devices, for more context, see [Regarding Odysseyra1n on A11](information-regarding-a11).
{: .notice--danger}

You need a pre-existing jailbreak installed to use this method.
{: .notice--primary}

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
1. After installing the profile, 14.4 should show up in the Settings app as an update
1. Restart your device
1. Open your current jailbreak and enable restoring rootFS
  - This will remove all tweaks and other jailbreak related data
1. Tap the button to jailbreak your device

## Updating to 14.4

1. Plug your device into power and connect to the Internet with Wi-Fi
1. Open the Settings application
1. Tap `General` -> `Software Update`
  - Ensure that the version you are updating to is 14.4
1. Download and install the update
1. Once updated, remove the 14.4 update certificate through Settings

## Troubleshooting

If you're having issues with updating, install [OTAEnabler](https://repo.cadoth.net/) and reboot. If you're still having issues continue reading below. If it worked and you're on a compatible device, move on to [installing Odysseyra1n](installing-odysseyra1n).

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

---

Credits to [dhinakg](https://github.com/dhinakg/) for discovering this method.
