<template>
  <section v-if="items.length" class="item-list">
    <ItemsListItem
      v-for="(item, index) in items"
      :key="index"
      :index="index"
      :height="item.height"
      :width="item.width"
      :length="item.length"
      :name="item.name"
      :color="item.color"
      :dimension-abbr="item.dimensionAbbr"
    ></ItemsListItem>
  </section>
</template>

<script setup lang="ts">
import ItemsListItem from "Components/ItemsList/ItemsListItem.vue";
import { useItemsStore } from "Stores/items";

const { items } = useItemsStore();
</script>

<style scoped lang="scss">
.item-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
}
</style>
