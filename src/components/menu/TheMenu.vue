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
    <TheSelect @toogle="changeDimensionAbbr"></TheSelect>
    <button class="menu__button-submit" type="button" @click="addItem">
      Add item
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheSelect from "Components/ui/TheSelect.vue";
import { useItemsStore } from "Stores/items";
import { getRandomColor } from "Utils/colorRandomizer";
import validateItemParams from "Utils/validateItemParams";
import type { Box } from "Types/types";

const selectedDimension = ref("mm");

function changeDimensionAbbr(value: string) {
  selectedDimension.value = value;
}

const itemsStore = useItemsStore();
const itemName = ref("");
const itemParams = ref("");

function addItem() {
  if (!itemName.value || !itemParams.value) {
    alert("Enter the object name, height, width and length");
    return;
  }

  const data = validateItemParams(itemParams.value);

  if (!data) {
    return;
  }

  const { height, width, length } = data;
  const name = itemName.value;
  const color = getRandomColor();
  const dimensionAbbr = selectedDimension.value;

  const item: Box = {
    height,
    width,
    length,
    name,
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
  gap: 0.5em;
  padding: 2em;

  .menu__button-submit {
    background-color: var(--btn-submit-bg);
    border: none;
    border-radius: 5px;
    color: var(--btn-submit-text);
    padding: 0.5em 1.5em;

    &:hover {
      background-color: var(--btn-submit-bg-hover);
    }
  }
}

.item {
  max-width: 240px;
  position: relative;
  width: 100%;

  &:first-child {
    margin-bottom: 1em;
  }

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
    color: inherit;
    padding: 1.5em 0.5em 0.5em;
    width: 100%;

    &::placeholder {
      color: var(--menu-input-placeholder);
      opacity: 0;
    }

    &:focus::placeholder {
      opacity: 100;
    }

    &:focus + .item__label,
    &:valid + .item__label {
      font-size: 0.875rem;
      transform: translateY(-200%);
    }
  }
}
</style>
