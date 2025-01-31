// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: ['@repo/eslint-config/index.js', '@repo/eslint-config/nextjs.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
