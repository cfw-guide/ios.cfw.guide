---
lang: it_IT
title: palera1n
description: Guida all’installazione di palera1n
permalink: /it_IT/installing-palera1n
pkgman: sileo
redirect_from:
  - /installing-palerain
  - /palera1n
  - /palerain
  - /installing-palera1n/linux
  - /installing-palera1n/macos
  - /installing-palera1n/windows
  - /installing-palera1n-rootless
extra_contributors:
  - Mineek
  - nebula
---

palera1n è un jailbreak in fase di sviluppo che è compatibile con A11 (iPhone X) e dispositivi precedenti su iOS 15.0 o successivi, con alcune avvertenze per dispositivi A11.

Sui dispositivi con A11, **devi disabilitare il codice di sblocco** e non sarai in grado i utilizzare il blocco con codice, o altre funzionalità SEP, finchè non tornerai a uno stato di iOS stock. Le funzionalità SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.

Inoltre, se il tuo è un dispostivo A11 con iOS 16 a cui è stato impostato un codice di sblocco precedentemente, dovrai **cancellare il contenuto e le impostazioni** per poter eseguire il jailbreak.

::: warning


Se stai usando una vecchia versione di palera1n tethered, dovrai <router-link to="/removing-palera1n-legacy">rimuovere palera1n</router-link> prima di continuare.

:::


::: warning


Se stai usando Windows, devi seguire <router-link to="/using-palen1x">Usare palen1x</router-link> .

:::


## Installazione del jailbreak

Seleziona un sistema operativo:

:::::: tabs


:::: tab name="macOS" :default="true"


### Installa palera1n

1. Apre una finestra di terminale
1. Esegui `sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`

### Eseguire palera1n

::: warning


Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::


::: tip


Se si utilizza un Mac con Apple Silicon e si utilizza una porta USB-C per collegare il cavo/adattatore, dovrai scollegare e ricollegare il dispositivo dopo che `Checkmate!` compare nei log.

:::


1. Run `palera1n -e thid_should_crash=0`
    - Assicurati che il tuo dispositivo sia collegato quando inserisci questo comando
1. Quando sei pronto, premi `Enter` e segui le istruzioni sullo schermo per entrare in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>.

::: tip


Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a metà di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:

1. Nella finestra del terminale, premere `Control` + `C` sulla tastiera
1. Riavvia il comando che hai appena eseguito

Dovrai farlo ogni volta che riesegui il jailbreak sul tuo dispositivo.

:::


:
:::


:::: tab name="Linux"


::: danger


A seconda della distribuzione Linux che si sta utilizzando, è possibile eseguire incorrere in problemi con l'ultima versione (2.0.0b8) di palera1n.

If you do run into issues, you have four options:
- Reperire un Mac e seguire la sezione di macOS.
- Try to use a different Linux distribution instead (e.g. Ubuntu).
- <router-link to="/using-palen1x">Usare palen1x</router-link> , che non ha questo problema.
- **If you are trying to jailbreak a 15.0 to 16.7.4 device**, you can manually install [palera1n 2.0.0b7](https://github.com/palera1n/palera1n/releases/tag/v2.0.0-beta.7) instead.

:::


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
1. Esegui `sudo systemctl stop usbmuxd`
1. Esegui `sudo usbmuxd -f -p`
1. Apri un'altra finestra di terminale
1. Esegui `sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`

### Eseguire palera1n

1. Run `sudo palera1n -e thid_should_crash=0`
    - Assicurati che il tuo dispositivo sia collegato quando inserisci questo comando
1. Quando sei pronto, premi `Enter` e segui le istruzioni sullo schermo per entrare in <router-link to="/faq/#what-is-dfu-mode">modalità DFU</router-link>.

::: tip


Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a metà di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:

1. Nella finestra del terminale, premere `Control` + `C` sulla tastiera
1. Riesegui il comando che hai appena eseguito

Dovrai farlo ogni volta che riesegui il jailbreak sul tuo dispositivo.

:::


:
:::


:::
:::


Una volta che il dispositivo si avvia, aprire l'app palera1n loader e toccare `Sileo`. Dopo un po 'di tempo, ti verrà chiesto di impostare un codice di accesso per utilizzare comandi da riga di comando, e poi`Sileo` dovrebbe essere sulla schermata iniziale.

::: tip


Per rieseguire il jailbreak il tuo dispositivo, esegui semplicemente il comando che hai appena eseguito e poi ripeti qualsiasi altro passaggio applicabile.

Alternatively, if you are on 15.0 to 15.8.1, you can use <router-link to="/installing-meowbrek2">meowbrek2</router-link> per rieseguire il jailbreak.

:::
