---
title: Blocking Updates
permalink: /blocking-updates
---

This method of update blocking will not work if you're on iOS 13 or above.
{: .notice--danger}

This will take you through installing the iOS 12 "tvOS profile" to block updates on your device. It's easy to install and ensures you'll stay on the firmware you're currently on. This is useful if you're waiting for a jailbreak for a lower version and don't want to update in case it gets patched.

## Installing the tvOS profile

1. Visit this website on your iOS device
2. Click [this link](https://cdn.discordapp.com/attachments/355816969984933890/508301348505387008/tvOS_12_Beta_Profile.mobileconfig) in your device's browser
3. Select "Allow" if prompted
4. Choose your current device if prompted
1. Open the Settings application
1. Navigate to `General` -> `Profile`
  - This may also be called `Profile and Device Management`
1. Tap on the tvOS Beta Profile you just installed
5. Tap "Install"
6. Confirm by tapping "Install" again
7. Enter your passcode if you have one
8. Tap "Install" for a third time
9. Restart your device when prompted

Your device should no longer receive software updates.
{: .notice--success}

## Uninstalling the tvOS Profile

If you want to update your system again, follow the following steps to remove update blocking.

By removing update blocking you may update to a higher firmware and be unable to jailbreak.
{: .notice--danger}

1. Open the Settings application
2. Go to `General` -> `Profile`
  - This may also be called `Profile and Device Management`
3. Tap on the tvOS Beta Profile
4. Tap "Remove Downloaded Profile"

Your device should now be able to update again.
{: .notice--success}
