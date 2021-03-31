---
title: "Blocking Jailbreak Detection"
permalink: /blocking-jailbreak-detection
redirect_from:
  - /blocking
  - /jailbreak-detection
excerpt: Bypassing and avoiding jailbreak detection.
sidebar:
  nav: sidebar
---

We do not recommend using banking apps on a jailbroken device. Use a separate secure device to access your bank account.
{: .notice--danger}

Many apps, which rely on security, will have algorithms to detect and block jailbroken users from using the app. This includes banking apps, some online videogames (e.g. Pokemon Go, Mario Kart Tour) and other privacy focused apps such as Snapchat.

This is great from a security standpoint, as a jailbroken device is much more likely to become compromised compared to stock iOS. This can cause an issue, however, when some of us just want to use the apps we need to use.

Blocking jailbreak detection can stop you from accessing photos and other files while in selected applications.
{:.notice--warning}

Now, we'll go through each tweak that can be used to minimize jailbreak detection. Some apps, however, cannot be patched and will not work when jailbroken, regardless of the content below. Other apps may need bypasses made specifically for them.
## Tweaks

- [A-Bypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/&package=com.rpgfarm.a-bypass)
- [Liberty Lite (Beta)](cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/&package=com.ryleyangus.libertylite.beta) ([ryleyangus.com/repo](cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/))
- [Choicy](cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/&package=com.opa334.choicy) ([opa334.github.io](cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/))
- Libhooker Configurator (available on the Odyssey repo)
- [KernBypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/&package=jp.akusio.kernbypass-unofficial) ([cydia.ichitaso.com](cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/))
- [vnodebypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/&package=kr.xsf1re.vnodebypass) ([repo.xsf1re.kr](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/))

Choicy is available on the default BigBoss repo, however we recommend adding the developer's repo to ensure you have the most up-to-date version.
{: .notice}

There is other software available for hiding jailbreak, such as [Shadow](sileo://package/me.jjolano.shadow) ([ios.jjolano.me](sileo://source/https://ios.jjolano.me/)), however we'll only be covering the above tweaks in this guide.

## Installation

1. Open your package manager app (e.g. Cydia, Sileo, Zebra)
1. Add the three repos linked above
1. Search for and install the three packages
1. Respring when prompted

## A-Bypass

According to the tweak's author, A-Bypass works better on libhooker-based jailbreaks, such as [Chimera](jailbreak/installing-chimera.md), [Odyssey](jailbreak/installing-odyssey.md), [odysseyra1n](jailbreak/checkra1n/installing-odysseyra1n.md), and [Taurine](jailbreak/installing-taurine.md)
{:.notice--info}

1. Open the Settings application
2. Scroll down to `A-Bypass`
3. Tap on `Check for Updates`
4. Scroll down and enable any apps you wish to block jailbreak detection with.

## Liberty Lite

1. Open the Settings application
1. Scroll down to `Liberty Lite`
1. Enable `Enable Liberty`
1. Tap on `Block Jailbreak Detection`
1. Enable all the apps you want to block jailbreak detection with

## Choicy

This is the best option for users wanting to use Snapchat on their jailbroken device.
{:.notice--info}

If you use a libhooker-based jailbreak, such as [Chimera](jailbreak/installing-chimera.md), [Odyssey](jailbreak/installing-odyssey.md), [odysseyra1n](jailbreak/checkra1n/installing-odysseyra1n.md), or [Taurine](jailbreak/installing-taurine.md), then [libhooker configurator](#libhooker-configurator) serves the same purpose as Choicy, while being natively integrated into libhooker.
{:.notice--info}

1. Open the Settings application
1. Scroll down to `Choicy`
1. Tap on `Applications`
1. Tap on an application that you selected with Liberty Lite
1. Enable `Custom Tweak Configuration`
	- For Snapchat, enable `Disable Tweak Injection` and skip the next steps
1. Make sure `Whitelist` is selected
1. Enable `zzzzzLiberty`
1. Repeat this for every app you selected with Liberty Lite

## libhooker configurator

This only works on libhooker-based jailbreaks! If you use a Substrate or Substitute based jailbreak, such as checkra1n or unc0ver, then this *will not work*, and you should use [Choicy](#choicy) instead!
{:.notice--warning}

1. Open the `libhooker` application
1. Tap "Applications"
1. Scroll down to the application you wish to configure, and tap on it
1. Here, you can either disable tweaks entirely in this application, or configure individual tweaks.
   - To configure individual tweaks, enable "Override Configuration", which will open up options to only allow specific tweaks or deny specific tweaks.
   - For example, to allow only Liberty Lite, you'd select `Allow`, then select `zzzzzLiberty`.

## KernBypass (iOS 12.0 - 14.2)

This is the best option for users wanting to use Nintendo apps (Mario Kart Tour, Animal Crossing: Pocket Camp, etc) and Pokemon GO on their jailbroken device.
{:.notice--info}

KernBypass will not work on iOS 14 using unc0ver. Look into [vnodebypass](#vnodebypass) instead.
{:.notice--warning}

KernBypass is a kernel tweak. Do not install on unsupported devices, use it at your own risk.
{:.notice--danger}

1. Open the Settings application
1. Scroll down to `KernBypass`
1. Tap `Enable KernBypass`
1. Enable all the apps you want to block jailbreak detection with

## vnodebypass

vnodebypass is similar to KernBypass in regards to what it can bypass, but be aware that while it is active, you will lose access to your tweaks!
{:.notice--info}

vnodebypass is a kernel tweak. Do not install on unsupported devices, use it at your own risk.
{:.notice--danger}

1. If you are on iOS 14, ensure that `libkrw` 1.1.0 or later is installed. It is available in the default Elucubratus repository, if you are using unc0ver or checkra1n.
2. Open the `vnodebypass` app
3. Tap the `Enable` button
4. When done using the app with jailbreak detection, go back into the `vnodebypass` app and tap `Disable`
