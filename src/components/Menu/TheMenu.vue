<template>
  <div class="menu">
    <BaseInput
      ref="inputItemName"
      label="Item name"
      placeholder="box 1"
      @change="changeItemName"
    ></BaseInput>
    <BaseInput
      ref="inputItemParams"
      label="Item params"
      placeholder="width, height, length"
      @change="changeItemParams"
    ></BaseInput>
    <BaseSelect
      :options="dimensions"
      @toogle="changeDimensionAbbr"
    ></BaseSelect>
    <BaseButton @click="addItem"> Add item</BaseButton>
    <TheModal v-if="isOpen" @close="isOpen = !isOpen">
      Enter the object name, width, height and length
    </TheModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import BaseInput from "Components/base/BaseInput.vue";
import BaseButton from "Components/base/BaseButton.vue";
import BaseSelect from "Components/base/BaseSelect.vue";
import TheModal from "Components/TheModal.vue";
import { useItemsStore } from "Stores/items";
import type { Dimensions, Box } from "Types/index";
import { getRandomColor } from "Utils/colorRandomizer";
import validateItemParams from "Utils/itemParamsValidator";

const isOpen = ref(false);

const selectedDimension = ref<Dimensions>("mm");
const itemName = ref("");
const inputItemName = ref();
const itemParams = ref("");
const inputItemParams = ref();

const dimensions = [
  { text: "millimeter", value: "mm" },
  { text: "centimeter", value: "cm" },
  { text: "meter", value: "m" },
  { text: "inch", value: "in" },
  { text: "feet", value: "ft" },
  { text: "yards", value: "ya" },
  { text: "miles", value: "mi" },
];

function changeDimensionAbbr(value: Dimensions) {
  selectedDimension.value = value;
}

function changeItemName(value: string) {
  itemName.value = value;
}

function changeItemParams(value: string) {
  itemParams.value = value;
}

const itemsStore = useItemsStore();

function addItem() {
  if (!itemName.value || !itemParams.value) {
    isOpen.value = true;
    return;
  }

  const data = validateItemParams(itemParams.value);

  if (!data) {
    return;
  }

  const name = itemName.value;
  const { height, width, length } = data;
  const color = getRandomColor();
  const dimensionAbbr = selectedDimension.value;

  const item: Box = {
    name,
    width,
    height,
    length,
    color,
    dimensionAbbr,
  };

  itemsStore.addItem(item);

  inputItemName.value.clear();
  inputItemParams.value.clear();
}
</script>

<style scoped lang="scss">
.menu {
  align-items: center;
  background-color: var(--menu-bg);
  border-radius: 10px;
  box-shadow: var(--shadow-default);
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  padding: 1em;
}
</style>
