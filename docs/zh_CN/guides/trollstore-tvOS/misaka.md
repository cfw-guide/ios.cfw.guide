---
lang: zh_CN
title: Installing TrollStore (Misaka) (tvOS)
description: Guide to installing TrollStore via Misaka on an Apple TV
permalink: /installing-trollhelper-misaka-tvos
sidebar: false
redirect_from: null
extra_contributors:
  - opa334
---

## 安装要求

- An Apple TV running tvOS 15.0 to 16.6
- 最新版本的 [Sideloadly](https://sideloadly.io/)
- 最新版本的 [iTunes](https://www.apple.com/itunes/download/win32) 如果是在 Windows 上
- 最新版本的 [Misaka](https://github.com/straight-tamago/misaka/releases/latest)

## 安装应用程序

1. 打开 Sideloadly
2. 将设备插入电脑
   - 请确保您的电脑已经被信任并允许查看您设备的内容
3. 拖拽Misaka `.ipa`文件到Sideloadly
4. 输入您的Apple ID
5. 输入您的密码
   - Sideloadly必须先向服务器发送请求才能使用免费开发者账户。 如果您不愿意，您可以使用另外一个Apple ID。

应用程序现在将安装到您的 iOS 设备。

## 信任应用程序

1. 转到`设置` -> `通用` -> `设备管理` -> `<Your Apple ID>`
   - 根据具体情况不同，`设备管理`可能会显示为`描述文件与设备管理`
2. 点击 `信任 "<Your Apple ID>"`

Misaka现在可以从主屏幕中打开。

::: danger

如果您尚未启用，您先需要启用开发者模式。

要启用开发者模式，请进入`设置` -> `隐私与安全性`，翻到最下面，直到您看见`开发者模式`，点击此选项开启开发者模式并按照屏幕指示进行操作

:::

## 注入 TrollStore Helper

::: warning

这个方法可能需要多次尝试才能成功。

:::

1. 打开Misaka
2. 转到 "Packages [Emu/Var]" 选项卡
3. 点击左下方按钮 (ToolBox) 然后点击 `Install TrollStore`, 然后点击 `Tips`

在点击`Tips`后您的设备会自动注销。

## 安装 TrollStore

1. 解锁设备
2. 打开“提示”应用
3. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore并会被成功安装
