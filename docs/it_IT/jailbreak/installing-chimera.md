---
lang: it_IT
title: Chimera
description: Guida per l’installazione di Chimera
permalink: /it_IT/installing-chimera
redirect_from:
  - /it_IT/chimera
  - /it_IT/cm
pkgman: sileo
extra_contributors:
  - TheHacker894
  - Mineek
---

Chimera è un <router-link to="/it_IT/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, richiede l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.

Chimera è in grado di eseguire il jailbreak su tutti i dispositivi da iOS 12.0 a 12.1.2 e sui dispositivi A7-A11 da iOS 12.0 a 12.5.7.

A causa di come funzionano i jailbreak semi-untethered, l'app avrà bisogno di essere <router-link to="/it_IT/resigning-apps">ri-firmata</router-link> ogni 7 giorni.

Utilizzeremo Sideloadly per installare l'app di Chimera sul tuo dispositivo iOS nello step successivo.

::: warning

Se possiedi un dispositivo con un SoC A12, come l’iPhone XS, puoi usare Chimera solo su iOS 12.0-12.1.2.

:::

::: warning

Se attualmente hai eseguito il jailbreak tramite un altro tool (escluso Odysseyra1n), assicurati di <router-link to="/it_IT/restoring-rootfs">rimuoverlo correttamente</router-link> prima di proseguire.

:::

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Chimera è attualmente firmato su <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L’ultima versione di [Chimera](https://chimera.coolstar.org/)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di Chimera su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `< Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Chimera adesso può essere aperta dalla home screen.


## Eseguire Chimera

1. Riavvia il dispositivo
    - Questo passaggio non è necessario ma consigliato
1. Apri l’applicazione di Chimera dalla home screen appena dopo il riavvio
1. Clicca su “Jailbreak”
1. Quando richiesto, riavvia il dispositivo
    - Se non viene richiesto ed il dispositivo si riavvia in automatico, aspetta 1-2 minuti e riprova.
    - Questa volta, è necessario
1. Apri nuovamente l’applicazione di Chimera dalla home screen appena dopo il riavvio
1. Clicca di nuovo su “Jailbreak”
    - Se si riavvia automaticamente o crasha ed il jailbreak non è installato, aspetta 1-2 minuti e riprova.

::: warning

Se l’app od il dispositivo continua a crashare/riavviarsi inaspettatamente ed il jailbreak non viene installato nonostante gli step precedenti, prova a mettere il dispositivo in un freezer per 1-2 minuti.

:::

Adesso dovresti essere jailbroken con Sileo installato nella home screen. Puoi utilizzare Sileo per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
