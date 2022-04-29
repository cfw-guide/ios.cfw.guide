const { localePath, locales, themeConfigLocales, searchLocales } = require("./i18n")
const container = require('markdown-it-container')
const path = require("path")
const fs = require("fs")

const adArr = [
  { slot: '/22046652915/ios-0', size: [[728, 90], [320, 50]], id: 'div-gpt-ad-1649072738332-0' },
  { slot: '/22046652915/ios-1', size: [[728, 90], [320, 50]], id: 'div-gpt-ad-1649072779561-0' }
]

module.exports = {
  locales: locales,
  
  themeConfig: {
    repo: 'cfw-guide/ios.cfw.guide',
    adArr: adArr,
    selectLanguageText: '<i class="fas fa-globe"/>',
    logo: '/assets/images/logo.png',
    logoDark: '/assets/images/logo_dark.png',
    locales: themeConfigLocales,
  },

	plugins: [
		[
			"@vuepress/plugin-search", {
				locales: searchLocales,
			}
		],
    require('./plugins/dynamicPages/lib/')(themeConfigLocales, localePath),
    require('./plugins/redirectPlugin/lib/')
	],
  
  head: [
    [ 'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
    ['script', {src: 'https://cdn.thisiswaldo.com/static/js/8531.js'}],
    ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=UA-152619365-1'}],
    ['script', {src: '/assets/js/analytics.js'}],
    ['script', {src: '/assets/js/if_jailbreaksapp_signed.js'}],
    ['script', {src: '/assets/js/show_if_windows.js'}],
    ['script', {src: '/assets/js/hide.js'}],
    require('./plugins/createAdScript/lib/')(adArr)
  ],

  theme: path.resolve(__dirname, './vuepress-theme'),
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-include'))

    md.use(container, "tabs", {
      render: (tokens, idx) => {
        const token = tokens[idx];
        if (token.nesting === 1) {
          return `<Tabs ${token.info}>\n`;
        } else {
          return `</Tabs>\n`;
        }
      }
    });
  
    md.use(container, 'tab', {
      render: (tokens, idx) => {
        const token = tokens[idx];
        if (token.nesting === 1) {
          return `<Tab ${token.info}>\n`;
        } else {
          return `</Tab>\n`;
        }
      }
    });
  },
  
  bundler: '@vuepress/bundler-vite',
  bundlerConfig: {
    build: {
      chunkSizeWarningLimit:1500,
      rollupOptions: {
        output:{
          manualChunks(id) {
            if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  },

	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
}
