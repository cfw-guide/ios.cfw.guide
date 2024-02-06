---
lang: it_IT
title: Pangu7
excerpt: Guida per l’installazione di Pangu7
permalink: /it_IT/installing-pangu7
redirect_from:
  - /it_IT/pangu712
  - /it_IT/pangu7
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](http://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - hopolapopola
---

Pangu7 è in grado di eseguire il jailbreak di tutti i dispositivi iOS con una versione del firmware 7.1-7.1.2.

Pangu7 è un jailbreak untethered, persiste dopo il riavvio, quindi una volta installato non dovrai reinstallarlo a meno che non inizializzi il dispositivo.

Avrai bisogno di un computer con Windows XP e più recente o un Mac con Mac OS X 10.9 Mavericks - macOS 10.14 Mojave e l'appropriata versione di Pangu.

![Uno screenshot di Pangu7 (Windows)](/assets/images/pangu7-win.png)

::::: tabs

:::: tab name="macOS" :default="true"

### Download

- Versione 1.2.0 di [Pangu](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/Fo8ihCJa) dall’archivio di Legacy Jailbreak

### Installazione

1. Apri `pangu.dmg` e sposta l'applicazione nella cartella `/Applicazioni `
1. Apri il terminale ed esegui il comando: ` sudo -b /Applications/pangu.app/Contents/MacOS/pangu`
1. Collega il dispositivo al computer e autorizza il computer
1. Disabilita codice di sblocco (sarai in grado di riattivarlo una volta terminato il processo di jailbreak)
1. Imposta la data del tuo dispositivo a qualsiasi punto prima di Giugno 2014
1. Premi `Jailbreak ` nell'app di Pangu sul tuo computer
1. Apri l'app di Pangu sul tuo dispositivo una volta che appare nella home screen
   - Clicca su `Continue ` per fidarti dell'app e consentirne il corretto funzionamento
1. Il tuo dispositivo si riavvierà dopo un breve periodo, quindi dovrai sbloccarlo
1. Attendi un po' e il dispositivo si riavvierà ancora una volta

::::

:::: tab name="Windows"

::: danger

Ti imbatterai in un bootloop se esegui il jailbreak del tuo dispositivo mentre sei in uno spazio buio

:::


### Download
- La versione 1.0. di [Pangu](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/41UlRSyS) dall’archivio di Legacy Jailbreak

### Installazione

1. Apri `pangu.exe`
1. Collega il dispositivo al computer e autorizza il computer
1. Disabilita codice di sblocco (sarai in grado di riattivarlo una volta terminato il processo di jailbreak)
1. Imposta la data del tuo dispositivo a qualsiasi punto prima di Giugno 2014
1. Deseleziona la casella `Install PP25`
1. Premi `Jailbreak ` nell'app di Pangu sul tuo computer
1. Apri l'app di Pangu sul tuo dispositivo una volta che appare nella home screen
   - Clicca su `Continue ` per fidarti dell'app e consentirne il corretto funzionamento
1. Il tuo dispositivo si riavvierà dopo un breve periodo, quindi dovrai sbloccarlo
1. Attendi un po' e il dispositivo si riavvierà ancora una volta

### Risolvere i bootloop durante l’avvio del dispositivo al buio

1. Sblocca il dispositivo e apri Cydia
1. Clicca su `Ignore (Temporary)`
1. Apri la sezione Sources
1. Clicca su `Edit` poi `Add`
1. Digita `http://repo.kawaiizenbo.me` e poi premi `Add repo`
1. Clicca sulla nuova sorgente `KawaiiZenbo's Cydia repository`
1. Clicca su `System`, `Pangu 7.1-7.1.x Untether`
1. Clicca su `Install`, `Confirm`
1. Riavvia il dispositivo una volta installato il pacchetto

::::

:::::

----

Una volta che vedi la schermata di blocco, sarai jailbroken con un pacchetto fixato che non causerà più i bootloop mentre sei al buio. Adesso puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.

