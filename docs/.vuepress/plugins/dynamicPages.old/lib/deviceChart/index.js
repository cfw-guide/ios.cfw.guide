String.prototype.format = function(vars) {
    let temp = this
    for(let item in vars)
        temp = temp.replace("${" + item + "}", vars[item])
    return temp
}

// Device listing
var types = ['iPhone', 'iPad', 'iPod touch']
types = [types].concat(types.map(t => [t]));
const title = ['',' (iPhone)',' (iPad)',' (iPod)'];
const description = ['device','iPhone','iPad','iPod'];
const path = ['.html', '/select-iphone.html', '/select-ipad.html', '/select-ipod.html']

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

function getMajFw(fwStr) {
  return parseInt(fwStr.split('.')[0])
}

function getDeviceType(deviceType) {
  if (deviceType == deviceStrings.mini || deviceType == deviceStrings.Air || deviceType == deviceStrings.Pro) return deviceStrings.iPad
  return deviceType
}

function getOsStr(deviceType, fwStr) {
  deviceType = getDeviceType(deviceType)
  fwStr = getMajFw(fwStr)
  
  var ret = 'iOS'
  if (deviceType == 'iPad' && fwStr > 12) ret = 'iPadOS'
  if (fwStr == 3) ret = 'iPhone OS'
  if (fwStr < 3) ret = 'iPhone Software'
  return ret
}

module.exports = function(themeLocale, localePath, localePathPrefix) {
  let pageArr = []

  global.themeLocale = themeLocale
  global.localePath = localePath
  global.localePathPrefix = localePathPrefix

  const deviceChartStr = themeLocale.chart.deviceChart

  pageArr.push({
    path: localePathPrefix + '/get-started/select-iphone',
    frontmatter: {
      title: deviceChartStr.deviceSelection.pageTitle.format({ deviceType: 'iPhone' }),
      description: deviceChartStr.deviceSelection.description.format({ deviceType: 'iPhone' }),
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: `## ${deviceChartStr.deviceSelection.requiredReading.title}\n\n${deviceChartStr.deviceSelection.requiredReading.content.map(x => x.format({ deviceType: 'iPhone', osStr: 'iOS'})).join("\n\n")}\n\n::: tip\n${deviceChartStr.deviceSelection.iPhoneNotice}\n:::\n\n${require('./devicePage')(['iPhone'], '/get-started/', false)}`
  })
  
  pageArr.push({
    path: localePathPrefix + '/get-started/select-ipad',
    frontmatter: {
      title: deviceChartStr.deviceSelection.pageTitle.format({ deviceType: 'iPad' }),
      description: deviceChartStr.deviceSelection.description.format({ deviceType: 'iPad' }),
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: `## ${deviceChartStr.deviceSelection.toc}\n\n[[toc]]\n\n## ${deviceChartStr.deviceSelection.requiredReading.title}\n\n${deviceChartStr.deviceSelection.requiredReading.content.map(x => x.format({ deviceType: 'iPad', osStr: 'iPadOS'})).join("\n\n")}\n\n${require('./devicePage')(['iPad','iPad Air','iPad mini','iPad Pro'], '/get-started/', false)}`
  })
  
  pageArr.push({
    path: localePathPrefix + '/get-started/select-ipod',
    frontmatter: {
      title: deviceChartStr.deviceSelection.pageTitle.format({ deviceType: 'iPod' }),
      description: deviceChartStr.deviceSelection.description.format({ deviceType: 'iPod' }),
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: `## ${deviceChartStr.deviceSelection.requiredReading.title}\n\n${deviceChartStr.deviceSelection.requiredReading.content.map(x => x.format({ deviceType: 'iPod', osStr: 'iOS'})).join("\n\n")}\n\n${require('./devicePage')(['iPod touch'], '/get-started/', false)}`
  })
  
  for (const i in deviceGroups) {
    const d = deviceGroups[i];
    const url = d.name.replace(/ /g, '-');
    pageArr.push({
      path: localePathPrefix + '/get-started/' + url + '.html',
      frontmatter: {
        title: deviceChartStr.getStarted.pageTitle.format({ device: d.name }),
        description: deviceChartStr.getStarted.description.format({ device: d.name }),
        sidebar: false,
        editLink: false,
        lastUpdated: false,
        contributors: false,
      },
      content: require('./get-started')(d.devices[0], false, 1, true, true)
    })
  }

  return pageArr
}
