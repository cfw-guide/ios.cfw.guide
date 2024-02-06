---
lang: it_IT
title: Installare palera1n (Rootful)
description: Guida all'installazione di palera1n rootful (Archiviata)
permalink: /it_IT/archived-palera1n-rootful
pkgman: sileo
extra_contributors:
  - Mineek
  - nebula
redirect_from:
  - /using-palen1x-rootful
---

::: danger

Questa guida esiste solo come archivio - in futuro non apporteremo modifiche significative a questa guida se dovesse succedere qualcosa.

Per gli utenti che sono alla ricerca di una guida per palera1n aggiornata - consigliamo generalmente di seguire la normale guida <router-link to="/installing-palera1n">Utilizzare palera1n</router-link>, in quanto fornisce una migliore esperienza complessiva rispetto all'utilizzo di palera1n rootful, ed è la direzione generale che la maggior parte degli sviluppatori sta intraprendendo, dando la priorità al supporto tweak.

Se stai attualmente utilizzando palera1n rootful, ti cosigliamo di seguire la guida per <router-link to="/removing-palera1n">rimuovere palera1n rootful</router-link> e poi <router-link to="/installing-palera1n">Installare palera1n rootless</router-link>

In ogni caso, se scegli di installare o di continuare ad utilizzare palera1n rootful, tieni a mente che ci sarà sempre meno supporto man mano che passa il tempo, e che i tweak più recenti tenderanno a non supportare questa configurazione di palera1n.

:::

palera1n è un jailbreak work-in-progress che patcha il kernel in modo da poter utilizzare Sileo e installare tweak. Attualmente, palera1n è compatibile con A11 (iPhone X) e dispositivi precedenti su iOS 15 e successivi, con alcuni accorgimenti importanti.

Sui dispositivi con A11, devi disabilitare il **pin di sblocco** e non sarai in grado di utilizzare il pin, o altre funzionalità SEP, finché non fai il boot allo stato di iOS stock. Le funzionalità SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.

Inoltre, se il tuo è un dispostivo A11 con iOS 16 a cui è stato impostato un codice di sblocco precedentemente, dovrai **cancellare il contenuto e le impostazioni** per poter eseguire il jailbreak.

::: warning

Se stai usando una vecchia versione di palera1n che è tethered, dovrai <router-link to="/removing-palera1n">rimuovere palera1n</router-link> prima di continuare.

:::

::: tip

Se stai usando Windows, dovresti invece seguire <router-link to="/archived-palen1x-rootful">Utilizzare palen1x-rootful</router-link>.

:::

## Download

