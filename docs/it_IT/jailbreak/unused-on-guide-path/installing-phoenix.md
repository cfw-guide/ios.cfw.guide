---
lang: it_IT
title: Phoenix
description: Guida per l’installazione di Phoenix
permalink: /it_IT/installing-phoenix
redirect_from:
  - /installing-phœnix
  - /phœnix
  - /phoenix
  - /pn
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - TheHacker894
---

Phoenix è in grado di eseguire il jailbreak su dispositivi iOS a 32 bit con una versione del firmware 9.3.5 e 9.3.6.

Tieni a mente che il jailbreak di Phoenix non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di Phoenix sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l'app di Phoenix sul tuo dispositivo iOS nello step successivo.

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Phœnix è attualmente firmato su <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L'ultima versione di [Phœnix](https://phoenixpwn.com/)
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell'applicazione Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di Phœnix su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di Phoenix adesso può essere aperta dalla home screen.

## Eseguire Phoenix

1. Apri l'applicazione di Phoenix dalla home screen
2. Tocca `Prepare for Jailbreak` - `Accept` - `Dismiss` - `Proceed with Jailbreak` - `Begin Installation` - `Use Provided Offsets`

Quando eseguirai il jailbreak per una seconda volta, un'opzione chiamata "Kickstart Jailbreak" sostituirà "Prepare for Jailbreak". Clicca su quella invece.

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. È possibile utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-zebra">Installa Zebra</router-link>

:::
