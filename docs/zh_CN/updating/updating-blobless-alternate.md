---
lang: zh_CN
title: 升级 (无需 Blob) (备选方法)
description: 使用延迟 OTA 描述文件来升级到未被签署固件版本的指南
permalink: /updating-blobless-alternate
extra_contributors:
  - DhinakG
---

## 必读事项

iOS 和 iPadOS 设备一般只能升级到由 Apple “签名”的固件版本。 这通常意味着你只能升级到最新的固件版本。 这对越狱是不利的，因为大多数越狱都需要利用系统漏洞，而它们已经在最新的固件版本中得到了修复

但幸运的是，我们可以使用“描述文件”来延迟升级系统。 这个特性最初是为那些需要额外时间来更新设备的组织所设计的，但我们可以利用这个特性来更新到一个未被签署的固件版本

但这有时间限制。 你只能在各自的过期日期之前升级到以下固件版本：

- **17.1.1** - February 28th, 2024
- **16.7.2** - March 9th, 2024
- **17.1.2** - March 9th, 2024
- **16.7.3** - March 18th, 2024
- **17.2 (For iPhones)** - March 18th, 2024
- **15.8** - April 21st, 2024
- **16.7.4** - April 21st, 2024
- **17.2 (For iPads)** - April 21st, 2024
- **17.2.1** - April 21st, 2024

具体时间均为 `UTC 00:00`。 有关更多信息，请查看[dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html)

::: tip

你必须先越狱。 请查看 <router-link to="/updating-blobless-nonjailbroken">升级 (无需 Blob) (未越狱)</router-link> 或 <router-link to="/updating-blobless-advanced">升级 (无需 Blob) (高级)</router-link> ，如果你无法越狱

:::

::: tip

如果你之前尝试过本方法，请先移除所有相关描述文件

:::

## 安装 Dahlia

1. 越狱你的设备
1. 打开你的软件包管理器添加以下源：
    - [https://dhinakg.github.io/repo/](https://dhinakg.github.io/repo/)
    - [https://repo.alexia.lol](https://repo.alexia.lol)
1. 搜索并安装 `Dahlia`
1. 安装完成后点击`重启设备`然后重新越狱

## 准备升级

1. 打开设置应用，向下滚动找到 `Dahlia` 然后打开它
1. 打开 `Toggle Supervision`，然后点击 Yes 重启用户界面
   - 如果你的设备已经处于监管状态，你可以跳过此步骤
1. 点击 `Download Profiles` 然后点击 "Normal"
1. 点击你想要前往的系统版本旁的 `Download Profile`
1. 提示时点击"允许"
1. 退出然后转到 `通用` -> `描述文件与设备管理` -> `OTA Delay - [Days] Days`
1. 点击右上角的“安装”并在提示时输入密码
1. 再次点击"安装"确认
1. 返回设置中的 `Dahlia`
1. 确保 `Ready to Update` 中显示 "Yes"
   - 如果没有，点击 "Ready to Update" 旁的 "i" 查看问题出在哪里

## 恢复rootFS

1. 打开设置应用
1. 点击 `通用` -> `软件更新`
1. 确保更新显示的是想要更新的版本
    - 现在**不要**更新，我们等会再来
1. 打开你的越狱工具恢复 rootFS
    - 如果你需要有关此操作的具体教程，请查看 <router-link to="/restoring-rootfs">恢复rootFS</router-link> 并选择你正在使用的越狱工具
1. 重启设备

## 升级系统

1. 将设备连接电源并通过 WiFi 连接到互联网
1. 打开设置应用
1. 点击 `通用` -> `软件更新`
1. 确保更新显示的是想要更新的版本
1. 下载并安装更新
1. 升级完成后，移除有关的描述文件

::: tip

因为之前启用了监管，所以你的设备在升级后会仍然处于监管。 处于监管状态意味着：

- 在设置中会显示你的设备正在受监督管理
- 激活锁会被自动禁用，这可能会使你的设备容易被不法分子访问 (查找依然可以用)
- 如果你的设备启用了移动设备管理 (如学校或工作单位)，那么你的组织将能够在你的设备上静默安装和卸载应用

请注意对于大多数用户来说，设备受监管状态不会成为问题

你可以通过重置设备并还原之前的备份来移除监管状态。 具体可以通过在设置应用“抹除所有内容和设置”，然后在从 iCloud 备份中恢复来移除监管

:::

::: danger

如果你恢复的备份是来自 **iTunes/Finder**，那么你可能会遇到一些问题比如白苹果

:::

::: warning

如果从 **iCloud** 还原的是在越狱状态下创建的备份，那么你可能会遇到一些程序错误检测到你仍处于越狱状态

:::

::: tip

升级成功后，查看 <router-link to="/get-started">开始</router-link> 来越狱设备。

:::

感谢 [dhinakg](https://github.com/dhinakg/) 发现此方法
