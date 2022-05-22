---
lang: it_IT
title: Pangu933
description: Guida per l’installazione di Pangu933
permalink: /it_IT/installing-pangu933
redirect_from:
  - /it_IT/pangu933
  - /it_IT/pangu9
discordNoticeText: Per supporto in inglese, chiedi aiuto sul r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
  - hopolapopola
---

Pangu9 è in grado di eseguire il jailbreak di tutti dispositivi iOS a 64 bit con una versione del firmware 9.2-9.3.3.

Tieni a mente che il jailbreak di Pangu9 non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di Pangu9 sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l'app di Pangu9 sul tuo dispositivo iOS nello step successivo.

## Download

- L’ultima versione di [Pangu9](https://web.archive.org/web/20170214021020/http://dl.pangu.25pp.com/jb/NvwaStone_1.1.ipa) _(archive.org)_
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di Pangu9 su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Pangu9 adesso può essere aperta dalla home screen.

## Eseguire Pangu9

1. Apri l'applicazione di Pangu9 dalla home screen
    - Consenti le notifiche se richiesto
1. Premi "Start"
1. Blocca il dispositivo
1. Dovresti ricevere una notifica che ti dice che il jailbreak è riuscito

Durante la prima installazione, ci potrebbe volere un po’ di tempo per completare il jailbreak. È normale.

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweaks</router-link>, temi e altro.
