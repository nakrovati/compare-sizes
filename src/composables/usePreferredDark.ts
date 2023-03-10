import { onMounted, ref } from "vue";

export function usePreferredDark() {
  const isDark = ref(false);

  onMounted(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (preferredTheme.matches) {
      isDark.value = true;
    }

    preferredTheme.addEventListener("change", ({ matches }) => {
      if (matches) {
        isDark.value = true;
      } else {
        isDark.value = false;
      }
    });
  });

  return isDark;
}
