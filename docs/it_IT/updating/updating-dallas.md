---
lang: it_IT
title: Aggiornare (Dallas)
description: Guida all'aggiornamento utilizzando il tweak Dallas
permalink: /it_IT/updating-dallas
redirect_from:
  - /it_IT/dallas
  - /it_IT/updating-(dallas)
  - /it_IT/updating-Dallas
extra_contributors:
  - DhinakG
---

## Lettura Necessaria

::: tip

Se si è tentato in precedenza di usare il metodo di aggiornamento blobless normale, rimuovi tutti i delay e i profili beta prima di seguire questo metodo.

:::

::: warning

Questa pagina ora esiste solo come segnaposto fino a quando le versioni più recenti di iOS saranno implementate

:::

## Requisiti

- Un dispositivo alla quale è possibile eseguire il jailbreak e installarci pacchetti
    - Controlla <router-link to="/it_IT/get-started">Cominciamo!</router-link> se non sei sicuro
- Un backup del dispositivo tramite iCloud

## Istruzioni

### Supervisionare il dispositivo

::: tip

Se si è supervisionati dal metodo di aggiornamento blobless normale usato in precedenza, puoi saltare questa sezione.

:::

1. Avvia il tuo jailbreak ed eseguilo
1. Apri il tuo gestore di pacchetti preferito e aggiungi la seguente repo: [https://cydia.ichitaso.com/](https://cydia.ichitaso.com/)
1. Cerca e installa il pacchetto `SupervisedEnabler`
1. Il tuo dispositivo dovrebbe essere ora supervisionato
    - È possibile controllare andando nell'app impostazioni, dove dovrebbe essere presente un messaggio in alto che indica ciò. Se non c'è, prova a reinstallare `SupervisedEnabler`


### Installare Dallas

::: tip

Il tweak Dallas reindirizza le ricerche di aggiornamento a un server diverso. I proprietari del server saranno in grado di visualizzare il tuo indirizzo IP. Questo è normale, tuttavia se si è a disagio con ciò, non procedere.

:::

1. Avvia il tuo attuale jailbreak
1. Apri il tuo gestore di pacchetti preferito e aggiungi le seguenti repo:
    - [https://dhinakg.github.io/repo/](https://dhinakg.github.io/repo/)
    - [https://repo.alexia.lol](https://repo.alexia.lol)
1. Cerca e installa il pacchetto `SupervisedEnabler`
1. Clicca su `Riavvia il Dispositivo`
1. Vai su [https://dhinakg.github.io/dallas](https://dhinakg.github.io/dallas) nel tuo dispositivo
1. Clicca su "Dallas Enabler" per scaricare il profilo
1. Premi "Consenti" quando viene richiesto
1. Apri l'app Impostazioni
1. Vai su `Generali` -> `Gestione Profilo e Dispositivi` -> `Dallas Enabler `
1. Tocca "Installa" nell'angolo in alto a destra e inserisci il codice di accesso se richiesto
1. Tocca nuovamente "Installa" due volte per confermare
1. Ritorna al tuo browser
1. Sotto "Version Profiles", tocca la versione alla quale vuoi aggiornare
1. Premi "Consenti" quando viene richiesto
1. Apri l'app Impostazioni
1. Vai su `Generali` -> `Gestione Profilo e Dispositivi` -> `Dallas - [VERSION]`
    - Se ricevi un errore, assicurati di essere attualmente jailbroken
1. Tocca "Installa" nell'angolo in alto a destra e inserisci il codice di accesso se richiesto
1. Tocca nuovamente "Installa" due volte per confermare
1. Riavvia il dispositivo quando ti viene richiesto

### Ripristinare il RootFS

1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
    - **Non aggiornare** ancora, lo faremo più tardi
    - Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
    - Se dice che il dispositivo è aggiornato, il server utilizzato per Dallas è offline; attendi che torni online
1. Apri il tuo jailbreak attuale e ripristina il rootFS
    - Se hai bisogno di una guida dettagliata su come ripristinare il rootfs, segui <router-link to="/it_IT/restoring-rootfs">Ripristinare il RootFS</router-link> e seleziona il jailbreak che usi attualmente
1. Riavvia il dispositivo

### Aggiornare la versione del firmware

1. Collega il tuo dispositivo all'alimentazione e connettiti a Internet con Wi-Fi
1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare
1. Scarica e installa l'aggiornamento

### Rimozione dei profili Dallas

1. Aprire l'applicazione Impostazioni dopo l'aggiornamento alla versione desiderata
1. Vai su `Generali`, `Gestione Profilo e Dispositivi`
1. Premi su entrambi i profili e clicca su `Rimuovi profilo`
    - Inserisci il tuo codice di accesso se richiesto

## Rimozione della supervisione

Dopo aver aggiornato e rimosso i profili di Dallas, il dispositivo rimarrà supervisionato. Essere in uno stato supervisionato significa che:

- Un messaggio verrà visualizzato in Impostazioni, mostrando che il dispositivo è supervisionato
- Il blocco di attivazione sarà disabilitato, rendendo il dispositivo potenzialmente accessibile dai ladri (Dov'è funzionerà comunque)
- Se il dispositivo ha la gestione del dispositivo mobile attivata (es. un dispositivo scolastico o di lavoro), allora la tua organizzazione sarà in grado di installare e disinstallare silenziosamente le app sul tuo dispositivo

Nota che, per la maggior parte degli utenti, rimanere in uno stato supervisionato non sarà un problema.

È possibile rimuovere lo stato di supervisione ripristinando il dispositivo e ripristinando un backup precedentemente fatto. Ciò può essere fatto selezionando "Cancella tutti i contenuti e le impostazioni" nell'app Impostazioni, poi ripristinando da un backup da iCloud durante la configurazione iniziale.

::: danger

Se si ripristina un backup fatto in uno stato jailbroken da **iTunes/Finder**, si possono riscontrare gravi problemi, come i bootloop.

:::

::: warning

Se ripristini un backup fatto in uno stato jailbroken da **iCloud**, potresti riscontrare segnali di falsi positivi per il rilevamento del jailbreak.

:::

## Risoluzione problemi

::: tip

Se hai bisogno di usare OTAEnabler per qualsiasi motivo, dovrai rimuoverlo e poi rifare tutto a partire da `Installare Dallas`.

:::

### "Impossibile controllare gli aggiornamenti"

Prova ad usare [OTAEnabler](https://repo.alexia.lol/), se non funziona, segui i passaggi qui sotto:

1. Ripristina il rootFS attraverso il tuo jailbreak
1. Installa e apri <router-link to="/it_IT/installing-unc0ver">l'applicazione</router-link> di unc0ver
1. Disattiva "Disable updates"
1. Ri-esegui il jailbreak usando unc0ver

### La schermata si freeza

Riattiva il daemon OTA usando il tweak iCleaner

---

Crediti a [dhinakg](https://github.com/dhinakg/) per aver scoperto questo metodo.
