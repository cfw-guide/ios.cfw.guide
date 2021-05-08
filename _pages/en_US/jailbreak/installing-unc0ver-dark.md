---
title: Installing unc0ver dark
permalink: /installing-unc0ver-dark
redirect_from:
  - /installing-uncover-dark
  - /unc0ver-dark
  - /uncover-dark
  - /u0-dark
  - /uo-dark
  excerpt: Guide to installing unc0ver dark
sidebar:
  nav: sidebar
---

You may run into issues that cannot be easily resolved with this option, we recommend using [Electra](/installing-electra) or [Chimera](/installing-Chimera) depending on your iOS version.
{: .notice--danger}

unc0ver dark is a [semi-untethered jailbreak](/types-of-jailbreak#semi-untethered-jailbreaks){:target="_blank"}, meaning it requires a app to re-apply the exploit after a reboot. Click the link to learn more.
{: .notice--info}

unc0ver dark is capable of jailbreaking every iOS device on firmware versions 11.0 to 11.4.1 and non-A12 devices on 12.0 to 12.1.2

Due to how [semi-untethered jailbreaks](/types-of-jailbreak#semi-untethered-jailbreaks){:target="_blank"} work, the app will need to be [re-signed](resigning-apps) once every 7 days.

We will use the AltDeploy tool to install the unc0ver dark jailbreak application to your iOS device for use in the next step.

## Downloads

- The latest version of [unc0ver dark](https://dark.diatr.us/)
- The latest version of [AltDeploy](https://github.com/pixelomer/AltDeploy/releases)

![]({{ "/assets/images/altdeploy.png" | absolute_url }})
{: .notice--info}

## Installing the application

1. Open AltDeploy
1. Plug your iOS device into your computer
  - Make sure your computer is trusted and allowed to view the contents of your device
1. Drag and drop the unc0ver dark `.ipa` file into AltDeploy
1. Enter in your Apple ID
1. Enter in your password
  - This information is sent to Apple only

The app will now install to your iOS device.

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
  - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The unc0ver dark application can now be opened from home screen.
{: .notice--primary}

## Running unc0ver dark

1. Reboot your phone
  - This is not necessary but recommended
1. Open the unc0ver dark application from your home screen immediately afterwards. Tap "Done"
1. Tap "Jailbreak"
1. Reboot your phone when prompted
1. Open the unc0ver dark application from your home screen immediately after rebooting
1. Tap "Jailbreak"

If the app or your device crashes/restarts unexpectedly and the jailbreak isn't installed, simply try rebooting and running the exploit again until it does work.
{:.notice--info}

Continue to [Using Sileo](using-sileo)
{: .notice--info}

If you've used Sileo before, continue to [Blocking Jailbreak Detection](blocking-jailbreak-detection)
{: .notice--textbox}
