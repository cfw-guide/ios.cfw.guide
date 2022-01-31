const fs = require('fs');
const path = require('path');
const appPath = 'docs/.vuepress/json/appledb/bypassApps'
const tweakPath = 'docs/.vuepress/json/appledb/bypassTweaks'

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

function requireFiles(p) {
  var fileArr = []
  fileArr = getAllFiles(p, fileArr).filter(f => f.endsWith('.json'))
  fileArr = fileArr.map(function(x) {
    const filePathStr = x.split(path.sep)
    const pathStrLength = p.split('/').length - 2
    return filePathStr.splice(pathStrLength, filePathStr.length).join(path.sep)
  })
  var retArr = []
  for (var f in fileArr) retArr.push(require('.' + path.sep + fileArr[f]))
  return retArr
}

var appFiles = requireFiles(appPath)

var tweakFiles = {}
requireFiles(tweakPath).map(function(f) {
  tweakFiles[f.name] = f
})

appFiles = appFiles.map(function(f) {
  if (f.bypasses == null) return f
  
  f.bypasses = f.bypasses.map(function(b) {
    var bpName
    var notes
    var bypass

    if (b.name) bpName = b.name
    if (b.notes) notes = b.notes
    if (bpName) bypass = tweakFiles[bpName]
    if (notes && bpName) bypass.notes = notes

    return bypass
  })
  return f
})

var ret = {}
appFiles.map(function(f) {
  ret[f.name] = f
})

module.exports = ret