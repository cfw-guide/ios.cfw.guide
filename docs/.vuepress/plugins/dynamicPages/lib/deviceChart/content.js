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
    deviceList[d].released
  ];
  
  if (infoArr[5]) infoArr[5] = getDate(infoArr[5]);
  
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
    html += '<tr>'
    html += '<td><a href="' + fwPath + buildArr[b].build + '">' + buildArr[b].build + '</a></td>'
    html += '<td>' + buildArr[b].ver + '</td>'
    html += '<td>'
    var jbArr = getJailbreaks(buildArr[b].build, d, showAll)
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
  return getDeviceInfo(device, showAll) + getDeviceTable(device, showAll)
}