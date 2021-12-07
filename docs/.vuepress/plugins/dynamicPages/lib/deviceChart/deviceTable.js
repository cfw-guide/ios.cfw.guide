const deviceChartStr = themeLocale.chart.deviceChart;

function getDeviceInfo(device, groupTable) {
  if (!device || !deviceList.hasOwnProperty(device)) return ''
  
  var infoArr = [
    'name',
    'identifier',
    'soc',
    'arch',
    'model',
    //'released',
    //'discontinued',
  ]
  
  var dev = deviceList[device]
  dev.identifier = device
  
  var infoObj = {}
  
  for (const i in infoArr) if (dev[infoArr[i]]) infoObj[infoArr[i]] = dev[infoArr[i]]
  
  var devGroup = deviceGroups.filter(function(x) { return x.devices.includes(device) })
  if (devGroup.length == 1) devGroup = devGroup[0]
  
  if (groupTable && devGroup) {
    infoObj.name = devGroup.name
    infoObj.identifier = devGroup.devices
    
    if (infoObj.model) {
      for (const dev in devGroup.devices) infoObj.model = infoObj.model.concat(deviceList[devGroup.devices[dev]].model)
      infoObj.model = infoObj.model.filter(function(elem, index, self) { return index === self.indexOf(elem); })
    }
  }
  
  if (infoObj.identifier) {
    if (!Array.isArray(infoObj.identifier)) infoObj.identifier = [infoObj.identifier]
    if (infoObj.identifier.length <= 5) infoObj.identifier = infoObj.identifier.join(', ')
    else {
      var tempArr = infoObj.identifier
      const firstThreeDevices = tempArr.slice(0, 3).join(', ')
      const restOfTheDevices = tempArr.slice(3).join(', ')
      infoObj.identifier = `${firstThreeDevices}, <a id="clickToShowDevices" title="Show more" onclick="getElementById('extraDevices').style.display = 'inline'; getElementById('clickToShowDevices').style.display = 'none';" style="cursor: pointer;">...</a><div id="extraDevices" style="display: none;">${restOfTheDevices}</div>`
    }
  }
  
  
  if (infoObj.model) {
    if (!Array.isArray(infoObj.model)) infoObj.model = [infoObj.model]
    if (infoObj.model.length <= 5) infoObj.model = infoObj.model.join(', ')
    else {
      var tempArr = infoObj.model
      const firstThreeModels = tempArr.slice(0, 3).join(', ')
      const restOfTheModels = tempArr.slice(3).join(', ')
      infoObj.model = `${firstThreeModels}, <a id="clickToShowModels" title="Show more" onclick="getElementById('extraModels').style.display = 'inline'; getElementById('clickToShowModels').style.display = 'none';" style="cursor: pointer;">...</a><div id="extraModels" style="display: none;">${restOfTheModels}</div>`
    }
  }
  
  var infoHtmlArr = []
  for (const i in infoObj) infoHtmlArr.push(deviceChartStr.info[i] + ' ' + infoObj[i])
  
  return `<p>${infoHtmlArr.join('<br>')}</p> \n\n`
}

function getRelatedDevices(d, groupTable) {
  var html = ''
  if (!d || !deviceList.hasOwnProperty(d)) return html
  
  let devArr
  
  for (const i in deviceGroups) {
    if (!deviceGroups[i].hasOwnProperty('devices')) continue
    if (deviceGroups[i].devices.length < 2) continue
    if (deviceGroups[i].devices.includes(d)) devArr = deviceGroups[i].devices
  }
  
  if (devArr == null) return html
  
  if (!groupTable) devArr = devArr.filter(function(device) { return device != d } )
  
  html += '<ul>'
  for (const i in devArr) html += `<li><router-link to="${devicePath}${devArr[i]}">${deviceList[devArr[i]].name}</router-link></li>`
  html += "</ul>\n\n"
  
  return html
}

module.exports = function(device, showAll, maxDisplayed, simplifyTable, groupTable) {
  const retArr = [
    {
      title: deviceChartStr.info.title,
      content: getDeviceInfo(device, groupTable),
    },
    {
      title: (groupTable) ? deviceChartStr.grouped.title : deviceChartStr.related.title,
      content: getRelatedDevices(device, groupTable),
    },
    {
      title: deviceChartStr.table.title,
      content: require('./getTable')(device, showAll, maxDisplayed, simplifyTable, groupTable),
    },
  ]
  
  var ret = ''
  
  for (const i in retArr) if (retArr[i].content.length > 1) ret += `## ${retArr[i].title} \n${retArr[i].content}`
  
  return ret
}