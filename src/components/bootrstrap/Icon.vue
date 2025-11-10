<script setup>
defineProps({
  icon: {
    type: String,
    default: 'bi-alarm',
  },
  url: {
    type: String,
  },
})

const replace = (string) => {
  switch (string) {
    case 'substack':
      return 'bi-substack';
    case 'twitter':
      return 'bi-twitter';
    case 'instagram':
      return 'bi-instagram';
    case 'facebook':
      return 'bi-facebook';
    case 'linkedin':
      return 'bi-linkedin';
    case 'github':
      return 'bi-github';
    default:
      return 'bi-alarm';
  }
};
</script>
<template>
  <a v-if="url" :href="url" target="_blank">
    <i :class="['bi', replace(icon), 'me-2']"></i>
  </a>
  <i v-else :class="['bi', replace(icon), 'me-2']"></i>
</template>
