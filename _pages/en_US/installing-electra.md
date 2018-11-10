---
title: Installing Electra
---

{% include toc title="Table of Contents" %}

The Electra jailbreak tool for iOS devices allows is capable of jailbreaking every device with firmware version 11.0 up to 11.3.1.

Note that the Electra jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the Electra jailbreak application to your device every 7 days from your computer.

We will use the Cydia Impactor tool to install the Electra jailbreak application to your iOS device for use in the next step.

## Downloads
- The latest version of [Electra (11.0-11.1.2)](https://github.com/coolstar/electra-ipas/raw/master/Electra%201.0.4.ipa)
- The latest version of [Electra (11.2.x-11.3.x)](https://raw.githubusercontent.com/coolstar/electra-ipas/master/Electra1131-1.0.3-vfs.ipa)
- The latest version of [Cydia Impactor](http://www.cydiaimpactor.com/){:target="_blank"}

## Installing the application

1. Open Cydia Impactor
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Electra `.ipa` file into Cydia Impactor
1. Enter in your Apple ID and Password
  - This information is sent to Apple only
1. If you use 2FA, go to [appleid.apple.com/account/manage](https://appleid.apple.com/account/manage){:target="_blank"} and generate an App-Specific Password to use in Cydia Impactor instead of your regular password

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Electra application will be installed to your home screen.
{: .notice--success}
