const jbPath = '/chart/jailbreak/'
const fwPath = '/chart/firmware/'
const devicePath = '/chart/device/'
const betaDevicePath = '/chart/beta/device'

const header = [
  'Info',
  'Related Devices',
  'Table',
]

const groupHeader = 'Grouped Devices';

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

const simpleTableHeader = [
  'From',
  'To',
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
    infoArr[1] = devGroup.devices.join(', ');
    
    for (const dev in devGroup.devices)
      infoArr[4].concat(deviceList[devGroup.devices[dev]].model);
    infoArr[4].filter(function(elem, index, self) { return index === self.indexOf(elem); })
  };
  
  if (infoArr[4]) infoArr[4] = infoArr[4].join(', ');
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
  
  html += "## " + (groupTable) ? groupHeader : header[1] + "\n";
  
  html += '<ul>'
  for (const i in devArr) html += `<li><a href="${devicePath}${devArr[i]}">${deviceList[devArr[i]].name}</a></li>`
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

function getDeviceTable(device, showAll, maxDisplayed, simplifyTable, groupTable) {
  const d = device;
  if ((!d || !deviceList.hasOwnProperty(d)) && !showAll) return;
  
  var deviceGroup = [];
  var deviceGroupDevArr = [];
  
  if (groupTable && !showAll) {
    deviceGroup = deviceGroups.filter(function(x) { return x.devices.includes(d) });
    for (const i in deviceGroup) for (const j in deviceGroup[i].devices)
      deviceGroupDevArr.push(deviceGroup[i].devices[j]);
  }
  
  var title = "## " + header[2] + "\n";
  if (showAll) title = '';
  
  var tableHtml = [];
  var buildArr = [[], []];
  
  for (const i in iosList) {
    if (!iosList[i].hasOwnProperty('beta')) continue;
    if (!iosList[i].hasOwnProperty('devices')) continue;
    
    const devList = getDeviceListFromBuild(iosList[i]);
    
    if (!showAll) {
      if (groupTable && deviceGroup.length) {
        if (!devList.some(r => deviceGroupDevArr.includes(r))) continue;
      }
      else if (!devList.includes(d)) continue;
    }
    
    if (iosList[i].beta) buildArr[1].push(iosList[i]);
    else for (const j in buildArr) buildArr[j].push(iosList[i])
  }
  
  for (const i in buildArr) {
    buildArr[i].reverse();
    var jbObjArr = [];
    
    for (const b in buildArr[i]) {
      var getJb = getJailbreaks(buildArr[i][b].build, d, showAll);
      
      if (groupTable) {
        for (const device in deviceGroup.devices) getJb.concat(getJailbreaks(buildArr[i][b].build, device, showAll));
        getJb = getJb.filter(function(elem, index, self) { return index === self.indexOf(elem); })
      }
      
      var jbArr = getJb;
      
      if (maxDisplayed > -1) {
        var jbArr = getJb.filter(function(x) { return x.hasOwnProperty('priority') });
        if (jbArr.length == 0) jbArr = getJb;
        jbArr = jbArr.sort(function(a,b) { return a.priority - b.priority });
        jbArr = jbArr.slice(0, maxDisplayed);
      }
      
      jbObjArr.push({
        build: buildArr[i][b].build,
        buildURL: fwPath + buildArr[i][b].build,
        version: buildArr[i][b].version.replace('6-enterprise', '6-e'),
        jbArr: jbArr,
      })
    }
    
    if (simplifyTable) {
      var simpleJbObjArr = [];
      for (const i in jbObjArr) {
        const obj = jbObjArr[i];
        var oldObj = simpleJbObjArr[simpleJbObjArr.length - 1];
        
        if ((i == 0) || (JSON.stringify(obj.jbArr) != JSON.stringify(oldObj.jbArr))) {
          simpleJbObjArr.push({
            from: obj.version,
            to: obj.version,
            jbArr: obj.jbArr,
          })
          continue;
        }
        
        oldObj.from = obj.version;
        
        simpleJbObjArr[simpleJbObjArr.length - 1] = oldObj;
      }
    };
    
    var html = '';
    if (simplifyTable) {
      for (const i in simpleJbObjArr) {
        var t = simpleJbObjArr[i];
        html += `<tr>`;
        html += `<td>${t.from}</td>`;
        html += `<td>${t.to}</td>`;
        
        html += `<td>${t.jbArr.map(function(x) {
          var url = jbPath + x.name;
          var name = x.name;
          
          if (x.hasOwnProperty('info')) if (x.info.hasOwnProperty('guide')) {
            const guideObj = x.info.guide[0];
            if (guideObj.hasOwnProperty('url')) url = guideObj.url;
            if (guideObj.hasOwnProperty('name')) name = guideObj.name;
          }
          
          return `<a href="${url}">${name}</a>`
        }).join(', ')}</td>`;
        
        html += '</tr>';
      }
    } else {
      for (const i in jbObjArr) {
        var t = jbObjArr[i];
        html += `<tr>`;
        html += `<td><a href="${t.buildURL}">${t.build}</a></td>`;
        html += `<td>${t.version}</td>`;
        html += `<td>${t.jbArr.map(function(x) { return `<a href="${jbPath}${x.name}">${x.name}</a>` }).join(', ')}</td>`;
        html += '</tr>';
      }
    }
    tableHtml.push(html);
  }
  
  const tableClass = ['tableBetaClass', 'tableMainClass'];
  const betaTip = `<div class="custom-container tip ${tableClass[0]}"><p>This list is incomplete. If you have any information regarding jailbreak compatibility with beta versions, please let us know on <a href="https://discord.gg/QBj8pBa" target="_blank">Discord</a><svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>.</p></div>`
  var switchButtons = "<p class=\"tableMainClass\"><a style=\"cursor:pointer;\" onclick=\"const style = document.createElement('style'); style.innerHTML = `.tableBetaClass { display: table; } .tableMainClass { display: none }`; document.head.appendChild(style)\">Show Beta Versions</a></p><p class=\"tableBetaClass\"><a style=\"cursor:pointer;\" onclick=\"const style = document.createElement('style'); style.innerHTML = `.tableBetaClass { display: none; } .tableMainClass { display: table }`; document.head.appendChild(style)\">Hide Beta Versions</a></p>"
  var head = tableHeader;
  if (simplifyTable) head = simpleTableHeader;
  
  if(tableHtml[0] == tableHtml[1]) return title + `<table class="${tableClass[1]}">
    <colgroup>
      <col style="width: 15%">
      <col style="width: 15%">
      <col style="width: 70%">
    </colgroup>
    <thead>
      <tr>
        <th>${head[0]}</th>
        <th>${head[1]}</th>
        <th>${head[2]}</th>
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
        <th>${head[0]}</th>
        <th>${head[1]}</th>
        <th>${head[2]}</th>
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
        <th>${head[0]}</th>
        <th>${head[1]}</th>
        <th>${head[2]}</th>
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

module.exports = function(device, showAll, maxDisplayed, simplifyTable, groupTable) {
  return getDeviceInfo(device, groupTable) + getRelatedDevices(device, groupTable) + getDeviceTable(device, showAll, maxDisplayed, simplifyTable, groupTable);
}