---
title: "Troubleshooting"
sidebar: false
---

### Required Reading

If you encounter issues, please look for the section relevant to you and follow the instructions.

If you still cannot solve your issue and need to reach out for help, please come for help prepared with a detailed description of your problem and what you've tried.

## A browser based exploit is not working

Browser based exploits (such as the WebKit exploit used for HENkaku) can be unstable and crash frequently, but they can sometimes be fixed by doing the following steps:

1. Ensure your device has a stable network connection
1. Launch the browser, then open the browser settings
1. Scroll to the bottom and click "Delete Cookies" and "Clear Search History"
1. Try the exploit again
    + If it still doesn't work, try to reboot, wait 5 minute, and open the browser

## Removing an PSN account without formatting your device

1. Go to your [PSN Account Management Page](https://account.sonyentertainmentnetwork.com/home/index!display.action)
1. Under the devices section, choose "PlayStation Systems"
1. Select your console
1. Select "Deactivate"

## Black screen on boot

1. Hold L on boot to disable TaiHEN plugin loading
1. If your device boots, try editing `ux0:tai/config.txt` and remove any plugins you may have recently added
1. If these instructions do not work, your device may be bricked
    + In unlikely event of this happening, please follow [this tutorial](https://samilops2.gitbook.io/vita-troubleshooting-guide/serious-problems/bootloop)
