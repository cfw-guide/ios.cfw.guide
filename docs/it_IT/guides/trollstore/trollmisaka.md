---
lang: it_IT
title: Installing TrollStore (TrollMisaka)
description: Guide to installing TrollStore via TrollMisaka
permalink: /it_IT/installing-trollhelper-trollmisaka
sidebar: false
redirect_from: null
extra_contributors:
  - opa334
---

## Requisiti

- A device running iOS/iPadOS 15.0 to 15.8.1
- L'app Suggerimenti installata sul tuo dispositivo
- The latest version of [AltServer](http://altstore.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows
- L’ultima versione di [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) se sei su Windows
- The latest version of [TrollMisaka](https://github.com/straight-tamago/TrollMisaka/releases/latest)

## Installare l'applicazione

1. Open AltServer
2. Collega il tuo dispositivo iOS al computer
3. Shift-Click (Windows) or Option-Click (macOS) AltServer in the System Tray or Menu Bar
4. Click `Sideload .ipa`, then select your device
5. Select the TrollMisaka `.ipa` file

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

The TrollMisaka application can now be opened from home screen.

::: danger

If you're on iOS 16.0 to 16.6.1, you'll also need to enable Developer Mode.

Per farlo, vai in `Impostazioni` -> `Privacy e Sicurezza` e poi scorri verso il basso fino a vedere `Modalità sviluppatore`, tocca quella opzione, attiva la modalità sviluppatore e segui le istruzioni sullo schermo

:::

## Adding a Keyboard

1. Open TrollMisaka, then exit the app _while keeping it in the app switcher_
2. Go to `Settings` -> `General` -> `Keyboard` -> `Keyboards` -> `Add New Keyboard...`
3. Select `TrollMisaka`
4. Tap `TrollMisaka`, then toggle on `Allow Full Access`, then tap `Allow`
5. Re-open TrollMisaka

After re-opening TrollMisaka, open the app switcher and then reboot your device.

::: danger

Do not fully close TrollMisaka until TrollStore is installed, or you will have to redo the entire guide from the beginning.

:::

## Iniettare TrollStore Helper

::: warning

Questo metodo può richiedere diversi tentativi per funzionare correttamente.

:::

1. Unlock your device
2. Immediately open `Spotlight Search` (via swipping down on the middle of the home screen)
3. Tap the globe icon on the keyboard
   - If needed, select `TrollMisaka` from the list of keyboards
4. Tap `kopen`
   - If the device reboots, try these steps again
5. Clicca `Installa TrollStore`
   - If the keyboard app seemingly refreshes, try again, If it fails, try again in Safari instead.

Once it says it's successful, you can continue with the next section.

## Installare TrollStore

1. Re-open the app switcher
2. Open the TrollMisaka app _from the app switcher_
3. Clicca `Installa TrollStore`

Il tuo dispositivo dovrebbe eseguire un respring, e TrollStore dovrebbe essere installato.

## Installare Persistence Helper

1. Apri l'app `TrollStore` nella home screen
2. Premi `Impostazioni`, poi premi `Installa Persistence Helper`
3. Seleziona `Suggerimenti` dalla lista di app
