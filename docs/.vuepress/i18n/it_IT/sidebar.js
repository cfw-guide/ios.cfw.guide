const getStarted = {
  text: 'Guida per iOS',
  children: ['/get-started/']
};
const guides = {
  text: 'Guide',
  children: [
    '/saving-blobs/',
    '/sideloading-apps/',
    '/blocking-jailbreak-detection/',
    '/updating-blobless/',
    {
      text: 'FutureRestore',
      link: '/it_IT/futurerestore/'
    }
  ]
};
const pkgman = {
  text: 'Gestori di pacchetti',
  children: [
    {
      text: 'Spiegazione',
      link: '/it_IT/package-managers/'
    },
    '/using-sileo/',
    '/using-cydia/',
    '/recommended-repos/'
  ]
};
const jailbreaking = {
  text: 'Jailbreaking',
  children: [
    '/installing-odysseyra1n/',
    '/installing-unc0ver/',
    '/installing-chimera/'
  ]
};
const troubleshooting = {
  text: 'Risoluzione Problemi',
  children: [
    '/troubleshooting/',
    '/faq/',
    '/types-of-jailbreak/',
    {
      text: 'Discord',
      link: 'https://discord.gg/jb'
    }
  ]
};
module.exports = {
  '/it_IT/': [
    getStarted,
    jailbreaking,
    pkgman,
    guides,
    troubleshooting
  ]
};
