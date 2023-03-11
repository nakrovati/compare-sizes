import { onMounted, ref } from "vue";

export function usePreferredDark() {
  const isDark = ref(false);

  const isDarkThemePreferred = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  onMounted(() => {
    if (isDarkThemePreferred.matches) {
      isDark.value = true;
    }

    isDarkThemePreferred.addEventListener("change", ({ matches }) => {
      if (matches) {
        isDark.value = true;
      } else {
        isDark.value = false;
      }
    });
  });

  return isDark;
}
