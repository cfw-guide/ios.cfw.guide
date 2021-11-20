const jbList = require('../../../../json/jailbreak');
var page = [];

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
};

module.exports = page;