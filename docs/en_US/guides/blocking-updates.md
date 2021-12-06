---
lang: en-US
title: Blocking Updates
description: How to block updates on your iOS or iPadOS device.
permalink: /blocking-updates
extra_contributors:
  - Tanbeer191
  - Jack LaFond
---

::: warning

This method will not work if you're on iOS 13 or older.

:::

This will take you through installing the iOS 14 "tvOS profile" to block updates on your device. It's easy to install and ensures you'll stay on the firmware you're currently on. This is useful if you're waiting for a jailbreak for a lower version and don't want to update in case it gets patched.

## Installing the tvOS profile

1. Set your device date in `Settings > General > Date and Time` to the 31st of March or earlier
2. Open [gginin.de/jb/no_ota.html](https://gginin.de/jb/no_ota.html) in your device's browser
   - If you get a "Your Clock Is Set Incorrectly" error, click "Show details", then "visit this website"
3. Select "iOS 14" from the list of options
4. Select "Allow" if prompted
5. Open the Settings application
6. Navigate to `General` -> `Profile`
    - This may also be called `Profile and Device Management`
1. Tap on the tvOS Beta Profile you just installed
5. Tap "Install"
6. Confirm by tapping "Install" again
7. Enter your passcode if you have one
8. Tap "Install" for a third time
9. Restart your device when prompted
10. Change your date back to the current date and time in the same place as before

Your device should no longer receive software updates. You can confirm this by going to `Settings > General > Software Update`, and if it shows that "iOS is up to date", the update blocker is working.


## Uninstalling the tvOS Profile

If you want to update your system again, follow the following steps to remove update blocking.

::: danger

By removing update blocking, you may update to a higher firmware, and be unable to jailbreak.

:::

1. Open the Settings application
2. Go to `General` -> `Profile`
  - This may also be called `Profile and Device Management`
3. Tap on the tvOS Beta Profile
4. Tap "Remove Downloaded Profile"

Your device should now be able to update again.
