---
lang: it_IT
title: greenpois0n
description: Guida per l’installazione di greenpois0n
permalink: /it_IT/installing-greenpois0n
redirect_from:
  - /it_IT/greenpois0n
discordNoticeText: Per supporto in inglese, chiedi aiuto sul r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
---

greenpois0n è in grado di eseguire il jailbreak di ogni dispositivo iOS tranne l'iPhone 3G sulle versioni del firmware 4.1, 4.2.1, e 4.2.6, e nemmeno l'iPad 1a generazione sulla versione 3.2.2

greenpois0n è un <router-link to="/it_IT/types-of-jailbreak/#untethered-jailbreaks">jailbreak</router-link> untethered, sopravvive ad un riavvio e può causare un bootloop permanente se qualcosa va storto. Se ti imbatti in un bootloop, ripristina il dispositivo tramite iTunes, Finder (macOS Catalina e successivo) o FutureRestore

## Download

- Computer che esegue macOS 10.11.X o precedente o Windows XP - 8.1. Wine non nun funzionerà.
- [greenpois0n](https://web.archive.org/web/20131024115207/http://greenpois0n.com/downloads/)
  - Scegli RC6.1 se sei su iOS 4.2.1 o 4.2.6
  - Scegli RC4 se su iOS 4.1 o iPhoneOS 3.2.2
- iTunes 10.7 se sei su Windows
  - [64-bit](https://secure-appldnld.apple.com/iTunes11/031-3482.20140225.kdX8s/iTunes64Setup.exe)
  - [32-bit](https://secure-appldnld.apple.com/iTunes11/031-3481.20140225.SdYYY/iTunesSetup.exe)

![Uno screenshot di greenpois0n (Windows)](/assets/images/greenpois0n-win.png)

## Installazione

1. Decomprimi greenpois0n
1. Avvia greenpois0n
    - Tasto destro, `Apri` su macOs
    - Su Windows, potrebbe essere richiesto l'accesso dell’amministratore.
1. Collega il tuo dispositivo iOS tramite USB al tuo computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo.
1. Clicca sul pulsante `Prepare to Jailbreak (DFU)` e segui le istruzioni sullo schermo per mettere il dispositivo in modalità DFU.
1. Una volta terminato, clicca sul pulsante `Jailbreak!`.
    - Lo schermo del dispositivo iOS potrebbe diventare bianco durante questo processo. È normale.
    - Il jailbreak potrebbe richiedere un po ', si prega di essere paziente e non lasciare che il computer vada in modalità di riposo.
1. Una volta completato il processo di jailbreak e sei nella home screen, apri l'app `Loader` appena installata.
    - Assicurati che il tuo dispositivo iOS sia connesso a internet.
1. Clicca su `Cydia` e poi clicca su `Install Cydia`
    - La velocità del download potrebbe variare a seconda della tua connessione. Assicurati che il tuo dispositivo iOS non vada a in modalità riposo.

::: tip

Assicurati di utilizzare un connettore certificato MFI a 30 pin per probabilità di successo più alte

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
