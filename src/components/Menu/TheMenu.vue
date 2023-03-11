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
    <TheModal v-if="isModalShown" @close="closeModal">
      Enter the object name, width, height and length
    </TheModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import BaseInput from "@components/base/BaseInput.vue";
import BaseButton from "@components/base/BaseButton.vue";
import BaseSelect from "@components/base/BaseSelect.vue";
import TheModal from "@components/TheModal.vue";
import { useItemsStore } from "@stores/items";
import type { Dimensions, Box } from "@/types/index";
import { getRandomColor, parseItemParams } from "@utils/index";

const isModalShown = ref(false);

function showModla() {
  isModalShown.value = true;
}

function closeModal() {
  isModalShown.value = false;
}

const selectedDimension = ref<Dimensions>("mm");

function changeDimensionAbbr(value: Dimensions) {
  selectedDimension.value = value;
}

interface IDimensions {
  text: string;
  value: Dimensions;
}

const dimensions = [
  { text: "millimeter", value: "mm" },
  { text: "centimeter", value: "cm" },
  { text: "meter", value: "m" },
  { text: "inch", value: "in" },
  { text: "feet", value: "ft" },
  { text: "yards", value: "ya" },
  { text: "miles", value: "mi" },
] satisfies IDimensions[];

const itemName = ref(""),
  inputItemName = ref(),
  itemParams = ref(""),
  inputItemParams = ref();

function changeItemName(value: string) {
  itemName.value = value;
}

function changeItemParams(value: string) {
  itemParams.value = value;
}

const itemsStore = useItemsStore();

function addItem() {
  if (!itemName.value || !itemParams.value) {
    showModla();
    return;
  }

  const data = parseItemParams(itemParams.value);

  if (!data) {
    return;
  }

  const name = itemName.value;
  const { height, width, length } = data;
  const dimensionAbbr = selectedDimension.value;

  let color: string;

  do {
    color = getRandomColor();
  } while (color === itemsStore.lastItemColor);

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
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  align-items: center;
  padding: 1em;
  background-color: var(--menu-bg);
  border-radius: 10px;
  box-shadow: var(--shadow-default);
}
</style>
