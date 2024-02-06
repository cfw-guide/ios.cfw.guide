---
lang: it_IT
title: "Ripristinare con i blobs utilizzando FutureRestore"
description: Guida all'utilizzo di FutureRestore per ripristinare il dispositivo
permalink: /it_IT/futurerestore
redirect_from:
  - /it_IT/future-restore
  - /it_IT/restoring-to-14-3
extra_contributors:
  - Tanbeer191
  - TheHacker894
  - CoocooFroggy
---
## Osservazioni
Se sei su iOS 15.2 o successive o su dispositivi A10- dovrai invece seguire [questa](https://gist.github.com/nyuszika7h/aac55c97f7925cddcf5ec3167f85dfe8) guida. Tieni conto che se stai utilizzando un dispositivo che supporta iOS 16 (che include A12+), **non** sarai in grado di seguire questa guida a causa dell'incompatibilità di Cryptex1 e del SEP/BB. Per maggiori informazioni sulle motivazioni, vai [qui](https://gist.github.com/Cryptiiiic/b82133ac290070939189e1377dc3ac85).

## Requisiti

- I blobs salvati per la versione alla quale si desidera ripristinare
  - Questi blob devono essere per il**tuo** dispositivo; non puoi utilizzare i blob di altre persone
- Un dispositivo jailbroken **oppure** un dispositivo A10-A11 su 15.0-15.1.1

::: danger

**Devi** assicurarti che l'ultima SEP/BB sia compatibile con la versione che stai cercando di ripristinare per evitare bootloop o attivazioni fallite! Per farlo, consulta il [grafico SEP/BB](https://docs.google.com/spreadsheets/d/1Mb1UNm6g3yvdQD67M413GYSaJ4uoNhLgpkc7YKi3LBs/edit#gid=0). Se una cella riporta "Compatibile" allora sei libero di ripristinare a quella versione.

:::

## Download

- L'ultima versione di [FutureRestore-GUI](https://github.com/CoocooFroggy/FutureRestore-GUI/releases)
- Il file iPSW per il tuo dispositivo da [ipsw.me](https://ipsw.me)
  - Scarica la stessa versione di iOS del tuo blob
- Su Windows, assicurati di avere installato [iTunes](https://www.apple.com/itunes/)
  - Scorri verso il basso e seleziona l'altra build di Windows siccome la versione di Microsoft Store non funzionerà
- Se sei su un dispositivo A10 con 15.0-15.1.1
  - L'ultima versione di [TrollStore](https://github.com/opa334/TrollStore/releases)
  - L'ultima versione di [TrollNonce](https://github.com/opa334/TrollNonce/releases)

## Per Iniziare (Jailbroken)

1. Apri il gestore di pacchetti sul tuo dispositivo jailbroken
1. Aggiungi [repo.1conan.com](https://repo.1conan.com) alle sorgenti
1. Scarica e installa dimentio
1. Scarica e installa NewTerm2
2. Procedere a [Trovare il generatore](#finding-the-generator)

## Per Iniziare (Non-Jailbroken)

1. Vai alla pagina GitHub di [TrollStore](https://github.com/opa334/TrollStore) e segui le istruzioni d'installazione per il tuo device
   - Se è elencato "non supportato" e non puoi eseguire il jailbreak o non hai un dispositivo A11-, non sarai in grado di procedere
2. Una volta che TrollStore è installato, installa l'app di [TrollNonce](https://github.com/opa334/TrollNonce/releases) tramite TrollStore
3. Procedere alla sezione successiva

## Trovare il generatore

::: danger

Assicurati di non modificare il file blob! Così facendo lo renderi invalido e inutilizzabile con futurerestore.

:::

1. Apri il tuo blob in un editor di testo e cerca `generator` ![Esempio di Generator](https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg)

1. Annota il valore all'interno del campo `<string>`
    - Dovrebbe essere `0x` seguito da 16 caratteri che saranno una combinazione di lettere e numeri. Questo è il tuo generator.

**N.B:** Se non è presente alcun valore, prova a ricordare quale jailbreak stavi usando al momento del salvataggio dei blobs. Se stavi usando unc0ver, il tuo generator molto probabilmente è `0x1111111111111111`, se stavi usando Chimera/Odyssey/Taurine, il tuo generator molto probabilmente è `0xbd34a880be0b53f3`

## Impostare la nonce (Jailbroken)

1. Apri NewTerm 2 sul tuo dispositivo e digita il seguente comando, dove `[generator]` è il valore che hai appena ottenuto: `su root -c 'dimentio [generator]'`

1. Quando viene richiesta una password, inserisci la password di root
    - Quella predefinita è impostata su `alpine`, non è la password del tuo telefono.
1. Una volta eseguito il comando, dovrebbe comparire del testo
1. Vicino alla fine del testo, dovresti vedere la riga `Set nonce to [generator]`

## Impostare la nonce (Unjailbroken)

::: warning

Questo metodo non funzionerà sui dispositivi A9 o sui dispositivi A10 su 15.2+. Se non riesci ad eseguire il jailbreak, devi seguire [questa guida](https://gist.github.com/aac55c97f7925cddcf5ec3167f85dfe8).

:::

1. Apri l'app TrollNonce
2. Seleziona l'opzione `Imposta Nonce`, poi inserisci nel campo il valore del generatore che hai trovato nel tuo blob. Tocca `Set`

### Su Computer

::: danger

Ripetendo: **non puoi** eseguire il FutureRestore su nessun dispositivo che supporta iOS 16. Seguire i passaggi seguenti porterà al fallimento del processo o dell'attivazione del dispositivo, i quali implicheranno il ripristino a una versione firmata di iOS. Nonostante tu non possa effettuare il downgrade, potresti avere un modo per aggiornare e puoi trovare le istruzioni/dettagli alla pagina <router-link to="/updating-blobless">Aggiornare (Blobless)</router-link> Troubleshooting.

:::

1. Connetti il dispositivo al tuo computer
1. Assicurati che il tuo computer sia autorizzato dal tuo dispositivo
    - Opzionalmente, è possibile creare un backup completo del dispositivo tramite iTunes o Finder
1. Apri FutureRestoreGUI sul tuo computer
    - Se richiesto da Windows Defender, Windows Smartscreen o un altro software anti-virus, consenti al programma di essere eseguito - è sicuro
1. Quando apri FutureRestoreGUI, ti dovrebbe essere presentato questo menu: ![Schermata principale di FutureRestoreGUI](/assets/images/futurerestore-gui.png)

1. Clicca sul pulsante `Impostazioni` e abilita `Futurerestore Beta`, quindi fai clic sul pulsante `Scarica FutureRestore`. **Questa opzione è disponibile solo per macOS e Linux**
  - Gli utenti Windows devono scaricare la beta da [qui](https://cdn.cryptiiiic.com/bin/Windows/x86_64/futurerestore/futurerestore-Windows-x86_64-v2.0.0-test-Build_304-RELEASE.exe). Una volta fatto, premi `Seleziona FutureRestore Binary/Executable` e vai a dove hai scaricato la beta. Seleziona il file e clicca `Apri`
1. Fai clic sul pulsante `Select Blob File...` e seleziona il file blob .shsh2
1. Fai clic su `Select Target iPSW File...` e seleziona il tuo file .ipsw
1. Dopo fai clic sul pulsante Next per passare al menu Options, assicurati che `Extra Logs` sia abilitato
1. Se non sei in fase di downgrading, è sicuro abilitare `Preserve Data` nel menu delle opzioni per conservare i dati. Tuttavia, utilizzarlo mentre si fa il downgrade potrebbe essere pericoloso
1. Non abilitare `AP Nonce Collision` su qualsiasi dispositivo moderno
1. Abilita `No RSEP`
1. Fai clic su Next per passare al menu Controls
1. Clicca `Start Futurerestore`

Se si verificano problemi durante il processo, controlla la <router-link to="/futurerestore-help">pagina di aiuto di Futurerestore</router-link>, se ancora non riesci a trovare una soluzione, chiedi aiuto nel canale #genius-bar sul [Server Discord](https://discord.gg/9apvC4C3CC) di r/jailbreak.
