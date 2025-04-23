/** @type {import("prettier").Config} */
const baseConfig = {
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine: true,
  printWidth: 100,
  singleAttributePerLine: true,
};

export default {
  ...baseConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cva'],
};
