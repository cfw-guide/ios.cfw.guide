---
lang: it_IT
title: Pangu933
description: Guida per l’installazione di Pangu933
permalink: /it_IT/installing-pangu933
redirect_from:
  - /it_IT/pangu933
  - /it_IT/pangu9
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](http://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - TheHacker894
  - hopolapopola
  - Braec0
---

Pangu933 è in grado di eseguire il jailbreak su ogni dispositivo a 64 bit su versioni firmware da 9.2 a 9.3.3.

Tieni a mente che il jailbreak di Pangu933 non è “persistente” (non rimarrà installato dopo un riavvio). È necessario rieseguire l'exploit dopo ogni riavvio, che per fortuna non richiede che l'applicazione sia installata. Ti verrà spiegato come fare.

Utilizzeremo Sideloadly per installare l'app di Pangu933 sul tuo dispositivo iOS nello step successivo.

## Download

- L'ultima versione di [Pangu933](https://web.archive.org/web/20170214021020/http://dl.pangu.25pp.com/jb/NvwaStone_1.1.ipa)_(archive.org)_
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
    - Sideloadly deve fare una richiesta ai suoi server per funzionare con gli account sviluppatore gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Pangu9 adesso può essere aperta dalla home screen.

## Eseguire Pangu933

1. Apri l'applicazione di Pangu933 dalla home screen
    - Consenti le notifiche se richiesto
1. Premi "Start"
1. Blocca il dispositivo
1. Dovresti ricevere una notifica che ti dice che il jailbreak è riuscito

Durante la prima installazione, ci potrebbe volere un po’ di tempo per completare il jailbreak. È normale.

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

## Rejailbreaking

Dato che Pangu933 è un jailbreak semi-untethered, non rimarrai jailbroken se il tuo dispositivo si riavvia o si spegne per qualsiasi motivo. Fortunatamente, invece di dover mantenere in sideload l'app di Pangu933, puoi semplicemente seguire gli step qui sotto per rieseguire il jailbreak sul tuo dispositivo.

::: danger

Questo **non** installerà il jailbreak - dovrai comunque fare il sideload di Pangu933 ed eseguire il jailbreak normalmente prima di poter seguire questa sezione.

:::

1. Apri Safari sul tuo dispositivo iOS
1. Visita il sito [jbme.ddw.nu](http://jbme.ddw.nu)
    - Assicurati che il tuo dispositivo sia in orientato verticalmente (altrimenti riceverai un avviso per inclinare il dispositivo)
1. Clicca "go"

Il tuo dispositivo dovrebbe essere nuovamente in uno stato di jailbreak.

::: warning

Se il tuo dispositivo crasha o si riavvia inaspettatamente e il jailbreak non è installato, prova far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-zebra">Installare Zebra</router-link>

:::