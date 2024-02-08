<script setup>
const isMobileNavOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item is-size-5">
          Home
        </nuxt-link>
         <nuxt-link to="/about" class="navbar-item is-size-5">
          About
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style>
.router-link-active{
  text-decoration: underline;
}
</style>
