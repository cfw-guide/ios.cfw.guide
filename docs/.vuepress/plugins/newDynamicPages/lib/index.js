const { createPage } = require('@vuepress/core')
const { path } = require('@vuepress/utils')

var iosList = require('../../../json/ios');
var deviceList = require('../../../json/deviceList');
var deviceGroups = require('../../../json/deviceGroups');
var jbList = require('../../../json/jailbreak');
var bigJson = {
  ios: iosList,
  jailbreak: jbList,
  device: deviceList,
  groups: deviceGroups,
}

var jbPath = '/chart/jailbreak/'
var fwPath = '/chart/firmware/'
var devicePath = '/chart/device/'

var pageList = []

for (var i in iosList) {
  pageList.push({
    path: `${fwPath}${iosList[i].uniqueBuild}.html`,
    frontmatter: {
      title: `${iosList[i].osStr} ${iosList[i].version} (${iosList[i].build})`,
      description: `Compatible jailbreaks for firmware version ${iosList[i].version}`,
      layout: 'chartLayout',
      chartType: 'firmware',
      build: iosList[i],
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    }
  })
}

for (var jb in jbList) {
  var redirects = []
  if (jbList[jb].hasOwnProperty('alias')) {
    redirects = jb.alias
    if (!Array.isArray(redirects)) redirects = [redirects]
    redirects = redirects.map(x=> jbPath + x)
  }

  pageList.push({
    path: `${jbPath}${jbList[jb].name.replace(/ /g, '-')}.html`,
    frontmatter: {
      title: jbList[jb].name,
      description: `Compatible firmwares for ${jbList[jb].name}`,
      layout: 'chartLayout',
      chartType: 'jailbreak',
      jailbreak: jbList[jb],
      redirect_from: redirects,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    }
  })
}

for (var d in deviceList) {
  pageList.push({
    path: `${devicePath}${d}.html`,
    frontmatter: {
      title: `Firmware Chart (${deviceList[d].name})`,
      description: `Find out what jailbreaks you can use on your ${deviceList[d].name}`,
      layout: 'chartLayout',
      chartType: 'device',
      device: [d],
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false
    }
  })
}

for (var g in deviceGroups) {
  pageList.push({
    path: `${devicePath}${deviceGroups[g].name.replace(/ /g,'-')}.html`,
    frontmatter: {
      title: `Firmware Chart (${deviceGroups[g].name})`,
      description: `Find out what jailbreaks you can use on your ${deviceGroups[g].name}`,
      layout: 'chartLayout',
      chartType: 'device',
      device: deviceGroups[g].devices,
      name: deviceGroups[g].name,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false
    }
  })
}

pageList.push({
  path: '/chart.html',
  frontmatter: {
    title: 'Firmware Chart',
    description: 'iOS Jailbreak Firmware Chart',
    layout: 'chartLayout',
    chartType: 'device',
    device: Object.keys(deviceList),
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,
  }
})

module.exports = function() {
  return {
    name: 'vuepress-new-dynamic-pages',
    async onInitialized(app) {
      for (const p in pageList) app.pages.push(await createPage(app, pageList[p]))
    },
    onPrepared: async (app) => {
      await app.writeTemp('main.js', `export default ${JSON.stringify(bigJson)}`)
    }
  }
}