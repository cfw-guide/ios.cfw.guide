const jbPath = '/chart/jailbreak/'
const fwPath =  '/chart/firmware/'

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

const iosList = require('../../../../json/iosNew');
const deviceList = require('../../../../json/deviceList');
const jbList = require('../../../../json/jailbreak');

function getDeviceInfo(device, showAll) {
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
    deviceList[d].released,
    deviceList[d].discontinued
  ];
  
  var html = '<p>'
  for (var i in infoArr) if (infoArr[i]) {
    html += infoHeader[i] + ': ' + infoArr[i];
    if (infoArr[parseInt(i) + 1]) html += '<br>';
  }
  html += '</p>'
  
  return html;
}

function getDeviceTable(device, showAll) {
  const d = device;
  if ((!d || !deviceList.hasOwnProperty(d)) && !showAll) return;
  
  var html = '';
  
  var buildArr = [];
  for (var i in iosList)
    if (iosList[i].hasOwnProperty('devices'))
      if (iosList[i].devices.includes(d) || showAll)
        buildArr.push(iosList[i])
        
  for (var b in buildArr) {
    b = buildArr.length - b - 1 // Reverse list of firmwares
    if (!buildArr[b].hasOwnProperty('ver')) continue;
    html += '<tr>'
    html += '<td><a href="' + fwPath + buildArr[b].build + '">' + buildArr[b].build + '</a></td>'
    html += '<td>' + buildArr[b].ver + '</td>'
    html += '<td>'
    const jbArr = getJailbreaks(buildArr[b], d, showAll)
    for (var jb in jbArr) {
      html += '<a href="' + jbPath + jbArr[jb].name + '">' + jbArr[jb].name + '</a>'
      if (jbArr[parseInt(jb)+1]) html += ', '
    }
    html += '</td>'
    html += '</tr>'
  }
  
  return `
  <table>
    <colgroup>
      <col style="width: 15%">
      <col style="width: 15%">
      <col style="width: 70%">
    </colgroup>
    <thead>
      <tr>
        <th>` + tableHeader[0] + `</th>
        <th>` + tableHeader[1] + `</th>
        <th>` + tableHeader[2] + `</th>
      </tr>
    </thead>
    <tbody>` + html + `
    </tbody>
  </table>
  `
}

function getJailbreaks(os, d, showAll) {
  var jbArr = [];
  for (var jb in jbList)
    for (var compatList in jbList[jb])
      if (jbList[jb][compatList].hasOwnProperty('firmwares') && jbList[jb][compatList].hasOwnProperty('devices'))
        if (jbList[jb][compatList].firmwares.includes(os.build) && (jbList[jb][compatList].devices.includes(d) || showAll))
          if (!jbArr.includes(jbList[jb]))
            jbArr.push(jbList[jb])
  return jbArr;
}

module.exports = function(device, showAll) {
  return getDeviceInfo(device, showAll) + getDeviceTable(device, showAll)
}