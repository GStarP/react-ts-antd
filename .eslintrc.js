module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [],
  ignorePatterns: ['build', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  // 两者共同作用
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}
