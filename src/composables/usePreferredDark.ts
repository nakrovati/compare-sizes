import { onMounted, onUnmounted, ref } from "vue";

export function usePreferredDark() {
  const isDark = ref(false);

  const isDarkThemePreferred = window.matchMedia(
    "(prefers-color-scheme: dark)",
  );

  function toogleDarkTheme(event: MediaQueryListEvent) {
    isDark.value = event.matches;
  }

  onMounted(() => {
    isDark.value = isDarkThemePreferred.matches;

    isDarkThemePreferred.addEventListener("change", toogleDarkTheme);
  });

  onUnmounted(() => {
    isDarkThemePreferred.removeEventListener("change", toogleDarkTheme);
  });

  return isDark;
}
