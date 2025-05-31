var page = [];

// Find duplicates
var iosVerArr = []
var duplicateObjArr = []
var duplicateVerArr = []
for (var i in iosList) {
  if (!iosList[i].hasOwnProperty('ver')) continue;
  iosVerArr.push(iosList[i].version)
}
iosVerArr.forEach(function(x) { duplicateObjArr[x] = (duplicateObjArr[x] || 0) + 1; });
for (var i in duplicateObjArr) if (duplicateObjArr[i] > 1) duplicateVerArr.push(i)

function getOsStr(v) {
  var ver = v.version;
  var majFw = parseInt(ver.split('.')[0]);
  
  if (!v.hasOwnProperty('devices')) return 'iOS'
  
  var devArr = Object.entries(v.devices).map(function(x) { return x[0] });
  
  var hasiPhone = devArr.filter(function(x) { return x.startsWith('iPhone') }).length > 0
  var hasiPad = devArr.filter(function(x) { return x.startsWith('iPad') }).length > 0
  var hasiPod = devArr.filter(function(x) { return x.startsWith('iPod') }).length > 0
  var hasTV = devArr.filter(function(x) { return x.startsWith('AppleTV') }).length > 0
  
  if (hasTV) {
    if (majFw < 9) return 'Apple TV Software';
    else return 'tvOS'
  }
  if (hasiPad && !hasiPhone && !hasiPod && majFw > 12) return 'iPadOS';
  if (majFw == 3) return  'iPhone OS';
  if (majFw < 3) return  'iPhone Software';
  return 'iOS';
}

/*for (var i in iosList) {
  const v = iosList[i];
  var redirects = '';
  if (!duplicateVerArr.includes(v.version)) redirects = [fwPath + v.version];
  
  page.push({
    path: fwPath + v.build + '.html',
    frontmatter: {
      title: `${getOsStr(v)} ${v.version} (${v.build})`,
      description: 'Compatible jailbreaks for firmware version ' + v.version,
      redirect_from: redirects,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: require('./content')(v.build)
  })
};*/

/*for (var i in iosList) {
  const v = iosList[i]
  if (iosList.filter(x => x.osStr == 'iPhone Software' || x.osStr == 'iPhone OS' || x.osStr == 'iOS' || x.osStr == 'iPadOS').filter(x => x.version == v.version).length == 1) continue
  console.log(v.version)

  page.push({
    path: fwPath + v.version + '.html',
    frontmatter: {
      title: [v.getOsStr, v.version].join(' '),
      description: 'Firmware builds for version ' + v.version,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: require('./multipleFwPage')(v.version)
  })
}*/

module.exports = page;