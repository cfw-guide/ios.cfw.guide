---
lang: it_IT
title: Installare Daibutsu
description: Guida per l’installazione di Daibutsu
permalink: /installing-daibutsu
redirect_from:
  - /daibutsu
discordNoticeText: Per supporto in inglese, chiedi aiuto sul [Server Discord](https://discord.legacyjailbreak.com/) di r/LegacyJailbreak.
pkgman: cydia
---

Daibutsu è in grado di eseguire il jailbreak della maggior parte dei dispositivi iOS A5(X) con la versione del firmware 8.4.1.

::: warning

Per quanto riguarda gli iPad 2, Daibutsu supporta solo gli iPad 2 che sono stati realizzati nel 2012 o successivamente.

Nel caso in cui non si sappia se si possiede un iPad 2 idoneo, dovrebbe essere vero quanto segue:

- Si tratta di un iPad 2 solo WiFi
- Si tratta di un iPad 2 16GB

Se si tratta di un iPad 2 16GB solo WiFi, è necessario controllare Impostazioni -> Generali -> Info -> Note legali e formative -> Esposizione a RF

- Se è presente "iPad2,4" nell'URL della pagina, è un dispositivo supportato

Se si tratta di un iPad 2 Cellular, o un iPad 2 32/64GB, o se controllando l'URL non risulta essere un iPad2,4, non è un dispositivo supportato, e dovresti invece seguire <router-link to="/installing-etasonJB">Installing etasonJB</router-link>.

:::

A differenza della maggior parte dei jailbreak moderni, Daibutsu persiste dopo un riavvio (questo è anche noto come jailbreak "[untethered](/types-of-jailbreak/#untethered-jailbreaks)"). Ciò significa che dopo aver riavviato il dispositivo, il dispositivo rimarrà jailbroken e non dovrai eseguire l'exploit di nuovo.

Utilizzeremo Sideloadly per installare l'app di Daibutsu sul tuo dispositivo iOS nello step successivo.

## Download

<div class="custom-container tip" id="ifJailbreaksAppSigned"><p>
Daibutsu è attualmente firmato su <a href="https://jailbreaks.app/legacy.html" target="_blank">jailbreaks.app</a> per una installazione più facile che non richiede un computer.
</p></div>

- L'ultima versione di [Daibutsu](https://dora2ios.web.app/daibutsu.html)
- L'ultima versione di [Sideloadly](https://sideloadly.io/)
- L’ultima versione di [iTunes](https://www.apple.com/itunes/download/win32) se sei su Windows

![Uno screenshot dell'applicazione Sideloadly (Windows)](/assets/images/sideloadly_win.png)

## Installare l'applicazione

1. Apri Sideloadly
2. Collega il tuo dispositivo iOS al computer
   - Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo
3. Trascina il file `.ipa` di Daibutsu su Sideloadly
4. Inserisci il tuo ID Apple
5. Inserisci la tua password
   - Sideloadly deve fare una richiesta al suo server per funzionare con gli account Apple gratuiti. Se non sei d’accordo, puoi sempre usare un Apple ID alternativo.

L'app verrà ora installata sul tuo dispositivo iOS.

## Autorizzare l’applicazione

1. Vai a `Impostazioni` -> `Generali` -> `Gestione dispositivo` -> `<Your Apple ID>`
   - A seconda del tuo utilizzo, `Gestione dispositivo` potrebbe apparire come `Gestione Profili e Dispositivo`
2. Tocca `Autorizza "<Your Apple ID>"`

L’applicazione di Daibutsu adesso può essere aperta dalla home screen.

## Eseguire Daibutsu

1. Apri l'applicazione di Daibutsu dalla home screen
2. Clicca su `Jailbreak`

::: warning

Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l’exploit di nuovo finché non funziona.

:::

Adesso dovresti essere jailbroken con Cydia installato nella home screen. È possibile utilizzare Cydia per installare <router-link to="/faq/#what-are-tweaks">tweaks</router-link>, temi e altro ancora.
