---
lang: en_US
title: Removing palera1n
description: Guide to removing palera1n
permalink: /removing-palera1n
redirect_from: /removing-palerain
---

If you want to remove palera1n, you can use the below commands on a PC/Mac while your device is connected. To remove the jailbreak, you **do not have to restore**.

:::::: tabs

:::: tab name="macOS/Linux" :default="true"

::: warning

If you are on Linux, you will have to do another step first. Open up a terminal and run these commands:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Then, open a second terminal, and do the following steps with the other terminal window.

:::

::: tip

This guide assumes you are running palera1n on a computer which already has palera1n installed. You can use the same computer you used before to install palera1n onto your device. If you are using a different computer which does not yet have palera1n, follow the <router-link to="/installing-palera1n">Installing palera1n</router-link> guide to download palera1n and come back to this page once you reach the "Running palera1n" section (but do not follow the steps in the "Running palera1n" section).

:::

::: tip

If you're using Linux, add `sudo` to the front of the next command.

:::

1. Run `palera1n --force-revert`
   - If you're using rootful palera1n, add the `-f` flag to the end of the command

Your device should boot into iOS, and you can use the device as normal.

::::

:::: tab name="palen1x"

::: tip

If you no longer have your palen1x USB drive, you can prepare another one by following the steps on <router-link to="/using-palen1x">Using palen1x</router-link> up to but not including the "Running palera1n" section.

:::
1. Once you have loaded palen1x, select `palera1n`
1. If you were using palera1n rootless, select `Switch`, then select `Rootless`.
1. Select `Options`, enable `Restore RootFS` with the space key, and then exit the options menu with the enter key. 
1. Select `Start`

Your device should boot into iOS, and you can use the device as normal.

::::

::::::
