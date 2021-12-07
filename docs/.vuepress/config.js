const config = require("./configs");
const path = require("path");
const fs = require("fs");

const mainObj = { ios: require('./json/ios'), jailbreak: require('./json/jailbreak'), device: require('./json/deviceList') }

const localePath = {
  en_US: '/',
}

const locales = {
  [localePath.en_US]: config.en_US.locales
}

const themeConfigLocales = {
  [localePath.en_US]: config.en_US.themeConfig
}

const searchLocales = {
  [localePath.en_US]: { placeholder: config.en_US.search }
}

module.exports = {
  locales: locales,
  
  themeConfig: {
    repo: 'cfw-guide/ios.cfw.guide',
    adTagOne: 'waldo-tag-8541',
    adTagTwo: 'waldo-tag-8542',
    selectLanguageText: '<i class="fas fa-globe"/>',
    locales: themeConfigLocales,
  },

	plugins: [
		[
			"@vuepress/plugin-search", {
				locales: searchLocales,
			}
		],
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(__dirname, './components')
			}
		],
    require('./plugins/dynamicPages/lib/')(themeConfigLocales, localePath),
    require('./plugins/redirectPlugin/lib/'),
	],
  
  head: [
    [ 'link', { rel: 'apple-touch-icon', sizes: "180x180", href: '/assets/favicon/apple-touch-icon.png' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/assets/favicon/favicon-16x16.png' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/assets/favicon/favicon-32x32.png' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/favicon/android-chrome-192x192.png' } ],
    [ 'link', { rel: 'icon', type: 'image/png', sizes: "194x194", href: '/assets/favicon/favicon-194x194.png' } ],
    [ 'link', { rel: 'mask-icon', color: '#2E3440', href: '/assets/favicon/safari-pinned-tab.svg' } ],
    [ 'link', { rel: 'shortcut icon', href: '/assets/favicon/favicon.ico' } ],
    [ 'meta', { name: 'msapplication-TileColor', content: '#2E3440' } ],
    [ 'meta', { name: 'msapplication-TileImage', content: '/assets/favicon/mstile-144x144.png' } ],
    [ 'meta', { name: 'msapplication-config', content: '/assets/favicon/browserconfig.xml' } ],
    [ 'meta', { name: 'theme-color', content: '#2E3440' } ],
    [ 'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
    ['script', {src: 'https://cdn.thisiswaldo.com/static/js/8531.js'}],
    ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=UA-152619365-1'}],
    ['script', {src: '/assets/js/analytics.js'}],
    ['script', {src: '/assets/js/if_jailbreaksapp_signed.js'}],
    ['script', {src: '/assets/js/show_if_windows.js'}],
    ['script', {src: '/assets/js/hide.js'}],
  ],

  theme: path.resolve(__dirname, './vuepress-theme'),
  extendsMarkdown: (md) => {
      md.use(require('markdown-it-include'))
  },
  
  onPrepared(app) {
    fs.writeFile('./docs/.vuepress/public/main.json', JSON.stringify(mainObj), function (err) {
      if (err) throw err;
    });
    fs.writeFile('./docs/.vuepress/public/pages.json', JSON.stringify(app.pages), function (err) {
      if (err) throw err;
    });
  },
  
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
};