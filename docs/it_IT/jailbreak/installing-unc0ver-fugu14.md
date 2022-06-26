---
lang: it_IT
title: unc0ver (Fugu14)
description: Guida all'installazione di unc0ver con Fugu14
permalink: /it_IT/installing-unc0ver-fugu14
pkgman: cydia
redirect_from:
  - /it_IT/installing-uncover-fugu14
  - /it_IT/installing-unc0ver-(fugu14)
  - /it_IT/installing-uncover-(fugu14)
---

unc0ver è un <router-link to="/it_IT/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, richiede l'utilizzo di un'app per ri-eseguire l'exploit dopo un riavvio.

Il metodo di unc0ver con Fugu14 supporta i dispositivi A12+ su iOS 14.3-14.5.1

::: danger

Il metodo di unc0ver con Fugu14 non supporta le versioni beta di iOS. Se sei su una qualsiasi delle beta di iOS 14.3, segui <router-link to="/it_IT/installing-taurine">Taurine</router-link>. Se si è su 14.4 beta o 14.5 beta, non si può eseguire il jailbreak e quindi non si può procedere ulteriormente.

:::

Utilizzeremo il tool di AltStore che ci permetterà di impostare tutto per poter eseguire il jailbreak.

## Download

- L’ultima versione di [unc0ver](https://unc0ver.dev)
- L'ultima versione di [Altstore](http://altstore.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows
- L’ultima versione di [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) se sei su Windows

## Installazione di Altstore

1. Scarica AltStore per il tuo rispettivo sistema operativo
1. Avvia AltStore/AltServer
    - Su macOS, apri l'app Mail e apri `Mail` -> `Preferenze` nella barra dei menu
    - Fare clic sulla sezione `Generali`, `Gestisci plug-in`, e applica `AltPlugin`
1. Collega il tuo dispositivo iOS al tuo Mac o PC tramite USB
1. Clicca su AltStore/AltServer nella barra dei menu/barra di sistema
1. Clicca Install AltStore
    - Segui le istruzioni sullo schermo
1. Apri Impostazioni e vai su `Generali` -> `Gestione Dispositivo` e verifica AltStore
1. Scarica [unc0ver](https://unc0ver.dev) sul tuo dispositivo iOS e aprine il file `.ipa` su AltStore
    - Assicurati che il tuo dispositivo iOS e il Mac o PC siano collegati alla stessa rete Wi-Fi
1. Una volta che il file `.ipa` viene installato, dovresti vedere un prompt che ti comunica che il jailbreak richiede un untethering, clicca su `Install Untethered Jailbreak`
    - Se non vedi questo prompt dopo aver installato il `.ipa`, il tuo dispositivo/versione è incompatibile e dovresti tornare a <router-link to="/it_IT/get-started">Cominciamo!</router-link>.
1. AltStore installerà un'applicazione "segnaposto", una volta completata, tocca `Open Placeholder`
1. Premi `Setup Fugu14`, poi una volta completato il processo, premi `OK`
1. Riapri AltStore
1. AltStore patcherà quindi la cosiddetta applicazione segnaposto, una volta completato, tocca `Open Placeholder` ancora una volta
1. Clicca su `Install Untether`
1. Una volta terminata l'installazione, tocca `Riavvia ora` e consenti al dispositivo di riavviarsi
1. Riapri AltStore
1. Toccare `Installa unc0ver` e consenti l'installazione di unc0ver.
1. Premi `Open unc0ver`

## Eseguire unc0ver

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

Se ricevi l’errore `rootFS already mounted, elimina l’aggiornamento OTA`, leggi la <router-link to="/it_IT/troubleshooting/#rootfs-already-mounted">pagina di Risoluzione problemi</router-link> .

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/it_IT/installing-sileo">Installare Sileo</router-link>

:::
