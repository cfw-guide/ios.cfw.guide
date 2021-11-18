---
title: "Updating Firmware (3.60)"
sidebar: false
---

### Required Reading

The HENkaku exploit is only compatible with the firmware version 3.60. As a result, lower firmware versions must update using a custom update server in order to use that exploit.

Note that a custom update server can only update your device, not downgrade it. If you are on a firmware version higher than 3.60, you should return to [Get Started](get-started).

### What you need

* An internet connection on your PS Vita (TV)

### Instructions

#### Section I: Prep Work

1. Launch the Settings application
1. Navigate to `Network` -> `Wi-Fi Settings`
    + Connect to a Wi-Fi network if you have not already done so
1. Select your current connection
    + This is signified by a green dot next to the network
1. Select "Advanced Settings"
1. Set "DNS Settings" to "Manual"
1. Set "Primary DNS" to `212.47.229.76`
1. Leave "Secondary DNS" blank
1. Ensure "Proxy Server" is set to "Do Not Use"
1. Return to the main Settings menu

#### Section II: Updating to 3.60

1. Navigate to `System Update` -> `Update Using Wi-Fi`
1. Ensure the update message "3.60 (変革 Compatible)" is displayed
    + If it displays any other message, stop and figure out what went wrong
1. Follow the prompts to update your device to 3.60
    + When the process has completed, your device will reboot automatically

::: tip
Continue to [Installing HENkaku](installing-henkaku)
:::