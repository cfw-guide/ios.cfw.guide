---
lang: it_IT
title: Installare meowbrek2
description: Guida sull'installazione di meowbrek2
permalink: /it_IT/installing-meowbrek2
pkgman: sileo
---

meowbrek2 è un <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, il che significa che richiede un'app per riapplicare l'exploit dopo un riavvio.

meowbrek2 supports A11 and earlier devices on firmware versions 15.0 to 15.8.1.

::: warning

se stai utilizzando palera1n _rootful_, o hai configurato palera1n _rootless_ **prima del 27 aprile 2023**, dovrai <router-link to="/removing-palera1n">Rimuovere palera1n rootful</router-link> prima di procedere.

If you are using _rootless_ palera1n, and set it up **after April 27th, 2023**, this is not an issue, and you can continue with these steps.

:::

## Installare TrollStore

Il metodo che deve essere seguito per installare TrollStore dipende dalla versione attuale del firmware, seleziona la scheda che si adatta alla versione attuale del firmware e segui i passaggi successivi

::: tip

Se hai già installato TrollStore, puoi ignorare questa sezione.

:::

::::: tabs

:::: tab name="TrollHelperOTA (da 15.0 a 15.4.1)" :default="true"

### Installazione di TrollHelper

1. Apri Safari
2. Vai su [https://api.jailbreaks.app/troll](https://api.jailbreaks.app/troll)
3. Premi su `Installa`

Un'app chiamata `GTA Car Tracker` verrà installata sul tuo dispositivo iOS, anche se in realtà è l'app di TrollHelper.

### Installare TrollStore

1. Apri l'app `GTA Car Tracker`
2. Clicca su `Register Persistence Helper`
3. Clicca `Installa TrollStore`

L'applicazione TrollStore verrà ora installata sul tuo dispositivo iOS.

::::

:::: tab name="TrollInstallerMDC (da 15.5 a 15.7.1)"

### Requisiti

- L'app Suggerimenti installata sul tuo dispositivo
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows
- L'ultima versione di [TrollInstallerMDC](https://dhinakg.github.io/apps.html)

### Installare l'applicazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di TrollInstallerMDC su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

### Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

### Iniettare TrollStore Helper

::: warning

Se hai già aperto Suggerimenti, riavvia il dispositivo prima di seguire questi passaggi

:::

1. Apri TrollInstallerMDC
2. Una volta che dice "Successfully replaced Tips binary", chiudi l'app `TrollInstallerMDC`
   - Se restituisce un errore, chiudi TrollInstallerMDC e riaprilo

### Installare TrollStore

1. Apri l'app `Suggerimenti`
2. Clicca `Installa TrollStore`

Il tuo dispositivo dovrebbe eseguire un respring, e TrollStore dovrebbe essere installato.

### Installare Persistence Helper

1. Apri l'app `TrollStore` nella home screen
2. Premi `Impostazioni`, poi premi `Installa Persistence Helper`
3. Seleziona `Suggerimenti` dalla lista di app

::::

:::: tab name="TrollMisaka (15.7.2 to 15.8.1)"

::: warning

This method may have issues in some cases. If you are having repeated and unresolvable issues, you can follow <router-link to="/installing-meowbrek2-palera1n">Installing meowbrek2 (palera1n)</router-link> instead.

:::

### Requisiti

- L'app Suggerimenti installata sul tuo dispositivo
- The latest version of [AltServer](http://altstore.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows
- L’ultima versione di [iCloud](https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe) se sei su Windows
- The latest version of [TrollMisaka](https://github.com/straight-tamago/TrollMisaka/releases/latest)

### Installare l'applicazione

1. Open AltServer
2. Collega il tuo dispositivo iOS al computer
3. Shift-Click (Windows) or Option-Click (macOS) AltServer in the System Tray or Menu Bar
4. Click `Sideload .ipa`, then select your device
5. Select the TrollMisaka `.ipa` file

L'app verrà ora installata sul tuo dispositivo iOS.

### Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

The TrollMisaka application can now be opened from home screen.

### Adding a Keyboard

1. Open TrollMisaka, then exit the app _while keeping it in the app switcher_
2. Go to `Settings` -> `General` -> `Keyboard` -> `Keyboards` -> `Add New Keyboard...`
3. Select `TrollMisaka`
4. Tap `TrollMisaka`, then toggle on `Allow Full Access`, then tap `Allow`
5. Re-open TrollMisaka

After re-opening TrollMisaka, open the app switcher and then reboot your device.

::: danger

Do not fully close TrollMisaka until TrollStore is installed, or you will have to redo the entire guide from the beginning.

:::

### Iniettare TrollStore Helper

::: warning

Questo metodo può richiedere diversi tentativi per funzionare correttamente.

:::

1. Unlock your device
2. Immediately open `Spotlight Search` (via swipping down on the middle of the home screen)
3. Tap the globe icon on the keyboard
   - If needed, select `TrollMisaka` from the list of keyboards
4. Tap `kopen`
   - If the device reboots, try these steps again
5. Clicca `Installa TrollStore`
   - If the keyboard app seemingly refreshes, try again, If it fails, try again in Safari instead.

Once it says it's successful, you can continue with the next section.

### Installare TrollStore

1. Re-open the app switcher
2. Open the TrollMisaka app _from the app switcher_
3. Clicca `Installa TrollStore`

Il tuo dispositivo dovrebbe eseguire un respring, e TrollStore dovrebbe essere installato.

### Installare Persistence Helper

1. Apri l'app `TrollStore` nella home screen
2. Premi `Impostazioni`, poi premi `Installa Persistence Helper`
3. Seleziona `Suggerimenti` dalla lista di app

::::

:::::

## Installare meowbrek2

### Download

- The latest version of [meowbrek2](https://kok3shidoll.github.io/download/secret/8F38F948-BCF6-46AF-8926-C95D823107B0/meowbrek2_1.1.7_TS.tipa)
  - Assicurati di scaricare il file `.tipa` di meowbrek2 **sul tuo dispositivo iOS**

### Installazione del jailbreak

1. Ri-apri l'app `TrollStore` nella home screen
2. Premi sul `+` in alto a destra
3. Vai a dove hai salvato il file meowbrek2 `.tipa`
4. Tocca il file `.tipa` di meowbrek2
5. Premi su `Installa`

L'app meowbrek2 sarà ora installata sul tuo dispositivo.

## Eseguire meowbrek2

1. Riavvia il dispositivo
   - Questo passaggio non è necessario ma consigliato
2. Apri l’applicazione di meowbrek2 dalla home screen appena dopo il riavvio
3. Clicca su “Jailbreak”

::: tip

Se sul dispositivo l’app crasha/si riavvia inaspettatamente e il jailbreak non è installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Sileo installato nella home screen. È possibile utilizzare Sileo per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.
