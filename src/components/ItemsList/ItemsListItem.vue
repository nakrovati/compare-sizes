<template>
  <div class="item">
    <div>{{ props.name }}</div>
    <div>
      ({{ props.height }}{{ dimensionAbbr }} x {{ props.width
      }}{{ dimensionAbbr }} x {{ props.length }}{{ dimensionAbbr }})
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

import IconDelete from "../../assets/icons/IconDelete.vue";
import { useItemsStore } from "Stores/items";

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
  background-color: v-bind(color);
  border-radius: 10px;
  box-shadow: var(--shadow-default);
  color: $item-primary;
  padding: 0.5rem;
  position: relative;
}

.button-delete {
  background-color: inherit;
  border: none;
  bottom: 0.5em;
  padding: 0 0.5rem;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  z-index: 0;

  .button-delete__icon {
    color: $item-primary;
    height: 100%;
    position: relative;
    z-index: -1;
  }
}
</style>
