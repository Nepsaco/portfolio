<script setup lang="ts">
import Hamburger from "@/components/HamburgerComponent.vue";
</script>

<template>
  <nav class="main-nav">
    <!-- currently not working -->
    <Hamburger />
  </nav>
</template>

<style lang="scss" scoped>
.main-nav {
  display: none;
  position: fixed;
  left: 2rem;
  top: 2rem;
}
</style>
