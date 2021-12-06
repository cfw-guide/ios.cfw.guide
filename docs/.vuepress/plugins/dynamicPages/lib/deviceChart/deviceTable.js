const jbPath = '/chart/jailbreak/'
const fwPath = '/chart/firmware/'
const devicePath = '/chart/device/'
const betaDevicePath = '/chart/beta/device'

const header = {
  info: 'Info',
  related: 'Related Devices',
  grouped: 'Grouped Devices',
  table: 'Table',
};

const infoHeader = [
  'Device',
  'Identifier',
  'SoC',
  'Arch',
  'Model',
  'Released',
  'Discontinued'
];

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
const deviceGroups = require('../../../../json/deviceGroups');
const jbList = require('../../../../json/jailbreak');

function getDate(d) {
  var date = d.split('-');
  for (var i in date) date[i] = parseInt(date[i])
  date[1] = month[date[1]-1]
  return `${date[1]} ${date[2]}, ${date[0]}`
}

function getDeviceInfo(device, groupTable) {
  const d = device;
  if (!d || !deviceList.hasOwnProperty(d)) return '';
  
  var infoArr = [
    deviceList[d].name,
    d,
    deviceList[d].soc,
    deviceList[d].arch,
    deviceList[d].model,
    deviceList[d].released
  ];
  
  if (groupTable) { 
    var devGroup = deviceGroups.filter(function(x) { return x.devices.includes(d) });
    if (devGroup.length < 1) return '';
    if (Array.isArray(devGroup) && devGroup.length == 1) devGroup = devGroup[0];
    
    infoArr[0] = devGroup.name;
    infoArr[1] = devGroup.devices;
    
    if (infoArr[1]) {
      if (infoArr[1].length <= 5) infoArr[1] = infoArr[1].join(', ');
      else {
        var tempArr = infoArr[1];
        const firstThreeDevices = tempArr.splice(0, 3).join(', ');
        const restOfTheDevices = tempArr.join(', ');
        infoArr[1] = `${firstThreeDevices}, <a id="clickToShowDevices" title="Show more" onclick="getElementById('extraDevices').style.display = 'inline'; getElementById('clickToShowDevices').style.display = 'none';" style="cursor: pointer;">...</a><div id="extraDevices" style="display: none;">${restOfTheDevices}</div>`
      }
    }
    
    if (infoArr[4]) {
      for (const dev in devGroup.devices) infoArr[4] = infoArr[4].concat(deviceList[devGroup.devices[dev]].model);
      infoArr[4] = infoArr[4].filter(function(elem, index, self) { return index === self.indexOf(elem); })
    }
  };
  
  if (infoArr[4]) {
    if (infoArr[4].length <= 5) infoArr[4] = infoArr[4].join(', ');
    else {
      var tempArr = infoArr[4];
      const firstThreeModels = tempArr.splice(0, 3).join(', ');
      const restOfTheModels = tempArr.join(', ');
      infoArr[4] = `${firstThreeModels}, <a id="clickToShowModels" title="Show more" onclick="getElementById('extraModels').style.display = 'inline'; getElementById('clickToShowModels').style.display = 'none';" style="cursor: pointer;">...</a><div id="extraModels" style="display: none;">${restOfTheModels}</div>`
    }
  }
  if (infoArr[5]) infoArr[5] = getDate(infoArr[5]);
  
  var html = "";
  
  html += '<p>'
  for (var i in infoArr) if (infoArr[i]) {
    html += infoHeader[i] + ': ' + infoArr[i];
    if (infoArr[parseInt(i) + 1]) html += '<br>';
  }
  html += "</p>\n\n"
  
  return html;
}

function getRelatedDevices(d, groupTable) {
  var html = '';
  if (!d || !deviceList.hasOwnProperty(d)) return html;
  
  let devArr;
  
  for (const i in deviceGroups) {
    if (!deviceGroups[i].hasOwnProperty('devices')) continue;
    if (deviceGroups[i].devices.length < 2) continue;
    if (deviceGroups[i].devices.includes(d)) devArr = deviceGroups[i].devices
  }
  
  if (devArr == null) return html;
  
  if (!groupTable) devArr = devArr.filter(function(device) { return device != d } )
  
  html += '<ul>'
  for (const i in devArr) html += `<li><router-link to="${devicePath}${devArr[i]}">${deviceList[devArr[i]].name}</router-link></li>`
  html += "</ul>\n\n"
  
  return html;
}

module.exports = function(device, showAll, maxDisplayed, simplifyTable, groupTable) {
  const retArr = [
    {
      title: header.info,
      content: getDeviceInfo(device, groupTable),
    },
    {
      title: (groupTable) ? header.grouped : header.related,
      content: getRelatedDevices(device, groupTable),
    },
    {
      title: header.table,
      content: require('./getTable')(device, showAll, maxDisplayed, simplifyTable, groupTable),
    },
  ]
  
  var ret = '';
  
  for (const i in retArr) if (retArr[i].content.length > 1) ret += `## ${retArr[i].title} \n${retArr[i].content}`
  
  return ret;
}