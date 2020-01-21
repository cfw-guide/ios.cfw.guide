---
title: Installing Chimera
permalink: /installing-chimera
---

{% include toc title="Table of Contents" %}

If you have a newer device with an A12 processor, such as the iPhone XS, you can only use Chimera on firmware versions 12.0 to 12.1.2.
{: .notice--danger}

Chimera is capable of jailbreaking nearly every iOS device on firmware version 12.0 up to 12.4, excluding 12.3 and 12.3.1.

Note that the Chimera jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the Chimera jailbreak application to your device every 7 days from your computer.

We will use the Cydia Impactor tool to install the Chimera jailbreak application to your iOS device for use in the next step.

This jailbreak automatically installs the Sileo [package manager](faq#package-manager) upon installation, and not Cydia.
{: .notice--info}

## Downloads

- The latest version of [Chimera](https://chimera.sh/)
  - Select the left-most download (Not the "No PC" or ChimeraTV download)
- The latest version of [Cydia Impactor](http://www.cydiaimpactor.com/)

![]({{ "/assets/images/impactor.png" | absolute_url }})

## Installing the application

1. Open Cydia Impactor
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Chimera `.ipa` file into Cydia Impactor
1. Enter in your Apple ID
1. Go to [appleid.apple.com/account/manage](https://appleid.apple.com/account/manage) and generate an App-Specific Password
1. Enter in your App-Specific Password
  - This information is sent to Apple only

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Chimera application can now be opened from home screen.
{: .notice--primary}

## Running Chimera

1. Reboot your phone
  - This is not necessary but recommended
1. Open the Chimera application from your home screen immediately afterwards
1. Tap "Jailbreak"
1. Reboot your phone again when prompted
  - This time, it is necessary
1. Once again, open the Chimera application from your home screen immediately after rebooting
1. Tap "Jailbreak" again

If that app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.
{:.notice--danger}

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Sileo](using-sileo)
{: .notice--info}
