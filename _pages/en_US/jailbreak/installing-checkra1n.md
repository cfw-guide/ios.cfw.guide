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

On iOS 14.0 - 14.2, checkra1n is only fully supported on A9(X) and A10(X) devices for the moment. Full A11 support will be added a future date.
{: .notice--info}

checkra1n is a [semi-tethered jailbreak](/types-of-jailbreak#semi-tethered-jailbreaks){:target="_blank"}, meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more.
{: .notice--textbox}

checkra1n is capable of jailbreaking millions of iOS device on firmwares 12.0 and above. It's currently only compatible with macOS and Linux. A Windows release is planned to release in the future.

Once the exploit is installed, you will have to install a [package manager](faq#whats-a-package-manager). By default, checkra1n only supports the "Cydia" package manager, however this is outdated and slow.

Instead, we'll be using a the odysseyra1n script to install the "Sileo" package manager, which provides a more modern experience.

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

Your iOS device should reboot. Do not open the checkra1n app until you have ran the odysseyra1n script.

## Installing checkra1n (Linux)

1. Run the `checkra1n` binary in the terminal using `./checkra1n`
  - You may need to run `sudo chmod a+x ./checkra1n` if the binary doesn't run
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - If you have an iPhone or iPad without a Home Button, follow [these instructions](troubleshooting#iphonex_dfu) to enter DFU mode, as the instructions in the checkra1n application are incorrect
  - Follow the instructions until your device reboots to a black screen

Your iOS device should reboot. Do not open the checkra1n app until you have ran the odysseyra1n script.

## The odysseyra1n script

1. Open the terminal app on your computer
1. If you are on macOS, install "homebrew" by pasting and executing the following command:

    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
1. Install "iproxy" through the terminal
  - macOS: `brew install libusbmuxd`
  - Linux: `sudo apt install libusbmuxd-tools`
1. Paste and execute the following command:

    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install [tweaks](faq#tweaks), themes, packages and more.

Before you can start installing anything else, you first need to install a few necessary programs.

## Installing packages

1. Open the newly installed Sileo application
1. Go to the "Packages" tab
1. Tap "Upgrade All" if there are any updates
  - Do not install yet
1. Go to the "Search" tab
1. Search for the "libhooker" package
1. Tap the "Get" button
1. Tap on the "Queued" bar at the bottom of your screen
1. Tap "Confirm"
1. Reboot your device and re-jailbreak with checkra1n

Continue to [Using Sileo](using-sileo)
{: .notice--info}

If you've used Sileo before, continue to [Blocking Jailbreak Detection](blocking-jailbreak-detection)
{: .notice--textbox}
