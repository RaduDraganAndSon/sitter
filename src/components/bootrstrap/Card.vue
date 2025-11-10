<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default Title',
  },
  subTitle: {
    type: String,
    default: 'Default Subtitle',
  },
})
</script>

<template>
  <div class="card g-col-4">
    <svg aria-label="Placeholder: Image cap" class="bd-placeholder-img card-img-top" height="180"
      preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image
        cap</text>
    </svg>
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
        content.</p>
    </div>
  </div>
</template>