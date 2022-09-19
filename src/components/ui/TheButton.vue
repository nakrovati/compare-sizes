<template>
  <button class="button" type="button" @click="click">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);

function click() {
  emit("click");
}
</script>

<style scoped lang="scss">
.button {
  background-color: var(--btn-submit-bg);
  border: none;
  border-radius: 5px;
  color: var(--btn-submit-text);
  padding: 0.5em 1.5em;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background-color: var(--btn-submit-bg-hover);
  }
}
</style>
