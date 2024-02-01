const { createPage } = require('@vuepress/core')

global.iosList = require('../../../json/ios');
global.deviceList = require('../../../json/deviceList');
global.deviceGroups = require('../../../json/deviceGroups').filter(x => {
  return x.type.includes('iPad') ||
    x.type == 'iPod touch' ||
    x.type == 'iPhone' ||
    x.type == 'Apple TV' || 
    x.type == 'Apple Watch' ||
    x.type == 'HomePod'
});
global.jbList = require('../../../json/jailbreak');

global.appledbPath = 'https://appledb.dev'
global.jbPath = '/chart/jailbreak/'
global.fwPath = '/chart/firmware/'
global.devicePath = '/chart/device/'

global.extLinkSvg = '<svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>'

module.exports = function(themeLocale, localePath) {
  let pageList = []
    
  function getPkgManPages(app) {
    var ret = [];
    for (const p in app.pages) {
      const page = app.pages[p]
      const fm = page.frontmatter
      if (!fm.hasOwnProperty('pkgman') || fm.pkgman == 'none') continue
      ret.push({
        path: page.path.replace('index.html', '').replace('.html','\/') + `using-${fm.pkgman}.html`,
        frontmatter: {
          lang: fm.lang,
          title: `Using ${fm.pkgman.replace(/^\w/, c => c.toUpperCase())}`,
          description: `Guide to using ${fm.pkgman.replace(/^\w/, c => c.toUpperCase())}`,
          editLink: false,
          lastUpdated: false,
          contributors: false,
        },
        content: `!!!include(./docs/${fm.lang}/include/using-${fm.pkgman}.md)!!!`
      })
    }
    return ret;
  }

  return {
    name: 'vuepress-dynamic-pages',
    async onInitialized(app) {
      const pkgManPages = getPkgManPages(app);
      for (const p in pkgManPages) app.pages.push(await createPage(app, pkgManPages[p]))
    }
  }
}