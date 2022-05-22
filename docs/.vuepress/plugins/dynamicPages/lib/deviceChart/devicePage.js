const deviceChartStr = themeLocale.chart.deviceChart;
function getDeviceArr(typeArr) {
  var deviceArr = [];
  for (const i in typeArr) {
    deviceArr.push([]);
    for (const d in deviceGroups) {
      if (deviceGroups[d].hideiOSCFW) continue
      else if (deviceGroups[d].type == typeArr[i]) deviceArr[i].push(deviceGroups[d])
    }
    deviceArr[i].reverse()
  }
  
  return deviceArr;
}

function getTableCount(typeArr, deviceArr) {
  var tableCount = [];
  for (const i in typeArr) {
    tableCount.push(parseInt(deviceArr[i].length / 3) + !!(deviceArr[i].length % 3))
  }
  return tableCount;
}

function getDevice(device) {
  var ret = [];
  for (var d in deviceList) {
    if (deviceList[d] == device) {
      ret.push(d);
    }
  }
  return ret;
}

function getHtml(typeArr, path, toc) {
  var html = '';
  
  if (typeArr.length > 1 && toc) html += '[[toc]]\n';
  
  var deviceArr = getDeviceArr(typeArr);
  var tableCount = getTableCount(typeArr, deviceArr);
  
  for (const i in deviceArr) {
    if (deviceArr[i].length < 1) continue;
    if (typeArr.length > 1) html += '## ' + typeArr[i] + '\n';
    
    deviceArr[i].sort(function(a,b) { return a.order - b.order })
    deviceArr[i].reverse()
    
    for (var j = 0; j < tableCount[i]; j++) {
      html += '<table><colgroup><col width="33%"><col width="33%"><col width="33%"></colgroup><thead><tr>'
      for (var k = 0; k < 3; k++) {
        const d = deviceArr[i][j*3+k];
        const p = path || devicePath;
        if (d) html += '<th><router-link to="' + localePathPrefix + p + d.name.replace(/ /g, '-') + '">' + deviceArr[i][j*3+k].name.replace('generation', 'gen') + '</router-link></th>';
        else html += '<th></th>';
      }
      html += '</tr></thead><tbody><tr>'
      for (var k = 0; k < 3; k++) {
        const d = deviceArr[i][j*3+k];
        const p = path || devicePath;
        if (d) {
          html += '<td><router-link to="' + localePathPrefix + p + d.name.replace(/ /g, '-') + '"><img src="https://img.appledb.dev/device@256/' + d.devices[0] + '/0.png" alt="' + d.name + '" loading="lazy" style="width: 50%;"></router-link></td>';
        }
        else html += '<td></td>';
      }
      html += "</tr></tbody></table>\n\n"
    }
  }
  
  return html;
}

module.exports = function(typeArr, path, toc) {
  return getHtml(typeArr, path, toc);
}
