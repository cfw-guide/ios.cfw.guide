---
lang: it_IT
title: Taurine (Trollstore)
description: Guida all'installazione di Taurine utilizzando TrollStore
permalink: /it_IT/installing-taurine-trollstore
pkgman: sileo
extra_contributors:
  - opa334
  - iCraze
---

Taurine è un <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, richiede quindi l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.

::: warning


Per seguire questo metodo, avrai bisogno di un dispositivo A12 o più recente. Se hai un dispositivo A11 o precedente, segui <router-link to="/installing-taurine">Installa Taurine</router-link> .

:::


Nonostante con Taurine sia possibile eseguire il jailbreak di qualsiasi device su iOS/iPadOS da 14.0 a 14.8.1, questo metodo per ottenere Taurine necessita di un dispostitvo con A12 o successivi.

::: warning


Se sei già jailbroken con unc0ver, assicurati di <router-link to="/removing-unc0ver">rimuovere unc0ver</router-link> prima di procedere.

:::


::: warning


Il supporto *affidabile* per iPad Pro con M1 da 1TB e da 2TB richiede una versione *non ufficiale* di Taurine. Se non si è a proprio agio con l'utilizzo di una versione non ufficiale, si può provare ad utilizzare quella ufficiale, ma sarà estremamente poco probabile che funzionerà correttamente.

:::


## Download

- L’ultima versione di [Taurine](https://taurine.app/)
    - Se hai un iPad Pro M1 da 1TB o 2TB, puoi scegliere di utilizzare l'ultima versione di [Taurine non ufficiale](https://github.com/TheMasterOfMike/Taurine/releases/tag/1.1.7-3_M1) (se non hai un iPad Pro con M1 **non utilizzare questa versione non ufficiale**)
    - Assicurati di scaricare il file `.ipa` **sul tuo dispositivo iOS**

## Installazione di TrollHelper

1. Apri Safari
1. Vai su [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
1. Clicca su `Install`

Un'app chiamata `GTA Car Tracker` verrà installata sul tuo dispositivo iOS, anche se in realtà è l'app di TrollHelper.

## Installazione di TrollStore

1. Apri l'app `GTA Car Tracker`
1. Clicca su `Register Persistence Helper`
1. Clicca `Install TrollStore`

L'applicazione TrollStore verrà ora installata sul tuo dispositivo iOS.

## Taurine

1. Torna alla scheda `Apps`
1. Premi sul `+` in alto a destra
1. Vai a dove hai salvato il file `.ipa` di Taurine
1. Tocca il file Taurine `.ipa`
1. Clicca su `Install`

L'app di Taurine sarà ora installata sul tuo dispositivo.

## Eseguire Taurine

1. Riavvia il dispositivo
    - Questo passaggio non è necessario ma consigliato
1. Apri l’applicazione di Taurine dalla home screen appena dopo il riavvio
1. Clicca su “Jailbreak”
1. Quando richiesto, riavvia il dispositivo
1. Apri l’applicazione di Taurine dalla home screen appena dopo il riavvio
1. Clicca su “Jailbreak”

::: tip


Se sul dispositivo l’app, crasha/si riavvia inaspettatamente ed il jailbreak non viene installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::


::: warning


Se ricevi l'errore `ERR_Jailbreak`, `ERR_Already_Jailbroken` o `ERR_KernRW` leggi la sezione Taurine/Odyssey sulla <router-link to="/troubleshooting/#common-errors-on-odyssey-and-taurine">pagina di Troubleshooting</router-link> Troubleshooting.

:::


Adesso dovresti essere jailbroken con Sileo installato nella home screen. Puoi utilizzare Sileo per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro.

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