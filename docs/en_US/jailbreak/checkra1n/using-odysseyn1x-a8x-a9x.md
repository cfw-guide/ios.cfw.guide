---
lang: en_US
title: Using Odysseyn1x (A8X/A9X)
description: Guide to installing checkra1n via Odysseyn1x on A9X devices
permalink: /using-odysseyn1x-a8x-a9x
pkgman: sileo
redirect_from:
  - /using-odysseyn1x-a9x
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
---

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

!!!include(./docs/en_US/jailbreak/checkra1n/include/semi-tethered.md)!!!

Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device. checkra1n is capable of jailbreaking millions of iOS devices with A7 to A11 SoC's on firmwares 12.0 to 14.8.1.

!!!include(./docs/en_US/jailbreak/checkra1n/include/odysseyra1n-explanation.md)!!!

::: tip

If you are using an A8X or A9X device running iOS 14.4.2 or earlier, you should follow <router-link to="/using-odysseyn1x">Using Odysseyn1x</router-link> and use checkra1n version 0.12.2 instead.

:::

On A8X and A9X devices, it is not possible to use Odysseyn1x 2.14 (required for 14.5+ support) without the use of a custom pongoOS and checkra1n in CLI mode. It is possible to use a custom version of Odysseyn1x, however, to work around this.

## Requirements

- 256MB or greater USB Drive
- The latest version of [Odysseyn1x for A9X](https://github.com/asdfugil/checkn1x_a9x_kerninfo_pongoOS/releases/tag/14.5-a9x-2)
    - While it says "for A9X" and there are various mentions of only A9X within the program, this was before A8X devices were found to have similar issues
    - For 64-bit computers, download the "AMD64" version
    - For 32-bit computers, download the "i686" version
- [balenaEtcher](https://www.balena.io/etcher/)

![A screenshot of the Odysseyn1x menu](/assets/images/Odysseyn1x.png)

## Flashing Odysseyn1x

1. Download and install balenaEtcher
1. Click `Flash from file`
1. Select the odysseyn1x `.iso` file
1. Click `Select target`
1. Select the USB drive you would like to boot from
    - This USB drive will be completely erased
    - Ensure you back up all important data beforehand
1. Click `Flash!`
    - Do not remove your USB Drive until the process has completed
1. Once the flashing has completed, reboot your computer
1. Go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from
    - This is different for every computer
    - Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure

## Running checkra1n

1. Once you have loaded odysseyn1x, select `checkra1n (A9X)`
1. You will now be presented with instructions in how to reboot your device into <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>, click `Start` to begin
    - Follow the instructions until your device reboots to a black screen
1. Once your device boots, you can quit checkra1n, but do not shut down your computer

## The Odysseyra1n script

The following steps only need to be performed once and are optional but highly recommended for a smoother experience and modern bootstrap.

1. Unlock your device
1. Ensure that your computer is trusted by your device
1. Select `Odysseyra1n` in Odysseyn1x
1. Sileo should install to your device
1. Do not close Odysseyn1x as you will need to re-jailbreak in a few minutes

!!!include(./docs/en_US/jailbreak/checkra1n/include/no-loader.md)!!!
!!!include(./docs/en_US/jailbreak/checkra1n/include/end-of-page.md)!!!
