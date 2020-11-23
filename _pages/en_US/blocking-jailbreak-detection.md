---
title: "Blocking Jailbreak Detection"
permalink: /blocking-jailbreak-detection
redirect_from:
  - /blocking
excerpt: Bypassing and avoiding jailbreak detection.
---

{% include toc title="Table of Contents" %}

We do not recommend using banking apps on a jailbroken device. Use a separate secure device to access your bank account.
{: .notice--danger}

Many apps, which rely on security, will have algorithms to detect and block jailbroken users from using the app. This includes banking apps, some online videogames (e.g. Pokemon Go, Mario Kart Tour) and other privacy focused apps such as Snapchat.

This is great from a security standpoint, as a jailbroken device is much more likely to become compromised compared to stock iOS. This can cause an issue, however, when some of us just want to use the apps we need to use.

Blocking jailbreak detection can stop you from accessing photos and other files while in selected applications.
{:.notice--warning}

Now, we'll go through each tweak that can be used to minimize jailbreak detection. Some apps, however, cannot be patched and will not work when jailbroken, regardless of the content below.

The method below involves using Liberty Lite to block jailbreak detection, and using Choicy to whitelist Liberty Lite in that app.

This means that, in the selected application, all tweaks except Liberty Lite will be disabled, reducing the risk of jailbreak detection.

## Tweaks

- [Liberty Lite (Beta)](sileo://package/com.ryleyangus.libertylite.beta) ([ryleyangus.com/repo](cydia://url/https://cydia.saurik.com/api/share#?source=https://https://ryleyangus.com/repo/))
- [Choicy](sileo://package/com.opa334.choicy) ([opa334.github.io](cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/))

Choicy is available on the default BigBoss repo, however we recommend adding the developer's repo to ensure you have the most up-to-date version.
{: .notice}

There is other software available for hiding jailbreak, such as [Shadow](sileo://package/me.jjolano.shadow) ([ios.jjolano.me](cydia://url/https://cydia.saurik.com/api/share#?source=https://ios.jjolano.me/)), however we'll only be covering the above three tweaks in this guide.

## Installation

1. Open your package manager app (e.g. Cydia, Sileo, Zebra)
1. Add the three repos linked above
1. Search for and install the three packages
1. Respring when prompted

## Liberty Lite

1. Open the Settings application
1. Scroll down to `Liberty Lite`
1. Enable `Enable Liberty`
1. Tap on `Block Jailbreak Detection`
1. Enable all the apps you want to block jailbreak detection with

## Choicy

1. Exit the Liberty Lite settings
1. Tap on `Choicy`
1. Tap on `Applications`
1. Tap on an application that you selected with Liberty Lite
1. Enable `Custom Tweak Configuration`
	- For Snapchat, enable `Disable Tweak Injection` and skip the next steps
1. Make sure `Whitelist` is selected
1. Enable `zzzzzLiberty`
1. Repeat this for every app you selected with Liberty Lite
