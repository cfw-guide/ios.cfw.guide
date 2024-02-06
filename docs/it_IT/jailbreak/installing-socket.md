---
lang: it_IT
title: Installare Socket
description: Guida per l'installazione di Socket
permalink: /it_IT/installing-socket
redirect_from:
  - /socket
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: zebra
extra_contributors:
  - hopolapopola
  - staturnz
---

Socket è in grado di eseguire il jailbreak di ogni dispositivo iOS a 32-bit su versioni firmware da 10.0.1 a 10.3.4.

Tieni a mente che il jailbreak di Socket non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di Socket sul tuo dispositivo ogni 7 giorni tramite il tuo computer.

Utilizzeremo Sideloadly per installare l’applicazione sul dispositivo.

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Socket è attualmente firmato su <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L’ultima versione di [Socket](https://socket-jb.app)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di Socket su Sideloadly
1. Inserisci il tuo ID Apple
1. Inserisci la tua password
    - Sideloadly must make a request to its servers in order to work with free developer accounts. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Socket adesso può essere aperta dalla home screen.

## Eseguire Socket

1. Apri l'applicazione di Socket dalla home screen
1. Clicca su “Jailbreak”

::: warning


Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::


Adesso dovresti essere jailbroken con Zebra installato nella home screen. Puoi utilizzare Zebra per installare <router-link to="/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
