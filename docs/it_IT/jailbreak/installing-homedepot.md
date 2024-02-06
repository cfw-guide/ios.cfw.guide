---
lang: it_IT
title: Installazione di HomeDepot
description: Guida per l'installazione di HomeDepot
permalink: /it_IT/installing-homedepot
redirect_from:
  - /it_IT/homedepot
  - /it_IT/hd
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](http://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - TheHacker894
  - WhitetailAni
  - LukeZGD
---

HomeDepot è in grado di eseguire il jailbreak di ogni dispositivo iOS a 32 bit con versione del firmware da 9.1 fino a 9.3.4, così come dispositivi A5(X) da 8.0 a 8.4.1.

Tieni a mente che il jailbreak di HomeDepot non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di HomeDepot sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l'app di HomeDepot sul tuo dispositivo iOS nello step successivo.

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
HomeDepot è attualmente firmato su <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L'ultima versione di HomeDepot per la tua versione iOS:
  - Home Depot for [iOS 9.1-9.3.4](https://web.archive.org/web/20240121141909/http://wall.supplies/)
  - Home Depot for [iOS 8.0-8.4.1](https://web.archive.org/web/20240121141903/https://wall.supplies/OLD%20iPhone%20HACKED.html)
    - Se sei su iOS da 8.0 a 8.4, dovrai anche installare l'ultima versione di [ohd patcher](https://github.com/LukeZGD/ohd/releases)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell’applicazione di Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Patch Home Depot

::: danger

Questo è solo necessario da iOS 8.0 a 8.4, non è necessario per iOS 8.4.1 o da iOS 9.1 a 9.3.4.

:::

::: tip

### macOS e Linux

1. Apri il Terminale
1. Cambia la directory nella cartella in cui hai salvato lo script e h3lix.ipa
   - Se li hai salvati in download, dovresti digitare `cd ~/Downloads`
1. Digita `./patch.sh` nel terminale
1. Trascina il file `.ipa` di MixtapePlayer sul terminale
1. Premi Invio

:::

::: tip

### Windows

1. Trascinare il file `.ipa` di MixtapePlayer sul file patch.cmd

:::

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di HomeDepot su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di HomeDepot adesso può essere aperta dalla home screen.

## Eseguire HomeDepot

1. Apri l'applicazione di HomeDepot dalla home screen
1. Tocca `Prepare for Jailbreak` -> `Accept` -> `Dismiss` -> `Proceed with Jailbreak` -> `Begin Installation` -> `Use Provided Offsets`

Quando eseguirai il jailbreak per una seconda volta, un'opzione chiamata "Kickstart Jailbreak" sostituirà "Prepare for Jailbreak". Clicca su quella invece.

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

## Rendere il jailbreak untethered

::: danger

Questi passaggi sono validi solo per i dispositivi da iOS 9.1 a 9.3.4 - I dispositivi A5(X) da iOS 8.0 a 8.4.1 dovrebbere saltare questo passaggio.

:::

Questo è un passaggio opzionale che permette al jailbreak di essere eseguito automaticamente quando il dispositivo viene avviato. Ciò significa che non dovrai rieseguire il jailbreak attraverso l'app HomeDepot dopo che il tuo dispositivo è stato spento.

Dovrai usare Cydia per installare l'untether. Se non hai familiarità con il funzionamento di Cydia, leggi [Cydia](/installing-homedepot/using-cydia.html) prima di tornare a questa pagina.

1. Apri l'applicazione Cydia
1. Controlla la sezione "Sorgenti" e assicurati che "tihmstar's beta repo" sia aggiunta
    - If you can't find it, tap `Edit` -> `+` and enter `thanos.lol`
1. Apri la sezione "Cerca" e inserisci "UntetherHomeDepot"
1. Premi sul tweak e poi premi su "Installa" nell'angolo in alto a destra dello schermo
1. Conferma l'installazione

Una volta terminato, ti verrà chiesto di riavviare il dispositivo.

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">ritocchi</router-link>, temi e altro.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-zebra">Installazione di Zebra</router-link>

:::