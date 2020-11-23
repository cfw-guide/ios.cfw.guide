---
title: Installing Phœnix
permalink: /installing-phoenix
redirect_from:
  - /phoenix
  - /pn
excerpt: Guide to installing Phoenix
---

{% include toc title="Table of Contents" %}

Phœnix is capable of jailbreaking 32bit iOS devices on firmware version 9.3.5.

Note that the Phœnix jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the Phœnix jailbreak application to your device every 7 days from your computer.

We will use the AltDeploy tool to install the Phœnix jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [Phœnix](https://phoenixpwn.com/)
- The latest version of [AltDeploy](https://github.com/pixelomer/AltDeploy/releases)

![]({{ "/assets/images/altdeploy.png" | absolute_url }})
{: .notice--info}

## Installing the application

1. Open AltDeploy
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Phœnix `.ipa` file into AltDeploy
1. Enter in your Apple ID
1. Enter in your password
  - This information is sent to Apple only

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Phœnix application can now be opened from home screen.
{: .notice--primary}

## Running Phœnix

1. Open the Phœnix application from your home screen
1. Tap `Prepare for Jailbreak` -> `Accept` -> `Dismiss` -> `Proceed with Jailbreak` -> `Begin Installation` -> `Use Provided Offsets`

When jailbreaking for a second time, an option called "Kickstart Jailbreak" will replace "Prepare for Jailbreak". Tap that instead.
{:.notice--info}

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
{:.notice--danger}

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Cydia](using-cydia)
{: .notice--info}
