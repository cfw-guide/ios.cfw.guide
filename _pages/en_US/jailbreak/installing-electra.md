---
title: Installing Electra
permalink: /installing-electra
redirect_from:
  - /electra
  - /el
excerpt: Guide to installing Electra
---

{% include toc title="Table of Contents" %}

Electra is a [semi-untethered jailbreak](/types-of-jailbreak#semi-untethered-jailbreaks){:target="_blank"}, meaning it requires a app to re-apply the exploit after a reboot. Click the link to learn more.
{:.notice--info}

If you are already jailbroken with unc0ver, make sure to properly [remove it](removing-u0)
{:.notice--danger}

Electra is capable of jailbreaking every iOS device on firmware version 11.0 up to 11.4.1

Note that the Electra jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the Electra jailbreak application to your device every 7 days from your computer.

We will use the AltDeploy tool to install the Electra jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [Electra](https://coolstar.org/electra/){:target="_self"}
- The latest version of [AltDeploy](https://github.com/pixelomer/AltDeploy/releases)

![]({{ "/assets/images/altdeploy.png" | absolute_url }})
{: .notice--info}

## Installing the application

1. Open AltDeploy
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Electra `.ipa` file into AltDeploy
1. Enter in your Apple ID
1. Enter in your password
  - This information is sent to Apple only

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The Electra application can now be opened from home screen.
{: .notice--primary}

## Running Electra

1. Open the Electra application from your home screen
1. Tap "Jailbreak"

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
{:.notice--danger}

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Sileo](using-sileo)
{: .notice--info}
