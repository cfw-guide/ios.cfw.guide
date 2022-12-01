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

!!!include(./docs/en_US/jailbreak/palera1n/include/tips-install.md)!!!

## Applying the jailbreak

::: tip

If you previously used rootless palera1n or jailbroke with tweaks before November 13th, 2022, run `rm -rf palera1n` before proceeding

:::

1. Clone the repo with `git clone --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
1. Run `./palera1n.sh --tweaks <iOS version you're on> --semi-tethered`
    - Put your device in DFU Mode before running this command
    - The semi-tethered flag uses 5-10GB of storage and is also incompatible with 16GB devices, **don't include --semi-tethered in the command** if you are using a 16GB device or have less than 10GB free.
    - If you have a wifi-only device, add the `--no-baseband` switch to the command.
    - If you have an iPhone 7 or iPhone 8, **don't include --semi-tethered in the command**, even if you meet the aforementioned criteria to use the flag.

Your device will then boot into a ramdisk, which will replace the Tips app and dump blobs. It will also set boot args and other variables, and either get ready for the tether or setup the fake rootfs. It will also patch the kernel for you, so you can use tweaks.

1. Once back in recovery/normal mode, place the device into DFU again
1. The device will boot, open the Tips app, and hit install
1. Sileo should have appeared on your homescreen
    - If not, click Tools and choose Do all

Once palera1n says done, tweaks should now be functional. You can find a list of compatible tweaks at [here](https://github.com/itsnebulalol/ios15-tweaks).
