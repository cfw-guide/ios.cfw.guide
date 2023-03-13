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
extra_contributors:
  - Mineek
  - nebula
---

palera1n is a work-in-progress jailbreak that patches the kernel so you can use Sileo and install tweaks. Currently, palera1n is compatible with A11 (iPhone X) and earlier devices on iOS 15 and later, with some major caveats.

On A11 devices, you **must disable your passcode** and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay. 

Additionally, if your device is an A11 device on iOS 16 and you've set a passcode before, you will need to **erase all content and settings** in order to be able to jailbreak.

::: warning

If you are using an old version of palera1n that was tethered, you'll need to <router-link to="/removing-palera1n">remove palera1n</router-link> before continuing.

:::

::: tip

If you are using Windows, proceed to <router-link to="/using-palen1x">Using palen1x</router-link>.

:::

## Downloads

The version of [palera1n](https://github.com/palera1n/palera1n/releases) for your OS.
  - macOS users should generally get `palera1n-macos-universal`
  - Linux users should get whichever version corresponds to the architecture of the computer you're using

## Installing the jailbreak

Please select your operating system:

:::::: tabs

:::: tab name="macOS" :default="true"

### Installing palera1n

1. Open a terminal window and `cd` to the directory that palera1n was downloaded to.
1. Run `sudo mkdir /usr/local/bin`
    - If you get a message saying `mkdir: /usr/local/bin: File exists`, this is safe to ignore.
1. Run `sudo mv ./palera1n-macos-universal /usr/local/bin/palera1n`
    - Replace `./palera1n-macos-universal` with whatever version you downloaded
1. Run `sudo xattr -c /usr/local/bin/palera1n`
1. Run `sudo chmod +x /usr/local/bin/palera1n`

### Running palera1n

::: warning

If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode

If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.

:::

::: tip

If you're using an Apple Silicon Mac and using a USB-C port to plug your cable/adapter into, you'll need to unplug and replug the device after `Checkmate!` appears in the logs.

:::

1. Run `palera1n <insert arguments here>`
    - 16GB devices should use `palera1n -B -f` - note that you'll need to have 2-3GB of storage space free.
    - Devices with more than 2-3GB of storage space free but with less than 10-15GB of storage space free also can use `palera1n -B -f`, but only if they're on iOS 15.
    - Devices which have iOS 16 or have more than 10-15GB of storage space free should use `palera1n -c -f`
    - Make sure your device is plugged in when entering this command

::: warning

If your device is either:
   - On iOS 15 and does not have at least 2-3GB of storage space free
   - On iOS 16 and does not have at least 10-15GB of storage space free

You won't be able to continue following this guide.

If you cannot free up enough storage to follow this, you can alternatively use the tethered option of legacy palera1n by following <router-link to="/installing-palera1n-legacy">Installing palera1n (Legacy)</router-link> instead.

:::

2. When ready, press `Enter` and follow the on screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.

Your device should begin to create the FakeFS or BindFS (depending on which command you ran).

3. Once your device is done creating the FakeFS or BindFS, run `palera1n -f`

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
1. Open up a new terminal window and `cd` to the directory that palera1n was downloaded to.
1. Run `sudo mv ./palera1n-linux-* /usr/bin/palera1n`
1. Run `sudo chmod +x /usr/bin/palera1n`

### Running palera1n

1. Run `sudo palera1n <insert arguments here>`
    - 16GB devices should use `sudo palera1n -B -f` - note that you'll need to have 2-3GB of storage space free.
    - Devices with more than 2-3GB of storage space free but with less than 10-15GB of storage space free also can use `sudo palera1n -B -f`, but only if they're on iOS 15.
    - Devices which have iOS 16 or have more than 10-15GB of storage space free should use `sudo palera1n -c -f`
    - Make sure your device is plugged in when entering this command

::: warning

If your device is either:
  - On iOS 15 and does not have at least 2-3GB of storage space free
  - On iOS 16 and does not have at least 10-15GB of storage space free

You won't be able to continue following this guide.

If you cannot free up enough storage to follow this, you can alternatively use the tethered option of legacy palera1n by following <router-link to="/installing-palera1n-legacy">Installing palera1n (Legacy)</router-link> instead.

:::

2. When ready, press `Enter` and follow the on screen instructions to enter <router-link to="/faq/#what-is-dfu-mode">DFU mode</router-link>.

Your device should begin to create the FakeFS or BindFS (depending on the command you ran).

3. Once your device is done creating the FakeFS or BindFS, run `sudo palera1n -f`

::: tip

A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:

1. In the terminal window, press `Control` + `C` on your keyboard
1. Rerun the command that you just ran

You'll need to do this every time you rejailbreak your device as well.

:::

::::

::::::

Once the device boots up, open the palera1n loader app and tap `Install`. After a bit of time, you'll be prompted to respring and `Sileo Nightly` should be on your home screen.

::: tip

To rejailbreak your device, no matter what command you ran above, simply run `palera1n -f` and then repeat any other applicable steps.

:::
