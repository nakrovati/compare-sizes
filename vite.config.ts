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
            if (id.includes("vue")) return "vendor.vue";
            if (id.includes("pinia")) return "vendor.pinia";
            if (id.includes("three")) return "vendor.three";
            return "vendor.packages";
          }
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "Styles/colors"; @use "Styles/shadows";',
      },
    },
  },
  resolve: {
    alias: {
      Assets: resolve("./src/assets"),
      Components: resolve("./src/components"),
      Helpers: resolve("./src/helpers"),
      Stores: resolve("./src/stores"),
      Styles: resolve("./src/styles"),
      Types: resolve("./src/types"),
      Utils: resolve("./src/utils"),
      "@": resolve("./src"),
    },
  },
  plugins: [vue()],
});
