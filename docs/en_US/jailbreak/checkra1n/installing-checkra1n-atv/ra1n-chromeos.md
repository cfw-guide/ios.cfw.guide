---
lang: en_US
title: Installing checkra1n for Apple TV (ChromeOS)
description: Guide to installing checkra1n for Apple TV on ChromeOS
permalink: /installing-checkra1n-tv/chromeos
extra_contributors:
  - DhinakG
  - Tanbeer191
  - TheHacker894
  - zachary7829
  - stekc
---

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

::: warning

If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.

:::

::: danger

This is a highly experimental guide page, there may be things not directly mentioned that need to be done in order to follow this. As a result, we highly recommend getting another type of computer instead if possible.

:::

::: tip

You need to have enabled developer mode on your ChromeOS device to follow this.

:::

## Requirements (ChromeOS)

- The latest release of [checkra1n](https://checkra.in)
- An Apple TV Siri remote (any generation)
- If you have an Apple TV 4K, you will also need two cables:
  - A GoldenEye or Foxlink X892 cable
  - An Alex DCSD cable
It is recommended to purchase these from AliExpress for the best prices. Note that they typically take about a month to arrive.

![A screenshot of the checkra1n application](/assets/images/checkra1n.png)

## Allowing checkra1n to run

1. Move the checkra1n binary which is downloaded to `/usr/local/bin`
    - This can be done by doing the following:
      - Press `Ctrl` + `Alt` + `T`
      - Run `shell`
      - Run `mv ~/Downloads/checkra1n /usr/local/bin/`
1. Run the following command in terminal: `sudo mount -o remount,exec /tmp`
    - You'll need to do this every single time you reboot your ChromeOS device
1. Every time you need to jailbreak in ChromeOS, you need to plug in your device, and enter Recovery Mode manually.

## Installing checkra1n

1. Run the `checkra1n` binary in the terminal using `TERM=linux sudo checkra1n`
    - You may need to run `sudo chmod a+x /usr/local/bin/checkra1n` if the binary doesn't run
    - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>, click `Start` to begin
    - Follow the instructions until your device shows a black screen
1. After this, checkra1n should automatically install

Your Apple TV device should now reboot.

You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.
