const header = [
  'Info',
  'Compatibility Listing'
]

const compatListHeader = [
  'Devices',
  'Supported Firmwares'
]

const infoHeader = [
  'Website',
  'Guide',
  'Type',
  'Supported Firmwares',
  'SoC'
]

const devicePath = '/chart/device/'
const fwPath = '/chart/firmware/'

const iosList = require('../../../../json/ios');
const deviceList = require('../../../../json/deviceList');
const jbList = require('../../../../json/jailbreak');

function getJbInfo(jb) {
  var html = '';
  jb = getJb(jb)
  
  if (!jb.hasOwnProperty('info')) return html;
  
  const info = jb.info;
  html += '<h2>' + header[0] + '</h2>'
  html += '<p>'
  
  var infoArr = []
  
  if (info.hasOwnProperty('website')) {
    const website = info.website;
    
    var target = '';
    var icon = '';
    if (website.hasOwnProperty('external')) {
      if (website.external) {
        target = 'target="_blank"';
        icon = '<svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>'
      }
    }
    
    infoArr.push(`${infoHeader[0]}: <a href="${website.url}" ${target}>${website.name}</a>${icon}`)
  }
    
  if (info.hasOwnProperty('guide')) {
    for (var i in info.guide) {
      const guide = info.guide[i];
      
      var guideText = infoHeader[1];
      if (guide.hasOwnProperty('text')) guideText = guide.text
      
      var target = '';
      var icon = '';
      if (guide.hasOwnProperty('external')) {
        if (guide.external) {
          target = 'target="_blank"';
          icon = '<svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>'
        }
      }
      
      infoArr.push(`${guideText}: <a href="${guide.url}" ${target}>${guide.name}</a>${icon}`)
    }
  }
  
  if (info.hasOwnProperty('type')) infoArr.push(`${infoHeader[2]}: ${info.type}`)
  if (info.hasOwnProperty('firmwares')) infoArr.push(`${infoHeader[3]}: ${info.firmwares[0]} to ${info.firmwares[1]}`)
  if (info.hasOwnProperty('soc')) infoArr.push(`${infoHeader[4]}: ${info.soc}`)
  
  for (var i in infoArr) {
    html += infoArr[i];
    if (infoArr[parseInt(i)+1]) html += '<br>'
  }
  
  html += '</p>'
  
  return html;
}

function getJb(jb) {
  for (var i in jbList) {
    if (!jbList[i].hasOwnProperty('name')) continue;
    if (jbList[i].name == jb) return jbList[i]
  }
  return;
}

function getJbArr(jb, arr) {
  var retArr = [];
  if (!jb.hasOwnProperty('compatibility')) return retArr;
  for (var i in jb.compatibility) {
    const jbCompat = jb.compatibility[i];
    if (!jbCompat.hasOwnProperty(arr)) continue;
    for (var j in jbCompat[arr])
      if (!retArr.includes(jbCompat[arr][j]))
        retArr.push(jbCompat[arr][j])
  }
  return retArr;
}

function getBuild(b) {
  for (var i in iosList)
    if (iosList[i].hasOwnProperty('build'))
      if (iosList[i].build == b)
        return iosList[i]
}

function getCompatListing(jb) {
  var html = '';
  jb = getJb(jb)
  if (!jb.hasOwnProperty('compatibility')) return html;
  
  var devArr = getJbArr(jb, 'devices');
  var fwArr = getJbArr(jb, 'firmwares');
  
  var compatArr = [];
  
  for (var d in devArr) {
    var fwDevArr = getFwDevArr(jb, devArr[d]);
    var createNewObj = true;
    
    var obj = {
      firmwares: fwDevArr,
      devices: [devArr[d]]
    }
    
    for (var i in compatArr) {
      if (!compatArr[i].hasOwnProperty('firmwares') && !compatArr[i].hasOwnProperty('devices')) continue;
      if (compatArr[i].firmwares.toString() == obj.firmwares.toString()) {
        if (!compatArr[i].devices.includes(devArr[d])) {
          compatArr[i].devices.push(devArr[d]);
          createNewObj = false;
        }
      }
    }
    if (createNewObj) compatArr.push(obj)
  }
  
  html += `<h2>${header[1]}</h2>`
  for (var i in compatArr) {
    html += `<h3>${compatListHeader[0]}</h3>`
    html += '<ul>'
    for (var d in compatArr[i].devices) html += `<li><a href="${devicePath}${compatArr[i].devices[d]}">${deviceList[compatArr[i].devices[d]].name}</a></li>`
    html += '</ul>'
    html += `<h3>${compatListHeader[1]}</h3>`
    html += '<ul>'
    for (var fw in compatArr[i].firmwares) html += `<li>${getBuild(compatArr[i].firmwares[fw]).ver} (<a href="${fwPath}${compatArr[i].firmwares[fw]}">${compatArr[i].firmwares[fw]}</a>)</li>`
    html += '</ul>'
  }
  
  return html;
}

function getFwDevArr(jb, device) {
  var ret = [];
  if (!getJbArr(jb, 'devices').includes(device)) return ret;
  var fwArr = getJbArr(jb, 'firmwares');
  for (var i in fwArr) {
    for (var j in iosList) {
      const v = iosList[j];
      if (!v.hasOwnProperty('build')) continue;
      if (v.build != fwArr[i]) continue;
      if (!v.hasOwnProperty('devices')) continue;
      if (getDeviceListFromBuild(v).includes(device)) ret.push(fwArr[i])
    }
  }
  return ret;
}

function isObject(objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object && !Array.isArray(objValue) && objValue != null;
}

function getDeviceListFromBuild(b) {
  var devArr = [];
  
  for (var i in b.devices) {
    if (isObject(b.devices[i])) {
      if (b.devices[i].hasOwnProperty('identifier')) {
        devArr.push(b.devices[i].identifier)
      }
    } else {
      devArr.push(b.devices[i])
    }
  }
  
  return devArr;
}

module.exports = function(jb) {
  //return getCompatListing(jb)
  return getJbInfo(jb) + getCompatListing(jb)
}