---
lang: 简体中文
title: 移除 palera1n (旧)
description: 使用旧版本的 palera1n 移除palera1n的教程
permalink: /removing-palera1n-legacy
redirect_from: /removing-palerain-legacy
---

如果你想要移除 palera1n，你可以与进入DFU模式设备成功连接的 PC/Mac 上使用以下命令。 要移除越狱，您**不一定需要还原设备**

::: warning


如果你使用的是 Linux ，你必须先执行下面的步骤。 打开终端并运行这些命令：

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

然后打开另一个终端窗口，并与其他终端窗口一样执行以下步骤

:::


1. 使用 `git clone -b legacy --recursive --depth=1 --shallow-submodules https://github.com/palera1n/palera1n && cd palera1n` 来克隆仓库
    - 如果你已经克隆了该仓库，那么只需要运行 `cd palera1n`
2. 运行 `./palera1n.sh --restorerootfs <iOS version you're on> --tweaks`
    - 如果你正在使用Linux，请将 `sudo` 添加到命令前
    - 如果你在使用半不完美(semi-tethered) 的 palera1n，请在命令末尾添加`--semi-tethered`
    - 如果遇到了问题，请将 `--debug` 添加到命令末尾，并参照输出的日志解决问题

你的设备应该正常启动进了系统，你可以正常使用设备。
