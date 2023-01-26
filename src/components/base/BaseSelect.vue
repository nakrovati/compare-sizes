<template>
  <select
    v-model="selectedDimension"
    class="base-select"
    name="dimensionAbbreviation"
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

<script setup lang="ts">
import { ref, watch } from "vue";
import type { Dimensions } from "@/types/index";

const emit = defineEmits(["toogle"]);

interface AbbreviationOptions {
  text: string;
  value: string;
}

defineProps<{ options: AbbreviationOptions[] }>();

const selectedDimension = ref<Dimensions>("mm");

watch(selectedDimension, () => {
  emit("toogle", selectedDimension.value);
});
</script>

<style scoped lang="scss">
.base-select {
  background-color: var(--menu-select-bg);
  border-radius: 5px;
  padding: 0.25em;
}
</style>
