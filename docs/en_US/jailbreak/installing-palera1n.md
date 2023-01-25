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
  - nebula
---

palera1n is a work-in-progress jailbreak script that patches the kernel so you can use Sileo and install tweaks. Currently, palera1n is compatible with A11 (iPhone X) and earlier devices on iOS 15 and later, with some major caveats.

On A10(X) and A11 devices, you **must disable your passcode** and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay. 

Additionally, if you are on iOS 16 and have ever set a passcode, you will need to **erase all content and settings** in order to be able to jailbreak.

::: warning

If you have any device on iOS 16.2 or later, it's recommended to <router-link to="/restoring-to-15-6">restore to 15.6 RC</router-link> before following this guide, due to issues with the App Store in a jailbroken state on 16.2 and later

Additionally, if you have an A10(X) or A11 device on iOS 16, it's also recommended to <router-link to="/restoring-to-15-6">restore to 15.6 RC</router-link> due to the aforementioned extra SEP limitations that exist with iOS 16.

:::

::: danger

If you are not using the semi-tethered flag, this is a **tethered** jailbreak, which means the device must be booted using a computer every time, otherwise it won't boot at all.

However, this (and the semi-tether as well) can be easily reverted by following <router-link to="/removing-palera1n">Removing palera1n</router-link>.

If you'd like it to be semi-tethered, add the `--semi-tethered` argument to the end of the jailbreak command. Keep in mind this will use 5-10GB of storage, so this won't work on 16GB devices.

:::

## Installing the jailbreak

Please select your operating system:

:::::: tabs

:::: tab name="macOS" :default="true"

1. Clone the repo with `git clone --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
1. Open up a terminal window and `cd` to the directory
2. Run `./palera1n.sh --tweaks <iOS version you're on> --semi-tethered`
    - Make sure your device is turned on and connected via a USB-A cable.
    - The semi-tethered flag uses 5-10GB of storage and is also incompatible with 16GB devices, **don't include --semi-tethered in the command** if you are using a 16GB device or have less than 10GB free.
    - Example: `./palera1n.sh --tweaks 15.6.1 --semi-tethered`

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
    - If you've already cloned the repo, just run `cd palera1n`
1. Run `sudo ./palera1n.sh --tweaks <iOS version you're on> --semi-tethered`
    - Make sure your device is turned on and connected via a USB-A cable.
    - The semi-tethered flag uses 5-10GB of storage and is also incompatible with 16GB devices, **don't include --semi-tethered in the command** if you are using a 16GB device or have less than 10GB free.
    - Example: `sudo ./palera1n.sh --tweaks 15.6.1 --semi-tethered`

::::

::::::

Your device will then boot into a ramdisk, which will dump blobs. It will also set boot arguments and other variables, and either tether your device or setup the fake rootfs. It will also patch the kernel for you, so you can use tweaks.

1. Once back in recovery/normal mode, place the device into DFU again
1. The device will boot, open the palera1n loader app, and hit install
1. Sileo should have appeared on your homescreen

To revert the jailbreak, follow <router-link to="/removing-palera1n/">Removing palera1n</router-link>.