La versione di [palera1n](https://github.com/palera1n/palera1n/releases) per il tuo sistema operativo.

- Gli utenti macOS generalmente dovrebbero scaricare `palera1n-macos-universal`
- Gli utenti Linux dovrebbero scaricare la versione che corrisponde all'architettura del computer che stanno usando
  - Solitamente è `palera1n-linux-x86_64`. Scegli questa se non sei sicuro.
  - Se stai usando un computer a 32 bit, scegli `palera1n-linux-x86`.
  - Se stai usando un computer ARM (ad esempio un Raspberry Pi), scegli `palera1n-linux-armel` per 32-bit e `palera1n-linux-arm64` per 64-bit.

## Installazione del jailbreak

Seleziona un sistema operativo:

:::::: tabs

:::: tab name="macOS" :default="true"

### Installa palera1n

1. Abilita l'accesso completo ai dischi per il terminale (questo deve essere fatto solo una volta)

   - macOS Monterey e inferiori: Preferenze di sistema → Sicurezza e Privacy→ Privacy → Accesso completo al disco
   - macOS Ventura e superiori: Impostazioni di sistema → Privacy & Sicurezza → Accesso a disco completo

   Se il terminale non viene visualizzato nell'elenco, fare clic sull'icona del più e selezionarlo da Applicazioni → Utilità.
2. Se sei su macOS Monterey 12.2.1 o inferiori, esegui i seguenti comandi (questo deve essere fatto solo una volta):
   ```
   sudo python -m ensurepip
   sudo python -m pip install setuptools xattr==0.6.4
   ```
3. Apri una finestra di terminale e fai `cd` alla directory in cui palera1n è stato scaricato (solitamente `cd ~/Downloads`).
4. Esegui `sudo mkdir -p /usr/local/bin`
5. Esegui `sudo mv ./palera1n-macos-universal /usr/local/bin/palera1n`
   - Sostituisci `./palera1n-macos-universal` con qualsiasi versione tu abbia scaricato
6. Esegui `sudo xattr -c /usr/local/bin/palera1n`
7. Esegui `sudo chmod +x /usr/local/bin/palera1n`

### Eseguire palera1n

::: warning

Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::

::: tip

Se si utilizza un Mac con Apple Silicon e si utilizza una porta USB-C per collegare il cavo/adattatore, dovrai scollegare e ricollegare il dispositivo dopo che `Checkmate!` compare nei log.

:::

1. Esegui `palera1n <insert arguments here>`
   - I dispositivi da 16GB dovrebbero utilizzare `palera1n -B -f` - nota che avrai bisogno di 2-3GB di spazio di archiviazione libero.
   - I dispositivi con più di 2-3GB di spazio di archiviazione libero, ma con meno di 10-15GB di spazio di archiviazione libero possono anche utilizzare `palera1n -B -f`, ma solo se sono su iOS 15.
   - I dispositivi che hanno iOS 16 o hanno più di 10-15GB di spazio di archiviazione libero dovrebbero usare `palera1n -c -f`
   - Assicurati che il tuo dispositivo sia collegato quando inserisci questo comando

::: warning

Se il tuo dispositivo è:

- Su iOS 15 e non ha almeno 2-3GB di spazio di archiviazione libero
- Su iOS 16 e non ha almeno 10-15GB di spazio di archiviazione libero

Non sarai in grado di continuare a seguire questa guida.

Se non riesci a liberare abbastanza spazio per seguirla, dovresti invece usare palera1n rootless seguendo <router-link to="/installing-palera1n-rootless">Utilizzare palera1n (Rootless)</router-link>.

:::

2. Quando sei pronto, premi `Enter` e segui le istruzioni sullo schermo per entrare in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>.

Il tuo dispositivo dovrebbe iniziare a creare il FakeFS o il BindFS (a seconda dell'opzione scelta).

3. Una volta che il dispositivo ha finito di creare il FakeFS o il BindFS, esegui `palera1n -f`

::: tip

Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a metà di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:

1. Nella finestra del terminale, premere `Control` + `C` sulla tastiera
2. Riesegui il comando che hai appena eseguito

Dovrai farlo ogni volta che riesegui il jailbreak sul tuo dispositivo.

:::

::::

:::: tab name="Linux"

::: danger

Se stai provando ad utilizzare un software per macchina virtuale di qualche tipo da Windows (es. Virtualbox, VMWare, Windows Subsystem for Linux, ecc) non sarà possibile seguire questa guida.

:::

::: warning

Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, è necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.

:::

### Installa palera1n

::: warning

Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::

1. Apri una finestra di terminale
2. Esegui `sudo systemctl stop usbmuxd`
3. Esegui `sudo usbmuxd -f -p`
4. Apri una nuova finestra di terminale e fai `cd` alla directory in cui palera1n è stato scaricato (solitamente `cd ~/Downloads`).
5. Esegui `sudo mv ./palera1n-linux-* /usr/bin/palera1n`
6. Esegui `sudo chmod +x /usr/bin/palera1n`

### Eseguire palera1n

1. Esegui `sudo palera1n`
   - I dispositivi da 16GB dovrebbero utilizzare `sudo palera1n -B -f` - nota che avrai bisogno di 2-3GB di spazio di archiviazione libero.
   - I dispositivi con più di 2-3GB di spazio di archiviazione libero, ma con meno di 10-15GB di spazio di archiviazione libero possono anche utilizzare `sudo palera1n -B -f`, ma solo se sono su iOS 15.
   - I dispositivi che hanno iOS 16 o hanno più di 10-15GB di spazio di archiviazione libero dovrebbero usare `sudo palera1n -c -f`
   - Assicurati che il tuo dispositivo sia collegato quando inserisci questo comando

::: warning

Se il tuo dispositivo è:

- Su iOS 15 e non ha almeno 2-3GB di spazio di archiviazione libero
- Su iOS 16 e non ha almeno 10-15GB di spazio di archiviazione libero

Non sarai in grado di continuare a seguire questa guida.

Se non riesci a liberare abbastanza spazio per seguirla, dovresti invece usare palera1n rootless seguendo <router-link to="/installing-palera1n">Utilizzare palera1n</router-link>.

:::

2. Quando sei pronto, premi `Enter` e segui le istruzioni sullo schermo per entrare in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>.

Il tuo dispositivo dovrebbe iniziare a creare il FakeFS o il BindFS (a seconda del comando che hai eseguito).

3. Una volta che il dispositivo ha finito di creare il FakeFS o il BindFS, esegui `sudo palera1n -f`

::: tip

Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a metà di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:

1. Nella finestra del terminale, premere `Control` + `C` sulla tastiera
2. Riesegui il comando che hai appena eseguito

Dovrai farlo ogni volta che riesegui il jailbreak sul tuo dispositivo.

:::

::::

::::::

Una volta che il dispositivo si avvia, aprire l'app palera1n loader e toccare `Install`. Dopo un po' di tempo, ti verrà chiesto di riprenderti e `Sileo` dovrebbe essere sulla tua schermata iniziale.

::: tip

Per rieseguire il jailbreak sul tuo dispositivo, indipendentemente dai comandi che hai eseguito sopra, esegui semplicemente `palera1n -f` e ripeti ogni step applicabile.

::: <br>
To revert the jailbreak, follow <router-link to="/removing-palera1n/">Removing palera1n</router-link>.
