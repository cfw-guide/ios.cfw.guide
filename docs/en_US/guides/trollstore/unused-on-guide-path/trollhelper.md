---
lang: en_US
title: Installing TrollStore (TrollHelper)
description: Guide to installing TrollStore via the TrollStore Helper package
permalink: /installing-trollstore-trollhelper
sidebar: false
redirect_from:
  - /installing-trollstorehelper
  - /trollhelper
  - /trollstorehelper
extra_contributors:
  - opa334
---

## Requirements

- A jailbroken device running iOS 14.0 beta 2 to 16.6.1, 16.7 RC (20H18) or iPadOS 17.0
- A functioning package manager

::: tip

If it's not already added, you'll also need to add the `havoc.app` repo to your package manager

:::

## Installing TrollStore

1. In your package manager, search and install the `TrollStore Helper` package
1. After installing, close your package manager
1. Open the `TrollHelper` app on your home screen
1. Press `Install TrollStore`

Your device should respring, and TrollStore should now be installed.

::: danger

If you're on iOS 15.0 or later, you have to do the below steps, or you won't be able to access TrollStore after rebooting your device into stock iOS.

If you're on iOS 14.0 to 14.8.1, you can safely ignore these below steps.

:::

## Installing Persistence Helper

1. Open the `TrollStore` app on your home screen
1. Press `Settings`, then press `Install Persistence Helper`
1. Select `Tips` from the list of apps

Once you reboot your device, open the `Tips` app (which you set as the persistence helper) and press `Refresh App Registrations`.