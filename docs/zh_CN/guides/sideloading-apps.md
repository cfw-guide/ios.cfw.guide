---
lang: zh_CN
title: "侧载应用"
description: 使用侧载重新签名应用的指南
permalink: /sideloading-apps
redirect_from:
  - /resign
  - /resigning
  - /altstore
  - /altdaemon
  - /altserver
  - /altdeploy
  - /sideload
  - /sideloading
  - /reprovision
  - /repro
  - /reprovision-reborn
  - /sideloadly
  - /resigning-apps
extra_contributors:
  - ssalagginkool
  - TheHacker894
---

## 必读事项

半完美越狱要求侧载越狱应用来进行越狱操作。 使用常规 Apple ID 侧载应用会在7天后到期(或是365天使用付费开发者Apple ID)。 在这段时间后，你将无法再次打开该应用

::: danger

如果你正在使用 iOS 16 或更高版本，那么你需要进行额外的操作来打开侧载的应用：

1. 打开设置
1. 转到隐私与安全性然后在下面找到`开发者模式`
1. 打开开发者模式，然后跟随指示重启设备
1. 设备重启后，确保成功在设置里启用了开发者模式
  - 如果你设置了密码，你将要被提示输入

:::

## 侧载应用

### 使用 Sideloadly 侧载

::: tip

Sideloadly 支持 iOS 7及更高版本

:::

1. 打开 Sideloadly
1. 将设备插入电脑
    - 请确保您的计算机已经被信任并允许查看您设备的内容
1. 拖拽 `.ipa` 文件到 Sideloadly
1. 输入您的Apple ID
1. 输入您的密码
    - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

### 使用 AltStore 侧载

<!--I will add AltStore 1.5 soon don't worry-->

::: tip

AltServer 只支持 iOS 12.2 及更高版本

:::

1. 下载最新版本 [AltServer](http://altstore.io/)，[iTunes](https://www.apple.com/itunes/download/win32)，如果是在Windows上，还需要下载 [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe)
1. 安装 AltServer
    - 在 macOS 上，打开邮件应用并在顶部菜单栏中打开 `邮件` -> `偏好设置`
    - 点击 `通用` 选项卡，在底部找到 `管理插件...` 并打开，勾选 `AltPlugin` 然后应用
1. 将设备连接到你的 Mac 或 PC
1. 点击菜单栏/系统托盘中的 AltStore/AltServer
1. 点击 Install AltStore
    - 跟随屏幕提示操作
1. 打开你的设备的设置转到到 `通用` -> `设备管理` 并验证 AltStore
1. 打开 iTunes (Windows 或 macOS Mojave 或更早版本) 或 Finder (macOS Catalina 或更新版本) 并允许通过 WiFi 同步
1. 在设备上下载你所需的 ipa 文件并用 AltStore 打开
    - 确保你的设备与 Mac 或 PC 连接到了同一个 WiFi

## 重新签名应用

### 使用 Reprovision Reborn 重新签名

::: tip

ReProvision Reborn 支持 iOS 9 及更高版本

:::

1. 在你的软件包管理器添加 [havoc.app](https://havoc.app/) 源
1. 安装 Reprovison Reborn
1. 打开 Reprovision Reborn 并根据屏幕指示操作
    - 你会被要求输入你的 Apple ID。 输入的信息只会发送到 Apple

### 使用 AltDaemon 重新签名

::: tip

AltDaemon 使用 AltStore 自动重新签名，仅支持 iOS 12.2 及更高版本

:::

AltDaemon 允许 AltStore 自动重新签名这些应用，而无需连接到运行 AltServer 的电脑

1. 在你的软件包管理器添加 [repo.chariz.com](https://repo.chariz.com/) 源
1. 安装 AltDaemon
1. 关闭你的软件包管理器
1. 重签即将过期的应用
