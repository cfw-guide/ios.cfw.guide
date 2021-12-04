const deviceList = require('../../../../json/deviceList');
const deviceGroups = require('../../../../json/deviceGroups');
var page = [];

// Main chart
page.push({
  path: '/chart.html',
  frontmatter: {
    title: 'Firmware Chart',
    description: 'iOS Jailbreak Firmware Chart',
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,
  },
  content: require('./deviceTable')('', true, -1, false, false)
})

// Device listing
var types = [['iPhone'], ['iPad','mini','Pro','Air'], ['iPod']]
types = [[...types[0],...types[1],...types[2]]].concat(types);
const title = ['',' (iPhone)',' (iPad)',' (iPod)'];
const description = ['device','iPhone','iPad','iPod'];
const path = ['.html', '/iPhone.html', '/iPad.html', '/iPod.html']

for (const i in types) {
  page.push({
    path: '/chart/device' + path[i],
    frontmatter: {
      title: 'Device Selection' + title[i],
      description: 'Find out what jailbreaks you can use on your ' + description[i],
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: require('./devicePage')(types[i])
  })
}

for (var device in deviceList) {
  // Device specific charts
  page.push({
    path: '/chart/device/' + device + '.html',
    frontmatter: {
      title: 'Firmware Chart (' + deviceList[device].name + ')',
      description: 'Compatible jailbreaks for ' + deviceList[device].name,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: require('./deviceTable')(device, false, -1, false, false)
  })
};

for (const i in deviceGroups) {
  const d = deviceGroups[i];
  const url = d.name.replace(/ /g, '-');
  page.push({
    path: '/chart/device/' + url + '.html',
    frontmatter: {
      title: 'Firmware Chart (' + d.name + ')',
      description: 'Compatible jailbreaks for ' + d.name,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: require('./deviceTable')(d.devices[0], false, 1, true, true)
  })
}

module.exports = page;