<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import BaseButton from "~/components/base/BaseButton.vue";

const emit = defineEmits<{ close: [] }>();
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

<template>
  <dialog ref="modal" class="modal">
    <form method="dialog">
      <span class="text"><slot /></span>
      <BaseButton class="button-close" type="button" @click="close">
        Close
      </BaseButton>
    </form>
  </dialog>
</template>

<style scoped>
.modal {
  padding: 1rem;
  margin: 2rem auto;
  color: var(--text);
  background-color: var(--modal-bg);
  border: 1px solid rgb(0 0 0 / 30%);
  border-radius: 0.5rem;
}

.modal::backdrop {
  background-color: rgb(0 0 0 / 40%);
}

.modal form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-close {
  align-self: end;
}
</style>
