const fs = require('fs');
const path = require('path');
const p = 'docs/.vuepress/json/appledb/jailbreakFiles'

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

var jailbreakFiles = [];
jailbreakFiles = getAllFiles(p, jailbreakFiles)
jailbreakFiles = jailbreakFiles.filter(file => file.endsWith('.js') || file.endsWith('.json'));
jailbreakFiles = jailbreakFiles.map(function(x) {
  const filePathStr = x.split(path.sep)
  const pathStrLength = p.split('/').length - 2
  return filePathStr.splice(pathStrLength, filePathStr.length).join(path.sep)
})
var jailbreakArr = [];

for (const file in jailbreakFiles) {
  jailbreakArr.push(require('.' + path.sep + jailbreakFiles[file]));
}

module.exports = jailbreakArr;
