## 必读事项

::: tip

这个页面是可选阅读的，但如果你不熟悉越狱，它会很有帮助

:::

Sileo 是一款现代软件包管理器，它有经重新设计的用户界面，支持 iOS 11 及更高版本。 它是插件和主题的 App Store

<p><router-link to="/faq/#what-are-tweaks">插件</router-link> 是对系统外观或功能等进行的微小修改。 插件可以在软件源中找到，也称“源”</p>

<p><router-link to="/faq/#what-s-a-repo">软件源</router-link> 本质上是包含众多插件的数据库。 当你向 Sileo 中添加软件源时，你将能够安装其中包含的插件，并使用搜索功能查找它们</p>

本指南将向您展示如何安装和卸载插件，并添加不同的软件源

## 添加代码库

1. 打开 Sileo
1. 在底部的菜单栏中点击"软件源"
1. 在右上角点击+图标
1. 输入软件源的网址（例如：[`https://sparkdev.me/`](https://sparkdev.me/)）
1. 点击 "添加软件源"

现在你可以从此页面进入该源，查看其上所有可用的插件

## 移除软件源

1. 打开 Sileo
1. 在底部的菜单栏中点击"软件源"
1. 点击左上角的的"编辑"
1. 点击你想要删除的源旁边的红色图标
1. 确认删除

该源现在应该从 Sileo 中被移除了

## 安装插件

1. 打开 Sileo
1. 搜索您想要安装的插件
1. 点击"获取"
    - “队列”栏现在应该会出现在屏幕底部
1. 点击该栏并点击“确认”
    - 安装可能需要一些时间
1. 完成后点击<router-link to="/faq/#what-is-respringing">"重启 SpringBoard</router-link>"
    - 设备将会在此后自动注销
    - 有时可能不会显示为“重启 SpringBoard”，但你仍然需要点击该按钮

现在插件应该被安装了，只要在越狱状态下插件就会保持可用

## 卸载插件

1. 打开 Sileo
1. 搜索您想要卸载的插件
1. 点击"更改"
1. 点击"卸载"
    - “队列”栏现在应该会出现在屏幕底部
1. 点击该栏并点击“确认”
    - 卸载可能需要一些时间
1. 完成后点击<router-link to="/faq/#what-is-respringing">"重启 SpringBoard</router-link>"
    - 设备将会在此后自动注销
    - 有时可能不会显示为“重启 SpringBoard”，但你仍然需要点击该按钮

现在插件应该被卸载了

::: tip

如果在安装或卸载软件包时出现错误，请查看 <router-link to="/troubleshooting/#fixing-package-installation-errors-on-sileo">故障排除</router-link> 页面

:::
