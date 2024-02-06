---
lang: it_IT
title: Meridian
description: Guida all'installazione di Meridian tramite Sideload
permalink: /it_IT/installing-meridian-ipa
redirect_from:
  - /installing-meridian-(ipa)
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - TheHacker894
  - TophattedWasTaken
---

::: warning

Questa è una guida alternativa progettata in caso riscontrassi problemi con <router-link to="/using-tns">TotallyNotSpyware</router-link>. Nella maggior parte dei casi, TotallyNotSpyware è generalmente migliore e più semplice rispetto ad installare manualmente Meridian.

:::

Meridian è in grado di eseguire il jailbreak di tutti dispositivi A7-A10(X) con una versione del firmware 10.0-10.3.3.

Tieni a mente che il jailbreak di Meridian <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">non è “persistente”</router-link> (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di Meridia sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l'app di Meridian sul tuo dispositivo iOS nello step successivo.

## Download

- L'ultima versione di [Meridian](https://github.com/PsychoTea/MeridianJB/releases/download/v0.9-007/Meridian-v0.9-007.ipa)
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell'applicazione Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di Meridian su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di Meridian adesso può essere aperta dalla home screen.

## Eseguire Meridian

1. Apri l'applicazione di Meridian dalla home screen
2. Clicca su “Jailbreak”

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. È possibile utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-zebra">Installa Zebra</router-link>

:::
