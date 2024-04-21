/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  overrides: [
    {
      customSyntax: "postcss-html",
      files: ["*.vue", "**/*.vue"],
      rules: {
        "function-no-unknown": [true, { ignoreFunctions: ["v-bind"] }],
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: ["deep", "global"],
          },
        ],
        "selector-pseudo-element-no-unknown": [
          true,
          {
            ignorePseudoElements: ["v-deep", "v-global", "v-slotted"],
          },
        ],
      },
    },
  ],
  rules: {
    "selector-class-pattern":
      "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
  },
};
