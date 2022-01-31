const fs = require('fs');
const path = require('path');
const p = 'docs/.vuepress/json/appledb/deviceGroupFiles'

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

var deviceFiles = [];
deviceFiles = getAllFiles(p, deviceFiles)
deviceFiles = deviceFiles.filter(file => file.endsWith('.json'));
deviceFiles = deviceFiles.map(function(x) {
  const filePathStr = x.split(path.sep)
  const pathStrLength = p.split('/').length - 2
  
  return filePathStr.splice(pathStrLength, filePathStr.length).join(path.sep)
})
var deviceGroupArr = [];

for (const file in deviceFiles) {
  deviceGroupArr.push(require('.' + path.sep + deviceFiles[file]));
}

module.exports = deviceGroupArr;