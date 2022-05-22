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
    for (var i in deviceGroup) for (var j in deviceGroup[i].devices)
      deviceGroupDevArr.push(deviceGroup[i].devices[j]);
  }
  
  var buildArr = [[], []];
  
  for (var i in iosList) {
    if (!iosList[i].hasOwnProperty('beta')) continue;
    if (!iosList[i].hasOwnProperty('deviceMap')) continue;
    
    const devList = iosList[i].deviceMap
    
    if (!showAll) {
      if (groupTable && deviceGroup.length) {
        if (!devList.some(r => deviceGroupDevArr.includes(r))) continue;
      }
      else if (!devList.includes(device)) continue;
    }
    
    if (iosList[i].beta) buildArr[1].push(iosList[i]);
    else for (var j in buildArr) buildArr[j].push(iosList[i])
  }
  
  var retArr = [];
  
  for (var i in buildArr) {
    buildArr[i].reverse();
    var jbObjArr = [];
    
    for (var b in buildArr[i]) {
      var getJb = getJailbreaks(buildArr[i][b].uniqueBuild, device, showAll)
      
      if (groupTable && Array.isArray(deviceGroup) && deviceGroup.length == 1) {
        for (var dev in deviceGroup[0].devices) {
          getJb = getJb.concat(getJailbreaks(buildArr[i][b].uniqueBuild, deviceGroup[0].devices[dev], showAll));
        }
        getJb = getJb.filter(function(elem, index, self) { return index === self.indexOf(elem); })
      }
      
      var jbArr = getJb
      
      if (maxDisplayed > -1) {
        jbArr = jbArr.map(function(jb) { if (!jb.hasOwnProperty('priority')) jb.priority = 4294967296; return jb })
        jbArr = jbArr.sort(function(x,y) {
          var xp = x.priority
          var yp = y.priority

          var compatList = x.compatibility.filter(c => c.hasOwnProperty('priority')).filter(c => c.firmwares.includes(buildArr[i][b].uniqueBuild)).filter(c => c.devices.includes(device))[0]
          if (compatList) xp = compatList.priority

          compatList = y.compatibility.filter(c => c.hasOwnProperty('priority')).filter(c => c.firmwares.includes(buildArr[i][b].uniqueBuild)).filter(c => c.devices.includes(device))[0]
          if (compatList) yp = compatList.priority

          return xp - yp
        })
        jbArr = jbArr.slice(0, maxDisplayed)
      }
      
      var jbGuideObj = {name: '', url: ''}
      
      if (simplifyTable) {
        jbGuideObj = {};
        for (var j in jbArr) {
          if (!jbArr[j].hasOwnProperty('info')) continue;
          if (!jbArr[j].info.hasOwnProperty('guide')) continue;
          
          const guide = jbArr[j].info.guide;
          var ret = guide[0];
          
          for (var a in guide) {
            if (!guide[a].hasOwnProperty('devices') && !guide[a].hasOwnProperty('firmwares')) continue;
            if (
              guide[a].devices.some(r => deviceGroupDevArr.includes(r)) &&
              (!guide[a].firmwares || guide[a].firmwares.includes(buildArr[i][b].uniqueBuild))
            ) {
              ret = guide[a];
              break;
            }
          }
          
          jbGuideObj = ret;
        }
      }
      
      jbObjArr.push({
        build: buildArr[i][b].build,
        buildURL: fwPath + buildArr[i][b].uniqueBuild,
        version: buildArr[i][b].version.replace('6-enterprise', '6-e'),
        jbArr: jbArr,
        jbGuideObj: jbGuideObj,
      })
    }
  
    if (!simplifyTable) retArr.push(jbObjArr)
    else {
      var simpleJbObjArr = []
      for (var i in jbObjArr) {
        const obj = jbObjArr[i]
        var oldObj = simpleJbObjArr[simpleJbObjArr.length - 1]
        
        if ((i == 0) || (JSON.stringify(obj.jbArr) != JSON.stringify(oldObj.jbArr) || (JSON.stringify(obj.jbGuideObj) != JSON.stringify(oldObj.jbGuideObj)))) {
          simpleJbObjArr.push({
            fromBuild: obj.build,
            from: obj.version,
            toBuild: obj.build,
            to: obj.version,
            jbArr: obj.jbArr,
            jbGuideObj: obj.jbGuideObj,
          })
          continue
        }
        
        oldObj.from = obj.version
        oldObj.fromBuild = obj.build
        
        simpleJbObjArr[simpleJbObjArr.length - 1] = oldObj
      }
      
      retArr.push(simpleJbObjArr)
    }
  }
  
  return retArr
};