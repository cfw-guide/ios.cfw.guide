---
lang: en_US
title: Installing EverPwnage
description: Guide to installing everpwnage
permalink: /installing-everpwnage
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Alriceee
---

EverPwnage is an untethered jailbreak capable of jailbreaking 32-bit iOS devices on firmware versions 7.0 to 9.3.6.

We will use the Sideloadly tool to install the EverPwnage jailbreak application to your iOS device for use in the next step.

::: tip

If you are running firmware versions 7.1 to 9.3.6, unless you are running into issues it is generally recommended to follow:
- <router-link to="/using-lyncis">Using Lyncis</router-link> instead if on firmware versions 7.1 to 7.1.2
- <router-link to="/using-carbon">Using Carbon</router-link> instead if on firmware versions 8.0 to 9.3.6

*Additionally*, if jailbreaks.app is **not** actively signed, and you're on firmware versions 7.0 to 7.0.6, you should follow either <router-link to="/installing-aquila">Installing Aquila</router-link> or <router-link to="/installing-everpwnage-datetrick">Installing EverPwnage (Date Trick)</router-link>.

:::

## Downloads
<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
EverPwnage is currently signed at <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> for easy installation without a computer.
</p></div>

- The latest version of [EverPwnage](https://github.com/LukeZGD/EverPwnage/releases/latest)
- The latest version of [Sideloadly](https://sideloadly.io/)
- The latest version of [iTunes](https://www.apple.com/itunes/download/win64) if on Windows.

![A screenshot of the Sideloadly application (Windows)](/assets/images/sideloadly_win.png)

## Installing the application

1. Open Sideloadly
1. Plug your iOS device into your computer
    - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the EverPwnage `.ipa` file into Sideloadly
1. Enter in your Apple Account
1. Enter in your password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple Account>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple Account>"`

The EverPwnage application can now be opened from home screen.

## Running EverPwnage

1. Open the EverPwnage application from your home screen
1. Tap `Jailbreak`

You should now be jailbroken with Cydia (and on iOS 9, Zebra) installed on your home screen. You can use Cydia or Zebra to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.

::: tip

If you are using a device on iOS 9, continue to <router-link to="/using-zebra">Using Zebra</router-link> instead.

:::
