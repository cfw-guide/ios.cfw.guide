---
lang: it_IT
title: Daibutsu
description: Guida per l’installazione di Daibutsu
permalink: /it_IT/installing-daibutsu
redirect_from:
  - /it_IT/daibutsu
discordNoticeText: Per supporto in inglese, chiedi aiuto sul r/LegacyJailbreak [Discord Server](http://discord.legacyjailbreak.com/).
pkgman: cydia
---

Daibutsu è in grado di eseguire il jailbreak della maggior parte dei dispositivi iOS A5(X) con una versione del firmware 8.4.1.

::: warning

Daibutsu supporta solo gli iPad 2 che sono stati realizzati nel 2012 o più tardi.

Nel caso in cui non si sappia se è un iPad idoneo, dovrebbe essere vero quanto segue:
- Si tratta di un iPad 2 solo WiFi
- Si tratta di un iPad 2 16GB

Se si tratta di un iPad 2 16GB solo WiFi, è necessario controllare Impostazioni -> Generali -> Note legali e formative -> Esposizione a RF
- Se menziona "iPad2,4" nell'URL della pagina, è un dispositivo supportato

Se si tratta di un iPad 2 Cellular 2, o un iPad 2 32/64GB, o se l'URL controllato non dice che è un iPad2,4, non è un dispositivo supportato, e dovresti usare <router-link to="/it_IT/installing-etasonJB">EtasonJB</router-link> .

:::

A differenza della maggior parte dei jailbreak moderni, il jailbreak di Daibutsu persiste dopo un riavvio (questo tipo di jailbreak è conosciuto anche come “[untethered](/types-of-jailbreak/#untethered-jailbreaks)“). Ciò significa che dopo aver riavviato il dispositivo, il dispositivo rimarrà jailbroken e non dovrai eseguire l'exploit di nuovo.

Utilizzeremo Sideloadly per installare l'app di Daibutsu sul tuo dispositivo iOS nello step successivo.

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Daibutsu è attualmente firmato su <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L'ultima versione di [Daibutsu](https://dora2ios.web.app/daibutsu.html)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di Daibutsu su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Daibutsu adesso può essere aperta dalla home screen.

## Eseguire Daibutsu

1. Apri l'applicazione di Daibutsu dalla home screen
1. Clicca su `Jailbreak`

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
