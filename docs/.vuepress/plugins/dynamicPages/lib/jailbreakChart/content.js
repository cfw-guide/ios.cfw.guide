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
  html += '## ' + header[0] + "\n\n"
  
  var infoArr = []
  
  if (info.hasOwnProperty('website')) {
    const website = info.website;
    infoArr.push(`${infoHeader[0]}: [${website.name}](${website.url})`)
  }
    
  if (info.hasOwnProperty('guide')) {
    for (var i in info.guide) {
      const guide = info.guide[i];
      var guideText = infoHeader[1];
      if (guide.hasOwnProperty('text')) guideText = guide.text
      
      infoArr.push(`${guideText}: [${guide.name}](${guide.url})`)
    }
  }
  
  if (info.hasOwnProperty('type')) infoArr.push(`${infoHeader[2]}: ${info.type}`)
  if (info.hasOwnProperty('firmwares')) infoArr.push(`${infoHeader[3]}: ${info.firmwares[0]} to ${info.firmwares[1]}`)
  if (info.hasOwnProperty('soc')) infoArr.push(`${infoHeader[4]}: ${info.soc}`)
  
  for (var i in infoArr) html += infoArr[i] + '<br>';
  
  return html + "\n";
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
  
  html += "## " + header[1] + "\n";
  for (var i in compatArr) {
    html += "### " + compatListHeader[0] + "\n\n";
    for (var d in compatArr[i].devices) html += "- [" + deviceList[compatArr[i].devices[d]].name + "](" + devicePath + compatArr[i].devices[d] + ")\n"
    html += "### " + compatListHeader[1] + "\n\n";
    for (var fw in compatArr[i].firmwares) html += "- " + getBuild(compatArr[i].firmwares[fw]).ver + " ([" + compatArr[i].firmwares[fw] + "](" + fwPath + compatArr[i].firmwares[fw] + "))\n"
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