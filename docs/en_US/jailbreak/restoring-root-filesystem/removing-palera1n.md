---
lang: en_US
title: Removing palera1n
description: Guide to removing palera1n
permalink: /removing-palera1n
redirect_from: /removing-palerain
---

If you want to remove your jailbreak, and untether your device again, you can use the below commands on a PC/Mac while your device is connected in DFU. To remove the jailbreak, you **do not have to restore**.

::: warning

If you are on Linux, you will have to do another step first. Open up a terminal and run these commands:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Then, open a second terminal, and do the following steps with the other terminal window.

:::

1. Clone the repo with `git clone -b tweaks --recursive https://github.com/palera1n/palera1n && cd palera1n`
    - If you've already cloned the repo, just run `cd palera1n`
2. Run `./palera1n.sh --restorerootfs`
    - If you're having an issue, add `--debug` to the end and use those logs to troubleshoot

If you're having trouble, you can run `irecovery -n`.

Your device should boot into iOS, and you can use the phone as normal.
