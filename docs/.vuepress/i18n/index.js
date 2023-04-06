const config = {
	en_US: {
		path: '/',
		content: require('./en_US'),
	},
	it_IT: {
		path: '/it_IT/',
		content: require('./it_IT'),
	},
}

var localePath = {}
var locales = {}
var themeConfigLocales = {}
var searchLocales = {}

for (const i in config) localePath[i] = config[i].path
for (const i in localePath) {
  locales[localePath[i]] = config[i].content.locales,
  themeConfigLocales[localePath[i]] = config[i].content.themeConfig,
  searchLocales[localePath[i]] = { placeholder: config[i].content.search, }
}

for (const i in themeConfigLocales) {
	let sidebar = themeConfigLocales[i].sidebar
	
	let getStarted = sidebar[i].filter(x => x.text == 'iOS Guide')
	getStarted = getStarted ? getStarted[0] : false

	let guides = sidebar[i].filter(x => x.text == 'Guides')
	guides = guides ? guides[0] : false

	let troubleshooting = sidebar[i].filter(x => x.text == 'Troubleshooting')
	troubleshooting = troubleshooting ? troubleshooting[0] : false

	// Grab sidebar elements from json
	const jbList = require('../json/jailbreak')
	var jbSidebarObj = {};
	for (const i in jbList) {
		const jbObj = jbList[i];
		if (!jbObj.hasOwnProperty('info')) continue;
		if (!jbObj.info.hasOwnProperty('guide')) continue;
		for (const j in jbObj.info.guide) {
			const jb = jbObj.info.guide[j];
			if (!jb.hasOwnProperty('pkgman')) continue;
		
			var children = [];
			if (jb.hasOwnProperty('sidebarChildren')) children = jb.sidebarChildren;
			
			var link = [];
			if (jb.hasOwnProperty('url')) link = jb.url;
			
			if (jb.hasOwnProperty('updateLink')) {
				for (const upd in jb.updateLink) {
					var updText = jb.updateLink[upd];
					var updLink = jb.updateLink[upd];
					if (updText.hasOwnProperty('text')) updText = updText.text;
					if (updLink.hasOwnProperty('link')) updLink = updLink.link;
					
					jbSidebarObj[updLink] = [
						getStarted,
						{
							text: updText,
							children: [
								jb.updateLink[upd],
								link,
								...children,
								jb.pkgman ? jb.url.replace('index.html', '').replace('.html', '\/') + `using-${jb.pkgman}.html` : null
							].filter(x => x)
						},
						guides,
						troubleshooting,
					]
				}
			}
			
			var name = jbList[i].name;
			if (jb.hasOwnProperty('sidebarName')) name - jb.sidebarName;
			
			jbSidebarObj[jb.url] = [
				getStarted,
				{
					text: name,
					children: [
						link,
						...children,
						jb.pkgman ? jb.url.replace('index.html', '').replace('.html', '\/') + `using-${jb.pkgman}.html` : null
					].filter(x => x)
				},
				guides,
				troubleshooting,
			]
		}
	}
	
	for (const i in jbSidebarObj) sidebar[i] = jbSidebarObj[i]
}

module.exports = {
	localePath: localePath,
	locales: locales,
	themeConfigLocales: themeConfigLocales,
	searchLocales: searchLocales,
};
