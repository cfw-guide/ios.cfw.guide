---
lang: it_IT
title: Installare TrollStore (Misaka)
description: Guida all'installazione di TrollStore tramite Misaka
permalink: /it_IT/installing-trollhelper-misaka
sidebar: false
redirect_from: null
extra_contributors:
  - opa334
---

## Requisiti

- A device running iOS/iPadOS 16.0 to 16.6.1
- L'app Suggerimenti installata sul tuo dispositivo
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows
- L'ultima versione di [Misaka](https://github.com/straight-tamago/misaka/releases/latest)

## Installazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di Misaka su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di Misaka adesso può essere aperta dalla home screen.

::: danger

Se non lo hai già fatto, dovrai anche abilitare la Modalità Sviluppatore.

Per farlo, vai in `Impostazioni` -> `Privacy e Sicurezza` e poi scorri verso il basso fino a vedere `Modalità sviluppatore`, tocca quella opzione, attiva la modalità sviluppatore e segui le istruzioni sullo schermo

:::

## Iniettare TrollStore Helper

::: warning

Questo metodo può richiedere diversi tentativi per funzionare correttamente.

:::

1. Apri Misaka
2. Vai alla scheda "Pacchetti [Emu/Var]"
3. Tocca il pulsante in basso a sinistra (noto come "ToolBox") e tocca `Installa TrollStore`, quindi tocca `Suggerimenti`

Il tuo dispositivo eseguirà un respring dopo aver toccato `Suggerimenti`.

## Installare TrollStore

1. Sblocca il tuo dispositivo
2. Apri l'app Suggerimenti
3. Clicca `Installa TrollStore`

Il tuo dispositivo dovrebbe eseguire un respring, e TrollStore dovrebbe essere installato.

## Installare Persistence Helper

1. Apri l'app `TrollStore` nella home screen
2. Premi `Impostazioni`, poi premi `Installa Persistence Helper`
3. Seleziona `Suggerimenti` dalla lista di app
