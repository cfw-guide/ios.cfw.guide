---
lang: it_IT
title: h3lix
description: Guida per l’installazione di h3lix
permalink: /installing-h3lix
redirect_from:
  - /installing-helix
  - /helix
  - /h3lix
  - /h3
  - /he
pkgman: cydia
extra_contributors:
  - hopolapopola
---

h3lix è in grado di eseguire il jailbreak di tutti dispositivi iOS a 32 bit con una versione del firmware 10.0-10.3.4.

Tieni a mente che il jailbreak di h3lix non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di h3lix sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l’applicazione sul dispositivo e uno script per patchare h3lix.

## Download

- L’ultima versione di [h3lix](https://h3lix.tihmstar.net/)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- Per macOS e Linux: il [patcher script](https://gist.github.com/jakeajames/b44d8db345769a7149e97f5e155b3d46) di Jakeajames
- Per Windows: [winh3lixpatcher](https://github.com/kawaiizenbo/winh3lixpatcher/releases)

## Patchare l’applicazione

::: tip

### macOS e Linux

1. Apri il Terminale
1. Cambia la directory nella cartella in cui hai salvato lo script e h3lix.ipa
   - Se li hai salvati in download, dovresti digitare `cd ~/Downloads`
1. Digita `./patch.sh` nel terminale
1. Trascina il file `.ipa` di h3lix sul terminale
1. Digita "h3lix.ipa"
1. Premi Invio

:::

::: tip

### Windows

1. Trascina il file ipa di h3lix nel file winh3lixpatcher.exe

:::

Ora hai un ipa di h3lix patchata che puoi firmare

## Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di h3lix su Sideloadly
1. Inserisci il tuo Apple ID
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d’accordo con ciò, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di h3lix adesso può essere aperta dalla home screen.

## Eseguire h3lix

1. Apri l'applicazione di h3lix dalla home screen
1. Clicca su “Jailbreak”

::: tip

Se l'applicazione mostra `Uicache Failed!` significa che il processo di patching non è stato applicato correttamente e dovresti controllare di aver eseguito correttamente i passaggi sopra

:::

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweak</router-link>, temi e altro.
