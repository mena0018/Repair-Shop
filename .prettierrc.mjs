/** @type {import("prettier").Config} */
const baseConfig = {
  semi: false,
  printWidth: 100,
  trailingComma: "none"
}

export default {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cva"]
}
