---
lang: en_US
title: Installing palera1n (macOS)
description: Guide to installing palera1n on macOS
permalink: /installing-palera1n/macos
extra_contributors:
  - Mineek
---

!!!include(./docs/en_US/jailbreak/palera1n/include/tethered.md)!!!

!!!include(./docs/en_US/jailbreak/palera1n/include/a10-a11-passcode.md)!!!

## Enabling Developer Mode

::: danger

This section **only applies if you are using iOS 16**. If you are on iOS 15, skip this section

:::

1. Open the `Settings` app
1. Tap on "Privacy and Security"
1. Scroll down to "Developer Mode" then tap it
1. Toggle the `Developer Mode` toggle on, then tap "Restart"
1. After your device reboots, tap "Turn On" to enable developer mode

## Installing the jailbreak

1. Clone the repo with `git clone --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
1. Run `./palera1n.sh --tweaks <iOS version you're on> --semi-tethered`
    - Put your device in DFU Mode before running this command
    - The semi-tethered flag uses 5-10GB of storage and is also incompatible with 16GB devices, **don't include --semi-tethered in the command** if you are using a 16GB device or have less than 10GB free.

Your device will then boot into a ramdisk, which will dump blobs. It will also set boot argumentts and other variables, and either tether your device or setup the fake rootfs. It will also patch the kernel for you, so you can use tweaks.

1. Once back in recovery/normal mode, place the device into DFU again
1. The device will boot, open the palera1n loader app, and hit install
1. Sileo should have appeared on your homescreen
    - If not, click Tools and choose Do all

Once palera1n says done, tweaks should now be functional. You can find a list of compatible tweaks at [here](https://github.com/itsnebulalol/ios15-tweaks).