---
lang: it_IT
title: Installare TrollStore (TrollInstallerMDC)
description: Guida all'installazione di TrollStore tramite TrollInstallerMDC
permalink: /it_IT/installing-trollhelper-mdc
sidebar: false
redirect_from: null
extra_contributors:
  - opa334
---

## Requisiti

- Un dispositivo che esegue iOS/iPadOS da 15.0 a 15.7.1 o da 16.0 a 16.1.2
- L'app Suggerimenti installata sul tuo dispositivo
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows
- L'ultima versione di [TrollInstallerMDC](https://dhinakg.github.io/apps.html)

## Installazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di TrollInstallerMDC su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di TrollInstallerMDC può essere aperta dalla home screen.

::: danger

Se sei su iOS da 16.0 a 16.1.2, avrai anche bisogno di abilitare la Modalità Sviluppatore.

Per farlo, vai in `Impostazioni` -> `Privacy e Sicurezza` e poi scorri verso il basso fino a vedere `Modalità sviluppatore`, tocca quella opzione, attiva la modalità sviluppatore e segui le istruzioni sullo schermo

:::

## Iniettare TrollStore Helper

::: warning

Se hai già aperto Suggerimenti, riavvia il dispositivo prima di seguire questi passaggi

:::

1. Apri TrollInstallerMDC
2. Una volta che dice "Successfully replaced Tips binary", chiudi l'app `TrollInstallerMDC`
   - Se restituisce un errore, chiudi TrollInstallerMDC e riaprilo

## Installare TrollStore

1. Apri l'app `Suggerimenti`
2. Clicca `Installa TrollStore`

Il tuo dispositivo dovrebbe eseguire un respring, e TrollStore dovrebbe essere installato.

## Installare Persistence Helper

1. Apri l'app `TrollStore` nella home screen
2. Premi `Impostazioni`, poi premi `Installa Persistence Helper`
3. Seleziona `Suggerimenti` dalla lista di app
