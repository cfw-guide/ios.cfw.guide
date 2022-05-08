---
lang: en_US
title: Installing checkra1n (ChromeOS)
description: Guide to installing checkra1n on ChromeOS
permalink: /installing-checkra1n-chromeos
redirect_from:
  - /installing-checkra1n/chromeos
extra_contributors:
  - DhinakG
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

::: danger

This is a highly experimental guide page, there may be things not directly mentioned that need to be done in order to follow this. As a result, we highly recommend getting another type of computer instead if possible.

:::

::: tip

You need to have enabled developer mode on your ChromeOS device to follow this

:::

## Downloads (Linux)

- The latest release of [checkra1n](https://checkra.in)
  - If you are on an A8X or A9X device, you should instead get the 0.12.2 release of [checkra1n](https://checkra.in/releases/0.12.2-beta#all-downloads)

![A screenshot of the checkra1n application](/assets/images/checkra1n.png)

## Allowing checkra1n to run

1. Move the checkra1n binary which is downloaded to `/usr/local/bin`
    - This can be done by doing the following:
      - Ctrl + Alt + T (launch crosh)
      - run shell (to launch bash)
      - mv ~/Downloads/checkra1n /usr/local/bin/
1. Run the following command in terminal: `sudo mount -o remount,exec /tmp`
    - You'll need to do this every single time you reboot your ChromeOS device
1. Every time you need to jailbreak in ChromeOS, you need to plug in your device, and enter Recovery Mode manually.

## Installing checkra1n

1. Run the `checkra1n` binary in the terminal using `./checkra1n`
    - You may need to run `sudo chmod a+x ./checkra1n` if the binary doesn't run
    - If you're on an A11 device, you will need to head into `Options`, then enable the `Skip A11 BPR Check` option once it runs
    - If you're on iOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
    - If you're on an A8X or A9X device and are on iOS 14.4 to 14.4.2, you will need to head into `Options`, then enable the `Allow Untested Versions` option once it runs
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>, click `Start` to begin
    - Follow the instructions until your device shows a black screen
1. After this, checkra1n should automatically install

Your iOS device should now reboot.

After the device boots, open the checkra1n app and install Cydia.

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes, packages and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-sileo">Installing Sileo</router-link>

:::