const jbPath = '/chart/jailbreak/'
const fwPath = '/chart/firmware/'
const devicePath = '/chart/device/'
const betaDevicePath = '/chart/beta/device'

const header = [
  'Info',
  'Related Devices',
  'Table',
]

const infoHeader = [
  'Device',
  'Identifier',
  'SoC',
  'Arch',
  'Model',
  'Released',
  'Discontinued'
];

const tableHeader = [
  'Build',
  'Version',
  'Jailbreak'
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

const iosList = require('../../../../json/ios');
const deviceList = require('../../../../json/deviceList');
const jbList = require('../../../../json/jailbreak');

function getDate(d) {
  var date = d.split('-');
  for (var i in date) date[i] = parseInt(date[i])
  date[1] = month[date[1]]
  return `${date[1]} ${date[2]}, ${date[0]}`
}

function getDeviceInfo(device) {
  const d = device;
  if (!d || !deviceList.hasOwnProperty(d)) return '';
  
  var modelList = '';
  for (var i in deviceList[d].model) {
    modelList += deviceList[d].model[i];
    if (deviceList[d].model[parseInt(i) + 1]) modelList += ', ';
  }
  
  var infoArr = [
    deviceList[d].name,
    d,
    deviceList[d].soc,
    deviceList[d].arch,
    modelList,
    deviceList[d].released
  ];
  
  if (infoArr[5]) infoArr[5] = getDate(infoArr[5]);
  
  var html = `<h2>${header[0]}</h2>`
  
  html += '<p>'
  for (var i in infoArr) if (infoArr[i]) {
    html += infoHeader[i] + ': ' + infoArr[i];
    if (infoArr[parseInt(i) + 1]) html += '<br>';
  }
  html += '</p>'
  
  return html;
}

function getRelatedDevices(device, showBeta) {
  const d = device;
  var html = ''
  
  if (!d || !deviceList.hasOwnProperty(d)) return html
  if (!deviceList[d].hasOwnProperty('related')) return html;
  var relatedDevices = deviceList[d].related;
  if (relatedDevices.length < 1) return html;
  
  html += `<h2>${header[1]}</h2>`;
  
  html += '<ul>'
  for (var i in relatedDevices) {
    if (relatedDevices[i] == d) continue;
    var path = devicePath;
    if (showBeta) path = betaDevicePath
    html += `<li><a href="${path}${relatedDevices[i]}">${deviceList[relatedDevices[i]].name}</a></li>`
  }
  html += '</ul>'
  
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

function getDeviceTable(device, showAll) {
  const d = device;
  if ((!d || !deviceList.hasOwnProperty(d)) && !showAll) return;
  
  var title = `<h2>${header[2]}</h2>`;
  if (showAll) title = '';
  
  var tableHtml = [];
  
  var buildArr = [[], []];
  for (var i in iosList)
    if (iosList[i].hasOwnProperty('beta'))
      if (iosList[i].hasOwnProperty('devices'))
        if (getDeviceListFromBuild(iosList[i]).includes(d) || showAll) {
          if (iosList[i].hasOwnProperty('beta'))
            if (iosList[i].beta) {
              buildArr[1].push(iosList[i]);
            }
          else {
            buildArr[0].push(iosList[i])
            buildArr[1].push(iosList[i])
          }
        }
        
  for (var i in buildArr) {
    var html = ''
    for (var b in buildArr[i]) {
      b = buildArr[i].length - b - 1 // Reverse list of firmwares
      
      html += `<tr>`
      html += '<td><a href="' + fwPath + buildArr[i][b].build + '">' + buildArr[i][b].build + '</a></td>'
      html += '<td>' + buildArr[i][b].ver + '</td>'
      
      html += '<td>'
      var jbArr = getJailbreaks(buildArr[i][b].build, d, showAll)
      for (var jb in jbArr) {
        html += `<a href="${jbPath}${jbArr[jb].name}">${jbArr[jb].name}</a>`
        if (jbArr[parseInt(jb)+1]) html += ', '
      }
      html += '</td>'
      html += '</tr>'
    }
    tableHtml.push(html);
  }
  
  var tableClass = ['tableBetaClass', 'tableMainClass'];
  
  var switchButtons = "<p class=\"tableMainClass\"><a style=\"cursor:pointer;\" onclick=\"const style = document.createElement('style'); style.innerHTML = `.tableBetaClass { display: table; } .tableMainClass { display: none }`; document.head.appendChild(style)\">Show Beta Versions</a></p><p class=\"tableBetaClass\"><a style=\"cursor:pointer;\" onclick=\"const style = document.createElement('style'); style.innerHTML = `.tableBetaClass { display: none; } .tableMainClass { display: table }`; document.head.appendChild(style)\">Hide Beta Versions</a></p>"
  
  tableHtml = `
  <table class="${tableClass[0]}">
    <colgroup>
      <col style="width: 15%">
      <col style="width: 15%">
      <col style="width: 70%">
    </colgroup>
    <thead>
      <tr>
        <th>${tableHeader[0]}</th>
        <th>${tableHeader[1]}</th>
        <th>${tableHeader[2]}</th>
      </tr>
    </thead>
    <tbody>${tableHtml[1]}</tbody>
  </table>
  
  <table class="${tableClass[1]}">
    <colgroup>
      <col style="width: 15%">
      <col style="width: 15%">
      <col style="width: 70%">
    </colgroup>
    <thead>
      <tr>
        <th>${tableHeader[0]}</th>
        <th>${tableHeader[1]}</th>
        <th>${tableHeader[2]}</th>
      </tr>
    </thead>
    <tbody>${tableHtml[0]}</tbody>
  </table>
  `
  
  return title + switchButtons + tableHtml
}

function getJailbreaks(os, d, showAll) {
  var jbArr = [];
  for (var i in jbList) {
    var jb = jbList[i];
    if (!jb.hasOwnProperty('compatibility')) continue;
    for (var j in jb.compatibility) {
      if (!jb.compatibility[j].hasOwnProperty('firmwares') || !jb.compatibility[j].hasOwnProperty('devices')) continue;
      var devArr = jb.compatibility[j].devices;
      var fwArr = jb.compatibility[j].firmwares;
      if (fwArr.includes(os) && (devArr.includes(d) || showAll))
        if (!jbArr.includes(jb))
          jbArr.push(jb)
    }
  }
  return jbArr;
}

module.exports = function(device, showAll, showBeta) {
  return getDeviceInfo(device) + getRelatedDevices(device, showBeta) + getDeviceTable(device, showAll);
}