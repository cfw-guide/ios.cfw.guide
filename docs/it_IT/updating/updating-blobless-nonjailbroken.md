---
lang: it_IT
title: Aggiornamento (Blobless) (Non-Jailbroken)
description: Guida all'aggiornamento a firmware non firmati senza alcun blob utilizzando il profilo di Delay.
permalink: /it_IT/updating-blobless-nonjailbroken
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


Devi essere su iOS 15.7.1 e precedenti, o iOS da 16.0 a 16.1.2. Se non sei su una di queste versioni, segui <router-link to="/updating-blobless-advanced">Aggiornare (Blobless) (Avanzato)</router-link> .

:::


::: tip


Se si è tentato in precedenza di usare un metodo di aggiornamento blobless, rimuovi tutti i profili delay e beta prima di seguire questo metodo.

:::


## Installare Supervise

### Download

- L’ultima versione di [Supervise](https://dhinakg.github.io/apps.html)
- L’ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win64) se sei su Windows

### Installazione

1. Apri Sideloadly
1. Connetti il tuo dispositivo iOS al computer
    - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
1. Trascina il file `.ipa` di Supervise su Sideloadly
1. Inserisci il tuo ID Apple
1. Inserisci la tua password
    - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L’app verrà adesso installata sul tuo dispositivo iOS.

### Autorizzare l’applicazione

1. Vai su `Impostazioni` -> `Generali` -> `Gestione Dispositivo` -> `<Il tuo Apple ID>`
    - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
1. Clicca su `Autorizza "<Il tuo Apple ID>"`

L’applicazione di Supervise può essere aperta dalla home screen.

## Supervisionare il dispositivo

1. Apri l'app `Supervise` nella home screen
1. Apri l'app Impostazioni, quindi vai alla scheda `Generali`
1. Scorri verso il basso fino alla scheda `Toggle Supervision` e vai a quella scheda
1. Abilita l'opzione `Toggle Supervision`
1. Riavvia il dispositivo

Dopo il riavvio del dispositivo, dovresti vedere un avviso nelle Impostazioni che ti avvisa che sei supervisionato, se non lo vedi, ripeti i passaggi in questa sezione.

## Aggiornare la versione del firmware

1. Apri questa pagina sul tuo dispositivo
1. Tocca una versione qui sotto per installare il rispettivo profilo di aggiornamento:
    - [15.8](/assets/files/delay.mobileconfig)
    - [16.7.2](/assets/files/delay.mobileconfig)
    - [17.1](/assets/files/delay.mobileconfig)
    - Per ulteriori versioni del firmware, controlla [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).
1. Collega il tuo dispositivo all'alimentazione e connettiti a Internet con Wi-Fi
1. Apri l'app Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
1. Scarica e installa l'aggiornamento
1. Una volta aggiornato, rimuovi il profilo di aggiornamento tramite le Impostazioni

::: tip


Se hai scelto di abilitare la supervisione in precedenza, il tuo dispositivo rimarrà supervisionato. Essere in uno stato supervisionato significa che:

- Un messaggio verrà visualizzato in Impostazioni, mostrando che il dispositivo è supervisionato
- Il blocco di attivazione sarà disabilitato, rendendo il dispositivo potenzialmente accessibile dai ladri (Dov'è funzionerà comunque)
- Se il dispositivo ha la gestione del dispositivo mobile attivata (es. un dispositivo scolastico o di lavoro), allora la tua organizzazione sarà in grado di installare e disinstallare silenziosamente le app sul tuo dispositivo

Nota che, per la maggior parte degli utenti, rimanere in uno stato supervisionato non sarà un problema.

Se si desidera rimuovere la supervisione, è necessario eseguire il reset del dispositivo e ripristinare un backup precedentemente fatto. Ciò può essere fatto selezionando "Cancella tutti i contenuti e le impostazioni" nell'app Impostazioni, poi ripristinando da un backup da iCloud durante la configurazione iniziale.

:::


::: danger


Se si ripristina un backup fatto in uno stato jailbroken da **iTunes/Finder**, si possono riscontrare gravi problemi, come i bootloop.

:::


::: warning


Se ripristini un backup fatto in uno stato jailbroken da **iCloud**, potresti riscontrare segnali di falsi positivi per il rilevamento del jailbreak.

:::


::: tip


Se l'aggiornamento ha avuto successo, continua con <router-link to="/get-started">Cominciamo!</router-link> per eseguire il jailbreak sul tuo dispositivo.

:::


Crediti a [dhinakg](https://github.com/dhinakg/) per aver scoperto questo metodo.
