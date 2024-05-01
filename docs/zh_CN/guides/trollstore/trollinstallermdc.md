---
lang: 简体中文
title: 安装 TrollStore (TrollInstallerMDC)
description: 通过 TrollinstallerMDC 安装 TrollStore 的指南
permalink: /installing-trollstore-trollinstallermdc
sidebar: false
redirect_from: null
extra_contributors:
  - opa334
---

## 安装要求

- 运行iOS/iPadOS 15.0至15.7.1或16.0至16.1.2的设备
- 在您的设备上安装了“提示”应用
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上
- 最新版本的 [TrollInstallerMDC](https://dhinakg.github.io/apps.html)

## 安装应用程序

1. 打开 Sideloadly
2. 将您的 iOS 设备插入您的电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. 拖拽TrollInstallerMDC `.ipa`文件到Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`VPN与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

TrollInstallerMDC现在可以从主屏幕中打开。

::: danger

如果您的设备是iOS 16.0 到 16.1.2，您需要启用开发者模式。

要启用开发者模式，请进入`设置` -> `隐私与安全性`，翻到最下面，直到您看见`开发者模式`，点击此选项开启开发者模式并按照屏幕指示进行操作

:::

## 注入 TrollStore Helper

::: warning

如果您已经打开过了提示, 请在这些步骤之前重启您的设备

:::

1. 打开 TrollInstallerMDC
2. 一旦显示"Successfully replaced Tips binary"，关闭`TrollInstallerMDC`
   - 如果出现错误，关闭 TrollInstallerMDC 并重新打开

## 安装TrollStore

1. 打开“提示”应用
2. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore并会被成功安装。

## 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
2. 点击 `Settings`, 然后点击 `Install Persistence Helper`
3. 在应用列表中选择 `Tips`
