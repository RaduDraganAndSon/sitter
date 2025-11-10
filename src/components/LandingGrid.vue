<template>
  <div class="landing-grid-container">
  <img id="trio-img" src="../assets/trio.png" alt="Landing Grid Background" />
    <slot></slot>
  </div>
</template>

<style scoped>
#trio-img {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 1;
    translate: -100% -100%;
}

.landing-grid-container {
    background-color: #959393;  
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
}
</style>