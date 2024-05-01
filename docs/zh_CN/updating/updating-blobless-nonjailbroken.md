---
lang: zh_CN
title: 升级 (无需 Blob) (未越狱)
description: 使用延迟 OTA 描述文件来升级到未被签署固件版本的指南
permalink: /updating-blobless-nonjailbroken
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


你的设备必须在 iOS 15.7.1 或更早版本，或 iOS 16.0 - 16.1.2。 请查看 <router-link to="/updating-blobless-advanced">升级 (无需 Blob) (高级)</router-link> ，如果你的设备不在这些版本上

:::


::: tip


如果你之前尝试过本方法，请先移除所有相关描述文件

:::


## 安装 Supervise

### 下载

- 最新版本的 [Supervise](https://dhinakg.github.io/apps.html)
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32)如果是在 Windows 上

### 安装应用程序

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的电脑已经被信任并允许查看您设备的内容
1. 拖拽 Supervise`.ipa` 文件到Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

### 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<你的 Apple ID>`
    - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
1. 点击 `信任 &lt你的Apple ID>`

Supervise app 现在可以从主屏幕中打开

## 监督你的设备

1. 在主屏幕上打开 `Supervise`
1. 打开设置应用，然后转到 `通用`
1. 向下滚动找到 `Toggle Supervision` 然后打开
1. 启用 `Toggle Supervision`
1. 重启设备

在设备重启后，你应该可以在设置中看到被监督管理的文字，如果没有，请在重复此部分操作

## 升级系统

1. 在设备上打开此页面
1. 点击下面来安装对应的描述文件：
    - [15.8](/assets/files/delay.mobileconfig)
    - [16.7.2](/assets/files/delay.mobileconfig)
    - [17.1](/assets/files/delay.mobileconfig)
    - 更多版本请查看 [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html)
1. 将设备连接电源并通过 WiFi 连接到互联网
1. 打开设置应用
1. 点击 `通用` -> `软件更新`
1. 确保更新显示的是想要更新的版本
1. 下载并安装更新
1. 升级完成后，移除刚才安装的描述文件

::: tip


因为之前启用了监管，所以你的设备在升级后会仍然处于监管。 处于监管状态意味着：

- 在设置中会显示你的设备正在受监督管理
- 激活锁会被自动禁用，这可能会使你的设备容易被不法分子访问 (查找依然可以用)
- 如果你的设备启用了移动设备管理 (如学校或工作单位)，那么你的组织将能够在你的设备上静默安装和卸载应用

请注意对于大多数用户来说，设备受监管状态不会成为问题

如果你想要移除监管，你需要重置设备并还原以前的备份。 具体可以通过在设置应用“抹除所有内容和设置”，然后在从 iCloud 备份中恢复来移除监管

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
