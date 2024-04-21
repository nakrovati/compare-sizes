/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "selector-class-pattern":
      "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$",
  },
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      customSyntax: "postcss-html",
      rules: {
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: ["deep", "global", "slotted"],
          },
        ],
        "selector-pseudo-element-no-unknown": [
          true,
          {
            ignorePseudoElements: ["v-deep", "v-global", "v-slotted"],
          },
        ],
        "function-no-unknown": [true, { ignoreFunctions: ["v-bind"] }],
      },
    },
  ],
};
