---
lang: en_US
title: Installing palera1n (macOS)
description: Guide to installing palera1n on macOS
permalink: /installing-palera1n/macos
extra_contributors:
  - itsnebulalol
---

# Applying the jailbreak

On macOS, there shouldn't be any connection issues, as libimobiledevice uses the native Apple usbmuxd.

1. Clone the repo with `git clone -b tweaks --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
2. Run `./palera1n.sh --tweaks <iOS version you're on>`
    - Put your device in DFU Mode before running
    - If you're having an issue, add `--debug` to the end and use those logs to troubleshoot

Your device will then boot into a ramdisk, which will replace the Tips app and dump blobs. It will also set boot args and other variables, getting ready for the tether.

1. Once back in recovery, place the device into DFU again
2. The device will boot, open the Tips app, and hit install
3. Sileo should have appeared on your homescreen
    - If not, click Tools and choose Do all
4. Add the repo `https://mineek.github.io/repo`
5. Install OpenSSH, wget, and curl
6. Make sure your device is connected to your Mac, and hit enter
7. Sileo will now disappear, and Sileo and Subsitute with icons will appear
    - This may take a bit as it has to download more packages
8. You will be asked to install PreferenceLoader from `http://apt.thebigboss.org/repofiles/cydia`, and NewTerm 2 from Chariz
9. Click enter on the Mac, then your phone will respring

Once palera1n says done, have fun and enjoy tweaks! Compatible tweaks are [here](https://github.com/itsnebulalol/ios15-tweaks).

# Reverting the jailbreak

To remove the jailbreak, you **do not have to restore**.

1. Clone the repo with `git clone -b tweaks --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
2. Run `./palera1n.sh --restore-rootfs`
    - If you're having an issue, add `--debug` to the end and use those logs to troubleshoot

If you're having trouble, you can run `binaries/Darwin/irecovery -n` to run irecovery.

Your device should boot into iOS, and you can use the phone as normal.
