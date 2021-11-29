const jbList = require('../../../../json/jailbreak');
const jbPath = '/chart/jailbreak/';
var page = [];

for (var jb in jbList) {
  var redirects = []; // = ['/' + jbList[jb].name];
  if (jbList[jb].name == 'Phœnix') {
    //redirects.push('/phoenix');
    redirects.push(jbPath + 'phoenix')
  }
  page.push({
    path: jbPath + jbList[jb].name + '.html',
    frontmatter: {
      title: jbList[jb].name,
      description: 'Compatible firmwares for ' + jbList[jb].name,
      redirect_from: redirects,
      sidebar: false
    },
    content: require('./content')(jbList[jb].name)
  })
};

module.exports = page;