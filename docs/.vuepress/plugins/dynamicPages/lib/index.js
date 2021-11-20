const deviceList = require('../../../json/deviceList');
const jbList = require('../../../json/jailbreak');
const iosVer = require('../../../json/ios');
const { createPage } = require('@vuepress/core')

var page = []

for (var device in deviceList) {
  page.push({
    path: '/chart/device/' + device + '.html',
    frontmatter: {
      title: 'Firmware Chart (' + deviceList[device].name + ')',
      description: 'Compatible jailbreaks for ' + deviceList[device].name,
      sidebar: false
    },
    content: `<chartTable device="` + device + `"/>`
  })
}

for (var jb in jbList) {
  page.push({
    path: '/chart/jailbreak/' + jb + '.html',
    frontmatter: {
      title: jbList[jb].name,
      description: 'Compatible firmwares for ' + jbList[jb].name,
      sidebar: false
    },
    content: `<jbTable jb="` + jb + `"/>`
  })
}

for (var majFw in iosVer) for (var midFw in iosVer[majFw]) for (var minFw in iosVer[majFw][midFw]) for (var build in iosVer[majFw][midFw][minFw]) {
  const b = iosVer[majFw][midFw][minFw][build];
  if (!b.hasOwnProperty('build')) continue;
  page.push({
      path: '/chart/firmware/' + b.build + '.html',
      frontmatter: {
        title: 'iOS ' + b.ver + ' (' + b.build + ')',
        description: 'Compatible jailbreaks for firmware version ' + b.ver,
        sidebar: false
      },
      content: `<osTable os="` + b.build + `"/>`
    })
};

module.exports = {
  name: 'vuepress-dynamic-pages',
  async onInitialized(app) {
    for (var p in page) app.pages.push(await createPage(app, page[p]))
  }
}
