<template>
  <button class="base-button" type="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(["click"]);
</script>

<style scoped lang="scss">
.base-button {
  padding: 0.5em 1.5em;
  color: var(--btn-submit-text);
  background-color: var(--btn-submit-bg);
  border: none;
  border-radius: 5px;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background-color: var(--btn-submit-bg-hover);
  }
}
</style>
