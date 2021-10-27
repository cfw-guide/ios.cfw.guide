import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  
  locales: {
    '/': {
      lang: 'en-US',
      title: 'iOS Guide',
      description: 'A complete iOS modding guide, from stock to jailbroken.',
    },
  },
  
  themeConfig: {
    repo: 'cfw-guide/ios.cfw.guide',
    adTagOne: 'waldo-tag-8541',
    adTagTwo: 'waldo-tag-8542',
    locales: {
      '/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
        
        discordNoticeText: "For support in English, ask for help on the r/Jailbreak [Discord Server](https://discord.gg/jb).",
      },
    },
  },
  
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
  
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
})