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
  date[1] = month[date[1]]
  return `${date[1]} ${date[2]}, ${date[0]}`
}

function getBuildInfo(b) {
  b = getBuild(b)
  return `
  <h2>` + header[0] + `</h2>
  <p>` + infoHeader[0] + `: ` + b.ver + `
  <br>` + infoHeader[1] + `: ` + b.build + `
  <br>` + infoHeader[2] + `: ` + getDate(b.released) + `</p>`
}

function getBuildDevices(b) {
  var html = '';
  b = getBuild(b);
  var d = [];
  if (b.hasOwnProperty('devices')) d = b.devices;
  if (d.length < 1) return html;
  html += '<h2>' + header[1] + '</h2><ul>'
  for (var i in d) {
    var ipswLink = `https://ipsw.me/download/${d[i]}/${b.build}`;
    if (b.hasOwnProperty('beta')) if (b.beta) 'https://www.theiphonewiki.com/wiki/Beta_Firmware'
    html += `<li><a href="${devicePath}${d[i]}">${deviceList[d[i]].name}</a> <a target="_blank" href="${ipswLink}"><i class="fas fa-download"></i></a></li>`
  }
  html += '</ul>'
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
    if (iosList[i].devices.includes(dev)) return true;
  }
  return false;
}

function getJbHtml(os) {
  var jbArr = getJbArr(os);
  var html = ''
  if (jbArr.length < 1) return html;
  
  html += '<h2>' + header[2] + '</h2>'
  for (var jb in jbArr) {
    html += '<h3>' + jbArr[jb].name + ' <a href="' + jbPath + jbArr[jb].name + '"><i style="font-size: 17px" class="fas fa-link"></i></a></h3>';
    const devArr = getJbDevArr(jbArr[jb], os);
    html += '<ul>'
    for (var dev in devArr) {
      html += '<li><a href="' + devicePath + devArr[dev] + '">' + deviceList[devArr[dev]].name + '</a></li>';
    }
    html += '</ul>'
  }
  
  return html;
}

module.exports = function(os) {
  return getBuildInfo(os) + getBuildDevices(os) + getJbHtml(os)
}