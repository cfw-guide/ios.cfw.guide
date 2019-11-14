---
title: Blocking Updates
permalink: /blocking-updates
---

{% include toc title="Table of Contents" %}

If you're' currently on an unjailbreakable firmware, and have hopes to jailbreak when something comes out for your firmware, you need to block updates. This method will block accidental OTA updates, which ensures that you will be able to jailbreak your phone when the time comes.

We can block updates using an Apple tvOS profile, which will prevent any further iOS updates downloading to your device. This is completely safe and can be removed easily when you want to update.

### Installing the tvOS profile

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

### Uninstalling the tvOS Profile

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
