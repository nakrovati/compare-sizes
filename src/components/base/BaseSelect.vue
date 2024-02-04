<script setup lang="ts">
const emit = defineEmits<{ "update:modelValue": [value: string] }>();

interface AbbreviationOptions {
  text: string;
  value: string;
}

defineProps<{
  modelValue: string;
  options: AbbreviationOptions[];
}>();

function onInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLSelectElement).value);
}
</script>

<template>
  <select
    :value="modelValue"
    class="base-select"
    name="dimensionAbbreviation"
    @input="onInput"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      class="base-select__option"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<style scoped>
.base-select {
  padding: 0.25em;
  color: var(--text);
  background-color: var(--menu-select-bg);
  border-radius: 5px;
}
</style>
