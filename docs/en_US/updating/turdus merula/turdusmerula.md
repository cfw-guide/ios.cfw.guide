---
lang: en_US
title: Using turdus merula
description: Guide to using turdus merula to restore your device 
permalink: /turdusmerula
extra_contributors:
  - kok3shidoll
  - Clarity
  - Mineek
  - Alfie
---

turdus merula is a tool which utilizes a bootrom exploit and a SEP exploit to allow A9(X) and A10(X) devices to restore to older versions of iOS/iPadOS, including those that are not compatible with the latest signed SEP firmware.

::: danger

While turdus merula also supports tethered downgrades (which do not require blobs, but require a computer to boot your device every time), this guide page does not cover them, and they are not recommended for most people.

:::

::: warning

turdus merula requires macOS or Linux. If you use Windows, you will need to boot Linux via a persistent live external medium (generally a USB) in order to use turdus merula.

:::

::: warning

The Linux version of turdus merula is a public beta. While it should work fine, it is less tested than the macOS version of turdus merula.

If you are not comfortable with beta software, you should obtain a Mac and use the macOS version of turdus merula instead.

:::

The steps to use turdus merula are notably different depending on if you are using macOS or Linux, and as a result, have separate guide pages as outlined below.

::: tip

If you are using macOS, continue to <router-link to="/turdusmerula-macos">Using turdus merula (macOS)</router-link>

:::

::: tip

If you are using Linux, continue to <router-link to="/turdusmerula-linux">Using turdus merula (Linux)</router-link>

:::