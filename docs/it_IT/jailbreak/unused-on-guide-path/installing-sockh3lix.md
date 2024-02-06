---
lang: it_IT
title: sockH3lix
description: Guida per l’installazione di sockH3lix
permalink: /it_IT/installing-sockh3lix
redirect_from:
  - /installing-sockhelix
  - /sockhelix
  - /sockh3lix
  - /sh3
  - /she
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - hopolapopola
---

Sockh3lix è in grado di eseguire il jailbreak di della maggior parte dei dispositivu iOS a 64 bit con una versione del firmware 10.0-10.3.3.

È anche compatibile gli iPhone 5 su 10.3.3 e 10.3.4. Non è compatibile con di dispositivi A10 come iPhone 7 e iPad Pro (Seconda Generazione).

Tieni a mente che il jailbreak di sockH3lix non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di h3lix sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l’applicazione sul dispositivo.

::: warning

Gli iPhone 5 che usano questo jailbreak potrebbero riscontrare un problema dove i tweak non funzionano correttamente. Se succede ciò, dovresti provare a resettare il tuo dispositivo, poi eseguire il jailbreak con <router-link to="/installing-kok3shiX">Installare kok3shiX</router-link>.

:::

## Download

- L'ultima versione di [sockH3lix](https://github.com/SongXiaoXi/sockH3lix/releases/latest)
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

## Installazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di sockH3lix su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di sockH3lix adesso può essere aperta dalla home screen.

## Eseguire sockH3lix

1. Apri l'applicazione di sockH3lix dalla home screen
2. Clicca su “Jailbreak”

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. È possibile utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-zebra">Installa Zebra</router-link>

:::
