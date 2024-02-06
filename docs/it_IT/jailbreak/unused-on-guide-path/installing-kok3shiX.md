---
lang: it_US
title: Installare kok3shiX
description: Guida per l’installazione di kok3shiX
permalink: /it_IT/installing-kok3shiX
redirect_from:
  - /kok3shiX
  - /kokeshiX
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - hopolapopola
---

kok3shiX è in grado di eseguire il jailbreak di tutti dispositivi iOS a 32 bit con una versione del firmware 10.3-10.3.4.

Tieni a mente che il jailbreak di kok3shiX non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di kok3shiX sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l’applicazione sul dispositivo.

::: warning

kok3shiX è ancora in Alfa, di conseguenza si potrebbero riscontrare dei problemi. Fai un backup dei tuoi dati prima di continuare.

In alternativa, puoi seguire <router-link to="/installing-socket">Installazione di Socket</router-link>.

:::

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
kok3shiX è attualmente firmato su <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L'ultima versione di [kok3shiX](https://kok3shidoll.github.io/download/kokeshi/kokeshiX_v1.0_alpha_2.ipa)
- L'ultima versione di [Sideloadly](https://sideloadly.io/)

## Installazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di kok3shiX su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di kok3shiX adesso può essere aperta dalla home screen.

## Eseguire kok3shiX

1. Apri l'applicazione di kok3shiX dalla home screen
2. Clicca su “Jailbreak”

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. È possibile utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-zebra">Installa Zebra</router-link>

:::
