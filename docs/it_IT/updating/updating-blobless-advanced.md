---
lang: it_IT
title: Aggiornare (Blobless) (Avanzato)
description: Guida all'aggiornamento a firmware non firmati senza alcun blob.
permalink: /it_IT/updating-blobless-advanced
extra_contributors:
  - ssalagginkool
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

Dato che non disponi di un jailbreak al momento (o hai scelto di non eseguire il jailbreak per un qualsiasi motivo), dovrai utilizzare il metodo avanzato, che coinvolge cose come il reset di tutti i contenuti o il ripristino da un backup modificato, per essere in grado di aggiornare.

::: tip

Se sei su iOS 15.7.1 o precedenti, o sei su iOS da 16.0 a 16.1.2, puoi seguire <router-link to="/updating-blobless-nonjailbroken">Aggiornamento (Blobless) (Non-Jailbroken)</router-link> .

:::

## Preparazione

1. Collega il tuo iDevice al tuo computer e fai un backup tramite iTunes o Finder

Dopo aver fatto un backup, ciò che è necessario fare dopo dipende dal fatto che si usi macOS o Windows

## macOS - Apple Configurator 2

1. Vai nell'App Store sul tuo Mac
1. Cerca `Apple Configurator 2` e installalo
1. Configura Apple Configurator 2
1. Clicca Get Started
1. Clicca sul tuo dispositivo e poi clicca su Prepare
1. Seleziona `Manual Configuration`
1. Scegli `Do not enroll in MDM`
1. Vai su `Organization`e clicca su `New Organization`
1. Accedi al tuo ID Apple oppure fai clic su Skip
    - Se hai scelto di saltare l'accesso al tuo ID Apple, aggiungi un nome, poi fai clic su Next
1. Scegli `Generate a new supervision identity`
    - Se lo hai già fatto prima su Apple Configurator 2, puoi `Scegliere un'identità di supervisione esistente`
1. Configura l'Assistente di Configurazione iOS come desideri
    - Se hai dimenticato di eseguire il backup dei dati in precedenza nella guida, questo è l'ultimo step in cui sarai in grado di farlo.
1. Clicca `Prepare`, che cancellerà i dati del tuo dispositivo e lo supervisionerà

## Windows - Cowabunga Lite

1. Scarica e installa la versione Windows di Cowabunga Lite da [qua](https://github.com/Avangelista/CowabungaLiteWindows/releases)
1. Estrai **l'intera cartella di Cowabunga Lite** da qualche parte (non importa dove), poi apri Cowabunga Lite
1. Clicca su `Setup Options` e attiva la spunta su `Enable Supervision`
1. Clicca `Apply`, poi clicca `Apply Changes`

Il tuo dispositivo si riavvierà e sarà supervisionato.

## Aggiornare la versione del firmware

1. Quando il dispositivo si avvia dopo essere stato cancellato, configuralo, poi apri questa pagina sul dispositivo
1. Tocca una versione qui sotto per installare il rispettivo profilo di aggiornamento:
    - [15.8](/assets/files/delay.mobileconfig)
    - [16.7.2](/assets/files/delay.mobileconfig)
    - [17.1](/assets/files/delay.mobileconfig)
    - Per ulteriori versioni del firmware, controlla [dhinakg.github.io/delayed-otas.html](https://dhinakg.github.io/delayed-otas.html).
1. Riavvia il dispositivo
1. Collega il tuo dispositivo all'alimentazione e connettiti a Internet con Wi-Fi
1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
1. Scarica e installa l'aggiornamento
1. Una volta aggiornato, rimuovi il profilo di aggiornamento tramite le Impostazioni

Dopo l'aggiornamento, è possibile rimuovere la supervisione e ripristinare il backup effettuato in precedenza cancellando tutti i contenuti e le impostazioni.

::: tip

Se l'aggiornamento è andato a buon fine, continua con [Cominciamo!](/get-started) per eseguire il jailbreak del tuo dispositivo.

:::

Crediti a [dhinakg](https://github.com/dhinakg/) per aver scoperto questo metodo.
