import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const baseConfig = [
  ...compat.config({
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint', 'import', 'unused-imports'],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['.next/', 'node_modules/'],
    rules: {
      quotes: ['warn', 'single'],
      'prefer-arrow-callback': 'error',
      'react/no-unescaped-entities': 'off',
      'import/named': 'error',
      'import/default': 'error',

      'import/no-duplicates': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'sort-imports': [
        'warn',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
        },
      ],
    },
  }),
];

/** @type {import("eslint").Linter.Config} */
const nextConfig = [
  ...baseConfig,
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript'],
  }),
];

export default nextConfig;
