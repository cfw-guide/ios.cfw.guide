const getStarted = {
  text: 'iOS Guide',
  children: [
    '/get-started/',
  ],
}

const guides = {
  text: 'Guides',
  children: [
    '/installing-trollstore/',
    '/sideloading-apps/',
    '/blocking-jailbreak-detection/',
    '/updating-blobless/',
    {
      text: 'FutureRestore',
      link:'/futurerestore/',
    },
  ],
}

const pkgman = {
  text: 'Package Managers',
  children: [
    {
      text: 'An explanation',
      link: '/package-managers/'
    },
    '/using-sileo/',
    '/using-cydia/',
    '/recommended-repos/',
  ],
}

const jailbreaking = {
  text: 'Jailbreaking',
  children: [
    '/installing-palera1n/',
    '/installing-dopamine/',
    '/installing-chimera/',
  ],
}

const troubleshooting = {
  text: 'Troubleshooting',
  children: [
    '/troubleshooting/',
    '/faq/',
    '/types-of-jailbreak/',
    {
      text: 'Discord',
      link: 'https://discord.gg/jb'
    },
  ],
}

module.exports = {
  '/': [
    getStarted,
    jailbreaking,
    pkgman,
    guides,
    troubleshooting,
  ],
}