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

You are currently not running a macOS or Linux device and checkra1n will not work on your system. You can use [odysseyn1x](/using-odysseyn1x) instead.
{: .notice--danger #hide_os #hide_mobile }

<script src="{{ '/assets/js/hide.js' | absolute_url }}"></script>

On iOS 14.0 - 14.3, checkra1n is only fully supported on A9(X) and A10(X) devices for the moment. Full A11 support will be added a future date.
{: .notice--info}

{% include_relative include/semi-tethered.md %}

checkra1n is capable of jailbreaking millions of iOS device on firmwares 12.0 and above. It's currently only compatible with macOS and Linux. A Windows release is planned to release in the future.

{% include_relative include/package-manager.md %}

If you are using Windows, proceed to [Using odysseyn1x](/using-odysseyn1x).
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
  - Follow the instructions until your device shows a black screen
1. After this, checkra1n should automatically install

Your iOS device should reboot. Do not open the checkra1n app until you have ran the odysseyra1n script.

## Installing checkra1n (Linux)

1. Run the `checkra1n` binary in the terminal using `./checkra1n`
  - You may need to run `sudo chmod a+x ./checkra1n` if the binary doesn't run
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - If you have an iPhone or iPad without a Home Button, follow [these instructions](troubleshooting#iphonex_dfu) to enter DFU mode, as the instructions in the checkra1n application are incorrect
  - Follow the instructions until your device shows a black screen
1. After this, checkra1n should automatically install

Your iOS device should reboot. Do not open the checkra1n app until you have ran the odysseyra1n script.

## The odysseyra1n script

1. Open the terminal app on your computer
1. Ensure that your computer is trusted by your device
1. If you are on macOS, install "homebrew" by pasting and executing the following command:

    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
1. Install "iproxy" through the terminal
  - macOS: `brew install libusbmuxd`
  - Linux: `sudo apt install libusbmuxd-tools`
1. Paste and execute the following command:

    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

{% include_relative include/end-of-page.md %}
