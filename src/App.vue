<script setup>
import Hero from './components/Hero.vue'

import { useCounterStore } from '@/stores/main'
const store = useCounterStore()
</script>

<template>
  <Hero msg="You did it!" />
  <div class="container">
    <div class="cards">aa</div>
    </div>  
</template>


