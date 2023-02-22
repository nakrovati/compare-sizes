<template>
  <div class="item">
    <div>{{ name }}</div>
    <div>
      ({{ height }}{{ dimensionAbbr }} x {{ width }}{{ dimensionAbbr }} x
      {{ length }}{{ dimensionAbbr }})
    </div>
    <button
      type="button"
      class="button-delete"
      aria-label="delete item"
      @click="deleteItem"
    >
      <IconDelete
        class="button-delete__icon"
        aria-hidden="true"
        tabindex="-1"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import IconDelete from "@icons/IconDelete.vue";
import { useItemsStore } from "@stores/items";

const itemsStore = useItemsStore();

const props = defineProps({
  index: { type: Number, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  length: { type: Number, required: true },
  name: { type: String, required: true },
  color: { type: String, required: true },
  dimensionAbbr: { type: String, required: true },
});

const color = computed(() => props.color);

function deleteItem() {
  itemsStore.removeItem(props.index);
}
</script>

<style scoped lang="scss">
$item-primary: #f3f3f3;

.item {
  position: relative;
  padding: 0.5rem;
  color: $item-primary;
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

  .button-delete__icon {
    position: relative;
    z-index: -1;
    height: 100%;
    color: $item-primary;
  }
}
</style>
