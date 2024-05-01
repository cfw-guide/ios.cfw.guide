---
lang: zh_CN
title: 使用 JailbreakMe 4.0
description: 使用 JailbreakMe 4.0 的指南
permalink: /using-jailbreakme-4-0
redirect_from:
  - /installing-jailbreakme-4-0
  - /jailbreakme-4-0
discordNoticeText: 若需要英语支持，请在 LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com) 上寻求帮助。
pkgman: cydia
---

JailbreakMe 4.0 支持运行 iOS 9.1 - 9.3.4 的所有32位设备

请注意，JailbreakMe 4.0越狱不是“永久性”的(重新启动后会失效)。 你需要在重启后再次使用 JailbreakMe 4.0 以激活越狱。 下文也会说明这点

## 运行 JailbreakMe 4.0

1. 在您的设备上打开 Safari
1. 访问 [jailbreak.me](http://jailbreak.me) 网站
1. 点击 "jailbreak me!"

几分钟后，Cydia应该会出现在的主屏幕上

若要重新越狱，只需要重复这些操作

::: warning


如果你的设备在运行越狱后闪退了或自动重启并且越狱没有被成功安装，请多次尝试直到成功

:::


## 修补为完美越狱

此部分是可选的额外部分，它使设备在每次启动后自动运行越狱。 这意味着在每次设备重新启动后，无需再手动访问 jailbreak.me 来进入越狱状态

你需要使用 Cydia 来安装此部分内容。 如果你对 Cydia 不熟悉，请在操作前先查阅[使用 Cydia](/installing-homedepot/using-cydia.html)

1. 打开 Cydia
1. 查看"软件源"选项卡，确保已添加了"tihmstar's beta repo"源
    - 如果没有找到此软件源，请点击`编辑` -> `+` 然后输入 `repo.tihmstar.net`
1. 打开"搜索"选项卡并输入"UntetherHomeDepot"
1. 点击该插件，然后点击屏幕右上角的“安装”
1. 确认安装

安装完成后，你将被提示重新启动设备

你现在应该成功完成了越狱并且 Cydia 已经安装到了主屏幕。 你现在可以使用Cydia安装 <router-link to="/faq/#what-are-tweaks">插件、</router-link>主题或者其它

::: tip


如果你想要使用其它更现代的软件包管理器，你可以选择 <router-link to="/installing-zebra">安装 Zebra</router-link>

:::