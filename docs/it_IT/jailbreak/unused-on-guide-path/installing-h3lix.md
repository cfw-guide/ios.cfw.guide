---
lang: it_US
title: h3lix
description: Guida per l’installazione di h3lix
permalink: /it_IT/installing-h3lix
redirect_from:
  - /installing-helix
  - /helix
  - /h3lix
  - /h3
  - /he
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
extra_contributors:
  - hopolapopola
---

h3lix è in grado di eseguire il jailbreak di tutti dispositivi iOS a 32 bit con una versione del firmware dalla 10.0 alla 10.3.4.

Tieni a mente che il jailbreak di h3lix non è “persistente” (non rimarrà installato dopo un riavvio). Sarà necessario ri-eseguire l’exploit dopo ogni riavvio. Ti verrà spiegato come fare.

A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l’app di h3lix sul tuo dispositivo ogni 7 giorni tramite un computer.

Utilizzeremo Sideloadly per installare l’applicazione sul dispositivo e uno script per patchare h3lix.

## Download

- Versione RC6 di [h3lix](https://mega.nz/folder/k4FAXCIB#Fk7pxs6ikYzL3YBvAGX5ig/file/UgV1HAJT) dall'archivio Jailbreak Legacy
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- macOS e Linux: [patcher script](https://gist.github.com/jakeajames/b44d8db345769a7149e97f5e155b3d46) di Jakeajames
- Windows: [winh3lixpatcher](https://github.com/kawaiizenbo/winh3lixpatcher/releases)

## Patchare l’applicazione

::: tip

Se non vuoi patchare un'applicazione, e sei su iOS 10.3.x, potresti invece seguire <router-link to="/installing-socket">Installare Socket</router-link>, anche se tieni presente che kok3shiX è attualmente in uno stadio alpha.

:::

::: tip

### macOS e Linux

1. Apri il Terminale
2. Cambia la directory nella cartella in cui hai salvato lo script e h3lix.ipa
   - Se li hai salvati in download, dovresti digitare `cd ~/Downloads`
3. Digita `./patch.sh` nel terminale
4. Trascina il file `.ipa` di h3lix sul terminale
5. Digita "h3lix.ipa"
6. Premi Invio

:::

::: tip

### Windows

1. Trascina il file ipa di h3lix nel file winh3lixpatcher.exe

:::

Ora hai un ipa di h3lix patchata che puoi firmare

## Installazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di h3lix su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di h3lix adesso può essere aperta dalla home screen.

## Eseguire h3lix

1. Apri l'applicazione di h3lix dalla home screen
2. Clicca su “Jailbreak”

::: tip

Se l'applicazione mostra `Uicache Failed!` significa che il processo di patching non è stato applicato correttamente e dovresti controllare di aver eseguito correttamente i passaggi sopra

:::

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. È possibile utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/installing-zebra">Installa Zebra</router-link>

:::
