<script setup lang="ts">
import IconDelete from "~/assets/icons/IconDelete.vue";
import { useItemsStore } from "~/stores/items";
import { Box } from "~/types";

const itemsStore = useItemsStore();

interface Props {
  item: Box;
}

const props = defineProps<Props>();

const itemParams = `(${props.item.width}${props.item.dimensionAbbr} x ${props.item.height}${props.item.dimensionAbbr} x ${props.item.length}${props.item.dimensionAbbr})`;

function deleteItem() {
  itemsStore.removeItem(props.item.id);
}
</script>

<template>
  <div class="item" :style="{ backgroundColor: item.color }">
    <div>{{ item.name }}</div>
    <div>{{ itemParams }}</div>
    <button
      aria-label="delete item"
      class="button-delete"
      type="button"
      @click="deleteItem"
    >
      <IconDelete
        aria-hidden="true"
        class="button-delete__icon"
        tabindex="-1"
      />
    </button>
  </div>
</template>

<style scoped>
.item {
  --item-primary: #f3f3f3;

  position: relative;
  padding: 0.5rem;
  color: var(--item-primary);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-default);
}

.button-delete {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 0;
  padding: 0 0.5rem;
  background-color: inherit;
  border: none;
}

.button-delete .button-delete__icon {
  position: relative;
  z-index: -1;
  height: 100%;
  color: var(--item-primary);
}
</style>
