---
lang: it_IT
title: "Sideloadare le App"
description: Guida all'utilizzo del sideloading e al re-sign delle app con o senza computer
permalink: /it_IT/sideloading-apps
redirect_from:
  - /it_IT/resign
  - /it_IT/resigning
  - /it_IT/altstore
  - /it_IT/altdaemon
  - /it_IT/altserver
  - /it_IT/altdeploy
  - /it_IT/sideload
  - /it_IT/sideloading
  - /it_IT/reprovision
  - /it_IT/repro
  - /it_IT/reprovision-reborn
  - /it_IT/sideloadly
  - /it_IT/resigning-apps
extra_contributors:
  - ssalagginkool
  - TheHacker894
---

## Lettura Necessaria

I jailbreak semi-untethered richiedono l'utilizzo di un'app sideloadata per eseguire il jailbreak. Le app sideloadate con un ID Apple normale scadranno dopo 7 giorni (o 365 giorni con un ID Apple Developer). Dopo quel periodo, non sarai più in grado di aprire l'app per ri-eseguire il jailbreak.

::: danger

Se utilizzi la versione beta di iOS 16, dovrai seguire qualche passaggio extra prima di essere in grado di aprire le app sideloadate:

1. Apri le Impostazioni
1. Vai su Privacy e Sicurezza e trova la voce `Modalità sviluppatore`
1. Attiva la modalità sviluppatore e premi `Riavvia`
1. Dopo il riavvio del dispositivo, sbloccalo e conferma di voler abilitare la Modalità Sviluppatore
  - Se hai abilitato un codice di accesso, dovrai inserirlo.

:::

## Sideloadare le App

### Sideloadare utilizzando Sideloadly

::: tip

Sideloadly è compatibile con iOS 7 e versioni successive.

:::

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina un file `.ipa` a tua scelta su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

### Sideloadare utilizzando Altstore

<!--I will add AltStore 1.5 soon don't worry-->

::: tip

AltServer è compatibile solo con iOS 12.2 e versioni successive.

:::

1. Scarica le ultime versioni [AltServer](http://altstore.io/), [iTunes](https://www.apple.com/itunes/download/win32) se su Windows e [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) se su Windows
1. Installa AltServer per il corrispondente sistema operativo
    - Su macOS, apri l'app Mail e apri `Mail` -> `Preferenze` nella barra dei menu
    - Fare clic sulla sezione `Generali`, `Gestisci plug-in`, e applica `AltPlugin`
1. Collega il tuo dispositivo iOS al tuo Mac o PC tramite USB
1. Clicca su AltStore/AltServer nella barra dei menu/barra di sistema
1. Clicca Install AltStore
    - Segui le istruzioni a schermo
1. Apri Impostazioni e vai su `Generali` -> `Gestione Dispositivo` e verifica AltStore
1. Apri iTunes (Windows o macOS Mojave o più vecchio) o Finder (macOS Catalina o più recente) e abilita la sincronizzazione WiFi
1. Scarica il file IPA desiderato e aprilo su AltStore sul tuo dispositivo iOS.
    - Assicurati che il tuo dispositivo iOS e il Mac o il PC Windows siano collegati alla stessa rete Wi-Fi

## Re-Signare le App

### Re-Signare utilizzando Reprovision Reborn

::: tip

ReProvision Reborn è compatibile con iOS 9 e più recenti

:::

1. Aggiungi la repo di Havoc al tuo gestore di pacchetti preferito ([havoc.app](https://havoc.app/))
1. Installa Reprovison Reborn
1. Apri Reprovision Reborn and segui le istruzioni a schermo
    - Ti sarà richiesto di inserire il tuo AppleID. Esso viene inviato solo a Apple e nessun altro.

### Re-Signare utilizzando AltDaemon

::: tip

AltDaemon, che utilizza AltStore, è compatibile solo con iOS 12.2 e versioni successive.

:::

AltDaemon consente a AltStore di ri-firmare automaticamente le applicazioni, senza dover connettersi a un computer che esegue AltServer sulla rete locale.

1. Aggiungi la repo di Chariz al tuo gestore di pacchetti ([repo.chariz.com](https://repo.chariz.com/))
1. Scarica e installa il tweak "AltDaemon"
1. Chiudi il gestore di pacchetti
1. Firma tutte le applicazioni che stanno per scadere
