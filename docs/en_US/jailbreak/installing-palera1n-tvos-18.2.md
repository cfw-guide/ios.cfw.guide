---
lang: en_US
title: Installing palera1n (tvOS, 18.2+)
description: Guide to installing palera1n on tvOS 18.2-26.0.1
permalink: /installing-palera1n-tvos-18.2
pkgman: purePKG
redirect_from:
  - /installing-palera1n-tvos18
  - /installing-palera1n-tvos-18
  - /installing-palen1x-tvos-18
  - /using-palen1x-tvos-18
  - /install-palera1n-tvos-18
  - /palera1n-tvos-18
  - /installing-paleraintv-18
  - /palera1n-tvos18
  - /installing-palera1n-apple-tv-18
extra_contributors:
  - Bradley
  - Zenzeq
---

palera1n is a semi-tethered jailbreak compatible with the Apple TV HD (4th generation) and Apple TV 4K (1st generation) on tvOS versions 15.0 - 26.0.1.


::: warning

If you are using an old, tethered version of palera1n, you'll need to <router-link to="/removing-palera1n-legacy">remove palera1n</router-link> before continuing.

:::


::: danger

You cannot use rootless for this guide and must jailbreak using rootful. If you installed rootless, please follow <router-link to="/removing-palera1n-tvos">Removing palera1n (tvOS)</router-link>.

:::

## Requirements

