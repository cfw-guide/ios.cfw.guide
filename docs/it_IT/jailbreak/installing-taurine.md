---
lang: it_IT
title: Taurine
description: Guida per l’installazione di Taurine
permalink: /it_IT/installing-taurine
redirect_from:
  - /it_IT/taurine
  - /it_IT/tr
pkgman: sileo
extra_contributors:
  - hopolapopola
---

Taurine è un <router-link to="/it_IT/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, richiede l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.

Il tool è compatibile con tutti i dispositivi sulle versioni di iOS/iPadOS da 14.0 a 14.8.1.

A causa di come funzionano i jailbreak semi-untethered, l'app avrà bisogno di essere <router-link to="/resigning-apps">ri-firmata</router-link> ogni 7 giorni. Tuttavia, hai anche la possibilità di installare una versione dell'app di Taurine firmata in modo permanente dopo aver eseguito il jailbreak.

Utilizzeremo Sideloadly per installare l'app di Taurine sul tuo dispositivo iOS nello step successivo.

::: tip

Se sei su un dispositivo A12 o più recente, è **altamente** consigliato seguire <router-link to="/installing-taurine-trollstore">Taurine (Trollstore)</router-link> .

:::

::: warning

Se attualmente hai eseguito il jailbreak tramite un altro tool (escluso Odysseyra1n), assicurati di <router-link to="/restoring-rootfs">rimuoverlo correttamente</router-link> prima di proseguire.

:::

::: warning

Il supporto *affidabile* per iPad Pro M1 da 1TB e da 2TB richiede una versione *non ufficiale* di Taurine. Se non si è a proprio agio con l'utilizzo di una versione non ufficiale, si può provare ad utilizzare quella ufficiale, ma sarà estremamente poco probabile che funzionerà correttamente.

:::

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Taurine è attualmente firmato su <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L’ultima versione di [Taurine](https://taurine.app/)
    - Se hai un iPad Pro M1 da 1TB o 2TB, puoi scegliere di utilizzare l'ultima versione di [Taurine non ufficiale](https://github.com/TheMasterOfMike/Taurine/releases/tag/1.1.7-3_M1) (se non hai un iPad Pro con M1 **non utilizzare questa versione non ufficiale**)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di Taurine su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Taurine adesso può essere aperta dalla home screen.

## Eseguire Taurine

1. Riavvia il dispositivo
    - Questo passaggio non è necessario ma consigliato
1. Apri l’applicazione di Taurine dalla home screen appena dopo il riavvio
1. Clicca su “Jailbreak”
1. Quando richiesto, riavvia il dispositivo
1. Apri l’applicazione di Taurine dalla home screen appena dopo il riavvio
1. Clicca su “Jailbreak”

::: tip

Se sul dispositivo l’app, crasha/si riavvia inaspettatamente e il jailbreak non è installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::

::: warning

Se ricevi l'errore `ERR_Jailbreak`, `ERR_Already_Jailbroken` o `ERR_KernRW` leggi la sezione Taurine/Odyssey sulla <router-link to="/troubleshooting/#common-errors-on-odyssey-and-taurine">pagina di Troubleshooting</router-link> Troubleshooting.

:::

Adesso dovresti essere jailbroken con Sileo installato nella home screen. Puoi utilizzare Sileo per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.

## Installare il software necessario

1. Apri l'applicazione di Sileo
1. Clicca sulla sezione "Cerca"
1. Cerca "libiosexec1"
1. Premi su "Installa"
1. Tocca la barra della coda in fondo alla pagina
1. Clicca su “Conferma”
1. Una volta terminato, tocca "Fatto"
1. Cerca "libhooker (common)", "PreferenceLoader" e "RocketBootstrap" e aggiungili alla coda premendo "Installa"
    - Mentre stai preparando la coda, non installare nulla che viene messo in coda finché non hai selezionato tutti i programmi da installare
1. Tocca la barra della coda in fondo alla pagina
1. Clicca su “Conferma”
1. Una volta terminato, tocca 'Riavvia la SpringBoard'

Dopo aver installato il software necessario, è anche possibile installare taurine-permanent per avere una versione dell'app di Taurine firmata in modo permanente, che consigliamo di installare.

## Installazione di taurine-permanent

::: warning

taurine-permanent installerà l'ultima versione *ufficiale* di Taurine.

Se stai utilizzando la versione non ufficiale per il supporto affidabile su iPad Pro M1, puoi installare alternativamente TrollStore (tramite il pacchetto TrollStore Helper della repo havoc.app) e installare la versione non ufficiale da lì, per firmarlo permanentemente.

:::

1. Riapri l'applicazione di Sileo
1. Clicca sulla sezione "Cerca"
1. Cerca "taurine-permanent"
1. Premi su "Installa"
1. Tocca la barra della coda in fondo alla pagina
1. Clicca su “Conferma”
1. Una volta terminato, tocca "Fatto"
