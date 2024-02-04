<script setup lang="ts">
defineEmits<{ click: [] }>();
</script>

<template>
  <button class="base-button" type="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  padding: 0.5em 1.5em;
  color: var(--btn-submit-text);
  background-color: var(--btn-submit-bg);
  border: none;
  border-radius: 5px;
}

.base-button:active {
  transform: scale(0.9);
}

.base-button:hover {
  background-color: var(--btn-submit-bg-hover);
}
</style>
