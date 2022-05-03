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

            <div v-html="`
            <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8267943526926430'
                crossorigin='anonymous'></script>
            <!-- Ad Unit 0 -->
            <ins class='adsbygoogle'
                style='display:block'
                data-ad-client='ca-pub-8267943526926430'
                data-ad-slot='1237978719'
                data-ad-format='auto'
                data-full-width-responsive='true'></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            `"/>
        </div>
    </template>
    <template #page-bottom>
        <div class="theme-default-content" style="padding: 0;">
        </div>
    </template>
  </ParentLayout>
</template>