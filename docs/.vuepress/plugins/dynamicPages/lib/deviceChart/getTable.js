const iosList = require('../../../../json/ios');
const deviceList = require('../../../../json/deviceList');
const deviceGroups = require('../../../../json/deviceGroups');
const jbList = require('../../../../json/jailbreak');

const jbPath = '/chart/jailbreak/'
const fwPath = '/chart/firmware/'
const devicePath = '/chart/device/'
const betaDevicePath = '/chart/beta/device'

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

function getDeviceListFromBuild(b) {
  var devArr = [];
  for (const i in b.devices) devArr.push(i)
  return devArr;
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
  const d = device;
  if ((!d || !deviceList.hasOwnProperty(d)) && !showAll) return;
  
  var deviceGroup = [];
  var deviceGroupDevArr = [device];
  
  if (groupTable && !showAll) {
    deviceGroup = deviceGroups.filter(function(x) { return x.devices.includes(d) });
    for (const i in deviceGroup) for (const j in deviceGroup[i].devices)
      deviceGroupDevArr.push(deviceGroup[i].devices[j]);
  }
  
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
      
      if (groupTable && Array.isArray(deviceGroup) && deviceGroup.length == 1) {
        for (const device in deviceGroup[0].devices) {
          getJb = getJb.concat(getJailbreaks(buildArr[i][b].build, deviceGroup[0].devices[device], showAll));
        }
        getJb = getJb.filter(function(elem, index, self) { return index === self.indexOf(elem); })
      }
      
      var jbArr = getJb;
      
      if (maxDisplayed > -1) {
        var jbArr = getJb.filter(function(x) { return x.hasOwnProperty('priority') });
        if (jbArr.length == 0) jbArr = getJb;
        jbArr = jbArr.sort(function(a,b) { return a.priority - b.priority });
        jbArr = jbArr.slice(0, maxDisplayed);
      };
      
      var jbGuideObj = {name: '', url: ''};
      
      if (simplifyTable) {
        jbGuideObj = {};
        for (const j in jbArr) {
          if (!jbArr[j].hasOwnProperty('info')) continue;
          if (!jbArr[j].info.hasOwnProperty('guide')) continue;
          
          const guide = jbArr[j].info.guide;
          var ret = guide[0];
          
          for (const a in guide) {
            if (!guide[a].hasOwnProperty('devices') && !guide[a].hasOwnProperty('firmwares')) continue;
            if (
              guide[a].devices.some(r => deviceGroupDevArr.includes(r)) &&
              guide[a].firmwares.includes(buildArr[i][b].build)
            ) {
              ret = guide[a];
              break;
            }
          }
          
          jbGuideObj = ret;
        }
      };
      
      jbObjArr.push({
        build: buildArr[i][b].build,
        buildURL: fwPath + buildArr[i][b].build,
        version: buildArr[i][b].version.replace('6-enterprise', '6-e'),
        jbArr: jbArr,
        jbGuideObj: jbGuideObj,
      })
    }
    
    if (simplifyTable) {
      var simpleJbObjArr = [];
      for (const i in jbObjArr) {
        const obj = jbObjArr[i];
        var oldObj = simpleJbObjArr[simpleJbObjArr.length - 1];
        
        if ((i == 0) || (JSON.stringify(obj.jbArr) != JSON.stringify(oldObj.jbArr) || (JSON.stringify(obj.jbGuideObj) != JSON.stringify(oldObj.jbGuideObj)))) {
          simpleJbObjArr.push({
            fromBuild: obj.build,
            from: obj.version,
            toBuild: obj.build,
            to: obj.version,
            jbArr: obj.jbArr,
            jbGuideObj: obj.jbGuideObj,
          })
          continue;
        }
        
        oldObj.from = obj.version;
        oldObj.fromBuild = obj.build;
        
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
          
          const guideObj = t.jbGuideObj;
          if (guideObj) {
            if (guideObj.url) url = guideObj.url;
            if (guideObj.name) name = guideObj.name;
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
  
  var tableArr = [];
  for (var i = 0; i < 2; i++) {
    tableArr.push(
    `<table class="${tableClass[1 - i]}">
      <colgroup><col style="width: 15%"><col style="width: 15%"><col style="width: 70%"></colgroup>
      <thead><tr><th>${head.join('</th><th>')}</th></tr></thead>
      <tbody>${tableHtml[i]}</tbody>
    </table>`
    )
  }
  
  if(tableHtml[0] == tableHtml[1]) return tableArr[0];
  
  return switchButtons + betaTip + tableArr.join('')
}