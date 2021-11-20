const iosList = require('../../../../json/iosNew');
var page = [];

for (var i in iosList) {
  page.push({
    path: '/chart/firmware/' + iosList[i].build + '.html',
    frontmatter: {
      title: 'iOS ' + iosList[i].ver + ' (' + iosList[i].build + ')',
      description: 'Compatible jailbreaks for firmware version ' + iosList[i].ver,
      sidebar: false
    },
    content: `<osTable os="` + iosList[i].build + `"/>`
  })
};

module.exports = page;