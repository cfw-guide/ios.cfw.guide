import type { SidebarConfig } from '@vuepress/theme-default'

export const getStarted: SidebarConfig = {
  text: 'iOS Guide',
  children: [
    '/get-started/',
  ],
}

export const guides: SidebarConfig = {
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

export const troubleshooting: SidebarConfig = {
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

export const en: SidebarConfig = {
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
  
  '/installing-taurine/': [
    getStarted,
    {
      text: 'Taurine',
      children: [
        '/installing-taurine/',
        '/installing-taurine/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-odyssey/': [
    getStarted,
    {
      text: 'Odyssey',
      children: [
        '/installing-odyssey/',
        '/installing-odyssey/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-12-5-5/': [
    getStarted,
    {
      text: 'Chimera',
      children: [
        '/updating-to-12-5-5/',
        '/installing-chimera/',
        '/installing-chimera/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-12-5-4-(blobless)/': [
    getStarted,
    {
      text: 'Chimera',
      children: [
        {
          text: 'Updating to 12.5.4',
          link: '/updating-to-12-5-4-(blobless)/',
        },
        '/installing-chimera/',
        '/installing-chimera/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-chimera/': [
    getStarted,
    {
      text: 'Chimera',
      children: [
        '/installing-chimera/',
        '/installing-chimera/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-odysseyra1n/': [
    getStarted,
    {
      text: 'Odysseyra1n',
      children: [
        {
          text: 'Installing Odysseyra1n',
          link: '/installing-odysseyra1n/',
          children: [
            {
              text: 'macOS',
              link: '/installing-odysseyra1n/macos/',
            },
            {
              text: 'Linux',
              link: '/installing-odysseyra1n/linux/',
            },
          ],
        },
        '/installing-odysseyra1n/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-odysseyra1n-a9x/': [
    getStarted,
    {
      text: 'Odysseyra1n (A9X)',
      children: [
        {
          text: 'Installing Odysseyra1n (A9X)',
          link: '/installing-odysseyra1n-a9x/',
          children: [
            {
              text: 'macOS',
              link: '/installing-odysseyra1n-a9x/macos/',
            },
            {
              text: 'Linux',
              link: '/installing-odysseyra1n-a9x/linux/',
            },
          ],
        },
        '/installing-odysseyra1n-a9x/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/using-odysseyn1x/': [
    getStarted,
    {
      text: 'Odysseyn1x',
      children: [
        '/using-odysseyn1x/',
        '/using-odysseyn1x/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/using-odysseyn1x-a9x/': [
    getStarted,
    {
      text: 'Odysseyn1x (A9X)',
      children: [
        '/using-odysseyn1x-a9x/',
        '/using-odysseyn1x-a9x/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-unc0ver/': [
    getStarted,
    {
      text: 'unc0ver',
      children: [
        '/installing-unc0ver/',
        '/installing-unc0ver/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-electra/': [
    getStarted,
    {
      text: 'Electra',
      children: [
        '/installing-electra/',
        '/installing-electra/using-sileo/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-doubleh3lix/': [
    getStarted,
    {
      text: 'doubleh3lix',
      children: [
        '/installing-doubleh3lix/',
        '/installing-doubleh3lix/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-10-3-3/': [
    getStarted,
    {
      text: 'Meridian',
      children: [
        '/updating-to-10-3-3/',
        '/using-meridian/',
        '/using-meridian/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/using-meridian/': [
    getStarted,
    {
      text: 'Meridian',
      children: [
        '/using-meridian/',
        '/using-meridian/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-pangu933/': [
    getStarted,
    {
      text: 'Pangu933',
      children: [
        '/installing-pangu933/',
        '/installing-pangu933/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-kok3shi/': [
    getStarted,
    {
      text: 'Kok3shi',
      children: [
        '/installing-kok3shi/',
        '/installing-kok3shi/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-pangu7/': [
    getStarted,
    {
      text: 'Pangu7',
      children: [
        '/installing-pangu7/',
        '/installing-pangu7/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-evasi0n7/': [
    getStarted,
    {
      text: 'Evasi0n7',
      children: [
        '/installing-evasi0n7/',
        '/installing-evasi0n7/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-10-3-4/': [
    getStarted,
    {
      text: 'h3lix',
      children: [
        '/updating-to-10-3-4/',
        '/installing-h3lix/',
        '/installing-h3lix/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-h3lix/': [
    getStarted,
    {
      text: 'h3lix',
      children: [
        '/installing-h3lix/',
        '/installing-h3lix/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-9-3-5/': [
    getStarted,
    {
      text: 'Phœnix',
      children: [
        '/updating-to-9-3-5/',
        '/installing-phoenix/',
        '/installing-phoenix/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-9-3-5-ipsw/': [
    getStarted,
    {
      text: 'Phœnix',
      children: [
        {
          text: 'Updating to 9.3.5',
          link: '/updating-to-9-3-5-ipsw/',
        },
        '/installing-phoenix/',
        '/installing-phoenix/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-9-3-6/': [
    getStarted,
    {
      text: 'Phœnix',
      children: [
        '/updating-to-9-3-6/',
        '/installing-phoenix/',
        '/installing-phoenix/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-9-3-6-ipsw/': [
    getStarted,
    {
      text: 'Phœnix',
      children: [
        {
          text: 'Updating to 9.3.6',
          link: '/updating-to-9-3-6-ipsw/',
        },
        '/installing-phoenix/',
        '/installing-phoenix/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-phoenix/': [
    getStarted,
    {
      text: 'Phœnix',
      children: [
        '/installing-phoenix/',
        '/installing-phoenix/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-homedepot/': [
    getStarted,
    {
      text: 'HomeDepot',
      children: [
        '/installing-homedepot/',
        '/installing-homedepot/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-8-4-1/': [
    getStarted,
    {
      text: 'EtasonJB',
      children: [
        '/updating-to-8-4-1/',
        '/installing-etasonjb/',
        '/installing-etasonjb/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-etasonjb/': [
    getStarted,
    {
      text: 'EtasonJB',
      children: [
        '/installing-etasonjb/',
        '/installing-etasonjb/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/updating-to-6-1-3/': [
    getStarted,
    {
      text: 'p0sixspwn',
      children: [
        '/updating-to-6-1-3/',
        '/installing-p0sixspwn/',
        '/installing-p0sixspwn/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-p0sixspwn/': [
    getStarted,
    {
      text: 'p0sixspwn',
      children: [
        '/installing-p0sixspwn/',
        '/installing-p0sixspwn/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/installing-daibutsu/': [
    getStarted,
    {
      text: 'p0sixspwn',
      children: [
        '/installing-p0sixspwn/',
        '/installing-p0sixspwn/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/using-jailbreakme-saffron/': [
    getStarted,
    {
      text: 'JailbreakMe Saffron',
      children: [
        '/using-jailbreakme-saffron/',
        '/using-jailbreakme-saffron/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
  
  '/using-jailbreakme-star/': [
    getStarted,
    {
      text: 'JailbreakMe Star',
      children: [
        '/using-jailbreakme-star/',
        '/using-jailbreakme-star/using-cydia/',
      ],
    },
    guides,
    troubleshooting,
  ],
}