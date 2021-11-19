const deviceList = require('../../../json/deviceList');
const jbList = require('../../../json/jailbreak');
const iosVer = {"0": require('../../../json/ios/1'), "1": require('../../../json/ios/2'),"2": require('../../../json/ios/3'),"3": require('../../../json/ios/4'),"4": require('../../../json/ios/5'),"5": require('../../../json/ios/6'),"6": require('../../../json/ios/7'),"7": require('../../../json/ios/8'),"8": require('../../../json/ios/9'),"9": require('../../../json/ios/10'),"10": require('../../../json/ios/11'),"11": require('../../../json/ios/12'),"12": require('../../../json/ios/13'),"13": require('../../../json/ios/14'),"14": require('../../../json/ios/15'),};
const { createPage } = require('@vuepress/core')

module.exports = {
  name: 'vuepress-dynamic-pages',
  async onInitialized(app) {
    for (var device in deviceList) {
      app.pages.push(
        await createPage(app, {
          path: '/chart/device/' + device + '.html',
          frontmatter: {
            title: deviceList[device].name,
            excerpt: 'Compatible jailbreaks for ' + deviceList[device].name,
            sidebar: false
          },
          content: `<chartTable device="` + device + `"/>`
        })
      )
    };
    for (var jb in jbList) {
      app.pages.push(
        await createPage(app, {
          path: '/chart/jailbreak/' + jb + '.html',
          frontmatter: {
            title: jbList[jb].name,
            excerpt: 'Compatible firmwares for ' + jbList[jb].name,
            sidebar: false
          },
          content: `<jbTable jb="` + jb + `"/>`
        })
      )
    };
    for (var majFw in iosVer)
      for (var midFw in iosVer[majFw])
        for (var minFw in iosVer[majFw][midFw])
          for (var build in iosVer[majFw][midFw][minFw])
            if (iosVer[majFw][midFw][minFw][build].hasOwnProperty('build'))  {
              const b = iosVer[majFw][midFw][minFw][build];
              app.pages.push(
                await createPage(app, {
                  path: '/chart/firmware/' + b.build + '.html',
                  frontmatter: {
                    title: 'iOS' + b.ver + ' (' + b.build + ')',
                    excerpt: 'Compatible jailbreaks for firmware version ' + b.ver,
                    sidebar: false
                  },
                  content: `<osTable os="` + b.build + `"/>`
                })
              )
    };
  }
}

/*const plugin = {
  name: 'vuepress-dynamic-pages',
  multiple: false,
  
  extendsPageOptions: ({ filePath }, app) => {
    if (filePath?.startsWith(app.dir.source('chart/device'))) {
      return {
        frontmatter: {
          title: deviceList[filePath.replace(/^.*[\\\/]/, '').split('.')[0]].name,
          sidebar: false,
        },
        content: `aaa`
      }
    }
    return {}
  },
};

module.exports = plugin;*/