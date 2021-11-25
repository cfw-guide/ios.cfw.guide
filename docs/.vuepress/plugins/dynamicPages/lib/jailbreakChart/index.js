const jbList = require('../../../../json/jailbreak');
var page = [];

for (var jb in jbList) {
  page.push({
    path: '/chart/jailbreak/' + jbList[jb].name + '.html',
    frontmatter: {
      title: jbList[jb].name,
      description: 'Compatible firmwares for ' + jbList[jb].name,
      redirect_from: '/' + jbList[jb].name,
      sidebar: false
    },
    content: require('./content')(jbList[jb].name)
  })
};

module.exports = page;