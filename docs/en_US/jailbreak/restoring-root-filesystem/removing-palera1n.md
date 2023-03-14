---
lang: en_US
title: Removing palera1n
description: Guide to removing palera1n
permalink: /removing-palera1n
redirect_from: /removing-palerain
---

If you want to remove palera1n, you can use the below commands on a PC/Mac while your device is connected. To remove the jailbreak, you **do not have to restore**.

::: warning

If you are on Linux, you will have to do another step first. Open up a terminal and run these commands:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Then, open a second terminal, and do the following steps with the other terminal window.

:::

1. `cd` into the directory where you downloaded palera1n

::: tip

If you're using Linux, add `sudo` to the front of the next command.

:::
2. Run `./palera1n --force-revert`
   - If you're using rootful palera1n, add the `-f` flag to the end of the command

Your device should boot into iOS, and you can use the device as normal.
