<template>
  <div class="base-input">
    <input
      :id="inputId"
      :value="modelValue"
      type="text"
      class="base-input__input"
      :placeholder="placeholder"
      @input="onInput"
    />
    <label class="base-input__label" :for="inputId">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  label: string;
  placeholder: string;
  modelValue: string;
}>();

const emit = defineEmits<{ "update:modelValue": [value: string] }>();

const inputId = ref(props.label.split(" ").join("__").toLocaleLowerCase());

function onInput(e: Event): void {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<style scoped lang="scss">
.base-input {
  position: relative;
  width: 100%;
  max-width: 240px;

  .base-input__label {
    position: absolute;
    bottom: 0;
    left: 0.5rem;
    cursor: text;
    transition: 0.25s;
    transform: translateY(-50%);
  }

  .base-input__input {
    width: 100%;
    padding: 1.5em 0.5em 0.5em;
    color: var(--text);
    background-color: var(--menu-input-bg);
    border-radius: 5px;

    &::placeholder {
      color: var(--menu-input-placeholder);
      opacity: 0;
    }

    &:focus::placeholder {
      opacity: 1;
    }
  }

  .base-input__input:not(:placeholder-shown) + .base-input__label,
  .base-input__input:focus + .base-input__label {
    font-size: 0.875rem;
    transform: translateY(-200%);
  }
}
</style>
