---
lang: it_IT
title: Odyssey
description: Guida per l'installazione di Odyssey
permalink: /it_IT/installing-odyssey
redirect_from:
  - /it_IT/odyssey
  - /it_IT/od
pkgman: sileo
extra_contributors:
  - TheHacker894
  - hopolapopola
  - raizo
---

Odyssey è un <router-link to="/it_IT/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, richiede l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.

Il tool è compatibile con dispositivi su versioni di iOS/iPadOS 13.0-13.7.

A causa di come funzionano i jailbreak semi-untethered, l'app avrà bisogno di essere <router-link to="/it_IT/resigning-apps">ri-firmata</router-link> ogni 7 giorni.

Utilizzeremo Sideloadly per installare l'app di Odyssey sul tuo dispositivo iOS nello step successivo.

::: warning

Se attualmente hai eseguito il jailbreak tramite un altro tool (escluso Odysseyra1n), assicurati di <router-link to="/it_IT/restoring-rootfs">rimuoverlo correttamente</router-link> prima di proseguire.

:::

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Odyssey è attualmente firmato su <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L’ultima versione di [Odyssey](https://theodyssey.dev/)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di Odyssey su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta ai suoi server per funzionare con gli account sviluppatore gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Odyssey adesso può essere aperta dalla home screen.

## Eseguire Odyssey

1. Riavvia il dispositivo
    - Questo passaggio non è necessario ma consigliato
1. Apri l’applicazione di Odyssey dalla home screen appena dopo il riavvio
1. Clicca su “Jailbreak”

::: tip

Se sul dispositivo l’app, crasha/si riavvia inaspettatamente ed il jailbreak non viene installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::

::: warning

Se ricevi l'errore `ERR_Jailbreak`, `ERR_Already_Jailbroken` o `ERR_TFP0` leggi la sezione Taurine/Odyssey <router-link to="/it_IT/troubleshooting/#common-errors-on-odyssey-and-taurine">sulla</router-link> pagina di TroubleShooting.

:::

Adesso dovresti essere jailbroken con Sileo installato nella home screen. Puoi utilizzare Sileo per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
