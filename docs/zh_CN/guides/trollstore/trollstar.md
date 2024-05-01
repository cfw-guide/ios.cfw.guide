---
lang: zh_CN
title: Installing TrollStore (TrollStar)
description: Guide to installing TrollStore via TrollStar
permalink: /installing-trollstore-trollstar
sidebar: false
redirect_from: null
extra_contributors:
  - opa334
---

## 安装要求

- A device running iOS/iPadOS 16.0 to 16.6.1
- 在您的设备上安装了“提示”应用
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上
- The latest version of [TrollStar](https://github.com/34306/TrollStar/releases/latest)

## 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. Drag and drop the TrollStar `.ipa` file into Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

The TrollStar application can now be opened from home screen.

::: danger

如果您尚未启用，您先需要启用开发者模式。

要启用开发者模式，请进入`设置` -> `隐私与安全性`，翻到最下面，直到您看见`开发者模式`，点击此选项开启开发者模式并按照屏幕指示进行操作

:::

## 注入 TrollStore Helper

::: warning

这个方法可能需要多次尝试才能成功。

:::

1. Open TrollStar
2. Tap `Click here to start!`
   - If the device reboots, wait a few minutes, then try again
3. Tap `Install TrollStore Helper to Tips`
4. Tap `Respring to Apply`

Your device will respring after you tap `Respring to Apply`.

## 安装 TrollStore

1. 解锁设备
2. 打开“提示”应用
3. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore并会被成功安装

## 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
2. 点击 `Settings`, 然后点击 `Install Persistence Helper`
3. 在应用列表中选择 `Tips`
