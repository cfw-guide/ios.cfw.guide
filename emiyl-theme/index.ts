import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options),
    alias: {
      '@theme/AutoLink.vue': path.resolve(__dirname, './components/AutoLink.vue'),
      '@theme/Home.vue': path.resolve(__dirname, './components/Home.vue'),
      '@theme/HomeHero.vue': path.resolve(__dirname, './components/HomeHero.vue'),
      '@theme/NavbarDropdown.vue': path.resolve(__dirname, './components/NavbarDropdown.vue'),
      '@theme/Page.vue': path.resolve(__dirname, './components/Page.vue'),
      '@theme/PageMeta.vue': path.resolve(__dirname, './components/PageMeta.vue'),
      '@theme/ToggleColorModeButton.vue': path.resolve(__dirname, './components/ToggleColorModeButton.vue')
    },
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      404: path.resolve(__dirname, 'layouts/404.vue')
    },
  }
}