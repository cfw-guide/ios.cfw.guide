const deviceList = require('../../../../json/deviceList');
var page = [];

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
  content: require('./content')('', true)
})

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
  page.push({
    path: '/chart/device/' + device + '.html',
    frontmatter: {
      title: 'Firmware Chart (' + deviceList[device].name + ')',
      description: 'Compatible jailbreaks for ' + deviceList[device].name,
      //redirect_from: '/' + device,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: require('./content')(device, false)
  })
};

module.exports = page;