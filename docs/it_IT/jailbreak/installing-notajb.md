---
lang: it_IT
title: Installare Def1nit3lyN0tAJa1lbr3akTool
description: Guida all'installazione di Def1nit3lyN0tAJa1lbr3akTool
permalink: /it_IT/installing-notajb
pkgman: sileo
---

Def1nit3lyN0tAJa1lbr3akTool è un <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, il che significa che richiede un'applicazione per ri-applicare l'exploit dopo un riavvio.

The tool is capable of jailbreaking A11 and earlier devices on iOS/iPadOS versions 16.0 to 16.6.1.

We will first use Sideloadly to sideload either TrollInstallerMDC or TrollStar, then use either TrollInstallerMDC or TrollStar to then install TrollStore, and then install Def1nit3lyN0tAJa1lbr3akTool from there.

::: warning

se stai usando palera1n _rootful_, devi prima <router-link to="/removing-palera1n">Rimuovere palera1n rootful</router-link> prima di procedere.

If you are using _rootless_ palera1n, while you won't have to do anything, note that you **will lose your existing jailbreak setup** by following these steps.

:::

## Installare TrollStore

Il metodo che deve essere seguito per installare TrollStore dipende dalla versione attuale del firmware, seleziona la scheda che si adatta alla versione attuale del firmware e segui i passaggi successivi

::: tip

Se hai già installato TrollStore, puoi ignorare questa sezione.

:::

::::: tabs

:::: tab name="TrollInstallerMDC (16.0 to 16.1.2)" :default="true"

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

::: danger

Se non lo hai già fatto, dovrai anche abilitare la Modalità Sviluppatore.

Per farlo, vai in `Impostazioni` -> `Privacy e Sicurezza` e poi scorri verso il basso fino a vedere `Modalità sviluppatore`, tocca quella opzione, attiva la modalità sviluppatore e segui le istruzioni sullo schermo

:::

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

:::: tab name="TrollStar (16.2 to 16.6.1)"

### Requisiti

- L'app Suggerimenti installata sul tuo dispositivo
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows
- The latest version of [TrollStar](https://github.com/34306/TrollStar/releases/latest)

### Installare l'applicazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Drag and drop the TrollStar `.ipa` file into Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

### Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

::: danger

Se non lo hai già fatto, dovrai anche abilitare la Modalità Sviluppatore.

Per farlo, vai in `Impostazioni` -> `Privacy e Sicurezza` e poi scorri verso il basso fino a vedere `Modalità sviluppatore`, tocca quella opzione, attiva la modalità sviluppatore e segui le istruzioni sullo schermo

:::

### Iniettare TrollStore Helper

::: warning

Questo metodo può richiedere diversi tentativi per funzionare correttamente.

:::

1. Open TrollStar
2. Tap `kopen`
   - If the device reboots, wait a few minutes, then try again
3. Tap `Install TrollStore Helper to Tips`
4. Wait 10-15 seconds, then tap `kclose`
5. Tap `Respring to Apply`

Your device will respring after you tap `Respring to Apply`.

### Installare TrollStore

1. Unlock your device
2. Apri l'app Suggerimenti
3. Clicca `Installa TrollStore`

Il tuo dispositivo dovrebbe eseguire un respring, e TrollStore dovrebbe essere installato.

### Installare Persistence Helper

1. Apri l'app `TrollStore` nella home screen
2. Premi `Impostazioni`, poi premi `Installa Persistence Helper`
3. Seleziona `Suggerimenti` dalla lista di app

::::

:::::

## Installare Def1nit3lyN0tAJa1lbr3akTool

### Download

- L'ultima versione di [Def1nit3lyN0tAJa1lbr3akTool](https://github.com/KpwnZ/Def1nit3lyN0tAJa1lbr3akTool/releases/latest)
  - Assicurati di installare il file `.ipa` di Def1nit3lyN0tAJa1lbr3akTool **sul tuo dispositivo iOS**

### Installazione del jailbreak

1. Torna alla scheda `Apps` di TrollStore
2. Premi sul `+` in alto a destra
3. Vai dove hai salvato il file `.tipa` di Def1nit3lyN0tAJa1lbr3akTool
4. Tocca il file `.tipa` di Def1nit3lyN0tAJa1lbr3akTool
5. Premi su `Installa`

L'app Def1nit3lyN0tAJa1lbr3akTool sarà ora installata sul tuo dispositivo.

## Eseguire Def1nit3lyN0tAJa1lbr3akTool

1. Riavvia il dispositivo
   - Questo passaggio non è necessario ma consigliato
2. Apri l’applicazione di Def1nit3lyN0tAJa1lbr3akTool dalla home screen appena dopo il riavvio
3. Tap "Start"

::: tip

Se sul dispositivo l’app, crasha/si riavvia inaspettatamente e il jailbreak non è installato, prova a riavviare il dispositivo e far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Sileo installato nella home screen. È possibile utilizzare Sileo per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.
