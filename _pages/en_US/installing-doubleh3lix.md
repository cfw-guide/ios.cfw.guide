---
title: Installing doubleh3lix
---

{% include toc title="Table of Contents" %}

The doubleh3lix jailbreak tool for iOS devices allows is capable of jailbreaking every 64bit device with a headphone jack on firmware version 10.0 up to 10.3.3.

Note that the doubleh3lix jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the doubleh3lix jailbreak application to your device every 7 days from your computer.

We will use the Cydia Impactor tool to install the doubleh3lix jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [doubleh3lix](https://doubleh3lix.tihmstar.net/ipa/doubleH3lix-RC8.ipa)
- The latest version of [Cydia Impactor](http://www.cydiaimpactor.com/){:target="_blank"}

![]({{ "/assets/images/impactor.png" | absolute_url }})
{: .notice--primary}

## Installing the application

1. Open Cydia Impactor
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the doubleh3lix `.ipa` file into Cydia Impactor
1. Enter in your Apple ID
1. Go to [appleid.apple.com/account/manage](https://appleid.apple.com/account/manage){:target="_blank"} and generate an App-Specific Password
1. Enter in your App-Specific Password
  - This information is sent to Apple only

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The doubleh3lix application will be installed to your home screen.
{: .notice--success}
