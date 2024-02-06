---
lang: it_IT
title: Electra
description: Guida per installare Electra
permalink: /it_IT/installing-electra
redirect_from:
  - /it_IT/electra
  - /it_IT/el
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](http://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: sileo
extra_contributors:
  - TheHacker894
---

Electra è un <router-link to="/it_IT/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, richiede l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.

Il tool è compatibile con dispositivi su versioni iOS da 11.0 a 11.4.1.

A causa di come funzionano i jailbreak semi-untethered, l'app avrà bisogno di essere <router-link to="/it_IT/resigning-apps">ri-firmata</router-link> ogni 7 giorni.

Utilizzeremo Sideloadly per installare l'app di Electra sul tuo dispositivo iOS nello step successivo.

::: warning

Se hai già eseguito il jailbreak con unc0ver, assicurati di [rimuoverlo](/removing-unc0ver) prima di procedere.

:::

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Electra è attualmente firmato su <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L'ultima versione di [Electra](https://coolstar.org/electra/)
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L'ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer tramite cavo
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di Electra su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta ai suoi server per funzionare con gli account sviluppatore gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai in `Impostazioni`-> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Electra adesso può essere aperta dalla home screen.

## Eseguire Electra

1. Apri l'applicazione di Electra dalla home screen
1. Clicca su “Jailbreak”

::: warning

Se sul dispositivo l’app, crasha/si riavvia inaspettatamente ed il jailbreak non viene installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Sileo installato nella home screen. Puoi utilizzare Sileo per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
