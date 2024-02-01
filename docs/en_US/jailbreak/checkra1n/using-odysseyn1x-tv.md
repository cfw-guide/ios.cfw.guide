---
lang: en_US
title: Using Odysseyn1x (Apple TV)
excerpt: Guide to installing checkra1n for Apple TV via Odysseyn1x
permalink: /using-odysseyn1x-tv
0pkgman: nito.tv
redirect_from:
  - /installing-odysseyn1x-tv
  - /using-odysseynix-tv
  - /odysseyn1x-tv
  - /odysseynix-tv
extra_contributors:
  - stekc
  - flowerible
  - bbaovanc
  - Tanbeer191
  - TheHacker894
  - Snoolie
  - itsnebulalol
  - WhitetailAni
---

::: danger

If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide, and will need to obtain a bootable medium and follow the below steps using that bootable medium.

:::

::: danger

This guide does not currently account for the Apple TV 4K (1st Generation) at this time.

:::

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

!!!include(./docs/en_US/jailbreak/checkra1n/include/semi-tethered.md)!!!

Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device. checkra1n is capable of jailbreaking the Apple TV HD and Apple TV 4K (1st Generation) on firmwares 12.0 to 14.7.

## Requirements

- A 256MB or greater USB Drive
    - If you don't have a USB Drive, but do have another form of supported removable bootable hardware (e.g. A CD or DVD), you can use that instead of a USB Drive
- The latest version of [Odysseyn1x](https://github.com/raspberryenvoie/odysseyn1x/releases)
    - If you are on an A7 device, you should instead get the v2.12-checkra1n-0.10.1 release of [Odysseyn1x](https://github.com/raspberryenvoie/odysseyn1x/releases/tag/v2.12-checkra1n-0.10.1)
    - For 64-bit computers, download the "AMD64" version
        - It doesn't matter if you have an AMD processor or not, "AMD64" is just the name of the architecture
    - For 32-bit computers, download the "i686" version
- An Apple TV Siri remote (any generation)
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

![A screenshot of the Odysseyn1x menu](/assets/images/Odysseyn1x.png)

## Installing Ventoy

1. Download and extract the contents of the `Ventoy.zip` file
1. Insert your USB drive if you have not already done so, and open the `Ventoy2Disk.exe` file
1. Select the USB drive you would like to boot Odysseyn1x from
    - This USB drive will be completely erased
    - Ensure you back up all important data beforehand
1. Click `Install` and confirm that you are ok erasing the USB drive
    - Do not remove your USB Drive until the process has completed
1. Once it has installed, copy the Odysseyn1x iso file that you downloaded onto the USB drive

## Booting Odysseyn1x

1. Reboot, and then go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from
    - This is different for every computer
    - Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure
1. Press enter once you see the Ventoy screen to boot into Odysseyn1x

## Running checkra1n

::: warning

If you have an Apple TV HD and are using a USB-C to USB-C to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to USB-C cable and, if necessary, also get a USB-C to USB-A adapter.

:::

1. Once you have loaded odysseyn1x, select `checkra1n`
    - If you're on tvOS 14.6 or later, you will need to head into `Options`, then enable the `Allow Untested Versions`
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>, click `Start` to begin
    - Follow the instructions until your device reboots to a black screen
1. Once your device boots, you can quit checkra1n, but do not shut down your computer

:::

You should now be jailbroken with the checkra1n loader app installed on your home screen, which allows you to install nito.tv. You can use nito.tv to install tweaks, themes and more.
