const iosList = require('../../../../json/ios');
var page = [];

var iosVerArr = []
var duplicateObjArr = []
var duplicateVerArr = []
for (var i in iosList) {
  if (!iosList[i].hasOwnProperty('ver')) continue;
  iosVerArr.push(iosList[i].ver)
}
iosVerArr.forEach(function(x) { duplicateObjArr[x] = (duplicateObjArr[x] || 0) + 1; });
for (var i in duplicateObjArr) if (duplicateObjArr[i] > 1) duplicateVerArr.push(i)

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