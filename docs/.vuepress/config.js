const { localePath, locales, themeConfigLocales, searchLocales } = require("./i18n")
const container = require('markdown-it-container')
const { path, fs } = require('@vuepress/utils')
const { searchPlugin } = require('@vuepress/plugin-search')
const { localTheme } = require('./theme')

module.exports = {
  locales: locales,
  
  theme: localTheme({
    repo: 'cfw-guide/ios.cfw.guide',
    selectLanguageText: '<i class="fas fa-globe"/>',
    logo: '/assets/images/logo.png',
    logoDark: '/assets/images/logo_dark.png',
    locales: themeConfigLocales,
  }),

	plugins: [
    searchPlugin({locales: searchLocales}),
    require('./plugins/dynamicPages/lib/')(themeConfigLocales, localePath),
    require('./plugins/redirectPlugin/lib/')
	],
  
  head: [
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
    ['script', {src: 'https://cdn.thisiswaldo.com/static/js/8531.js'}],
    ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=UA-152619365-1'}],
    ['script', {src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js'}],
		['script', {}, `
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag.defineSlot('/22046652915/ios-0', [[728, 90], [320, 50]], 'div-gpt-ad-1651592248700-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
    ` ],
		['script', {}, `
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag.defineSlot('/22046652915/ios-1', [[320, 50], [728, 90]], 'div-gpt-ad-1651592405578-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
    ` ],
    ['script', {src: '/assets/js/analytics.js'}],
    ['script', {src: '/assets/js/if_jailbreaksapp_signed.js'}],
    ['script', {src: '/assets/js/show_if_windows.js'}],
    ['script', {src: '/assets/js/hide.js'}]
  ],

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
}
