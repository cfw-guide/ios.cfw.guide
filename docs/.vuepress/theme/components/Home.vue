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
