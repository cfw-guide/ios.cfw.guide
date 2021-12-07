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
  'Wiki',
  'Guide',
  'Type',
  'Supported Firmwares',
  'SoC'
]

function getJbInfo(jb) {
  var html = '';
  jb = getJb(jb)
  
  if (!jb.hasOwnProperty('info')) return html;
  
  const info = jb.info;
  html += '## ' + header[0] + "\n\n"
  
  var infoArr = []
  
  if (info.hasOwnProperty('website')) infoArr.push(`${infoHeader[0]}: [${info.website.name}](${info.website.url})`)
  if (info.hasOwnProperty('wiki')) infoArr.push(`${infoHeader[1]}: [${info.wiki.name}](${info.wiki.url})`)
    
  if (info.hasOwnProperty('guide')) {
    for (var i in info.guide) {
      const guide = info.guide[i];
      var guideText = infoHeader[2];
      if (guide.hasOwnProperty('text')) guideText = guide.text
      
      infoArr.push(`${guideText}: <router-link to="${guide.url}">${guide.name}</router-link> \n`)
    }
  }
  
  if (info.hasOwnProperty('type')) infoArr.push(`${infoHeader[3]}: ${info.type}`)
  
  if (info.hasOwnProperty('firmwares')) {
    var fwStr = info.firmwares;
    if (Array.isArray(fwStr)) {
      if (fwStr.length < 2) fwStr = fwStr;
      else if (fwStr.length > 2) fwStr = fwStr.join(', ');
      else fwStr = fwStr[0] + ' to ' + fwStr[1];
    }
    infoArr.push(infoHeader[4] + ': ' + fwStr)
  }
  
  if (info.hasOwnProperty('soc')) infoArr.push(`${infoHeader[5]}: ${info.soc}`)
  
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
    for (var d in compatArr[i].devices) html += `- <router-link to="${devicePath + compatArr[i].devices[d]}">${deviceList[compatArr[i].devices[d]].name}</router-link> \n`
    html += "### " + compatListHeader[1] + "\n\n";
    for (var fw in compatArr[i].firmwares) {
      var b = getBuild(compatArr[i].firmwares[fw])
      if (!b.beta && b.build != '11D5099e')
      html += `- ${b.version} (<router-link to="${fwPath + compatArr[i].firmwares[fw]}">${compatArr[i].firmwares[fw]}</router-link>) \n`
    }
  }
  
  return html;
}

function getBuild(b) {
  for (var i in iosList)
    if (iosList[i].hasOwnProperty('build'))
      if (iosList[i].build == b)
        return iosList[i]
}

function getFwDevArr(jb, device) {
  var ret = [];
  if (!getJbArr(jb, 'devices').includes(device)) return ret;
  var fwArr = getJbArr(jb, 'firmwares');
  for (const i in fwArr) {
    for (const j in iosList) {
      const v = iosList[j];
      if (!v.hasOwnProperty('build')) continue;
      if (v.build != fwArr[i]) continue;
      if (!v.hasOwnProperty('devices')) continue;
      if (getDeviceListFromBuild(v).includes(device)) ret.push(fwArr[i])
    }
  }
  
  // This is a quick fix but is slow and bad
  var finalRet = [];
  if (jb.hasOwnProperty('compatibility')) {
    const c = jb.compatibility;
    for (var i in ret) {
      for (var j in c) {
        if (c[j].hasOwnProperty('devices')) {
          if (c[j].devices.includes(device)) {
            if (c[j].hasOwnProperty('firmwares')) {
              if (c[j].firmwares.includes(ret[i])) {
                finalRet.push(ret[i]);
              }
            }
          }
        }
      }
    }
  }
  
  return finalRet;
}

function isObject(objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object && !Array.isArray(objValue) && objValue != null;
}

function getDeviceListFromBuild(b) {
  var devArr = [];
  for (var i in b.devices) devArr.push(i)
  return devArr;
}

module.exports = function(jb) {
  //return getCompatListing(jb)
  return getJbInfo(jb) + getCompatListing(jb)
}