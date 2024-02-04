<script setup lang="ts">
import { computed } from "vue";

import IconDelete from "~/assets/icons/IconDelete.vue";
import { useItemsStore } from "~/stores/items";
import { Box } from "~/types";

const itemsStore = useItemsStore();

interface Props extends Box {
  index: number;
}

const props = defineProps<Props>();

const color = computed(() => props.color);

function deleteItem() {
  itemsStore.removeItem(props.index);
}
</script>

<template>
  <div class="item">
    <div>{{ name }}</div>
    <div>
      ({{ height }}{{ dimensionAbbr }} x {{ width }}{{ dimensionAbbr }} x
      {{ length }}{{ dimensionAbbr }})
    </div>
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
  background-color: v-bind(color);
  border-radius: 10px;
  box-shadow: var(--shadow-default);
}

.button-delete {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  bottom: 0.5em;
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
