<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import {
  ClientOnly,
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import type { FunctionalComponent } from 'vue'
import { computed, h } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()
const isDarkMode = useDarkMode()

const heroImage = computed(() => {
  if (isDarkMode.value && frontmatter.value.heroImageDark !== undefined) {
    return frontmatter.value.heroImageDark
  }
  return frontmatter.value.heroImage
})

const heroFilter = computed(() => {
  if (isDarkMode.value && frontmatter.value.heroFilterDark !== undefined) {
    return frontmatter.value.heroFilterDark
  }
  return frontmatter.value.heroFilter
})

const heroColour = computed(() => {
  if (isDarkMode.value && frontmatter.value.heroColourDark !== undefined) {
    return frontmatter.value.heroColourDark
  }
  return frontmatter.value.heroColour
})

const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})

const heroAlt = computed(
  () => frontmatter.value.heroAlt || heroText.value || 'hero'
)

const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }
  return (
    frontmatter.value.tagline ||
    siteLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

const actions = computed(() => {
  if (!isArray(frontmatter.value.actions)) {
    return []
  }

  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})

const HomeHeroImage: FunctionalComponent = () => {
  if (!heroImage.value) return null
  const img = h('img', {
    src: withBase(heroImage.value),
    alt: heroAlt.value,
  })
  if (frontmatter.value.heroImageDark === undefined) {
    return img
  }
  // wrap hero image with <ClientOnly> to avoid ssr-mismatch
  // when using a different hero image in dark mode
  return h(ClientOnly, () => img)
}
</script>

<template>
    <header class="hero heroImage" :style="{
        'background-image': 'linear-gradient(rgba(0, 0, 0, ' + heroFilter + '), rgba(0, 0, 0, ' + heroFilter + ')), url(' + heroImage + ')',
        'background-color': heroColour,
        'margin-top': '26px'
    }">
        <div class="heroWrapper">
            <h1 v-if="heroText" id="main-title">
                {{ heroText }}
            </h1>

            <p v-if="tagline" class="description">
                {{ tagline }}
            </p>

            <p v-if="actions.length" class="actions">
                <!--<AutoLink
                    v-for="action in actions"
                    :key="action.text"
                    class="action-button"
                    :class="[action.type]"
                    :item="action"
                />-->
                <a
                  v-for="action in actions"
                  :key="action.text"
                  class="action-button"
                  :class="[action.type]"
                  :href="action.link"
                >
                  {{ action.text }}
                </a>
            </p>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.heroImage {
	background-size: cover;
	background-repeat: none;
	background-position: center;
	color: #fff;
	text-shadow: 1px 1px 4px rgba(0,0,0,.5);

	h1 {
		padding-left: .5em;
		padding-right: .5em;
		font-size: 3.3em;
		font-weight: 700;
		margin-top: 0;
		margin-bottom: .4em;
	}

	.description {
		padding-left: 1em;
		padding-right: 1em;
		font-size: 1.5em;
		margin-top: 0;
		margin-bottom: 2em;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		padding-left: 1.5em;
		padding-right: 1.5em;

		.action-button {
			margin-bottom: .5em;
			padding-block: .2em;
		}

		.primary {
			background: white;
			color: black;
			mix-blend-mode: screen;
		}
	}
	
	a {
		color: #fff;
		font-size: 1.5em;
		border: 1px solid #fff;
		border-radius: 4px;
		padding: .5em 1em;
		margin-right: .7em;
		transition: all .2s ease-in-out;
		transition-property: all;
		transition-duration: .2s;
		transition-timing-function: ease-in-out;
		transition-delay: 0s;
	}
}
.heroWrapper {
	max-width: var(--homepage-width);
	margin: 0 auto;
	padding-top: 6em;
	padding-bottom: 5.5em;
}
</style>