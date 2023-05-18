import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("@vueuse")) return "vendor.@vueuse";
            if (id.includes("pinia")) return "vendor.pinia";
            if (id.includes("vue")) return "vendor.vue";
            if (id.includes("three")) return "vendor.three";
            return "vendor.packages";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@assets": resolve("./src/assets"),
      "@icons": resolve("./src/assets/icons"),
      "@styles": resolve("./src/assets/styles"),
      "@components": resolve("./src/components"),
      "@composables": resolve("./src/composables"),
      "@helpers": resolve("./src/helpers"),
      "@stores": resolve("./src/stores"),
      "@utils": resolve("./src/utils"),
      "@": resolve("./src"),
    },
  },
  define: { __VUE_OPTIONS_API__: false },
  plugins: [vue()],
});