- An Apple TV Siri remote (any generation)
- If you have an Apple TV HD, you will need only a USB-C cable.
- If you have an Apple TV 4K, you will also need these three cables:
  - A GoldenEye or Foxlink X892 cable
  - An Alex DCSD cable (needed to enter DFU mode; using a Lightning cable with the GoldenEye cable on its own won't work)
  - A standard Lightning cable
  - It is recommended to purchase these from AliExpress for the best prices. Note that they typically take about a month to arrive.

## Installing the jailbreak

Please select your operating system:

:::::: tabs

:::: tab name="macOS" :default="true"

### Installing palera1n

1. Open a Terminal window.
1. Run `sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`

### Running palera1n

::: details Apple TV 4K instructions

1. Plug your GoldenEye/Foxlink cable into the Ethernet port on your Apple TV.
1. Plug your DCSD cable into the Lightning connector on the GoldenEye/Foxlink cable upside down-the side labeled "this side up" or similar should face down; otherwise, it might not enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.
1. Finally, plug the USB end of your DCSD cable into your computer or any power source.
1. Restart your Apple TV with both cables plugged in to put it into DFU mode.
1. Once in DFU mode, unplug your DCSD cable (**not** your GoldenEye/Foxlink cable, keep that plugged in) and plug in your Lightning cable, with the other end connected to your computer.
1. Run `palera1n -cf`.
1. After you have created the fakeFS by running the command above, redo steps 1-5 to go back into DFU mode, then come back to the next step.
1. Run `palera1n -f`.

You'll need to do this every time you rejailbreak your device.

:::

::: details Apple TV HD instructions

1. Plug your USB-C cable into the USB-C diagnostic port on the back of the device and the other end into your computer.
1. Run `palera1n -cf`.
1. When ready, press `Enter` and follow the on-screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.
1. Once your device is done creating the fakeFS, run `palera1n -f`.

You'll need to do this every time you rejailbreak your device.

:::

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard.
1. Rerun the command that you just ran.

:::

Once the device boots up, open the palera1n loader app and tap `Install`. After some time, you'll be prompted to set a passcode for using command-line tools, and then `purePKG` should be on your home screen.

::: tip

To rejailbreak your device, simply run the last command again and then repeat any other applicable steps.

:::

::::

:::: tab name="Linux"


::: danger

If you are trying to use Virtual Machine software from Windows (e.g., VirtualBox, VMWare, Windows Subsystem for Linux, etc.), you will not succeed with this guide.

:::

::: warning

Ubuntu-based Linux distributions are known to have issues successfully running palera1n.

If you are using an Ubuntu-based Linux distribution and run into issues, it's recommended to either use another Linux distribution or <label for="tab-palen1x-(windows)" style="cursor:pointer; color:var(--c-brand); font-weight:500">use palen1x</label> instead.
<!-- weird thing to switch tabs on the same page. if you have a better idea please make a pr -->

:::

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

### Installing palera1n

1. Open a terminal window.
1. Run `sudo systemctl stop usbmuxd`.
1. Run `sudo usbmuxd -f -p`.
1. Open another terminal window.
1. Run `sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`.


### Running palera1n

::: details Apple TV 4K instructions

1. Plug your GoldenEye/Foxlink cable into the Ethernet port on your Apple TV.
1. Plug your DCSD cable into the Lightning connector on the GoldenEye/Foxlink cable upside down-the side labeled "this side up" or similar should face down; otherwise, it might not enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.
1. Finally, plug the USB end of your DCSD cable into your computer or any power source.
1. Restart your Apple TV with both cables plugged in to put it into DFU mode.
1. Once in DFU mode, unplug your DCSD cable (**not** your GoldenEye/Foxlink cable, keep that plugged in) and plug in your Lightning cable, with the other end connected to your computer.
1. Run `palera1n -cf`.
1. After you have created the fakeFS by running the command above, redo steps 1-5 to go back into DFU mode, then come back to the next step.
1. Run `palera1n -f`.

You'll need to do this every time you rejailbreak your device.

:::

::: details Apple TV HD instructions
1. Plug your USB-C cable into the USB-C diagnostic port on the back of the device and the other end into your computer.
1. Run `palera1n -cf`.
1. When ready, press `Enter` and follow the on-screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.
1. Once your device is done creating the fakeFS, run `palera1n -f`.

You'll need to do this every time you rejailbreak your device.

:::

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard.
1. Rerun the command that you just ran.

:::

Once the device boots up, open the palera1n loader app and tap `Install`. After some time, you'll be prompted to set a passcode for using command-line tools, and then `purePKG` should be on your home screen.

::: tip

To rejailbreak your device, simply run the last command again and then repeat any other applicable steps.

:::

::::

:::: tab name="palen1x (Windows)"

::: danger

If you are trying to use Virtual Machine software from Windows (e.g., VirtualBox, VMWare, Windows Subsystem for Linux, etc.), you will not succeed with this guide. You will need to obtain a bootable medium and follow the steps below using that bootable medium.

:::

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

palen1x is a live bootable Linux environment that allows you to quickly run palera1n on a compatible device. palera1n is capable of jailbreaking the Apple TV HD (4th generation) and Apple TV 4K (1st generation) on tvOS versions 15.0 - 26.0.1.

### Additional Requirements

- *These are in addition to the ones at the top of this guide*
- A 128MB or greater USB Drive
    - If you don't have a USB drive but have another form of supported removable bootable hardware (e.g., an SD card or DVD), you can use that instead.
- The latest version of [palen1x](https://github.com/palera1n/palen1x/releases)
- [Ventoy](https://github.com/ventoy/Ventoy/releases)


### Installing Ventoy

1. Download and extract the contents of the `Ventoy.zip` file.
1. Insert your USB drive if you have not already done so, and open the `Ventoy2Disk.exe` file.
1. Select the USB drive you would like to boot palen1x from.
    - This USB drive will be completely erased.
    - Ensure you back up all important data beforehand.
1. Click `Install` and confirm that you are okay with erasing the USB drive.
    - Do not remove your USB drive until the process has completed.
1. Once it has installed, copy the palen1x `.iso` file that you downloaded onto the USB drive.

### Booting palen1x

1. Reboot your computer, go into your BIOS settings to disable Secure Boot, then enter the boot picker and select your USB drive to boot from.
    - This process is different for every computer.
    - Search for your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure.
1. Press `Enter` once you see the Ventoy screen to boot into palen1x.

### Running palera1n

::: details Apple TV 4K instructions

1. Once you have loaded palen1x, select `Shell`.
1. Plug your GoldenEye/Foxlink cable into the Ethernet port on your Apple TV.
1. Plug your DCSD cable into the Lightning connector on the GoldenEye/Foxlink cable upside down-the side labeled "this side up" or similar should face down; otherwise, it might not enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.
1. Finally, plug the USB end of your DCSD cable into your computer or any power source.
1. Restart your Apple TV with both cables plugged in to put it into DFU mode.
1. Once in DFU mode, unplug your DCSD cable (**not** your GoldenEye/Foxlink cable, keep that plugged in) and plug in your Lightning cable, with the other end connected to your computer.
1. Run `palera1n -cf`.
1. After you have created the fakeFS by running the command above, redo steps 2-5 to go back into DFU mode, then come back to the next step.
1. Run `palera1n -f`.

You'll need to do this every time you rejailbreak your device.

:::

::: details Apple TV HD instructions

1. Once you have loaded palen1x, select `Shell`.
1. Plug your USB-C cable into the USB-C diagnostic port on the back of the device and the other end into your computer.
1. Run `palera1n -cf`.
1. When ready, press `Enter` and follow the on-screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.
1. Once your device is done creating the fakeFS, run `palera1n -f`.

You'll need to do this every time you rejailbreak your device.

:::

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard.
1. Rerun the command that you just ran.

:::

Once the device boots up, open the palera1n loader app and tap `Install`. After some time, you'll be prompted to set a passcode for using command-line tools, and then `purePKG` should be on your home screen.

::: tip

To rejailbreak your device, simply run the last command again and then repeat any other applicable steps.

:::

::::

::::::