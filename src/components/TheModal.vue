<template>
  <dialog ref="modal" class="modal">
    <form method="dialog">
      <span class="text"><slot></slot></span>
      <BaseButton class="button-close" type="button" @click="close"
        >Close</BaseButton
      >
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import BaseButton from "@components/base/BaseButton.vue";

const emit = defineEmits(["close"]);
const modal = ref<HTMLDialogElement>();

function close() {
  modal.value?.close();
  emit("close");
}

function clickOutside(event: Event) {
  if (event.target == modal.value) {
    close();
  }
}

onMounted(() => {
  modal.value?.showModal();
  window.addEventListener("click", clickOutside);
});

onUnmounted(() => {
  modal.value?.close();
  window.removeEventListener("click", clickOutside);
});
</script>

<style scoped lang="scss">
.modal {
  padding: 1em;
  margin: 2rem auto;
  color: var(--text);
  background-color: var(--modal-bg);
  border: 1px solid rgb(0 0 0 / 30%);
  border-radius: 10px;

  &::backdrop {
    background-color: rgb(0 0 0 / 40%);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
}

.button-close {
  align-self: end;
}
</style>
