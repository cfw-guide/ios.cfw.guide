---
lang: en_US
title: Installing palera1n (turdus merula)
description: Guide to installing palera1n on devices tether downgraded with turdus merula
permalink: /installing-palera1n-turdusmerula
pkgman: sileo
extra_contributors:
  - Mineek
  - nebula
---

palera1n is a jailbreak that is compatible with A11 (iPhone X) and earlier devices on iOS 15.0 and later.

turdus merula is a tool which utilizes a bootrom exploit and a SEP exploit to allow A9(X) and A10(X) devices to restore to older versions of iOS/iPadOS, including those that are not compatible with the latest signed SEP firmware.

Devices that have been tether downgraded with turdus merula cannot run palera1n through the normal steps, and require additional steps through turdus merula in order to be able to run palera1n, which this guide will guide you through.

::: danger

Both palera1n and turdus merula require macOS or Linux.

While it is technically possible to live boot Linux for Windows users, due to tether downgrades requiring a computer to boot the device at all, this ends up being substantially more inconvenient than normal and is generally only advisable in circumstances where a jailbreak is absolutely needed.

:::

::: danger

If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide.

:::

::: warning

The pongoOS (alternative bootloader) that turdus merula loads when jailbreaking as part of this method is not the official pongoOS that is shipped with palera1n. If you are not comfortable with this, you should not continue with this guide.

:::

## Tether downgrading with turdus merula

::: tip

If you already have tether downgraded to 15.0 or later, you can ignore this section.

:::

To begin, you'll need to first tether downgrade to your target version by following <router-link to="/turdusmerula-tethered">Using turdus merula (Tethered)</router-link>.

Once that guide has been completed in its entirety (*and you have tether booted your device at least once*), return to this page and continue with this guide.

## Installing the jailbreak

1. Open a new terminal window
1. Run `sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`

## Linux Preparation

::: warning

These steps should only be followed if you are using Linux, and should be ignored if you are using macOS.

:::

1. Open a terminal window
1. Run `sudo systemctl stop usbmuxd`
1. Run `sudo usbmuxd -f -p`

## Preparing to jailbreak with turdus merula

The following steps will slightly vary depending on if the device you are restoring is an A9(X) or A10(X) device.

::::: tabs id="preparing"

:::: tab name="A10(X) devices" :default="true"

1. Enter Recovery Mode on your device
1. Run `./bin/turdusra1n -t [iBoot.img4] -i [signed-SEP.img4] -p [target-SEP.im4p] -x`
    - **Linux Only**: include `sudo ` in front of the command
    - It is recommended to open a Finder or File Explorer window and drag the files from the `image4` folder into the terminal window itself when running this command
    - Follow the on-screen instructions to enter DFU mode when prompted

Your device should now boot into pongoOS. Once new text stops appearing on your device, continue to the next section.

::::

:::: tab name="A9(X) devices"

1. Enter Recovery Mode on your device
1. Run `./bin/turdusra1n -TP [pteblock] -x`
    - **Linux Only**: include `sudo ` in front of the command
    - Replace `[pteblock]` with the file path of the pteblock you utilized in the previous section
    - Follow the on-screen instructions to enter DFU mode when prompted

Your device should now boot into pongoOS. Once new text stops appearing on your device, continue to the next section.

::::

:::::

## Running palera1n

Please select your operating system:

::::: tabs id="running-palera1n"

:::: tab name="macOS" :default="true"

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

::: tip

If you're using an Apple Silicon Mac and using a USB-C port to plug your cable/adapter into, you'll need to unplug and replug the device after `Checkmate!` appears in the logs.

:::

1. Open another terminal window
1. Run `palera1n -l`
    - Make sure your device is plugged in when entering this command

::::

:::: tab name="Linux"

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

1. Open another terminal window
1. Run `sudo palera1n -l`
    - Make sure your device is plugged in when entering this command

::::

::::::

Once the device boots up, open the palera1n loader app and tap `Sileo`. After a bit of time, you'll be prompted to set a passcode for using command line stuff, and then afterwards,`Sileo` should be on your home screen.
