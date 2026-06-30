---
lang: en_US
title: Installing palera1n
description: Guide to installing palera1n
permalink: /installing-palera1n
pkgman: sileo
redirect_from:
  - /installing-palerain
  - /palera1n
  - /palerain
  - /installing-palera1n/linux
  - /installing-palera1n/macos
  - /installing-palera1n/windows
  - /installing-palera1n-rootless
extra_contributors:
  - Mineek
  - nebula
---

palera1n is a jailbreak that is compatible with A11 (iPhone X) and earlier devices on iOS 15.0 and later, with some caveats for A11 and A10 devices.

On A11 devices, you **must disable your passcode** and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.

Additionally, if your device is an A11 device on iOS 16 and you've set a passcode before, you will need to **erase all content and settings** in order to be able to jailbreak.

::: warning A10 devices on iOS 16 and later

On A10 and A10X devices (iPad 7th generation, iPhone 7, iPhone 7 Plus, iPad Pro 10.5-inch, iPad Pro 12.9-inch 2nd generation), you **must also disable your passcode** before jailbreaking on iOS 16 and later, including iPadOS 18. The passcode cannot be used while the jailbreak is active.

:::

::: warning

If you are using an old version of palera1n that was tethered, you'll need to <router-link to="/removing-palera1n-legacy">remove palera1n</router-link> before continuing.

:::

::: warning

If you are using Windows, you should follow <router-link to="/using-palen1x">Using palen1x</router-link> instead.

:::

::: warning

This guide cannot be followed for Apple TVs. If you wish to use palera1n on an Apple TV, please follow <router-link to="/installing-palera1n-atv">Installing palera1n (Apple TV)</router-link>

:::

## Installing the jailbreak

Please select your operating system:

:::::: tabs

:::: tab name="macOS" :default="true"

### Installing palera1n

1. Open a terminal window
1. Run `sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`

### Running palera1n

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

::: tip

If you're using an Apple Silicon Mac and using a USB-C port to plug your cable/adapter into, you'll need to unplug and replug the device after `Checkmate!` appears in the logs.

:::

1. Run `palera1n -l`
    - Make sure your device is plugged in when entering this command
1. When ready, press `Enter` and follow the on screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.

::: tip DFU mode on iPad with Home button (iPad 7th gen, iPad 6th gen, iPad mini 5th gen, iPad Air 3rd gen)

These iPads use a different DFU button combination than iPhones without a Home button:

1. Hold the **Top (Power)** button
2. Without releasing, also hold the **Home** button
3. After 8 seconds, release the **Top** button but **keep holding Home**
4. Hold **Home** for 5 more seconds — the screen will go black (DFU mode)

:::

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard
1. Rerun the command that you just ran

You'll need to do this every time you rejailbreak your device as well.

:::

::::

:::: tab name="Linux"

::: danger

If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide.

:::

::: warning

Ubuntu-based Linux distributions are known to have issues successfully running palera1n.

If you are using a Ubuntu-based Linux distribution and do run into issues, it's recommended to either use another Linux distribution or follow <router-link to="/using-palen1x">Using palen1x</router-link> instead.

:::

::: warning

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.

:::

### Installing palera1n

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

1. Open up a terminal window
1. Run `sudo systemctl stop usbmuxd`
1. Run `sudo usbmuxd -f -p`
1. Open up another terminal window
1. Run `sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`

### Running palera1n

1. Run `sudo palera1n -l`
    - Make sure your device is plugged in when entering this command
1. When ready, press `Enter` and follow the on screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.

::: tip DFU mode on iPad with Home button (iPad 7th gen, iPad 6th gen, iPad mini 5th gen, iPad Air 3rd gen)

These iPads use a different DFU button combination than iPhones without a Home button:

1. Hold the **Top (Power)** button
2. Without releasing, also hold the **Home** button
3. After 8 seconds, release the **Top** button but **keep holding Home**
4. Hold **Home** for 5 more seconds — the screen will go black (DFU mode)

:::

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard
1. Rerun the command that you just ran

You'll need to do this every time you rejailbreak your device as well.

:::

::::

::::::

Once the device boots up, open the palera1n loader app and tap `Sileo`. After a bit of time, you'll be prompted to set a password for using command line stuff, and then afterwards, `Sileo` should be on your home screen.

::: warning SSH password is not `alpine`

palera1n 2.x asks you to set a custom Unix password during bootstrap setup. This password — **not** `alpine` — is what you'll use for SSH access. If you did not set a password during setup, open the palera1n loader app and look for the **"Set SSH Password"** option to configure it.

:::

::: warning Tweak injection is not enabled by default

The base palera1n bootstrap does **not** include a tweak injection library. To enable tweaks, install **ElleKit** from Sileo after bootstrapping. Without it, tweaks installed via Sileo will have no effect.

:::

::: tip

To rejailbreak your device, simply rerun the command you just ran and then repeat any other applicable steps.

Alternatively, if you're on versions 15.0 to 15.8.6 or 16.0 to 16.6.1, you can follow <router-link to="/installing-dopamine-trollstore">Installing Dopamine (TrollStore)</router-link> to install a semi-untethered jailbreak, which will allow you to rejailbreak your device without a computer.

:::
