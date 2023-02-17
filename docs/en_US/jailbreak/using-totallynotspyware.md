---
lang: en_US
title: Using TotallyNotSpyware
description: Guide to using TotallyNotSpyware
permalink: /using-tns
redirect_from:
  - /using-totallynotspyware
  - /installing-tns
  - /installing-totallynotspyware
  - /totallynotspyware
  - /tns
  - /installing-doubleh3lix
  - /installing-doublehelix
  - /doubleh3lix
  - /doublehelix
  - /dh
  - /using-meridian
  - /installing-meridian
  - /meridian
  - /md
pkgman: cydia
extra_contributors:
  - TheHacker894
  - WhitetailAni
---

TotallyNotSpyware is capable of jailbreaking every 64-bit iOS device on firmware version 10.0 up to 10.3.3.

Note that the TotallyNotSpyware jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

::: warning

Should you run into issues with this method for any reason, you can attempt to use <router-link to="/installing-doubleh3lix-(ipa)">doubleh3lix</router-link> if you are on an A7-A9(X) device or <router-link to="/installing-meridian-(ipa)">Meridian</router-link> if you are on an A10(X) device. 

::: warning

If you have an A10 or A10X device, you will need a macOS or Linux computer so f. Otherwise Cydia will not function.

:::

## Running TotallyNotSpyware (A7-A9X)

1. Open Safari on your iOS device
1. Go to the [https://totally-not.spyware.lol/](https://totally-not.spyware.lol/) website
1. Slide, left to right, on the `Slide for Spyware` slider
1. Once you see the `Spyware announcement` prompt, press `noot noot`
   - If the device reboots without prompting this, try again.
1. You'll receive a prompt asking you to choose between jailbreaking with Meridian or jailbreaking with doubleH3lix; select doubleh3lix.
1. After selecting what you wish to jailbreak with, press `OK`

TotallyNotSpyware will now install the temporary jailbreak on your device. 

To rejailbreak in the future, doing steps 1 through 4 should rejailbreak your device.

## Running TotallyNotSpyware (A10/X)

1. Open Safari on your iOS device
1. Go to the [https://mineek.github.io/totallynotspyware/](https://mineek.github.io/totallynotspyware/) website
1. Slide, left to right, on the `Slide for Spyware` slider
1. Once you see the `Spyware announcement` prompt, press `noot noot`
   - If the device reboots without prompting this, try again.
1. The device will display a popup that it is downloading the bootstrap, press `give me teh pr0n`. This will only happen on the first jailbreak run.
1. After selecting what you wish to jailbreak with, press `OK`
1. Once the device resprings, **do not open Cydia.** Get a Lightning cable and connect your device to your computer.
1. Ensure `iproxy` is installed, then run the command `iproxy 2222 22` in a Terminal window.
1. Open another Terminal window and run the command `ssh root@localhost -p2222`. The password is `alpine`.
1. Once you are connected with ssh, run the following three commands:
`wget https://web.archive.org/web/*/https://repo.midnight.team/debs/cydia.deb`
`dpkg -i cydia.deb`
`killall SpringBoard`
After you run the third command, the device will respring.

::: tip

Tap `Share` -> `Add to home screen` for easier access to TotallyNotSpyware.

:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

:::
