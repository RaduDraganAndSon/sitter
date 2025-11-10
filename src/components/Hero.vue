<script setup>
import { useCounterStore } from '@/stores/main'
import Icon from './bootrstrap/Icon.vue';
const store = useCounterStore()

</script>

<template>
  <div id="hero" class="container mt-5">
    <div id="hero-container" class="row justify-content-md-center">
      <div class="col-12 ">
        <h1>{{ store.landing.title }}</h1>
        <p class="subtext-width">{{ store.landing.description }}</p>
        <Icon v-for="(value, key) in store.social" :key="key" :icon="key" :url="value"/>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#hero {
  min-height: 60vh;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;

  &-container {
    margin-top: auto;
    margin-bottom: auto;  }

  h1 {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
  
  .subtext-width {
    max-width: 700px;
  }
}
</style>