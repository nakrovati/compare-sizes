<template>
  <div class="item">
    <div>{{ props.name }}</div>
    <div>
      ({{ props.height }}{{ dimensionAbbr }} x {{ props.width
      }}{{ dimensionAbbr }} x {{ props.length }}{{ dimensionAbbr }})
    </div>
    <button
      type="button"
      class="close"
      aria-label="delete item"
      @click="deleteItem"
    >
      <object
        class="close__icon"
        type="image/svg+xml"
        :data="IconXmark"
        aria-hidden="true"
        focusable="false"
        tabindex="-1"
      ></object>
    </button>
  </div>
</template>

<script setup lang="ts">
import IconXmark from "Assets/icons/xmark-solid.svg";
import { computed } from "vue";
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
  box-shadow: shadows.$default;
  color: colors.$text-light;
  padding: 0.5rem;
  position: relative;
}

.close {
  background-color: inherit;
  border: none;
  bottom: 0.5em;
  cursor: pointer;
  padding: 0 6px;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  width: 32px;
  z-index: 2;

  &__icon {
    filter: invert(0.9);
    height: 100%;
    position: relative;
    z-index: -1;
  }
}
</style>
