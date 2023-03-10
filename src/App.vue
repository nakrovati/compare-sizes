<template>
  <main class="intro">
    <TheCanvas></TheCanvas>
    <div class="menu-container">
      <TheMenu></TheMenu>
      <ItemsList></ItemsList>
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
  grid-template-rows: 100%;
  grid-template-columns: 6fr 4fr;
  gap: 20px;
  height: 100vh;
  padding: 40px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-rows: 40vh 1fr;
    grid-template-columns: initial;
    height: unset;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 425px) {
    padding: 10px;
  }
}

.menu-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
