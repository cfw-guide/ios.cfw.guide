const iosList = require('../../../../json/ios');
const deviceList = require('../../../../json/deviceList');
const deviceGroups = require('../../../../json/deviceGroups');
const jbList = require('../../../../json/jailbreak');

const jbPath = '/chart/jailbreak/'
const fwPath = '/chart/firmware/'
const devicePath = '/chart/device/'
const betaDevicePath = '/chart/beta/device'

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
  var deviceGroup = [];
  var deviceGroupDevArr = [device];

  if (groupTable && !showAll) {
    deviceGroup = deviceGroups.filter(function(x) { return x.devices.includes(device)});
    for (const i in deviceGroup) for (const j in deviceGroup[i].devices)
      deviceGroupDevArr.push(deviceGroup[i].devices[j]);
  }
  
  var buildArr = [[], []];
  
  for (const i in iosList) {
    if (!iosList[i].hasOwnProperty('beta')) continue;
    if (!iosList[i].hasOwnProperty('devices')) continue;
    
    const devList = getDeviceListFromBuild(iosList[i]);
    
    if (!showAll) {
      if (groupTable && deviceGroup.length) {
        if (!devList.some(r => deviceGroupDevArr.includes(r))) continue;
      }
      else if (!devList.includes(device)) continue;
    }
    
    if (iosList[i].beta) buildArr[1].push(iosList[i]);
    else for (const j in buildArr) buildArr[j].push(iosList[i])
  }
  
  var retArr = [];
  
  for (const i in buildArr) {
    buildArr[i].reverse();
    var jbObjArr = [];
    
    for (const b in buildArr[i]) {
      var getJb = getJailbreaks(buildArr[i][b].build, device, showAll);
      
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
  
    if (!simplifyTable) retArr.push(jbObjArr);
    else {
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
      
      retArr.push(simpleJbObjArr);
    }
  }
  
  return retArr;
};