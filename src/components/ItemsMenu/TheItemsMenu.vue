<script setup lang="ts">
import { ref } from "vue";

import type { Box, Dimensions } from "~/types/index";

import BaseButton from "~/components/base/BaseButton.vue";
import BaseInput from "~/components/base/BaseInput.vue";
import BaseModal from "~/components/base/BaseModal.vue";
import BaseSelect from "~/components/base/BaseSelect.vue";
import { useItemsStore } from "~/stores/items";
import { getRandomColor, parseItemParams } from "~/utils/index";

const isModalShown = ref(false);
const selectedDimension = ref<Dimensions>("mm");
const itemName = ref("");
const itemParams = ref("");
const itemsStore = useItemsStore();

function showModal() {
  isModalShown.value = true;
}

function closeModal() {
  isModalShown.value = false;
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

function addItem() {
  if (!itemName.value || !itemParams.value) {
    showModal();
    return;
  }

  const data = parseItemParams(itemParams.value);

  if (!data) {
    return;
  }

  const name = itemName.value;
  const { height, length, width } = data;
  const dimensionAbbr = selectedDimension.value;

  let color: string;

  do {
    color = getRandomColor();
  } while (color === itemsStore.lastItemColor);

  const item: Box = {
    color,
    dimensionAbbr,
    height,
    length,
    name,
    width,
  };

  itemsStore.addItem(item);

  itemName.value = "";
  itemParams.value = "";
}
</script>

<template>
  <div class="menu">
    <BaseInput v-model="itemName" label="Item name" placeholder="box 1" />
    <BaseInput
      v-model="itemParams"
      label="Item params"
      placeholder="width, height, length"
    />
    <BaseSelect v-model="selectedDimension" :options="dimensions" />
    <BaseButton @click="addItem"> Add item </BaseButton>
    <BaseModal v-if="isModalShown" @close="closeModal">
      Enter the object name, width, height and length
    </BaseModal>
  </div>
</template>

<style scoped>
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