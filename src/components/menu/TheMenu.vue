<template>
  <div class="menu">
    <div class="menu__item item">
      <span class="item__name">Item name:</span
      ><input v-model="itemName" type="text" class="item__input" />
    </div>
    <div class="menu__item item">
      <span class="item__name">Item size:</span
      ><input
        v-model="itemParams"
        type="text"
        class="item__input"
        placeholder="height, width, length"
      />
    </div>
    <div class="menu__item item">
      <select
        v-model="selectedDimension"
        class="dimension-abbreviation"
        name="dimensionAbbreviation"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          class="dimension-abbreviation__item"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
    <button class="menu__button-submit" type="button" @click="addItem">
      Add item
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useItemsStore } from "Stores/items";
import { getRandomColor } from "Utils/colorRandomizer";
import validateItemParams from "Utils/validateItemParams";
import type { Box } from "Types/types";

interface AbbreviationOptions {
  text: string;
  value: string;
}

const selectedDimension = ref("mm");
const options = ref<AbbreviationOptions[]>([
  { text: "meter", value: "m" },
  { text: "centimeter", value: "cm" },
  { text: "millimeter", value: "mm" },
  { text: "inch", value: "in" },
]);

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
$button-submit-bg: #2176ff;
$button-submit-bg-hover: #274690;
$button-submit-dark-bg: #1f5da2;
$button-submit-dark-bg-hover: #274690;

.menu {
  align-items: center;
  border-radius: 10px;
  box-shadow: shadows.$default;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;

  .menu__button-submit {
    background-color: $button-submit-bg;
    border: none;
    border-radius: 5px;
    color: colors.$text-light;
    padding: 0.5em 1.5em;

    &:hover {
      background-color: $button-submit-bg;
    }
  }
}

.item {
  .item__name {
    margin-right: 0.5em;
  }

  .item__input {
    border-radius: 5px;
    border-width: 1px;
    padding: 0.5em;
  }
}

.dark {
  .menu {
    background-color: colors.$background-menu-dark;
    box-shadow: none;

    .menu__button-submit {
      background-color: $button-submit-dark-bg;

      &:hover {
        background-color: $button-submit-dark-bg-hover;
      }
    }
  }

  .item .item__input {
    background-color: colors.$input-background-dark;

    &::placeholder {
      color: colors.$input-placeholder-dark;
    }
  }
}
</style>
