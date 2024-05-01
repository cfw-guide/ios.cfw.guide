---
lang: zh_CN
title: "屏蔽越狱检测"
description: 屏蔽和绕过越狱检测。
permalink: /blocking-jailbreak-detection
redirect_from:
  - /blocking
  - /jailbreak-detection
extra_contributors:
  - Absolucy
  - TheHacker894
---

::: danger

我们不建议在越狱设备上使用银行应用。 建议使用一个单独的安全设备来访问你的银行账户。

:::

许多依赖于安全性的应用程序会使用算法来检测并阻止越狱用户使用该应用。 这包括银行应用、一些在线视频游戏 (如 Pokémon Go，Mario Kart Tour) 以及其他注重隐私的应用，比如 Snapchat。

从安全的角度来看，这是十分重要的，因为相比于原生 iOS系统，越狱设备更有可能受到威胁。 然而当我们想使用需要的应用时，这可能会引发问题。

::: danger

屏蔽越狱检测可能会阻止你在选择的应用中访问照片和其他文件。

:::

现在我们将逐个介绍用于绕过越狱检测的插件。 尽管有下列各种屏蔽越狱检测的工具，但有些应用无法被修补，在越狱状态下将无法使用。 一些应用可能需要有专门为其制作的绕过越狱检测的方法。
## 插件

- [A-Bypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/&package=com.rpgfarm.a-bypass) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.co.kr/">repo.co.kr</a>)
- [Liberty Lite (Beta)](cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/&package=com.ryleyangus.libertylite.beta) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://ryleyangus.com/repo/">ryleyangus.com/repo</a>)
- [Choicy](cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/&package=com.opa334.choicy) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://opa334.github.io/">opa334.github.io</a>)
- Libhooker Configurator (在 Odyssey 源中提供)
- [KernBypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/&package=jp.akusio.kernbypass-unofficial) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://cydia.ichitaso.com/">cydia.ichitaso.com</a>)
- [vnodebypass](cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/&package=kr.xsf1re.vnodebypass) (<a href="cydia://url/https://cydia.saurik.com/api/share#?source=https://repo.xsf1re.kr/">repo.xsf1re.kr</a>)

::: tip

Choicy在默认BigBoss源中可以找到,，但是我们建议添加开发者的软件源以确保您能实时接受到最新版本。

:::

还有其他可用于隐藏越狱的软件，比如[Shadow](sileo://package/me.jjolano.shadow) (<a href="sileo://source/https://ios.jjolano.me/">ios.jjolano.me</a>) ，然而在本指南中我们只会涵盖上述的插件。

## 安装

1. 打开您的软件包管理器 (例如Cydia, Sileo, Zebra)
1. 添加上述的三个软件源
1. 搜索并安装三个插件
1. Respring

## A-Bypass

::: tip

根据该插件的开发者所述，A-Bypass 在基于 libhooker的越狱中效果更好，比如 <router-link to="/installing-chimera">Chimera</router-link>, <router-link to="installing-odyssey">Odyssey</router-link>, <router-link to="/installing-odysseyra1n">odysseyra1n</router-link>, 和 <router-link to="/installing-taurine">Taurine</router-link>. 它仍然可以在基于 Substrate/Substitute 的越狱上工作，比如 checkra1n 和 unc0ver。

:::

1. 打开设置应用
2. 向下滚动到 `A-Bypass`
3. 点击 `Check for Updates`
    - 如果一个新的应用在使用 A-Bypass 时无法正常工作，你应该尝试检查 A-Bypass 选项中是否有更新。
4. 向下滚动并启用任何您想要屏蔽越狱检测的应用。

## Liberty Lite

1. 打开设置应用
1. 向下滚动至 `Liberty Lite`
1. 启用 `Enable Liberty` 选项
1. 点击 `Block Jailbreak Detection`
1. 启用所有您想要屏蔽越狱检测的应用

## Choicy

::: tip

这是对于那些想要在越狱设备上使用 Snapchat 的用户的最佳选择

:::

::: tip

如果您使用了基于libhooker的越狱，例如 <router-link to="/installing-chimera">Chimera</router-link>, <router-link to="installing-odyssey">Odyssey</router-link>, <router-link to="/installing-odysseyra1n">odysseyra1n</router-link>, 或 <router-link to="/installing-taurine">Taurine</router-link>，那么 [Libhooker Configurator](#libhooker-configurator) 与 Choicy 有相同的作用，同时它是 Libhooker 所原生集成的

:::

1. 打开设置应用
1. 向下滚动到 `Choicy`
1. 点击 `Applications`
1. 点击你在 Liberty Lite 中选择的应用程序
1. 开启 `Custom Tweak Configuration`
    - 对于 Snapchat，请开启`Disable Tweak Injection`并跳过下一步
1. 确保选择了`Whitelist`
1. 启用你正在使用的绕过插件 - 对于 Liberty Lite，是 `zzzzzLiberty`，对于 A-Bypass，是 `!ABypass2`
1. 为要开启绕过越狱检测的每个应用程序都重复上述步骤。

## libhooker configurator

::: warning

这只适用于基于libhooker的越狱！ 如果你正在使用基于 Substrate/Substitute 的越狱工具，比如 checkra1n 或 unc0ver，那么此方法可能*不奏效*，你应该使用 [Choicy](#choicy)！

:::

1. 打开 `libhooker` 应用程序
1. 点击 Applications
1. 向下滚动到您想要配置的应用程序，并点击它
1. 在这里您可以完全禁用此应用程序中插件，或者单独配置插件
   - 要配置单独的插件，请启用 "Override Configuration"，这将打开只允许/阻止特定插件的选项
   - 例如，为了只允许Liberty Lite，请选择 `Allow`，然后选择 `zzzzfrety`
   - 如果您正在使用A-Bypass，请启用 `!ABypass2`

## KernBypass (iOS 12.0 - 14.2)

::: tip

这是那些想要在越狱设备上使用任天堂应用 (如Mario Kart Tour,，Animal Crossing: Pocket Camp等) 和 Pokemon GO 的用户的最佳选择

:::

::: warning

KernBypass 在使用 unc0ver 越狱的 iOS 14 上将无法工作。 请查看[vnodebypass](#vnodebypass)

:::

::: danger

KernBypass 是一个内核插件。 请不要不受支持的设备上安装，使用时请自行承担风险

:::

1. 打开设置应用
1. 向下滚动到 `KernBypass`
1. 点击 `Enable KernBypass`
1. 启用所有您想要屏蔽越狱检测的应用

## vnodebypass

::: tip

vnodebypass 类似于 KernBypass，但注意在其处于开启时，你将不能够使用其它所有插件！

:::

::: danger

vnodebypass 是一个内核插件。 请不要不受支持的设备上安装，使用时请自行承担风险

:::

1. 如果您在 iOS 14 上，请确保安装了 `libkrw` 1.1.0 或更高版本。 如果您使用 unc0ver 或checkra1n，它可以在默认的 Elucubratus 源中找到。
2. 打开 `vnodebypass` 程序
3. 点击 `Enable`
4. 当使用需要屏蔽越狱检测的应用时，返回 `vnodebypass` 并点击 `Disable`
