<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { computed } from 'vue'

import { usePageFrontmatter } from '@vuepress/client'
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/lib/client'
import MarkdownIt from 'markdown-it'
const frontmatter = usePageFrontmatter()
const themeLocaleData = useThemeLocaleData()

const pageTitle = computed(() => {
    if (!frontmatter.value.title) return null
    return frontmatter.value.title || 'Title'
})

const discordNoticeText = computed(() => {
    if (!themeLocaleData.value.discordNoticeText) return null
    const ret = new MarkdownIt().render(themeLocaleData.value.discordNoticeText)
    return ret
})
</script>

<template>
  <ParentLayout>
    <template #page-top>
        <div class="theme-default-content" style="padding: 0;">
            <h1>{{ pageTitle }}</h1>
            <div v-if="discordNoticeText" class="custom-container tip"><p v-html="discordNoticeText"/></div>
            <div id='div-gpt-ad-1651592248700-0' style='min-width: 320px; min-height: 50px;' v-html="`<script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1651592248700-0'); });</script>`"/>
        </div>
    </template>
    <template #page-bottom>
        <div class="theme-default-content" style="padding: 0;">
            <div id='div-gpt-ad-1651592405578-0' style='min-width: 320px; min-height: 50px;' v-html="`<script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1651592405578-0'); });</script>`"/>
        </div>
    </template>
  </ParentLayout>
</template>