## Installing checkra1n (macOS)

1. Open checkra1n on your computer
1. Plug your iOS device into your computer
1. Click `Start` -> `Next` on checkra1n
  - You may need to enable `enable untested versions` if you are on iOS 14.4 - 14.4.1 before being able to follow this step
  - Your device will be put into recovery mode automatically
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - If you have an iPhone or iPad without a Home Button, follow [these instructions](troubleshooting#iphonex_dfu) to enter DFU mode, as the instructions in the checkra1n application are incorrect
  - Follow the instructions until your device shows a black screen
1. After this, checkra1n should automatically install

Your iOS device should reboot. Do not open the checkra1n app until you have ran the Odysseyra1n script.

## The Odysseyra1n script

1. Open the terminal app on your computer
1. Ensure that your computer is trusted by your device
1. Install "homebrew" by pasting and executing the following command:

    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
1. Install "iproxy" by pasting and executing the following command:

    `brew install libusbmuxd`
1. Install the Odysseyra1n script by pasting and executing the following command:

    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

{% include_relative include/end-of-page.md %}
