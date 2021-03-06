---
title: Installing h3lix
permalink: /installing-h3lix
redirect_from:
  - /installing-helix
  - /helix
  - /h3lix
  - /h3
  - /he
excerpt: Guide to installing H3lix
sidebar:
  nav: sidebar
---

h3lix is capable of jailbreaking every 32bit iOS device on firmware version 10.0 up to 10.3.3.

Note that the h3lix jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the h3lix jailbreak application to your device every 7 days from your computer.

We will use the AltDeploy tool to install the h3lix jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [h3lix](https://h3lix.tihmstar.net/)
- The latest version of [AltDeploy](https://github.com/pixelomer/AltDeploy/releases)

![]({{ "/assets/images/altdeploy.png" | absolute_url }})
{: .notice--info}

## Installing the application

1. Open AltDeploy
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the h3lix `.ipa` file into AltDeploy
1. Enter in your Apple ID
1. Enter in your pasword
  - This information is sent to Apple only

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The h3lix application can now be opened from home screen.
{: .notice--primary}

## Running h3lix

1. Open the h3lix application from your home screen
1. Tap "Jailbreak"

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
{:.notice--danger}

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Cydia](using-cydia)
{: .notice--info}
