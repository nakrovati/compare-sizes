<script setup lang="ts">
import ItemsListItem from "~/components/ItemsList/ItemsListItem.vue";
import { useItemsStore } from "~/stores/items";

const itemsStore = useItemsStore();
</script>

<template>
  <section v-if="itemsStore.items.length" class="item-list">
    <TransitionGroup name="fade">
      <ItemsListItem
        v-for="item in itemsStore.items"
        :key="item.id"
        :item="item"
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
