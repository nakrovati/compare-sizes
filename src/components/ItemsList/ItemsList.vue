<template>
  <section v-if="itemsStore.items.length" class="item-list">
    <TransitionGroup>
      <ItemsListItem
        v-for="(item, index) in itemsStore.items"
        :key="index"
        :index="index"
        :height="item.height"
        :width="item.width"
        :length="item.length"
        :name="item.name"
        :color="item.color"
        :dimension-abbr="item.dimensionAbbr"
      ></ItemsListItem>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import ItemsListItem from "Components/ItemsList/ItemsListItem.vue";
import { useItemsStore } from "Stores/items";

const itemsStore = useItemsStore();
</script>

<style scoped lang="scss">
.item-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
