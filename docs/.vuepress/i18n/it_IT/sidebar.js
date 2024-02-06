const getStarted = {
  text: 'Guida per iOS',
  children: ['/it_IT/get-started/']
};
const guides = {
  text: 'Guide',
  children: [
    '/it_IT/sideloading-apps/',
    '/it_IT/blocking-jailbreak-detection/',
    '/it_IT/updating-blobless/',
    '/installing-trollstore/',
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
    '/it_IT/using-sileo/',
    '/it_IT/using-cydia/',
    '/it_IT/recommended-repos/'
  ]
};
const jailbreaking = {
  text: 'Jailbreaking',
  children: [
    '/installing-palera1n',
    '/installing-meowbrek2',
    '/installing-dopamine/'
  ]
};
const troubleshooting = {
  text: 'Risoluzione Problemi',
  children: [
    '/it_IT/troubleshooting/',
    '/it_IT/faq/',
    '/it_IT/types-of-jailbreak/',
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
