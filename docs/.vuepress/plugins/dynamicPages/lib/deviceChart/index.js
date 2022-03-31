var page = []

// Device listing
var types = ['iPhone', 'iPad', 'iPod']
types = [types].concat(types.map(t => [t]));
const title = ['',' (iPhone)',' (iPad)',' (iPod)'];
const description = ['device','iPhone','iPad','iPod'];
const path = ['.html', '/select-iphone.html', '/select-ipad.html', '/select-ipod.html']

/*for (const i in types) {
  var contentsHeader = '';
  if (types[i].length > 1) contentsHeader = '## Contents \n\n';
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
    content: contentsHeader + require('./devicePage')(types[i], '/chart/device/', true)
  })
}*/

page.push({
  path: '/get-started/select-iphone',
  frontmatter: {
    title: 'Device Selection (iPhone)',
    description: 'Find out what jailbreaks you can use on your iPhone',
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,
  },
  content: `## Required Reading
  
  Different iPhones will require different steps to jailbreak your iOS device. This page will help you find where to start.
  
  Please select what model of iPhone you have below.
  
  ::: tip
  Note that all "Plus", "Max", "Pro" and "mini" models of iPhones are functionally identical to the regular models.
  :::
  
  ${require('./devicePage')(['iPhone'], '/get-started/', false)}`
})

page.push({
  path: '/get-started/select-ipad',
  frontmatter: {
    title: 'Device Selection (iPad)',
    description: 'Find out what jailbreaks you can use on your iPad',
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,
  },
  content: `## Contents
  
  [[toc]]
  
  ## Required Reading
  
  Different iPads will require different steps to jailbreak your iOS device. This page will help you find where to start.
  
  Please select what model of iPad you have below.
  
  ${require('./devicePage')(['iPad','iPad Air','iPad mini','iPad Pro'], '/get-started/', false)}`
})

page.push({
  path: '/get-started/select-ipod',
  frontmatter: {
    title: 'Device Selection (iPod)',
    description: 'Find out what jailbreaks you can use on your iPod',
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,
  },
  content: `## Required Reading
  
  Different iPods will require different steps to jailbreak your iOS device. This page will help you find where to start.
  
  Please select what model of iPod you have below.
  
  ${require('./devicePage')(['iPod'], '/get-started/', false)}`
})

/*for (var device in deviceList) {
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
};*/

for (const i in deviceGroups) {
  const d = deviceGroups[i];
  const url = d.name.replace(/ /g, '-');
  /*page.push({
    path: '/chart/device/' + url + '.html',
    frontmatter: {
      title: 'Firmware Chart (' + d.name + ')',
      description: 'Compatible jailbreaks for ' + d.name,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: require('./deviceTable')(d.devices[0], false, -1, false, true)
  })*/
  
  page.push({
    path: '/get-started/' + url + '.html',
    frontmatter: {
      title: 'Firmware Selection (' + d.name + ')',
      description: 'Find out what jailbreaks you can use on your ' + d.name,
      sidebar: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
    },
    content: require('./get-started')(d.devices[0], false, 1, true, true)
  })
}

module.exports = page;