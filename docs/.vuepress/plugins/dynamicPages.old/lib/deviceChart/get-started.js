const deviceChartStr = themeLocale.chart.deviceChart
const getStartedStr = deviceChartStr.getStarted

const deviceStrings = {
  iPhone: "iPhone",
  Base: "iPad",
  mini: "iPad mini",
  Pro: "iPad Pro",
  Air: "iPad Air",
  iPod: "iPod",
  TV: "Apple TV",
  Watch: "Apple Watch",
}

String.prototype.format = function(vars) {
    let temp = this
    for(let item in vars)
        temp = temp.replace("${" + item + "}", vars[item])
    return temp
}

function getMajFw(fwStr) {
  return parseInt(fwStr.split('.')[0])
}

function getDeviceType(deviceType) {
  if (deviceType == deviceStrings.mini || deviceType == deviceStrings.Air || deviceType == deviceStrings.Pro) return deviceStrings.iPad
  if (deviceType == deviceStrings.TV) return deviceStrings.TV
  return deviceType
}

function getOsStr(deviceType, fwStr) {
  deviceType = getDeviceType(deviceType)
  fwStr = getMajFw(fwStr)
  
  var ret = 'iOS'
  if (deviceType == 'iPad' && fwStr > 12) ret = 'iPadOS'
  if (fwStr < 4) ret = 'iPhoneOS'
  return ret
}

function getFindVersionHeader(deviceType, minFw) {
  return getStartedStr.findiOSVersion.title.format({osStr: getOsStr(deviceType, minFw)}) + "\n\n"
}

function getRequiredReading(deviceType, minFw, maxFw) {
  const ret = getStartedStr.requiredReading.content
  var r = []
  
  for (const i in ret) {
    r.push(ret[i].format({
      osStr: getOsStr(deviceType, minFw),
      minFw0: minFw,
      maxFw0: maxFw,
      minFw1: minFw,
      maxFw1: maxFw,
    }))
  }
  
  return r.join('\n\n')
}

function getFindVersion(deviceType, minFw) {
  const findVer = getStartedStr.findiOSVersion
  
  var verStr = findVer.verStr.new
  var imgUrl = findVer.image.iphone
  
  if (getDeviceType(deviceType) == 'iPad') imgUrl = findVer.image.ipad
  
  if (getMajFw(minFw) < 11) {
    verStr = findVer.verStr.old
    imgUrl = findVer.image.iphoneOld
  }
  
  if (getMajFw(minFw) < 11 && getDeviceType(deviceType) == 'iPad') imgUrl = findVer.image.ipadOld
  if (deviceType == 'Apple TV') imgUrl = null
  
  const instructionsConst = findVer.instructions;
  var instructions = [];
  for (const i in instructionsConst) instructions.push((parseInt(i) + 1) + '. ' + instructionsConst[i].format({verStr: verStr}));
  
  var ret = [...instructions]
  
  ret.push('::: tip')
  ret.push(`![${findVer.image.altText.format({deviceType: deviceType})}](${imgUrl})`)
  ret.push(':::')
  ret.push('')
  
  return ret.join('\n')
}

module.exports = function(device, showAll, maxDisplayed, simplifyTable, groupTable) {
  const tableArr = require('./getTableArr')(device, showAll, maxDisplayed, simplifyTable, groupTable)[0]
  if (!tableArr.length) return ''
  var from = tableArr[0].from
  var to = tableArr[0].to
  
  for (const i in tableArr) {
    var obj = {
      from: tableArr[i].from.split('.'),
      to: tableArr[i].to.split('.'),
    }
    
    for (const j in obj) {
      for (const k in obj[j]) obj[j][k] = parseInt(obj[j][k])
      if (obj[j].length == 2) obj[j].push(0)
    }
    
    if (obj.from[0] == obj.to[0]) {
      if (obj.from[1] == obj.to[1]) {
        if (obj.from[2] == obj.to[2]) continue
        if (obj.from[2] - obj.to[2] == -1) continue
      }
    }
    
    for (const j in obj) if (obj[j][2] == 0) obj[j].pop()
    
    from = obj.from.join('.')
    to = obj.to.join('.')
    
    break
  }
  
  const retArr = [
    {
      title: getStartedStr.requiredReading.title,
      content: getRequiredReading(deviceList[device].type, from, to),
    },
    {
      title: deviceChartStr.table.title,
      content: require('./getTable')(device, showAll, maxDisplayed, simplifyTable, groupTable),
    },
    {
      title: getFindVersionHeader(deviceList[device].type, from),
      content: getFindVersion(deviceList[device].type, from),
    },
  ]
  
  var ret = ''
  
  for (const i in retArr) if (retArr[i].content.length > 1) ret += `\n\n## ${retArr[i].title} \n${retArr[i].content}`
  
  return ret
}