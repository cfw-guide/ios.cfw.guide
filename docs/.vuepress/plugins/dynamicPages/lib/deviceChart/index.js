const deviceList = require('../../../../json/deviceList');
var page = [];

page.push({
  path: '/chart.html',
  frontmatter: {
    title: 'Firmware Chart',
    description: 'iOS Jailbreak Firmware Chart',
    sidebar: false
  },
  content: require('./content')('', true)
})

page.push({
  path: '/chart/beta.html',
  frontmatter: {
    title: 'Beta Firmware Chart',
    description: 'iOS Jailbreak Beta Firmware Chart',
    sidebar: false
  },
  content: require('./content')('', true, true)
})

for (var device in deviceList) {
  page.push({
    path: '/chart/device/' + device + '.html',
    frontmatter: {
      title: 'Firmware Chart (' + deviceList[device].name + ')',
      description: 'Compatible jailbreaks for ' + deviceList[device].name,
      sidebar: false
    },
    content: require('./content')(device, false, false)
  })
  
  page.push({
    path: '/chart/beta/device/' + device + '.html',
    frontmatter: {
      title: 'Beta Firmware Chart (' + deviceList[device].name + ')',
      description: 'Compatible jailbreaks for ' + deviceList[device].name,
      sidebar: false
    },
    content: require('./content')(device, false, true)
  })
};

module.exports = page;