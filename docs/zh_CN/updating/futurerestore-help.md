---
lang: 简体中文
title: "FutureRestore 帮助"
description: 常见 FutureRestore 错误的解决方案
permalink: /futurerestore-help
redirect_from:
  - /frhelp
  - /futurerestorehelp
  - /FutureRestoreHelp
extra_contributors:
  - Tanbeer191
  - TheHacker894
---

## 帮助页

- 此页面旨在为使用 FutureRestore 恢复时遇到的错误提供解决方案。 如果本文方法不奏效，请加入 r/Jailbreak [Discord 服务器](https://discord.gg/9apvC4C3CC)并在 #futurerestorehelp 板块寻求帮助

## iBEC error (error code -8)
这是使用 FutureRestore 的常见错误，特别是如果你正在使用 Windows 计算机。 要解决这个问题：
1. 进入设备管理器中卸载所有 Apple 设备
    - 卸载时确保勾选 "卸载驱动"
1. 在控制面板中卸载所有来自 Apple 的软件，包括 iTunes 和Apple Mobile Device Support 等
1. 重新拔插设备
1. 在设备管理器中查看所有 Apple 设备并卸载它们与它们的驱动
1. 断开设备连接
1. 从 [apple.com](https://support.apple.com/kb/DL1816?locale=en_US) 下载并安装 iTunes `.exe`
1. 启动你的设备进入[恢复模式](https://www.howtogeek.com/396530/how-to-put-your-iphone-or-ipad-into-recovery-mode/)并连接至计算机
1. 在设备管理器中卸载 iBoot (Recovery) 设备和驱动
1. 再次运行 FutureRestore
1. 重新拔插设备
1. 再次运行 FutureRestore。 这个问题现在应该得到解决了

![示例](https://media.discordapp.net/attachments/825122925204078622/839186681202212904/unknown.png)

## Device ApNonce doesn't match APTicket nonce

这个错误意味着设备的随机值与 Blob 中的不相符，因此你可能没有成功固定随机值。 要解决这个问题，请参照 FutureRestore页面的 `固定随机值` <router-link to="/futurerestore">进行操作</router-link>

## SEP Firmware is not being signed

当你*手动指定* SEP 而不是直接使用*最新版本*时，就可能会出现这个问题。 要解决这个问题，你可以选择 `latest-sep` 参数或 `custom-latest`参数，或者同时选择 `custom-latest-buildid` 与 `custom-latest-beta`参数并根据[SEP/BB 兼容性表格](https://docs.google.com/spreadsheets/d/1Mb1UNm6g3yvdQD67M413GYSaJ4uoNhLgpkc7YKi3LBs/edit#gid=0)输入兼容的版本(你可以查看 [https://appledb.dev](appledb)找到版本的 buildid)。 你无需手动提供 SEP 或 BB

## Could not connect to device in recovery mode / Failed to place device in recovery mode

**注意：**如果错误提示类似，也请参照下面的步骤：

- 如果你的设备正处于恢复模式，你可以在此时重新运行 FutureRestore
- 如果你的设备未处于恢复模式，请手动进入恢复模式然后重新运行 FutureRestore

## Error: Unable to receive message from FDR...

要解决这个问题要么选择等待(可能要很久)，要么重新运行。 虽然已经诊断出了此错误的原因，但截至目前还没有对此问题的解决办法

## About to send NOR data... No data to read

如果收到此错误，你可能需要停止运行 FutureRestore 然后禁用 `no-rsep` 参数。 如果在恢复过程继续在此处卡住，无论是否启用了 `no-rsep`，你可能都无法进行恢复，因为截至目前尚未诊断出此错误的原因 
