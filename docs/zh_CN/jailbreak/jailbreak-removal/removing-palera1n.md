---
lang: 简体中文
title: 移除 palera1n
description: 移除 palera1n 的指南
permalink: /removing-palera1n
redirect_from: /removing-palerain
---

如果你想要移除 palera1n，你可以在已经连接了设备的 PC/Mac 上使用以下命令。 要移除越狱，您**不一定需要还原设备**

:::::: tabs


:::: tab name="macOS/Linux" :default="true"


::: warning


如果你使用的是 Linux ，你必须先执行下面的步骤。 打开终端并运行这些命令：

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

然后打开另一个终端窗口，并与其他终端窗口一样执行以下步骤

:::


::: tip


本指南一切都默认你在一个已经安装了palera1n 的电脑运行palera1n。 你可以使用之前用来安装 palera1n 到你的设备的同一台电脑。 如果你在使用还没安装 palera1n 的另一台电脑上操作，请参照 <router-link to="/installing-palera1n">安装 palera1n</router-link> 的指南下载 palera1n，然后在到“运行 palera1n” 这部分时返回到这个页面 (但不要按照“运行 palera1n”的步骤操作)

:::


::: tip


如果你正在使用Linux，请将 `sudo` 添加到下一个命令的前

:::


1. 运行 `palera1n --force-revert`
   - 如果您正在使用有根版 (rootful) 的 palera1n，请在命令末尾添加 `-f`

你的设备应该正常启动进了系统，你可以正常使用设备。

:
:::


:::: tab name="palen1x"


::: tip


如果你不再拥有你的 palen1x 的启动盘，你可以通过查阅 <router-link to="/using-palen1x">使用 palen1x</router-link> 部分准备一个新的，但不要看“运行 palera1n ”这部分

:::

1. 一旦成功启动进入 palen1x ，请选择 `palera1n`
1. 如果你在使用的是无根版(rootless)的 palera1n，请选择 `Switch<code> 然后切换到 <code>Rootless`
1. 选择 `Options`，用空格键开启 `Restore RootFS` 选项，然后回车退出该菜单
1. 选择 `Start`

你的设备应该正常启动进了系统，你可以正常使用设备。

:
:::


::::::
