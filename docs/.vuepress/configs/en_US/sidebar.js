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

module.exports = {
  '/': [
    getStarted,
    {
      text: 'Jailbreaking',
      children: [
        '/installing-taurine/',
        '/installing-odyssey/',
        '/installing-chimera/',
        '/installing-odysseyra1n/',
        '/using-odysseyn1x/',
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
  
  
  '/get-started/iphone': [
    getStarted,
    {
      text: 'iPhone',
      children: [
        {
          text: 'iPhone 13',
          link: '/get-started/iphone/13/',
        },
        {
          text: 'iPhone 12',
          link: '/get-started/iphone/12/',
        },
        {
          text: 'iPhone SE (2020)',
          link: '/get-started/iphone/se-2/',
        },
        {
          text: 'iPhone 11',
          link: '/get-started/iphone/11/',
        },
        {
          text: 'iPhone XS',
          link: '/get-started/iphone/xs/',
        },
        {
          text: 'iPhone XR',
          link: '/get-started/iphone/xr/',
        },
        {
          text: 'iPhone X',
          link: '/get-started/iphone/x/',
        },
        {
          text: 'iPhone 8',
          link: '/get-started/iphone/8/',
        },
        {
          text: 'iPhone 7',
          link: '/get-started/iphone/7/',
        },
        {
          text: 'iPhone SE',
          link: '/get-started/iphone/se/',
        },
        {
          text: 'iPhone 6S',
          link: '/get-started/iphone/6s/',
        },
        {
          text: 'iPhone 6',
          link: '/get-started/iphone/6/',
        },
        {
          text: 'iPhone 5S',
          link: '/get-started/iphone/5s/',
        },
        {
          text: 'iPhone 5C',
          link: '/get-started/iphone/5c/',
        },
        {
          text: 'iPhone 5',
          link: '/get-started/iphone/5/',
        },
        {
          text: 'iPhone 4S',
          link: '/get-started/iphone/4s/',
        },
        {
          text: 'iPhone 4',
          link: '/get-started/iphone/4/',
        },
        {
          text: 'iPhone 3GS',
          link: '/get-started/iphone/3gs/',
        },
        {
          text: 'iPhone 3G',
          link: '/get-started/iphone/3g/',
        },
        {
          text: 'iPhone 2G',
          link: '/get-started/iphone/2g/',
        },
      ],
    },
  ],
  
  
  '/get-started/ipad': [
    getStarted,
    {
      text: 'iPad',
      children: [
        {
          text: 'iPad 9',
          link: '/get-started/ipad/9/',
        },
        {
          text: 'iPad 8',
          link: '/get-started/ipad/8/',
        },
        {
          text: 'iPad 7',
          link: '/get-started/ipad/7/',
        },
        {
          text: 'iPad 6',
          link: '/get-started/ipad/6/',
        },
        {
          text: 'iPad 5',
          link: '/get-started/ipad/5/',
        },
        {
          text: 'iPad 4',
          link: '/get-started/ipad/4/',
        },
        {
          text: 'iPad 3',
          link: '/get-started/ipad/3/',
        },
        {
          text: 'iPad 2',
          link: '/get-started/ipad/2/',
        },
        {
          text: 'iPad',
          link: '/get-started/ipad/1/',
        },
      ],
    },
    {
      text: 'iPad mini',
      children: [
        {
          text: 'iPad mini 6',
          link: '/get-started/ipad/mini-6/',
        },
        {
          text: 'iPad mini 5',
          link: '/get-started/ipad/mini-5/',
        },
        {
          text: 'iPad mini 4',
          link: '/get-started/ipad/mini-4/',
        },
        {
          text: 'iPad mini 3',
          link: '/get-started/ipad/mini-3/',
        },
        {
          text: 'iPad mini 2',
          link: '/get-started/ipad/mini-2/',
        },
        {
          text: 'iPad mini',
          link: '/get-started/ipad/mini/',
        },
      ],
    },
    {
      text: 'iPad Pro',
      children: [
        {
          text: 'iPad Pro 5',
          link: '/get-started/ipad/pro-5/',
        },
        {
          text: 'iPad Pro 4',
          link: '/get-started/ipad/pro-4/',
        },
        {
          text: 'iPad Pro 3',
          link: '/get-started/ipad/pro-3/',
        },
        {
          text: 'iPad Pro 2',
          link: '/get-started/ipad/pro-2/',
        },
        {
          text: 'iPad Pro',
          link: '/get-started/ipad/pro/',
        },
      ],
    },
    {
      text: 'iPad Air',
      children: [
        {
          text: 'iPad Air 4',
          link: '/get-started/ipad/air-4/',
        },
        {
          text: 'iPad Air 3',
          link: '/get-started/ipad/air-3/',
        },
        {
          text: 'iPad Air 2',
          link: '/get-started/ipad/air-2/',
        },
        {
          text: 'iPad Air',
          link: '/get-started/ipad/air/',
        },
      ],
    },
  ],
  
  
  '/get-started/ipod': [
    getStarted,
    {
      text: 'iPod',
      children: [
        {
          text: 'iPod Touch 7',
          link: '/get-started/ipod/7/',
        },
        {
          text: 'iPod Touch 6',
          link: '/get-started/ipod/6/',
        },
        {
          text: 'iPod Touch 5',
          link: '/get-started/ipod/5/',
        },
        {
          text: 'iPod Touch 4',
          link: '/get-started/ipod/4/',
        },
        {
          text: 'iPod Touch 3',
          link: '/get-started/ipod/3/',
        },
        {
          text: 'iPod Touch 2',
          link: '/get-started/ipod/2/',
        },
        {
          text: 'iPod Touch',
          link: '/get-started/ipod/1/',
        },
      ],
    },
  ],
  
  ...jbSidebarObj,
}

const jbList = require('./jbList')
var jbSidebarObj = {};
for (const i in jbList) {
  const jb = jbList[i];
  var children = [];
  if (jb.hasOwnProperty('children')) children = jb.children;
  
  var link = [];
  if (jb.hasOwnProperty('link')) link = jb.link;
  
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
            jb.link.replace('index.html', '').replace('.html', '\/') + `using-${jb.pkgman}.html`
          ]
        },
        guides,
        troubleshooting,
      ]
    }
  }
  
  jbSidebarObj[jb.link] = [
    getStarted,
    {
      text: jb.text,
      children: [
        link,
        ...children,
        jb.link.replace('index.html', '').replace('.html', '\/') + `using-${jb.pkgman}.html`
      ]
    },
    guides,
    troubleshooting,
  ]
}