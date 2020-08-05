---
title: Installing checkra1n
permalink: /installing-checkra1n
excerpt: Guide to installing Checkra1n
---
<link rel="shortcut icon" type="image/png" href="/assets/images/jb/checkra1n.png">

{% include toc title="Table of Contents" %}

If you have a newer device, such as an iPhone XS or newer, you will not be able to use checkra1n. Check the [Device Selection](device-selection) page to check if your device is compatible.
{: .notice--primary}

checkra1n is currently only compatible with macOS & Linux. You are currently not running a macOS or Linux device and checkra1n will not work on your system. You can use [bootra1n](/using-bootra1n) instead.
{: .notice--danger #hide_os}

<script src="{{ '/assets/js/hide.js' | absolute_url }}"></script>

checkra1n is a [semi-tethered jailbreak](/types-of-jailbreak#semi-tethered-jailbreaks){:target="_blank"}, meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more.
{:.notice--info}

checkra1n is capable of jailbreaking nearly every iOS device on firmwares 12.3 and above. It's currently only compatible with macOS and Linux but a Windows release is coming soon.

Once the exploit is installed, you will have the choice of installing a [package manager](faq#package-manager). For this we will be using Cydia. You may already be familiar with Cydia, as it has been the default package manager for over a decade.

## Downloads

- The latest version of [checkra1n](https://checkra.in)

![]({{ "/assets/images/checkra1n.png" | absolute_url }})

If you're migrating from unc0ver to to checkra1n, you must follow [Removing unc0ver](removing-unc0ver) before proceeding.
{: .notice--textbox}

## Installing checkra1n (macOS)
  
1. Open checkra1n on your computer
1. Plug your iOS device into your computer
  - If your device is running iOS 13.5.1 or above, navigate to `Options` and check `Allow untested iOS/iPadOS/tvOS versions`
1. Click `Start` -> `Next` on checkra1n
  - Your device will be put into recovery mode automatically
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - If you have an iPhone or iPad without a Home Button, follow [these instructions](troubleshooting#iphonex_dfu) to enter DFU mode, as the instructions in the checkra1n application are incorrect
  - Follow the instructions until your device reboots to a black screen
1. checkra1n will now be automatically installed

Your iOS device should reboot. There should now be a checkra1n application on your home screen.
  
## Installing checkra1n (Linux)
  
1. Run the `checkra1n` binary in the terminal using `./checkra1n`
  - You may need to run `sudo chmod a+x ./checkra1n` if the binary doesn't run
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - If you have an iPhone or iPad without a Home Button, follow [these instructions](troubleshooting#iphonex_dfu) to enter DFU mode, as the instructions in the checkra1n application are incorrect
  - Follow the instructions until your device reboots to a black screen

## Using checkra1n

1. Open the checkra1n application on your iOS device
1. Press "Cydia" under the `Install` section
  - This installs the Cydia [package manager](faq#package-manager)
  - This may take a few seconds

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](faq#tweaks), themes and more.

Continue to [Using Cydia](using-cydia)
{: .notice--info}
