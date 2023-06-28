import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import vue from "eslint-plugin-vue";
import globals from "globals";
import vueParser from "vue-eslint-parser";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": ts,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...ts.configs.recommended.rules,
      quotes: ["error", "double"],
    },
  },
  {
    files: ["**/*.vue"],
    plugins: { vue, "@typescript-eslint": ts },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    rules: {
      ...vue.configs["vue3-recommended"].rules,
      ...ts.configs.recommended.rules,
    },
  },
  {
    rules: prettier.rules,
  },
];
