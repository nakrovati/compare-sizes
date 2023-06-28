import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { defineConfig } from "vite";

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
  define: { __VUE_OPTIONS_API__: false },
  plugins: [vue()],
  resolve: {
    alias: {
      "~": resolve("./src"),
    },
  },
});
