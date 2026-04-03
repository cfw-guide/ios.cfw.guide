---
lang: en_US
title: "Blocking Jailbreak Detection"
description: Bypassing and avoiding jailbreak detection.
permalink: /blocking-jailbreak-detection
redirect_from:
  - /blocking
  - /jailbreak-detection
extra_contributors:
  - Absolucy
  - TheHacker894
---

::: danger

We do not recommend using banking apps on a jailbroken device. Use a separate secure device to access your bank account.

:::

Many apps, which rely on security, will have algorithms to detect and block jailbroken users from using the app. This includes banking apps, some online videogames (e.g. Pokemon Go, Mario Kart Tour) and other privacy focused apps such as Snapchat.

This is great from a security standpoint, as a jailbroken device is much more likely to become compromised compared to stock iOS. This can cause an issue, however, when some of us just want to use the apps we need to use.

::: danger

Blocking jailbreak detection can stop you from accessing photos and other files while in selected applications.

:::

Now, we'll go through each tweak that can be used to minimize jailbreak detection. Some apps, however, cannot be patched and will not work when jailbroken, regardless of the content below. Other apps may need bypasses made specifically for them.
## Tweaks

- [A-Bypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/&package=com.rpgfarm.a-bypass) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/">repo.co.kr</a>)
- [Liberty Lite (Beta)](cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/&package=com.ryleyangus.libertylite.beta) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/">ryleyangus.com/repo</a>)
- [Choicy](cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/&package=com.opa334.choicy) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/">opa334.github.io</a>)
- Libhooker Configurator (available on the Odyssey repo)
- [KernBypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/&package=jp.akusio.kernbypass-unofficial) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/">cydia.ichitaso.com</a>)
- [vnodebypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/&package=kr.xsf1re.vnodebypass) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/">repo.xsf1re.kr</a>)
- Built in Hide Jailbreak features for certain jailbreaks
::: tip

Choicy is available on the default BigBoss repo, however we recommend adding the developer's repo to ensure you have the most up-to-date version.

:::

