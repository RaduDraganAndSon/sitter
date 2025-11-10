<template>
  <footer class="text-dark mt-5">
    <div class="container py-4">
      <div class="row">
        <!-- Brand / About -->
        <div class="col-md-4 mb-3">
          <h5 class="fw-bold">Dragon and Son</h5>
          <p class="small">
            A custom shop from Eindhoven, Netherlands. We make a loft of cool stuff. And this is our place to showcase it to you. If you see anything you like, just get in touch! We do not bite even though we are dragons.
          </p>
        </div>

        <!-- Links -->
        <div class="col-md-4 mb-3">
          <h6 class="fw-bold">Quick Links</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-decoration-none text-dark">Home</a></li>
            <li><a href="#" class="text-decoration-none text-dark">About</a></li>
            <li><a href="#" class="text-decoration-none text-dark">Services</a></li>
            <li><a href="#" class="text-decoration-none text-dark">Contact</a></li>
          </ul>
        </div>

        <!-- Social / Contact -->
        <div class="col-md-4 mb-3">
          <h6 class="fw-bold">Connect</h6>
          <ul class="list-unstyled d-flex gap-3">
            <li>
              <a href="#" class="text-dark">
                <i class="bi bi-linkedin fs-5"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-dark">
                <i class="bi bi-twitter fs-5"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-dark">
                <i class="bi bi-github fs-5"></i>
              </a>
            </li>
          </ul>
          <p class="small mt-2 mb-0">Email:radu@dragon-and-son.com</p>
        </div>
      </div>

      <div class="text-center pt-3 border-top mt-3">
        <small>© {{ new Date().getFullYear() }} Dragon and Son. All rights reserved.</small>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No logic needed unless you want dynamic data
</script>

<style scoped>
footer a:hover {
  text-decoration: underline;
}
</style>
