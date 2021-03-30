---
title: Using Odysseyn1x
permalink: /using-odysseyn1x
redirect_from:
  - /installing-odysseyn1x
  - /using-odysseynix
  - /odysseyn1x
  - /odysseynix
  - /using-bootra1n
  - /using-bootrain
  - /bootra1n
  - /bootrain
  - /using-checkn1x
  - /using-checknix
  - /checkn1x
  - /checkn1x
excerpt: Guide to installing checkra1n via Odysseyn1x
sidebar:
  nav: ios1314
---

{% include_relative include/semi-tethered.md %}

Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device. checkra1n is capable of jailbreaking millions of iOS device on firmwares 12.0 and above.

On iOS 14.0 to {% include latestfw %}, Odysseyn1x is only fully supported on A8(X) to A10(X) devices for the moment. Full A11 support may be added at future date.
{: .notice--info}

{% include_relative include/odysseyra1n-explanation.md %}

## Requirements

- 512MB or greater USB Drive
- The latest version of [Odysseyn1x](https://github.com/raspberryenvoie/odysseyn1x/releases){:target="_blank"}
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

1. Once you have loaded odysseyn1x, select `checkra1n`
1. Click `Start` and follow all onscreen prompts
  - You may need to enable `enable untested versions` if you are on iOS 14.4 to {% include latestfw %} before being able to follow this step
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
