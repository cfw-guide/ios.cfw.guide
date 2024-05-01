---
lang: zh_CN
title: 升级 (无需Blob)
description: 使用 Dallas 描述文件来升级到未被签署固件版本的指南
permalink: /updating-blobless
redirect_from:
  - /dallas
  - /updating-(dallas)
  - /updating-Dallas
  - /updating-to-12-5-5-(blobless)
  - /updating-to-14-3-(blobless)
  - /updating-to-14-4-(blobless)
  - /updating-to-14-4-1-(blobless)
  - /updating-to-14-4-2-(blobless)
  - /updating-to-14-5-(blobless)
  - /updating-to-14-6-(blobless)
  - /updating-to-14-7-(blobless)
  - /updating-to-14-7-1-(blobless)
  - /updating-to-14-8-(blobless)
  - /updating-to-14-8-(blobless-alternate)
  - /updating-to-15-0-2-(blobless)
  - /updating-alternate-edit
  - /updating-to-14-8-(dallas)
  - /updating-(blobless)
extra_contributors:
  - DhinakG
---

## 必读事项

::: tip

如果你之前尝试过本方法，请先移除所有相关描述文件

:::

::: tip

你必须先越狱。 请查看 <router-link to="/updating-blobless-nonjailbroken">升级 (无需 Blob) (未越狱)</router-link> 或 <router-link to="/updating-blobless-advanced">升级 (无需 Blob) (高级)</router-link> ，如果你的设备不能越狱

:::

## 安装要求

- 能够正常安装插件的越狱设备
    - 查看 <router-link to="/get-started">开始</router-link> 如果你不确定的话
- 使用 iCloud 对你的设备进行备份

## 教程

### 安装 Dahlia

::: tip

在使用Dallas 配置文件时，Dahlia 插件会系统在搜索软件更新时重定向到不同的服务器。 因此服务器商将能够看到你的 IP 地址。 这是正常的，请查看 <router-link to="/updating-blobless-alternate">升级 (无需 Blob) (备选方法)</router-link> 如果你对此不愿意

:::

1. 越狱你的设备
1. 打开你的软件包管理器添加以下源：
    - [https://dhinakg.github.io/repo/](https://dhinakg.github.io/repo/)
    - [https://repo.alexia.lol](https://repo.alexia.lol)
1. 搜索并安装 `Dahlia`
1. 安装完成后点击`重启设备`然后重新越狱

### 准备升级

1. 打开设置应用，向下滚动找到 `Dahlia` 然后打开它
1. 点击 `Download Profiles` 然后点击 "Dallas"
1. 点击 "Dallas Enabler" 下载描述文件
1. 提示时点击"允许"
1. 退出然后转到 `通用` -> `描述文件与设备管理` -> `Dallas Enabler`
1. 点击右上角的“安装”并在提示时输入密码
1. 再次点击"安装"确认
1. 返回设置中的 `Dahlia`
1. 再次点击 `Download Profiles` 然后点击 "Dallas"
1. 在 "Version Profiles" 下，点击想要更新到的版本
1. 提示时点击"允许"
1. 打开设置
1. 退出然后转到 `通用` -> `描述文件与设备管理` -> `Dallas - [选择的版本]`
   - 如果提示错误，请确保你的设备越狱了并且刚刚安装了 "Dallas Enabler"
1. 点击右上角的“安装”并在提示时输入密码
1. 再次点击"安装"确认
1. 跟随提示重启设备，然后重新越狱
1. 再次打开设置应用前往 Dahlia
1. 打开 `Enable Supervision-less Mode`
   - 你也可以选择打开 `Toggle Supervision`，但是在设备更新后只能通过越狱或抹除设备的方式移除监管
1. 确保 `Ready to Update` 中显示 "Yes"
   - 如果没有，点击 "Ready to Update" 旁的 "i" 查看问题出在哪里

### 恢复rootFS

1. 打开设置应用
1. 点击 `通用` -> `软件更新`
1. 确保更新显示的是想要更新的版本
    - 现在**不要**更新，我们等会再来
    - 确保更新显示的是你想要更新到的版本
    - 如果显示你的系统是最新的，那么 Dallas 服务器目前处于离线状态，等待它恢复在线
1. 打开你的越狱工具恢复 rootFS
    - 如果你需要有关此操作的具体教程，请查看 <router-link to="/restoring-rootfs">恢复rootFS</router-link> 并选择你正在使用的越狱工具
1. 重启设备

### 升级系统

1. 将设备连接电源并通过 WiFi 连接到互联网
1. 打开设置应用
1. 点击 `通用` -> `软件更新`
1. 确保更新显示的是你想要更新到的版本
1. 下载并安装更新

### 删除 Dallas 描述文件

1. 升级完成后打开设置
1. 转到 `通用` -> `描述文件与设备管理`
1. 删除刚才安装的两个描述文件
    - 如果提示，请输入密码

::: tip

如果你之前选择开启监管，那么你的设备在升级后会仍然处于监管。 处于监管状态意味着：

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

感谢 [dhinakg](https://github.com/dhinakg/) 发现此方法
