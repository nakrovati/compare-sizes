<script setup lang="ts">
const props = defineProps<{
  label: string;
  placeholder: string;
}>();

const value = defineModel<string>();

const inputId = props.label.split(" ").join("__").toLowerCase();
</script>

<template>
  <div class="base-input">
    <input
      :id="inputId"
      v-model="value"
      :placeholder="placeholder"
      class="base-input__input"
      type="text"
    />
    <label :for="inputId" class="base-input__label">{{ label }}</label>
  </div>
</template>

<style scoped>
.base-input {
  position: relative;
  width: 100%;
  max-width: 240px;
}

.base-input__label {
  position: absolute;
  bottom: 0;
  left: 0.5rem;
  pointer-events: none;
  transition:
    transform 0.25s,
    font-size 0.25s;
  transform: translateY(-50%);
}

.base-input__input {
  width: 100%;
  padding: 1.5em 0.5em 0.5em;
  color: var(--text);
  background-color: var(--menu-input-bg);
  border-radius: 5px;
}

.base-input__input::placeholder {
  color: var(--menu-input-placeholder);
  opacity: 0;
}

.base-input__input:focus::placeholder {
  opacity: 1;
}

.base-input__input:not(:placeholder-shown) + .base-input__label,
.base-input__input:focus + .base-input__label {
  font-size: 0.875rem;
  transform: translateY(-200%);
}
</style>
