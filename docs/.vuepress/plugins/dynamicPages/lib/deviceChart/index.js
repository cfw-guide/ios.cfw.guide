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
  content: require('./content')('', true, -1, false, false)
})

// Device listing
page.push({
  path: '/chart/device.html',
  frontmatter: {
    title: 'Device Chart',
    description: 'iOS Jailbreak Device Chart',
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,
  },
  content: require('./devicePage')
})

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
    content: require('./content')(device, false, -1, false, false)
  })
};

for (const i in deviceGroups) {
  const d = deviceGroups[i];
  const url = d.name.replace(' ', '-');
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
    content: require('./content')(d.devices[0], false, 1, true, true)
  })
}

module.exports = page;