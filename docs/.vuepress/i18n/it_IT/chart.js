module.exports = {
  deviceChart: {
    deviceSelection: {
      pageTitle: 'Selezione Del Dispositivo (${deviceType})',
      description: 'Scopri quali jailbreak puoi usare sul tuo ${deviceType}',
      requiredReading: {
        title: 'Lettura Necessaria',
        content: [
          '${deviceType} diversi richiederanno step differenti per eseguire il jailbreak del tuo dispositivo ${osStr}. Questa pagina ti aiuterà a capire da dove cominciare.',
          'Qui sotto seleziona quale modello di ${deviceType} possiedi.'
        ]
      },
      iPhoneNotice: 'Nota che tutti i modelli "Plus", "Max" e "mini" di iPhone sono funzionalmente identici ai modelli normali.'
    },
    getStarted: {
      pageTitle: 'Selezione del Firmware (${device})',
      description: 'Scopri quali jailbreak puoi usare sul tuo ${device}.',
      toc: 'Contenuti',
      requiredReading: {
        title: 'Lettura Necessaria',
        content: [
          'Versioni del firmware differenti richiederanno passaggi diversi per eseguire il jailbreak del tuo ${osStr} dispositivo. Questa pagina ti aiuterà a capire da dove iniziare.',
          'Seleziona la pagina appropriata per la tua versione dal grafico sottostante. Nota che i campi "Da" e "A" sono inclusivi. Ciò significa che, per esempio, la riga "da ${minFw0} a ${maxFw0}" include la versione ${minFw1}, la versione ${maxFw1}, e tutte le versioni in mezzo.',
          'La versione del dispositivo può essere trovata nell\'applicazione Impostazioni in `Generali` -> `Info`.'
        ]
      },
      findiOSVersion: {
        title: 'Trovare la tua ${osStr} versione',
        verStr: {
          old: 'Versione',
          new: 'Versione del Software'
        },
        instructions: [
          'Apri l\'app Impostazioni',
          'Entra in `Generali` -> `Info` -> `${verStr}`'
        ],
        image: {
          altText: 'Trovare la versione di iOS su ${deviceType}',
          iphone: '/assets/images/find-version.jpg',
          ipad: '/assets/images/find-version-ipad.jpg',
          iphoneOld: '/assets/images/find-version-old.jpg',
          ipadOld: '/assets/images/find-version-ipad-old.jpg'
        }
      }
    },
    table: {
      title: 'Tabella Versioni',
      tableHeader: [
        'Build',
        'Versione ',
        'Jailbreak'
      ],
      simpleTableHeader: [
        'Da',
        'A',
        'Jailbreak'
      ],
      showBetaVersions: 'Mostra Versioni Beta',
      hideBetaVersions: 'Nascondi Versioni Beta',
      noJbTip: 'Per i campi contrassegnati con "N/A", non c\'è nessun jailbreak per quella versione.',
      betaTip: 'Se hai qualche informazione sulla compatibilità del jailbreak con le versioni beta, facci sapere su <a href="https://discord.gg/QBj8pBa" target="_blank">Discord</a>${extLinkSvg}'
    }
  }
};