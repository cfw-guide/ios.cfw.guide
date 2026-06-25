---
lang: en_US
title: Installing Amethyst
description: Guide to installing Amethyst
permalink: /installing-amethyst
redirect_from:
  - /amethyst
  - /cm
pkgman: sileo
extra_contributors:
  - TheHacker894
  - Mineek
  - Alriceee
---

Amethyst is a <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">semi-untethered jailbreak</router-link>, meaning it requires an app or website to re-apply the exploit after a reboot.

Amethyst is capable of jailbreaking all devices on iOS 12.0 to 13.7.

Due to how semi-untethered jailbreaks work, if you are using an A11 or newer device or are on iOS 13.0 or later, the app will need to be <router-link to="/resigning-apps">re-signed</router-link> once every 7 days.

We will use PlumeImpactor to install the Amethyst jailbreak application to your iOS device for use in the next step.

::: warning

If you are already jailbroken with another jailbreak (besides Odysseyra1n or Chimera), make sure to properly <router-link to="/restoring-rootfs">remove it</router-link> before proceeding.

:::

## Downloads

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Amethyst is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest release of [Amethyst](https://github.com/staturnzz/amethyst/releases/)
- The latest version of [PlumeImpactor](https://github.com/khcrysalis/PlumeImpactor/releases/latest)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

## Installing the application

1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Open PlumeImpactor
1. Go to `Settings` -> `Sign In`
1. Enter in your Apple Account and Password
1. Close the Settings and Sign In windows
1. Drag and drop the Amethyst `.ipa` file into PlumeImpactor
1. Click `Install`

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The Amethyst application can now be opened from home screen.

## Running Amethyst

1. Reboot your phone
    - This is not necessary but recommended
1. Open the Amethyst application from your home screen immediately afterwards
1. Tap "Jailbreak"
1. Reboot your phone again when prompted
    - If you are not prompted and it automatically reboots, wait 1-2 minutes, then try again.
    - This time, it is necessary
1. Once again, open the Amethyst application from your home screen immediately after rebooting
1. Tap "Jailbreak" again
    - If it automatically reboots or crashes and the jailbreak is not installed, wait 1-2 minutes, then try again.

You should now be jailbroken with Sileo and Zebra installed on your home screen. You can use Sileo or Zebra to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

## Rejailbreaking with TotallyNotSpyware-v2 (iOS 12.0 to 12.5.8, A10(X) and earlier)

::: warning

Rejailbreaking with TotallyNotSpyware-v2 is only supported on A10(X) and earlier devices running iOS 12.0 to 12.5.8. A11 and later devices, as well as devices running iOS 13.0 or later, will need to keep the Amethyst app resigned in order to rejailbreak.

:::

As Amethyst is a semi-untethered jailbreak, you won't remain jailbroken if your device reboots or powers off for any reason. Luckily, on A10(X) and earlier devices running iOS 12.0 to 12.5.8, rather than needing to keep the Amethyst app sideloaded, you can simply follow the below steps to rejailbreak your device.

::: danger

This **does not** install the jailbreak in the first place - you'll need to sideload the Amethyst app and jailbreak normally first before being able to follow this section.

:::

1. Open Safari on your iOS device
1. Go to the [jbme.h4ck.kr](http://jbme.h4ck.kr) website, and tap `re-jailbreak`
1. When prompted, press `Close` on any prompts that appear within Safari

::: warning

If you get `The webpage was reloaded because a problem occurred`, fully close Safari through the App Switcher, then reopen Safari, refresh the page, and try again.

:::

Your device should now be in a jailbroken state again.