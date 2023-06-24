<template>
  <div class="menu">
    <BaseInput
      label="Item name"
      :model-value="itemName"
      placeholder="box 1"
      @update:model-value="updateItemNameInputValue"
    />
    <BaseInput
      label="Item params"
      :model-value="itemParams"
      placeholder="width, height, length"
      @update:model-value="updateItemParamsInputValue"
    />
    <BaseSelect :options="dimensions" @toogle="changeDimensionAbbr" />
    <BaseButton @click="addItem"> Add item </BaseButton>
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
import TheModal from "@components/base/BaseModal.vue";
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

const dimensions = [
  { text: "millimeter", value: "mm" },
  { text: "centimeter", value: "cm" },
  { text: "meter", value: "m" },
  { text: "inch", value: "in" },
  { text: "foot", value: "ft" },
  { text: "yards", value: "ya" },
  { text: "miles", value: "mi" },
] satisfies { text: string; value: Dimensions }[];

const itemName = ref("");
const itemParams = ref("");

function updateItemNameInputValue(value: string) {
  itemName.value = value;
}

function updateItemParamsInputValue(value: string) {
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

  itemName.value = "";
  itemParams.value = "";
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
