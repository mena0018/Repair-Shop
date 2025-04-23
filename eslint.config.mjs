import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import("eslint").Linter.Config} */
const nextConfig = [
  ...compat.config({
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'next',
      'next/core-web-vitals',
      'next/typescript',
    ],
    plugins: ['@typescript-eslint', 'import', 'unused-imports'],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['.next/', 'node_modules/', 'src/generated'],
    rules: {
      'react/no-unescaped-entities': 'off',
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

export default nextConfig;
