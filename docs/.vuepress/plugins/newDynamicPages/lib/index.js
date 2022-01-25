const { createPage } = require('@vuepress/core')

const { path } = require('@vuepress/utils')

global.iosList = require('../../../json/ios');
global.deviceList = require('../../../json/deviceList');
global.deviceGroups = require('../../../json/deviceGroups');
global.jbList = require('../../../json/jailbreak');
global.bigJson = {
  ios: iosList,
  jailbreak: jbList,
  device: deviceList,
  groups: deviceGroups,
}

global.jbPath = '/chart/jailbreak/'
global.fwPath = '/chart/firmware/'
global.devicePath = '/chart/device/'

global.extLinkSvg = '<svg class="icon outbound" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>'

function getOsStr(v) {
  var ver = v.version;
  var majFw = parseInt(ver.split('.')[0]);
  
  if (!v.hasOwnProperty('devices')) return 'iOS'
  
  var devArr = Object.entries(v.devices).map(function(x) { return x[0] });
  
  var hasiPhone = devArr.filter(function(x) { return x.startsWith('iPhone') }).length > 0
  var hasiPad = devArr.filter(function(x) { return x.startsWith('iPad') }).length > 0
  var hasiPod = devArr.filter(function(x) { return x.startsWith('iPod') }).length > 0
  var hasTV = devArr.filter(function(x) { return x.startsWith('AppleTV') }).length > 0
  
  if (hasTV) {
    if (majFw < 9) return 'Apple TV Software';
    else return 'tvOS'
  }
  if (hasiPad && !hasiPhone && !hasiPod && majFw > 12) return 'iPadOS';
  if (majFw < 4) return 'iPhoneOS';
  return 'iOS';
}

var pageList = [];

for (var i in iosList) {
  pageList.push({
    path: `${fwPath}${iosList[i].build}.html`,
    frontmatter: {
      title: `${getOsStr(iosList[i])} ${iosList[i].version} (${iosList[i].build})`,
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
  pageList.push({
    path: `${jbPath}${jbList[jb].name.replace(/ /g, '-')}.html`,
    frontmatter: {
      title: jbList[jb].name,
      description: `Compatible firmwares for ${jbList[jb].name}`,
      layout: 'chartLayout',
      chartType: 'jailbreak',
      jailbreak: jbList[jb],
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
      device: deviceList[d],
      group: null,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false
    }
  })
}

module.exports = function() {
  return {
    name: 'vuepress-new-dynamic-pages',
    async onInitialized(app) {
      for (const p in pageList) app.pages.push(await createPage(app, pageList[p]))
    },
    onPrepared: async (app) => {
      await app.writeTemp('main.js', `export default ${JSON.stringify(bigJson)}`)
    },
  }
}