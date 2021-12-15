const { path } = require('@vuepress/utils')

module.exports = {
  onPrepared: async (app) => {
    var pages = app.pages
    for (const i in pages) {
      const t = pages[i];
      pages[i] = {};
      pages[i].path = t.path;
      if (t.hasOwnProperty('frontmatter')) pages[i].frontmatter = {}; else continue;
      if (t.frontmatter.hasOwnProperty('redirect_from')) pages[i].frontmatter.redirect_from = t.frontmatter.redirect_from; else continue;
    }
    await app.writeTemp('pages.js', `export default ${JSON.stringify(pages)}`)
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
}