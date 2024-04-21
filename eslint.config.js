import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import vue from "eslint-plugin-vue";
import globals from "globals";
import ts from "typescript-eslint";

export default [
  perfectionistNatural,
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs["flat/recommended"],
  {
    ignores: ["**/dist/**", "**/public/**"],
  },
  {
    ignores: ["./src/**"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        parser: {
          ts: "@typescript-eslint/parser",
        },
      },
    },
    rules: {
      "perfectionist/sort-vue-attributes": "off",
    },
  },
  {
    rules: prettier.rules,
  },
];
