---
lang: it_IT
title: Rimuovere palera1n
description: Guida alla rimozione di palera1n
permalink: /it_IT/removing-palera1n
redirect_from: /removing-palerain
---

Se si desidera rimuovere palera1n, è possibile utilizzare i seguenti comandi su un PC/Mac mentre il dispositivo è connesso. Per rimuovere il jailbreak, **non devi ripristinare**.

:::::: tabs

:::: tab name="macOS/Linux" :default="true"

::: warning

Se sei su Linux, dovrai prima fare un altro passaggio. Apri un terminale ed esegui questi comandi:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Poi, apri un secondo terminale ed esegui i seguenti passaggi con l'altra finestra del terminale.

:::

::: tip

Questa guida presuppone che tu esegua palera1n su un computer che ha già palera1n installato. Puoi usare lo stesso computer che hai usato precedentemente per installare palera1n sul tuo dispositivo. Se stai usando un computer diverso che non ha ancora palera1n, segui la guida <router-link to="/installing-palera1n">Installa palera1n</router-link> per scaricare palera1n e ritorna su questa pagina una volta raggiunta la sezione "Esegui palera1n" (ma non seguire gli step della sezione "Esegui palera1n").

:::

::: tip

Se stai usando Linux, aggiungi `sudo` all'inizio del prossimo comando.

:::

1. Esegui `palera1n --force-revert`
   - Se stai usando palera1n rootful, aggiungi la flag `-f` alla fine del comando

Il dispositivo dovrebbe avviarsi su iOS, ed è possibile utilizzare il telefono normalmente.

::::


:::: tab name="palen1x"

::: tip

Se non hai più la tua USB con palen1x, puoi prepararne un'altra seguendo i passi di <router-link to="/using-palen1x">Usare palen1x</router-link> fino alla sezione "Esegui palera1n" esclusa.

:::

1. Una volta che hai caricato palen1x, seleziona `palera1n`
1. Se stavi utilizzando palera1n rootless, seleziona `Switch`, poi seleziona `Rootless`.
1. Seleziona `Options`, abilita `Restore RootFS` utilizzando il tasto spazio, poi esci dal menu opzioni con il tasto enter.
1. Seleziona `Start`

Il tuo dispositivo dovrebbe avviarsi in iOS, poi potrai utilizzare il tuo dispositivo normalmente.

::::

::::::
