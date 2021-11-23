const fs = require('fs');
const curPath = './docs/.vuepress/json/'
const iosPath = './iosFiles'

var iosFiles = fs.readdirSync(curPath + iosPath).filter(file => file.endsWith('.js'));
var iosArr = [];

// Sort by integer, not by alphabet
for (const file in iosFiles) iosFiles[file] = iosFiles[file].split('.')[0];
iosFiles.sort(function(a, b) { return a - b; });
for (const file in iosFiles) iosFiles[file] += '.js'

for (const file in iosFiles) {
  const jb = require(`${iosPath}/${iosFiles[file]}`)
  for (var i in jb) {
    iosArr.push(jb[i]);
  }
}

module.exports = iosArr;