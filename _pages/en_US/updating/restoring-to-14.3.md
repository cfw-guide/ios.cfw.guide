---
title: "Restoring to 14.3"
permalink: /restoring-to-14-3
redirect_from:
  - /future-restore
  - /futurerestore
  - /fr
excerpt: Guide to using FutureRestore to restore your device to 14.3
sidebar:
  nav: sidebar
---

With the recent and upcoming jailbreak releases for iOS 14.0 to 14.3, many users find themselves on a version too low to take advantage of it.

Luckily, users who have [saved their blobs](/saving-blobs) can easily update to an older iOS 14 version and install these new jailbreaks.

If you saved blobs for an earlier version of iOS 14, but not 14.3, this will still work. 14.3 is recommended but not required.
{: .notice--primary}

You must restore rootFS before updating or your device will be wiped.
{: .notice--danger}

## Requirements

- Blobs saved for iOS 14.3 or below
  - If there are multiple blobs saved for your version, use the first one
- A device on iOS 13.7 or below
  - If you have an A11 device or older, you can do this on iOS 14.x using [Dimentio](https://www.reddit.com/r/jailbreak/comments/ly5p10/update_free_release_dimentio_generator_setter_210/) to set your generator
- A computer with at least 12GB of available storage space

## Downloads

- The latest release of [FutureRestore-GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
- The iPSW file for your device from [ipsw.me](ipsw.me)
  - This should be the same iOS version that your blob is for
- On Windows, make sure you have [iTunes](https://www.apple.com/itunes/) installed
  - Scroll down and select the other Windows build as the Windows Store version will not work

## Instructions

1. Connect your iDevice to your computer
1. Make sure that your computer is trusted by your device
1. Create a full backup of your device through iTunes or Finder
1. Download and install FutureRestoreGUI
  - If prompted by Windows Defender or other anti-virus software, allow the program to run - it's safe
1. Click the `Download FutureRestore` button to fetch the latest version of FutureRestore
1. Click the `Select Blob File...` button and select your blob `.shsh2` file
1. Click the `Select Target iPSW File...` and select your `.ipsw` file
1. Enable the `Update (-u)` checkbox
  - If your device was previously jailbroken and you haven't restored rootFS, **DO NOT** enable this option
1. If you're using a non-cellular (WiFi only) device, Change "Latest Baseband" to "No Baseband"

    At the time of writing this, the latest update is 14.4.2 and using the latest baseband and SEP is safe. If there is a new update and this page has not been updated, <u>make sure to check</u> if the latest baseband and SEP are compatible before continuing.
    {: .notice--danger}

1. Click `Start FutureRestore`

Once this process is done, you should be updated to your desired firmware version, ready to use any new jailbreaks.

If you experience any issues during the installation, ask in the #futurerestore-help channel on the [r/jailbreak Discord Server](https://discord.gg/jb)
