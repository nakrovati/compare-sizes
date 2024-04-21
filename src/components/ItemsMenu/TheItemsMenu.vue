<script setup lang="ts">
import { reactive, ref } from "vue";

import type { Box, Dimensions } from "~/types/index";

import BaseButton from "~/components/base/BaseButton.vue";
import BaseInput from "~/components/base/BaseInput.vue";
import BaseModal from "~/components/base/BaseModal.vue";
import BaseSelect from "~/components/base/BaseSelect.vue";
import { useItemsStore } from "~/stores/items";
import { getRandomColor, parseItemParams } from "~/utils/index";
import { nanoid } from "nanoid";

const isModalShown = ref(false);
const selectedDimension = ref<Dimensions>("mm");
const item = reactive({ name: "", params: "" });
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

const validateForm = () => {
  return item.name && item.params;
};

function addItem() {
  if (!validateForm()) {
    showModal();
    return;
  }

  const data = parseItemParams(item.params);

  if (!data) {
    return;
  }

  const id = nanoid();
  const name = item.name;
  const { height, length, width } = data;
  const dimensionAbbr = selectedDimension.value;

  let color: string;

  do {
    color = getRandomColor();
  } while (color === itemsStore.lastItemColor);

  const newItem: Box = {
    id,
    color,
    dimensionAbbr,
    height,
    length,
    name,
    width,
  };

  itemsStore.addItem(newItem);

  item.name = "";
  item.params = "";
}
</script>

<template>
  <form class="menu" @submit.prevent="addItem">
    <BaseInput v-model="item.name" label="Item name" placeholder="box 1" />
    <BaseInput
      v-model="item.params"
      label="Item params"
      placeholder="width, height, length"
    />
    <BaseSelect v-model="selectedDimension" :options="dimensions" />
    <BaseButton type="submit"> Add item </BaseButton>
    <BaseModal v-if="isModalShown" @close="closeModal">
      Enter the object name, width, height and length
    </BaseModal>
  </form>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  padding: 1rem;
  background-color: var(--menu-bg);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-default);
}
</style>
