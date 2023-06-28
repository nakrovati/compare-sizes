import { watch } from "vue";

import { usePreferredDark } from "~/composables/usePreferredDark";

export function useDark() {
  const isDark = usePreferredDark();

  watch(isDark, () => {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return isDark;
}
