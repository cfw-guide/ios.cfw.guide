<script setup lang="ts">
import PageMeta from '@theme/PageMeta.vue'
import PageNav from '@theme/PageNav.vue'

import { usePageData, usePageFrontmatter } from '@vuepress/client'
import type { DefaultThemePageFrontmatter } from '@vuepress/theme-default/lib/shared'
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()

const pageTitle = frontmatter.value.title
const chartType = frontmatter.value.chartType || ''
const widePage = frontmatter.value.widePage || false

import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
const adUnits = useThemeLocaleData().value.adUnits
</script>

<template>
  <main class="page">
    <div :class="widePage ? 'home' : 'theme-default-content'">
      <slot name="top" />

      <div v-if="adUnits && adUnits.length > 0" :id="`waldo-tag-${adUnits[0]}`" style="margin-bottom: 1em;"></div>

      <Content v-if="!chartType" />
      <template v-else>
        <firmwareVersionLookup v-if="chartType == 'firmwareVersionLookup'"/>
        <firmwareVersion v-if="chartType == 'firmwareVersion'"/>
        <jailbreak v-else-if="chartType == 'jailbreak'"/>
        <device v-else-if="chartType == 'device'"/>
        <deviceList v-else-if="chartType == 'deviceList'"/>
        <aaronsSpecialDeviceList v-else-if="chartType == 'aaronsSpecialDeviceList'"/>
        <deviceGroupList v-else-if="chartType == 'deviceGroupList'"/>
        <deviceGroup v-else-if="chartType == 'deviceGroup'"/>
      </template>

      <div v-if="adUnits && adUnits.length > 1" :id="`waldo-tag-${adUnits[1]}`"></div>

      <slot name="bottom" />
    </div>

    <PageMeta />

    <PageNav />
  </main>
</template>
