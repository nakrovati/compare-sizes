<template>
  <main class="intro">
    <TheCanvas />
    <div class="menu-container">
      <TheMenu />
      <ItemsList />
    </div>
  </main>
</template>

<script setup lang="ts">
import TheCanvas from "@components/TheCanvas.vue";
import TheMenu from "@components/Menu/TheMenu.vue";
import ItemsList from "@components/ItemsList/ItemsList.vue";
import { useDark } from "@composables/useDark";

useDark();
</script>

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
