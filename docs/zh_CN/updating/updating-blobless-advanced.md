---
lang: zh_CN
title: 升级 (无需 Blob) (高级)
description: 无需 Blob 升级到未被签署固件版本的指南
permalink: /updating-blobless-advanced
extra_contributors:
  - ssalagginkool
---

## 必读事项

iOS 和 iPadOS 设备一般只能升级到由 Apple “签名”的固件版本。 这通常意味着你只能升级到最新的固件版本。 这对越狱是不利的，因为大多数越狱都需要利用系统漏洞，而它们已经在最新的固件版本中得到了修复

但幸运的是，我们可以使用“描述文件”来延迟升级系统。 这个特性最初是为那些需要额外时间来更新设备的组织所设计的，但我们可以利用这个特性来更新到一个未被签署的固件版本

但这有时间限制。 你只能在各自的过期日期之前升级到以下固件版本：

- **17.1.1** - 2024 年 2 月 28 日
- **16.7.2** - 2024 年 3 月 9日
- **17.1.2** - 2024 年 3 月 9日
- **16.7.3** - March 18th, 2024
- **17.2 (For iPhones)** - March 18th, 2024
- **15.8** - April 21st, 2024
- **16.7.4** - April 21st, 2024
- **17.2 (For iPads)** - April 21st, 2024
- **17.2.1** - April 21st, 2024

具体时间均为 `UTC 00:00`。 有关更多信息，请查看[dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html)

因为你目前没有越狱（或因任何原因选择不越狱），所以你需要使用更复杂的办法，涉及抹掉所有内容和设置，或还原修改过的备份，以便进行更新

::: tip

请查看 <router-link to="/updating-blobless-nonjailbroken">升级 (无需 Blob) (未越狱)</router-link> ，如果你的设备是 iOS 15.7.1 或更早版本，或 iOS 16.0 - 16.1.2

:::

## 准备工作

1. 将设备插入电脑并通过 iTunes 或 Finder 进行备份

备份完成后，你的具体操作取决于你使用 macOS 或是 Windows

## macOS - Apple Configurator 2

1. 转到你 Mac 上的 App Store
1. 搜索安装 `Apple Configurator 2`
1. 配置 Apple Configurator 2
1. 点击开始
1. 点击你的设备，然后点击准备
1. 选择准备方式为`手动配置`
1. 然后选择 `不注册 MDM`
1. 在`组织`中，点击`新建组织`
1. 输入你的 Apple ID 或直接跳过
    - 如果你选择跳过，请添加一个名字然后点击下一步
1. 选择`生成新的监督身份`
    - 如果你之前使用过 Apple Configurator 2，你可以选择`选取一个现有的监督身份`
1. 根据你的喜好配置 iOS 设置助理
    - 如果你之前忘记备份数据了，这是你能够做到这一点的最后一步
1. 点击`准备`，这将抹掉你的设备并监管它

## Windows - Cowabunga Lite

1. 在[这里](https://github.com/Avangelista/CowabungaLiteWindows/releases)下载并安装 Windows 版 Cowabunga Lite
1. 解压**整个Cowabunga Lite文件夹**到某处，然后打开 Cowabunga Lite
1. 点击 `Setup Options` 然后勾选 `Enable Supervision`
1. 点击 `Apply`，然后点击 `Apply Changes`

你的设备将会重新启动并被监督

## 升级系统

1. 设备被抹掉重新启动后，完成设置向导，在设备上打开此页面
1. 点击下面来安装对应的描述文件：
    - [15.8](/assets/files/delay.mobileconfig)
    - [16.7.2](/assets/files/delay.mobileconfig)
    - [17.1](/assets/files/delay.mobileconfig)
    - 更多版本请查看 [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html)
1. 重启设备
1. 将设备连接电源并通过 WiFi 连接到互联网
1. 打开设置应用
1. 点击 `通用` -> `软件更新`
1. 确保更新显示的是想要更新的版本
1. 下载并安装更新
1. 升级完成后，移除刚才安装的描述文件

升级完成后，你可以通过抹掉所有内容和设置然后恢复之前的备份来移除监督

::: tip

升级成功后，查看[开始](/get-started)来越狱你的设备

:::

感谢 [dhinakg](https://github.com/dhinakg/) 发现此方法
