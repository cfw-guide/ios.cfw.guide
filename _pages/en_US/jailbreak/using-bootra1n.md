---
title: Using Odysseyn1x
permalink: /using-Odysseyn1x
redirect_from:
  - /using-bootrain
  - /bootra1n
  - /bootrain
  - /odysseyn1x
  - /odysseynix
  - /checkn1x
  - /checkn1x
excerpt: Guide to installing Checkra1n by using Odysseyn1x
---
<link rel="shortcut icon" type="image/png" href="/assets/images/jb/checkra1n.png">

{% include toc title="Table of Contents" %}

checkra1n is a [semi-tethered jailbreak](/types-of-jailbreak#semi-tethered-jailbreaks){:target="_blank"}, meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more.
{:.notice--info}

Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device.

Once the exploit is installed, you will have the choice of installing a [package manager](faq#package-manager). For this we will be using Cydia. You may already be familiar with Cydia, as it has been the default package manager for over a decade.

## Downloads

- 512MB or greater USB Drive
- The latest version of [Odysseyn1x](https://github.com/raspberryenvoie/odysseyn1x/releases)
    - Download amd64 if you're on a 64-bit computer, i686 for 32-bit.
- [balenaEtcher](https://www.balena.io/etcher/)

![]({{ "/assets/images/Odysseyn1x.png" | absolute_url }})

If you're migrating from unc0ver to to checkra1n, you must follow [Removing unc0ver](removing-unc0ver) before proceeding.
{: .notice--textbox}

## Flashing Odysseyn1x iso to USB

1. Download and install balenaEtcher
1. Click `Flash from file` and select your downloaded iso
1. Click `Select target` and select your USB drive
1. Click `Flash!`
  - This will completely erase your USB drive, backup all important files to your local disk
  - Do not remove your USB Drive until the process has completed
1. Once the flashing has completed, reboot your computer
1. Go into your BIOS settings and disable `Secure Boot`, then enter the boot picker and select your USB Drive to boot from
    - This is different for every motherboard, laptop, etc... Google your PC or motherboard brand to find out how to get to your BIOS settings if you do not know how

## Running checkra1n
1. Once you have loaded Odysseyn1x, select `checkra1n`
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - Follow the instructions until your device reboots to a black screen
1. Once your device shows the checkra1n Apple Logo, you can quit checkra1n and shutdown by selecting `Shut down` or `Reboot` on the Odysseyn1x main screen

## Using checkra1n

1. Open the checkra1n application on your iOS device
1. Press "Cydia" under the `Install` section
  - This installs the Cydia [package manager](faq#package-manager)
  - This may take a few seconds

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Cydia](using-cydia)
{: .notice--info}

If you've used Cydia before, continue to [Blocking Jailbreak Detection](blocking-jailbreak-detection)
{: .notice--textbox}
