---
lang: it_US
title: unc0ver (TrollStore)
description: Guida all'installazione di unc0ver utilizzando TrollStore
permalink: /it_IT/installing-unc0ver-trollstore
redirect_from:
  - /installing-uncover-trollstore
pkgman: Cydia
extra_contributors:
  - opa334
  - iCraze
---

unc0ver è un <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, il che significa che richiede un'app per riapplicare l'exploit dopo un riavvio.

::: warning

Per seguire questo metodo, avrai bisogno di un dispositivo A12 o più recente con versioni di iOS da 14.0 a 14.3 o da 14.6 a 14.8. Se hai un dispositivo con A11 o precedenti o stai eseguendo iOS 13.7 o precedenti, segui <router-link to="/installing-unc0ver">Installare unc0ver</router-link>.

Se hai un dispositivo con A12 o successivi su versioni di iOS da 14.4 a 14.5.1, continua in <router-link to="/installing-unc0ver-fugu14">Installare unc0ver (Fugu14)</router-link>.

:::

Nonostante unc0ver sia compatibile con il jailbreak di diversi dispositivi su versioni iOS/iPadOS da 11.0 a 14.8 (escludendo iOS 12.5.6), questo metodo di ottenere unc0ver richiede un dispositivo con A12 o successivi che esegue versioni iOS da 14.0 a 14.3 o da 14.6 a 14.8.

::: warning

Se stai già eseguendo il jailbreak con Taurine, assicurati di <router-link to="/removing-taurine">rimuovere Taurine</router-link> accuratamente prima di procedere.

:::

::: warning

unc0ver su versioni del firmware 14.6-14.8 supporta solo iPhone A12 e A13.

:::

## Download

- l'applicazione
  - Se sei su iOS da 14.6 a 14.8, scarica l'ultima versione di [unc0ver](https://unc0ver.dev/)
    - Se sei su iOS da 14.6 a 14.8, scarica anche l'ultima versione di [u0Launcher](https://github.com/opa334/u0Launcher/releases)
  - Se sei su iOS da 14.0 a 14.3, scarica la versione 6.1.1 di [unc0ver](https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa)
  - Assicurati di scaricare i file sopraindicati **sul tuo dispositivo iOS**

## Installazione di TrollHelper

1. Apri Safari
2. Vai su [https://api.jailbreaks.app/troll64e](https://api.jailbreaks.app/troll64e)
3. Premi su `Installa`

Un'app chiamata `GTA Car Tracker` verrà installata sul tuo dispositivo iOS, anche se in realtà è l'app di TrollHelper.

## Installare TrollStore

1. Apri l'app `GTA Car Tracker`
2. Clicca `Installa TrollStore`

L'applicazione TrollStore verrà ora installata sul tuo dispositivo iOS.

## Installare Persistence Helper

1. Riapri l'app `GTA Car Tracker`
2. Clicca su `Register Persistence Helper`

L'app `GTA Car Tracker` può ora essere utilizzata come Persistence Helper

::: tip

Il motivo per cui la Persistence Helper è molto importante è che, ogni volta che iOS ricostruisce la sua cache delle icone, tutte le applicazioni installate da TrollStore (così come TrollStore stesso) scompariranno o non si apriranno più.

Per aggirare ciò, il Persistence Helper (che sarà ancora aperto anche dopo che questo accade) può aggiornare le registrazioni delle app in modo che le applicazioni riappariranno e si apriranno di nuovo.

:::

## unc0ver

1. Torna alla scheda `Apps`
2. Premi sul `+` in alto a destra
3. Vai a dove hai salvato il file `.ipa` di unc0ver
4. Tocca il file `.ipa` di unc0ver
5. Premi su `Installa`

L'app di unc0ver sarà ora installata sul tuo dispositivo.

::: warning

Se sei su iOS da 14.6 a 14.8, dovrai ripetere questi step per il file `.ipa` di u0Launcher.

:::

## Eseguire unc0ver

1. Riavvia il dispositivo
   - Questo passaggio non è necessario ma consigliato
2. Apri l’applicazione di unc0ver dalla home screen appena dopo il riavvio
   - Se sei su iOS da 14.6 a 14.8, dovrai invece aprire l'app di u0Launcher
3. Apri il menu delle impostazioni e disabilita `Disabilita aggiornamenti automatici`
   - unc0ver di default disabilita gli aggiornamenti “Over-The-Air”, comunque è consigliato disabilitare questa feature perché potrebbe causare problemi durante un aggiornamento manuale
4. Clicca su “Done”
5. Clicca su “Jailbreak”
6. Quando richiesto, riavvia il dispositivo
7. Apri l’applicazione di unc0ver dalla home screen subito dopo aver eseguito il riavvio
   - Se sei su iOS da 14.6 a 14.8, dovrai invece aprire l'app di u0Launcher
8. Clicca su “Jailbreak”

::: tip

Se sul dispositivo l’app, crasha/si riavvia inaspettatamente e il jailbreak non è installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::

::: warning

Se ricevi l'errore `rootFS già montato, elimina l'aggiornamento OTA`, leggi la pagina di <router-link to="/troubleshooting/#rootfs-already-mounted">Risoluzione dei problemi</router-link>

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. È possibile utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-sileo">Installazione di Sileo</router-link>

:::
