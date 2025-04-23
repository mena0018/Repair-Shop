import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

/** @type {import('eslint').Linter.Config[]} */
const nextConfig = [
  ...compat.config({
    root: true,
    extends: [
      // ⚠️ Order matters: the next line can override rules from the previous line
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    plugins: ["@typescript-eslint", "import", "simple-import-sort"],
    parser: "@typescript-eslint/parser",
    ignorePatterns: [".next/", "node_modules/", "src/generated/"],
    rules: {
      "prefer-arrow-callback": "error",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      "import/no-duplicates": "warn",
      "no-restricted-imports": [
        "error",
        { patterns: [{ group: ["src"], message: "Do not import from src" }] }
      ],

      "import/extensions": "off",
      "import/no-default-export": "error",
      "import/prefer-default-export": "off",
      "simple-import-sort/exports": "warn",

      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // 1. Side effect imports (styles, polyfills, etc.)
            ["^\\u0000"],

            // 2. External packages
            ["^react", "^@?\\w"],

            // 3. Internal aliases
            ["^@/"],

            // 4. Absolute internal paths (config, utils, etc. without "@" alias)
            ["^[^.]"],

            // 5. Relative imports up
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

            // 6. Relative imports down
            ["^\\./(?=.*/)", "^\\.(?!/?$)", "^\\./?$"],

            // 7. Style files
            ["^.+\\.s?css$"]
          ]
        }
      ],
      // BAN TYPES
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: {
            "React.FC":
              "Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177"
          }
        }
      ]
    },
    overrides: [
      {
        files: [
          "./middleware.ts",
          "prisma/**/*.{ts,tsx}",
          "**/*config.{js,mjs,cjs,ts,mts,cts}",
          "app/**/{page,layout,template,loading,error,not-found,global-error}.tsx"
        ],
        rules: {
          "import/no-default-export": "off"
        }
      }
    ]
  })
]

export default nextConfig
