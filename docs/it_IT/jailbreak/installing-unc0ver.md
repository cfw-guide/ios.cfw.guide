---
lang: it_IT
title: unc0ver
description: Guida per l'installazione di unc0ver
permalink: /it_IT/installing-unc0ver
redirect_from:
  - /it_IT/installing-uncover
  - /it_IT/unc0ver
  - /it_IT/uncover
  - /it_IT/u0
  - /it_IT/uo
pkgman: cydia
extra_contributors:
  - TheHacker894
---

unc0ver è un <router-link to="/it_IT/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, richiede l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.

Questo tool è in grado di eseguire il Jailbreak su quasi tutti i dispositivi iOS su una versione del firmware che va da 11.0 a 14.8 (escluso iOS 12.5.6), tuttavia, lo utilizzeremo solo per eseguire il jailbreak dei dispositivi il quale non è disponibile un'opzione più semplice.

A causa di come funzionano i jailbreak semi-untethered, l'app avrà bisogno di essere <router-link to="/it_IT/resigning-apps">ri-firmata</router-link> ogni 7 giorni.

Utilizzeremo Sideloadly per installare l'app di unc0ver sul tuo dispositivo iOS nello step successivo.

::: tip

Se stai cercando una guida per usare unc0ver su dispositivi A12+ con una versione di iOS 14.4-14.5.1, continua con <router-link to="/it_IT/installing-unc0ver-fugu14">unc0ver (Fugu14)</router-link>

:::

::: warning

Se attualmente hai eseguito il jailbreak tramite un altro tool, assicurati di <router-link to="/it_IT/restoring-rootfs">rimuoverlo correttamente</router-link> prima di proseguire.

:::

::: warning

unc0ver su versioni del firmware 14.6-14.8 supporta solo iPhone A12 e A13.

:::

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
unc0ver è attualmente firmato su <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- Versione 5.3.1 di [unc0ver](https://unc0ver.dev/downloads/5.3.1/72004596b31ba3eae886ac6cc781725879d3b7a4/unc0ver_5.3.1.ipa)
  - Agli utenti con una versione del firmware 12.4.9 - 12.5.4, 13.5.1 - 14.3 è consigliato invece di scaricare la versione 6.1.1 di [unc0ver](https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa)
  - Agli utenti con una versione del firmware 12.5.5 è consigliato invece di scaricare la versiobe 7.0.2 di [unc0ver](https://unc0ver.dev/downloads/7.0.2/11c3f7b0eea806ba3cac975f74dcc2cc4e916bac/unc0ver_Release_7.0.2.ipa)
  - Agli utenti con una versione del firmware 12.5.5 o con un iPhone A12 o A13 è consigliato invece di scaricare l'ultima versione [unc0ver](https://unc0ver.dev)
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L'ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer tramite cavo
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di unc0ver su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta ai suoi server per funzionare con gli account sviluppatore gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai in `Impostazioni`-> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di unc0ver adesso può essere aperta dalla home screen.

## Eseguire unc0ver

1. Riavvia il tuo dispositivo
    - Questo passaggio non è necessario ma consigliato
1. Apri l’applicazione di unc0ver dalla home screen appena dopo il riavvio
    - Se unc0ver da l’avviso “the app has been tampered with”, reinstalla unc0ver tramite Sideloadly
1. Apri il menù delle impostazioni e disabilita la voce `Disable Auto Updates`
    - unc0ver di default disabilita gli aggiornamenti “Over-The-Air”, comunque è consigliato disabilitare questa feature perché potrebbe causare problemi durante un aggiornamento manuale
1. Clicca su “Done”
1. Clicca su “Jailbreak”
1. Quando richiesto, riavvia il dispositivo
1. Apri l’applicazione di unc0ver dalla home screen subito dopo aver eseguito il riavvio
1. Clicca su “Jailbreak”

::: tip

Se sul dispositivo l’app, crasha/si riavvia inaspettatamente ed il jailbreak non viene installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::

::: warning

Se ricevi l’errore `rootFS already mounted, elimina l’aggiornamento OTA`, leggi la <router-link to="/it_IT/troubleshooting/#rootfs-already-mounted">Pagina di</router-link> Troubleshooting

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.

::: tip

Se si desidera utilizzare un gestore di pacchetti più moderno, continua a seconda della versione di iOS:

- Se si è su iOS 12 o successivi, continua com <router-link to="/installing-sileo">Installare Sileo</router-link>
- Se si è su iOS 11 o successivi, continua con <router-link to="/installing-zebra">Installare Zebra</router-link>

:::
