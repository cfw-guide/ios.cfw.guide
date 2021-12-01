const iosList = require('../../../../json/ios');
const fwPath = '/chart/firmware/'
var page = [];

var iosVerArr = []
var duplicateObjArr = []
var duplicateVerArr = []
for (var i in iosList) {
  if (!iosList[i].hasOwnProperty('ver')) continue;
  iosVerArr.push(iosList[i].version)
}
iosVerArr.forEach(function(x) { duplicateObjArr[x] = (duplicateObjArr[x] || 0) + 1; });
for (var i in duplicateObjArr) if (duplicateObjArr[i] > 1) duplicateVerArr.push(i)

for (var i in iosList) {
  const v = iosList[i];
  var redirects = '';
  if (!duplicateVerArr.includes(v.version)) redirects = [fwPath + v.version];
  
  page.push({
    path: fwPath + v.build + '.html',
    frontmatter: {
      title: 'iOS ' + v.version + ' (' + v.build + ')',
      description: 'Compatible jailbreaks for firmware version ' + v.version,
      redirect_from: redirects,
      sidebar: false
    },
    content: require('./content')(v.build)
  })
};

for (var i in duplicateVerArr) {
  const v = duplicateVerArr[i];
  page.push({
    path: fwPath + v + '.html',
    frontmatter: {
      title: 'iOS ' + v,
      description: 'Firmware builds for version ' + v,
      //redirect_from: '/' + v,
      sidebar: false
    },
    content: require('./multipleFwPage')(v)
  })
}

module.exports = page;