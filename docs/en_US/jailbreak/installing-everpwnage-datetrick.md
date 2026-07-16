---
lang: en_US
title: Installing EverPwnage (Date Trick)
description: Guide to installing EverPwnage using jailbreaks.app and the Date Trick bug
permalink: /installing-everpwnage-datetrick
discordNoticeText: For support in English, ask for help on the LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - Alriceee
---

EverPwnage is an untethered jailbreak capable of jailbreaking 32-bit iOS devices on firmware versions 7.0 to 9.3.6. However, this method of installing EverPwnage relies on a bug with changing the date/time that is only present in firmware versions 8.0.3 and lower.

We will use the jailbreaks.app website, combined with changing the date/time, to install the EverPwnage jailbreak application to your iOS device for use in the next step.

::: tip

If you are running firmware versions 7.1 to 8.0.3, unless you are running into issues it is generally recommended to follow:
- <router-link to="/using-lyncis">Using Lyncis</router-link> instead if on firmware versions 7.1 to 7.1.2
- <router-link to="/using-carbon">Using Carbon</router-link> instead if on firmware versions 8.0 to 8.0.3

:::

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
EverPwnage is currently signed at <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a>. As such, you should follow <router-link to="/installing-everpwnage">Installing EverPwnage</router-link> instead.
</p></div>

## Updating Certificates

::: warning

While this section is *technically* optional, many modern repositories **will not work** without these updated certificates.

:::

1. Open Safari on your iOS device
1. Go to the [http://tlsroot.litten.ca](http://tlsroot.litten.ca) website
1. Tap `Signed iOS Bundle (iOS 5+)`
1. Tap `Install` -> `Install` -> `Install` -> Done

## Changing the Date/Time

::: tip

The time mentioned in this section is in the **Central Daylight Time** time zone. You may want to also change the time zone to "Chicago" for the purposes of being able to follow this guide easier.

:::

1. Go to `Settings` -> `General` -> `Date & Time`
1. Toggle off `Set Automatically` if it's enabled
1. Click on the Date & Time field
    - This will likely say something that is *formatted* along the lines of `Jul 16, 2026 2:17 AM`
1. Adjust the Date & Time to be around **Wednesday, June 24th, 2026, at 8:30 AM**
    - The aforementioned Date & Time field should automatically update to `Jun 24, 2026 8:30 AM`
1. Press `General` in the top left to close the page

## Installing the application

1. Open Safari on your iOS device
1. Go to the jailbreaks.app legacy website ([https://jailbreaks.app/legacy.html](https://jailbreaks.app/legacy.html))
1. Tap `Install EverPwnage (iOS 7/8/9 - 32 Bit)` -> `Install`

The app will now install to your iOS device.

## Trusting the application

1. Attempt to open the `EverPwnage` application from the home screen
1. Tap `Continue`

The EverPwnage application can now be opened from home screen.

## Running EverPwnage

1. Open the EverPwnage application from your home screen
1. Tap `Jailbreak`

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, themes and more.
