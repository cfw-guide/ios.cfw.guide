---
title: Installing Rootless
---

{% include toc title="Table of Contents" %}

This guide is for **ADVANCED USERS ONLY**. This will require use of Xcode and external tools to aquire tweaks. **Use at your risk.**
{:.notice--danger}

You must own a computer running MacOS to use this guide.
{:.notice--info}

The rootlessJB jailbreak tool for iOS devices allows is capable of jailbreaking every device on firmware version 12.0 up to 12.1.2.

Note that the rootless jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the rootless jailbreak application to your device every 7 days from your computer.

We will use Xcode to install the rootless jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [rootlessJB](https://github.com/jakeajames/rootlessJB3)
- The latest version of [Xcode](https://developer.apple.com/xcode/){:target="_blank"}

## Installing the application

![]({{ "/assets/images/rootlessjb.png" | absolute_url }})

1. Open Xcode
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Open up the macOS terminal app.
1. Enter `git clone https://github.com/jakeajames/rootlessJB3.git`
   - This wil download the latest version of rootlessJB into your home folder
1. Open the folder
1. Open the `.xcodeproj` file
1. Click on the folder icon on on the left below the exit circle
1. Click on the Xcode project icon
1. Tick the auto manage code signing box
1. Change "Team" to your personal team
1. Change the build identifier to something that you can generate a certificate for.
  - `io.shady.rootlessjb` for example
1. Click "Build"

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The rootlessJB application will be installed to your home screen.
{: .notice--primary}

## Running rootlessJB

1. Open the rootlessJB application from your home screen
1. Tap "Jailbreak!"

If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
{:.notice--danger}
