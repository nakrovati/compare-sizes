<template>
  <select
    v-model="selectedDimension"
    class="select"
    name="dimensionAbbreviation"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      class="select__option"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits(["toogle"]);

interface AbbreviationOptions {
  text: string;
  value: string;
}

const options = ref<AbbreviationOptions[]>([
  { text: "millimeter", value: "mm" },
  { text: "centimeter", value: "cm" },
  { text: "meter", value: "m" },
  { text: "inch", value: "in" },
  { text: "feet", value: "ft" },
  { text: "yards", value: "ya" },
  { text: "miles", value: "mi" },
]);

const selectedDimension = ref("mm");

watch(selectedDimension, () => {
  emit("toogle", selectedDimension.value);
});
</script>

<style scoped lang="scss">
.select {
  background-color: var(--menu-select-bg);
  border-radius: 5px;
  color: var(--text);
  padding: 0.25em;
}
</style>
