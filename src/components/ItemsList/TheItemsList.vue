<script setup lang="ts">
import ItemsListItem from "~/components/ItemsList/ItemsListItem.vue";
import { useItemsStore } from "~/stores/items";

const itemsStore = useItemsStore();
</script>

<template>
  <section v-if="itemsStore.items.length" class="item-list">
    <TransitionGroup>
      <ItemsListItem
        v-for="(item, index) in itemsStore.items"
        :key="index"
        :color="item.color"
        :dimension-abbr="item.dimensionAbbr"
        :height="item.height"
        :index="index"
        :length="item.length"
        :name="item.name"
        :width="item.width"
      />
    </TransitionGroup>
  </section>
</template>

<style scoped>
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
