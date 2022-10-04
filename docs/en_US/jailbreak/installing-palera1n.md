---
lang: en_US
title: Installing palera1n
description: Guide to installing palera1n
permalink: /installing-palera1n
pkgman: sileo
redirect_from:
  - /installing-palerain
  - /palera1n
  - /palerain
extra_contributors:
  - itsnebulalol
---

::: danger

This is a **tethered** jailbreak, which means the device must be booted using a computer every time, otherwise it won't boot at all.

However, this can be easily reverted using `irecovery -n` (and other tools that can kick the device out of recovery mode).

:::

palera1n is a work-in-progress script that automates patching tfp0 and booting a dev kernel.

::: warning

**Before proceeding**:

On A10 and A11, you **must disable your passcode**. On A10, this can be fixed in the future by implementing blackbird. On A11, we don't have a SEP exploit yet. The lockdown beta tweak works as a "workaround".

Also, you must install Tips from the App Store, as the script replaces it with the loader app called Pogo, written by Amy. 

:::


---

# Applying the jailbreak

Steps are mostly the same for macOS and Linux, but Linux will have an extra step to make sure it can connect to the device.

## macOS

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

## Linux

Before proceeding, open up a terminal and run these commands:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Then, open a second terminal, then you may proceed.

1. Clone the repo with `git clone -b tweaks --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
2. Run `sudo ./palera1n.sh --tweaks <iOS version you're on>`
    - Put your device in DFU Mode before running
    - If you're having an issue, add `--debug` to the end and use those logs to troubleshoot

Your device will then boot into a ramdisk, which will replace the Tips app and dump blobs. It will also set boot args and other variables, getting ready for the tether.

1. Once back in recovery, place the device into DFU again
2. The device will boot, open the Tips app, and hit install
3. Sileo should have appeared on your homescreen
    - If not, click Tools and choose Do all
4. Add the repo `https://mineek.github.io/repo`
5. Install OpenSSH, wget, and curl
6. Make sure your device is connected to your computer, and hit enter
7. Sileo will now disappear, and Sileo and Subsitute with icons will appear
    - This may take a bit as it has to download more packages
8. You will be asked to install PreferenceLoader from `http://apt.thebigboss.org/repofiles/cydia`, and NewTerm 2 from Chariz
9. Click enter on the computer, then your phone will respring

Once palera1n says done, have fun and enjoy tweaks! Compatible tweaks are [here](https://github.com/itsnebulalol/ios15-tweaks).

# Reverting the jailbreak

To remove the jailbreak, you **do not have to restore**.

## macOS

1. Clone the repo with `git clone -b tweaks --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
2. Run `./palera1n.sh --restore-rootfs`
    - If you're having an issue, add `--debug` to the end and use those logs to troubleshoot

If you're having trouble, you can run `binaries/Darwin/irecovery -n` to run irecovery.

Your device should boot into iOS, and you can use the phone as normal.

## Linux

Before proceeding, open up a terminal and run these commands:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Then, open a second terminal, then you may proceed.

1. Clone the repo with `git clone -b tweaks --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
2. Run `sudo ./palera1n.sh --restore-rootfs`
    - If you're having an issue, add `--debug` to the end and use those logs to troubleshoot

If you're having trouble, you can run `binaries/Linux/irecovery -n` to run irecovery.

Your device should boot into iOS, and you can use the phone as normal.
