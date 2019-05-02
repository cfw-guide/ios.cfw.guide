---
title: Installing Pangu
---

{% include toc title="Table of Contents" %}

The Pangu jailbreak tool is capable of jailbreaking every 64bit iOS device on firmware version 9.2 up to 9.3.3.

Note that the Pangu jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the Pangu jailbreak application to your device every 7 days from your computer.

We will use the Cydia Impactor tool to install the Pangu jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [Pangu](http://dl.pangu.25pp.com/jb/NvwaStone_1.1.ipa)
- The latest version of [Cydia Impactor](http://www.cydiaimpactor.com/){:target="_blank"}

![]({{ "/assets/images/impactor.png" | absolute_url }})

## Installing the application

1. Open Cydia Impactor
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the Pangu `.ipa` file into Cydia Impactor
1. Enter in your Apple ID
1. Go to [appleid.apple.com/account/manage](https://appleid.apple.com/account/manage){:target="_blank"} and generate an App-Specific Password
1. Enter in your App-Specific Password
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
