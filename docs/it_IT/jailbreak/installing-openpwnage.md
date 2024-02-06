---
lang: it_IT
title: openpwnage
description: Guida all'installazione di openpwnage
permalink: /it_IT/installing-openpwnage
redirect_from:
  - /openpwnage
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - TheHacker894
---

openpwnage è in grado di eseguire il jailbreak di tutti i dispositivi iOS con una versione del firmware 8.4b4-9.3.6.

Tieni a mente che il jailbreak di openpwnage non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di openpwnage sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l'app di openpwnage sul tuo dispositivo iOS nello step successivo.

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
openpwnage è attualmente firmato su <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L’ultima versione di [openpwnage](https://github.com/0xilis/openpwnage)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di openpwnage su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly must make a request to its servers in order to work with free developer accounts. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di openpwnage adesso può essere aperta dalla home screen.

## Eseguire openpwnage

1. Apri l'applicazione di openpwnage dalla home screen
1. Clicca su `Jailbreak`

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweak</router-link>, temi e altro.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno e sei su iOS 9, continua con <router-link to="/installing-zebra">Installare Zebra</router-link>

:::