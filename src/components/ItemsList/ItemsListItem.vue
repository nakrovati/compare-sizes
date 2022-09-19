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
      <object
        class="button-delete__icon"
        type="image/svg+xml"
        :data="IconXmark"
        aria-hidden="true"
        tabindex="-1"
      ></object>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import IconXmark from "Assets/icons/xmark-solid.svg";
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
.item {
  background-color: v-bind(color);
  border-radius: 10px;
  box-shadow: var(--shadow-default);
  color: var(--item-list-text);
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
    filter: invert(0.9);
    height: 100%;
    position: relative;
    z-index: -1;
  }
}
</style>
