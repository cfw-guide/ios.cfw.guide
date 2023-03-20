---
lang: en_US
title: Installing Meridian
description: Guide to installing Meridian via Sideloading
permalink: /installing-meridian-(ipa)
redirect_from:
  - /installing-meridian-ipa
pkgman: cydia
extra_contributors:
  - TheHacker894
---

::: warning

This guide is mainly designed to be a fallback should you, for any reason, run into issues doing <router-link to="/using-tns">TotallyNotSpyware</router-link>. In most cases, TotallyNotSpyware is generally easier and better than manually installing Meridian.

:::

Meridian is capable of jailbreaking every A7 to A10(X) device on firmware versions 10.0 to 10.3.3.

Note that the Meridian jailbreak is <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">not “persistent”</router-link> (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the Meridian jailbreak application to your device every 7 days from your computer.

We will use the Sideloadly tool to install the Meridian jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [Meridian](https://github.com/PsychoTea/MeridianJB/releases/download/v0.9-007/Meridian-v0.9-007.ipa)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win32) if on Windows

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Meridian `.ipa` file into Sideloadly
1. Enter in your Apple ID
1. Enter in your password
    - Sideloadly must make a request to its servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Meridian application can now be opened from home screen.

## Running Meridian

1. Open the Meridian application from your home screen
1. Tap "Jailbreak"

::: warning

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you wish to use a more modern package manager, continue to <router-link to="/installing-zebra">Installing Zebra</router-link>

:::
