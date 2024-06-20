module.exports = {
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],

  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    ".*.cjs",
    "node_modules/",
  ],
  rules: {
    "import/no-unresolved": "off",
    "class-methods-use-this": "off",
    "no-console": "error",
    "import/prefer-default-export": "off",
    "import/exports-last": "error",
    "no-underscore-dangle": ["error", { allow: ["_id", "__env__"] }],
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
