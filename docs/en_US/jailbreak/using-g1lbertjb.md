lang: en_US
title: Using g1lbertJB
description: Guide to using g1lbertJB 
permalink: /installing-g1lbertJB
redirect_from:
  - /g1lbertJB
  - /gJB
pkgman: cydia
---

g1lbertJB is an [untethered jailbreak](/types-of-jailbreak/#untethered-jailbreaks), meaning it only requires the exploit to be run once, whether through a website, an app, or a computer.

The tool is compatible with jailbreaking all devices on iOS versions 5.0 to 6.1.2.

::: warning
The only downside to an untethered jailbreak is that if something goes wrong, it could result in a bootloop, requiring you to restore your device via iTunes or Finder (macOS Catalina or newer). The likelihood of this happening is *low*, but it is indeed possible.
:::

::::: tabs

:::: tab name="macOS" :default="true"

### Using g1lbertJB

1. Download [g1lbertJB](https://github.com/g1lbertJB/g1lbertJB/releases/).
2. Plug in your iOS device.
 	- Make sure your computer is trusted and allowed to view the contents of your device.
3. Open Terminal.app from your Applications folder.
4. Run `cd <where you downloaded g1lbertJB to>`.
5. Drag `gilbertjb_macos` from the g1lbertJB folder you downloaded earlier into the Terminal window and press Enter. This will start the jailbreaking process.

::: warning
If you receive the message "Error Code 1" and/or "Error Code 102" during the jailbreak, this is normal and can be ignored.
:::

::::

:::: tab name="Linux"

### Using g1lbertJB

1. Download [g1lbertJB](https://github.com/g1lbertJB/g1lbertJB/releases/).
2. Plug in your iOS device.
 	- Make sure your computer is trusted and allowed to view the contents of your device.
3. Open your default terminal application.
4. Run `systemctl status usbmuxd`.
    - If it responds with information about usbmuxd, usbmuxd is installed.
    - If it responds with `Unit usbmuxd.service could not be found`, please install usbmuxd following the [installation guide](https://github.com/libimobiledevice/usbmuxd#installation--getting-started) and then come back.
5. Run `sudo systemctl stop usbmuxd; sudo usbmuxd -pf`.
6. Run `cd <where you downloaded g1lbertJB to>`.
7. Depending on your architecture, drag `gilbertjb_linux_<architecture>` from the g1lbertJB folder you downloaded earlier into the Terminal window and press Enter. This will start the jailbreaking process.

::: warning
If you receive the message "Error Code 1" and/or "Error Code 102" during the jailbreak, this is normal and can be ignored.
:::

::::

