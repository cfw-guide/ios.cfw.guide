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
  date[1] = month[date[1]-1]
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
  
  var html = "## " + header[0] + "\n"
  
  html += '<p>'
  for (var i in infoArr) if (infoArr[i]) {
    html += infoHeader[i] + ': ' + infoArr[i];
    if (infoArr[parseInt(i) + 1]) html += '<br>';
  }
  html += "</p>\n\n"
  
  return html;
}

function getRelatedDevices(device) {
  const d = device;
  var html = ''
  
  if (!d || !deviceList.hasOwnProperty(d)) return html
  if (!deviceList[d].hasOwnProperty('related')) return html;
  var relatedDevices = deviceList[d].related;
  if (relatedDevices.length < 1) return html;
  
  html += "## " + header[1] + "\n";
  
  html += '<ul>'
  for (var i in relatedDevices) {
    if (relatedDevices[i] == d) continue;
    var path = devicePath;
    html += `<li><a href="${path}${relatedDevices[i]}">${deviceList[relatedDevices[i]].name}</a></li>`
  }
  html += "</ul>\n\n"
  
  return html;
}

function isObject(objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object && !Array.isArray(objValue) && objValue != null;
}

function getDeviceListFromBuild(b) {
  var devArr = [];
  for (const i in b.devices) devArr.push(i)
  return devArr;
}

function getDeviceTable(device, showAll) {
  const d = device;
  if ((!d || !deviceList.hasOwnProperty(d)) && !showAll) return;
  
  var title = "## " + header[2] + "\n";
  if (showAll) title = '';
  
  var tableHtml = [];
  var buildArr = [[], []];
  
  for (const i in iosList) {
    if (!iosList[i].hasOwnProperty('beta')) continue;
    if (!iosList[i].hasOwnProperty('devices')) continue;
    if (!getDeviceListFromBuild(iosList[i]).includes(d) && !showAll) continue;
    
    if (iosList[i].beta) buildArr[1].push(iosList[i]);
    else for (const j in buildArr) buildArr[j].push(iosList[i])
  }
        
  for (var i in buildArr) {
    var html = ''
    for (var b in buildArr[i]) {
      b = buildArr[i].length - b - 1 // Reverse list of firmwares
      
      html += `<tr>`
      html += '<td><a href="' + fwPath + buildArr[i][b].build + '">' + buildArr[i][b].build + '</a></td>'
      html += '<td>' + buildArr[i][b].version.replace('6-enterprise', '6-e') + '</td>'
      
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
  
  const tableClass = ['tableBetaClass', 'tableMainClass'];
  const betaTip = `<div class="custom-container tip ${tableClass[0]}"><p>This list is incomplete. If you have any information regarding jailbreak compatibility with beta versions, please let us know on <a href="https://discord.gg/QBj8pBa" target="_blank">Discord</a><svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>.</p></div>`
  var switchButtons = "<p class=\"tableMainClass\"><a style=\"cursor:pointer;\" onclick=\"const style = document.createElement('style'); style.innerHTML = `.tableBetaClass { display: table; } .tableMainClass { display: none }`; document.head.appendChild(style)\">Show Beta Versions</a></p><p class=\"tableBetaClass\"><a style=\"cursor:pointer;\" onclick=\"const style = document.createElement('style'); style.innerHTML = `.tableBetaClass { display: none; } .tableMainClass { display: table }`; document.head.appendChild(style)\">Hide Beta Versions</a></p>"
  
  if(tableHtml[0] == tableHtml[1]) return title + `<table class="${tableClass[1]}">
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
  </table>`
  
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
  
  return title + switchButtons + betaTip + tableHtml
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

module.exports = function(device, showAll) {
  return getDeviceInfo(device) + getRelatedDevices(device) + getDeviceTable(device, showAll);
}