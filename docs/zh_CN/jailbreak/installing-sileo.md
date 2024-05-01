---
lang: 简体中文
title: "安装 Sileo"
description: 安装 Sileo 的指南
permalink: /installing-sileo
redirect_from:
  - /install-sileo
---

## 介绍

本文将介绍如何在以其它软件包管理器如 Cydia 为默认的越狱中安装 Sileo

::: warning

Sileo 仅支持 iOS 12或更高版本，请考虑 <router-link to="/installing-zebra">安装 Zebra</router-link> ，如果你的设备是 iOS 9 - 11

:::

## 添加 Sileo 源

1. 打开 Cydia 应用程序
1. 在底部的菜单栏中点击`源`
1. 在右上角点击`编辑`按钮
1. 在右上角点击`+`图标
1. 输入 `repo.getsileo.app`
1. 点击`添加源`
1. 点击 `返回到Cydia`

## 安装 Sileo

1. 点击刚刚添加的 `repo.getsileo.app` 源
1. 点击 `Packaging`
1. 找到 `Sileo` 并点开它
1. 在右上角点击 `安装`
1. 确认安装
    - 安装可能需要一些时间
1. 完成后点击 `重新启动 SpringBoard`
    - 设备将会在此后自动注销

Sileo现在应该被成功安装了

::: danger

在安装 Sileo 后移除 Cydia 可能会导致越狱出现问题

:::

::: tip

继续 <router-link to="/using-sileo">使用 Sileo</router-link>

:::