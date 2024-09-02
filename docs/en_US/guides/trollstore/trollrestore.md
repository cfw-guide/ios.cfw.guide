---
lang: en_US
title: Installing TrollStore (TrollRestore)
description: Guide to installing TrollStore via TrollRestore
permalink: /installing-trollstore-trollrestore
sidebar: false
redirect_from:
extra_contributors:
  - opa334
  - JJTech
  - Dhinak
---

## Requirements

- A device running iOS/iPadOS 15.0 to 16.6.1, 16.7 RC (20H18), or 17.0
- The latest version of [python3](https://www.python.org/downloads)
- The latest version of [TrollRestore](https://github.com/JJTech0130/TrollRestore/releases) for your platform.
    - For Windows, this will be `TrollRestore.exe`
    - For Apple Silicon Macs, this will be `TrollRestore_macOS_arm64.zip`
    - For Intel-based Macs, this will be `TrollRestore_macOS_amd64.zip`
    - For Linux, this will be `TrollRestore_Linux.zip`

::: warning

Before continuing, if you're using *macOS* or *Linux*, extract the contents of the downloaded TrollRestore `.zip` file.

:::

::: warning

As this method of installing TrollStore involves restoring a modified backup, you'll need to disable Find My before continuing with this guide.

After this guide is complete, you are free to re-enable Find My.

:::

## Running TrollRestore

Please select your operating system:

:::::: tabs

:::: tab name="macOS/Windows" :default="true"

::: warning

The build of TrollRestore for *Intel-based Macs* is not notarized, which means you'll either need to Double Click while holding Control (if on macOS Sonoma or earlier) or by attempting to open it normally, and then opening `System Settings` -> `Privacy & Security` and scrolling down until you see `Open Anyway`.

Alternatively, if you're running into issues doing thist, you can follow the `Linux` tab instead, as those steps work on all platforms (but are slightly more involved than the normal steps listed in this tab).

:::

### Injecting TrollStore Helper

1. Open a File Explorer (Windows) or Finder (macOS) window.
1. Navigate to where the downloaded/extracted file is saved.
    - This will likely be the `Downloads` folder.
1. Double Click `TrollRestore`
1. When prompted, type in the name of a system app you want to overwrite, and press enter.
    - If you are unsure as to what app you want to overwrite, overwrite the Tips app by entering `Tips`

::: tip

Until the device reboots, there is no visual indication *on the device itself* that anything is being done.

:::

The TrollStore Helper should now be restored to your device, and your device will reboot once this process is complete.

::::

:::: tab name="Linux"

::: tip

While this tab (and the associated zip file) are for Linux platforms, all other platforms can follow this tab and use the Linux `.zip` file as an alternative to the normal executable files.

:::

### Installing Dependencies

1. Open a terminal application
1. Run `cd <path/to/TrollRestore>`
    - In most cases, this will likely mean running `cd ~/Downloads/TrollRestore_Linux`
1. Run `pip3 install -r requirements.txt` and follow the on screen prompts

All dependencies needed for TrollRestore should now be installed.

### Injecting TrollStore Helper

1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. *In the same terminal window as the previous section*, run `python3 trollstore.py`
1. When prompted, type in the name of a system app you want to overwrite, and press enter.
    - If you are unsure as to what app you want to overwrite, overwrite the Tips app by entering `Tips`

::: tip

Until the device reboots, there is no visual indication *on the device itself* that anything is being done.

:::

The TrollStore Helper should now be restored to your device, and your device will reboot once this process is complete.

::::

::::::

## Installing TrollStore

1. Unlock your device.
1. Open the app you originally put in.
1. Tap `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

## Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps
