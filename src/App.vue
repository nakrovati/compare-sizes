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
import TheCanvas from "Components/TheCanvas.vue";
import TheMenu from "Components/Menu/TheMenu.vue";
import ItemsList from "Components/ItemsList/ItemsList.vue";

if (window.matchMedia("(prefers-color-scheme: dark)").matches)
  document.documentElement.classList.add("dark");
</script>

<style lang="scss" scoped>
.intro {
  display: grid;
  gap: 20px;
  grid-template-columns: 6fr 4fr;
  grid-template-rows: 100%;
  height: 100vh;
  padding: 40px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: initial;
    grid-template-rows: 40vh 1fr;
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
