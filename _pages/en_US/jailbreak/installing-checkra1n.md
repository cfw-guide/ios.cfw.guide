---
title: Installing checkra1n
permalink: /installing-checkra1n
---

{% include toc title="Table of Contents" %}

Currently, checkra1n is only compatible with MacOS, and will not work in a VM. Windows and Linux support is coming soon.
{: .notice--info}

If you have a newer device, such as an iPhone XS, you will not be able to use checkra1n. Check the [Device Selection](device-selection) page to check if your device is compatible.
{: .notice--danger}

checkra1n is capable of jailbreaking nearly every iOS device on firmwares 12.3 and above.

Note that the checkra1n jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

In the future, checkra1n will support all devices released before iOS 12. Currently, however, the following devices aren't supported:

  - iPad 5
  - iPad Air 2
  - iPad Pro (1st Gen)

Support for the following devices is experimental, and may require more attempts than usual:

  - iPhone 5s
  - iPad Mini 2
  - iPad Mini 3
  - iPad Air

Every time you reboot, you must have a computer with you to re-apply the exploit. This is different to the majority of iOS exploits in the recent years where you only had to run an application to re-apply the exploit.

Once the exploit is installed, you will have the choice of installing a [package manager](faq#package-manager). For this we will be using Cydia. You may already be familiar with Cydia, as it was the default package manager for jailbreaking for 10 years.

## Downloads

- The latest version of [checkra1n](https://checkra.in)

![]({{ "/assets/images/checkra1n.png" | absolute_url }})

## Installing checkra1n

If you're migrating from unc0ver to to checkra1n, you must follow [Removing unc0ver](removing-unc0ver) before proceeding.
{: .notice--success}

1. Open checkra1n on your computer
1. Plug your iOS device into your computer
1. Click `Start` -> `Next` on checkra1n
  - Your device will be put into recovery mode automatically
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - If you have an iPhone X, follow [these instructions](troubleshooting#iphonex_dfu) to enter DFU mode, as the instructions in the checkra1n application are incorrect
  - Follow the instructions until your device reboots to a black screen
1. checkra1n will now be automatically installed

Your iOS device should reboot. There should now be a checkra1n application on your home scren.

## Running checkra1n.

1. Open the checkra1n application on your iOS device
1. Press "Cydia" under the `Install` section
  - This installs the Cydia [package manager](faq#package-manager)
  - This may take a few seconds

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Cydia](using-cydia)
{: .notice--info}
