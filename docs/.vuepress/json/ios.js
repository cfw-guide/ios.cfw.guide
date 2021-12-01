const fs = require('fs');
const curPath = './docs/.vuepress/json/'
const iosPath = './iosFiles'

var iosFiles = fs.readdirSync(curPath + iosPath).filter(file => file.endsWith('.json'));
var iosArr = [];

// Sort by integer, not by alphabet
/*for (const file in iosFiles) iosFiles[file] = iosFiles[file].split('.')[0];
iosFiles.sort(function(a, b) { return a - b; });
for (const file in iosFiles) iosFiles[file] += '.js'*/

for (const file in iosFiles) {
  const jb = require(`${iosPath}/${iosFiles[file]}`)
  iosArr.push(jb);
}

iosArr.sort(function (a, b) {
  a = a.version.split(' ')[0].split('.')
  while(a.length < 3) a.push('0');
  for (const i in a) a[i] = parseInt(a[i], 10)
  
  b = b.version.split(' ')[0].split('.')
  while(b.length < 3) b.push('0');
  for (const i in b) b[i] = parseInt(b[i], 10)
  
  for (const i in a) {
    if (a[i] > b[i]) return 1;
    if (a[i] < b[i]) return -1;
  }
  
  a.length == b.length ? 0: (a.length < b.length ? -1 : 1);
})

module.exports = iosArr;