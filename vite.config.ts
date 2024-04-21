import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("three")) return "vendor.three";
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
