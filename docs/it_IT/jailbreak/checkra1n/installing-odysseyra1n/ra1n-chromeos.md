---
lang: it_IT
title: checkra1n (ChromeOS)
description: Guida all'installazione di checkra1n su ChromeOS
permalink: /it_IT/installing-checkra1n-chromeos
redirect_from:
  - /it_IT/installing-checkra1n/chromeos
extra_contributors:
  - DhinakG
  - Tanbeer191
  - TheHacker894
---

::: warning

Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, è necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.

:::

::: warning

Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, è possibile riscontrare problemi ad entrare in modalità DFU

In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.

:::

::: danger

Questa è una pagina guida altamente sperimentale, possono essere presenti cose non direttamente menzionate che devono essere eseguite per seguire questa guida. Di conseguenza, si consiglia vivamente di usare un altro tipo di computer se possibile.

:::

::: tip

Devi aver abilitato la modalità sviluppatore sul tuo dispositivo ChromeOS per seguire questa guida

:::

## Download (ChromeOS)

- L’ultima release di [checkra1n](https://checkra.in)
  - Se utilizzi un dispositivo A8X o A9X, dovresti invece usare la release 0.12.2 di [checkra1n](https://checkra.in/releases/0.12.2-beta#all-downloads)

![Uno screenshot dell’applicazione di checkra1n](/assets/images/checkra1n.png)

## Consentire l'esecuzione di checkra1n

1. Sposta il binary di checkra1n che viene scaricato su `/usr/local/bin`
    - Ciò può essere fatto facendo quanto segue:
      - premi `Ctrl` + `Alt` + `T`
      - esegui la `shell`
      - esegui `mv ~/Downloads/checkra1n /usr/local/bin/`
1. Esegui il seguente comando nel terminale: `sudo mount -o remount,exec /tmp`
    - Dovrai farlo ogni volta che riavvii il tuo dispositivo ChromeOS
1. Ogni volta che hai bisogno di eseguire il jailbreak su ChromeOS, è necessario collegare il dispositivo e entrare in modalità di recupero manualmente.

## Installare checkra1n

1. Esegui il file binary di `checkra1n` nel terminale usando `TERM=linux sudo checkra1n`
    - Potrebbe essere necessario eseguire `sudo chmod a+x /usr/local/bin/checkra1n` se il file binary non viene eseguito
    - Se sei su un dispositivo A11, dovrai andare su `Options` e poi abilitare l'opzione `Skip A11 BPR Check`
    - Se sei su iOS 14.6 o successivo, dovrai andare su `Options` e abilitare l'opzione `Allow Untested Versions`
    - Se sei su un dispositivo A8X o A9X con ios 14.4-14.4.2, dovrai andare su `Options` e abilitare l'opzionse `Allow Untested Versions`
1. Clicca `Start` e segui le istruzioni a schermo
1. Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in <router-link to="/it_IT/faq/#what-is-dfu-mode">modalità DFU</router-link>, clicca `Start` per iniziare
    - Segui le istruzione finché il tuo dispositivo non mostra uno schermo nero
1. Dopo ciò, checkra1n dovrebbe installarsi automaticamente

Il tuo dispositivo iOS dovrebbe adesso riavviarsi.

Dopo l'avvio del dispositivo, apri l'app checkra1n e installa Cydia.

Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare <router-link to="/it_IT/faq/#what-are-tweaks">tweak</router-link>, temi, pacchetti e altro ancora.

::: tip

Se desideri utilizzare un gestore di pacchetti più moderno, continua con <router-link to="/it_IT/installing-sileo">Installare Sileo</router-link>

:::