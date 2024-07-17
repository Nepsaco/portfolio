<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="main-footer">
    <ul>
      <RouterLink to="#about">about</RouterLink>
      <span>/</span>
      <RouterLink to="#work">work</RouterLink>
      <span>/</span>
      <RouterLink to="#contact">contact</RouterLink>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
.main-footer {
  color: $accent;
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    @include respond-to(desktop) {
      width: 40vw;
    }
    a {
      color: $accent;
      text-decoration: none;
    }
  }
}
</style>
