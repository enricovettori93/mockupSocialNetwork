module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'lines-between-class-members': 'off',
    'max-len': 'off',
    "typescript/no-var-requires": "off",
    "typescript/ban-ts-ignore": 'off',
    "typescript/no-explicit-any": "off",
    "typescript-eslint/no-unused-vars": "off",
    "no-restricted-globals": "off",
    "class-methods-use-this": "off",
  },
};
