---
title: Installing checkra1n
permalink: /installing-checkra1n
redirect_from:
  - /installing-checkrain
  - /checkra1n
  - /checkrain
  - /cr
excerpt: Guide to installing Checkra1n
---
<link rel="shortcut icon" type="image/png" href="/assets/images/jb/checkra1n.png">

{% include toc title="Table of Contents" %}

You are currently not running a macOS or Linux device and checkra1n will not work on your system. You can use [bootra1n](/using-bootra1n) instead.
{: .notice--danger #hide_os #hide_mobile }

<script src="{{ '/assets/js/hide.js' | absolute_url }}"></script>

On iOS 14.0 - 14.2, checkra1n is only compatible with A9(X) and A10(X) devices for the moment. A11 support will be added a future date.
{: .notice--info}

checkra1n is a [semi-tethered jailbreak](/types-of-jailbreak#semi-tethered-jailbreaks){:target="_blank"}, meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more.
{: .notice--textbox}

checkra1n is capable of jailbreaking millions of iOS device on firmwares 12.0 and above. It's currently only compatible with macOS and Linux. A Windows release is planned to release in the future.

Once the exploit is installed, you will have the choice of installing a [package manager](faq#package-manager). For this we will be using Cydia. You may already be familiar with Cydia, as it has been the default package manager for over a decade.

If you are using Windows, proceed to [Using bootra1n](/using-bootra1n).
{: .notice--primary #hide_os }

## Downloads

- The latest version of [checkra1n](https://checkra.in)

![]({{ "/assets/images/checkra1n.png" | absolute_url }})

If you're migrating from unc0ver to checkra1n, you must follow [Removing unc0ver](removing-unc0ver) before proceeding.
{: .notice--textbox}

## Installing checkra1n (macOS)

1. Open checkra1n on your computer
1. Plug your iOS device into your computer
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

If you've used Cydia before, continue to [Blocking Jailbreak Detection](blocking-jailbreak-detection)
{: .notice--textbox}
