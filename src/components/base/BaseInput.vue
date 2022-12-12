<template>
  <div class="input-container">
    <input
      :id="inputId"
      v-model="input"
      type="text"
      class="input"
      :placeholder="placeholder"
      required
    />
    <label class="input__label" :for="inputId">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

const inputId = ref(props.label.split(" ").join("__").toLocaleLowerCase());

const emit = defineEmits(["change"]);

const input = ref("");

watch(input, () => {
  emit("change", input.value);
});
</script>

<style scoped lang="scss">
.input-container {
  max-width: 240px;
  position: relative;
  width: 100%;

  .input__label {
    bottom: 0;
    cursor: text;
    left: 0.5rem;
    position: absolute;
    transform: translateY(-50%);
    transition: 0.25s;
  }

  .input {
    background-color: var(--menu-input-bg);
    border-radius: 5px;
    padding: 1.5em 0.5em 0.5em;
    width: 100%;

    &::placeholder {
      color: var(--menu-input-placeholder);
      opacity: 0;
    }

    &:focus::placeholder {
      opacity: 1;
    }

    &:focus + .input__label,
    &:valid + .input__label {
      font-size: 0.875rem;
      transform: translateY(-200%);
    }
  }
}
</style>
