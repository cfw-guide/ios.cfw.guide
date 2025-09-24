---
lang: en_US
title: Using turdus merula (Tethered)
description: Guide to using turdus merula to restore your device without having shsh blobs
permalink: /turdusmerula-tethered
extra_contributors:
  - kok3shidoll
  - Clarity
  - Mineek
  - Alfie
---

turdus merula is a tool which utilizes a bootrom exploit and a SEP exploit to allow A9(X) and A10(X) devices to restore to older versions of iOS/iPadOS, including those that are not compatible with the latest signed SEP firmware.

::: danger

Tethered restores **REQUIRE** a computer to boot your device every time, and cannot be booted at all without one.

Because of this limitation, unless you're linked to this guide directly, linked to this guide as a troubleshooting step, experimenting with older iOS versions or otherwise are a developer needing temporary access to an older iOS version, it is not worth doing a tethered downgrade.

:::

::: danger

turdus merula requires macOS or Linux.

While it is technically possible to live boot Linux for Windows users, due to tether downgrades requiring a computer to boot the device at all, this ends up being substantially more inconvenient than normal and is generally only advisable in circumstances where a tethered downgrade is absolutely required.

:::

::: warning

The Linux version of turdus merula is a public beta. While it should work fine, it is less tested than the macOS version of turdus merula.

If you are not comfortable with beta software, you should obtain a Mac and use the macOS version of turdus merula instead.

:::

The steps to use turdus merula are notably different depending on if you are using macOS or Linux, and as a result, have separate guide pages as outlined below.

::: tip

If you are using macOS, continue to <router-link to="/turdusmerula-tethered-macos">Using turdus merula (Tethered, macOS)</router-link>

:::

::: tip

If you are using Linux, continue to <router-link to="/turdusmerula-tethered-linux">Using turdus merula (Tethered, Linux)</router-link>

:::