<template>
  <Teleport to="body">
    <div ref="modalOutside" class="modal-outside">
      <div ref="modal" class="modal">
        <span class="text"><slot></slot></span>
        <BaseButton class="button-close" type="button" @click="close"
          >Close</BaseButton
        >
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import BaseButton from "@components/base/BaseButton.vue";

const modalOutside = ref<HTMLDivElement>();

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};

function clickOutside(event: Event) {
  if (event.target == modalOutside.value) {
    close();
  }
}

onMounted(() => {
  window.addEventListener("click", clickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", clickOutside);
});
</script>

<style scoped lang="scss">
.modal-outside {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgb(0 0 0 / 40%);
}

.modal {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 500px;
  padding: 1em;
  margin: 2rem auto;
  background-color: var(--modal-bg);
  border: 1px solid rgb(0 0 0 / 30%);
  border-radius: 10px;
}

.button-close {
  align-self: end;
}
</style>
