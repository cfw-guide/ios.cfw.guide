---
lang: en_US
title: Installing Odysseyra1n (A8X/A9X) (Linux)
description: Guide to installing Odysseyra1n on Linux on A8X and A9X devices
permalink: /installing-odysseyra1n-a8x-a9x/linux
redirect_from:
  - /installing-odysseyra1n-a9x/linux
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
---

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

## Downloads (Linux)

- The latest release of [checkra1n](https://checkra.in)
- The custom version of [pongoOS](https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip)

![A screenshot of the checkra1n application](/assets/images/checkra1n.png)

## Installing checkra1n

1. Open the `pongoOS.zip` file, navigate to `PongoConsolidated.bin`, then extract it.
    - Keep note of where you extract this
1. Run the `checkra1n` binary in CLI mode using this custom pongoOS in the terminal using `sudo checkra1n -c -k [path to PongoConsolidated.bin]`
1. Plug your iOS device into your computer
1. You will now be presented with instructions in how to reboot your device into <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>, click `Start` to begin
    - Follow the instructions until your device shows a black screen
1. After this, checkra1n should automatically install

Your iOS device should now reboot.

To install Odysseyra1n, <u>do not</u> open the checkra1n app and install Cydia. Instead, follow the following instructions to install Sileo.

## The Odysseyra1n script

1. Open the terminal app on your computer
1. Ensure that your computer is trusted by your device
1. Install "iproxy" by pasting and executing the following command:
    - Ubuntu/Debian: `sudo apt install libusbmuxd-tools`
    - Arch Linux: `pacman -S libusbmuxd`
1. Install the Odysseyra1n script by pasting and executing the following command: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
