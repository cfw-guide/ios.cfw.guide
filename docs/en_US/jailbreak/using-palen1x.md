---
lang: en_US
title: Using palen1x
excerpt: Guide to installing palera1n via palen1x
permalink: /using-palen1x
pkgman: sileo
redirect_from:
  - /installing-palen1x
  - /using-palenix
  - /palen1x
  - /palenix
  - /using-palen1x-rootless
extra_contributors:
  - Mineek
  - nebula
  - ssalagginkool
---

::: danger

If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide, and will need to obtain a bootable medium and follow the below steps using that bootable medium.

:::

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

palen1x is a live bootable Linux environment that allows you to quickly run palera1n on a compatible device. palera1n is capable of jailbreaking iOS devices with A8(X) to A11 SoC's on iOS 15.0 or later

On A11 devices, you **must disable your passcode** and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay. 

Additionally, if your device is an A11 device on iOS 16 and you've set a passcode before, you will need to **erase all content and settings** in order to be able to jailbreak.

::: danger

While palera1n currently supports iPadOS 17.2, App Store apps **will crash on launch** while in a jailbroken state.

You are highly encouraged to remain on iPadOS 17.1.2 and earlier or restore to iPadOS 17.1.2 if you have already updated until a palera1n update is released.

:::

## Requirements

- A 128MB or greater USB Drive
    - If you don't have a USB Drive, but do have another form of supported removable bootable hardware (e.g. A CD or DVD), you can use that instead of a USB Drive
- The latest version of [palen1x](https://github.com/palera1n/palen1x/releases)
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

## Installing Ventoy

1. Download and extract the contents of the `Ventoy.zip` file
1. Insert your USB drive if you have not already done so, and open the `Ventoy2Disk.exe` file
1. Select the USB drive you would like to boot palen1x from
    - This USB drive will be completely erased
    - Ensure you back up all important data beforehand
1. Click `Install` and confirm that you are ok erasing the USB drive
    - Do not remove your USB Drive until the process has completed
1. Once it has installed, copy the palen1x iso file that you downloaded onto the USB drive

## Booting palen1x

1. Reboot, and then go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from
    - This is different for every computer
    - Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure
1. Press enter once you see the Ventoy screen to boot into palen1x

## Running palera1n

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

1. Once you have loaded palen1x, select `palera1n`
1. Select `Switch`, then select `Rootless`
1. Press `Enter` to save the options you just selected, then select `Start`
    - Make sure your device is plugged in when you do this.
1. Follow the on screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard
1. Type `exit`
1. Rerun the steps in palen1x that you just did

:::

Once the device boots up, open the palera1n loader app and tap `Sileo`. After a bit of time, you'll be prompted to set a passcode for using command line stuff, and then afterwards,`Sileo` should be on your home screen.

::: tip

To rejailbreak your device, simply rerun the command you just ran and then repeat any other applicable steps.

Alternatively, if you are using an A9(X) to A11 device on 15.0 to 15.7.6, you can use <router-link to="/installing-meowbrek2">meowbrek2</router-link> to rejailbreak as well.

:::
