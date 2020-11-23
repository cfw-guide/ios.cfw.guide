---
title: Using bootra1n
permalink: /using-bootra1n
redirect_from:
  - /using-bootrain
  - /bootra1n
  - /bootrain
  - /br
excerpt: Guide to installing Checkra1n by using bootra1n
---
<link rel="shortcut icon" type="image/png" href="/assets/images/jb/checkra1n.png">

{% include toc title="Table of Contents" %}

checkra1n is a [semi-tethered jailbreak](/types-of-jailbreak#semi-tethered-jailbreaks){:target="_blank"}, meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more.
{:.notice--info}

bootra1n is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device.

Once the exploit is installed, you will have the choice of installing a [package manager](faq#package-manager). For this we will be using Cydia. You may already be familiar with Cydia, as it has been the default package manager for over a decade.

## Downloads

- 512MB or greater USB Drive
- The latest version of [bootra1n 64-Bit](https://github.com/foxlet/bootra1n/releases/download/0.10.2/bootra1n-x86_64-0.10.2-20200526.iso)
    - or [bootra1n 32-Bit](https://github.com/foxlet/bootra1n/releases/download/0.10.2/bootra1n-i686-0.10.2-20200526.iso)
- [Rufus](https://rufus.ie/)

![]({{ "/assets/images/bootra1n.png" | absolute_url }})

If you're migrating from unc0ver to to checkra1n, you must follow [Removing unc0ver](removing-unc0ver) before proceeding.
{: .notice--textbox}

## Flashing bootra1n iso to USB or CD

1. Download and open Rufus
1. Select the USB Drive or CD/DVD you wish to flash or burn bootra1n to
1. Click `SELECT` and select your downloaded iso file
1. Click `START`
  - Do not remove your USB Drive or eject your CD/DVD until the process has completed
1. Once the flashing/burning has completed, reboot your computer
1. Go into your BIOS settings or boot picker and select your USB Drive or CD/DVD to boot from
    - This is different for every motherboard, laptop, etc... Google how to get to your BIOS settings for your specific device if you do not know how

Your iOS device should reboot. There should now be a checkra1n application on your home screen.

## Running checkra1n
1. Once you have loaded bootra1n, select the boot mode
    - Choose the first option if you do not know which one to pick
1. Once greeted with the login prompt, login as `anon` with password `voidlinux`
1. After you've successfully logged in type `sudo checkra1n` and press `Enter`
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - If you have an iPhone or iPad without a Home Button, follow [these instructions](troubleshooting#iphonex_dfu) to enter DFU mode, as the instructions in the checkra1n application are incorrect
  - Follow the instructions until your device reboots to a black screen
1. Once your device shows the checkra1n Apple Logo, you can quit checkra1n and shutdown by typing `sudo shutdown -h now` and pressing `Enter`

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
