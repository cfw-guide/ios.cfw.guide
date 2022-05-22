const header = [
  'Info',
  'Devices',
  'Jailbreaks'
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

function getDate(d) {
  var date = d.split('-');
  for (var i in date) date[i] = parseInt(date[i])
  date[1] = month[date[1]-1]
  return `${date[1]} ${date[2]}, ${date[0]}`
}

function getBuildInfo(b) {
  b = getBuild(b)
  var head = "## " + header[0] + "\n";
  var arr = [];
  arr.push(infoHeader[0] + ": " + b.version)
  arr.push(infoHeader[1] + ": " + b.build)
  if (b.hasOwnProperty('released')) arr.push(infoHeader[2] + ": " + new Intl.DateTimeFormat(localeLang.replace('_', '-'), { dateStyle: 'full' }).format(new Date(b.released)))
  return head + arr.join('<br>') + '\n';
}

function isObject(objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object && !Array.isArray(objValue) && objValue != null;
}

function getDeviceListFromBuild(b) {
  var devArr = [];
  for (const i in b.devices) devArr.push(i)
  return devArr;
}

function getDeviceFromBuild(b, d) {
  var devArr = getDeviceListFromBuild(b);
  if (!devArr.includes(d)) return -1;
  
  var deviceObj = {
    "identifier": d,
    "ipsw": "",
  }
  
  if (b.devices[d].hasOwnProperty('ipsw')) {
    deviceObj.ipsw = b.devices[d].ipsw
  } else {
    deviceObj.ipsw = ""
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
  html += '<ul>';
  for (var i in d) {
    var device = getDeviceFromBuild(b, d[i]);
    var ipswLink = `https://api.ipsw.me/v4/ipsw/download/${device.identifier}/${b.build}`;
    var target = ''
    if (b.hasOwnProperty('beta')) if (b.beta) {
      ipswLink = 'https://www.theiphonewiki.com/wiki/Beta_Firmware';
      target = 'target="_blank"';
    }
    if (device.ipsw) {
      ipswLink = device.ipsw;
      target = '';
    }
    var icon = ` <a class="hoverElement" style="font-size: 14px; padding-left: 3px;" ${target} href="${ipswLink}"><i class="fas fa-download"></i></a>`;
    if (device.ipsw == 'none') icon = '';
    html += `<li class="showOnHover"><router-link to="${devicePath + device.identifier}">${deviceList[device.identifier].name}</router-link>${icon}</li>`
  }
  html += "</ul>\n\n"
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
    html += `### ${jbArr[jb].name} <router-link to="${jbPath + jbArr[jb].name.replace(/ /g, '%20')}"><i style=\"font-size: 17px\" class=\"fas fa-link\"></i></router-link> \n`
    const devArr = getJbDevArr(jbArr[jb], os);
    for (var dev in devArr) html += `- <router-link to="${devicePath + devArr[dev]}">${deviceList[devArr[dev]].name}</router-link> \n`
  }
  
  return html;
}

module.exports = function(os) {
  return getBuildInfo(os) + getBuildDevices(os) + getJbHtml(os)
}