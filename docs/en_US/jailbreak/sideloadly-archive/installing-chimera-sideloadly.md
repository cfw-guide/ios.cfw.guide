---
lang: en_US
title: Installing Chimera (Sideloadly)
description: Guide to installing Chimera
permalink: /installing-chimera-sideloadly
pkgman: sileo
extra_contributors:
  - TheHacker894
  - Mineek
  - Alriceee
---

Chimera is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app or website to re-apply the exploit after a reboot.

Chimera is capable of jailbreaking all devices on iOS 12.0 to 12.1.2 and A7 to A11 devices on iOS 12.0 to 12.5.7.

Due to how semi-untethered jailbreaks work, if you are using an A11 or newer device, the app will need to be <router-link to="/resigning-apps">re-signed</router-link> once every 7 days.

We will use Sideloadly to install the Chimera jailbreak application to your iOS device for use in the next step.

::: warning

If you have a newer device with an A12 SoC, such as the iPhone XS, you can only use Chimera on iOS 12.0 - 12.1.2. If you are on iOS 12.1.3 to 12.4.1, you will need to follow <router-link to="/installing-unc0ver">Installing unc0ver</router-link> instead.

:::

::: warning

If you are already jailbroken with another jailbreak (besides Odysseyra1n), make sure to properly <router-link to="/restoring-rootfs">remove it</router-link> before proceeding.

:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Chimera is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest release of [Chimera](https://chimera.coolstar.org/)
    - A7 or A8(X) devices running either 12.3.x or 12.4.1 to 12.5.7 are recommended to use [Chimera patched with chimera_patch](https://jailbreaks.app/cdn/ipas/ChimeraPatch-resigned.ipa) for improved success rates. 
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

::: danger

The patched version of Chimera recommended above is an *unofficial build* of Chimera patched with staturnz's [chimera_patch](https://github.com/staturnzz/chimera_patch) to improve success rate on older devices.

The unofficial build is **completely unnecessary** on newer (A9 and later) devices. Additionally, if you're not comfortable using an unofficial build of Chimera, the normal build of Chimera will still work.

:::

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Chimera `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The Chimera application can now be opened from home screen.


## Running Chimera

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Chimera application from your home screen immediately afterwards
1. Tap "Jailbreak"
1. Reboot your phone again when prompted
    - If you are not prompted and it automatically reboots, wait 1-2 minutes, then try again.
    - This time, it is necessary
1. Once again, open the Chimera application from your home screen immediately after rebooting
1. Tap "Jailbreak" again
    - If it automatically reboots or crashes and the jailbreak is not installed, wait 1-2 minutes, then try again.

::: warning

If that app or your device continually crashes/restarts unexpectedly and the jailbreak isn't installed despite the above steps, attempt to put the device in a freezer for that 1-2 minute period.

:::

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Installing necessary software

1. Open the Sileo application
1. Tap on the "Search" tab
1. Search for "libiosexec1"
1. Tap "Modify", then Tap "Upgrade"
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap "Done"
1. Search for "libhooker (common)", "PreferenceLoader", and "RocketBootstrap" and add them to the queue by pressing "Install"
    - While we're preparing the queue, do not install the anything that is queued until after we've selected all our programs to install
1. Tap the "Queued" bar at the bottom of the page
1. Tap "Confirm"
1. Once finished, tap 'Restart SpringBoard'

## Rejailbreaking with TotallyNotSpyware-v2 (A10(X) and earlier)

::: warning

Rejailbreaking with TotallyNotSpyware-v2 is only supporting on A10(X) and earlier devices. A11 and later devices will need to keep the Chimera app resigned in order to rejailbreak.

:::

As Chimera is a semi-untethered jailbreak, you won't remain jailbroken if your device reboots or powers off for any reason. Luckily, on A10(X) and earlier devices, rather than needing to keep the Chimera app sideloaded, you can simply follow the below steps to rejailbreak your device.

::: danger

This **does not** install the jailbreak in the first place - you'll need to sideload the Chimera app and jailbreak normally first before being able to follow this section.

:::

1. Open Safari on your iOS device
1. Go to the [jbme.h4ck.kr](http://jbme.h4ck.kr) website, and tap `re-jailbreak`
1. When prompted, press `Close` on any prompts that appear within Safari
1. Tap `userspace reboot` to complete the rejailbreaking process

::: warning

If you get `The webpage was reloaded because a problem occurred`, fully close Safari through the App Switcher, then reopen Safari, refresh the page, and try again.

:::

Your device should now be in a jailbroken state again.