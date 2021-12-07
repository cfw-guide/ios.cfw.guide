function openStr(os) {
  return `There are multiple builds for firmware version ${os}. Please select the build that you want to view below.\n\n`
}

function getHtml(os) {
  var html = '';
  const buildArr = getBuildArr(os);
  for (const i in buildArr) {
    const b = buildArr[i];
    html += `## ${b.build} <router-link to="${fwPath + b.build}"><i style=\"font-size: 21px\" class=\"fas fa-link\"></i></router-link> \n`
    html += getBuildDevices(b);
  }
  return html;
}

function getBuildDevices(b) {
  var html = '';
  var d = [];
  if (b.hasOwnProperty('devices')) d = getDeviceListFromBuild(b);
  if (d.length < 1) return html;
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

function getBuildArr(os) {
  var retArr = [];
  for (var i in iosList) {
    const b = iosList[i];
    if (!b.hasOwnProperty('ver')) continue;
    if (b.version == os) retArr.push(b)
  }
  return retArr;
}

module.exports = function(os) {
  return openStr(os) + getHtml(os)
}