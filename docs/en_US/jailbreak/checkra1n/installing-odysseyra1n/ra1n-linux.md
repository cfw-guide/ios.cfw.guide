---
lang: en_US
title: Installing Odysseyra1n (Linux)
description: Guide to installing Odysseyra1n on linux
permalink: /installing-odysseyra1n/linux
extra_contributors: stkc
---

::: warning
If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.
:::

## Downloads (Linux)

- The latest release of [checkra1n](https://checkra.in)
  - If you are on an A9X device, you should instead get the 0.12.2 release of [checkra1n](https://checkra.in/releases/0.12.2-beta#all-downloads)

![A screenshot of the checkra1n application](/assets/images/checkra1n.png)

## Installing checkra1n

1. Run the `checkra1n` binary in the terminal using `./checkra1n`
    - You may need to run `sudo chmod a+x ./checkra1n` if the binary doesn't run
    - If you're on A11, you will need to head into `Options`, then enable the `Skip A11 BPR Check` option once it runs
    - If you're on iOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
    - If you're on A9X and are on iOS 14.4 to 14.4.2, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into [DFU mode](/faq/#what-is-dfu-mode), click `Start` to begin
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
