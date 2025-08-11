<script setup lang="ts">
import HomeContent from '@theme/HomeContent.vue'
import HomeFeatures from '@theme/HomeFeatures.vue'
import HomeFooter from '@theme/HomeFooter.vue'
import HomeHero from '@theme/HomeHero.vue'

import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
import { usePageFrontmatter } from '@vuepress/client'
import type { DefaultThemePageFrontmatter } from '@vuepress/theme-default/lib/shared'

const adUnits = useThemeLocaleData().value.adUnits
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
</script>

<template>
    <div class="hero" v-if="frontmatter.hero !== false">
        <HomeHero />
    </div>
    <div v-else style="margin-bottom: 4em;"></div>
    <main class="home" :style="{
        'max-width': frontmatter.extrawide ? 'max(var(--homepage-width), 85vw)' : 'var(--homepage-width)'
    }">
        <HomeFeatures />
        <HomeContent />
        <template v-for="(unit, index) in adUnits" :key="unit">
            <div :id="`waldo-tag-${unit}`"></div>
            <hr v-if="index < adUnits.length"/>
        </template>
        <HomeFooter />
    </main>
</template>

<style lang="scss" scoped>
.hero {
	padding: 2em 0 0;
	display: block;
}

.home {
    max-width: var(--homepage-width);
	padding-top: 1em !important;
}
</style>