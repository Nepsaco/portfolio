<script setup>
import { ref } from "vue";
const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <div class="hexagon">
    <div
      class="hamburger-container"
      :class="{ active: isActive }"
      @click="toggleActive()"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hexagon {
  padding-top: 3px;
  @include hexagon();

  .hamburger-container {
    position: relative;
    margin: auto;
    width: 22px;
    height: 20px;

    span {
      display: block;
      position: absolute;
      height: 4px;
      width: 50%;
      background: $light;
      opacity: 1;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(even) {
        left: 50%;
        border-radius: 0 10px 10px 0;
      }

      &:nth-child(odd) {
        left: 0px;
        border-radius: 10px 0 0 10px;
      }

      &:nth-child(1),
      &:nth-child(2) {
        top: 0;
      }

      &:nth-child(3),
      &:nth-child(4) {
        top: 8px;
      }

      &:nth-child(5),
      &:nth-child(6) {
        top: 16px;
      }
    }

    &.active {
      span {
        &:nth-child(1),
        &:nth-child(6) {
          transform: rotate(45deg);
        }

        &:nth-child(2),
        &:nth-child(5) {
          transform: rotate(-45deg);
        }

        &:nth-child(1) {
          top: 5px;
          left: 3px;
        }

        &:nth-child(2) {
          top: 5px;
          left: calc(50% - 3px);
        }

        &:nth-child(5) {
          left: 3px;
          top: 12px;
        }

        &:nth-child(6) {
          left: calc(50% - 3px);
          top: 12px;
        }

        &:nth-child(3) {
          left: -25%;
          opacity: 0;
        }

        &:nth-child(4) {
          left: 75%;
          opacity: 0;
        }
      }
    }
  }
}
</style>