There is other software available for hiding jailbreak, such as [Shadow](sileo://package/me.jjolano.shadow) (<a href="sileo://source/https://ios.jjolano.me/">ios.jjolano.me</a>), however we'll only be covering the above tweaks in this guide.

## Installation

1. Open your package manager app (e.g. Cydia, Sileo, Zebra)
1. Add the three repos linked above
1. Search for and install the three packages
1. Respring when prompted

## Choicy

::: tip

This is the best option for users wanting to use Snapchat on their jailbroken device.

:::

::: tip

If you use a libhooker-based jailbreak, such as <router-link to="/installing-chimera">Chimera</router-link>, <router-link to="installing-odyssey">Odyssey</router-link>, <router-link to="/installing-odysseyra1n">odysseyra1n</router-link>, or <router-link to="/installing-taurine">Taurine</router-link>, then [libhooker configurator](#libhooker-configurator) serves the same purpose as Choicy, while being natively integrated into libhooker.

:::

1. Open the Settings application
1. Scroll down to `Choicy`
1. Tap on `Applications`
1. Scroll down to or search for the application you wish to configure, and tap on it
1. Tap on an application that you selected with another bypass, if you are using one
	- Enable `Custom Tweak Configuration` if you are using Choicy alongside another bypass method.
	- Make sure `Allow` is selected
	- Enable the bypass you're using - for Liberty Lite this would be `zzzzzLiberty`, or `!ABypass2` for A-Bypass.
1. If you are not using another bypass along side Choicy or using Snapchat, then toggle `Disable Tweak Injection` 
1. Repeat this for every app you've selected to use with your bypass tweak.

## A-Bypass (Rootful Only)

::: tip

According to the tweak's author, A-Bypass works better on libhooker-based jailbreaks, such as <router-link to="/installing-chimera">Chimera</router-link>, <router-link to="installing-odyssey">Odyssey</router-link>, <router-link to="/installing-odysseyra1n">odysseyra1n</router-link>, and <router-link to="/installing-taurine">Taurine</router-link>. It still works on Substrate/Substitute-based jailbreaks, such as checkra1n and unc0ver, however.

:::

::: danger

A-Bypass is **not** supported on rootless jailbreaks like <router-link to="/installing-dopamine-trollstore">Dopamine</router-link>, <router-link to="/installing-palera1n">palera1n</router-link>, or <router-link to="/installing-nathanlr">nathanlr</router-link>.

:::

1. Open the Settings application
1. Scroll down to `A-Bypass`
1. Tap on `Check for Updates`
	- If a new app doesn't work with A-Bypass, you should always try to go back and try to check for updates in the A-Bypass preferences again.
1. Scroll down and enable any apps you wish to block jailbreak detection with.

## vnodebypass

::: tip

vnodebypass is similar to KernBypass in regards to what it can bypass, but be aware that while it is active, you will lose access to your tweaks!

:::

::: danger

vnodebypass is a kernel tweak. Do not install on unsupported devices, use it at your own risk.

:::

::: danger

vnodebypass is **not** supported on <router-link to="/installing-nathanlr">nathanlr</router-link> or <router-link to="/installing-palera1n">palera1n</router-link>.

:::

1. If you are on iOS 14, ensure that `libkrw` 1.1.0 or later is installed. It is available in the default Elucubratus repository, if you are using unc0ver or checkra1n.
1. Open the `vnodebypass` app
1. Tap the `Enable` button
1. When done using the app with jailbreak detection, go back into the `vnodebypass` app and tap `Disable`

## Built in Hide Jailbreak features

::: tip 

Some jailbreaks like <router-link to="/installing-dopamine-trollstore">Dopamine</router-link> or <router-link to="/installing-nathanlr">nathanlr</router-link> include the ability within the jailbreak themselves to hide the jailbreak which is what we will be going over. 

:::

::: details Instructions for Dopamine

1. Open the Dopamine application
1. Tap `Settings`
1. Tap `Hide Jailbreak`
	- You may have to wait a few seconds for it to apply. When it does, it will switch to "Unhide Jailbreak"
::: 

::: details Instructions for nathanlr

1. Open the nathanlr application
1. Tap `Options/Credits`
1. Tap `Toggle Jailbreak Hide State`

:::

## Liberty Lite (Rootful Only)

::: danger

Liberty Lite cannot be used on rootless jailbreaks like <router-link to="/installing-dopamine-trollstore">Dopamine</router-link>, <router-link to="/installing-palera1n">palera1n</router-link>, or <router-link to="/installing-nathanlr">nathanlr</router-link>.

:::

1. Open the Settings application
1. Scroll down to `Liberty Lite`
1. Enable `Enable Liberty`
1. Tap on `Block Jailbreak Detection`
1. Enable all the apps you want to block jailbreak detection with


## libhooker configurator

::: warning

This only works on libhooker-based jailbreaks! If you use Substrate, Substitute, or an Ellekit  based jailbreak, such as checkra1n, unc0ver, Dopamine, palera1n, or nathanlr, then this *will not work*, and you should use [Choicy](#choicy) instead!

:::

1. Open the `libhooker` application
1. Tap "Applications"
1. Scroll down to the application you wish to configure, and tap on it
1. Here, you can either disable tweaks entirely in this application, or configure individual tweaks.
   - To configure individual tweaks, enable "Override Configuration", which will open up options to only allow specific tweaks or deny specific tweaks.
   - For example, to allow only Liberty Lite, you'd select `Allow`, then select `zzzzzLiberty`.
   - If you're using A-Bypass, you'd enable `!ABypass2` instead.

## KernBypass (iOS 12.0 - 14.2)

::: tip

This is the best option for users wanting to use Nintendo apps (Mario Kart Tour, Animal Crossing: Pocket Camp, etc) and Pokemon GO on their jailbroken device.

:::

::: warning

KernBypass will not work on iOS 14 using unc0ver. Look into [vnodebypass](#vnodebypass) instead.

:::

::: danger

KernBypass is a kernel tweak. Do not install on unsupported devices, use it at your own risk.

:::

1. Open the Settings application
1. Scroll down to `KernBypass`
1. Tap `Enable KernBypass`
1. Enable all the apps you want to block jailbreak detection with

