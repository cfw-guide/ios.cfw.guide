---
title: Installing checkra1n
permalink: /installing-checkra1n
---

{% include toc title="Table of Contents" %}

Currently, checkra1n is only compatible with MacOS.
{: .notice--info}

If you have a device that was released after iOS 12 was released, such as an iPhone XS, you will not be able to use checkra1n.
{: .notice--danger}

checkra1n is capable of jailbreaking nearly every iOS device on firmwares 12.3 and above.

Note that the checkra1n jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Every time you reboot, you must have a computer with you to re-apply the exploit. This is different to the majority of iOS exploits in the recent years where you only had to run an application to re-apply the exploit.

Once the exploit is installed, you will have the choice of installing a [package manager](faq#package-manager){:target="_blank"}. You may already be familiar with Cydia, as it was the default package manager for jailbreaking for 10 years. As it's more user friendly, however, we recommend to install the "Sileo" package manager in the guide.

You will be able to choose your package manager when you install checkra1n. If you don't know what this means, ignore this for now.
{: .notice--info}

## Downloads

- The latest version of [checkra1n]()

## Installing checkra1n

1. Open checkra1n on your computer
1. Plug your iOS device into your computer
1. Click `Start` -> `Next` on checkra1n
  - You will now be presented with instructions in how to reboot your device into DFU mode
  - Follow the instructions until your device reboots to a black screen
1. After you reach the black screen, click `Start`
1. Once it's finished, click `Done`

Your iOS device should reboot. There should now be a checkra1n application on your home scren.

## Running checkra1n.

1. Open the checkra1n application on your iOS device
1. Press "Sileo" under the `Install` section
  - This installs the Sileo [package manager](faq#package-manager){:target="_blank"}
  - This may take a few seconds

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](faq#tweaks){:target="_blank"}, themes and more.

You don't have to use Sileo! If you're experienced with jailbreaking, we encourage you make your own choice.
{: .notice--success}

Continue to [Using Sileo](using-sileo)
{: .notice--info}
