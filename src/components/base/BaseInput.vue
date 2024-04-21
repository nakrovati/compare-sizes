<script setup lang="ts">
import { nanoid } from "nanoid";
import { InputHTMLAttributes } from "vue";

withDefaults(
  defineProps<{
    label: string;
    placeholder: string;
    type?: InputHTMLAttributes["type"];
  }>(),
  { type: "text" },
);

const value = defineModel<string>();
const id = nanoid();
</script>

<template>
  <div class="base-input">
    <input
      :id="id"
      v-model="value"
      :placeholder="placeholder"
      class="base-input__input"
      :type="type"
    />
    <label :for="id" class="base-input__label">{{ label }}</label>
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
  padding: 1.5rem 0.5rem 0.5rem;
  color: var(--text);
  background-color: var(--menu-input-bg);
  border-radius: 0.25rem;
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
