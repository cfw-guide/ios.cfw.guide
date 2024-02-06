---
lang: it_IT
title: "Risoluzione problemi"
description: Risolvere i problemi comuni su dispositivi Jailbroken.
permalink: /it_IT/troubleshooting
extra_contributors:
  - iCrazeiOS
  - hopolapopola
  - Tanbeer191
  - TheHacker894
  - raizo
  - Superuser
---

## Bootloop e respring loop

### Respring Loop

Un respring loop è sintomo di uno o più tweak incompatibili, che causano il blocco del dispositivo mentre sei in uno stato jailbroken.

Mentre non c'è modo semplice per diagnosticare ciò che provoca un respring loop, la colpa più probabile è il tweak più recente installato/aggiornato che risulta incompatibile con la tua versione di iOS o un altro tweak.

#### Jailbreak semi-(un)tethered

::: tip

Un jailbreak semi-tethered è un jailbreak che ha bisogno di un'app su un computer per eseguire il jailbreak dopo un riavvio.

Un jailbreak semi-untethered è un jailbreak che ha bisogno di un'app o di un sito web per eseguire il jailbreak dopo un riavvio.

:::

Per uscire da un respring loop, [riavvia forzatamente il tuo dispositivo](#How-to-exit-dfu-mode). Una volta riavviato, disabilita l'iniezione dei tweak dalle impostazioni dell'app di jailbreak. Una volta che sei jailbroken, dovresti essere in grado di accedere al gestore dei pacchetti e rimuovere il tweak più recente o l'ultima modifica delle impostazioni di un tweak che potrebbe aver causato il respring loop.

In uno scenario peggiore, in cui non è possibile diagnosticare o risolvere il problema, chiedi supporto nel [server discord di r/jailbreak](https://discord.gg/jb) o ripristina il rootFS.

#### Jailbreak untethered

::: tip

Un jailbreak untethered è un jailbreak che persiste dopo un riavvio

:::

Un respring loop su un jailbreak untethered è molto facile da confondere con un bootloop, dal momento che anche al riavvio del dispositivo il respring loop persisterà.

Per uscire da un potenziale respring loop, è necessario [riavviare forzatamente](#How-to-exit-dfu-mode) il dispositivo e tenere premuto il Volume Su, siccome la tempistica varia a seconda dei jailbreak, la cosa migliore è tenere premuto Volume Su fino a quando non si avvia iOS.

Anche se dopo aver tentato di fare ciò più volte non è possibile avviare iOS tenendo premuto il Volume Su; potresti essere in un [bootloop](#Bootloops).

### Bootloop

Un bootloop è un errore irrecuperabile causato dai file di sistema corrotti o un errore hardware. Anche se molto più raro nelle versioni moderne di iOS, è comunque possibile imbattersi in un bootloop.

Un bootloop può essere riconosciuto dal fatto che il logo Apple appaia costantemente, anche dopo aver eseguito un riavvio forzato del dispositivo.

Per uscire da un bootloop è necessario ripristinare il dispositivo in DFU mode.

## Come entrare in modalità DFU

#### Per i dispositivi con un pulsante home fisico (iPhone 6s e precedenti):

1. Tieni premuto il tasto Home e Power.
1. Dopo 8 secondi, rilascia il tasto Power e continua a tenere premuto il tasto Home.

#### Per iPhone 7/7+, iPod 7th Gen e gli iPad del 2018:

1. Accendi il tuo iPhone/iPad se non lo è già
1. Connettilo al tuo computer con un cavo USB
1. Avvia iTunes (o Finder su macOS Catalina e più recenti) e controlla che l'iPhone/iPad sia riconosciuto
1. Tieni premuti i tasti Volume Giù e Accensione.
1. Dopo 8 secondi, rilascia il tasto Power e continua a tenere premuto il tasto Home.

#### Per dispositivi senza tasto Home, iPhone 8/8+, iPad Air 5 e iPad Mini 6:

1. Accendi il tuo iPhone/iPad se non lo è già
1. Connettilo al tuo computer con un cavo USB
1. Avvia iTunes (o Finder su macOS Catalina e più recenti) e controlla che l'iPhone/iPad sia riconosciuto
1. Premi il tasto Volume Su immediatamente seguito dal tasto Volume Giù
1. Premi e tieni premuto il tasto Accensione fino a quando lo schermo diventa nero
1. Rilascia il tasto Accensione
1. Immediatamente dopo, tieni premuto il tasto Accensione e il tasto Volume giù per 5 secondi
1. Rilascia il tasto Accensione ma continua a tener premuto il tasto Volume Giù per altri 5 secondi

## Come uscire dalla modalità DFU

#### Per i dispositivi con un pulsante home fisico (iPhone 6s e precedenti):

Tieni premuto il tasto Home e il tasto Accensione fino al riavvio del dispositivo.

#### Per iPhone 7/7+, iPod 7th Gen e gli iPad del 2018:

Tieni premuto il tasto Accensione e il tasto Volume Giù fino al riavvio del dispositivo.

#### Per dispositivi senza tasto Home, iPhone 8/8+, iPad Air 5 e iPad Mini 6:

1. Premi rapidamente il tasto Volume su
2. Premi rapidamente il tasto Volume giù
3. Tieni premuto il tasto Accensione fino al riavvio del dispositivo.

## Errori comuni su Chimera, Odyssey e Taurine

### ERR_Jailbreak

::: danger

Se riscontri questo problema mentre usi taurine-permanent, segui [ERR_Jailbreak quando si utilizza taurine-permanent](#ERR_Jailbreak-when-using-taurine-permanent).

:::

Questo è causato dal fatto di aver usato un altro jailbreak prima di Taurine. Per risolvere questo problema, è necessario ripristinare il rootfs:

1. Riavvia il dispositivo.
1. Apri l'app di Odyssey o Taurine, a seconda della tua versione iOS.
1. Attiva l'opzione `Restore Rootfs`
1. Premi su Jailbreak.

Una volta che il ripristino del rootfs sarà completato con successo, prova di nuovo ad eseguire il jailbreak.

### ERR_Already_Jailbroken e ERR_KernRW (Taurine)/ERR_TFP0 (Odyssey)
`ERR_Already_Jailbroken` indica che il processo di jailbreak è stato interrotto. `ERR_KernRW` e `ERR_TFP0` indicano che l'exploit non è riuscito. Entrambi possono essere risolti nello stesso modo:

1. Riavvia il dispositivo.
1. Apri l'app di Odyssey o Taurine, a seconda della tua versione iOS.
1. Premi su Jailbreak.

::: tip

I Jailbreak non hanno quasi mai un successo del 100%, potrebbe essere necessario riprovare ad eseguire il jailbreak più volte

:::

### "Installation Error" dopo aver aperto Sileo per la prima volta con Odyssey 1.4.2

Rimuovi la versione attualmente installata di Odyssey, esegui il sideload dell'[ultima versione di Odyssey](https://theodyssey.dev), ripristina il rootfs e poi esegui nuovamente il jailbreak.

### Impossibilità di aprire NewTerm o Cr4shed dopo un po' di tempo che si utilizza Taurine

::: tip

Se ti trovi su 14.3 o successivi *oppure* hai un dispositivo A12 o più recente, è probabile che il dispositivo si sia riavviato (il che significa che non sei più in uno stato Jailbroken) o potresti avere qualche altro problema non causato dal jailbreak.

:::

Se ti trovi su 14.0-14.3 *e* su un dispositivo A11 o precedente, questo problema è causato dal fatto che alcuni tweak e applicazioni utilizzano delle librerie che hanno dei componenti che possono avviarsi prima del jailbreak, ciò è in grado di interrompere il codesigning. Quando ciò accade, i tweak e le applicazioni che utilizzano queste librerie non possono essere utilizzate.

La soluzione più facile a questo problema è quella di riavviare il dispositivo e ri-eseguire ol jailbreak. In alternativa, se non vuoi che questo problema accada, puoi eseguire il jailbreak con <router-link to="/installing-odysseyra1n">Odysseyra1n</router-link>, siccome Taurine e Odysseyra1n sono entrambi intercompatibili fra loro e Odysseyra1n non è influenzato da questo problema.

### ERR_Jailbreak quando si utilizza taurine-permanent

Aggiorna all'ultima versione di taurine-permanent.

### Sileo non compare nella home screen dopo aver eseguito il jailbreak per la prima volta su Chimera 1.6.1 o Taurine 1.1.2

- Se hai questo problema su Chimera, usa [l'ultima versione di Chimera](https://chimera.coolstar.org/)
- Se riscontri questo problema su Taurine, usa [l'ultima versione di Taurine](https://taurine.app/)

## Errori comuni su unc0ver

### Problemi generali con unc0ver su iOS 14

::: tip

Mentre questi problemi sono generalmente i più frequenti su iOS 14, alcuni problemi potrebbero essere presenti anche su versioni precedenti di iOS

:::

Durante l'utilizzo di unc0ver su iOS 14, è molto comune imbattersi in questi problemi:
  - Le applicazioni si bloccano quando si tenta di avviarle
  - Vari problemi relativi all'app store (inclusa l'incapacità di scaricare app o effettuare acquisti in app)
  - Non riuscire a ricevere chiamate mentre si è jailbroken
  - Problemi mentre si utilizzano i dati mobili (come non essere in grado di caricare pagine web o altri servizi online)
  - Impossibile salvare, scattare o visualizzare screenshot
  - Safari non carica le pagine o le ricarica infinitamente
  - La sezione di condivisione non funziona correttamente
  - Problemi di connessione con Carplay.

::: warning

Se stai usando Fugu14 per avere unc0ver firmato in modo permanente, si possono sperimentare questi problemi in misura maggiore, così come alcuni problemi esclusivi di Fugu14, come:
  - L'incapacità di visualizzare le statistiche della batteria
  - Kernel panic più frequenti e casuali

:::

Per risolvere **temporaneamente** questi problemi, esegui uno userspace reboot digitando `launchctl reboot userspace` in un'app terminale (ad esempio NewTerm) sul tuo dispositivo.

### rootFS already mounted

1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Spazio iX`
    - Potrebbe apparire come `Spazio iPhone`, ` Spazio iPad` o `Spazio iPod`
1. Scorri fino all'Aggiornamento di Sistema scaricato e tocca su di esso
1. Clicca su `Elimina`
1. Riesegui unc0ver

Se ancora non riesci a risolvere, o non c'è nessun aggiornamento scaricato, potrebbe essere necessario scaricare l'aggiornamento OTA ed eliminarlo nuovamente. Prova le seguenti indicazioni:

1. Apri l'applicazione di unc0ver
1. Tocca l'icona delle impostazioni nell'angolo in alto a destra
2. Deseleziona tutte le opzioni
3. Abilita `Restore RootFS`
4. Clicca su `Done` nell'angolo in alto a destra
5. Vai nella sezione dove si esegue il jailbreak e clicca su `Restore RootFS`
    - Se appare `Jailbreak`, torna indietro e controlla che `Restore RootFS` sia l'unica opzione abilitata
1. Quando viene richiesto il ripristino, premi `OK`
    - Questo potrebbe richiedere un po' di tempo
    - Se fallisce, riprova dall'inizio
1. Quando finito, tocca di nuovo `OK` e il dispositivo verrà riavviato
1. Apri l'app delle Impostazioni
1. Vai su `Generali` -> `Aggiornamento Software`
1. Scarica l'aggiornamento del software ma **non installarlo**
1. Torna a `Generale`
1. Una volta scaricato, vai su `Spazio iX`
    - Potrebbe apparire come `Spazio iPhone`, ` Spazio iPad` o `Spazio iPod`
1. Scorri fino all'Aggiornamento di Sistema scaricato e tocca su di esso
1. Clicca su `Elimina`
1. Scorri fino all'applicazione unc0ver e cliccaci sopra
1. Clicca su `Elimina`
1. [Installa unc0ver](/installing-unc0ver) di nuovo, ma non eseguirlo
1. Attiva la modalità aereo ed esegui il jailbreak
    - Questo può richiedere diversi tentativi, continua a provare fino a quando non funziona

::: tip

Se non funziona, chiedi supporto sul [Server Discord](https://discord.gg/jb) di r/Jailbreak.

:::

### Non essere in grado di rieseguire il jailbreak o ripristinare il rootfs su unc0ver dopo aver utilizzato tweak come Batchomatic o IAmLazy

La tua possibilità di risolvere questo problema dipende dalla tua versione di iOS:

- Se sei su iOS 14.3 o inferiore (tranne se sei su 11.x o su A12(X) con 12.1.3-12.4.1), segui un'altra guida per ripristinare <router-link to="/it_IT/restoring-rootfs">il RootFS</router-link> che sia supportata dal tuo dispositivo/versione di ios.
- Se sei su iOS 14.4-14.5.1, prova a ripristinare il rootfs nell'app di Fugu14
- Se sei su iOS 14.6-14.8, le tue opzioni sono quelle di attendere un aggiornamento di unc0ver che risolve questo problema, o ripristinare il dispositivo in modalità DFU all'ultima versione di iOS e perdere la capacità di eseguire il jailbreak fino a quando non ne uscirà uno


## Correggere gli errori di installazione dei pacchetti su Sileo

Ai fini di questa sezione di risoluzione dei problemi, stiamo supponendo che usate Sileo su Taurine/Odysseyra1n.

Per determinare quale errore si sta incontrando, dovrai cliccare su `Mostra Dettagli` su Sileo quando riscontri un errore durante l'installazione o la rimozione di un pacchetto.

Se le risoluzioni qui sotto non funzionano, puoi chiedere supporto sul [Server Discord](https://discord.gg/Sileo) di Sileo.

### Syntax error: "(" unexpected
Questo errore indica che lo sviluppatore del tweak che stai cercando di installare/rimuovere ha scritto lo script di installazione/rimozione in modo errato. Avrai bisogno di Filza per risolvere questo problema.

#### Rimozione del tweak che causa questo errore
1. Apri Filza e vai su `/Library/dpkg/info`
1. Trova il file .postinst o .postrm corrispondente al tweak che riporta un errore, ad esempio `com.miro.shortmoji2. postinst` sarebbe il file da modificare se ShortMoji 2 riportasse un errore di installazione o `com. miro.shortmoji2.postrm` se riportasse un errore di disinstallazione
1. Tocca e tieni premuto il file finché non appare un menu
1. Premi `Apri con`
1. Premi `Editor di testo`
1. Trova la prima riga del file che dice `#!/bin/sh`
1. Sostituisci `sh` con `bash`
1. Clicca su `Salva`
1. Apri Sileo
1. Disinstalla il tweak.
   - Per i tweak a pagamento, è necessario inviare una segnalazione di un bug allo sviluppatore se si desidera installare il tweak.
   - Per i tweak gratuiti, dovresti inviare una segnalazione di un bug allo sviluppatore. Se desideri installare immediatamente il tweak, continua con questa guida.

#### Modificare il tweak per correggere l'errore (solo tweak gratuiti)
1. Apri [Parcility](https://parcility.co) su Safari nel tuo dispositivo
1. Cerca il tweak che vuoi installare
   - Se non appare nella ricerca, dovrai aspettare che lo sviluppatore aggiorni il proprio tweak
1. Clicca su `Download`
1. Una volta terminato il download del file, clicca sul file nel menu dei download di Safari
1. Clicca sul tasto di condivisione
1. Clicca `Salva su Filza`
1. Clicca su `Salva`
1. Apri Filza, si aprirà nella cartella in cui hai scaricato il file del tweak
1. Tocca il tweak che desideri correggere
1. Scorri verso il basso e tocca `Estrai`
1. Apri la cartella estratta e vai a `DEBIAN`
1. Ripeti i passaggi 2-8 di `Rimozione del tweak che causa questo errore` sopra
1. Torna alla cartella in cui hai scaricato il tweak
1. Tocca e tieni premuta la cartella del tweak
1. Premi `Crea DEB`
1. Tocca e tieni premuto il file deb ottenuto
1. Premi `Apri con`
1. Clicca su `Sileo`
1. Clicca su `Installa`

::: tip

Alcuni sviluppatori nella community del Jailbreak mettono una call alla shell sbagliata nei loro script di installazione/rimozione. Fino Ad Aprile 2021, la maggior parte dei Jailbreak puntavano `/bin/sh` su `/bin/bash` così gli sviluppatori sono stati in grado di utilizzare `#!/bin/sh` per indicare quale shell usare anche se usano le funzioni di Bash. Nell'aprile 2021, Procursus, che viene utilizzaro su Chimera, Odyssey, Taurine e Odysseyra1n, ha iniziato ad usare una shell differente con prestazioni più elevate. Ciò ha provocato in non funzionamento di questi script formattati in modo errato.

:::

### Exec format error
Questo errore indica che lo sviluppatore del tweak che stai cercando di installare/rimuovere omesso una parte fondamentale durante la scrittura dello script di installazione/rimozione. Avrai bisogno di Filza per risolvere questo problema.

#### Rimozione del tweak che causa questo errore
1. Apri Filza e vai su `/Library/dpkg/info`
1. Trova il file .postinst o .postrm corrispondente al tweak che riporta un errore, ad esempio `com.miro.shortmoji2. postinst` sarebbe il file da modificare se ShortMoji 2 riportasse un errore di installazione
1. Tocca e tieni premuto il file finché non appare un menù.
1. Premi `Apri con`
1. Premi `Editor di testo`
1. Aggiungi una nuova riga all'inizio del file che dice `#!/bin/bash`.
1. Clicca su `Salva`
1. Apri Sileo
1. Disinstalla il tweak.
1. Naviga fino alla sezione `Sorgenti`
1. Esegui uno swipe verso il basso per aggiornare le sorgenti
1. Naviga fino alla sezione `Cerca`
1. Digita `libiosexec1` nel campo Ricerca
1. Installa `libiosexec1` di Hayden Seay
1. Prova a installare nuovamente il tweak che causava un errore

::: tip

Nel maggio 2021, Procursus ha tentato di migrare a una versione di dpkg che non gestisce più questo errore di installazione, gli sviluppatori avrebbero dovuto includere `#! bin/sh` o `#!/bin/bash` nei loro script. Al momento della scrittura, lo sviluppatore principale di Procursus ha creato una patch, `libiosexec`, che riaggiunge questa gestione degli errori. Se continui a riscontrare questo errore, potresti non aver aggiornato i pacchetti da un po'.

:::
