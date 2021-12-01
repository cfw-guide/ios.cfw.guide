const { createPage } = require('@vuepress/core')

var ret = [
  ...require('./deviceChart'),
  ...require('./firmwareChart'),
  ...require('./jailbreakChart'),
]

function getPkgManPages(pages) {
  for (const p in pages) {
    const page = pages[p];
    const fm = page.frontmatter
    if (!fm.hasOwnProperty('pkgman')) continue;
    ret.push({
      path: page.path.replace('index.html', '').replace('.html','\/') + `using-${fm.pkgman}.html`,
      frontmatter: {
        lang: 'en_US',
        title: `Using ${fm.pkgman.replace(/^\w/, c => c.toUpperCase())}`,
        description: `Guide to using ${fm.pkgman.replace(/^\w/, c => c.toUpperCase())}`,
      },
      content: `!!!include(./docs/en_US/include/using-${fm.pkgman}.md)!!!`
    })
  }
}

module.exports = {
  name: 'vuepress-dynamic-pages',
  async onInitialized(app) {
    //getPkgManPages(app.pages);
    for (const p in ret) app.pages.push(await createPage(app, ret[p]))
  }
}
