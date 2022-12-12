---
lang: en_US
title: Installing palera1n (Linux)
description: Guide to installing palera1n on Linux
permalink: /installing-palera1n/linux
extra_contributors:
  - Mineek
---

!!!include(./docs/en_US/jailbreak/palera1n/include/tethered.md)!!!

!!!include(./docs/en_US/jailbreak/palera1n/include/a10-a11-passcode.md)!!!

::: danger

If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide.

:::

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

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

::: warning

Due to issues with Linux, you'll need to do extra steps in order to proceed.

First, open up a terminal, and run these commands:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Then, open a second terminal, and do the subsequent steps with the other terminal window.

:::

1. Clone the repo with `git clone --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
1. Run `sudo ./palera1n.sh --tweaks <iOS version you're on> --semi-tethered`
    - Put your device in DFU Mode before running this command
    - The semi-tethered flag uses 5-10GB of storage and is also incompatible with 16GB devices, **don't include --semi-tethered in the command** if you are using a 16GB device or have less than 10GB free.

Your device will then boot into a ramdisk, which will dump blobs. It will also set boot argumentts and other variables, and either tether your device or setup the fake rootfs. It will also patch the kernel for you, so you can use tweaks.

1. Once back in recovery/normal mode, place the device into DFU again
1. The device will boot, open the palera1n loader app, and hit install
1. Sileo should have appeared on your homescreen
    - If not, click Tools and choose Do all

Once palera1n says done, tweaks should now be functional. You can find a list of compatible tweaks [here](https://github.com/itsnebulalol/ios15-tweaks).