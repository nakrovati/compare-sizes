<template>
  <div class="modal-outside">
    <div class="modal-inner">
      <div ref="modal" class="modal">
        <p class="text"><slot class="text"></slot></p>

        <TheButton class="button-close" type="button" @click="close"
          >Close</TheButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import TheButton from "Components/ui/TheButton.vue";

const modal = ref<HTMLDivElement>();

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};

function addClickOutside(event: Event) {
  if (!modal.value) {
    console.error("Modal window not found");
    return;
  }

  if (modal.value !== event.target) {
    close();
  }
}

onMounted(() => {
  setTimeout(() => {
    window.addEventListener("click", addClickOutside);
  }, 1);
});

onUnmounted(() => {
  window.removeEventListener("click", addClickOutside);
});
</script>

<style scoped lang="scss">
.modal-outside {
  background-color: rgb(0 0 0 / 40%);
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  .modal-inner {
    margin: 2rem auto;
    max-width: 500px;
  }
}

.modal {
  background-clip: padding-box;
  background-color: var(--modal-bg);
  border: 1px solid rgb(0 0 0 / 30%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1rem;
  position: relative;

  .text {
    margin: 0;
    padding: 0;
    text-align: center;
  }
}

.button-close {
  align-self: end;
}
</style>
