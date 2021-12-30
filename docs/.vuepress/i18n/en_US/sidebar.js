const getStarted = {
  text: 'iOS Guide',
  children: [
    '/get-started/',
  ],
}

const guides = {
  text: 'Guides',
  children: [
    '/saving-blobs/',
    '/resigning-apps/',
    '/blocking-jailbreak-detection/',
    {
      text: 'FutureRestore',
      link:'/futurerestore/',
    },
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

// Grab sidebar elements from json
const jbList = require('../../json/jailbreak')
var jbSidebarObj = {};
for (const i in jbList) {
  const jbObj = jbList[i];
  if (!jbObj.hasOwnProperty('info')) continue;
  if (!jbObj.info.hasOwnProperty('guide')) continue;
  for (const j in jbObj.info.guide) {
    const jb = jbObj.info.guide[j];
    if (!jb.hasOwnProperty('pkgman')) continue;
  
    var children = [];
    if (jb.hasOwnProperty('sidebarChildren')) children = jb.sidebarChildren;
    
    var link = [];
    if (jb.hasOwnProperty('url')) link = jb.url;
    
    if (jb.hasOwnProperty('updateLink')) {
      for (const upd in jb.updateLink) {
        var updText = jb.updateLink[upd];
        var updLink = jb.updateLink[upd];
        if (updText.hasOwnProperty('text')) updText = updText.text;
        if (updLink.hasOwnProperty('link')) updLink = updLink.link;
        
        jbSidebarObj[updLink] = [
          getStarted,
          {
            text: updText,
            children: [
              jb.updateLink[upd],
              link,
              ...children,
              jb.url.replace('index.html', '').replace('.html', '\/') + `using-${jb.pkgman}.html`
            ]
          },
          guides,
          troubleshooting,
        ]
      }
    }
    
    var name = jbList[i].name;
    if (jb.hasOwnProperty('sidebarName')) name - jb.sidebarName;
    
    jbSidebarObj[jb.url] = [
      getStarted,
      {
        text: name,
        children: [
          link,
          ...children,
          jb.url.replace('index.html', '').replace('.html', '\/') + `using-${jb.pkgman}.html`
        ]
      },
      guides,
      troubleshooting,
    ]
  }
}

module.exports = {
  '/': [
    getStarted,
    {
      text: 'Jailbreaking',
      children: [
        '/installing-odysseyra1n/',
        '/using-odysseyn1x/',
        '/installing-unc0ver/',
        '/installing-unc0ver-fugu14/',
        '/installing-taurine/',
        '/installing-odyssey/',
        '/installing-chimera/',
      ],
    },
    {
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
    },
    guides,
    troubleshooting,
  ],
  
  ...jbSidebarObj,
}