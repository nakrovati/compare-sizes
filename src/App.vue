<script setup lang="ts">
import TheCanvas from "~/components/Canvas/TheCanvas.vue";
import TheItemsList from "~/components/ItemsList/TheItemsList.vue";
import TheItemsMenu from "~/components/ItemsMenu/TheItemsMenu.vue";
import { useDark } from "~/composables/useDark";

useDark();
</script>

<template>
  <main class="intro">
    <TheCanvas />
    <div class="menu-container">
      <TheItemsMenu />
      <TheItemsList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.intro {
  display: grid;
  grid-template-rows: 40vh 1fr;
  gap: 20px;
  padding: 10px;

  @media screen and (width >= 425px) {
    padding: 20px;
  }

  @media screen and (width >= 1024px) {
    grid-template-rows: 100%;
    grid-template-columns: 6fr 4fr;
    height: 100vh;
    padding: 40px;
  }
}

.menu-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
