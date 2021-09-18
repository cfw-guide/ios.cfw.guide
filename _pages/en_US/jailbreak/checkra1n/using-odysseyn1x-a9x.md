---
title: Using Odysseyn1x (A9X)
permalink: /using-odysseyn1x-a9x
redirect_from:
excerpt: Guide to installing checkra1n via Odysseyn1x on A9X devices
sidebar:
  nav: ios1314
---

{% include_relative include/semi-tethered.md %}

If you are using an A9X device running iOS 14.4.2 or earlier, you should follow [Using Odysseyn1x](using-odysseyn1x) and use Odysseyn1x version 2.9 instead.
{: .notice--danger}

On A9X devices, it is not possible to use Odysseyn1x 2.14 (required for 14.5+ support) without the use of a custom pongoOS and checkra1n in CLI mode. It is possible to use a custom version of Odysseyn1x, however, to work around this.

{% include_relative include/odysseyra1n-explanation.md %}

If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.
{: .notice--warning}

{% include_relative include/odysseyra1n-explanation.md %}

## Requirements

- 512MB or greater USB Drive
- The latest version of [Odysseyn1x for A9X](https://github.com/asdfugil/checkn1x_a9x_kerninfo_pongoOS/releases/tag/14.5-a9x-1){:target="_blank"}
    - For 64-bit computers, download the "AMD64" version
    - For 32-bit computers, download the "i686" version
- [balenaEtcher](https://www.balena.io/etcher/){:target="_blank"}

![]({{ "/assets/images/Odysseyn1x.png" | absolute_url }})

{% include_relative include/unc0ver-migration.md %}

## Flashing Odysseyn1x

1. Download and install balenaEtcher
1. Click `Flash from file`
1. Select the odysseyn1x `.iso` file
1. Click `Select target`
1. Select the USB drive you would like to boot from
  - This USB drive will be completely erased
  - Ensure you back up all important data beforehand
1. Click `Flash!`
  - Do not remove your USB Drive until the process has completed
1. Once the flashing has completed, reboot your computer
1. Go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from
  - This is different for every computer
  - Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure

## Running checkra1n

1. Once you have loaded odysseyn1x, select `checkra1n (A9X)`
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - Follow the instructions until your device reboots to a black screen
1. Once your device boots, you can quit checkra1n, but do not shut down your computer

## The Odysseyra1n script

The following steps only need to be performed once and are optional but highly recommended for a smoother experience and modern bootstrap.

1. Unlock your device
1. Ensure that your computer is trusted by your device
1. Select `Odysseyra1n` in Odysseyn1x
1. Sileo should install to your device
1. Do not close Odysseyn1x as you will need to re-jailbreak in a few minutes

{% include_relative include/no-loader.md %}

{% include_relative include/end-of-page.md %}
