---
title: Installing yalu102
permalink: /installing-yalu102
---

{% include toc title="Table of Contents" %}

The yalu102 jailbreak tool is capable of jailbreaking every 64bit iOS device with a headphone jack on firmware version 10.0 up to 10.2.

Note that the yalu102 jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the yalu102 jailbreak application to your device every 7 days from your computer.

We will use the Cydia Impactor tool to install the yalu102 jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [yalu102](https://yalu.qwertyoruiop.com/yalu102_beta7.ipa)
- The latest version of [Cydia Impactor](http://www.cydiaimpactor.com/){:target="_blank"}

![]({{ "/assets/images/impactor.png" | absolute_url }})

## Installing the application

1. Open Cydia Impactor
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the yalu102 `.ipa` file into Cydia Impactor
1. Enter in your Apple ID and Password
  - This information is sent to Apple only
1. If you use 2FA, go to [appleid.apple.com/account/manage](https://appleid.apple.com/account/manage){:target="_blank"} and generate an App-Specific Password to use in Cydia Impactor instead of your regular password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The yalu102 application can now be opened from home screen.
{: .notice--primary}
