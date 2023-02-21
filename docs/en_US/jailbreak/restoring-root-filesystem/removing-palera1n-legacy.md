---
lang: en_US
title: Removing palera1n (Legacy)
description: Guide to removing palera1n using the legacy version of palera1n
permalink: /removing-palera1n-legacy
redirect_from: /removing-palerain-legacy
---

If you want to remove palera1n, you can use the below commands on a PC/Mac while your device is connected in DFU. To remove the jailbreak, you **do not have to restore**.

::: warning

If you are on Linux, you will have to do another step first. Open up a terminal and run these commands:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Then, open a second terminal, and do the following steps with the other terminal window.

:::

1. Clone the repo with `git clone --recursive --depth=1 --shallow-submodules https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
2. Run `./palera1n.sh --restorerootfs <iOS version you're on> --tweaks`
    - If you're using Linux, add `sudo` to the front of the command
    - If you're using semi-tethered palera1n, add the `--semi-tethered` flag to the end of the command
    - If you're having an issue, add `--debug` to the end and use those logs to troubleshoot

Your device should boot into iOS, and you can use the device as normal.
