---
lang: zh_CN
title: Installing meowbrek2 (palera1n)
description: Guide to installing meowbrek2 using palera1n
permalink: /installing-meowbrek2-palera1n
pkgman: sileo
---

meowbrek2 是一款<router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">半完美越狱工具 (semi-untethered)</router-link>，这意味着设备每次重新启动后都需要重新激活越狱状态

This tool is capable of jailbreaking A11 and earlier devices on iOS/iPadOS versions 15.0 to 15.8.1.

::: warning

如果你目前使用的是_有根版(rootful)_ 的 palera1n，或者在 **2023 年 4 月 27 日之前**安装了_无根版(rootless)_ 的palera1n，你首先需要<router-link to="/removing-palera1n">删除有根版 palera1n</router-link> 然后再继续操作

If you are using _rootless_ palera1n, and set it up **after April 27th, 2023**, this is not an issue, and you can continue with these steps.

:::

## 安装 palera1n

::: tip

If you already have _rootless_ palera1n installed and set it up **after April 27th, 2023**, you can ignore this section.

:::

为了安装 TrollStore 后使用 meowbrek2，你需要参照<router-link to="/installing-palera1n">安装palera1n</router-link> 来使用 palera1n 进行越狱。 完成上述操作后，你可以返回到此页面

## 安装 TrollStore

::: tip

如果没有提前添加，您需要添加 `havoc.app` 源至您的软件包管理器

:::

::: tip

如果你已经安装了 TrollStore (无论是否通过这里列出的方法安装)，请忽略此部分

:::

### 安装 TrollHelper

1. 打开 Sileo
2. 点击底部选项卡 "搜索"
3. 搜索"TrollStore Helper"
4. 点击“安装”
5. 点击屏幕底部的 "队列"
6. 点击 "确认" 按钮
7. 完成后，点击"完成"，然后关闭 Sileo
8. 在主屏幕上打开 `TrollHelper`
9. 点击 `Install TrollStore`

您的设备应该会自动注销，TrollStore并会被成功安装

### 安装 Persistence Helper

1. 在主屏幕上打开 `TrollStore`
2. 点击 `Settings`, 然后点击 `Install Persistence Helper`
3. 在应用列表中选择 `Tips`
4. 重启设备

一旦重启设备后，打开 `提示` (已经变成了Persistence Helper)，然后点击 `Refresh App Registrations`

## 安装 meowbrek2

### 下载

- The latest version of [meowbrek2](https://kok3shidoll.github.io/download/secret/8F38F948-BCF6-46AF-8926-C95D823107B0/meowbrek2_1.1.7_TS.tipa)
  - 请将 meowbrek2 `.tipa` 文件下载到**设备**

### 安装越狱

1. 在主屏幕上打开 `TrollStore`
2. 点击右上角的 +
3. 转到保存meowbrek2 `.tipa` 文件的位置
4. 点击meowbrek2 `.tipa` 文件
5. 点击 `Install`

meowbrek2 app现在应该会被安装到您的设备上

## 运行 meowbrek2

1. 重启设备
   - 这不是必要的操作，但推荐做这样以提高成功率
2. 此后立即从主屏幕上打开 meowbrek2
3. 点击 "Jailbreak"

::: tip

如果你的设备在运行越狱后闪退了或自动重启并且没有成功激活越狱状态，请多次尝试直到成功

:::

你现在应该激活了越狱状态并且 Sileo 已经安装到了主屏幕。 你可以使用 Sileo 安装<router-link to="/faq/#what-are-tweaks">插件</router-link>，主题等
