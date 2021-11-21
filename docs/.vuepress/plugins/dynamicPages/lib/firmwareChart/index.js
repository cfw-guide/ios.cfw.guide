const iosList = require('../../../../json/ios');
var page = [];

for (var i in iosList) {
  const v = iosList[i];
  page.push({
    path: '/chart/firmware/' + iosList[i].build + '.html',
    frontmatter: {
      title: 'iOS ' + iosList[i].ver + ' (' + iosList[i].build + ')',
      description: 'Compatible jailbreaks for firmware version ' + iosList[i].ver,
      sidebar: false
    },
    content: require('./content')(iosList[i].build)
  })
};

module.exports = page;