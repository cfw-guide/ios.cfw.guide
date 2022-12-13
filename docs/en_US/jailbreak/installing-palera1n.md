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
  - /installing-palera1n/linux
  - /installing-palera1n/macos
extra_contributors:
  - Mineek
---

palera1n is a work-in-progress jailbreak script that patches the kernel so you can use Sileo and install tweaks. Currently, palera1n is compatible with A11 (iPhone X) and earlier devices on iOS 15 and later, with some major caveats.

On A10(X) and A11 devices, you **must disable your passcode** and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay. 

Additionally, if you are on iOS 16 and have ever set a passcode, you will need to **erase all content and settings** in order to be able to jailbreak.

::: danger

If you are not using the semi-tethered flag, this is a **tethered** jailbreak, which means the device must be booted using a computer every time, otherwise it won't boot at all.

However, this (and the semi-tether as well) can be easily reverted by following <router-link to="/removing-palera1n">Removing palera1n</router-link>.

If you'd like it to be semi-tethered, add the `--semi-tethered` argument to the end of the jailbreak command. Keep in mind this will use 5-10GB of storage, so this won't work on 16GB devices.

:::

## Instructions

### Enabling Developer Mode

::: danger

This section **only applies if you are using iOS 16**. If you are on iOS 15, skip this section

:::

1. Open the `Settings` app
1. Tap on "Privacy and Security"
1. Scroll down to "Developer Mode" then tap it
  - You must have [sideloaded an app](https://ios.cfw.guide/sideloading-apps/) before this option will appear
1. Toggle the `Developer Mode` toggle on, then tap "Restart"
1. After your device reboots, tap "Turn On" to enable developer mode

## Installing the jailbreak

Please select your operating system:

:::::: tabs

:::: tab name="macOS" :default="true"

1. Clone the repo with `git clone --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
1. Open up a terminal window and `cd` to the directory
1. Run `./palera1n.sh --tweaks <iOS version you're on> --semi-tethered`
    - Put your device in DFU Mode before running this command
    - The semi-tethered flag uses 5-10GB of storage and is also incompatible with 16GB devices, **don't include --semi-tethered in the command** if you are using a 16GB device or have less than 10GB free.

::::

:::: tab name="Linux"

::: danger

If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide.

:::

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

1. Open up a terminal window
1. Run `sudo systemctl stop usbmuxd`
1. Run `sudo usbmuxd -f -p`
1. Open up a new terminal window
1. Clone the repo with `git clone --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`\
1. Run `sudo ./palera1n.sh --tweaks <iOS version you're on> --semi-tethered`
    - Put your device in DFU Mode before running this command
    - The semi-tethered flag uses 5-10GB of storage and is also incompatible with 16GB devices, **don't include --semi-tethered in the command** if you are using a 16GB device or have less than 10GB free.

::::

::::::

Your device will then boot into a ramdisk, which will dump blobs. It will also set boot arguments and other variables, and either tether your device or setup the fake rootfs. It will also patch the kernel for you, so you can use tweaks.

1. Once back in recovery/normal mode, place the device into DFU again
1. The device will boot, open the palera1n loader app, and hit install
1. Sileo should have appeared on your homescreen
    - If not, click Tools and choose Do all

Once palera1n says done, tweaks should now be functional. You can find a list of compatible tweaks [here](https://github.com/itsnebulalol/ios15-tweaks).

To revert the jailbreak, follow <router-link to="/removing-palera1n/">Removing palera1n</router-link>.