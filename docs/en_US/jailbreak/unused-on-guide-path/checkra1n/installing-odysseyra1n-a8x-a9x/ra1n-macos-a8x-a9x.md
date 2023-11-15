---
lang: en_US
title: Installing Odysseyra1n (A8X/A9X) (macOS)
description: Guide to installing Odysseyra1n on macOS A8X and A9X devices
permalink: /installing-odysseyra1n-a8x-a9x/macos
redirect_from:
  - /installing-odysseyra1n-a9x/macos
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
  - zachary7829
---

## Downloads (macOS)

- The latest release of [checkra1n](https://checkra.in)
- The custom version of [pongoOS](https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip)

![A screenshot of the checkra1n application](/assets/images/checkra1n.png)

## Installing checkra1n

::: tip

If you're using an Apple Silicon Mac and are using an A9X device, you will be prompted during the process to unplug and replug the device and will need to do so.

:::

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

1. Open the `pongoOS.zip` file, navigate to `PongoConsolidated.bin`, then extract it.
    - Keep note of where you extract this
1. Open a terminal and run checkra1n in CLI mode by using `/Applications/checkra1n.app/Contents/MacOS/checkra1n -c -k [path to PongoConsolidated.bin]`
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
1. Install "homebrew" by pasting and executing the following command: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
1. Install "iproxy" by pasting and executing the following command: `brew install libusbmuxd`
1. Install the Odysseyra1n script by pasting and executing the following command: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
