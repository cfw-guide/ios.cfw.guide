## Downloads (Linux)

- The latest release of [checkra1n](https://checkra.in)

![]({{ "/assets/images/checkra1n.png" | absolute_url }})

## Installing checkra1n

1. Run the `checkra1n` binary in the terminal using `./checkra1n`
  - You may need to run `sudo chmod a+x ./checkra1n` if the binary doesn't run
  - If you're on A11, you will need to enable `Skip A11 BPR Check` once it runs
1. Click `Start` and follow all onscreen prompts
1. You will now be presented with instructions in how to reboot your device into [DFU mode](faq#dfu_mode), click `Start` to begin
  - Follow the instructions until your device shows a black screen
1. After this, checkra1n should automatically install

Your iOS device should now reboot.

To install Odysseyra1n, <u>do not</u> open the checkra1n app and install Cydia. Instead, follow the following instructions to install Sileo.

## The Odysseyra1n script

1. Open the terminal app on your computer
1. Ensure that your computer is trusted by your device
1. Install "iproxy" by pasting and executing the following command:
  - Ubuntu/Debian: `sudo apt install libusbmuxd-tools`
1. Install the Odysseyra1n script by pasting and executing the following command:

    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"`

{% include_relative include/end-of-page.md %}
