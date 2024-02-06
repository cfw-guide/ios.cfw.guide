---
lang: it_US
title: Utilizzare palen1x (Rootful)
excerpt: Guida all'installazione di palera1n rootful tramite palen1x (Archiviata)
permalink: /it_IT/archived-palen1x-rootful
pkgman: sileo
extra_contributors:
  - Mineek
  - nebula
  - ssalagginkool
redirect_from:
  - /installing-palera1n-rootful
---

::: danger

Questa guida esiste solo come archivio - in futuro non apporteremo modifiche significative a questa guida se dovesse succedere qualcosa.

Per gli utenti che sono alla ricerca di una guida per palera1n aggiornata - consigliamo generalmente di seguire la normale guida <router-link to="/using-palen1x">Usando palen1x</router-link>, in quanto fornisce una migliore esperienza complessiva rispetto all'utilizzo di palera1n rootful tramite palen1x, ed è la direzione generale che la maggior parte degli sviluppatori sta intraprendendo, dando la priorità al supporto tweak.

Se stai attualmente utilizzando palera1n rootful, ti cosigliamo di seguire la guida per <router-link to="/removing-palera1n">rimuovere palera1n rootful</router-link> e utilizzare palen1x per <router-link to="/using-palen1x">Installare palera1n rootless</router-link>

In ogni caso, se scegli di installare o di continuare ad utilizzare palera1n rootful, tieni a mente che ci sarà sempre meno supporto man mano che passa il tempo, e che i tweak più recenti tenderanno a non supportare questa configurazione di palera1n.

:::

::: danger

Se si sta cercando di utilizzare un software Virtual Machine di qualche tipo da Windows (es. Virtualbox, VMWare, Sottosistema Windows per Linux, ecc) non si avrà successo seguendo questa guida, e avrai bisogno di un supporto avviabile come una chiavetta USB e di seguire i passaggi seguenti.

:::

::: warning

Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, è necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.

:::

palen1x è una distro Linux avviabile in live che consente di eseguire rapidamente palera1n su un dispositivo compatibile. palera1n è in grado di eseguire il jailbreak su dispositivi iOS da A8(X) ad A11 su iOS 15 o successivi

Sui dispositivi con A11, devi disabilitare il **pin di sblocco** e non sarai in grado di utilizzare il pin, o altre funzionalità SEP, finché non fai il boot allo stato di iOS stock. Le funzionalità SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.

Inoltre, se il tuo è un dispostivo A11 con iOS 16 a cui è stato impostato un codice di sblocco precedentemente, dovrai **cancellare il contenuto e le impostazioni** per poter eseguire il jailbreak.

## Requisiti

- Unità USB da 64MB o superiore
  - Se non hai un'unità USB, ma hai un'altra forma di hardware rimovibile supportato (es. Un CD o DVD), è possibile utilizzarlo invece di un'unità USB
- L'ultima versione di [palen1x](https://github.com/palera1n/palen1x/releases)
- [Ventoy](https://github.com/ventoy/Ventoy/releases)

## Installare Ventoy

1. Scarica ed estrai il contenuto del file `Ventoy.zip`
2. Inserisci l'unità USB se non l'hai già fatto e apri il file `Ventoy2Disk.exe`
3. Seleziona l'unità USB dalla quale vuoi avviare palen1x
   - Questa unità USB verrà completamente cancellata
   - Assicurati di eseguire il backup di tutti i dati importanti in anticipo
4. Fai clic su `Install` e conferma di essere d'accordo con il cancellare l'unità USB
   - Non rimuovere l'unità USB fino a quando il processo non sarà completato
5. Una volta installato, copia il file iso di palen1x che hai scaricato sul drive USB

## Avviare palen1x

1. Riavvia il pc, vai nelle impostazioni del BIOS e disabilita il Secure Boot, quindi entra nel boot picker e seleziona l'unità USB da avviare
   - Questo è diverso per ogni computer
   - Cerca il tuo PC o la marca della scheda madre per scoprire come entrare nelle impostazioni del BIOS se non sei sicuro
2. Premi Invio una volta che visualizzi la schermata di Ventoy per avviare palen1x

## Eseguire palera1n

### Creazione del FakeFS/BindFS

::: warning

Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::

1. Una volta che hai caricato palen1x, seleziona `palera1n`
2. Seleziona `Options`
3. Abilita una delle due opzioni, a seconda della capacità del tuo dispositivo, quantità di spazio libero e versione iOS:
   - I dispositivi da 16GB dovrebbero abilitare `Create BindFS` - nota che avrai bisogno di 2-3GB di spazio di archiviazione libero.
   - I dispositivi con più di 2-3GB (se su iOS 15) o più di 5-6GB (se su iOS 16) di spazio di archiviazione libero ma con meno di 10-15GB di spazio di archiviazione libero possono abilitare `Create BindFS`
   - I dispositivi che hanno più di 10-15GB di spazio di archiviazione libero dovrebbero abilitare `Create FakeFS`

::: warning

Se il tuo dispositivo è:

- Su iOS 15 e non ha almeno 2-3GB di spazio di archiviazione libero
- Su iOS 16 e non ha almeno 5-6GB di spazio di archiviazione libero

Non sarai in grado di continuare a seguire questa guida.

Se non riesci a liberare abbastanza spazio per seguirla, dovresti invece usare palera1n rootless seguendo <router-link to="/using-palen1x">Utilizzare palera1n</router-link>.

:::

4. Premi `Enter` per salvare le opzioni appena selezionate, quindi seleziona `Start`
   - Assicurati che il tuo dispositivo sia collegato quando fai ciò.
5. Segui le istruzioni sullo schermo per entrare in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>.

Il tuo dispositivo dovrebbe creare il FakeFS o il BindFS (a seconda dell'opzione scelta).

::: tip

Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a metà di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:

1. Nella finestra del terminale, premere `Control` + `C` sulla tastiera
2. Scrivi `exit`
3. Riesegui su palen1x gli step che hai appena fatto

:::

### Jailbreaking con palera1n

1. Quando appare `press enter to exit`, premere il tasto Invio.
2. Una volta caricato nuovamente il menu palen1x, riselezionare `palera1n`
3. Seleziona `Start`
   - Assicurati che il tuo dispositivo sia collegato quando fai ciò.
4. Segui le istruzioni sullo schermo per entrare in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>.

Il tuo dispositivo dovrebbe ora iniziare a eseguire il jailbreak.

::: tip

Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a metà di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:

1. Nella finestra del terminale, premere `Control` + `C` sulla tastiera
2. Scrivi `exit`
3. Riesegui su palen1x gli step che hai appena fatto

:::

Una volta che il dispositivo si avvia, aprire l'app palera1n loader e toccare `Install`. Dopo un po' di tempo, ti verrà chiesto di riprenderti e `Sileo` dovrebbe essere sulla tua schermata iniziale.
