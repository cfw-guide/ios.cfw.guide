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
  - zachary7829
---

::: danger

If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc.) this guide will not work, and you should follow <router-link to="/using-odysseyn1x">Using Odysseyn1x</router-link> instead.

:::

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

<!--Will probably make this better later on but this will work for now-->

::: tip

While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don't recommend it because of the fact that:

 - People generally tend to have more stability when using Odysseyra1n instead of installing Cydia
 - Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available
 - Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia

:::

To install Odysseyra1n, <u>do not</u> open the checkra1n app and install Cydia. Instead, follow the following instructions to install Sileo.

## The Odysseyra1n script

::: tip

If you would prefer to do so, instead of running the script on your computer, you can run the Odysseyra1n script using the [shortcut](https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771) by opening this page on your device and then clicking the shortcut hyperlink.

:::

1. Open the terminal app on your computer
1. Ensure that your computer is trusted by your device
1. Install "iproxy" by pasting and executing the following command:
    - Ubuntu/Debian: `sudo apt install libusbmuxd-tools`
    - Arch Linux: `pacman -S libusbmuxd`
1. Install the Odysseyra1n script by pasting and executing the following command: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

!!!include(./docs/en_US/jailbreak/unused-on-guide-path/checkra1n/include/end-of-page.md)!!!
