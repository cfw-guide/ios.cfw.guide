---
title: Installing Pangu
permalink: /installing-pangu933
redirect_from:
  - /pangu933
  - /pangu
  - /pg
excerpt: Guide to installing Pangu933
---

{% include toc title="Table of Contents" %}

Pangu is capable of jailbreaking every 64bit iOS device on firmware version 9.2 up to 9.3.3.

Note that the Pangu jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the Pangu jailbreak application to your device every 7 days from your computer.

We will use the AltDeploy tool to install the Pangu jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [Pangu](https://web.archive.org/web/20170214021020/http://dl.pangu.25pp.com/jb/NvwaStone_1.1.ipa) _(archive.og)_
- The latest version of [AltDeploy](https://github.com/pixelomer/AltDeploy/releases)

![]({{ "/assets/images/altdeploy.png" | absolute_url }})
{: .notice--info}

## Installing the application

1. Open AltDeploy
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Pangu `.ipa` file into AltDeploy
1. Enter in your Apple ID
1. Enter in your password
  - This information is sent to Apple only

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Pangu application can now be opened from home screen.
{: .notice--primary}

## Running Pangu

1. Open the Pangu application from your home screen
  - Allow notifications if prompted
1. Tap "Start"
1. Lock the device
1. You should get a notification telling you that the jailbreak has succeeded

On the first installation, the jailbreak may take some time to complete. This is normal.
{:.notice--info}

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
{:.notice--danger}

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Cydia](using-cydia)
{: .notice--info}
