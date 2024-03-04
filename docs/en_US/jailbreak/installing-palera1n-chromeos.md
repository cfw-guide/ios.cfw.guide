---
lang: en_US
title: Installing palera1n (ChromeOS)
description: Guide to installing palera1n on ChromeOS
permalink: /installing-palera1n/chromeos
redirect_from:
  - /installing-palera1n/chromeos
  - /installing-palera1n-chromeos
extra_contributors:
  - DhinakG
  - Tanbeer191
  - TheHacker894
  - zachary7829
  - stekc
  - onyxcode
---

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

:::

::: danger

This is a highly experimental guide page, there may be things not directly mentioned that need to be done in order to follow this. As a result, we highly recommend getting another type of computer instead if possible.

:::

::: tip

You need to have enabled developer mode on your ChromeOS device to follow this

:::

## Downloads (ChromeOS)

- The latest release of [palera1n](https://github.com/palera1n/palera1n/releases/latest)

## Allowing palera1n to run

1. Move the palera1n binary which is downloaded to `/usr/local/bin`
    - This can be done by doing the following:
      - press `Ctrl` + `Alt` + `T`
      - run `shell`
      - run `mv ~/Downloads/palera1n-linux-* /usr/local/bin/`
1. Run the following command in terminal: `sudo mount -o remount,exec /tmp`
    - You'll need to do this every single time you reboot your ChromeOS device
1. Every time you need to jailbreak in ChromeOS, you need to plug in your device, and enter Recovery Mode manually. You can easily find instructions on how to do this with a quick Google search.

## Running palera1n

1. Run the `palera1n` binary in the terminal using `TERM=linux sudo palera1n`
    - You may need to run `sudo chmod a+x /usr/local/bin/palera1n` if the binary doesn't run
2. After this, palera1n should automatically detect your device in Recovery Mode and ask you to press Enter.
3. Follow the instructions to put your device into <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.
4. Once your device shows the Apple logo, immediately unplug and replug your device for your Chromebook to detect the PongoOS USB device.
