<script setup>
import Hero from './components/Hero.vue'
import Card from './components/bootrstrap/Card.vue'
import LandingGrid from './components/LandingGrid.vue'
import Footer from './components/Footer.vue'

import { useCounterStore } from '@/stores/main'
const store = useCounterStore()
</script>

<template>
  <Hero />
    <LandingGrid>
      <div id="landing-grid" class="container">
        <Card v-for="article in store.articles" :key="article.title" title="Custom Title" subTitle="Custom Subtitle" />
      </div>
    </LandingGrid>
  <Footer />  
</template>

<style>
#landing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
