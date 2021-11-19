const deviceList = require('../../../components/json/deviceList');
const jbList = require('../../../components/json/jailbreak');
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
            sidebar: false
          },
          content: `<jbTable jb="` + jb + `"/>`
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