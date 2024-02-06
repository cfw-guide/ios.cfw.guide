---
lang: it_IT
title: unc0ver (Fugu14)
description: Guida all'installazione di unc0ver con Fugu14
permalink: /it_IT/installing-unc0ver-fugu14
pkgman: cydia
redirect_from:
  - /installing-uncover-fugu14
  - /installing-unc0ver-(fugu14)
  - /installing-uncover-(fugu14)
---

unc0ver è un <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, il che significa che richiede un'app per riapplicare l'exploit dopo un riavvio.

Il metodo di unc0ver con Fugu14 supporta i dispositivi A12+ su iOS 14.3-14.5.1

::: warning

Il metodo di unc0ver con Fugu14 non supporta le versioni beta di iOS. Se sei su una versione beta di iOS 14.3, 14.4, o 14.5, segui <router-link to="/installing-taurine-trollstore">Installazione Taurine (TrollStore)</router-link>.

:::

Utilizzeremo il tool di AltStore che ci permetterà di impostare tutto per poter eseguire il jailbreak.

## Download

- L'ultima versione di [unc0ver](https://unc0ver.dev)
- L'ultima versione di [AltStore](http://altstore.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows
- L’ultima versione di [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) se sei su Windows

## Installazione di Altstore

1. Scarica AltStore per il tuo rispettivo sistema operativo
2. Avvia AltStore/AltServer
   - Su macOS, apri l'app Mail e apri `Mail` -> `Preferenze` nella barra dei menu
   - Fare clic sulla sezione `Generali`, `Gestisci plug-in`, seleziona `AltPlugin` e applica
3. Collega il tuo dispositivo iOS al tuo Mac o PC tramite USB
4. Clicca su AltStore/AltServer nella barra dei menu/barra di sistema
5. Clicca Install AltStore
   - Segui le istruzioni sullo schermo
6. Apri Impostazioni e vai su `Generali` - `Gestione Dispositivo` e verifica AltStore
7. Scarica [unc0ver](https://unc0ver.dev) sul tuo dispositivo iOS e apri il file `.ipa` su AltStore
   - Assicurati che il tuo dispositivo iOS e il Mac o PC siano collegati alla stessa rete Wi-Fi
8. Una volta che il file `.ipa` viene installato, dovresti vedere un prompt che ti comunica che il jailbreak richiede un untethering, clicca su `Install Untethered Jailbreak`
   - Se non vedi questo prompt dopo aver installato il file `.ipa`, il tuo dispositivo/versione è incompatibile e dovresti tornare a <router-link to="/get-started">Cominciamo!</router-link>.
9. AltStore installerà un'applicazione segnaposto, una volta completata, tocca `Open Placeholder`
10. Premi `Setup Fugu14`, poi una volta completato il processo, premi `OK`
11. Riapri AltStore
12. AltStore patcherà quindi la cosiddetta applicazione segnaposto, una volta completato, tocca `Open Placeholder` ancora una volta
13. Clicca su `Install Untether`
14. Una volta terminata l'installazione, tocca `Riavvia ora` e consenti al dispositivo di riavviarsi
15. Riapri AltStore
16. Tocca `Installa unc0ver` e consenti l'installazione di unc0ver.
17. Premi `Open unc0ver`

## Eseguire unc0ver

1. Apri il menu delle impostazioni e disabilita `Disabilita aggiornamenti automatici`
   - unc0ver di default disabilita gli aggiornamenti “Over-The-Air”, comunque è consigliato disabilitare questa feature perché potrebbe causare problemi durante un aggiornamento manuale
2. Clicca su “Done”
3. Clicca su “Jailbreak”
4. Quando richiesto, riavvia il dispositivo
5. Apri l’applicazione di unc0ver dalla home screen subito dopo aver eseguito il riavvio
6. Clicca su “Jailbreak”

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
