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

1. Clone the repo with `git clone -b tweaks --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
1. Run `./palera1n.sh --tweaks <iOS version you're on> --semi-tethered`
    - Put your device in DFU Mode before running
    - The semi-tethered flag uses 5-10GB of storage and is also incompatible with 16GB devices, **don't include --semi-tethered in the command** if you are using a 16GB device or have less than 10GB free.
    - If you're having an issue, add `--debug` to the end and use those logs to troubleshoot

Your device will then boot into a ramdisk, which will replace the Tips app and dump blobs. It will also set boot args and other variables, and either get ready for the tether or setup the fake rootfs.

1. Once back in recovery, place the device into DFU again
1. The device will boot, open the Tips app, and hit install
1. Sileo should have appeared on your homescreen
    - If not, click Tools and choose Do all
1. Add the repo `https://mineek.github.io/repo`
1. Install OpenSSH, wget, and curl
1. Make sure your device is connected to your Mac, and hit enter
1. Sileo will now disappear, and Sileo and Subsitute with icons will appear
    - This may take a bit as it has to download more packages
1. You will be asked to install PreferenceLoader from `http://apt.thebigboss.org/repofiles/cydia`, and NewTerm 2 from Chariz
1. Click enter on the Mac, then your phone will respring

Once palera1n says done, tweaks should now be functional. You can find a list of compatible tweaks at [here](https://github.com/itsnebulalol/ios15-tweaks).