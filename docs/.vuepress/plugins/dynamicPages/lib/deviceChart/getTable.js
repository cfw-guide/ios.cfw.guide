const deviceChartStr = themeLocale.chart.deviceChart;

String.prototype.format = function(vars) {
    let temp = this;
    for(let item in vars)
        temp = temp.replace("${" + item + "}", vars[item]);
    return temp;
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
  if ((!device || !deviceList.hasOwnProperty(device)) && !showAll) return;
  
  var deviceGroup = [];
  var deviceGroupDevArr = [device];

  if (groupTable && !showAll) {
    deviceGroup = deviceGroups.filter(function(x) { return x.devices.includes(device)});
    for (const i in deviceGroup) for (const j in deviceGroup[i].devices)
      deviceGroupDevArr.push(deviceGroup[i].devices[j]);
  }
  
  var tableHtml = [];
  var buildArr = [[], []];
  
  for (const i in iosList) {
    if (!iosList[i].hasOwnProperty('beta')) continue;
    if (!iosList[i].hasOwnProperty('deviceMap')) continue;
    
    const devList = iosList[i].deviceMap;
    
    if (!showAll) {
      if (groupTable && deviceGroup.length) {
        if (!devList.some(r => deviceGroupDevArr.includes(r))) continue;
      }
      else if (!devList.includes(device)) continue;
    }
    
    if (iosList[i].beta) buildArr[1].push(iosList[i]);
    else for (const j in buildArr) buildArr[j].push(iosList[i])
  }
  
  var tableArr = require('./getTableArr')(device, showAll, maxDisplayed, simplifyTable, groupTable);
  if (tableArr[0].length < 1 && tableArr[1].length < 1) return '';
  
  for (const i in buildArr) {
    var jbObjArr = tableArr[i]
    
    var html = '';
    if (simplifyTable) {
      for (const i in jbObjArr) {
        var t = jbObjArr[i];
        html += `<tr>`;
        html += `<td>${t.from}</td>`;
        html += `<td>${t.to}</td>`;
        
        const finalJbHtml = t.jbArr.map(function(x) {
          var url = appledbPath + '/jailbreak/' + x.name + '.html';
          var name = x.name;
          
          const guideObj = t.jbGuideObj;
          if (guideObj) {
            if (guideObj.url) url = guideObj.url;
            if (guideObj.name) name = guideObj.name;
          }
          
          if (url.includes(appledbPath)) return `<a href="${url}" target="_blank">${name}</a>`
          else return `<router-link to="${localePathPrefix + url}">${name}</router-link>`
        }).join(', ');
        
        html += `<td>${(finalJbHtml.length > 0) ? finalJbHtml : 'N/A'}</td>`;
        
        html += '</tr>';
      }
    } else {
      for (const i in jbObjArr) {
        var t = jbObjArr[i];
        const finalJbHtml = t.jbArr.map(function(x) { return `<router-link to="${jbPath}${x.name}.html">${x.name}</router-link>` }).join(', ');
        html += `<tr>`;
        html += `<td><router-link to="${t.buildURL}">${t.build}</router-link></td>`;
        html += `<td>${t.version}</td>`;
        html += `<td>${(finalJbHtml.length > 0) ? finalJbHtml : 'N/A'}</td>`;
        html += '</tr>';
      }
    }
    tableHtml.push(html);
  }
  
  const tableClass = ['tableBetaClass', 'tableMainClass'];
  const noJbTip = tableHtml[0].includes('N/A') ? `<div class="custom-container tip"><p>${deviceChartStr.table.noJbTip}</p></div>` : ''
  const betaTip = `<div class="custom-container tip ${tableClass[0]}"><p>${deviceChartStr.table.betaTip.format({extLinkSvg: extLinkSvg})}</p></div>`
  var showMore = ''
  if (simplifyTable) showMore = `<a href="${appledbPath}/device/${deviceGroup[0].name.replace(/ /g, '-')}.html" target="_blank">Show more</a>`

  var switchButtons = "<p class=\"tableMainClass\"><a style=\"cursor:pointer;\" onclick=\"const style = document.createElement('style'); style.innerHTML = `.tableBetaClass { display: table; } .tableMainClass { display: none }`; document.head.appendChild(style)\">" + deviceChartStr.table.showBetaVersions + "</a></p><p class=\"tableBetaClass\"><a style=\"cursor:pointer;\" onclick=\"const style = document.createElement('style'); style.innerHTML = `.tableBetaClass { display: none; } .tableMainClass { display: table }`; document.head.appendChild(style)\">" + deviceChartStr.table.hideBetaVersions + "</a></p>"
  var head = deviceChartStr.table.tableHeader;
  if (simplifyTable) head = deviceChartStr.table.simpleTableHeader;
  
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
  
  /*if(tableHtml[0] == tableHtml[1])*/ return noJbTip + tableArr[0] + showMore
  
  return switchButtons + betaTip + noJbTip + tableArr.join('') + showMore
}
