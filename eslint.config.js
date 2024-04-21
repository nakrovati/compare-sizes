import js from "@eslint/js";
import ts from "typescript-eslint";
import prettier from "eslint-config-prettier";
import vue from "eslint-plugin-vue";
import globals from "globals";

export default [
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
  },
  {
    rules: prettier.rules,
  },
];
