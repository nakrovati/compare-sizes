<script setup lang="ts">
import TheCanvas from "~/components/Canvas/TheCanvas.vue";
import ItemsList from "~/components/ItemsList/ItemsList.vue";
import ItemsMenu from "~/components/ItemsMenu/ItemsMenu.vue";
import { useDark } from "~/composables/useDark";

useDark();
</script>

<template>
  <main class="intro">
    <TheCanvas />
    <div class="menu-container">
      <ItemsMenu />
      <ItemsList />
    </div>
  </main>
</template>

<style scoped>
.intro {
  display: grid;
  grid-template-rows: 40vh 1fr;
  gap: 1rem;
  padding: 0.5rem;

  @media screen and (width >= 425px) {
    padding: 1rem;
  }

  @media screen and (width >= 1024px) {
    grid-template-rows: 100%;
    grid-template-columns: 6fr 4fr;
    height: 100vh;
    padding: 2rem;
  }
}

.menu-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
