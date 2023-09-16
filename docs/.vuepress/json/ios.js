const fs = require('fs');
const path = require('path');
const p = 'docs/.vuepress/json/appledb/osFiles'

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

var osFiles = [];
osFiles = getAllFiles(p, osFiles)
osFiles = osFiles.filter(file => file.endsWith('.json'));
osFiles = osFiles.map(function(x) {
  const filePathStr = x.split(path.sep)
  const pathStrLength = p.split('/').length - 2
  
  return filePathStr.splice(pathStrLength, filePathStr.length).join(path.sep)
})
var iosArr = [];

for (const file in osFiles) iosArr.push(require('.' + path.sep + osFiles[file]));

iosArr = iosArr
.filter(x => !x.internal && !x.sdk)
.map(function(x) {
  if (!x.uniqueBuild) x.uniqueBuild = x.build
  if (!x.beta) x.beta = false
  if (x.rc) x.beta = true
  if (!x.deviceMap) x.deviceMap = []
  x.sources = []
  
  return x
})

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
