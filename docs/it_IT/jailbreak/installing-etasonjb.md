---
lang: it_IT
title: EtasonJB
description: Guida per l’installazione di etasonjb
permalink: /it_IT/installing-etasonjb
redirect_from:
  - /it_IT/etasonjb
  - /it_IT/es
  - /it_IT/eta
discordNoticeText: Per supporto in inglese, chiedi aiuto sul r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
extra_contributors:
  - TheHacker894
---

EtasonJB è in grado di eseguire il jailbreak su dispositivi iOS a 32 bit con una versione del firmware 8.4.1.

A differenza della maggior parte dei jailbreak moderni, il jailbreak di EtasonJB persiste dopo un riavvio (questo tipo di jailbreak è conosciuto anche come “untethered“). Ciò significa che dopo aver riavviato il dispositivo, il dispositivo rimarrà jailbroken e non dovrai eseguire l'exploit di nuovo.

Utilizzeremo Sideloadly per installare l'app di EtasonJB sul tuo dispositivo iOS nello step successivo.

## Download

- L'ultima versione di [EtasonJB](https://etasonjb.tihmstar.net/)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di EtasonJB su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Electra adesso può essere aperta dalla home screen.

## Eseguire EtasonJB

1. Apri l'applicazione di EtasonJB dalla home screen
1. Clicca su `Etason JB!`

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
