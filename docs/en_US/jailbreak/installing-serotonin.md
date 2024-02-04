---
lang: en_US
title: Installing Serotonin (semi-jailbreak)
description: Guide to installing Serotonin (semi-jailbreak)
permalink: /installing-serotonin
pkgman: sileo + zebra
extra_contributors:
  - Bananas
---

Serotonin is a work-in-progress, experimental **SEMI**-jailbreak that is compatible with all devices on firmware versions 16.0 to 16.6.1.

::: warning

At this time, tweaks can only inject into the SpringBoard and (most) apps. Many lower-level tweaks still do not work yet.

By default, tweak injection into apps is globally disabled. You will need to go into the Bootstrap app to enable it for the apps you want.


:::

::: tip

This guide is mainly for users who have A12+ devices, as A11 and below can jailbreak using <router-link to="/installing-meowbrek2">meowbrek2</router-link> or checkm8-based jailbreaks, like <router-link to="/installing-palera1n">palera1n</router-link>.

:::

## Installing TrollStore

The method that needs to be followed in order to install TrollStore depends on your current firmware version, select the tab that fits your current firmware version and follow the subsequent steps.

::: tip

If you already have TrollStore installed, you can skip this section.

:::

:::::: tabs

:::: tab name="TrollInstallerMDC (16.0 to 16.1.2)" :default="true"

## Requirements

- The Tips app installed to your device
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [TrollInstallerMDC](https://dhinakg.github.io/apps.html)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollInstallerMDC `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The TrollInstallerMDC application can now be opened from the home screen.

::: danger

If you don't have it enabled already, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::



## Injecting TrollStore Helper

::: warning

If you've already opened Tips, reboot your device before following these steps

:::

1. Open TrollInstallerMDC
1. Once it says "Successfully replaced Tips binary", close the `TrollInstallerMDC` app
    - If it gives an error, close TrollInstallerMDC and re-open it 

## Installing TrollStore

1. Open the `Tips` app
1. Tap `Install TrollStore`

Your device should respring or reboot, and TrollStore should now be installed.

## Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps

::::

:::: tab name="TrollStar (16.2 to 16.6.1)"

## Requirements

- The Tips app installed to your device
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows
- The latest version of [TrollStar](https://github.com/34306/TrollStar/releases/latest)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the TrollStar `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to it's servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The TrollStar application can now be opened from the home screen.

::: danger

If you don't have it enabled already, you'll also need to enable Developer Mode.

To do so, go into `Settings` -> `Privacy & Security` and then scroll down until you see `Developer Mode`, tap that option, toggle Developer Mode on, and follow the on-screen instructions

:::

## Injecting TrollStore Helper

::: warning

This method may take several tries in order to work successfully.

:::

1. Open TrollStar
1. Tap `Click here to start!`
    - If the device reboots, wait a few minutes, then try again
1. Tap `Install TrollStore Helper to Tips`
1. Tap `Respring to Apply`

Your device will respring after you tap `Respring to Apply`.

## Installing TrollStore

1. Unlock your device
1. Open the Tips app
1. Tap `Install TrollStore`

Your device should respring or reboot, and TrollStore should now be installed.

## Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps

::::

::::::

## Installing the RootHide Bootstrap

### Downloads

- The latest version of the [RootHide Bootstrap](https://github.com/roothide/bootstrap/releases/latest)
  - Make sure to download the Bootstrap .tipa file **onto your iOS device**

### Installing the bootstrap
1. Re-open the `TrollStore` app on your home screen
2. Press the `+` on the top right
3. Go to where you saved the bootstrap`.tipa` file
4. Tap on the bootstrap`.tipa` file
5. Tap Install

The bootstrap app will now be installed onto your device.

### Bootstrapping
1. Open the Bootstrap app from your home screen
2. Tap "Bootstrap"

The device will respring or reboot, and Sileo and Zebra will now be on your home screen.

## Installing Serotonin
- The latest version of [Serotonin](https://github.com/mineek/serotonin/releases/latest)
  - Make sure to download the Serotonin .tipa file **onto your iOS device**

### Installing the semi-jailbreak

1. __Install ElleKit from Sileo__
1. Re-open the `TrollStore` app on your home screen
1. Press the `+` on the top right
1. Go to where you saved the Serotonin`.tipa` file
1. Tap on the Serotonin`.tipa` file
1. Tap Install

## Running Serotonin

1. Open the Serotonin app on your home screen
2. Tap "Jelbrek"

The device should now userspace reboot.

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: warning

**Notice**: The majority of tweaks have not been updated to support RootHide. Some tweaks can be converted using the RootHide Patcher from the RootHide repo, but some may still not work.

It is also recommended to install the rootless compatibility layer from the RootHide repo as well.

:::
