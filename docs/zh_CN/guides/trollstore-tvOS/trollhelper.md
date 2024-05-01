---
lang: zh_CN
title: Installing TrollStore (TrollHelper) (tvOS)
description: Guide to installing TrollStore via the TrollStore Helper package
permalink: /installing-trollhelper-tvos
sidebar: false
extra_contributors:
  - opa334
---

::: danger

This is a stub page, nothing listed here is accurate whatsoever (it is currently a direct copy paste of the iOS one), but is being used as a placeholder for when a jailbreak method to install TrollStore is developed for tvOS

:::

## 安装要求

You will need:

- A jailbroken device running iOS 14.0 beta 2 to 16.6.1, 16.7 RC (20H18) or iPadOS 17.0
- A functioning package manager

::: tip

If it's not already added, you'll also need to add the `havoc.app` repo to your package manager

:::

## 安装 TrollStore

1. In your package manager, search and install the `TrollStore Helper` package
2. After installing, close your package manager
3. 在主屏幕上打开 `TrollHelper`
4. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore并会被成功安装

::: danger

If you're on iOS 15.0 or later, you have to do the below steps, or you won't be able to access TrollStore after rebooting your device into stock iOS.

If you're on iOS 14.0 to 14.8.1, you can safely ignore these below steps.

:::

## 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
2. 点击 `Settings`, 然后点击 `Install Persistence Helper`
3. 在应用列表中选择 `Tips`

Once you reboot your device, open the `Tips` app (which you set as the persistence helper) and press `Refresh App Registrations`.
