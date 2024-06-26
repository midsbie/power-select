// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["** /*.ts"],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
  ignores: ["**/dist/"],
  languageOptions: {
    globals: {
      console: "readonly",
      process: "readonly",
    },
  },
});
