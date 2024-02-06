---
lang: it_IT
title: Installing meowbrek2 (palera1n)
description: Guide to installing meowbrek2 using palera1n
permalink: /it_IT/installing-meowbrek2-palera1n
pkgman: sileo
---

meowbrek2 è un <router-link to="/types-of-jailbreak/#semi-untethered-jailbreaks">jailbreak semi-untethered</router-link>, il che significa che richiede un'app per riapplicare l'exploit dopo un riavvio.

This tool is capable of jailbreaking A11 and earlier devices on iOS/iPadOS versions 15.0 to 15.8.1.

::: warning

se stai utilizzando palera1n _rootful_, o hai configurato palera1n _rootless_ **prima del 27 aprile 2023**, dovrai <router-link to="/removing-palera1n">Rimuovere palera1n rootful</router-link> prima di procedere.

If you are using _rootless_ palera1n, and set it up **after April 27th, 2023**, this is not an issue, and you can continue with these steps.

:::

## Installazione di palera1n

::: tip

If you already have _rootless_ palera1n installed and set it up **after April 27th, 2023**, you can ignore this section.

:::

Per installare TrollStore e poi utilizzare meowbrek2, dovrai prima eseguire il jailbreak con palera1n seguendo <router-link to="/installing-palera1n">Installare palera1n</router-link>. Potrai tornare a questa pagina una volta che avrai finito l'installazione di palera1n.

## Installare TrollStore

::: tip

Se non è già stata aggiunta, dovrai anche aggiungere la repo `havoc.app` a Sileo

:::

::: tip

Se hai già installato TrollStore (seguendo o meno il metodo qui elencato), puoi saltare questa sezione

:::

### Installazione di TrollHelper

1. Apri l'applicazione di Sileo
2. Clicca sulla sezione "Cerca"
3. Cerca "TrollStore Helper"
4. Premi su "Installa"
5. Tocca la barra della coda in fondo alla pagina
6. Clicca su “Conferma”
7. Una volta finito, tocca "Fatto", poi chiudi Sileo
8. Apri l'app TrollHelper nella home screen
9. Clicca `Installa TrollStore`

Il tuo dispositivo dovrebbe eseguire un respring, e TrollStore dovrebbe essere installato.

### Installare Persistence Helper

1. Apri l'app `TrollStore` nella home screen
2. Premi `Impostazioni`, poi premi `Installa Persistence Helper`
3. Seleziona `Suggerimenti` dalla lista di app
4. Riavvia il dispositivo

Una volta che il dispositivo avrà terminato il riavvio, apri l'app `Suggerimenti` (che hai impostato come Persistence Helper) e premi `Refresh App Registrations`.

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
