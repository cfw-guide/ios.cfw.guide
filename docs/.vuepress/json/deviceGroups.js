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

const deviceObj = require('./deviceList')

const deviceArr = Object.keys(deviceObj).map(key => deviceObj[key])
const devicesInDeviceGroups = deviceGroupArr.map(x => x.devices).flat()

const allowedDeviceTypes = ['iPhone', 'iPad', 'iPod touch', 'iPad mini', 'iPad Air', 'iPad Pro', 'Apple TV', 'HomePod', 'Apple Watch']
const ungroupedDevices = deviceArr.map(x => {
  if (!x.identifier) x.identifier = x.name
  if (!x.key) x.key = x.identifier
  if (!x.imageKey) x.imageKey = x.key
  return x
}).filter(x => 
  !devicesInDeviceGroups.includes(x.key) &&
  x.group !== false &&
  allowedDeviceTypes.includes(x.type)
)

const nowPutThemInGroups = ungroupedDevices.map(x => {
  return {
    name: x.name,
    type: x.type,
    devices: [x.key]
  }
})

module.exports = deviceGroupArr.concat(nowPutThemInGroups)