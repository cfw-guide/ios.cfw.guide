---
lang: it_IT
title: Aggiornare (Blobless) (Metodo Alternativo)
description: Guida all'aggiornamento a firmware non firmati senza alcun blob utilizzando il profilo di Delay.
permalink: /it_IT/updating-blobless-alternate
extra_contributors:
  - DhinakG
---

## Lettura Necessaria

I dispositivi iOS e iPadOS possono essere aggiornati solo alle versioni firmware che Apple ha "firmato". Questo di solito significa che è possibile aggiornare solo alle versioni più recenti del firmware. Questo è un male per il jailbreak, siccome la maggior parte dei jailbreak si basano su exploit che sono stati patchati in versioni più recenti.

Fortunatamente, possiamo usare diversi "profili" per ritardare un aggiornamento del firmware. Questo è destinato alle organizzazioni che richiedono più tempo per aggiornare i loro dispositivi, ma possiamo anche usarli per aggiornare a versioni del firmware non firmate.

Ma questo ha un limite di tempo. Potrai aggiornare solo alle seguenti versioni del firmware prima delle rispettive date di scadenza:

- **17.1** - February 5th, 2024
- **17.1.1** - February 28th, 2024
- **16.7.2** - March 9th, 2024
- **17.1.2** - March 9th, 2024
- **16.7.3** - March 18th, 2024
- **17.2 (For iPhones)** - March 18th, 2024
- **15.8** - April 21st, 2024
- **16.7.4** - April 21st, 2024
- **17.2 (For iPads)** - April 21st, 2024
- **17.2.1** - April 21st, 2024

Il tempo è indicato in `UTC 00:00`. Per ulteriori date di scadenza, controlla [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).

::: tip

Devi avere un jailbreak per seguire queste istruzioni. Se non puoi eseguire il jailbreak, segui <router-link to="/updating-blobless-nonjailbroken">Aggiornamento (Blobless) (Non-Jailbroken)</router-link> o <router-link to="/updating-blobless-advanced">Aggiornamento (Blobless) (Avanzato)</router-link> .

:::

::: tip

Se si è tentato in precedenza di usare un metodo di aggiornamento blobless, rimuovi tutti i profili delay e beta prima di seguire questo metodo.

:::

## Installare Dahlia

1. Avvia il tuo attuale jailbreak
1. Apri il tuo gestore di pacchetti preferito e aggiungi le seguenti repo:
    - [https://dhinakg.github.io/repo/](https://dhinakg.github.io/repo/)
    - [https://repo.alexia.lol](https://repo.alexia.lol)
1. Cerca e installa il pacchetto `Dahlia`
1. Tocca `Riavvia il dispositivo` e poi ri-esegui il jailbreak del dispositivo dopo il riavvio

## Preparare l'Aggiornamento

1. Apri l'app Impostazioni, scorri verso il basso e clicca su `Dahlia`
1. Abilita `Toggle Supervision`, poi clicca Yes quando ti viene chiesto di eseguire un riavvio dello Userspace
   - Se sei già supervisionato per qualsiasi motivo, puoi saltare questo passaggio
1. Clicca su `Download Profiles`e poi premi su "Normal"
1. Tocca `Download Profile` accanto alla versione iOS che alla quale vuoi aggiornare.
1. Premi "Consenti" quando viene richiesto
1. Esci dal menu di Dahlia e vai a `Generali` -> `Gestione Profili e Dispositivo` -> `OTA Delay - [Days] Days`
1. Clicca "Installa" nell'angolo in alto a destra e inserisci il codice di accesso se richiesto
1. Tocca nuovamente "Installa" due volte per confermare
1. Torna alla schermata di `Dahlia` nelle impostazioni
1. Assicurati che `Ready to Update` indichi di "Sì"
   - Se non lo fa, clicca sulla "i" accanto a "Ready to Update", e vedi quale è il problema

## Ripristinare il RootFS

1. Apri l'app Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
    - **Non aggiornare** ancora, lo faremo più tardi
1. Apri il tuo jailbreak attuale e ripristina il rootFS
    - Se hai bisogno di una guida dettagliata su come ripristinare il rootfs, segui <router-link to="/restoring-rootfs">Ripristinare il RootFS</router-link> e seleziona il jailbreak che usi attualmente
1. Riavvia il dispositivo

## Aggiornare la versione del firmware

1. Collega il tuo dispositivo all'alimentazione e connettiti a Internet con Wi-Fi
1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
1. Scarica e installa l'aggiornamento
1. Una volta aggiornato, rimuovi il profilo di aggiornamento e (se presente) il profilo beta tramite le Impostazioni

::: tip

Se hai scelto di abilitare la supervisione in precedenza, il tuo dispositivo rimarrà supervisionato. Essere in uno stato supervisionato significa che:

- Un messaggio verrà visualizzato in Impostazioni, mostrando che il dispositivo è supervisionato
- Il blocco di attivazione sarà disabilitato, rendendo il dispositivo potenzialmente accessibile dai ladri (Dov'è funzionerà comunque)
- Se il dispositivo ha la gestione del dispositivo mobile attivata (es. un dispositivo scolastico o di lavoro), allora la tua organizzazione sarà in grado di installare e disinstallare silenziosamente le app sul tuo dispositivo

Nota che, per la maggior parte degli utenti, rimanere in uno stato supervisionato non sarà un problema.

È possibile rimuovere lo stato di supervisione ripristinando il dispositivo e ripristinando un backup precedentemente fatto. Ciò può essere fatto selezionando "Cancella tutti i contenuti e le impostazioni" nell'app Impostazioni, poi ripristinando da un backup da iCloud durante la configurazione iniziale.

:::

::: danger

Se si ripristina un backup fatto in uno stato jailbroken da **iTunes/Finder**, si possono riscontrare gravi problemi, come i bootloop.

:::

::: warning

Se ripristini un backup fatto in uno stato jailbroken da **iCloud**, potresti riscontrare segnali di falsi positivi per il rilevamento del jailbreak.

:::

::: tip

Se l'aggiornamento ha avuto successo, continua con <router-link to="/get-started">Per cominciare</router-link> per eseguire il jailbreak sul tuo dispositivo.

:::

Crediti a [dhinakg](https://github.com/dhinakg/) per aver scoperto questo metodo.
