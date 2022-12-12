<template>
  <div class="menu">
    <div class="item">
      <input
        id="item__name"
        v-model="itemName"
        type="text"
        class="item__input"
        placeholder="box 1"
        required
      />
      <label class="item__label" for="item__name">Item name</label>
    </div>
    <div class="item">
      <input
        id="item__params"
        v-model="itemParams"
        type="text"
        class="item__input"
        placeholder="width, height, length"
        required
      />
      <label class="item__label" for="item__params">Item size</label>
    </div>
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

import BaseButton from "Components/base/BaseButton.vue";
import BaseSelect from "Components/base/BaseSelect.vue";
import TheModal from "Components/TheModal.vue";
import { useItemsStore } from "Stores/items";
import type { Dimensions, Box } from "Types/index";
import { getRandomColor } from "Utils/colorRandomizer";
import validateItemParams from "Utils/itemParamsValidator";

const isOpen = ref(false);

const selectedDimension = ref<Dimensions>("mm");

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

const itemsStore = useItemsStore();
const itemName = ref("");
const itemParams = ref("");

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

  itemName.value = "";
  itemParams.value = "";
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

.item {
  max-width: 240px;
  position: relative;
  width: 100%;

  .item__label {
    bottom: 0;
    left: 0.5rem;
    position: absolute;
    transform: translateY(-50%);
    transition: 0.25s;
  }

  .item__input {
    background-color: var(--menu-input-bg);
    border-radius: 5px;
    padding: 1.5em 0.5em 0.5em;
    width: 100%;

    &::placeholder {
      color: var(--menu-input-placeholder);
      opacity: 0;
    }

    &:focus::placeholder {
      opacity: 1;
    }

    &:focus + .item__label,
    &:valid + .item__label {
      font-size: 0.875rem;
      transform: translateY(-200%);
    }
  }
}
</style>
