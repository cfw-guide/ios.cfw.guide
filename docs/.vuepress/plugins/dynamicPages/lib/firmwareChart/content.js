const header = [
  'Info',
  'Devices',
  "Jailbreaks"
]

const infoHeader = [
  'Version',
  'Build',
  'Released'
]

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const devicePath = '/chart/device/'
const jbPath = '/chart/jailbreak/'

const iosList = require('../../../../json/ios');
const deviceList = require('../../../../json/deviceList');
const jbList = require('../../../../json/jailbreak');

function getDate(d) {
  var date = d.split('-');
  for (var i in date) date[i] = parseInt(date[i])
  date[1] = month[date[1]-1]
  return `${date[1]} ${date[2]}, ${date[0]}`
}

function getBuildInfo(b) {
  b = getBuild(b)
  var html = "## " + header[0] + "\n";
  html += infoHeader[0] + ": " + b.ver + '<br>'
  html += infoHeader[1] + ": " + b.build + '<br>'
  html += infoHeader[2] + ": " + getDate(b.released) + "\n"
  return html;
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

function getDeviceFromBuild(b, d) {
  var devArr = getDeviceListFromBuild(b);
  if (!devArr.includes(d)) return -1;
  
  var deviceObj = {
    "identifier": "",
    "ipsw": "",
  }
  
  for (var i in b.devices) {
    if (isObject(b.devices[i])) {
      if (b.devices[i].hasOwnProperty('identifier') && b.devices[i].hasOwnProperty('ipsw')) {
        if (b.devices[i].identifier == d) {
          deviceObj.identifier = b.devices[i].identifier;
          deviceObj.ipsw = b.devices[i].ipsw;
        }
      }
    } else {
      if (b.devices[i] == d) {
        deviceObj.identifier = b.devices[i];
      }
    }
  }
  
  return deviceObj;
}

function getBuildDevices(b) {
  var html = '';
  b = getBuild(b);
  var d = [];
  if (b.hasOwnProperty('devices')) d = getDeviceListFromBuild(b);
  if (d.length < 1) return html;
  html += '## ' + header[1] + "\n"
  for (var i in d) {
    var device = getDeviceFromBuild(b, d[i]);
    var ipswLink = `https://ipsw.me/download/${device.identifier}/${b.build}`;
    if (b.hasOwnProperty('beta')) if (b.beta) ipswLink = 'https://www.theiphonewiki.com/wiki/Beta_Firmware';
    if (device.ipsw) ipswLink = device.ipsw;
    html += "- [" + deviceList[device.identifier].name + "](" + devicePath + device.identifier + `) <a href="${ipswLink}"><i class="fas fa-download"></i></a>` + "\n";
  }
  return html;
}

function getBuild(b) {
  for (var i in iosList)
    if (iosList[i].hasOwnProperty('build'))
      if (iosList[i].build == b)
        return iosList[i]
}

function getJbArr(os) {
  var jbArr = [];
  for (var jb in jbList) {
    if (!jbList[jb].hasOwnProperty('compatibility')) continue;
    for (var compat in jbList[jb].compatibility) {
      if (!jbList[jb].compatibility[compat].hasOwnProperty('firmwares')) continue;
      if (jbList[jb].compatibility[compat].firmwares.includes(os)) {
        if (!jbArr.includes(jbList[jb])) {
          jbArr.push(jbList[jb])
        }
      }
    }
  }
  return jbArr;
}

function getJbDevArr(jb, os) {
  var devArr = [];
  for (var compat in jb.compatibility) {
    if (!jb.compatibility[compat].hasOwnProperty('firmwares') || !jb.compatibility[compat].hasOwnProperty('devices')) continue;
    if (jb.compatibility[compat].firmwares.includes(os)) {
      for (var dev in jb.compatibility[compat].devices) {
        const device = jb.compatibility[compat].devices[dev];
        if (!devArr.includes(device) && isDevCompatible(device, os)) {
          devArr.push(device);
        }
      }
    }
  }
  return devArr;
}

function isDevCompatible(dev, os) {
  for (var i in iosList) {
    if (!iosList[i].hasOwnProperty('devices') || !iosList[i].hasOwnProperty('build')) continue;
    if (iosList[i].build != os) continue;
    if (getDeviceListFromBuild(iosList[i]).includes(dev)) return true;
  }
  return false;
}

function getJbHtml(os) {
  var jbArr = getJbArr(os);
  var html = ''
  if (jbArr.length < 1) return html;
  
  html += "## " + header[2] + "\n"
  for (var jb in jbArr) {
    html += "### " + jbArr[jb].name + " [<i style=\"font-size: 17px\" class=\"fas fa-link\"></i>](" + jbPath + jbArr[jb].name + ")\n";
    const devArr = getJbDevArr(jbArr[jb], os);
    for (var dev in devArr) html += "- [" + deviceList[devArr[dev]].name + "](" + devicePath + devArr[dev] + ")\n"
  }
  
  return html;
}

module.exports = function(os) {
  return getBuildInfo(os) + getBuildDevices(os) + getJbHtml(os)
}