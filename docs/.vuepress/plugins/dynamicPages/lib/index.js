const { createPage } = require('@vuepress/core')

var page = [
  ...require('./deviceChart'),
  ...require('./firmwareChart'),
  ...require('./jailbreakChart')
]

module.exports = {
  name: 'vuepress-dynamic-pages',
  async onInitialized(app) {
    for (var p in page) app.pages.push(await createPage(app, page[p]))
  }
}
