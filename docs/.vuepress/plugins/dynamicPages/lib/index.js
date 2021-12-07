const { createPage } = require('@vuepress/core')

global.iosList = require('../../../json/ios');
global.deviceList = require('../../../json/deviceList');
global.deviceGroups = require('../../../json/deviceGroups');
global.jbList = require('../../../json/jailbreak');

global.jbPath = '/chart/jailbreak/'
global.fwPath = '/chart/firmware/'
global.devicePath = '/chart/device/'

module.exports = function(themeLocale, localePath) {
  global.themeLocale = themeLocale;
  
  for (const i in localePath) {
    global.localeLang = i;
    global.themeLocale = themeLocale[localePath[i]];
    
    var pageList = [
      ...require('./deviceChart'),
      ...require('./firmwareChart'),
      ...require('./jailbreakChart'),
    ]

    function getPkgManPages(app) {
      var ret = [];
      for (const p in app.pages) {
        const page = app.pages[p];
        const fm = page.frontmatter
        if (!fm.hasOwnProperty('pkgman')) continue;
        ret.push({
          path: page.path.replace('index.html', '').replace('.html','\/') + `using-${fm.pkgman}.html`,
          frontmatter: {
            lang: 'en_US',
            title: `Using ${fm.pkgman.replace(/^\w/, c => c.toUpperCase())}`,
            description: `Guide to using ${fm.pkgman.replace(/^\w/, c => c.toUpperCase())}`,
            editLink: false,
            lastUpdated: false,
            contributors: false,
          },
          content: `!!!include(./docs/en_US/include/using-${fm.pkgman}.md)!!!`
        })
      }
      return ret;
    }

    return {
      name: 'vuepress-dynamic-pages',
      async onInitialized(app) {
        for (const p in pageList) app.pages.push(await createPage(app, pageList[p]))
        
        const pkgManPages = getPkgManPages(app);
        for (const p in pkgManPages) app.pages.push(await createPage(app, pkgManPages[p]))
      }
    }
  }
}