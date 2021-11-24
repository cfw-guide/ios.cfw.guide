const { path } = require('@vuepress/utils')

module.exports = {
  onPrepared: async (app) => {
    const pages = app.pages
    await app.writeTemp('pages.js', `export default ${JSON.stringify(pages)}`)
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
}