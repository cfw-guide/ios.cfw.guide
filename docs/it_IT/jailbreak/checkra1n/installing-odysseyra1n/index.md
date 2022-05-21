---
lang: it_IT
title: Odysseyra1n
description: Guida all'installazione di Odysseyra1n
permalink: /installing-odysseyra1n
pkgman: sileo
redirect_from:
  - /ra1n
  - /installing-odysseyrain
  - /odysseyra1n
  - /odysseyrain
  - /or
  - /installing-checkra1n
  - /installing-checkrain
  - /checkra1n
  - /checkrain
  - /cr
extra_contributors:
  - stekc
  - Tanbeer191
  - TheHacker894
---

!!!include(./docs/en_US/jailbreak/checkra1n/include/semi-tethered.md)!!!

checkra1n è un tool in grado di eseguire il Jailbreak di milioni di dispositivi iOS con un SoC A7-A11 su firmware 12.0-14.8.1. Al momento è compatibile solo con macOS e Linux. Una versione di Windows è prevista per il rilascio in futuro.

!!!include(./docs/en_US/jailbreak/checkra1n/include/odysseyra1n-explanation.md)!!!

::: warning

Se attualmente hai eseguito il jailbreak tramite un altro tool (esclusi Chimera, Odyssey o Taurine), assicurati di <router-link to="/restoring-rootfs">rimuoverli correttamente</router-link> prima di proseguire.

:::

Su iOS 14:
- Odysseyra1n è completamente supportato solo su dispositivi A8, A9, A10(X) e A11. I dispositivi A8X e A9X sono completamente supportati fino a 14.4.2 utilizzando una versione precedente di checkra1n, con un metodo speciale richiesto per i dispositivi A8X e A9X è possibile eseguire il jailbreak su 14.5-14.8.1, come spiegato nella guida <router-link to="/installing-odysseyra1n-a8x-a9x">Odysseyra1n (A8X/A9X)</router-link>.
-  I dispositivi A11 non consentono di utilizzare la funzionalità SEP mentre si è jailbroken. Le funzionalità SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.

---

Seleziona un sistema operativo:
- <router-link to="/installing-odysseyra1n/macos/">macOS</router-link>
- <router-link to="/installing-odysseyra1n/linux/">Linux</router-link>
- <router-link to="/using-odysseyn1x/">Windows (Odysseyn1x)</router-link>

::: danger

Se si dispone di un dispositivo ChromeOS, è possibile tentare di seguire <router-link to="/installing-checkra1n-chromeos">checkra1n (ChromeOS)</router-link>, tuttavia, nota che non è raccomandato perché:
  - È impossibile usare Odysseyra1n in modo affidabile, il che significa che è necessario utilizzare la versione di checkra1n normale
  - Richiede un sacco step extra per poterlo eseguire

:::