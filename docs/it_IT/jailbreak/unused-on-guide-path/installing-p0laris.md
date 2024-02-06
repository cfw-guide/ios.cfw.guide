---
lang: it_US
title: p0laris
description: Guida per l'installazione di p0laris
permalink: /it_IT/installing-p0laris
redirect_from:
  - /p0laris
  - /polaris
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - TheHacker894
---

p0laris è in grado di eseguire il jailbreak dei dispositivi A5(X) con una versione del firmware 9.3.5 e 9.3.6.

Tieni a mente che il jailbreak di p0laris non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di p0laris sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l'app di p0laris sul tuo dispositivo iOS nello step successivo.

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
p0laris è attualmente firmato su <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L'ultima versione di [p0laris](https://p0laris.dev/)
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell'applicazione Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di p0laris su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di p0laris adesso può essere aperta dalla home screen.

## Eseguire p0laris

1. Apri l'applicazione di p0laris dalla home screen
2. Clicca su `Jailbreak`

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. È possibile utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-zebra">Installa Zebra</router-link>

:::
