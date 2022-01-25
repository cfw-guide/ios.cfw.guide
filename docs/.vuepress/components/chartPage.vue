<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <h1>{{ pageTitle }}</h1>
      <div class="custom-container tip" v-if="discordNoticeText" v-html="discordNoticeText"/>
      
      <div v-if="adTagOne && adsBool" style="text-align: center;">
          <div :id="adTagOne"></div>
      </div>
      
      <firmwareVersion v-if="chartType == 'firmware'"/>
      <jailbreak v-if="chartType == 'jailbreak'"/>
      <device v-if="chartType == 'device'"/>
      
      <div v-if="adTagTwo && adsBool" style="text-align: center;">
          <div :id="adTagTwo"></div>
      </div>
    </div>

    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
import {
  usePageFrontmatter,
  useSiteLocaleData,
} from '@vuepress/client'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../vuepress-theme/lib/shared'
const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
import { useThemeLocaleData } from '../vuepress-theme/lib/client/composables'

import firmwareVersion from './firmwareVersion.vue'
import jailbreak from './jailbreak.vue'
import device from './device.vue'

const themeLocale = useThemeLocaleData()

const chartType = computed(() => { return frontmatter.value.chartType })

const discordNoticeText = computed(() => {
  var discordNoticeText = frontmatter.value.discordNoticeText || themeLocale.value.discordNoticeText
  if (discordNoticeText === null) {
    return null
  }
  
  return '<p>' + discordNoticeText + '</p>'
})

const adTagOne = computed(() => {
  var adTagOne = themeLocale.value.adTagOne
  if (adTagOne === null) {
    return null
  }
  
  return adTagOne
})

const adTagTwo = computed(() => {
  var adTagTwo = themeLocale.value.adTagTwo
  if (adTagTwo === null) {
    return null
  }
  
  return adTagTwo
})

const adsBool = computed(() => {
  if (frontmatter.value.ads == null) {
    return true
  }
  
  return frontmatter.value.ads
})

const pageTitle = computed(() => {
  if (frontmatter.value.title === null) {
    return null
  }
  return frontmatter.value.title
})
</script>
