<script setup lang="ts">
import HomeContent from '@theme/HomeContent.vue'
import HomeFeatures from '@theme/HomeFeatures.vue'
import HomeFooter from '@theme/HomeFooter.vue'
import HomeHero from '@theme/HomeHero.vue'
</script>

<template>
    <div class="hero">
        <HomeHero />
    </div>
    <main class="home">
        <HomeFeatures />
        <HomeContent />
        <div id='div-gpt-ad-1651592248700-0' style='min-width: 320px; min-height: 50px;' v-html="`<script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1651592248700-0'); });</script>`"/>
        <HomeFooter />
    </main>
</template>

<style scoped>
    .hero {
        padding: 2em 0 0;
        display: block;
    }
    .home {
        padding-top: 1em;
    }
</style>
