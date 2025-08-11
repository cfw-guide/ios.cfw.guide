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

const widePage = frontmatter.value.widePage || false
</script>

<template>
  <ParentLayout>
    <template #page-top>
        <h1 id="pageTitle" v-if="!frontmatter.hideTitle">{{ pageTitle }}</h1>
        <div v-if="discordNoticeText" class="custom-container none"><p v-html="discordNoticeText"/></div>
    </template>
    <template #page-bottom>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use '../styles/index.scss';
@use '../styles/palette.scss';
</style>