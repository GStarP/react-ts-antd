module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [],
  ignorePatterns: ["build", "node_modules"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "always"]
  }
};
