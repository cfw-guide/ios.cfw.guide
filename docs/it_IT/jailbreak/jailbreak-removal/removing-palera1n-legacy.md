---
lang: it_IT
title: Rimozione di palera1n (legacy)
description: Guida alla rimozione di palera1n utilizzando la versione legacy di palera1n
permalink: /it_IT/removing-palera1n-legacy
redirect_from: /removing-palerain-legacy
---

Se si desidera rimuovere palera1n, è possibile utilizzare i seguenti comandi su un PC/Mac mentre il dispositivo è connesso in DFU. Per rimuovere il jailbreak, **non devi ripristinare**.

::: warning

Se sei su Linux, dovrai prima fare un altro passaggio. Apri un terminale ed esegui questi comandi:

`sudo systemctl stop usbmuxd`

`sudo usbmuxd -f -p`

Poi, apri un secondo terminale ed esegui i seguenti passaggi con l'altra finestra del terminale.

:::


1. Clona la repo con `git clone -b legacy --recursive --depth=1 --shallow-submodules https://github.com/palera1n/palera1n && cd palera1n`
    - Se hai già clonato la repo, esegui `cd palera1n`
2. Esegui `./palera1n.sh --restore-rootfs <la tua versione di iOS> --tweaks`
    - Se stai usando Linux, aggiungi `sudo` all'inizio del prossimo comando
    - Se stai usando palera1n semi-tethered, aggiungi la flag `--semi-tethered` alla fine del comando
    - Se stai riscontrando un problema, aggiungi `--debug` alla fine e usa questi log per eseguire un analisi del problema

Il dispositivo dovrebbe avviarsi su iOS, ed è possibile utilizzare il telefono normalmente.
