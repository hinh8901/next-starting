import { FlatCompat } from '@eslint/eslintrc';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    plugins: ['import'],
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      'import/no-duplicates': 'error',
      'react/self-closing-comp': 'warn',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-children-prop': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'external',
            'builtin',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react{,/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next{,/**}',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  }),
  {
    ignores: ['.next', 'node_modules', 'tailwind.config.js'],
  },
];

export default eslintConfig;
