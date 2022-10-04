---
lang: en_US
title: Installing palera1n (Linux)
description: Guide to installing palera1n on Linux
permalink: /installing-palera1n/linux
extra_contributors:
  - itsnebulalol
---

!!!include(./docs/en_US/jailbreak/palera1n/include/tethered.md)!!!

!!!include(./docs/en_US/jailbreak/palera1n/include/a10-a11-passcode.md)!!!

!!!include(./docs/en_US/jailbreak/palera1n/include/tips-install.md)!!!

## Installing the jailbreak

::: warning

Due to issues with Linux, you'll need to do extra steps in order to proceed.

First, open up a terminal, and run these commands:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Then, open a second terminal, and do the subsequent steps with the other terminal window.

:::

1. Clone the repo with `git clone -b tweaks --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
1. Run `sudo ./palera1n.sh --tweaks <iOS version you're on>`
    - Put your device in DFU Mode before running
    - If you're having an issue, add `--debug` to the end and use those logs to troubleshoot

Your device will then boot into a ramdisk, which will replace the Tips app and dump blobs. It will also set boot args and other variables, getting ready for the tether.

1. Once back in recovery, place the device into DFU again
1. The device will boot, open the Tips app, and hit install
1. Sileo should have appeared on your homescreen
    - If not, click Tools and choose Do all
1. Add the repo `https://mineek.github.io/repo`
1. Install OpenSSH, wget, and curl
1. Make sure your device is connected to your computer, and hit enter
1. Sileo will now disappear, and Sileo and Subsitute with icons will appear
    - This may take a bit as it has to download more packages
1. You will be asked to install PreferenceLoader from `http://apt.thebigboss.org/repofiles/cydia`, and NewTerm 2 from Chariz
1. Click enter on the computer, then your phone will respring

Once palera1n says done, tweaks should now be functional. You can find a list of compatible tweaks at [here](https://github.com/itsnebulalol/ios15-tweaks).