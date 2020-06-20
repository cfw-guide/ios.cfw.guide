---
title: "Package Managers"
permalink: /package-managers
excerpt: Information on the current package managers available to use
---

{% include toc title="Table of Contents" %}

After installing your jailbreak, you may may be wondering what is a Package Manager and why do I need one?
  
# What is a Package Manager
  
Package Managers are like the App Store. They allow you to browse repositories (sometimes refered to as repos or sources) and download Tweaks, Apps, and other pieces of software for your jailbroken device. Most jailbreaks come prepackaged with a Package Manager called Cydia.

## Cydia

{% capture cydia %}
Cydia has been around almost as long as jailbreaking iOS Devices has. It's the package manager that is usually at the front of every jailbreak. It's often mocked for its outdated design, somewhat abandonement by its creator, and slow performance.
{% endcapture %}

<div class="notice--info">{{ cydia | markdownify }}</div>

## Sileo

{% capture sileo %}
Sileo is a relatively new Package Manager made by Coolstar. Just like Cydia, it's used to download and install jailbreak tweaks. Sileo prides itself with its superior performance over Cydia along with general QOL improvements. The modern-looking package manager also borrows its design from Apple's iOS App Store.
  
If your jailbreak does not ship with Sileo, it is possible to install Sileo if you're running iOS 11 or newer. For the best experience, only use it on a device with an Apple A9 SoC or newer.

URL: <code><a href="https://repo.getsileo.app/" target="_blank">https://repo.getsileo.app/</a></code>
{% endcapture %}

<div class="notice--info">{{ sileo | markdownify }}</div>

## Zebra

{% capture zebra %}
Zebra is the newest of the bunch. Taking inspiration from Cydia's design, it's able to refresh sources far quicker than Cydia and runs decently well on older hardware. Zebra isn't perfect, but it's a great start to replacing the againg Cydia package manager.

URL: <code><a href="https://getzbra.com/" target="_blank">https://getzbra.com/</a></code>
{% endcapture %}

<div class="notice--info">{{ zebra | markdownify }}</div>
