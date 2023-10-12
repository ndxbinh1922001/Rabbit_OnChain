module.exports = {
  extends: ["next/core-web-vitals", "eslint-config-prettier", 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "@typescript-eslint/ban-ts-ignore": "off"
  }
};